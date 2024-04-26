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

package org.apache.hertzbeat.manager.service.impl;

import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.nio.charset.StandardCharsets;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.DumperOptions;
import org.yaml.snakeyaml.Yaml;

/**
 * Configure the import and export Yaml format
 */
@Slf4j
@Service
public class YamlImExportServiceImpl extends AbstractImExportServiceImpl{
    public static final String TYPE = "YAML";
    public static final String FILE_SUFFIX = ".yaml";


    /**
     * Export file type
     * @return file type
     */
    @Override
    public String type() {
        return TYPE;
    }

    /**
     * Get Export File Name
     * @return file name
     */
    @Override
    public String getFileName() {
        return fileNamePrefix() + FILE_SUFFIX;
    }

    /**
     * Parsing an input stream into a form
     * @param is input stream
     * @return form
     */
    @Override
    List<ExportMonitorDTO> parseImport(InputStream is) {
        // todo now disable this, will enable it in the future.
        // upgrade to snakeyaml 2.2 and springboot3.x to fix the issue
        Yaml yaml = new Yaml();
        return yaml.load(is);
    }

    /**
     * Export Configuration to Output Stream
     * @param monitorList configuration list
     * @param os          output stream
     *
     */
    @Override
    void writeOs(List<ExportMonitorDTO> monitorList, OutputStream os) {
        DumperOptions options = new DumperOptions();
        options.setDefaultFlowStyle(DumperOptions.FlowStyle.BLOCK);
        options.setIndent(2);
        options.setPrettyFlow(true);
        Yaml yaml = new Yaml(options);
        yaml.dump(monitorList, new OutputStreamWriter(os, StandardCharsets.UTF_8));
    }
}
