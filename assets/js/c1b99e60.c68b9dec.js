"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[5213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},86154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5050,slug:"2022-04-02",title:"Super Resolution with ESRGAN",authors:"mpolinowski",tags:["Torch","Machine Learning","Python"]},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/index",id:"IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/index",title:"Super Resolution with ESRGAN",description:"Victoria Harbour, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution",slug:"/IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/2022-04-02",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/2022-04-02",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-04-02-pytorch-super-resolution/index.md",tags:[{label:"Torch",permalink:"/docs/tags/torch"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:5050,frontMatter:{sidebar_position:5050,slug:"2022-04-02",title:"Super Resolution with ESRGAN",authors:"mpolinowski",tags:["Torch","Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Super Resolution with Real-ESRGAN",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-03-pytorch-real-super-resolution/2022-04-03"},next:{title:"Deep Audio",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-04-01-tensorflow-audio-classifier/2022-04-01"}},s={},p=[{value:"Project Setup",id:"project-setup",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Run Up-Sampling",id:"run-up-sampling",level:2},{value:"Results",id:"results",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Victoria Harbour, Hongkong",src:n(70813).Z,width:"1500",height:"565"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#project-setup"},"Project Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#install-dependencies"},"Install Dependencies")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-up-sampling"},"Run Up-Sampling"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#results"},"Results"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ESRGAN"},"Github Repository")),(0,a.kt)("h2",{id:"project-setup"},"Project Setup"),(0,a.kt)("p",null,"This project uses the ESRGAN repository available on Github:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/mpolinowski/ESRGAN.git\n")),(0,a.kt)("p",null,"And we will be using a pre-trained model that can be downloaded from:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"https://drive.google.com/drive/folders/17VYV_SoZZesU6mbxz2dMAIccSSlqLecY\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Super Resolution with ESRGAN",src:n(10115).Z,width:"986",height:"433"})),(0,a.kt)("p",null,"Download the pre-trained model and place it inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"./models")," folder."),(0,a.kt)("h3",{id:"install-dependencies"},"Install Dependencies"),(0,a.kt)("p",null,"This project uses ",(0,a.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch")," which offers a little wizard helping you setting everything up based on your System - for me this is Linux and Python 3.10. But make sure to use a PC that has a nVidia graphic card ",(0,a.kt)("strong",{parentName:"p"},"with CUDA support"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu113\n")),(0,a.kt)("p",null,"This installs PyTorch with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html"},"CUDA v11.")," To check which version you have installed on your system run ",(0,a.kt)("inlineCode",{parentName:"p"},"nvcc --version"),"."),(0,a.kt)("p",null,"Additionally, we will be using OpenCV:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install opencv-python glob2\n")),(0,a.kt)("h2",{id:"run-up-sampling"},"Run Up-Sampling"),(0,a.kt)("p",null,"The repository already comes with two low-resolution example images that we can use:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ESRGAN Super Resolution",src:n(82507).Z,width:"884",height:"496"})),(0,a.kt)("p",null,"We can run the following script included inside the repository to feed those images into our GAN and output the up-sampled images into the ",(0,a.kt)("inlineCode",{parentName:"p"},"./results")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"python test.py\n")),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ESRGAN Super Resolution",src:n(6756).Z,width:"971",height:"400"})))}c.isMDXComponent=!0},10115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ESRGAN_Super_Resolution_01-1cb3f33c822c29a48ab7001bdd03ca87.png"},82507:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ESRGAN_Super_Resolution_02-2642e3e4f0c69534a057d19497460e23.png"},6756:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ESRGAN_Super_Resolution_03-0f3710045033d56e9584ef2aad6b9fb8.png"},70813:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-23d027067cc9016279f834178a642545.jpg"}}]);