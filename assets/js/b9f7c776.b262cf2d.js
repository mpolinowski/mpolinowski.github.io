"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[29136],{83962:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=s(474848),t=s(28453);const o={sidebar_position:5080,slug:"2022-05-21",title:"Hashicorp Dojo Consul Refresher",authors:"mpolinowski",tags:["Consul","LINUX"]},l=void 0,c={id:"DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/index",title:"Hashicorp Dojo Consul Refresher",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher",slug:"/DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/2022-05-21",permalink:"/docs/DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/2022-05-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-21-hashicorp-dojo-consul-refresher/index.md",tags:[{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5080,frontMatter:{sidebar_position:5080,slug:"2022-05-21",title:"Hashicorp Dojo Consul Refresher",authors:"mpolinowski",tags:["Consul","LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad with Consul II - The Reckoning",permalink:"/docs/DevOps/Hashicorp/2022-05-22-hashicorp-dojo-nomad-consul-part-2/2022-05-22"},next:{title:"Hashicorp Nomad with Consul Service Discovery",permalink:"/docs/DevOps/Hashicorp/2022-05-20-hashicorp-dojo-nomad-consul/2022-05-20"}},i={},a=[{value:"Install Consul",id:"install-consul",level:2},{value:"Security",id:"security",level:2},{value:"Generate the gossip encryption key",id:"generate-the-gossip-encryption-key",level:3},{value:"Generate TLS certificates for RPC encryption",id:"generate-tls-certificates-for-rpc-encryption",level:3},{value:"Configure Consul agents",id:"configure-consul-agents",level:2},{value:"General defaults",id:"general-defaults",level:3},{value:"TLS encryption",id:"tls-encryption",level:3},{value:"Datacenter auto-join",id:"datacenter-auto-join",level:3},{value:"Enable Consul ACLs",id:"enable-consul-acls",level:3},{value:"Performance stanza",id:"performance-stanza",level:3},{value:"Master Configuration",id:"master-configuration",level:2},{value:"Consul Service Mesh",id:"consul-service-mesh",level:3},{value:"Start the Consul Service",id:"start-the-consul-service",level:2},{value:"Accessing the UI",id:"accessing-the-ui",level:2},{value:"Bootstrap the ACL System",id:"bootstrap-the-acl-system",level:2},{value:"Consul Environment Variables",id:"consul-environment-variables",level:2},{value:"Create a Node Policy",id:"create-a-node-policy",level:2},{value:"Configuring Nomad for Consul (Only Master Node)",id:"configuring-nomad-for-consul-only-master-node",level:2},{value:"Accessing the UI (TLS)",id:"accessing-the-ui-tls",level:2},{value:"Complete Configuration",id:"complete-configuration",level:2},{value:"Master Node",id:"master-node",level:3},{value:"Minion Node",id:"minion-node",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shen Zhen, China",src:s(973704).A+"",width:"1500",height:"661"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#install-consul",children:"Install Consul"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#security",children:"Security"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#generate-the-gossip-encryption-key",children:"Generate the gossip encryption key"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#generate-tls-certificates-for-rpc-encryption",children:"Generate TLS certificates for RPC encryption"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#configure-consul-agents",children:"Configure Consul agents"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#general-defaults",children:"General defaults"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#tls-encryption",children:"TLS encryption"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#datacenter-auto-join",children:"Datacenter auto-join"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#enable-consul-acls",children:"Enable Consul ACLs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#performance-stanza",children:"Performance stanza"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#master-configuration",children:"Master Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#consul-service-mesh",children:"Consul Service Mesh"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#start-the-consul-service",children:"Start the Consul Service"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#accessing-the-ui",children:"Accessing the UI"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#bootstrap-the-acl-system",children:"Bootstrap the ACL System"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#consul-environment-variables",children:"Consul Environment Variables"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#create-a-node-policy",children:"Create a Node Policy"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#configuring-nomad-for-consul-only-master-node",children:"Configuring Nomad for Consul (Only Master Node)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#accessing-the-ui-tls",children:"Accessing the UI (TLS)"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#complete-configuration",children:"Complete Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#master-node",children:"Master Node"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#minion-node",children:"Minion Node"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"install-consul",children:"Install Consul"}),"\n",(0,r.jsx)(n.p,{children:"The first thing you need to do in order to use Consul is install it:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -\nsudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"\napt update && apt install consul && consul -v\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["ERROR ",(0,r.jsx)(n.code,{children:"command not found: apt-add-repository"})," -> ",(0,r.jsx)(n.code,{children:"apt install software-properties-common"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This will add both a default configuration file ",(0,r.jsx)(n.code,{children:"/etc/consul.d/consul.hcl"})," and a SystemD service file ",(0,r.jsx)(n.code,{children:"/usr/lib/systemd/system/consul.service"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"security",children:"Security"}),"\n",(0,r.jsx)(n.p,{children:"All commands in this section can be completed on any system with the Consul binary installed. The outputs and artifacts from these commands should be archived in a secure location for future reference."}),"\n",(0,r.jsx)(n.h3,{id:"generate-the-gossip-encryption-key",children:"Generate the gossip encryption key"}),"\n",(0,r.jsx)(n.p,{children:"Gossip is encrypted with a symmetric key, since gossip between nodes is done over UDP. All agents must have the same encryption key:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"consul keygen\nqDOPBEr+/oUVeOFQOnVypxwDaHzLrD+lvjo5vCEBbZ0=\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"NOTE"}),": You will need to add the newly generated key to the encrypt option in the server configuration on all Consul agents. Save your key in a safe location. You will need to reference the key throughout the installation."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"generate-tls-certificates-for-rpc-encryption",children:"Generate TLS certificates for RPC encryption"}),"\n",(0,r.jsx)(n.p,{children:"Consul can use TLS to verify the authenticity of masters and minions. To enable TLS, Consul requires that all agents have certificates signed by a single Certificate Authority (CA)."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/consul.d/tls && cd /etc/consul.d/tls\nconsul tls ca create\n"})}),"\n",(0,r.jsx)(n.p,{children:"Next create a set of certificates, one for each Consul agent. You will need to select a name for your primary datacenter now, so that the certificates are named properly, as well as a domain for your Consul datacenter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"consul tls cert create -server -dc consul -domain consul\n"})}),"\n",(0,r.jsxs)(n.p,{children:["A federated Consul environment requires the server certificate to include the names of all Consul datacenters that are within the federated environment. The ",(0,r.jsx)(n.code,{children:"-additional-dnsname"})," flag allows you to provide an additional DNS names:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'consul tls cert create -server -dc consul -domain consul -additional-dnsname="*.consul"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chown consul:consul ./*\nchmod 640 ./*\n"})}),"\n",(0,r.jsx)(n.p,{children:"The directory will now contain the following files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ls -la /etc/consul.d/tls\n-rw-r----- 1 consul consul consul-agent-ca-key.pem\n-rw-r----- 1 consul consul consul-agent-ca.pem\n-rw-r----- 1 consul consul consul-server-consul-0-key.pem\n-rw-r----- 1 consul consul consul-server-consul-0.pem\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Consul minions agents"})," will only need the the CA certificate, ",(0,r.jsx)(n.code,{children:"consul-agent-ca.pem"}),", to enable mTLS. Copy this file to ",(0,r.jsx)(n.code,{children:"/etc/consul.d/tls"})," on all minions."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The recommended approach is leverage the auto encryption mechanism provided by Consul that automatically generates client certificates using the Consul connect service mesh CA without the need for an operator to manually generate certificates for each client."}),"\n",(0,r.jsx)(n.h2,{id:"configure-consul-agents",children:"Configure Consul agents"}),"\n",(0,r.jsxs)(n.p,{children:["Consul server agents typically require a superset of ",(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/agent/options.html",children:"configuration"})," required by Consul client agents. You will specify common configuration used by all Consul agents in ",(0,r.jsx)(n.code,{children:"/etc/consul.d/consul.hcl"})," and server specific configuration in ",(0,r.jsx)(n.code,{children:"/etc/consul.d/server.hcl"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The APT installation already provided the default ",(0,r.jsx)(n.code,{children:"consul.hcl"})," let's add the ",(0,r.jsx)(n.code,{children:"server.hcl"})," and apply the correct permissions to all files:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd /etc/consul.d\ntouch server.hcl\nchown consul:consul ./*\nchmod 640 ./*\n"})}),"\n",(0,r.jsx)(n.h3,{id:"general-defaults",children:"General defaults"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"consul.hcl"})," contains only the path to the ",(0,r.jsx)(n.code,{children:"data_dir"})," that was automatically created in ",(0,r.jsx)(n.code,{children:"/opt/consul"})," during the installation. We can now add the name of our datacenter ",(0,r.jsx)(n.code,{children:"consul"})," and the gossip encryption key:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'datacenter = "consul"\ndata_dir = "/opt/consul"\nencrypt = "qDOPBEr+/oUVeOFQOnVypxwDaHzLrD+lvjo5vCEBbZ0="\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tls-encryption",children:"TLS encryption"}),"\n",(0,r.jsxs)(n.p,{children:["For the TLS configuration we need to add - for the ",(0,r.jsx)(n.strong,{children:"Master Node"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'tls {\n  defaults {\n    ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n    cert_file = "/etc/consul.d/tls/consul-server-consul-0.pem"\n    key_file = "/etc/consul.d/tls/consul-server-consul-0-key.pem"\n    verify_incoming = true\n    verify_outgoing = true\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["And for the ",(0,r.jsx)(n.strong,{children:"Minions"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'# TLS configuration\n\ntls {\n  defaults {\n    ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n}\n\nauto_encrypt {\n    tls = true\n }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"datacenter-auto-join",children:"Datacenter auto-join"}),"\n",(0,r.jsx)(n.p,{children:"The retry_join parameter allows you to configure all Consul agents to automatically form a datacenter using a common Consul server accessed via DNS address or IP address. This removes the need to manually join the Consul datacenter nodes together."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WARNING"}),": The ",(0,r.jsx)(n.code,{children:"join"})," or ",(0,r.jsx)(n.code,{children:"retry_join"})," is a required parameter for the systemd process to complete successfully and send its notify signal on LAN join."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Replace the ",(0,r.jsx)(n.code,{children:"retry_join"})," parameter value with the correct Master DNS address, IP address, Loopback address for your environment:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'retry_join = ["<One of Consul master public IPs>"]\n'})}),"\n",(0,r.jsx)(n.h3,{id:"enable-consul-acls",children:"Enable Consul ACLs"}),"\n",(0,r.jsxs)(n.p,{children:["Consul uses ",(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/consul/access-control-setup-production",children:"Access Control Lists (ACLs)"})," to secure the UI, API, CLI, and Consul catalog including service and agent registration. When securing your datacenter you should configure the ACLs first."]}),"\n",(0,r.jsxs)(n.p,{children:["Add the ACL configuration to the consul.hcl configuration file and choose a default policy of ",(0,r.jsx)(n.code,{children:"allow"})," (allow all traffic unless explicitly denied) or ",(0,r.jsx)(n.code,{children:"deny"})," (deny all traffic unless explicitly allowed)."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'acl {\n  enabled = true\n  default_policy = "allow"\n  enable_token_persistence = true\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"performance-stanza",children:"Performance stanza"}),"\n",(0,r.jsx)(n.p,{children:"The performance stanza allows tuning the performance of different subsystems in Consul:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"performance {\n  raft_multiplier = 1\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For more information on Raft tuning and the ",(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/install/performance.html",children:"raft_multiplier"})," setting, check the server performance documentation."]}),"\n",(0,r.jsx)(n.h2,{id:"master-configuration",children:"Master Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["The master specific configuration will be placed in ",(0,r.jsx)(n.code,{children:"/etc/consul.d/server.hcl"}),". On my master node I will enable the web user interface and select the agent as server:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ui_config{\n  enabled = true\n}\n\nauto_encrypt {\n  allow_tls = true\n}\n\nserver = true\nbootstrap_expect=1\n"})}),"\n",(0,r.jsx)(n.p,{children:"Consul agent should bind to all addresses on the local machine and will advertise the private IPv4 address to the rest of the datacenter."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'bind_addr = "<One of Consul master public IPs>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["When the value for ",(0,r.jsx)(n.code,{children:"client_addr"})," is undefined, it defaults to ",(0,r.jsx)(n.code,{children:"127.0.0.1"}),", allowing only loopback connections. Optionally, you can specify a bind IP address in your Consul ",(0,r.jsx)(n.code,{children:"server.hcl"})," configuration file. I will leave it at loopback for now, as I don't want to expose the Consul HTTP user interface:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'client_addr = "127.0.0.1"\n'})}),"\n",(0,r.jsx)(n.h3,{id:"consul-service-mesh",children:"Consul Service Mesh"}),"\n",(0,r.jsx)(n.p,{children:"Consul service mesh provides service-to-service connection authorization and encryption using mutual Transport Layer Security (TLS). Applications can use sidecar proxies in a service mesh configuration to establish TLS connections for inbound and outbound connections without being aware of Consul service mesh."}),"\n",(0,r.jsx)(n.p,{children:"Consul service mesh uses the registered service identity (rather than IP addresses) to enforce access control with intentions."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'connect {\n  enabled = true\n}\n\naddresses {\n  grpc = "<One of Consul master public IPs>"\n}\n\nports {\n  grpc  = 8502\n  dns = 8600\n  http = 8500\n  https = 8501\n  serf_lan = 8301\n  serf_wan = 8302\n  server = 8300\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/agent/options#connect_enabled",children:"connect.enabled"})," - Controls whether Connect features are enabled on this agent. Should be enabled on all servers in the cluster in order for Connect to function properly."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/agent/options#grpc",children:"addresses.grpc"})," - The address that Consul will bind gRPC API to. Defaults to client_addr but it might be sensitive to have it on localhost/127.0.0.1 for security reasons."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/agent/options#grpc_port",children:"ports.grpc"})," - The gRPC API port. We recommend using 8502 for grpc by convention as some tooling will work automatically with this. Currently gRPC is only used to expose Envoy xDS API to Envoy proxies."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"start-the-consul-service",children:"Start the Consul Service"}),"\n",(0,r.jsx)(n.p,{children:"First verify your configuration on all hosts:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"consul validate /etc/consul.d/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Installing Consul through the package manager also added a SystemD service file for us in ",(0,r.jsx)(n.code,{children:"/lib/systemd/system/consul.service"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-conf",children:'[Unit]\nDescription="HashiCorp Consul - A service mesh solution"\nDocumentation=https://www.consul.io/\nRequires=network-online.target\nAfter=network-online.target\nConditionFileNotEmpty=/etc/consul.d/consul.hcl\n\n[Service]\nEnvironmentFile=/etc/consul.d/consul.env\nUser=consul\nGroup=consul\nExecStart=/usr/bin/consul agent -config-dir=/etc/consul.d/\nExecReload=/bin/kill --signal HUP $MAINPID\nKillMode=process\nKillSignal=SIGTERM\nRestart=on-failure\nLimitNOFILE=65536\n\n[Install]\nWantedBy=multi-user.target\n'})}),"\n",(0,r.jsx)(n.p,{children:"Before using this file I will execute Consul manually - this way I will see potential error messages during the start up:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"/usr/bin/consul agent -config-dir=/etc/consul.d/\n\n==> Starting Consul agent...\n           Version: '1.12.2'\n           Node ID: 'nodeid'\n         Node name: 'Nomad'\n        Datacenter: 'consul' (Segment: '<all>')\n            Server: true (Bootstrap: true)\n       Client Addr: [masterip] (HTTP: 8500, HTTPS: -1, gRPC: 8502, DNS: 8600)\n      Cluster Addr: masterip (LAN: 8301, WAN: 8302)\n           Encrypt: Gossip: true, TLS-Outgoing: true, TLS-Incoming: true, Auto-Encrypt-TLS: true\n"})}),"\n",(0,r.jsx)(n.p,{children:"The process is starting without any error messages. But now that I see the log I realize that I did not open any ports yet. Consul requires up to 6 different ports to work properly, some on TCP, UDP, or both protocols:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Use"}),(0,r.jsx)(n.td,{children:"Default Ports"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DNS:"}),(0,r.jsxs)(n.td,{children:["The DNS server (TCP and UDP)\t",(0,r.jsx)(n.code,{children:"8600"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTP:"}),(0,r.jsxs)(n.td,{children:["The HTTP API (TCP Only)\t",(0,r.jsx)(n.code,{children:"8500"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HTTPS:"}),(0,r.jsxs)(n.td,{children:["The HTTPs API\tdisabled (",(0,r.jsx)(n.code,{children:"8501"}),")*"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gRPC:"}),(0,r.jsxs)(n.td,{children:["The gRPC API\tdisabled (",(0,r.jsx)(n.code,{children:"8502"}),")*"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"LAN Serf:"}),(0,r.jsxs)(n.td,{children:["The Serf LAN port (TCP and UDP)\t",(0,r.jsx)(n.code,{children:"8301"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Wan Serf:"}),(0,r.jsxs)(n.td,{children:["The Serf WAN port (TCP and UDP)\t",(0,r.jsx)(n.code,{children:"8302"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"server:"}),(0,r.jsxs)(n.td,{children:["Server RPC address (TCP Only)\t",(0,r.jsx)(n.code,{children:"8300"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sidecar Proxy Min:"}),(0,r.jsxs)(n.td,{children:["Inclusive min port number to use for automatically assigned sidecar service registrations.\t",(0,r.jsx)(n.code,{children:"21000"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Sidecar Proxy Max:"}),(0,r.jsxs)(n.td,{children:["Inclusive max port number to use for automatically assigned sidecar service registrations.\t",(0,r.jsx)(n.code,{children:"21255"})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["For HTTPS and gRPC the ports specified in the table are recommendations. All ports can be set inside ",(0,r.jsx)(n.a,{href:"https://www.consul.io/docs/agent/config/config-files#ports",children:"Agent Config"}),". But let's open the defaults for now:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ufw allow 8301,8302,8300,8502/tcp\nufw allow 8301,8302,8502/udp\nufw reload && ufw status\n"})}),"\n",(0,r.jsx)(n.p,{children:"And run the Consul service:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"systemctl enable consul\nservice consul start\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ERROR"})," Message:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'service consul status                                                                                   \n\u25cf consul.service - "HashiCorp Consul - A service mesh solution"\n     Loaded: loaded (/lib/systemd/system/consul.service; enabled; vendor preset: enabled)\n     Active: failed (Result: exit-code) since Fri 2022-06-17 06:29:54 CEST; 4s ago\n       Docs: https://www.consul.io/\n    Process: 325302 ExecStart=/usr/bin/consul agent -config-dir=/etc/consul.d/ (code=exited, status=1/FAILUR>\n   Main PID: 325302 (code=exited, status=1/FAILURE)\n        CPU: 93ms\n\nJun 17 06:29:54 Nomad systemd[1]: consul.service: Main process exited, code=exited, status=1/FAILURE\nJun 17 06:29:54 Nomad systemd[1]: consul.service: Failed with result \'exit-code\'.\nJun 17 06:29:54 Nomad systemd[1]: consul.service: Scheduled restart job, restart counter is at 5.\nJun 17 06:29:54 Nomad systemd[1]: Stopped "HashiCorp Consul - A service mesh solution".\nJun 17 06:29:54 Nomad systemd[1]: consul.service: Start request repeated too quickly.\nJun 17 06:29:54 Nomad systemd[1]: consul.service: Failed with result \'exit-code\'.\nJun 17 06:29:54 Nomad systemd[1]: Failed to start "HashiCorp Consul - A service mesh solution".\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"journalctl -xe -u consul\n\nThe job identifier is 73920.\nconsul[325302]: ==> Failed to load cert/key pair: open /etc/consul.d/tls/consul-server-consul-0.pem: permission denied\nsystemd[1]: consul.service: Main process exited, code=exited, status=1/FAILURE\nSubject: Unit process exited\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Ok that is strange - I tested to read the file using the consul user. Even when I run ",(0,r.jsx)(n.code,{children:"chmod 777"})," on it I am still unable to access it:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'su consul -s /bin/bash -c "cat /etc/consul.d/tls/consul-server-consul-0.pem"                            \ncat: /etc/consul.d/tls/consul-server-consul-0.pem: Permission denied\n'})}),"\n",(0,r.jsx)(n.p,{children:"This was an issue with the folder permission - I had to raise it to:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"chmod 744 /etc/consul.d/tls\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now it worked!"}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-ui",children:"Accessing the UI"}),"\n",(0,r.jsxs)(n.p,{children:["Just as I did with the Nomad web user interface I can now tunnel the Consul HTTP Port (default ",(0,r.jsx)(n.code,{children:"8500"}),") to the localhost of my local machine:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh -L 8181:localhost:8500 root@[Consul Master public IP] -p [SSH Port]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And access the interface on ",(0,r.jsx)(n.code,{children:"http://localhost:8181"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hashicorp Consul",src:s(531572).A+"",width:"1180",height:"388"})}),"\n",(0,r.jsx)(n.p,{children:"Nomad automatically added my Nomad service and my first active Minion server was also added successfully. But after a while I started getting failing health checks:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Failing serf check"}),": This node has a failing serf node check. The health statuses shown on this page are the statuses as they were known before the node became unreachable."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hashicorp Consul",src:s(750479).A+"",width:"1170",height:"616"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOLVED"}),": I was missing the ",(0,r.jsx)(n.code,{children:"auto_encrypt"})," key in my client configuration. Now everything seems to work - here is the entire configuration -> ",(0,r.jsx)(n.a,{href:"#complete-configuration",children:"see final configuration files"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"bootstrap-the-acl-system",children:"Bootstrap the ACL System"}),"\n",(0,r.jsx)(n.p,{children:"Working from one agent generate the Consul bootstrap token, which has unrestricted privileges:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"consul acl bootstrap\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will return the Consul bootstrap token. You will need the SecretID for all subsequent Consul API requests (including CLI and UI). Ensure that you save the SecretID."}),"\n",(0,r.jsx)(n.h2,{id:"consul-environment-variables",children:"Consul Environment Variables"}),"\n",(0,r.jsxs)(n.p,{children:["Just as with Nomad we now need to use the TLS certificates and ACL tokens when we want to use the Consul CLI. So let's add them to our environment, e.g. in ",(0,r.jsx)(n.code,{children:"~/.zshrc"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'export CONSUL_CACERT=/etc/consul.d/tls/consul-agent-ca.pem\nexport CONSUL_CLIENT_CERT=/etc/consul.d/tls/consul-server-consul-0.pem\nexport CONSUL_CLIENT_KEY=/etc/consul.d/tls/consul-server-consul-0-key.pem\nexport CONSUL_HTTP_TOKEN="<Token SecretID from previous step>"\nexport CONSUL_MGMT_TOKEN="<Token SecretID from previous step>"\n'})}),"\n",(0,r.jsx)(n.p,{children:"Try running a CLI Command on the master Node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"consul members                                                                                          \nNode           Address           Status  Type    Build   Protocol  DC    \nNomad          <Master IP:8301>  alive   server  1.12.2  2         consul\nkundensysteme  <Minion IP:8301>  alive   client  1.12.2  2         consul\n"})}),"\n",(0,r.jsx)(n.h2,{id:"create-a-node-policy",children:"Create a Node Policy"}),"\n",(0,r.jsxs)(n.p,{children:["Create a node policy file ",(0,r.jsx)(n.code,{children:"node-policy.hcl"})," with write access for nodes related actions and read access for service related actions:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'agent_prefix "" {\n  policy = "write"\n}\nnode_prefix "" {\n  policy = "write"\n}\nservice_prefix "" {\n  policy = "read"\n}\nsession_prefix "" {\n  policy = "read"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Generate the Consul node ACL policy with the newly created policy file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"consul acl policy create \\\n  -token=${CONSUL_MGMT_TOKEN} \\\n  -name node-policy \\\n  -rules @node-policy.hcl\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create the node token with the newly created policy:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'consul acl token create \\\n  -token=${CONSUL_MGMT_TOKEN} \\\n  -description "node token" \\\n  -policy-name node-policy\n'})}),"\n",(0,r.jsxs)(n.p,{children:["On ",(0,r.jsx)(n.strong,{children:"ALL"})," Consul Servers add the node token:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'consul acl set-agent-token \\\n  -token="<Management Token SecretID>" \\\n  agent "<Node Token SecretID>"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["To increase security for ",(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/consul/deployment-guide",children:"your datacenter"}),", we we will complete the ",(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/consul/access-control-setup-production",children:"Secure Consul with Access Control Lists (ACLs)"})," in the next step."]}),"\n",(0,r.jsx)(n.h2,{id:"configuring-nomad-for-consul-only-master-node",children:"Configuring Nomad for Consul (Only Master Node)"}),"\n",(0,r.jsx)(n.p,{children:"After the installation I checked the Consul log and found that there was an error message coming in every 30s:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'consul[351769]: 2022-06-18T13:42:31.136+0200 [ERROR] agent.http: Request error: method=PUT url=/v1/agent/service/register from=127.0.0.1:59386 error="Bad request: Invalid service address"\nconsul[351769]: 2022-06-18T13:43:01.142+0200 [ERROR] agent.http: Request error: method=PUT url=/v1/agent/service/register from=127.0.0.1:59386 error="Bad request: Invalid service address"\nconsul[351769]: 2022-06-18T13:43:31.160+0200 [ERROR] agent.http: Request error: method=PUT url=/v1/agent/service/register from=127.0.0.1:59386 error="Bad request: Invalid service address"\nconsul[351769]: 2022-06-18T13:44:01.166+0200 [ERROR] agent.http: Request error: method=PUT url=/v1/agent/service/register from=127.0.0.1:59386 error="Bad request: Invalid service address"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["I assumed that this must be the local Nomad service trying to connect and missing the ACL token. There is a ",(0,r.jsx)(n.a,{href:"https://www.nomadproject.io/docs/configuration/consul",children:"Consul block"})," in the Nomad configuration file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'consul {\n  address = "127.0.0.1:8500"\n  grpc_address = "127.0.0.1:8502"\n  ssl = true\n  ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n  cert_file = "/etc/consul.d/tls/consul-server-consul-0.pem"\n  key_file = "/etc/consul.d/tls/consul-server-consul-0-key.pem"\n  verify_ssl = true\n  token = ""\n  client_service_name = "nomad-client"\n  server_service_name = "nomad"\n  auto_advertise      = true\n  server_auto_join    = true\n  client_auto_join    = true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"To prevent getting permission errors when trying to read the cert files we need to expand the read rights on those consul certificates. Starting the service back up - seems is in order now. Nomad and Consul are running and the error messages disappeared."}),"\n",(0,r.jsx)(n.h2,{id:"accessing-the-ui-tls",children:"Accessing the UI (TLS)"}),"\n",(0,r.jsx)(n.p,{children:"I was running into the issue that now with TLS encryption enabled and cert verification enforced I was unable to access the Consul UI. Since I keep my HTTP/HTTPS ports closed I will change the Consul Server configuration (only on the master node that supplies my UI) to skip the verification step for HTTPS:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'# TLS configuration\ntls {\n  defaults {\n    ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n    cert_file = "/etc/consul.d/tls/consul-server-consul-0.pem"\n    key_file = "/etc/consul.d/tls/consul-server-consul-0-key.pem"\n    verify_incoming = true\n    verify_outgoing = true\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n  https {\n    verify_incoming = false\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Now I only need to forward the HTTPS port (default ",(0,r.jsx)(n.code,{children:"8501"}),") to my machine and am able to access the UI again on ",(0,r.jsx)(n.code,{children:"https://localhost:8181"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh -L 8181:localhost:8501 root@[Consul Master public IP] -p [SSH Port]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"complete-configuration",children:"Complete Configuration"}),"\n",(0,r.jsx)(n.h3,{id:"master-node",children:"Master Node"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"consul.hcl"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'# datacenter\ndatacenter = "consul"\n\n# data_dir\ndata_dir = "/opt/consul"\n\n# bootstrap_expect\nbootstrap_expect=1\n\n# encrypt\nencrypt = "[Gossip Encryption Key]"\n\n# retry_join\nretry_join = ["[My Master Address]"]\n \n# TLS configuration\ntls {\n  defaults {\n    ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n    cert_file = "/etc/consul.d/tls/consul-server-consul-0.pem"\n    key_file = "/etc/consul.d/tls/consul-server-consul-0-key.pem"\n    verify_incoming = true\n    verify_outgoing = true\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n  https {\n    verify_incoming = false\n  }\n}\n\n# ACL configuration\nacl {\n  enabled = true\n  default_policy = "allow"\n  enable_token_persistence = true\n}\n\n# Performance\nperformance {\n  raft_multiplier = 1\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"server.hcl"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'# client_addr\nclient_addr = "127.0.0.1"\n\n# ui\nui_config{\n  enabled = true\n}\n\nauto_encrypt {\n  allow_tls = true\n}\n\n# server\nserver = true\n\n# Bind addr\nbind_addr = "[My Master Address]"\n\n# Service mesh\n# connect {\n#   enabled = true\n# }\n\n# addresses {\n#   grpc = "[My Master Address]"\n# }\n\nports {\n  grpc  = 8502\n  dns = -1\n  http = -1\n  https = 8501\n  serf_lan = 8301\n  serf_wan = 8302\n  server = 8300\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"minion-node",children:"Minion Node"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"consul.hcl"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'# datacenter\ndatacenter = "consul"\n\n# data_dir\ndata_dir = "/opt/consul"\n\n# client_addr\nclient_addr = "127.0.0.1"\n\n\n# server\nserver = false\nbind_addr = "[My Minion Address]"\nports {\n  grpc  = 8502\n  dns = 8600\n  http = 8500\n  https = 8501\n  serf_lan = 8301\n  serf_wan = 8302\n  server = 8300\n}\n\n# encrypt\nencrypt = "[Gossip Encryption Key]"\n\n# retry_join\nretry_join = ["[My Master Address]"]\n\n \n# TLS configuration\ntls {\n  defaults {\n    ca_file = "/etc/consul.d/tls/consul-agent-ca.pem"\n    # cert_file = "/etc/consul.d/tls/consul-server-consul-0.pem"\n    # key_file = "/etc/consul.d/tls/consul-server-consul-0-key.pem"\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n}\nauto_encrypt {\n    tls = true\n }\n\n# ACL configuration\nacl {\n  enabled = true\n  default_policy = "allow"\n  enable_token_persistence = true\n}\n\n# Performance\nperformance {\n  raft_multiplier = 1\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},531572:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/Hashicorp_Consul_01-8d7a14d0c8459e7725f2bc8c10e86887.png"},750479:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/Hashicorp_Consul_02-21eab4118bed1dbbc3d18feff3a04a8b.png"},973704:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-aebdfbdab26722eba0393921cc85bc26.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(296540);const t={},o=r.createContext(t);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);