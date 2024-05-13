"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[59418],{535711:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var i=s(474848),t=s(28453);const r={sidebar_position:5896,slug:"2023-06-13",title:"Typescript DOM Webpack",authors:"mpolinowski",tags:["Javascript"],description:"Using Typescript 5 to build browser applications with Webpack"},c=void 0,l={id:"Development/Javascript/2023-06-13-typescript-dom-webpack/index",title:"Typescript DOM Webpack",description:"Using Typescript 5 to build browser applications with Webpack",source:"@site/docs/Development/Javascript/2023-06-13-typescript-dom-webpack/index.md",sourceDirName:"Development/Javascript/2023-06-13-typescript-dom-webpack",slug:"/Development/Javascript/2023-06-13-typescript-dom-webpack/2023-06-13",permalink:"/docs/Development/Javascript/2023-06-13-typescript-dom-webpack/2023-06-13",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2023-06-13-typescript-dom-webpack/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:5896,frontMatter:{sidebar_position:5896,slug:"2023-06-13",title:"Typescript DOM Webpack",authors:"mpolinowski",tags:["Javascript"],description:"Using Typescript 5 to build browser applications with Webpack"},sidebar:"tutorialSidebar",previous:{title:"React.js with Typescript 2023",permalink:"/docs/Development/Javascript/2023-12-14-reactjs-typescript-2023/2023-12-14"},next:{title:"Typescript DOM",permalink:"/docs/Development/Javascript/2023-06-13-typescript-dom/2023-06-13"}},d={},o=[{value:"Setup",id:"setup",level:2},{value:"Adding NPM Modules",id:"adding-npm-modules",level:3},{value:"Webpack",id:"webpack",level:2},{value:"Setup",id:"setup-1",level:3},{value:"Webpack Dev-Server",id:"webpack-dev-server",level:4},{value:"Production",id:"production",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"TST, Hongkong",src:s(222285).A+"",width:"2359",height:"864"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#setup",children:"Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#adding-npm-modules",children:"Adding NPM Modules"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#webpack",children:"Webpack"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#setup-1",children:"Setup"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#webpack-dev-server",children:"Webpack Dev-Server"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#production",children:"Production"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tsc --init\nnpm init -y\nnpm install lite-server\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./tsconfig.json"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "include": "./src",\n  "exclude": "./node_modules",\n  "compilerOptions": {\n    "target": "ES2015",\n    "module": "ES2015", /* Specify what module code is generated. */\n    "moduleResolution": "node", /* Specify how TypeScript looks up a file from a given module specifier. */\n    "sourceMap": true, /* Create source map files for emitted JavaScript files. */\n    "outDir": "./public", /* Specify an output folder for all emitted files. */\n    "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables \'allowSyntheticDefaultImports\' for type compatibility. */\n    "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */\n    "strict": true, /* Enable all strict type-checking options. */\n    "skipLibCheck": true /* Skip type checking all .d.ts files. */\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./package.json"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "name": "tsc-webpack",\n  "version": "1.0.0",\n  "description": "",\n  "main": "src/index.ts",\n  "type": "module",\n  "scripts": {\n    "tsc": "tsc --watch",\n    "start": "lite-server --baseDir=\'public\'",\n    "dev": "node public/index.js",\n    "build": "webpack"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "dependencies": {\n    "lite-server": "^2.6.1"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"tree -L 2\n.\n\u251c\u2500\u2500 public\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 modules\n\u251c\u2500\u2500 node_modules\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 package-lock.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.html\n\u2502\xa0\xa0 \u251c\u2500\u2500 index.tss\n\u2502\xa0\xa0 \u2514\u2500\u2500 modules\n\u2502\xa0\xa0     \u251c\u2500\u2500 actions.ts\n\u2502\xa0\xa0     \u251c\u2500\u2500 events.ts\n\u2502\xa0\xa0     \u2514\u2500\u2500 utils.ts\n\u2514\u2500\u2500 tsconfig.json\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Provide a couple of dummy functions and classes in ",(0,i.jsx)(n.code,{children:"./src/modules"})," and import them into:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./src/index.ts"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"import Event from './modules/events.js'\nimport Action from './modules/actions.js'\nimport { add, multiply, subtract } from './modules/utils.js'\n\nconsole.log('INFO :: Hello World!')\n\nconst processEvent = new Event(88, 'motion detected', 'pir sensor')\nprocessEvent.notify()\n\nconst processAction = new Action(89, 'motion detected', 'alarm input', 'recording triggered')\nprocessAction.triggerAction()\n\nconsole.log(add(33, 77))\nconsole.log(multiply(33, 77))\nconsole.log(subtract(33, 77))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Run the ",(0,i.jsx)(n.code,{children:"tsc"})," compiler and import the generated JS file into:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./public/index.html"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script type="module" src="index.js"><\/script>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Running the ",(0,i.jsx)(n.code,{children:"dev"})," script as defined in ",(0,i.jsx)(n.code,{children:"package.json"})," now executes all functions in the generated ",(0,i.jsx)(n.code,{children:"public/index.js"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run dev\n\n> tsc-webpack@1.0.0 dev\n> node public/index.js\n\nINFO :: Hello World!\n[ 88, 'motion detected', 'pir sensor' ]\nINFO :: action alarm recording was triggered!\n110\n2541\n-44\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The same works inside a web browser by running the ",(0,i.jsx)(n.code,{children:"start"})," script:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run start\n\n> tsc-webpack@1.0.0 start\n> lite-server --baseDir='public'\n\n[Browsersync] Access URLs:\n --------------------------------------\n       Local: http://localhost:3000\n    External: http://192.168.2.112:3000\n --------------------------------------\n          UI: http://localhost:3001\n UI External: http://localhost:3001\n --------------------------------------\n[Browsersync] Serving files from: public\n[Browsersync] Watching files...\n24.01.17 23:00:25 200 GET /index.html\n24.01.17 23:00:25 200 GET /index.js\n24.01.17 23:00:25 200 GET /modules/events.js\n24.01.17 23:00:25 200 GET /modules/actions.js\n24.01.17 23:00:25 200 GET /modules/utils.js\n24.01.17 23:00:37 200 GET /\n24.01.17 23:00:37 200 GET /index.js\n"})}),"\n",(0,i.jsx)(n.p,{children:"All files are loaded successfully and the browser console output is identical to the terminal output from the previous step:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'INFO :: Hello World! index.js:4:9\nArray(3) [ 88, "motion detected", "pir sensor" ] events.js:10:17\nINFO :: action alarm recording was triggered! actions.js:11:17\n110 index.js:9:9\n2541 index.js:10:9\n-44 index.js:11:9\n'})}),"\n",(0,i.jsx)(n.h3,{id:"adding-npm-modules",children:"Adding NPM Modules"}),"\n",(0,i.jsxs)(n.p,{children:["As a simple example install lodash to 'empower' your ",(0,i.jsx)(n.code,{children:"src/modules/utils.ts"})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install lodash\nnpm install --save-dev @types/lodash\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import _ from 'lodash'\n\nexport function add(x: number, y:number) {\n    return _.add(x, y)\n}\n\nexport function multiply(x: number, y: number) {\n    return _.multiply(x, y)\n}\n\nexport function subtract(x: number, y: number) {\n    return _.subtract(x, y)\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Rerun the ",(0,i.jsx)(n.code,{children:"dev"})," script to execute the script in Node.js and you should see that it executes just fine. Running the ",(0,i.jsx)(n.code,{children:"start"})," script, however, leads to the following error message inside your browser:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Uncaught TypeError: The specifier \u201clodash\u201d was a bare specifier, but was not remapped to anything. Relative module specifiers must start with \u201c./\u201d, \u201c../\u201d or \u201c/\u201d.\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This can be resolved by using ",(0,i.jsx)(n.strong,{children:"Webpack"})," to bundle all dependencies, including imported npm modules, into a single JS file."]}),"\n",(0,i.jsx)(n.h2,{id:"webpack",children:"Webpack"}),"\n",(0,i.jsx)(n.h3,{id:"setup-1",children:"Setup"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev webpack webpack-cli typescript ts-loader\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://webpack.js.org/guides/typescript/",children:"Basic configuration file"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./webpack.config.cjs"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const path = require('path');\n\nmodule.exports = {\n  mode: \"development\", // production\n  entry: './src/index.ts',\n  devtool: 'inline-source-map', // remove in 'production'\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: 'ts-loader',\n        exclude: /node_modules/,\n      },\n    ],\n  },\n  resolve: {\n    extensions: ['.tsx', '.ts', '.js'],\n  },\n  output: {\n    filename: 'bundle.js',\n    path: path.resolve(__dirname, 'public'),\n    publicPath: \"/public\"s\n  },\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In the previous test run all imports had to have the ",(0,i.jsx)(n.code,{children:".js"})," file extension. For Webpack the need to be removed:"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Before"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import Event from './modules/events.js'\nimport Action from './modules/actions.js'\nimport { add, multiply, subtract } from './modules/utils.js'\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"After"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import Event from './modules/events'\nimport Action from './modules/actions'\nimport { add, multiply, subtract } from './modules/utils'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now run the ",(0,i.jsx)(n.code,{children:"build"})," script to run the bundler:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run build\n\n> tsc-webpack@1.0.0 build\n> webpack\n\nasset bundle.js 1.39 MiB [emitted] (name: main)\nruntime modules 1.25 KiB 6 modules\ncacheable modules 533 KiB\n  modules by path ./src/modules/*.ts 960 bytes\n    ./src/modules/events.ts 342 bytes [built] [code generated]\n    ./src/modules/actions.ts 412 bytes [built] [code generated]\n    ./src/modules/utils.ts 206 bytes [built] [code generated]\n  ./src/index.ts 476 bytes [built] [code generated]\n  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]\nwebpack 5.89.0 compiled successfully in 1829 ms\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Change to the HTML import to the following to use the newly generated bundled JS file and run the ",(0,i.jsx)(n.code,{children:"start"})," script to verify that your browser is now able to find the imported lodash dependency:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./public/index.html"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'<script src="bundle.js"><\/script>\n'})}),"\n",(0,i.jsx)(n.h4,{id:"webpack-dev-server",children:"Webpack Dev-Server"}),"\n",(0,i.jsxs)(n.p,{children:["Replacing the ",(0,i.jsx)(n.code,{children:"lite-server"})," with the official ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/configuration/dev-server/",children:"webpack-dev-server"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev webpack-dev-server\n"})}),"\n",(0,i.jsx)(n.p,{children:"And replace the npm scripts accordingly:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./package.json"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"scripts": {\n    "tsc": "tsc --watch",\n    "start": "webpack serve",\n    "dev": "node public/bundle.js",\n    "build": "webpack"\n  }\n'})}),"\n",(0,i.jsx)(n.p,{children:"And add the following configuration to:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./webpack.config.cjs"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"devServer: {\n    static: {\n      directory: path.join(__dirname, 'public'),\n      watch: true,\n    },\n    client: {\n      overlay: {\n        errors: true,\n        warnings: false,\n        runtimeErrors: true\n      },\n      logging: 'info', // 'log' | 'info' | 'warn' | 'error' | 'none' | 'verbose'\n    },\n    compress: true,\n    port: 3000,\n  }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"start"})," script will now run the dev server on port 3000:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm run start\n\n> tsc-webpack@1.0.0 start\n> webpack serve\n\n<i> [webpack-dev-server] Project is running at:\n<i> [webpack-dev-server] Loopback: http://localhost:3000/\nasset bundle.js 1.99 MiB [emitted] (name: main)\nruntime modules 27.5 KiB 13 modules\nmodules by path ./node_modules/ 709 KiB\n  modules by path ./node_modules/webpack-dev-server/client/ 71.8 KiB 16 modules\n  modules by path ./node_modules/webpack/hot/*.js 5.3 KiB 4 modules\n  modules by path ./node_modules/html-entities/lib/*.js 81.8 KiB\n    ./node_modules/html-entities/lib/index.js 7.91 KiB [built] [code generated]\n    + 3 modules\n  ./node_modules/ansi-html-community/index.js 4.16 KiB [built] [code generated]\n  ./node_modules/events/events.js 14.5 KiB [built] [code generated]\n  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]\nmodules by path ./src/ 1.4 KiB\n  ./src/index.ts 476 bytes [built] [code generated]\n  ./src/modules/events.ts 342 bytes [built] [code generated]\n  ./src/modules/actions.ts 412 bytes [built] [code generated]\n  ./src/modules/utils.ts 206 bytes [built] [code generated]\nwebpack 5.89.0 compiled successfully in 2123 ms\n"})}),"\n",(0,i.jsx)(n.p,{children:"And the  browser console should show the results as before:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'[webpack-dev-server] Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled. index.js:485\n[HMR] Waiting for update signal from WDS... log.js:39\nINFO :: Hello World! index.ts:5:8\nArray(3) [ 88, "motion detected", "pir sensor" ] events.ts:15:16\nINFO :: action alarm recording was triggered! actions.ts:12:16\n110 index.ts:13:8\n2541 index.ts:14:8\n-44 index.ts:15:8\n'})}),"\n",(0,i.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev clean-webpack-plugin html-webpack-plugin\n"})}),"\n",(0,i.jsx)(n.p,{children:"Duplicate the Webpack configuration file and name those files:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"webpack.dev.config.cjs"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"webpack.prod.config.cjs"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Keep the development/not-production file as is and change the latter to:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./webpack.prod.config.cjs"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"const path = require('path');\nconst { CleanWebpackPlugin } = require('clean-webpack-plugin')\nconst HtmlWebpackPlugin = require('html-webpack-plugin')\n\nmodule.exports = {\n  mode: \"production\",\n  entry: './src/index.ts',\n  module: {\n    rules: [\n      {\n        test: /\\.tsx?$/,\n        use: 'ts-loader',\n        exclude: /node_modules/,\n      },\n    ],\n  },\n  resolve: {\n    extensions: ['.tsx', '.ts', '.js'],\n  },\n  plugins: [\n    new CleanWebpackPlugin(),\n    new HtmlWebpackPlugin()\n  ],\n  output: {\n    filename: '[contenthash].bundle.js',\n    path: path.resolve(__dirname, 'public')\n  }\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"clean"})," webpack plugin will now delete all files inside the ",(0,i.jsx)(n.code,{children:"public"})," directory. While the ",(0,i.jsx)(n.code,{children:"html"})," plugin generates an HTML file in ",(0,i.jsx)(n.code,{children:"public"})," that embeds ",(0,i.jsx)(n.code,{children:"bundle.js"})," file that now contains hash in it's name to prevent cashing."]}),"\n",(0,i.jsx)(n.p,{children:"This configuration file can be referenced inside the build script:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"./package.json"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"scripts": {\n    "tsc": "tsc --watch",\n    "start": "webpack serve --config webpack.dev.config.cjs",\n    "dev": "node public/bundle.js",\n    "build": "webpack --config webpack.prod.config.cjs"\n  }\n'})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},222285:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c3aedc7eed015cc5372c21f9c394693d.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(296540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);