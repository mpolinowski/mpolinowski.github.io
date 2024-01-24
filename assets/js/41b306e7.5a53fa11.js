"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[24842],{249374:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(785893),i=t(603905);const s={sidebar_position:9020,slug:"2019-09-16",title:"Working with SQL Dumps",authors:"mpolinowski",tags:["SQL","Windows"]},o=void 0,a={id:"Development/Magento/2019-09-16--working-with-sql-dumps/index",title:"Working with SQL Dumps",description:"Harbin, China",source:"@site/docs/Development/Magento/2019-09-16--working-with-sql-dumps/index.mdx",sourceDirName:"Development/Magento/2019-09-16--working-with-sql-dumps",slug:"/Development/Magento/2019-09-16--working-with-sql-dumps/2019-09-16",permalink:"/docs/Development/Magento/2019-09-16--working-with-sql-dumps/2019-09-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-16--working-with-sql-dumps/index.mdx",tags:[{label:"SQL",permalink:"/docs/tags/sql"},{label:"Windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:9020,frontMatter:{sidebar_position:9020,slug:"2019-09-16",title:"Working with SQL Dumps",authors:"mpolinowski",tags:["SQL","Windows"]},sidebar:"tutorialSidebar",previous:{title:"Creating Magento 2 Modules",permalink:"/docs/Development/Magento/2019-09-17--magento2-modules/2019-09-17"},next:{title:"Updating a Magento Project from PHP v7.0 to v7.3",permalink:"/docs/Development/Magento/2019-09-15--updating-from-php70-to-php72/2019-09-15"}},d={},l=[{value:"Exporting/Importing SQL files",id:"exportingimporting-sql-files",level:2},{value:"MySQL Docker Container",id:"mysql-docker-container",level:2},{value:"HeidiSQL",id:"heidisql",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Harbin, China",src:t(324093).Z+"",width:"1500",height:"588"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#exportingimporting-sql-files",children:"Exporting/Importing SQL files"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#mysql-docker-container",children:"MySQL Docker Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#heidisql",children:"HeidiSQL"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"exportingimporting-sql-files",children:"Exporting/Importing SQL files"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mysqldump -u username -p database_name > file.sql\r\nmysql -u username -p database_name < file.sql\n"})}),"\n",(0,r.jsx)(n.h2,{id:"mysql-docker-container",children:"MySQL Docker Container"}),"\n",(0,r.jsxs)(n.p,{children:["We can start the MySQL database on our system using Docker. ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/_/mysql",children:"Download the MySQL Container"})," by typing ",(0,r.jsx)(n.code,{children:"docker pull mysql"})," into your Terminal / Powershell. To start the container run the following commands:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker volume create crv_mysql\r\n\r\ndocker run \\\r\n    -e MYSQL_ROOT_PASSWORD=my-secret-pw \\\r\n    -e MYSQL_DATABASE=devdb \\\r\n    -e MYSQL_USER=dbuser \\\r\n    -e MYSQL_PASSWORD=dbpassword \\\r\n    --mount type=volume,src=crv_mysql,dst=/var/lib/mysql \\\r\n    -p 3306:3306 \\\r\n    -d \\\r\n    mysql:latest\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will create a volume to store your data in ",(0,r.jsx)(n.code,{children:"/var/lib/mysql"})," and also create a non-root user and a database that can be accessed with this user. If you just need a quick look at an SQL dump, simplify this command to:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run \\\r\n    -e MYSQL_ROOT_PASSWORD=my-secret-pw \\\r\n    -e MYSQL_PASSWORD=dbpassword \\\r\n    -p 3306:3306 \\\r\n    -d \\\r\n    mysql:latest\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can no connect to the database with ",(0,r.jsx)(n.code,{children:"root"})," and ",(0,r.jsx)(n.code,{children:"dbpassword"})," on ",(0,r.jsx)(n.code,{children:"127.0.0.1:3306"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"heidisql",children:"HeidiSQL"}),"\n",(0,r.jsxs)(n.p,{children:["Under Windows we can use ",(0,r.jsx)(n.a,{href:"https://www.heidisql.com/download.php",children:"HeidiSQL"})," to work with our database. Once you downloaded and installed the software connect the software with the database service:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeidiSQL",src:t(800672).Z+"",width:"695",height:"418"})}),"\n",(0,r.jsx)(n.p,{children:"Now right-click to add a new database. Once created select the database and click on the folder icon to add your SQL file:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeidiSQL",src:t(61911).Z+"",width:"1069",height:"641"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"HeidiSQL",src:t(164315).Z+"",width:"1003",height:"621"})})]})}function p(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),l=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,d=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=l(t),m=i,u=h["".concat(d,".").concat(m)]||h[m]||c[m]||s;return t?r.createElement(u,o(o({ref:n},p),{},{components:t})):r.createElement(u,o({ref:n},p))}));p.displayName="MDXCreateElement"},800672:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/HeidiSQL_01-6e903a0b532dcb839f997c7ace7d7123.png"},61911:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/HeidiSQL_02-9578cbbf2752914b0b991a87c35b30ef.png"},164315:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/HeidiSQL_03-64fdac62b0eebc219edd219080f5179f.png"},324093:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-282d67bebbf2cfbbfda0c81703b401b7.jpg"}}]);