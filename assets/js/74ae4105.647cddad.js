"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[22958],{540257:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=t(785893),i=t(603905);const r={sidebar_position:6080,slug:"2022-07-22",title:"Go - MQTT Hello World",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"Writing a Go program that connects to my camera MQTT broker, subscribes to the last-will topic and publishes updates to the privacy mask to turn it on and off again after 15s. The client disconnects after 250ms after that."},a=void 0,s={id:"Automation_and_Robotics/MQTT/2022-07-22-go-hello-world/index",title:"Go - MQTT Hello World",description:"Writing a Go program that connects to my camera MQTT broker, subscribes to the last-will topic and publishes updates to the privacy mask to turn it on and off again after 15s. The client disconnects after 250ms after that.",source:"@site/docs/Automation_and_Robotics/MQTT/2022-07-22-go-hello-world/index.md",sourceDirName:"Automation_and_Robotics/MQTT/2022-07-22-go-hello-world",slug:"/Automation_and_Robotics/MQTT/2022-07-22-go-hello-world/2022-07-22",permalink:"/docs/Automation_and_Robotics/MQTT/2022-07-22-go-hello-world/2022-07-22",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/MQTT/2022-07-22-go-hello-world/index.md",tags:[{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:6080,frontMatter:{sidebar_position:6080,slug:"2022-07-22",title:"Go - MQTT Hello World",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"Writing a Go program that connects to my camera MQTT broker, subscribes to the last-will topic and publishes updates to the privacy mask to turn it on and off again after 15s. The client disconnects after 250ms after that."},sidebar:"tutorialSidebar",previous:{title:"Mosquitto Broker from Source",permalink:"/docs/Automation_and_Robotics/MQTT/2022-07-23-mosquitto-broker-compilation/2022-07-23"},next:{title:"Rust - MQTT Hello World",permalink:"/docs/Automation_and_Robotics/MQTT/2022-07-21-rust-hello-world/2022-07-21"}},l={},c=[{value:"Go Paho MQTT Client",id:"go-paho-mqtt-client",level:2},{value:"Connect to the MQTT broker",id:"connect-to-the-mqtt-broker",level:3},{value:"Running the Program",id:"running-the-program",level:3},{value:"Cross Compiling with Go",id:"cross-compiling-with-go",level:2}];function d(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Guangzhou, China",src:t(187598).Z+"",width:"2385",height:"962"})}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.a,{href:"#go-paho-mqtt-client",children:"Go Paho MQTT Client"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#connect-to-the-mqtt-broker",children:"Connect to the MQTT broker"})}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#running-the-program",children:"Running the Program"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.li,{children:(0,o.jsx)(e.a,{href:"#cross-compiling-with-go",children:"Cross Compiling with Go"})}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"go-paho-mqtt-client",children:"Go Paho MQTT Client"}),"\n",(0,o.jsxs)(e.p,{children:["I already wrote a ",(0,o.jsx)(e.a,{href:"/docs/IoT-and-Machine-Learning/MQTT/2021-09-12--golang-paho-mqtt/2021-09-12/",children:"Go MQTT client"})," before. I will try to expand this a little bit:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"go mod init go/go-mqtt\ngo get github.com/eclipse/paho.mqtt.golang@latest\n"})}),"\n",(0,o.jsx)(e.h3,{id:"connect-to-the-mqtt-broker",children:"Connect to the MQTT broker"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Broker IP"}),": ",(0,o.jsx)(e.code,{children:"192.168.2.115"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"MQTT Service Port"}),": ",(0,o.jsx)(e.code,{children:"1883"})]}),"\n",(0,o.jsxs)(e.li,{children:[(0,o.jsx)(e.strong,{children:"Broker Login"}),": ",(0,o.jsx)(e.code,{children:"admin/instar"})]}),"\n"]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Go - MQTT Hello World",src:t(430093).Z+"",width:"1031",height:"693"})}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.em,{children:"./main.go"})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-go",children:'package main\n\nimport (\n\t"fmt"\n\t"time"\n\n\tmqtt "github.com/eclipse/paho.mqtt.golang"\n)\n\nvar messagePubHandler mqtt.MessageHandler = func(client mqtt.Client, msg mqtt.Message) {\n\tfmt.Printf("Topic: %s | %s\\n", msg.Topic(), msg.Payload())\n}\n\nvar connectHandler mqtt.OnConnectHandler = func(client mqtt.Client) {\n\tfmt.Println("Connected")\n}\n\nvar connectLostHandler mqtt.ConnectionLostHandler = func(client mqtt.Client, err error) {\n\tfmt.Printf("Connect lost: %+v", err)\n}\n\nfunc main() {\n\tvar broker = "192.168.2.115"\n\tvar port = 1883\n\topts := mqtt.NewClientOptions()\n\topts.AddBroker(fmt.Sprintf("tcp://%s:%d", broker, port))\n\topts.SetClientID("go_mqtt_client")\n\topts.SetUsername("admin")\n\topts.SetPassword("instar")\n\topts.SetDefaultPublishHandler(messagePubHandler)\n\topts.OnConnect = connectHandler\n\topts.OnConnectionLost = connectLostHandler\n\tclient := mqtt.NewClient(opts)\n\tif token := client.Connect(); token.Wait() && token.Error() != nil {\n\t\tpanic(token.Error())\n\t}\n\n\tsub(client)\n\tpublish(client)\n\n\tclient.Disconnect(250)\n}\n\nfunc publish(client mqtt.Client) {\n\t// Turn privacy mask 1 on and off again after 15s\n\tnums := []int{1, 0}\n\tfor _, num := range nums {\n\t\tvalue := fmt.Sprintf("%d", num)\n\t\ttoken := client.Publish("cameras/115/multimedia/privacy/region1/enable/raw", 0, false, value)\n\t\ttoken.Wait()\n\t\ttime.Sleep(15 * time.Second)\n\t}\n}\n\nfunc sub(client mqtt.Client) {\n\t// Subscribe to the LWT connection status\n\ttopic := "cameras/115/status/testament"\n\ttoken := client.Subscribe(topic, 1, nil)\n\ttoken.Wait()\n\tfmt.Println("Subscribed to LWT", topic)\n}\n'})}),"\n",(0,o.jsx)(e.h3,{id:"running-the-program",children:"Running the Program"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:'go run .\\main.go\nConnected\nSubscribed to LWT cameras/115/status/testament\nTopic: cameras/115/status/testament | {"val":"alive"}\n'})}),"\n",(0,o.jsx)(e.p,{children:"The program connects to my camera broker, subscribes to the last-will topic and publishes updates to the privacy mask to turn it on and off again after 15s. The client disconnects after 250ms after that."}),"\n",(0,o.jsx)(e.p,{children:"To get a binary file out I can run the build command:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"go build ./main.go -o mqtt\n"})}),"\n",(0,o.jsxs)(e.p,{children:["And run the binary with ",(0,o.jsx)(e.code,{children:"./mqtt"}),"."]}),"\n",(0,o.jsx)(e.h2,{id:"cross-compiling-with-go",children:"Cross Compiling with Go"}),"\n",(0,o.jsx)(e.p,{children:"Go supports a variety of platforms and operating systems, including:"}),"\n",(0,o.jsxs)(e.ul,{children:["\n",(0,o.jsx)(e.li,{children:"Android"}),"\n",(0,o.jsx)(e.li,{children:"Darwin"}),"\n",(0,o.jsx)(e.li,{children:"Linux"}),"\n",(0,o.jsx)(e.li,{children:"Windows"}),"\n"]}),"\n",(0,o.jsxs)(e.p,{children:["The file created requires a 64bit ",(0,o.jsx)(e.code,{children:"x86-64"})," system to be executed:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"file main\nmain: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, Go BuildID=GkWKfp1sGIj5CJ0LesYM/P1txXPn8ar3YIQEGRF3P/hbjIOYuyC5-d1UMZN32q/CGL0UrtrAC1goylMkfFl, with debug_info, not stripped\n"})}),"\n",(0,o.jsx)(e.p,{children:"So how do I get a file that I can use on my IP camera that uses an ARM7 processor?"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"uname -m\narmv7l\n"})}),"\n",(0,o.jsx)(e.p,{children:"So how do I find out what systems are supported?"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"go tool dist list\n\nandroid/386\nandroid/amd64\nandroid/arm\nandroid/arm64\nios/amd64\nios/arm64\njs/wasm\nlinux/386\nlinux/amd64\nlinux/arm\nlinux/arm64\nlinux/loong64\nlinux/mips\nlinux/mips64\nlinux/mips64le\nlinux/mipsle\nlinux/ppc64\nlinux/ppc64le\nlinux/riscv64\nlinux/s390x\nwindows/386\nwindows/amd64\nwindows/arm\nwindows/arm64\n\n...\n"})}),"\n",(0,o.jsx)(e.p,{children:"I can add the information as a environment variable when running the build:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"env GOOS=linux GOARCH=arm go build -o mqtt_arm\n"})}),"\n",(0,o.jsx)(e.p,{children:"Now I got a binary that can be executed on a 32bit ARM system:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"file mqtt_arm\nmqtt_arm: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, Go BuildID=msMp-jFIWHH3UaYAwNkh/TSOtDFvNMz_m1j_2VuU-/jOS7whdSr12-3_dBf4qC/xOLKo5WJnx4cluesUzqW, with debug_info, not stripped\n"})}),"\n",(0,o.jsxs)(e.p,{children:["And this worked - just copying the binary onto my IP Camera and executing it and I got the broker connection. Very nice ",(0,o.jsx)(e.code,{children:"<3"})]})]})}function m(n={}){const{wrapper:e}={...(0,i.ah)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(d,{...n})}):d(n)}},603905:(n,e,t)=>{t.d(e,{ah:()=>c});var o=t(667294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,o,i=function(n,e){if(null==n)return{};var t,o,i={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,l=n.parentName,m=s(n,["components","mdxType","originalType","parentName"]),h=c(t),u=i,p=h["".concat(l,".").concat(u)]||h[u]||d[u]||r;return t?o.createElement(p,a(a({ref:e},m),{},{components:t})):o.createElement(p,a({ref:e},m))}));m.displayName="MDXCreateElement"},430093:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/Rust_MQTT_Hello_World_01-68435046037215dc6dc8ad7c87b5b34c.png"},187598:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4dda98a4eb3b498839926e0b6a5039aa.jpg"}}]);