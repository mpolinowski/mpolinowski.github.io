"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[57902],{314711:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var s=r(785893),l=r(603905);const a={sidebar_position:9080,slug:"2020-05-03",title:"Neo4j Cypher Cheat Sheet",authors:"mpolinowski",tags:["Databases","Neo4j"]},i=void 0,d={id:"Development/Graphs/2020-05-03--neo4j-cheat-sheet/index",title:"Neo4j Cypher Cheat Sheet",description:"Maritime Museum, Hong Kong",source:"@site/docs/Development/Graphs/2020-05-03--neo4j-cheat-sheet/index.mdx",sourceDirName:"Development/Graphs/2020-05-03--neo4j-cheat-sheet",slug:"/Development/Graphs/2020-05-03--neo4j-cheat-sheet/2020-05-03",permalink:"/docs/Development/Graphs/2020-05-03--neo4j-cheat-sheet/2020-05-03",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Graphs/2020-05-03--neo4j-cheat-sheet/index.mdx",tags:[{label:"Databases",permalink:"/docs/tags/databases"},{label:"Neo4j",permalink:"/docs/tags/neo-4-j"}],version:"current",sidebarPosition:9080,frontMatter:{sidebar_position:9080,slug:"2020-05-03",title:"Neo4j Cypher Cheat Sheet",authors:"mpolinowski",tags:["Databases","Neo4j"]},sidebar:"tutorialSidebar",previous:{title:"Neo4j Corona Tracing",permalink:"/docs/Development/Graphs/2020-05-04--neo4j-corona-tracing/2020-05-04"},next:{title:"Neo4j Movie Graph",permalink:"/docs/Development/Graphs/2020-05-02--neo4j-movie-graph/2020-05-02"}},t={},o=[{value:"Cypher Fundamentals",id:"cypher-fundamentals",level:2},{value:"Browser editor",id:"browser-editor",level:2},{value:"CLI",id:"cli",level:3},{value:"Match",id:"match",level:2},{value:"Match node",id:"match-node",level:3},{value:"Match nodes and relationships",id:"match-nodes-and-relationships",level:3},{value:"Match labels",id:"match-labels",level:3},{value:"Match multiple labels",id:"match-multiple-labels",level:3},{value:"Match same properties",id:"match-same-properties",level:3},{value:"Match friends of friends with same hobbies",id:"match-friends-of-friends-with-same-hobbies",level:3},{value:"Match by ID",id:"match-by-id",level:3},{value:"Create",id:"create",level:2},{value:"Create node",id:"create-node",level:3},{value:"Create nodes and relationships",id:"create-nodes-and-relationships",level:3},{value:"Create relationship between 2 unrelated nodes",id:"create-relationship-between-2-unrelated-nodes",level:3},{value:"Create node with multiple labels",id:"create-node-with-multiple-labels",level:3},{value:"Update",id:"update",level:2},{value:"Update node properties (add new or modify)",id:"update-node-properties-add-new-or-modify",level:3},{value:"Replace all node properties for the new ones",id:"replace-all-node-properties-for-the-new-ones",level:3},{value:"Add new node properties without deleting old ones",id:"add-new-node-properties-without-deleting-old-ones",level:3},{value:"Add new node property if property not already set",id:"add-new-node-property-if-property-not-already-set",level:3},{value:"Rename a property in all nodes",id:"rename-a-property-in-all-nodes",level:3},{value:"Add label to existing node",id:"add-label-to-existing-node",level:3},{value:"Creates the node if not exists and updates (or creates) a property",id:"creates-the-node-if-not-exists-and-updates-or-creates-a-property",level:3},{value:"Delete",id:"delete",level:2},{value:"Delete nodes",id:"delete-nodes",level:3},{value:"Deletes a property in a specific node",id:"deletes-a-property-in-a-specific-node",level:3},{value:"Delete a label from all nodes",id:"delete-a-label-from-all-nodes",level:3},{value:"Delete a label from nodes with specific labels",id:"delete-a-label-from-nodes-with-specific-labels",level:3},{value:"Delete multiple labels from nodes",id:"delete-multiple-labels-from-nodes",level:3},{value:"Delete entire database",id:"delete-entire-database",level:3},{value:"Other clauses",id:"other-clauses",level:2},{value:"Show execution plan",id:"show-execution-plan",level:3},{value:"Count",id:"count",level:3},{value:"Limit",id:"limit",level:3},{value:"Create unique property constraint",id:"create-unique-property-constraint",level:3},{value:"Drop unique property constraint",id:"drop-unique-property-constraint",level:3},{value:"Useful Cypher Queries for Neo4J",id:"useful-cypher-queries-for-neo4j",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Maritime Museum, Hong Kong",src:r(692099).Z+"",width:"1500",height:"713"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cypher-fundamentals",children:"Cypher Fundamentals"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#browser-editor",children:"Browser editor"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#cli",children:"CLI"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#match",children:"Match"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-node",children:"Match node"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-nodes-and-relationships",children:"Match nodes and relationships"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-labels",children:"Match labels"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-multiple-labels",children:"Match multiple labels"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-same-properties",children:"Match same properties"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-friends-of-friends-with-same-hobbies",children:"Match friends of friends with same hobbies"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#match-by-id",children:"Match by ID"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#create",children:"Create"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-node",children:"Create node"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-nodes-and-relationships",children:"Create nodes and relationships"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-relationship-between-2-unrelated-nodes",children:"Create relationship between 2 unrelated nodes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-node-with-multiple-labels",children:"Create node with multiple labels"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#update",children:"Update"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#update-node-properties-add-new-or-modify",children:"Update node properties (add new or modify)"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#replace-all-node-properties-for-the-new-ones",children:"Replace all node properties for the new ones"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-new-node-properties-without-deleting-old-ones",children:"Add new node properties without deleting old ones"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-new-node-property-if-property-not-already-set",children:"Add new node property if property not already set"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#rename-a-property-in-all-nodes",children:"Rename a property in all nodes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#add-label-to-existing-node",children:"Add label to existing node"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#creates-the-node-if-not-exists-and-updates-or-creates-a-property",children:"Creates the node if not exists and updates (or creates) a property"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#delete",children:"Delete"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#delete-nodes",children:"Delete nodes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#deletes-a-property-in-a-specific-node",children:"Deletes a property in a specific node"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#delete-a-label-from-all-nodes",children:"Delete a label from all nodes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#delete-a-label-from-nodes-with-specific-labels",children:"Delete a label from nodes with specific labels"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#delete-multiple-labels-from-nodes",children:"Delete multiple labels from nodes"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#delete-entire-database",children:"Delete entire database"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#other-clauses",children:"Other clauses"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#show-execution-plan",children:"Show execution plan"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#count",children:"Count"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#limit",children:"Limit"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#create-unique-property-constraint",children:"Create unique property constraint"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#drop-unique-property-constraint",children:"Drop unique property constraint"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#useful-cypher-queries-for-neo4j",children:"Useful Cypher Queries for Neo4J"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Just a bunch of cyphering I found online - all in one place for easy consumption"})}),"\n",(0,s.jsx)(n.h2,{id:"cypher-fundamentals",children:"Cypher Fundamentals"}),"\n",(0,s.jsx)(n.p,{children:"Store any kind of data using the following graph concepts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Node"}),": Graph data records"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Relationship"}),": Connect nodes (has direction and a type)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Property"}),": Stores data in key-value pair in nodes and relationships"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Label"}),": Groups nodes and relationships (optional)"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"browser-editor",children:"Browser editor"}),"\n",(0,s.jsx)(n.h3,{id:"cli",children:"CLI"}),"\n",(0,s.jsxs)(n.p,{children:["Examples: ",(0,s.jsx)(n.code,{children:":help"})," ",(0,s.jsx)(n.code,{children:":clear"})]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"match",children:"Match"}),"\n",(0,s.jsx)(n.h3,{id:"match-node",children:"Match node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (ee:Person)\r\nWHERE ee.name = "Romeo"\r\nRETURN ee;\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MATCH"})," clause to specify a pattern of nodes and relationships"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["(ee",":Person",")"]})," a single node pattern with label 'Person' which will assign matches to the variable ",(0,s.jsx)(n.code,{children:"ee"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"WHERE"})," clause to constrain the results"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:'ee.name = "Romeo"'}),' compares name property to the value "Romeo"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"RETURN"})," clause used to request particular results"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Gets gets the id 5  and id 0  nodes and creates a ",(0,s.jsx)(n.code,{children:":KNOWS"})," relationship between them"]}),"\n",(0,s.jsx)(n.h3,{id:"match-nodes-and-relationships",children:"Match nodes and relationships"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (ee:Person)-[:KNOWS]-(friends)\r\nWHERE ee.name = "Romeo"\r\nRETURN ee, friends\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MATCH"})," clause to describe the pattern from known Nodes to found Nodes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"(ee)"})," starts the pattern with a Person (qualified by WHERE)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["-[",":KNOWS","]-"]}),' matches "KNOWS" relationships (in either direction)']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"(friends)"})," will be bound to Romeo's friends"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"match-labels",children:"Match labels"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n:Person)\r\nRETURN n\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE n:Person\r\nRETURN n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"match-multiple-labels",children:"Match multiple labels"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:":Car"})," ",(0,s.jsx)(n.strong,{children:"OR"})," ",(0,s.jsx)(n.code,{children:":Person"})," labels"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE n:Person OR n:Car\r\nRETURN n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:":Car"})," ",(0,s.jsx)(n.strong,{children:"AND"})," ",(0,s.jsx)(n.code,{children:":Person"})," labels"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE n:Person:Car\r\nRETURN n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"match-same-properties",children:"Match same properties"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (a:Person)\r\nWHERE a.from = "Korea"\r\nRETURN a\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Returns every node (and their relationships) where there's a property ",(0,s.jsx)(n.code,{children:"from"}),' with "Korea" value']}),"\n",(0,s.jsx)(n.h3,{id:"match-friends-of-friends-with-same-hobbies",children:"Match friends of friends with same hobbies"}),"\n",(0,s.jsx)(n.p,{children:"Johan is learning surfing, and wants to know any friend of his friends who already knows surfing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (js:Person)-[:KNOWS]-()-[:KNOWS]-(surfer)\r\nWHERE js.name = "Johan" AND surfer.hobby = "surfing"\r\nRETURN DISTINCT surfer\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"()"})," empty parenthesis to ignore these nodes"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DISTINCT"})," because more than one path will match the pattern"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"surfer"})," will contain Allison, a friend of a friend who surfs"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"match-by-id",children:"Match by ID"}),"\n",(0,s.jsxs)(n.p,{children:["Every node and relationship has an internal autonumeric ID, which can be queried using ** ",(0,s.jsx)(n.strong,{children:", ** ="}),", ",(0,s.jsx)(n.strong,{children:"="}),", **= **, **  ** and ",(0,s.jsx)(n.strong,{children:"IN"})," operators:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Search node by ID"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE id(n) = 0\r\nRETURN n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Search multiple nodes by ID"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE id(n) IN [1, 2, 3]\r\nRETURN n\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Search relationship by ID"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH ()-[n]-()\r\nWHERE id(n) = 0\r\nRETURN n\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"create",children:"Create"}),"\n",(0,s.jsx)(n.h3,{id:"create-node",children:"Create node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'CREATE (ee:Person { name: "Romeo", from: "Korea", klout: 99 })\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CREATE"})," clause to create data"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"()"})," parenthesis to indicate a node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:["ee",":Person"]})," a variable ",(0,s.jsx)(n.code,{children:"ee"})," and label ",(0,s.jsx)(n.code,{children:"Person"})," for the new node"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{})," brackets to add properties (key-value pairs) to the node"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-nodes-and-relationships",children:"Create nodes and relationships"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (ee:Person) WHERE ee.name = "Romeo"\r\nCREATE (js:Person { name: "Johan", from: "Korea", learn: "surfing" }),\r\n(ir:Person { name: "Ian", from: "England", title: "author" }),\r\n(rvb:Person { name: "Rik", from: "Belgium", pet: "Orval" }),\r\n(ally:Person { name: "Allison", from: "California", hobby: "surfing" }),\r\n(ee)-[:KNOWS {since: 2001}]- (js),(ee)-[:KNOWS {rating: 5}]- (ir),\r\n(js)-[:KNOWS]- (ir),(js)-[:KNOWS]- (rvb),\r\n(ir)-[:KNOWS]- (js),(ir)-[:KNOWS]- (ally),\r\n(rvb)-[:KNOWS]- (ally)\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MATCH"}),' clause to get "Romeo" in ',(0,s.jsx)(n.code,{children:"ee"})," variable"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CREATE"})," clause to create multiple nodes (comma separated) with their labels and properties. Also creates directed relationships ",(0,s.jsx)(n.code,{children:"(a)-[:Label {key: value}]- (b)"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"create-relationship-between-2-unrelated-nodes",children:"Create relationship between 2 unrelated nodes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n), (m)\r\nWHERE n.name = "Allison" AND m.name = "Romeo"\r\nCREATE (n)-[:KNOWS]- (m)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Alternative with ",(0,s.jsx)(n.code,{children:"MERGE"}),", which ensures that the relationship is created only ",(0,s.jsx)(n.strong,{children:"once"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n:User {name: "Allison"}), (m:User {name: "Romeo"})\r\nMERGE (n)-[:KNOWS]- (m)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-node-with-multiple-labels",children:"Create node with multiple labels"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CREATE (n:Actor:Director)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"update",children:"Update"}),"\n",(0,s.jsx)(n.h3,{id:"update-node-properties-add-new-or-modify",children:"Update node properties (add new or modify)"}),"\n",(0,s.jsxs)(n.p,{children:["Add new ",(0,s.jsx)(n.code,{children:".owns"})," property or modify (if exists)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n)\r\nWHERE n.name = "Rik"\r\nSET n.owns = "Audi"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"replace-all-node-properties-for-the-new-ones",children:"Replace all node properties for the new ones"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Danger"}),": It will delete all previous properties and create ",(0,s.jsx)(n.code,{children:".plays"})," and ",(0,s.jsx)(n.code,{children:".age"})," properties"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n)\r\nWHERE n.name = "Rik"\r\nSET n = {plays: "Piano", age: 23}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"add-new-node-properties-without-deleting-old-ones",children:"Add new node properties without deleting old ones"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Danger"}),": If ",(0,s.jsx)(n.code,{children:".plays"})," or ",(0,s.jsx)(n.code,{children:".age"})," properties are already set, it will overwrite them"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n)\r\nWHERE n.name = "Rik"\r\nSET n += {plays: "Piano", age: 23}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"add-new-node-property-if-property-not-already-set",children:"Add new node property if property not already set"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n)\r\nWHERE n.plays = "Guitar" AND NOT (EXISTS (n.likes))\r\nSET n.likes = "Movies"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"rename-a-property-in-all-nodes",children:"Rename a property in all nodes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE NOT (EXISTS (n.instrument))\r\nSET n.instrument = n.plays\r\nREMOVE n.plays\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternative"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE n.instrument is null\r\nSET n.instrument = n.plays\r\nREMOVE n.plays\n"})}),"\n",(0,s.jsx)(n.h3,{id:"add-label-to-existing-node",children:"Add label to existing node"}),"\n",(0,s.jsxs)(n.p,{children:["Adds the ",(0,s.jsx)(n.code,{children:":Food"})," label to nodes id 7  and id 8"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE id(n) IN [7, 8]\r\nSET n:Food\n"})}),"\n",(0,s.jsx)(n.h3,{id:"creates-the-node-if-not-exists-and-updates-or-creates-a-property",children:"Creates the node if not exists and updates (or creates) a property"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MERGE (n:Person {name: "Rik"})\r\nSET n.owns = "Audi"\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"delete",children:"Delete"}),"\n",(0,s.jsx)(n.h3,{id:"delete-nodes",children:"Delete nodes"}),"\n",(0,s.jsxs)(n.p,{children:["To ",(0,s.jsx)(n.strong,{children:"delete a node"})," (p.e. id 5 ), first we need to ",(0,s.jsx)(n.strong,{children:"delete its relationships"}),". Then, the node can be deleted"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)-[r]-()\r\nWHERE id(n) = 5\r\nDELETE r, n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To ",(0,s.jsx)(n.strong,{children:"delete multiple nodes"})," (must have their relationships previously deleted)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE id(n) IN [1, 2, 3]\r\nDELETE n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"deletes-a-property-in-a-specific-node",children:"Deletes a property in a specific node"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n)\r\nWHERE n:Person AND n.name = "Rik" AND n.plays is NOT null\r\nREMOVE n.plays\n'})}),"\n",(0,s.jsx)(n.p,{children:"Alternative"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (n)\r\nWHERE n:Person AND n.name = "Rik" AND EXISTS (n.plays)\r\nREMOVE n.plays\n'})}),"\n",(0,s.jsx)(n.h3,{id:"delete-a-label-from-all-nodes",children:"Delete a label from all nodes"}),"\n",(0,s.jsxs)(n.p,{children:["Deletes the ",(0,s.jsx)(n.code,{children:":Person"})," label from ",(0,s.jsx)(n.strong,{children:"all"})," nodes"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nREMOVE n:Person\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-a-label-from-nodes-with-specific-labels",children:"Delete a label from nodes with specific labels"}),"\n",(0,s.jsxs)(n.p,{children:["Deletes the ",(0,s.jsx)(n.code,{children:":Person"})," label from nodes with ",(0,s.jsx)(n.code,{children:":Food"})," and ",(0,s.jsx)(n.code,{children:":Person"})," labels"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE n:Food:Person\r\nREMOVE n:Person\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-multiple-labels-from-nodes",children:"Delete multiple labels from nodes"}),"\n",(0,s.jsxs)(n.p,{children:["Deletes the ",(0,s.jsx)(n.code,{children:":Food"})," and ",(0,s.jsx)(n.code,{children:":Person"})," labels from nodes which have ",(0,s.jsx)(n.strong,{children:"both"})," labels"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nWHERE n:Food:Person\r\nREMOVE n:Food:Person\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Danger"}),": Deletes the ",(0,s.jsx)(n.code,{children:":Food"})," and ",(0,s.jsx)(n.code,{children:":Person"})," labels from nodes which have ",(0,s.jsx)(n.code,{children:":Food"})," or ",(0,s.jsx)(n.code,{children:":Person"})," or ",(0,s.jsx)(n.code,{children:":Food:Person"})," labels"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nREMOVE n:Food:Person\n"})}),"\n",(0,s.jsx)(n.h3,{id:"delete-entire-database",children:"Delete entire database"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nOPTIONAL MATCH (n)-[r]-()\r\nDELETE n, r\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"other-clauses",children:"Other clauses"}),"\n",(0,s.jsx)(n.h3,{id:"show-execution-plan",children:"Show execution plan"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"PROFILE"})," or ",(0,s.jsx)(n.code,{children:"EXPLAIN"})," before the query"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PROFILE"}),": Shows the execution plan, query information and ",(0,s.jsx)(n.strong,{children:"db hits"}),". Example: Cypher version: CYPHER 3.0, planner: COST, runtime: INTERPRETED. 84 total db hits in 32 ms."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"EXPLAIN"}),": Shows the execution plan and query information. Example: Cypher version: CYPHER 3.0, planner: COST, runtime: INTERPRETED."]}),"\n",(0,s.jsx)(n.h3,{id:"count",children:"Count"}),"\n",(0,s.jsx)(n.p,{children:"Count all nodes"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH (n)\r\nRETURN count(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Count all relationships"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"MATCH ()-- ()\r\nRETURN count(*);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"limit",children:"Limit"}),"\n",(0,s.jsxs)(n.p,{children:["Returns up to 2 nodes (and their relationships) where there's a property ",(0,s.jsx)(n.code,{children:"from"}),' with "Korea" value']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'MATCH (a:Person)\r\nWHERE a.from = "Korea"\r\nRETURN a\r\nLIMIT 2\n'})}),"\n",(0,s.jsx)(n.h3,{id:"create-unique-property-constraint",children:"Create unique property constraint"}),"\n",(0,s.jsxs)(n.p,{children:["Make ",(0,s.jsx)(n.code,{children:".name"})," property unique on nodes with ",(0,s.jsx)(n.code,{children:":Person"})," label"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"CREATE CONSTRAINT ON (n:Person)\r\nASSERT n.name IS UNIQUE\n"})}),"\n",(0,s.jsx)(n.h3,{id:"drop-unique-property-constraint",children:"Drop unique property constraint"}),"\n",(0,s.jsxs)(n.p,{children:["Make ",(0,s.jsx)(n.code,{children:".name"})," property unique on nodes with ",(0,s.jsx)(n.code,{children:":Person"})," label"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DROP CONSTRAINT ON (n:Person)\r\nASSERT n.name IS UNIQUE\r\n```## Useful Cypher Queries for Neo4J\r\n\r\n\r\nFind the unique labels that appear in the database:\r\n\r\n```bash\r\nmatch n\r\nreturn distinct labels(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find the unique relationships that appear in the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"match n-[r]-()\r\nreturn distinct type(r)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Combine the previous two queries to return the unique combinations relationships and labels in the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"match n-[r]-()\r\nreturn distinct labels(n), type(r)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find nodes that don't have any relationships:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[r?]-()\r\nwhere r is null\r\nreturn n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find all nodes that have a specific property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n\r\nwhere has(n.someProperty)\r\nreturn n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find all nodes that have a specific relationship (regardless of the direction of the relationship):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[:SOME_RELATIONSHIP]-()\r\nreturn distinct n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Show the nodes and a count of the number of relationships that they have:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[r]-()\r\nreturn n, count(r) as rel_count\r\norder by rel_count desc\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get a count of all nodes in your graph:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n\r\nreturn count(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"To delete all nodes in a database (first you have to delete all relationships)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[r]-()\r\ndelete r\r\n\r\nstart n=node(*)\r\nmatch n\r\ndelete n\n"})}),"\n",(0,s.jsx)(n.p,{children:"A simple query to get nodes of a certain category that match a certain property"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'match (n:Person) where n.name="Tim" return n\n'})}),"\n",(0,s.jsx)(n.h2,{id:"useful-cypher-queries-for-neo4j",children:"Useful Cypher Queries for Neo4J"}),"\n",(0,s.jsx)(n.p,{children:"Find the unique labels that appear in the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"match n\r\nreturn distinct labels(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find the unique relationships that appear in the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"match n-[r]-()\r\nreturn distinct type(r)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Combine the previous two queries to return the unique combinations relationships and labels in the database:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"match n-[r]-()\r\nreturn distinct labels(n), type(r)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find nodes that don't have any relationships:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[r?]-()\r\nwhere r is null\r\nreturn n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find all nodes that have a specific property:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n\r\nwhere has(n.someProperty)\r\nreturn n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Find all nodes that have a specific relationship (regardless of the direction of the relationship):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[:SOME_RELATIONSHIP]-()\r\nreturn distinct n\n"})}),"\n",(0,s.jsx)(n.p,{children:"Show the nodes and a count of the number of relationships that they have:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[r]-()\r\nreturn n, count(r) as rel_count\r\norder by rel_count desc\n"})}),"\n",(0,s.jsx)(n.p,{children:"Get a count of all nodes in your graph:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n\r\nreturn count(n)\n"})}),"\n",(0,s.jsx)(n.p,{children:"To delete all nodes in a database (first you have to delete all relationships)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"start n=node(*)\r\nmatch n-[r]-()\r\ndelete r\r\n\r\nstart n=node(*)\r\nmatch n\r\ndelete n\n"})}),"\n",(0,s.jsx)(n.p,{children:"A simple query to get nodes of a certain category that match a certain property"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'match (n:Person) where n.name="Tim" return n\n'})})]})}function c(e={}){const{wrapper:n}={...(0,l.ah)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>o});var s=r(667294);function l(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){l(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function d(e,n){if(null==e)return{};var r,s,l=function(e,n){if(null==e)return{};var r,s,l={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||(l[r]=e[r]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var t=s.createContext({}),o=function(e){var n=s.useContext(t),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},h={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},c=s.forwardRef((function(e,n){var r=e.components,l=e.mdxType,a=e.originalType,t=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=o(r),j=l,x=p["".concat(t,".").concat(j)]||p[j]||h[j]||a;return r?s.createElement(x,i(i({ref:n},c),{},{components:r})):s.createElement(x,i({ref:n},c))}));c.displayName="MDXCreateElement"},692099:(e,n,r)=>{r.d(n,{Z:()=>s});const s=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-38ec9d8e27c926288ad1334767bdcc79.jpg"}}]);