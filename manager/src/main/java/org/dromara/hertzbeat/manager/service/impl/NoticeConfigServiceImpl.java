/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.dromara.hertzbeat.manager.service.impl;

import org.dromara.hertzbeat.common.cache.CacheFactory;
import org.dromara.hertzbeat.common.cache.ICacheService;
import org.dromara.hertzbeat.common.entity.alerter.Alert;
import org.dromara.hertzbeat.common.constants.CommonConstants;
import org.dromara.hertzbeat.common.entity.manager.NoticeTemplate;
import org.dromara.hertzbeat.manager.component.alerter.DispatcherAlarm;
import org.dromara.hertzbeat.manager.dao.NoticeReceiverDao;
import org.dromara.hertzbeat.manager.dao.NoticeRuleDao;
import org.dromara.hertzbeat.common.entity.manager.NoticeReceiver;
import org.dromara.hertzbeat.common.entity.manager.NoticeRule;
import org.dromara.hertzbeat.manager.dao.NoticeTemplateDao;
import org.dromara.hertzbeat.manager.service.NoticeConfigService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.*;
import java.util.stream.Collectors;
/**
 * 消息通知配置实现
 *
 * @author tom
 *
 */
@Service
@Transactional(rollbackFor = Exception.class)
@Slf4j
@NoRepositoryBean
public class NoticeConfigServiceImpl implements NoticeConfigService {

    private static final String ALERT_TEST_TARGET = "Test Target";

    private static final String ALERT_TEST_CONTENT = "test send msg! \n This is the test data. It is proved that it can be received successfully";

    @Autowired
    private NoticeReceiverDao noticeReceiverDao;

    @Autowired
    private NoticeRuleDao noticeRuleDao;
    @Autowired
    private NoticeTemplateDao noticeTemplateDao;
    @Autowired
    @Lazy
    private DispatcherAlarm dispatcherAlarm;


    @Override
    public List<NoticeReceiver> getNoticeReceivers(Specification<NoticeReceiver> specification) {
        return noticeReceiverDao.findAll(specification);
    }

    @Override
    public List<NoticeTemplate> getNoticeTemplates(Specification<NoticeTemplate> specification) {
        return noticeTemplateDao.findAll(specification);
    }

    @Override
    public List<NoticeRule> getNoticeRules(Specification<NoticeRule> specification) {
        return noticeRuleDao.findAll(specification);
    }

    @Override
    public void addReceiver(NoticeReceiver noticeReceiver) {
        noticeReceiverDao.save(noticeReceiver);
    }

    @Override
    public void editReceiver(NoticeReceiver noticeReceiver) {
        noticeReceiverDao.save(noticeReceiver);
    }

    @Override
    public void deleteReceiver(Long receiverId) {
        noticeReceiverDao.deleteById(receiverId);
    }

    @Override
    public void addNoticeRule(NoticeRule noticeRule) {
        noticeRuleDao.save(noticeRule);
        clearNoticeRulesCache();
    }

    @Override
    public void editNoticeRule(NoticeRule noticeRule) {
        noticeRuleDao.save(noticeRule);
        clearNoticeRulesCache();
    }

