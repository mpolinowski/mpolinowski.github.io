"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[56781],{278836:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var i=s(474848),a=s(28453);const t={sidebar_position:6060,slug:"2021-10-26",title:"Install Davinci Resolve on Arch Linux",authors:"mpolinowski",tags:["Linux"]},c=void 0,o={id:"DevOps/Linux/2021-10-26--install-davinci-resolve-on-arch/index",title:"Install Davinci Resolve on Arch Linux",description:"Shenzhen, China",source:"@site/docs/DevOps/Linux/2021-10-26--install-davinci-resolve-on-arch/index.md",sourceDirName:"DevOps/Linux/2021-10-26--install-davinci-resolve-on-arch",slug:"/DevOps/Linux/2021-10-26--install-davinci-resolve-on-arch/2021-10-26",permalink:"/docs/DevOps/Linux/2021-10-26--install-davinci-resolve-on-arch/2021-10-26",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2021-10-26--install-davinci-resolve-on-arch/index.md",tags:[{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:6060,frontMatter:{sidebar_position:6060,slug:"2021-10-26",title:"Install Davinci Resolve on Arch Linux",authors:"mpolinowski",tags:["Linux"]},sidebar:"tutorialSidebar",previous:{title:"FFMPEG Cheat Sheet",permalink:"/docs/DevOps/Linux/2022-03-07--ffmpeg-cheat-sheet/2022-03-07"},next:{title:"Install Mesen in Arch Linux",permalink:"/docs/DevOps/Linux/2021-10-24--arch-linux-install-mesen/2021-10-24"}},r={},l=[];function d(e){const n={a:"a",code:"code",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shenzhen, China",src:s(919138).A+"",width:"1500",height:"477"})}),"\n",(0,i.jsxs)(n.p,{children:["Install Resolve from ",(0,i.jsx)(n.a,{href:"https://aur.archlinux.org/packages/davinci-resolve/",children:"AUR"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir ./Davinci_Resolve && cd Davinci_Resolve\nwget https://aur.archlinux.org/cgit/aur.git/snapshot/davinci-resolve.tar.gz\ntar \u2013xvzf davinci-resolve.tar.gz\ncd davinci-resolve\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"makepkg\n\n==> Making package: davinci-resolve 17.4.2-1 (Sunday, December 19, 2021 PM05:45:28)\n==> Checking runtime dependencies...\n==> Missing dependencies:\n  -> libpng12\n  -> lib32-libpng12\n  -> ocl-icd\n  -> openssl-1.0\n  -> opencl-driver\n  -> qt5-websockets\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo pacman -S libpng12 lib32-libpng12 ocl-icd openssl-1.0 opencl-driver qt5-websockets\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"makepkg\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Install Davinci Resolve on Arch Linux",src:s(795746).A+"",width:"2560",height:"1051"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},795746:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/install-davinci-resolve-on-arch_01-7e4f2065bd0524a5ad32ffa326d25979.png"},919138:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-bdb08691301ecbfc0de5c0bac3e0f0be.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var i=s(296540);const a={},t=i.createContext(a);function c(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);