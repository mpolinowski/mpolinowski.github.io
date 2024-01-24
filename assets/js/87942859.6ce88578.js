"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[72886],{105125:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(785893),s=t(603905);const r={sidebar_position:9030,slug:"2019-08-10",title:"MQTT Networks with Athom Homey",authors:"mpolinowski",tags:["MQTT","Smarthome","IoT"]},i=void 0,a={id:"Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey/index",title:"MQTT Networks with Athom Homey",description:"Central, Hong Kong",source:"@site/docs/Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey/index.mdx",sourceDirName:"Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey",slug:"/Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey/2019-08-10",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey/2019-08-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/MQTT/2019-08-10--mqtt-athom-homey/index.mdx",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2019-08-10",title:"MQTT Networks with Athom Homey",authors:"mpolinowski",tags:["MQTT","Smarthome","IoT"]},sidebar:"tutorialSidebar",previous:{title:"MQTT Networks with Home Assistant",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-11--mqtt-home-assistant/2019-08-11"},next:{title:"MQTT Networks with homee",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-09--mqtt-homee/2019-08-09"}},h={},c=[{value:"Adding the Homey MQTT Client",id:"adding-the-homey-mqtt-client",level:2},{value:"Sending a MQTT Command to your Camera",id:"sending-a-mqtt-command-to-your-camera",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Central, Hong Kong",src:t(504535).Z+"",width:"1500",height:"767"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#adding-the-homey-mqtt-client",children:"Adding the Homey MQTT Client"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#sending-a-mqtt-command-to-your-camera",children:"Sending a MQTT Command to your Camera"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In this tutorial we want to connect an INSTAR Full HD camera through it's MQTT Interface with the ",(0,o.jsx)(n.a,{href:"https://www.athom.com/en/",children:"Athom Homey Smarthome"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"adding-the-homey-mqtt-client",children:"Adding the Homey MQTT Client"}),"\n",(0,o.jsx)(n.p,{children:"Homey is a modular - that means that it is only set up with a limited amount of functionality out of the box. You can use the Homey App Store to load all kinds of kinds apps onto your gateway to personalize it's functionality. For the following we are going to need an MQTT client to be able to connect to the MQTT server on our camera."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(66968).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start by launching your Homey App for ",(0,o.jsx)(n.a,{href:"https://apps.apple.com/us/app/homey/id1435800024",children:"iOS"})," or ",(0,o.jsx)(n.a,{href:"https://play.google.com/store/apps/details?id=app.homey&hl=en_US",children:"Android"})," and switch to the ",(0,o.jsx)(n.strong,{children:"More"})," App."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Open the Apps category."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["And click on the ",(0,o.jsx)(n.strong,{children:"+"})," icon in the top right to add a new app."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(843876).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Type ",(0,o.jsx)(n.code,{children:"mqtt"})," into the search field and select the ",(0,o.jsx)(n.strong,{children:"MQTT Client"}),". I am also installing the MQTT Hub - ",(0,o.jsx)(n.em,{children:"this is optional"}),". The Hub App publishes Homey state variables through MQTT which comes in handy if you also use another smarthome solution that you want to interconnect with your Homey."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Once installed, click on the ",(0,o.jsx)(n.strong,{children:"MQTT Client"})," inside the Apps category."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Configure App"})," to connect the client to the INSTAR MQTT Server."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(133272).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Start by entering the IP address of your camera (that is running your MQTT broker) - e.g. ",(0,o.jsx)(n.code,{children:"192.168.2.116"}),". We are going to use the Port ",(0,o.jsx)(n.code,{children:"1883"})," that allows us to connect to the MQTT broker without the SSL encryption (an encrypted connection can be established via the port ",(0,o.jsx)(n.code,{children:"8883"})," but requires a custom SSL certificate which I could not find out how to upload). The ",(0,o.jsx)(n.strong,{children:"username"})," and ",(0,o.jsx)(n.strong,{children:"password"})," for the MQTT broker is the one you set in the MQTT Menu."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["If you installed the MQTT Hub earlier - ",(0,o.jsx)(n.em,{children:"which is optional"})," - enter it and click on ",(0,o.jsx)(n.strong,{children:"Configure app"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Here you can set which information Homey should publish to our MQTT broker for use with other smarthome components."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"sending-a-mqtt-command-to-your-camera",children:"Sending a MQTT Command to your Camera"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(698262).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now switch to the ",(0,o.jsx)(n.strong,{children:"Devices"})," tab and check if you are able to add virtual devices. If you can't find them, the are still hidden as ",(0,o.jsx)(n.em,{children:"experimental features"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Switch to the ",(0,o.jsx)(n.strong,{children:"More"})," tab and enter the ",(0,o.jsx)(n.strong,{children:"Settings"})," menu. Click on ",(0,o.jsx)(n.strong,{children:"Experiments"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Activate ",(0,o.jsx)(n.strong,{children:"Virtual Devices"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(159912).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Back to ",(0,o.jsx)(n.strong,{children:"Devices"})," you should now be able to add a ",(0,o.jsx)(n.strong,{children:"Virtual Button"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click on ",(0,o.jsx)(n.strong,{children:"Install"})," to add the button to your devices."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click ",(0,o.jsx)(n.strong,{children:"Next"})," to finish the installation."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(676649).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You can ",(0,o.jsx)(n.em,{children:"click and hold"})," the virtual button to rename it."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Click on the cog wheel icon to enter the settings menu."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Add a name for your virtual button and add it to a zone."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(151720).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"10",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now we need to add some logic to made this button work. This can be done in the ",(0,o.jsx)(n.strong,{children:"Flows"})," tab."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Click on the ",(0,o.jsx)(n.strong,{children:"+"})," icon in the top right to add a new flow."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.strong,{children:"Create Flow"})," menu click on ",(0,o.jsx)(n.strong,{children:"Add card"})," in the ",(0,o.jsx)(n.em,{children:"When condition"})," to assign an event that should trigger your flow."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(253311).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"13",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Search for your virtual button under ",(0,o.jsx)(n.strong,{children:"Devices"})," and select it."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["The button only has this one trigger - ",(0,o.jsx)(n.em,{children:"When button has bee pressed"}),". Select it and confirm."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now swipe up the ",(0,o.jsx)(n.strong,{children:"Then"})," section of our flow to define what Homey should do when the flow was triggered."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(929451).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"16",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now click on ",(0,o.jsx)(n.strong,{children:"Add card"})," to add the ",(0,o.jsx)(n.strong,{children:"Then"})," condition for our flow."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Scroll down to the ",(0,o.jsx)(n.strong,{children:"Apps"})," section and select the ",(0,o.jsx)(n.strong,{children:"MQTT Client"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["And choose to ",(0,o.jsx)(n.strong,{children:"Publish a message"})," to the INSTAR MQTT server."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"INSTAR MQTT Broker and Athom Homey",src:t(248546).Z+"",width:"1500",height:"667"})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.ol,{start:"19",children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Now you can select a MQTT Topic from the INSTAR MQTT API that you want to update every time the button is pressed. Here I choose ",(0,o.jsx)(n.code,{children:"alarm/pushalarm"})," with a value of ",(0,o.jsx)(n.code,{children:"{'val':'1'}"})," to trigger an alarm on my camera. Note that if you have more than 1 camera connected to the MQTT server, you either have to add the MAC address in front of the MQTT topic to address a specific camera. Or add ",(0,o.jsx)(n.code,{children:"all"})," - ",(0,o.jsx)(n.code,{children:"all/alarm/pushalarm"})," - to address all connected cameras. By adding prefix ",(0,o.jsx)(n.code,{children:"local"}),", you only address the camera that is running the MQTT broker."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["After you confirmed your edit click ",(0,o.jsx)(n.strong,{children:"Test"})," to verify that everything is working - your cameras System Log should show an ",(0,o.jsx)(n.strong,{children:"Audio Alarm"})," (Note that the Audio Alarm has a ",(0,o.jsx)(n.strong,{children:"cool-down of 60s"})," - so even if you hit the virtual button serveral times, you only get 1 alarm per minute). Now you can click on save to exit the setup window."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["You now have a working button in the ",(0,o.jsx)(n.strong,{children:"Devices"})," window that can trigger an alarm on your camera. Try to add another button with the MQTT topic ",(0,o.jsx)(n.code,{children:"features/ptz/preset"})," and a value of ",(0,o.jsx)(n.code,{children:"{'val':'0'}"})," - ",(0,o.jsx)(n.code,{children:"{'val':'7'}"})," to have your camera pan&tilt between its preset positions."]}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var o=t(667294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,s=function(e,n){if(null==e)return{};var t,o,s={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var h=o.createContext({}),c=function(e){var n=o.useContext(h),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},l=o.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,h=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=c(t),p=s,j=m["".concat(h,".").concat(p)]||m[p]||d[p]||r;return t?o.createElement(j,i(i({ref:n},l),{},{components:t})):o.createElement(j,i({ref:n},l))}));l.displayName="MDXCreateElement"},66968:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_01-a41f12c085cf9b9d4aaae0f4c7dc9806.png"},843876:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_02-8b1f79544a3422cd7fb7598b58d38628.png"},133272:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_03-4b790504ad398c58f339fbaa9d02f39c.png"},698262:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_04-ef7b775a6fc517651fb8e2f34bfe31f2.png"},159912:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_05-9da1b4d505f57b73b4b4af6fa9e474ea.png"},676649:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_06-22bc2026f08d59171063c2871fd35dab.png"},151720:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_07-69034be79f6f184d1aa2edc609ff6661.png"},253311:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_08-fd7b16440ad608d4c086c43d09c5b19b.png"},929451:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_09-4fdb129dd20261877a16acc257ab4f7e.png"},248546:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/INSTAR_MQTT_with_Athom_Homey_10-80bb315c83d387a2da515009ff2e7c21.png"},504535:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-8b5c60bbcc2db25972d20542ef91688c.jpg"}}]);