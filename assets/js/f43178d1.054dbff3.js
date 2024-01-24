"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[18017],{90022:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(785893),i=t(603905);const r={sidebar_position:1e4,slug:"2010-02-02",title:"Using SVN Subversion on Windows 10",authors:"mpolinowski",tags:["Windows","SVN"]},o=void 0,a={id:"DevOps/Provisioning/2010-02-02--svn-subversion-windows/index",title:"Using SVN Subversion on Windows 10",description:"Installing Subversion",source:"@site/docs/DevOps/Provisioning/2010-02-02--svn-subversion-windows/index.mdx",sourceDirName:"DevOps/Provisioning/2010-02-02--svn-subversion-windows",slug:"/DevOps/Provisioning/2010-02-02--svn-subversion-windows/2010-02-02",permalink:"/docs/DevOps/Provisioning/2010-02-02--svn-subversion-windows/2010-02-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2010-02-02--svn-subversion-windows/index.mdx",tags:[{label:"Windows",permalink:"/docs/tags/windows"},{label:"SVN",permalink:"/docs/tags/svn"}],version:"current",sidebarPosition:1e4,frontMatter:{sidebar_position:1e4,slug:"2010-02-02",title:"Using SVN Subversion on Windows 10",authors:"mpolinowski",tags:["Windows","SVN"]},sidebar:"tutorialSidebar",previous:{title:"Proxima Centauri",permalink:"/docs/DevOps/Provisioning/2017-09-05--developing-software-in-china/2017-09-05"},next:{title:"GitOps",permalink:"/docs/category/gitops"}},c={},l=[{value:"Installing Subversion",id:"installing-subversion",level:2},{value:"Checkout, Update and Commit",id:"checkout-update-and-commit",level:2}];function d(e){const n={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"installing-subversion",children:"Installing Subversion"}),"\n",(0,s.jsxs)(n.p,{children:["Download and install ",(0,s.jsx)(n.a,{href:"https://tortoisesvn.net/downloads.html",children:"the latest version of Subversion"})]}),"\n",(0,s.jsx)(n.h2,{id:"checkout-update-and-commit",children:"Checkout, Update and Commit"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a folder for your project"}),"\n",(0,s.jsxs)(n.li,{children:["Right-click inside this folder and select ",(0,s.jsx)(n.strong,{children:"SVN Checkout"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SVN Subversion on Windows 10",src:t(338814).Z+"",width:"756",height:"500"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Copy&Paste in the URL to your project repository and add your user credentials when asked"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SVN Subversion on Windows 10",src:t(921369).Z+"",width:"752",height:"439"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Right-click inside this folder and select ",(0,s.jsx)(n.strong,{children:"SVN Commit"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"SVN Subversion on Windows 10",src:t(239726).Z+"",width:"721",height:"447"})})]})}function u(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var s=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(t),v=i,b=p["".concat(c,".").concat(v)]||p[v]||d[v]||r;return t?s.createElement(b,o(o({ref:n},u),{},{components:t})):s.createElement(b,o({ref:n},u))}));u.displayName="MDXCreateElement"},338814:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/SVN_Subversion_01-ef1a7d465b76165b68757d8fc86e5016.png"},921369:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/SVN_Subversion_02-cce2daa24d2aa349e165a05e20b3aa6b.png"},239726:(e,n,t)=>{t.d(n,{Z:()=>s});const s=t.p+"assets/images/SVN_Subversion_03-fae7a3d3c19234ac5c1abceb8f6cb11c.png"}}]);