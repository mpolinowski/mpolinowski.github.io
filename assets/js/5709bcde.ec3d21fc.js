"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[22827],{789652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(785893),s=n(603905);const i={sidebar_position:7020,slug:"2022-07-11",title:"Home Assistant - MQTT Auto-Discovery :: Automation",authors:"mpolinowski",tags:["IoT"]},a=void 0,r={id:"Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/index",title:"Home Assistant - MQTT Auto-Discovery :: Automation",description:"Guangzhou, China",source:"@site/docs/Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/index.md",sourceDirName:"Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii",slug:"/Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/index.md",tags:[{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:7020,frontMatter:{sidebar_position:7020,slug:"2022-07-11",title:"Home Assistant - MQTT Auto-Discovery :: Automation",authors:"mpolinowski",tags:["IoT"]},sidebar:"tutorialSidebar",previous:{title:"Home Assistant - MQTT Auto-Discovery :: Configuration",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-07-10-home-assistant-mqtt-autodiscovery-part-i/2022-07-10"},next:{title:"Home Assistant - Python Scripts as Service",permalink:"/docs/Automation_and_Robotics/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12"}},c={},d=[{value:"MQTT Autodiscovery",id:"mqtt-autodiscovery",level:2},{value:"Last Will Trigger",id:"last-will-trigger",level:3},{value:"Automation",id:"automation",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Guangzhou, China",src:n(743836).Z+"",width:"1500",height:"516"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"#mqtt-autodiscovery",children:"MQTT Autodiscovery"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#last-will-trigger",children:"Last Will Trigger"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#automation",children:"Automation"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"WIP"})}),"\n",(0,o.jsx)(t.h2,{id:"mqtt-autodiscovery",children:"MQTT Autodiscovery"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/mqtt/#mqtt-discovery",children:"discovery of MQTT devices"})," will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side: The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."]}),"\n",(0,o.jsxs)(t.p,{children:["In ",(0,o.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-10-home-assistant-mqtt-autodiscovery-part-i/2022-07-10",children:"Part I"}),' I looked into the configuration API and described the topic payloads needed to have Home Assistant add your camera as a new device when you connect it to the MQTT broker. Now I want to make sure that Home Assistant does not forget the device configuration if my broker "looses" those configuration topics.']}),"\n",(0,o.jsxs)(t.p,{children:["I will try to use an automation that is triggered when my camera comes ",(0,o.jsx)(t.code,{children:"alive"})," and feeds all those topics to my MQTT broker."]}),"\n",(0,o.jsx)(t.h3,{id:"last-will-trigger",children:"Last Will Trigger"}),"\n",(0,o.jsxs)(t.p,{children:["To use the automation I first need to define something that can trigger it - e.g. I can use the ",(0,o.jsx)(t.code,{children:"System Start"})," event. But a much cleaner solution is the Last-Will of my camera ",(0,o.jsx)(t.code,{children:"status/testament"})," that I configured to use the 2 strings ",(0,o.jsx)(t.code,{children:"alive"})," and ",(0,o.jsx)(t.code,{children:"dead"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(838410).Z+"",width:"909",height:"518"})}),"\n",(0,o.jsxs)(t.p,{children:["I now need to create a ",(0,o.jsx)(t.strong,{children:"MQTT Sensor"})," that reads the state of my camera's last-will:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'mqtt:\n  sensor:\n    - device:\n        identifiers: in9408_garden\n        manufacturer: INSTAR Deutschland GmbH\n        model: INSTAR 2k+ IN-9408 WLAN\n        name: IN-9408 2k+ Garden\n        configuration_url: "http://192.168.2.115:80"\n      availability:\n        topic: cameras/115/status/testament\n        payload_available: \'{"val":"alive"}\'\n        payload_not_available: \'{"val":"dead"}\'\n      object_id: in9408_garden_testament\n      unique_id: in9408_garden_testament\n      name: "LWT Garden"\n      state_topic: "cameras/115/status/testament"\n      value_template: "{{ value_json.val }}"\n      icon: mdi:coffin\n      qos: 1\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(234258).Z+"",width:"968",height:"425"})}),"\n",(0,o.jsx)(t.h3,{id:"automation",children:"Automation"}),"\n",(0,o.jsxs)(t.p,{children:["Now we can create the ",(0,o.jsx)(t.strong,{children:"Automation"})," that will publish all configuration topics for us:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(100249).Z+"",width:"958",height:"456"})}),"\n",(0,o.jsxs)(t.p,{children:["And select the state of our camera's last-will as the ",(0,o.jsx)(t.strong,{children:"Trigger"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(638187).Z+"",width:"965",height:"679"})}),"\n",(0,o.jsxs)(t.p,{children:["As ",(0,o.jsx)(t.strong,{children:"Action"})," we select ",(0,o.jsx)(t.strong,{children:"Call Service"})," and to execute the ",(0,o.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",children:"Python Script"})," I will use the ",(0,o.jsx)(t.strong,{children:"Shell Script"})," option in HA. Start by creating a ",(0,o.jsx)(t.code,{children:"shell"})," directory inside your config path and create a shell script ",(0,o.jsx)(t.code,{children:"mqtt_autodiscover_9408_garden.sh"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"mkdir config/shell\nnano config/shell/mqtt_autodiscover_9408_garden.sh\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The shell script only needs to direct the Python binary to the location you used for the ",(0,o.jsx)(t.a,{href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",children:"Python Script"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"mqtt_autodiscover_9408_garden.sh"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"#!/bin/bash\npython /config/python_scripts/mqtt5_client.py\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To activate the ",(0,o.jsx)(t.strong,{children:"Shell Extension"})," and expose our script to HA we need to add the following lines to the ",(0,o.jsx)(t.code,{children:"configuration.yml"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",children:"# Auto configure 9408 with mqtt\nshell_command:\n  mqtt_autodiscover_9408_garden: /bin/ash /config/shell//mqtt_autodiscover_9408_garden.sh\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Restart HA and you should be able to find your shell script in the ",(0,o.jsx)(t.strong,{children:"Call Service"})," category:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(162650).Z+"",width:"1068",height:"394"})}),"\n",(0,o.jsx)(t.p,{children:"You can test the automation by deleting all of the configuration topics you might already have added to your MQTT broker. Then take your camera offline. In my case the camera is also my broker - so HA will also loose the MQTT connection. After turning the camera back, after a while, you should see your script kicking into action and registering your camera:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Home Assistant MQTT Auto-Discovery",src:n(763971).Z+"",width:"969",height:"723"})})]})}function h(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>d});var o=n(667294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,s=function(e,t){if(null==e)return{};var n,o,s={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),m=d(n),u=s,p=m["".concat(c,".").concat(u)]||m[u]||l[u]||i;return n?o.createElement(p,a(a({ref:t},h),{},{components:n})):o.createElement(p,a({ref:t},h))}));h.displayName="MDXCreateElement"},838410:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_01-a4a00d4f2c816005195548b1bba080e5.png"},234258:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_02-b2988856c100d53c4d69a25392e664bb.png"},100249:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_03-b8a6bb93f335152355c9027963bd37fb.png"},638187:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_04-69b8b75566e6c78c1bf02de4e9ca1c81.png"},162650:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_05-c3cdfe3af5ad13e0275c177afd63b5bb.png"},763971:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_06-c664349f013a9f1447e80590e12af537.png"},743836:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-155e3666db02195caa838d2d6d5dc4bf.jpg"}}]);