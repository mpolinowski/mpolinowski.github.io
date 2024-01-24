"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[78370],{496241:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(785893),i=n(603905);const s={sidebar_position:5950,slug:"2022-12-11",title:"11ty Static Site Generator",authors:"mpolinowski",tags:["Javascript"],description:"Eleventy, a simpler static site\xa0generator."},l=void 0,a={id:"Development/Javascript/2022-12-11-11ty-starter/index",title:"11ty Static Site Generator",description:"Eleventy, a simpler static site\xa0generator.",source:"@site/docs/Development/Javascript/2022-12-11-11ty-starter/index.md",sourceDirName:"Development/Javascript/2022-12-11-11ty-starter",slug:"/Development/Javascript/2022-12-11-11ty-starter/2022-12-11",permalink:"/docs/Development/Javascript/2022-12-11-11ty-starter/2022-12-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-12-11-11ty-starter/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:5950,frontMatter:{sidebar_position:5950,slug:"2022-12-11",title:"11ty Static Site Generator",authors:"mpolinowski",tags:["Javascript"],description:"Eleventy, a simpler static site\xa0generator."},sidebar:"tutorialSidebar",previous:{title:"Reactive Search Starter",permalink:"/docs/Development/Javascript/2022-12-29-reactive-search-starter/2022-12-29"},next:{title:"TypeScript 2.0 in React 19 (2023)",permalink:"/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/2022-11-29"}},o={},c=[{value:"Getting Started",id:"getting-started",level:2},{value:"Layouts",id:"layouts",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Shenzhen, China",src:n(143089).Z+"",width:"2208",height:"757"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#getting-started",children:"Getting Started"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#layouts",children:"Layouts"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.11ty.dev/",children:"Eleventy"})," quickly builds speedy web sites. Originally pitched as the JavaScript alternative to Jekyll:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Eleventy is zero-config (by default) with flexible configuration options."}),"\n",(0,r.jsxs)(t.li,{children:["Eleventy works with multiple template languages:","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"HTML"}),": ",(0,r.jsx)(t.em,{children:"*.md .html Markdown"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"WebC"}),": ",(0,r.jsx)(t.em,{children:"*.webc JavaScript"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Liquid"}),": ",(0,r.jsx)(t.em,{children:"*.liquid *.11ty.js"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Nunjucks"}),": ",(0,r.jsx)(t.em,{children:"*.njk"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Handlebars"})," ",(0,r.jsx)(t.em,{children:"*.hbs Mustache"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"mustache"}),": ",(0,r.jsx)(t.em,{children:"*.mustache"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"EJS"}),": ",(0,r.jsx)(t.em,{children:"*.ejs"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Haml"}),": ",(0,r.jsx)(t.em,{children:"*.haml"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Pug"}),": ",(0,r.jsx)(t.em,{children:"*.pug"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Custom"}),": ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.em,{children:"."})})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"echo '<!doctype html><html><head><title>Hello World</title></head><body><a href=\"/README\">README</a></body></html>' > index.html\necho '# README' > README.md\nnpx @11ty/eleventy\n\nNeed to install the following packages:\n  @11ty/eleventy@1.0.2\nOk to proceed? (y) y\n[11ty] Writing _site/README/index.html from ./README.md (liquid)\n[11ty] Wrote 1 file in 0.08 seconds (v1.0.2)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will compile any files matching valid input template file extensions (.md is one of them) in the current directory into the output folder (defaults to ",(0,r.jsx)(t.code,{children:"_site"}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["Run the following command to start up a web server and serve your readme on ",(0,r.jsx)(t.code,{children:"http://localhost:8080/README/"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @11ty/eleventy --serve\n\n[11ty] Writing _site/README/index.html from ./README.md (liquid)\n[11ty] Wrote 1 file in 0.08 seconds (v1.0.2)\n[11ty] Writing _site/README/index.html from ./README.md (liquid)\n[11ty] Wrote 1 file in 0.07 seconds (v1.0.2)\n[11ty] Watching\u2026\n[Browsersync] Access URLs:\n -----------------------------------\n    Local: http://localhost:8080\n -----------------------------------\n[Browsersync] Serving files from: _site\n"})}),"\n",(0,r.jsx)(t.p,{children:"Add more pages with supported file extensions and your HTML code will be created automatically and your browser will reload."}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Important Note"}),": Editing README.md won't refresh your browser automatically, because ",(0,r.jsx)(t.a,{href:"https://browsersync.io/docs/#requirements",children:"Browsersync requires a body tag in your template for live-reload"})," to work properly. Use Layouts to add a ",(0,r.jsx)(t.code,{children:"<body>"})," around your Markdown content."]}),"\n",(0,r.jsx)(t.h2,{id:"layouts",children:"Layouts"}),"\n",(0,r.jsxs)(t.p,{children:["Eleventy Layouts are special templates that can be used to wrap other content. To denote that a piece of content should be wrapped in a template, use the layout key in your ",(0,r.jsx)(t.strong,{children:"Front Matter"}),". So we can replace the content of the ",(0,r.jsx)(t.code,{children:"README.md"})," file with:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-md",children:"---\nlayout: layouts/base.njk\ntitle: README\n---\n## {{ title }}\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This will look for a ",(0,r.jsx)(t.code,{children:"base.njk"})," Nunjucks file in your includes folder at ",(0,r.jsx)(t.code,{children:"_includes/layouts/base.njk"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-md",children:'---\ntitle: Hi there!\n---\n\n<!doctype html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>{{ title }}</title>\n  </head>\n  <body>\n    <div><h1>Page HEADER</h1></div>\n    {{ content | safe }}\n  </body>\n</html>\n'})})]})}function h(e={}){const{wrapper:t}={...(0,i.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,o=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||s;return n?r.createElement(m,l(l({ref:t},h),{},{components:n})):r.createElement(m,l({ref:t},h))}));h.displayName="MDXCreateElement"},143089:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"}}]);