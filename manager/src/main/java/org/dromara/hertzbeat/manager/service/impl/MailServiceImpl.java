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

import freemarker.cache.StringTemplateLoader;
import freemarker.template.Configuration;
import freemarker.template.TemplateException;
import org.dromara.hertzbeat.alert.AlerterProperties;
import org.dromara.hertzbeat.common.entity.alerter.Alert;
import org.dromara.hertzbeat.common.constants.CommonConstants;
import org.dromara.hertzbeat.common.entity.manager.NoticeTemplate;
import org.dromara.hertzbeat.common.util.ResourceBundleUtil;
import org.dromara.hertzbeat.manager.service.MailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.annotation.Resource;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

/**
 * Mailbox sending service interface implementation class
 * 邮箱发送服务接口实现类
 *
 * @author 花城
 * @version 1.0
 *
 */
@Slf4j
@Service
public class MailServiceImpl implements MailService {

    @Resource
    private AlerterProperties alerterProperties;

    private ResourceBundle bundle = ResourceBundleUtil.getBundle("alerter");
    @Override
    public String buildAlertHtmlTemplate(final Alert alert, NoticeTemplate noticeTemplate) throws IOException, TemplateException {
        String monitorId = null;
        String monitorName = null;
        if (alert.getTags() != null) {
            monitorId = alert.getTags().get(CommonConstants.TAG_MONITOR_ID);
            monitorName = alert.getTags().get(CommonConstants.TAG_MONITOR_NAME);
        }
        monitorId = monitorId == null? "External Alarm, No ID" : monitorId;
        monitorName = monitorName == null? "External Alarm, No Name" : monitorName;
        // Introduce thymeleaf context parameters to render pages
        StringTemplateLoader stringLoader = new StringTemplateLoader();
        String freemarkerTemplate= noticeTemplate.getTemplateContent();
        String mailTemplate = "mailTemplate";
        stringLoader.putTemplate(mailTemplate, freemarkerTemplate);
        Configuration cfg = new Configuration();
        cfg.setTemplateLoader(stringLoader);
        freemarker.template.Template templateMail = cfg.getTemplate(mailTemplate, Locale.CHINESE);
        Map<String, String> model = new HashMap<>(16);
        model.put("nameTitle",  bundle.getString("alerter.notify.title"));
        model.put("nameMonitorId",  bundle.getString("alerter.notify.monitorId"));
        model.put("nameMonitorName",  bundle.getString("alerter.notify.monitorName"));
        model.put("target",  alert.getTarget());
        model.put("monitorId", monitorId);
        model.put("monitorName",  monitorName);
        model.put("nameTarget",   bundle.getString("alerter.notify.target"));
        model.put("nameConsole",  bundle.getString("alerter.notify.console"));
        model.put("namePriority",  bundle.getString("alerter.notify.priority"));
        model.put("priority",   bundle.getString("alerter.priority." + alert.getPriority()));
        model.put("nameTriggerTime", bundle.getString("alerter.notify.triggerTime"));
        model.put("consoleUrl", alerterProperties.getConsoleUrl());
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String triggerTime = simpleDateFormat.format(new Date(alert.getLastAlarmTime()));
        model.put("lastTriggerTime",triggerTime);
        model.put("nameContent", bundle.getString("alerter.notify.content"));
        model.put("content", alert.getContent());
        String template = FreeMarkerTemplateUtils.processTemplateIntoString(templateMail, model);
        return template;
    }

}
