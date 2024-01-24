"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[39114],{679944:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var s=r(785893),t=r(603905);const i={sidebar_position:9040,slug:"2022-09-27",title:"Analyzing and Decrypting TLS with Wireshark",authors:"mpolinowski",tags:["LINUX","Security"],description:"Capturing session keys to decrypt TLS traffic."},a=void 0,c={id:"DevOps/Security/2022-09-27--wireshark-with-tls-encryption/index",title:"Analyzing and Decrypting TLS with Wireshark",description:"Capturing session keys to decrypt TLS traffic.",source:"@site/docs/DevOps/Security/2022-09-27--wireshark-with-tls-encryption/index.md",sourceDirName:"DevOps/Security/2022-09-27--wireshark-with-tls-encryption",slug:"/DevOps/Security/2022-09-27--wireshark-with-tls-encryption/2022-09-27",permalink:"/docs/DevOps/Security/2022-09-27--wireshark-with-tls-encryption/2022-09-27",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Security/2022-09-27--wireshark-with-tls-encryption/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2022-09-27",title:"Analyzing and Decrypting TLS with Wireshark",authors:"mpolinowski",tags:["LINUX","Security"],description:"Capturing session keys to decrypt TLS traffic."},sidebar:"tutorialSidebar",previous:{title:"Server Security",permalink:"/docs/category/server-security"},next:{title:"Securing Webservers - Uncomplicated Firewall",permalink:"/docs/DevOps/Security/2020-07-28--uncomplicated-firewall-ufw/2020-07-28"}},l={},h=[{value:"Capture Session Keys (LINUX)",id:"capture-session-keys-linux",level:2},{value:"Decrypt HTTPs Session in Wireshark",id:"decrypt-https-session-in-wireshark",level:2},{value:"TLSv1.3 Handshake",id:"tlsv13-handshake",level:3},{value:"Client Hello",id:"client-hello",level:4},{value:"Server Hello",id:"server-hello",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"TST, Hong Kong",src:r(441920).Z+"",width:"1500",height:"517"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#capture-session-keys-linux",children:"Capture Session Keys (LINUX)"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#decrypt-https-session-in-wireshark",children:"Decrypt HTTPs Session in Wireshark"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#tlsv13-handshake",children:"TLSv1.3 Handshake"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#client-hello",children:"Client Hello"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#server-hello",children:"Server Hello"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"capture-session-keys-linux",children:"Capture Session Keys (LINUX)"}),"\n",(0,s.jsxs)(n.p,{children:["Open a terminal and set the SSL keylogger variable for this session (do not add this permanently, e.g. to ",(0,s.jsx)(n.code,{children:".zshrc"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export SSLKEYLOGFILE=/home/my-user/Documents/tls_keylog.log\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now start ",(0,s.jsx)(n.code,{children:"chromium"}),", ",(0,s.jsx)(n.code,{children:"chrome"})," or ",(0,s.jsx)(n.code,{children:"firefox"})," by typing the application name into your terminal and pressing enter. Just opening the browser should trigger a few key exchanges. But you can also browse the web and then check the log file:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"tls_keylog.log"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CLIENT_HANDSHAKE_TRAFFIC_SECRET ccda30d136b2...\r\nSERVER_HANDSHAKE_TRAFFIC_SECRET ccda30d136b2...\r\nCLIENT_TRAFFIC_SECRET_0 ccda30d136b2ea601eb...\r\nSERVER_TRAFFIC_SECRET_0 ccda30d136b2ea601e...\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can now use the captured keys to decrypt our web traffic with wireshark."}),"\n",(0,s.jsx)(n.h2,{id:"decrypt-https-session-in-wireshark",children:"Decrypt HTTPs Session in Wireshark"}),"\n",(0,s.jsxs)(n.p,{children:["I now open the web interface of my INSTAR IP camera while logging the web traffic in Wireshark. Here I can see a lot of ",(0,s.jsx)(n.code,{children:"TCP"})," and ",(0,s.jsx)(n.code,{children:"TLSv1.3"})," packets coming through:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(111908).Z+"",width:"1035",height:"462"})}),"\n",(0,s.jsx)(n.p,{children:"Now close the browser and stop the Wireshark capture. To clean up the log I can filter for frames that contain the IP address of my IP camera:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ip.addr == 192.168.2.115\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Right click one of the ",(0,s.jsx)(n.strong,{children:"Client Hello"})," packages and select to follow the ",(0,s.jsx)(n.strong,{children:"TCP Stream"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(426734).Z+"",width:"1187",height:"548"})}),"\n",(0,s.jsxs)(n.p,{children:["Close the opening window and select the first package that contains ",(0,s.jsx)(n.strong,{children:"Application Data"})," after the hello and cypher negotiation:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(879467).Z+"",width:"1178",height:"461"})}),"\n",(0,s.jsxs)(n.p,{children:["Right-click the package and open the ",(0,s.jsx)(n.strong,{children:"Transport Layer Security Preferences"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(946470).Z+"",width:"1150",height:"725"})}),"\n",(0,s.jsx)(n.p,{children:"Here you need to add the log file created earlier:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(624172).Z+"",width:"1092",height:"521"})}),"\n",(0,s.jsx)(n.p,{children:"The entries are now successfully decrypted and what showed up as encrypted application data before can now be identified as a TLS handshake:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(347475).Z+"",width:"1153",height:"462"})}),"\n",(0,s.jsx)(n.h3,{id:"tlsv13-handshake",children:"TLSv1.3 Handshake"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsxs)(n.em,{children:["see also ",(0,s.jsx)(n.a,{href:"https://tls13.xargs.org/",children:"tls13.xargs.org"})]})}),"\n",(0,s.jsxs)(n.p,{children:["To deeper analyze our now decrypted data we can open the ",(0,s.jsx)(n.strong,{children:"Conversations"})," window:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(560849).Z+"",width:"1153",height:"276"})}),"\n",(0,s.jsx)(n.p,{children:'Select a "conversation" and use it to filter our log file:'}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(598990).Z+"",width:"1188",height:"394"})}),"\n",(0,s.jsx)(n.h4,{id:"client-hello",children:"Client Hello"}),"\n",(0,s.jsxs)(n.p,{children:["The conversation starts with a TCP handshake that is followed by a ",(0,s.jsx)(n.strong,{children:"Client Hello"}),". In here our client - in this case our web-browser - states that it knows ",(0,s.jsx)(n.code,{children:"TLSv1.3"})," and ",(0,s.jsx)(n.code,{children:"TLSv1.2"})," and insists on the Elliptical Curve Diffie Hellman Ephemeral (",(0,s.jsx)(n.code,{children:"ECDHE"}),") Key Exchange and supports 16 different cypher suits for the data encryption:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(486456).Z+"",width:"1181",height:"617"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(222508).Z+"",width:"1163",height:"241"})}),"\n",(0,s.jsx)(n.h4,{id:"server-hello",children:"Server Hello"}),"\n",(0,s.jsxs)(n.p,{children:["The server (my IP camera) - now knowing what our client (the browser) supports - picks a TLS version, cypher suite and ellipsis it wants to use - ",(0,s.jsx)(n.code,{children:"Supported Version: TLS 1.3 (0x0304)"}),", ",(0,s.jsx)(n.code,{children:"Cipher Suite: TLS_AES_256_GCM_SHA384 (0x1302)"})," and ",(0,s.jsx)(n.code,{children:"Group: x25519 (29)"})," - and sends it's public key:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(743690).Z+"",width:"1163",height:"614"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(975904).Z+"",width:"1167",height:"115"})}),"\n",(0,s.jsx)(n.p,{children:"Once the encryption is established the server will send it's TLS certificate:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Analyzing and Decrypting TLS with Wireshark",src:r(801448).Z+"",width:"1168",height:"718"})})]})}function d(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>h});var s=r(667294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,s,t=function(e,n){if(null==e)return{};var r,s,t={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=s.createContext({}),h=function(e){var n=s.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},o={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},d=s.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=h(r),g=t,y=p["".concat(l,".").concat(g)]||p[g]||o[g]||i;return r?s.createElement(y,a(a({ref:n},d),{},{components:r})):s.createElement(y,a({ref:n},d))}));d.displayName="MDXCreateElement"},441920:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"},111908:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_01-2b7a820aa9632a29e23c3bcda447dd80.png"},426734:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_02-2842d40a7abd14f46733ffb3337ae641.png"},879467:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_03-9441944ba9f96ebcae3c86d833f2018a.png"},946470:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_04-92a40d6fd4a8ff77e25efb5a6572ab5e.png"},624172:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_05-a7f4f65ac958cf9944bb1da345c898df.png"},347475:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_06-288bd3e709c0927f187fa8a8fbecce62.png"},560849:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_07-c1c01d762234a682c399a59951b1fe32.png"},598990:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_08-c9565580fa98c7b8a9b07fe93d63ce05.png"},486456:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_09-d489cda33ea5192db46bf3420321cedd.png"},222508:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_10-3309e1184f84f6bffeaa100ac98819b9.png"},743690:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_11-e6b9bb4d5f33b64ff1588e230d4c3ad6.png"},975904:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_12-352a87c8f3d743d1e51cc026cae9b9f4.png"},801448:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/wireshark-with-tls-encryption_13-c01d7d32c6c02a811372466a9c2f4a89.png"}}]);