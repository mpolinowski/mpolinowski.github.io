"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[55046],{739641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(785893),a=t(603905);const s={sidebar_position:6020,slug:"2022-03-01",title:"Working with JSON APIs",authors:"mpolinowski",tags:["Javascript"]},o=void 0,i={id:"Development/Javascript/2022-03-01--json-apis-training/index",title:"Working with JSON APIs",description:"Shenzhen, China",source:"@site/docs/Development/Javascript/2022-03-01--json-apis-training/index.md",sourceDirName:"Development/Javascript/2022-03-01--json-apis-training",slug:"/Development/Javascript/2022-03-01--json-apis-training/2022-03-01",permalink:"/docs/Development/Javascript/2022-03-01--json-apis-training/2022-03-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-03-01--json-apis-training/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:6020,frontMatter:{sidebar_position:6020,slug:"2022-03-01",title:"Working with JSON APIs",authors:"mpolinowski",tags:["Javascript"]},sidebar:"tutorialSidebar",previous:{title:"Docusaurus Introduction",permalink:"/docs/Development/Javascript/2022-07-01-docusaurus-introduction/2022-07-01"},next:{title:"Reconnecting Websockets",permalink:"/docs/Development/Javascript/2021-09-10--websocket-recconects/2021-09-10"}},l={},c=[{value:"Local JSON Data",id:"local-json-data",level:2},{value:"HTML",id:"html",level:3},{value:"JSON",id:"json",level:3},{value:"Javascript",id:"javascript",level:3},{value:"Local Randomized JSON Data",id:"local-randomized-json-data",level:2},{value:"HTML",id:"html-1",level:3},{value:"JSON",id:"json-1",level:3},{value:"Javascript",id:"javascript-1",level:3},{value:"External JSON API",id:"external-json-api",level:2},{value:"Javascript",id:"javascript-2",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:t(852475).Z+"",width:"1500",height:"515"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#local-json-data",children:"Local JSON Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#html",children:"HTML"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#json",children:"JSON"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#javascript",children:"Javascript"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#local-randomized-json-data",children:"Local Randomized JSON Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#html-1",children:"HTML"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#json-1",children:"JSON"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#javascript-1",children:"Javascript"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#external-json-api",children:"External JSON API"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#javascript-2",children:"Javascript"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/json-mock-apis",children:"Github Repository"})}),"\n",(0,r.jsx)(n.h2,{id:"local-json-data",children:"Local JSON Data"}),"\n",(0,r.jsx)(n.h3,{id:"html",children:"HTML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n    <head>\r\n        <meta charset="utf-8">\r\n        <title>JS APIs</title>\r\n        <meta name="description" content="Literary Classic Search Engine.">\r\n        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\r\n        <link href="/styles/style.css" rel="stylesheet" />\r\n    </head>\r\n    <body>\r\n        <main>\r\n            <h1>Loading... </h1>\r\n            <p>Loading... </p>\r\n        </main>\r\n        <script src=\'/scripts/quote.js\'><\/script>\r\n    </body>\r\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"json",children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{ "id": 1, "quote": "Hello World", "author": "Me" }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"javascript",children:"Javascript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const quoteTag = document.querySelector("h1")\r\nconst authorTag = document.querySelector("p")\r\n\r\n\r\n// select HTML tags to fill with data\r\nconst getQuote = function () {\r\n    fetch("/data/quote.json")\r\n        .then(response => response.json())\r\n        .then(jsonData => {\r\n            quoteTag.innerHTML = "&ldquo; " + jsonData.quote + " &rdquo;"\r\n            authorTag.innerHTML = "&mdash; " + jsonData.author\r\n        })\r\n}\r\n\r\n// get data on page load\r\ngetQuote()\n'})}),"\n",(0,r.jsx)(n.h2,{id:"local-randomized-json-data",children:"Local Randomized JSON Data"}),"\n",(0,r.jsx)(n.h3,{id:"html-1",children:"HTML"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\r\n<html lang="en">\r\n    <head>\r\n        <meta charset="utf-8">\r\n        <title>JS APIs</title>\r\n        <meta name="description" content="Literary Classic Search Engine.">\r\n        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">\r\n        <link href="/styles/style.css" rel="stylesheet" />\r\n    </head>\r\n    <body>\r\n        <main>\r\n            <h1>Loading... </h1>\r\n            <p>Loading... </p>\r\n        </main>\r\n        <footer>\r\n            <img src="/assets/random.svg">\r\n        </footer>\r\n        <script src=\'/scripts/quotes.js\'><\/script>\r\n    </body>\r\n</html>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"json-1",children:"JSON"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'[\r\n    { "id": 1, "quote": "Quote 1", "author": "Author1" },\r\n    { "id": 2, "quote": "Quote 3", "author": "Author3" },\r\n    { "id": 3, "quote": "Quote 4", "author": "Author4" },\r\n    { "id": 4, "quote": "Quote 5", "author": "Author5" }\r\n]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"javascript-1",children:"Javascript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const quoteTag = document.querySelector("h1")\r\nconst authorTag = document.querySelector("p")\r\nconst randomTag = document.querySelector("footer img")\r\n\r\n// select HTML tags to fill with data\r\nconst getQuote = function () {\r\n    if(data.length > 0) {\r\n        // Get random quotes\r\n        const randomNumber = Math.floor(Math.random() * data.length)\r\n        const randomQuote = data[randomNumber]\r\n        quoteTag.innerHTML = "&ldquo; " + randomQuote.quote + " &rdquo;"\r\n        authorTag.innerHTML = "&mdash; " + randomQuote.author\r\n    }\r\n}\r\n\r\n// get local json data\r\nlet data = []\r\nfetch("/data/quotes.json").then(response =>\r\n    response.json()\r\n).then(jsonData => {\r\n    data = jsonData\r\n    // get initial quote\r\n    getQuote()\r\n})\r\n\r\n// get new quote on button press\r\nrandomTag.addEventListener("click", function() {\r\n    getQuote()\r\n}) \n'})}),"\n",(0,r.jsx)(n.h2,{id:"external-json-api",children:"External JSON API"}),"\n",(0,r.jsx)(n.p,{children:"The fetch promise also works with external URLs (be careful with Same-Origin...)."}),"\n",(0,r.jsx)(n.h3,{id:"javascript-2",children:"Javascript"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'// get external json data\r\nlet data = []\r\nfetch("http://localhost:8080/data/quotes.json").then(response =>\r\n    response.json()\r\n).then(jsonData => {\r\n    data = jsonData\r\n    // get initial quote\r\n    getQuote()\r\n})\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(667294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),u=c(t),p=a,j=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return t?r.createElement(j,o(o({ref:n},h),{},{components:t})):r.createElement(j,o({ref:n},h))}));h.displayName="MDXCreateElement"},852475:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-85bcf61875292779bdd01b7861da19b0.jpg"}}]);