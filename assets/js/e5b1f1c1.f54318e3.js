"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40229],{582833:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>o});var i=s(474848),r=s(28453);const l={sidebar_position:7060,slug:"2021-08-14",title:"Hashicorp Consul Refresher - Gossip TLS Encryption",authors:"mpolinowski",tags:["Consul","Linux"]},t=void 0,c={id:"DevOps/Hashicorp/2021-08-14--hashicorp-consul-tls-encryption/index",title:"Hashicorp Consul Refresher - Gossip TLS Encryption",description:"Phnom Penh, Cambodia",source:"@site/docs/DevOps/Hashicorp/2021-08-14--hashicorp-consul-tls-encryption/index.md",sourceDirName:"DevOps/Hashicorp/2021-08-14--hashicorp-consul-tls-encryption",slug:"/DevOps/Hashicorp/2021-08-14--hashicorp-consul-tls-encryption/2021-08-14",permalink:"/docs/DevOps/Hashicorp/2021-08-14--hashicorp-consul-tls-encryption/2021-08-14",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-08-14--hashicorp-consul-tls-encryption/index.md",tags:[{label:"Consul",permalink:"/docs/tags/consul"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:7060,frontMatter:{sidebar_position:7060,slug:"2021-08-14",title:"Hashicorp Consul Refresher - Gossip TLS Encryption",authors:"mpolinowski",tags:["Consul","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Vault - Setup",permalink:"/docs/DevOps/Hashicorp/2021-08-20--hashicorp-vault-setup/2021-08-20"},next:{title:"Hashicorp Consul Refresher - Access Control Lists",permalink:"/docs/DevOps/Hashicorp/2021-08-13--hashicorp-consul-access-control-lists/2021-08-13"}},a={},o=[{value:"Consul Agent Communication",id:"consul-agent-communication",level:2},{value:"TLS Encryption Settings",id:"tls-encryption-settings",level:3},{value:"Certificate Authority",id:"certificate-authority",level:3},{value:"Required Certificates",id:"required-certificates",level:3},{value:"TLS Upgrade for an existing Consul Cluster",id:"tls-upgrade-for-an-existing-consul-cluster",level:2},{value:"Add the Encryption Key",id:"add-the-encryption-key",level:3},{value:"Configure all Consul Agents",id:"configure-all-consul-agents",level:3},{value:"Restart all Consul Agents",id:"restart-all-consul-agents",level:3},{value:"Enable Encryption on all Agents",id:"enable-encryption-on-all-agents",level:3},{value:"Key Management with Keyring",id:"key-management-with-keyring",level:2},{value:"Distribute new Keys",id:"distribute-new-keys",level:3},{value:"List Keys",id:"list-keys",level:3},{value:"Update your Cluster to a new Key",id:"update-your-cluster-to-a-new-key",level:3},{value:"Remove old Keys",id:"remove-old-keys",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Phnom Penh, Cambodia",src:s(964575).A+"",width:"1500",height:"453"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#consul-agent-communication",children:"Consul Agent Communication"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#tls-encryption-settings",children:"TLS Encryption Settings"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#certificate-authority",children:"Certificate Authority"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#required-certificates",children:"Required Certificates"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#tls-upgrade-for-an-existing-consul-cluster",children:"TLS Upgrade for an existing Consul Cluster"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#add-the-encryption-key",children:"Add the Encryption Key"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#configure-all-consul-agents",children:"Configure all Consul Agents"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#restart-all-consul-agents",children:"Restart all Consul Agents"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#enable-encryption-on-all-agents",children:"Enable Encryption on all Agents"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#key-management-with-keyring",children:"Key Management with Keyring"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#distribute-new-keys",children:"Distribute new Keys"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#list-keys",children:"List Keys"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#update-your-cluster-to-a-new-key",children:"Update your Cluster to a new Key"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#remove-old-keys",children:"Remove old Keys"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"consul-agent-communication",children:"Consul Agent Communication"}),"\n",(0,i.jsxs)(n.p,{children:["The communication between servers in your Consul cluster is not encrypted by default. But Consul supports TLS encryption which can be configured in the server configuration file ",(0,i.jsx)(n.code,{children:"/etc/consul.d/consul.hcl"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tls-encryption-settings",children:"TLS Encryption Settings"}),"\n",(0,i.jsx)(n.p,{children:"The following parameter have to be defined in all Consul Agent configuration files to enable encryption:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"verify_server_hostname"}),": true"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"verify_incoming"}),": true"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"verify_outgoing"}),": true"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["When ",(0,i.jsx)(n.code,{children:"verify_server_hostname"})," is enabled you need certificates that are valid for your clients ",(0,i.jsx)(n.strong,{children:"SAN"})," (subject alternative-name) that is ",(0,i.jsx)(n.code,{children:"[servername].[datacenter].[domain]"}),". If you use Consul to create your certs (see below) this will be done automatically."]}),"\n",(0,i.jsx)(n.h3,{id:"certificate-authority",children:"Certificate Authority"}),"\n",(0,i.jsxs)(n.p,{children:["Consul can be used as it's own ",(0,i.jsx)(n.strong,{children:"CA"})," and certificates can be generated through the Consul CLI:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Server"}),": ",(0,i.jsx)(n.code,{children:"consul tls cert create -server"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Client"}),": ",(0,i.jsx)(n.code,{children:"consul tls cert create -client"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CLI"}),": ",(0,i.jsx)(n.code,{children:"consul tls cert create -cli"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The Consul CA is automatically chosen if ",(0,i.jsx)(n.strong,{children:"Connect"})," is enabled without providing an external CA and client certificates are automatically distributed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/consul.d/consul.hcl\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Add the following lines to the end of the file and ",(0,i.jsx)(n.code,{children:"service consul restart"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"connect {\r\n  enabled = true\r\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"required-certificates",children:"Required Certificates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The Consul HTTP API and RPC communication (",(0,i.jsx)(n.strong,{children:"TLS Certificates"}),")"]}),"\n",(0,i.jsxs)(n.li,{children:["Service Mesh (",(0,i.jsx)(n.strong,{children:"mTLS Certificates"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"tls-upgrade-for-an-existing-consul-cluster",children:"TLS Upgrade for an existing Consul Cluster"}),"\n",(0,i.jsx)(n.h3,{id:"add-the-encryption-key",children:"Add the Encryption Key"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Generate Encryption Keys"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"consul keygen\r\n+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg=\n"})}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Add Keys to Keyring"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'consul keyring -install="+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg="\r\n==> Installing new gossip encryption key...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"configure-all-consul-agents",children:"Configure all Consul Agents"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"nano /etc/consul.d/consul.hcl\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:'encrypt = "+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg="\r\nencrypt_verify_incoming = false\r\nencrypt_verify_outgoing = false\n'})}),"\n",(0,i.jsx)(n.h3,{id:"restart-all-consul-agents",children:"Restart all Consul Agents"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"service consul restart\n"})}),"\n",(0,i.jsx)(n.h3,{id:"enable-encryption-on-all-agents",children:"Enable Encryption on all Agents"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:'encrypt = "+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg="\r\nencrypt_verify_incoming = false\r\nencrypt_verify_outgoing = true\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"service consul restart\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cfg",children:'encrypt = "+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg="\r\nencrypt_verify_incoming = true\r\nencrypt_verify_outgoing = true\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"service consul restart\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We can verify that encryption is enabled with by checking the journal for ",(0,i.jsx)(n.code,{children:"Encrypt: Gossip: true"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:" journalctl -u consul | grep Gossip\r\n\r\nSep 08 13:57:46 consul-master consul[42418]:            Encrypt: Gossip: false, TLS-Outgoing: false, TLS-Incoming: false, Auto-Encrypt-TLS: false\r\nSep 08 14:10:02 consul-master consul[44340]:            Encrypt: Gossip: true, TLS-Outgoing: false, TLS-Incoming: false, Auto-Encrypt-TLS: false\n"})}),"\n",(0,i.jsx)(n.h2,{id:"key-management-with-keyring",children:"Key Management with Keyring"}),"\n",(0,i.jsx)(n.h3,{id:"distribute-new-keys",children:"Distribute new Keys"}),"\n",(0,i.jsxs)(n.p,{children:["This command distributes the key you created with ",(0,i.jsx)(n.code,{children:"consul keygen"})," around the Consul cluster:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'consul keyring -install="+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg="\r\n==> Installing new gossip encryption key...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"list-keys",children:"List Keys"}),"\n",(0,i.jsx)(n.p,{children:"Check the currently available keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"consul keyring -list\r\n==> Gathering installed encryption keys...\r\n\r\nWAN:\r\n  +bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg= [1/1]\r\n\r\ninstaryun (LAN):\r\n  +bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg= [2/2]\n"})}),"\n",(0,i.jsx)(n.h3,{id:"update-your-cluster-to-a-new-key",children:"Update your Cluster to a new Key"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'consul keyring -use="+bLh5g5Q8N1RL2QQaY9U9z6I5Qi1WWDw6G3KMgeaTKg="\r\n==> Changing primary gossip encryption key...\n'})}),"\n",(0,i.jsx)(n.h3,{id:"remove-old-keys",children:"Remove old Keys"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'consul keyring -remove="myoldkey"\r\n==> Removing gossip encryption key...\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},964575:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-791f4988598f20c843135210699ae7a5.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var i=s(296540);const r={},l=i.createContext(r);function t(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);