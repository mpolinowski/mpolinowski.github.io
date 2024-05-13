"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95024],{901439:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(474848),t=n(28453);const s={sidebar_position:8080,slug:"2017-12-07",title:"React Router 4",authors:"mpolinowski",tags:["Javascript","React"]},o=void 0,i={id:"Development/Javascript/2017-12-07--react-router-4/index",title:"React Router 4",description:"Hongkong",source:"@site/docs/Development/Javascript/2017-12-07--react-router-4/index.mdx",sourceDirName:"Development/Javascript/2017-12-07--react-router-4",slug:"/Development/Javascript/2017-12-07--react-router-4/2017-12-07",permalink:"/docs/Development/Javascript/2017-12-07--react-router-4/2017-12-07",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2017-12-07--react-router-4/index.mdx",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2017-12-07",title:"React Router 4",authors:"mpolinowski",tags:["Javascript","React"]},sidebar:"tutorialSidebar",previous:{title:"Next.js Server Side Rendering",permalink:"/docs/Development/Javascript/2017-12-09--next-start/2017-12-09"},next:{title:"React under the Hood",permalink:"/docs/Development/Javascript/2017-09-03--react-under-the-hood/2017-09-03"}},c={},l=[{value:"01 create-react-app",id:"01-create-react-app",level:2},{value:"02 react-bootstrap",id:"02-react-bootstrap",level:2},{value:"03 react-router-dom",id:"03-react-router-dom",level:2},{value:"04 Nested Routes",id:"04-nested-routes",level:2},{value:"05 Loading Animations",id:"05-loading-animations",level:2}];function d(e){const a={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Hongkong",src:n(158882).A+"",width:"1500",height:"626"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.a,{href:"https://github.com/mpolinowski/react-router-4",children:"Github"})}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"React Router 4",src:n(184221).A+"",width:"903",height:"697"})}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#01-create-react-app",children:"01 create-react-app"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#02-react-bootstrap",children:"02 react-bootstrap"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#03-react-router-dom",children:"03 react-router-dom"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#04-nested-routes",children:"04 Nested Routes"})}),"\n",(0,r.jsx)(a.li,{children:(0,r.jsx)(a.a,{href:"#05-loading-animations",children:"05 Loading Animations"})}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"01-create-react-app",children:"01 create-react-app"}),"\n",(0,r.jsxs)(a.p,{children:["We use the ",(0,r.jsx)(a.a,{href:"https://github.com/facebookincubator/create-react-app",children:"Facebook React Boilerplate"})," to get started:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"create-react-app react-router-4\n"})}),"\n",(0,r.jsx)(a.h2,{id:"02-react-bootstrap",children:"02 react-bootstrap"}),"\n",(0,r.jsxs)(a.p,{children:["And add some ",(0,r.jsx)(a.a,{href:"https://react-bootstrap.github.io/getting-started.html",children:"Bootstrap"})," for styling:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"npm install --save react-bootstrap\n"})}),"\n",(0,r.jsxs)(a.p,{children:["We can now add the Bootsrap CSS inside the head of ",(0,r.jsx)(a.em,{children:"./public/index.html"})," :"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-html",children:"<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css' integrity='sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb' crossorigin='anonymous'>\n"})}),"\n",(0,r.jsx)(a.p,{children:"And the Javascript at the end of the body tag:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-html",children:"<script src='https://code.jquery.com/jquery-3.2.1.slim.min.js' integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN' crossorigin='anonymous'><\/script>\r\n<script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js' integrity='sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh' crossorigin='anonymous'><\/script>\r\n<script src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js' integrity='sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ' crossorigin='anonymous'><\/script>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["To add a simple Navbar on top, we will now replace the default create-react-app JSX inside ",(0,r.jsx)(a.em,{children:"./src/coponents/app.js"})," with a Bootstrap Navbar from their ",(0,r.jsx)(a.a,{href:"https://getbootstrap.com/docs/4.0/examples/",children:"Example list"})," (remember to replace all instances of ",(0,r.jsx)(a.strong,{children:"class"})," with ",(0,r.jsx)(a.strong,{children:"className"}),"!):"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"return (\r\n  <div className='App'>\r\n    <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top mb'>\r\n      <a className='navbar-brand' href='#'>React Router 4</a>\r\n      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>\r\n        <span className='navbar-toggler-icon'></span>\r\n      </button>\r\n\r\n      <div className='collapse navbar-collapse' id='navbarsExampleDefault'>\r\n        <ul className='navbar-nav mr-auto'>\r\n          <li className='nav-item active'>\r\n            <a className='nav-link' href='#'>Page 1 <span className='sr-only'>(current)</span></a>\r\n          </li>\r\n          <li className='nav-item'>\r\n            <a className='nav-link' href='#'>Page 2</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n    <div className='jumbotron mt'>\r\n      <div className='col-sm-8 mx-auto mt'>\r\n        <h1>This is just a Test</h1>\r\n        <p>\r\n          <a className='btn btn-primary' href='#' role='button'>View navbar docs &raquo;</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n);\n"})}),"\n",(0,r.jsx)(a.p,{children:"Now start the app with:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"npm start\n"})}),"\n",(0,r.jsxs)(a.p,{children:["The Bootstrap Navbar should now show up in our React app on ",(0,r.jsx)(a.em,{children:"locallhost:3000"}),":"]}),"\n",(0,r.jsx)(a.h2,{id:"03-react-router-dom",children:"03 react-router-dom"}),"\n",(0,r.jsxs)(a.p,{children:["We can now use the ",(0,r.jsx)(a.a,{href:"https://reacttraining.com/react-router/web/example/basic",children:"basic example"})," from the reacttraining.com website to add some routing to our app. First install the web based router - which is now called react-router-dom:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"npm install --save react-router-dom\n"})}),"\n",(0,r.jsxs)(a.p,{children:["To add links to our navigation, we will need the ",(0,r.jsx)(a.a,{href:"https://reacttraining.com/react-router/web/api/NavLink",children:"<NavLink/> component"}),", which is special version of the <Link/> that will add styling attributes to the rendered element when it matches the current URL (activeState). Replace all:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-html",children:"<a href='#'></a>\n"})}),"\n",(0,r.jsx)(a.p,{children:"with"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-html",children:"<NavLink to='#'></NavLink>\n"})}),"\n",(0,r.jsx)(a.p,{children:"and import <NavLink /> from react-router-dom:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import { NavLink } from 'react-router-dom'\n"})}),"\n",(0,r.jsxs)(a.p,{children:["We created two links to two components, aptly named ",(0,r.jsx)(a.em,{children:"/page-1"})," and ",(0,r.jsx)(a.em,{children:"/page-2"}),", that we now have to create inside the ",(0,r.jsx)(a.em,{children:"./src/components"})," directory. For <PageOne /> we want to use an ",(0,r.jsx)(a.strong,{children:"ES6 Class Component"})," to render some JSX:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import React, {Component} from 'react'\r\nimport { Link } from 'react-router-dom'\r\nimport { Button } from 'react-bootstrap'\r\n\r\nclass PageOne extends Component {\r\n  render() {\r\n    return (\r\n        <div className='jumbotron mt'>\r\n          [...]\r\n        </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default PageOne\n"})}),"\n",(0,r.jsxs)(a.p,{children:["And for <PageTwo /> we use a ",(0,r.jsx)(a.strong,{children:"Stateless Component"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import React from 'react'\r\nimport { Link } from 'react-router-dom'\r\nimport { Button } from 'react-bootstrap'\r\n\r\n\r\nconst PageTwo = () => (\r\n    <div className='jumbotron mt'>\r\n      [...]\r\n    </div>\r\n)\r\n\r\nexport default PageTwo\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Make sure to import all components in ",(0,r.jsx)(a.em,{children:"./src/index.js"}),":"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import App from './App';\r\nimport PageOne from './PageOne';\r\nimport PageTwo from './PageTwo';\n"})}),"\n",(0,r.jsx)(a.p,{children:"As well as adding the Router itself:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import {\r\n  BrowserRouter as Router,\r\n  Route,\r\n  Link\r\n} from 'react-router-dom'\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Now we can copy the navigation (everything inside the <nav> tag) from  ",(0,r.jsx)(a.em,{children:"./src/components/app.js"})," to ",(0,r.jsx)(a.em,{children:"./src/index.js"})," and replace the <App /> component that was placed there by create-react-app. Then wrap the JSX into a <Router> tag:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"render(\r\n  <Router>\r\n    <div className='container'>\r\n      <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top mb'>\r\n        <NavLink className='navbar-brand' to='/'> <img src={Logo} alt='React Router v4' /> </NavLink>\r\n\r\n        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarsExampleDefault' aria-controls='navbarsExampleDefault' aria-expanded='false' aria-label='Toggle navigation'>\r\n          <span className='navbar-toggler-icon'></span>\r\n        </button>\r\n\r\n        <div className='collapse navbar-collapse'>\r\n          <ul className='navbar-nav mr-auto'>\r\n            <li className='nav-item'>\r\n              <NavLink className='nav-link' to='/page-1'>Page 1</NavLink>\r\n            </li>\r\n            <li className='nav-item'>\r\n              <NavLink className='nav-link' to='/page-2'>Page 2</NavLink>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>\r\n\r\n      <Route exact path='/' component={App}/>\r\n      <Route path='/page-1' component={PageOne}/>\r\n      <Route path='/page-2' component={PageTwo}/>\r\n    </div>\r\n  </Router>,\r\n\r\ndocument.getElementById('root'))\n"})}),"\n",(0,r.jsx)(a.h2,{id:"04-nested-routes",children:"04 Nested Routes"}),"\n",(0,r.jsxs)(a.p,{children:["To create nested routes in React Router v4, we just have to add more routes inside a component. E.g. you have a route that leads the user from ",(0,r.jsx)(a.em,{children:"/"})," to ",(0,r.jsx)(a.em,{children:"/chapter1"}),", rendering the <Chapter1 /> component. To create a route to a nested article inside the chapter, like ",(0,r.jsx)(a.em,{children:"/chapter1/subarticle1"}),", we now have to add further routes with the ",(0,r.jsx)(a.code,{children:"${match.url}"})," attribute inside the <Chapter1 />:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"<NavLink to={`${match.url}/subarticle1`} />\r\n<Route path={`${match.url}/subarticle1`} component={SubArticle1}/>\n"})}),"\n",(0,r.jsxs)(a.p,{children:["So lets add another Link and Route to the Nav component in ",(0,r.jsx)(a.em,{children:"./src/index.js"})," to render another component, called <NestedRoutes />, under ",(0,r.jsx)(a.em,{children:"/nested-routes"}),". This is going to be our parent component for two nested routes/components: <PageOneNested /> and <PageTwoNested /> rendered under ",(0,r.jsx)(a.em,{children:"./nested-routes/page-1-nested"})," and ",(0,r.jsx)(a.em,{children:"./nested-routes/page-2-nested"}),", respectively."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"import React from 'react'\r\nimport { Route, NavLink, Link } from 'react-router-dom'\r\n\r\nimport PageOneNested from './PageOneNested'\r\nimport PageTwoNested from './PageTwoNested'\r\n\r\nconst Topics = ({ match }) => (\r\n\r\n    <div className='container-fluid'>\r\n      <div className='row'>\r\n        <nav className='nav nav-pills nav-fill col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar'>\r\n          <div className='clearfix'><br/><br/><br/></div>\r\n          <Link className='nav-item nav-link' to={match.url}>\r\n            <h3>Nested Routes</h3>\r\n            <hr/>\r\n          </Link>\r\n          <NavLink className='nav-item nav-link' to={`${match.url}/page-1-nested`}>\r\n            NestOne\r\n          </NavLink>\r\n          <NavLink className='nav-item nav-link' to={`${match.url}/page-2-nested`}>\r\n            NestTwo\r\n          </NavLink>\r\n        </nav>\r\n\r\n        <main role='main' className='col-sm-9 ml-sm-auto col-md-10 pt-3'>\r\n          <div className='clearfix'><br/><br/><br/></div>\r\n          <h1>Dashboard</h1>\r\n          <Route path={`${match.url}/page-1-nested`} component={PageOneNested}/>\r\n          <Route path={`${match.url}/page-2-nested`} component={PageTwoNested}/>\r\n          <Route exact path={match.url} render={() => (\r\n            <div>\r\n              [...]\r\n            </div>\r\n          )}/>\r\n        </main>\r\n      </div>\r\n    </div>\r\n)\r\n\r\nexport default Topics\n"})}),"\n",(0,r.jsxs)(a.p,{children:["You can create the two files PageOneNested.js and PageTwoNested.js inside ",(0,r.jsx)(a.em,{children:"./src/components"}),". Just copy and paste the content from PageOne.js or PageTwo.js and change the component names, inside the file to PageOneNested and PageTwoNested."]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"React Router 4",src:n(403014).A+"",width:"879",height:"491"})}),"\n",(0,r.jsx)(a.p,{children:"Clicking on the NestOne or NestTwo link will load the components <PageOneNested /> or <PageTwoNested /> in the <main> area of the screen, under the Dashboard title - awesome !"}),"\n",(0,r.jsx)(a.h2,{id:"05-loading-animations",children:"05 Loading Animations"}),"\n",(0,r.jsxs)(a.p,{children:["The ",(0,r.jsx)(a.a,{href:"https://github.com/reactjs/react-transition-group/tree/v1-stable",children:"react-transition-group"})," is an easy way to perform animations when a React component enters or leaves the DOM."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"npm install react-transition-group --save\n"})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a",children:"https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a"}),"\r\n",(0,r.jsx)(a.a,{href:"https://medium.com/appifycanada/animations-with-reacttransitiongroup-4972ad7da286",children:"https://medium.com/appifycanada/animations-with-reacttransitiongroup-4972ad7da286"}),"\r\n",(0,r.jsx)(a.a,{href:"https://github.com/reactjs/react-transition-group/tree/v1-stable",children:"https://github.com/reactjs/react-transition-group/tree/v1-stable"})]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},158882:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/photo-34445986622_955cf9ae16_o-5603a4199bfdb882049cf85387f7d84c.jpg"},184221:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/rr4_01-b47db381307fc20ba9a7f69db8152f3d.png"},403014:(e,a,n)=>{n.d(a,{A:()=>r});const r=n.p+"assets/images/rr4_02-45e88055a2397d055e1fa1c05d15cf18.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>i});var r=n(296540);const t={},s=r.createContext(t);function o(e){const a=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);