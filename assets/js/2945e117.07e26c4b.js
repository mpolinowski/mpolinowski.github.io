"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[41559],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),h=s,g=u["".concat(l,".").concat(h)]||u[h]||c[h]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function h(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},61214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));const r={sidebar_position:6040,slug:"2021-09-14",title:"PostgreSQL 14 Database Refresher :: Working with JSON & Node.js",authors:"mpolinowski",tags:["SQL","Javascript"]},o=void 0,i={unversionedId:"DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/index",id:"DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/index",title:"PostgreSQL 14 Database Refresher :: Working with JSON & Node.js",description:"Shenzhen, China",source:"@site/docs/DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/index.md",sourceDirName:"DevOps/Provisioning/2021-09-14--postgres-refresher-node-json",slug:"/DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/2021-09-14",permalink:"/docs/DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/2021-09-14",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2021-09-14--postgres-refresher-node-json/index.md",tags:[{label:"SQL",permalink:"/docs/tags/sql"},{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:6040,frontMatter:{sidebar_position:6040,slug:"2021-09-14",title:"PostgreSQL 14 Database Refresher :: Working with JSON & Node.js",authors:"mpolinowski",tags:["SQL","Javascript"]},sidebar:"tutorialSidebar",previous:{title:"Traefik v2 Webproxy Configuration - 1st Attempt",permalink:"/docs/DevOps/Provisioning/2021-10-12--traefik-configuration/2021-10-12"},next:{title:"PostgreSQL 14 Database Refresher :: Working with GraphQL",permalink:"/docs/DevOps/Provisioning/2021-09-14--postgres-refresher-hasura/2021-09-14"}},l={},p=[{value:"PostgreSQL Setup",id:"postgresql-setup",level:2},{value:"Docker",id:"docker",level:3},{value:"Create a Database",id:"create-a-database",level:3},{value:"Add a Table",id:"add-a-table",level:3},{value:"Add Data",id:"add-data",level:3},{value:"Node.js",id:"nodejs",level:2},{value:"Connecting to your Database",id:"connecting-to-your-database",level:3},{value:"Adding a Frontend",id:"adding-a-frontend",level:3},{value:"JSON Types",id:"json-types",level:2},{value:"Define a Column in a Table",id:"define-a-column-in-a-table",level:3},{value:"Insert JSON Data",id:"insert-json-data",level:3},{value:"Query Data",id:"query-data",level:3}],d={toc:p};function c(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Shenzhen, China",src:t(24195).Z,width:"1500",height:"392"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#postgresql-setup"},"PostgreSQL Setup"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#docker"},"Docker")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#create-a-database"},"Create a Database")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#add-a-table"},"Add a Table")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#add-data"},"Add Data")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#nodejs"},"Node.js"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#connecting-to-your-database"},"Connecting to your Database")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#adding-a-frontend"},"Adding a Frontend")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#json-types"},"JSON Types"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#define-a-column-in-a-table"},"Define a Column in a Table")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#insert-json-data"},"Insert JSON Data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#query-data"},"Query Data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#filter-results"},"Filter Results")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#expand-data"},"Expand Data")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#checking-containment"},"Checking Containment")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#creating-indices"},"Creating Indices"))))),(0,s.kt)("h2",{id:"postgresql-setup"},"PostgreSQL Setup"),(0,s.kt)("h3",{id:"docker"},"Docker"),(0,s.kt)("p",null,"I am going to use the ",(0,s.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/postgres"},"official Docker image")," to set up the SQL Database on a Debian Bullseye server:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --rm \\\n    --name postgres \\\n    -e POSTGRES_PASSWORD=secretpassword \\\n    -p 5432:5432 \\\n    postgres:14\n")),(0,s.kt)("p",null,"I can now access the container and connect to the Postgres CLI:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'docker exec -ti -u postgres postgres psql\n\npsql (14.0 (Debian 14.0-1.pgdg110+1))\nType "help" for help.\n\npostgres=#\n')),(0,s.kt)("h3",{id:"create-a-database"},"Create a Database"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE books;\n")),(0,s.kt)("p",null,"Switch to using the new ",(0,s.kt)("inlineCode",{parentName:"p"},"books")," table instead of the default ",(0,s.kt)("inlineCode",{parentName:"p"},"postgres"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'\\connect books;\nYou are now connected to database "books" as user "postgres".\n')),(0,s.kt)("h3",{id:"add-a-table"},"Add a Table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE the_expanse (\n  book_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\n  title VARCHAR ( 25 ) UNIQUE NOT NULL,\n  isbn VARCHAR ( 25 ) UNIQUE NOT NULL,\n  year INT,\n  pages INT,\n  created_on TIMESTAMP NOT NULL\n);\n")),(0,s.kt)("h3",{id:"add-data"},"Add Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO the_expanse \n  (title, isbn, year, pages, created_on)\nVALUES \n  ('Leviathan Wakes', '978-0-316-12908-4', 2011, 592, NOW() - interval '1256 days'),\n  ('Calibans War', '978-1-841-49990-1', 2012, 595, NOW() - interval '993 days'),\n  ('Abaddons Gate', '978-0-316-12907-7', 2013, 539, NOW() - interval '765 days'),\n  ('Cibola Burn', '978-0-316-21762-0', 2014, 583, NOW() - interval '543 days'),\n  ('Nemesis Games', '978-0-316-21758-3', 2015, 544, NOW() - interval '267 days'),\n  ('Babylons Ashes', '978-0-316-33474-7', 2016, 608, NOW() - interval '189 days'),\n  ('Persepolis Rising', '978-0-316-33283-5', 2017, 560, NOW() - interval '122 days'),\n  ('Tiamats Wrath', '978-0-316-33286-6', 2019, 544, NOW() - interval '98 days'),\n  ('Leviathan Falls', '978-0-356-51039-2', 2021, 528, NOW() - interval '21 days');\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM the_expanse\n;\n book_id |       title       |       isbn        | year | pages |         created_on         \n---------+-------------------+-------------------+------+-------+----------------------------\n       1 | Leviathan Wakes   | 978-0-316-12908-4 | 2011 |   592 | 2018-05-03 08:42:05.608243\n       2 | Calibans War      | 978-1-841-49990-1 | 2012 |   595 | 2019-01-21 08:42:05.608243\n       3 | Abaddons Gate     | 978-0-316-12907-7 | 2013 |   539 | 2019-09-06 08:42:05.608243\n       4 | Cibola Burn       | 978-0-316-21762-0 | 2014 |   583 | 2020-04-15 08:42:05.608243\n       5 | Nemesis Games     | 978-0-316-21758-3 | 2015 |   544 | 2021-01-16 08:42:05.608243\n       6 | Babylons Ashes    | 978-0-316-33474-7 | 2016 |   608 | 2021-04-04 08:42:05.608243\n       7 | Persepolis Rising | 978-0-316-33283-5 | 2017 |   560 | 2021-06-10 08:42:05.608243\n       9 | Tiamats Wrath     | 978-0-316-33286-6 | 2019 |   544 | 2021-07-04 08:44:16.827956\n      10 | Leviathan Falls   | 978-0-356-51039-2 | 2021 |   528 | 2021-09-19 08:44:16.827956\n(9 rows)\n")),(0,s.kt)("h2",{id:"nodejs"},"Node.js"),(0,s.kt)("h3",{id:"connecting-to-your-database"},"Connecting to your Database"),(0,s.kt)("p",null,"Let's build a Node.js project that utilizes our Postgres database with help of the ",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/pg"},"node-postgres")," package:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install pg\ntouch server.js\n")),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"server.js"),", put this (change the ",(0,s.kt)("inlineCode",{parentName:"p"},"pg")," parameter according to your Postgres setup):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const pg = require('pg');\n\nconst pgURL = '192.168.2.111'\nconst pgPort = '5432'\nconst pgUser = 'postgres'\nconst pgPass = 'secretpassword'\n\n\nconst cs = 'postgresql://'+pgUser+':'+pgPass+'@'+pgURL+':'+pgPort+'/books';\n\nconst client = new pg.Client(cs);\n\nclient.connect();\nconst sql = 'SELECT * FROM the_expanse LIMIT $1';\nconst values = ['9'];\n\nclient.query(sql, values).then(res => {\n\n    const data = res.rows;\n\n    data.forEach(row => console.log(row));\n\n}).finally(() => {\n    client.end()\n});\n")),(0,s.kt)("p",null,"And run the script in Node:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node server.js\n\n{\n  book_id: 1,\n  title: 'Leviathan Wakes',\n  isbn: '978-0-316-12908-4',\n  year: 2011,\n  pages: 592,\n  created_on: 2018-05-03T00:42:05.608Z\n}\n{\n  book_id: 2,\n  title: 'Calibans War',\n  isbn: '978-1-841-49990-1',\n  year: 2012,\n  pages: 595,\n  created_on: 2019-01-21T00:42:05.608Z\n}\n{\n  book_id: 3,\n  title: 'Abaddons Gate',\n  isbn: '978-0-316-12907-7',\n  year: 2013,\n  pages: 539,\n  created_on: 2019-09-06T00:42:05.608Z\n}\n{\n  book_id: 4,\n  title: 'Cibola Burn',\n  isbn: '978-0-316-21762-0',\n  year: 2014,\n  pages: 583,\n  created_on: 2020-04-15T00:42:05.608Z\n}\n{\n  book_id: 5,\n  title: 'Nemesis Games',\n  isbn: '978-0-316-21758-3',\n  year: 2015,\n  pages: 544,\n  created_on: 2021-01-16T00:42:05.608Z\n}\n{\n  book_id: 6,\n  title: 'Babylons Ashes',\n  isbn: '978-0-316-33474-7',\n  year: 2016,\n  pages: 608,\n  created_on: 2021-04-04T00:42:05.608Z\n}\n{\n  book_id: 7,\n  title: 'Persepolis Rising',\n  isbn: '978-0-316-33283-5',\n  year: 2017,\n  pages: 560,\n  created_on: 2021-06-10T00:42:05.608Z\n}\n{\n  book_id: 9,\n  title: 'Tiamats Wrath',\n  isbn: '978-0-316-33286-6',\n  year: 2019,\n  pages: 544,\n  created_on: 2021-07-04T00:44:16.827Z\n}\n{\n  book_id: 10,\n  title: 'Leviathan Falls',\n  isbn: '978-0-356-51039-2',\n  year: 2021,\n  pages: 528,\n  created_on: 2021-09-19T00:44:16.827Z\n}\n")),(0,s.kt)("h3",{id:"adding-a-frontend"},"Adding a Frontend"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm install express\nmkdir static\ntouch static/index.html server_express.js\n")),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"static/index.html")," put:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>PostgreSQL Sample</title>\n  </head>\n  <body>\n    <input type="text" placeholder="Type 1 - 9" id="search" />\n    <button id="btn">Search</button>\n    <pre>\n        <code id="code"></code>\n    </pre>\n\n    <script>\n      const btn = document.getElementById("btn");\n      const code = document.getElementById("code");\n      const search = document.getElementById("search");\n\n      btn.addEventListener("click", async () => {\n        code.innerText = "loading";\n\n        const res = await fetch(\n          "/get?search=" + encodeURIComponent(search.value)\n        );\n        const json = await res.json();\n\n        code.innerText = "\\n" + JSON.stringify(json, null, 4);\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"server_express.js"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const express = require(\"express\");\nconst { Pool } = require(\"pg\");\n\nconst PORT = process.env.PORT || 8888;\n\nconst pgURL = '192.168.2.111'\nconst pgPort = '5432'\nconst pgUser = 'postgres'\nconst pgPass = 'secretpassword'\n\nconst pool = new Pool({\n  connectionString:\n    'postgresql://'+pgUser+':'+pgPass+'@'+pgURL+':'+pgPort+'/books',\n});\n\nasync function init() {\n  const app = express();\n\n  app.get(\"/get\", async (req, res) => {\n    const client = await pool.connect();\n    const [booksRes] = await Promise.all([\n      client.query(\n        // Never put user inputs directly into the SQL query\n        // `SELECT * FROM comments NATURAL LEFT JOIN rich_content WHERE board_id = ${req.query.search}`\n        // Always parametrize it so that the PG driver can clean it up to prevent SQL injections.\n        \"SELECT * FROM the_expanse LIMIT $1\",\n        [req.query.search]\n      )\n    ]);\n    res\n      .json({\n        status: \"ok\",\n        posts: booksRes.rows,\n      })\n      .end();\n    await client.end();\n  });\n\n  app.use(express.static(\"./static\"));\n  app.listen(PORT);\n\n  console.log(`running on http://localhost:${PORT}`);\n}\ninit();\n")),(0,s.kt)("p",null,"And run the app:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"node server_express.js\nrunning on http://localhost:8888\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Postgres in Nodejs",src:t(72713).Z,width:"930",height:"447"})),(0,s.kt)("h2",{id:"json-types"},"JSON Types"),(0,s.kt)("p",null,"There are two ",(0,s.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/9.4/datatype-json.html"},"JSON data types"),": json and ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonb"),". They accept almost identical sets of values as input. The major practical difference is one of efficiency. The json data type stores an exact copy of the input text, which processing functions must reparse on each execution; while ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonb")," data is stored in a decomposed binary format that makes it slightly slower to input due to added conversion overhead, but significantly faster to process, since no reparsing is needed. ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonb")," also supports indexing, which can be a significant advantage."),(0,s.kt)("p",null,"Because the json type stores an exact copy of the input text, it will preserve semantically-insignificant white space between tokens, as well as the order of keys within JSON objects. Also, if a JSON object within the value contains the same key more than once, all the key/value pairs are kept. (The processing functions consider the last value as the operative one.) By contrast, ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonb")," does not preserve white space, does not preserve the order of object keys, and does not keep duplicate object keys. If duplicate keys are specified in the input, only the last value is kept."),(0,s.kt)("p",null,"In general, most applications should prefer to store JSON data as ",(0,s.kt)("inlineCode",{parentName:"p"},"jsonb"),", unless there are quite specialized needs, such as legacy assumptions about ordering of object keys."),(0,s.kt)("h3",{id:"define-a-column-in-a-table"},"Define a Column in a Table"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE the_expanse_tv (\n  episode_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\n  season_id INT NOT NULL,\n  content JSONB NOT NULL\n);\n")),(0,s.kt)("h3",{id:"insert-json-data"},"Insert JSON Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO the_expanse_tv\n  (season_id, content)\nVALUES\n  (1, \'{"title":"Dulcinea","imdb-rating":"7.7","air-date":"2015-11-23","abstract":"In the asteroid belt near Saturn, James Holden and the crew of the ice freighter Canterbury, on its way to Ceres Station, investigate a distress call from an unknown derelict ship, the Scopuli."}\'),\n  (1, \'{"title":"The Big Empty","imdb-rating":"7.7","air-date":"2015-12-15","abstract":"Holden and crew are trapped in a badly damaged shuttle. On Ceres, Miller uncovers clues about Julie Mao. On Earth, Chrisjen Avasarala questions a terrorist."}\'),\n  (1, \'{"title":"Remember the Cant","imdb-rating":"8.0","air-date":"2015-12-16","abstract":"While Avasarala plays a dangerous game of politics, Holden and his crew are forced to turn on one another while held captive by the Martian Navy."}\'),\n  (1, \'{"title":"CQB","imdb-rating":"8.7","air-date":"2015-12-16","abstract":"Holden and crew are caught in the middle of a desperate battle as mysterious war ships attack and board the Donnager. As Miller continues to investigate Julie Mao, his partner Havelock continues to go missing."}\'),\n  (1, \'{"title":"Back to the Butcher","imdb-rating":"7.8","air-date":"2016-01-05","abstract":"The crew has survived the loss of the Canterbury and the Donnager and are contacted by an unlikely ally. Miller, on Ceres, continues his investigation and his thoughts of a conspiracy grow."}\'),\n  (1, \'{"title":"Rock Bottom","imdb-rating":"8.0","air-date":"2016-01-12","abstract":"Holdens team makes an uneasy alliance with Fred Johnson while Miller fights for his life against Anderson Dawes thugs."}\'),\n  (1, \'{"title":"Windmills","imdb-rating":"7.9","air-date":"2016-01-19","abstract":"Holden and crew realize that they qre not alone on the Rocinante and find themselves up against a Martian Marine blockade. Millers dark night of the soul, believing all is lost, finds a new reason to keep going. Avasarala visits Holdens family in Montana."}\'),\n  (1, \'{"title":"Salvage","imdb-rating":"8.7","air-date":"2016-01-26","abstract":"A derelict vessel holds a potentially devastating secret. Holden and his crew cross paths with Miller on Eros. Avasarala receives bad news."}\'),\n  (1, \'{"title":"Critical Mass","imdb-rating":"8.7","air-date":"2016-02-02","abstract":"A flashback to Julies origin story reveals her trajectory. Holden and Miller finally meet and team up to get to the bottom of the strange emergency situation happening on Eros. As the true horror of the events on Eros is revealed, an ailing Holden and Miller must overcome incredible odds if they hope to live to fight another day. Part 1 of 2"}\'),\n  (1, \'{"title":"Leviathan Wakes","imdb-rating":"8.7","air-date":"2016-02-02","abstract":"A flashback to Julies origin story reveals her trajectory. Holden and Miller finally meet and team up to get to the bottom of the strange emergency situation happening on Eros. As the true horror of the events on Eros is revealed, an ailing Holden and Miller must overcome incredible odds if they hope to live to fight another day. Part 2 of 2"}\');\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},"select column_name, data_type from information_schema.columns where table_name = 'the_expanse_tv';\n\n column_name | data_type \n-------------+-----------\n episode_id  | integer\n season_id   | integer\n content     | jsonb\n(3 rows)\n")),(0,s.kt)("h3",{id:"query-data"},"Query Data"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT content->\'title\' AS title FROM the_expanse_tv;\n\n         title         \n-----------------------\n "Dulcinea"\n "The Big Empty"\n "Remember the Cant"\n "CQB"\n "Back to the Butcher"\n "Rock Bottom"\n "Windmills"\n "Salvage"\n "Critical Mass"\n "Leviathan Wakes"\n(10 rows)\n')))}c.isMDXComponent=!0},72713:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Postgres_Nodejs_01-f075095af45e56745e32e28d7053d3f9.png"},24195:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-71f2b7209f58ecc12682d4095513b1b8.jpg"}}]);