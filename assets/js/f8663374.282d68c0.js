"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[17973],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return a?r.createElement(h,i(i({ref:t},m),{},{components:a})):r.createElement(h,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},95447:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={sidebar_position:8080,slug:"2019-02-15",title:"IFTTT IP Camera",authors:"mpolinowski",tags:["IoT","Smarthome"]},i=void 0,s={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera/index",id:"IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera/index",title:"IFTTT IP Camera",description:"Mustang, Nepal",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera/index.mdx",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera",slug:"/IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera/2019-02-15",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera/2019-02-15",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2019-02-15--ifttt-ip-camera/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Smarthome",permalink:"/docs/tags/smarthome"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2019-02-15",title:"IFTTT IP Camera",authors:"mpolinowski",tags:["IoT","Smarthome"]},sidebar:"tutorialSidebar",previous:{title:"Node-RED SQL Logging Datastreams",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-27--node-red-sql-logging/2018-11-27"},next:{title:"Node-RED Dashboard and Videostreams",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-26--node-red-and-live-video/2018-11-26"}},l={},c=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"IFTTT",id:"ifttt",level:2}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mustang, Nepal",src:a(35460).Z,width:"1500",height:"729"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#basic-setup"},"Basic Setup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#ifttt"},"IFTTT"))),(0,n.kt)("h2",{id:"basic-setup"},"Basic Setup"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"If This Then That"),", also known as ",(0,n.kt)("a",{parentName:"p",href:"https://ifttt.com/"},"IFTTT")," is a free web-based service to create chains of simple conditional statements, called applets. Build your own applets to connect web services with your INSTAR IP Camera."),(0,n.kt)("h2",{id:"ifttt"},"IFTTT"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First you need to ",(0,n.kt)("a",{parentName:"li",href:"https://ifttt.com/join"},"create an account")," on IFTTT and ",(0,n.kt)("a",{parentName:"li",href:"https://ifttt.com/login?wp_=1"},"login to your account"),". Then go to the ",(0,n.kt)("strong",{parentName:"li"},"Create")," and click on ",(0,n.kt)("strong",{parentName:"li"},"IF + This"),":")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(64083).Z,width:"945",height:"399"})),(0,n.kt)("hr",null),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"We now want to set up the ",(0,n.kt)("a",{parentName:"li",href:"https://ifttt.com/services/maker_webhooks"},"Date & Time")," service to send scheduled commands to our camera. Search for ",(0,n.kt)("em",{parentName:"li"},"date")," and select the ",(0,n.kt)("strong",{parentName:"li"},"Date & Time"),":")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(52065).Z,width:"948",height:"418"})),(0,n.kt)("hr",null),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"We want to automate a daily camera function, for this we have to choose ",(0,n.kt)("strong",{parentName:"li"},"Every day at")," as a trigger for our applet.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(54298).Z,width:"943",height:"434"})),(0,n.kt)("hr",null),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"For example we set the trigger to ",(0,n.kt)("em",{parentName:"li"},"every day at 6am"),":")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(38219).Z,width:"942",height:"570"})),(0,n.kt)("hr",null),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Now we can add an action that is triggered by our schedule:")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(93806).Z,width:"942",height:"263"})),(0,n.kt)("hr",null),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"We now want to add a ",(0,n.kt)("a",{parentName:"li",href:"https://ifttt.com/services/maker_webhooks"},"webhook service")," - which is basically a service that contacts a web address when triggered. That address will be the INSTAR DDNS address of our INSTAR Full HD camera and carry a ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.instar.com/en/1080p_Series_CGI_List/"},"CGI Command")," to activate/deactivate functions on our camera. (",(0,n.kt)("strong",{parentName:"li"},"Note")," that the camera has to be available via the internet for this to work - this means you will have to set up a ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.instar.com/en/Internet_Access/Port_Forwarding/"},"port forwarding rule inside your router"),").")),(0,n.kt)("p",null,"Search for ",(0,n.kt)("em",{parentName:"p"},"web")," and select the ",(0,n.kt)("strong",{parentName:"p"},"Webhooks Service"),":"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(72744).Z,width:"945",height:"413"})),(0,n.kt)("hr",null),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"We now need to add our cameras DDNS address, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"myaddress.ddns3-instar.de")," with the ",(0,n.kt)("inlineCode",{parentName:"li"},"https://")," prefix followed by the ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.instar.com/en/Web_User_Interface/1080p_Series/Network/IP_Configuration/"},"HTTPS Port")," (",(0,n.kt)("a",{parentName:"li",href:"https://wiki.instar.com/en/Internet_Access/Port_Forwarding/"},"that has to be forwarded inside your router"),"), e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"8081"),".")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(93890).Z,width:"943",height:"545"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,"We now want that our camera moves to the Preset Position 1 when our applet is triggered. The ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.instar.com/en/1080p_Series_CGI_List/"},"CGI Command")," to do this is ",(0,n.kt)("inlineCode",{parentName:"p"},"/param.cgi?cmd=preset&-act=goto&-number=0")," followed by your camera login ",(0,n.kt)("inlineCode",{parentName:"p"},"&-usr=admin&-pwd=instar"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://myaddress.ddns3-instar.de:8081/param.cgi?cmd=preset&-act=goto&-number=0&-usr=admin&-pwd=instar\n")),(0,n.kt)("p",null,"Save your settings and you are done."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"IFTTT for INSTAR Alarmserver",src:a(36050).Z,width:"944",height:"312"})),(0,n.kt)("hr",null))}p.isMDXComponent=!0},64083:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_01-9ce36a71a4243fa9c81e2ff1882d8d31.png"},52065:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_02-9a199be404ced714680a7e3f408b8843.png"},54298:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_03-6283859a0afc9f8e398e64b40f8ce6ac.png"},38219:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_04-a50e7f610ff64adf4b4d7f7774d1f866.png"},93806:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_05-1180a76e30ce60d065f4a5b8343d437c.png"},72744:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_06-d7c1abb20de49628528636bc649788c2.png"},93890:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_07-167e3172d02b09958930b5860cb37b85.png"},36050:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_08-3622c2089cae28493147cb802cc1164d.png"},35460:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-a3d86d28e2392a7d54729608dea7b7b0.jpg"}}]);