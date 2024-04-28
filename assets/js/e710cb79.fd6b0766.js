"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[51975],{651027:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var t=n(474848),a=n(28453);const i={sidebar_position:8060,slug:"2019-03-26",title:"Developing an App for the Homey Smarthome Gateway",authors:"mpolinowski",tags:["Smarthome","IoT","Javascript","Node"]},s=void 0,r={id:"Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app/index",title:"Developing an App for the Homey Smarthome Gateway",description:"Siem Reap, Cambodia",source:"@site/docs/Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app",slug:"/Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app/2019-03-26",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app/2019-03-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2019-03-26--writing-a-homey-app/index.mdx",tags:[{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Node",permalink:"/docs/tags/node"}],version:"current",sidebarPosition:8060,frontMatter:{sidebar_position:8060,slug:"2019-03-26",title:"Developing an App for the Homey Smarthome Gateway",authors:"mpolinowski",tags:["Smarthome","IoT","Javascript","Node"]},sidebar:"tutorialSidebar",previous:{title:"Node-RED and MQTT",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-29--node-red-and-mqtt/2018-11-29"},next:{title:"Node-RED on Android",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-28--node-red-on-android/2018-11-28"}},d={},l=[{value:"Setting up the Development Environment",id:"setting-up-the-development-environment",level:2},{value:"Install Node.js",id:"install-nodejs",level:4},{value:"Install athom-cli",id:"install-athom-cli",level:4},{value:"Log-in",id:"log-in",level:4},{value:"Create an app",id:"create-an-app",level:4},{value:"Run your project",id:"run-your-project",level:4}];function p(e){const o={a:"a",code:"code",h2:"h2",h4:"h4",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Siem Reap, Cambodia",src:n(808660).A+"",width:"1500",height:"814"})}),"\n",(0,t.jsx)(o.h2,{id:"setting-up-the-development-environment",children:"Setting up the Development Environment"}),"\n",(0,t.jsxs)(o.p,{children:["A ",(0,t.jsx)(o.a,{href:"https://apps.developer.athom.com/index.html",children:"Homey App"})," is software that runs on ",(0,t.jsx)(o.a,{href:"https://www.athom.com/en/homey/",children:"Homey"}),", similar to apps on a smartphone. Homey connects all your devices at home, even different brands and technologies. Control your home from one app."]}),"\n",(0,t.jsx)(o.p,{children:"Automate your home with Flow, play your favorite Music and save energy with Insights. Homey is the central hub for your smart home."}),"\n",(0,t.jsx)(o.h4,{id:"install-nodejs",children:"Install Node.js"}),"\n",(0,t.jsxs)(o.p,{children:["Apps are written in JavaScript, and run on Node.js. To develop an app for Homey we first have to Download Node.js from the ",(0,t.jsx)(o.a,{href:"https://nodejs.org/en/",children:"Node.js website"})," and install it on your computer."]}),"\n",(0,t.jsx)(o.h4,{id:"install-athom-cli",children:"Install athom-cli"}),"\n",(0,t.jsxs)(o.p,{children:["Open a command line, and install the ",(0,t.jsx)(o.a,{href:"https://www.npmjs.com/package/athom-cli",children:"athom-cli program"})," by running the following command:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-bash",children:"npm install -g athom-cli\n"})}),"\n",(0,t.jsx)(o.h4,{id:"log-in",children:"Log-in"}),"\n",(0,t.jsxs)(o.p,{children:["In the command-line, log in with your ",(0,t.jsx)(o.a,{href:"https://accounts.athom.com/login",children:"Athom account"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"athom login\n"})}),"\n",(0,t.jsx)(o.h4,{id:"create-an-app",children:"Create an app"}),"\n",(0,t.jsx)(o.p,{children:"Now create your first app by running:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"athom app create\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Homey Smarthome Gateway &amp; INSTAR Cameras",src:n(121593).A+"",width:"838",height:"205"})}),"\n",(0,t.jsx)(o.h4,{id:"run-your-project",children:"Run your project"}),"\n",(0,t.jsx)(o.p,{children:"You are now ready to run your first app:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{children:"athom app run\n"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.img,{alt:"Homey Smarthome Gateway &amp; INSTAR Cameras",src:n(138658).A+"",width:"837",height:"280"})}),"\n",(0,t.jsxs)(o.p,{children:["Exit your app by pressing ",(0,t.jsx)(o.code,{children:"CTRL + C"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["When using ",(0,t.jsx)(o.code,{children:"athom app run"}),", the App will be removed when Homey is restarted. Run ",(0,t.jsx)(o.code,{children:"athom app run --clean"})," to run the app and erase all previous settings. Run ",(0,t.jsx)(o.code,{children:"athom app install"})," to keep the app running for a longer time without debugger attached."]})]})}function c(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},121593:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/homey_instar_app_01-2c017893b3edc56abe28215973fc055f.png"},138658:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/homey_instar_app_02-db601295564cad7dc96567c61f843ce6.png"},808660:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/photo-84ch678fgd_67gfh6df55_7-80311e36ce0b3a14cfcc5f0a9f9f802f.jpg"},28453:(e,o,n)=>{n.d(o,{R:()=>s,x:()=>r});var t=n(296540);const a={},i=t.createContext(a);function s(e){const o=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:o},e.children)}}}]);