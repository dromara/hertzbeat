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

package org.apache.hertzbeat.manager.component.alerter;

import com.google.common.collect.Maps;
import java.util.List;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.apache.hertzbeat.alert.AlerterWorkerPool;
import org.apache.hertzbeat.common.entity.alerter.Alert;
import org.apache.hertzbeat.common.entity.manager.NoticeReceiver;
import org.apache.hertzbeat.common.entity.manager.NoticeRule;
import org.apache.hertzbeat.common.entity.manager.NoticeTemplate;
import org.apache.hertzbeat.common.queue.CommonDataQueue;
import org.apache.hertzbeat.manager.config.PluginConfig;
import org.apache.hertzbeat.manager.service.NoticeConfigService;
import org.apache.hertzbeat.manager.support.exception.AlertNoticeException;
import org.apache.hertzbeat.manager.support.exception.IgnoreException;
import org.apache.hertzbeat.plugin.Plugin;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.stereotype.Component;

/**
 * Alarm information storage and distribution
 */
@Component
@Slf4j
public class DispatcherAlarm implements InitializingBean {
    private static final int DISPATCH_THREADS = 3;

    private final AlerterWorkerPool workerPool;
    private final CommonDataQueue dataQueue;
    private final NoticeConfigService noticeConfigService;
    private final AlertStoreHandler alertStoreHandler;
    private final Map<Byte, AlertNotifyHandler> alertNotifyHandlerMap;
    private final PluginConfig pluginConfig;

    public DispatcherAlarm(AlerterWorkerPool workerPool,
                           CommonDataQueue dataQueue,
                           NoticeConfigService noticeConfigService,
                           AlertStoreHandler alertStoreHandler,
                           List<AlertNotifyHandler> alertNotifyHandlerList,
                           PluginConfig pluginConfig) {
        this.workerPool = workerPool;
        this.dataQueue = dataQueue;
        this.noticeConfigService = noticeConfigService;
        this.alertStoreHandler = alertStoreHandler;
        alertNotifyHandlerMap = Maps.newHashMapWithExpectedSize(alertNotifyHandlerList.size());
        this.pluginConfig = pluginConfig;
        alertNotifyHandlerList.forEach(r -> alertNotifyHandlerMap.put(r.type(), r));
    }

    @Override
    public void afterPropertiesSet() {
        // Start alarm distribution
        DispatchTask dispatchTask = new DispatchTask();
        for (int i = 0; i < DISPATCH_THREADS; i++) {
            workerPool.executeJob(dispatchTask);
        }
    }

    /**
     * send alert msg to receiver
     *
     * @param receiver receiver
     * @param alert    alert msg
     * @return send success or failed
     */
    public boolean sendNoticeMsg(NoticeReceiver receiver, NoticeTemplate noticeTemplate, Alert alert) {
        if (receiver == null || receiver.getType() == null) {
            log.warn("DispatcherAlarm-sendNoticeMsg params is empty alert:[{}], receiver:[{}]", alert, receiver);
            return false;
        }
        byte type = receiver.getType();
        if (alertNotifyHandlerMap.containsKey(type)) {
            alertNotifyHandlerMap.get(type).send(receiver, noticeTemplate, alert);
            return true;
        }
        return false;
    }

    private NoticeReceiver getOneReceiverById(Long id) {
        return noticeConfigService.getOneReceiverById(id);
    }

    private NoticeTemplate getOneTemplateById(Long id) {
        return noticeConfigService.getOneTemplateById(id);
    }

    private List<NoticeRule> matchNoticeRulesByAlert(Alert alert) {
        return noticeConfigService.getReceiverFilterRule(alert);
    }

    private class DispatchTask implements Runnable {

        @Override
        public void run() {
            while (!Thread.currentThread().isInterrupted()) {
                try {
                    Alert alert = dataQueue.pollAlertsData();
                    if (alert != null) {
                        // Determining alarm type storage
                        alertStoreHandler.store(alert);
                        // Notice distribution
                        sendNotify(alert);
                        // Execute the plugin
                        List<Object> beans = pluginConfig.getBean();
                        for (Object bean : beans) {
                            if (bean instanceof Plugin) {
                                ((Plugin) bean).execute(alert);
                            }
                        }
                    }
                } catch (IgnoreException ignored) {
                } catch (InterruptedException e) {
                    log.error(e.getMessage());
                } catch (Exception exception) {
                    log.error(exception.getMessage(), exception);
                }
            }
        }

        private void sendNotify(Alert alert) {
            List<NoticeRule> noticeRules = matchNoticeRulesByAlert(alert);
            // todo Send notification here temporarily single thread
            if (noticeRules != null) {
                for (NoticeRule rule : noticeRules) {
                    try {
                        if (rule.getTemplateId() == null) {
                            List<Long> receiverIdList = rule.getReceiverId();
                            for (Long receiverId : receiverIdList) {
                                sendNoticeMsg(getOneReceiverById(receiverId),
                                        null, alert);
                            }
                        } else {
                            List<Long> receiverIdList = rule.getReceiverId();
                            for (Long receiverId : receiverIdList) {
                                sendNoticeMsg(getOneReceiverById(receiverId),
                                    getOneTemplateById(rule.getTemplateId()), alert);
                            }
                        }
                    } catch (AlertNoticeException e) {
                        log.warn("DispatchTask sendNoticeMsg error, message: {}", e.getMessage());
                    }
                }
            }
        }
    }

}
