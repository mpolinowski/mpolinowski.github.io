"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[91939],{3905:(e,n,a)=>{a.d(n,{Zo:()=>l,kt:()=>x});var r=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var b=r.createContext({}),p=function(e){var n=r.useContext(b),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},l=function(e){var n=p(e.components);return r.createElement(b.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,b=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(a),x=t,_=c["".concat(b,".").concat(x)]||c[x]||d[x]||i;return a?r.createElement(_,o(o({ref:n},l),{},{components:a})):r.createElement(_,o({ref:n},l))}));function x(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var b in n)hasOwnProperty.call(n,b)&&(s[b]=n[b]);s.originalType=e,s.mdxType="string"==typeof e?e:t,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},65232:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>b,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=a(87462),t=(a(67294),a(3905));const i={sidebar_position:9030,slug:"2020-07-20",title:"Zabbix Multi-Tenant NGINX Docker Ingress",authors:"mpolinowski",tags:["LINUX","Zabbix"]},o=void 0,s={unversionedId:"DevOps/Zabbix/2020-07-20--zabbix-behind-nginx/index",id:"DevOps/Zabbix/2020-07-20--zabbix-behind-nginx/index",title:"Zabbix Multi-Tenant NGINX Docker Ingress",description:"Mong Kok, Hong Kong",source:"@site/docs/DevOps/Zabbix/2020-07-20--zabbix-behind-nginx/index.md",sourceDirName:"DevOps/Zabbix/2020-07-20--zabbix-behind-nginx",slug:"/DevOps/Zabbix/2020-07-20--zabbix-behind-nginx/2020-07-20",permalink:"/docs/DevOps/Zabbix/2020-07-20--zabbix-behind-nginx/2020-07-20",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Zabbix/2020-07-20--zabbix-behind-nginx/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Zabbix",permalink:"/docs/tags/zabbix"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2020-07-20",title:"Zabbix Multi-Tenant NGINX Docker Ingress",authors:"mpolinowski",tags:["LINUX","Zabbix"]},sidebar:"tutorialSidebar",previous:{title:"Slack Notifications in DevOps",permalink:"/docs/DevOps/Zabbix/2020-09-05--slack-notifications-in-devops/2020-09-05"},next:{title:"Zabbix Company Logo",permalink:"/docs/DevOps/Zabbix/2020-07-19--zabbix-company-logo/2020-07-19"}},b={},p=[{value:"NGINX Setup",id:"nginx-setup",level:2},{value:"The Virtual App Network",id:"the-virtual-app-network",level:2},{value:"Adding your Zabbix Frontend",id:"adding-your-zabbix-frontend",level:3},{value:"Complete Zabbix Server Compose File",id:"complete-zabbix-server-compose-file",level:2}],l={toc:p};function d(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,r.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Mong Kok, Hong Kong",src:a(24628).Z,width:"1500",height:"453"})),(0,t.kt)("p",null,"I set up a Zabbix server using the official Compose file. The docker container managed by this file are already set up to use SSL certificates to enable you to access the web frontend using HTTPS. But my server already runs other services behind an NGINX proxy and I would like to just add an URL prefix and host the Zabbix frontend on the same URL that is already managed by this proxy."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#nginx-setup"},"NGINX Setup")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#the-virtual-app-network"},"The Virtual App Network"),(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#adding-your-zabbix-frontend"},"Adding your Zabbix Frontend")))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"#complete-zabbix-server-compose-file"},"Complete Zabbix Server Compose File"))),(0,t.kt)("h2",{id:"nginx-setup"},"NGINX Setup"),(0,t.kt)("p",null,"I do have the following NGINX server block that host 3 Node.js web application on different prefix URLs on the same domain - currently this is ",(0,t.kt)("inlineCode",{parentName:"p"},"localhost")," in my testing environment and will be switched to an external URL with an CA certificate later. All I did below is that I added a fourth location block to the configuration file for my Zabbix frontend running on Port ",(0,t.kt)("inlineCode",{parentName:"p"},"8080"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cfg"},'server {\n    listen       80;\n    listen  [::]:80;\n    server_name  localhost;\n\n    charset koi8-r;\n\n    # Gzip Compression\n    gzip                                    on;\n    gzip_disable                            "MSIE [1-6]\\.(?!.*SV1)";\n    gzip_proxied                            no-cache no-store private expired;\n    gzip_buffers                            16 8k;\n    gzip_comp_level                         6;\n    gzip_types                              text/plain application/javascript application/x-javascript text/javascript text/xml text/css;\n    gzip_vary                               on;\n\n    location / {\n        rewrite   ^/(.*)$  /en/$1  permanent;\n    }\n\n    root                                        /opt/wiki/wiki-en/public;\n\n    location /en/ {\n        add_header                              Cache-Control  "public, must-revalidate, proxy-revalidate, max-age=0";\n        proxy_set_header                        X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header                        X-NginX-Proxy true;\n        proxy_set_header                        X-Real-IP $remote_addr;\n        proxy_set_header                        X-Forwarded-Proto http;\n        proxy_hide_header                       X-Frame-Options;\n        proxy_set_header                        Accept-Encoding "";\n        proxy_http_version                      1.1;\n        proxy_set_header                        Upgrade $http_upgrade;\n        proxy_set_header                        Connection "upgrade";\n        proxy_set_header                        Host $host;\n        proxy_cache_bypass                      $http_upgrade;\n        proxy_max_temp_file_size                0;\n        proxy_redirect                          off;\n        proxy_read_timeout                      240s;\n        proxy_pass                              http://wiki_en:8888/;\n    }\n\n    location /fr/ {\n        add_header                              Cache-Control  "public, must-revalidate, proxy-revalidate, max-age=0";\n        proxy_set_header                        X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header                        X-NginX-Proxy true;\n        proxy_set_header                        X-Real-IP $remote_addr;\n        proxy_set_header                        X-Forwarded-Proto http;\n        proxy_hide_header                       X-Frame-Options;\n        proxy_set_header                        Accept-Encoding "";\n        proxy_http_version                      1.1;\n        proxy_set_header                        Upgrade $http_upgrade;\n        proxy_set_header                        Connection "upgrade";\n        proxy_set_header                        Host $host;\n        proxy_cache_bypass                      $http_upgrade;\n        proxy_max_temp_file_size                0;\n        proxy_redirect                          off;\n        proxy_read_timeout                      240s;\n        proxy_pass                              http://wiki_fr:8888/;\n        root                                    /opt/wiki/wiki-fr/public;\n    }\n\n    location /de/ {\n        add_header                              Cache-Control  "public, must-revalidate, proxy-revalidate, max-age=0";\n        proxy_set_header                        X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header                        X-NginX-Proxy true;\n        proxy_set_header                        X-Real-IP $remote_addr;\n        proxy_set_header                        X-Forwarded-Proto http;\n        proxy_hide_header                       X-Frame-Options;\n        proxy_set_header                        Accept-Encoding "";\n        proxy_http_version                      1.1;\n        proxy_set_header                        Upgrade $http_upgrade;\n        proxy_set_header                        Connection "upgrade";\n        proxy_set_header                        Host $host;\n        proxy_cache_bypass                      $http_upgrade;\n        proxy_max_temp_file_size                0;\n        proxy_redirect                          off;\n        proxy_read_timeout                      240s;\n        proxy_pass                              http://wiki_de:8888/;\n        root                                    /opt/wiki/wiki-de/public;\n    }\n\n    location /zabbix/ {\n        add_header                              Cache-Control  "public, must-revalidate, proxy-revalidate, max-age=0";\n        proxy_set_header                        X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header                        X-NginX-Proxy true;\n        proxy_set_header                        X-Real-IP $remote_addr;\n        proxy_set_header                        X-Forwarded-Proto http;\n        proxy_hide_header                       X-Frame-Options;\n        proxy_set_header                        Accept-Encoding "";\n        proxy_http_version                      1.1;\n        proxy_set_header                        Upgrade $http_upgrade;\n        proxy_set_header                        Connection "upgrade";\n        proxy_set_header                        Host $host;\n        proxy_cache_bypass                      $http_upgrade;\n        proxy_max_temp_file_size                0;\n        proxy_redirect                          off;\n        proxy_read_timeout                      240s;\n        proxy_pass                              http://docker-zabbix_zabbix-web-apache-pgsql_1:8080/;\n    }\n\n    error_page  404              /de/404.html;\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n    root   /usr/share/nginx/html;\n    }\n}\n')),(0,t.kt)("p",null,"The issue here is that all my apps are running inside virtual network that cannot be accessed from my host system. And at the moment the zabbix frontend is not connected to this network - this means my ",(0,t.kt)("inlineCode",{parentName:"p"},"proxy_pass")," to ",(0,t.kt)("inlineCode",{parentName:"p"},"docker-zabbix_zabbix-web-apache-pgsql_1:8080")," is going to fail."),(0,t.kt)("h2",{id:"the-virtual-app-network"},"The Virtual App Network"),(0,t.kt)("p",null,"The virtual network is created with another compose file that is setting up my web applications:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.8'\nservices:\n  wiki_en:\n    image: my.gitlab.com:12345/wiki/wiki_container:latest\n    container_name: wiki_en\n    networks:\n      - gateway\n    restart: unless-stopped\n    volumes:\n      - /opt/wiki/wiki-en/public:/wiki/public\n\n  wiki_fr:\n    image: my.gitlab.com:12345/wiki/wiki_container:latest\n    container_name: wiki_fr\n    networks:\n      - gateway\n    restart: unless-stopped\n    volumes:\n      - /opt/wiki/wiki-fr/public:/wiki/public\n\n  wiki_de:\n    image: my.gitlab.com:12345/wiki/wiki_container:latest\n    container_name: wiki_de\n    networks:\n      - gateway\n    restart: unless-stopped\n    volumes:\n      - /opt/wiki/wiki-de/public:/wiki/public\n\n  ingress:\n    image: nginx:stable-alpine\n    container_name: ingress\n    networks:\n      - gateway\n    ports:\n      - '80:80'\n    restart: unless-stopped\n    volumes:\n      - /opt/wiki/docker_ingress:/etc/nginx/conf.d\n      - /opt/wiki/wiki-en:/opt/wiki/wiki-en\n      - /opt/wiki/wiki-fr:/opt/wiki/wiki-fr\n      - /opt/wiki/wiki-de:/opt/wiki/wiki-de\n\nnetworks:\n  gateway: {}\n")),(0,t.kt)("h3",{id:"adding-your-zabbix-frontend"},"Adding your Zabbix Frontend"),(0,t.kt)("p",null,"To add my Zabbix frontend to this virtual network I need to modify the ",(0,t.kt)("a",{parentName:"p",href:"#complete-zabbix-server-compose-file"},"Zabbix Server Compose file"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yml"},"zabbix-web-apache-pgsql:\n  image: zabbix/zabbix-web-apache-pgsql:alpine-5.0-latest\n  networks:\n    zbx_net_backend:\n      ipv4_address: 172.16.239.104\n      aliases:\n        - zabbix-web-apache-pgsql\n        - zabbix-web-apache-alpine-pgsql\n        - zabbix-web-apache-pgsql-alpine\n    zbx_net_frontend:\n      ipv4_address: 172.16.238.104\n    wiki_gateway:\n      ipv4_address: 172.20.0.6\n")),(0,t.kt)("p",null,"I added the ",(0,t.kt)("inlineCode",{parentName:"p"},"wiki_gateway")," as well as an IPv4 address - to check what IP addresses are available inside an Docker network you can inspect it. I simply added the Zabbix frontend container to my Wiki network manually and ran the inspect command to see what address was assigned to the container."),(0,t.kt)("p",null,"First run ",(0,t.kt)("inlineCode",{parentName:"p"},"docker ps")," to find out your frontends Docker ",(0,t.kt)("strong",{parentName:"p"},"Container ID")," and ",(0,t.kt)("strong",{parentName:"p"},"Container Name"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\nCONTAINER ID        IMAGE                                             NAMES\n44dfd075af57        zabbix/zabbix-web-apache-pgsql:alpine-5.0-latest  docker-zabbix_zabbix-web-apache-pgsql_1\n")),(0,t.kt)("p",null,"Then add the ",(0,t.kt)("strong",{parentName:"p"},"Container ID")," to the virtual network and inspect the network to see if it worked:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"docker network connect wiki_gateway 44dfd075af57\n\ndocker inspect wiki_gateway\n")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Name": "wiki_gateway",\n    "Id": "98f70ca5f7baf4f676029c31c9c68f3b3743521975becef326f97312a41c669b",\n    "Created": "2020-10-07T09:53:17.531329441Z",\n    "Scope": "local",\n    "Driver": "bridge",\n    "EnableIPv6": false,\n    "IPAM": {\n      "Driver": "default",\n      "Options": null,\n      "Config": [\n        {\n          "Subnet": "172.20.0.0/16",\n          "Gateway": "172.20.0.1"\n        }\n      ]\n    },\n    "Internal": false,\n    "Attachable": true,\n    "Ingress": false,\n    "ConfigFrom": {\n      "Network": ""\n    },\n    "ConfigOnly": false,\n    "Containers": {\n      "15c50c7d5997e3a7562e3b121cb795e9d22fdb614a869a532ca93a1d92637390": {\n        "Name": "wiki_de",\n        "EndpointID": "4eb0596b1cc0aaa046f9077512eb283a1063916e6072d707a97196ad40021e2e",\n        "MacAddress": "02:42:ac:14:00:03",\n        "IPv4Address": "172.20.0.3/16",\n        "IPv6Address": ""\n      },\n      "1af00ce71d4da9ccfe9800ebf1fcba5dbfd842d90b0fbe92e27f7bd1dac7c691": {\n        "Name": "wiki_fr",\n        "EndpointID": "c888701c3717aa73fcc3ce6b682626b8f31506935d6dd5cb3f9acae4ce62e5a7",\n        "MacAddress": "02:42:ac:14:00:02",\n        "IPv4Address": "172.20.0.2/16",\n        "IPv6Address": ""\n      },\n      "44dfd075af5789dab49f9e083d6fbb60ab4f5f74206a9190634675db48354636": {\n        "Name": "docker-zabbix_zabbix-web-apache-pgsql_1",\n        "EndpointID": "5c4a8b866d4f584d24d78a41d2aee06035899f0d14825dd698d99ee7689ae7ba",\n        "MacAddress": "02:42:ac:14:00:06",\n        "IPv4Address": "172.20.0.6/16",\n        "IPv6Address": ""\n      },\n      "9419eb378185058c9159ac9ec43d9e69725b55b7d454b901b01e815ffd3b7954": {\n        "Name": "ingress",\n        "EndpointID": "ca7898a11610bc10b6cd3be8e3de0274b82905998e90af91d333e063f7b75185",\n        "MacAddress": "02:42:ac:14:00:05",\n        "IPv4Address": "172.20.0.5/16",\n        "IPv6Address": ""\n      },\n      "d4ef7e3026a15b845e6d7bb2af0a9376d1482b67b3af1fa84ab546f45dc64470": {\n        "Name": "wiki_en",\n        "EndpointID": "5bacfc78a7cc4db5e57b33de499809d8b66f0d1198aed11a7c1a26f73663c68d",\n        "MacAddress": "02:42:ac:14:00:04",\n        "IPv4Address": "172.20.0.4/16",\n        "IPv6Address": ""\n      }\n    },\n    "Options": {},\n    "Labels": {\n      "com.docker.compose.network": "gateway",\n      "com.docker.compose.project": "wiki",\n      "com.docker.compose.version": "1.26.2"\n    }\n  }\n]\n')),(0,t.kt)("p",null,"You can see that the frontend container is now connected to the virtual network and assigned the following IP address (that I already used in the compose file above):"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'"IPv4Address": "172.20.0.6/16",\n')),(0,t.kt)("p",null,"Now ",(0,t.kt)("inlineCode",{parentName:"p"},"docker-compose down")," and ",(0,t.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")," your Zabbix Server environemt and your frontend will automatically be connected to your virtual network and you should be able to access it with the ",(0,t.kt)("inlineCode",{parentName:"p"},"/zabbix/")," URL prefix on Port 80!"),(0,t.kt)("p",null,"I am now able to close the Port that I was previously using to access the Zabbix frontend and use my NGINX ingress on port 80 instead. I am happy with that :)"),(0,t.kt)("h2",{id:"complete-zabbix-server-compose-file"},"Complete Zabbix Server Compose File"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yml"},'version: \'3.5\'\nservices:\n zabbix-server:\n  image: zabbix/zabbix-server-pgsql:alpine-5.0-latest\n  ports:\n   - "10051:10051"\n  volumes:\n   - /etc/localtime:/etc/localtime:ro\n   - /etc/timezone:/etc/timezone:ro\n   - ./zbx_env/usr/lib/zabbix/alertscripts:/usr/lib/zabbix/alertscripts:ro\n   - ./zbx_env/usr/lib/zabbix/externalscripts:/usr/lib/zabbix/externalscripts:ro\n   - ./zbx_env/var/lib/zabbix/export:/var/lib/zabbix/export:rw\n   - ./zbx_env/var/lib/zabbix/modules:/var/lib/zabbix/modules:ro\n   - ./zbx_env/var/lib/zabbix/enc:/var/lib/zabbix/enc:ro\n   - ./zbx_env/var/lib/zabbix/ssh_keys:/var/lib/zabbix/ssh_keys:ro\n   - ./zbx_env/var/lib/zabbix/mibs:/var/lib/zabbix/mibs:ro\n  links:\n   - postgres-server:postgres-server\n   - zabbix-java-gateway:zabbix-java-gateway\n  ulimits:\n   nproc: 65535\n   nofile:\n    soft: 20000\n    hard: 40000\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.70\'\n      memory: 1G\n    reservations:\n      cpus: \'0.5\'\n      memory: 512M\n  env_file:\n   - .env_db_pgsql\n   - .env_srv\n  secrets:\n   - POSTGRES_USER\n   - POSTGRES_PASSWORD\n  depends_on:\n   - postgres-server\n   - zabbix-java-gateway\n  networks:\n   zbx_net_backend:\n     ipv4_address: 172.16.239.101\n     aliases:\n      - zabbix-server\n      - zabbix-server-pgsql\n      - zabbix-server-alpine-pgsql\n      - zabbix-server-pgsql-alpine\n   zbx_net_frontend:\n     ipv4_address: 172.16.238.101\n  stop_grace_period: 30s\n  sysctls:\n   - net.ipv4.ip_local_port_range=1024 65000\n   - net.ipv4.conf.all.accept_redirects=0\n   - net.ipv4.conf.all.secure_redirects=0\n   - net.ipv4.conf.all.send_redirects=0\n  labels:\n   com.zabbix.description: "Zabbix server with PostgreSQL database support"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "zabbix-server"\n   com.zabbix.dbtype: "pgsql"\n   com.zabbix.os: "alpine"\n\n zabbix-proxy-sqlite3:\n  image: zabbix/zabbix-proxy-sqlite3:alpine-5.0-latest\n  ports:\n   - "10061:10051"\n  volumes:\n   - /etc/localtime:/etc/localtime:ro\n   - /etc/timezone:/etc/timezone:ro\n   - ./zbx_env/usr/lib/zabbix/externalscripts:/usr/lib/zabbix/externalscripts:ro\n   - ./zbx_env/var/lib/zabbix/modules:/var/lib/zabbix/modules:ro\n   - ./zbx_env/var/lib/zabbix/enc:/var/lib/zabbix/enc:ro\n   - ./zbx_env/var/lib/zabbix/ssh_keys:/var/lib/zabbix/ssh_keys:ro\n   - ./zbx_env/var/lib/zabbix/mibs:/var/lib/zabbix/mibs:ro\n  links:\n   - zabbix-server:zabbix-server\n   - zabbix-java-gateway:zabbix-java-gateway\n  ulimits:\n   nproc: 65535\n   nofile:\n    soft: 20000\n    hard: 40000\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.70\'\n      memory: 512M\n    reservations:\n      cpus: \'0.3\'\n      memory: 256M\n  env_file:\n   - .env_prx\n   - .env_prx_sqlite3\n  depends_on:\n   - zabbix-java-gateway\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.102\n    aliases:\n     - zabbix-proxy-sqlite3\n     - zabbix-proxy-alpine-sqlite3\n     - zabbix-proxy-sqlite3-alpine\n   zbx_net_frontend:\n    ipv4_address: 172.16.238.102\n  stop_grace_period: 30s\n  labels:\n   com.zabbix.description: "Zabbix proxy with SQLite3 database support"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "zabbix-proxy"\n   com.zabbix.dbtype: "sqlite3"\n   com.zabbix.os: "alpine"\n\n zabbix-proxy-mysql:\n  image: zabbix/zabbix-proxy-mysql:alpine-5.0-latest\n  ports:\n   - "10071:10051"\n  volumes:\n   - /etc/localtime:/etc/localtime:ro\n   - /etc/timezone:/etc/timezone:ro\n   - ./zbx_env/usr/lib/zabbix/externalscripts:/usr/lib/zabbix/externalscripts:ro\n   - ./zbx_env/var/lib/zabbix/modules:/var/lib/zabbix/modules:ro\n   - ./zbx_env/var/lib/zabbix/enc:/var/lib/zabbix/enc:ro\n   - ./zbx_env/var/lib/zabbix/ssh_keys:/var/lib/zabbix/ssh_keys:ro\n   - ./zbx_env/var/lib/zabbix/mibs:/var/lib/zabbix/mibs:ro\n  links:\n   - zabbix-server:zabbix-server\n   - zabbix-java-gateway:zabbix-java-gateway\n  ulimits:\n   nproc: 65535\n   nofile:\n    soft: 20000\n    hard: 40000\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.70\'\n      memory: 512M\n    reservations:\n      cpus: \'0.3\'\n      memory: 256M\n  env_file:\n   - .env_db_mysql_proxy\n   - .env_prx\n   - .env_prx_mysql\n  secrets:\n   - MYSQL_USER\n   - MYSQL_PASSWORD\n   - MYSQL_ROOT_PASSWORD\n  depends_on:\n   - mysql-server\n   - zabbix-java-gateway\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.103\n    aliases:\n     - zabbix-proxy-mysql\n     - zabbix-proxy-alpine-mysql\n     - zabbix-proxy-mysql-alpine\n   zbx_net_frontend:\n    ipv4_address: 172.16.238.103\n  stop_grace_period: 30s\n  labels:\n   com.zabbix.description: "Zabbix proxy with MySQL database support"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "zabbix-proxy"\n   com.zabbix.dbtype: "mysql"\n   com.zabbix.os: "alpine"\n\n zabbix-web-apache-pgsql:\n  image: zabbix/zabbix-web-apache-pgsql:alpine-5.0-latest\n  ports:\n   - "7777:8080"\n   - "7778:8443"\n  links:\n   - postgres-server:postgres-server\n   - zabbix-server:zabbix-server\n  volumes:\n   - /etc/localtime:/etc/localtime:ro\n   - /etc/timezone:/etc/timezone:ro\n   - ./zbx_env/etc/ssl/apache2:/etc/ssl/apache2:ro\n   - ./zbx_env/usr/share/zabbix/modules/:/usr/share/zabbix/modules/:ro\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.70\'\n      memory: 512M\n    reservations:\n      cpus: \'0.5\'\n      memory: 256M\n  env_file:\n   - .env_db_pgsql\n   - .env_web\n  secrets:\n   - POSTGRES_USER\n   - POSTGRES_PASSWORD\n  depends_on:\n   - postgres-server\n   - zabbix-server\n  healthcheck:\n   test: ["CMD", "curl", "-f", "http://localhost:8080/"]\n   interval: 10s\n   timeout: 5s\n   retries: 3\n   start_period: 30s\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.104\n    aliases:\n     - zabbix-web-apache-pgsql\n     - zabbix-web-apache-alpine-pgsql\n     - zabbix-web-apache-pgsql-alpine\n   zbx_net_frontend:\n    ipv4_address: 172.16.238.104\n   wiki_gateway:\n    ipv4_address: 172.20.0.6\n  stop_grace_period: 10s\n  sysctls:\n   - net.core.somaxconn=65535\n  labels:\n   com.zabbix.description: "Zabbix frontend on Apache web-server with PostgreSQL database support"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "zabbix-frontend"\n   com.zabbix.webserver: "apache2"\n   com.zabbix.dbtype: "pgsql"\n   com.zabbix.os: "alpine"\n\n zabbix-web-nginx-pgsql:\n  image: zabbix/zabbix-web-nginx-pgsql:alpine-5.0-latest\n  ports:\n   - "8081:8080"\n   - "8443:8443"\n  links:\n   - postgres-server:postgres-server\n   - zabbix-server:zabbix-server\n  volumes:\n   - /etc/localtime:/etc/localtime:ro\n   - /etc/timezone:/etc/timezone:ro\n   - ./zbx_env/etc/ssl/nginx:/etc/ssl/nginx:ro\n   - ./zbx_env/usr/share/zabbix/modules/:/usr/share/zabbix/modules/:ro\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.70\'\n      memory: 512M\n    reservations:\n      cpus: \'0.5\'\n      memory: 256M\n  env_file:\n   - .env_db_pgsql\n   - .env_web\n  secrets:\n   - POSTGRES_USER\n   - POSTGRES_PASSWORD\n  depends_on:\n   - postgres-server\n   - zabbix-server\n  healthcheck:\n   test: ["CMD", "curl", "-f", "http://localhost:8080/"]\n   interval: 10s\n   timeout: 5s\n   retries: 3\n   start_period: 30s\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.105\n    aliases:\n     - zabbix-web-nginx-pgsql\n     - zabbix-web-nginx-alpine-pgsql\n     - zabbix-web-nginx-pgsql-alpine\n   zbx_net_frontend:\n    ipv4_address: 172.16.238.105\n  stop_grace_period: 10s\n  sysctls:\n   - net.core.somaxconn=65535\n  labels:\n   com.zabbix.description: "Zabbix frontend on Nginx web-server with PostgreSQL database support"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "zabbix-frontend"\n   com.zabbix.webserver: "nginx"\n   com.zabbix.dbtype: "pgsql"\n   com.zabbix.os: "alpine"\n\n zabbix-agent:\n  privileged: true\n  image: zabbix/zabbix-agent:alpine-5.0-latest\n  ports:\n   - "10050:10050"\n  volumes:\n   - /etc/localtime:/etc/localtime:ro\n   - /etc/timezone:/etc/timezone:ro\n   - ./zbx_env/etc/zabbix/zabbix_agentd.d:/etc/zabbix/zabbix_agentd.d:ro\n   - ./zbx_env/var/lib/zabbix/modules:/var/lib/zabbix/modules:ro\n   - ./zbx_env/var/lib/zabbix/enc:/var/lib/zabbix/enc:ro\n   - ./zbx_env/var/lib/zabbix/ssh_keys:/var/lib/zabbix/ssh_keys:ro\n  links:\n   - zabbix-server:zabbix-server\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.2\'\n      memory: 128M\n    reservations:\n      cpus: \'0.1\'\n      memory: 64M\n   mode: global\n  env_file:\n   - .env_agent\n  privileged: true\n  pid: "host"\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.106\n    aliases:\n     - zabbix-agent\n     - zabbix-agent-passive\n     - zabbix-agent-alpine\n  stop_grace_period: 5s\n  labels:\n   com.zabbix.description: "Zabbix agent"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "zabbix-agentd"\n   com.zabbix.os: "alpine"\n\n zabbix-java-gateway:\n  image: zabbix/zabbix-java-gateway:alpine-5.0-latest\n  ports:\n   - "10052:10052"\n  deploy:\n   resources:\n    limits:\n      cpus: \'0.5\'\n      memory: 512M\n    reservations:\n      cpus: \'0.25\'\n      memory: 256M\n  env_file:\n   - .env_java\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.107\n    aliases:\n     - zabbix-java-gateway\n     - zabbix-java-gateway-alpine\n  stop_grace_period: 5s\n  labels:\n   com.zabbix.description: "Zabbix Java Gateway"\n   com.zabbix.company: "Zabbix LLC"\n   com.zabbix.component: "java-gateway"\n   com.zabbix.os: "alpine"\n\n mysql-server:\n  image: mysql:8.0\n  command:\n   - mysqld\n   - --character-set-server=utf8\n   - --collation-server=utf8_bin\n   - --default-authentication-plugin=mysql_native_password\n  volumes:\n   - ./zbx_env/var/lib/mysql:/var/lib/mysql:rw\n  env_file:\n   - .env_db_mysql\n  secrets:\n   - MYSQL_USER\n   - MYSQL_PASSWORD\n   - MYSQL_ROOT_PASSWORD\n  stop_grace_period: 1m\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.109\n    aliases:\n     - mysql-server\n     - zabbix-database\n     - mysql-database\n\n postgres-server:\n  image: postgres:latest\n  volumes:\n   - ./zbx_env/var/lib/postgresql/data:/var/lib/postgresql/data:rw\n   - ./.ZBX_DB_CA_FILE:/run/secrets/root-ca.pem:ro\n   - ./.ZBX_DB_CERT_FILE:/run/secrets/server-cert.pem:ro\n   - ./.ZBX_DB_KEY_FILE:/run/secrets/server-key.pem:ro\n  env_file:\n   - .env_db_pgsql\n  secrets:\n   - POSTGRES_USER\n   - POSTGRES_PASSWORD\n  stop_grace_period: 1m\n  networks:\n   zbx_net_backend:\n    ipv4_address: 172.16.239.110\n    aliases:\n     - postgres-server\n     - pgsql-server\n     - pgsql-database\n\n db_data_mysql:\n  image: busybox\n  volumes:\n   - ./zbx_env/var/lib/mysql:/var/lib/mysql:rw\n\n db_data_pgsql:\n  image: busybox\n  volumes:\n   - ./zbx_env/var/lib/postgresql/data:/var/lib/postgresql/data:rw\n\nnetworks:\n  zbx_net_frontend:\n    driver: bridge\n    driver_opts:\n      com.docker.network.enable_ipv6: "false"\n    ipam:\n      driver: default\n      config:\n      - subnet: 172.16.238.0/24\n  zbx_net_backend:\n    driver: bridge\n    driver_opts:\n      com.docker.network.enable_ipv6: "false"\n    internal: true\n    ipam:\n      driver: default\n      config:\n      - subnet: 172.16.239.0/24\n  wiki_gateway:\n    external: true\n    name: wiki_gateway\n\nsecrets:\n  MYSQL_USER:\n    file: ./.MYSQL_USER\n  MYSQL_PASSWORD:\n    file: ./.MYSQL_PASSWORD\n  MYSQL_ROOT_PASSWORD:\n    file: ./.MYSQL_ROOT_PASSWORD\n  POSTGRES_USER:\n    file: ./.POSTGRES_USER\n  POSTGRES_PASSWORD:\n    file: ./.POSTGRES_PASSWORD\n')))}d.isMDXComponent=!0},24628:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f985125af0f6a52c9cbf979638322176.jpg"}}]);