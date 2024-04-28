"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[21805],{435132:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(474848),s=o(28453);const r={sidebar_position:9090,slug:"2021-06-03",title:"Paho MQTT Client with Golang",authors:"mpolinowski",tags:["MQTT","Go"]},a=void 0,i={id:"Development/Go/2021-06-03--mqtt-with-golang/index",title:"Paho MQTT Client with Golang",description:"Mong Kok, Hongkong",source:"@site/docs/Development/Go/2021-06-03--mqtt-with-golang/index.md",sourceDirName:"Development/Go/2021-06-03--mqtt-with-golang",slug:"/Development/Go/2021-06-03--mqtt-with-golang/2021-06-03",permalink:"/docs/Development/Go/2021-06-03--mqtt-with-golang/2021-06-03",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-06-03--mqtt-with-golang/index.md",tags:[{label:"MQTT",permalink:"/docs/tags/mqtt"},{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2021-06-03",title:"Paho MQTT Client with Golang",authors:"mpolinowski",tags:["MQTT","Go"]},sidebar:"tutorialSidebar",previous:{title:"Go Websockets",permalink:"/docs/Development/Go/2021-09-10--go-websockets/2021-09-10"},next:{title:"GoFiber Container for your Gatsby Build",permalink:"/docs/Development/Go/2021-02-21-gofiber-container-gatsby/2021-02-21"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Run",id:"run",level:2},{value:"Parameter",id:"parameter",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Mong Kok, Hongkong",src:o(309850).A+"",width:"1500",height:"467"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/mpolinowski/go-mqtt-client",children:"Github Repository"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example we provide example code for TCP, Websocket, TLS, and Websockets protocols to connect to the MQTT Broker. For more documentation on the use of the go paho-mqtt client, see the ",(0,n.jsx)(t.a,{href:"https://godoc.org/github.com/eclipse/paho.mqtt.golang",children:"Go Client - documentation"})]}),"\n",(0,n.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"go version\r\n\r\ngo version go1.16.6 windows/amd64\n"})}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"github.com/eclipse/paho.mqtt.golang"}),": ",(0,n.jsx)(t.code,{children:"v1.3.5"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"github.com/gorilla/websocket"}),": ",(0,n.jsx)(t.code,{children:"v1.4.2"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"golang.org/x/net"}),": ",(0,n.jsx)(t.code,{children:"v0.0.0-20210805182204-aaa1db679c0d"})]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"go get github.com/eclipse/paho.mqtt.golang\r\ngo get github.com/gorilla/websocket\r\ngo get golang.org/x/net/proxy\n"})}),"\n",(0,n.jsx)(t.h2,{id:"run",children:"Run"}),"\n",(0,n.jsxs)(t.p,{children:["Add your broker data to ",(0,n.jsx)(t.code,{children:".main.go"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-go",children:'var Host     = flag.String("host", "192.168.2.111", "server hostname or IP")\r\nvar Port     = flag.Int("port", 8885, "server port")\r\nvar Action   = flag.String("action", "pubsub", "pub/sub/pubsub action")\r\nvar Protocol = flag.String("protocol", "ws", "mqtt/mqtts/ws/wss")\r\nvar Topic    = flag.String("topic", "cameras/go", "publish/subscribe topic")\r\nvar Username = flag.String("username", "admin", "mqtt broker username")\r\nvar Password = flag.String("password", "instar", "mqtt broker password")\r\nvar Qos      = flag.Int("qos", 1, "MQTT QOS")\r\nvar Tls      = flag.Bool("tls", false, "Enable TLS/SSL")\r\nvar CaCert   = flag.String("cacert", "./broker.ca.crt", "tls certificate")\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["In the example above I am using ",(0,n.jsx)(t.a,{href:"/docs/Development/Javascript/2021-06-02--mqtt-cheat-sheet/2021-06-02",children:"this Mosquitto broker"})," with active ",(0,n.jsx)(t.a,{href:"/docs/Development/Javascript/2021-06-01--mqtt-with-reactjs/2021-06-01#activating-websockets",children:"Websocket interface"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"go run main.go\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Go Paho MQTT Client",src:o(113308).A+"",width:"1075",height:"658"})}),"\n",(0,n.jsx)(t.h3,{id:"parameter",children:"Parameter"}),"\n",(0,n.jsx)(t.p,{children:"You can also override the default values by adding those parameters to the run command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"go run main.go -host \"192.168.2.111\" -port 8885 -protocol 'ws' -action 'pubsub' -topic 'cameras/go' -qos 1 -username 'admin' -password 'instar' -tls false -cacert './broker.ca.crt'\n"})})]})}function g(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},113308:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/MQTT_01-c93cfa4ceeb169c2dcc1de78a9fd74e9.png"},309850:(e,t,o)=>{o.d(t,{A:()=>n});const n=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-480e8525a0691c8ca9356ad3f7bede5d.jpg"},28453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(296540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);