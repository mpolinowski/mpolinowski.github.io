"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[23879],{839799:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=r(474848),a=r(28453);const t={sidebar_position:8040,slug:"2021-03-28",title:"Elasticsearch 7 Timeseries",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},i=void 0,c={id:"DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index",title:"Elasticsearch 7 Timeseries",description:"Kathmandu, Nepal",source:"@site/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries",slug:"/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/2021-03-28",permalink:"/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/2021-03-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-28-elasticsearch7-timeseries/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2021-03-28",title:"Elasticsearch 7 Timeseries",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch 7 Data Transformation",permalink:"/docs/DevOps/Elasticsearch/2021-03-29-elasticsearch7-data-transformations/2021-03-29"},next:{title:"Elasticsearch 7 Aggregations",permalink:"/docs/DevOps/Elasticsearch/2021-03-27-elasticsearch7-aggregations/2021-03-27"}},o={},l=[{value:"How many Events Happend?",id:"how-many-events-happend",level:2},{value:"How many Events had the User Agent Firefox?",id:"how-many-events-had-the-user-agent-firefox",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Kathmandu, Nepal",src:r(660627).A+"",width:"1500",height:"645"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-many-events-happend",children:"How many Events Happend?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-many-events-had-the-user-agent-firefox",children:"How many Events had the User Agent Firefox?"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-many-events-happend",children:"How many Events Happend?"}),"\n",(0,s.jsx)(n.p,{children:"We already worked with Timeseries when we created histograms from our server logs in Kinbana. The query that was run in the background to create those visualisations looks something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'curl -H "Content-Type: application/json" -XGET \'localhost:9200/apache-access-log/_search?size=0&pretty\' -d\'\r\n{\r\n  "aggs": {\r\n    "timestamp": {\r\n      "date_histogram": {\r\n        "field": "@timestamp",\r\n        "interval": "day"\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This will run the query on my ",(0,s.jsx)(n.a,{href:"#apache-access-logs",children:"Apache Access Log"})," and result in a list of how many events (documents) happened each day:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "timestamp" : {\r\n      "buckets" : [\r\n        {\r\n          "key_as_string" : "2017-04-30T00:00:00.000Z",\r\n          "key" : 1493510400000,\r\n          "doc_count" : 14166\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-01T00:00:00.000Z",\r\n          "key" : 1493596800000,\r\n          "doc_count" : 15948\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-02T00:00:00.000Z",\r\n          "key" : 1493683200000,\r\n          "doc_count" : 16278\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-03T00:00:00.000Z",\r\n          "key" : 1493769600000,\r\n          "doc_count" : 21172\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-04T00:00:00.000Z",\r\n          "key" : 1493856000000,\r\n          "doc_count" : 16762\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-05T00:00:00.000Z",\r\n          "key" : 1493942400000,\r\n          "doc_count" : 18646\r\n        }\r\n      ]\r\n    }\r\n  }\n'})}),"\n",(0,s.jsx)(n.h2,{id:"how-many-events-had-the-user-agent-firefox",children:"How many Events had the User Agent Firefox?"}),"\n",(0,s.jsx)(n.p,{children:"Just as before we are now able to combine our aggregation with a filter query that narrows down our results. For example, how many user that interacted with our web service used Firefox as their browser:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'curl -H "Content-Type: application/json" -XGET \'localhost:9200/apache-access-log/_search?size=0&pretty\' -d\'\r\n{\r\n  "query" : {\r\n    "match": {\r\n      "agent.name": "Firefox"\r\n    }\r\n  },\r\n  "aggs": {\r\n    "timestamp": {\r\n      "date_histogram": {\r\n        "field": "@timestamp",\r\n        "interval": "day"\r\n      }\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"aggregations" : {\r\n    "timestamp" : {\r\n      "buckets" : [\r\n        {\r\n          "key_as_string" : "2017-04-30T00:00:00.000Z",\r\n          "key" : 1493510400000,\r\n          "doc_count" : 1532\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-01T00:00:00.000Z",\r\n          "key" : 1493596800000,\r\n          "doc_count" : 2551\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-02T00:00:00.000Z",\r\n          "key" : 1493683200000,\r\n          "doc_count" : 2861\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-03T00:00:00.000Z",\r\n          "key" : 1493769600000,\r\n          "doc_count" : 2615\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-04T00:00:00.000Z",\r\n          "key" : 1493856000000,\r\n          "doc_count" : 1099\r\n        },\r\n        {\r\n          "key_as_string" : "2017-05-05T00:00:00.000Z",\r\n          "key" : 1493942400000,\r\n          "doc_count" : 1264\r\n        }\r\n      ]\r\n    }\r\n  }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},660627:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-fbd4676f624c629e309228fcc970b82b.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(296540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);