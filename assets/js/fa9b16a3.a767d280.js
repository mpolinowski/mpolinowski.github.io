"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[19456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||c[d]||r;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:8060,slug:"2019-03-26",title:"Developing an App for the Homey Smarthome Gateway",authors:"mpolinowski",tags:["Smarthome","IoT","Javascript","Node"]},i=void 0,p={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app/index",id:"IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app/index",title:"Developing an App for the Homey Smarthome Gateway",description:"Siem Reap, Cambodia",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app/index.mdx",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app",slug:"/IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app/2019-03-26",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app/2019-03-26",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2019-03-26--writing-a-homey-app/index.mdx",tags:[{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Node",permalink:"/docs/tags/node"}],version:"current",sidebarPosition:8060,frontMatter:{sidebar_position:8060,slug:"2019-03-26",title:"Developing an App for the Homey Smarthome Gateway",authors:"mpolinowski",tags:["Smarthome","IoT","Javascript","Node"]},sidebar:"tutorialSidebar",previous:{title:"Node-RED and MQTT",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-29--node-red-and-mqtt/2018-11-29"},next:{title:"Node-RED on Android",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-28--node-red-on-android/2018-11-28"}},l={},m=[{value:"Setting up the Development Environment",id:"setting-up-the-development-environment",level:2},{value:"Install Node.js",id:"install-nodejs",level:4},{value:"Install athom-cli",id:"install-athom-cli",level:4},{value:"Log-in",id:"log-in",level:4},{value:"Create an app",id:"create-an-app",level:4},{value:"Run your project",id:"run-your-project",level:4}],s={toc:m};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Siem Reap, Cambodia",src:n(5491).Z,width:"1500",height:"814"})),(0,o.kt)("h2",{id:"setting-up-the-development-environment"},"Setting up the Development Environment"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://apps.developer.athom.com/index.html"},"Homey App")," is software that runs on ",(0,o.kt)("a",{parentName:"p",href:"https://www.athom.com/en/homey/"},"Homey"),", similar to apps on a smartphone. Homey connects all your devices at home, even different brands and technologies. Control your home from one app."),(0,o.kt)("p",null,"Automate your home with Flow, play your favorite Music and save energy with Insights. Homey is the central hub for your smart home."),(0,o.kt)("h4",{id:"install-nodejs"},"Install Node.js"),(0,o.kt)("p",null,"Apps are written in JavaScript, and run on Node.js. To develop an app for Homey we first have to Download Node.js from the ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node.js website")," and install it on your computer."),(0,o.kt)("h4",{id:"install-athom-cli"},"Install athom-cli"),(0,o.kt)("p",null,"Open a command line, and install the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/athom-cli"},"athom-cli program")," by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g athom-cli\n")),(0,o.kt)("h4",{id:"log-in"},"Log-in"),(0,o.kt)("p",null,"In the command-line, log in with your ",(0,o.kt)("a",{parentName:"p",href:"https://accounts.athom.com/login"},"Athom account"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"athom login\n")),(0,o.kt)("h4",{id:"create-an-app"},"Create an app"),(0,o.kt)("p",null,"Now create your first app by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"athom app create\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Homey Smarthome Gateway &amp; INSTAR Cameras",src:n(23527).Z,width:"838",height:"205"})),(0,o.kt)("h4",{id:"run-your-project"},"Run your project"),(0,o.kt)("p",null,"You are now ready to run your first app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"athom app run\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Homey Smarthome Gateway &amp; INSTAR Cameras",src:n(34147).Z,width:"837",height:"280"})),(0,o.kt)("p",null,"Exit your app by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL + C"),"."),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"athom app run"),", the App will be removed when Homey is restarted. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"athom app run --clean")," to run the app and erase all previous settings. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"athom app install")," to keep the app running for a longer time without debugger attached."))}c.isMDXComponent=!0},23527:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/homey_instar_app_01-2c017893b3edc56abe28215973fc055f.png"},34147:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/homey_instar_app_02-db601295564cad7dc96567c61f843ce6.png"},5491:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-84ch678fgd_67gfh6df55_7-80311e36ce0b3a14cfcc5f0a9f9f802f.jpg"}}]);