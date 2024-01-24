"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[15161],{218710:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var t=n(785893),i=n(603905);const o={sidebar_position:8090,slug:"2021-10-13",title:"Zabbix Docker-Compose Setup",authors:"mpolinowski",tags:["Linux","Zabbix","Docker"]},s=void 0,a={id:"DevOps/Zabbix/2021-10-13--zabbix-compose-setup/index",title:"Zabbix Docker-Compose Setup",description:"Guangzhou, China",source:"@site/docs/DevOps/Zabbix/2021-10-13--zabbix-compose-setup/index.md",sourceDirName:"DevOps/Zabbix/2021-10-13--zabbix-compose-setup",slug:"/DevOps/Zabbix/2021-10-13--zabbix-compose-setup/2021-10-13",permalink:"/docs/DevOps/Zabbix/2021-10-13--zabbix-compose-setup/2021-10-13",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Zabbix/2021-10-13--zabbix-compose-setup/index.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"},{label:"Zabbix",permalink:"/docs/tags/zabbix"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8090,frontMatter:{sidebar_position:8090,slug:"2021-10-13",title:"Zabbix Docker-Compose Setup",authors:"mpolinowski",tags:["Linux","Zabbix","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Testing the Zabbix API with Postman",permalink:"/docs/DevOps/Zabbix/2022-01-13--zabbix-api-testing/2022-01-13"},next:{title:"Zabbix Apache 2 Monitor",permalink:"/docs/DevOps/Zabbix/2021-01-14--zabbix-apache2-monitor/2021-10-14"}},c={},d=[{value:"Zabbix Server 5.4",id:"zabbix-server-54",level:2},{value:"Docker Compose Setup",id:"docker-compose-setup",level:3},{value:"Run",id:"run",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Guangzhou, China",src:n(706227).Z+"",width:"1500",height:"377"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#zabbix-server-54",children:"Zabbix Server 5.4"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#docker-compose-setup",children:"Docker Compose Setup"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#run",children:"Run"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/DevOps/Zabbix/2022-01-13--zabbix-server-v6/2022-01-13",children:"Update to Version 6"})}),"\n",(0,t.jsx)(r.h2,{id:"zabbix-server-54",children:"Zabbix Server 5.4"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://github.com/mpolinowski/zabbix-server-compose",children:"Github Repository"})}),"\n",(0,t.jsx)(r.h3,{id:"docker-compose-setup",children:"Docker Compose Setup"}),"\n",(0,t.jsxs)(r.p,{children:["This article is based on a fork of the ",(0,t.jsx)(r.a,{href:"https://github.com/zabbix/zabbix-docker",children:"official Zabbix Server Repo"})," with a few changes for a production setup:"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Changes"}),":"]}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["Removed everything I don't need - this file only sets up the Zabbix Server with a ",(0,t.jsx)(r.strong,{children:"Postgres"})," backend, the Zabbix Server Dashboard frontend using ",(0,t.jsx)(r.strong,{children:"NGINX"})," and an Zabbix Agent 1 to monitor the server itself."]}),"\n",(0,t.jsxs)(r.li,{children:["Added container names, container restart policies and fixed IP addresses (The Zabbix Agent Container IP is set to ",(0,t.jsx)(r.code,{children:"172.16.239.106"})," - ",(0,t.jsx)(r.strong,{children:"MAKE SURE"})," to change the agent address from default ",(0,t.jsx)(r.code,{children:"127.0.0.1"})," to ",(0,t.jsx)(r.code,{children:"172.16.239.106"})," inside the Server Dashboard! see below)."]}),"\n",(0,t.jsxs)(r.li,{children:["Added an additional external network ",(0,t.jsx)(r.code,{children:"ingress_gateway"})," that will be used by the system ingress to direct traffic to Zabbix. The web frontend container opens both port ",(0,t.jsx)(r.code,{children:"8080"})," and ",(0,t.jsx)(r.code,{children:"8443"})," to debug the initial setup (SSL will be handled by the Ingress and is not configured on port ",(0,t.jsx)(r.code,{children:"8443"}),"). The ports can be commented out later. Make sure to either remove the ",(0,t.jsx)(r.code,{children:"ingress_gateway"})," from the configuration file or add it manually ",(0,t.jsx)(r.code,{children:"docker network create ingress_gateway"})," before starting the containers."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Zabbix Agent Config",src:n(487247).Z+"",width:"1136",height:"458"})}),"\n",(0,t.jsx)(r.h3,{id:"run",children:"Run"}),"\n",(0,t.jsxs)(r.p,{children:["Before running the compose file, check the ",(0,t.jsx)(r.code,{children:"./env_vars"})," files and change what needs to be changed (passwords!)."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"docker network create ingress_gateway\r\ndocker-compose up\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Check the console output for errors and visit the Zabbix Dashboard on your server IP on port ",(0,t.jsx)(r.code,{children:":8081"}),"."]})]})}function b(e={}){const{wrapper:r}={...(0,i.ah)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>d});var t=n(667294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=t.createContext({}),d=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},b=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,b=a(e,["components","mdxType","originalType","parentName"]),h=d(n),p=i,u=h["".concat(c,".").concat(p)]||h[p]||l[p]||o;return n?t.createElement(u,s(s({ref:r},b),{},{components:n})):t.createElement(u,s({ref:r},b))}));b.displayName="MDXCreateElement"},487247:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/Zabbix_Agent_Configuration_01-bc81b4211355a169a2291c833af363aa.png"},706227:(e,r,n)=>{n.d(r,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4f0fde65e04cafca8ab4f458db4fec43.jpg"}}]);