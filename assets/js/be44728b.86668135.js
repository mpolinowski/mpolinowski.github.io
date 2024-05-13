"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[89237],{626781:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(474848),o=n(28453);const a={sidebar_position:9040,slug:"2021-09-21",title:"Getting started with Go and React - Webservice, Routing and Status Log",authors:"mpolinowski",tags:["Go"]},i=void 0,s={id:"Development/Go/2021-09-21--golang-react-starter-part-i/index",title:"Getting started with Go and React - Webservice, Routing and Status Log",description:"Shenzhen, China",source:"@site/docs/Development/Go/2021-09-21--golang-react-starter-part-i/index.md",sourceDirName:"Development/Go/2021-09-21--golang-react-starter-part-i",slug:"/Development/Go/2021-09-21--golang-react-starter-part-i/2021-09-21",permalink:"/docs/Development/Go/2021-09-21--golang-react-starter-part-i/2021-09-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-09-21--golang-react-starter-part-i/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2021-09-21",title:"Getting started with Go and React - Webservice, Routing and Status Log",authors:"mpolinowski",tags:["Go"]},sidebar:"tutorialSidebar",previous:{title:"Getting started with Go and React - API Routes",permalink:"/docs/Development/Go/2021-09-22--golang-react-starter-part-ii/2021-09-22"},next:{title:"Golang Refresher :: url & http",permalink:"/docs/Development/Go/2021-09-11--golang-refresher-network/2021-09-11"}},c={},l=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"Configuration of the Webservice",id:"configuration-of-the-webservice",level:3},{value:"Adding a Router",id:"adding-a-router",level:3}];function d(t){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Shenzhen, China",src:n(164803).A+"",width:"1500",height:"441"})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"Creating an REST API backend in Go and connecting it to a React.js frontend."}),"\n"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#",children:"Part I - Webservice, Routing and Status Log"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#",children:"Part II - API Routes"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#",children:"Part III - PostgreSQL"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["I want to prototype a Go backend for a ",(0,r.jsx)(e.strong,{children:"Weather Cam"})," tool. The backend should hold all the information related to all cameras and serve them on different routes. The backend then needs to be connected to a React.js frontend that displays the JSON data that is being served as well as to allow to add / delete cameras."]}),"\n",(0,r.jsx)(e.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mkdir go_backend && cd go_backend\r\ngo mod init backend\n"})}),"\n",(0,r.jsx)(e.h3,{id:"configuration-of-the-webservice",children:"Configuration of the Webservice"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.em,{children:"./src/api/main.go"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"encoding/json"\r\n\t"flag"\r\n\t"fmt"\r\n\t"log"\r\n\t"net/http"\r\n)\r\n\r\n// App version\r\nconst version = "1.0.0"\r\n\r\ntype config struct {\r\n\t// App configuration type\r\n\tport int\r\n\tenv  string\r\n}\r\n\r\ntype AppStatus struct {\r\n\t// Type for the status check\r\n\tStatus\t\tstring `json:"status"`\r\n\tEnvironment\tstring `json:"env"`\r\n\tVersion\t\tstring `json:"version"`\r\n}\r\n\r\nfunc main() {\r\n\t// The app configuration is either given as a command line flag\r\n\t// or set to a default value defined below\r\n\tvar cfg config\r\n\tflag.IntVar(&cfg.port, "port", 4000, "Server port to listen on")\r\n\tflag.StringVar(&cfg.env, "env", "development", "Application environment (development|production")\r\n\tflag.Parse()\r\n\t// Print config to console\r\n\tfmt.Println("Backend (version", version, ") is running on port", cfg.port, "in", cfg.env, "mode.")\r\n\t// Prepare a webservice handling the route `/status`\r\n\thttp.HandleFunc("/status", func(w http.ResponseWriter, r *http.Request) {\r\n\t\t// Add status variables for the status check\r\n\t\tcurrentStatus := AppStatus {\r\n\t\t\tStatus: "Ready",\r\n\t\t\tEnvironment: cfg.env,\r\n\t\t\tVersion: version,\r\n\t\t}\r\n\t\t// Convert to JSON\r\n\t\tjs, err := json.MarshalIndent(currentStatus, "", "\\t")\r\n\t\tif err != nil {\r\n\t\t\tfmt.Println(err)\r\n\t\t}\r\n\t\t// Write JSON header, http Status code and status variables\r\n\t\tw.Header().Set("Content-Type", "application/json")\r\n\t\tw.WriteHeader(http.StatusOK)\r\n\t\tw.Write(js)\r\n\t})\r\n\t// Start the webservice on the defined app port\r\n\terr := http.ListenAndServe(fmt.Sprintf(":%d", cfg.port), nil)\r\n\tif err != nil {\r\n\t\tlog.Println((err))\r\n\t}\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Test run:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"go run ./src/api/\r\nBackend (version 1.0.0 ) is running on port 4000 in development mode.\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'curl localhost:4000/status\r\n\r\n{\r\n"status": "Ready",\r\n"env": "development",\r\n"version": "1.0.0"\r\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"adding-a-router",children:"Adding a Router"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://github.com/julienschmidt/httprouter",children:"HttpRouter"})," is a lightweight high performance HTTP request router (also called multiplexer or just mux for short) for Go."]}),"\n",(0,r.jsx)(e.p,{children:"In contrast to the default mux of Go's net/http package, this router supports variables in the routing pattern and matches against the request method. It also scales better."}),"\n",(0,r.jsx)(e.p,{children:"The router is optimized for high performance and a small memory footprint. It scales well even with very long paths and a large number of routes. A compressing dynamic trie (radix tree) structure is used for efficient matching."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"go get -u github.com/julienschmidt/httprouter\n"})}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["Create an ",(0,r.jsx)(e.code,{children:"application"})," struct that holds the app configuration and a logger instance. This allows us to access those from other parts of our application."]}),"\n",(0,r.jsxs)(e.li,{children:["Separate the HTTP GET request for the status route into a separate handler. Here we need the receiver to access the environment variable ",(0,r.jsx)(e.code,{children:"app.config.env"})," and print to the ",(0,r.jsx)(e.code,{children:"app.logger.Println(err)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"./src/api/statusHandler.go"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"encoding/json"\r\n\t"net/http"\r\n)\r\n\r\nfunc (app *application) statusHandler(w http.ResponseWriter, r *http.Request) {\r\n\t// Add status variables for the status check\r\n\tcurrentStatus := AppStatus {\r\n\t\tStatus: "ready",\r\n\t\t// get environment from app receiver in main\r\n\t\tEnvironment: app.config.env,\r\n\t\t// Version is declared as a global variable in main\r\n\t\tVersion: version,\r\n\t}\r\n\t// Convert to JSON\r\n\tjs, err := json.MarshalIndent(currentStatus, "", "\\t")\r\n\tif err != nil {\r\n\t\t// get logger from app receiver in main\r\n\t\tapp.logger.Println(err)\r\n\t}\r\n\t// Write JSON header, http Status code and publish status variables\r\n\tw.Header().Set("Content-Type", "application/json")\r\n\tw.WriteHeader(http.StatusOK)\r\n\tw.Write(js)\r\n\r\n}\n'})}),"\n",(0,r.jsxs)(e.ol,{start:"3",children:["\n",(0,r.jsxs)(e.li,{children:["Let ",(0,r.jsx)(e.strong,{children:"HttpRouter"})," handle the routing and call the correct handler for each route."]}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"./src/api/routes.go"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"net/http"\r\n\r\n\t"github.com/julienschmidt/httprouter"\r\n)\r\n\r\nfunc (app *application) routes() *httprouter.Router {\r\n\t// Create new router\r\n\trouter := httprouter.New()\r\n\t// let router handle status route with statusHandler\r\n\trouter.HandlerFunc(http.MethodGet, "/status", app.statusHandler)\r\n\r\n\treturn router\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Main now looks like:"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.em,{children:"./src/api/main.go"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"flag"\r\n\t"fmt"\r\n\t"log"\r\n\t"net/http"\r\n\t"os"\r\n\t"time"\r\n)\r\n\r\n// App version\r\nconst version = "1.0.0"\r\n\r\ntype config struct {\r\n\t// App configuration type\r\n\tport int\r\n\tenv  string\r\n}\r\n\r\ntype AppStatus struct {\r\n\t// Type for the status check\r\n\tStatus\t\tstring `json:"status"`\r\n\tEnvironment\tstring `json:"env"`\r\n\tVersion\t\tstring `json:"version"`\r\n}\r\n\r\n\r\n// Receiver type to share informations with other\r\n// components. See `app` variable below\r\ntype application struct {\r\n\tconfig config\r\n\tlogger *log.Logger\r\n}\r\n\r\nfunc main() {\r\n\t// The app configuration is either given as a command line flag\r\n\t// or set to a default value defined below\r\n\tvar cfg config\r\n\tflag.IntVar(&cfg.port, "port", 4000, "Server port to listen on")\r\n\tflag.StringVar(&cfg.env, "env", "dev", "Application environment (dev|prod")\r\n\tflag.Parse()\r\n\r\n\t// Create logger that writes stdout to console\r\n\tlogger := log.New(os.Stdout, "", log.Ldate|log.Ltime)\r\n\r\n\t// application used as an receiver to make config\r\n\t// variables and logger available in other parts\r\n\t// of the application\r\n\tapp := &application {\r\n\t\tconfig: cfg,\r\n\t\tlogger: logger,\r\n\t}\r\n\r\n\tsrv := &http.Server {\r\n\t\tAddr: fmt.Sprintf(":%d", cfg.port),\r\n\t\tHandler: app.routes(),\r\n\t\tIdleTimeout: time.Minute,\r\n\t\tReadTimeout: 10 * time.Second,\r\n\t\tWriteTimeout: 30 * time.Second,\r\n\t}\r\n\r\n\t// Print config to console using logger\r\n\tlogger.Println("Backend (version", version, ") is starting on port", cfg.port, "in", cfg.env, "mode.")\r\n\r\n\t// Start the webservice on the defined app port\r\n\terr := srv.ListenAndServe()\r\n\tif err != nil {\r\n\t\tlog.Println((err))\r\n\t}\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"Test run the application with:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"go run ./src/api/\r\n2021/10/12 13:30:05 Backend (version 1.0.0 ) is starting on port 4000 in dev mode.\n"})})]})}function p(t={}){const{wrapper:e}={...(0,o.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(d,{...t})}):d(t)}},164803:(t,e,n)=>{n.d(e,{A:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f4a66dcdd4723b20f63751871edc4e36.jpg"},28453:(t,e,n)=>{n.d(e,{R:()=>i,x:()=>s});var r=n(296540);const o={},a=r.createContext(o);function i(t){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function s(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:i(t.components),r.createElement(a.Provider,{value:e},t.children)}}}]);