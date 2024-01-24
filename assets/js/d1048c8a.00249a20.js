"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[14217],{245198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(785893),a=n(603905);const i={sidebar_position:9e3,slug:"2017-08-21",title:"create-react-app and Material-UI",authors:"mpolinowski",tags:["Javascript","React","Material-UI"]},s=void 0,o={id:"Development/Javascript/2017-08-21--reactive-material/index",title:"create-react-app and Material-UI",description:"Harbin, China",source:"@site/docs/Development/Javascript/2017-08-21--reactive-material/index.mdx",sourceDirName:"Development/Javascript/2017-08-21--reactive-material",slug:"/Development/Javascript/2017-08-21--reactive-material/2017-08-21",permalink:"/docs/Development/Javascript/2017-08-21--reactive-material/2017-08-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2017-08-21--reactive-material/index.mdx",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Material-UI",permalink:"/docs/tags/material-ui"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2017-08-21",title:"create-react-app and Material-UI",authors:"mpolinowski",tags:["Javascript","React","Material-UI"]},sidebar:"tutorialSidebar",previous:{title:"React under the Hood",permalink:"/docs/Development/Javascript/2017-09-03--react-under-the-hood/2017-09-03"},next:{title:"Gatsby Blog Starter",permalink:"/docs/Development/Javascript/2017-08-15--gatsby-blog-starter/2017-08-15"}},l={},c=[{value:"Table of Content",id:"table-of-content",level:3},{value:"01 Installing Material-UI",id:"01-installing-material-ui",level:2},{value:"02 Using Material-UI Components",id:"02-using-material-ui-components",level:2},{value:"03 Final Design",id:"03-final-design",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Harbin, China",src:n(171272).Z+"",width:"1500",height:"515"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#table-of-content",children:"Table of Content"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#01-installing-material-ui",children:"01 Installing Material-UI"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#02-using-material-ui-components",children:"02 Using Material-UI Components"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#03-final-design",children:"03 Final Design"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["This is a practice run to add some ",(0,r.jsx)(t.a,{href:"https://material.io",children:"Material Design"})," to a react app, generated by the ",(0,r.jsx)(t.a,{href:"https://github.com/facebookincubator/create-react-app",children:"create-react-app"})," starter kit. So let's get started!"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install -g create-react-app\r\n\r\ncreate-react-app reactive-material\r\ncd reactive-material\r\nnpm start\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Then open ",(0,r.jsx)(t.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"})," to see your app. You don\u2019t need to install or configure tools like Webpack or Babel.\r\nThey are preconfigured and hidden so that you can focus on the code. Just create a project, and you\u2019re good to go."]}),"\n",(0,r.jsx)(t.h3,{id:"table-of-content",children:"Table of Content"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#01-installing-material-ui",children:"01 Installing Material-UI"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#02-using-material-ui-components",children:"02 Using Material-UI Components"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#03-final-design",children:"03 Final Design"})}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"01-installing-material-ui",children:"01 Installing Material-UI"}),"\n",(0,r.jsxs)(t.p,{children:["Now that we made sure that our React App is up-and-running, let's ",(0,r.jsx)(t.em,{children:"CTRL+C"})," the process and follow the ",(0,r.jsx)(t.a,{href:"https://material-ui-1dab0.firebaseapp.com/getting-started/installation/",children:"Installation Instructions"})," for Material-UI (v.1.0.0 beta):"]}),"\n",(0,r.jsx)(t.p,{children:"To install and save in your package.json dependencies, run:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install material-ui@next --save\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Next, ",(0,r.jsx)(t.a,{href:"https://material-ui-1dab0.firebaseapp.com/style/typography/#general",children:"Typography"}),": The Roboto font, that Material-UI is optimized for, can be installed by:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install typeface-roboto --save\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Remember, the Roboto font will not be automatically loaded by Material-UI - but need to be imported to the entrypoint of your app: ",(0,r.jsx)(t.em,{children:"import 'typeface-roboto'"})," !"]}),"\n",(0,r.jsxs)(t.p,{children:["Next, ",(0,r.jsx)(t.a,{href:"http://google.github.io/material-design-icons/#icon-font-for-the-web",children:"Material Design Icons"}),". Install the icons using npm package manager:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install material-design-icons --save\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And last but not least - In order to use prebuilt SVG Material icons, such as those found in the ",(0,r.jsx)(t.a,{href:"https://material-ui-1dab0.firebaseapp.com/component-demos",children:"component demos"})," you have to install the material-ui-icons package:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npm install material-ui-icons --save\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now that you downloaded the more interesting part of the internet, let's start with React!"}),"\n",(0,r.jsx)(t.h2,{id:"02-using-material-ui-components",children:"02 Using Material-UI Components"}),"\n",(0,r.jsxs)(t.p,{children:["The basic usage is simple: e.g. adding a ",(0,r.jsx)(t.a,{href:"https://material-ui-1dab0.firebaseapp.com/demos/app-bar/#app-bar-with-buttons",children:"ButtonAppBar"})," - create a JavaScript file ",(0,r.jsx)(t.em,{children:"/src/ButtonAppBar.js"})," that is named after the component that you want to use. Copy the code from the Material-UI page and fine tune the CSS and JSX, where needed:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { withStyles } from 'material-ui/styles';\r\nimport AppBar from 'material-ui/AppBar';\r\nimport Toolbar from 'material-ui/Toolbar';\r\nimport Typography from 'material-ui/Typography';\r\nimport Button from 'material-ui/Button';\r\nimport IconButton from 'material-ui/IconButton';\r\nimport MenuIcon from 'material-ui-icons/Menu';\r\n\r\nconst styles = theme => ({\r\n  root: {\r\n    width: '100%',\r\n    position: 'fixed',\r\n    top: 0,\r\n    left: 0,\r\n    zIndex: 10,\r\n  },\r\n  flex: {\r\n    flex: 1,\r\n  },\r\n  menuButton: {\r\n    marginLeft: -12,\r\n    marginRight: 20,\r\n  },\r\n});\r\n\r\nfunction ButtonAppBar(props) {\r\n  const classes = props.classes;\r\n  return (\r\n    <div className={classes.root}>\r\n      <AppBar position='static'>\r\n        <Toolbar>\r\n          <IconButton className={classes.menuButton} color='contrast' aria-label='Menu'>\r\n            <MenuIcon />\r\n          </IconButton>\r\n          <Typography type='title' color='inherit' className={classes.flex}>\r\n            Reactive Material\r\n          </Typography>\r\n          <Button color='contrast'>Material Button</Button>\r\n        </Toolbar>\r\n      </AppBar>\r\n    </div>\r\n  );\r\n}\r\n\r\nButtonAppBar.propTypes = {\r\n  classes: PropTypes.object.isRequired,\r\n};\r\n\r\nexport default withStyles(styles)(ButtonAppBar);\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now go to ",(0,r.jsx)(t.em,{children:"/src/App.js"}),", import your component and use it inside the JSX code:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"import React, { Component } from 'react';\r\nimport styles from './app.css';\r\nimport 'typeface-roboto';\r\n\r\nimport ButtonAppBar from './ButtonAppBar'\r\n\r\nclass App extends Component {\r\n  render() {\r\n    return (\r\n      <div>\r\n        <header className={styles.header}>\r\n          <ButtonAppBar />\r\n        </header>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nexport default App;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Restart your app with ",(0,r.jsx)(t.em,{children:"npm start"})," and reload ",(0,r.jsx)(t.em,{children:"localhost:3000"})," - voila' :"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(87527).Z+"",width:"1043",height:"223"})}),"\n",(0,r.jsxs)(t.p,{children:["As you can see from the examples, we added a few custom styles to our app. /src/index.js imports the complete /src/index.css file scoped globally. While our /src/app.js only imports app specific styles *import styles from /app.css, that are available with the className attribute /header ",(0,r.jsx)(t.code,{children:"className={styles.header}"}),". You can use locally scoped ",(0,r.jsx)(t.a,{href:"https://github.com/css-modules/css-modules",children:"CSS Modules"})," for each component that you add to your app!"]}),"\n",(0,r.jsx)(t.h2,{id:"03-final-design",children:"03 Final Design"}),"\n",(0,r.jsxs)(t.p,{children:["This is not yet a production ready design - but it will be a good starting point for future projects. I ended up removing the ButtonAppBar and replaced it with ",(0,r.jsx)(t.a,{href:"https://material-ui-1dab0.firebaseapp.com/demos/drawers/#responsive-drawer",children:"Responsive Drawer"})," component. It gave me a little bit of an headache that the Navbar, that is included here, was ",(0,r.jsx)(t.em,{children:"not sticky"}),". But everything seems to work now - beside some necessary cleanUp inside the JSX. All other components are now nested inside the Drawer component, that is then nested inside the main app component:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(240270).Z+"",width:"1133",height:"621"})}),"\n",(0,r.jsxs)(t.p,{children:["Would you use create-react-app and Material-UI in a future project? ",(0,r.jsx)(t.strong,{children:"Absolutely!"})]})]})}function d(e={}){const{wrapper:t}={...(0,a.ah)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(u,s(s({ref:t},d),{},{components:n})):r.createElement(u,s({ref:t},d))}));d.displayName="MDXCreateElement"},87527:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/01_mui-e0b9c10120a20b361edd2eaee1d46f57.png"},240270:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/02_mui-de11726468f75ed7148006accc01e049.png"},171272:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-33682907794_96afc3900c_o-b8c32f4b965847bf075eeca8a5047fa2.png"}}]);