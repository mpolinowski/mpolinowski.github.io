"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[48028],{824182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var s=r(785893),n=r(603905);const a={sidebar_position:8080,slug:"2019-02-15",title:"IFTTT IP Camera",authors:"mpolinowski",tags:["IoT","Smarthome"]},o=void 0,i={id:"Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/index",title:"IFTTT IP Camera",description:"Mustang, Nepal",source:"@site/docs/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera",slug:"/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/2019-02-15",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/2019-02-15",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Smarthome",permalink:"/docs/tags/smarthome"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2019-02-15",title:"IFTTT IP Camera",authors:"mpolinowski",tags:["IoT","Smarthome"]},sidebar:"tutorialSidebar",previous:{title:"Node-RED SQL Logging Datastreams",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-27--node-red-sql-logging/2018-11-27"},next:{title:"Node-RED Dashboard and Videostreams",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-26--node-red-and-live-video/2018-11-26"}},c={},d=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"IFTTT",id:"ifttt",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Mustang, Nepal",src:r(626526).Z+"",width:"1500",height:"729"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#basic-setup",children:"Basic Setup"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#ifttt",children:"IFTTT"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"If This Then That"}),", also known as ",(0,s.jsx)(t.a,{href:"https://ifttt.com/",children:"IFTTT"})," is a free web-based service to create chains of simple conditional statements, called applets. Build your own applets to connect web services with your INSTAR IP Camera."]}),"\n",(0,s.jsx)(t.h2,{id:"ifttt",children:"IFTTT"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["First you need to ",(0,s.jsx)(t.a,{href:"https://ifttt.com/join",children:"create an account"})," on IFTTT and ",(0,s.jsx)(t.a,{href:"https://ifttt.com/login?wp_=1",children:"login to your account"}),". Then go to the ",(0,s.jsx)(t.strong,{children:"Create"})," and click on ",(0,s.jsx)(t.strong,{children:"IF + This"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(651891).Z+"",width:"945",height:"399"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsxs)(t.li,{children:["We now want to set up the ",(0,s.jsx)(t.a,{href:"https://ifttt.com/services/maker_webhooks",children:"Date & Time"})," service to send scheduled commands to our camera. Search for ",(0,s.jsx)(t.em,{children:"date"})," and select the ",(0,s.jsx)(t.strong,{children:"Date & Time"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(485100).Z+"",width:"948",height:"418"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ol,{start:"3",children:["\n",(0,s.jsxs)(t.li,{children:["We want to automate a daily camera function, for this we have to choose ",(0,s.jsx)(t.strong,{children:"Every day at"})," as a trigger for our applet."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(462229).Z+"",width:"943",height:"434"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ol,{start:"4",children:["\n",(0,s.jsxs)(t.li,{children:["For example we set the trigger to ",(0,s.jsx)(t.em,{children:"every day at 6am"}),":"]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(670603).Z+"",width:"942",height:"570"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ol,{start:"5",children:["\n",(0,s.jsx)(t.li,{children:"Now we can add an action that is triggered by our schedule:"}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(380874).Z+"",width:"942",height:"263"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ol,{start:"6",children:["\n",(0,s.jsxs)(t.li,{children:["We now want to add a ",(0,s.jsx)(t.a,{href:"https://ifttt.com/services/maker_webhooks",children:"webhook service"})," - which is basically a service that contacts a web address when triggered. That address will be the INSTAR DDNS address of our INSTAR Full HD camera and carry a ",(0,s.jsx)(t.a,{href:"https://wiki.instar.com/en/1080p_Series_CGI_List/",children:"CGI Command"})," to activate/deactivate functions on our camera. (",(0,s.jsx)(t.strong,{children:"Note"})," that the camera has to be available via the internet for this to work - this means you will have to set up a ",(0,s.jsx)(t.a,{href:"https://wiki.instar.com/en/Internet_Access/Port_Forwarding/",children:"port forwarding rule inside your router"}),")."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Search for ",(0,s.jsx)(t.em,{children:"web"})," and select the ",(0,s.jsx)(t.strong,{children:"Webhooks Service"}),":"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(973193).Z+"",width:"945",height:"413"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.ol,{start:"7",children:["\n",(0,s.jsxs)(t.li,{children:["We now need to add our cameras DDNS address, e.g. ",(0,s.jsx)(t.code,{children:"myaddress.ddns3-instar.de"})," with the ",(0,s.jsx)(t.code,{children:"https://"})," prefix followed by the ",(0,s.jsx)(t.a,{href:"https://wiki.instar.com/en/Web_User_Interface/1080p_Series/Network/IP_Configuration/",children:"HTTPS Port"})," (",(0,s.jsx)(t.a,{href:"https://wiki.instar.com/en/Internet_Access/Port_Forwarding/",children:"that has to be forwarded inside your router"}),"), e.g. ",(0,s.jsx)(t.code,{children:"8081"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(896282).Z+"",width:"943",height:"545"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsxs)(t.p,{children:["We now want that our camera moves to the Preset Position 1 when our applet is triggered. The ",(0,s.jsx)(t.a,{href:"https://wiki.instar.com/en/1080p_Series_CGI_List/",children:"CGI Command"})," to do this is ",(0,s.jsx)(t.code,{children:"/param.cgi?cmd=preset&-act=goto&-number=0"})," followed by your camera login ",(0,s.jsx)(t.code,{children:"&-usr=admin&-pwd=instar"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"https://myaddress.ddns3-instar.de:8081/param.cgi?cmd=preset&-act=goto&-number=0&-usr=admin&-pwd=instar\n"})}),"\n",(0,s.jsx)(t.p,{children:"Save your settings and you are done."}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:r(200304).Z+"",width:"944",height:"312"})}),"\n",(0,s.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,n.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},603905:(e,t,r)=>{r.d(t,{ah:()=>d});var s=r(667294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=s.createContext({}),d=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),m=d(r),p=n,u=m["".concat(c,".").concat(p)]||m[p]||l[p]||a;return r?s.createElement(u,o(o({ref:t},h),{},{components:r})):s.createElement(u,o({ref:t},h))}));h.displayName="MDXCreateElement"},651891:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_01-9ce36a71a4243fa9c81e2ff1882d8d31.png"},485100:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_02-9a199be404ced714680a7e3f408b8843.png"},462229:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_03-6283859a0afc9f8e398e64b40f8ce6ac.png"},670603:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_04-a50e7f610ff64adf4b4d7f7774d1f866.png"},380874:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_05-1180a76e30ce60d065f4a5b8343d437c.png"},973193:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_06-d7c1abb20de49628528636bc649788c2.png"},896282:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_07-167e3172d02b09958930b5860cb37b85.png"},200304:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_08-3622c2089cae28493147cb802cc1164d.png"},626526:(e,t,r)=>{r.d(t,{Z:()=>s});const s=r.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-a3d86d28e2392a7d54729608dea7b7b0.jpg"}}]);