    @Override
    public void deleteNoticeRule(Long ruleId) {
        noticeRuleDao.deleteById(ruleId);
        clearNoticeRulesCache();
    }
    @Override
    @SuppressWarnings("unchecked")
    public List<NoticeReceiver> getReceiverFilterRule(Alert alert) {
        // use cache
        ICacheService<String, Object> noticeCache = CacheFactory.getNoticeCache();
        List<NoticeRule> rules = (List<NoticeRule>) noticeCache.get(CommonConstants.CACHE_NOTICE_RULE);
        if (rules == null) {
            rules = noticeRuleDao.findNoticeRulesByEnableTrue();
            noticeCache.put(CommonConstants.CACHE_NOTICE_RULE, rules);
        }

        // The temporary rule is to forward all, and then implement more matching rules: alarm status selection, monitoring type selection, etc.
        // 规则是全部转发, 告警状态选择, 监控类型选择等(按照tags标签和告警级别过滤匹配)
        Set<Long> filterReceivers = rules.stream()
                .filter(rule -> {
                    LocalDateTime nowDate = LocalDateTime.now();
                    // filter day
                    int currentDayOfWeek = nowDate.toLocalDate().getDayOfWeek().getValue();
                    if (rule.getDays() != null && !rule.getDays().isEmpty()) {
                        boolean dayMatch = rule.getDays().stream().anyMatch(item -> item == currentDayOfWeek);
                        if (!dayMatch) {
                            return false;
                        }
                    }
                    // filter time
                    if (rule.getPeriodStart() != null && rule.getPeriodEnd() != null) {
                        LocalTime nowTime = nowDate.toLocalTime();

                        if (nowTime.isBefore(rule.getPeriodStart().toLocalTime())
                                || nowTime.isAfter(rule.getPeriodEnd().toLocalTime())) {
                            return false;
                        }
                    }

                    if (rule.isFilterAll()) {
                        return true;
                    }
                    // filter priorities
                    if (rule.getPriorities() != null && !rule.getPriorities().isEmpty()) {
                        boolean priorityMatch = rule.getPriorities().stream().anyMatch(item -> item != null && item == alert.getPriority());
                        if (!priorityMatch) {
                            return false;
                        }
                    }
                    // filter tags
                    if (rule.getTags() != null && !rule.getTags().isEmpty()) {
                        return rule.getTags().stream().anyMatch(tagItem -> {
                            if (!alert.getTags().containsKey(tagItem.getName())) {
                                return false;
                            }
                            String alertTagValue = alert.getTags().get(tagItem.getName());
                            return Objects.equals(tagItem.getValue(), alertTagValue);
                        });
                    }
                    return true;
                })
                .map(NoticeRule::getReceiverId)
                .collect(Collectors.toSet());
        return noticeReceiverDao.findAllById(filterReceivers);
    }

    public List<Long> getReceiverIdFilterRule(Alert alert) {
        // use cache
        ICacheService<String, Object> noticeCache = CacheFactory.getNoticeCache();
        List<NoticeRule> rules = (List<NoticeRule>) noticeCache.get(CommonConstants.CACHE_NOTICE_RULE);
        if (rules == null) {
            rules = noticeRuleDao.findNoticeRulesByEnableTrue();
            noticeCache.put(CommonConstants.CACHE_NOTICE_RULE, rules);
        }

        // The temporary rule is to forward all, and then implement more matching rules: alarm status selection, monitoring type selection, etc.
        // 规则是全部转发, 告警状态选择, 监控类型选择等(按照tags标签和告警级别过滤匹配)
        List<Long> filterReceivers = rules.stream()
                .filter(rule -> {
                    LocalDateTime nowDate = LocalDateTime.now();
                    // filter day
                    int currentDayOfWeek = nowDate.toLocalDate().getDayOfWeek().getValue();
                    if (rule.getDays() != null && !rule.getDays().isEmpty()) {
                        boolean dayMatch = rule.getDays().stream().anyMatch(item -> item == currentDayOfWeek);
                        if (!dayMatch) {
                            return false;
                        }
                    }
                    // filter time
                    if (rule.getPeriodStart() != null && rule.getPeriodEnd() != null) {
                        LocalTime nowTime = nowDate.toLocalTime();

                        if (nowTime.isBefore(rule.getPeriodStart().toLocalTime())
                                || nowTime.isAfter(rule.getPeriodEnd().toLocalTime())) {
                            return false;
                        }
                    }

                    if (rule.isFilterAll()) {
                        return true;
                    }
                    // filter priorities
                    if (rule.getPriorities() != null && !rule.getPriorities().isEmpty()) {
                        boolean priorityMatch = rule.getPriorities().stream().anyMatch(item -> item != null && item == alert.getPriority());
                        if (!priorityMatch) {
                            return false;
                        }
                    }
                    // filter tags
                    if (rule.getTags() != null && !rule.getTags().isEmpty()) {
                        return rule.getTags().stream().anyMatch(tagItem -> {
                            if (!alert.getTags().containsKey(tagItem.getName())) {
                                return false;
                            }
                            String alertTagValue = alert.getTags().get(tagItem.getName());
                            return Objects.equals(tagItem.getValue(), alertTagValue);
                        });
                    }
                    return true;
                })
                .map(NoticeRule::getReceiverId)
                .collect(Collectors.toList());

        return filterReceivers;
    }
    public NoticeReceiver getOneReciverByIdInFilterRule(List<Long> ids){
        return noticeReceiverDao.findAllById(ids).get(0);
    }
    public NoticeTemplate getOneTemplateByIdInFilterRule(List<Long> ids){
        return noticeTemplateDao.findAllById(ids).get(0);
    }
    public List<Long> getTemplateIdFilterRule(Alert alert) {
        // use cache
        ICacheService<String, Object> noticeCache = CacheFactory.getNoticeCache();
        List<NoticeRule> rules = (List<NoticeRule>) noticeCache.get(CommonConstants.CACHE_NOTICE_RULE);
        if (rules == null) {
            rules = noticeRuleDao.findNoticeRulesByEnableTrue();
            noticeCache.put(CommonConstants.CACHE_NOTICE_RULE, rules);
        }

        // The temporary rule is to forward all, and then implement more matching rules: alarm status selection, monitoring type selection, etc.
        // 规则是全部转发, 告警状态选择, 监控类型选择等(按照tags标签和告警级别过滤匹配)
        List<Long> filterTemplates = rules.stream()
                .filter(rule -> {
                    LocalDateTime nowDate = LocalDateTime.now();
                    // filter day
                    int currentDayOfWeek = nowDate.toLocalDate().getDayOfWeek().getValue();
                    if (rule.getDays() != null && !rule.getDays().isEmpty()) {
                        boolean dayMatch = rule.getDays().stream().anyMatch(item -> item == currentDayOfWeek);
                        if (!dayMatch) {
                            return false;
                        }
                    }
                    // filter time
                    if (rule.getPeriodStart() != null && rule.getPeriodEnd() != null) {
                        LocalTime nowTime = nowDate.toLocalTime();

                        if (nowTime.isBefore(rule.getPeriodStart().toLocalTime())
                                || nowTime.isAfter(rule.getPeriodEnd().toLocalTime())) {
                            return false;
                        }
                    }

                    if (rule.isFilterAll()) {
                        return true;
                    }
                    // filter priorities
                    if (rule.getPriorities() != null && !rule.getPriorities().isEmpty()) {
                        boolean priorityMatch = rule.getPriorities().stream().anyMatch(item -> item != null && item == alert.getPriority());
                        if (!priorityMatch) {
                            return false;
                        }
                    }
                    // filter tags
                    if (rule.getTags() != null && !rule.getTags().isEmpty()) {
                        return rule.getTags().stream().anyMatch(tagItem -> {
                            if (!alert.getTags().containsKey(tagItem.getName())) {
                                return false;
                            }
                            String alertTagValue = alert.getTags().get(tagItem.getName());
                            return Objects.equals(tagItem.getValue(), alertTagValue);
                        });
                    }
                    return true;
                })
                .map(NoticeRule::getTemplateId)
                .collect(Collectors.toList());
        return filterTemplates;

    }


