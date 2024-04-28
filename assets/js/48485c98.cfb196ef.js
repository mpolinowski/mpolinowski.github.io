"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[37192],{462906:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>c,metadata:()=>l,toc:()=>t});var a=n(474848),i=n(28453);const c={sidebar_position:6020,slug:"2022-03-10",title:"nmap Cheat Sheet",authors:"mpolinowski",tags:["LINUX","Cheating"],description:"Syntax for Nmap Commands"},r=void 0,l={id:"DevOps/Linux/2022-03-10--nmap-network-scanner/index",title:"nmap Cheat Sheet",description:"Syntax for Nmap Commands",source:"@site/docs/DevOps/Linux/2022-03-10--nmap-network-scanner/index.md",sourceDirName:"DevOps/Linux/2022-03-10--nmap-network-scanner",slug:"/DevOps/Linux/2022-03-10--nmap-network-scanner/2022-03-10",permalink:"/docs/DevOps/Linux/2022-03-10--nmap-network-scanner/2022-03-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2022-03-10--nmap-network-scanner/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Cheating",permalink:"/docs/tags/cheating"}],version:"current",sidebarPosition:6020,frontMatter:{sidebar_position:6020,slug:"2022-03-10",title:"nmap Cheat Sheet",authors:"mpolinowski",tags:["LINUX","Cheating"],description:"Syntax for Nmap Commands"},sidebar:"tutorialSidebar",previous:{title:"Secure Timeserver - NTP with NTS with Docker",permalink:"/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21"},next:{title:"Fing CLI Network Scanner on Arch Linux",permalink:"/docs/DevOps/Linux/2022-03-09--fing-cli-network-scanner/2022-03-09"}},d={},t=[{value:"Installation",id:"installation",level:2},{value:"Nmap Commands",id:"nmap-commands",level:2},{value:"Syntax for Nmap Commands",id:"syntax-for-nmap-commands",level:3},{value:"Network Scans",id:"network-scans",level:3},{value:"nmap IP or Host Scan",id:"nmap-ip-or-host-scan",level:4},{value:"Scan a Range of IP\u2019s",id:"scan-a-range-of-ips",level:4},{value:"nmap Scan Subnet",id:"nmap-scan-subnet",level:4},{value:"Scan a List of Targets",id:"scan-a-list-of-targets",level:4},{value:"Fast Scan Don&#39;t List Services",id:"fast-scan-dont-list-services",level:4},{value:"Port Scans",id:"port-scans",level:3},{value:"Scan Single Port",id:"scan-single-port",level:4},{value:"Scan a Range of Ports",id:"scan-a-range-of-ports",level:4},{value:"Specified Ports",id:"specified-ports",level:4},{value:"Scan the 100 most Common Ports",id:"scan-the-100-most-common-ports",level:4},{value:"Scan all Ports",id:"scan-all-ports",level:4},{value:"Scan TCP Ports",id:"scan-tcp-ports",level:4},{value:"SYN Scan TCP Ports",id:"syn-scan-tcp-ports",level:4},{value:"Scan specific UDP Ports",id:"scan-specific-udp-ports",level:4},{value:"Scan Ports of Hosts that don&#39;t respond to Pings",id:"scan-ports-of-hosts-that-dont-respond-to-pings",level:4},{value:"Operating System and Services",id:"operating-system-and-services",level:3},{value:"Aggressive Service Detection",id:"aggressive-service-detection",level:4},{value:"Lightweight Service Detection",id:"lightweight-service-detection",level:4},{value:"Scan Firewall Settings",id:"scan-firewall-settings",level:4},{value:"Scan IPv6 Addresses",id:"scan-ipv6-addresses",level:4},{value:"Find the Open Port",id:"find-the-open-port",level:4},{value:"Packets Send or Received",id:"packets-send-or-received",level:4},{value:"Specific MAC Address Spoofing",id:"specific-mac-address-spoofing",level:4},{value:"Random MAC Address Spoofing",id:"random-mac-address-spoofing",level:4},{value:"Scanning with NSE Scripts",id:"scanning-with-nse-scripts",level:3},{value:"WHOIS",id:"whois",level:4},{value:"HTTP Title",id:"http-title",level:4},{value:"HTTP Headers",id:"http-headers",level:4},{value:"Discover Hosts using the DNS Service",id:"discover-hosts-using-the-dns-service",level:4},{value:"Brute Force",id:"brute-force",level:4},{value:"DoS",id:"dos",level:4},{value:"Host Interfaces, Routes and Packets",id:"host-interfaces-routes-and-packets",level:3},{value:"Stealth List Scan",id:"stealth-list-scan",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Shenzhen, China",src:n(396384).A+"",width:"1500",height:"550"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#installation",children:"Installation"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#nmap-commands",children:"Nmap Commands"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#syntax-for-nmap-commands",children:"Syntax for Nmap Commands"})}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#network-scans",children:"Network Scans"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#nmap-ip-or-host-scan",children:"nmap IP or Host Scan"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-a-range-of-ips",children:"Scan a Range of IP\u2019s"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#nmap-scan-subnet",children:"nmap Scan Subnet"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-a-list-of-targets",children:"Scan a List of Targets"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#fast-scan-dont-list-services",children:"Fast Scan Don't List Services"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#port-scans",children:"Port Scans"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-single-port",children:"Scan Single Port"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-a-range-of-ports",children:"Scan a Range of Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#specified-ports",children:"Specified Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-the-100-most-common-ports",children:"Scan the 100 most Common Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-all-ports",children:"Scan all Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-tcp-ports",children:"Scan TCP Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#syn-scan-tcp-ports",children:"SYN Scan TCP Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-specific-udp-ports",children:"Scan specific UDP Ports"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-ports-of-hosts-that-dont-respond-to-pings",children:"Scan Ports of Hosts that don't respond to Pings"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#operating-system-and-services",children:"Operating System and Services"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#aggressive-service-detection",children:"Aggressive Service Detection"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#lightweight-service-detection",children:"Lightweight Service Detection"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-firewall-settings",children:"Scan Firewall Settings"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#scan-ipv6-addresses",children:"Scan IPv6 Addresses"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#find-the-open-port",children:"Find the Open Port"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#packets-send-or-received",children:"Packets Send or Received"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#specific-mac-address-spoofing",children:"Specific MAC Address Spoofing"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#random-mac-address-spoofing",children:"Random MAC Address Spoofing"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.a,{href:"#scanning-with-nse-scripts",children:"Scanning with NSE Scripts"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#whois",children:"WHOIS"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#http-title",children:"HTTP Title"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#http-headers",children:"HTTP Headers"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#discover-hosts-using-the-dns-service",children:"Discover Hosts using the DNS Service"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#brute-force",children:"Brute Force"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#dos",children:"DoS"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#host-interfaces-routes-and-packets",children:"Host Interfaces, Routes and Packets"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#stealth-list-scan",children:"Stealth List Scan"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sudo pacman -S nmap\n"})}),"\n",(0,a.jsx)(s.h2,{id:"nmap-commands",children:"Nmap Commands"}),"\n",(0,a.jsx)(s.h3,{id:"syntax-for-nmap-commands",children:"Syntax for Nmap Commands"}),"\n",(0,a.jsx)(s.p,{children:"The Nmap launch command is very simple. To do this, just pass the destination IP address or network to it in the parameters, and also Now let\u2019s look at the main options that we will need in this article."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-vv"}),": Increase verbosity"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-n"}),": No DNS resolution. This speeds up our scan!"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sn"}),": No port scan"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-PE"}),": Use ICMP echo request queries. This is what is displayed in the output above"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-T4"}),": prohibits the dynamic scan delay from exceeding 10 ms for TCP ports. See man nmap"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"--packet-trace"}),": Trace sent and received packets"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sL"}),": just create a list of running hosts, but do not scan nmap ports"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sP"}),": only check if the host is accessible using ping"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-Pn"}),": consider all hosts available, even if they do not respond to ping"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sS"})," / ",(0,a.jsx)(s.code,{children:"sT"})," / ",(0,a.jsx)(s.code,{children:"sA"})," / ",(0,a.jsx)(s.code,{children:"sW"})," / ",(0,a.jsx)(s.code,{children:"sM"}),": TCP scan"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sU"}),": UDP scan nmap"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sN"})," / ",(0,a.jsx)(s.code,{children:"sF"})," / ",(0,a.jsx)(s.code,{children:"sX"}),": TCP NULL and FIN scan"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sC"}),": run the default script"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sI"}),": lazy Idle scan"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-p"}),": specify the range of ports for checking"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-sV"}),": a detailed study of ports to determine the version of services"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-O"}),": determine the operating system"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-T[0-5]"}),": scanning speed, the more, the faster"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-D"}),": mask scan"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-S"}),": change your IP address to the specified"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"-e"}),": use a speci_c interface"]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"--spoof-mac"}),": set your MAC address"]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"network-scans",children:"Network Scans"}),"\n",(0,a.jsx)(s.h4,{id:"nmap-ip-or-host-scan",children:"nmap IP or Host Scan"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap 192.168.2.117\r\nnmap debian11\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-a-range-of-ips",children:"Scan a Range of IP\u2019s"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap 192.168.2.100-120\n"})}),"\n",(0,a.jsx)(s.h4,{id:"nmap-scan-subnet",children:"nmap Scan Subnet"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap 192.168.2.0/24\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-a-list-of-targets",children:"Scan a List of Targets"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -iL list. txt\n"})}),"\n",(0,a.jsx)(s.h4,{id:"fast-scan-dont-list-services",children:"Fast Scan Don't List Services"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -sn 192.168.2.0/24\n"})}),"\n",(0,a.jsx)(s.h3,{id:"port-scans",children:"Port Scans"}),"\n",(0,a.jsx)(s.h4,{id:"scan-single-port",children:"Scan Single Port"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -p 8080 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-a-range-of-ports",children:"Scan a Range of Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:" nmap -p 80-8080 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"specified-ports",children:"Specified Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -sV -p 22,53,110,143,4564 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-the-100-most-common-ports",children:"Scan the 100 most Common Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -F 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-all-ports",children:"Scan all Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -p 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-tcp-ports",children:"Scan TCP Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -sT 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"syn-scan-tcp-ports",children:"SYN Scan TCP Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sudo nmap -sS 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-specific-udp-ports",children:"Scan specific UDP Ports"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sudo nmap -sU -p 53 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-ports-of-hosts-that-dont-respond-to-pings",children:"Scan Ports of Hosts that don't respond to Pings"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -Pn -F 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h3,{id:"operating-system-and-services",children:"Operating System and Services"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -A 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"aggressive-service-detection",children:"Aggressive Service Detection"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -sV -T5 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.h4,{id:"lightweight-service-detection",children:"Lightweight Service Detection"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -sV -T0 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-firewall-settings",children:"Scan Firewall Settings"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sudo nmap -sA 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.h4,{id:"scan-ipv6-addresses",children:"Scan IPv6 Addresses"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -6 240e:3b5:3011:1580:7dd7:91ed:c0b6:5a0d\n"})}),"\n",(0,a.jsx)(s.h4,{id:"find-the-open-port",children:"Find the Open Port"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --open 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"packets-send-or-received",children:"Packets Send or Received"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --packet-trace 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"specific-mac-address-spoofing",children:"Specific MAC Address Spoofing"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --spoof-mac 28:ad:3e:75:e0:28 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"random-mac-address-spoofing",children:"Random MAC Address Spoofing"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -v -sT -Pn --spoof-mac 0 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h3,{id:"scanning-with-nse-scripts",children:"Scanning with NSE Scripts"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://nmap.org/nsedoc/scripts/",children:"Available scripts"}),":"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"ls /usr/share/nmap/scripts\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script-help=whois-domain.nse\n"})}),"\n",(0,a.jsx)(s.h4,{id:"whois",children:"WHOIS"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script whois-domain.nse www.instar.com\n"})}),"\n",(0,a.jsx)(s.h4,{id:"http-title",children:"HTTP Title"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -script=http-title 192.168.2.0/24\n"})}),"\n",(0,a.jsx)(s.h4,{id:"http-headers",children:"HTTP Headers"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -script=http-headers 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h4,{id:"discover-hosts-using-the-dns-service",children:"Discover Hosts using the DNS Service"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script=broadcast-avahi-dos 192.168.2.0/24\n"})}),"\n",(0,a.jsx)(s.h4,{id:"brute-force",children:"Brute Force"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script http-brute -p 80 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script http-form-brute -p 80 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script ftp-brute -p 21 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -p 5432 --script pgsql-brute 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script rtsp-url-brute -p 554 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -p 23 --script telnet-brute --script-args userdb=myusers.lst,passdb=mypwds.lst,telnet-brute.timeout=8s 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.h4,{id:"dos",children:"DoS"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script http-slowloris-check 192.168.2.110\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --script http-slowloris --max-parallelism 400  192.168.2.110\n"})}),"\n",(0,a.jsx)(s.h3,{id:"host-interfaces-routes-and-packets",children:"Host Interfaces, Routes and Packets"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --iflist\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --packet-trace\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap -vv -n -sn -PE -T4 --packet-trace 192.168.2.117\n"})}),"\n",(0,a.jsx)(s.h3,{id:"stealth-list-scan",children:"Stealth List Scan"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"nmap --dns-servers 8.8.4.4,8.8.8.8 -sL 49.12.0.118/24\n"})})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},396384:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-a088ce754b9d8147f634f2d7650e4a00.jpg"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>l});var a=n(296540);const i={},c=a.createContext(i);function r(e){const s=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(c.Provider,{value:s},e.children)}}}]);