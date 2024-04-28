"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[50530],{902445:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=i(474848),s=i(28453);const o={sidebar_position:8010,slug:"2020-06-07",title:"Developing WikiJS in Docker",authors:"mpolinowski",tags:["Databases","Docker"]},l=void 0,t={id:"DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker/index",title:"Developing WikiJS in Docker",description:"Central, Hong Kong",source:"@site/docs/DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker/index.mdx",sourceDirName:"DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker",slug:"/DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker/2020-06-07",permalink:"/docs/DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker/2020-06-07",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker/index.mdx",tags:[{label:"Databases",permalink:"/docs/tags/databases"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8010,frontMatter:{sidebar_position:8010,slug:"2020-06-07",title:"Developing WikiJS in Docker",authors:"mpolinowski",tags:["Databases","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Infrastructure as Code",permalink:"/docs/DevOps/Provisioning/2020-07-13--infrastructure-as-code/2020-07-13"},next:{title:"Vanilla Forums Installation on Debian",permalink:"/docs/DevOps/Provisioning/2019-09-16--installing-vanilla-forum/2019-09-16"}},d={},c=[{value:"Preparations",id:"preparations",level:2},{value:"Dockerfile",id:"dockerfile",level:3},{value:"config.yml",id:"configyml",level:3},{value:"docker-compose.yml",id:"docker-composeyml",level:3},{value:"Spinning up Docker",id:"spinning-up-docker",level:2},{value:"Running the App",id:"running-the-app",level:3},{value:"Stopping the App",id:"stopping-the-app",level:3},{value:"Building production assets",id:"building-production-assets",level:2},{value:"Running the official Wiki.js Build",id:"running-the-official-wikijs-build",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Central, Hong Kong",src:i(934117).A+"",width:"1500",height:"542"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#preparations",children:"Preparations"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#dockerfile",children:"Dockerfile"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#configyml",children:"config.yml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#docker-composeyml",children:"docker-compose.yml"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#spinning-up-docker",children:"Spinning up Docker"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#running-the-app",children:"Running the App"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#stopping-the-app",children:"Stopping the App"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#building-production-assets",children:"Building production assets"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"preparations",children:"Preparations"}),"\n",(0,r.jsxs)(n.p,{children:["Based on the official ",(0,r.jsx)(n.a,{href:"https://github.com/Requarks/wiki/tree/dev/dev/containers",children:"WikiJS Docker Sample"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Start by cloning the ",(0,r.jsx)(n.a,{href:"https://codeload.github.com/Requarks/wiki/zip/dev",children:"WikiJS Repository"})," into a folder called ",(0,r.jsx)(n.code,{children:"wiki-source"}),". Continue by creating the following 3 files next to this folder:"]}),"\n",(0,r.jsx)(n.h3,{id:"dockerfile",children:"Dockerfile"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'FROM node:12\r\nLABEL maintainer "mpolinowski@gmail.com"\r\n\r\nRUN apt-get update && \\\r\n    apt-get install -y bash curl git python make g++ nano openssh-server gnupg && \\\r\n    mkdir -p /wiki\r\n\r\nWORKDIR /wiki\r\n\r\nENV dockerdev 1\r\nENV DEVDB postgres\r\n\r\nEXPOSE 3000\r\n\r\nCMD ["tail", "-f", "/dev/null"]\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"configyml",children:"config.yml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"port: 3000\r\nbindIP: 0.0.0.0\r\ndb:\r\n  type: postgres\r\n  host: db\r\n  port: 5432\r\n  user: wikijs\r\n  pass: wikijsrocks\r\n  db: wiki\r\nlogLevel: info\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"docker-composeyml",children:"docker-compose.yml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'version: "3"\r\nservices:\r\n  db:\r\n    container_name: wiki-db\r\n    image: postgres:9-alpine\r\n    environment:\r\n      POSTGRES_DB: wiki\r\n      POSTGRES_PASSWORD: wikijsrocks\r\n      POSTGRES_USER: wikijs\r\n    logging:\r\n      driver: "none"\r\n    volumes:\r\n      - db-data:/var/lib/postgresql/data\r\n    ports:\r\n      - "15432:5432"\r\n\r\n  adminer:\r\n    container_name: wiki-adminer\r\n    image: adminer:latest\r\n    logging:\r\n      driver: "none"\r\n    ports:\r\n      - "3001:8080"\r\n\r\n  wiki:\r\n    container_name: wiki-app\r\n    build:\r\n      context: ./wiki-source\r\n      dockerfile: ../Dockerfile\r\n    depends_on:\r\n      - db\r\n    ports:\r\n      - "3000:3000"\r\n    volumes:\r\n      - ./wiki-source:/wiki\r\n      - /wiki/node_modules\r\n      - /wiki/.git\r\n\r\n\r\nvolumes:\r\n  db-data:\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"spinning-up-docker",children:"Spinning up Docker"}),"\n",(0,r.jsx)(n.p,{children:"Run the build command to pull / build your images:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose build\n"})}),"\n",(0,r.jsx)(n.h3,{id:"running-the-app",children:"Running the App"}),"\n",(0,r.jsx)(n.p,{children:"Run the following commands:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose -f docker-compose.yml up -d\r\ndocker exec wiki-app npm install   # only necessary the first time\r\ndocker exec wiki-app npm run dev\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will start Wiki.js in dev mode. Client assets are compiled first (using Webpack), then the server will start automatically. Wait for this process to complete before loading the app!"}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"#building-production-assets",children:"how to build for production"})," below."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Run Wiki.js in Docker",src:i(348619).A+"",width:"881",height:"536"})}),"\n",(0,r.jsxs)(n.p,{children:["Browse to the site, using the configuration you defined in config.yml. For example, if using port 3000 on your local machine, you would browse to ",(0,r.jsx)(n.code,{children:"http://localhost:3000/"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The first time you load the wiki, you'll get greeted with the setup wizard. Complete all the steps to finish the installation."}),"\n",(0,r.jsx)(n.h3,{id:"stopping-the-app",children:"Stopping the App"}),"\n",(0,r.jsx)(n.p,{children:"Run the following to shut down the app"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose -f docker-compose.yml stop\n"})}),"\n",(0,r.jsx)(n.p,{children:"To completely remove the containers run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose -f docker-compose.yml down\n"})}),"\n",(0,r.jsx)(n.p,{children:"To wipe the database as well, use:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker-compose -f docker-compose.yml down --volumes\n"})}),"\n",(0,r.jsx)(n.h2,{id:"building-production-assets",children:"Building production assets"}),"\n",(0,r.jsx)(n.p,{children:"Once you're ready to deploy your changes, you need to build the client assets into a production optimized bundle:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec wiki-app npm run build\r\ndocker exec wiki-app npm run start\n"})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-official-wikijs-build",children:"Running the official Wiki.js Build"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"wikijs-docker-compose.yaml"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'version: "3"\r\nservices:\r\n\r\n  db:\r\n    image: postgres:11-alpine\r\n    environment:\r\n      POSTGRES_DB: wiki\r\n      POSTGRES_PASSWORD: wikijsrocks\r\n      POSTGRES_USER: wikijs\r\n    logging:\r\n      driver: "none"\r\n    restart: unless-stopped\r\n    volumes:\r\n      - db-data:/var/lib/postgresql/data\r\n\r\n  wiki:\r\n    image: requarks/wiki:2\r\n    depends_on:\r\n      - db\r\n    environment:\r\n      DB_TYPE: postgres\r\n      DB_HOST: db\r\n      DB_PORT: 5432\r\n      DB_USER: wikijs\r\n      DB_PASS: wikijsrocks\r\n      DB_NAME: wiki\r\n    restart: unless-stopped\r\n    ports:\r\n      - "80:3000"\r\n\r\nvolumes:\r\n  db-data:\n'})}),"\n",(0,r.jsx)(n.p,{children:"Build with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker-compose -f wikijs-docker-compose.yaml up -d\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},348619:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/Wikijs_Docker_01-728a7772f2d77d2d01d869f74f61d5a7.png"},934117:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-072d216b41518884adc06d90cec9a075.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>t});var r=i(296540);const s={},o=r.createContext(s);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);