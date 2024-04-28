"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[90835],{399880:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=s(474848),n=s(28453);const a={sidebar_position:8080,slug:"2019-02-15",title:"IFTTT IP Camera",authors:"mpolinowski",tags:["IoT","Smarthome"]},i=void 0,o={id:"Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/index",title:"IFTTT IP Camera",description:"Mustang, Nepal",source:"@site/docs/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera",slug:"/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/2019-02-15",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/2019-02-15",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2019-02-15--ifttt-ip-camera/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Smarthome",permalink:"/docs/tags/smarthome"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2019-02-15",title:"IFTTT IP Camera",authors:"mpolinowski",tags:["IoT","Smarthome"]},sidebar:"tutorialSidebar",previous:{title:"Node-RED SQL Logging Datastreams",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-27--node-red-sql-logging/2018-11-27"},next:{title:"Node-RED Dashboard and Videostreams",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-26--node-red-and-live-video/2018-11-26"}},c={},d=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"IFTTT",id:"ifttt",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Mustang, Nepal",src:s(679681).A+"",width:"1500",height:"729"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#basic-setup",children:"Basic Setup"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#ifttt",children:"IFTTT"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"If This Then That"}),", also known as ",(0,r.jsx)(t.a,{href:"https://ifttt.com/",children:"IFTTT"})," is a free web-based service to create chains of simple conditional statements, called applets. Build your own applets to connect web services with your INSTAR IP Camera."]}),"\n",(0,r.jsx)(t.h2,{id:"ifttt",children:"IFTTT"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["First you need to ",(0,r.jsx)(t.a,{href:"https://ifttt.com/join",children:"create an account"})," on IFTTT and ",(0,r.jsx)(t.a,{href:"https://ifttt.com/login?wp_=1",children:"login to your account"}),". Then go to the ",(0,r.jsx)(t.strong,{children:"Create"})," and click on ",(0,r.jsx)(t.strong,{children:"IF + This"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(104982).A+"",width:"945",height:"399"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ol,{start:"2",children:["\n",(0,r.jsxs)(t.li,{children:["We now want to set up the ",(0,r.jsx)(t.a,{href:"https://ifttt.com/services/maker_webhooks",children:"Date & Time"})," service to send scheduled commands to our camera. Search for ",(0,r.jsx)(t.em,{children:"date"})," and select the ",(0,r.jsx)(t.strong,{children:"Date & Time"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(495661).A+"",width:"948",height:"418"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ol,{start:"3",children:["\n",(0,r.jsxs)(t.li,{children:["We want to automate a daily camera function, for this we have to choose ",(0,r.jsx)(t.strong,{children:"Every day at"})," as a trigger for our applet."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(969508).A+"",width:"943",height:"434"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ol,{start:"4",children:["\n",(0,r.jsxs)(t.li,{children:["For example we set the trigger to ",(0,r.jsx)(t.em,{children:"every day at 6am"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(379451).A+"",width:"942",height:"570"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ol,{start:"5",children:["\n",(0,r.jsx)(t.li,{children:"Now we can add an action that is triggered by our schedule:"}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(114098).A+"",width:"942",height:"263"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ol,{start:"6",children:["\n",(0,r.jsxs)(t.li,{children:["We now want to add a ",(0,r.jsx)(t.a,{href:"https://ifttt.com/services/maker_webhooks",children:"webhook service"})," - which is basically a service that contacts a web address when triggered. That address will be the INSTAR DDNS address of our INSTAR Full HD camera and carry a ",(0,r.jsx)(t.a,{href:"https://wiki.instar.com/en/1080p_Series_CGI_List/",children:"CGI Command"})," to activate/deactivate functions on our camera. (",(0,r.jsx)(t.strong,{children:"Note"})," that the camera has to be available via the internet for this to work - this means you will have to set up a ",(0,r.jsx)(t.a,{href:"https://wiki.instar.com/en/Internet_Access/Port_Forwarding/",children:"port forwarding rule inside your router"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Search for ",(0,r.jsx)(t.em,{children:"web"})," and select the ",(0,r.jsx)(t.strong,{children:"Webhooks Service"}),":"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(479241).A+"",width:"945",height:"413"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.ol,{start:"7",children:["\n",(0,r.jsxs)(t.li,{children:["We now need to add our cameras DDNS address, e.g. ",(0,r.jsx)(t.code,{children:"myaddress.ddns3-instar.de"})," with the ",(0,r.jsx)(t.code,{children:"https://"})," prefix followed by the ",(0,r.jsx)(t.a,{href:"https://wiki.instar.com/en/Web_User_Interface/1080p_Series/Network/IP_Configuration/",children:"HTTPS Port"})," (",(0,r.jsx)(t.a,{href:"https://wiki.instar.com/en/Internet_Access/Port_Forwarding/",children:"that has to be forwarded inside your router"}),"), e.g. ",(0,r.jsx)(t.code,{children:"8081"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(24416).A+"",width:"943",height:"545"})}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsxs)(t.p,{children:["We now want that our camera moves to the Preset Position 1 when our applet is triggered. The ",(0,r.jsx)(t.a,{href:"https://wiki.instar.com/en/1080p_Series_CGI_List/",children:"CGI Command"})," to do this is ",(0,r.jsx)(t.code,{children:"/param.cgi?cmd=preset&-act=goto&-number=0"})," followed by your camera login ",(0,r.jsx)(t.code,{children:"&-usr=admin&-pwd=instar"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://myaddress.ddns3-instar.de:8081/param.cgi?cmd=preset&-act=goto&-number=0&-usr=admin&-pwd=instar\n"})}),"\n",(0,r.jsx)(t.p,{children:"Save your settings and you are done."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"IFTTT for INSTAR Alarmserver",src:s(651687).A+"",width:"944",height:"312"})}),"\n",(0,r.jsx)(t.hr,{})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},104982:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_01-9ce36a71a4243fa9c81e2ff1882d8d31.png"},495661:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_02-9a199be404ced714680a7e3f408b8843.png"},969508:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_03-6283859a0afc9f8e398e64b40f8ce6ac.png"},379451:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_04-a50e7f610ff64adf4b4d7f7774d1f866.png"},114098:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_05-1180a76e30ce60d065f4a5b8343d437c.png"},479241:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_06-d7c1abb20de49628528636bc649788c2.png"},24416:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_07-167e3172d02b09958930b5860cb37b85.png"},651687:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/IFTTT_for_INSTAR_Alarmserver_08-3622c2089cae28493147cb802cc1164d.png"},679681:(e,t,s)=>{s.d(t,{A:()=>r});const r=s.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-a3d86d28e2392a7d54729608dea7b7b0.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>o});var r=s(296540);const n={},a=r.createContext(n);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);