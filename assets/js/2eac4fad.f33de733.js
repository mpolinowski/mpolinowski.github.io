"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[2504],{645168:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(785893),r=n(603905);const i={sidebar_position:7010,slug:"2021-01-22",title:"File Transfer Tool in Node.js",authors:"mpolinowski",tags:["LINUX","Javascript","Node"]},a=void 0,o={id:"DevOps/Provisioning/2021-01-22-file-transfer-tools-in-nodejs/index",title:"File Transfer Tool in Node.js",description:"Shenzhen, China",source:"@site/docs/DevOps/Provisioning/2021-01-22-file-transfer-tools-in-nodejs/index.md",sourceDirName:"DevOps/Provisioning/2021-01-22-file-transfer-tools-in-nodejs",slug:"/DevOps/Provisioning/2021-01-22-file-transfer-tools-in-nodejs/2021-01-22",permalink:"/docs/DevOps/Provisioning/2021-01-22-file-transfer-tools-in-nodejs/2021-01-22",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2021-01-22-file-transfer-tools-in-nodejs/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Node",permalink:"/docs/tags/node"}],version:"current",sidebarPosition:7010,frontMatter:{sidebar_position:7010,slug:"2021-01-22",title:"File Transfer Tool in Node.js",authors:"mpolinowski",tags:["LINUX","Javascript","Node"]},sidebar:"tutorialSidebar",previous:{title:"Node.js FTP Server",permalink:"/docs/DevOps/Provisioning/2021-01-23-nodejs-file-server/2021-01-23"},next:{title:"Installing Wazuh with Docker Compose",permalink:"/docs/DevOps/Provisioning/2020-10-02--installing-wazuh-in-docker/2020-10-02"}},l={},c=[{value:"httpster",id:"httpster",level:2},{value:"Installation",id:"installation",level:3},{value:"HTML5 Pushstates",id:"html5-pushstates",level:3},{value:"Basic Authentication",id:"basic-authentication",level:3},{value:"Symbolic Links",id:"symbolic-links",level:3},{value:"ftp-srv",id:"ftp-srv",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Start your FTP Server",id:"start-your-ftp-server",level:3},{value:"Usage",id:"usage",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Shenzhen, China",src:n(647005).Z+"",width:"1500",height:"597"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#httpster",children:"httpster"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#installation",children:"Installation"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#html5-pushstates",children:"HTML5 Pushstates"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#basic-authentication",children:"Basic Authentication"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#symbolic-links",children:"Symbolic Links"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"#ftp-srv",children:"ftp-srv"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#installation-1",children:"Installation"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#start-your-ftp-server",children:"Start your FTP Server"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"#usage",children:"Usage"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["I am often faced with the issue of transferring files from one server to another - getting your PDF file onto an Android phone, share your latest model data with a co-worker or testing an IoT devices FTP upload to your server. The candy store at the ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/",children:"node modules manager"})," offers two tools that allow you to do that with a simple one-liner on your console or terminal - on LINUX, Windows or macOS."]}),"\n",(0,t.jsx)(s.h2,{id:"httpster",children:"httpster"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/httpster",children:"httpster"})," is a simple http server that gives you access to a directory on your server through the HTTP protocol."]}),"\n",(0,t.jsx)(s.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(s.p,{children:"Installation is done via npm, which is installed along with NodeJS on most platforms."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm -g install httpster\n"})}),"\n",(0,t.jsx)(s.p,{children:"Then from any directory where you want to have an http service running, just run"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster\n"})}),"\n",(0,t.jsx)(s.p,{children:"That will start up a web server on port 3333 and let you serve up any static content you wish. If you want to change the port or directory that the server runs from pass in the -p or -d options"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster -p 8080 -d /home/somedir/public_html\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"httpster",src:n(153564).Z+"",width:"954",height:"734"})}),"\n",(0,t.jsx)(s.h3,{id:"html5-pushstates",children:"HTML5 Pushstates"}),"\n",(0,t.jsxs)(s.p,{children:["If you want to run a local site that supports HTML5 Pushstates (aka being able to refresh the page), pass in the option ",(0,t.jsx)(s.code,{children:"-s"})," or ",(0,t.jsx)(s.code,{children:"--pushstate"}),". This will map all 4oh4's to the index.html you specified as root directory."]}),"\n",(0,t.jsx)(s.h3,{id:"basic-authentication",children:"Basic Authentication"}),"\n",(0,t.jsxs)(s.p,{children:["Since you can use httpster to deploy to PaaS providers like heroku you can now secure those deployments with basic authentication. The ",(0,t.jsx)(s.code,{children:"-b"})," or ",(0,t.jsx)(s.code,{children:"--basic_auth"})," options will read the ",(0,t.jsx)(s.strong,{children:"HTTPSTER_AUTH_USER"})," and ",(0,t.jsx)(s.strong,{children:"HTTPSTER_AUTH_PASS"})," variables from your environment for authentication."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster -b\n"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster --basic_auth\n"})}),"\n",(0,t.jsx)(s.p,{children:"If testing this locally you can also use a .env file in the directory you will run httpster from."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"HTTPSTER_AUTH_USER=desired_username\r\nHTTPSTER_AUTH_PASS=desired_password\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Then use the ",(0,t.jsx)(s.code,{children:"-e"})," or ",(0,t.jsx)(s.code,{children:"--env"})," option to specify to load the environmental variables:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster --env --basic_auth\n"})}),"\n",(0,t.jsx)(s.h3,{id:"symbolic-links",children:"Symbolic Links"}),"\n",(0,t.jsx)(s.p,{children:"For security purposes symbolic links have been disabled in the default usage. If you need to serve content through symbolic links you can add the following flag when launching httpster."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster -l\n"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"httpster --symlink\n"})}),"\n",(0,t.jsx)(s.h2,{id:"ftp-srv",children:"ftp-srv"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/ftp-srv",children:"ftp-srv"})," is a modern and extensible FTP server designed to be simple yet configurable."]}),"\n",(0,t.jsx)(s.h3,{id:"installation-1",children:"Installation"}),"\n",(0,t.jsx)(s.p,{children:"Install the package through npm:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install -g ftp-srv\n"})}),"\n",(0,t.jsx)(s.h3,{id:"start-your-ftp-server",children:"Start your FTP Server"}),"\n",(0,t.jsx)(s.p,{children:"ftp-srv comes with a builtin CLI:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"$ ftp-srv [url] [options]\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To spin up your FTP service on a server with the local IP address ",(0,t.jsx)(s.code,{children:"192.168.2.111"})," in the root directory ",(0,t.jsx)(s.code,{children:"/opt/ftp-srv/uploads"})," (make sure it exists and the user that executes the FTP service is allowed to write to it!) run the following command:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"ftp-srv ftp://192.168.2.111:9876 --root /opt/ftp-srv/uploads --username ftpuser --password password \n"})}),"\n",(0,t.jsx)(s.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(s.p,{children:"You can now use a tool like Filezilla to test your service:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ftp-srv Filezilla",src:n(603498).Z+"",width:"1037",height:"453"})}),"\n",(0,t.jsx)(s.p,{children:"Or with your INSTAR IP camera:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"ftp-srv INSTAR",src:n(455332).Z+"",width:"1031",height:"550"})})]})}function d(e={}){const{wrapper:s}={...(0,r.ah)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},603905:(e,s,n)=>{n.d(s,{ah:()=>c});var t=n(667294);function r(e,s,n){return s in e?Object.defineProperty(e,s,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[s]=n,e}function i(e,s){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var s=1;s<arguments.length;s++){var n=null!=arguments[s]?arguments[s]:{};s%2?i(Object(n),!0).forEach((function(s){r(e,s,n[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))}))}return e}function o(e,s){if(null==e)return{};var n,t,r=function(e,s){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],s.indexOf(n)>=0||(r[n]=e[n]);return r}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),c=function(e){var s=t.useContext(l),n=s;return e&&(n="function"==typeof e?e(s):a(a({},s),e)),n},h={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},d=t.forwardRef((function(e,s){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return n?t.createElement(f,a(a({ref:s},d),{},{components:n})):t.createElement(f,a({ref:s},d))}));d.displayName="MDXCreateElement"},603498:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ftp-srv_filezilla_01-4cf2071ff7904810d5929c7532d6b15e.png"},455332:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/ftp-srv_instar_01-c34ab43dcb01d72ff0cf71250f70f631.png"},153564:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/httpster_01-e0029d4def904589a13e327250c31ab7.png"},647005:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-91a640c918f5f3896f219eb8a3a3ead0.jpg"}}]);