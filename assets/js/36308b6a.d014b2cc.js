"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[11964],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return t?a.createElement(g,i(i({ref:n},d),{},{components:t})):a.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},41731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const s={sidebar_position:5050,slug:"2022-01-26",title:"DNS Over TLS Using BIND And Nginx",authors:"mpolinowski",tags:["LINUX"]},i=void 0,o={unversionedId:"DevOps/Provisioning/2022-01-26--dns-over-TLS-docker/index",id:"DevOps/Provisioning/2022-01-26--dns-over-TLS-docker/index",title:"DNS Over TLS Using BIND And Nginx",description:"Shenzhen, China",source:"@site/docs/DevOps/Provisioning/2022-01-26--dns-over-TLS-docker/index.md",sourceDirName:"DevOps/Provisioning/2022-01-26--dns-over-TLS-docker",slug:"/DevOps/Provisioning/2022-01-26--dns-over-TLS-docker/2022-01-26",permalink:"/docs/DevOps/Provisioning/2022-01-26--dns-over-TLS-docker/2022-01-26",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2022-01-26--dns-over-TLS-docker/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5050,frontMatter:{sidebar_position:5050,slug:"2022-01-26",title:"DNS Over TLS Using BIND And Nginx",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Bind9 Server Configuration",permalink:"/docs/DevOps/Provisioning/2022-01-27--bind9-configuration/2022-01-27"},next:{title:"Running a DNS Server with Docker",permalink:"/docs/DevOps/Provisioning/2022-01-25--installing-bind9-docker/2022-01-25"}},l={},c=[{value:"Test Run",id:"test-run",level:2},{value:"Deploying a Simple DoT-DNS Gateway",id:"deploying-a-simple-dot-dns-gateway",level:3},{value:"Gateway Container",id:"gateway-container",level:3},{value:"Testing",id:"testing",level:3},{value:"Bind9 in Docker",id:"bind9-in-docker",level:2},{value:"Gateway Configuration",id:"gateway-configuration",level:3},{value:"Testing",id:"testing-1",level:3},{value:"DNSUtils",id:"dnsutils",level:4},{value:"Knot DNSUtils",id:"knot-dnsutils",level:4},{value:"Docker-Compose",id:"docker-compose",level:2}],d={toc:c};function p(e){let{components:n,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:t(94417).Z,width:"1500",height:"671"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#test-run"},"Test Run"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#deploying-a-simple-dot-dns-gateway"},"Deploying a Simple DoT-DNS Gateway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gateway-container"},"Gateway Container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing"},"Testing")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#bind9-in-docker"},"Bind9 in Docker"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gateway-configuration"},"Gateway Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing-1"},"Testing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dnsutils"},"DNSUtils")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#knot-dnsutils"},"Knot DNSUtils")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-compose"},"Docker-Compose"))),(0,r.kt)("h2",{id:"test-run"},"Test Run"),(0,r.kt)("h3",{id:"deploying-a-simple-dot-dns-gateway"},"Deploying a Simple DoT-DNS Gateway"),(0,r.kt)("p",null,"The NGINX Stream (TCP/UDP) module supports SSL termination, and so it\u2019s actually really simple to set up a DoT service. You can create a simple DoT gateway in just a few lines of NGINX configuration. You need an ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream")," block for your DNS servers - I am using the default Google DNS ",(0,r.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," for now - and a server block for TLS termination."),(0,r.kt)("p",null,"I am using a modified version of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/nginx_docker_ingress"},"Docker NGINX Ingress")," that already has a self-signed certificate I can use:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"nginx.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"user  nginx;\nworker_processes  auto;\nworker_rlimit_nofile  15000;\npid  /var/run/nginx.pid;\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections  2048;\n    multi_accept on;\n    use epoll;\n}\n\nstream {\n    # DNS upstream pool\n    upstream dns {\n        zone dns 64k;\n        server 8.8.8.8:53;\n    }\n\n    # DoT server for decryption\n    server {\n        listen 853 ssl;\n        # ssl_certificate /etc/nginx/ssl/certs/doh.local.pem;\n        # ssl_certificate_key /etc/nginx/ssl/private/doh.local.pem;\n        proxy_pass dns;\n        \n        include self-signed.conf;\n        include ssl-params.conf;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"self-signed.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"ssl_certificate /etc/nginx/conf.d/ssl/certs/nginx-selfsigned.crt;\nssl_certificate_key /etc/nginx/conf.d/ssl/private/nginx-selfsigned.key;\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ssl-params.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"ssl_protocols TLSv1.3;\nssl_prefer_server_ciphers on;\nssl_dhparam /etc/nginx/conf.d/ssl/private/dhparam.pem;\nssl_ciphers ECDH+AESGCM:ECDH+CHACHA20:ECDH+AES256:ECDH+AES128:!aNULL:!SHA1:!AESCCM;\nssl_conf_command Options PrioritizeChaCha;\nssl_conf_command Ciphersuites TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256;\nssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0\nssl_session_timeout  10m;\nssl_session_cache shared:SSL:10m;\nssl_session_tickets off; # Requires nginx >= 1.5.9\n")),(0,r.kt)("h3",{id:"gateway-container"},"Gateway Container"),(0,r.kt)("p",null,"Start the docker container with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create --subnet=172.24.0.0/16 instar-net\ndocker pull nginx:alpine\n\ndocker run -d \\\n  --rm \\\n  --name=gateway \\\n  --net=instar-net \\\n  --ip=172.24.0.16 \\\n  -p 853:853 \\\n  -v /opt/bind9/gateway/nginx.conf:/etc/nginx/nginx.conf \\\n  -v /opt/bind9/gateway/self-signed.conf:/etc/nginx/self-signed.conf \\\n  -v /opt/bind9/gateway/ssl-params.conf:/etc/nginx/ssl-params.conf \\\n  -v /opt/bind9/gateway/ssl:/etc/nginx/conf.d/ssl \\\n  nginx:alpine\n")),(0,r.kt)("h3",{id:"testing"},"Testing"),(0,r.kt)("p",null,"Verify that the TLS service is available - the IPv4 address ",(0,r.kt)("inlineCode",{parentName:"p"},"16.132.12.32"),", in the following command is the IP address of my Docker host server that is running the gateway:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"openssl s_client -host 16.132.12.32 -port 853 -showcerts\n\nCONNECTED(00000003)\nCan't use SSL_get_servername\ndepth=0 C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = 16.132.12.32\nverify error:num=18:self signed certificate\nverify return:1\ndepth=0 C = AU, ST = Some-State, O = Internet Widgits Pty Ltd, CN = 16.132.12.32\nverify return:1\n\n...\n")),(0,r.kt)("p",null,"I am going to use the ",(0,r.kt)("a",{parentName:"p",href:"https://getdnsapi.net/blog/getdns_query/"},"getDNS Utilities")," to test the Gateway:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install getdns-utils\n")),(0,r.kt)("p",null,"First I try a run without TLS - ",(0,r.kt)("em",{parentName:"p"},"which cannot work"),". The IPv4 address ",(0,r.kt)("inlineCode",{parentName:"p"},"16.132.12.32"),", in the following command is the IP address of my Docker host server that is running the gateway:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'getdns_query @16.132.12.32 -s -a -A www.instar.com\n\n{\n  "answer_type": GETDNS_NAMETYPE_DNS,\n  "canonical_name": <bindata for www.instar.com.>,\n  "just_address_answers": [],\n  "replies_full": [],\n  "replies_tree": [],\n  "status": GETDNS_RESPSTATUS_ALL_TIMEOUT\n}\nAn error occurred: The callback got a callback_type of 702. Exiting.\nError : \'The requested action timed out; response is filled in with empty structures\'\n')),(0,r.kt)("p",null,"And now to TLS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'getdns_query @16.132.12.32 -s -a -A  -l L www.instar.com\n\n{\n  "answer_ipv4_address": <bindata for 16.132.12.32>,\n  "answer_type": GETDNS_NAMETYPE_DNS,\n  "canonical_name": <bindata for www.instar.com.>,\n  "just_address_answers":\n  [\n    {\n      "address_data": <bindata for 49.12.0.118>,\n      "address_type": <bindata of "IPv4">\n    }\n  ],\n  \n  ...\n\n  "status": GETDNS_RESPSTATUS_GOOD\n}\n')),(0,r.kt)("p",null,"The IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"49.12.0.118")," is successfully resolved for ",(0,r.kt)("inlineCode",{parentName:"p"},"www.instar.com"),"."),(0,r.kt)("h2",{id:"bind9-in-docker"},"Bind9 in Docker"),(0,r.kt)("p",null,"I am going to use my ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2022-01-25--installing-bind9-docker/2022-01-25"},"Bind9 Docker Container")," and run it inside the same Docker network ",(0,r.kt)("inlineCode",{parentName:"p"},"instar-net"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create --subnet=172.24.0.0/16 instar-net\ndocker run -d --rm --name=ddns-master --net=instar-net --ip=172.24.0.2 ddns-master\n")),(0,r.kt)("h3",{id:"gateway-configuration"},"Gateway Configuration"),(0,r.kt)("p",null,"Now I can replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"8.8.8.8")," Google DNS Server and replace it with the Bind9 Docker container IP ",(0,r.kt)("inlineCode",{parentName:"p"},"172.24.0.2")," or the container name ",(0,r.kt)("inlineCode",{parentName:"p"},"ddns-master"),". I am also adding a stream for port ",(0,r.kt)("inlineCode",{parentName:"p"},"53")," so I don't have to expose any ports from the Bind9 container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-conf"},"user  nginx;\nworker_processes  auto;\nworker_rlimit_nofile  15000;\npid  /var/run/nginx.pid;\ninclude /usr/share/nginx/modules/*.conf;\n\n\nevents {\n    worker_connections  2048;\n    multi_accept on;\n    use epoll;\n}\n\nstream {\n    # DNS Upstream\n    upstream dns {\n        zone dns 64k;\n        server ddns-master:53;\n    }\n\n    # DNS Ingress\n    server {\n        listen 53 udp reuseport;\n        proxy_timeout 20s;\n        proxy_pass dns;\n    }\n\n    # DoT Ingress TLS Endpoint\n    server {\n        listen 853 ssl;\n        # ssl_certificate /etc/nginx/ssl/certs/doh.local.pem;\n        # ssl_certificate_key /etc/nginx/ssl/private/doh.local.pem;\n        proxy_timeout 20s;\n        proxy_pass dns;\n\n        include self-signed.conf;\n        include ssl-params.conf;\n    }\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  --rm \\\n  --name=gateway \\\n  --net=instar-net \\\n  --ip=172.24.0.16 \\\n  -p 853:853/tcp \\\n  -p 53:53/udp \\\n  -v /opt/bind9/gateway/nginx.conf:/etc/nginx/nginx.conf \\\n  -v /opt/bind9/gateway/self-signed.conf:/etc/nginx/self-signed.conf \\\n  -v /opt/bind9/gateway/ssl-params.conf:/etc/nginx/ssl-params.conf \\\n  -v /opt/bind9/gateway/ssl:/etc/nginx/conf.d/ssl \\\n  nginx:alpine\n")),(0,r.kt)("h3",{id:"testing-1"},"Testing"),(0,r.kt)("p",null,"Without TLS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'getdns_query @16.132.12.32 -s -a -A service2.instar-net.io                                                            \n{\n  "answer_ipv4_address": <bindata for 16.132.12.32>,\n  "answer_type": GETDNS_NAMETYPE_DNS,\n  "canonical_name": <bindata for service2.instar-net.io.>,\n  "just_address_answers":\n  [\n    {\n      "address_data": <bindata for 172.24.0.4>,\n      "address_type": <bindata of "IPv4">\n    }\n  ],\n  ...\n\n  "status": GETDNS_RESPSTATUS_GOOD\n}\n')),(0,r.kt)("p",null,"But I am seeing an error message when switching to TLS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'getdns_query @16.132.12.32 -s -a -A  -l L service2.instar-net.io\n\n{\n  "answer_ipv4_address": <bindata for 16.132.12.32>,\n  "answer_type": GETDNS_NAMETYPE_DNS,\n  "canonical_name": <bindata for service2.instar-net.io.>,\n  "just_address_answers": [],\n\n  ...\n\n  "status": GETDNS_RESPSTATUS_NO_NAME\n}\nAn error occurred: The callback got a callback_type of 702. Exiting.\nError : \'The requested action timed out; response is filled in with empty structures\'\n\n')),(0,r.kt)("h4",{id:"dnsutils"},"DNSUtils"),(0,r.kt)("p",null,"I am able to resolve the IP of my service as defined in Bind9 using ",(0,r.kt)("inlineCode",{parentName:"p"},"nslookup"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install dnsutils\n\nnslookup service2.instar-net.io 16.132.12.32\n\nServer:         16.132.12.32\nAddress:        16.132.12.32#53\n\nName:   service2.instar-net.io\nAddress: 172.24.0.4\n")),(0,r.kt)("p",null,"But there is no way to check the TLS connecting through the gateway proxy."),(0,r.kt)("h4",{id:"knot-dnsutils"},"Knot DNSUtils"),(0,r.kt)("p",null,"That is where ",(0,r.kt)("a",{parentName:"p",href:"https://www.knot-dns.cz/docs/2.4/html/man_kdig.html"},"kdig")," comes in:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install knot-dnsutils\n")),(0,r.kt)("p",null,"Without TLS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kdig service1.instar-net.io -t A @16.132.12.32\n\n;; TLS session (TLS1.3)-(ECDHE-SECP384R1)-(RSA-PSS-RSAE-SHA256)-(AES-256-GCM)\n;; ->>HEADER<<- opcode: QUERY; status: NOERROR; id: 17361\n;; Flags: qr aa rd ra; QUERY: 1; ANSWER: 1; AUTHORITY: 0; ADDITIONAL: 1\n\n;; EDNS PSEUDOSECTION:\n;; Version: 0; flags: ; UDP size: 1232 B; ext-rcode: NOERROR\n                                                                       \n;; ->>HEADER<<- opcode: QUERY; status: NOERROR; id: 16017\n;; Flags: qr aa rd ra; QUERY: 1; ANSWER: 1; AUTHORITY: 0; ADDITIONAL: 0\n\n;; QUESTION SECTION:\n;; service2.instar-net.io.              IN      A\n\n;; ANSWER SECTION:\nservice2.instar-net.io. 86400   IN      A       172.24.0.4\n\n;; Received 56 B\n;; Time 2022-03-10 08:31:07 CET\n;; From 1.2.3.4@53(UDP) in 0.0 ms\n")),(0,r.kt)("p",null,"And here it also seems to be working over TLS - I am getting the ",(0,r.kt)("inlineCode",{parentName:"p"},"172.24.0.3")," resolution for Service1, as expected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kdig +tcp +tls -p 853 service1.instar-net.io -t A @16.132.12.32\n                                                        \n;; TLS session (TLS1.3)-(ECDHE-SECP384R1)-(RSA-PSS-RSAE-SHA256)-(AES-256-GCM)\n;; ->>HEADER<<- opcode: QUERY; status: NOERROR; id: 57694\n;; Flags: qr aa rd ra; QUERY: 1; ANSWER: 1; AUTHORITY: 0; ADDITIONAL: 1\n\n;; EDNS PSEUDOSECTION:\n;; Version: 0; flags: ; UDP size: 1232 B; ext-rcode: NOERROR\n\n;; QUESTION SECTION:\n;; service1.instar-net.io.              IN      A\n\n;; ANSWER SECTION:\nservice1.instar-net.io. 86400   IN      A       172.24.0.3\n\n;; Received 67 B\n;; Time 2022-03-09 13:33:15 CET\n;; From 16.132.12.32@853(TCP) in 1.4 ms\n")),(0,r.kt)("p",null,"And the forwarder is working as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"kdig +tcp +tls -p 853 www.instar.com -t A @16.132.12.32\n\n;; TLS session (TLS1.3)-(ECDHE-SECP384R1)-(RSA-PSS-RSAE-SHA256)-(AES-256-GCM)\n;; ->>HEADER<<- opcode: QUERY; status: NOERROR; id: 22289\n;; Flags: qr rd ra; QUERY: 1; ANSWER: 1; AUTHORITY: 0; ADDITIONAL: 1\n\n;; EDNS PSEUDOSECTION:\n;; Version: 0; flags: ; UDP size: 1232 B; ext-rcode: NOERROR\n\n;; QUESTION SECTION:\n;; www.instar.com.              IN      A\n\n;; ANSWER SECTION:\nwww.instar.com.         600     IN      A       49.12.0.118\n\n;; Received 59 B\n;; Time 2022-03-10 04:34:23 CET\n;; From 16.132.12.32@853(TCP) in 41.4 ms\n")),(0,r.kt)("h2",{id:"docker-compose"},"Docker-Compose"),(0,r.kt)("p",null,"Wrapping everything up into a compose file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"\n\nservices:\n  bind:\n    build:\n      context: .\n      dockerfile: Dockerfile\n    image: dns-master:latest\n    networks:\n      bindnet:\n        ipv4_address: 172.24.0.2\n          \n\n  gateway:\n    image: nginx:alpine\n    ports:\n      - "53:53/udp"\n      - "853:853/tcp"\n    networks:\n      bindnet:\n        ipv4_address: 172.24.0.16\n    volumes:\n      - /opt/bind9/gateway/nginx.conf:/etc/nginx/nginx.conf\n      - /opt/bind9/gateway/self-signed.conf:/etc/nginx/self-signed.conf\n      - /opt/bind9/gateway/ssl-params.conf:/etc/nginx/ssl-params.conf\n      - /opt/bind9/gateway/ssl:/etc/nginx/conf.d/ssl\n\nnetworks:\n  bindnet:\n    driver: bridge\n    ipam:\n      driver: default\n      config:\n      - subnet:  172.24.0.0/16\n')),(0,r.kt)("p",null,"To execute the compose file first run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose build")," to build the Bind9 Docker container - the ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2022-01-25--installing-bind9-docker/2022-01-25"},"Dockerfile and all dependencies")," have to be in the same directory as the compose file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'FROM internetsystemsconsortium/bind9:9.18\n\nRUN apt update \\\n  && apt install -y \\\n  bind9-doc \\\n  dnsutils \\\n  geoip-bin \\\n  mariadb-server \\\n  net-tools\n\n# Copy configuration files\nCOPY configuration/named.conf.options /etc/bind/\nCOPY configuration/named.conf.local /etc/bind/\nCOPY configuration/db.instar-net.io /etc/bind/zones/\n\n# Expose Ports\nEXPOSE 53/tcp\nEXPOSE 53/udp\nEXPOSE 953/tcp\n\n# Start the Name Service\nCMD ["/usr/sbin/named", "-g", "-c", "/etc/bind/named.conf", "-u", "bind"]\n')))}p.isMDXComponent=!0},94417:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-bac99ee9472bf0354e396ff811a46d92.jpg"}}]);