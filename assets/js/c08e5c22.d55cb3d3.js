"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[53683],{231878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=t(474848),s=t(28453);const i={sidebar_position:9060,slug:"2019-01-11",title:"Ubuntu Network Configuration",authors:"mpolinowski",tags:["LINUX"]},a=void 0,o={id:"DevOps/Linux/2019-01-11--ubuntu-network-configuration/index",title:"Ubuntu Network Configuration",description:"Battambang, Cambodia",source:"@site/docs/DevOps/Linux/2019-01-11--ubuntu-network-configuration/index.md",sourceDirName:"DevOps/Linux/2019-01-11--ubuntu-network-configuration",slug:"/DevOps/Linux/2019-01-11--ubuntu-network-configuration/2019-01-11",permalink:"/docs/DevOps/Linux/2019-01-11--ubuntu-network-configuration/2019-01-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-01-11--ubuntu-network-configuration/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2019-01-11",title:"Ubuntu Network Configuration",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Ubuntu Server Cannot Stop Docker Container",permalink:"/docs/DevOps/Linux/2019-01-11--ubuntu-server-app-armour/2019-01-11"},next:{title:"Ubuntu Server Root SSH Remote Access",permalink:"/docs/DevOps/Linux/2019-01-11--root-access-ubuntu-server/2019-01-11"}},c={},l=[{value:"Check your network settings",id:"check-your-network-settings",level:2},{value:"Configure Netplan",id:"configure-netplan",level:2},{value:"Test and Apply your Settings",id:"test-and-apply-your-settings",level:3},{value:"Change Hostname",id:"change-hostname",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Battambang, Cambodia",src:t(455086).A+"",width:"1500",height:"640"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#check-your-network-settings",children:"Check your network settings"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#configure-netplan",children:"Configure Netplan"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#test-and-apply-your-settings",children:"Test and Apply your Settings"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#change-hostname",children:"Change Hostname"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"check-your-network-settings",children:"Check your network settings"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ip a\r\n2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\r\n    link/ether 74:d4:35:c7:c2:20 brd ff:ff:ff:ff:ff:ff\r\n    inet 192.168.2.53/24 brd 192.168.2.255 scope global enp3s0\r\n       valid_lft forever preferred_lft forever\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The current IP address for the Ethernet interface is ",(0,r.jsx)(n.code,{children:"192.168.2.53"}),". And the gateway is ",(0,r.jsx)(n.code,{children:"192.168.2.1"})," as seen below:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ip route\r\ndefault via 192.168.2.1 dev enp3s0 proto static \n"})}),"\n",(0,r.jsx)(n.h2,{id:"configure-netplan",children:"Configure Netplan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls /etc/netplan/\r\n00-installer-config.yaml\r\n\r\nsudo nano /etc/netplan/00-installer-config.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"Delete / overwrite the configuration inside this file, e.g. :"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# This is the network config written by 'subiquity'\r\nnetwork:\r\n  ethernets:\r\n    enp3s0:\r\n      addresses:\r\n        - 192.168.2.110/24\r\n      gateway4: 192.168.2.5\r\n      nameservers:\r\n        addresses:\r\n          - 192.168.2.5\r\n          - 8.8.4.4\r\n        search:\r\n          - workgroup\r\n  version: 2\n"})}),"\n",(0,r.jsx)(n.h3,{id:"test-and-apply-your-settings",children:"Test and Apply your Settings"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo netplan try\r\nWarning: Stopping systemd-networkd.service, but it can still be activated by:\r\n  systemd-networkd.socket\r\nDo you want to keep these settings?\r\n\r\nPress ENTER before the timeout to accept the new configuration\r\n\r\nChanges will revert in 107 seconds\r\nConfiguration accepted.\n"})}),"\n",(0,r.jsx)(n.p,{children:"If there is no issue, it will return the configuration accepted message. If the configuration file fails the test, it will be reverted to a previous working configuration."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo netplan apply\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify your changes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ip a\r\n2: enp3s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000\r\n    link/ether 74:d4:35:c7:c2:20 brd ff:ff:ff:ff:ff:ff\r\n    inet 192.168.2.110/24 brd 192.168.2.255 scope global enp3s0\r\n       valid_lft forever preferred_lft forever\r\n    inet6 fe80::76d4:35ff:fec7:c220/64 scope link \r\n       valid_lft forever preferred_lft forever\r\n\r\n\r\nip route\r\ndefault via 192.168.2.5 dev enp3s0 proto static \n"})}),"\n",(0,r.jsx)(n.h2,{id:"change-hostname",children:"Change Hostname"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hostname\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hostnamectl set-hostname new-hostname\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /etc/hosts\r\n\r\n127.0.1.1 new-hostname\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hostnamectl\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},455086:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/photo-19196703263_69f9f0df5f_o-14170a50fbe2ab4a9cbd78f18092a158.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(296540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);