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

package org.apache.hertzbeat.manager.dao;

import java.util.HashSet;
import java.util.Set;
import org.apache.hertzbeat.common.entity.manager.TagMonitorBind;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * TagMonitorBindDao repository
 */
public interface TagMonitorBindDao extends JpaRepository<TagMonitorBind, Long>, JpaSpecificationExecutor<TagMonitorBind> {

    /**
     * delete tags bind by monitor id
     * @param monitorId monitorId
     */
    void deleteTagMonitorBindsByMonitorId(Long monitorId);

    /**
     * delete tags bind by monitor id
     * @param monitorIds monitor list
     */
    void deleteTagMonitorBindsByMonitorIdIn(Set<Long> monitorIds);


    /**
     * count tags bind relation by tag id
     * @param tagIds list of tagId
     * @return count
     */
    long countByTagIdIn(HashSet<Long> tagIds);

}
