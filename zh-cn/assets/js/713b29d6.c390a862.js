"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[43530],{3905:(t,e,a)=>{a.d(e,{Zo:()=>i,kt:()=>N});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},i=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,p(p({ref:e},i),{},{components:a})):n.createElement(g,p({ref:e},i))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,p=new Array(l);p[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,p[1]=o;for(var m=2;m<l;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73536:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={id:"hadoop",title:"\u76d1\u63a7\uff1aHadoop",sidebar_label:"Hadoop",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90JAVA\u76d1\u63a7","Hadoop\u7684JVM\u865a\u62df\u673a\u76d1\u63a7"]},p=void 0,o={unversionedId:"help/hadoop",id:"help/hadoop",title:"\u76d1\u63a7\uff1aHadoop",description:"\u5bf9Hadoop\u7684JVM\u865a\u62df\u673a\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/hadoop.md",sourceDirName:"help",slug:"/help/hadoop",permalink:"/zh-cn/docs/help/hadoop",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/help/hadoop.md",tags:[],version:"current",frontMatter:{id:"hadoop",title:"\u76d1\u63a7\uff1aHadoop",sidebar_label:"Hadoop",keywords:["\u5f00\u6e90\u76d1\u63a7\u7cfb\u7edf","\u5f00\u6e90JAVA\u76d1\u63a7","Hadoop\u7684JVM\u865a\u62df\u673a\u76d1\u63a7"]},sidebar:"docs",previous:{title:"DORIS\u6570\u636e\u5e93FE",permalink:"/zh-cn/docs/help/doris_fe"},next:{title:"IoTDB\u6570\u636e\u5e93",permalink:"/zh-cn/docs/help/iotdb"}},d={},m=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:3},{value:"Hadoop\u5e94\u7528\u5f00\u542fJMX\u534f\u8bae\u6b65\u9aa4",id:"hadoop\u5e94\u7528\u5f00\u542fjmx\u534f\u8bae\u6b65\u9aa4",level:4},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u96c6\u5408\uff1amemory_pool",id:"\u6307\u6807\u96c6\u5408memory_pool",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1acode_cache (\u9650JDK8\u53ca\u4ee5\u4e0b)",id:"\u6307\u6807\u96c6\u5408code_cache-\u9650jdk8\u53ca\u4ee5\u4e0b",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1aclass_loading",id:"\u6307\u6807\u96c6\u5408class_loading",level:4},{value:"\u6307\u6807\u96c6\u5408\uff1athread",id:"\u6307\u6807\u96c6\u5408thread",level:4}],i={toc:m};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5bf9Hadoop\u7684JVM\u865a\u62df\u673a\u7684\u901a\u7528\u6027\u80fd\u6307\u6807\u8fdb\u884c\u91c7\u96c6\u76d1\u63a7")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u534f\u8bae\uff1aJMX")),(0,r.kt)("h3",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u5728 Hadoop \u5e94\u7528\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"JMX")," \u670d\u52a1\uff0cHertzBeat \u4f7f\u7528 JMX \u534f\u8bae\u5bf9Hadoop\u4e2d\u7684 JVM \u8fdb\u884c\u6307\u6807\u91c7\u96c6\u3002")),(0,r.kt)("h4",{id:"hadoop\u5e94\u7528\u5f00\u542fjmx\u534f\u8bae\u6b65\u9aa4"},"Hadoop\u5e94\u7528\u5f00\u542fJMX\u534f\u8bae\u6b65\u9aa4"),(0,r.kt)("p",null,"\u5e94\u7528\u542f\u52a8\u65f6\u6dfb\u52a0JVM\u53c2\u6570 \u26a0\ufe0f\u6ce8\u610f\u53ef\u81ea\u5b9a\u4e49\u66b4\u9732\u7aef\u53e3,\u5bf9\u5916IP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1.\u8fdb\u5165hadoop-env.sh\u914d\u7f6e\u6587\u4ef6\uff0c\u5728\u547d\u4ee4\u884c\u7ec8\u7aef\u8f93\u5165\u4ee5\u4e0b\u547d\u4ee4\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"vi $HADOOP_HOME/etc/hadoop/hadoop-env.sh\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"2.\u6dfb\u52a0\u5982\u4e0b\u53c2\u6570\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"<port>")," \u4e3a\u81ea\u5b9a\u4e49\u66b4\u9732\u7aef\u53e3\u53f7\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export HADOOP_OPTS= "$HADOOP_OPTS\n-Djava.rmi.server.hostname=\u5bf9\u5916ip\u5730\u5740 \n-Dcom.sun.management.jmxremote.port=9999\n-Dcom.sun.management.jmxremote.ssl=false\n-Dcom.sun.management.jmxremote.authenticate=false " \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"3.\u4fdd\u5b58\u5e76\u9000\u51fa\uff0c\u5e76\u5728 $HADOOP_HOME/sbin \u76ee\u5f55\u4e0b\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"start-all.sh")," \u91cd\u542f\u670d\u52a1\u3002")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7Host"),(0,r.kt)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u5bf9\u7aefIPV4\uff0cIPV6\u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u5e26\u534f\u8bae\u5934(eg: https://, http://)\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4efb\u52a1\u540d\u79f0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u540d\u79f0\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eJVM\u8fde\u63a5\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms\u6beb\u79d2\uff0c\u9ed8\u8ba43000\u6beb\u79d2\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"JMX\u8fde\u63a5\u5bc6\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u95f4\u9694\u65f6\u95f4\uff0c\u5355\u4f4d\u79d2\uff0c\u53ef\u8bbe\u7f6e\u7684\u6700\u5c0f\u95f4\u9694\u4e3a30\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u63a2\u6d4b\u68c0\u67e5\u76d1\u63a7\u53ef\u7528\u6027\uff0c\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u4fee\u6539\u64cd\u4f5c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u591a\u6807\u8bc6\u548c\u63cf\u8ff0\u6b64\u76d1\u63a7\u7684\u5907\u6ce8\u4fe1\u606f\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u8fd9\u91cc\u5907\u6ce8\u4fe1\u606f")))),(0,r.kt)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408memory_pool"},"\u6307\u6807\u96c6\u5408\uff1amemory_pool"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408code_cache-\u9650jdk8\u53ca\u4ee5\u4e0b"},"\u6307\u6807\u96c6\u5408\uff1acode_cache (\u9650JDK8\u53ca\u4ee5\u4e0b)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"committed"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u603b\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"init"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u521d\u59cb\u5316\u5927\u5c0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"used"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u4f7f\u7528")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408class_loading"},"\u6307\u6807\u96c6\u5408\uff1aclass_loading"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u52a0\u8f7d\u7c7b\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5386\u53f2\u5df2\u52a0\u8f7d\u7c7b\u603b\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u52a0\u8f7d\u7c7b\u6570\u91cf")))),(0,r.kt)("h4",{id:"\u6307\u6807\u96c6\u5408thread"},"\u6307\u6807\u96c6\u5408\uff1athread"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6307\u6807\u5e2e\u52a9\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5df2\u7ecf\u5f00\u59cb\u7684\u7ebf\u7a0b\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672a\u52a0\u8f7d\u7c7b\u6570\u91cf")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e2a"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5b88\u62a4\u8fdb\u7a0b\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,r.kt)("td",{parentName:"tr",align:null},"ms"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528CPU\u65f6\u95f4")))))}u.isMDXComponent=!0}}]);