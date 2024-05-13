"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[53988],{824599:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=n(474848),s=n(28453);const r={sidebar_position:8950,slug:"2022-10-15",title:"Python - Build a REST API",authors:"mpolinowski",tags:["Python"],description:"Using Flask to deploy an JSON REST API."},i=void 0,a={id:"Development/Python/2022-10-15-python-rest-server/index",title:"Python - Build a REST API",description:"Using Flask to deploy an JSON REST API.",source:"@site/docs/Development/Python/2022-10-15-python-rest-server/index.md",sourceDirName:"Development/Python/2022-10-15-python-rest-server",slug:"/Development/Python/2022-10-15-python-rest-server/2022-10-15",permalink:"/docs/Development/Python/2022-10-15-python-rest-server/2022-10-15",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-15-python-rest-server/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8950,frontMatter:{sidebar_position:8950,slug:"2022-10-15",title:"Python - Build a REST API",authors:"mpolinowski",tags:["Python"],description:"Using Flask to deploy an JSON REST API."},sidebar:"tutorialSidebar",previous:{title:"Python - Natural Language Processing",permalink:"/docs/Development/Python/2022-10-22-python-nlp/2022-10-22"},next:{title:"Python - Working with the Elasticsearch REST API",permalink:"/docs/Development/Python/2022-10-14-python-rest-elastic/2022-10-14"}},u={},l=[{value:"Beautiful Soup",id:"beautiful-soup",level:2},{value:"Flask",id:"flask",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Sham Sui Po, Hong Kong",src:n(532925).A+"",width:"1500",height:"548"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#beautiful-soup",children:"Beautiful Soup"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#flask",children:"Flask"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/mpolinowski/python-rest-server",children:"Github Repository"})}),"\n",(0,o.jsx)(t.h2,{id:"beautiful-soup",children:"Beautiful Soup"}),"\n",(0,o.jsxs)(t.p,{children:["Using Beautiful Soup to scrape conversion rates from ",(0,o.jsx)(t.code,{children:"www.x-rates.com"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"from flask import Flask, jsonify\nfrom bs4 import BeautifulSoup\nimport requests\n\ndef get_conversion(in_cur, out_cur):\n    url = f'https://www.x-rates.com/calculator/?from={in_cur}&to={out_cur}&ammount=1'\n    content = requests.get(url).text\n    soup = BeautifulSoup(content, 'html.parser')\n    rate = soup.find(\"span\", class_=\"ccOutputRslt\").get_text()\n    rate = float(rate[:-4])\n\n    return rate\n"})}),"\n",(0,o.jsx)(t.h2,{id:"flask",children:"Flask"}),"\n",(0,o.jsx)(t.p,{children:"Flask to return the JSON data through our REST API:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-py",children:"app = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return '<h1>Currency Rate API</h1><p><small>API Endpoint Example: <em>/api/v1/eur_cny</em></small></p>'\n\n@app.route('/api/v1/<in_cur>_<out_cur>')\ndef api(in_cur, out_cur):\n    conversion = get_conversion(in_cur, out_cur)\n    response ={'input_currency': in_cur, 'output_currency': out_cur, 'conversion_rate': conversion}\n\n    return jsonify(response)\n\n\napp.run(host='0.0.0.0')\n"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Python - Build a REST API",src:n(175870).A+"",width:"1043",height:"156"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},175870:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Python_Flask_REST_Server_01-d5535db6601ccbfbfb9d3143ef10726b.png"},532925:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var o=n(296540);const s={},r=o.createContext(s);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);