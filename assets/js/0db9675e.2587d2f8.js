"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95603],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},40946:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:9090,slug:"2020-08-16",title:"Nomad Server Cluster",authors:"mpolinowski",tags:["LINUX","Nomad"]},l=void 0,i={unversionedId:"DevOps/Hashicorp/2020-08-16--nomad-cluster/index",id:"DevOps/Hashicorp/2020-08-16--nomad-cluster/index",title:"Nomad Server Cluster",description:"TST, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-08-16--nomad-cluster/index.md",sourceDirName:"DevOps/Hashicorp/2020-08-16--nomad-cluster",slug:"/DevOps/Hashicorp/2020-08-16--nomad-cluster/2020-08-16",permalink:"/docs/DevOps/Hashicorp/2020-08-16--nomad-cluster/2020-08-16",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-08-16--nomad-cluster/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Nomad",permalink:"/docs/tags/nomad"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2020-08-16",title:"Nomad Server Cluster",authors:"mpolinowski",tags:["LINUX","Nomad"]},sidebar:"tutorialSidebar",previous:{title:"Installing HashiCorp Consul on Ubuntu Server 20.04",permalink:"/docs/DevOps/Hashicorp/2020-08-17--installing-consul-ubuntu/2020-08-17"},next:{title:"Installing HashiCorp Nomad on Ubuntu Server 20.04",permalink:"/docs/DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu/2020-08-15"}},s={},c=[{value:"Setting up the Server",id:"setting-up-the-server",level:2},{value:"Setting up a Client",id:"setting-up-a-client",level:2},{value:"Submit a Job",id:"submit-a-job",level:2},{value:"Multiple Instances",id:"multiple-instances",level:3},{value:"WebUI",id:"webui",level:2}],d={toc:c};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TST, Hong Kong",src:t(35221).Z,width:"1500",height:"464"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-the-server"},"Setting up the Server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-a-client"},"Setting up a Client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#submit-a-job"},"Submit a Job"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#multiple-instances"},"Multiple Instances")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#webui"},"WebUI"))),(0,r.kt)("p",null,"Extended your single-node setup to a scalable, production-grade cluster with multiple nodes."),(0,r.kt)("h2",{id:"setting-up-the-server"},"Setting up the Server"),(0,r.kt)("p",null,"The first step is to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/nomad/tree/master/demo/vagrant"},"create the configuration file for the server"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/nomad\ncd ~/nomad\nnano server.hcl\n")),(0,r.kt)("p",null,"Paste the following into a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"server.hcl"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cfg"},'# Increase log verbosity\nlog_level = "DEBUG"\n\n# Setup data dir\ndata_dir = "/tmp/server1"\n\n# Give the agent a unique name. Defaults to hostname\nname = "server1"\n\n# Enable the server\nserver {\n  enabled = true\n\n  # Self-elect, should be 3 or 5 for production\n  bootstrap_expect = 1\n}\n')),(0,r.kt)("p",null,"This will start an agent in server only mode and have it elected as a leader. The major change that should be made for production is to run more than one server, and to change the corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap_expect")," value. Once the file is created, start the agent in a new tab:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad agent -config server.hcl\n")),(0,r.kt)("h2",{id:"setting-up-a-client"},"Setting up a Client"),(0,r.kt)("p",null,"Similar to the server, you must first ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/hashicorp/nomad/tree/master/demo/vagrant"},"configure the clients")," by pasting the following into ",(0,r.kt)("inlineCode",{parentName:"p"},"~/nomad/client1.hcl")," on your ",(0,r.kt)("strong",{parentName:"p"},"Client Server")," (if your Client and Master are on the same server change the server address to ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Increase log verbosity\nlog_level = "DEBUG"\n\n# Setup data dir\ndata_dir = "/tmp/client1"\n\n# Give the agent a unique name. Defaults to hostname\nname = "client1"\n\n# Enable the client\nclient {\n  enabled = true\n\n  # For demo assume we are talking to server1 - in my case this is IP 192.168.2.110.\n  #  For production, this should be like "nomad.service.consul:4647" and a system\n  # like Consul used for service discovery.\n  servers = ["192.168.2.110"]\n}\n\n# Modify our port to avoid a collision with server1\nports {\n  http = 5656\n}\n\n# Because we will potentially have two clients talking to the same\n# Docker daemon, we have to disable the dangling container cleanup,\n# otherwise they will stop each other\'s work thinking it was orphaned.\nplugin "docker" {\n  config {\n    gc {\n      dangling_containers {\n        enabled = false\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Now create the data directory and start the Nomad agent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /tmp/client1\nnomad agent -config client1.hcl\n")),(0,r.kt)("p",null,"Back on the ",(0,r.kt)("strong",{parentName:"p"},"Master Server")," you can now check if the Client was able to connect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad node status\nID        DC   Name     Class   Drain  Eligibility  Status\ndfa0023b  dc1  client1  <none>  false  eligible     ready\n")),(0,r.kt)("p",null,"Your Client was added with the Client ID ",(0,r.kt)("inlineCode",{parentName:"p"},"dfa0023b"),"."),(0,r.kt)("h2",{id:"submit-a-job"},"Submit a Job"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Because the sample job contains a Consul health check, Nomad\u2019s deployment watcher will wait for the check to pass by default. This will cause your deployment to stall after the first allocation updates. Resolve this by adding the following attribute inside of the update stanza:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nano ~/nomad/example.nomad\nhealth_check = "task_states"\n')),(0,r.kt)("p",null,"Use the job run command to submit the job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nomad job run example.nomad\n  ==> Monitoring evaluation "0cd401ff"\n      Evaluation triggered by job "example"\n      Evaluation within deployment: "fdc580b0"\n      Allocation "74f0acf4" created: node "dfa0023b", group "cache"\n      Evaluation status changed: "pending" -> "complete"\n  ==> Evaluation "0cd401ff" finished with status "complete"\n')),(0,r.kt)("p",null,"You can see that the Master allocated the deployment onto the Client server with the ID ",(0,r.kt)("inlineCode",{parentName:"p"},"dfa0023b"),". To stop the job run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad job stop example\n")),(0,r.kt)("h3",{id:"multiple-instances"},"Multiple Instances"),(0,r.kt)("p",null,"We can now edit the ",(0,r.kt)("inlineCode",{parentName:"p"},"example.nomad")," file to start more than one instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"redis"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'group "cache" {\n    # The "count" parameter specifies the number of the task groups that should\n    # be running under this group. This value must be non-negative and defaults\n    # to 1.\n    count = 3\n\n    ...\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can verify the modified file with ",(0,r.kt)("inlineCode",{parentName:"p"},"nomad job plan example.nomad"),".")),(0,r.kt)("p",null,"To handle this extra load we will create another Client - this time on the same PC that runs the Master Server (I only have those 2 at the moment \xaf","\\",(0,r.kt)("em",{parentName:"p"},"(\u30c4)"),"/\xaf):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/nomad/client2.hcl\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Increase log verbosity\nlog_level = "DEBUG"\n\n# Setup data dir\ndata_dir = "/tmp/client2"\n\n# Give the agent a unique name. Defaults to hostname\nname = "client2"\n\n# Enable the client\nclient {\n  enabled = true\n  servers = ["127.0.0.1"]\n}\n\n# Modify our port to avoid a collision with server1\nports {\n  http = 5657\n}\n\n# Because we will potentially have two clients talking to the same\n# Docker daemon, we have to disable the dangling container cleanup,\n# otherwise they will stop each other\'s work thinking it was orphaned.\nplugin "docker" {\n  config {\n    gc {\n      dangling_containers {\n        enabled = false\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Now create the data directory and start the Nomad agent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir /tmp/client2\nnomad agent -config client2.hcl\n")),(0,r.kt)("p",null,"You can now check if the second Client was able to connect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad node status\n\nID        DC   Name     Class   Drain  Eligibility  Status\nf5893fd2  dc1  client1  <none>  false  eligible     ready\n849470a4  dc1  client2  <none>  false  eligible     ready\n")),(0,r.kt)("p",null,"Use the job run command to submit the job:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nomad job run example.nomad\n\n==> Monitoring evaluation "b13a03df"\n    Evaluation triggered by job "example"\n    Evaluation within deployment: "5ce135ac"\n    Allocation "2074bce6" created: node "849470a4", group "cache"\n    Allocation "da4c9a66" created: node "f5893fd2", group "cache"\n    Allocation "0bd967d0" created: node "f5893fd2", group "cache"\n    Evaluation status changed: "pending" -> "complete"\n==> Evaluation "b13a03df" finished with status "complete"\n')),(0,r.kt)("p",null,"You can see that the Master allocated the deployment onto the both Client server."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad status example\n\nID            = example\nName          = example\nSubmit Date   = 2020-08-29T12:45:14Z\nType          = service\nPriority      = 50\nDatacenters   = dc1\nNamespace     = default\nStatus        = running\nPeriodic      = false\nParameterized = false\n\nSummary\nTask Group  Queued  Starting  Running  Failed  Complete  Lost\ncache       0       0         3        0       0         0\n\nLatest Deployment\nID          = 9d27882a\nStatus      = failed\nDescription = Failed due to progress deadline\n\nDeployed\nTask Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline\ncache       3        3       0        0          2020-08-29T12:55:14Z\n\nAllocations\nID        Node ID   Task Group  Version  Desired  Status    Created     Modified\nbe729abd  849470a4  cache       4        run      running   16m42s ago  13m42s ago\n5daea777  f5893fd2  cache       4        run      running   16m42s ago  13m42s ago\n88c1eeaa  f5893fd2  cache       4        run      running   16m42s ago  13m42s ago\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nomad alloc status be729abd\n\nID                  = be729abd-865c-f70d-2557-0e364d066b81\nEval ID             = fd465084\nName                = example.cache[1]\nNode ID             = 849470a4\nNode Name           = client2\nJob ID              = example\nJob Version         = 4\nClient Status       = running\nClient Description  = Tasks are running\nDesired Status      = run\nDesired Description = <none>\nCreated             = 17m56s ago\nModified            = 14m56s ago\nDeployment ID       = 9d27882a\nDeployment Health   = unhealthy\n\nTask "redis" is "running"\nTask Resources\nCPU        Memory           Disk     Addresses\n4/500 MHz  952 KiB/256 MiB  300 MiB  db: 192.168.2.110:27149\n\nTask Events:\nStarted At     = 2020-08-29T12:46:47Z\nFinished At    = N/A\nTotal Restarts = 0\nLast Restart   = N/A\n\nRecent Events:\nTime                  Type             Description\n2020-08-29T12:48:14Z  Alloc Unhealthy  Task not running for min_healthy_time of 10s by deadline\n2020-08-29T12:46:47Z  Started          Task started by client\n2020-08-29T12:45:48Z  Driver           Docker image pull progress: Pulled 5/6 (24.59MiB/28.03MiB) layers: 0 waiting/1 pulling - est 121.5s remaining\n2020-08-29T12:45:14Z  Driver           Downloading image\n2020-08-29T12:45:14Z  Task Setup       Building Task Directory\n2020-08-29T12:45:14Z  Received         Task received by client\n')),(0,r.kt)("h2",{id:"webui"},"WebUI"),(0,r.kt)("p",null,"You can check out the Nomad UI on your Servers IP address and port 4646 e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"http://192.168.2.110:4646/ui/jobs"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Nomad Cluster UI",src:t(17872).Z,width:"903",height:"499"})),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("strong",{parentName:"p"},"Stop")," button to stop the deployment."))}u.isMDXComponent=!0},17872:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Nomad_Cluster_01-ee4d1f448e8fba734b38d660ae1db3c8.png"},35221:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a16d6b2b972d978c81f00ba048e2c6d.jpg"}}]);