"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[71107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(i,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},55498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:9070,slug:"2020-08-19",title:"Joining Consul Clients",authors:"mpolinowski",tags:["LINUX","Consul"]},s=void 0,l={unversionedId:"DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/index",id:"DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/index",title:"Joining Consul Clients",description:"TST, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/index.md",sourceDirName:"DevOps/Hashicorp/2020-08-18--consul-mock-datacenter",slug:"/DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/2020-08-19",permalink:"/docs/DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/2020-08-19",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Consul",permalink:"/docs/tags/consul"}],version:"current",sidebarPosition:9070,frontMatter:{sidebar_position:9070,slug:"2020-08-19",title:"Joining Consul Clients",authors:"mpolinowski",tags:["LINUX","Consul"]},sidebar:"tutorialSidebar",previous:{title:"Consul Service Mesh",permalink:"/docs/DevOps/Hashicorp/2020-08-18--consul-service-mesh/2020-08-18"},next:{title:"Installing HashiCorp Consul on Ubuntu Server 20.04",permalink:"/docs/DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/2020-08-17"}},i={},c=[{value:"Start the Agents",id:"start-the-agents",level:2},{value:"Join the Agents",id:"join-the-agents",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TST, Hong Kong",src:n(9585).Z,width:"1500",height:"562"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#start-the-agents"},"Start the Agents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#join-the-agents"},"Join the Agents"))),(0,r.kt)("p",null,"When a new Consul agent starts, it doesn't know about other agents; it is essentially a datacenter with one member. Agents learn about each other in two ways. To add a new agent to an existing datacenter you give it the IP address of any other agent in the datacenter (either a client or a server), which causes the new agent to join the datacenter. Once the agent is a member of the new datacenter, it automatically learns about the other agents via gossip."),(0,r.kt)("p",null,"In this tutorial, we will configure the Consul agent to run in server mode instead of the dev mode we used earlier. This is done via the following command line flags:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(In production you would provide these settings to consul in a configuration file.)")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"server")," - Providing this flag specifies that you want the agent to start in server mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-bootstrap-expect")," - This tells the Consul server how many servers the datacenter should have in total. All the servers will wait for this number to join before bootstrapping the replicated log, which keeps data consistent across all the servers. Because you are setting up a one-server datacenter, you'll set this value to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-node")," - Each node in a datacenter must have a unique name. By default, Consul uses the hostname of the machine, but you'll manually override it, and set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"consul-server"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"-bind")," - This is the address that this agent will listen on for communication from other Consul members. It must be accessible by all other nodes in the datacenter. If you don't set a bind address Consul will try to listen on all IPv4 interfaces and will fail to start if it finds multiple private IPs. Since production servers often have multiple interfaces, you should always provide a bind address. In my case this is ",(0,r.kt)("inlineCode",{parentName:"li"},"192.168.2.110")," for the server and ",(0,r.kt)("inlineCode",{parentName:"li"},"192.168.2.111")," for the client."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"data-dir")," - This flag tells Consul agents where they should store their state, which can include sensitive data like ACL tokens for both servers and clients. In production deployments you should be careful about the permissions for this directory. I will create a directory ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/consul-test"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"config-dir")," - This flag tells consul where to look for its configuration. You will set it to a standard location: ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/consul.d"),".")),(0,r.kt)("h2",{id:"start-the-agents"},"Start the Agents"),(0,r.kt)("p",null,"Start your first Consul agent by running the following command. Consul will start up in the foreground of your terminal window:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul agent \\\n  -server \\\n  -bootstrap-expect=1 \\\n  -node=consul-server \\\n  -bind=192.168.2.110 \\\n  -data-dir=/tmp/consul-test \\\n  -config-dir=/etc/consul.d\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client")),(0,r.kt)("p",null,"And on your client server - in my case IP ",(0,r.kt)("inlineCode",{parentName:"p"},"192.168.2.111")," - execute the Consul service with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul agent \\\n  -node=consul-client1 \\\n  -bind=192.168.2.111 \\\n  -enable-script-checks=true \\\n  -data-dir=/tmp/consul-test \\\n  -config-dir=/etc/consul.d\n")),(0,r.kt)("p",null,"Now you have two Consul agents running: one server and one client. The two agents still don't know about each other and each comprise their own single-node datacenters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul members\n\nNode           Address             Status  Type    Build  Protocol  DC   Segment\nconsul-server  192.168.2.110:8301  alive   server  1.8.3  2         dc1  <all>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul members\n              \nNode       Address             Status  Type    Build  Protocol  DC   Segment\nagent-two  192.168.2.111:8301  alive   client  1.8.3  2         dc1  <default>\n")),(0,r.kt)("h2",{id:"join-the-agents"},"Join the Agents"),(0,r.kt)("p",null,"Run the consul join command on the Consul server, giving it the bind address of the Consul client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul join 192.168.2.111\n\nSuccessfully joined cluster by contacting 1 nodes.\n")),(0,r.kt)("p",null,"You can verify that the client was added by typing:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul members\n\nNode           Address             Status  Type    Build  Protocol  DC   Segment\nconsul-server  192.168.2.110:8301  alive   server  1.8.3  2         dc1  <all>\nagent-two      192.168.2.111:8301  alive   client  1.8.3  2         dc1  <default>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Client")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"consul members\n              \nNode           Address             Status  Type    Build  Protocol  DC   Segment\nconsul-server  192.168.2.110:8301  alive   server  1.8.3  2         dc1  <all>\nagent-two      192.168.2.111:8301  alive   client  1.8.3  2         dc1  <default>\n")),(0,r.kt)("p",null,"In production, new Consul agents should automatically join the datacenter without human intervention. You can provide hard-coded addresses of known Consul agents to new agents using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-join")," flag or ",(0,r.kt)("inlineCode",{parentName:"p"},"start_join")," setting."))}d.isMDXComponent=!0},9585:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-57269f97e6ae2616c9623b1eb52b5373.jpg"}}]);