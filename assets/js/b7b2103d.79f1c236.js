"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[39428],{280262:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>d});var r=s(474848),a=s(28453);const l={sidebar_position:9040,slug:"2018-11-10",title:"Getting started with PostgreSQL in Windows 10",authors:"mpolinowski",tags:["Databases","PostgreSQL"]},i=void 0,t={id:"DevOps/Provisioning/2018-11-10--postgresql-getting-started/index",title:"Getting started with PostgreSQL in Windows 10",description:"Muktinath, Nepal",source:"@site/docs/DevOps/Provisioning/2018-11-10--postgresql-getting-started/index.mdx",sourceDirName:"DevOps/Provisioning/2018-11-10--postgresql-getting-started",slug:"/DevOps/Provisioning/2018-11-10--postgresql-getting-started/2018-11-10",permalink:"/docs/DevOps/Provisioning/2018-11-10--postgresql-getting-started/2018-11-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2018-11-10--postgresql-getting-started/index.mdx",tags:[{label:"Databases",permalink:"/docs/tags/databases"},{label:"PostgreSQL",permalink:"/docs/tags/postgre-sql"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2018-11-10",title:"Getting started with PostgreSQL in Windows 10",authors:"mpolinowski",tags:["Databases","PostgreSQL"]},sidebar:"tutorialSidebar",previous:{title:"Red Hat Certified Specialist in Containerized Application Development",permalink:"/docs/DevOps/Provisioning/2018-12-27--red-hat-containerized-application-development-rhcs/2018-12-27"},next:{title:"How to wrap your Source Code into a Docker Container",permalink:"/docs/DevOps/Provisioning/2018-01-28--express-generator-dockerrized/2018-01-28"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Adding some Dummy Data to work with",id:"adding-some-dummy-data-to-work-with",level:2},{value:"SELECT Queries",id:"select-queries",level:3},{value:"ORDER BY",id:"order-by",level:4},{value:"WHERE",id:"where",level:4},{value:"OR",id:"or",level:4},{value:"AND",id:"and",level:4},{value:"LIKE &amp; LOWER",id:"like--lower",level:4},{value:"LIKE &amp; UPPER",id:"like--upper",level:4},{value:"Working with numbers",id:"working-with-numbers",level:4},{value:"Adding a another Dataset",id:"adding-a-another-dataset",level:2},{value:"ALTER TABLE &amp; ADD COLUMN",id:"alter-table--add-column",level:3},{value:"UPDATE &amp; SET",id:"update--set",level:3},{value:"VARCHARS",id:"varchars",level:3},{value:"length",id:"length",level:4},{value:"left &amp; right",id:"left--right",level:4},{value:"reverse",id:"reverse",level:4},{value:"Working with Dates",id:"working-with-dates",level:3},{value:"AS",id:"as",level:4},{value:"AGE",id:"age",level:4},{value:"DATE_PART &amp; COUNT",id:"date_part--count",level:4},{value:"Changing the Data Type",id:"changing-the-data-type",level:3},{value:"CAST",id:"cast",level:4},{value:"to_date",id:"to_date",level:5},{value:"IS null",id:"is-null",level:3}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Muktinath, Nepal",src:s(16802).A+"",width:"1500",height:"610"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#adding-some-dummy-data-to-work-with",children:"Adding some Dummy Data to work with"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#select-queries",children:"SELECT Queries"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#order-by",children:"ORDER BY"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#where",children:"WHERE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#or",children:"OR"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#and",children:"AND"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#like--lower",children:"LIKE & LOWER"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#like--upper",children:"LIKE & UPPER"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#working-with-numbers",children:"Working with numbers"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#adding-a-another-dataset",children:"Adding a another Dataset"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#alter-table--add-column",children:"ALTER TABLE & ADD COLUMN"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#update--set",children:"UPDATE & SET"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#varchars",children:"VARCHARS"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#length",children:"length"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#left--right",children:"left & right"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#reverse",children:"reverse"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#working-with-dates",children:"Working with Dates"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#as",children:"AS"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#age",children:"AGE"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#datepart--count",children:"DATE_PART & COUNT"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#changing-the-data-type",children:"Changing the Data Type"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#cast",children:"CAST"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#todate",children:"to_date"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#is-null",children:"IS null"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.postgresql.org/download/",children:"Download the Version"})," of PostgreSQL that suits your OS. In my case I will choose the installer certified by EnterpriseDB for Windows 64bit."]}),"\n",(0,r.jsxs)(n.p,{children:["Start the installer and accept the defaults - only add ",(0,r.jsx)(n.strong,{children:"your own password"})," that you will be able to use with the ",(0,r.jsx)(n.strong,{children:"username: postgres"})," to log in to the pgAdmin Control Panel."]}),"\n",(0,r.jsx)(n.h2,{id:"adding-some-dummy-data-to-work-with",children:"Adding some Dummy Data to work with"}),"\n",(0,r.jsxs)(n.p,{children:["We are going to use the free available ",(0,r.jsx)(n.a,{href:"https://www.consumerfinance.gov/data-research/consumer-complaints/",children:"Consumer Complaint Database"})," from the Consumer Financial Protection Bureau."]}),"\n",(0,r.jsxs)(n.p,{children:["Start the ",(0,r.jsx)(n.strong,{children:"pgAdmin4"})," Admin Panel and right-click ",(0,r.jsx)(n.strong,{children:"Databases"})," to create a new db. Give it a name, e.g. ",(0,r.jsx)(n.code,{children:"consumer complaints"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(482910).A+"",width:"950",height:"286"})}),"\n",(0,r.jsxs)(n.p,{children:["Now right-click the newly created Database and selct the ",(0,r.jsx)(n.strong,{children:"Query Tool"}),". Paste the following in and click on ",(0,r.jsx)(n.strong,{children:"Execute"})," to create the ",(0,r.jsx)(n.code,{children:"consumer_complaint"})," table:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE consumer_complaints (\r\n    date_received varchar,\r\n    product_name varchar,\r\n    sub_product varchar,\r\n    issue varchar,\r\n    sub_issue varchar,\r\n    consumer_complaint_narrative varchar,\r\n    company_public_response varchar,\r\n    company varchar,\r\n    state_name varchar,\r\n    zip_code varchar,\r\n    tags varchar,\r\n    consumer_consent_provided varchar,\r\n    submitted_via varchar,\r\n    date_sent varchar,\r\n    company_response_to_consumer varchar,\r\n    timely_response varchar,\r\n    consumer_disputed varchar,\r\n    complaint_id integer\r\n);\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note: If you are running the Astrill VPN client on your System, this will block access to the Query Tool. Add pgAdmin4 to the list of allowed programs that are not forced through the VPN tunnel."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Now we can add the data from the earlier downloaded ",(0,r.jsx)(n.em,{children:"ConsumerComplaints.csv"})," file, by executing the following query (change the path-to-file according to your download folder)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"COPY consumer_complaints FROM 'E:\\postgresql-getting-started\\ConsumerComplaints.csv' DELIMITER ',' CSV HEADER;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(650261).A+"",width:"950",height:"619"})}),"\n",(0,r.jsx)(n.p,{children:"We have now created our schema with 18 columns and copied 65499 data entries from the CSV file into our table. We can check our data by running the following query:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *\r\nFROM consumer_complaints;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"select-queries",children:"SELECT Queries"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"SELECT *"})," allows you to grab the content of ",(0,r.jsx)(n.em,{children:"all columns"})," of your table. If you want to select specific columns you can string them together, separated by commas - e.g. ",(0,r.jsx)(n.code,{children:"SELECT date_received, issue, state_name, tags"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(281164).A+"",width:"950",height:"652"})}),"\n",(0,r.jsx)(n.h4,{id:"order-by",children:"ORDER BY"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *\r\nFROM consumer_complaints\r\nORDER BY company;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *\r\nFROM consumer_complaints\r\nORDER BY zip_code ASC;\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *\r\nFROM consumer_complaints\r\nORDER BY zip_code, date_received DESC;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"where",children:"WHERE"}),"\n",(0,r.jsxs)(n.p,{children:["To Filter your results, by adding a condition with the ",(0,r.jsx)(n.strong,{children:"Where"})," statement:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT product_name, issue\r\nFROM consumer_complaints\r\nWHERE state_name = 'NY';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This query only displays results from the two selected columns inside the referenced table where the ",(0,r.jsx)(n.em,{children:"state_name"})," equals New York. We can also add some logic to our queries - e.g. if we want to know how many complaints weren't answered on the same day we can write the following SQL query:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT company, product_name, issue\r\nFROM consumer_complaints\r\nWHERE date_sent != date_received;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"or",children:"OR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT company, product_name, issue\r\nFROM consumer_complaints\r\nWHERE state_name = 'NY' OR state_name = 'CA';\n"})}),"\n",(0,r.jsx)(n.h4,{id:"and",children:"AND"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT company, product_name\r\nFROM consumer_complaints\r\nWHERE tags = 'Servicemember' AND timely_response = 'Yes';\n"})}),"\n",(0,r.jsx)(n.h4,{id:"like--lower",children:"LIKE & LOWER"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT product_name\r\nFROM consumer_complaints\r\nWHERE LOWER(product_name) LIKE '%credit%';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"LIKE"})," condition allows us to use %-wildcards to search for every value of ",(0,r.jsx)(n.em,{children:"product_name"})," that contains the word ",(0,r.jsx)(n.em,{children:"credit"}),". The Select query is case sensitive - by adding ",(0,r.jsx)(n.strong,{children:"LOWER"})," we transform all ",(0,r.jsx)(n.em,{children:"product_name"})," values to lower-case and then compare it against a lower-case search query. The same can be achieved with using ",(0,r.jsx)(n.strong,{children:"UPPER"})," instead:"]}),"\n",(0,r.jsx)(n.h4,{id:"like--upper",children:"LIKE & UPPER"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT company\r\nFROM consumer_complaints\r\nWHERE UPPER(issue) LIKE '%LATE%';\n"})}),"\n",(0,r.jsx)(n.h4,{id:"working-with-numbers",children:"Working with numbers"}),"\n",(0,r.jsxs)(n.p,{children:["Display all companies that are in an area that zip-code starts with ",(0,r.jsx)(n.code,{children:"12*"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT company, product_name\r\nFROM consumer_complaints\r\nWHERE zip_code LIKE '12___';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["All zip-codes have 5 digits - we signify the position of our search number by adding underscore for every digit that is a wildcard - e.g. ",(0,r.jsx)(n.code,{children:"__1__"})," would hit all zip-codes that have a 1 in the middle. Alternatively, you can also use the ",(0,r.jsx)(n.code,{children:"%"})," syntax to get the same result:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT company, product_name\r\nFROM consumer_complaints\r\nWHERE zip_code LIKE '12%';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"%1%"})," instead would give you all the zip-codes that have a number 1 in ",(0,r.jsx)(n.strong,{children:"any position"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"COUNT"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(company)\r\nFROM consumer_complaints\r\nWHERE LOWER(company) LIKE '%bell%';\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Count all instances where a company with the word ",(0,r.jsx)(n.em,{children:"bell"})," in its name filed a complaint."]}),"\n",(0,r.jsx)(n.h2,{id:"adding-a-another-dataset",children:"Adding a another Dataset"}),"\n",(0,r.jsxs)(n.p,{children:["The .csv files used here can be downloaded from here (",(0,r.jsx)(n.a,{href:"https://www.superdatascience.com/sql/",children:"Section 5"}),"). Right-click ",(0,r.jsx)(n.strong,{children:"Databases"})," to add a new db and name it ",(0,r.jsx)(n.code,{children:"console games"}),". Then create the following tables with the 2 .csv files you just downloaded:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE console_games (\r\n    game_rank integer,\r\n    game_name varchar(1200),\r\n    platform varchar(1200),\r\n    game_year integer,\r\n    genre varchar(20),\r\n    publisher varchar(1200),\r\n    na_sales float8,\r\n    eu_sales float8,\r\n    jp_sales float8,\r\n    other_sales float8\r\n);\r\n\r\nCOPY console_games FROM 'E:\\postgresql-getting-started\\ConsoleGames.csv' DELIMITER ',' CSV HEADER;\n"})}),"\n",(0,r.jsx)(n.p,{children:"and"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE console_dates (\r\n    platform_name char(120),\r\n    first_retail_availability date,\r\n    discontinued date,\r\n    units_sold_mill float8,\r\n    platform_comment varchar(120)    \r\n);\r\n\r\nCOPY console_dates FROM 'E:\\postgresql-getting-started\\ConsoleDates.csv' DELIMITER ',' CSV HEADER;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Lets work with our data and add all NA, EU and JP sales together to get a new colum with ",(0,r.jsx)(n.code,{children:"global_sales"}),":"]}),"\n",(0,r.jsx)(n.h3,{id:"alter-table--add-column",children:"ALTER TABLE & ADD COLUMN"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE console_games\r\nADD COLUMN global_sales float8;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will alternate the table ",(0,r.jsx)(n.em,{children:"console_games"}),"  and add a column named ",(0,r.jsx)(n.em,{children:"global_sales"})," that will receive a number with decimal point. We can now fill in the value by a simple addition:"]}),"\n",(0,r.jsx)(n.h3,{id:"update--set",children:"UPDATE & SET"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE console_games\r\nSET global_sales = na_sales + eu_sales + jp_sales;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we can calculate the percentage of the North-American sales from the global sales:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE console_games\r\nADD COLUMN na_sales_percent float8;\r\n\r\nUPDATE console_games\r\nSET na_sales_percent = na_sales / global_sales * 100\r\nWHERE global_sales > 0;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"varchars",children:"VARCHARS"}),"\n",(0,r.jsxs)(n.p,{children:["Working with ",(0,r.jsx)(n.strong,{children:"String Functions"})]}),"\n",(0,r.jsx)(n.h4,{id:"length",children:"length"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT game_name, length(game_name)\r\nFROM console_games\r\nORDER BY length(game_name) DESC;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Will give us a column with the count of characters inside the name of the game:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(211331).A+"",width:"950",height:"757"})}),"\n",(0,r.jsx)(n.h4,{id:"left--right",children:"left & right"}),"\n",(0,r.jsx)(n.p,{children:"To only grab the first 4 letters of the publisher name:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT left(publisher, 4)\r\nFROM console_games\r\nORDER BY left(publisher, 1) DESC;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"reverse",children:"reverse"}),"\n",(0,r.jsx)(n.p,{children:"Will reverse the order of the characters or numbers of the values of the selected column:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT reverse(genre)\r\nFROM console_games;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"working-with-dates",children:"Working with Dates"}),"\n",(0,r.jsx)(n.h4,{id:"as",children:"AS"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *, discontinued - first_retail_availability AS days_existed\r\nFROM console_dates;\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"AS"})," will create a ",(0,r.jsx)(n.strong,{children:"temporary column"})," (we need to use ALTER TABLE add it permanently) with the number of days a console system was available on the market:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(893754).A+"",width:"950",height:"422"})}),"\n",(0,r.jsx)(n.p,{children:"This can help you to get a quick overview over your data - but isn't very precise e.g.:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *, (discontinued - first_retail_availability)/365 AS years_existed\r\nFROM console_dates\r\nORDER BY years_existed DESC;\n"})}),"\n",(0,r.jsx)(n.h4,{id:"age",children:"AGE"}),"\n",(0,r.jsx)(n.p,{children:"The more accurate way to calculate it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *, AGE(discontinued, first_retail_availability) AS platform_alive\r\nFROM console_dates\r\nORDER BY platform_alive DESC;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(823921).A+"",width:"950",height:"683"})}),"\n",(0,r.jsx)(n.h4,{id:"date_part--count",children:"DATE_PART & COUNT"}),"\n",(0,r.jsxs)(n.p,{children:["The PostgreSQL DATE_PART() function, that allows you to retrieve subfields e.g., year, month, week from a date or time value. E.g. DATE_PART(month) will only subtract the subfield month of a date - you have one date in November and the second in December this will be ",(0,r.jsx)(n.code,{children:"11 - 12 = -1"}),". One use case of this function is to check how many entries are from a specific month of the year:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(platform_name)\r\nFROM console_dates\r\nWHERE DATE_PART('month', first_retail_availability) - 11 = 0 OR DATE_PART('month', first_retail_availability) - 12 = 0;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This query will ",(0,r.jsx)(n.strong,{children:"COUNT"})," all the console systems that were released in November ",(0,r.jsx)(n.strong,{children:"OR"})," December - just in time for the X-mas present madness."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(409704).A+"",width:"950",height:"334"})}),"\n",(0,r.jsx)(n.p,{children:"Or you can check what consoles where released in a specific year:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *\r\nFROM console_dates\r\nWHERE DATE_PART('year', first_retail_availability) - 1990 = 0;\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"PostgrSQL",src:s(191967).A+"",width:"950",height:"404"})}),"\n",(0,r.jsx)(n.p,{children:"The values of the field must be in a list of permitted values mentioned below:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"century"}),"\n",(0,r.jsx)(n.li,{children:"decade"}),"\n",(0,r.jsx)(n.li,{children:"year"}),"\n",(0,r.jsx)(n.li,{children:"month"}),"\n",(0,r.jsx)(n.li,{children:"day"}),"\n",(0,r.jsx)(n.li,{children:"hour"}),"\n",(0,r.jsx)(n.li,{children:"minute"}),"\n",(0,r.jsx)(n.li,{children:"second"}),"\n",(0,r.jsx)(n.li,{children:"microseconds"}),"\n",(0,r.jsx)(n.li,{children:"milliseconds"}),"\n",(0,r.jsx)(n.li,{children:"dow"}),"\n",(0,r.jsx)(n.li,{children:"doy"}),"\n",(0,r.jsx)(n.li,{children:"epoch"}),"\n",(0,r.jsx)(n.li,{children:"isodow"}),"\n",(0,r.jsx)(n.li,{children:"isoyear"}),"\n",(0,r.jsx)(n.li,{children:"timezone"}),"\n",(0,r.jsx)(n.li,{children:"timezone_hour"}),"\n",(0,r.jsx)(n.li,{children:"timezone_minute"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"changing-the-data-type",children:"Changing the Data Type"}),"\n",(0,r.jsx)(n.h4,{id:"cast",children:"CAST"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT CAST(game_year as varchar(4))\r\nFROM console_games\r\nORDER BY game_year;\n"})}),"\n",(0,r.jsx)(n.p,{children:"A shortcut is that will do the same:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT game_year::varchar(4)\r\nFROM console_games\r\nORDER BY game_year;\n"})}),"\n",(0,r.jsx)(n.h5,{id:"to_date",children:"to_date"}),"\n",(0,r.jsx)(n.p,{children:"More useful is the conversion to a date data type:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT to_date(CAST(game_year as varchar(4)), 'yyyy')\r\nFROM console_games\r\nORDER BY game_year;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"is-null",children:"IS null"}),"\n",(0,r.jsxs)(n.p,{children:["Finding undefined fields (notice: we have to use ",(0,r.jsx)(n.strong,{children:"IS"})," instead of an equal sign when working with ",(0,r.jsx)(n.em,{children:"null"})," :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT *\r\nFROM console_games\r\nWHERE game_name IS NULL;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Adding a value to an undefined field:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"UPDATE console_games\r\nSET jp_sales = round((na_sales + eu_sales + other_sales) / 3)\r\nWHERE jp_sales IS null;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},16802:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/photo-15328454698_e5687fc21d_o-d380cbcaca6d6cc21a6566ea950a293f.png"},482910:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_01-2d93c86d465ee7c2ebbf333e0cc2ebcc.png"},650261:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_02-6a256b1dce40e0855df436017c54d03d.png"},281164:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_03-94872712253fc37ee3cf3b8e54fd4540.png"},211331:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_04-64a575ded006681bebfb4e4c74312f61.png"},893754:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_05-0dceb68d14049101a60038e6794b5dce.png"},823921:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_06-ff52eb0984c887aa37d64126210d55f6.png"},409704:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_07-e8758e6cc4c4714e4390f8aeb910851e.png"},191967:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/postgresql_08-4b816b51ffbe4b4842d8db11ad6f8ac9.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>t});var r=s(296540);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);