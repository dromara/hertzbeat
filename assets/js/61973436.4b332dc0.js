"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[3071],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84106:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"nginx",title:"Monitoring Nginx",sidebar_label:"Nginx Monitor",keywords:["open source monitoring tool","open source java monitoring tool","monitoring nginx metrics"]},o=void 0,i={unversionedId:"help/nginx",id:"help/nginx",title:"Monitoring Nginx",description:"Collect and monitor the general performance Metrics of Nginx.",source:"@site/docs/help/nginx.md",sourceDirName:"help",slug:"/help/nginx",permalink:"/docs/help/nginx",draft:!1,editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/docs/help/nginx.md",tags:[],version:"current",frontMatter:{id:"nginx",title:"Monitoring Nginx",sidebar_label:"Nginx Monitor",keywords:["open source monitoring tool","open source java monitoring tool","monitoring nginx metrics"]},sidebar:"docs",previous:{title:"SSL Monitor",permalink:"/docs/help/ssl_cert"},next:{title:"POP3 Monitor",permalink:"/docs/help/pop3"}},s={},p=[{value:"Need Enable <code>ngx_http_stub_status_module</code> And <code>ngx_http_reqstat_module</code> Module",id:"need-enable-ngx_http_stub_status_module-and-ngx_http_reqstat_module-module",level:3},{value:"Enable <code>ngx_http_stub_status_module</code>",id:"enable-ngx_http_stub_status_module",level:3},{value:"Enable <code>ngx_http_reqstat_module</code>",id:"enable-ngx_http_reqstat_module",level:3},{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1anginx_status",id:"metrics-setnginx_status",level:4},{value:"Metrics Set\uff1areq_status",id:"metrics-setreq_status",level:4}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of Nginx.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Protocol Use\uff1aNginx")),(0,r.kt)("h3",{id:"need-enable-ngx_http_stub_status_module-and-ngx_http_reqstat_module-module"},"Need Enable ",(0,r.kt)("inlineCode",{parentName:"h3"},"ngx_http_stub_status_module")," And ",(0,r.kt)("inlineCode",{parentName:"h3"},"ngx_http_reqstat_module")," Module"),(0,r.kt)("p",null,"If you want to monitor information in 'Nginx' with this monitoring type, you need to modify your nginx configure file for enable the module monitor."),(0,r.kt)("h3",{id:"enable-ngx_http_stub_status_module"},"Enable ",(0,r.kt)("inlineCode",{parentName:"h3"},"ngx_http_stub_status_module")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Check if ",(0,r.kt)("inlineCode",{parentName:"li"},"ngx_http_stub_status_module")," has been added")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nginx -V\n")),(0,r.kt)("p",null,"View whether it contains ",(0,r.kt)("inlineCode",{parentName:"p"},"--with-http_stub_status_module"),", if not, you need to recompile and install Nginx."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Compile and install Nginx, add ",(0,r.kt)("inlineCode",{parentName:"li"},"ngx_http_stub_status_module")," module")),(0,r.kt)("p",null,"Download Nginx and unzip it, execute the following command in the directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\n./configure --prefix=/usr/local/nginx --with-http_stub_status_module\n\nmake && make install\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Modify Nginx configure file")),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf")," file and add the monitoring module exposed endpoint, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# modify nginx.conf\nserver {\n        listen 80; # port\n        server_name localhost;\n        location /nginx-status {\n                stub_status     on;\n                access_log      on;\n                #allow 127.0.0.1;   #only allow requests from localhost\n                #deny all;      #deny all other hosts\n        }\n}\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Reload Nginx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nnginx -s reload\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Access ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost/nginx-status")," in the browser to view the Nginx monitoring status information.")),(0,r.kt)("h3",{id:"enable-ngx_http_reqstat_module"},"Enable ",(0,r.kt)("inlineCode",{parentName:"h3"},"ngx_http_reqstat_module")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# install `ngx_http_reqstat_module`\nwget https://github.com/zls0424/ngx_req_status/archive/master.zip -O ngx_req_status.zip\n\nunzip ngx_req_status.zip\n\npatch -p1 < ../ngx_req_status-master/write_filter.patch\n\n./configure --prefix=/usr/local/nginx --add-module=/path/to/ngx_req_status-master\n\nmake -j2\n\nmake install\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Modify Nginx configure file")),(0,r.kt)("p",null,"update ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.conf")," file, add status module exposed endpoint, as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# modify nginx.conf\nhttp {\n    req_status_zone server_name $server_name 256k;\n    req_status_zone server_addr $server_addr 256k;\n\n    req_status server_name server_addr;\n\n    server {\n        location /req-status {\n            req_status_show on;\n            #allow 127.0.0.1;   #only allow requests from localhost\n            #deny all;      #deny all other hosts\n        }\n    }\n}\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Reload Nginx")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"\nnginx -s reload\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Access ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost/req-status")," in the browser to view the Nginx monitoring status information.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Refer Doc: ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/zls0424/ngx_req_status"},"https://github.com/zls0424/ngx_req_status"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0fAttention: The endpoint path of the monitoring module is ",(0,r.kt)("inlineCode",{parentName:"strong"},"/nginx-status")," ",(0,r.kt)("inlineCode",{parentName:"strong"},"/req-status"))),(0,r.kt)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter name"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Monitoring name"),(0,r.kt)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Port provided by Nginx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Allow collection response time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Collection interval"),(0,r.kt)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description remarks"),(0,r.kt)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,r.kt)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,r.kt)("h4",{id:"metrics-setnginx_status"},"Metrics Set\uff1anginx_status"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"accepts"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Accepted connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"handled"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Successfully processed connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Currently active connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dropped"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Discarded connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requests"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Client requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"reading"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Connections performing read operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"writing"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Connections performing write operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"waiting"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Waiting connections")))),(0,r.kt)("h4",{id:"metrics-setreq_status"},"Metrics Set\uff1areq_status"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Metric name"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric unit"),(0,r.kt)("th",{parentName:"tr",align:null},"Metric help description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zone_name"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Group category")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Group name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_active"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum concurrent connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_bw"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"Maximum bandwidth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"traffic"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"Total traffic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"requests"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Total requests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"active"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Current concurrent connections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bandwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"kb"),(0,r.kt)("td",{parentName:"tr",align:null},"Current bandwidth")))))}m.isMDXComponent=!0}}]);