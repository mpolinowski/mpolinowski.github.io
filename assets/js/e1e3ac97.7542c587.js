"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[18573],{16657:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=a(474848),n=a(28453);const i={sidebar_position:9040,slug:"2018-11-20",title:"Node-RED Interaction over HTTP",authors:"mpolinowski",tags:["IoT","Node-RED"]},r=void 0,s={id:"Automation_and_Robotics/Home_Automation/2018-11-20--nodered-http-connect/index",title:"Node-RED Interaction over HTTP",description:"Harbin, China",source:"@site/docs/Automation_and_Robotics/Home_Automation/2018-11-20--nodered-http-connect/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2018-11-20--nodered-http-connect",slug:"/Automation_and_Robotics/Home_Automation/2018-11-20--nodered-http-connect/2018-11-20",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-20--nodered-http-connect/2018-11-20",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2018-11-20--nodered-http-connect/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Node-RED",permalink:"/docs/tags/node-red"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2018-11-20",title:"Node-RED Interaction over HTTP",authors:"mpolinowski",tags:["IoT","Node-RED"]},sidebar:"tutorialSidebar",previous:{title:"Creating Node-RED Admin Panel using node-red-dashboard",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-21--nodered-dashboard-getting-started/2018-11-21"},next:{title:"A Collection of Node-RED MQTT Recipes",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-11-17--nodered-mqtt-connect/2018-11-17"}},d={},c=[];function l(e){const t={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Harbin, China",src:a(630076).A+"",width:"2176",height:"900"})}),"\n",(0,o.jsxs)(t.p,{children:["A collection of ",(0,o.jsx)(t.a,{href:"https://cookbook.nodered.org/http/",children:"HTTP recipes"})," for ",(0,o.jsx)(t.a,{href:"https://nodered.org",children:"Node-RED"})," - use the import feature to use:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Node-RED",src:a(690538).A+"",width:"950",height:"602"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'[{"id":"3c681253.aa4ade","type":"tab","label":"http magic","disabled":false,"info":""},{"id":"80872401.3206d8","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello","method":"get","swaggerDoc":"","x":80,"y":40,"wires":[["135db765.dafe79"]]},{"id":"135db765.dafe79","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\\n    <head></head>\\n    <body>\\n        <h1>Hello World!</h1>\\n    </body>\\n</html>","x":230,"y":40,"wires":[["c291ec46.38319"]]},{"id":"c291ec46.38319","type":"http response","z":"3c681253.aa4ade","name":"","x":370,"y":40,"wires":[]},{"id":"a90f0560.9d87e8","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\\n    <head></head>\\n    <body>\\n        <h1>Hello {{req.query.name}}!</h1>\\n    </body>\\n</html>","x":250,"y":100,"wires":[["b9be261c.23e078"]]},{"id":"918819e9.918768","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-query","method":"get","swaggerDoc":"","x":80,"y":100,"wires":[["a90f0560.9d87e8"]]},{"id":"b9be261c.23e078","type":"http response","z":"3c681253.aa4ade","name":"","x":390,"y":100,"wires":[]},{"id":"557ae155.bdb3f","type":"http response","z":"3c681253.aa4ade","name":"","x":450,"y":160,"wires":[]},{"id":"1540b4e5.3c429b","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\\n    <head></head>\\n    <body>\\n        <h1>Hello {{req.params.name}}!</h1>\\n    </body>\\n</html>","x":310,"y":160,"wires":[["557ae155.bdb3f"]]},{"id":"b486b3df.b88cc","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-param/:name","method":"get","swaggerDoc":"","x":110,"y":160,"wires":[["1540b4e5.3c429b"]]},{"id":"5d1573ae.cf787c","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-headers","method":"get","swaggerDoc":"","x":100,"y":220,"wires":[["4c54b269.478b9c"]]},{"id":"4c54b269.478b9c","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\\n    <head></head>\\n    <body>\\n        <h1>User agent: {{req.headers.user-agent}}</h1>\\n    </body>\\n</html>","x":280,"y":220,"wires":[["e9ad6e2f.89bd"]]},{"id":"e9ad6e2f.89bd","type":"http response","z":"3c681253.aa4ade","name":"","x":420,"y":220,"wires":[]},{"id":"fcfb1c0f.37bae","type":"inject","z":"3c681253.aa4ade","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":100,"y":300,"wires":[["a4ca8924.9f9318"]]},{"id":"a4ca8924.9f9318","type":"change","z":"3c681253.aa4ade","name":"Store time","rules":[{"t":"set","p":"timestamp","pt":"flow","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":270,"y":300,"wires":[[]]},{"id":"3b885f56.b5121","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-data","method":"get","swaggerDoc":"","x":120,"y":340,"wires":[["ade6d6a9.2b22b8"]]},{"id":"ade6d6a9.2b22b8","type":"change","z":"3c681253.aa4ade","name":"Copy time","rules":[{"t":"set","p":"timestamp","pt":"msg","to":"timestamp","tot":"flow"}],"action":"","property":"","from":"","to":"","reg":false,"x":200,"y":400,"wires":[["1f223db5.547852"]]},{"id":"1f223db5.547852","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\\n    <head></head>\\n    <body>\\n        <h1>Time: {{ timestamp }}</h1>\\n    </body>\\n</html>","x":310,"y":340,"wires":[["c8e904d1.7883c8"]]},{"id":"c8e904d1.7883c8","type":"http response","z":"3c681253.aa4ade","name":"","x":370,"y":400,"wires":[]},{"id":"905bb207.1e57b","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-json","method":"get","swaggerDoc":"","x":90,"y":480,"wires":[["ebdaf230.23dc4"]]},{"id":"ebdaf230.23dc4","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"{\\n    \\"title\\": \\"IN-9008 FHD :: Product Overview\\",\\n    \\"series\\": [\\"1080p\\", \\"Outdoor\\"],\\n    \\"models\\": [\\"IN-9008 HD\\"],\\n    \\"description\\": \\"IN-9008 HD Product Overview. 1.) High quality weatherproof aluminium housing, 2.) High-power infrared LED\xb4s for night vision, 3.) Standard 4.2mm F/2.1 infrared lense, 4.) Photodiode for twilight switch, 5.) Metall wallmount, 6.) Wifi antenna, 7.) RJ45 ethernet connector, 8.) Reset button, 9.) Alarm I/O connector for external devices, 10.) DC power supply connector, 11.) Audio output for external speakers, 12.) Audio input for external microphones. The IN-9008 HD is weather proof and wireless outdoor camera. Thanks to the built-in high-powered infrared diodes it utilizes night vision with high performance which allows you to see deep into the dark. The integrated IR cut filter on the other hand allows for the capturing of native colours, as seen by the human eye. Through the use of an efficient h.264 compression codec it is able of recording video files on a SD memory card with comparably small size but best picture results. For surveillance purposes, the IN-9008 HD is ready for implementation to your existing system. With the help of the handy Onvif Protocol, integration is just a few button presses away. But also as a stand-alone device it offers you a number of alarming features like Email Notification or compatibility with signalling devices. The WPS function allows you to connect the camera to your WiFi network with a press of a button. Accessing your camera from the internet is even easier. The Point-2-Point connection can be established by scanning a QR code with our smartphone app. The InstarVision mobile app is available for Android, iOS and Windows Phone 8. The sensitivity of the integrated Panasonic Pyroelectric Sensor has been significantly improved thanks to a unique slit design of the pyroelectric elements. The separated sensing areas prevent thermal crosstalk between the single sensing elements. Therefore, reliable detection is possible even if the temperature difference between the background (e.g. floor wall) and the target object (human) is small. (4\xb0C) Hardware Nightvision with 5 Infrared LED\xb4s @ 850nm (barely visible for the human eye) for distances up to 12 - 20m Very compact high quality IP65 weatherproof aluminium housing Integrated Panasonic Pyroelectric Sensor - PIR Range up to 12m Wide Dynamic Range (WDR) HD 1080p colour CMOS Sensor Network RJ-45 Ethernet port for an easy integration into your 100Mbit home network Compatible with Wifi IEEE 802.11 b/g/n up to 54Mbit networks with WEP, WPA and WPA2 security DHCP and UPnP support for an automatic network integration Integrated individual DDNS (Internet) address to access your camera through the Internet Software Free Android, iPhone and Windows Phone App Web user interface allows an easy configuration and canera control through your default web browser (Chrome, Safari, Firefox, Internet Explorer) Multi user management and simultaneous login for 3 users Software-based motion and audio detection and email notification with attached snapshots Record videos directly on your PC (only ActiveX). The 1/3 inch WDR sensor is a Panasonic CMOS chip, enabling 1080p HD video at unparalleled low-light sensitivity. Panasonic offers a wide variety of image sensors (\u03bdMaicovicon\xae) for security and network cameras, which are based on the industry most advanced technology and can be applied to security cameras requiring high picture quality with high sensitivity and low noise. The CMOS image sensor, \u03bdMaicovicon\xae, features high picture quality equal to high-speed CCD technologies, high S/N ratio, low noise, and high dynamic range. Even in a dark condition, you can retrieve snapshots with excellent character detection, color reproduction, as well as object detection. Even in scenes with fast-moving objects, the image sensor ensures clear images without motion blur or strain. The frame composite function (WDR) enables high-dynamic range - you can simultaneously resolve dark and bright areas in your video frame. Many built-in features allows you to use this camera not only for surveillance, but also for your personal projects. The FTP support allows you to use the IN-9008 HD as a multi functional outdoor webcam for integration on your website.\\",\\n    \\"sublink1\\": \\"/Outdoor_Cameras/IN-9008_HD/\\",\\n    \\"subtitle1\\": \\"IN-9008 HD \u2022 \\",\\n    \\"sublink2\\": \\"/Outdoor_Cameras/\\",\\n    \\"subtitle2\\": \\"Outdoor Cameras\\",\\n    \\"sublink3\\": \\"\\",\\n    \\"subtitle3\\": \\"\\",\\n    \\"sublink4\\": \\"\\",\\n    \\"subtitle4\\": \\"\\",\\n    \\"badge\\": \\"Manual\\",\\n    \\"title2\\": \\"IN-9008 FHD :: Produkt \xdcbersicht\\",\\n    \\"chapter\\": \\"INSTAR Products\\",\\n    \\"tags\\": [\\"IN-9008 HD\\", \\"INSTAR\\", \\"products\\", \\"1080p series\\", \\"indoor\\", \\"IP camera\\", \\"web cam\\", \\"overview\\"],\\n    \\"image\\": \\"/images/Search/P_SearchThumb_IN-9008HD.png\\",\\n    \\"imagesquare\\": \\"/images/Search/TOC_Icons/Wiki_Tiles_P-IN-9008HD_white.png\\",\\n    \\"short\\": \\"IN-9008 HD - Product Overview\\",\\n    \\"abstract\\": \\"IN-9008 HD Product Overview\\"\\n}","x":260,"y":480,"wires":[["55a221ea.ddea8"]]},{"id":"55a221ea.ddea8","type":"change","z":"3c681253.aa4ade","name":"Set Headers","rules":[{"t":"set","p":"headers","pt":"msg","to":"{}","tot":"json"},{"t":"set","p":"headers.content-type","pt":"msg","to":"application/json","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":420,"y":480,"wires":[["5db537e5.f88a08"]]},{"id":"5db537e5.f88a08","type":"http response","z":"3c681253.aa4ade","name":"","x":580,"y":480,"wires":[]},{"id":"b5a8500d.f5b2c","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-cookie","method":"get","swaggerDoc":"","x":100,"y":540,"wires":[["c1263851.637e08"]]},{"id":"c1263851.637e08","type":"function","z":"3c681253.aa4ade","name":"Format cookies","func":"msg.payload = JSON.stringify(msg.req.cookies,null,4);\\nreturn msg;","outputs":1,"noerr":0,"x":310,"y":540,"wires":[["5c97f560.45567c"]]},{"id":"5c97f560.45567c","type":"template","z":"3c681253.aa4ade","name":"page","field":"payload","fieldType":"msg","format":"handlebars","syntax":"mustache","template":"<html>\\n    <head></head>\\n    <body>\\n        <h1>Cookies</h1>\\n        <p></p><a href=\\"hello-cookie/add\\">Add a cookie</a> &bull; <a href=\\"hello-cookie/clear\\">Clear cookies</a></p>\\n        <pre>{{ payload }}</pre>\\n    </body>\\n</html>","x":500,"y":540,"wires":[["cf292169.1060d"]]},{"id":"cf292169.1060d","type":"http response","z":"3c681253.aa4ade","name":"","x":720,"y":540,"wires":[]},{"id":"d73d5ebe.6a9a2","type":"change","z":"3c681253.aa4ade","name":"Redirect to /hello-cookie","rules":[{"t":"set","p":"statusCode","pt":"msg","to":"302","tot":"num"},{"t":"set","p":"headers","pt":"msg","to":"{}","tot":"json"},{"t":"set","p":"headers.location","pt":"msg","to":"/hello-cookie","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":520,"y":600,"wires":[["cf292169.1060d"]]},{"id":"daab25e3.c2b7c8","type":"function","z":"3c681253.aa4ade","name":"Add a cookie","func":"msg.cookies = { };\\nmsg.cookies[\\"demo-\\"+(Math.floor(Math.random()*1000))] = Date.now();\\nreturn msg;","outputs":1,"noerr":0,"x":300,"y":580,"wires":[["d73d5ebe.6a9a2"]]},{"id":"f67f61ec.9dac5","type":"function","z":"3c681253.aa4ade","name":"Clear cookies","func":"// Find demo cookies and clear them\\nvar cookieNames = Object.keys(msg.req.cookies).filter(function(cookieName) { return /^demo-/.test(cookieName);});\\nmsg.cookies = {};\\n\\ncookieNames.forEach(function(cookieName) {\\n    msg.cookies[cookieName] = null;\\n});\\n\\nreturn msg;","outputs":1,"noerr":0,"x":310,"y":620,"wires":[["d73d5ebe.6a9a2"]]},{"id":"8542590b.3b24c8","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-cookie/add","method":"get","swaggerDoc":"","x":110,"y":580,"wires":[["daab25e3.c2b7c8"]]},{"id":"3d8b565f.d7239a","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-cookie/clear","method":"get","swaggerDoc":"","x":110,"y":620,"wires":[["f67f61ec.9dac5"]]},{"id":"ba4c3a84.bc4b88","type":"inject","z":"3c681253.aa4ade","name":"make request","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"x":110,"y":860,"wires":[["270c6fcf.f9f1f"]]},{"id":"270c6fcf.f9f1f","type":"http request","z":"3c681253.aa4ade","name":"","method":"GET","ret":"txt","url":"https://www.npmjs.com/package/node-red","tls":"","x":274.5,"y":860,"wires":[["c93c33e1.70d51"]]},{"id":"dd74f8da.f09aa8","type":"debug","z":"3c681253.aa4ade","name":"","active":true,"tosidebar":true,"console":false,"complete":"false","x":470,"y":860,"wires":[]},{"id":"c93c33e1.70d51","type":"html","z":"3c681253.aa4ade","name":"","property":"","outproperty":"","tag":".package__counter___2s5Ci","ret":"text","as":"single","x":330,"y":920,"wires":[["dd74f8da.f09aa8"]]},{"id":"e0a80ccc.cd2cb","type":"http in","z":"3c681253.aa4ade","name":"","url":"/hello-file","method":"get","swaggerDoc":"","x":90,"y":700,"wires":[["a2a4c8cd.ab2538"]]},{"id":"a2a4c8cd.ab2538","type":"file in","z":"3c681253.aa4ade","name":"","filename":"C:\\\\Users\\\\INSTAR\\\\.node-red\\\\temp\\\\fort.png","format":"","sendError":true,"x":200,"y":760,"wires":[["f6621622.ef73e8"]]},{"id":"f6621622.ef73e8","type":"change","z":"3c681253.aa4ade","name":"Set Headers","rules":[{"t":"set","p":"headers","pt":"msg","to":"{}","tot":"json"},{"t":"set","p":"headers.content-type","pt":"msg","to":"image/png","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":300,"y":700,"wires":[["8691a477.40c9b8"]]},{"id":"8691a477.40c9b8","type":"http response","z":"3c681253.aa4ade","name":"","x":430,"y":700,"wires":[]},{"id":"996d5241.94f1f","type":"http request","z":"3c681253.aa4ade","name":"","method":"GET","ret":"txt","url":"","x":440,"y":1000,"wires":[["c6ff9c2d.c996"]]},{"id":"bf19aeec.97129","type":"inject","z":"3c681253.aa4ade","name":"rss feed","topic":"","payload":"http://vancouver.craigslist.org/search/sss?format=rss&query=cars","payloadType":"str","repeat":"","crontab":"","once":false,"onceDelay":"","x":90,"y":1000,"wires":[["9373b92d.22fd28"]]},{"id":"9373b92d.22fd28","type":"change","z":"3c681253.aa4ade","name":"","rules":[{"t":"set","p":"url","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":280,"y":1000,"wires":[["996d5241.94f1f"]]},{"id":"c6ff9c2d.c996","type":"debug","z":"3c681253.aa4ade","name":"","active":true,"tosidebar":true,"console":false,"complete":"false","x":600,"y":1000,"wires":[]},{"id":"5eb8fc92.744284","type":"http request","z":"3c681253.aa4ade","name":"","method":"GET","ret":"txt","url":"https://jsonplaceholder.typicode.com/posts/{{post}}","tls":"","x":400,"y":1080,"wires":[["fd2534ea.053458"]]},{"id":"fd2534ea.053458","type":"debug","z":"3c681253.aa4ade","name":"","active":true,"tosidebar":true,"console":false,"complete":"payload","x":560,"y":1080,"wires":[]},{"id":"3d52a8bf.6c53b8","type":"inject","z":"3c681253.aa4ade","name":"post id","topic":"","payload":"2","payloadType":"str","repeat":"","crontab":"","once":false,"x":100,"y":1080,"wires":[["8b6e96c.6cd0d68"]]},{"id":"8b6e96c.6cd0d68","type":"change","z":"3c681253.aa4ade","name":"","rules":[{"t":"set","p":"post","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":240,"y":1080,"wires":[["5eb8fc92.744284"]]},{"id":"6f4bf643.a89ff8","type":"http request","z":"3c681253.aa4ade","name":"","method":"GET","ret":"txt","url":"https://wiki.instar.de/Search/Results?q={{{query}}}","tls":"","x":460,"y":1340,"wires":[["7ac7d192.cbd47"]]},{"id":"7ac7d192.cbd47","type":"debug","z":"3c681253.aa4ade","name":"","active":true,"console":"false","complete":"payload","x":620,"y":1340,"wires":[]},{"id":"76316725.0acdd8","type":"inject","z":"3c681253.aa4ade","name":"query parameter","topic":"","payload":"select astronomy.sunset from weather.forecast where woeid in (select woeid from geo.places(1) where text=\\"maui, hi\\")","payloadType":"str","repeat":"","crontab":"","once":false,"x":110,"y":1340,"wires":[["e3d5aa16.d8e528"]]},{"id":"e3d5aa16.d8e528","type":"change","z":"3c681253.aa4ade","name":"","rules":[{"t":"set","p":"query","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":290,"y":1340,"wires":[["6f4bf643.a89ff8"]]},{"id":"93e492a4.1094f","type":"http request","z":"3c681253.aa4ade","name":"","method":"GET","ret":"obj","url":"https://jsonplaceholder.typicode.com/posts/{{post}}","tls":"","x":400,"y":1140,"wires":[["937a0b9e.cac178"]]},{"id":"937a0b9e.cac178","type":"debug","z":"3c681253.aa4ade","name":"","active":true,"tosidebar":true,"console":false,"complete":"payload.title","x":580,"y":1140,"wires":[]},{"id":"8fdebd1f.f2fcf","type":"inject","z":"3c681253.aa4ade","name":"post id","topic":"","payload":"2","payloadType":"str","repeat":"","crontab":"","once":false,"x":100,"y":1140,"wires":[["44e33b78.cef614"]]},{"id":"44e33b78.cef614","type":"change","z":"3c681253.aa4ade","name":"","rules":[{"t":"set","p":"post","pt":"msg","to":"payload","tot":"msg"}],"action":"","property":"","from":"","to":"","reg":false,"x":240,"y":1140,"wires":[["93e492a4.1094f"]]}]\n'})})]})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},690538:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/node-red-http_01-ac00a082b68e1086e1f94b9c8e465a62.png"},630076:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/photo-33795443263_fcb0014fd2_o-0c403e729b22e94f8e428e95a1bbd28b.jpg"},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>s});var o=a(296540);const n={},i=o.createContext(n);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);