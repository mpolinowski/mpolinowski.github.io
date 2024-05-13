"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[81836],{797205:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=r(474848),o=r(28453);const s={sidebar_position:6030,slug:"2022-03-09",title:"Fing CLI Network Scanner on Arch Linux",authors:"mpolinowski",tags:["LINUX"]},t=void 0,a={id:"DevOps/Linux/2022-03-09--fing-cli-network-scanner/index",title:"Fing CLI Network Scanner on Arch Linux",description:"Shenzhen, China",source:"@site/docs/DevOps/Linux/2022-03-09--fing-cli-network-scanner/index.md",sourceDirName:"DevOps/Linux/2022-03-09--fing-cli-network-scanner",slug:"/DevOps/Linux/2022-03-09--fing-cli-network-scanner/2022-03-09",permalink:"/docs/DevOps/Linux/2022-03-09--fing-cli-network-scanner/2022-03-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2022-03-09--fing-cli-network-scanner/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:6030,frontMatter:{sidebar_position:6030,slug:"2022-03-09",title:"Fing CLI Network Scanner on Arch Linux",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"nmap Cheat Sheet",permalink:"/docs/DevOps/Linux/2022-03-10--nmap-network-scanner/2022-03-10"},next:{title:"Using the AVM Fritzbox VPN on Manjaro (KDE)",permalink:"/docs/DevOps/Linux/2022-03-08--arch-kde-fritz-vpn/2022-03-08"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Fing Hosts Properties",id:"fing-hosts-properties",level:3},{value:"Fing Discovery Properties",id:"fing-discovery-properties",level:3},{value:"Fing Fing Properties",id:"fing-fing-properties",level:3},{value:"Fing IP-Services Properties",id:"fing-ip-services-properties",level:3},{value:"Run a Network Scan",id:"run-a-network-scan",level:2},{value:"Info",id:"info",level:3},{value:"Discovery",id:"discovery",level:3},{value:"Services",id:"services",level:3},{value:"Ping",id:"ping",level:3},{value:"Traceroute",id:"traceroute",level:3},{value:"Wake-on-LAN",id:"wake-on-lan",level:3}];function d(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Shenzhen, China",src:r(461739).A+"",width:"1500",height:"550"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#installation",children:"Installation"})}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#configuration",children:"Configuration"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#fing-hosts-properties",children:"Fing Hosts Properties"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#fing-discovery-properties",children:"Fing Discovery Properties"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#fing-fing-properties",children:"Fing Fing Properties"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#fing-ip-services-properties",children:"Fing IP-Services Properties"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.a,{href:"#run-a-network-scan",children:"Run a Network Scan"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#info",children:"Info"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#discovery",children:"Discovery"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#services",children:"Services"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#ping",children:"Ping"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#traceroute",children:"Traceroute"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"#wake-on-lan",children:"Wake-on-LAN"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(e.p,{children:["There are ",(0,i.jsx)(e.a,{href:"https://www.fing.com/products/development-toolkit",children:"installer available"})," for Windows, macOS and Debian (deb)/RHEL(rpm) Linux and the installation there should be straight forward. On Arch I will use the ",(0,i.jsx)(e.strong,{children:"Linux Generic"})," download:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"wget https://www.fing.com/images/uploads/general/CLI_Linux_Generic_5.5.2.zip\r\nunzip CLI_Linux_Generic_5.5.2.zip\n"})}),"\n",(0,i.jsxs)(e.p,{children:["In case of ",(0,i.jsx)(e.strong,{children:"Debian"})," and ",(0,i.jsx)(e.strong,{children:"RHEL"})," you can directly install the deb or rpm package:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo dpkg -i fing-5.5.2-amd64.deb\r\nsudo rpm -i fing-5.5.2-amd64.rpm\n"})}),"\n",(0,i.jsx)(e.p,{children:"For the Linux Generic build we have to un-tar the package and copy all files to the place they belong - this can be done with the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo tar -zxvf fing-5.5.2-amd64.tar.gz --strip-components 1 -C /\n"})}),"\n",(0,i.jsxs)(e.p,{children:["More Installation Options can be found ",(0,i.jsx)(e.a,{href:"https://help.fing.com/knowledge-base/steps-installation-process/",children:"here"}),"."]}),"\n",(0,i.jsx)(e.p,{children:"Verify that the installation worked as expected:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -v\r\n5.5.2\n"})}),"\n",(0,i.jsx)(e.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(e.p,{children:["All configuration files can be found in ",(0,i.jsx)(e.code,{children:"/etc/fing"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"fing-hosts-properties",children:"Fing Hosts Properties"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yml",children:"sudo nano /etc/fing/hosts.properties\r\n\r\n192.168.178.0/24 = INSTAR Office\r\n\r\n192.168.178.1 = Primary Gateway\r\n192.168.178.5 = Secondary Gateway\r\n\r\n192.168.178.110 = RHEL8 Workstation\r\n192.168.178.111 = Debian Bullseye\r\n192.168.178.112 = Manjaro Workstation\r\n192.168.178.117 = MP-8015 White\n"})}),"\n",(0,i.jsx)(e.h3,{id:"fing-discovery-properties",children:"Fing Discovery Properties"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yml",children:"sudo nano discovery.properties\r\n\r\n# Network Discovery configuration - Copyright 2009 by Overlook\r\n# $Id$\r\n#\r\n\r\n# default profile\r\nprofile.default=Default discovery profile\r\n\r\n# native (data-link) discovery configuration for default profile\r\nprofile.default.data-link.round.interval = 60000\r\nprofile.default.data-link.packet.interval = 20\r\nprofile.default.data-link.timeout = 1500\r\nprofile.default.data-link.retries = 3\r\n\r\n# network discovery configuration for default profile\r\nprofile.default.network.round.interval = 300000\r\nprofile.default.network.packet.interval = 5\r\nprofile.default.network.discovery.icmp = true\r\nprofile.default.network.discovery.tcp = true\r\nprofile.default.network.timeout.icmp = 2000\r\nprofile.default.network.timeout.tcp = 2000\r\nprofile.default.network.retries.icmp = 2\r\nprofile.default.network.retries.tcp = 2\r\nprofile.default.network.discovery.tcp.services = 80;135;139;143;21;22;23;25;443;445;53;8080;110;3306;3389\n"})}),"\n",(0,i.jsx)(e.h3,{id:"fing-fing-properties",children:"Fing Fing Properties"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yml",children:"sudo nano /etc/fing/fing.properties\r\n\r\n#\r\n# Fing system properties - Copyright 2008-2009 by Overlook\r\n# $Id$\r\n#\r\n\r\n#\r\n# log configuration\r\n#\r\noverlook.fing.logging.enabled = false\r\noverlook.fing.logging.level = INFO\r\n\r\n\r\n#\r\n# Discovery configuration and defaults\r\n#\r\noverlook.fing.netdiscovery.network.default =\r\noverlook.fing.netdiscovery.output.default = log,text table,stext\r\noverlook.fing.netdiscovery.rounds.default = 0\r\noverlook.fing.netdiscovery.profile.default = default\r\noverlook.fing.netdiscovery.shownProgressStep = 25\r\noverlook.fing.netdiscovery.eventlog.maxsize = 100\r\noverlook.fing.netdiscovery.eventlog.maxdays = 365\r\noverlook.fing.netdiscovery.dnslookup.refresh = 1800000\r\n\r\n\r\n#\r\n# Date and time format configuration (all, month, day, time)\r\n#\r\noverlook.fing.DateTimeFormat.format = time\r\n\r\n\r\n#\r\n# Reverse DNS Lookup feature\r\n#\r\noverlook.fing.ReverseDnsLookup.enabled = true\r\n\r\n#\r\n# CSV separator configuration\r\n#\r\noverlook.fing.formatter.csv.separator = ;\r\n\r\n#\r\n# TCP service scan configuration: tcp syn and connect scan\r\n#\r\n\r\n# TCP syn scan configuration\r\noverlook.net.scan.TcpSynScanner.retries = 2\r\noverlook.net.scan.TcpSynScanner.timeout = 2000\r\noverlook.net.scan.TcpSynScanner.packet.interval = 2\r\n\r\n# TCP connect scan configuration\r\noverlook.net.scan.TcpConnectScanner.threadpool.corePoolSize = 10\r\noverlook.net.scan.TcpConnectScanner.threadpool.maxPoolSize = 50\r\n\r\n#\r\n# ICMP ping configuration\r\n#\r\noverlook.fing.Ping.retries = 5\r\noverlook.fing.Ping.timeout = 1500\r\noverlook.fing.Ping.packet.interval = 150\r\noverlook.fing.Ping.packet.size = 32\r\n\r\n\r\n#\r\n# HTTP proxy configuration\r\n# At the moment the only supported proxy is HTTP, to enable it set:\r\n# overlook.net.http.proxy = http\r\n#\r\noverlook.net.http.proxy = none\r\noverlook.net.http.proxy.http.host = your-proxy-host-here\r\noverlook.net.http.proxy.http.port = your-proxy-port-here\r\n\r\n#\r\n# HTTP Basic auth is supported, if needed by the proxy, to enable it set auth=true and fill in account\r\n#\r\noverlook.net.http.proxy.http.auth = false\r\noverlook.net.http.proxy.http.user = your-proxy-user-here\r\noverlook.net.http.proxy.http.pass = your-proxy-pass-here\n"})}),"\n",(0,i.jsx)(e.h3,{id:"fing-ip-services-properties",children:"Fing IP-Services Properties"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yml",children:"sudo nano ip-services.properties\r\n\r\nudp.80=http ; World Wide Web HTTP ; scan\r\nudp.800=mdbs_daemon ;  ; scan\r\nudp.801=device ;  ; scan\r\nudp.81=hosts2-ns ; HOSTS2 Name Server ; scan\r\nudp.82=xfer ; XFER Utility ; scan\r\nudp.83=mit-ml-dev ; MIT ML Device ; scan\r\nudp.84=ctf ; Common Trace Facility ; scan\r\nudp.85=mit-ml-dev ; MIT ML Device ; scan\r\nudp.86=mfcobol ; Micro Focus Cobol ; scan\r\nudp.88=kerberos-sec ; Kerberos (v5) ; scan\r\n\r\n...\n"})}),"\n",(0,i.jsx)(e.h2,{id:"run-a-network-scan",children:"Run a Network Scan"}),"\n",(0,i.jsx)(e.h3,{id:"info",children:"Info"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -i\r\n\r\nLocal network interfaces:\r\n        enp3s0:\r\n                Type:             Ethernet\r\n                Hardware address: 1C:1B:0D:C5:81:7F\r\n                Vendor:           Giga-Byte Technology\r\n                IP address:       192.168.178.112/24 [192.168.178.255]\r\n                IP address:       240E:03B5:3012:5260:66DB:B3CF:A9E3:384E/128\r\n                IP address:       FD00:0000:0000:0000:DC97:4573:6246:8872/128\r\n                IP address:       FE80:0000:0000:0000:F5F7:2320:89B5:C3C6/128\r\n\r\n        docker0:\r\n                Type:             Ethernet\r\n                Hardware address: 02:42:24:AC:C8:2F\r\n                IP address:       172.17.0.1/16 [172.17.255.255]\r\n\r\n        tun0:\r\n                Type:             Raw IP\r\n                IP address:       198.18.9.120/21\r\n                IP address:       FE80:0000:0000:0000:43A6:AAD3:BD26:0CD5/128\r\n\r\nRemote networks:\r\n        0.0.0.0/1 via 198.18.8.1\r\n        91.207.174.101/32 via 192.168.178.1\r\n        128.0.0.0/1 via 198.18.8.1\r\n\r\nDefault gateway:\r\n        192.168.178.1\r\n\r\nDNS Servers:\r\n        198.18.8.1\n"})}),"\n",(0,i.jsx)(e.h3,{id:"discovery",children:"Discovery"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -n 192.168.178.0/24\r\n\r\n\r\n12:51:50 > Discovery profile: Default discovery profile\r\n12:51:50 > Discovery class:   data-link (data-link layer)\r\n12:51:50 > Discovery on:      INSTAR Office (192.168.178.0/24)\r\n\r\n12:51:50 > Discovery round starting.\r\n12:51:50 > Host is up:   Manjaro Workstation (192.168.178.112)\r\n           HW Address:   1C:1B:0D:C5:81:7F (Giga-Byte Technology)\r\n           Hostname:     TP-Link0815b\r\n\r\n12:51:51 > Host is up:   Primary Gateway (192.168.178.1)\r\n           HW Address:   44:4E:6D:7A:1C:BB\r\n           Hostname:     _gateway\r\n\r\n12:51:51 > Host is up:   Secondary Gateway (192.168.178.5)\r\n           HW Address:   44:4E:6D:79:AC:13\r\n\r\n12:51:55 > Discovery progress 25%\r\n\r\n12:51:51 > Host is up:   192.168.178.59\r\n           HW Address:   10:D1:DC:22:78:39 (INSTAR Deutschland)\r\n\r\n12:51:51 > Host is up:   192.168.178.50\r\n           HW Address:   10:D1:DC:22:56:87 (INSTAR Deutschland)\r\n\r\n12:51:52 > Host is up:   192.168.178.52\r\n           HW Address:   10:D1:DC:1F:46:35 (INSTAR Deutschland)\r\n\r\n12:51:52 > Host is up:   192.168.178.64\r\n           HW Address:   10:D1:DC:22:78:20 (INSTAR Deutschland)\r\n\r\n12:51:52 > Host is up:   192.168.178.67\r\n           HW Address:   10:D1:DC:1E:95:34 (INSTAR Deutschland)\r\n\r\n12:51:53 > Host is up:   RHEL8 Workstation (192.168.178.110)\r\n           HW Address:   74:D4:35:C7:C2:20 (Giga-Byte Technology)\r\n\r\n12:51:53 > Host is up:   MP-8015 White (192.168.178.117)\r\n           HW Address:   10:D1:DC:21:8F:96 (INSTAR Deutschland)\r\n\r\n12:52:03 > Discovery progress 75%\r\n-------------------------------------------------------------------------------\r\n| State | Host                              | MAC Address       | Last change |\r\n|-----------------------------------------------------------------------------|\r\n|  UP   | 192.168.178.1                       | 44:4E:6D:7A:1C:BB |             |\r\n|  UP   | 192.168.178.5                       | 44:4E:6D:79:AC:13 |             |\r\n|  UP   | 192.168.178.50                      | 10:D1:DC:22:56:87 |             |\r\n|  UP   | 192.168.178.52                      | 10:D1:DC:1F:46:35 |             |\r\n|  UP   | 192.168.178.59                      | 10:D1:DC:22:78:39 |             |\r\n|  UP   | 192.168.178.64                      | 10:D1:DC:22:78:20 |             |\r\n|  UP   | 192.168.178.67                      | 10:D1:DC:1E:95:34 |             |\r\n|  UP   | 192.168.178.110                     | 74:D4:35:C7:C2:20 |             |\r\n|  UP   | 192.168.178.112                     | 1C:1B:0D:C5:81:7F |             |\r\n|  UP   | 192.168.178.117                     | 10:D1:DC:21:8F:96 |             |\r\n-------------------------------------------------------------------------------\r\n\r\n12:52:07 > Discovery round completed in 16.504 seconds.\r\n12:52:07 > Network INSTAR Office has 10/10 hosts up.\n"})}),"\n",(0,i.jsx)(e.h3,{id:"services",children:"Services"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -s 192.168.178.117\r\n\r\n12:57:44 > Service scan on: MP-8015 White (192.168.178.117)\r\n\r\n12:57:44 > Service scan starting.\r\n12:57:44 > Detected MAC address: 10:D1:DC:21:8F:96\r\n12:57:44 > Detected service:   443 (https)\r\n12:57:44 > Detected service:    80 (http)\r\n12:57:44 > Detected service:    22 (ssh)\r\n12:57:44 > Detected service:  8080 (http-proxy)\r\n12:57:44 > Detected service:  1935 (rtmp)\r\n12:57:45 > Detected service:   554 (rtsp)\r\n12:57:45 > Service scan completed in 0.985 seconds.\r\n\r\n-------------------------------------------------------------------------------\r\n| Scan result for MP-8015 White (192.168.178.117 10:D1:DC:21:8F:96)             |\r\n|-----------------------------------------------------------------------------|\r\n|  Port | Service         | Description                                       |\r\n|-----------------------------------------------------------------------------|\r\n|    22 | ssh             | SSH Secure Shell                                  |\r\n|    80 | http            | World Wide Web HTTP                               |\r\n|   443 | https           | Secure World Wide Web HTTP (SSL)                  |\r\n|   554 | rtsp            | Real Time Stream Control Protocol                 |\r\n|  1935 | rtmp            | Macromedia FlasComm Server                        |\r\n|  8080 | http-proxy      | Common HTTP proxy/second web server port          |\r\n-------------------------------------------------------------------------------\n"})}),"\n",(0,i.jsx)(e.h3,{id:"ping",children:"Ping"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -p 192.168.178.117\r\n\r\n12:58:59 > Ping reply from MP-8015 White in 0 ms\r\n12:58:59 > Ping reply from MP-8015 White in 1 ms\r\n12:58:59 > Ping reply from MP-8015 White in 1 ms\r\n12:58:59 > Ping reply from MP-8015 White in 0 ms\r\n12:58:59 > Ping reply from MP-8015 White in 0 ms\r\n\r\n-------------------------------------------------\r\n|       === Fing 5.5.2 - www.fing.io ===        |\r\n|-----------------------------------------------|\r\n| host          |   avg |  loss |   min |   max |\r\n|-----------------------------------------------|\r\n| MP-8015 White |     0 |     - |     0 |     1 |\r\n-------------------------------------------------\n"})}),"\n",(0,i.jsx)(e.h3,{id:"traceroute",children:"Traceroute"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -T 192.168.178.110\r\n\r\n2022/04/04 13:00:39 > Selected network interface: enp3s0\r\ntraceroute to RHEL8 Workstation (192.168.178.110), 30 hops max, 52 byte packtes\r\n\r\n 1> 192.168.178.110 (192.168.178.110)\r\n         0.222 ms  0.160 ms  0.183 ms \r\n---------------------------------------------------------\r\n|           === Fing 5.5.2 - www.fing.io ===            |\r\n|-------------------------------------------------------|\r\n| #hop  | host          |   avg |  loss |   min |   max |\r\n|-------------------------------------------------------|\r\n|     1 | 192.168.178.110 | 0.188 |     - | 0.160 | 0.222 |\r\n---------------------------------------------------------\n"})}),"\n",(0,i.jsx)(e.h3,{id:"wake-on-lan",children:"Wake-on-LAN"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"sudo fing -w 192.168.178.110\n"})})]})}function p(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},461739:(n,e,r)=>{r.d(e,{A:()=>i});const i=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-a088ce754b9d8147f634f2d7650e4a00.jpg"},28453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>a});var i=r(296540);const o={},s=i.createContext(o);function t(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:t(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);