"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[77088],{116613:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var t=o(474848),i=o(28453);const r={sidebar_position:6090,slug:"2021-01-27",title:"ownCloud Infinite Scale Stack",authors:"mpolinowski",tags:["LINUX","ownCloud"]},s=void 0,c={id:"DevOps/Provisioning/2021-01-27-owncloud-ocis/index",title:"ownCloud Infinite Scale Stack",description:"Jomson, Nepal",source:"@site/docs/DevOps/Provisioning/2021-01-27-owncloud-ocis/index.md",sourceDirName:"DevOps/Provisioning/2021-01-27-owncloud-ocis",slug:"/DevOps/Provisioning/2021-01-27-owncloud-ocis/2021-01-27",permalink:"/docs/DevOps/Provisioning/2021-01-27-owncloud-ocis/2021-01-27",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2021-01-27-owncloud-ocis/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"ownCloud",permalink:"/docs/tags/own-cloud"}],version:"current",sidebarPosition:6090,frontMatter:{sidebar_position:6090,slug:"2021-01-27",title:"ownCloud Infinite Scale Stack",authors:"mpolinowski",tags:["LINUX","ownCloud"]},sidebar:"tutorialSidebar",previous:{title:"Loki - Promtail & Grafana for System Logs.",permalink:"/docs/DevOps/Provisioning/2021-04-07--loki-prometheus-grafana/2021-04-07"},next:{title:"Node.js FTP Server",permalink:"/docs/DevOps/Provisioning/2021-01-23-nodejs-file-server/2021-01-23"}},l={},a=[{value:"Getting Started",id:"getting-started",level:2},{value:"Docker",id:"docker",level:3},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Start the Docker Container",id:"start-the-docker-container",level:4},{value:"Login to ownCloud Web Interface",id:"login-to-owncloud-web-interface",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Jomson, Nepal",src:o(353387).A+"",width:"1500",height:"661"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#getting-started",children:"Getting Started"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#docker",children:"Docker"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#environment-variables",children:"Environment Variables"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#start-the-docker-container",children:"Start the Docker Container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#login-to-owncloud-web-interface",children:"Login to ownCloud Web Interface"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/owncloud/ocis",children:"ownCloud Infinite Scale Stack"})," is currently in a technical preview state. It will be subject to a lot of changes and is not yet ready for general production deployments."]}),"\n",(0,t.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,t.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.p,{children:"Start by creating an environment file .env for your OwnCloud deployment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"PROXY_HTTP_ADDR=0.0.0.0:9200\r\nOCIS_URL=https://192.168.2.111:9200\r\nOCIS_LOG_PRETTY=true\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": ",(0,t.jsx)(n.code,{children:"192.168.2.111"})," is the local IP address of my Ubuntu Server. Replace this with your own IP or domain."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"start-the-docker-container",children:"Start the Docker Container"}),"\n",(0,t.jsxs)(n.p,{children:["Docker images for oCIS are available on ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/r/owncloud/ocis",children:"Docker Hub"}),". The latest tag always reflects the current master branch."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'docker pull owncloud/ocis\r\ndocker run --env-file=".env" --rm -ti -p 9200:9200 owncloud/ocis\n'})}),"\n",(0,t.jsx)(n.h4,{id:"login-to-owncloud-web-interface",children:"Login to ownCloud Web Interface"}),"\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"https://<server_ip>:9200"})," and login using the admin account:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"owncloud ocis",src:o(860929).A+"",width:"962",height:"550"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},860929:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/ownCloud_OCIS_01-dea6206d8b073c472a167d5db25e0e83.png"},353387:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-857bf130225afaf92418cf5562e731b9.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(296540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);