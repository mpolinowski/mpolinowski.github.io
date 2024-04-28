"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28421],{545027:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=r(474848),s=r(28453);const a={sidebar_position:8070,slug:"2017-12-09",title:"Next.js Server Side Rendering",authors:"mpolinowski",tags:["Javascript","React","Next"]},i="Next.js",o={id:"Development/Javascript/2017-12-09--next-start/index",title:"Next.js Server Side Rendering",description:"Tanna Island, Vanuatu",source:"@site/docs/Development/Javascript/2017-12-09--next-start/index.mdx",sourceDirName:"Development/Javascript/2017-12-09--next-start",slug:"/Development/Javascript/2017-12-09--next-start/2017-12-09",permalink:"/docs/Development/Javascript/2017-12-09--next-start/2017-12-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2017-12-09--next-start/index.mdx",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Next",permalink:"/docs/tags/next"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2017-12-09",title:"Next.js Server Side Rendering",authors:"mpolinowski",tags:["Javascript","React","Next"]},sidebar:"tutorialSidebar",previous:{title:"Gatsby.js Knowledgebase",permalink:"/docs/Development/Javascript/2017-12-14--gatsby-wiki/2017-12-14"},next:{title:"React Router 4",permalink:"/docs/Development/Javascript/2017-12-07--react-router-4/2017-12-07"}},l={},c=[{value:"On my way to figure out to find the best way to deploy a React App",id:"on-my-way-to-figure-out-to-find-the-best-way-to-deploy-a-react-app",level:2},{value:"01 Basic Setup",id:"01-basic-setup",level:2},{value:"02 Styling",id:"02-styling",level:2},{value:"Example",id:"example",level:2},{value:"03 Bootstrap 4",id:"03-bootstrap-4",level:2},{value:"04 Advanced Routing",id:"04-advanced-routing",level:2}];function d(e){const n={a:"a",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tanna Island, Vanuatu",src:r(147130).A+"",width:"1500",height:"597"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/next-start",children:"Github"})}),"\n",(0,t.jsx)(n.h1,{id:"nextjs",children:"Next.js"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#nextjs",children:"Next.js"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#on-my-way-to-figure-out-to-find-the-best-way-to-deploy-a-react-app",children:"On my way to figure out to find the best way to deploy a React App"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#01-basic-setup",children:"01 Basic Setup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#02-styling",children:"02 Styling"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#example",children:"Example"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#03-bootstrap-4",children:"03 Bootstrap 4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#04-advanced-routing",children:"04 Advanced Routing"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"on-my-way-to-figure-out-to-find-the-best-way-to-deploy-a-react-app",children:"On my way to figure out to find the best way to deploy a React App"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/react-router-4",children:"create-react-app"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/gatsby-wiki",children:"GatsbyJS"})}),"\n",(0,t.jsx)(n.li,{children:"Next.js"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Today I want to try out ",(0,t.jsx)(n.a,{href:"https://zeit.co/docs/examples/next",children:"Next.js"})," (",(0,t.jsx)(n.a,{href:"https://github.com/zeit/next.js",children:"Github"}),"). More specifically the new ",(0,t.jsx)(n.a,{href:"https://zeit.co/blog/next4",children:"Next4"})," release that includes ",(0,t.jsx)(n.a,{href:"https://reactjs.org/blog/2017/09/26/react-v16.0.html",children:"React16"})," and ",(0,t.jsx)(n.a,{href:"https://zeit.co/blog/next4",children:"React Router 4"})," - as I already gathered some ",(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/react-router-4",children:"positive experiences"})," with those. There is also an update to ",(0,t.jsx)(n.a,{href:"https://github.com/zeit/styled-jsx/releases/tag/2.0.1",children:"Styled JSX 2"}),", that now allows us to ",(0,t.jsx)(n.strong,{children:"prop"}),"-up our styles, to avoid having to overwrite defaults inline inside components - here the documented example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default ({ color }) => (\r\n    <div>\r\n      Hello there <span>my friend</span>\r\n      <style jsx>{`\r\n        /* this style only applies to the span within lexical scope */\r\n        span { color: ${color}; }\r\n      `}</style>\r\n    </div>\r\n  )\n"})}),"\n",(0,t.jsxs)(n.p,{children:["There are many different ",(0,t.jsx)(n.a,{href:"https://github.com/zeit/next.js/tree/master/examples",children:"examples available"})," to start building your App. All righty, lets go then!"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.img,{src:r(631672).A+"",width:"1257",height:"833"}),"\r\nThe final Application"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"TOC"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#nextjs",children:"Next.js"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#on-my-way-to-figure-out-to-find-the-best-way-to-deploy-a-react-app",children:"On my way to figure out to find the best way to deploy a React App"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#01-basic-setup",children:"01 Basic Setup"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#02-styling",children:"02 Styling"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#example",children:"Example"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#03-bootstrap-4",children:"03 Bootstrap 4"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#04-advanced-routing",children:"04 Advanced Routing"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"01-basic-setup",children:"01 Basic Setup"}),"\n",(0,t.jsxs)(n.p,{children:["First create a directory for our app and ",(0,t.jsx)(n.em,{children:"npm init -y"})," it - then install Next.js and React:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install next@latest react@latest react-dom@latest --save\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We can add the following npm scripts to the ",(0,t.jsx)(n.strong,{children:"package.json"})," file to make things easier:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"'scripts': {\r\n    'dev': 'next',\r\n    'build': 'next build',\r\n    'start': 'next start'\r\n  }\n"})}),"\n",(0,t.jsx)(n.p,{children:"After that, the file-system is the main API. Every .js file becomes a route that gets automatically processed and rendered."}),"\n",(0,t.jsxs)(n.p,{children:["Populate ",(0,t.jsx)(n.em,{children:"./pages/index.js"})," inside your project:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default () => <div>Welcome to next.js!</div>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["and then just run npm run dev and go to ",(0,t.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"}),". To use another port, you can run npm run dev -- -p 'your port here'."]}),"\n",(0,t.jsx)(n.p,{children:"So far, we get:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Automatic transpilation and bundling (with webpack and babel)"}),"\n",(0,t.jsx)(n.li,{children:"Hot code reloading"}),"\n",(0,t.jsx)(n.li,{children:"Server rendering and indexing of ./pages"}),"\n",(0,t.jsx)(n.li,{children:"Static file serving. ./static/ is mapped to /static/"}),"\n",(0,t.jsx)(n.li,{children:"Automatic code splitting - Every import you declare gets bundled and served with each page. That means pages never load unnecessary code!"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"02-styling",children:"02 Styling"}),"\n",(0,t.jsxs)(n.p,{children:["Next.js 4 bundles styled-jsx 2 to provide support for isolated scoped CSS - the ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/styled-jsx",children:"documentation can be found here"}),". A few examples are:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"isolated scoped CSS"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default () => (\r\n  <div>\r\n    <p>only this paragraph will get the style :)</p>\r\n\r\n    { /* you can include <Component />s here that include\r\n         other <p>s that don't get unexpected styles! */ }\r\n\r\n    <style jsx>{`\r\n      p {\r\n        color: red;\r\n      }\r\n    `}</style>\r\n  </div>\r\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Styles can be defined in separate JavaScript modules by tagging with css any template literal that contain CSS. css must be imported from styled-jsx/css:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Keeping CSS in separate files"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"/* styles.js */\r\nimport css from 'styled-jsx/css'\r\n\r\nexport const button = css`button { color: purple; }`\r\nexport default css`div { color: teal; }`\n"})}),"\n",(0,t.jsx)(n.p,{children:"and imported as regular strings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import styles, { button } from './styles'\r\n\r\nexport default () => (\r\n  <div>\r\n    <button>styled-jsx</button>\r\n    <style jsx>{styles}</style>\r\n    <style jsx>{button}</style>\r\n  </div>\r\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["in this example all 'potential' <div>'s inside the components JSX - as well as the enclosing root <div> is targeted by ",(0,t.jsx)(n.code,{children:"{styles}"}),". If you just want to target the root:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Targeting The Root"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default () => (\r\n  <div className='root'>\r\n    <style jsx>{`\r\n      .root {\r\n        color: green;\r\n      }\r\n    `}</style>\r\n  </div>\r\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"To skip scoping entirely, you can make the global-ness of your styles explicit by adding global:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Global styles"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"export default () => (\r\n  <div>\r\n    <style jsx global>{`\r\n      body {\r\n        background: red\r\n      }\r\n    `}</style>\r\n  </div>\r\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can also use modifiers for your CSS classes to create components that can be called in different 'versions', e.g. <Button>Hi</Button> or <Button large>Big</Button>."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"className toggling"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Button = (props) => (\r\n  <button className={ 'large' in props && 'large' }>\r\n     { props.children }\r\n     <style jsx>{`\r\n        button {\r\n          padding: 20px;\r\n          background: #eee;\r\n          color: #999\r\n        }\r\n        .large {\r\n          padding: 50px\r\n        }\r\n     `}</style>\r\n  </button>\r\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can override the CSS you configure via inline-styles:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"inline style"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Button = ({ padding, children }) => (\r\n  <button style={{ padding }}>\r\n     { children }\r\n     <style jsx>{`\r\n        button {\r\n          padding: 20px;\r\n          background: #eee;\r\n          color: #999\r\n        }\r\n     `}</style>\r\n  </button>\r\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In this example, the padding defaults to the one set in <style> (20), but the user can pass a custom one via \\Button padding=",30,"."]}),"\n",(0,t.jsx)(n.p,{children:"It is possible to use constants like so:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Constants"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import { colors, spacing } from '../theme'\r\nimport { invertColor } from '../theme/utils'\r\n\r\nconst Button = ({ children }) => (\r\n  <button>\r\n     { children }\r\n     <style jsx>{`\r\n        button {\r\n          padding: ${ spacing.medium };\r\n          background: ${ colors.primary };\r\n          color: ${ invertColor(colors.primary) };\r\n        }\r\n     `}</style>\r\n  </button>\r\n)\n"})}),"\n",(0,t.jsx)(n.p,{children:"or to pass them down by Props:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Dynamic styles"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const Button = (props) => (\r\n  <button>\r\n     { props.children }\r\n     <style jsx>{`\r\n        button {\r\n          padding: ${ 'large' in props ? '50' : '20' }px;\r\n          background: ${props.theme.background};\r\n          color: #999;\r\n          display: inline-block;\r\n          font-size: 1em;\r\n        }\r\n     `}</style>\r\n  </button>\r\n)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./pages/index.js"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import styles, { hipsterum, imagefloat } from './styles/hipsterum'\r\n\r\nexport default () =>\r\n  <div>\r\n\r\n    <h1>Welcome to next.js!</h1>\r\n    <h3>The awesome World of Server-side Rendering</h3>\r\n    <h5>lets see what this is all about</h5>\r\n    <img src='/static/test.png' className='imagefloat'/>\r\n    <p className='hipsterum'>\r\n      [ipsum...]\r\n    </p>\r\n\r\n    <style jsx>{`\r\n      h1, h5 {\r\n        color: white;\r\n      }\r\n      @media (max-width: 600px) {\r\n        h1, h5 {\r\n          color: black;\r\n        }\r\n      }\r\n    `}</style>\r\n\r\n    <style global jsx>{`\r\n      body {\r\n        background: black;\r\n      }\r\n      @media (max-width: 600px) {\r\n        body {\r\n          background-image: url('/static/test.png');\r\n        }\r\n      }\r\n    `}</style>\r\n\r\n    <style jsx>{styles}</style>\r\n    <style jsx>{imagefloat}</style>\r\n    <style jsx>{hipsterum}</style>\r\n\r\n  </div>\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./pages/styles/hipsterum.js"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import css from 'styled-jsx/css'\r\n\r\nexport const hipsterum = css`.hipsterum {\r\n    color: blue;\r\n    text-align: justify;\r\n  }`\r\n\r\nexport const imagefloat = css`.imagefloat {\r\n    float:right;\r\n    margin-left:10px;\r\n  }`\r\n\r\nexport default css`h3 { color: red; }`\n"})}),"\n",(0,t.jsx)(n.p,{children:"This leads you to an style abomination that will make you cringe :) but uses all the important features of Style-JSX:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"@media queries for responsive designs"}),"\n",(0,t.jsxs)(n.li,{children:["usage of static assets for your designs from the ",(0,t.jsx)(n.em,{children:"./static"})," folder"]}),"\n",(0,t.jsx)(n.li,{children:"inline css and separated css styles in their own files"}),"\n",(0,t.jsx)(n.li,{children:"separation of styles into their own functions to allow you to import only necessary styles"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"03-bootstrap-4",children:"03 Bootstrap 4"}),"\n",(0,t.jsxs)(n.p,{children:["Trying to figure out the best way to add Bootstrap to the Mix - for now I will just add the CDN links to the layout Component in ",(0,t.jsx)(n.em,{children:"./components/layout"}),". This works just like the template component with React-Helmet in create-react-app:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import Link from 'next/link'\r\nimport Head from 'next/head'\r\nimport NavBar from './navbar'\r\n\r\n\r\nexport default ({ children, title = 'This is the default title' }) => (\r\n  <div>\r\n    <Head>\r\n      <title>{ title }</title>\r\n      <meta charSet='utf-8' />\r\n      <meta name='viewport' content='initial-scale=1.0, width=device-width' />\r\n      <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css' integrity='sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb' crossOrigin='anonymous' />\r\n    </Head>\r\n    <header>\r\n      <NavBar />\r\n    </header>\r\n\r\n      <div className='container'>\r\n        <div className='row'>\r\n          <br/><br/><br/><br/>\r\n          { children }\r\n        </div>\r\n      </div>\r\n\r\n    <footer>\r\n      {'I`m a Footer Component'}\r\n      <script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossOrigin='anonymous' />\r\n      <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js' integrity='sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh' crossOrigin='anonymous' />\r\n      <script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js' integrity='sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ' crossOrigin='anonymous' />\r\n    </footer>\r\n  </div>\r\n)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As a first bootstrap component, I added the ",(0,t.jsx)(n.strong,{children:"Bootstrap 4 Navbar"})," we ",(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/react-router-4/blob/master/src/index.js",children:"created earlier"})," and imported it into the header area above:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import Link from 'next/link'\r\n\r\nconst NavBar = () => (\r\n  <div>\r\n    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top mb'>\r\n      <Link href='/'><a className='nav-item nav-link'><img src='/static/logo.svg' alt='INSTAR Wiki' /></a></Link>\r\n\r\n      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#TopNavbar' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>\r\n        <span className='navbar-toggler-icon'></span>\r\n      </button>\r\n\r\n      <div className='collapse navbar-collapse' id='TopNavbar'>\r\n        <ul className='navbar-nav mr-auto'>\r\n          <li className='nav-item'>\r\n            <Link href='/page-1'><a className='nav-item nav-link'>Page 1</a></Link>\r\n          </li>\r\n          <li className='nav-item'>\r\n            <Link href='/page-2'><a className='nav-item nav-link'>Page 2</a></Link>\r\n          </li>\r\n          <li className='nav-item'>\r\n            <Link href='/nested-routes'><a className='nav-item nav-link'>Nested Routes</a></Link>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n  </div>\r\n)\r\n\r\nexport default NavBar\n"})}),"\n",(0,t.jsx)(n.h2,{id:"04-advanced-routing",children:"04 Advanced Routing"}),"\n",(0,t.jsxs)(n.p,{children:["As we already see, Next.js builds routes for each component it finds inside the ",(0,t.jsx)(n.em,{children:"./pages"})," directory. So our index component shows up at the root URL, without us having to do anything - sweet. But what if we need nested routes for our components - say ",(0,t.jsx)(n.em,{children:"page01"})," is a child of ",(0,t.jsx)(n.em,{children:"chapter01"})," and we want it to appear when we type in ",(0,t.jsx)(n.em,{children:"localhost:3000/chapter01/page01"})," ? There are two ways that I found so far:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["next-routes: a neat little ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/next-routes",children:"npm module"})," from also featured as an ",(0,t.jsx)(n.a,{href:"https://github.com/zeit/next.js/tree/master/examples/with-next-routes",children:"Example @Zeit"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Using an Express.js webserver as featured ",(0,t.jsx)(n.a,{href:"https://github.com/zeit/next.js/tree/master/examples/custom-server-express",children:"@Zeit"})," and ",(0,t.jsx)(n.a,{href:"https://medium.com/@diamondgfx/nextjs-lessons-learned-part-2-f1781237cf5c",children:"@Medium"})]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.del,{children:["Lets try out ",(0,t.jsx)(n.strong,{children:"next-routes"})," for this example:"]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.del,{children:"npm install next-routes --save"})," [...]"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Ok, this basically wrecked the whole application"})}),"\n",(0,t.jsxs)(n.p,{children:["I will copy the code to ",(0,t.jsx)(n.em,{children:"./next-routes-wtf"})," and - maybe - try it again later... The result is very inconsistent. You can click on a link and the page loads just fine. If you click on the same link again, or just reload the page, or copy it's URL into another browser, you are very likely to end up seeing the 404 page."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Update"})," It might just have been the way I linked components - the solution, that is coming up below, showed a similar behaviour, when you forget the 'as=' attribute in a link tag."]}),"\n",(0,t.jsxs)(n.p,{children:["Ok - so lets try Express.js now, since I wanted to use it for deployment anyhow. ",(0,t.jsx)(n.a,{href:"https://medium.com/@diamondgfx/nextjs-lessons-learned-part-2-f1781237cf5c",children:"Brandon Richey"})," says, that he ran into the same problems I had with ",(0,t.jsx)(n.em,{children:"next-routes"}),", when using the ",(0,t.jsx)(n.a,{href:"https://github.com/zeit/next.js/tree/master/examples",children:"official documentation"})," for the ",(0,t.jsx)(n.em,{children:"custom server.js"})," setup. So I will stay away from it for now and try his version."]}),"\n",(0,t.jsxs)(n.p,{children:["First install ",(0,t.jsx)(n.a,{href:"http://expressjs.com",children:"Express.js"})," from npm:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npm install --save express\n"})}),"\n",(0,t.jsxs)(n.p,{children:["then create ",(0,t.jsx)(n.em,{children:"./server.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"const express = require('express');\r\nconst { parse } = require('url');\r\nconst next = require('next');\r\n\r\nconst dev = process.env.NODE_ENV !== 'production';\r\nconst app = next({ dev });\r\nconst handle = app.getRequestHandler();\r\n\r\napp.prepare().then(() => {\r\n  const server = express();\r\n\r\n  // CUSTOM ROUTES GO HERE\r\n  server.get('/Products/:slug', (req, res) => {\r\n    const mergedQuery = Object.assign({}, req.query, req.params);\r\n    return app.render(req, res, '/Products', mergedQuery);\r\n  });\r\n\r\n  // THIS IS THE DEFAULT ROUTE, DON'T EDIT THIS\r\n  server.get('*', (req, res) => {\r\n    return handle(req, res);\r\n  });\r\n\r\n  const port = process.env.PORT || 3000;\r\n\r\n  server.listen(port, err => {\r\n    if (err) throw err;\r\n    console.log(`> Ready on port ${port}...`);\r\n  });\r\n});\r\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will give you a param that gets sent to your blog.js component inside of your pages/ directory and give you the custom routing that you want! The client-side linking, assuming we have the route setup above /products/",":slug",", your links to specific slugs would need to be structure using next/link\u2019s Link component via the following:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<Link href={`/base?slug=${slug}`} as={`/base/${slug}`} prefetch>\r\n  ...\r\n</Link>\n"})}),"\n",(0,t.jsx)(n.p,{children:"e.g."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"<Link href={`/Products?slug=${'Outdoor_Cameras'}`} as={`/Products/${'Outdoor_Cameras'}`} prefetch>\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"as"})," is what the user will see in their browser, but ",(0,t.jsx)(n.strong,{children:"href"})," is what next.js will interpret to figure out how things need to get routed. ",(0,t.jsx)(n.em,{children:"Both of these steps are required to make the link behavior and routing behavior behave the same no matter where the page is rendered from!"})]}),"\n",(0,t.jsxs)(n.p,{children:["Now create a Product component in ",(0,t.jsx)(n.em,{children:"./pages/Products.js"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"import React from 'react'\r\n\r\nimport Layout from '../components/layout'\r\n\r\nconst posts = [\r\n  { slug: 'Indoor_Cameras', title: 'Indoor Cameras' },\r\n  { slug: 'Outdoor_Cameras', title: 'Outdoor Cameras' }\r\n]\r\n\r\nexport default class extends React.Component {\r\n  static async getInitialProps ({ query, res }) {\r\n    const post = posts.find(post => post.slug === query.slug)\r\n\r\n    if (!post && res) {\r\n      res.statusCode = 404\r\n    }\r\n\r\n    return { post }\r\n  }\r\n\r\n  render () {\r\n    const { post } = this.props\r\n\r\n    if (!post) return <Layout><h1>Products</h1></Layout>\r\n\r\n    return <Layout><h1>{post.title}</h1></Layout>\r\n  }\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This will load the corresponding posts when you add the right slugs for it - ",(0,t.jsx)(n.em,{children:"/Products/Outdoor_Cameras"})," or ",(0,t.jsx)(n.em,{children:"/Products/Indoor_Cameras"})," or defaults to whatever you add here: ",(0,t.jsx)(n.em,{children:"if (!post) return <Layout><h1>Products</h1></Layout>"})," in case that no match is found."]}),"\n",(0,t.jsx)(n.p,{children:"Finally, you\u2019ll need to modify your package.json file to include everything so that next.js knows how to run the server.js file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"'scripts': {\r\n  'build': 'next build',\r\n  'start': 'node server.js',\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now you can continue to run your dev server with npm run dev and you can build/start your production server as well!"})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},631672:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/next_01-c72355e5caf4ba73307188a90c410288.png"},147130:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/photo-34221454260_1d42dbe06f_o-395c2d2ad3e310ce338caa5e8314ebe8.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var t=r(296540);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);