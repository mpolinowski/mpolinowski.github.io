"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[96429],{233338:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>o});var n=a(474848),t=a(28453);const i={sidebar_position:9070,slug:"2017-12-31",title:"Securing Elasticsearch with X-Pack",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},c=void 0,r={id:"DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/index",title:"Securing Elasticsearch with X-Pack",description:"Battambang, Cambodia",source:"@site/docs/DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/index.mdx",sourceDirName:"DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack",slug:"/DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/2017-12-31",permalink:"/docs/DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/2017-12-31",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2017-12-31--securing-elasticsearch-xpack/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Databases",permalink:"/docs/tags/databases"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:9070,frontMatter:{sidebar_position:9070,slug:"2017-12-31",title:"Securing Elasticsearch with X-Pack",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Securing Elasticsearch with ReadOnlyREST",permalink:"/docs/DevOps/Elasticsearch/2018-01-01--securing-elasticsearch-readonlyrest/2018-01-01"},next:{title:"Elasticsearch and Kibana",permalink:"/docs/DevOps/Elasticsearch/2017-12-26--elasticsearch-kibana/2017-12-16"}},l={},o=[{value:"Install X-Pack",id:"install-x-pack",level:2},{value:"Elasticsearch Security",id:"elasticsearch-security",level:3},{value:"Kibana Security",id:"kibana-security",level:3},{value:"Enabling Anonymous Access",id:"enabling-anonymous-access",level:3}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Battambang, Cambodia",src:a(634897).A+"",width:"1500",height:"656"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#install-x-pack",children:"Install X-Pack"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#elasticsearch-security",children:"Elasticsearch Security"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#kibana-security",children:"Kibana Security"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#enabling-anonymous-access",children:"Enabling Anonymous Access"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"In an earlier project we set up Elasticsearch to only be accessible via localhost to protect our data. This worked well, since we build our static website server side in Node/Express/EJS and send ready HTML to our client - already containing the rendered response from the database. But what if our app runs client-side?"}),"\n",(0,n.jsx)(s.p,{children:"The official solution is part of the Elastic Extension Pack, which contains a lot of functionality that you might not really need - and comes at a prize that isn't quoted anywhere... That isn't very inviting ~ but lets take a look at it before turning to some free open source alternatives:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://www.elastic.co/downloads/x-pack",children:"Elastic X-Pack"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/floragunncom/search-guard",children:"SearchGuard"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"https://github.com/sscarduzio/elasticsearch-readonlyrest-plugin",children:"ReadOnlyREST"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"install-x-pack",children:"Install X-Pack"}),"\n",(0,n.jsx)(s.p,{children:"X-Pack is a single extension that integrates handy features \u2014 security, alerting, monitoring, reporting, graph exploration, and machine learning \u2014 you can trust across the Elastic Stack."}),"\n",(0,n.jsx)(s.h3,{id:"elasticsearch-security",children:"Elasticsearch Security"}),"\n",(0,n.jsxs)(s.p,{children:["We need to add a user athentication to our Elasticsearch / Kibana setup. We will do this by installing X-Pack. To get started with installing the Elasticsearch plugin, go to ",(0,n.jsx)(s.em,{children:"/etc/elasticsearch/"})," and call the following function:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"bin/elasticsearch-plugin install x-pack\n"})}),"\n",(0,n.jsx)(s.p,{children:"Now restart Elasticsearch:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo systemctl stop elasticsearch.service\r\nsudo systemctl start elasticsearch.service\n"})}),"\n",(0,n.jsx)(s.p,{children:"You can either use the auto function to generate user passwords for Elasticsearch, Kibana (and the not yet installed Logstash):"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"bin/x-pack/setup-passwords auto\n"})}),"\n",(0,n.jsxs)(s.p,{children:["or swap the ",(0,n.jsx)(s.em,{children:"auto"})," flag with ",(0,n.jsx)(s.em,{children:"interactive"})," to use your own user logins. The auto output will look something like this:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"Changed password for user kibana \r\nPASSWORD kibana = *&$*(80gfddzg\r\n\r\nChanged password for user logstash_system\r\nPASSWORD logstash_system = 58#$)Qljfksh\r\n\r\nChanged password for user elastic\r\nPASSWORD elastic = jgfisg)#*%&(@*#)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.strong,{children:["Now every interaction with Elasticsearch or Kibana will require you to authenticate with ",(0,n.jsx)(s.em,{children:"username: elastic"})," and ",(0,n.jsxs)(s.em,{children:["password: jgfisg)#",(0,n.jsx)(s.em,{children:"%&(@"}),"#)"]})]})}),"\n",(0,n.jsx)(s.h3,{id:"kibana-security",children:"Kibana Security"}),"\n",(0,n.jsxs)(s.p,{children:["Now we repeat these steps with Kibana. First navigate to ",(0,n.jsx)(s.em,{children:"/etc/kibana/"})," and call the following function:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"bin/kibana-plugin install x-pack\n"})}),"\n",(0,n.jsxs)(s.p,{children:["And we have to add the login that Kibana has to use to access Elasticsearch (auto generated above) to the ",(0,n.jsx)(s.em,{children:"kibana.yml"})," file in ",(0,n.jsx)(s.em,{children:"/etc/kibana/"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"elasticsearch.username: 'kibana'\r\nelasticsearch.password:  '*&$*(80gfddzg'\n"})}),"\n",(0,n.jsx)(s.p,{children:"Now restart Kibana:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"sudo systemctl stop kibana.service\r\nsudo systemctl start kibana.service\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Now navigate your browser ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"http://localhost:5601/",children:"http://localhost:5601/"})})," and login with the 'elastic' user we generated above."]}),"\n",(0,n.jsx)(s.h3,{id:"enabling-anonymous-access",children:"Enabling Anonymous Access"}),"\n",(0,n.jsxs)(s.p,{children:["Incoming requests are considered to be anonymous if no authentication token can be extracted from the incoming request. By default, anonymous requests are rejected and an authentication error is returned (status code 401). To allow anonymous user to send search queries (Read access to specified indices), we need to add the following lines to the ",(0,n.jsx)(s.em,{children:"elasticsearch.yml"})," file in ",(0,n.jsx)(s.em,{children:"/etc/elasticsearch/"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"xpack.security.authc:\r\n  anonymous:\r\n    username: anonymous_user \r\n    roles: wiki_reader \r\n    authz_exception: true \n"})}),"\n",(0,n.jsxs)(s.p,{children:["Now we have to switch to the Kibana webUI on ",(0,n.jsx)(s.em,{children:(0,n.jsx)(s.a,{href:"http://localhost:5601/",children:"http://localhost:5601/"})})," and create the ",(0,n.jsx)(s.em,{children:"role:"})," ",(0,n.jsx)(s.em,{children:"wiki_reader"})," to allow read access to the wiki indices. First switch to the ",(0,n.jsx)(s.strong,{children:"Management"})," tab and click on user:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:a(458720).A+"",width:"1075",height:"557"})}),"\n",(0,n.jsxs)(s.p,{children:["Then click on ",(0,n.jsx)(s.strong,{children:"Add a User"})," and add a user with the ",(0,n.jsx)(s.strong,{children:"watcher_user"})," role:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:a(237051).A+"",width:"1175",height:"533"})}),"\n",(0,n.jsxs)(s.p,{children:["Switch back to the ",(0,n.jsx)(s.strong,{children:"Management"})," tab and click on role:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:a(5874).A+"",width:"1075",height:"561"})}),"\n",(0,n.jsxs)(s.p,{children:["Click on ",(0,n.jsx)(s.strong,{children:"Create Role"})," and add the name ",(0,n.jsx)(s.strong,{children:"wiki_reader"})," that we choose for the role of the anonymous user inside the elasticsearch.yml file, assign the ",(0,n.jsx)(s.strong,{children:"monitor_watcher"})," privilege and choose the indices that you want the anonymous user to have ",(0,n.jsx)(s.strong,{children:"READ"})," access to:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:a(810733).A+"",width:"1075",height:"723"})}),"\n",(0,n.jsxs)(s.p,{children:["Your configuration will be active after restarting Elasticsearch. Now you can use webservices to read from your ES database. But only the ",(0,n.jsx)(s.strong,{children:"elastic"})," user has the privileg to ",(0,n.jsx)(s.strong,{children:"WRITE"})," and to work in Kibana."]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},458720:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/kibana_01-6915859e24670268a757da44433e5f13.png"},237051:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/kibana_02-886c1d63b6ac903e716712158f0ef6f0.png"},5874:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/kibana_03-6c13d223bec4aaa324e45f3a69308ec8.png"},810733:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/kibana_04-d0ab9bd19ab5f91475176def418d0e04.png"},634897:(e,s,a)=>{a.d(s,{A:()=>n});const n=a.p+"assets/images/photo-11627765794_33a4cf2a0c_o-c9133d6199fa1669b6a1e44f0926c5fb.png"},28453:(e,s,a)=>{a.d(s,{R:()=>c,x:()=>r});var n=a(296540);const t={},i=n.createContext(t);function c(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);