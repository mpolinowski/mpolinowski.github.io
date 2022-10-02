"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[85833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,l(l({ref:t},p),{},{components:n})):r.createElement(h,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6010,slug:"2022-09-21",title:"Secure Timeserver - NTP with NTS with Docker",authors:"mpolinowski",tags:["LINUX","Security"],description:"NTS is a method for using TLS/SSL to authenticate NTP traffic on the net."},l=void 0,i={unversionedId:"DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/index",id:"DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/index",title:"Secure Timeserver - NTP with NTS with Docker",description:"NTS is a method for using TLS/SSL to authenticate NTP traffic on the net.",source:"@site/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/index.md",sourceDirName:"DevOps/Linux/2022-09-15--ntp-over-nts-timeserver",slug:"/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21",permalink:"/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",sidebarPosition:6010,frontMatter:{sidebar_position:6010,slug:"2022-09-21",title:"Secure Timeserver - NTP with NTS with Docker",authors:"mpolinowski",tags:["LINUX","Security"],description:"NTS is a method for using TLS/SSL to authenticate NTP traffic on the net."},sidebar:"tutorialSidebar",previous:{title:"NTS-Service and Authenticated Time Synchronization",permalink:"/docs/DevOps/Linux/2022-09-28--nts-client-setup/2022-09-28"},next:{title:"nmap Cheat Sheet",permalink:"/docs/DevOps/Linux/2022-03-10--nmap-network-scanner/2022-03-10"}},s={},c=[{value:"Running an NTP Server in Docker",id:"running-an-ntp-server-in-docker",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Logging",id:"logging",level:3},{value:"Testing",id:"testing",level:2},{value:"Enable NTS on the server",id:"enable-nts-on-the-server",level:2},{value:"Preparing the Certificate",id:"preparing-the-certificate",level:3},{value:"Certbot",id:"certbot",level:4},{value:"Public NTS-capable servers",id:"public-nts-capable-servers",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"TST, Hong Kong",src:n(91265).Z,width:"1500",height:"517"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#running-an-ntp-server-in-docker"},"Running an NTP Server in Docker"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#logging"},"Logging")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#testing"},"Testing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enable-nts-on-the-server"},"Enable NTS on the server"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#preparing-the-certificate"},"Preparing the Certificate"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#certbot"},"Certbot")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#public-nts-capable-servers"},"Public NTS-capable servers"))),(0,a.kt)("h2",{id:"running-an-ntp-server-in-docker"},"Running an NTP Server in Docker"),(0,a.kt)("p",null,"The docker image ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/cturra/ntp"},"cturra/ntp")," is build on Alpine Linux and uses ",(0,a.kt)("a",{parentName:"p",href:"https://chrony.tuxfamily.org/examples.html"},"Chrony"),". Chrony is a versatile implementation of the Network Time Protocol (NTP). It can synchronise the system clock with NTP servers. It can also operate as an NTPv4 (RFC 5905) server and peer to provide a time service to other computers in the network."),(0,a.kt)("p",null,"We can run the container using ",(0,a.kt)("strong",{parentName:"p"},"Docker-Compose"),". Create the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt\ngit clone https://github.com/cturra/docker-ntp.git && cd docker-ntp\ncat ./docker-compose.yml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.9'\n\nservices:\n  ntp:\n    build: .\n    image: cturra/ntp:latest\n    container_name: ntp\n    restart: always\n    ports:\n      - 123:123/udp\n    environment:\n      - NTP_SERVERS=time.cloudflare.com\n      - LOG_LEVEL=0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d ntp\ndocker compose logs ntp\n")),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"To configure ",(0,a.kt)("a",{parentName:"p",href:"https://www.advtimesync.com/docs/manual/stratum1.html"},"more than one server"),", you must use a comma delimited list WITHOUT spaces:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'# (default) cloudflare\nNTP_SERVERS="time.cloudflare.com"\n\n# google\nNTP_SERVERS="time1.google.com,time2.google.com,time3.google.com,time4.google.com"\n\n# alibaba\nNTP_SERVERS="ntp1.aliyun.com,ntp2.aliyun.com,ntp3.aliyun.com,ntp4.aliyun.com"\n\n# local (offline)\nNTP_SERVER="127.127.1.1"\n')),(0,a.kt)("h3",{id:"logging"},"Logging"),(0,a.kt)("p",null,"By default, this project logs informational messages to stdout. The ",(0,a.kt)("strong",{parentName:"p"},"LOG","_","LEVEL")," option matches the ",(0,a.kt)("inlineCode",{parentName:"p"},"chrony -L")," option, which support the following levels can to specified: ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," (",(0,a.kt)("em",{parentName:"p"},"informational"),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," (",(0,a.kt)("em",{parentName:"p"},"warning"),"), ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," (",(0,a.kt)("em",{parentName:"p"},"non-fatal error"),"), and ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," (",(0,a.kt)("em",{parentName:"p"},"fatal error"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f ntp \n\n2022-09-20T11:03:54Z chronyd version 4.1 starting (+CMDMON +NTP +REFCLOCK +RTC +PRIVDROP -SCFILTER +SIGND +ASYNCDNS +NTS +SECHASH +IPV6 -DEBUG)\n2022-09-20T11:03:54Z Disabled control of system clock\n2022-09-20T11:03:54Z Could not read valid frequency and skew from driftfile /var/lib/chrony/chrony.drift\n2022-09-20T11:03:58Z Selected source 162.159.200.1 (time.cloudflare.com)\n")),(0,a.kt)("h2",{id:"testing"},"Testing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install sntp\n\nsntp my.server.domain\nsntp 4.2.8p15@1.3728-o Wed Sep 23 11:46:38 UTC 2020 (1)\n2022-09-21 09:55:24.522074 (+0000) -0.002317 +/- 0.005741 my.server.domain my.server.domain s2 no-leap\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"ERROR")," message ",(0,a.kt)("inlineCode",{parentName:"p"},"no server suitable for synchronization found")," - wait a while for your service to contact your selected upstream time server.")),(0,a.kt)("p",null,"To see details on the ntp status of your container, you can check with the command below on your docker host:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec ntp chronyc tracking\n\nReference ID    : A29FC801 (time.cloudflare.com)\nStratum         : 4\nRef time (UTC)  : Tue Sep 20 11:13:43 2022\nSystem time     : 0.002932649 seconds fast of NTP time\nLast offset     : +0.000029569 seconds\nRMS offset      : 0.001531294 seconds\nFrequency       : 0.329 ppm slow\nResidual freq   : +0.009 ppm\nSkew            : 0.553 ppm\nRoot delay      : 0.031447832 seconds\nRoot dispersion : 0.000492193 seconds\nUpdate interval : 64.8 seconds\nLeap status     : Normal\n")),(0,a.kt)("p",null,"Here is how you can see a peer list to verify the state of each ntp source configured:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec ntp chronyc sources\n\nMS Name/IP address         Stratum Poll Reach LastRx Last sample               \n===============================================================================\n^* time.cloudflare.com           3   7   377    34    +18us[  +24us] +/-   16ms\n")),(0,a.kt)("p",null,"The Reach column should have a non-zero value; ideally 377. The value 377 shown above is an octal number. It indicates that the last eight requests all had a valid response. To see statistics about the collected measurements of each ntp source configured:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec ntp chronyc sourcestats\n\nName/IP Address            NP  NR  Span  Frequency  Freq Skew  Offset  Std Dev\n==============================================================================\ntime.cloudflare.com        20  10  1106     +0.001      0.195   +121ns    78us\n")),(0,a.kt)("h2",{id:"enable-nts-on-the-server"},"Enable NTS on the server"),(0,a.kt)("p",null,"If you have your own NTP server running chronyd, you can enable server NTS support to allow its clients to be synchronized securely.  The ",(0,a.kt)("strong",{parentName:"p"},"Chrony")," configuration file is located in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/chrony/chrony.conf")," inside the Docker container:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti ntp cat /etc/chrony/chrony.conf\n")),(0,a.kt)("p",null,"But it is being generated by a shell script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# https://github.com/cturra/docker-ntp\n\n# chrony.conf file generated by startup script\n# located at /opt/startup.sh\n\n# time servers provided by NTP_SERVER environment variables.\nserver time.cloudflare.com iburst\n\ndriftfile /var/lib/chrony/chrony.drift\nmakestep 0.1 3\nrtcsync\n\nallow all\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti ntp cat /opt/startup.sh\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'## dynamically populate chrony config file.\n{\n  echo "# https://github.com/cturra/docker-ntp"\n  echo\n  echo "# chrony.conf file generated by startup script"\n  echo "# located at /opt/startup.sh"\n  echo\n  echo "# time servers provided by NTP_SERVER environment variables."\n} > ${CHRONY_CONF_FILE}\n\n...\n\n# final bits for the config file\n{\n  echo\n  echo "driftfile /var/lib/chrony/chrony.drift"\n  echo "makestep 0.1 3"\n  echo "rtcsync"\n  echo\n  echo "allow all"\n} >> ${CHRONY_CONF_FILE}\n')),(0,a.kt)("p",null,"You just need a private key and certificate. we need to add the ",(0,a.kt)("a",{parentName:"p",href:"https://chrony.tuxfamily.org/doc/4.3/chrony.conf.html"},"following parameter")," to use encryption:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"nts")),(0,a.kt)("td",{parentName:"tr",align:null},"This option enables authentication using the Network Time Security (NTS) mechanism. Unlike with the key option, the server and client do not need to share a key in a key file. NTS has a Key Establishment (NTS-KE) protocol using the Transport Layer Security (TLS) protocol to get the keys and cookies required by NTS for authentication of NTP packets.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"certset ID")),(0,a.kt)("td",{parentName:"tr",align:null},"This option specifies which set of trusted certificates should be used to verify the server\u2019s certificate when the nts option is enabled. Sets of certificates can be specified with the ntstrustedcerts directive. The default set is 0, which by default contains certificates of the system\u2019s default trusted certificate authorities.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"ntsserverkey /etc/letsencrypt/live/my.server.domain/privkey.pem\nntsservercert /etc/letsencrypt/live/my.server.domain/fullchain.pem\n")),(0,a.kt)("p",null,"Make sure the ",(0,a.kt)("inlineCode",{parentName:"p"},"ntsdumpdir")," directive is present in ",(0,a.kt)("inlineCode",{parentName:"p"},"chrony.conf"),". It allows the server to save its keys to disk, so the clients of the server don\u2019t have to get new keys and cookies when the server is restarted."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ntsdumpdir /var/lib/chrony\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# final bits for the config file\n{\n  echo\n  echo "driftfile /var/lib/chrony/chrony.drift"\n  echo "makestep 0.1 3"\n  echo "rtcsync"\n  echo\n  echo "ntsserverkey /opt/privkey.pem"\n  echo "ntsservercert /opt/fullchain.pem"\n  echo "ntsprocesses 3"\n  echo "maxntsconnections 512"\n  echo "ntsdumpdir /var/lib/chrony"\n  echo\n  echo "allow all"\n} >> ${CHRONY_CONF_FILE}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If the server has a firewall, it needs to allow both the ",(0,a.kt)("strong",{parentName:"p"},"UDP")," ",(0,a.kt)("inlineCode",{parentName:"p"},"123")," and ",(0,a.kt)("strong",{parentName:"p"},"TCP")," ",(0,a.kt)("inlineCode",{parentName:"p"},"4460")," ports for NTP and NTS-KE respectively.")),(0,a.kt)("h3",{id:"preparing-the-certificate"},"Preparing the Certificate"),(0,a.kt)("h4",{id:"certbot"},"Certbot"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt install certbot python3-certbot-nginx\ncertbot certonly --standalone\n")),(0,a.kt)("p",null,"Once the certificates are created we have to link them in using the Docker Compose file - ",(0,a.kt)("strong",{parentName:"p"},"Note")," I am also binding the startup script I just edited. This will over-write the original one inside the docker container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.9'\n\nservices:\n  chrony:\n    build: .\n    image: cturra/ntp:latest\n    container_name: chrony\n    restart: unless-stopped\n    volumes:\n      - type: bind\n        source: /opt/docker-ntp/assets/startup.sh\n        target: /opt/startup.sh\n      - type: bind\n        source: /etc/letsencrypt/live/my.server.domain/fullchain.pem\n        target: /opt/fullchain.pem\n      - type: bind\n        source: /etc/letsencrypt/live/my.server.domain/privkey.pem\n        target: /opt/privkey.pem\n    ports:\n      - 123:123/udp\n      - 4460:4460/tcp\n    environment:\n      - NTP_SERVERS=0.de.pool.ntp.org,time.cloudflare.com,time1.google.com\n      - LOG_LEVEL=0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker compose up -d chrony\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"ERROR")," message after restarting the docker container I was unable to connect to using the TLS port. This is because the container was unable to read the certificate files:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f chrony\n2022-09-21T10:19:47Z chronyd version 4.1 starting (+CMDMON +NTP +REFCLOCK +RTC +PRIVDROP -SCFILTER +SIGND +ASYNCDNS +NTS +SECHASH +IPV6 -DEBUG)\n2022-09-21T10:19:47Z Disabled control of system clock\n2022-09-21T10:19:47Z Could not read valid frequency and skew from driftfile /var/lib/chrony/chrony.drift\n2022-09-21T10:19:47Z Could not set credentials : Error while reading file.\n2022-09-21T10:19:47Z Could not set credentials : Error while reading file.\n2022-09-21T10:19:47Z Could not set credentials : Error while reading file.\n2022-09-21T10:19:52Z Selected source 216.239.35.0 (time1.google.com)\n")),(0,a.kt)("p",null,"I had to adjust the permissions to match the ones that were given by default to the startup script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"-rw-r--r--    1 root     root          5595 Sep 21 08:37 fullchain.pem\n-rw-------    1 root     root          1704 Sep 21 08:37 privkey.pem\n-rwxr-xr-x    1 root     root          2277 Sep 21 08:48 startup.sh\n")),(0,a.kt)("p",null,"This time the container starts without error messages and I am able to query the ",(0,a.kt)("strong",{parentName:"p"},"NTS")," service without an TLS error message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti chrony chronyd -Q -t 3 'server my.server.domain iburst nts maxsamples 1'\n\n2022-09-21T10:29:37Z chronyd version 4.1 starting (+CMDMON +NTP +REFCLOCK +RTC +PRIVDROP -SCFILTER +SIGND +ASYNCDNS +NTS +SECHASH +IPV6 -DEBUG)\n2022-09-21T10:29:37Z Disabled control of system clock\n2022-09-21T10:29:40Z chronyd exiting\n")),(0,a.kt)("p",null,"Checking the server stats tells me that he accepted the ",(0,a.kt)("strong",{parentName:"p"},"NTS connection")," and received an ",(0,a.kt)("strong",{parentName:"p"},"authenticated NTP")," package - looks alright?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti chrony chronyc serverstats\n\nNTP packets received       : 1\nNTP packets dropped        : 0\nCommand packets received   : 4\nCommand packets dropped    : 0\nClient log records dropped : 0\nNTS-KE connections accepted: 1\nNTS-KE connections dropped : 0\nAuthenticated NTP packets  : 1\n")),(0,a.kt)("h2",{id:"public-nts-capable-servers"},"Public NTS-capable servers"),(0,a.kt)("p",null,"Currently, the ",(0,a.kt)("a",{parentName:"p",href:"https://netfuture.ch/2021/12/transparent-trustworthy-time-with-ntp-and-nts/"},"number of public servers with NTS support")," still seems very modest:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Location/Country"),(0,a.kt)("th",{parentName:"tr",align:null},"Servers"),(0,a.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Global"),(0,a.kt)("td",{parentName:"tr",align:null},"time.cloudflare.com"),(0,a.kt)("td",{parentName:"tr",align:null},"Anycast")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Brasil"),(0,a.kt)("td",{parentName:"tr",align:null},"a\u2026d.st1.ntp.br"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Canada"),(0,a.kt)("td",{parentName:"tr",align:null},"time.0xt.ca"),(0,a.kt)("td",{parentName:"tr",align:null},"Tanner Ryan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Germany"),(0,a.kt)("td",{parentName:"tr",align:null},"ptbtime1\u20263.ptb.de"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Germany"),(0,a.kt)("td",{parentName:"tr",align:null},"nts1.adopo.net"),(0,a.kt)("td",{parentName:"tr",align:null},"Patrick Jansen")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Germany"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://www.jabber-germany.de"},"www.jabber-germany.de")," ",(0,a.kt)("a",{parentName:"td",href:"http://www.masters-of-cloud.de"},"www.masters-of-cloud.de")),(0,a.kt)("td",{parentName:"tr",align:null},"J\xf6rg Morbitzer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Germany"),(0,a.kt)("td",{parentName:"tr",align:null},"ntp3.fau.de ntp3.ipv6.fau.de"),(0,a.kt)("td",{parentName:"tr",align:null},"\u22643 clients per user/org; DCF77")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Netherlands"),(0,a.kt)("td",{parentName:"tr",align:null},"ntppool1\u20262.time.nl"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Singapore"),(0,a.kt)("td",{parentName:"tr",align:null},"ntpmon.dcs1.biz"),(0,a.kt)("td",{parentName:"tr",align:null},"Sanjeev Gupta")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sweden"),(0,a.kt)("td",{parentName:"tr",align:null},"nts.netnod.se"),(0,a.kt)("td",{parentName:"tr",align:null},"Anycast")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sweden"),(0,a.kt)("td",{parentName:"tr",align:null},"sth1\u20262.nts.netnod.se"),(0,a.kt)("td",{parentName:"tr",align:null},"STH area use only")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switzerland"),(0,a.kt)("td",{parentName:"tr",align:null},"(Zurich)"),(0,a.kt)("td",{parentName:"tr",align:null},"ntp.3eck.net")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switzerland (Winterthur"),(0,a.kt)("td",{parentName:"tr",align:null},"ntp.trifence.ch ntp.zeitgitter.net"),(0,a.kt)("td",{parentName:"tr",align:null},"Marcel Waldvogel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Switzerland (Ticino)"),(0,a.kt)("td",{parentName:"tr",align:null},"time.signorini.ch"),(0,a.kt)("td",{parentName:"tr",align:null},"Attilio Signorini (Dynamic, Chrony-only)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USA"),(0,a.kt)("td",{parentName:"tr",align:null},"time.0xt.ca"),(0,a.kt)("td",{parentName:"tr",align:null},"Tanner Ryan")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"USA"),(0,a.kt)("td",{parentName:"tr",align:null},"{virginia,ohio,oregon}.time.system76.com"),(0,a.kt)("td",{parentName:"tr",align:null},"Mike Cifelli")))))}m.isMDXComponent=!0},91265:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"}}]);