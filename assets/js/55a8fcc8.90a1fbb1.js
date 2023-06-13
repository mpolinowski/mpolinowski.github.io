"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[56311],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),k=a,h=u["".concat(l,".").concat(k)]||u[k]||d[k]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},18428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:8040,slug:"2023-06-13",title:"NGINX HTTP/2 Docker Ingress",authors:"mpolinowski",tags:["NGINX","Docker"]},i=void 0,s={unversionedId:"DevOps/NGINX/2023-06-13-nginx-docker-ingress/index",id:"DevOps/NGINX/2023-06-13-nginx-docker-ingress/index",title:"NGINX HTTP/2 Docker Ingress",description:"Guangzhou, China",source:"@site/docs/DevOps/NGINX/2023-06-13-nginx-docker-ingress/index.md",sourceDirName:"DevOps/NGINX/2023-06-13-nginx-docker-ingress",slug:"/DevOps/NGINX/2023-06-13-nginx-docker-ingress/2023-06-13",permalink:"/docs/DevOps/NGINX/2023-06-13-nginx-docker-ingress/2023-06-13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2023-06-13-nginx-docker-ingress/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2023-06-13",title:"NGINX HTTP/2 Docker Ingress",authors:"mpolinowski",tags:["NGINX","Docker"]},sidebar:"tutorialSidebar",previous:{title:"NGINX",permalink:"/docs/category/nginx"},next:{title:"NGINX Websocket Proxy",permalink:"/docs/DevOps/NGINX/2022-12-08-nginx-websocket-proxy/2022-12-08"}},l={},p=[{value:"Setup",id:"setup",level:2},{value:"Networking",id:"networking",level:3},{value:"Container Network",id:"container-network",level:4}],c={toc:p};function d(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:t(69699).Z,width:"1500",height:"624"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#setup"},"Setup"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#networking"},"Networking"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#container-network"},"Container Network"))))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article is an update to ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22/"},"NGINX Docker Ingress for your Gatsby Build"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/nginx_docker_ingress"},"Github Repository")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Get the repository from Github and save it e.g. in ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt")," - ",(0,a.kt)("strong",{parentName:"p"},"Note")," if you choose a different location you will have to adjust the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker run")," commands below accordingly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /opt\ngit pull https://github.com/mpolinowski/nginx_docker_ingress.git\ncd /nginx_docker_ingress\n")),(0,a.kt)("p",null,"Check out the default configuration file that is included in the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /conf.d/default.conf\n")),(0,a.kt)("p",null,"This contains 2 server locations - I am using the ports ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"8081")," here so that they don't interfere with your other applications (e.g. if you already have a web server running) - but feel free to change them to the default ports ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"443"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server {\n    listen 8080;\n    listen [::]:8080;\n\n...\n\nserver {\n    listen 8081 ssl http2 default_server;\n    listen [::]:8081 ssl;\n")),(0,a.kt)("p",null,"Both of them are configured to listen for traffic on ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," - replace this address with your server domain. Or just leave it be for testing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"server_name localhost;\n")),(0,a.kt)("p",null,"The first server location expects ",(0,a.kt)("strong",{parentName:"p"},"HTTP")," traffic on port ",(0,a.kt)("inlineCode",{parentName:"p"},"8080")," and redirects this traffic to port ",(0,a.kt)("inlineCode",{parentName:"p"},"8081")," expecting there to be the ",(0,a.kt)("strong",{parentName:"p"},"HTTP/2")," endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"return 301 https://$server_name:8081$request_uri;\n")),(0,a.kt)("p",null,"The repository contains a self-signed TLS certificate that you can use for testing. For production run Certbot to generate a CA cert and replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"ssl/self-signed.conf")," include with it (",(0,a.kt)("strong",{parentName:"p"},"Make sure")," to mount the Let's Encrypt certificate into the NGINX container!):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"# ssl_certificate /opt/letsencrypt/live/my.domain.com/fullchain.pem;\n# ssl_certificate_key /opt/letsencrypt/live/my.domain.com/privkey.pem;\n\ninclude ssl/self-signed.conf; # Replace with the 2 lines above when using CA Cert\ninclude ssl/ssl-params.conf;\ninclude /etc/nginx/conf.d/header.conf;\n")),(0,a.kt)("p",null,"Last but not least - define the location that should be proxied by NGINX. The default location is the NGINX welcome page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"location / {\n    root   /usr/share/nginx/html;\n    index  index.html index.htm;\n}\n")),(0,a.kt)("p",null,"Jump to running the container to do a test run - this path in ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/nginx_docker_ingress")," the command below has to point to the repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 8080:8080 -p 8081:8081 -v /opt/nginx_docker_ingress:/etc/nginx --name ingress nginx:1.25.0-alpine3.17\n")),(0,a.kt)("p",null,"Once the container is up you should be able to access ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080")," and be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:8081")," to see the NGINX welcome page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"NGINX HTTP/2 Docker Ingress",src:t(82397).Z,width:"1087",height:"262"})),(0,a.kt)("h3",{id:"networking"},"Networking"),(0,a.kt)("p",null,"If your application is not running in a Docker container start the NGINX Ingress with ",(0,a.kt)("inlineCode",{parentName:"p"},"--network host")," so that it has access to your host network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm --network host -v /opt/nginx_docker_ingress:/etc/nginx --name ingress nginx:1.25.0-alpine3.17\n")),(0,a.kt)("p",null,"E.g. if you have an application running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," you can replace the NGINX location block with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"location / {\n    proxy_pass http://127.0.0.1:3000/;\n  }\n")),(0,a.kt)("p",null,"Restart the container and revisit ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),". Again, you will be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:8081")," - but this time you will be seeing the web application beeing proxied by NGINX (If your browser still shows the NGINX welcome page do a hard refresh with ",(0,a.kt)("inlineCode",{parentName:"p"},"CTRL")," + ",(0,a.kt)("inlineCode",{parentName:"p"},"F5")," to bypass the browser cache)."),(0,a.kt)("p",null,"The problem here is that your app is now directly reachable over port 3000 and proxied on port 8081. Of course you can just firewall port 3000. But there is a better way."),(0,a.kt)("h4",{id:"container-network"},"Container Network"),(0,a.kt)("p",null,"To have the NGINX container work as an ingress we first need to create a virtual network - I choose the name ",(0,a.kt)("inlineCode",{parentName:"p"},"wikinet")," as this network will host our company wiki:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create wikinet\n")),(0,a.kt)("p",null,"The wiki frontend container - the app that I want to proxy - is called ",(0,a.kt)("inlineCode",{parentName:"p"},"wiki_en"),". I can add this container to the virtual network with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network connect wikinet wiki_en\n")),(0,a.kt)("p",null,"Let\u2019s see if the container has been added:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker network inspect wikinet\n")),(0,a.kt)("p",null,"The output show us that our container has been added successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Name": "wikinet",\n    "Id": "725dfcde3015d752f8d0c4bbfe2027d9a4cb1cb3c6cc9b4f4094fb33d5a1d6bc",\n    "Created": "2021-05-10T15:07:38.420998455+08:00",\n    "Scope": "local",\n    "Driver": "bridge",\n    "EnableIPv6": false,\n    "IPAM": {\n      "Driver": "default",\n      "Options": {},\n      "Config": [\n        {\n          "Subnet": "172.18.0.0/16",\n          "Gateway": "172.18.0.1"\n        }\n      ]\n    },\n    "Internal": false,\n    "Attachable": false,\n    "Ingress": false,\n    "ConfigFrom": {\n      "Network": ""\n    },\n    "ConfigOnly": false,\n    "Containers": {\n      "e903e22b56f21973ade9bab9aa58aa8994b0a2399eadff36a4801fbc26fb82d4": {\n        "Name": "wiki_en",\n        "EndpointID": "82090263f6853a6219989828ade375a4db5aa655561293bf5bce0d7dfeb4640a",\n        "MacAddress": "02:42:ac:12:00:02",\n        "IPv4Address": "172.18.0.2/16",\n        "IPv6Address": ""\n      }\n    },\n    "Options": {},\n    "Labels": {}\n  }\n]\n')),(0,a.kt)("p",null,"The next step is to add the container to my ingresses proxy pass. ",(0,a.kt)("strong",{parentName:"p"},"Note")," that we can now use the Docker DNS service to connect the container by it's name:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"location / {\n    proxy_pass http://wiki_en:3000/;\n  }\n")),(0,a.kt)("p",null,"And to restart the NGINX ingress into the same virtual network:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 8080:8080 -p 8081:8081 -v /opt/nginx_docker_ingress:/etc/nginx --network=wikinet --name nginx:1.25.0-alpine3.17\n")),(0,a.kt)("p",null,"The application is now locked inside the virtual network and the NGINX proxy works as an ingress directing traffic in."))}d.isMDXComponent=!0},82397:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/NGINX_Docker_Ingress_01-47a886649f4d6d590bc13bd7cab3f6e6.png"},69699:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-526887f388d51eb7c6cdecdbf57889ba.jpg"}}]);