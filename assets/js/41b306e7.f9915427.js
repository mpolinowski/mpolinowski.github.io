"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[96109],{837558:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var t=s(474848),i=s(28453);const o={sidebar_position:9020,slug:"2019-09-16",title:"Working with SQL Dumps",authors:"mpolinowski",tags:["SQL","Windows"]},r=void 0,a={id:"Development/Magento/2019-09-16--working-with-sql-dumps/index",title:"Working with SQL Dumps",description:"Harbin, China",source:"@site/docs/Development/Magento/2019-09-16--working-with-sql-dumps/index.mdx",sourceDirName:"Development/Magento/2019-09-16--working-with-sql-dumps",slug:"/Development/Magento/2019-09-16--working-with-sql-dumps/2019-09-16",permalink:"/docs/Development/Magento/2019-09-16--working-with-sql-dumps/2019-09-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-16--working-with-sql-dumps/index.mdx",tags:[{label:"SQL",permalink:"/docs/tags/sql"},{label:"Windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:9020,frontMatter:{sidebar_position:9020,slug:"2019-09-16",title:"Working with SQL Dumps",authors:"mpolinowski",tags:["SQL","Windows"]},sidebar:"tutorialSidebar",previous:{title:"Creating Magento 2 Modules",permalink:"/docs/Development/Magento/2019-09-17--magento2-modules/2019-09-17"},next:{title:"Updating a Magento Project from PHP v7.0 to v7.3",permalink:"/docs/Development/Magento/2019-09-15--updating-from-php70-to-php72/2019-09-15"}},d={},l=[{value:"Exporting/Importing SQL files",id:"exportingimporting-sql-files",level:2},{value:"MySQL Docker Container",id:"mysql-docker-container",level:2},{value:"HeidiSQL",id:"heidisql",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Harbin, China",src:s(995347).A+"",width:"1500",height:"588"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#exportingimporting-sql-files",children:"Exporting/Importing SQL files"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#mysql-docker-container",children:"MySQL Docker Container"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#heidisql",children:"HeidiSQL"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exportingimporting-sql-files",children:"Exporting/Importing SQL files"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mysqldump -u username -p database_name > file.sql\r\nmysql -u username -p database_name < file.sql\n"})}),"\n",(0,t.jsx)(n.h2,{id:"mysql-docker-container",children:"MySQL Docker Container"}),"\n",(0,t.jsxs)(n.p,{children:["We can start the MySQL database on our system using Docker. ",(0,t.jsx)(n.a,{href:"https://hub.docker.com/_/mysql",children:"Download the MySQL Container"})," by typing ",(0,t.jsx)(n.code,{children:"docker pull mysql"})," into your Terminal / Powershell. To start the container run the following commands:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker volume create crv_mysql\r\n\r\ndocker run \\\r\n    -e MYSQL_ROOT_PASSWORD=my-secret-pw \\\r\n    -e MYSQL_DATABASE=devdb \\\r\n    -e MYSQL_USER=dbuser \\\r\n    -e MYSQL_PASSWORD=dbpassword \\\r\n    --mount type=volume,src=crv_mysql,dst=/var/lib/mysql \\\r\n    -p 3306:3306 \\\r\n    -d \\\r\n    mysql:latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will create a volume to store your data in ",(0,t.jsx)(n.code,{children:"/var/lib/mysql"})," and also create a non-root user and a database that can be accessed with this user. If you just need a quick look at an SQL dump, simplify this command to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run \\\r\n    -e MYSQL_ROOT_PASSWORD=my-secret-pw \\\r\n    -e MYSQL_PASSWORD=dbpassword \\\r\n    -p 3306:3306 \\\r\n    -d \\\r\n    mysql:latest\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can no connect to the database with ",(0,t.jsx)(n.code,{children:"root"})," and ",(0,t.jsx)(n.code,{children:"dbpassword"})," on ",(0,t.jsx)(n.code,{children:"127.0.0.1:3306"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"heidisql",children:"HeidiSQL"}),"\n",(0,t.jsxs)(n.p,{children:["Under Windows we can use ",(0,t.jsx)(n.a,{href:"https://www.heidisql.com/download.php",children:"HeidiSQL"})," to work with our database. Once you downloaded and installed the software connect the software with the database service:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"HeidiSQL",src:s(872215).A+"",width:"695",height:"418"})}),"\n",(0,t.jsx)(n.p,{children:"Now right-click to add a new database. Once created select the database and click on the folder icon to add your SQL file:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"HeidiSQL",src:s(164636).A+"",width:"1069",height:"641"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"HeidiSQL",src:s(400549).A+"",width:"1003",height:"621"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},872215:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/HeidiSQL_01-6e903a0b532dcb839f997c7ace7d7123.png"},164636:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/HeidiSQL_02-9578cbbf2752914b0b991a87c35b30ef.png"},400549:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/HeidiSQL_03-64fdac62b0eebc219edd219080f5179f.png"},995347:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-282d67bebbf2cfbbfda0c81703b401b7.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(296540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);