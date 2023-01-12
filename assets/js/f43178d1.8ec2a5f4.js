"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[18017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),v=r,m=p["".concat(l,".").concat(v)]||p[v]||u[v]||i;return n?o.createElement(m,s(s({ref:t},d),{},{components:n})):o.createElement(m,s({ref:t},d))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1e4,slug:"2010-02-02",title:"Using SVN Subversion on Windows 10",authors:"mpolinowski",tags:["Windows","SVN"]},s=void 0,a={unversionedId:"DevOps/Provisioning/2010-02-02--svn-subversion-windows/index",id:"DevOps/Provisioning/2010-02-02--svn-subversion-windows/index",title:"Using SVN Subversion on Windows 10",description:"Installing Subversion",source:"@site/docs/DevOps/Provisioning/2010-02-02--svn-subversion-windows/index.mdx",sourceDirName:"DevOps/Provisioning/2010-02-02--svn-subversion-windows",slug:"/DevOps/Provisioning/2010-02-02--svn-subversion-windows/2010-02-02",permalink:"/docs/DevOps/Provisioning/2010-02-02--svn-subversion-windows/2010-02-02",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2010-02-02--svn-subversion-windows/index.mdx",tags:[{label:"Windows",permalink:"/docs/tags/windows"},{label:"SVN",permalink:"/docs/tags/svn"}],version:"current",sidebarPosition:1e4,frontMatter:{sidebar_position:1e4,slug:"2010-02-02",title:"Using SVN Subversion on Windows 10",authors:"mpolinowski",tags:["Windows","SVN"]},sidebar:"tutorialSidebar",previous:{title:"Proxima Centauri",permalink:"/docs/DevOps/Provisioning/2017-09-05--developing-software-in-china/2017-09-05"},next:{title:"GitOps",permalink:"/docs/category/gitops"}},l={},c=[{value:"Installing Subversion",id:"installing-subversion",level:2},{value:"Checkout, Update and Commit",id:"checkout-update-and-commit",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installing-subversion"},"Installing Subversion"),(0,r.kt)("p",null,"Download and install ",(0,r.kt)("a",{parentName:"p",href:"https://tortoisesvn.net/downloads.html"},"the latest version of Subversion")),(0,r.kt)("h2",{id:"checkout-update-and-commit"},"Checkout, Update and Commit"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a folder for your project"),(0,r.kt)("li",{parentName:"ol"},"Right-click inside this folder and select ",(0,r.kt)("strong",{parentName:"li"},"SVN Checkout"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SVN Subversion on Windows 10",src:n(38814).Z,width:"756",height:"500"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Copy&Paste in the URL to your project repository and add your user credentials when asked")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SVN Subversion on Windows 10",src:n(21369).Z,width:"752",height:"439"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Right-click inside this folder and select ",(0,r.kt)("strong",{parentName:"li"},"SVN Commit"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SVN Subversion on Windows 10",src:n(39726).Z,width:"721",height:"447"})))}u.isMDXComponent=!0},38814:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/SVN_Subversion_01-ef1a7d465b76165b68757d8fc86e5016.png"},21369:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/SVN_Subversion_02-cce2daa24d2aa349e165a05e20b3aa6b.png"},39726:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/SVN_Subversion_03-fae7a3d3c19234ac5c1abceb8f6cb11c.png"}}]);