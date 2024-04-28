"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[85890],{777543:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var l=e(474848),a=e(28453);const s={sidebar_position:8040,slug:"2019-09-26",title:"Kali Linux with Docker for Windows",authors:"mpolinowski",tags:["LINUX"]},r=void 0,t={id:"DevOps/Linux/2019-09-26--kali-docker-windows/index",title:"Kali Linux with Docker for Windows",description:"Victoria Harbour, Hongkong",source:"@site/docs/DevOps/Linux/2019-09-26--kali-docker-windows/index.md",sourceDirName:"DevOps/Linux/2019-09-26--kali-docker-windows",slug:"/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26",permalink:"/docs/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-09-26--kali-docker-windows/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2019-09-26",title:"Kali Linux with Docker for Windows",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Podman FTP Server Container",permalink:"/docs/DevOps/Linux/2019-12-03--podman-ftp-server-container/2019-12-03"},next:{title:"Podman Cheat Sheet",permalink:"/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/2019-09-25"}},o={},c=[{value:"Installing Kali",id:"installing-kali",level:2},{value:"Installing Tools",id:"installing-tools",level:2},{value:"Committing the Image",id:"committing-the-image",level:2},{value:"Starting Kali Containers",id:"starting-kali-containers",level:2}];function d(n){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"Victoria Harbour, Hongkong",src:e(21014).A+"",width:"1500",height:"864"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"#installing-kali",children:"Installing Kali"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"#installing-tools",children:"Installing Tools"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"#committing-the-image",children:"Committing the Image"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"#starting-kali-containers",children:"Starting Kali Containers"})}),"\n"]}),"\n",(0,l.jsx)(i.h2,{id:"installing-kali",children:"Installing Kali"}),"\n",(0,l.jsxs)(i.p,{children:["see available docker images on ",(0,l.jsx)(i.a,{href:"https://hub.docker.com/u/kalilinux",children:"Docker Hub"})]}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"docker pull kalilinux/kali-rolling\n"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"docker run -it kalilinux/kali-rolling /bin/bash\n"})}),"\n",(0,l.jsx)(i.h2,{id:"installing-tools",children:"Installing Tools"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"apt update && apt full-upgrade && apt auto-remove && apt auto-clean\n"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"apt-get install kali-linux-full\n"})}),"\n",(0,l.jsxs)(i.p,{children:["See ",(0,l.jsx)(i.a,{href:"https://www.kali.org/news/kali-linux-metapackages/",children:"available packages"})]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"kali-linux"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-all"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-forensic"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-full"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-gpu"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-pwtools"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-rfid"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-sdr"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-top10"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-voip"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-web"}),"\n",(0,l.jsx)(i.li,{children:"kali-linux-wireless"}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"Checked contained programs in packages:"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"apt-cache show kali-linux-wireless |grep Depends\n"})}),"\n",(0,l.jsx)(i.h2,{id:"committing-the-image",children:"Committing the Image"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"docker ps -a\n"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"docker start {containerID}\r\ndocker attach {containerID}\r\ndocker commit {containerID} kali\r\ndocker images\r\ndocker rm {containerID}\n"})}),"\n",(0,l.jsx)(i.h2,{id:"starting-kali-containers",children:"Starting Kali Containers"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"docker run -ti -rm kali /bin/bash\n"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-bash",children:"docker run -it --rm -p 4444:4444 kali\n"})})]})}function h(n={}){const{wrapper:i}={...(0,a.R)(),...n.components};return i?(0,l.jsx)(i,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},21014:(n,i,e)=>{e.d(i,{A:()=>l});const l=e.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-fa551bab9f5111c66bca5032ac4de574.jpg"},28453:(n,i,e)=>{e.d(i,{R:()=>r,x:()=>t});var l=e(296540);const a={},s=l.createContext(a);function r(n){const i=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function t(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),l.createElement(s.Provider,{value:i},n.children)}}}]);