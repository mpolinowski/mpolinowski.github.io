"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[55440],{154727:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(474848),t=n(28453);const o={sidebar_position:6030,slug:"2021-10-12",title:"Traefik v2 Webproxy Configuration - 1st Attempt",authors:"mpolinowski",tags:["Traefik","Linux","Docker"]},s=void 0,i={id:"DevOps/Provisioning/2021-10-12--traefik-configuration/index",title:"Traefik v2 Webproxy Configuration - 1st Attempt",description:"Central, Hong Kong",source:"@site/docs/DevOps/Provisioning/2021-10-12--traefik-configuration/index.md",sourceDirName:"DevOps/Provisioning/2021-10-12--traefik-configuration",slug:"/DevOps/Provisioning/2021-10-12--traefik-configuration/2021-10-12",permalink:"/docs/DevOps/Provisioning/2021-10-12--traefik-configuration/2021-10-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2021-10-12--traefik-configuration/index.md",tags:[{label:"Traefik",permalink:"/docs/tags/traefik"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:6030,frontMatter:{sidebar_position:6030,slug:"2021-10-12",title:"Traefik v2 Webproxy Configuration - 1st Attempt",authors:"mpolinowski",tags:["Traefik","Linux","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Traefik v2 Webproxy Configuration - 2nd Attempt",permalink:"/docs/DevOps/Provisioning/2021-10-12--traefik-second-attempt/2021-10-12"},next:{title:"PostgreSQL 14 Database Refresher :: Working with JSON & Node.js",permalink:"/docs/DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/2021-09-14"}},l={},c=[{value:"Preparation",id:"preparation",level:2},{value:"Folders and Files",id:"folders-and-files",level:3},{value:"Proxy Network",id:"proxy-network",level:3},{value:"Docker Compose",id:"docker-compose",level:2},{value:"Traefik Load Balancing",id:"traefik-load-balancing",level:3},{value:"Basic Authentication",id:"basic-authentication",level:3},{value:"Logins in Docker-Compose File",id:"logins-in-docker-compose-file",level:4},{value:"External Password File",id:"external-password-file",level:4}];function d(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.p,{children:(0,a.jsx)(r.img,{alt:"Central, Hong Kong",src:n(584893).A+"",width:"1500",height:"473"})}),"\n",(0,a.jsxs)(r.blockquote,{children:["\n",(0,a.jsx)(r.p,{children:"This guide is incomplete... Traefik, atm unfortunately, does not match my workflow. I am running into a lot of issues with the official documentation as well as the countless tutorials out there. I will put this project on hold until I figured it out."}),"\n"]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"#preparation",children:"Preparation"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#folders-and-files",children:"Folders and Files"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#proxy-network",children:"Proxy Network"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"#docker-compose",children:"Docker Compose"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#traefik-load-balancing",children:"Traefik Load Balancing"})}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"#basic-authentication",children:"Basic Authentication"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#logins-in-docker-compose-file",children:"Logins in Docker-Compose File"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#external-password-file",children:"External Password File"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.p,{children:["So far I have been primarily ",(0,a.jsx)(r.a,{href:"/?chapter_filter=%22All+Chapters%22&type_filter=%22All+Types%22&q=%22nginx%22&tag_filter=%5B%22NGINX%22%5D",children:"working with NGINX"}),". But diving into ",(0,a.jsx)(r.a,{href:"https://traefik.io/blog/announcing-traefik-proxy-2-5/",children:"Kubernetes and Hashicorp Consul"})," the name ",(0,a.jsx)(r.a,{href:"/docs/DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/2021-08-06",children:"Traefik kept coming up"}),". So let's have a look what this is all about."]}),"\n",(0,a.jsx)(r.h2,{id:"preparation",children:"Preparation"}),"\n",(0,a.jsx)(r.h3,{id:"folders-and-files",children:"Folders and Files"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"mkdir -p /opt/traefik/{certs,shared,rules}\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"touch /opt/traefik/traefik.log\n"})}),"\n",(0,a.jsx)(r.h3,{id:"proxy-network",children:"Proxy Network"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"docker network create --gateway 192.168.144.1 --subnet 192.168.144.0/24 traefik_proxy\n"})}),"\n",(0,a.jsx)(r.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,a.jsx)(r.p,{children:"Create a docker-compose.yml file where you will define a reverse-proxy service that uses the official Traefik image:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yml",children:"version: '3'\r\n\r\nnetworks:\r\n  traefik_proxy:\r\n    external:\r\n      name: traefik_proxy\r\n  default:\r\n    driver: bridge\r\n\r\nservices:\r\n  reverse-proxy:\r\n    container_name: traefik\r\n    restart: unless-stopped\r\n    # The official v2 Traefik docker image\r\n    image: traefik:v2.5\r\n    # Enables the web UI and tells Traefik to listen to docker\r\n    command: --api.insecure=true --providers.docker\r\n    ports:\r\n      # The HTTP port\r\n      - '8080:80'\r\n      # The Web UI (enabled by --api.insecure=true)\r\n      - '8081:8080'\r\n    networks:\r\n      traefik_proxy:\r\n        ipv4_address: 192.168.144.254\r\n    command: # CLI arguments\r\n      - --log=true\r\n      - --log.level=DEBUG # (Default: error) DEBUG, INFO, WARN, ERROR, FATAL, PANIC\r\n      - --accessLog=true\r\n      - --accessLog.filePath=/traefik.log\r\n      - --accessLog.bufferingSize=100 # Configuring a buffer of 100 lines\r\n      - --accessLog.filters.statusCodes=400-499\r\n    volumes:\r\n      # So that Traefik can listen to the Docker events\r\n      - /var/run/docker.sock:/var/run/docker.sock\r\n      - /opt/traefik/traefik.log:/traefik.log\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"docker-compose up -d reverse-proxy\n"})}),"\n",(0,a.jsxs)(r.p,{children:["Check the API with jq (",(0,a.jsx)(r.code,{children:"apt-get install jq"}),"):"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl http://localhost:8081/api/rawdata | jq\n"})}),"\n",(0,a.jsx)(r.p,{children:"Traefik Detects New Services and Creates the Route for you. Add a web service to the docker-compose file and label it so it is picked up by Traefik:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yml",children:"whoami:\r\n  # A container that exposes an API to show its IP address\r\n  image: traefik/whoami\r\n  networks:\r\n    - traefik_proxy\r\n  labels:\r\n    - 'traefik.http.routers.whoami.rule=Host(`whoami.localhost`)'\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"docker-compose up -d whoami\n"})}),"\n",(0,a.jsx)(r.p,{children:"The API now shows us that the Whoami Service is up and running;"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:'curl http://localhost:8081/api/rawdata | jq\r\n\r\n"whoami@docker": {\r\n  "entryPoints": [\r\n    "http"\r\n  ],\r\n  "service": "whoami-traefik",\r\n  "rule": "Host(`whoami.localhost`)",\r\n  "status": "enabled",\r\n  "using": [\r\n    "http"\r\n  ]\r\n}\n'})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl -H Host:whoami.localhost http://127.0.0.1:8080\r\n\r\nHostname: 49323f79f37b\r\nIP: 127.0.0.1\r\nIP: 192.168.144.101\r\nRemoteAddr: 192.168.144.254:42418\r\nGET / HTTP/1.1\r\nHost: whoami.localhost\r\nUser-Agent: curl/7.74.0\r\nAccept: */*\r\nAccept-Encoding: gzip\r\nX-Forwarded-For: 192.168.144.1\r\nX-Forwarded-Host: whoami.localhost\r\nX-Forwarded-Port: 80\r\nX-Forwarded-Proto: http\r\nX-Forwarded-Server: 3a33e661f746\r\nX-Real-Ip: 192.168.144.1\n"})}),"\n",(0,a.jsx)(r.h3,{id:"traefik-load-balancing",children:"Traefik Load Balancing"}),"\n",(0,a.jsxs)(r.p,{children:["Run more instances of your ",(0,a.jsx)(r.code,{children:"whoami"})," service with the following command:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"docker-compose up -d --scale whoami=2\n"})}),"\n",(0,a.jsx)(r.p,{children:"We can now send two request and will get the replies from both instances in a RR fashion:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl -H Host:whoami.localhost http://127.0.0.1:8080\r\n\r\nHostname: 51ba8be4f4ec\r\nIP: 127.0.0.1\r\nIP: 192.168.144.2\r\n\r\n\r\ncurl -H Host:whoami.localhost http://127.0.0.1:8080\r\n\r\nHostname: 749f615cab45\r\nIP: 127.0.0.1\r\nIP: 192.168.144.3\n"})}),"\n",(0,a.jsx)(r.h3,{id:"basic-authentication",children:"Basic Authentication"}),"\n",(0,a.jsx)(r.h4,{id:"logins-in-docker-compose-file",children:"Logins in Docker-Compose File"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yml",children:"services:\r\n  reverse-proxy:\r\n    container_name: traefik\r\n    restart: unless-stopped\r\n    image: traefik:v2.5\r\n    ports:\r\n      - '8080:80'\r\n      - '8081:8080'\r\n    networks:\r\n      traefik_proxy:\r\n        ipv4_address: 192.168.144.254\r\n    volumes:\r\n      - /var/run/docker.sock:/var/run/docker.sock\r\n      - /opt/traefik/traefik.log:/traefik.log\r\n    command: # CLI arguments\r\n      - '--api.insecure=true' # Traefik 2 dashboard authentication\r\n      - '--providers.docker=true'\r\n      - '--providers.docker.exposedbydefault=false'\r\n      - '--providers.docker.network=default'\r\n      - '--entrypoints.web.address=:80'\r\n      - '--api'\r\n      - '--log=true'\r\n      - '--log.level=DEBUG' # (Default: error) DEBUG, INFO, WARN, ERROR, FATAL, PANIC\r\n      - '--accessLog=true'\r\n      - '--accessLog.filePath=/traefik.log'\r\n      - '--accessLog.bufferingSize=100' # Configuring a buffer of 100 lines\r\n      - '--accessLog.filters.statusCodes=400-499'\r\n    labels:\r\n      - 'traefik.enable=true'\r\n      - 'traefik.http.routers.http-catchall.rule=hostregexp(`{host:.+}`)'\r\n      - 'traefik.http.routers.http-catchall.entrypoints=web'\r\n      # auth middleware with \"test:test\" or \"test2:test2\"\r\n      - 'traefik.http.middlewares.my-auth.basicauth.users=test:$$apr1$$H6uskkkW$$IgXLP6ewTrSuBkTrqE8wj/,test2:$$apr1$$d9hr9HBB$$4HxwgUir3HP4EsggP/QNo0'\r\n\r\n  whoami:\r\n    image: traefik/whoami\r\n    networks:\r\n      - traefik_proxy\r\n    labels:\r\n      - 'traefik.enable=true'\r\n      - 'traefik.http.routers.whoami.rule=Host(`whoami.localhost`)'\r\n      - 'traefik.http.routers.whoami.entrypoints=web'\r\n      # connect your auth middleware to a service which you want to protect\r\n      - 'traefik.http.routers.whoami.middlewares=my-auth'\n"})}),"\n",(0,a.jsx)(r.p,{children:"Test your configuration - accessing your service now requires a login:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl -H Host:whoami.localhost http://127.0.0.1:8080\r\n401 Unauthorized\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl -u test -H Host:whoami.localhost http://127.0.0.1:8080\r\n\r\nEnter host password for user 'test':\r\nHostname: 8e1edc591948\r\nIP: 127.0.0.1\r\nIP: 192.168.144.2\r\nRemoteAddr: 192.168.144.254:51444\r\nGET / HTTP/1.1\r\nHost: whoami.localhost\r\nUser-Agent: curl/7.74.0\r\nAccept: */*\r\nAccept-Encoding: gzip\r\nAuthorization: Basic dGVzdDp0ZXN0\r\nX-Forwarded-For: 192.168.144.1\r\nX-Forwarded-Host: whoami.localhost\r\nX-Forwarded-Port: 80\r\nX-Forwarded-Proto: http\r\nX-Forwarded-Server: a037bf49a135\r\nX-Real-Ip: 192.168.144.1\n"})}),"\n",(0,a.jsx)(r.h4,{id:"external-password-file",children:"External Password File"}),"\n",(0,a.jsxs)(r.p,{children:["The usersFile option is the path to an external file that contains the authorized users for the middleware. Start by creating a ",(0,a.jsx)(r.code,{children:".htpasswd"})," file with the login credentials:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"apt-get install apache2-utils\r\nhtpasswd -c /opt/traefik/shared/.htpasswd myuser\n"})}),"\n",(0,a.jsx)(r.p,{children:"We now need to mount both our rule and the password file into the Traefik Docker container and make sure that Traefik actually uses these files:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-yml",children:"services:\r\n  reverse-proxy:\r\n    container_name: traefik\r\n    restart: unless-stopped\r\n    image: traefik:v2.5\r\n    ports:\r\n      - '8080:80'\r\n      - '8081:8080'\r\n    networks:\r\n      traefik_proxy:\r\n        ipv4_address: 192.168.144.254\r\n    volumes:\r\n      - /opt/traefik/rules:/rules\r\n      - /opt/traefik/shared:/shared\r\n      - /var/run/docker.sock:/var/run/docker.sock\r\n      - /opt/traefik/traefik.log:/traefik.log\r\n    command: # CLI arguments\r\n      - '--api.insecure=false' # Traefik 2 dashboard authentication\r\n      - '--providers.docker=true'\r\n      - '--providers.docker.exposedbydefault=true'\r\n      - '--providers.docker.network=default'\r\n      - '--entrypoints.web.address=:80'\r\n      - '--api'\r\n      - '--log=true'\r\n      - '--log.level=ERROR' # (Default: error) DEBUG, INFO, WARN, ERROR, FATAL, PANIC\r\n      - '--accessLog=true'\r\n      - '--accessLog.filePath=/traefik.log'\r\n      - '--accessLog.bufferingSize=100' # Configuring a buffer of 100 lines\r\n      - '--accessLog.filters.statusCodes=400-499'\r\n    labels:\r\n      - 'traefik.enable=true'\r\n      - 'traefik.http.routers.http-catchall.rule=hostregexp(`{host:.+}`)'\r\n      - 'traefik.http.routers.http-catchall.entrypoints=web'\r\n      # auth middleware with path to .htpasswd as mounted in volumes\r\n      - 'traefik.http.middlewares.my-auth.basicauth.usersfile=/shared/.htpasswd'\r\n\r\n  whoami:\r\n    image: traefik/whoami\r\n    networks:\r\n      - traefik_proxy\r\n    labels:\r\n      - 'traefik.enable=true'\r\n      - 'traefik.http.routers.whoami.rule=Host(`whoami.localhost`)'\r\n      - 'traefik.http.routers.whoami.entrypoints=web'\r\n      # connect your auth middleware to a service which you want to protect\r\n      - 'traefik.http.routers.whoami.middlewares=my-auth'\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl -H Host:whoami.localhost http://127.0.0.1:8080\r\n401 Unauthorized\n"})}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-bash",children:"curl -u myuser -H Host:whoami.localhost http://127.0.0.1:8080\r\n\r\nEnter host password for user 'myuser':\r\nHostname: 8658cc0f5b2a\r\nIP: 127.0.0.1\r\nIP: 192.168.144.2\r\nRemoteAddr: 192.168.144.254:54796\r\nGET / HTTP/1.1\r\nHost: whoami.localhost\r\nUser-Agent: curl/7.74.0\r\nAccept: */*\r\nAccept-Encoding: gzip\r\nAuthorization: Basic\r\nX-Forwarded-For: 192.168.144.1\r\nX-Forwarded-Host: whoami.localhost\r\nX-Forwarded-Port: 80\r\nX-Forwarded-Proto: http\r\nX-Forwarded-Server: c5f9a76e16e6\r\nX-Real-Ip: 192.168.144.1\n"})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},584893:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4118b3ab0d3d411170645e7e387ce566.jpg"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var a=n(296540);const t={},o=a.createContext(t);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);