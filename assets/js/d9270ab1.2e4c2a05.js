"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[93998],{980938:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=r(785893),t=r(603905);const s={sidebar_position:1e4,slug:"2020-08-15",title:"Installing HashiCorp Nomad on Ubuntu Server 20.04",authors:"mpolinowski",tags:["LINUX","Nomad"]},i=void 0,o={id:"DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu/index",title:"Installing HashiCorp Nomad on Ubuntu Server 20.04",description:"TST, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu/index.md",sourceDirName:"DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu",slug:"/DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu/2020-08-15",permalink:"/docs/DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu/2020-08-15",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-08-15--installing-nomad-ubuntu/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Nomad",permalink:"/docs/tags/nomad"}],version:"current",sidebarPosition:1e4,frontMatter:{sidebar_position:1e4,slug:"2020-08-15",title:"Installing HashiCorp Nomad on Ubuntu Server 20.04",authors:"mpolinowski",tags:["LINUX","Nomad"]},sidebar:"tutorialSidebar",previous:{title:"Nomad Server Cluster",permalink:"/docs/DevOps/Hashicorp/2020-08-16--nomad-cluster/2020-08-16"},next:{title:"Zabbix",permalink:"/docs/category/zabbix"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Installing Nomad as APT Package",id:"installing-nomad-as-apt-package",level:2},{value:"Ports Used",id:"ports-used",level:3},{value:"Nomad Agent",id:"nomad-agent",level:2},{value:"Jobs",id:"jobs",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TST, Hong Kong",src:r(103099).Z+"",width:"1500",height:"562"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#installing-nomad-as-apt-package",children:"Installing Nomad as APT Package"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#ports-used",children:"Ports Used"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#nomad-agent",children:"Nomad Agent"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#jobs",children:"Jobs"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://www.nomadproject.io",children:"Nomad"})," simple and flexible workload orchestrator to deploy and manage containers and non-containerized applications across on-prem and clouds at scale."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Simple and Lightweight"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Single binary that integrates into existing infrastructure. Easy to operate on-prem or in the cloud with minimal overhead."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Flexible Workload Support"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Orchestrate applications of any type - not just containers. First class support for Docker, Windows, Java, VMs, and more."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Modernize Legacy Applications without Rewrite"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Bring orchestration benefits to existing services. Achieve zero downtime deployments, improved resilience, higher resource utilization, and more without containerization."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Easy Federation at Scale"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Single command for multi-region, multi-cloud federation. Deploy applications globally to any region using Nomad as a single unified control plane."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Multi-Cloud with Ease"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"One single unified workflow for deploying to bare metal or cloud environments. Enable multi-cloud applications with ease."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Native Integrations with Terraform, Consul, and Vault"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Nomad integrates seamlessly with Terraform, Consul and Vault for provisioning, service networking, and secrets management."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installing-nomad-as-apt-package",children:"Installing Nomad as APT Package"}),"\n",(0,a.jsx)(n.p,{children:"Add the HashiCorp GPG key."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\n"})}),"\n",(0,a.jsx)(n.p,{children:"Add the official HashiCorp Linux repository."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Update and install."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"apt-get update && apt-get install nomad\n"})}),"\n",(0,a.jsx)(n.p,{children:"To verify Nomad was installed correctly, try the nomad command."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad\n"})}),"\n",(0,a.jsx)(n.h3,{id:"ports-used",children:"Ports Used"}),"\n",(0,a.jsx)(n.p,{children:"Nomad requires 3 different ports to work properly on servers and 2 on clients, some on TCP, UDP, or both protocols:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"HTTP API"})," (Default ",(0,a.jsx)(n.code,{children:"4646"}),"): This is used by clients and servers to serve the HTTP API. TCP only."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"RPC"})," (Default ",(0,a.jsx)(n.code,{children:"4647"}),"): This is used for internal RPC communication between client agents and servers, and for inter-server traffic. TCP only."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Serf WAN"})," (Default ",(0,a.jsx)(n.code,{children:"4648"}),"): This is used by servers to gossip both over the LAN and WAN to other servers. It isn't required that Nomad clients can reach this address. TCP and UDP."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"FirewallD"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"firewall-cmd --permanent --zone=public --add-port=4646-4647/tcp\r\nfirewall-cmd --permanent --zone=public --add-port=4648/tcp\r\nfirewall-cmd --permanent --zone=public --add-port=4648/udp\r\nfirewall-cmd --reload\r\nfirewall-cmd --zone=public --list-all\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"ufw"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ufw allow 4646:4648/tcp\r\nufw allow 4648/udp\r\nufw reload\n"})}),"\n",(0,a.jsx)(n.h2,{id:"nomad-agent",children:"Nomad Agent"}),"\n",(0,a.jsx)(n.p,{children:"Nomad relies on a long running agent on every machine in the cluster. The agent can run either in server or client mode. The cluster servers are responsible for managing the cluster. All other agents in the cluster should be in client mode. A Nomad client is a very lightweight process that registers the host machine, performs heartbeating, and runs the tasks that are assigned to it by the servers. The agent must be run on every node that is part of the cluster so that the servers can assign work to those machines."}),"\n",(0,a.jsx)(n.p,{children:"In this guide, you will start the Nomad agent in development mode. This mode is used to quickly start an agent that is acting as a client and server to test job configurations or prototype interactions. Start a single Nomad agent in development mode with the nomad agent command. Note, this command should not be used in production as it does not persist state."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad agent -dev\n"})}),"\n",(0,a.jsx)(n.p,{children:"Wait to continue to the next section until you see the agent has acquired leadership:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'2020-08-28T09:23:18.317Z [WARN]  nomad.raft: heartbeat timeout reached, starting election: last-leader=\r\n2020-08-28T09:23:18.317Z [INFO]  nomad.raft: entering candidate state: node="Node at 127.0.0.1:4647 [Candidate]" term=2\r\n2020-08-28T09:23:18.317Z [DEBUG] nomad.raft: votes: needed=1\r\n2020-08-28T09:23:18.317Z [DEBUG] nomad.raft: vote granted: from=127.0.0.1:4647 term=2 tally=1\r\n2020-08-28T09:23:18.317Z [INFO]  nomad.raft: election won: tally=1\r\n2020-08-28T09:23:18.317Z [INFO]  nomad.raft: entering leader state: leader="Node at 127.0.0.1:4647 [Leader]"\r\n2020-08-28T09:23:18.317Z [INFO]  nomad: cluster leadership acquired\n'})}),"\n",(0,a.jsx)(n.p,{children:"In another terminal, use nomad node status to view the registered nodes of the Nomad cluster."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad node status\r\n\r\n  ID        DC   Name         Class   Drain  Eligibility  Status\r\n  425b29b5  dc1  salt-master  <none>  false  eligible     ready\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output shows your Node ID, its datacenter, node name, node class, drain mode and current status. The Node ID is a randomly generated UUID. Notice that your node is in the ready state and task draining is currently off."}),"\n",(0,a.jsx)(n.p,{children:"The agent is also in server mode, which means it is part of the gossip protocol used to connect all the server instances together:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad server members\r\n\r\n  Name                Address    Port  Status  Leader  Protocol  Build   Datacenter  Region\r\n  salt-master.global  127.0.0.1  4648  alive   true    2         0.12.3  dc1         global\n"})}),"\n",(0,a.jsx)(n.p,{children:"The output shows your agent, the address it is running on, its health state, some version information, and the datacenter and region. Additional metadata can be viewed by providing the -detailed flag:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad server members -detailed\r\n\r\n  Name                Address    Port  Tags\r\n  salt-master.global  127.0.0.1  4648  build=0.12.3,bootstrap=1,role=nomad,vsn=1,rpc_addr=127.0.0.1,mvn=1,raft_vsn=2,region=global,expect=1,id=99ee6e58-43bc-6f5c-e1f7-8e6a3194f433,dc=dc1,port=4647\n"})}),"\n",(0,a.jsx)(n.h2,{id:"jobs",children:"Jobs"}),"\n",(0,a.jsxs)(n.p,{children:["Jobs are the primary configuration that users interact with when using Nomad. A job is a declarative specification of tasks that Nomad should run. The job created by running nomad ",(0,a.jsx)(n.code,{children:"job init"})," uses the Docker task driver. To run it, you will need a Nomad client available with Docker installed."]}),"\n",(0,a.jsx)(n.p,{children:"To get started, use the job init command which generates a skeleton job file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"mkdir ~/nomad\r\ncd ~/nomad\r\nnomad job init\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Example job file written to ",(0,a.jsx)(n.code,{children:"example.nomad"})," inside your current working directory. This example job file declares a single task named ",(0,a.jsx)(n.code,{children:"redis"}),", which uses the Docker driver to run the a Redis container.:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'job "example" {\r\n\r\n...\r\n\r\n    task "redis" {\r\n      driver = "docker"\r\n      config {\r\n        image = "redis:3.2"\r\n\r\n        port_map {\r\n          db = 6379\r\n        }\r\n      }\r\n    }\r\n\r\n...\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The primary way you interact with Nomad is with the ",(0,a.jsx)(n.code,{children:"job run"})," command. The ",(0,a.jsx)(n.strong,{children:"run command"})," takes a job file and registers it with Nomad. This is used both to register new jobs and to update existing jobs:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'nomad job run example.nomad\r\n\r\n  ==> Monitoring evaluation "9271b1e8"\r\n      Evaluation triggered by job "example"\r\n      Allocation "9a93c7ff" created: node "425b29b5", group "cache"\r\n      Evaluation within deployment: "b5ddfc12"\r\n      Evaluation status changed: "pending" -> "complete"\r\n  ==> Evaluation "9271b1e8" finished with status "complete"\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"If you receive the following Error message you don't have Docker installed or the Docker daemon is not loaded:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'Task Group "cache" (failed to place 1 allocation):\r\n  * Constraint "missing drivers": 1 nodes excluded by filter\n'})}),"\n",(0,a.jsx)(n.p,{children:"To inspect the status of your job you use the status command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad status example\r\n\r\n  ID            = example\r\n  Name          = example\r\n  Submit Date   = 2020-08-28T11:38:59Z\r\n  Type          = service\r\n  Priority      = 50\r\n  Datacenters   = dc1\r\n  Namespace     = default\r\n  Status        = running\r\n  Periodic      = false\r\n  Parameterized = false\r\n\r\n  Summary\r\n  Task Group  Queued  Starting  Running  Failed  Complete  Lost\r\n  cache       0       0         1        0       0         0\r\n\r\n  Latest Deployment\r\n  ID          = b5ddfc12\r\n  Status      = running\r\n  Description = Deployment is running\r\n\r\n  Deployed\r\n  Task Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline\r\n  cache       1        1       0        1          2020-08-28T11:48:59Z\r\n\r\n  Allocations\r\n  ID        Node ID   Task Group  Version  Desired  Status   Created    Modified\r\n  9a93c7ff  425b29b5  cache       0        run      running  3m14s ago  14s ago\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The last entry ",(0,a.jsx)(n.strong,{children:"Allocation"})," represents the instance described by the task that is now placed on your node:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'nomad alloc status 9a93c7ff\r\n\r\n  ID                  = 9a93c7ff-1e61-1277-63aa-95ad42d089f7\r\n  Eval ID             = 9271b1e8\r\n  Name                = example.cache[0]\r\n  Node ID             = 425b29b5\r\n  Node Name           = salt-master\r\n  Job ID              = example\r\n  Job Version         = 0\r\n  Client Status       = running\r\n  Client Description  = Tasks are running\r\n  Desired Status      = run\r\n  Desired Description = <none>\r\n  Created             = 6m21s ago\r\n  Modified            = 3m21s ago\r\n  Deployment ID       = b5ddfc12\r\n  Deployment Health   = unhealthy\r\n\r\n  Task "redis" is "running"\r\n  Task Resources\r\n  CPU        Memory           Disk     Addresses\r\n  2/500 MHz  988 KiB/256 MiB  300 MiB  db: 127.0.0.1:27335\r\n\r\n  Task Events:\r\n  Started At     = 2020-08-28T11:40:01Z\r\n  Finished At    = N/A\r\n  Total Restarts = 0\r\n  Last Restart   = N/A\r\n\r\n  Recent Events:\r\n  Time                  Type             Description\r\n  2020-08-28T11:41:59Z  Alloc Unhealthy  Task not running for min_healthy_time of 10s by deadline\r\n  2020-08-28T11:40:01Z  Started          Task started by client\r\n  2020-08-28T11:38:59Z  Driver           Downloading image\r\n  2020-08-28T11:38:59Z  Task Setup       Building Task Directory\r\n  2020-08-28T11:38:59Z  Received         Task received by client\n'})}),"\n",(0,a.jsxs)(n.p,{children:["To see the logs of a task, use the ",(0,a.jsx)(n.code,{children:"alloc logs"})," command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad alloc logs 9a93c7ff redis\r\n\r\n  1:C 28 Aug 11:40:01.407 # Warning: no config file specified, using the default config. In order to specify a config file use redis-server /path/to/redis.conf\r\n                  _._                                                  \r\n            _.-``__ ''-._                                             \r\n        _.-``    `.  `_.  ''-._           Redis 3.2.12 (00000000/0) 64 bit\r\n    .-`` .-```.  ```\\/    _.,_ ''-._                                   \r\n  (    '      ,       .-`  | `,    )     Running in standalone mode\r\n  |`-._`-...-` __...-.``-._|'` _.-'|     Port: 6379\r\n  |    `-._   `._    /     _.-'    |     PID: 1\r\n    `-._    `-._  `-./  _.-'    _.-'                                   \r\n  |`-._`-._    `-.__.-'    _.-'_.-'|                                  \r\n  |    `-._`-._        _.-'_.-'    |           http://redis.io        \r\n    `-._    `-._`-.__.-'_.-'    _.-'                                   \r\n  |`-._`-._    `-.__.-'    _.-'_.-'|                                  \r\n  |    `-._`-._        _.-'_.-'    |                                  \r\n    `-._    `-._`-.__.-'_.-'    _.-'                                   \r\n        `-._    `-.__.-'    _.-'                                       \r\n            `-._        _.-'                                           \r\n                `-.__.-'                                               \n"})}),"\n",(0,a.jsx)(n.p,{children:"After modifying the job specification, use the job plan command to invoke a dry-run of the scheduler to see what would happen if you ran the updated job:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad job plan example.nomad\n"})}),"\n",(0,a.jsx)(n.p,{children:"The final step in a job lifecycle is stopping the job. This is done with the job stop command:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nomad job stop example\r\n\r\nnomad job status example\r\n\r\n  ID            = example\r\n  Name          = example\r\n  Submit Date   = 2020-08-28T11:38:59Z\r\n  Type          = service\r\n  Priority      = 50\r\n  Datacenters   = dc1\r\n  Namespace     = default\r\n  Status        = dead (stopped)\r\n  Periodic      = false\r\n  Parameterized = false\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>d});var a=r(667294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),d=function(e){var n=a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=d(r),p=t,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||s;return r?a.createElement(m,i(i({ref:n},h),{},{components:r})):a.createElement(m,i({ref:n},h))}));h.displayName="MDXCreateElement"},103099:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-57269f97e6ae2616c9623b1eb52b5373.jpg"}}]);