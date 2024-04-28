"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[52425],{530387:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var o=r(474848),s=r(28453);const t={sidebar_position:7030,slug:"2020-10-01",title:"Installing OpenProject with Docker Compose",authors:"mpolinowski",tags:["LINUX","Docker","OpenProject"]},c=void 0,i={id:"DevOps/Provisioning/2020-10-01--installing-openproject-in-docker/index",title:"Installing OpenProject with Docker Compose",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Provisioning/2020-10-01--installing-openproject-in-docker/index.md",sourceDirName:"DevOps/Provisioning/2020-10-01--installing-openproject-in-docker",slug:"/DevOps/Provisioning/2020-10-01--installing-openproject-in-docker/2020-10-01",permalink:"/docs/DevOps/Provisioning/2020-10-01--installing-openproject-in-docker/2020-10-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2020-10-01--installing-openproject-in-docker/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"OpenProject",permalink:"/docs/tags/open-project"}],version:"current",sidebarPosition:7030,frontMatter:{sidebar_position:7030,slug:"2020-10-01",title:"Installing OpenProject with Docker Compose",authors:"mpolinowski",tags:["LINUX","Docker","OpenProject"]},sidebar:"tutorialSidebar",previous:{title:"Installing Wazuh with Docker Compose",permalink:"/docs/DevOps/Provisioning/2020-10-02--installing-wazuh-in-docker/2020-10-02"},next:{title:"Docker Compose Networking",permalink:"/docs/DevOps/Provisioning/2020-09-02--docker-compose-networking/2020-09-02"}},a={},d=[{value:"Docker Compose",id:"docker-compose",level:2},{value:"Docker-Compose File",id:"docker-compose-file",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Victoria Harbour, Hong Kong",src:r(594017).A+"",width:"1500",height:"509"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#docker-compose",children:"Docker Compose"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#docker-compose-file",children:"Docker-Compose File"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"docker-compose",children:"Docker Compose"}),"\n",(0,o.jsxs)(n.p,{children:["First, you must clone the ",(0,o.jsx)(n.a,{href:"https://openproject.com/",children:"OpenProject"})," repository:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone --depth=1 --branch=stable/11 https://github.com/opf/openproject\n"})}),"\n",(0,o.jsx)(n.p,{children:"Then, go into the OpenProject folder and you can launch all the services required by OpenProject with docker-compose:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After some time, you will be able to access OpenProject on ",(0,o.jsx)(n.code,{children:"http://localhost:8080"}),". The default username and password is login: ",(0,o.jsx)(n.strong,{children:"admin"}),", and password: ",(0,o.jsx)(n.strong,{children:"admin"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"You can stop the Compose stack by running:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose down\n"})}),"\n",(0,o.jsx)(n.h2,{id:"docker-compose-file",children:"Docker-Compose File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yml",children:'version: "3.8"\r\n\r\nnetworks:\r\n  frontend:\r\n  backend:\r\n\r\nvolumes:\r\n  pgdata:\r\n  opdata:\r\n\r\nx-op-restart-policy: &restart_policy\r\n  restart: unless-stopped\r\nx-op-image: &image\r\n  image: openproject/community:${TAG:-11}\r\nx-op-app: &app\r\n  <<: *image\r\n  <<: *restart_policy\r\n  environment:\r\n    - "RAILS_CACHE_STORE=memcache"\r\n    - "OPENPROJECT_CACHE__MEMCACHE__SERVER=cache:11211"\r\n    - "OPENPROJECT_RAILS__RELATIVE__URL__ROOT=${OPENPROJECT_RAILS__RELATIVE__URL__ROOT:-}"\r\n    - "DATABASE_URL=postgres://postgres:p4ssw0rd@db/openproject"\r\n    - "USE_PUMA=true"\r\n    # set to true to enable the email receiving feature. See ./docker/cron for more options\r\n    - "IMAP_ENABLED=false"\r\n  volumes:\r\n    - "opdata:/var/openproject/assets"\r\n\r\nservices:\r\n  db:\r\n    image: postgres:10\r\n    <<: *restart_policy\r\n    stop_grace_period: "3s"\r\n    volumes:\r\n      - "pgdata:/var/lib/postgresql/data"\r\n    environment:\r\n      - POSTGRES_PASSWORD=p4ssw0rd\r\n      - POSTGRES_DB=openproject\r\n    networks:\r\n      - backend\r\n\r\n  cache:\r\n    image: memcached\r\n    <<: *restart_policy\r\n    networks:\r\n      - backend\r\n\r\n  proxy:\r\n    <<: *image\r\n    <<: *restart_policy\r\n    command: "./docker/proxy"\r\n    ports:\r\n      - "6969:80"\r\n    environment:\r\n      - APP_HOST=web\r\n      - "OPENPROJECT_RAILS__RELATIVE__URL__ROOT=${OPENPROJECT_RAILS__RELATIVE__URL__ROOT:-}"\r\n    depends_on:\r\n      - web\r\n    networks:\r\n      - frontend\r\n\r\n  web:\r\n    <<: *app\r\n    command: "./docker/web"\r\n    networks:\r\n      - frontend\r\n      - backend\r\n    depends_on:\r\n      - db\r\n      - cache\r\n      - seeder\r\n\r\n  worker:\r\n    <<: *app\r\n    command: "./docker/worker"\r\n    networks:\r\n      - backend\r\n    depends_on:\r\n      - db\r\n      - cache\r\n      - seeder\r\n\r\n  cron:\r\n    <<: *app\r\n    command: "./docker/cron"\r\n    networks:\r\n      - backend\r\n    depends_on:\r\n      - db\r\n      - cache\r\n      - seeder\r\n\r\n  seeder:\r\n    <<: *app\r\n    command: "./docker/seeder"\r\n    restart: on-failure\r\n    networks:\r\n      - backend\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},594017:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-b57dcf7a42ddd712383aadde6d3ef4c8.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>i});var o=r(296540);const s={},t=o.createContext(s);function c(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);