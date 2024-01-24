"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[13278],{687968:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=i(785893),l=i(603905);const a={sidebar_position:8040,slug:"2019-09-26",title:"Kali Linux with Docker for Windows",authors:"mpolinowski",tags:["LINUX"]},t=void 0,s={id:"DevOps/Linux/2019-09-26--kali-docker-windows/index",title:"Kali Linux with Docker for Windows",description:"Victoria Harbour, Hongkong",source:"@site/docs/DevOps/Linux/2019-09-26--kali-docker-windows/index.md",sourceDirName:"DevOps/Linux/2019-09-26--kali-docker-windows",slug:"/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26",permalink:"/docs/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-09-26--kali-docker-windows/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2019-09-26",title:"Kali Linux with Docker for Windows",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Podman FTP Server Container",permalink:"/docs/DevOps/Linux/2019-12-03--podman-ftp-server-container/2019-12-03"},next:{title:"Podman Cheat Sheet",permalink:"/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/2019-09-25"}},o={},c=[{value:"Installing Kali",id:"installing-kali",level:2},{value:"Installing Tools",id:"installing-tools",level:2},{value:"Committing the Image",id:"committing-the-image",level:2},{value:"Starting Kali Containers",id:"starting-kali-containers",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Victoria Harbour, Hongkong",src:i(258416).Z+"",width:"1500",height:"864"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installing-kali",children:"Installing Kali"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installing-tools",children:"Installing Tools"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#committing-the-image",children:"Committing the Image"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#starting-kali-containers",children:"Starting Kali Containers"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installing-kali",children:"Installing Kali"}),"\n",(0,r.jsxs)(n.p,{children:["see available docker images on ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/u/kalilinux",children:"Docker Hub"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull kalilinux/kali-rolling\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -it kalilinux/kali-rolling /bin/bash\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-tools",children:"Installing Tools"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt update && apt full-upgrade && apt auto-remove && apt auto-clean\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt-get install kali-linux-full\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"https://www.kali.org/news/kali-linux-metapackages/",children:"available packages"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"kali-linux"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-all"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-forensic"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-full"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-gpu"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-pwtools"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-rfid"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-sdr"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-top10"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-voip"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-web"}),"\n",(0,r.jsx)(n.li,{children:"kali-linux-wireless"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Checked contained programs in packages:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt-cache show kali-linux-wireless |grep Depends\n"})}),"\n",(0,r.jsx)(n.h2,{id:"committing-the-image",children:"Committing the Image"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker ps -a\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker start {containerID}\r\ndocker attach {containerID}\r\ndocker commit {containerID} kali\r\ndocker images\r\ndocker rm {containerID}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"starting-kali-containers",children:"Starting Kali Containers"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -ti -rm kali /bin/bash\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -it --rm -p 4444:4444 kali\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>c});var r=i(667294);function l(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function t(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){l(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,r,l=function(e,n){if(null==e)return{};var i,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(l[i]=e[i]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var o=r.createContext({}),c=function(e){var n=r.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):t(t({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var i=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(i),p=l,g=h["".concat(o,".").concat(p)]||h[p]||d[p]||a;return i?r.createElement(g,t(t({ref:n},u),{},{components:i})):r.createElement(g,t({ref:n},u))}));u.displayName="MDXCreateElement"},258416:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-fa551bab9f5111c66bca5032ac4de574.jpg"}}]);