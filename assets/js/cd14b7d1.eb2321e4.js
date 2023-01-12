"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[36861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(i,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3910,slug:"2022-12-05",title:"Hashicorp Consul - Vault Cert Management Part 2",authors:"mpolinowski",tags:["Consul","Vault","LINUX"],description:"Set-up Vault to be the Certificate Authority"},l=void 0,s={unversionedId:"DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/index",id:"DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/index",title:"Hashicorp Consul - Vault Cert Management Part 2",description:"Set-up Vault to be the Certificate Authority",source:"@site/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/index.md",sourceDirName:"DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2",slug:"/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/2022-12-05",permalink:"/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/2022-12-05",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part2/index.md",tags:[{label:"Consul",permalink:"/docs/tags/consul"},{label:"Vault",permalink:"/docs/tags/vault"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3910,frontMatter:{sidebar_position:3910,slug:"2022-12-05",title:"Hashicorp Consul - Vault Cert Management Part 2",authors:"mpolinowski",tags:["Consul","Vault","LINUX"],description:"Set-up Vault to be the Certificate Authority"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Consul - Vault Cert Management Part 3",permalink:"/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part3/2022-12-05"},next:{title:"Hashicorp Consul - Vault Cert Management Part 1",permalink:"/docs/DevOps/Hashicorp/2022-12-04-hashicorp-consul-vault-certificates-part1/2022-12-04"}},i={},c=[{value:"Configure Consul",id:"configure-consul",level:2},{value:"Consul Server",id:"consul-server",level:3},{value:"Consul Minions",id:"consul-minions",level:3},{value:"Cert Rotation",id:"cert-rotation",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shen Zhen, China",src:n(46142).Z,width:"2230",height:"839"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configure-consul"},"Configure Consul"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consul-server"},"Consul Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#consul-minions"},"Consul Minions")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#cert-rotation"},"Cert Rotation"))),(0,a.kt)("h2",{id:"configure-consul"},"Configure Consul"),(0,a.kt)("h3",{id:"consul-server"},"Consul Server"),(0,a.kt)("p",null,"Create a directory for the certificates and configure Consul TLS using the following configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/consul/agent-certs\n")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"/etc/consul.d/client.hcl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'tls {\n  defaults {\n    ca_file = "/opt/consul/agent-certs/ca.crt"\n    cert_file = "/opt/consul/agent-certs/agent.crt"\n    key_file = "/opt/consul/agent-certs/agent.key"\n    verify_incoming = true\n    verify_outgoing = true\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n  https {\n    verify_incoming = true\n  }\n}\n\nauto_encrypt {\n  allow_tls = true\n}\n\n')),(0,a.kt)("p",null,"I already created my certificates with the following command:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Careful"),": The official documentation uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"common_name")," for the default datacenter ",(0,a.kt)("inlineCode",{parentName:"p"},"consul.dc1"),". I use the name ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," here and have to change the variable ",(0,a.kt)("inlineCode",{parentName:"p"},"consul.consul")," accordingly. Otherwise the cert verification will fail. This name will be used a couple of times in the following commands - you need to change all of them according to your setup.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'vault write pki_int/issue/consul-consul common_name="server.consul.consul" ttl="24h" | tee consul_certs.txt\n')),(0,a.kt)("p",null,"Use the following commands to extract the two certificates and private key from the ",(0,a.kt)("inlineCode",{parentName:"p"},"consul_certs.txt")," and place them into the right file and location:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grep -Pzo \"(?s)(?<=certificate)[^\\-]*.*?END CERTIFICATE[^\\n]*\\n\" consul_certs.txt | sed 's/^\\s*-/-/g' > /opt/consul/agent-certs/agent.crt\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grep -Pzo \"(?s)(?<=issuing_ca)[^\\-]*.*?END CERTIFICATE[^\\n]*\\n\" consul_certs.txt | sed 's/^\\s*-/-/g' > /opt/consul/agent-certs/ca.crt\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grep -Pzo \"(?s)(?<=private_key)[^\\-]*.*?END RSA PRIVATE KEY[^\\n]*\\n\" consul_certs.txt | sed 's/^\\s*-/-/g' > /opt/consul/agent-certs/agent.key\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R consul:consul /opt/consul/agent-certs\n")),(0,a.kt)("h3",{id:"consul-minions"},"Consul Minions"),(0,a.kt)("p",null,"With auto-encryption, you can configure the Consul servers to automatically distribute certificates to the clients. To use this feature, you will need to configure clients to automatically get the certificates from the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/consul/agent-certs\n")),(0,a.kt)("p",null,"Configure Consul client TLS using the following configuration:"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"/etc/consul.d/consul.hcl")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'tls {\n  defaults {\n    verify_incoming = true\n    verify_outgoing = true\n    ca_file = "/opt/consul/agent-certs/ca.crt"\n  }\n  internal_rpc {\n    verify_server_hostname = true\n  }\n}\n\nauto_encrypt {\n    tls = true\n }\n')),(0,a.kt)("p",null,"Now we need to copy the extracted ",(0,a.kt)("inlineCode",{parentName:"p"},"agent.crt")," to each node into the specified directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"grep -Pzo \"(?s)(?<=issuing_ca)[^\\-]*.*?END CERTIFICATE[^\\n]*\\n\" consul_certs.txt | sed 's/^\\s*-/-/g' > /opt/consul/agent-certs/ca.crt\n")),(0,a.kt)("h2",{id:"cert-rotation"},"Cert Rotation"),(0,a.kt)("p",null,"Now that we have our Cert Authority (CA) and configured our master and minion server to use our short-lived, self-signed CA certs we now need to implement the automatic rotation whenever the cert expires."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part3/2022-12-05"},"Hashicorp Consul - Vault Cert Management Part 3"))))}p.isMDXComponent=!0},46142:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);