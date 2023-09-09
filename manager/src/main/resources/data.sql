insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (4,'weworkExample',4,now(),now(),'[${title}]
${targetLabel} : ${target}
<#if (monitorId??)>${monitorIdLabel} : ${monitorId} </#if>
<#if (monitorName??)>${monitorNameLabel} : ${monitorName} </#if>
${priorityLabel} : ${priority}
${triggerTimeLabel} : ${triggerTime}
${contentLabel} : ${content}');

insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (5,'dingdingExample',5,now(),now(),'#### [${title}]
##### **${targetLabel}** : ${target}
<#if (monitorId??)>##### **${monitorIdLabel}** : ${monitorId} </#if>
<#if (monitorName??)>##### **${monitorNameLabel}** : ${monitorName} </#if>
##### **${priorityLabel}** : ${priority}
##### **${triggerTimeLabel}** : ${triggerTime}
##### **${contentLabel}** : ${content}');

insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (6,'feishuExample',6,now(),now(),'${targetLabel} : ${target}
<#if (monitorId??)>${monitorIdLabel} : ${monitorId} </#if>
<#if (monitorName??)>${monitorNameLabel} : ${monitorName} </#if>
${priorityLabel} : ${priority}
${triggerTimeLabel} : ${triggerTime}
${contentLabel} : ${content}');

insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (7,'telegramExample',7,now(),now(),'[${title}]
${targetLabel} : ${target}
<#if (monitorId??)>${monitorIdLabel} : ${monitorId} </#if>
<#if (monitorName??)>${monitorNameLabel} : ${monitorName} </#if>
${priorityLabel} : ${priority}
${triggerTimeLabel} : ${triggerTime}
${contentLabel} : ${content}');


insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (8,'slackExample',8,now(),now(),'*[${title}]*
${targetLabel} : ${target}
<#if (monitorId??)>${monitorIdLabel} : ${monitorId} </#if>
<#if (monitorName??)>${monitorNameLabel} : ${monitorName} </#if>
${priorityLabel} : ${priority}
${triggerTimeLabel} : ${triggerTime}
${contentLabel} : ${content}');

insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (9,'discordExample',9,now(),now(),'${targetLabel} : ${target}
<#if (monitorId??)>${monitorIdLabel} : ${monitorId} </#if>
<#if (monitorName??)>${monitorNameLabel} : ${monitorName} </#if>
${priorityLabel} : ${priority}
${triggerTimeLabel} : ${triggerTime}
${contentLabel} : ${content}');


insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (11,'smnExample',11,now(),now(),'[${title}]
${targetLabel} : ${target}
<#if (monitorId??)>${monitorIdLabel} : ${monitorId} </#if>
<#if (monitorName??)>${monitorNameLabel} : ${monitorName} </#if>
${priorityLabel} : ${priority}
${triggerTimeLabel} : ${triggerTime}
${contentLabel} : ${content}');

insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (12,'serverchanExample',12,now(),now(),'#### [${title}]
##### **${targetLabel}** : ${target}
<#if (monitorId??)>##### **${monitorIdLabel}** : ${monitorId} </#if>
<#if (monitorName??)>##### **${monitorNameLabel}** : ${monitorName} </#if>
##### **${priorityLabel}** : ${priority}
##### **${triggerTimeLabel}** : ${triggerTime}
##### **${contentLabel}** : ${content}');

insert IGNORE into hzb_notice_template(`id`,`name`,`type`,`gmt_create`,`gmt_update`,`template_content`) values (1,'emailExample',1,now(),now(),'<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:th="http://www.thymeleaf.org" lang="en">
<head>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <style type="text/css">
        /*** BMEMBF Start ***/
        /* CMS V4 Editor Test */
        [name=bmeMainBody] {
            min-height: 1000px;
        }

        @media only screen and (max-width: 480px) {
            table.blk, table.tblText, .bmeHolder, .bmeHolder1, table.bmeMainColumn {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td.tblCell {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td.tblCell {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.tblGtr {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.blk_container, .blk_parent, .bmeLeftColumn, .bmeRightColumn, .bmeColumn1, .bmeColumn2, .bmeColumn3, .bmeBody {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.container-table, .bmeheadertext, .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .mobile-footer, .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table.share-tbl {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table.share-tbl td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeShareTD, td.bmeSocialTD {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.tdBoxedTextBorder {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            th.tdBoxedTextBorder {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.blk, table[name=tblText], .bmeHolder, .bmeHolder1, table[name=bmeMainColumn] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td[name=tblCell] {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell] {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td[name=tblCell] {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table[name=tblGtr] {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.blk_container, .blk_parent, [name=bmeLeftColumn], [name=bmeRightColumn], [name=bmeColumn1], [name=bmeColumn2], [name=bmeColumn3], [name=bmeBody] {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table[class=container-table], .bmeheadertext, .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .mobile-footer, .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table[class="share-tbl"] {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table[class="share-tbl"] td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td[name=bmeShareTD], td[name=bmeSocialTD] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td[name=tdBoxedTextBorder] {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            th[name=tdBoxedTextBorder] {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 20px !important;
                clear: both;
                float: left !important;
                border-collapse: separate;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageContainer {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable td {
                padding: 0px !important;
                height: auto;
            }
        }

        @media only screen and (max-width: 480px) {
            img.mobile-img-large {
                width: 100% !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.bmeRSSImage {
                max-width: 320px;
                height: auto !important;
            }
        }

        @media only screen and (min-width: 640px) {
            img.bmeRSSImage {
                max-width: 600px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .trMargin img {
                height: 10px;
            }
        }

        @media only screen and (max-width: 480px) {
            div.bmefooter, div.bmeheader {
                display: block !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.blk_parent1, table.tblPart {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tblLine {
                min-width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblCenter img {
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblCenter, .bmeMblCenter div, .bmeMblCenter span {
                text-align: center !important;
                text-align: -webkit-center !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeNoBr br, .bmeImageGutterRow, .bmeMblStackCenter .bmeShareItem .tdMblHide {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable, .bmeMblInline table.bmeCaptionTable, .bmeMblInline {
                clear: none !important;
                width: 50% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInlineHide, .bmeShareItem .trMargin {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable img, .bmeMblShareCenter.tblContainer.mblSocialContain, .bmeMblFollowCenter.tblContainer.mblSocialContain {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack > .bmeShareItem {
                width: 100% !important;
                clear: both !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItem {
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart.bmeMblStackCenter, .bmeMblStackCenter .bmeFollowItemIcon {
                padding: 0px !important;
                text-align: center !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter > .bmeShareItem {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeMblCenter {
                border: 0 none transparent !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeLinkTable.tdPart td {
                padding-left: 0px !important;
                padding-right: 0px !important;
                border: 0px none transparent !important;
                padding-bottom: 15px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdMblHide {
                width: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItemBtn {
                display: table !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack td {
                text-align: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack .bmeFollowItem {
                clear: both !important;
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItemText {
                padding-left: 5px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItem {
                clear: both !important;
                align-self: center;
                float: none !important;
                padding-top: 10px;
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart > table {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart > table.bmeLinkContainer {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart.mblStackCenter > table.bmeLinkContainer {
                width: 100% !important;
            }
        }

        .blk_parent:first-child, .blk_parent {
            float: left;
        }

        .blk_parent:last-child {
            float: right;
        }

        /*** BMEMBF END ***/

    </style>
    <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>
<body topmargin="0" leftmargin="0"
      style="height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;">
<style type="text/css">
    body {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .blk_img_drop_link a {
        color: #16a7e0;
        cursor: pointer;
        font-weight: 600;
        margin-left: 5px;
        text-decoration: underline;
        text-transform: lowercase;
    }

    .blk_img_drop_link a:hover {
        color: #72c2a1;
    }

    .blk_img_drop_link.no-dd span {
        display: none;
    }

    .blk_img_drop_link.no-dd a {
        font-size: 14px;
        display: inline-block;
        margin-left: 0;
        padding: 0;
    }

    .ie8 .blk_img_drop_link.no-dd a {
        padding-top: 20px;
    }

    @media screen {
        @media (min-width: 0px) {
        }
    }
</style>

<table width="100%" cellspacing="0" cellpadding="0" border="0" name="bmeMainBody"
       style="background-color: rgb(230, 230, 232);" bgcolor="#e6e6e8">
    <tbody>
    <tr>
        <td width="100%" valign="top" align="center">
            <table cellspacing="0" cellpadding="0" border="0" name="bmeMainColumnParentTable">
                <tbody>
                <tr>
                    <td name="bmeMainColumnParent" style="border-collapse: separate;">
                        <table name="bmeMainColumn" class="bmeHolder bmeMainColumn"
                               style="max-width: 600px; overflow: visible;" cellspacing="0" cellpadding="0" border="0"
                               align="center">
                            <tbody>
                            <tr id="section_1" class="flexible-section" data-columns="1"
                                data-section-type="bmePreHeader">
                                <td width="100%" class="blk_container bmeHolder" name="bmePreHeader" valign="top"
                                    align="center"
                                    style="color: rgb(56, 56, 56); background-color: rgb(230, 230, 232);   "
                                    bgcolor="#e6e6e8">
                                    <div id="dv_10" class="blk_wrapper" style="">
                                        <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk"
                                               name="blk_boxtext">
                                            <tbody>
                                            <tr>
                                                <td align="center" name="bmeBoxContainer"
                                                    style="padding-left:20px; padding-right:20px; padding-top:20px; padding-bottom:20px;">
                                                    <table cellspacing="0" cellpadding="0" width="100%" name="tblText"
                                                           class="tblText" border="0">
                                                        <tbody>
                                                        <tr>
                                                            <td valign="top" align="left"
                                                                style="padding: 20px; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 14px; color: rgb(56, 56, 56); border-width: 1px; border-style: solid; border-color: rgb(225, 225, 225);  border-collapse: collapse; word-break: break-word;"
                                                                name="tblCell" class="tblCell">
                                                                <div style="line-height: 150%; text-align: center;">
                                                                    <span style="color: #a666ed; font-size: 30px; line-height: 150%;"><strong>HertzBeat</strong></span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td width="100%" class="bmeHolder" valign="top" align="center"
                                    name="bmeMainContentParent"
                                    style="border-color: rgb(128, 128, 128); border-radius: 5px; border-collapse: separate; border-spacing: 0px;">
                                    <table name="bmeMainContent"
                                           style="border-radius: 5px; border-collapse: separate;border-spacing: 0px; overflow: hidden;"
                                           width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                        <tbody>
                                        <tr id="section_2" class="flexible-section" data-columns="1">
                                            <td width="100%" class="blk_container bmeHolder" name="bmeHeader"
                                                valign="top" align="center"
                                                style="background-color: rgb(255, 255, 255);   " bgcolor="#ffffff">
                                            </td>
                                        </tr>
                                        <tr id="section_3" class="flexible-section" data-columns="1">
                                            <td width="100%" class="blk_container bmeHolder bmeBody" name="bmeBody"
                                                valign="top" align="center"
                                                style="color: rgb(56, 56, 56); background-color: rgb(255, 255, 255);   "
                                                bgcolor="#ffffff">
                                                <div id="dv_1" class="blk_wrapper" style="">
                                                    <table class="blk" name="blk_text" width="600" border="0"
                                                           cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <table cellpadding="0" cellspacing="0" border="0"
                                                                       width="100%" class="bmeContainerRow">
                                                                    <tbody>
                                                                    <tr>
                                                                        <th valign="top" align="center" class="tdPart"
                                                                            style="">
                                                                            <table name="tblText" style="float: left;"
                                                                                   align="left" border="0"
                                                                                   cellpadding="0" cellspacing="0"
                                                                                   class="tblText" width="600">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td name="tblCell"
                                                                                        style="padding: 20px; font-size: 14px; font-weight: 400; font-family: Arial, Helvetica, sans-serif; color: rgb(56, 56, 56); text-align: left; word-break: break-word;"
                                                                                        align="left" valign="top"
                                                                                        class="tblCell">
                                                                                        <div style="line-height: 150%;">
                                                                                            <span style="font-size: 30px; line-height: 150%;">
                                                                                                <strong >${nameTitle}</strong>
                                                                                            </span>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                <div id="dv_3" class="blk_wrapper" style="">
                                                    <table class="blk" name="blk_text" width="600" border="0"
                                                           cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <table cellpadding="0" cellspacing="0" border="0"
                                                                       width="100%" class="bmeContainerRow">
                                                                    <tbody>
                                                                    <tr>
                                                                        <th valign="top" align="center" class="tdPart"
                                                                            style="background-color: rgba(0, 0, 0, 0);">
                                                                            <table name="tblText"
                                                                                   style="float: left; background-color: rgba(0, 0, 0, 0);"
                                                                                   align="left" border="0"
                                                                                   cellpadding="0" cellspacing="0"
                                                                                   class="tblText" width="600">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td name="tblCell"
                                                                                        style="padding: 20px; font-size: 14px; font-weight: 400; font-family: Arial, Helvetica, sans-serif; color: rgb(56, 56, 56); text-align: left; word-break: break-word;"
                                                                                        align="left" valign="top"
                                                                                        class="tblCell">
                                                                                        <div style="line-height: 200%; font-size: 14px;">
                                                                                            <table>
                                                                                                <tr>
                                                                                                    <td align="right"
                                                                                                        style="padding-right: 10px;
                                                                                                        color: #817878;
                                                                                                        font-weight: 500;">
                                                                                                        <span>
                                                                                                            ${nameTarget}
                                                                                                        </span>
                                                                                                    </td>
                                                                                                    <td><span
                                                                                                            >${target}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="right"
                                                                                                        style="padding-right: 10px; color: #817878; font-weight: 500;">
                                                                                                        <span >
                                                                                                            ${nameMonitorId}
                                                                                                        </span>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <span>${monitorId}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="right"
                                                                                                        style="padding-right: 10px; color: #817878; font-weight: 500;">
                                                                                                        <span>
                                                                                                            ${nameMonitorName}
                                                                                                        </span>
                                                                                                    </td>
                                                                                                    <td>
                                                                                                        <span>${monitorName}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="right"
                                                                                                        style="padding-right: 10px; color: #817878; font-weight: 500;">
                                                                                                        <span>
                                                                                                            ${namePriority}
                                                                                                        </span>
                                                                                                    </td>
                                                                                                    <td><span
                                                                                                            >${priority}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                                <tr>
                                                                                                    <td align="right"
                                                                                                        style="padding-right: 10px; color: #817878; font-weight: 500;">
                                                                                                        <span>
                                                                                                            ${nameTriggerTime}
                                                                                                        </span>
                                                                                                    </td>
                                                                                                    <td><span
                                                                                                            >${lastTriggerTime}</span>
                                                                                                    </td>
                                                                                                </tr>
                                                                                            </table>
                                                                                            <br><span
                                                                                                >${content}</span>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </th>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div id="dv_4" class="blk_wrapper" style="">
                                                    <table class="blk" name="blk_button" width="600" border="0"
                                                           cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                        <tr>
                                                            <td width="20"></td>
                                                            <td align="center">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                       border="0" class="tblContainer">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td height="10"></td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td align="left">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                   border="0" align="left"
                                                                                   class="bmeButton"
                                                                                   style="border-collapse: separate;">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td class="bmeButtonText"
                                                                                        style="border-radius: 5px; border-width: 0px; border-style: none; border-color: transparent; background-color: rgb(166, 102, 237); text-align: center; padding: 20px 40px; font-weight: bold; word-break: break-word;">
                                                                                        <span style="font-family:Arial, Verdana; font-size:14px;color:#FFFFFF;"><a
                                                                                                target="_blank"
                                                                                                style="color:#FFFFFF;text-decoration:none;"
                                                                                                href="${consoleUrl}"
                                                                                                data-link-type="web">${nameConsole}</a></span>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td height="10"></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td width="20"></td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="section_4" class="flexible-section" data-columns="1">
                                            <td width="100%" class="blk_container bmeHolder" name="bmePreFooter"
                                                valign="top" align="center"
                                                style="background-color: rgb(255, 255, 255);   " bgcolor="#ffffff">
                                                <div id="dv_5" class="blk_wrapper">
                                                    <table cellspacing="0" cellpadding="0" border="0" name="blk_divider"
                                                           width="600" class="blk">
                                                        <tbody>
                                                        <tr>
                                                            <td style="padding-top:10px; padding-bottom:10px;padding-left:20px;padding-right:20px;"
                                                                class="tblCellMain">
                                                                <table width="100%" cellspacing="0" cellpadding="0"
                                                                       border="0"
                                                                       style="border-top: 1px solid rgb(225, 225, 225); min-width: 1px;"
                                                                       class="tblLine">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td><span></span></td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div id="dv_6" class="blk_wrapper" style="">
                                                    <table cellspacing="0" cellpadding="0" border="0" style=""
                                                           name="blk_social_follow" width="600" class="blk">
                                                        <tbody>
                                                        <tr>
                                                            <td class="tblCellMain"
                                                                style="padding-top:10px; padding-bottom:10px; padding-left:20px; padding-right:20px;">
                                                                <table class="tblContainer mblSocialContain"
                                                                       cellspacing="0" cellpadding="0" border="0"
                                                                       align="left" style="">
                                                                    <tbody>
                                                                    <tr>
                                                                        <td class="tdItemContainer">
                                                                            <table cellspacing="0" cellpadding="0"
                                                                                   border="0" class="mblSocialContain"
                                                                                   style="table-layout: auto;">
                                                                                <tbody>
                                                                                <tr>
                                                                                    <td valign="top" name="bmeSocialTD">
                                                                                        <!--[if gte mso 6]></td>
                                                                                    <td align="left" valign="top">
                                                                                        <![endif]-->
                                                                                        <table cellspacing="0"
                                                                                               cellpadding="0"
                                                                                               border="0"
                                                                                               class="bmeFollowItem"
                                                                                               type="website"
                                                                                               style="float:left;"
                                                                                               align="left">
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="middle"
                                                                                                    class="bmeFollowItemText"
                                                                                                    style="padding-right:10px;font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; text-align: left;">
                                                                                                    <a href="https://clt1416649.bmetrack.com/c/l?u=D77E008&amp;e=13E20B0&amp;c=159DC9&amp;t=1&amp;l=77D3334A&amp;email=JYL7PF5c87g0WhC3NaLnunzBjzlZ2TJR&amp;seq=2"
                                                                                                       target="_blank"
                                                                                                       style="text-decoration:none;">
                                                                                                        <div style="font-family:Arial, Verdana; font-size:14px; font-weight:400; font-style:normal; text-decoration:none solid rgb(150,63,250);color:rgb(150,63,250);">
                                                                                                            tancloud.cn
                                                                                                        </div>
                                                                                                    </a></td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                        <!--[if gte mso 6]></td>
                                                                                    <td align="left" valign="top">
                                                                                        <![endif]-->
                                                                                        <table cellspacing="0"
                                                                                               cellpadding="0"
                                                                                               border="0"
                                                                                               class="bmeFollowItem"
                                                                                               type="website"
                                                                                               style="float:left;"
                                                                                               align="left">
                                                                                            <tbody>
                                                                                            <tr>
                                                                                                <td align="left"
                                                                                                    valign="middle"
                                                                                                    class="bmeFollowItemText"
                                                                                                    style="font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: normal; text-align: left;">
                                                                                                    <a href="https://clt1416649.bmetrack.com/c/l?u=D77E009&amp;e=13E20B0&amp;c=159DC9&amp;t=1&amp;l=77D3334A&amp;email=JYL7PF5c87g0WhC3NaLnunzBjzlZ2TJR&amp;seq=2"
                                                                                                       target="_blank"
                                                                                                       style="text-decoration:none;">
                                                                                                        <div style="font-family:Arial, Verdana; font-size:14px; font-weight:400; font-style:normal; text-decoration:none solid rgb(150,63,250);color:rgb(150,63,250);">
                                                                                                            hertzbeat.com
                                                                                                        </div>
                                                                                                    </a></td>
                                                                                            </tr>
                                                                                            </tbody>
                                                                                        </table>
                                                                                    </td>
                                                                                </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
</body>
</html>');





