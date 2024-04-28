"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[83060],{605456:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=o(474848),s=o(28453);const n={sidebar_position:6990,slug:"2022-07-17",title:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"Previously I wrote a Python Script that allowed me to register MQTT devices with Home Assistant using the HA internal auto-discovery service. The same script can be used to register those devices with OpenHAB using the homie convention. Now I want to use Node-RED to dynamically register devices, instead of providing fixed configuration files for each device."},a=void 0,r={id:"Automation_and_Robotics/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery/index",title:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",description:"Previously I wrote a Python Script that allowed me to register MQTT devices with Home Assistant using the HA internal auto-discovery service. The same script can be used to register those devices with OpenHAB using the homie convention. Now I want to use Node-RED to dynamically register devices, instead of providing fixed configuration files for each device.",source:"@site/docs/Automation_and_Robotics/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery/index.md",sourceDirName:"Automation_and_Robotics/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery",slug:"/Automation_and_Robotics/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery/2022-07-17",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery/2022-07-17",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2022-07-17-node-red-for-mqtt-autodiscovery/index.md",tags:[{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:6990,frontMatter:{sidebar_position:6990,slug:"2022-07-17",title:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"Previously I wrote a Python Script that allowed me to register MQTT devices with Home Assistant using the HA internal auto-discovery service. The same script can be used to register those devices with OpenHAB using the homie convention. Now I want to use Node-RED to dynamically register devices, instead of providing fixed configuration files for each device."},sidebar:"tutorialSidebar",previous:{title:"OpenThread Border Router",permalink:"/docs/Automation_and_Robotics/Home_Automation/2023-01-23-thread-edge-router/2023-01-23"},next:{title:"Run Camera.UI with Docker-Compose",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-10-18-camera-ui-docker/2022-10-18"}},d={},c=[{value:"Home Assistant",id:"home-assistant",level:2},{value:"OpenHAB (homie)",id:"openhab-homie",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Abashiri, Japan",src:o(167862).A+"",width:"1500",height:"594"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#home-assistant",children:"Home Assistant"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#openhab-homie",children:"OpenHAB (homie)"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",children:"Previously I wrote a Python Script"})," that allowed me to register MQTT devices with Home Assistant using the HA internal auto-discovery service. The same script can be used to register those devices with ",(0,i.jsx)(t.a,{href:"/docs/Automation_and_Robotics/Home_Automation/2022-07-16-openhab-mqtt-homie/2022-07-16",children:"OpenHAB using the homie convention"}),". Now I want to use Node-RED to dynamically register devices, instead of providing fixed configuration files for each device."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["All flows can be downloaded from ",(0,i.jsx)(t.a,{href:"https://github.com/mpolinowski/node-red-mqtt-autodiscovery",children:"Github"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"home-assistant",children:"Home Assistant"}),"\n",(0,i.jsxs)(t.p,{children:["As a convention I am grouping all devices by prefix according to the device type. E.g. all MQTT cameras are in the ",(0,i.jsx)(t.code,{children:"cameras"})," group. I identify each device by it's IP address - e.g. ",(0,i.jsx)(t.em,{children:"192.168.2.120"})," would give the device ID ",(0,i.jsx)(t.code,{children:"120"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(993637).A+"",width:"929",height:"522"})}),"\n",(0,i.jsxs)(t.p,{children:["To be able to register all my cameras with a Node-RED script I first have to inject the prefix and ID of the camera I want to target and then walk my way through the ",(0,i.jsx)(t.a,{href:"https://wiki.instar.com/en/Advanced_User/INSTAR_MQTT_Broker/MQTTv5_API/",children:"MQTT API"})," to extract all the information I need from this camera:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(241372).A+"",width:"1290",height:"560"})}),"\n",(0,i.jsxs)(t.p,{children:["By writing those information into flow variables I can then use them to build the ",(0,i.jsx)(t.a,{href:"/docs/Automation_and_Robotics/Home_Automation/2022-07-10-home-assistant-mqtt-autodiscovery-part-i/2022-07-10",children:"Configuration Topics needed by the Home Assistant Auto-discovery"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(465303).A+"",width:"1108",height:"438"})}),"\n",(0,i.jsx)(t.p,{children:"Now all I have to do is to inject the MQTT ID of the camera I want to register with Home Assistant (which has to be connected to the same MQTT Broker) and all the configuration topics will fire. This event can be coupled to the Last-Will topic of the device to have it register itself as soon as it connects with the broker."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(943468).A+"",width:"1288",height:"887"})}),"\n",(0,i.jsx)(t.h2,{id:"openhab-homie",children:"OpenHAB (homie)"}),"\n",(0,i.jsxs)(t.p,{children:["OpenHAB uses the ",(0,i.jsx)(t.a,{href:"/docs/Automation_and_Robotics/Home_Automation/2022-07-16-openhab-mqtt-homie/2022-07-16",children:"homie convention"})," to do the same thing. Again, I first need to extract all information through the ",(0,i.jsx)(t.a,{href:"https://wiki.instar.com/en/Advanced_User/INSTAR_MQTT_Broker/MQTTv5_API/",children:"MQTT API"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(621304).A+"",width:"954",height:"414"})}),"\n",(0,i.jsxs)(t.p,{children:["Now I can continue building the configuration topics according to the ",(0,i.jsx)(t.a,{href:"https://homieiot.github.io/specification/",children:"homie convention"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(372834).A+"",width:"996",height:"259"})}),"\n",(0,i.jsxs)(t.p,{children:["First we have to define the device by registering the ",(0,i.jsx)(t.code,{children:"$homie"})," version it is using, the ",(0,i.jsx)(t.code,{children:"$name"})," of the device, some more administrative work with the ",(0,i.jsx)(t.code,{children:"$extensions"})," and the online ",(0,i.jsx)(t.code,{children:"$state"})," that I have coupled to the camera ",(0,i.jsx)(t.strong,{children:"Last-Will & Testament"}),". The last point is a comma separated list of all the ",(0,i.jsx)(t.code,{children:"$nodes"})," we want to register to group ",(0,i.jsx)(t.code,{children:"$properties"})," that directly translate into ",(0,i.jsx)(t.strong,{children:"Thing"})," ",(0,i.jsx)(t.strong,{children:"Channels"})," and can be used as ",(0,i.jsx)(t.strong,{children:"Items"})," like switches or sliders:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(355769).A+"",width:"1022",height:"376"})}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"$node"})," then lists all the ",(0,i.jsx)(t.code,{children:"$properties"})," it contains and then defines each of those - that directly correspond to a MQTT command topic on my camera:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(85641).A+"",width:"1112",height:"363"})}),"\n",(0,i.jsx)(t.p,{children:"Every property here is, thanks to Node-RED, directly coupled with the camera API and will receive change updates:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(85641).A+"",width:"1112",height:"363"})}),"\n",(0,i.jsxs)(t.p,{children:["In OpenHAB you should now see a new ",(0,i.jsx)(t.strong,{children:"Thing"})," in your Inbox:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(271781).A+"",width:"1203",height:"596"})}),"\n",(0,i.jsx)(t.p,{children:"Select your camera from the inbox and add it:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(519516).A+"",width:"1201",height:"471"})}),"\n",(0,i.jsxs)(t.p,{children:["All ",(0,i.jsx)(t.strong,{children:"homie"})," ",(0,i.jsx)(t.code,{children:"&properties"})," should now show up as ",(0,i.jsx)(t.strong,{children:"Channels"})," and are ready to use as dashboard ",(0,i.jsx)(t.strong,{children:"Items"})," or for automation:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(743447).A+"",width:"1195",height:"600"})}),"\n",(0,i.jsxs)(t.p,{children:["To toggle a value use the ",(0,i.jsx)(t.code,{children:"/set"})," command - e.g. the state topic defined to turn the alarm on is ",(0,i.jsx)(t.code,{children:"homie/120/alarm/alarm-armed"}),". You can toggle it by publishing an update to ",(0,i.jsx)(t.code,{children:"homie/120/alarm/alarm-armed/set"}),". Make sure that all subscriptions are active and send an update to the set-command:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(43950).A+"",width:"900",height:"95"})}),"\n",(0,i.jsxs)(t.p,{children:["Updating the command topic ",(0,i.jsx)(t.code,{children:"homie/120/alarm/alarm-armed/set"})," will now also update the value of the state topic ",(0,i.jsx)(t.code,{children:"homie/120/alarm/alarm-armed"})," and of course, since it is coupled with the device API, it will actually update the state on your device as well:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"MQTT Auto-Discovery - Use Node-RED to register Smarthome Devices",src:o(833337).A+"",width:"1403",height:"795"})})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},943468:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_04-d7c7193502a52b04fd04e3b1be33bdd1.png"},993637:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/home_assistant_auto_discovery_node-red_00-2af8b3efb0ca126a1a9a35186e6df3cd.png"},241372:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/home_assistant_auto_discovery_node-red_01-3d5cbd41ce9285ba1cd0abbae8ea3917.png"},465303:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/home_assistant_auto_discovery_node-red_02-4788096d37511a591610843f6b2fa3d7.png"},621304:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_01-b5b67441b318d89f6ac9ea1e049a297b.png"},372834:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_02a-d6a6fed30f394a8d9dd2da67d72307e3.png"},355769:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_02b-0a6b98e740e40332d4cf7dfa9f3cbb08.png"},85641:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_03a-598aafd7470e5c741ab5eff6e64fbfa8.png"},271781:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_04-0417d4d0bbc3b14607a3dece9379cfa8.png"},519516:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_05-31e45566c138cb26ff91255a28cfe5c2.png"},743447:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_06-6fa1bb051ea73e23d06e83e91dfbe3f6.png"},43950:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_07-2bf103f75bff381827598e4ce8563e9c.png"},833337:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/homie_auto_discovery_node-red_08-36cb419c1ab4fc2ab73fcf7287c6b8e3.png"},167862:(e,t,o)=>{o.d(t,{A:()=>i});const i=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-877ed54046c637e78f96cc6a07569d43.jpg"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var i=o(296540);const s={},n=i.createContext(s);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);