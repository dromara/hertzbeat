"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[44727],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>s});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=m(n),s=a,g=d["".concat(p,".").concat(s)]||d[s]||u[s]||o;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20927:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const o={id:"pop3",title:"Monitoring POP3",sidebar_label:"POP3 Monitor",keywords:["open source monitoring tool","open source java monitoring tool","monitoring POP3 metrics"]},i=void 0,l={unversionedId:"help/pop3",id:"help/pop3",title:"Monitoring POP3",description:"Collect and monitor the general performance Metrics of POP3.",source:"@site/docs/help/pop3.md",sourceDirName:"help",slug:"/help/pop3",permalink:"/docs/help/pop3",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/pop3.md",tags:[],version:"current",frontMatter:{id:"pop3",title:"Monitoring POP3",sidebar_label:"POP3 Monitor",keywords:["open source monitoring tool","open source java monitoring tool","monitoring POP3 metrics"]},sidebar:"docs",previous:{title:"Nginx Monitor",permalink:"/docs/help/nginx"},next:{title:"SMTP Monitor",permalink:"/docs/help/smtp"}},p={},m=[{value:"Enable POP3 Service",id:"enable-pop3-service",level:3},{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1aemail_status",id:"metrics-setemail_status",level:4}],c={toc:m};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of POP3.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Protocol Use\uff1aPOP3")),(0,a.kt)("h3",{id:"enable-pop3-service"},"Enable POP3 Service"),(0,a.kt)("p",null,"If you want to monitor information in 'POP3' with this monitoring type, you just need to open ",(0,a.kt)("inlineCode",{parentName:"p"},"POP3")," service in your mail server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\u3001Open ",(0,a.kt)("inlineCode",{parentName:"strong"},"POP3")," Service:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"\u4ee5qq\u90ae\u7bb1\u4e3a\u4f8b\u3010\u5176\u5b83\u90ae\u7bb1\u7c7b\u4f3c\u3011\uff1a\n    1. \u70b9\u51fb`\u8bbe\u7f6e`\u9009\u9879\n    2. \u9009\u62e9`\u8d26\u53f7`\n    3. \u627e\u5230\u5f00\u542fSMTP/POP3/IMAP\u9009\u9879\uff0c\u5e76\u5f00\u542f\n    4. \u5f97\u5230POP3\u670d\u52a1\u5668\u57df\u540d\uff0c\u7aef\u53e3\u53f7\uff0c\u4ee5\u53ca\u6388\u6743\u7801\u3010\u5f00\u542fSMTP/POP3/IMAP\u670d\u52a1\u540e\uff0cqq\u90ae\u7bb1\u63d0\u4f9b\u3011\n    5. \u901a\u8fc7POP3\u670d\u52a1\u5668\u57df\u540d\uff0c\u7aef\u53e3\u53f7\uff0cqq\u90ae\u7bb1\u8d26\u53f7\u4ee5\u53ca\u6388\u6743\u7801\u8fde\u63a5POP3\u670d\u52a1\u5668\uff0c\u91c7\u96c6\u76d1\u63a7\u6307\u6807\n")),(0,a.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port provided by POP3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL"),(0,a.kt)("td",{parentName:"tr",align:null},"POP3 If enabled SSL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Allow collection response time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.kt)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,a.kt)("h4",{id:"metrics-setemail_status"},"Metrics Set\uff1aemail_status"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"email_count"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Number of emails")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mailbox_size"),(0,a.kt)("td",{parentName:"tr",align:null},"kb"),(0,a.kt)("td",{parentName:"tr",align:null},"The total size of emails in the mailbox")))))}u.isMDXComponent=!0}}]);