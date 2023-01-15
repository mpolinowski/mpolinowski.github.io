"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[86788],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const i={sidebar_position:5990,slug:"2022-10-30",title:"WebRTC Introduction - Client Side Signalling",authors:"mpolinowski",tags:["Javascript","WebRTC"],description:"Signalling intend from the web client"},r=void 0,c={unversionedId:"Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/index",id:"Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/index",title:"WebRTC Introduction - Client Side Signalling",description:"Signalling intend from the web client",source:"@site/docs/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/index.md",sourceDirName:"Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1",slug:"/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/2022-10-30",permalink:"/docs/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/2022-10-30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"WebRTC",permalink:"/docs/tags/web-rtc"}],version:"current",sidebarPosition:5990,frontMatter:{sidebar_position:5990,slug:"2022-10-30",title:"WebRTC Introduction - Client Side Signalling",authors:"mpolinowski",tags:["Javascript","WebRTC"],description:"Signalling intend from the web client"},sidebar:"tutorialSidebar",previous:{title:"WebRTC Introduction - Interactive Connectivity Establishment",permalink:"/docs/Development/Javascript/2022-11-10-webrtc-introduction-video-chat-part2/2022-11-10"},next:{title:"WebRTC Introduction - Realtime Chat",permalink:"/docs/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/2022-10-29"}},s={},l=[{value:"Get Video Source",id:"get-video-source",level:2},{value:"Signalling with Websockets",id:"signalling-with-websockets",level:2},{value:"Scaffolding the Signalling Server",id:"scaffolding-the-signalling-server",level:2},{value:"Client Side Signalling Events",id:"client-side-signalling-events",level:2},{value:"Created, Joined and Occupied",id:"created-joined-and-occupied",level:3}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:n(33072).Z,width:"2208",height:"757"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#get-video-source"},"Get Video Source")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#signalling-with-websockets"},"Signalling with Websockets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#scaffolding-the-signalling-server"},"Scaffolding the Signalling Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#client-side-signalling-events"},"Client Side Signalling Events"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#created-joined-and-occupied"},"Created, Joined and Occupied"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WIP")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Development/Javascript/2022-10-29-webrtc-introduction-realtime-chat/2022-10-29"},"WebRTC Introduction - Websockets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Development/Javascript/2022-10-30-webrtc-introduction-video-chat-part1/2022-10-30"},"WebRTC Introduction - Client Side Signalling")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Development/Javascript/2022-11-10-webrtc-introduction-video-chat-part2/2022-11-10"},"WebRTC Introduction - Interactive Connectivity Establishment"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Resources:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webrtcforthecurious.com"},"WebRTC for the Curious")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://web.dev/webrtc-basics/#toc-rtcpeerconnection"},"WebRTC Basics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://webrtc.github.io/samples/src/content/peerconnection/munge-sdp/"},"WebRTC Sample"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"WebRTC Introduction - Video Chat",src:n(67606).Z,width:"1019",height:"771"})),(0,a.kt)("h2",{id:"get-video-source"},"Get Video Source"),(0,a.kt)("p",null,"Get Video from Webcam with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia"},"getUserMedia()"),":"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"chat.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const chatLobby = document.getElementById('chat-lobby')\nconst chatRoom = document.getElementById('room-name')\nconst chatJoin = document.getElementById('join')\nconst chatLocal = document.getElementById('video-local')\n\nlet constraints = {\n    audio: false,\n    video: { width: 320, height: 180 },\n}\n\nconst browserSupportsMedia = () => {\n    return navigator.mediaDevices.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mzGetUserMedia\n}\n\nconst fetchLocalStream = () => {\n    navigator.mediaDevices\n    .getUserMedia(constraints)\n    .then(function (stream) {\n      userStream = stream;\n      chatLobby.style = \"display:none\";\n      chatLocal.srcObject = stream;\n      chatLocal.onloadedmetadata = function (e) {\n        chatLocal.play();\n      }\n    })\n    .catch(function (err) {\n      /* handle the error */\n      alert('ERROR ::  ' + error.name);\n    })\n}\n\nchatJoin.addEventListener('click', function() {\n    if (chatRoom.value == \"\") {\n        alert('INFO :: Please enter a room name first!')\n    } else {\n        fetchLocalStream()\n    }\n})\n")),(0,a.kt)("h2",{id:"signalling-with-websockets"},"Signalling with Websockets"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"socket.io")," to manage connections:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const express = require("express");\nconst socket = require("socket.io");\n\nconst port = 6969\n\nvar app = express();\n\nvar server = app.listen(port, function () {\n    console.log(\'INFO :: Webserver is running on ::  http://localhost:\' + port)\n});\n\napp.use(express.static("public"));\n\nvar io = socket(server);\n\nio.on("connection", function (socket) {\n  console.log("INFO :: Websocket connection established :: ", socket.id)\n\n  socket.on("join", function (roomName) {\n    // check if is already full = 2 participants\n    let rooms = io.sockets.adapter.rooms;\n    let room = rooms.get(roomName);\n    // if room doesn\'t exists create it\n    if(room == undefined) {\n      socket.join(roomName)\n      console.log(\'INFO :: Participant created room ::\', roomName)\n      // if room exists and only has 1 participant - join\n    } else if(room.size == 1) {\n      socket.join(roomName)\n      console.log(\'INFO :: Participant joined room ::\', roomName)\n    } else {\n      console.log(\'WARNING :: Room\', roomName, \'is full!\')\n    }\n  })\n});\n')),(0,a.kt)("p",null,"Use the websocket connection to emit the ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," event when a user clicked the join button:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"chat.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const socket = io.connect("http://localhost:6969")\n\nchatJoin.addEventListener(\'click\', function() {\n    if (chatRoom.value == "") {\n        alert(\'INFO :: Please enter a room name first!\')\n    } else {\n        socket.emit("join", chatRoom.value)\n        fetchLocalStream()\n    }\n})\n')),(0,a.kt)("p",null,"Start the application and open the application frontend from three different devices:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm start\n\n> webrtc-intro@1.0.0 start\n> node index.js\n\nINFO :: Webserver is running on ::  http://localhost:6969\nINFO :: Websocket connection established ::  _I-Guhml-JEa9VJwAAAF\nINFO :: Participant created room :: test\nINFO :: Websocket connection established ::  TAaYXAYJDbm4lDP5AAAH\nINFO :: Participant joined room :: test\nINFO :: Websocket connection established ::  lAgg07QE2DSltIwsAAAJ\nWARNING :: Room test is full!\n")),(0,a.kt)("h2",{id:"scaffolding-the-signalling-server"},"Scaffolding the Signalling Server"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"index.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"io.on(\"connection\", function (socket) {\n  console.log(\"INFO :: Websocket connection established :: \", socket.id)\n\n  socket.on(\"join\", function (roomName) {\n    // check if is already full = 2 participants\n    let rooms = io.sockets.adapter.rooms;\n    let room = rooms.get(roomName);\n    // if room doesn't exists create it\n    if(room == undefined) {\n      socket.join(roomName)\n      socket.emit('created')\n    } else if(room.size == 1) {\n      socket.join(roomName)\n      socket.emit('joined')\n    } else {\n      socket.emit('occupied')\n    }\n  })\n\n  // emit ready state to room when created\n  socket.on('ready', function(roomName) {\n    socket.broadcast.to(roomName).emit('ready')\n    console.log('INFO :: Room is ready')\n  })\n\n  // establish connection between candidates (ICE)\n  socket.on('candidate', function(candidate, roomName) {\n    socket.broadcast.to(roomName).emit('candidate', candidate)\n    console.log('INFO :: Candidate ready to establish connection')\n  })\n\n  // make offer to other participant\n  socket.on('offer', function(offer, roomName) {\n    socket.broadcast.to(roomName).emit('offer', offer)\n    console.log('INFO :: Offer to establish connection')\n  })\n\n  // send answer to connection offer\n  socket.on('answer', function(answer, roomName) {\n    socket.broadcast.to(roomName).emit('answer', answer)\n    console.log('INFO :: Answer to connection offer')\n  })\n\n});\n")),(0,a.kt)("h2",{id:"client-side-signalling-events"},"Client Side Signalling Events"),(0,a.kt)("p",null,"The server now emits each of those events through the websocket connection. We now need to handle those events on the client side:"),(0,a.kt)("h3",{id:"created-joined-and-occupied"},"Created, Joined and Occupied"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"chat.js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"let creator = false\n\nchatJoin.addEventListener('click', function() {\n    if (chatRoom.value == \"\") {\n        alert('INFO :: Please enter a room name first!')\n    } else {\n        socket.emit(\"join\", chatRoom.value)\n    }\n})\n\n// Room created event -> fetch video\nsocket.on('created', function() {\n  creator = true\n  fetchLocalStream()\n})\n\n// Room joined event -> fetch video\nsocket.on('joined', function() {\n  creator = false\n  fetchLocalStream()\n})\n\n// Room is full event\nsocket.on('occupied', function() {\n  alert(\"WARNING :: Room occupied. Please try again later.\")\n})\n")))}p.isMDXComponent=!0},67606:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/WebRTC_Introduction_01-5c9421fc49f5a418ead7adf1d356b1bd.png"},33072:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"}}]);