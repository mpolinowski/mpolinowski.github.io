"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87573],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>g});var a=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function s(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=a.createContext({}),c=function(n){var e=a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=c(n.components);return a.createElement(l.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,l=n.parentName,p=s(n,["components","mdxType","originalType","parentName"]),m=c(t),g=o,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||r;return t?a.createElement(u,i(i({ref:e},p),{},{components:t})):a.createElement(u,i({ref:e},p))}));function g(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=n,s.mdxType="string"==typeof n?n:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6572:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={sidebar_position:4070,slug:"2022-09-24",title:"NGINX Ingress with Nomad",authors:"mpolinowski",tags:["LINUX","Security","NGINX","Nomad","Consul"],description:"Provision a containerized NGINX ingress using Hashicorp Nomad."},i=void 0,s={unversionedId:"DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/index",id:"DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/index",title:"NGINX Ingress with Nomad",description:"Provision a containerized NGINX ingress using Hashicorp Nomad.",source:"@site/docs/DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/index.md",sourceDirName:"DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress",slug:"/DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/2022-09-24",permalink:"/docs/DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/2022-09-24",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-09-24--nomad-nginx-ingress/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"},{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"}],version:"current",sidebarPosition:4070,frontMatter:{sidebar_position:4070,slug:"2022-09-24",title:"NGINX Ingress with Nomad",authors:"mpolinowski",tags:["LINUX","Security","NGINX","Nomad","Consul"],description:"Provision a containerized NGINX ingress using Hashicorp Nomad."},sidebar:"tutorialSidebar",previous:{title:"Hashicorp",permalink:"/docs/category/hashicorp"},next:{title:"Secure Timeserver - Deploying a NTS Server using Hashicorp Nomad",permalink:"/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/2022-09-22"}},l={},c=[{value:"NGINX Ingress with Nomad",id:"nginx-ingress-with-nomad",level:2},{value:"Preparation",id:"preparation",level:2},{value:"Certbot",id:"certbot",level:3},{value:"Nomad Job File",id:"nomad-job-file",level:2}],p={toc:c};function d(n){let{components:e,...r}=n;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TST, Hong Kong",src:t(86638).Z,width:"1500",height:"517"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nginx-ingress-with-nomad"},"NGINX Ingress with Nomad")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#preparation"},"Preparation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#certbot"},"Certbot")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#nomad-job-file"},"Nomad Job File"))),(0,o.kt)("h2",{id:"nginx-ingress-with-nomad"},"NGINX Ingress with Nomad"),(0,o.kt)("p",null,"Running several web applications on a single server usually requires a web proxy to handle to have a single ingress to your server that handles TLS encryption. I ",(0,o.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22/"},"already prepared a NGINX Ingress template")," that can be used to spin up an Ingress inside a Docker container:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/nginx_docker_ingress"},"Github Repository")),(0,o.kt)("p",null,"Let's migrate this to Nomad."),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("h3",{id:"certbot"},"Certbot"),(0,o.kt)("p",null,"First I need to create an TLS certificate with ",(0,o.kt)("a",{parentName:"p",href:"https://certbot.eff.org/instructions?ws=other&os=debiantesting"},"certbot"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt install certbot\n")),(0,o.kt)("p",null,"Since NGINX will be running inside a docker container we cannot use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--nginx")," flag to auto-configure NGINX to use the certificate. Instead we have to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"certbot certonly --standalone\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Before")," running this command make sure that you have a domain pointing towards your server, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"my.server.com")," and you will have to have opened port ",(0,o.kt)("inlineCode",{parentName:"p"},"80"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"ufw allow 80/tcp")," to have certbot verify your domain!"),(0,o.kt)("p",null,"The command is going to create your certificates in ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/letsencrypt/live/my.server.com")," which we will have to provide as a volume to the Nomad process - check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/2022-09-22#hashicorp-nomad"},"Hashicorp Nomad Client Configuration")," for how to configure the client on your server that should run the NGNIX ingress."),(0,o.kt)("h2",{id:"nomad-job-file"},"Nomad Job File"),(0,o.kt)("p",null,"There are two ways on how to provide the NGINX configuration to your Docker container. The first one is to source your configuration in a Git repository and add it to your Nomad job using the ",(0,o.kt)("strong",{parentName:"p"},"Artifact")," stanza inside the ",(0,o.kt)("strong",{parentName:"p"},"Task")," directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'artifact {\n        source      = "git::git@my.gitlab.com:nginx_ingress.git"\n        destination = "local/nginx"\n        options {\n          sshkey = "${base64encode(file(pathexpand("/etc/nomad.d/.ssh/id_rsa")))}"\n          depth = 1\n        }\n      }\n')),(0,o.kt)("p",null,"Create an SSH key ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/nomad.d/.ssh/id_rsa")," and add it to your Git repository to allow Nomad to clone it. Now you can mount the ",(0,o.kt)("inlineCode",{parentName:"p"},"local/nginx")," directory as volumes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'config {\n        network_mode = "host"\n        image = "nginx:alpine"\n        ports = ["http","https"]\n        volumes = [\n          "local/nginx/configuration/conf.d:/etc/nginx/conf.d",\n          "local/nginx/configuration/ssl:/etc/nginx/ssl",\n          "local/nginx/configuration/nginx.conf:/etc/nginx/nginx.conf"\n        ]\n      }\n')),(0,o.kt)("p",null,"But I don't want to create another repo and just use the ",(0,o.kt)("strong",{parentName:"p"},"Template")," stanza to generate the entire configuration from my job file:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"nginx","_","ingress.nomad")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'job "nginx_ingress" {\n  datacenters = ["nginxNTS"]\n\n  group "nginx" {\n    count = 1\n\n    network {\n      mode = "host"\n      port "http" {\n          static = "80"\n      }\n      port "https" {\n          static = "443"\n      }\n    }\n\n    service {\n        name = "nginx-ingress"\n        port = "http"\n\n        check {\n            name     = "HTTP Health"\n            path     = "/"\n            type     = "http"\n            protocol = "http"\n            interval = "10s"\n            timeout  = "2s"\n        }\n    }\n\n    volume "letsencrypt" {\n        type      = "host"\n        read_only = true\n        source    = "letsencrypt"\n    }\n\n    task "ingress_container" {\n      driver = "docker"\n\n      volume_mount {\n            volume      = "letsencrypt"\n            destination = "/opt/letsencrypt" #in the container\n            read_only   = false\n      }\n\n      config {\n        network_mode = "host"\n        image = "nginx:alpine"\n        ports = ["http","https"]\n        volumes = [\n          "local/nginx/nginx.conf:/etc/nginx/nginx.conf",\n          "local/nginx/dhparam.pem:/etc/nginx/ssl/dhparam.pem",\n          "local/nginx/ssl-params.conf:/etc/nginx/ssl/ssl-params.conf",\n          "local/nginx/default.conf:/etc/nginx/conf.d/default.conf",\n          "local/nginx/buffers.conf:/etc/nginx/conf.d/buffers.conf",\n          "local/nginx/timeouts.conf:/etc/nginx/conf.d/timeouts.conf",\n          "local/nginx/header.conf:/etc/nginx/conf.d/header.conf",\n          "local/nginx/cache.conf:/etc/nginx/conf.d/cache.conf",\n          "local/nginx/gzip.conf:/etc/nginx/conf.d/gzip.conf",\n          "local/nginx/index.html:/usr/share/nginx/html/index.html"\n        ]\n      }\n\n      template {\n        data = <<EOH\nuser  nginx;\nworker_processes  auto;\nworker_rlimit_nofile  15000;\npid  /var/run/nginx.pid;\ninclude /usr/share/nginx/modules/*.conf;\n\n\nevents {\n    worker_connections  2048;\n    multi_accept on;\n    use epoll;\n}\n\n\nhttp {\n    default_type   application/octet-stream;\n    # access_log   /var/log/nginx/access.log;\n    # activate the server access log only when needed\n    access_log     off;\n    error_log      /var/log/nginx/error.log;\n    # don\'t display server version on error pages\n    server_tokens  off;\n    server_names_hash_bucket_size 64;\n    include        /etc/nginx/mime.types;\n    sendfile       on;\n    tcp_nopush     on;\n    tcp_nodelay    on;\n\n    charset utf-8;\n    source_charset utf-8;\n    charset_types text/xml text/plain text/vnd.wap.wml application/javascript application/rss+xml;\n    \n    include /etc/nginx/conf.d/default.conf;\n    include /etc/nginx/conf.d/buffers.conf;\n    include /etc/nginx/conf.d/timeouts.conf;\n    include /etc/nginx/conf.d/cache.conf;\n    include /etc/nginx/conf.d/gzip.conf;\n}\n        EOH\n\n        destination = "local/nginx/nginx.conf"\n      }\n\n      template {\n        data = <<EOH\nserver {\n    listen 80;\n    listen [::]:80;\n\n    server_name my.server.com;\n\n    return 301 https://$server_name$request_uri;\n}\n\n\nserver {\n    listen 443 ssl http2 default_server;\n    listen [::]:443 ssl;\n    ssl_certificate /opt/letsencrypt/live/my.server.com/fullchain.pem;\n    ssl_certificate_key /opt/letsencrypt/live/my.server.com/privkey.pem;\n    include ssl/ssl-params.conf;\n    include /etc/nginx/conf.d/header.conf;\n\n    server_name  my.server.com;\n\n    #access_log  /var/log/nginx/host.access.log  main;\n\n    location / {\n        root   /usr/share/nginx/html;\n        index  index.html index.htm;\n    }\n\n    #error_page  404              /404.html;\n\n    # redirect server error pages to the static page /50x.html\n    #\n    error_page   500 502 503 504  /50x.html;\n    location = /50x.html {\n        root   /usr/share/nginx/html;\n    }\n}\n        EOH\n\n        destination = "local/nginx/default.conf"\n      }\n\n      template {\n        data = <<EOH\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World!</title>\n    <style>\n    html { color-scheme: light dark; }\n    body { width: 35em; margin: 0 auto;\n    font-family: Tahoma, Verdana, Arial, sans-serif; }\n    </style>\n</head>\n<body>\n    <h1>Hello World!</h1>\n</body>\n</html>\n        EOH\n\n        destination = "local/nginx/index.html"\n      }\n\n      template {\n        data = <<EOH\n-----BEGIN DH PARAMETERS-----\nMIICCAKCAgEAt59...\n...dfszADFDGV346dfzxg9AC=\n-----END DH PARAMETERS-----\n        EOH\n\n        destination = "local/nginx/dhparam.pem"\n      }\n\n      template {\n        data = <<EOH\nssl_protocols TLSv1.3;\nssl_prefer_server_ciphers on;\nssl_dhparam /etc/nginx/ssl/dhparam.pem;\nssl_ciphers ECDH+AESGCM:ECDH+CHACHA20:ECDH+AES256:ECDH+AES128:!aNULL:!SHA1:!AESCCM;\nssl_conf_command Options PrioritizeChaCha;\nssl_conf_command Ciphersuites TLS_AES_256_GCM_SHA384:TLS_AES_128_GCM_SHA256:TLS_CHACHA20_POLY1305_SHA256;\nssl_ecdh_curve secp384r1; # Requires nginx >= 1.1.0\nssl_session_timeout  10m;\nssl_session_cache shared:SSL:10m;\nssl_session_tickets off; # Requires nginx >= 1.5.9\nssl_stapling on; # Requires nginx >= 1.3.7\nssl_stapling_verify on; # Requires nginx => 1.3.7\nresolver 8.8.8.8 8.8.4.4 valid=300s;\nresolver_timeout 5s;\nadd_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;\nadd_header X-Frame-Options "";\nadd_header X-Content-Type-Options nosniff;\nadd_header X-XSS-Protection "1; mode=block";\n        EOH\n\n        destination = "local/nginx/ssl-params.conf"\n      }\n\n      template {\n        data = <<EOH\nclient_body_buffer_size 10k;\nclient_header_buffer_size 1k;\nclient_max_body_size 8m;\nlarge_client_header_buffers 2 1k;\n# Directive needs to be increased for certain site types to prevent ERROR 400\n# large_client_header_buffers 4 32k;\n        EOH\n\n        destination = "local/nginx/buffers.conf"\n      }\n\n      template {\n        data = <<EOH\nadd_header                Cache-Control  "public, must-revalidate, proxy-revalidate, max-age=0";\nproxy_set_header          X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_set_header          X-NginX-Proxy true;\nproxy_set_header          X-Real-IP $remote_addr;\nproxy_set_header          X-Forwarded-Proto http;\nproxy_hide_header         X-Frame-Options;\nproxy_set_header          Accept-Encoding "";\nproxy_http_version        1.1;\nproxy_set_header          Upgrade $http_upgrade;\nproxy_set_header          Connection "upgrade";\nproxy_set_header          Host $host;\nproxy_cache_bypass        $http_upgrade;\nproxy_max_temp_file_size  0;\nproxy_redirect            off;\nproxy_read_timeout        240s;\n        EOH\n\n        destination = "local/nginx/header.conf"\n      }\n\n      template {\n        data = <<EOH\nopen_file_cache max=1500 inactive=20s;\nopen_file_cache_valid 30s;\nopen_file_cache_min_uses 5;\nopen_file_cache_errors off;\n        EOH\n\n        destination = "local/nginx/cache.conf"\n      }\n\n      template {\n        data = <<EOH\nclient_header_timeout 3m;\nclient_body_timeout 3m;\nkeepalive_timeout 100;\nkeepalive_requests 1000;\nsend_timeout 3m;\n        EOH\n\n        destination = "local/nginx/timeouts.conf"\n      }\n\n      template {\n        data = <<EOH\ngzip on;\ngzip_disable "msie6";\ngzip_vary on;\ngzip_proxied any;\ngzip_comp_level 5;\ngzip_min_length 256;\ngzip_buffers 16 8k;\ngzip_http_version 1.1;\ngzip_types text/plain text/css application/json application/javascript\ntext/xml application/xml application/xml+rss text/javascript\nimage/svg+xml application/xhtml+xml application/atom+xml;\n        EOH\n\n        destination = "local/nginx/gzip.conf"\n      }\n\n    }\n  }\n}\n')))}d.isMDXComponent=!0},86638:(n,e,t)=>{t.d(e,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"}}]);