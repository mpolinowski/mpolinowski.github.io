"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[32320],{951236:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=t(474848),s=t(28453);const a={sidebar_position:9040,slug:"2019-01-12",title:"Centos Network Configuration",authors:"mpolinowski",tags:["LINUX"]},o=void 0,i={id:"DevOps/Linux/2019-01-12--centos-network-configuration/index",title:"Centos Network Configuration",description:"Battambang, Cambodia",source:"@site/docs/DevOps/Linux/2019-01-12--centos-network-configuration/index.mdx",sourceDirName:"DevOps/Linux/2019-01-12--centos-network-configuration",slug:"/DevOps/Linux/2019-01-12--centos-network-configuration/2019-01-12",permalink:"/docs/DevOps/Linux/2019-01-12--centos-network-configuration/2019-01-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-01-12--centos-network-configuration/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2019-01-12",title:"Centos Network Configuration",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Centos Administration",permalink:"/docs/DevOps/Linux/2019-01-13--centos-administration/2019-01-13"},next:{title:"Ubuntu Server Cannot Stop Docker Container",permalink:"/docs/DevOps/Linux/2019-01-11--ubuntu-server-app-armour/2019-01-11"}},c={},l=[{value:"Change DNS Server Manually",id:"change-dns-server-manually",level:2},{value:"DNS Settings using the NetworkManager",id:"dns-settings-using-the-networkmanager",level:2},{value:"Default gateway on CentOS",id:"default-gateway-on-centos",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Battambang, Cambodia",src:t(706136).A+"",width:"1500",height:"640"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#change-dns-server-manually",children:"Change DNS Server Manually"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#dns-settings-using-the-networkmanager",children:"DNS Settings using the NetworkManager"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#default-gateway-on-centos",children:"Default gateway on CentOS"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"change-dns-server-manually",children:"Change DNS Server Manually"}),"\n",(0,r.jsx)(n.p,{children:"Check current DNS Server:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat /etc/resolv.conf\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can change the nameserver IP address by editing this file. ",(0,r.jsx)(n.strong,{children:"Note"})," that your edit is going to be overwritten by the ",(0,r.jsx)(n.strong,{children:"NetworkManager"})," again once you restart your server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano  /etc/resolv.conf\n"})}),"\n",(0,r.jsx)(n.p,{children:"Edit/update nameserver entry as follows (you can set maximum 3 nameserver IP address):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"# Generated by NetworkManager\r\nsearch fritz.box\r\nnameserver 192.168.2.1\r\nnameserver 192.168.2.5\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dns-settings-using-the-networkmanager",children:"DNS Settings using the NetworkManager"}),"\n",(0,r.jsx)(n.p,{children:"Run the following nmcli command to view your network interfaces:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@CentOS8 ~]# nmcli connection\r\n\r\nNAME     UUID                                  TYPE      DEVICE  \r\ndocker0  09eef622-55b4-4d6e-9ee1-a05c1e8d5e69  bridge    docker0 \r\nenp2s0   280ed14d-7c8b-4586-853d-420df9f65412  ethernet  enp2s0  \n"})}),"\n",(0,r.jsxs)(n.p,{children:["To set up DNS IP address to ",(0,r.jsx)(n.code,{children:"192.168.2.1"})," and ",(0,r.jsx)(n.code,{children:"192.168.2.5"}),", run:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nmcli con mod {interfaceNameHere} ipv4.dns '192.168.2.254 192.168.2.18'\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For the case above this would be ",(0,r.jsx)(n.code,{children:"nmcli con mod enp2s0 ipv4.dns '192.168.2.1 192.168.2.5'"})]}),"\n",(0,r.jsx)(n.p,{children:"Reload new DNS settings by running any one of the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"systemctl restart NetworkManager.service\n"})}),"\n",(0,r.jsx)(n.h2,{id:"default-gateway-on-centos",children:"Default gateway on CentOS"}),"\n",(0,r.jsx)(n.p,{children:"On CentOS you can check the routing table with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@CentOS8 ~]# route -n\r\nKernel IP routing table\r\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\r\n0.0.0.0         192.168.2.5     0.0.0.0         UG    100    0        0 enp2s0\r\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\r\n192.168.2.0     0.0.0.0         255.255.255.0   U     100    0        0 enp2s0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The last line of the table indicates the default gateway of the machine. In this case the default gateway for the ",(0,r.jsx)(n.strong,{children:"enp2s0"})," interface is ",(0,r.jsx)(n.code,{children:"192.168.2.5"}),". Or alternatively use:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"[root@CentOS8 ~]# ip route show\r\ndefault via 192.168.2.5 dev enp2s0 proto static metric 100 \r\n172.17.0.0/16 dev docker0 proto kernel scope link src 172.17.0.1 \r\n192.168.2.0/24 dev enp2s0 proto kernel scope link src 192.168.2.111 metric 100\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can control default gateway using route command - temporarely (will default back on your next rebood):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"route del default gw <default_gateway_ip>\r\nroute add default gw <default_gateway_ip>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or you can use the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ip route replace default via <default_gateway_ip> dev enp2s0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To change default gateway permanently update ",(0,r.jsx)(n.code,{children:"/etc/sysconfig/network-scripts/ifcfg-{interfaceNameHere}"})," accordingly."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[root@CentOS8 ~]# nano /etc/sysconfig/network-scripts/ifcfg-enp2s0\r\nGATEWAY=192.168.2.5\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},706136:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/photo-19196703263_69f9f0df5f_o-14170a50fbe2ab4a9cbd78f18092a158.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);