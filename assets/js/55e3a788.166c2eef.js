"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[30101],{79126:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var n=s(474848),i=s(28453);const a={sidebar_position:6955,slug:"2024-01-09",title:"Home Assistant with RTSPtoWeb",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT"],description:"Home Assistant with WebRTC for INSTAR IP cameras using RTSPtoWeb."},o=void 0,r={id:"Automation_and_Robotics/Home_Automation/2024-01-09--home-assistant-rtsptoweb/index",title:"Home Assistant with RTSPtoWeb",description:"Home Assistant with WebRTC for INSTAR IP cameras using RTSPtoWeb.",source:"@site/docs/Automation_and_Robotics/Home_Automation/2024-01-09--home-assistant-rtsptoweb/index.md",sourceDirName:"Automation_and_Robotics/Home_Automation/2024-01-09--home-assistant-rtsptoweb",slug:"/Automation_and_Robotics/Home_Automation/2024-01-09--home-assistant-rtsptoweb/2024-01-09",permalink:"/docs/Automation_and_Robotics/Home_Automation/2024-01-09--home-assistant-rtsptoweb/2024-01-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2024-01-09--home-assistant-rtsptoweb/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:6955,frontMatter:{sidebar_position:6955,slug:"2024-01-09",title:"Home Assistant with RTSPtoWeb",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT"],description:"Home Assistant with WebRTC for INSTAR IP cameras using RTSPtoWeb."},sidebar:"tutorialSidebar",previous:{title:"INSTAR go2rtc for Home Assistant",permalink:"/docs/Automation_and_Robotics/Home_Automation/2024-01-10--go2rtc/2024-01-09"},next:{title:"Home Assistant, OpenHAB, Node-RED, ioBroker, MotionEye, ZoneMinder, Frigate, iSpy Agent, Kerberos Containerized (Docker)",permalink:"/docs/Automation_and_Robotics/Home_Automation/2023-04-18--home-assistant-node-red-iobroker-docker/2023-04-18"}},d={},l=[{value:"Making RTSP Streams Web-conform",id:"making-rtsp-streams-web-conform",level:2},{value:"RTSPtoWeb Installation",id:"rtsptoweb-installation",level:3},{value:"Add your Cameras",id:"add-your-cameras",level:3},{value:"Start the Application",id:"start-the-application",level:3},{value:"Home Assistant",id:"home-assistant",level:2},{value:"Installing Home Assistant",id:"installing-home-assistant",level:3},{value:"Installing HACS",id:"installing-hacs",level:3},{value:"Installing RTSPtoWebRTC",id:"installing-rtsptowebrtc",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Siem Reap, Cambodia",src:s(354524).A+"",width:"1500",height:"546"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Deprecated"}),": Use ",(0,n.jsx)(t.a,{href:"/docs/Automation_and_Robotics/Home_Automation/2024-01-10--go2rtc/2024-01-09",children:"go2rtc"})," instead of RTSPtoWeb."]}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#making-rtsp-streams-web-conform",children:"Making RTSP Streams Web-conform"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#rtsptoweb-installation",children:"RTSPtoWeb Installation"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#add-your-cameras",children:"Add your Cameras"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#start-the-application",children:"Start the Application"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#home-assistant",children:"Home Assistant"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#installing-home-assistant",children:"Installing Home Assistant"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#installing-hacs",children:"Installing HACS"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#installing-rtsptowebrtc",children:"Installing RTSPtoWebRTC"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"making-rtsp-streams-web-conform",children:"Making RTSP Streams Web-conform"}),"\n",(0,n.jsx)(t.h3,{id:"rtsptoweb-installation",children:"RTSPtoWeb Installation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/deepch/RTSPtoWeb",children:"github.com/deepch/RTSPtoWeb"})}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/deepch/RTSPtoWeb\r\ncd RTSPtoWeb\n"})}),"\n",(0,n.jsx)(t.h3,{id:"add-your-cameras",children:"Add your Cameras"}),"\n",(0,n.jsxs)(t.p,{children:["Edit ",(0,n.jsx)(t.code,{children:"./config.json"})," to add your RTSP streams:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'{\r\n  "server": {\r\n    "debug": true,\r\n    "http_debug": false,\r\n    "http_demo": true,\r\n    "http_dir": "web",\r\n    "http_login": "demo",\r\n    "http_password": "demo",\r\n    "http_port": ":8083",\r\n    "https": false,\r\n    "https_auto_tls": false,\r\n    "https_auto_tls_name": "",\r\n    "https_cert": "server.crt",\r\n    "https_key": "server.key",\r\n    "https_port": ":443",\r\n    "ice_servers": ["stun:stun.l.google.com:19302"],\r\n    "log_level": "debug",\r\n    "rtsp_port": ":5541",\r\n    "token": {\r\n      "backend": "http://127.0.0.1/test.php"\r\n    },\r\n    "defaults": {\r\n      "audio": true\r\n    }\r\n  },\r\n  "streams": {\r\n    "in-8015": {\r\n      "name": "INSTAR Full HD Camera",\r\n      "channels": {\r\n        "0": {\r\n          "name": "Full HD Stream",\r\n          "url": "rtsp://admin:instar@192.168.2.15/11",\r\n          "on_demand": true,\r\n          "debug": false,\r\n          "audio": true,\r\n          "status": 0\r\n        },\r\n        "1": {\r\n          "name": "HD Stream",\r\n          "url": "rtsp://admin:instar@192.168.2.15/12",\r\n          "on_demand": true,\r\n          "debug": false,\r\n          "audio": true,\r\n          "status": 0\r\n        }\r\n      }\r\n    },\r\n    "in-8415": {\r\n      "name": "INSTAR WQHD Camera",\r\n      "channels": {\r\n        "0": {\r\n          "name": "HD Stream",\r\n          "url": "rtsp://admin:instar@192.168.2.125:554/livestream/13",\r\n          "on_demand": true,\r\n          "debug": false,\r\n          "audio": true,\r\n          "status": 0\r\n        }\r\n      }\r\n    }\r\n  },\r\n  "channel_defaults": {\r\n    "on_demand": true\r\n  }\r\n}\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"})," that RTSPtoWeb ",(0,n.jsx)(t.a,{href:"https://github.com/deepch/RTSPtoWeb#limitations",children:"only supports h.264 with no audio"}),". For WQHD cameras you will have to switch the compression from ",(0,n.jsx)(t.code,{children:"h.265"})," to ",(0,n.jsx)(t.code,{children:"h.264"})," in the camera webUI."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"start-the-application",children:"Start the Application"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"GO111MODULE=on go run *.go\n"})}),"\n",(0,n.jsx)(t.p,{children:"And open the web user interface:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"http://127.0.0.1:8083\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(286766).A+"",width:"1163",height:"677"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(998245).A+"",width:"1242",height:"753"})}),"\n",(0,n.jsx)(t.h2,{id:"home-assistant",children:"Home Assistant"}),"\n",(0,n.jsx)(t.h3,{id:"installing-home-assistant",children:"Installing Home Assistant"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/Automation_and_Robotics/Home_Automation/2023-04-18--home-assistant-node-red-iobroker-docker/2023-04-18#home-assistant",children:"Run Home Assistant in Docker"})}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"installing-hacs",children:"Installing HACS"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Update"}),": It seems that installing HACS is no longer necessary. You can jump straight to installing the ",(0,n.jsx)(t.code,{children:"RTSP2WebRTC"})," integration below!"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Install the Home Assistant Community Store (HACS) inside the container:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker exec -ti home-assistant /bin/bash\r\nwget -O - https://get.hacs.xyz | bash -\n"})}),"\n",(0,n.jsx)(t.p,{children:"Restart Home Assistant and add the HACS integration:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(202380).A+"",width:"1119",height:"363"})}),"\n",(0,n.jsx)(t.p,{children:"You will need to have an Github account to be able to use the Github API:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(571477).A+"",width:"1013",height:"392"})}),"\n",(0,n.jsx)(t.h3,{id:"installing-rtsptowebrtc",children:"Installing RTSPtoWebRTC"}),"\n",(0,n.jsxs)(t.p,{children:["Go to the Integrations page and select an instance of ",(0,n.jsx)(t.strong,{children:"RTSPtoWebRTC"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(814970).A+"",width:"1129",height:"337"})}),"\n",(0,n.jsxs)(t.p,{children:["Install it and point it to your ",(0,n.jsx)(t.strong,{children:"RTSPtoWeb"})," interface URL, e.g. ",(0,n.jsx)(t.code,{children:"http://localhost:8083"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(132547).A+"",width:"1064",height:"304"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we can add our camera's live stream to Home Assistant through the ",(0,n.jsx)(t.code,{children:"RTSPtoWebRTC"})," integration. The ",(0,n.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/rtsp_to_webrtc",children:"RTSPtoWeb integration"})," registers with ",(0,n.jsx)(t.a,{href:"https://www.home-assistant.io/integrations/camera",children:"camera integration"})," to provide WebRTC live streams for any RTSP camera."]}),"\n",(0,n.jsxs)(t.p,{children:["So make sure that you have your cameras already added, e.g. as ",(0,n.jsx)(t.code,{children:"Generic Cameras"}),":"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(847272).A+"",width:"1133",height:"353"})}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"RTSPtoWebRTC"})," integration will now use ",(0,n.jsx)(t.strong,{children:"RTSPtoWeb"})," to receive the WebRTC stream from your generic camera's RTSP Stream:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(745137).A+"",width:"1132",height:"775"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Home Assistant with RTSPtoWeb",src:s(33206).A+"",width:"995",height:"311"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},286766:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_01a-5cee4edcf4082bf61e6e6f229bae01b5.png"},998245:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_01b-03fe20050a4217bec9cd5e651b8d849c.png"},202380:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_02-4a43116dffd2285efef59df6322d1685.png"},571477:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_03-d057464155d26365e381508519d60176.png"},814970:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_04-b84de4b27f07430d66de6c609e8f305e.png"},132547:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_05-7e60b4d7576ba298b3d85b3347c9b1de.png"},847272:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_06-b2ef16d01e4b406fdd96f45a0fe4f539.png"},745137:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_07-5767ac503172a335665163e4a1a9b7c8.png"},33206:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/Homeassistant_RTSPtoWebRTC_08-fcd56d07ba15fb478fade0826e3cd2ad.png"},354524:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e09c4b863b29d0c9c2cb81b620df559f.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var n=s(296540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);