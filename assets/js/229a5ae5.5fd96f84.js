"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[68404],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),h=m(a),p=s,c=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function p(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:s,i[1]=r;for(var m=2;m<o;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},33132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var n=a(87462),s=(a(67294),a(3905));const o={sidebar_position:8050,slug:"2018-11-30",title:"Home Assistant and MQTT",authors:"mpolinowski",tags:["IoT","Smarthome"]},i=void 0,r={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian/index",id:"IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian/index",title:"Home Assistant and MQTT",description:"Harbin, China",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian/index.mdx",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian",slug:"/IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian/2018-11-30",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian/2018-11-30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-30--home-assistant-on-debian/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Smarthome",permalink:"/docs/tags/smarthome"}],version:"current",sidebarPosition:8050,frontMatter:{sidebar_position:8050,slug:"2018-11-30",title:"Home Assistant and MQTT",authors:"mpolinowski",tags:["IoT","Smarthome"]},sidebar:"tutorialSidebar",previous:{title:"MQTT Camera AI Enhanced Security",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-23--mqtt-camera-ai-video-security/2019-09-23"},next:{title:"Node-RED and MQTT",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2018-11-29--node-red-and-mqtt/2018-11-29"}},l={},m=[{value:"Installation of Home Assistant on a Debian Stretch Server",id:"installation-of-home-assistant-on-a-debian-stretch-server",level:2},{value:"Installation of dependencies:",id:"installation-of-dependencies",level:3},{value:"Create a user and group",id:"create-a-user-and-group",level:3},{value:"Install Home Assistant",id:"install-home-assistant",level:3},{value:"Run Home Assistant as a Service",id:"run-home-assistant-as-a-service",level:3},{value:"Configuring Home Assistant",id:"configuring-home-assistant",level:2},{value:"Adding the MQTT Broker",id:"adding-the-mqtt-broker",level:3},{value:"The Home Assistant Lovelace UI",id:"the-home-assistant-lovelace-ui",level:2},{value:"Adding your camera&#39;s Live Video",id:"adding-your-cameras-live-video",level:3},{value:"Using Home Assistant as Alarmserver for your INSTAR Camera",id:"using-home-assistant-as-alarmserver-for-your-instar-camera",level:3}],d={toc:m};function u(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Harbin, China",src:a(29354).Z,width:"1500",height:"340"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#installation-of-home-assistant-on-a-debian-stretch-server"},"Installation of Home Assistant on a Debian Stretch Server"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#installation-of-dependencies"},"Installation of dependencies:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#create-a-user-and-group"},"Create a user and group")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#install-home-assistant"},"Install Home Assistant")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#run-home-assistant-as-a-service"},"Run Home Assistant as a Service")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#configuring-home-assistant"},"Configuring Home Assistant"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#adding-the-mqtt-broker"},"Adding the MQTT Broker")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#the-home-assistant-lovelace-ui"},"The Home Assistant Lovelace UI"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#adding-your-cameras-live-video"},"Adding your camera's Live Video")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#using-home-assistant-as-alarmserver-for-your-instar-camera"},"Using Home Assistant as Alarmserver for your INSTAR Camera"))))),(0,s.kt)("div",{class:"primarybox"},(0,s.kt)("h3",null,"INSTAR MQTT Broker"),(0,s.kt)("p",null,"The MQTT Interface enables you to access all camera functions through the native MQTT support from the Home Assistant Lovelace UI!")),(0,s.kt)("h2",{id:"installation-of-home-assistant-on-a-debian-stretch-server"},"Installation of Home Assistant on a Debian Stretch Server"),(0,s.kt)("h3",{id:"installation-of-dependencies"},"Installation of dependencies:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\nsudo apt install python3-dev python3-pip python3-venv\nsudo pip3 install --upgrade virtualenv\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(29266).Z,width:"730",height:"136"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"create-a-user-and-group"},"Create a user and group"),(0,s.kt)("p",null,"Give the user access to serial lines (zwave, insteon, etc):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo adduser --system homeassistant\nsudo addgroup homeassistant\nsudo adduser homeassistant dialout\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(35831).Z,width:"730",height:"187"})),(0,s.kt)("hr",null),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create a directory to install HA in and set its ownership and permissions.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /opt/homeassistant\nsudo chown homeassistant:homeassistant /opt/homeassistant\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(22378).Z,width:"730",height:"56"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Change to the homeassistant user to do the installs.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo su -s /bin/bash homeassistant\n")),(0,s.kt)("h3",{id:"install-home-assistant"},"Install Home Assistant"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Install a virtual env to sandbox the Home Assistant software and dependencies and activate it so further installs are done here.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/homeassistant\npython3 -m venv /opt/homeassistant\nsource bin/activate\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(48092).Z,width:"730",height:"48"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Install HA from pip. You might get some pip install errors that do not cause an issue later on:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install --upgrade homeassistant\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(81939).Z,width:"730",height:"463"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Open another terminal and login with your default (sudo enabled) user and open the Home Assistant port ",(0,s.kt)("inlineCode",{parentName:"li"},"8123")," in your Firewall:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo firewall-cmd --permanent --zone=public --add-port=8123/tcp\nsudo firewall-cmd --reload\nsudo firewall-cmd --list-all\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(42211).Z,width:"730",height:"301"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Then switch back to the homeassistant user."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"To keep all the config and log files in the same directory (rather than having them in /home/homassistant) we can run Home Assistant with the following command:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir config\n./bin/hass -c /opt/homeassistant/config --log-file /opt/homeassistant/hass.log\n")),(0,s.kt)("p",null,"Home Assistant should install a few things and make a default config file (let it run for a little while - it takes a bit on the first start up). Hit ctrl-c to stop it. The config directory now contains a bunch of sample config files for you to edit."),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(64219).Z,width:"730",height:"93"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:5},(0,s.kt)("li",{parentName:"ol"},"You can now access Home Assistants web interface by opening the following URL (exchange the IP address ",(0,s.kt)("strong",{parentName:"li"},"192.168.2.111")," with the IP of your Linux Server) inside your webbrowser ",(0,s.kt)("inlineCode",{parentName:"li"},"http://192.168.2.111:8123/"),":")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(35422).Z,width:"730",height:"480"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:6},(0,s.kt)("li",{parentName:"ol"},"Type in your preferred login credentials and click to create the account:")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(31386).Z,width:"730",height:"427"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:7},(0,s.kt)("li",{parentName:"ol"},"And login to the Home Assistant web interface using your credentials:")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(10417).Z,width:"730",height:"444"})),(0,s.kt)("hr",null),(0,s.kt)("ol",{start:8},(0,s.kt)("li",{parentName:"ol"},"Hit ctrl-c to stop Home Assistants. The config directory now contains a bunch of sample config files for you to edit.")),(0,s.kt)("h3",{id:"run-home-assistant-as-a-service"},"Run Home Assistant as a Service"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Assuming it works, exit the homeassistant user, change to the ",(0,s.kt)("inlineCode",{parentName:"li"},"/etc/systemd/system/")," directory and create a service to start Home Assistant automatically.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"exit\ncd /etc/systemd/system/\nsudo nano homeassistant.service\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Create the following ",(0,s.kt)("inlineCode",{parentName:"li"},"systemd init")," file:")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(39939).Z,width:"730",height:"189"})),(0,s.kt)("hr",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Home Assistant\nAfter=network.target mosquitto.service\n\n[Service]\nType=simple\nUser=homeassistant\nExecStart=/opt/homeassistant/bin/hass -c /opt/homeassistant/config --log-file /opt/homeassistant/hass.log\n\n[Install]\nWantedBy=multi-user.target\n")),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Exit the homeassistant user, copy the service file to the system, and ",(0,s.kt)("inlineCode",{parentName:"li"},"update systemd")," to run the service.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl --system daemon-reload\nsudo systemctl enable homeassistant\nsudo systemctl start homeassistant\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"If something goes wrong with the start command, check the logs:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status homeassistant\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(17416).Z,width:"730",height:"345"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Finally, to make it easier to edit config files and try out code changes, give your regular user write permissions in the ",(0,s.kt)("inlineCode",{parentName:"p"},"homeassistant directory"),". For this we need to assign both our regular user - in my case this is the ",(0,s.kt)("inlineCode",{parentName:"p"},"nodeadmin")," - and the homeassistant user to the ",(0,s.kt)("inlineCode",{parentName:"p"},"homeassistant group"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo groupadd homeassistant\nsudo usermod -a -G homeassistant nodeadmin\nsudo usermod -a -G homeassistant homeassistant\n")),(0,s.kt)("p",null,"Make sure that both users are inside the created group:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(63003).Z,width:"730",height:"78"})),(0,s.kt)("hr",null),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chgrp -R homeassistant /opt/homeassistant\nsudo chmod -R g+w /opt/homeassistant/\n")),(0,s.kt)("h2",{id:"configuring-home-assistant"},"Configuring Home Assistant"),(0,s.kt)("p",null,"We set up Home Assistant to be installed in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/homeassistant"),". The configuration file can be found in the ",(0,s.kt)("inlineCode",{parentName:"p"},"config")," subfolder. Let's open up the file to take a look at it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo nano /opt/homeassistant/config/configuration.yaml\n")),(0,s.kt)("h3",{id:"adding-the-mqtt-broker"},"Adding the MQTT Broker"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(3074).Z,width:"730",height:"190"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"The first thing we should do, is adding our Mosquitto server (192.168.2.111) as MQTT broker. We can do this by adding the following lines at the end of the document:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"# MQTT Communication\n\nmqtt:\n  broker: 192.168.2.111\n  port: 1883\n  user: debian\n  password: mysecretpassword\n")),(0,s.kt)("br",null),(0,s.kt)("br",null),(0,s.kt)("p",null,"To verify that we did not mess up the configuration we can go to the ",(0,s.kt)("strong",{parentName:"p"},"Configuration Tab")," in Home Assistant:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(98032).Z,width:"730",height:"382"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Open the ",(0,s.kt)("strong",{parentName:"p"},"General")," section:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(50674).Z,width:"730",height:"471"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Click on ",(0,s.kt)("strong",{parentName:"p"},"Check Config")," and - ",(0,s.kt)("strong",{parentName:"p"},"when it passes")," - click on ",(0,s.kt)("strong",{parentName:"p"},"Restart Server"),":"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(18903).Z,width:"730",height:"792"})),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"the-home-assistant-lovelace-ui"},"The Home Assistant Lovelace UI"),(0,s.kt)("p",null,"Now we can start with adding components to the Home Assistant UI - called ",(0,s.kt)("strong",{parentName:"p"},"Lovelace"),". Note that the INSTAR MQTT Broker is only included in ",(0,s.kt)("em",{parentName:"p"},"INSTAR Full HD cameras"),". If you are using a HD (720p) or VGA camera you can still use MQTT to connect your camera."),(0,s.kt)("h3",{id:"adding-your-cameras-live-video"},"Adding your camera's Live Video"),(0,s.kt)("p",null,"Home Assistant comes with a ",(0,s.kt)("strong",{parentName:"p"},"Camera Module")," that we can use to add our camera's Live Video. Lets start by accessing the ",(0,s.kt)("inlineCode",{parentName:"p"},"configuration.yaml"),". When you followed the steps above you will find this file in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/homeassistant/config/configuration.yaml"),". Open the configuration file and add the line ",(0,s.kt)("inlineCode",{parentName:"p"},"/home/pi/.homeassistant/configuration.yaml"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"camera: !include cameras.yaml\n")),(0,s.kt)("p",null,"Now create the ",(0,s.kt)("inlineCode",{parentName:"p"},"cameras.yaml")," file next to the configuration file and add the following lines:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- platform: generic\n  name: 'IN-8015FHD'\n  still_image_url: http://192.168.2.165/tmpfs/snap.jpg\n  stream_source: 'rtsp://192.168.2.165:554/11'\n  verify_ssl: false\n  authentication: 'basic'\n  username: 'admin'\n  password: 'instar'\n")),(0,s.kt)("p",null,"In case you need to restrict the bandwidth this live stream is requiring, use ",(0,s.kt)("inlineCode",{parentName:"p"},"auto.jpg")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"auto2.jpg")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"snap.jpg")," in the ",(0,s.kt)("strong",{parentName:"p"},"still_image_url")," above. Also the RTSP ",(0,s.kt)("strong",{parentName:"p"},"stream_source")," can use a smaller live stream by replacing the ",(0,s.kt)("inlineCode",{parentName:"p"},"/11")," with a ",(0,s.kt)("inlineCode",{parentName:"p"},"/12")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"/13"),". Alternatively, you can access your camera's MJPEG stream with the following configuration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- platform: mjpeg\n  name: 'IN-9010FHD'\n  mjpeg_url: http://192.168.2.117/mjpegstream.cgi?-chn=11\n  verify_ssl: false\n  authentication: 'basic'\n  username: 'admin'\n  password: 'instar'\n")),(0,s.kt)("p",null,"And again, to reduce the bandwidth requirements of this live stream use ",(0,s.kt)("inlineCode",{parentName:"p"},"chn=12")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"chn=13")," instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"chn=11"),"."),(0,s.kt)("p",null,"This will add a local INSTAR HD or Full HD camera with the IP address ",(0,s.kt)("inlineCode",{parentName:"p"},"192.168.2.165")," on the default HTTP Port ",(0,s.kt)("inlineCode",{parentName:"p"},"80")," and with the default RTSP Port 554. The camera login is ",(0,s.kt)("inlineCode",{parentName:"p"},"admin/instar")," in this example - but note: you do not need to use the Administrator account to access the live video."),(0,s.kt)("p",null,"Now reload Home Assistant to be able to see the changes you just made. Once the UI is back up, click on ",(0,s.kt)("strong",{parentName:"p"},"Configure UI")," in the top right:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(19965).Z,width:"867",height:"260"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"You might want to add a new Tab for your camera by clicking on the small ",(0,s.kt)("strong",{parentName:"p"},"+")," icon next to your existing tabs. Then click on the big ",(0,s.kt)("strong",{parentName:"p"},"+ Button")," to add a new card."),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(7870).Z,width:"869",height:"259"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Here we have to add a new Entity and select the camera that we just added - in the case above this was ",(0,s.kt)("inlineCode",{parentName:"p"},"camera.in_8015fhd"),":"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(76801).Z,width:"872",height:"280"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(85849).Z,width:"870",height:"763"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Save your setting and quit the UI configuration mode. You should see a small tile with a snapshot from your camera. Click on it to be directed to the live video:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(92400).Z,width:"868",height:"688"})),(0,s.kt)("hr",null),(0,s.kt)("h3",{id:"using-home-assistant-as-alarmserver-for-your-instar-camera"},"Using Home Assistant as Alarmserver for your INSTAR Camera"),(0,s.kt)("p",null,"All INSTAR Full HD cameras have a function to send a POST request to a HTTP Webhook when an alarm is triggered (HD cameras currently only support GET requests that are not supported by Home Assistant - though you will be able to use Node-RED to receive a GET request from your HD camera and trigger a POST request to Home Assistant)."),(0,s.kt)("p",null,"When such a post request is received by Home Assistant such an event can be used as a trigger for your automation to control your INSTAR Full HD camera."),(0,s.kt)("p",null,"To set up a Webhook that can be used by your camera first open the Lovelace UI and go to ",(0,s.kt)("strong",{parentName:"p"},"Configuration")," and open the ",(0,s.kt)("strong",{parentName:"p"},"Automation")," tab:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(51399).Z,width:"918",height:"705"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Click on the ",(0,s.kt)("strong",{parentName:"p"},"+")," icon to add a new automation and select ",(0,s.kt)("strong",{parentName:"p"},"Webhook")," as the automation trigger - the name you choose here for the Webhook will be used to name the resulting URL e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"mqtt_test")," (better don't use spaces or special characters):"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(25710).Z,width:"914",height:"636"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Now we need to define an action that we want to trigger. For this we are going to use a ",(0,s.kt)("strong",{parentName:"p"},"MQTT Publish")," service we created in the. This service requires a MQTT topic (",(0,s.kt)("em",{parentName:"p"},"Target"),") and a MQTT message payload (",(0,s.kt)("em",{parentName:"p"},"Message"),") to be passed down:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "{\\"val\\":\\"1\\"}",\n  "target": "instar/000389888811/features/ptz/preset"\n}\n')),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(75929).Z,width:"918",height:"806"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Here we choose the ",(0,s.kt)("inlineCode",{parentName:"p"},"features/ptz/preset")," MQTT Topic and send the payload value ",(0,s.kt)("inlineCode",{parentName:"p"},"1")," which will tell the camera with the MAC address ",(0,s.kt)("inlineCode",{parentName:"p"},"000389888811")," to move to ",(0,s.kt)("strong",{parentName:"p"},"Preset Position 2")," (numbering of those positions starts at ",(0,s.kt)("inlineCode",{parentName:"p"},"0"),")."),(0,s.kt)("p",null,"When you hit ",(0,s.kt)("strong",{parentName:"p"},"Save")," this automation will be saved inside the ",(0,s.kt)("inlineCode",{parentName:"p"},"automations.yaml")," file inside the Home Assistant directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- id: '1571301476710'\n  alias: TEST MQTT Webhook\n  trigger:\n  - platform: webhook\n    webhook_id: mqtt_test\n  condition: []\n  action:\n  - data:\n      message: '{\"val\":\"1\"}'\n      target: instar/000389888811/features/ptz/preset\n    service: script.send_mqtt_command\n")),(0,s.kt)("p",null,"You could test triggering the above automation by sending a ",(0,s.kt)("strong",{parentName:"p"},"POST HTTP Request")," to"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},"http://your-home-assistant:8123/api/webhook/mqtt_test\n")),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(6788).Z,width:"935",height:"687"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Sending the command ",(0,s.kt)("inlineCode",{parentName:"p"},'curl -d "" http://192.168.2.43:8123/api/webhook/mqtt_test')," triggers the automation and sends the camera into the second preset position."),(0,s.kt)("p",null,"Now that we know that our automation is working and the Webhook is set up, we can configure our camera to contact Home Assistant when an Alarm is triggered by the camera internal detection systems. Please open the Alarmserver configuration inside your camera's web user interface and add the Home Assistant Webhook to the following form. You have to activate the POST Request and add a dummy request parameter - in the screenshot below we added ",(0,s.kt)("inlineCode",{parentName:"p"},"homeassistant=alarm"),". But this parameter can be chosen freely:"),(0,s.kt)("hr",null),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(39773).Z,width:"766",height:"489"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Home Assistant with your INSTAR IP Camera",src:a(90131).Z,width:"766",height:"208"})),(0,s.kt)("hr",null),(0,s.kt)("p",null,"Now, every time an alert is triggered our camera will contact it's Alarmserver - the Home Assistant installation - and start the automation."))}u.isMDXComponent=!0},29266:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_01-ae033b62ac2f4f90a92216dc6364b0c8.png"},35831:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_02-92586656817c8b708fe080b2ba9e4e09.png"},22378:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_03-635242340cc89a51a9a63061fa708944.png"},48092:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_04-7034c42e50e0413f194a9d33b3bc6202.png"},81939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_05-8b92bff1969f1fa3846da4d9300f296a.png"},42211:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_06-949facacd433b55e0184aef8e0f4b515.png"},64219:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_07-67146e8e1a0b6b51d215af926505bc07.png"},35422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_08-2410d57a45c6f8adddcd8143d343412c.png"},31386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_09-78e2436511d836a6ef85eafefb9d7547.png"},10417:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_10-a7d352fcef1edc33bfd4f82b0f3f04e6.png"},39939:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_11-6e3ebee78b61e099aac73a4dd91b8b13.png"},17416:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_12-b6521a21c887917ec25dcbb81a8a38d3.png"},63003:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_13-cf154c06d829d0a6b16aa8683bd12c33.png"},3074:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_14-8ea097d83f77c791b2f7d4f75ee6290b.png"},98032:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_15-169c35b429453429ce59d04f5d164bce.png"},50674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_16-4be71fb0cf8afd664968af36f325b695.png"},18903:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_17-e81decf43b4549aa20258586de6398d5.png"},19965:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_18-560fc184d467fb40471ea8c8ccd7cbcd.png"},7870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_19-e9a9d5d8c1c8718bc05f26c01c7133bf.png"},76801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_20-6bd4df401938d3ffc6dce101f9ae7f9c.png"},85849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_21-6864516604f7dda5c6c0b76970283a8f.png"},92400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_22-3c70ab30d117126b58ab6b92ab3352d0.png"},51399:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_23-c8cc603dc0221495b968ae9bf95d75b6.png"},25710:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_24-d3c021a379f3b4f796f3b237fb4e5ed8.png"},75929:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_25-a879ba61d074747b563f94ce8fdaf982.png"},6788:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_26-c9775198637b6d38d2169ab360923e64.png"},39773:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_27-001b43e53614632c47d3867dbb945c4e.png"},90131:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HomeAssistant_28-151d4ffa3529fec5d3fa133525264af1.png"},29354:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-c3a3f24fb7e47a009036ea5b619329d1.jpg"}}]);