"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[15352],{655402:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=r(474848),i=r(28453);const t={sidebar_position:6060,slug:"2021-09-13",title:"PostgreSQL 14 Database Refresher :: Introduction Part II",authors:"mpolinowski",tags:["SQL","Databases"]},a=void 0,o={id:"DevOps/Provisioning/2021-09-13--postgres-refresher-part-ii/index",title:"PostgreSQL 14 Database Refresher :: Introduction Part II",description:"Shenzhen, China",source:"@site/docs/DevOps/Provisioning/2021-09-13--postgres-refresher-part-ii/index.md",sourceDirName:"DevOps/Provisioning/2021-09-13--postgres-refresher-part-ii",slug:"/DevOps/Provisioning/2021-09-13--postgres-refresher-part-ii/2021-09-13",permalink:"/docs/DevOps/Provisioning/2021-09-13--postgres-refresher-part-ii/2021-09-13",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2021-09-13--postgres-refresher-part-ii/index.md",tags:[{label:"SQL",permalink:"/docs/tags/sql"},{label:"Databases",permalink:"/docs/tags/databases"}],version:"current",sidebarPosition:6060,frontMatter:{sidebar_position:6060,slug:"2021-09-13",title:"PostgreSQL 14 Database Refresher :: Introduction Part II",authors:"mpolinowski",tags:["SQL","Databases"]},sidebar:"tutorialSidebar",previous:{title:"PostgreSQL 14 Database Refresher :: Working with GraphQL",permalink:"/docs/DevOps/Provisioning/2021-09-14--postgres-refresher-hasura/2021-09-14"},next:{title:"PostgreSQL 14 Database Refresher :: Introduction Part I",permalink:"/docs/DevOps/Provisioning/2021-09-13--postgres-refresher-part-i/2021-09-13"}},d={},l=[{value:"Foreign Keys",id:"foreign-keys",level:2},{value:"REFERENCES",id:"references",level:3},{value:"ON DELETE",id:"on-delete",level:3},{value:"Joins",id:"joins",level:2},{value:"INNER JOIN",id:"inner-join",level:3},{value:"NATURAL INNER JOIN",id:"natural-inner-join",level:3},{value:"Subqueries",id:"subqueries",level:2},{value:"Grouping Results",id:"grouping-results",level:2},{value:"GROUP BY",id:"group-by",level:3},{value:"Indexes",id:"indexes",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Shenzhen, China",src:r(477984).A+"",width:"1500",height:"392"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#foreign-keys",children:"Foreign Keys"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#references",children:"REFERENCES"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#on-delete",children:"ON DELETE"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#joins",children:"Joins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#inner-join",children:"INNER JOIN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#natural-inner-join",children:"NATURAL INNER JOIN"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#subqueries",children:"Subqueries"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#grouping-results",children:"Grouping Results"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#group-by",children:"GROUP BY"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#indexes",children:"Indexes"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"foreign-keys",children:"Foreign Keys"}),"\n",(0,s.jsx)(n.h3,{id:"references",children:"REFERENCES"}),"\n",(0,s.jsx)(n.p,{children:"As part of the previous step I created 4 tables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE users (\r\n  user_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\r\n  username VARCHAR ( 25 ) UNIQUE NOT NULL,\r\n  email VARCHAR ( 50 ) UNIQUE NOT NULL,\r\n  full_name VARCHAR ( 100 ) NOT NULL,\r\n  last_login TIMESTAMP,\r\n  created_on TIMESTAMP NOT NULL\r\n);\r\n\r\nCREATE TABLE boards (\r\n  board_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\r\n  board_name VARCHAR ( 50 ) UNIQUE NOT NULL,\r\n  board_description TEXT NOT NULL\r\n);\r\n\r\nCREATE TABLE comments (\r\n  comment_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\r\n  user_id INT REFERENCES users(user_id) ON DELETE CASCADE,\r\n  board_id INT REFERENCES boards(board_id) ON DELETE CASCADE,\r\n  comment TEXT NOT NULL,\r\n  time TIMESTAMP\r\n);\r\n\r\nCREATE TABLE rich_content (\r\n  content_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,\r\n  comment_id INT REFERENCES comments(comment_id) ON DELETE CASCADE,\r\n  content JSONB NOT NULL\r\n);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"comment"})," and ",(0,s.jsx)(n.code,{children:"rich_content"})," table both contain references to other tables - those are called foreign keys. Importing keys from other tables, instead of duplicating them, makes it much harder to get your data out of sync!"]}),"\n",(0,s.jsx)(n.h3,{id:"on-delete",children:"ON DELETE"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"user_id INT REFERENCES users(user_id) ON DELETE CASCADE,\r\nboard_id INT REFERENCES boards(board_id) ON DELETE CASCADE,\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also define a default behaviour what should be done if the key, that is imported into another table, is deleted. The default behaviour is to prevent the deletion ",(0,s.jsx)(n.code,{children:"ON DELETE NO ACTION"})," as long there is still data somewhere else that relies on that key - e.g. you cannot delete a user before all his postings are deleted."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ON DELETE CASCADE"})," block means that every posting of this user is deleted as well if the user is deleted inside the ",(0,s.jsx)(n.code,{children:"users"})," table."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ON DELETE NO ACTION"}),": Deleting the user will throw an error if there is still related content."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ON DELETE CASCADE"}),": Deleting the user deletes everything that is bound to his ID."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ON DELETE SET NULL"}),": Will set the username to NULL while keeping the users other data intact."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"joins",children:"Joins"}),"\n",(0,s.jsx)(n.h3,{id:"inner-join",children:"INNER JOIN"}),"\n",(0,s.jsxs)(n.p,{children:["The inner join uses the overlap of two tables to find additional, related data. Like an User ID might might have data assigned to it in several tables. You can use the ",(0,s.jsx)(n.strong,{children:"INNER JOIN"})," to match rows in those tables when they have the same value for ",(0,s.jsx)(n.code,{children:"user_id"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["EXAMPLE: Get first 60 characters of all comments from a specific user board and project it as ",(0,s.jsx)(n.code,{children:"preview"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT comment_id, user_id, LEFT(comment, 60) AS preview FROM comments WHERE board_id='39';\r\n\r\n comment_id | user_id |                           preview                            \r\n------------+---------+--------------------------------------------------------------\r\n         63 |     858 | Maecenas tristique, est et tempus semper, est quam pharetra \r\n        358 |     876 | Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id\r\n        410 |     344 | Praesent blandit. Nam nulla. Integer pede justo, lacinia ege\r\n        429 |     789 | Maecenas ut massa quis augue luctus tincidunt. Nulla mollis \r\n        463 |     925 | Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu s\r\n        485 |     112 | Maecenas tristique, est et tempus semper, est quam pharetra \r\n        524 |      41 | Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pr\r\n        532 |     502 | In hac habitasse platea dictumst. Morbi vestibulum, velit id\r\n        540 |     588 | Nullam porttitor lacus at turpis. Donec posuere metus vitae \r\n        545 |     587 | Praesent id massa id nisl venenatis lacinia. Aenean sit amet\r\n        551 |     620 | Morbi porttitor lorem id ligula. Suspendisse ornare consequa\r\n        972 |     998 | Aenean lectus. Pellentesque eget nunc. Donec quis orci eget \n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"comments"})," table does not contain the username. We can use a ",(0,s.jsx)(n.code,{children:"JOIN"})," command to connect the ",(0,s.jsx)(n.code,{children:"user_id"})," from the ",(0,s.jsx)(n.code,{children:"comments"})," table with the ",(0,s.jsx)(n.code,{children:"user_id"})," in the ",(0,s.jsx)(n.code,{children:"users"})," table and read out the username where both match ",(0,s.jsx)(n.code,{children:"comments.user_id = users.user_id"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\r\n  comments.comment_id, comments.user_id, users.username, time, LEFT(comment, 20) AS preview\r\n  FROM\r\n    comments\r\n  INNER JOIN\r\n    users\r\n  ON\r\n    comments.user_id = users.user_id\r\n  WHERE\r\n    board_id=39;\r\n\r\n\r\n comment_id | user_id |   username   |        time         |       preview        \r\n------------+---------+--------------+---------------------+----------------------\r\n        524 |      41 | klicciardo14 | 2018-07-09 15:36:28 | Lorem ipsum dolor si\r\n        485 |     112 | erobrose33   | 2019-08-30 02:32:38 | Maecenas tristique, \r\n        410 |     344 | tposse9j     | 2018-10-07 19:02:52 | Praesent blandit. Na\r\n        532 |     502 | dbenndx      | 2019-07-06 04:08:15 | In hac habitasse pla\r\n        545 |     587 | rspitaroga   | 2019-11-03 22:48:08 | Praesent id massa id\r\n        540 |     588 | rrandlegb    | 2020-01-21 19:52:11 | Nullam porttitor lac\r\n        551 |     620 | bcarlawh7    | 2020-06-11 00:37:22 | Morbi porttitor lore\r\n        429 |     789 | mpelllw      | 2019-05-24 14:56:49 | Maecenas ut massa qu\r\n         63 |     858 | uvickarnt    | 2020-07-31 04:46:40 | Maecenas tristique, \r\n        358 |     876 | egeffenob    | 2020-06-20 02:28:58 | Mauris enim leo, rho\r\n        463 |     925 | hderrickpo   | 2018-01-02 14:48:49 | Phasellus sit amet e\r\n        972 |     998 | imcdowallrp  | 2018-03-15 00:23:38 | Aenean lectus. Pelle\r\n(12 rows)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"natural-inner-join",children:"NATURAL INNER JOIN"}),"\n",(0,s.jsxs)(n.p,{children:["The query can be simplified when the field has the identical name in both tables ",(0,s.jsx)(n.code,{children:"user.id"})," by using ",(0,s.jsx)(n.code,{children:"NATURAL INNER JOIN"})," instead:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\r\n  comments.comment_id, comments.user_id, users.username, time, LEFT(comment, 20) AS preview\r\n  FROM\r\n    comments\r\n  NATURAL INNER JOIN\r\n    users\r\n  WHERE\r\n    board_id=39;\r\n\r\n\r\n comment_id | user_id |   username   |        time         |       preview        \r\n------------+---------+--------------+---------------------+----------------------\r\n        524 |      41 | klicciardo14 | 2018-07-09 15:36:28 | Lorem ipsum dolor si\r\n        485 |     112 | erobrose33   | 2019-08-30 02:32:38 | Maecenas tristique, \r\n        410 |     344 | tposse9j     | 2018-10-07 19:02:52 | Praesent blandit. Na\r\n        532 |     502 | dbenndx      | 2019-07-06 04:08:15 | In hac habitasse pla\r\n        545 |     587 | rspitaroga   | 2019-11-03 22:48:08 | Praesent id massa id\r\n        540 |     588 | rrandlegb    | 2020-01-21 19:52:11 | Nullam porttitor lac\r\n        551 |     620 | bcarlawh7    | 2020-06-11 00:37:22 | Morbi porttitor lore\r\n        429 |     789 | mpelllw      | 2019-05-24 14:56:49 | Maecenas ut massa qu\r\n         63 |     858 | uvickarnt    | 2020-07-31 04:46:40 | Maecenas tristique, \r\n        358 |     876 | egeffenob    | 2020-06-20 02:28:58 | Mauris enim leo, rho\r\n        463 |     925 | hderrickpo   | 2018-01-02 14:48:49 | Phasellus sit amet e\r\n        972 |     998 | imcdowallrp  | 2018-03-15 00:23:38 | Aenean lectus. Pelle\r\n(12 rows)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"subqueries",children:"Subqueries"}),"\n",(0,s.jsxs)(n.p,{children:["SQL allows you cascade several queries into each other. This is, basically, the long way to what ",(0,s.jsx)(n.code,{children:"JOIN"})," is the shortcut to."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\r\n  comment_id, user_id, LEFT(comment, 20)\r\n  FROM\r\n    comments\r\n  WHERE\r\n    user_id = (SELECT user_id from users WHERE username = 'klicciardo14');\r\n\r\n\r\n     comment_id | user_id |         left         \r\n------------+---------+----------------------\r\n        524 |      41 | Lorem ipsum dolor si\r\n(1 row)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"grouping-results",children:"Grouping Results"}),"\n",(0,s.jsx)(n.h3,{id:"group-by",children:"GROUP BY"}),"\n",(0,s.jsx)(n.p,{children:"Select all the boards on your forum and find the one that has the most comments by aggregating the amounts of comments on each board."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT\r\n  boards.board_name, COUNT(comment_id) AS comment_count\r\nFROM\r\n  comments\r\nNATURAL INNER JOIN\r\n  boards\r\nGROUP BY\r\n  boards.board_name\r\nORDER BY\r\n  comment_count DESC\r\nLIMIT 10;\r\n\r\n\r\n      board_name      | comment_count \r\n----------------------+---------------\r\n Cloned               |            18\r\n budgetary management |            18\r\n open system          |            16\r\n Universal            |            16\r\n analyzer             |            15\r\n puppies              |            15\r\n Balanced             |            14\r\n leverage             |            14\r\n Seamless             |            14\r\n Innovative           |            13\r\n(10 rows)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Count ",(0,s.jsx)(n.code,{children:"comment_id"})," in the ",(0,s.jsx)(n.code,{children:"comments"})," table and group those counts by the name of the board in which they were posted - which can be found by an inner join from the ",(0,s.jsx)(n.code,{children:"boards"})," table."]}),"\n",(0,s.jsx)(n.h2,{id:"indexes",children:"Indexes"}),"\n",(0,s.jsx)(n.p,{children:"Get all the post on a specific board and order them by the time that they where published:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT comment_id, user_id, time, LEFT(comment,20) FROM comments WHERE board_id=39 ORDER BY time DESC;\r\n\r\n comment_id | user_id |        time         |         left         \r\n------------+---------+---------------------+----------------------\r\n         63 |     858 | 2020-07-31 04:46:40 | Maecenas tristique, \r\n        358 |     876 | 2020-06-20 02:28:58 | Mauris enim leo, rho\r\n        551 |     620 | 2020-06-11 00:37:22 | Morbi porttitor lore\r\n        540 |     588 | 2020-01-21 19:52:11 | Nullam porttitor lac\r\n        545 |     587 | 2019-11-03 22:48:08 | Praesent id massa id\r\n        485 |     112 | 2019-08-30 02:32:38 | Maecenas tristique, \r\n        532 |     502 | 2019-07-06 04:08:15 | In hac habitasse pla\r\n        429 |     789 | 2019-05-24 14:56:49 | Maecenas ut massa qu\r\n        410 |     344 | 2018-10-07 19:02:52 | Praesent blandit. Na\r\n        524 |      41 | 2018-07-09 15:36:28 | Lorem ipsum dolor si\r\n        972 |     998 | 2018-03-15 00:23:38 | Aenean lectus. Pelle\r\n        463 |     925 | 2018-01-02 14:48:49 | Phasellus sit amet e\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To check the ",(0,s.jsx)(n.code,{children:"cost"})," (how much time/cpu power will it take to run this query) check:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'EXPLAIN SELECT comment_id, user_id, time, LEFT(comment,20) FROM comments WHERE board_id=39 ORDER BY time DESC\r\n;\r\n\r\n                           QUERY PLAN                            \r\n-----------------------------------------------------------------\r\n Sort  (cost=65.75..65.78 rows=12 width=48)\r\n   Sort Key: "time" DESC\r\n   ->  Seq Scan on comments  (cost=0.00..65.53 rows=12 width=48)\r\n         Filter: (board_id = 39)\r\n(4 rows)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The sequential scan of every single comment to see if it fits the query takes up almost all the time. You can index the table to get this demand down. In the example above it makes sense to index each comment based on it's ",(0,s.jsx)(n.code,{children:"board_id"})," - allowing us to pre-exclude every comment that was posted on a different board."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE INDEX ON comments (board_id);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Re-checking the cost shows that the cost for our query was almost cut in half by now using the ",(0,s.jsx)(n.strong,{children:"Bitmap Heap Scan"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'EXPLAIN SELECT comment_id, user_id, time, LEFT(comment,20) FROM comments WHERE board_id=39 ORDER BY time DESC\r\n;\r\n                                        QUERY PLAN                                         \r\n-------------------------------------------------------------------------------------------\r\n Sort  (cost=33.73..33.76 rows=12 width=48)\r\n   Sort Key: "time" DESC\r\n   ->  Bitmap Heap Scan on comments  (cost=4.37..33.51 rows=12 width=48)\r\n         Recheck Cond: (board_id = 39)\r\n         ->  Bitmap Index Scan on comments_board_id_idx  (cost=0.00..4.37 rows=12 width=0)\r\n               Index Cond: (board_id = 39)\r\n(6 rows)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},477984:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-71f2b7209f58ecc12682d4095513b1b8.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(296540);const i={},t=s.createContext(i);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);