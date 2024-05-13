"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[73238],{940394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var n=r(474848),s=r(28453);const a={sidebar_position:9010,slug:"2017-08-15",title:"Gatsby Blog Starter",authors:"mpolinowski",tags:["Javascript","React","Gatsby"]},o=void 0,i={id:"Development/Javascript/2017-08-15--gatsby-blog-starter/index",title:"Gatsby Blog Starter",description:"Harbin, China",source:"@site/docs/Development/Javascript/2017-08-15--gatsby-blog-starter/index.mdx",sourceDirName:"Development/Javascript/2017-08-15--gatsby-blog-starter",slug:"/Development/Javascript/2017-08-15--gatsby-blog-starter/2017-08-15",permalink:"/docs/Development/Javascript/2017-08-15--gatsby-blog-starter/2017-08-15",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2017-08-15--gatsby-blog-starter/index.mdx",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Gatsby",permalink:"/docs/tags/gatsby"}],version:"current",sidebarPosition:9010,frontMatter:{sidebar_position:9010,slug:"2017-08-15",title:"Gatsby Blog Starter",authors:"mpolinowski",tags:["Javascript","React","Gatsby"]},sidebar:"tutorialSidebar",previous:{title:"create-react-app and Material-UI",permalink:"/docs/Development/Javascript/2017-08-21--reactive-material/2017-08-21"},next:{title:"Google Analytics in AMP",permalink:"/docs/Development/Javascript/2017-08-07--google-analytics-amp/2017-08-07"}},l={},d=[{value:"01 gatsby-source-filesystem",id:"01-gatsby-source-filesystem",level:2},{value:"02 gatsby-transformer-remark",id:"02-gatsby-transformer-remark",level:2},{value:"03 Creating a first Blog Post",id:"03-creating-a-first-blog-post",level:2},{value:"04 Creating an Index Page",id:"04-creating-an-index-page",level:2},{value:"05 Filters &amp; Sorting With GraphQL",id:"05-filters--sorting-with-graphql",level:2},{value:"06 Static Serve",id:"06-static-serve",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Harbin, China",src:r(978568).A+"",width:"1500",height:"786"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#01-gatsby-source-filesystem",children:"01 gatsby-source-filesystem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#02-gatsby-transformer-remark",children:"02 gatsby-transformer-remark"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#03-creating-a-first-blog-post",children:"03 Creating a first Blog Post"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#04-creating-an-index-page",children:"04 Creating an Index Page"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#05-filters--sorting-with-graphql",children:"05 Filters & Sorting With GraphQL"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#06-static-serve",children:"06 Static Serve"})}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["For an overview of the project structure please refer to the ",(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.org/docs/building-with-components/",children:"Gatsby documentation - Building with Components"})]}),"\n",(0,n.jsx)(t.p,{children:"Install this starter (assuming Gatsby is installed) by running from your CLI:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gatsby new gatsby-blog\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This is the second mini-project that I am going to use Gatsby in - check out the ",(0,n.jsx)(t.a,{href:"https://github.com/mpolinowski/gatsby-wiki",children:"first one"})," for a more detailed description of all the basics steps of setting up Gatsby."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#01-gatsby-source-filesystem",children:"01 gatsby-source-filesystem"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#02-gatsby-transformer-remark",children:"02 gatsby-transformer-remark"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#03-creating-a-first-blog-post",children:"03 Creating a first Blog Post"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#04-creating-an-index-page",children:"04 Creating an Index Page"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#05-filters--sorting-with-graphql",children:"05 Filters & Sorting With GraphQL"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#06-static-serve",children:"06 Static Serve"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"01-gatsby-source-filesystem",children:"01 gatsby-source-filesystem"}),"\n",(0,n.jsxs)(t.p,{children:["First we install a plugin that allows us to pull in data. There are a couple of ",(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.org/docs/plugins/",children:"Source Plugins"})," available to get your data from MongoDB or a CMS source like Wordpress. But we only want to grab Markdown files from our local file system -> hence we are going to install ",(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.org/packages/gatsby-source-filesystem/",children:"gatsby-source-filesystem"}),", using npm:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save gatsby-source-filesystem\n"})}),"\n",(0,n.jsx)(t.p,{children:"The plugin then has to be added to our Gatsby build by adding it to /gatsby-config.js. It is added as an object, carrying some configuration - in this case the path to the directory that will store our Markdown files:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"plugins: [\r\n  `gatsby-plugin-react-helmet`,\r\n  {\r\n  resolve: `gatsby-source-filesystem`,\r\n  options: {\r\n    name: `pages`,\r\n    path: `${__dirname}/src/pages/`,\r\n    },\r\n  },\r\n],\n"})}),"\n",(0,n.jsx)(t.h2,{id:"02-gatsby-transformer-remark",children:"02 gatsby-transformer-remark"}),"\n",(0,n.jsxs)(t.p,{children:["Since we want to use Markdown as a data source, we need a transformer plugin, that turns the Markdown into something that GraphQL can query against. This is the ",(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.org/packages/gatsby-transformer-remark/",children:"gatsby-transformer-remark"})," plugin, that can also be installed by npm:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm install --save gatsby-transformer-remark\n"})}),"\n",(0,n.jsx)(t.p,{children:"This plugin comes without any additional configuration, and can simply be added to gatsby-config.js:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"plugins: [\r\n  `gatsby-transformer-remark`,\r\n]\n"})}),"\n",(0,n.jsx)(t.p,{children:"Now we can start the Gatsby development environment with:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gatsby develop\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The app will start on ",(0,n.jsx)(t.a,{href:"http://localhost:8000",children:"http://localhost:8000"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gatsby Blog Starter",src:r(608508).A+"",width:"1042",height:"351"})}),"\n",(0,n.jsx)(t.h2,{id:"03-creating-a-first-blog-post",children:"03 Creating a first Blog Post"}),"\n",(0,n.jsxs)(t.p,{children:["Now we want to prepare our first blog post. We can add a folder to the pages directory with the date of today ~ as this might make sense to a blog (naming convention is up to you) -> ",(0,n.jsx)(t.em,{children:"/src/pages/2017-10-05-first-post"}),". Now add a new file to this folder, named ",(0,n.jsx)(t.em,{children:"index.md"}),". The Markdown file needs some information at the top of the file - called ",(0,n.jsx)(t.a,{href:"https://jekyllrb.com/docs/frontmatter/",children:"FrontMatter"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:"---\r\npath: '/first-post'\r\ntitle: 'First Blog Post'\r\ndate:   '2017-10-05'\r\n---\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This ",(0,n.jsx)(t.a,{href:"https://jekyllrb.com/docs/frontmatter/",children:"FrontMatter"})," will be used to Query against with GraphQL and can carry a couple of different information - see also ",(0,n.jsx)(t.a,{href:"https://github.com/mpolinowski/gatsby-wiki#11-working-with-markdown",children:"my previous repo"}),". But we only use it to add an title to our blogpost and assign an URL under which we want to be able to access the file. Now just add some Markdown to the file and save it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"## Hello from Markdown!\r\n---\r\n\r\n### This is a first blog Post\r\n\r\nHow exciting Web Development can be, amazing!\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The markdown represents the data that is going to be displayed. But now we need to create a style template that is used with this data. Lets start by adding a new folder inside /src called ",(0,n.jsx)(t.em,{children:"templates"}),". Now add a file to it called ",(0,n.jsx)(t.strong,{children:"post.js"})," that will contain the structure template for every post entry. The file contains the JSX markup for our post:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"import React from 'react';\r\nimport Helmet from 'react-helmet';\r\n\r\nexport default function Template({data}) {\r\n  const {markdownRemark: post} = data;\r\n  // const post = data.markdownRemark;\r\n  return (\r\n    <div>\r\n      <h1>{post.frontmatter.title}</h1>\r\n      <div dangerouslySetInnerHTML={{__html: post.html}} />\r\n    </div>\r\n  )\r\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The <Template /> component receives ",(0,n.jsx)(t.code,{children:"{data}"})," props, that are retrieved by an GraphQL query:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export const postQuery = graphql`\r\n  query BlogPostByPath($path: String!) {\r\n    markdownRemark(frontmatter: { path: { eq: $path} }) {\r\n      html\r\n      frontmatter {\r\n        path\r\n        title\r\n      }\r\n    }\r\n  }\r\n`\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The query looks for a markdown post, where the called URL equals the $path given inside it's frontmatter. So if the URL that you type into your browser was ",(0,n.jsx)(t.em,{children:"/first-post"}),", a markdown file with a ",(0,n.jsx)(t.em,{children:"path: '/first-post'"})," inside it's frontmatter, would be a hit."]}),"\n",(0,n.jsxs)(t.p,{children:["The query then uses the markdownRemark plugin to transform the post markdown to HTML and make both the path and title from it's frontmatter available iside ",(0,n.jsx)(t.code,{children:"{data}"}),", that is passed down into the <Template /> component and then rendered."]}),"\n",(0,n.jsxs)(t.p,{children:["Gatsby is already configured to route all pages inside /src/pages as pages for our website. But now we have to register our posts, that are from the markdown files and the post.js template. To do this, we have to create a file named ",(0,n.jsx)(t.strong,{children:"gatsby-node.js"})," inside the root directory of our app. We are going to use the ",(0,n.jsx)(t.a,{href:"https://www.gatsbyjs.org/docs/node-apis/#createPages",children:"createPages"})," Gatsby API to create pages from our post template:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const path = require('path');\r\n\r\nexports.createPages = ({boundActionCreators, graphql}) => {\r\n  const {createPage} = boundActionCreators;\r\n  // const createPage = boundActionCreators.createPage;\r\n\r\n  const postTemplate = path.resolve('src/templates/post.js');\r\n\r\n  return graphql(`{\r\n    allMarkdownRemark {\r\n      edges {\r\n        node {\r\n          html\r\n          id\r\n          frontmatter {\r\n            path\r\n            title\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }`)\r\n  .then(res => {\r\n    if(res.errors) {\r\n      return Promise.reject(res.errors);\r\n    }\r\n\r\n    res.data.allMarkdownRemark.edges.forEach(({node}) => {\r\n      createPage({\r\n        path: node.frontmatter.path,\r\n        component: postTemplate\r\n      })\r\n    })\r\n\r\n  })\r\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Save and restart your app - then open ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"http://localhost:8000/first-post",children:"http://localhost:8000/first-post"})})," inside your web browser:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gatsby Blog Starter",src:r(197239).A+"",width:"1043",height:"353"})}),"\n",(0,n.jsx)(t.h2,{id:"04-creating-an-index-page",children:"04 Creating an Index Page"}),"\n",(0,n.jsx)(t.p,{children:"Now that we have a blog post (you can duplicate the first one a couple of times - changing the title, path and date), we will need an index page with a collection of links for all our posts. We will use the same GraphQL query used above to create this list."}),"\n",(0,n.jsxs)(t.p,{children:["We can add optional sorting, limiting parameters for the GraphQL query - see also ",(0,n.jsx)(t.a,{href:"https://github.com/graphql/graphiql/issues/587",children:"1"}),", ",(0,n.jsx)(t.a,{href:"https://gist.github.com/DSchau/86ee9288b05d236dada81148f66db8db",children:"2"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"allMarkdownRemark(sort: { fields: [frontmatter___title], order: ASC})\r\n\r\nallMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })\r\n\r\nallMarkdownRemark(limit: 1000)\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Gatsby comes with the GraphiQL debugger that allows us to test queries before we add them to our page - the debugger is running under: ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"http://localhost:8000/___graphql",children:"http://localhost:8000/___graphql"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gatsby Blog Starter",src:r(723598).A+"",width:"1043",height:"471"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"{\r\n  allMarkdownRemark(limit: 10, sort: {fields: [frontmatter___date], order: DESC}) {\r\n    edges {\r\n      node {\r\n        frontmatter {\r\n          path\r\n          title\r\n          date\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This query shows the latest 10 Markdown posts in descending order - let's add it to our index page ",(0,n.jsx)(t.em,{children:"/src/pages/index.js"}),". First we add the GraphQL query, below the <IndexPage /> component:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export const pageQuery = graphql`\r\n  query IndexQuery {\r\n      allMarkdownRemark(limit: 10\r\n      sort: {fields: [frontmatter___date], order: DESC}\r\n    ) {\r\n      edges {\r\n        node {\r\n          id\r\n          frontmatter {\r\n            path\r\n            title\r\n            date\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n`\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then we inject the data from that query into the <IndexPage /> component and loop through it to generate our index:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const IndexPage = ({data}) => (\r\n  <div>\r\n    <h1>Hi people</h1>\r\n    <p>Welcome to your new Gatsby site.</p>\r\n    <p>Now go build something great.</p>\r\n    <br/><br/>\r\n\r\n    <Link to='/page-2/'>Go to page 2</Link>\r\n    <br/><br/><br/><br/>\r\n\r\n    <h2>Index</h2>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th>Date</th>\r\n          <th>Link</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n      {data.allMarkdownRemark.edges.map(post => (\r\n        <tr key={post.node.id}>\r\n          <td>\r\n            {post.node.frontmatter.date}\r\n          </td>\r\n          <td>\r\n            <Link\r\n              to={post.node.frontmatter.path}>\r\n              {post.node.frontmatter.title}\r\n            </Link>\r\n          </td>\r\n        </tr>\r\n      ))}\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n)\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Gatsby Blog Starter",src:r(890337).A+"",width:"1043",height:"779"})}),"\n",(0,n.jsx)(t.h2,{id:"05-filters--sorting-with-graphql",children:"05 Filters & Sorting With GraphQL"}),"\n",(0,n.jsxs)(t.p,{children:["We already sorted our results by date and name in the examples above. Now let's add another value to our frontmatter, to decide whether a post is a draft or should already be shown as published. Set the first post to ",(0,n.jsx)(t.em,{children:"published: true"})," and the second one to ",(0,n.jsx)(t.em,{children:"published: false"})," :"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"---\r\npath: '/second-post'\r\ntitle: 'Second Blog Post'\r\ndate:   '2017-10-07'\r\npublished: false\r\n---\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Now we just need to configure our GraphQL query to only show post where ",(0,n.jsx)(t.em,{children:"published"})," is set to true:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"export const pageQuery = graphql`\r\n  query IndexQuery {\r\n    allMarkdownRemark(\r\n      limit: 10\r\n      sort: {fields: [frontmatter___date], order: DESC}\r\n      filter: { frontmatter: { published: {eq: true} }}\r\n    ) {\r\n      edges {\r\n        node {\r\n          id\r\n          frontmatter {\r\n            path\r\n            title\r\n            date\r\n            published\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n`\n"})}),"\n",(0,n.jsx)(t.h2,{id:"06-static-serve",children:"06 Static Serve"}),"\n",(0,n.jsx)(t.p,{children:"To serve our website we can use the command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gatsby build\n"})}),"\n",(0,n.jsx)(t.p,{children:"This will build a static version of our React app inside /public. Just upload it to a webserver or to GitHub Pages and you are good to go."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"After"})," building the static page, you can also use the command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"gatsby serve\n"})}),"\n",(0,n.jsxs)(t.p,{children:["That - unlike our development environment - fires up the webpack server in production mode - that means the files that are served, are the optimized files from the ",(0,n.jsx)(t.em,{children:"/public"})," directory! You can access this version on ",(0,n.jsx)(t.em,{children:(0,n.jsx)(t.a,{href:"http://localhost:9000",children:"http://localhost:9000"})})]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},608508:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/gatsby_01-099493376b8f6a228b80cc3116b75baf.png"},197239:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/gatsby_02-ed7161f7071eff02073848d788ca6a45.png"},723598:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/gatsby_03-d238b148d1230dee7084e8c327f48ae7.png"},890337:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/gatsby_04-cb52c6d274964ecc691420277e5ba17e.png"},978568:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/photo-34475132951_e3ff74c679_o-0ee0a47664d506f2e6bc5450944d2cc6.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(296540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);