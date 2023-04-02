"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[88529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,g=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},30897:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:5960,slug:"2023-02-03",title:"ARM Docker",authors:"mpolinowski",tags:["LINUX","Docker"],description:"Installing Docker on a Raspberry Pi"},s=void 0,i={unversionedId:"DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/index",id:"DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/index",title:"ARM Docker",description:"Installing Docker on a Raspberry Pi",source:"@site/docs/DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/index.md",sourceDirName:"DevOps/Linux/2023-02-03--installing-docker-raspberry-pi",slug:"/DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/2023-02-03",permalink:"/docs/DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/2023-02-03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2023-02-03--installing-docker-raspberry-pi/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:5960,frontMatter:{sidebar_position:5960,slug:"2023-02-03",title:"ARM Docker",authors:"mpolinowski",tags:["LINUX","Docker"],description:"Installing Docker on a Raspberry Pi"},sidebar:"tutorialSidebar",previous:{title:"Elgato Streamdeck on Arch Linux",permalink:"/docs/DevOps/Linux/2023-03-29--installing-the-elgato-streamdeck/2023-03-29"},next:{title:"Resistance is futile - Borg with Docker",permalink:"/docs/DevOps/Linux/2022-11-09--docker-borg-backupserver/2022-11-09"}},l={},p=[{value:"Preparing the RaspberryPI",id:"preparing-the-raspberrypi",level:2},{value:"Installing Docker",id:"installing-docker",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TST, Hong Kong",src:r(17082).Z,width:"1500",height:"517"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preparing-the-raspberrypi"},"Preparing the RaspberryPI")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installing-docker"},"Installing Docker"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/blog/happy-pi-day-docker-raspberry-pi/"},"Happy Pi Day with Docker and Raspberry Pi")),(0,a.kt)("h2",{id:"preparing-the-raspberrypi"},"Preparing the RaspberryPI"),(0,a.kt)("p",null,"I am downloading a ",(0,a.kt)("strong",{parentName:"p"},"Raspberry Pi 3B+")," compatible ",(0,a.kt)("a",{parentName:"p",href:"https://raspi.debian.net/tested-images/"},"Debian Bullseye Image")," and bring it ",(0,a.kt)("a",{parentName:"p",href:"https://etcher.io"},"onto an SD card"),". To activate the SSH service you are have to add an empty file ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"boot")," directory - though remote logins are deactivated by default and need to be configured by attaching a keyboard and monitor. There should be a way to do this by a post-install script, but I could not find it on a quick skim:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /run/media/myuser/RASPIROOT/boot/\ntouch ssh\n")),(0,a.kt)("p",null,"To activate the login first generate a password for the root account by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"passwd\n")),(0,a.kt)("p",null,"And edit the following line in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/ssh/sshd_config"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# FROM:\n# PermitRootLogin without-password\n# TO:\nPermitRootLogin yes\n")),(0,a.kt)("p",null,"Now restart the SSH daemon with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl sshd restart\nsystemctl sshd status\n")),(0,a.kt)("h2",{id:"installing-docker"},"Installing Docker"),(0,a.kt)("p",null,"Install the following prerequisites:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt update && apt upgrade -y\napt install curl apt-transport-https ca-certificates software-properties-common -y\n")),(0,a.kt)("p",null,"Import Docker CPG key (I think this isautomatically done by the install script below):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL https://download.docker.com/linux/raspbian/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg\n")),(0,a.kt)("p",null,"Use the following command to set up the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/raspbian/ \\\n  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null\n')),(0,a.kt)("p",null,"Download and install Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fsSL get.docker.com -o get-docker.sh && sh get-docker.sh\n")),(0,a.kt)("p",null,"Become root-less:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo usermod -aG docker $USER\nnewgrp docker\n")),(0,a.kt)("p",null,"Make sure the service is enabled and started (should already have happened by the install script):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable docker.service\nsystemctl start docker.service\nservice docker status\n")),(0,a.kt)("p",null,"Verify everything is in order:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker info\n\nClient:\n Context:    default\n Debug Mode: false\n Plugins:\n  buildx: Docker Buildx (Docker Inc.)\n    Version:  v0.10.2\n    Path:     /usr/libexec/docker/cli-plugins/docker-buildx\n  compose: Docker Compose (Docker Inc.)\n    Version:  v2.15.1\n    Path:     /usr/libexec/docker/cli-plugins/docker-compose\n\n    ...\n\n Kernel Version: 5.10.0-21-arm64\n Operating System: Debian GNU/Linux 11 (bullseye)\n OSType: linux\n Architecture: aarch64\n CPUs: 4\n Total Memory: 906.6MiB\n Name: rpi3-20230102\n")),(0,a.kt)("p",null,"\ud83d\udc4d"),(0,a.kt)("p",null,"If you need it run modprobe to load the kernel modules for iptables - e.g. for the ",(0,a.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/Home_Automation/2023-01-23-thread-edge-router-docker/2023-01-23"},"Open Thread Edge Router"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo modprobe ip_tables\nsudo modprobe ip6table_filter\n")))}d.isMDXComponent=!0},17082:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"}}]);