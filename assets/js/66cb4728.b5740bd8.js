"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[19505],{912290:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=i(474848),t=i(28453);const s={sidebar_position:4970,slug:"2023-03-09",title:"Provision OSticket with Docker (2023)",authors:"mpolinowski",tags:["LINUX","Docker","osTicket"],description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service"},o="Provision OSticket with Docker (2023)",c={id:"DevOps/Provisioning/2023-03-09--os-ticket-docker-2023/index",title:"Provision OSticket with Docker (2023)",description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service",source:"@site/docs/DevOps/Provisioning/2023-03-09--os-ticket-docker-2023/index.md",sourceDirName:"DevOps/Provisioning/2023-03-09--os-ticket-docker-2023",slug:"/DevOps/Provisioning/2023-03-09--os-ticket-docker-2023/2023-03-09",permalink:"/docs/DevOps/Provisioning/2023-03-09--os-ticket-docker-2023/2023-03-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2023-03-09--os-ticket-docker-2023/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"osTicket",permalink:"/docs/tags/os-ticket"}],version:"current",sidebarPosition:4970,frontMatter:{sidebar_position:4970,slug:"2023-03-09",title:"Provision OSticket with Docker (2023)",authors:"mpolinowski",tags:["LINUX","Docker","osTicket"],description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service"},sidebar:"tutorialSidebar",previous:{title:"ntfy Notification Service",permalink:"/docs/DevOps/Provisioning/2024-01-17--ntfy-notification-service/2024-01-17"},next:{title:"Gatsby Blog with a MeiLi Search Backend",permalink:"/docs/DevOps/Provisioning/2023-02-13--meili-search-gatsby/2023-02-13"}},a={},d=[{value:"Build the OSTicket Image",id:"build-the-osticket-image",level:2},{value:"NGINX and PHP Configuration",id:"nginx-and-php-configuration",level:3},{value:"Execute the Dockerfile",id:"execute-the-dockerfile",level:3},{value:"Test the OSTicket Image",id:"test-the-osticket-image",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:i(18032).A+"",width:"1500",height:"567"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#provision-osticket-with-docker-2023",children:"Provision OSticket with Docker (2023)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#build-the-osticket-image",children:"Build the OSTicket Image"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nginx-and-php-configuration",children:"NGINX and PHP Configuration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#execute-the-dockerfile",children:"Execute the Dockerfile"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#test-the-osticket-image",children:"Test the OSTicket Image"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"provision-osticket-with-docker-2023",children:"Provision OSticket with Docker (2023)"}),"\n",(0,r.jsxs)(n.p,{children:["How to use the ",(0,r.jsx)(n.a,{href:"https://github.com/devinsolutions/docker-osticket",children:"docker-osticket"})," repository by ",(0,r.jsx)(n.a,{href:"https://github.com/devinsolutions",children:"Devin Solutions"})," to build a Docker image for running ",(0,r.jsx)(n.strong,{children:"OSTicket version 1.17.3"})," of ",(0,r.jsx)(n.a,{href:"http://osticket.com/",children:"osTicket"}),". osTicket is being served by ",(0,r.jsx)(n.a,{href:"http://wiki.nginx.org/Main",children:"nginx"})," using ",(0,r.jsx)(n.a,{href:"http://php-fpm.org/",children:"PHP-FPM"})," with ",(0,r.jsx)(n.strong,{children:"PHP 8.1"}),". ",(0,r.jsx)(n.a,{href:"http://php.net/manual/en/function.mail.php",children:"PHP mail function"})," is configured to use ",(0,r.jsx)(n.a,{href:"http://msmtp.sourceforge.net/",children:"msmtp"})," to send out-going messages."]}),"\n",(0,r.jsx)(n.h2,{id:"build-the-osticket-image",children:"Build the OSTicket Image"}),"\n",(0,r.jsxs)(n.p,{children:["Start by editing the ",(0,r.jsx)(n.a,{href:"https://github.com/devinsolutions/docker-osticket/blob/master/Dockerfile",children:"Dockerfile"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Choose a base image, e.g. ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/layers/library/php/8.1-fpm-alpine3.16/images/sha256-4cdef9838f0930ffd5874f678ea001f3ea9dd96741c2cd2dcf7dd6b2e4f4acdb?context=explore",children:"php:8.1-fpm-alpine3.16"})]}),"\n",(0,r.jsxs)(n.li,{children:["Set the OSTicket Version, e.g. ",(0,r.jsx)(n.a,{href:"https://github.com/osTicket/osTicket/releases/tag/v1.17.3",children:"v1.17.3"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Download the source code: ",(0,r.jsx)(n.code,{children:"wget https://github.com/osTicket/osTicket/releases/download/v1.17.3/osTicket-v1.17.3.zip"})]}),"\n",(0,r.jsxs)(n.li,{children:["Check the SHA265 hash by running: ",(0,r.jsx)(n.code,{children:"sha256sum osTicket-v1.17.3.zip"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Add / remove languages and plugins you want to use."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Now you can edit the file accordingly by setting the base image:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"FROM php:8.1-fpm-alpine3.16\n"})}),"\n",(0,r.jsx)(n.p,{children:"and the OSTicket release version with hash:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"ENV OSTICKET_VERSION=1.17.3 \\\r\n    OSTICKET_SHA256SUM=be3ade536a19b875e16fe0d9716e07f3897f5c0cdbd4efe4ff17ab262d98bed3\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nginx-and-php-configuration",children:"NGINX and PHP Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["As part of the follow image build the ",(0,r.jsx)(n.code,{children:"root"})," folder will from the ",(0,r.jsx)(n.a,{href:"https://github.com/devinsolutions/docker-osticket",children:"repository"})," will be copied into your OSTicket image. This folder contains both the NGINX webproxy and PHP configuration files that you might want to edit:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/devinsolutions/docker-osticket/blob/master/root/usr/local/etc/php/php.ini",children:"php.ini"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/devinsolutions/docker-osticket/blob/master/root/etc/nginx/nginx.conf",children:"nginx.conf"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["I changed the NGINX server configuration to use the port ",(0,r.jsx)(n.code,{children:"7777"})," for the web front:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"server {\r\n    listen 7777;\r\n    server_name localhost;\n"})}),"\n",(0,r.jsx)(n.p,{children:"The port you use here will be the port you have to open (see Docker-Compose below) to be able to access the frontend."}),"\n",(0,r.jsx)(n.h3,{id:"execute-the-dockerfile",children:"Execute the Dockerfile"}),"\n",(0,r.jsx)(n.p,{children:"You can now build the OSTicket image by creating a shell script (or just run the command directly):"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"build_osticket.sh"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#!/bin/sh\r\n# Build the osticket image\r\ndocker build -t mycompany/osticket .\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Replace"})," the ",(0,r.jsx)(n.code,{children:"mycompany/osticket"})," tag here and further below with the image name you want to use."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Where ",(0,r.jsx)(n.code,{children:"."})," has to point to your Dockerfile:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'FROM php:8.1-fpm-alpine3.16\r\nRUN set -ex; \\\r\n    \\\r\n    export CFLAGS="-Os"; \\\r\n    export CPPFLAGS="${CFLAGS}"; \\\r\n    export LDFLAGS="-Wl,--strip-all"; \\\r\n    \\\r\n    # Runtime dependencies\r\n    apk add --no-cache \\\r\n        c-client \\\r\n        icu \\\r\n        libintl \\\r\n        libpng \\\r\n        libzip \\\r\n        msmtp \\\r\n        nginx \\\r\n        openldap \\\r\n        runit \\\r\n    ; \\\r\n    \\\r\n    # Build dependencies\r\n    apk add --no-cache --virtual .build-deps \\\r\n        ${PHPIZE_DEPS} \\\r\n        gettext-dev \\\r\n        icu-dev \\\r\n        imap-dev \\\r\n        libpng-dev \\\r\n        libzip-dev \\\r\n        openldap-dev \\\r\n    ; \\\r\n    \\\r\n    # Install PHP extensions\r\n    docker-php-ext-configure imap --with-imap-ssl; \\\r\n    docker-php-ext-install -j "$(nproc)" \\\r\n        gd \\\r\n        gettext \\\r\n        imap \\\r\n        intl \\\r\n        ldap \\\r\n        mysqli \\\r\n        sockets \\\r\n        zip \\\r\n    ; \\\r\n    pecl install apcu; \\\r\n    docker-php-ext-enable \\\r\n        apcu \\\r\n        opcache \\\r\n    ; \\\r\n    \\\r\n    # Create msmtp log\r\n    touch /var/log/msmtp.log; \\\r\n    chown www-data:www-data /var/log/msmtp.log; \\\r\n    \\\r\n    # Create data dir\r\n    mkdir /var/lib/osticket; \\\r\n    \\\r\n    # Clean up\r\n    apk del .build-deps; \\\r\n    rm -rf /tmp/pear /var/cache/apk/*\r\n# DO NOT FORGET TO CHECK THE LANGUAGE PACK DOWNLOAD URL BELOW\r\nENV OSTICKET_VERSION=1.17.3 \\\r\n    OSTICKET_SHA256SUM=be3ade536a19b875e16fe0d9716e07f3897f5c0cdbd4efe4ff17ab262d98bed3\r\n    # OSTICKET_VERSION=1.17.2 \\\r\n    # OSTICKET_SHA256SUM=53aa6349c0ee6367d4370cc663a8047d3038f5e0d3668f42b3f90f20534fb717\r\n    # OSTICKET_VERSION=1.17.1 \\\r\n    # OSTICKET_SHA256SUM=0c83bade36906d31680ee47ed3c062052d2671bcdf9823bbeb78eeb33d30f801\r\n    # OSTICKET_VERSION=1.17 \\\r\n    # OSTICKET_SHA256SUM=296d55cc50782411f0ba81101bc64fc4f6ac65a37772fd75bb5f4dc04d8b364d\r\nRUN set -ex; \\\r\n    \\\r\n    wget -q -O osTicket.zip https://github.com/osTicket/osTicket/releases/download/\\\r\nv${OSTICKET_VERSION}/osTicket-v${OSTICKET_VERSION}.zip; \\\r\n    echo "${OSTICKET_SHA256SUM}  osTicket.zip" | sha256sum -c; \\\r\n    unzip osTicket.zip \'upload/*\'; \\\r\n    rm osTicket.zip; \\\r\n    mkdir /usr/local/src; \\\r\n    mv upload /usr/local/src/osticket; \\\r\n    # Hard link the sources to the public directory\r\n    cp -al /usr/local/src/osticket/. /var/www/html; \\\r\n    # Remove setup\r\n    rm -r /var/www/html/setup; \\\r\n    \\\r\n    for lang in ar_EG ar_SA az bg bn bs ca cs da de el es_AR es_ES es_MX et eu fa fi fr gl he hi \\\r\n        hr hu id is it ja ka km ko lt lv mk mn ms nl no pl pt_BR pt_PT ro ru sk sl sq sr sr_CS \\\r\n        sv_SE sw th tr uk ur_IN ur_PK vi zh_CN zh_TW; do \\\r\n        # This URL is the same as what is used by the official osTicket Downloads page. This URL is\r\n        # used even for minor versions >= 14.\r\n        wget -q -O /var/www/html/include/i18n/${lang}.phar \\\r\n            https://s3.amazonaws.com/downloads.osticket.com/lang/1.14.x/${lang}.phar; \\\r\n    done\r\nRUN set -ex; \\\r\n    \\\r\n    for plugin in audit auth-2fa auth-ldap auth-passthru auth-password-policy storage-fs; do \\\r\n        wget -q -O /var/www/html/include/plugins/${plugin}.phar \\\r\n            https://s3.amazonaws.com/downloads.osticket.com/plugin/${plugin}.phar; \\\r\n    done; \\\r\n    for plugin in auth-oauth2 storage-s3; do \\\r\n        wget -q -O /var/www/html/include/plugins/${plugin}.phar \\\r\n            https://s3.amazonaws.com/downloads.osticket.com/plugin/1.17.x/${plugin}.phar; \\\r\n    done\r\nCOPY root /\r\nCMD ["start"]\r\nSTOPSIGNAL SIGTERM\r\nEXPOSE 80\r\nHEALTHCHECK CMD curl -fIsS http://localhost/ || exit 1\n'})}),"\n",(0,r.jsx)(n.p,{children:"Verify that the image was build:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker images\r\nREPOSITORY         TAG                       IMAGE ID       CREATED          SIZE\r\nmycompany/osticket    latest                    4d07786f7685   28 minutes ago   265MB\r\n<none>             <none>                    c1a9187feeef   37 minutes ago   98.2MB\r\nphp                8.1-fpm-alpine3.16        8e60c32353e1   5 days ago       73.9MB\n"})}),"\n",(0,r.jsx)(n.h2,{id:"test-the-osticket-image",children:"Test the OSTicket Image"}),"\n",(0,r.jsx)(n.p,{children:"Verify that the image you just build actually works with Docker-Compose. Create the following compose file and run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose up\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"docker-compose.yml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"version: '3.8'\r\nservices:\r\n\r\n  osticket-app:\r\n    image: mycompany/osticket:latest\r\n    container_name: osticket\r\n    environment:\r\n      - CONTAINER_NAME=osticket\r\n      - MYSQL_USER=osticket\r\n      - MYSQL_HOST=maria-db\r\n      - MYSQL_PASSWORD=mypassword\r\n      - MYSQL_DATABASE=osticket\r\n      - INSTALL_SECRET=verysecret\r\n      - INSTALL_EMAIL=info@instar.de\r\n      - INSTALL_URL=https://my.domain.com/\r\n      - INSTALL_NAME=OSTicket\r\n      - ADMIN_FIRSTNAME=Mike\r\n      - ADMIN_LASTNAME=Polinowski\r\n      - ADMIN_EMAIL=m.polinowski@my.smtp-server.com\r\n      - CRON_INTERVAL=1\r\n      - SMTP_HOST=my.smtp-server.com\r\n      - SMTP_PORT=587\r\n      - SMTP_FROM=info@my.smtp-server.com\r\n      - SMTP_TLS=1\r\n    ports:\r\n      - 7777:7777\r\n    depends_on:\r\n      - osticket-db\r\n    networks:\r\n      - services\r\n    links:\r\n      - osticket-db\r\n    restart: unless-stopped\r\n\r\n  osticket-db:\r\n    image: mariadb:latest\r\n    container_name: maria-db\r\n    environment:\r\n      - MYSQL_ROOT_PASSWORD=myrootpassword\r\n      - MYSQL_USER=osticket\r\n      - MYSQL_PASSWORD=mypassword\r\n      - MYSQL_DATABASE=osticket\r\n      - CONTAINER_NAME=maria-db\r\n    networks:\r\n      - services\r\n    restart: unless-stopped\r\n\r\nnetworks:\r\n  services:\r\n    external: false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The web frontend will come up on ",(0,r.jsx)(n.code,{children:"localhost:7777"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Provision OSticket with Docker (2023)",src:i(521905).A+"",width:"838",height:"577"})}),"\n",(0,r.jsxs)(n.p,{children:["And the agent panel on ",(0,r.jsx)(n.code,{children:"http://localhost:7777/scp/login.php"})," - the default login is:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Username"}),": ",(0,r.jsx)(n.code,{children:"ostadmin"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Password"}),": ",(0,r.jsx)(n.code,{children:"Admin1"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Provision OSticket with Docker (2023)",src:i(591738).A+"",width:"1059",height:"526"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Provision OSticket with Docker (2023)",src:i(909315).A+"",width:"956",height:"324"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},521905:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/OSTicket_Docker_01-52d11625d5d4d2152799fa1ca62ed3bb.png"},591738:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/OSTicket_Docker_02-38d31c7a4435669dbd52520b7be3dc57.png"},909315:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/OSTicket_Docker_03-65eac2a74ffd1c878bdb41cacee2e8d2.png"},18032:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-983e9af3d84f5fb9ebad02646e63767d.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>c});var r=i(296540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);