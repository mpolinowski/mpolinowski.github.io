"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[6810],{285420:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var a=r(474848),s=r(28453);const t={sidebar_position:7020,slug:"2021-05-12",title:"Carbon Design System in React.js - Part III",authors:"mpolinowski",tags:["Javascript","Electron","React"]},o=void 0,i={id:"Development/Javascript/2021-05-12-carbon-design-react-part3/index",title:"Carbon Design System in React.js - Part III",description:"Guangzhou, China",source:"@site/docs/Development/Javascript/2021-05-12-carbon-design-react-part3/index.md",sourceDirName:"Development/Javascript/2021-05-12-carbon-design-react-part3",slug:"/Development/Javascript/2021-05-12-carbon-design-react-part3/2021-05-12",permalink:"/docs/Development/Javascript/2021-05-12-carbon-design-react-part3/2021-05-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-05-12-carbon-design-react-part3/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Electron",permalink:"/docs/tags/electron"},{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:7020,frontMatter:{sidebar_position:7020,slug:"2021-05-12",title:"Carbon Design System in React.js - Part III",authors:"mpolinowski",tags:["Javascript","Electron","React"]},sidebar:"tutorialSidebar",previous:{title:"MQTT Webfrontend with React.js",permalink:"/docs/Development/Javascript/2021-06-01--mqtt-with-reactjs/2021-06-01"},next:{title:"Carbon Design System in React.js - Part II",permalink:"/docs/Development/Javascript/2021-05-11-carbon-design-react-part2/2021-05-11"}},c={},d=[{value:"Landing Page Styles",id:"landing-page-styles",level:2},{value:"Banner",id:"banner",level:3},{value:"Introduction Block",id:"introduction-block",level:3},{value:"About Page Styles",id:"about-page-styles",level:2},{value:"Adding the Page Grid",id:"adding-the-page-grid",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Guangzhou, China",src:r(201036).A+"",width:"1500",height:"543"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#landing-page-styles",children:"Landing Page Styles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#banner",children:"Banner"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#introduction-block",children:"Introduction Block"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#about-page-styles",children:"About Page Styles"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#adding-the-page-grid",children:"Adding the Page Grid"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/electron-react-app",children:"Github Resourcesitory"})}),"\n",(0,a.jsxs)(n.p,{children:["Continuation of ",(0,a.jsx)(n.a,{href:"/docs/Development/Javascript/2021-05-11-carbon-design-react-part2/2021-05-11",children:"Part II"})," - Using the ",(0,a.jsx)(n.a,{href:"https://www.carbondesignsystem.com/",children:"IBM Carbon Design System"})," in a ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/create-a-new-react-app.html",children:"React App"}),"."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Carbon Design System",src:r(113334).A+"",width:"1281",height:"642"})}),"\n",(0,a.jsx)(n.h2,{id:"landing-page-styles",children:"Landing Page Styles"}),"\n",(0,a.jsxs)(n.p,{children:["I\u2019ll be using the ",(0,a.jsx)(n.a,{href:"https://www.carbondesignsystem.com/guidelines/spacing/overview",children:"Carbon Design spacing tokens"})," in ",(0,a.jsx)(n.code,{children:"src/app.scss"}),", add these imports at the top of the file so we can use Carbon breakpoints, tokens, and typography Sass mixins and functions:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:"@import 'carbon-components/scss/globals/scss/vendor/@carbon/type/scss/font-family.scss';\r\n@import 'carbon-components/scss/globals/scss/vendor/@carbon/layout/scss/breakpoint.scss';\r\n@import 'carbon-components/scss/globals/scss/typography.scss';\r\n@import 'carbon-components/scss/globals/scss/vars.scss';\n"})}),"\n",(0,a.jsx)(n.h3,{id:"banner",children:"Banner"}),"\n",(0,a.jsxs)(n.p,{children:["We are now able to use the spacing tokens in ",(0,a.jsx)(n.code,{children:"src/content/LandingPage/_landing-page.scss"})," to add ",(0,a.jsx)(n.a,{href:"https://www.carbondesignsystem.com/guidelines/spacing/overview#spacing-scale",children:"some space"})," above the breadcrumb and below the heading:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:".landing-page__banner {\r\n  padding-top: $spacing-05;\r\n  padding-bottom: $spacing-07 * 4;\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The banner should have a light gray background colour which we can define in a SASS mixin in ",(0,a.jsx)(n.code,{children:"src/content/LandingPage/_mixins.scss"})," using a ",(0,a.jsx)(n.a,{href:"https://www.carbondesignsystem.com/guidelines/color/usage",children:"Carbon Colour Token"})," ",(0,a.jsx)(n.code,{children:"$ui-01"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:"@mixin landing-page-background() {\r\n  background-color: $ui-01;\r\n  position: relative;\r\n  &::before {\r\n    content: '';\r\n    position: absolute;\r\n    left: -$spacing-06;\r\n    top: 0;\r\n    right: -$spacing-06;\r\n    bottom: 0;\r\n    background: $ui-01;\r\n    z-index: -1;\r\n  }\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For this to take effect we need to import our mixin into ",(0,a.jsx)(n.code,{children:"src/content/LandingPage/_landing-page.scss"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:"@import './mixins.scss';\r\n@import './overrides.scss';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And update the ",(0,a.jsx)(n.code,{children:".landing-page__banner"})," declaration block ",(0,a.jsx)(n.code,{children:"src/content/LandingPage/_landing-page.scss"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:".landing-page__banner {\r\n  padding-top: $spacing-05;\r\n  padding-bottom: $spacing-07 * 4;\r\n  @include landing-page-background;\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["And while we are at it - let's handle the heading type using ",(0,a.jsx)(n.a,{href:"https://www.carbondesignsystem.com/guidelines/typography/productive",children:"Carbon Type Tokens"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:".landing-page__heading {\r\n  @include carbon--type-style('productive-heading-05');\r\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"introduction-block",children:"Introduction Block"}),"\n",(0,a.jsxs)(n.p,{children:["Again, we need to take care of the spacing and types to make this block on the landing page fit into our design - ",(0,a.jsx)(n.code,{children:"src/content/LandingPage/_landing-page.scss"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:".landing-page__r2 {\r\n  margin-top: rem(-40px);\r\n}\r\n\r\n.landing-page__tab-content {\r\n  padding-top: $layout-05;\r\n  padding-bottom: $layout-05;\r\n}\r\n\r\n.landing-page__subheading {\r\n  @include carbon--type-style('productive-heading-03');\r\n  @include carbon--font-weight('semibold');\r\n}\r\n\r\n.landing-page__r3 {\r\n  padding-top: $spacing-09;\r\n  padding-bottom: $spacing-09;\r\n  @include landing-page-background;\r\n}\r\n\r\n.landing-page__label {\r\n  @include carbon--type-style('heading-01');\r\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"about-page-styles",children:"About Page Styles"}),"\n",(0,a.jsx)(n.h3,{id:"adding-the-page-grid",children:"Adding the Page Grid"}),"\n",(0,a.jsxs)(n.p,{children:["Now in our ",(0,a.jsx)(n.code,{children:"AboutPage.js"})," we\u2019ll add our grid containers in the return section - ",(0,a.jsx)(n.code,{children:"src/content/AboutPage/AboutPage.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'return (\r\n  <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">\r\n    <div className="bx--row repo-page__r1">\r\n      <div className="bx--col-lg-16">Data table will go here</div>\r\n    </div>\r\n  </div>\r\n);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The About page should contain a table with links to further information. Let's create this table in ",(0,a.jsx)(n.code,{children:"src/content/AboutPage/AboutTable.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import React from 'react';\r\nimport {\r\n  DataTable,\r\n  TableContainer,\r\n  Table,\r\n  TableHead,\r\n  TableRow,\r\n  TableExpandHeader,\r\n  TableHeader,\r\n  TableBody,\r\n  TableExpandRow,\r\n  TableCell,\r\n  TableExpandedRow,\r\n} from 'carbon-components-react';\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This component uses two props, rows and headers, and returns a ",(0,a.jsx)(n.a,{href:"http://react.carbondesignsystem.com/?selectedKind=DataTable&selectedStory=with%20expansion",children:"Carbon DataTable"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'const AboutTable = ({ rows, headers }) => {\r\n  return (\r\n    <DataTable\r\n      rows={rows}\r\n      headers={headers}\r\n      render={({\r\n        rows,\r\n        headers,\r\n        getHeaderProps,\r\n        getRowProps,\r\n        getTableProps,\r\n      }) => (\r\n        <TableContainer\r\n          title="Carbon Resources"\r\n          description="A collection of public Carbon info material.">\r\n          <Table {...getTableProps()}>\r\n            <TableHead>\r\n              <TableRow>\r\n                <TableExpandHeader />\r\n                {headers.map(header => (\r\n                  <TableHeader {...getHeaderProps({ header })}>\r\n                    {header.header}\r\n                  </TableHeader>\r\n                ))}\r\n              </TableRow>\r\n            </TableHead>\r\n            <TableBody>\r\n              {rows.map(row => (\r\n                <React.Fragment key={row.id}>\r\n                  <TableExpandRow {...getRowProps({ row })}>\r\n                    {row.cells.map(cell => (\r\n                      <TableCell key={cell.id}>{cell.value}</TableCell>\r\n                    ))}\r\n                  </TableExpandRow>\r\n                  <TableExpandedRow colSpan={headers.length + 1}>\r\n                    <p>Row description</p>\r\n                  </TableExpandedRow>\r\n                </React.Fragment>\r\n              ))}\r\n            </TableBody>\r\n          </Table>\r\n        </TableContainer>\r\n      )}\r\n    />\r\n  );\r\n};\r\n\r\nexport default AboutTable;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"getTableProps"}),", ",(0,a.jsx)(n.code,{children:"getHeaderProps"}),", and ",(0,a.jsx)(n.code,{children:"getRowProps"})," functions each tell the ",(0,a.jsx)(n.code,{children:"DataTable"})," component to process and return the necessary props that are needed by the ",(0,a.jsx)(n.code,{children:"Table"}),", ",(0,a.jsx)(n.code,{children:"Header"})," and ",(0,a.jsx)(n.code,{children:"Row"})," components respectively. We take the return of that function (an object containing the props) and ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/jsx-in-depth.html#spread-attributes",children:"spread it out"})," into the component."]}),"\n",(0,a.jsxs)(n.p,{children:["To render the table we now need to import it into ",(0,a.jsx)(n.code,{children:"src/content/AboutPage/AboutPage.js"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import AboutTable from './AboutTable';\n"})}),"\n",(0,a.jsx)(n.p,{children:"Then below the imports, include the following arrays to pass into the ResourceTable component:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const headers = [\r\n  {\r\n    key: 'name',\r\n    header: 'Name',\r\n  },\r\n  {\r\n    key: 'createdAt',\r\n    header: 'Created',\r\n  },\r\n  {\r\n    key: 'updatedAt',\r\n    header: 'Updated',\r\n  },\r\n  {\r\n    key: 'issueCount',\r\n    header: 'Open Issues',\r\n  },\r\n  {\r\n    key: 'stars',\r\n    header: 'Stars',\r\n  },\r\n  {\r\n    key: 'links',\r\n    header: 'Links',\r\n  },\r\n];\r\nconst rows = [\r\n  {\r\n    id: '1',\r\n    name: 'Resource 1',\r\n    createdAt: 'Date',\r\n    updatedAt: 'Date',\r\n    issueCount: '123',\r\n    stars: '456',\r\n    links: 'Links',\r\n  },\r\n  {\r\n    id: '2',\r\n    name: 'Resource 2',\r\n    createdAt: 'Date',\r\n    updatedAt: 'Date',\r\n    issueCount: '123',\r\n    stars: '456',\r\n    links: 'Links',\r\n  },\r\n  {\r\n    id: '3',\r\n    name: 'Resource 3',\r\n    createdAt: 'Date',\r\n    updatedAt: 'Date',\r\n    issueCount: '123',\r\n    stars: '456',\r\n    links: 'Links',\r\n  },\r\n];\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Lastly in ",(0,a.jsx)(n.code,{children:"AboutPage.js"}),", we need to simply replace ",(0,a.jsx)(n.strong,{children:"Data table will go here"})," with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"<AboutTable headers={headers} rows={rows} />\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Now we just need to add some spacing around our table - ",(0,a.jsx)(n.code,{children:"src/content/AboutPage/_about-page.scss"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-scss",children:".repo-page .bx--row {\r\n  padding-top: $spacing-05;\r\n  padding-bottom: $spacing-05;\r\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},113334:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/Carbon_Design_System_01-764b195227b283d83cf76fa855da9a65.png"},201036:(e,n,r)=>{r.d(n,{A:()=>a});const a=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-3e0da3e4b757265a38041198744da6f5.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var a=r(296540);const s={},t=a.createContext(s);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);