    @Override
    public NoticeReceiver getReceiverById(Long receiverId) {
        return noticeReceiverDao.getReferenceById(receiverId);
    }

    @Override
    public NoticeRule getNoticeRulesById(Long ruleId) {
        return noticeRuleDao.getReferenceById(ruleId);
    }

    @Override
    public void addNoticeTemplate(NoticeTemplate noticeTemplate) {
        noticeTemplateDao.save(noticeTemplate);
        clearNoticeRulesCache();
    }

    @Override
    public void editNoticeTemplate(NoticeTemplate noticeTemplate) {
        noticeTemplateDao.save(noticeTemplate);
        clearNoticeRulesCache();
    }

    @Override
    public void deleteNoticeTemplate(Long templateId) {
        noticeTemplateDao.deleteById(templateId);
        clearNoticeRulesCache();
    }

    @Override
    public NoticeTemplate getNoticeTemplatesById(Long templateId) {
        return noticeTemplateDao.getReferenceById(templateId);
    }

    @Override
    public boolean sendTestMsg(NoticeReceiver noticeReceiver) {
        Alert alert = new Alert();
        alert.setTarget(ALERT_TEST_TARGET);
        alert.setContent(ALERT_TEST_CONTENT);
        alert.setTriggerTimes(1);
        alert.setFirstAlarmTime(System.currentTimeMillis());
        alert.setLastAlarmTime(System.currentTimeMillis());
        alert.setPriority(CommonConstants.ALERT_PRIORITY_CODE_CRITICAL);
        Byte type=noticeReceiver.getType();
        NoticeTemplate noticeTemplate=getNoticeTemplatesById(Long.valueOf(type));;
        return dispatcherAlarm.sendNoticeMsg(noticeReceiver,noticeTemplate, alert);
    }

    private void clearNoticeRulesCache() {
        ICacheService<String, Object> noticeCache = CacheFactory.getNoticeCache();
        noticeCache.remove(CommonConstants.CACHE_NOTICE_RULE);
    }
}
