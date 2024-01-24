"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[24392],{794347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=n(785893),i=n(603905);const r={sidebar_position:9010,slug:"2019-03-02",title:"Red Hat OpenShift 3 Container Platform",authors:"mpolinowski",tags:["LINUX","Docker","OpenShift"]},o=void 0,a={id:"DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7/index",title:"Red Hat OpenShift 3 Container Platform",description:"Harbin, China",source:"@site/docs/DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7/index.mdx",sourceDirName:"DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7",slug:"/DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7/2019-03-02",permalink:"/docs/DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7/2019-03-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Kubernetes/2019-03-02--installing-openshift-3-on-centos-7/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"OpenShift",permalink:"/docs/tags/open-shift"}],version:"current",sidebarPosition:9010,frontMatter:{sidebar_position:9010,slug:"2019-03-02",title:"Red Hat OpenShift 3 Container Platform",authors:"mpolinowski",tags:["LINUX","Docker","OpenShift"]},sidebar:"tutorialSidebar",previous:{title:"Setting up an OKD Cluster",permalink:"/docs/DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/2019-03-05"},next:{title:"Kubernetes Traefik Ingress",permalink:"/docs/DevOps/Kubernetes/2019-02-01--kubernetes-traefik-ingress/2019-02-01"}},l={},c=[{value:"Installation",id:"installation",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Harbin, China",src:n(532726).Z+"",width:"1500",height:"476"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#installation",children:"Installation"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://www.okd.io",children:"OKD"})," is a distribution of Kubernetes optimized for continuous application development and multi-tenant deployment. OKD adds developer and operations-centric tools on top of Kubernetes to enable rapid application development, easy deployment and scaling, and long-term lifecycle maintenance for small and large teams. OKD is the upstream Kubernetes distribution embedded in Red Hat OpenShift."]}),"\n",(0,s.jsxs)(t.p,{children:["OKD embeds Kubernetes and extends it with security and other integrated concepts. OKD is also referred to as ",(0,s.jsx)(t.a,{href:"https://github.com/openshift/origin",children:"Origin in github"})," and in the ",(0,s.jsx)(t.a,{href:"https://docs.okd.io/latest/welcome/index.html",children:"documentation"}),". An OKD release corresponds to the Kubernetes distribution - for example, OKD 1.10 includes Kubernetes 1.10."]}),"\n",(0,s.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(t.p,{children:"Let's start with the prerequisites:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"yum update\r\nyum install -y git docker net-tools\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We can now use the ",(0,s.jsx)(t.a,{href:"https://github.com/gshipley/installcentos",children:"install script"})," by ",(0,s.jsx)(t.a,{href:"https://github.com/gshipley/",children:"Grant Shipley"})," to set up RedHat OKD 3.11 on your own server. This install method is targeted for a single node cluster that has a long life."]}),"\n",(0,s.jsx)(t.p,{children:"This repository is a set of scripts that will allow you easily install the latest version (3.11) of OKD in a single node fashion. What that means is that all of the services required for OKD to function (master, node, etcd, etc.) will all be installed on a single host. The script supports a custom hostname which you can provide using the interactive mode."}),"\n",(0,s.jsx)(t.p,{children:"We will start by cloning the repository:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/gshipley/installcentos.git\r\ncd installcentos\n"})}),"\n",(0,s.jsx)(t.p,{children:"Define mandatory variables for the installation process:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"# Domain name to access the cluster\r\nexport DOMAIN=<public ip address>.nip.io\r\n\r\n# User created after installation\r\nexport USERNAME=<current user name>\r\n\r\n# Password for the user\r\nexport PASSWORD=password\n"})}),"\n",(0,s.jsx)(t.p,{children:"Define optional variables for the installation process:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"# Instead of using loopback, setup DeviceMapper on this disk.\r\n# !! All data on the disk will be wiped out !!\r\n$ export DISK='/dev/sda'\n"})}),"\n",(0,s.jsx)(t.p,{children:"And then execute the installation script:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"./install-openshift.sh\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Openshift 3.11",src:n(911650).Z+"",width:"927",height:"580"})})]})}function d(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var s=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,i=function(e,t){if(null==e)return{};var n,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=c(n),u=i,f=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?s.createElement(f,o(o({ref:t},d),{},{components:n})):s.createElement(f,o({ref:t},d))}));d.displayName="MDXCreateElement"},911650:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/openshift_01-6ff706247370974469a808f5016ddc7c.png"},532726:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/photo-8752545756_67fhcdfdj_o-3b0f9cb63fb81eac31f6dc25c4991669.jpg"}}]);