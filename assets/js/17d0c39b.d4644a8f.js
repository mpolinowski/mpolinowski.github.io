"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[75937],{780101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=n(785893),r=n(603905);const s={sidebar_position:5940,slug:"2022-12-29",title:"Reactive Search Starter",authors:"mpolinowski",tags:["Javascript"],description:"Use the ReactiveSearch library to build a React.js Interface for Elasticsearch and OpenSearch."},i=void 0,c={id:"Development/Javascript/2022-12-29-reactive-search-starter/index",title:"Reactive Search Starter",description:"Use the ReactiveSearch library to build a React.js Interface for Elasticsearch and OpenSearch.",source:"@site/docs/Development/Javascript/2022-12-29-reactive-search-starter/index.md",sourceDirName:"Development/Javascript/2022-12-29-reactive-search-starter",slug:"/Development/Javascript/2022-12-29-reactive-search-starter/2022-12-29",permalink:"/docs/Development/Javascript/2022-12-29-reactive-search-starter/2022-12-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-12-29-reactive-search-starter/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:5940,frontMatter:{sidebar_position:5940,slug:"2022-12-29",title:"Reactive Search Starter",authors:"mpolinowski",tags:["Javascript"],description:"Use the ReactiveSearch library to build a React.js Interface for Elasticsearch and OpenSearch."},sidebar:"tutorialSidebar",previous:{title:"React Frontend for MeiLi Search",permalink:"/docs/Development/Javascript/2023-02-12-react-meili-search-starter/2023-02-12"},next:{title:"11ty Static Site Generator",permalink:"/docs/Development/Javascript/2022-12-11-11ty-starter/2022-12-11"}},o={},l=[{value:"Create-React-App",id:"create-react-app",level:2},{value:"Connecting to the Cluster",id:"connecting-to-the-cluster",level:3},{value:"Adding Search and Aggregation Components",id:"adding-search-and-aggregation-components",level:3},{value:"DataSearch",id:"datasearch",level:4},{value:"MultiList",id:"multilist",level:4},{value:"Adding Results Component",id:"adding-results-component",level:3},{value:"Adding Layout and Styles",id:"adding-layout-and-styles",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Shenzhen, China",src:n(876421).Z+"",width:"2208",height:"757"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#create-react-app",children:"Create-React-App"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#connecting-to-the-cluster",children:"Connecting to the Cluster"})}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#adding-search-and-aggregation-components",children:"Adding Search and Aggregation Components"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#datasearch",children:"DataSearch"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#multilist",children:"MultiList"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#adding-results-component",children:"Adding Results Component"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#adding-layout-and-styles",children:"Adding Layout and Styles"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://docs.reactivesearch.io/docs/gettingstarted/quickstart/",children:"ReactiveSearch.io"})," provides a supercharged Elasticsearch experience for creating the most demanding app search experiences with a no-code search relevance control plane, UI builder, out-of-the-box search analytics and low-code UI components."]}),"\n",(0,a.jsx)(t.p,{children:"To be able to use the library with your own installation of Elasticsearch or Opensearch you first need to define a user role for the search client. This role needs to have read access to all indexies you want to be able to run searches against:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Reactive Search Starter",src:n(322694).Z+"",width:"1340",height:"712"})}),"\n",(0,a.jsxs)(t.p,{children:["I am going to use this role on an anonymous user to be able to run searches ",(0,a.jsx)(t.a,{href:"/docs/DevOps/Elasticsearch/2022-10-12--opensearch-rest-api/2022-10-12",children:"against the Elasticsearch REST API"})," without needing to authenticate - ",(0,a.jsx)(t.strong,{children:"Note"})," that to be able to use the ",(0,a.jsx)(t.a,{href:"/docs/DevOps/Elasticsearch/2022-02-02--elasticsearch-v8-upgrade/2022-02-02",children:"Anonymous User"})," you need to activate it in ",(0,a.jsx)(t.em,{children:"elasticsearch/config/elasticsearch.yml"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Reactive Search Starter",src:n(534361).Z+"",width:"1344",height:"594"})}),"\n",(0,a.jsx)(t.p,{children:"I can now create a file that holds the information my client needs to connect to the Elasticsearch cluster, e.g.:"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"ElasticParam.js"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"export const _connectionString = 'https://my.search.com';\nexport const _index = 'my_index_2022_12_28'; \n"})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-10-07-python-docusaurus-elasticsearch/2022-10-07#mapping",children:"Search Index Mapping"})," I am using here has a few keys that I will be running searches against:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:'"field": "title",'}),"\n",(0,a.jsx)(t.li,{children:'"field": "description",'}),"\n",(0,a.jsx)(t.li,{children:'"field": "tags",'}),"\n",(0,a.jsx)(t.li,{children:'"field": "abstract",'}),"\n",(0,a.jsx)(t.li,{children:'"field": "short",'}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"create-react-app",children:"Create-React-App"}),"\n",(0,a.jsx)(t.p,{children:"With Elasticsearch/Opensearch set up we can now start coding the search interface. For this example I am going to scaffold a basic React.js App and install the ReactiveSearch library using:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npx create-react-app reactive-search-starter && cd reactive-search-starter\nnpm install @appbaseio/reactivesearch\n"})}),"\n",(0,a.jsx)(t.h3,{id:"connecting-to-the-cluster",children:"Connecting to the Cluster"}),"\n",(0,a.jsxs)(t.p,{children:["Update ",(0,a.jsx)(t.code,{children:"src/App.js"})," to add ReactiveBase component and import the Elasticsearch connection info created earlier:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:"import React from 'react'\nimport { ReactiveBase, DataSearch } from '@appbaseio/reactivesearch'\n\nimport { _connectionString, _index } from './ElasticParam'\n\nfunction App() {\n  return (\n    <ReactiveBase\n        url={_connectionString}\n        app={_index}\n        theme={{\n          colors: {\n            primaryColor: \"#bebebe\",\n            textColor: \"#7e7e7e\"\n          },\n        }}\n    >\n      PlaceHolder Text to be Replaced by later Search Components\n    </ReactiveBase>\n  );\n}\n\nexport default App\n"})}),"\n",(0,a.jsx)(t.h3,{id:"adding-search-and-aggregation-components",children:"Adding Search and Aggregation Components"}),"\n",(0,a.jsxs)(t.p,{children:["For this app, I will be using ",(0,a.jsx)(t.strong,{children:"DataSearch"})," and ",(0,a.jsx)(t.strong,{children:"MultiList"})," components for searching and filtering on the index. And ",(0,a.jsx)(t.strong,{children:"ResultCard"})," component for showing the search results."]}),"\n",(0,a.jsx)(t.h4,{id:"datasearch",children:"DataSearch"}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"DataSearch"})," component creates a searchbox UI component that queries on the specified fields with weights as specified by dataField prop. That's all it takes to create a functional search component."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'<DataSearch\n\tcomponentId="searchbox"\n  placeholder="Search Assistant"\n\tdataField={[\n\t\t{\n\t\t\t"field": "title",\n\t\t\t"weight": 5\n\t\t},\n\t\t{\n\t\t\t"field": "description",\n\t\t\t"weight": 3\n\t\t},\n\t\t{\n\t\t\t"field": "tags.raw",\n\t\t\t"weight": 5\n\t\t},\n\t\t{\n\t\t\t"field": "abstract",\n\t\t\t"weight": 2\n\t\t},\n\t\t{\n\t\t\t"field": "short",\n\t\t\t"weight": 2\n\t\t},\n\t]}\n/>\n'})}),"\n",(0,a.jsx)(t.h4,{id:"multilist",children:"MultiList"}),"\n",(0,a.jsxs)(t.p,{children:["Next, we have to add the ",(0,a.jsx)(t.strong,{children:"MultiList"})," component. This creates a multiple selection aggregation to filter the search results by."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'<MultiList\n\tcomponentId="searchfilter"\n\tdataField="tags.raw"\n\ttitle="Filter by Tags"\n\taggregationSize={10}\n/>\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Aggregation components like MultiList fire a term type query. You can think of a term query as an exact match query. The field you are using to aggregate over needs to be of type ",(0,a.jsx)(t.code,{children:"keyword"}),". In ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-10-07-python-docusaurus-elasticsearch/2022-10-07#mapping",children:"my mapping"})," this is the case for ",(0,a.jsx)(t.code,{children:"tags.raw"}),". The aggregationSize prop is used to specify the total aggregations (think buckets) that you want returned based on the dataField value."]}),"\n",(0,a.jsx)(t.h3,{id:"adding-results-component",children:"Adding Results Component"}),"\n",(0,a.jsxs)(t.p,{children:["The results component displays the articles that we're searching for. We will use the ",(0,a.jsx)(t.strong,{children:"ReactiveList"})," component with the ",(0,a.jsx)(t.strong,{children:"ResultCard"})," preset."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'<ReactiveList\n  componentId="results"\n  dataField="_score"\n  size={35}\n  pagination={true}\n  react={{\n    and: ["searchbox", "searchfilter"]\n  }}\n  render={({ data }) => (\n    <ReactiveList.ResultCardsWrapper>\n    {data.map((item) => (\n      <ResultCard key={item._id}>\n      <ResultCard.Image src={item.imagesquare} />\n      <ResultCard.Title\n        dangerouslySetInnerHTML={{\n        __html: item.title\n        }}\n      />\n      <ResultCard.Description>\n        {item.abstract}\n      </ResultCard.Description>\n      </ResultCard>\n    ))}\n    </ReactiveList.ResultCardsWrapper>\n  )}\n/>\n'})}),"\n",(0,a.jsx)(t.h3,{id:"adding-layout-and-styles",children:"Adding Layout and Styles"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"ReactiveSearch"})," doesn't use a layout system internally. But it is easy to add some CSS Flex:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:'<ReactiveBase>\n\t<div style={{ display: "flex", flexDirection: "row" }}>\n\t\t<div style={{ display: "flex", flexDirection: "column", width: "30%", margin: "10px" }}>\n\t\t\t<MultiList/>\n\t\t\t<SingleRange/>\n\t\t</div>\n\t\t<div style={{ display: "flex", flexDirection: "column", width: "66%" }}>\n\t\t\t<DataSearch/>\n\t\t\t<ReactiveList/>\n\t\t</div>\n\t</div>\n</ReactiveBase>\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Reactive Search Starter",src:n(422432).Z+"",width:"1316",height:"728"})})]})}function h(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>l});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),l=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,g=p["".concat(o,".").concat(u)]||p[u]||d[u]||s;return n?a.createElement(g,i(i({ref:t},h),{},{components:n})):a.createElement(g,i({ref:t},h))}));h.displayName="MDXCreateElement"},322694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ReactiveSearch_React_App_01-f1205f00e4fcd4d2cff4a82a34850e42.png"},534361:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ReactiveSearch_React_App_02-78fcb13ce96a3dfdf3837ba86411f45b.png"},422432:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ReactiveSearch_React_App_03-b27a23e586c16d49f5ad8e3901e8ee8f.png"},876421:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"}}]);