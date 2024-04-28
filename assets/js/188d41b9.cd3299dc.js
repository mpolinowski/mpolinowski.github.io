"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[22142],{844586:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=t(474848),n=t(28453);const o={sidebar_position:9090,slug:"2019-08-04",title:"MQTT Android Dashboards",authors:"mpolinowski",tags:["MQTT","IoT"]},d=void 0,r={id:"Automation_and_Robotics/MQTT/2019-08-04--mqtt-android-dashboards/index",title:"MQTT Android Dashboards",description:"Shanghai, China",source:"@site/docs/Automation_and_Robotics/MQTT/2019-08-04--mqtt-android-dashboards/index.mdx",sourceDirName:"Automation_and_Robotics/MQTT/2019-08-04--mqtt-android-dashboards",slug:"/Automation_and_Robotics/MQTT/2019-08-04--mqtt-android-dashboards/2019-08-04",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-04--mqtt-android-dashboards/2019-08-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/MQTT/2019-08-04--mqtt-android-dashboards/index.mdx",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2019-08-04",title:"MQTT Android Dashboards",authors:"mpolinowski",tags:["MQTT","IoT"]},sidebar:"tutorialSidebar",previous:{title:"MQTT Networks with OpenHAB 2",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-05--mqtt-openhab2/2019-08-05"},next:{title:"Debugging MQTT Sensor Networks",permalink:"/docs/Automation_and_Robotics/MQTT/2019-08-03--mqtt-debugging/2019-08-03"}},i={},c=[{value:"MQTT Dash (IoT, Smarthome)",id:"mqtt-dash-iot-smarthome",level:2},{value:"Mqtt Dashboard IoT and Node-RED controller",id:"mqtt-dashboard-iot-and-node-red-controller",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Shanghai, China",src:t(146799).A+"",width:"1500",height:"593"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#mqtt-dash-iot-smarthome",children:"MQTT Dash (IoT, Smarthome)"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#mqtt-dashboard-iot-and-node-red-controller",children:"Mqtt Dashboard IoT and Node-RED controller"})}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["There are a couple of MQTT apps available on the ",(0,a.jsx)(s.a,{href:"https://play.google.com/store/apps/collection/cluster?clp=ggEGCgRNUVRU:S:ANO1ljJ06xs&gsr=CgmCAQYKBE1RVFQ%3D:S:ANO1ljJL5rU",children:"Google Play Store"})," that allow you to control your INSTAR Full HD IP camera."]}),"\n",(0,a.jsxs)(s.p,{children:["They all offer, more or less, the same functions and similar interfaces. In the following we are going to take a look at two of them - the ",(0,a.jsx)(s.a,{href:"https://play.google.com/store/apps/details?id=net.routix.mqttdash",children:"MQTT Dash (IoT, Smarthome)"})," and ",(0,a.jsx)(s.a,{href:"https://play.google.com/store/apps/details?id=com.app.vetru.mqttdashboard",children:"MQTT Dashboard - IoT and Node-RED controller"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(52085).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsx)(s.h2,{id:"mqtt-dash-iot-smarthome",children:"MQTT Dash (IoT, Smarthome)"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(966334).A+"",width:"2048",height:"408"})}),"\n",(0,a.jsxs)(s.p,{children:["Once you ",(0,a.jsx)(s.a,{href:"https://play.google.com/store/apps/details?id=net.routix.mqttdash",children:"downloaded"}),", installed and started the app click on the ",(0,a.jsx)(s.strong,{children:"Plus"})," icon in the top right to add your MQTT broker - in our case, our INSTAR Full HD camera."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(317783).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsxs)(s.p,{children:["First, name your broker and type in the IP address of your camera. The default port to communicate with the MQTT Broker on your camera is ",(0,a.jsx)(s.strong,{children:"1883"}),". Add the username and password you set for your broker."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(562504).A+"",width:"2048",height:"402"})}),"\n",(0,a.jsx)(s.p,{children:"Once you saved your settings you will now see your new broker on the frontpage of your dashboard. Select it to continue."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(802449).A+"",width:"2048",height:"816"})}),"\n",(0,a.jsxs)(s.p,{children:["We can now add an UI element to interact with our camera. In this first example we will choose a ",(0,a.jsx)(s.strong,{children:"Switch/Button"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(31550).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsxs)(s.p,{children:["After naming your switch, you have to add the MQTT Topic that you want to update every time the switch is used. In this case we choose to activate/deactivate the ",(0,a.jsx)(s.strong,{children:"Alarm Area 1"})," of our camera. The corresponding MQTT Topic for this function is ",(0,a.jsx)(s.code,{children:"alarm/area1/enable"}),". To access this topic on our broker we have to add the keyword ",(0,a.jsx)(s.code,{children:"instar"})," and the ",(0,a.jsx)(s.strong,{children:"LAN MAC Address"})," of our camera - in my case this is ",(0,a.jsx)(s.code,{children:"000389888811"})," (you can find your cameras LAN MAC address in the Web User Interface."]}),"\n",(0,a.jsxs)(s.p,{children:["Now we have to ",(0,a.jsx)(s.strong,{children:"subscribe"})," to the ",(0,a.jsx)(s.strong,{children:"Status Topic"})," and ",(0,a.jsx)(s.strong,{children:"publish"})," Updates to the ",(0,a.jsx)(s.strong,{children:"Command Topic"})," (every time an topic is updated and the function on our camera triggered we receive an status update from MQTT broker to see that everything had worked.) The resulting topics look the following:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Command Topic"}),": ",(0,a.jsx)(s.code,{children:"instar/000389888811/alarm/area1/enable"})," (",(0,a.jsx)(s.em,{children:"for publishing"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Status Topic"}),": ",(0,a.jsx)(s.code,{children:"instar/000389888811/status/alarm/area1/enable"})," (",(0,a.jsx)(s.em,{children:"for subscriptions"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["In some cases we have to use a different ",(0,a.jsx)(s.strong,{children:"Command Topic"})," that allows us to send the message payload raw, without the JSON formating. So we are just sending ",(0,a.jsx)(s.code,{children:"1"})," as the message payload instead of the ",(0,a.jsx)(s.code,{children:"{'val':'1'}"}),". For this we have to add ",(0,a.jsx)(s.code,{children:"raw"})," to the topic that we want to update:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Command Topic"})," (RAW): ",(0,a.jsx)(s.code,{children:"instar/000389888811/alarm/area1/enable/raw"})," (",(0,a.jsx)(s.em,{children:"for publishing"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["The switch now can have 2 states - the area 1 is either active or not. You can check what values are available for a specific MQTT topic in our MQTT API documentation. The topic ",(0,a.jsx)(s.code,{children:"alarm/area1/enable"})," can either be ",(0,a.jsx)(s.code,{children:"{'val':'0'}"})," or ",(0,a.jsx)(s.code,{children:"{'val':'1'}"}),". We have to assign the first one to the ",(0,a.jsx)(s.em,{children:"OFF State"})," of our switch and the second to the ",(0,a.jsx)(s.em,{children:"ON State"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(899363).A+"",width:"2048",height:"510"})}),"\n",(0,a.jsxs)(s.p,{children:["Save those settings and repeat it for all 4 areas (Tip: press & hold the switch for area 1 to clone it 3 times. Now you just have to edit each clone and replace every ",(0,a.jsx)(s.code,{children:"area1"})," with the ",(0,a.jsx)(s.code,{children:"area2"}),", ",(0,a.jsx)(s.code,{children:"area3"})," or ",(0,a.jsx)(s.code,{children:"area4"}),", respectively)."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(155492).A+"",width:"2048",height:"1212"})}),"\n",(0,a.jsxs)(s.p,{children:["To show a different UI element we now want to add the alarm detection area ",(0,a.jsx)(s.strong,{children:"Sensitivity"})," to our UI. For this click on ",(0,a.jsx)(s.strong,{children:"Plus"})," and select ",(0,a.jsx)(s.strong,{children:"Range/progress"}),"."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(505821).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsxs)(s.p,{children:["The sensitivity can be accessed by the MQTT Topic ",(0,a.jsx)(s.code,{children:"alarm/area1/sensitivity"}),". The value here can be between ",(0,a.jsx)(s.code,{children:"{'val':'1'}"})," and ",(0,a.jsx)(s.code,{children:"{'val':'100'}"}),". To extract the number from this JSON expression we have to define the ",(0,a.jsx)(s.strong,{children:"JSON Path"})," ",(0,a.jsx)(s.code,{children:"$.val"}),". Now add the minimal (1) and maximal (100) value and make sure that precision is set to ",(0,a.jsx)(s.code,{children:"0"}),"!"]}),"\n",(0,a.jsxs)(s.p,{children:["Note that we are using the Status Topic ",(0,a.jsx)(s.code,{children:"instar/000389888811/status/alarm/area1/sensitivity"}),", that will give use the current state in the JSON format. For the Command Topic we have to use ",(0,a.jsx)(s.code,{children:"instar/000389888811/alarm/area1/sensitivity/raw"})," - the ",(0,a.jsx)(s.strong,{children:"raw"})," at the end means that we are able to send our data non-JSON formated."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(438711).A+"",width:"2048",height:"516"})}),"\n",(0,a.jsx)(s.p,{children:"After saving your settings you can now again clone the UI element for all 4 areas."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(295694).A+"",width:"2048",height:"768"})}),"\n",(0,a.jsx)(s.p,{children:"In a last step we can now add our cameras live image to our dashboard."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(45941).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsx)(s.p,{children:"Here we simply have to add our cameras snapshot path (just add your IP address and camera login):"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"http://IP-Address:Port/tmpfs/snap.jpg?usr=admin&pwd=instar"})," Snapshot (1080p)"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"http://IP-Address:Port/tmpfs/auto.jpg?usr=admin&pwd=instar"})," Snapshot (320p)"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"http://IP-Address:Port/tmpfs/auto2.jpg?usr=admin&pwd=instar"})," Snapshot (160p)"]}),"\n"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(638076).A+"",width:"2048",height:"768"})}),"\n",(0,a.jsx)(s.p,{children:"After setting the update interval and saving your settings, you should now be able to see your cameras live image on your MQTT dashboard. If you don't like the arrangement of the UI elements on your dash, click on the lock icon in the top right. When unlocked, you are able to rearrange each element."}),"\n",(0,a.jsx)(s.h2,{id:"mqtt-dashboard-iot-and-node-red-controller",children:"Mqtt Dashboard IoT and Node-RED controller"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(919733).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsx)(s.p,{children:"As mentioned above, the functions as well as the UI of all those MQTT apps is very similar. Just click to add your broker."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(317630).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsx)(s.p,{children:"Add your cameras MQTT service."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(70119).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsxs)(s.p,{children:["Now add a switch (",(0,a.jsx)(s.strong,{children:"Toogle"}),") to switch on/off your cameras alarm areas."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(490504).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsx)(s.p,{children:"Add the MQTT Topic and the available values this switch can have."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(721).A+"",width:"2048",height:"1536"})}),"\n",(0,a.jsxs)(s.p,{children:["For the Area sensitivity we can use the ",(0,a.jsx)(s.strong,{children:"Progress"})," UI element. And again, add the MQTT Topic and the available values this switch can have."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"INSTAR MQTT on Android",src:t(579610).A+"",width:"1536",height:"519"})})]})}function l(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},52085:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_01-b01e406465b7a7d0d907a58894fa1920.png"},966334:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_02-afcde0214f5ae78bfbec661972a136f8.png"},317783:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_03-13d45e30173457e51264d38852e97b00.jpg"},562504:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_04-ecd3bb78e8d13b5f36aa7dbf4160d5c0.png"},802449:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_05-68ed8af6b30f8c9edaed2a1cd69ca384.png"},31550:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_06-3049876d6b161bff4804e058400b5293.jpg"},899363:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_07-17c8d22979822dd594609dd0cf56bee4.png"},155492:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_08-c99552a6a6435af178769829bea0610a.png"},505821:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_09-32f63f60ca9784fe7b35965da3d9a6e5.jpg"},438711:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_10-559e82c5c7fee542f2ab9072e8454098.png"},295694:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_11-7caf79cb1bc806b4ab3b44d9ce2b7496.png"},45941:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_12-47c084e74d555eb8cdac639fdce9476a.jpg"},638076:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dash_Android_13-57a6d5d8921b29440ebcc7e7be4b50c9.png"},919733:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dashboard_Android_01-74cfcad54b7305f63fc467c7a9f0a9a4.png"},317630:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dashboard_Android_02-864a49f8f8c9378b25226cf1230ee2ac.png"},70119:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dashboard_Android_03-ccaa0facbd3fd50493c658ce9bfccb96.png"},490504:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dashboard_Android_04-dd88b1565de544dc368e10553d2185c8.png"},721:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dashboard_Android_05-5821575e789e8dfcfc2a6a80d5345c92.png"},579610:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/MQTT_Dashboard_Android_06-ec674aa08c56443eec0aa8e537046c25.png"},146799:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-82fdf12cd950617fc00a57289de75c24.jpg"},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>r});var a=t(296540);const n={},o=a.createContext(n);function d(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);