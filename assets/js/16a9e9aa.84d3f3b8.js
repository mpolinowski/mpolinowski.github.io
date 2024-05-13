"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[8340],{973757:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(474848),o=s(28453);const i={sidebar_position:7090,slug:"2020-10-20",title:"Activating Root Login on Ubuntu 20.10",authors:"mpolinowski",tags:["LINUX"]},r=void 0,a={id:"DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10/index",title:"Activating Root Login on Ubuntu 20.10",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10/index.md",sourceDirName:"DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10",slug:"/DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10/2020-10-20",permalink:"/docs/DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10/2020-10-20",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:7090,frontMatter:{sidebar_position:7090,slug:"2020-10-20",title:"Activating Root Login on Ubuntu 20.10",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Debian Upgrade to Bullseye",permalink:"/docs/DevOps/Linux/2021-03-15-debian-upgrade-bullseye/2021-03-15"},next:{title:"HDD Smart Tools for LINUX",permalink:"/docs/DevOps/Linux/2020-10-13--smarttools-centos/2020-10-13"}},d={},c=[{value:"Edit the SSHD Configuration",id:"edit-the-sshd-configuration",level:2},{value:"Restart SSH Service",id:"restart-ssh-service",level:2},{value:"Activate the Root User",id:"activate-the-root-user",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Victoria Harbour, Hong Kong",src:s(188699).A+"",width:"1500",height:"509"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#edit-the-sshd-configuration",children:"Edit the SSHD Configuration"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#restart-ssh-service",children:"Restart SSH Service"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#activate-the-root-user",children:"Activate the Root User"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"edit-the-sshd-configuration",children:"Edit the SSHD Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.code,{children:"/etc/ssh/sshd_config"})," file with administrative privileges and change the following line:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-cfg",children:"#PermitRootLogin prohibit-password\r\nPermitRootLogin yes\n"})}),"\n",(0,n.jsx)(t.p,{children:"The quick way to do this job could be just to simply use the sed command as shown below:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config\n"})}),"\n",(0,n.jsx)(t.h2,{id:"restart-ssh-service",children:"Restart SSH Service"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo systemctl restart ssh\n"})}),"\n",(0,n.jsx)(t.h2,{id:"activate-the-root-user",children:"Activate the Root User"}),"\n",(0,n.jsx)(t.p,{children:"By default the root's password is not set on Ubuntu 20.04 and the error message Permission denied, please try again will appear when attempting to SSH login as a root user. From this reason we need to set root's password. When prompted enter your current user password followed by new root password:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"sudo passwd\r\n[sudo] password for mylinuxuser:\r\nEnter new UNIX password:\r\nRetype new UNIX password:\r\npasswd: password updated successfully\n"})})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},188699:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-b57dcf7a42ddd712383aadde6d3ef4c8.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(296540);const o={},i=n.createContext(o);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);