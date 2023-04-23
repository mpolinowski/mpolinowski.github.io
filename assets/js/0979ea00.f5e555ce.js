"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[9629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=o,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},19149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:8010,slug:"2019-09-27",title:"Home Assistant, OpenHAB, Node-RED, ioBroker, MotionEye Containerized (Podman)",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8/index",id:"IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8/index",title:"Home Assistant, OpenHAB, Node-RED, ioBroker, MotionEye Containerized (Podman)",description:"Siem Reap, Cambodia",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8/index.mdx",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8",slug:"/IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8/2019-09-27",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8/2019-09-27",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2019-09-27--home-assistant-podman-centos8/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8010,frontMatter:{sidebar_position:8010,slug:"2019-09-27",title:"Home Assistant, OpenHAB, Node-RED, ioBroker, MotionEye Containerized (Podman)",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Shinobi Video Surveillance",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-02-08--shinobi-on-debian/2019-02-08"},next:{title:"MotionEye Video Surveillance",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2019-02-07--motioneye-on-debian/2019-02-07"}},s={},p=[{value:"Installation through Podman on CentOS8",id:"installation-through-podman-on-centos8",level:2},{value:"Home Assistant",id:"home-assistant",level:3},{value:"Node-RED",id:"node-red",level:3},{value:"Theming",id:"theming",level:4},{value:"OpenHAB",id:"openhab",level:3},{value:"OpenHAB CLI",id:"openhab-cli",level:4},{value:"Updating the Image",id:"updating-the-image",level:4},{value:"ioBroker",id:"iobroker",level:3},{value:"MotionEye",id:"motioneye",level:3}],d={toc:p};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Siem Reap, Cambodia",src:t(76217).Z,width:"1500",height:"546"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation-through-podman-on-centos8"},"Installation through Podman on CentOS8"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#home-assistant"},"Home Assistant")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#node-red"},"Node-RED"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#theming"},"Theming")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#openhab"},"OpenHAB")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#iobroker"},"ioBroker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#motioneye"},"MotionEye"))))),(0,o.kt)("h2",{id:"installation-through-podman-on-centos8"},"Installation through Podman on CentOS8"),(0,o.kt)("h3",{id:"home-assistant"},"Home Assistant"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull homeassistant/home-assistant:stable\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/homeassistant/{config}\nchmod -R 775 /opt/homeassistant\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -d --rm --privileged --net=host --name='home-assistant' -e 'TZ=Europe/Berlin' -v /opt/homeassistant/config:/config homeassistant/home-assistant:stable\n")),(0,o.kt)("p",null,"There seems to be an issue with Podman - or the way I am using it. I have to run the container ",(0,o.kt)("inlineCode",{parentName:"p"},"privileged")," to be able to write to the volume. Google did not help me solve this 'issue', yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman start home-assistant\npodman stop home-assistant\n")),(0,o.kt)("h3",{id:"node-red"},"Node-RED"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull nodered/node-red\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/nodered/{data}\nchmod -R 775 /opt/nodered\nchown 1000:1000 -R /opt/nodered \n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run -d --rm --privileged --net=host -v /opt/nodered/data:/data --name nodered nodered/node-red\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman start nodered\npodman stop nodered\n")),(0,o.kt)("h4",{id:"theming"},"Theming"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt/nodered/data\nnpm install @node-red-contrib-themes/midnight-red\n")),(0,o.kt)("p",null,"Add the following to the editorTheme section of your ",(0,o.kt)("inlineCode",{parentName:"p"},"settings.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"editorTheme: {\n    projects: {\n            // To enable the Projects feature, set this value to true\n            enabled: false\n    }\n}\n")),(0,o.kt)("p",null,"Change to ->"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// Customising the editor\n    editorTheme: {\n        page: {\n            css: '/opt/nodered/data/node_modules/@node-red-contrib-themes/midnight-red/theme.css'\n        }\n    }\n")),(0,o.kt)("h3",{id:"openhab"},"OpenHAB"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"groupadd -g 9001 openhab\nuseradd -g 9001 openhab\nusermod -a -G openhab myownuser\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/openhab/{openhab_addons,openhab_conf,openhab_userdata}\nchmod -R 775 /opt/openhab\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run \\\n        --name openhab \\\n        --net=host \\\n        --privileged \\\n         --rm \\\n        -v /etc/localtime:/etc/localtime:ro \\\n        -v /opt/openhab/openhab_addons:/openhab/addons \\\n        -v /opt/openhab/openhab_conf:/openhab/conf \\\n        -v /opt/openhab/openhab_userdata:/openhab/userdata \\\n        -d \\\n        openhab/openhab:latest\n")),(0,o.kt)("h4",{id:"openhab-cli"},"OpenHAB CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -it openhab\n/openhab/runtime/bin/client -p habopen\n")),(0,o.kt)("h4",{id:"updating-the-image"},"Updating the Image"),(0,o.kt)("p",null,"Use the following steps to update the docker image and all installed add-ons."),(0,o.kt)("p",null,"Stop the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop openhab\n")),(0,o.kt)("p",null,"Delete the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm openhab\n")),(0,o.kt)("p",null,"Delete the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/openhab/userdata/cache")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/openhab/userdata/tmp")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf /opt/openhab/userdata/cache\nrm -rf /opt/openhab/userdata/tmp\n")),(0,o.kt)("p",null,"Pull down the latest image:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull openhab/openhab:`latest`\n")),(0,o.kt)("p",null,"Restart the container using the full command above."),(0,o.kt)("h3",{id:"iobroker"},"ioBroker"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull iobroker/iobroker:latest\n")),(0,o.kt)("p",null,"And and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run \\\n  --net=host \\\n  --privileged \\\n  --rm \\\n  --name iobroker \\\n  -v /opt/iobroker:/opt/iobroker \\\n  -v /opt/iobroker/home:/home/iobroker \\\n  --detach=true \\\n  iobroker/iobroker:latest\n")),(0,o.kt)("h3",{id:"motioneye"},"MotionEye"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman pull ccrisan/motioneye:master-amd64\n")),(0,o.kt)("p",null,"And and run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman run --name='motioneye' \\\n    --net=host \\\n    --privileged \\\n    --rm \\\n    --hostname='motioneye' \\\n    -v /etc/localtime:/etc/localtime:ro \\\n    -v /opt/motioneye:/etc/motioneye \\\n    -v /opt/motioneye/lib:/var/lib/motioneye \\\n    --security-opt label=disable \\\n    --detach=true \\\n    ccrisan/motioneye:master-amd64\n")))}m.isMDXComponent=!0},76217:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e09c4b863b29d0c9c2cb81b620df559f.jpg"}}]);