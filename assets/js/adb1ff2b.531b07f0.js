"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[70159],{736691:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(474848),s=r(28453);const i={sidebar_position:5030,slug:"2022-10-16",title:"Provision OSticket with Docker",authors:"mpolinowski",tags:["LINUX","Docker","osTicket"],description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service"},a=void 0,o={id:"DevOps/Provisioning/2022-10-16--os-ticket-docker/index",title:"Provision OSticket with Docker",description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service",source:"@site/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/index.md",sourceDirName:"DevOps/Provisioning/2022-10-16--os-ticket-docker",slug:"/DevOps/Provisioning/2022-10-16--os-ticket-docker/2022-10-16",permalink:"/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/2022-10-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"osTicket",permalink:"/docs/tags/os-ticket"}],version:"current",sidebarPosition:5030,frontMatter:{sidebar_position:5030,slug:"2022-10-16",title:"Provision OSticket with Docker",authors:"mpolinowski",tags:["LINUX","Docker","osTicket"],description:"Use Docker, Docker-Compose and Nomad to provide an OSTicket Service"},sidebar:"tutorialSidebar",previous:{title:"OSticket REST API Calls",permalink:"/docs/DevOps/Provisioning/2022-10-27--os-ticket-rest-api/2022-10-27"},next:{title:"Bind9 Server Configuration",permalink:"/docs/DevOps/Provisioning/2022-01-27--bind9-configuration/2022-01-27"}},c={},d=[{value:"Installation using Docker",id:"installation-using-docker",level:2},{value:"Customize",id:"customize",level:2},{value:"Adding Plugins",id:"adding-plugins",level:3},{value:"Language Packs",id:"language-packs",level:3},{value:"Docker-Compose",id:"docker-compose",level:2},{value:"Build a customized OSTicket Image",id:"build-a-customized-osticket-image",level:2},{value:"Backup &amp; Restore",id:"backup--restore",level:2},{value:"Restore from MySQL Dump",id:"restore-from-mysql-dump",level:3},{value:"Create a MySQL Dump",id:"create-a-mysql-dump",level:3}];function l(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Shenzhen, China",src:r(806393).A+"",width:"1500",height:"567"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#installation-using-docker",children:"Installation using Docker"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#customize",children:"Customize"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#adding-plugins",children:"Adding Plugins"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#language-packs",children:"Language Packs"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#docker-compose",children:"Docker-Compose"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#build-a-customized-osticket-image",children:"Build a customized OSTicket Image"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#backup--restore",children:"Backup & Restore"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#restore-from-mysql-dump",children:"Restore from MySQL Dump"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#create-a-mysql-dump",children:"Create a MySQL Dump"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Update"}),": The used Docker image in this tutorial is ",(0,n.jsx)(t.a,{href:"https://github.com/mpolinowski/osticket-nomad/issues/1",children:"currently not compatible with the latest version of OSTicket (v1.17.3)"})," => I recommend switching to ",(0,n.jsx)(t.a,{href:"/docs/DevOps/Provisioning/2023-03-09--os-ticket-docker-2023/2023-03-09",children:"this"})," instead."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation-using-docker",children:"Installation using Docker"}),"\n",(0,n.jsxs)(t.p,{children:["Pull ",(0,n.jsx)(t.a,{href:"https://docs.osticket.com/en/latest/Getting%20Started/Installation.html",children:"osTicket"})," Image from ",(0,n.jsx)(t.a,{href:"https://hub.docker.com/r/osticket/osticket/",children:"hub.docker.com"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker pull osticket/osticket:latest\n"})}),"\n",(0,n.jsx)(t.p,{children:"Make sure you have a MySQL container running that osTicket can use to store its data:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker pull mariadb:latest\n"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run --name osticket_mysql -d -e MYSQL_ROOT_PASSWORD=secret \\\r\n-e MYSQL_USER=osticket -e MYSQL_PASSWORD=secret -e MYSQL_DATABASE=osticket mariadb:latest\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now run this image and link the MySQL container:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker run --name osticket -d --link osticket_mysql:mysql -p 8080:80 osticket/osticket\n"})}),"\n",(0,n.jsx)(t.p,{children:"Wait for the setup process to finish - this will download the latest version of OSticket and might take a while:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker logs osticket\r\nCloning into '.'...\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Once installation is completed then browse to your osTicket staff control panel at ",(0,n.jsx)(t.code,{children:"http://localhost:8080/scp"}),". Login with default admin user & password:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["username: ",(0,n.jsx)(t.code,{children:"ostadmin"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["password: ",(0,n.jsx)(t.code,{children:"Admin1"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"customize",children:"Customize"}),"\n",(0,n.jsx)(t.h3,{id:"adding-plugins",children:"Adding Plugins"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker exec -ti osticket /bin/bash\n"})}),"\n",(0,n.jsx)(t.p,{children:"All plugins can be found in the following directory. Use a volume mount to add community plugins:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ls -la /var/www/src/public/include/plugins\r\ntotal 2908\r\ndrwxr-xr-x 14 www-data www-data    4096 Oct 17 09:07 .\r\ndrwxr-xr-x 12 www-data www-data    4096 Oct 17 09:06 ..\r\ndrwxr-xr-x  8 www-data www-data    4096 Oct 17 09:06 .git\r\n-rw-r--r--  1 www-data www-data     364 Oct 17 09:06 .gitignore\r\n-rw-r--r--  1 www-data www-data       0 Oct 17 09:06 .keep\r\n-rw-r--r--  1 www-data www-data   18026 Oct 17 09:06 LICENSE\r\n-rw-r--r--  1 www-data www-data    1023 Oct 17 09:06 README.md\r\ndrwxr-xr-x  3 www-data www-data    4096 Oct 17 09:06 audit\r\ndrwxr-xr-x  3 www-data www-data    4096 Oct 17 09:07 auth-2fa\r\ndrwxr-xr-x  3 www-data www-data    4096 Oct 17 09:07 auth-cas\r\ndrwxr-xr-x  3 www-data www-data    4096 Oct 17 09:07 auth-ldap\r\ndrwxr-xr-x  3 www-data www-data    4096 Oct 17 09:07 auth-oauth2\r\ndrwxr-xr-x  2 www-data www-data    4096 Oct 17 09:06 auth-passthru\r\ndrwxr-xr-x  2 www-data www-data    4096 Oct 17 09:06 auth-password-policy\r\n-rw-r--r--  1 www-data www-data     228 Oct 17 09:06 composer.json\r\n-rw-r--r--  1 www-data www-data   41176 Oct 17 09:07 composer.lock\r\n-rw-r--r--  1 www-data www-data 2808725 Oct 17 09:07 composer.phar\r\ndrwxr-xr-x  2 www-data www-data    4096 Oct 17 09:06 doc\r\ndrwxr-xr-x 15 www-data www-data    4096 Oct 17 09:07 lib\r\n-rw-r--r--  1 www-data www-data   24618 Oct 17 09:06 make.php\r\ndrwxr-xr-x  2 www-data www-data    4096 Oct 17 09:06 storage-fs\r\ndrwxr-xr-x  3 www-data www-data    4096 Oct 17 09:07 storage-s3\r\n-rw-r--r--  1 www-data www-data    1194 Oct 17 09:06 updates.pem\n"})}),"\n",(0,n.jsx)(t.p,{children:"Install them from Manage/Plugins:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Provision OSticket with Docker",src:r(365752).A+"",width:"950",height:"254"})}),"\n",(0,n.jsx)(t.h3,{id:"language-packs",children:"Language Packs"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://osticket.com/download/",children:"Download the language files"})," and place them into:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"ls -la /var/www/src/public/include/i18n/\r\ntotal 44\r\ndrwxr-xr-x  4 www-data www-data  4096 Oct 17 10:14 .\r\ndrwxr-xr-x 12 www-data www-data  4096 Oct 17 10:14 ..\r\n-rw-r--r--  1 www-data www-data  1097 Oct 17 10:14 README.md\r\ndrwxr-xr-x  4 www-data www-data  4096 Oct 17 10:14 en_US\r\n-rw-r--r--  1 www-data www-data 20586 Oct 17 10:14 langs.php\r\ndrwxr-xr-x  3 www-data www-data  4096 Oct 17 10:14 vendor\n"})}),"\n",(0,n.jsx)(t.p,{children:"by binding them into your container:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"docker-compose.yml"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yml",children:"volumes:\r\n    - type: bind\r\n      source: ./src/include/i18n/de.phar\r\n      target: /var/www/src/public/include/i18n/de.phar\r\n      read_only: true\n"})}),"\n",(0,n.jsx)(t.p,{children:"And select them from the Admin panel:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Provision OSticket with Docker",src:r(711507).A+"",width:"955",height:"417"})}),"\n",(0,n.jsx)(t.h2,{id:"docker-compose",children:"Docker-Compose"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yml",children:"version: '3.8'\r\nservices:\r\n\r\n  osticket-app:\r\n    image: osticket/osticket:latest\r\n    container_name: osticket\r\n    volumes:\r\n      - type: bind\r\n        source: ./src/include/i18n/de.phar\r\n        target: /var/www/src/public/include/i18n/de.phar\r\n        read_only: true\r\n    environment:\r\n      - CONTAINER_NAME=osticket\r\n      - MYSQL_USER=osticket\r\n      - MYSQL_HOST=osticket-db\r\n      - MYSQL_PASSWORD=secret\r\n      - MYSQL_DATABASE=osticket\r\n    ports:\r\n      - 8080:80\r\n    depends_on:\r\n      - osticket-db\r\n    networks:\r\n      - services\r\n    links:\r\n      - osticket-db\r\n    restart: unless-stopped\r\n\r\n  osticket-db:\r\n    image: mariadb:latest\r\n    container_name: osticket-db\r\n    volumes:\r\n      - /opt/osticket/db:/var/lib/mysql\r\n    environment:\r\n      - MYSQL_ROOT_PASSWORD=secret\r\n      - MYSQL_USER=osticket\r\n      - MYSQL_PASSWORD=secret\r\n      - MYSQL_DATABASE=osticket\r\n      - CONTAINER_NAME=osticket-db\r\n    networks:\r\n      - services\r\n    restart: unless-stopped\r\n\r\nnetworks:\r\n  services:\r\n    external: false\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note"}),": The volume mount ",(0,n.jsx)(t.code,{children:"/opt/osticket/db:/var/lib/mysql"})," makes sure that all data written to MariaDB will be persisted. Make sure the host path ",(0,n.jsx)(t.code,{children:"/opt/osticket/db"})," exists and can be written to ~ or just change it to a dir that fulfills the requirement."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"build-a-customized-osticket-image",children:"Build a customized OSTicket Image"}),"\n",(0,n.jsx)(t.p,{children:"The docker compose file contains a volume mount for the language file I added:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yml",children:"volumes:\r\n  - type: bind\r\n    source: ./src/include/i18n/de.phar\r\n    target: /var/www/src/public/include/i18n/de.phar\r\n    read_only: true\n"})}),"\n",(0,n.jsxs)(t.p,{children:['Actually, there are a lot more files that I need to mount - logos, styles and additional scripts. It makes sense for me to simply "bake" all of them into a customized image of OSTicket using the ',(0,n.jsx)(t.code,{children:"docker build"})," command."]}),"\n",(0,n.jsxs)(t.p,{children:["Here I ran into a few issues with the official docker image and found this fork of it that is based on a ",(0,n.jsx)(t.a,{href:"https://github.com/devinsolutions/docker-osticket/blob/master/Dockerfile",children:"PHP8 Alpine Linux image"})," that is much more suitable for my task. You can build this image of OSTicket with:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker build -t my/osticket .\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we can use this image to add our customizations with a ",(0,n.jsx)(t.strong,{children:"Dockerfile"})]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-dockerfile",children:"FROM instar/osticket:latest\r\n\r\n# add all your files here, e.g.\r\nCOPY ./src/include/staff/header.inc.php /var/www/html/include/staff/header.inc.php\r\n#...\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now build this image and tag it according to your Docker Registry setup:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker build -t my.gitlab.com:12345/server_management/my-osticket:latest .\n"})}),"\n",(0,n.jsxs)(t.p,{children:["When you pull this image you can still use the ",(0,n.jsx)(t.code,{children:"docker-compose.yml"})," file from above - but you no longer have to provide the volumen mounts and source files. Everything is baked in!"]}),"\n",(0,n.jsx)(t.h2,{id:"backup--restore",children:"Backup & Restore"}),"\n",(0,n.jsxs)(t.p,{children:["The database image uses a volume mount to persist all written data ",(0,n.jsx)(t.code,{children:"/opt/osticket/db:/var/lib/mysql"}),". You can use it to drop in an SQL dump to ",(0,n.jsx)(t.code,{children:"/opt/osticket/db"})," enter the MariaDB image:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"docker exec -ti osticket-db /bin/bash\n"})}),"\n",(0,n.jsx)(t.p,{children:"And restore your old OSTicket state:"}),"\n",(0,n.jsx)(t.h3,{id:"restore-from-mysql-dump",children:"Restore from MySQL Dump"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mysql -uosticket -p osticket < Ticketsystem_2022-10-20.sql\n"})}),"\n",(0,n.jsx)(t.h3,{id:"create-a-mysql-dump",children:"Create a MySQL Dump"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"mysqldump -uosticket -p osticket > backup-file.sql\r\nEnter password: secret\n"})})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},365752:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/OSTicket_Docker_01-356106685fea9654593cbdf47b9676c9.png"},711507:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/OSTicket_Docker_02-b60bc54f63129d8be062ea36edb999e2.png"},806393:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-983e9af3d84f5fb9ebad02646e63767d.jpg"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(296540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);