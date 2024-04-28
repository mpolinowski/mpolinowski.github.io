"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[72849],{283053:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=r(474848),t=r(28453);const i={sidebar_position:9080,slug:"2020-08-17",title:"Installing HashiCorp Consul on Ubuntu Server 20.04",authors:"mpolinowski",tags:["LINUX","Consul"]},a=void 0,o={id:"DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/index",title:"Installing HashiCorp Consul on Ubuntu Server 20.04",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/index.md",sourceDirName:"DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu",slug:"/DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/2020-08-17",permalink:"/docs/DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/2020-08-17",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Consul",permalink:"/docs/tags/consul"}],version:"current",sidebarPosition:9080,frontMatter:{sidebar_position:9080,slug:"2020-08-17",title:"Installing HashiCorp Consul on Ubuntu Server 20.04",authors:"mpolinowski",tags:["LINUX","Consul"]},sidebar:"tutorialSidebar",previous:{title:"Joining Consul Clients",permalink:"/docs/DevOps/Hashicorp/2020-08-18--consul-mock-datacenter/2020-08-19"},next:{title:"Nomad Server Cluster",permalink:"/docs/DevOps/Hashicorp/2020-08-16--nomad-cluster/2020-08-16"}},l={},c=[{value:"Install Consul on Ubuntu 20.04",id:"install-consul-on-ubuntu-2004",level:2},{value:"Ports Used",id:"ports-used",level:3},{value:"Start the Consul Agent in Dev Mode",id:"start-the-consul-agent-in-dev-mode",level:2},{value:"Consul Service Discovery",id:"consul-service-discovery",level:2},{value:"Define a Service",id:"define-a-service",level:3},{value:"Service Health Check",id:"service-health-check",level:2},{value:"The WebUI",id:"the-webui",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Victoria Harbour, Hong Kong",src:r(775947).A+"",width:"1500",height:"592"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#install-consul-on-ubuntu-2004",children:"Install Consul on Ubuntu 20.04"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ports-used",children:"Ports Used"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#start-the-consul-agent-in-dev-mode",children:"Start the Consul Agent in Dev Mode"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#consul-service-discovery",children:"Consul Service Discovery"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#define-a-service",children:"Define a Service"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#service-health-check",children:"Service Health Check"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#the-webui",children:"The WebUI"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.hashicorp.com/products/consul/",children:"Consul"})," is a networking tool that provides a fully featured service-mesh control plane and service discovery. Consul also includes a key-value store for service configuration. Learn how to perform common Consul operations locally."]}),"\n",(0,s.jsx)(n.h2,{id:"install-consul-on-ubuntu-2004",children:"Install Consul on Ubuntu 20.04"}),"\n",(0,s.jsx)(n.p,{children:"The first thing you need to do in order to use Consul is install it. In a production deployment you would install Consul on every node where you want to register services:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add the official HashiCorp Linux repository:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Update and install."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update && sudo apt-get install consul\n"})}),"\n",(0,s.jsx)(n.p,{children:"After installing Consul, verify that the installation worked by opening a new terminal session and running the command :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul\r\nUsage: consul [--version] [--help] <command> [<args>]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ports-used",children:"Ports Used"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"(only additional ports to the Nomad service)"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --permanent --zone=public --add-port=8500/tcp\r\nfirewall-cmd --permanent --zone=public --add-port=8301/tcp\r\nfirewall-cmd --reload\r\nfirewall-cmd --zone=public --list-all\n"})}),"\n",(0,s.jsx)(n.h2,{id:"start-the-consul-agent-in-dev-mode",children:"Start the Consul Agent in Dev Mode"}),"\n",(0,s.jsx)(n.p,{children:"Lets start our local agent in development mode, which is an in memory server mode with some common features enabled (despite security risks) for ease of use, and all persistence options turned off:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul agent -dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"Check the membership of the Consul datacenter by running the following command in a new terminal window:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul members\r\n\r\nNode         Address         Status  Type    Build  Protocol  DC   Segment\r\nsalt-master  127.0.0.1:8301  alive   server  1.8.3  2         dc1  <all>\n"})}),"\n",(0,s.jsx)(n.p,{children:"The output displays your agent, its IP address, its health state, its role in the datacenter, and some version information. You can discover additional metadata by providing the -detailed flag."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul members --detailed\r\nNode         Address         Status  Tags\r\nsalt-master  127.0.0.1:8301  alive   acls=0,build=1.8.3:a9322b9c,dc=dc1,ft_fs=1,id=6f0b4bf5-a294-20f3-a3e1-c4f9d3e75de7,port=8300,raft_vsn=3,role=consul,segment=<all>,vsn=2,vsn_max=3,vsn_min=2,wan_join_port=8302\n"})}),"\n",(0,s.jsx)(n.p,{children:"For a strongly consistent view of the world, query the HTTP API, which forwards the request to the Consul servers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl localhost:8500/v1/catalog/nodes\r\n[\r\n    {\r\n        "ID": "6f0b4bf5-a294-20f3-a3e1-c4f9d3e75de7",\r\n        "Node": "salt-master",\r\n        "Address": "127.0.0.1",\r\n        "Datacenter": "dc1",\r\n        "TaggedAddresses": {\r\n            "lan": "127.0.0.1",\r\n            "lan_ipv4": "127.0.0.1",\r\n            "wan": "127.0.0.1",\r\n            "wan_ipv4": "127.0.0.1"\r\n        },\r\n        "Meta": {\r\n            "consul-network-segment": ""\r\n        },\r\n        "CreateIndex": 10,\r\n        "ModifyIndex": 12\r\n    }\r\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"This will gracefully stop the agent, causing it to leave the Consul datacenter and shut down:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul leave\r\n\r\nGraceful leave complete\n"})}),"\n",(0,s.jsx)(n.p,{children:"When you issue the leave command, Consul notifies other members that the agent left the datacenter. Forcibly killing the agent process indicates to other agents in the Consul datacenter that the node failed instead of left. When a node fails, its health is marked as critical, but it is not removed from the catalog."}),"\n",(0,s.jsx)(n.h2,{id:"consul-service-discovery",children:"Consul Service Discovery"}),"\n",(0,s.jsx)(n.p,{children:"One of the major use cases for Consul is service discovery. Consul knows where these services are located because each service registers with its local Consul client. Operators can register services manually, configuration management tools can register services when they are deployed, or container orchestration platforms can register services automatically via integrations."}),"\n",(0,s.jsx)(n.h3,{id:"define-a-service",children:"Define a Service"}),"\n",(0,s.jsx)(n.p,{children:"You can register services either by providing a service definition, which is the most common way to register services, or by making a call to the HTTP API."}),"\n",(0,s.jsx)(n.p,{children:"First, create a directory for Consul configuration. Consul loads all configuration files in the configuration directory, so a common convention on Unix systems is to name the directory something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/consul.d\r\nnano /etc/consul.d/web.json\n"})}),"\n",(0,s.jsx)(n.p,{children:'Pretend there is a service named "web" running on port 80. This file will contain the service definition: name, port, and an optional tag you can use to find the service later on:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "service": {\r\n    "name": "web",\r\n    "tags": ["frontend"],\r\n    "port": 80\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": We never started a web service in this example. Consul can register services that aren't running yet. It correlates each running service with its registration based on the service's port."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Now, restart the agent, using command line flags to specify the configuration directory and enable script checks on the agent."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Security Warning"}),": Enabling script checks in some configurations may introduce a remote execution vulnerability which is known to be targeted by malware. In production we strongly recommend ",(0,s.jsx)(n.code,{children:"-enable-local-script-checks"})," instead."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul agent -dev -enable-script-checks -config-dir=/etc/consul.d\n"})}),"\n",(0,s.jsx)(n.p,{children:"We can use the HTTP API to see if the service was registered:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'curl localhost:8500/v1/catalog/services\r\n\r\n{\r\n    "consul": [],\r\n    "nomad": [\r\n        "http",\r\n        "serf",\r\n        "rpc"\r\n    ],\r\n    "nomad-client": [\r\n        "http"\r\n    ],\r\n    "web": [\r\n        "frontend"\r\n    ]\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And get some details for the service itself:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'curl http://localhost:8500/v1/catalog/service/web\r\n[\r\n    {\r\n        "ID": "b6a5758f-b955-df07-d7a1-c9f26853641a",\r\n        "Node": "salt-master",\r\n        "Address": "127.0.0.1",\r\n        "Datacenter": "dc1",\r\n        "TaggedAddresses": {\r\n            "lan": "127.0.0.1",\r\n            "lan_ipv4": "127.0.0.1",\r\n            "wan": "127.0.0.1",\r\n            "wan_ipv4": "127.0.0.1"\r\n        },\r\n        "NodeMeta": {\r\n            "consul-network-segment": ""\r\n        },\r\n        "ServiceKind": "",\r\n        "ServiceID": "web",\r\n        "ServiceName": "web",\r\n        "ServiceTags": [\r\n            "frontend"\r\n        ],\r\n        "ServiceAddress": "",\r\n        "ServiceWeights": {\r\n            "Passing": 1,\r\n            "Warning": 1\r\n        },\r\n        "ServiceMeta": {},\r\n        "ServicePort": 80,\r\n        "ServiceEnableTagOverride": false,\r\n        "ServiceProxy": {\r\n            "MeshGateway": {},\r\n            "Expose": {}\r\n        },\r\n        "ServiceConnect": {},\r\n        "CreateIndex": 13,\r\n        "ModifyIndex": 13\r\n    }\r\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"The HTTP API lists all nodes hosting a given service. You'll typically want to filter your query for only healthy service instances, which DNS does automatically under the hood. Filter your HTTP API query to look for only healthy instances:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'curl \'http://localhost:8500/v1/health/service/web?passing\'\r\n[\r\n    {\r\n        "Node": {\r\n            "ID": "b6a5758f-b955-df07-d7a1-c9f26853641a",\r\n            "Node": "salt-master",\r\n            "Address": "127.0.0.1",\r\n            "Datacenter": "dc1",\r\n            "TaggedAddresses": {\r\n                "lan": "127.0.0.1",\r\n                "lan_ipv4": "127.0.0.1",\r\n                "wan": "127.0.0.1",\r\n                "wan_ipv4": "127.0.0.1"\r\n            },\r\n            "Meta": {\r\n                "consul-network-segment": ""\r\n            },\r\n            "CreateIndex": 10,\r\n            "ModifyIndex": 12\r\n        },\r\n        "Service": {\r\n            "ID": "web",\r\n            "Service": "web",\r\n            "Tags": [\r\n                "frontend"\r\n            ],\r\n            "Address": "",\r\n            "Meta": null,\r\n            "Port": 80,\r\n            "Weights": {\r\n                "Passing": 1,\r\n                "Warning": 1\r\n            },\r\n            "EnableTagOverride": false,\r\n            "Proxy": {\r\n                "MeshGateway": {},\r\n                "Expose": {}\r\n            },\r\n            "Connect": {},\r\n            "CreateIndex": 13,\r\n            "ModifyIndex": 13\r\n        },\r\n        "Checks": [\r\n            {\r\n                "Node": "salt-master",\r\n                "CheckID": "serfHealth",\r\n                "Name": "Serf Health Status",\r\n                "Status": "passing",\r\n                "Notes": "",\r\n                "Output": "Agent alive and reachable",\r\n                "ServiceID": "",\r\n                "ServiceName": "",\r\n                "ServiceTags": [],\r\n                "Type": "",\r\n                "Definition": {},\r\n                "CreateIndex": 10,\r\n                "ModifyIndex": 10\r\n            }\r\n        ]\r\n    }\r\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We can also query the web service using Consul's DNS interface. The DNS name for a service registered with Consul is ",(0,s.jsx)(n.code,{children:"NAME.service.consul"}),", where NAME is the name you used to register the service (in this case, ",(0,s.jsx)(n.code,{children:"web"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-conf",children:"dig @127.0.0.1 -p 8600 web.service.consul\r\n\r\n; <<>> DiG 9.16.1-Ubuntu <<>> @127.0.0.1 -p 8600 web.service.consul\r\n; (1 server found)\r\n;; global options: +cmd\r\n;; Got answer:\r\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 55751\r\n;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 1\r\n;; WARNING: recursion requested but not available\r\n\r\n;; OPT PSEUDOSECTION:\r\n; EDNS: version: 0, flags:; udp: 4096\r\n;; QUESTION SECTION:\r\n;web.service.consul.            IN      A\r\n\r\n;; ANSWER SECTION:\r\nweb.service.consul.     0       IN      A       127.0.0.1\r\n\r\n;; Query time: 0 msec\r\n;; SERVER: 127.0.0.1#8600(127.0.0.1)\r\n;; WHEN: Sat Aug 29 16:20:51 UTC 2020\r\n;; MSG SIZE  rcvd: 63\n"})}),"\n",(0,s.jsx)(n.p,{children:"As you can verify from the output, an A record was returned containing the IP address where the service was registered. A records can only hold IP addresses. You can also use the DNS interface to retrieve the entire address/port pair as a SRV record:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'dig @127.0.0.1 -p 8600 web.service.consul SRV\r\n\r\n; <<>> DiG 9.16.1-Ubuntu <<>> @127.0.0.1 -p 8600 web.service.consul SRV\r\n; (1 server found)\r\n;; global options: +cmd\r\n;; Got answer:\r\n;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 63249\r\n;; flags: qr aa rd; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 3\r\n;; WARNING: recursion requested but not available\r\n\r\n;; OPT PSEUDOSECTION:\r\n; EDNS: version: 0, flags:; udp: 4096\r\n;; QUESTION SECTION:\r\n;web.service.consul.            IN      SRV\r\n\r\n;; ANSWER SECTION:\r\nweb.service.consul.     0       IN      SRV     1 1 80 salt-master.node.dc1.consul.\r\n\r\n;; ADDITIONAL SECTION:\r\nsalt-master.node.dc1.consul. 0  IN      A       127.0.0.1\r\nsalt-master.node.dc1.consul. 0  IN      TXT     "consul-network-segment="\r\n\r\n;; Query time: 0 msec\r\n;; SERVER: 127.0.0.1#8600(127.0.0.1)\r\n;; WHEN: Sat Aug 29 16:21:17 UTC 2020\r\n;; MSG SIZE  rcvd: 146\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use the DNS interface to filter services by tags ",(0,s.jsx)(n.code,{children:"dig @127.0.0.1 -p 8600 frontend.service.consul SRV"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"service-health-check",children:"Service Health Check"}),"\n",(0,s.jsxs)(n.p,{children:["Next you'll update the web service by registering a ",(0,s.jsx)(n.a,{href:"https://www.consul.io/docs/agent/checks.html",children:"health check"})," for it. Remember that because you never started a service on port 80 where you registered web, the health check you register will fail."]}),"\n",(0,s.jsxs)(n.p,{children:["You can update service definitions without any downtime by changing the service definition file and sending a ",(0,s.jsx)(n.code,{children:"SIGHUP"})," to the agent or running ",(0,s.jsx)(n.code,{children:"consul reload"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"First, edit the registration file by running the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano /etc/consul.d/web.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"And add the following content:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "service": {\r\n    "name": "web",\r\n    "tags": ["frontend"],\r\n    "port": 80,\r\n    "check": {\r\n      "args": ["curl", "localhost"],\r\n      "interval": "10s"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"check"})," stanza of this service definition adds a script-based health check that tries to connect to the web service every 10 seconds via curl. If the command exits with an exit code ",(0,s.jsx)(n.code,{children:">= 2"}),", then the check will fail and Consul will consider the service unhealthy. An exit code of ",(0,s.jsx)(n.code,{children:"1"})," will be considered as warning state."]}),"\n",(0,s.jsx)(n.p,{children:"Now reload Consul's configuration to make it aware of the new health check:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"consul reload\r\n\r\nConfiguration reload triggered\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You will now start seeing ",(0,s.jsx)(n.strong,{children:"Critical Warnings"})," in the Consul log every 10 seconds since the health check is failing:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"2020-08-29T16:34:20.113Z [WARN]  agent: Check is now critical: check=service:web\n"})}),"\n",(0,s.jsx)(n.p,{children:"Consul's DNS server only returns healthy results. Query DNS for the web service again. It shouldn't return any IP addresses since web's health check is failing."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"dig @127.0.0.1 -p 8600 web.service.consul\r\n\r\n; <<>> DiG 9.16.1-Ubuntu <<>> @127.0.0.1 -p 8600 web.service.consul\r\n; (1 server found)\r\n;; global options: +cmd\r\n;; Got answer:\r\n;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: 5462\r\n;; flags: qr aa rd; QUERY: 1, ANSWER: 0, AUTHORITY: 1, ADDITIONAL: 1\r\n;; WARNING: recursion requested but not available\r\n\r\n;; OPT PSEUDOSECTION:\r\n; EDNS: version: 0, flags:; udp: 4096\r\n;; QUESTION SECTION:\r\n;web.service.consul.            IN      A\r\n\r\n;; AUTHORITY SECTION:\r\nconsul.                 0       IN      SOA     ns.consul. hostmaster.consul. 1598718956 3600 600 86400 0\r\n\r\n;; Query time: 0 msec\r\n;; SERVER: 127.0.0.1#8600(127.0.0.1)\r\n;; WHEN: Sat Aug 29 16:35:56 UTC 2020\r\n;; MSG SIZE  rcvd: 97\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also the HTTP API only returns an empty array now:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl 'http://localhost:8500/v1/health/service/web?passing'\r\n\r\n[]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["I am going to use httpster to spin up an Node.js based web server on port ",(0,s.jsx)(n.code,{children:"80"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'mkdir ~/test && cd ~/test\r\n\r\nnano index.html  //add a simple "Hello World"\r\n\r\nnpm install -g httpster  //requires Node.js and NPM to be installed on your server\r\n\r\nhttpster -p 80\n'})}),"\n",(0,s.jsx)(n.h2,{id:"the-webui",children:"The WebUI"}),"\n",(0,s.jsxs)(n.p,{children:["You can now open your servers IP address and should be able to see your Hello World website. Let's see if the service is now back up and healthy. Open your web browser on your server IP address and port ",(0,s.jsx)(n.code,{children:"8500"})," - e.g. ",(0,s.jsx)(n.code,{children:"http://192.168.2.110:8500/"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"All Service Checks Passing!"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Consul Service Discovery",src:r(285896).A+"",width:"899",height:"374"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},285896:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/Consul_Service_Discovery_01-014ab3bcbae33e2b76a0671da9272853.png"},775947:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5d3c51a1c4023f799928a62a91e5194f.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(296540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);