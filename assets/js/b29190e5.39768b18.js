"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[59043],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>u});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?t.createElement(g,i(i({ref:n},c),{},{components:a})):t.createElement(g,i({ref:n},c))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15522:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const o={sidebar_position:8060,slug:"2022-11-17",title:"NGINX TCP/UDP Load Balancing",authors:"mpolinowski",tags:["NGINX","Linux"],description:"Using the NGINX Stream Module to balance TCP/UDP Traffic"},i=void 0,l={unversionedId:"DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/index",id:"DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/index",title:"NGINX TCP/UDP Load Balancing",description:"Using the NGINX Stream Module to balance TCP/UDP Traffic",source:"@site/docs/DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/index.md",sourceDirName:"DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing",slug:"/DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/2022-11-17",permalink:"/docs/DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/2022-11-17",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8060,frontMatter:{sidebar_position:8060,slug:"2022-11-17",title:"NGINX TCP/UDP Load Balancing",authors:"mpolinowski",tags:["NGINX","Linux"],description:"Using the NGINX Stream Module to balance TCP/UDP Traffic"},sidebar:"tutorialSidebar",previous:{title:"NGINX",permalink:"/docs/category/nginx"},next:{title:"NGINX Redirect based on User Agent",permalink:"/docs/DevOps/NGINX/2021-02-23-nginx-agent-redirect/2021-02-23"}},s={},p=[{value:"Stream Module",id:"stream-module",level:2},{value:"TCP Load Balancing",id:"tcp-load-balancing",level:3},{value:"UDP Load Balancing",id:"udp-load-balancing",level:3},{value:"Load-balancing an NTS Timeserver",id:"load-balancing-an-nts-timeserver",level:2},{value:"Provisioning using Hashicorp Nomad",id:"provisioning-using-hashicorp-nomad",level:3}],c={toc:p};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shen Zhen, China",src:a(34505).Z,width:"1500",height:"598"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#stream-module"},"Stream Module"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tcp-load-balancing"},"TCP Load Balancing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#udp-load-balancing"},"UDP Load Balancing")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#load-balancing-an-nts-timeserver"},"Load-balancing an NTS Timeserver"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#provisioning-using-hashicorp-nomad"},"Provisioning using Hashicorp Nomad"))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.nginx.com/blog/tcp-load-balancing-udp-load-balancing-nginx-tips-tricks/"},"www.nginx.com")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://superuser.com/questions/1273792/how-can-i-setup-a-udp-nginx-reverse-proxy-and-how-does-it-work"},"superuser.com"))),(0,r.kt)("h2",{id:"stream-module"},"Stream Module"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"TCP and UDP load balancer with NGINX's Stream module (requirers >=1.9).")),(0,r.kt)("h3",{id:"tcp-load-balancing"},"TCP Load Balancing"),(0,r.kt)("p",null,"For TCP load balancing we need to define an upstream block in the main configuration file, e.g with two MySQL backends."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"stream {\n  upstream backend_dbs {\n    server db1.mydomain.com:3306;\n    server db2.mydomain.com:3306;\n  }\n\n  server {\n    listen 3306;\n    proxy_pass backend_dbs;\n  }\n}\n")),(0,r.kt)("p",null,"Then in the server block a TCP socket to listen on freely chosen port and proxy everything from there to the backend."),(0,r.kt)("h3",{id:"udp-load-balancing"},"UDP Load Balancing"),(0,r.kt)("p",null,"For NTP load balancing service we can add an upstream block for the backend NTP servers. The listen directive is similar to the TCP configuration, but we need to specify the udp parameter to tell NGINX to listen for UDP on this port."),(0,r.kt)("p",null,"One of the things to keep in mind is that NGINX UDP load balancing is built in a way that it expects one or more responses from the backend. In case of an NTP service, we\u2019re expecting one request and one reply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"stream {\n  upstream backend_time {\n    server ntp1.mydomain.com:123;\n    server ntp2.mydomain.com:123;\n  }\n\n  server {\n    listen 123 udp;\n    proxy_pass backend_time;\n    proxy_timeout 5s;\n    proxy_requests 1;\n    proxy_responses 1;\n    error_log logs/ntp.log\n  }\n}\n")),(0,r.kt)("h2",{id:"load-balancing-an-nts-timeserver"},"Load-balancing an NTS Timeserver"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"stream {\n\n    upstream ntp_server {\n        server ntp1.mydomain.com:123;\n        server ntp2.mydomain.com:123;\n        server ntp3.mydomain.com:123;\n        server ntp4.mydomain.com:123;\n    }\n\n    upstream nts_server {\n      server ntp1.mydomain.com:4460;\n      server ntp2.mydomain.com:4460;\n      server ntp3.mydomain.com:4460;\n      server ntp3.mydomain.com:4460;\n    }\n\n    server {\n        listen 123 udp;\n        listen 123; #tcp\n        proxy_pass ntp_server;\n        error_log  /var/log/nginx/ntp.log info;\n        proxy_responses 1;\n        proxy_timeout   1s;\n    }\n\n    server {\n      listen 4460 udp;\n      listen 4460; #tcp\n\n      proxy_pass nts_server;\n      error_log  /var/log/nginx/nts.log info;\n      proxy_responses 1;\n      proxy_timeout   1s;\n    }\n}\n")),(0,r.kt)("h3",{id:"provisioning-using-hashicorp-nomad"},"Provisioning using Hashicorp Nomad"),(0,r.kt)("p",null,"see ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2022-11-15-hashicorp-nomad-balanced-nts/2022-11-15"},"Hashicorp Nomad Secure & Balanced NTS Time Service")))}d.isMDXComponent=!0},34505:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0829cb95dd693c790a8ca59f3f351274.jpg"}}]);