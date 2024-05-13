"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[55835],{285697:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=r(474848),a=r(28453);const t={sidebar_position:6070,slug:"2021-10-10",title:"Hashicorp Nomad in Production",authors:"mpolinowski",tags:["Nomad"]},i=void 0,o={id:"DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index",title:"Hashicorp Nomad in Production",description:"Koh Rong, Cambodia",source:"@site/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index.md",sourceDirName:"DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production",slug:"/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/2021-10-10",permalink:"/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/2021-10-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-10-10--hashicorp-nomad-in-production/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"}],version:"current",sidebarPosition:6070,frontMatter:{sidebar_position:6070,slug:"2021-10-10",title:"Hashicorp Nomad in Production",authors:"mpolinowski",tags:["Nomad"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Consul in Production",permalink:"/docs/DevOps/Hashicorp/2021-10-11--hashicorp-consul-in-production/2021-10-11"},next:{title:"Hashicorp Terraform - Providers, Variables & Attributes",permalink:"/docs/DevOps/Hashicorp/2021-09-06--hashicorp-terraform-providers-variables-attributes/2021-09-07"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Run as a Service",id:"run-as-a-service",level:2},{value:"Clusterize",id:"clusterize",level:2},{value:"Encryption",id:"encryption",level:2},{value:"Gossip Encryption",id:"gossip-encryption",level:3},{value:"Mutual TLS Encryption",id:"mutual-tls-encryption",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Koh Rong, Cambodia",src:r(900087).A+"",width:"1500",height:"432"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#installation",children:"Installation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#configuration",children:"Configuration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#run-as-a-service",children:"Run as a Service"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#clusterize",children:"Clusterize"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#encryption",children:"Encryption"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#gossip-encryption",children:"Gossip Encryption"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#mutual-tls-encryption",children:"Mutual TLS Encryption"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:["Download a pre-compiled binary (",(0,s.jsx)(n.a,{href:"https://www.nomadproject.io/downloads",children:"Check latest Binary Version here"}),") and run it on your machine locally. You can also verify the binary using the available SHA-256 sums:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://releases.hashicorp.com/nomad/1.1.6/nomad_1.1.6_linux_amd64.zip\r\nwget https://releases.hashicorp.com/nomad/1.1.6/nomad_1.1.6_SHA256SUMS\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"SHA256SUMS"})," shows me the corresponding check sum for this file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"93f287758a464930e35cd1866167f05a3a6a48af2b0e010dfc0fbc914ae2f830  nomad_1.1.6_linux_amd64.zip\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following command has to give you the same sum - if you downloaded the correct version of the file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sha256sum nomad_1.1.6_linux_amd64.zip\r\n93f287758a464930e35cd1866167f05a3a6a48af2b0e010dfc0fbc914ae2f830  nomad_1.1.6_linux_amd64.zip\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now that we know that the zip container has not been tempered with we can unzip it to a place that is in our system PATH:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo $PATH\r\n\r\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"unzip ./nomad_1.1.6_linux_amd64.zip\r\nrm ./nomad_1.1.6_linux_amd64.zip\r\nmv nomad /usr/bin/nomad\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify that it is working:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad -v\r\nNomad v1.1.6 (b83d623fb5ff475d5e40df21e9e7a61834071078)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Prepare configuration and data directories:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/nomad.d\r\nmkdir -p /opt/nomad/data\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add a default configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano /etc/nomad.d/nomad.hcl\n"})}),"\n",(0,s.jsxs)(n.p,{children:["I added an ",(0,s.jsx)(n.code,{children:"advertise"})," block specifies the advertise address for individual network services. Both the RPC and the serf interface will be accessible for the other Nomad clients - so they are bound to the WAN IP of your server. But the HTTP interface (web user interface) I only want to be able to use via SSH on localhost:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": Binding ",(0,s.jsx)(n.code,{children:"http"})," to localhost makes the Nomad Web UI unavailable but also closes the HTTP REST API for clients. You will no longer be able to send GET or POST request to your server."]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"http"})," - The address to advertise for the HTTP interface. This should be reachable by all the nodes from which end users are going to use the Nomad CLI tools."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"rpc"})," - The address advertised to Nomad client nodes. This allows advertising a different RPC address than is used by Nomad Servers such that the clients can connect to the Nomad servers if they are behind a NAT."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"serf"})," - The address advertised for the gossip layer. This address must be reachable from all server nodes. It is not required that clients can reach this address. Nomad servers will communicate to each other over RPC using the advertised Serf IP and advertised RPC Port."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'## https://www.nomadproject.io/docs/agent/configuration\r\nname = "my_server_name"\r\ndatacenter = "my_data_center"\r\ndata_dir = "/opt/nomad/data"\r\nbind_addr = "0.0.0.0"\r\n\r\nadvertise {\r\n  # Defaults to the first private IP address.\r\n  http = "127.0.0.1"\r\n  rpc  = "1.2.3.4"\r\n  serf = "1.2.3.4"\r\n}\r\n\r\nports {\r\n  # Change the default ports below\r\n  http = 4646\r\n  rpc  = 4647\r\n  serf = 4648\r\n}\r\n\r\nserver {\r\n  enabled = true\r\n  bootstrap_expect = 1\r\n}\r\n\r\nclient {\r\n  enabled = true\r\n  servers = ["127.0.0.1:4647"]\r\n}\r\n\r\n## Connect to Consul service if available\r\n## consul {\r\n##   address = "1.2.3.4:8500"\r\n## }\r\n\r\n## https://www.nomadproject.io/docs/agent/configuration/index.html#log_level\r\n## [WARN|INFO|DEBUG]\r\nlog_level = "INFO"\r\nlog_rotate_duration = "30d"\r\nlog_rotate_max_files = 12\n'})}),"\n",(0,s.jsx)(n.p,{children:"We can test-run this Master/Minion configuration with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad agent -config /etc/nomad.d -bind 1.2.3.4\r\n\r\n==> WARNING: Bootstrap mode enabled! Potentially unsafe operation.\r\n==> Loaded configuration from /etc/nomad.d/nomad.hcl\r\n==> Starting Nomad agent...\r\n==> Nomad agent configuration:\r\n\r\n       Advertise Addrs: HTTP: 127.0.0.1:4646; RPC: 1.2.3.4:9020; Serf: 1.2.3.4:9408\r\n            Bind Addrs: HTTP: 0.0.0.0:4646; RPC: 0.0.0.0:9020; Serf: 0.0.0.0:9408\r\n                Client: true\r\n             Log Level: INFO\r\n                Region: global (DC: mydatacenter)\r\n                Server: true\r\n               Version: 1.1.6\r\n\r\n==> Nomad agent started! Log data will stream in below:\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'nomad.raft: failed to make requestVote RPC: target="{Voter IP-ADDRESS:4647 IP-ADDRESS:4647}" error="dial tcp IP-ADDRESS:4647: connect: connection refused"'})," I started the server with default ports, changed the ports and restarted. But now I started seeing the error message above - ",(0,s.jsx)(n.strong,{children:"connection refused on default port"}),". Clear the data dir ",(0,s.jsx)(n.code,{children:"rm -rf /opt/nomad/data/*"})," to get rid of it."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To test the Nomad UI just tunnel the user interface through SSH onto your local server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ssh myuser@my-server-ip -p ssh-port -L4646:localhost:4646\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check the UI on port ",(0,s.jsx)(n.code,{children:"4646"})," - ",(0,s.jsx)(n.code,{children:"http://localhost:4646/ui/jobs"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"run-as-a-service",children:"Run as a Service"}),"\n",(0,s.jsx)(n.p,{children:"Kill the manually started instance of Nomad and add a SystemD service for Nomad:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano /lib/systemd/system/nomad.service\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"[Unit]\r\nDescription=Nomad\r\nDocumentation=https://nomadproject.io/docs/\r\nWants=network-online.target\r\nAfter=network-online.target\r\n\r\n# When using Nomad with Consul it is not necessary to start Consul first. These\r\n# lines start Consul before Nomad as an optimization to avoid Nomad logging\r\n# that Consul is unavailable at startup.\r\n#Wants=consul.service\r\n#After=consul.service\r\n\r\n[Service]\r\nExecReload=/bin/kill -HUP $MAINPID\r\nExecStart=/usr/bin/nomad agent -config /etc/nomad.d\r\nKillMode=process\r\nKillSignal=SIGINT\r\nLimitNOFILE=65536\r\nLimitNPROC=infinity\r\nRestart=on-failure\r\nRestartSec=2\r\n\r\n## Configure unit start rate limiting. Units which are started more than\r\n## *burst* times within an *interval* time span are not permitted to start any\r\n## more. Use `StartLimitIntervalSec` or `StartLimitInterval` (depending on\r\n## systemd version) to configure the checking interval and `StartLimitBurst`\r\n## to configure how many starts per interval are allowed. The values in the\r\n## commented lines are defaults.\r\n\r\n# StartLimitBurst = 5\r\n\r\n## StartLimitIntervalSec is used for systemd versions >= 230\r\n# StartLimitIntervalSec = 10s\r\n\r\n## StartLimitInterval is used for systemd versions < 230\r\n# StartLimitInterval = 10s\r\n\r\nTasksMax=infinity\r\nOOMScoreAdjust=-1000\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"})}),"\n",(0,s.jsx)(n.p,{children:"And enable the service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl enable --now nomad\r\nsystemctl status nomad\n"})}),"\n",(0,s.jsx)(n.p,{children:"Access the UI again to verify that everything is working."}),"\n",(0,s.jsx)(n.h2,{id:"clusterize",children:"Clusterize"}),"\n",(0,s.jsxs)(n.p,{children:["To add clients to our server we now need to open the ",(0,s.jsx)(n.code,{children:"serf"})," and ",(0,s.jsx)(n.code,{children:"rpc"})," ports of our server:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ufw"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ufw allow 4647/tcp\r\nufw allow 4648\r\nufw reload\r\nufw status verbose\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"FirewallD"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo firewall-cmd --permanent --zone=public --add-port=4647/tcp  --add-port=4648/tcp  --add-port=4648/udp\r\nsudo firewall-cmd --reload\r\nsudo firewall-cmd --zone=public --list-ports\n"})}),"\n",(0,s.jsx)(n.p,{children:"Continue by installing Nomad in client configuration on your minion server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano /etc/nomad.d/nomad.hcl\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'## https://www.nomadproject.io/docs/agent/configuration\r\nname = "my_client_name"\r\ndatacenter = "my_data_center"\r\ndata_dir = "/opt/nomad/data"\r\nbind_addr = "0.0.0.0"\r\n\r\nadvertise {\r\n  # Defaults to the first private IP address.\r\n  http = "127.0.0.1"\r\n  rpc  = "2.3.4.5"\r\n  serf = "2.3.4.5"\r\n}\r\n\r\nports {\r\n  # Change the default ports below\r\n  http = 4646\r\n  rpc  = 4647\r\n  serf = 4648\r\n}\r\n\r\nserver {\r\n  enabled = false\r\n}\r\n\r\nclient {\r\n  enabled = true\r\n  servers = ["1.2.3.4:4647"]\r\n}\r\n\r\n## Connect to Consul service if available\r\n## consul {\r\n##   address = "2.3.4.5:8500"\r\n## }\r\n\r\n## https://www.nomadproject.io/docs/agent/configuration/index.html#log_level\r\n## [WARN|INFO|DEBUG]\r\nlog_level = "INFO"\r\nlog_rotate_duration = "30d"\r\nlog_rotate_max_files = 12\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And prepare the service file for the Nomad client. But before starting the service we need to forward the ",(0,s.jsx)(n.code,{children:"rpc"})," and ",(0,s.jsx)(n.code,{children:"serf"})," ports on our client."]}),"\n",(0,s.jsx)(n.p,{children:"Now start the service on your client and reload the Nomad service on your master. When successful you should see that the new client is connected by using the following command on your master:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad node status\r\n\r\nID        DC              Name            Class   Drain  Eligibility  Status\r\nehddf7ec  my_data_center  my_client_name  <none>  false  eligible     ready\r\n5a675yye  my_data_center  my_server_name  <none>  false  eligible     ready\n"})}),"\n",(0,s.jsx)(n.h2,{id:"encryption",children:"Encryption"}),"\n",(0,s.jsx)(n.h3,{id:"gossip-encryption",children:"Gossip Encryption"}),"\n",(0,s.jsxs)(n.p,{children:["To encrypt the ",(0,s.jsx)(n.strong,{children:"SERF"})," gossip communication create an encryption key to encrypt the communication between Nomad agents:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad operator keygen\r\n4kRkFQfcc3LU0BazP1ca+z==\n"})}),"\n",(0,s.jsx)(n.p,{children:"And add the key to the server block of your master server:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano /etc/nomad.d/nomad.hcl\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'server {\r\n  enabled = true\r\n  encrypt = "4kRkFQfcc3LU0BazP1ca+z=="\r\n\r\n...\n'})}),"\n",(0,s.jsx)(n.h3,{id:"mutual-tls-encryption",children:"Mutual TLS Encryption"}),"\n",(0,s.jsxs)(n.p,{children:["Nomad optionally uses mutual TLS (mTLS) for all ",(0,s.jsx)(n.strong,{children:"HTTP"})," and ",(0,s.jsx)(n.strong,{children:"RPC"})," communication. You can generate a private CA certificate and key with ",(0,s.jsx)(n.strong,{children:"Cloudflare cfssl"}),". Download the latest release with wget:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/cloudflare/cfssl/releases/download/v1.6.0/cfssl_1.6.0_linux_amd64 -O cfssl\r\nwget https://github.com/cloudflare/cfssl/releases/download/v1.6.0/cfssljson_1.6.0_linux_amd64 -O cfssljson\r\n\r\nchmod +x cfssljson cfssl\r\nmv cfssl* /usr/local/bin\r\n\r\ncfssl version\r\ncfssljson -version\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate the CA's private key and certificate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /opt/nomad/nomad_certs && cd /opt/nomad/nomad_certs\r\ncfssl print-defaults csr | cfssl gencert -initca - | cfssljson -bare nomad-ca\n"})}),"\n",(0,s.jsx)(n.p,{children:"To create certificates for the client and server in the cluster use the following configuration file as cfssl.json to increase the default certificate expiration time:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nano cfssl.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a certificate for the Nomad server"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo '{}' | cfssl gencert -ca=nomad-ca.pem -ca-key=nomad-ca-key.pem -config=cfssl.json \\\r\n    -hostname=\"server.global.nomad,localhost,127.0.0.1\" - | cfssljson -bare server\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a certificate for the Nomad client"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo '{}' | cfssl gencert -ca=nomad-ca.pem -ca-key=nomad-ca-key.pem -config=cfssl.json \\\r\n    -hostname=\"client.global.nomad,localhost,127.0.0.1\" - | cfssljson -bare client\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generate a certificate for the CLI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"echo '{}' | cfssl gencert -ca=nomad-ca.pem -ca-key=nomad-ca-key.pem -profile=client \\\r\n    - | cfssljson -bare cli\n"})}),"\n",(0,s.jsx)(n.p,{children:"You should now have the following files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cfssl.json"})," - cfssl configuration."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"nomad-ca.csr"})," - CA signing request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"nomad-ca-key.pem"})," - CA private key. Keep safe."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"nomad-ca.pem"})," - CA public certificate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cli.csr"})," - Nomad CLI certificate signing request."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cli-key.pem"})," - Nomad CLI private key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cli.pem"})," - Nomad CLI certificate."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"client.csr"})," - Nomad client node certificate signing request for the global region."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"client-key"}),".pem - Nomad client node private key for the global region."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"client.pem"})," - Nomad client node public certificate for the global region."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"server.csr"})," - Nomad server node certificate signing request for the global region."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"server-key"}),".pem - Nomad server node private key for the global region."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"server.pem"})," - Nomad server node public certificate for the global region."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each Nomad node should have:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Master Server Configuration"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/nomad.d/certs\r\ncp server-key.pem /etc/nomad.d/certs\r\ncp server.pem /etc/nomad.d/certs\r\ncp nomad-ca.pem /etc/nomad.d/certs\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Minion Server Configuration"})}),"\n",(0,s.jsxs)(n.p,{children:["The client needs the ",(0,s.jsx)(n.code,{children:"client-key.pem"}),", ",(0,s.jsx)(n.code,{children:"client.pem"})," and ",(0,s.jsx)(n.code,{children:"nomad-ca.pem"}),". Create the same directory and choose you favourite way to copy in the client certs from your master server:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/nomad.d/certs\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now add them to your Nomad configuration (",(0,s.jsx)(n.strong,{children:"I will deactivate the HTTP encryption"})," since I bound the HTTP interface to localhost):"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Master Server Configuration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'tls {\r\n  http = false\r\n  rpc  = true\r\n\r\n  ca_file   = "/etc/nomad.d/certs/nomad-ca.pem"\r\n  cert_file = "/etc/nomad.d/certs/server.pem"\r\n  key_file  = "/etc/nomad.d/certs/server-key.pem"\r\n\r\n  verify_server_hostname = true\r\n  verify_https_client    = true\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Minion Server Configuration"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'tls {\r\n  http = false\r\n  rpc  = true\r\n\r\n  ca_file   = "/etc/nomad.d/certs/nomad-ca.pem"\r\n  cert_file = "/etc/nomad.d/certs/client.pem"\r\n  key_file  = "/etc/nomad.d/certs/client-key.pem"\r\n\r\n  verify_server_hostname = true\r\n  verify_https_client    = true\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Verify that your servers can still see each other:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nomad node status\r\n\r\nID        DC              Name            Class   Drain  Eligibility  Status\r\nehddf7ec  my_data_center  my_client_name  <none>  false  eligible     ready\r\n5a675yye  my_data_center  my_server_name  <none>  false  eligible     ready\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),": When you activated TLS for HTTP you will noe ",(0,s.jsx)(n.a,{href:"/docs/DevOps/Hashicorp/2021-08-02--hashicorp-nomad-security/2021-08-02#system-environment",children:"need to provide the certificates for the CLI command above"}),"!"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},900087:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ea22587f1b942051274c9ca9f4668bb8.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(296540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);