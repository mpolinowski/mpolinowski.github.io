"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[55922],{308594:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var s=i(785893),r=i(603905);const a={sidebar_position:3880,slug:"2022-12-07",title:"Hashicorp Vault - Certificate Authority",authors:"mpolinowski",tags:["Vault","LINUX"],description:"Generating CA certificates through Hashicorp Vault user interface."},n=void 0,c={id:"DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates/index",title:"Hashicorp Vault - Certificate Authority",description:"Generating CA certificates through Hashicorp Vault user interface.",source:"@site/docs/DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates/index.md",sourceDirName:"DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates",slug:"/DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates/2022-12-07",permalink:"/docs/DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates/2022-12-07",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-12-07-hashicorp-vault-ca-certificates/index.md",tags:[{label:"Vault",permalink:"/docs/tags/vault"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3880,frontMatter:{sidebar_position:3880,slug:"2022-12-07",title:"Hashicorp Vault - Certificate Authority",authors:"mpolinowski",tags:["Vault","LINUX"],description:"Generating CA certificates through Hashicorp Vault user interface."},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Terraform - Docker Provider 2023",permalink:"/docs/DevOps/Hashicorp/2023-10-22-hashicorp-terraform-docker-2023/2023-10-22"},next:{title:"Hashicorp Consul - Vault Cert Management Part 3",permalink:"/docs/DevOps/Hashicorp/2022-12-05-hashicorp-consul-vault-certificates-part3/2022-12-05"}},o={},h=[{value:"Generate root CA",id:"generate-root-ca",level:2},{value:"Generate Intermediate CA",id:"generate-intermediate-ca",level:2},{value:"Create a Role",id:"create-a-role",level:2},{value:"Request Certificates",id:"request-certificates",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Shen Zhen, China",src:i(347065).Z+"",width:"2230",height:"839"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#generate-root-ca",children:"Generate root CA"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#generate-intermediate-ca",children:"Generate Intermediate CA"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#create-a-role",children:"Create a Role"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#request-certificates",children:"Request Certificates"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Generating CA certificates through Hashicorp Vault user interface."}),"\n",(0,s.jsx)(t.h2,{id:"generate-root-ca",children:"Generate root CA"}),"\n",(0,s.jsx)(t.p,{children:"I already activated and configured the PKI engine in a previous setup:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'vault secrets enable pki\nvault secrets tune -max-lease-ttl=87600h pki\n\nvault write -field=certificate pki/root/generate/internal \\\n        common_name="consul.consul" \\\n        ttl=87600h > CA_cert.crt\n\n\nvault write pki/config/urls \\\n        issuing_certificates="http://127.0.0.1:8200/v1/pki/ca" \\\n        crl_distribution_points="http://127.0.0.1:8200/v1/pki/crl"\n'})}),"\n",(0,s.jsx)(t.p,{children:"But let's build a new one using the UI now. Select Enable new engine and select PKI Certificates from the list, and then click Next:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(279881).Z+"",width:"1142",height:"329"})}),"\n",(0,s.jsxs)(t.p,{children:["Expand ",(0,s.jsx)(t.strong,{children:"Method Options"}),", enable ",(0,s.jsx)(t.strong,{children:"Max Lease TTL"})," and set the value to ",(0,s.jsx)(t.strong,{children:"87600 hours"})," and click ",(0,s.jsx)(t.strong,{children:"Enable Engine"})," to complete. This sets the path to be pki:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(268587).Z+"",width:"1141",height:"759"})}),"\n",(0,s.jsx)(t.p,{children:"Select the Configuration tab and then Configure:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(293225).Z+"",width:"1143",height:"635"})}),"\n",(0,s.jsx)(t.p,{children:"Click Configure CA:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(512042).Z+"",width:"1137",height:"359"})}),"\n",(0,s.jsxs)(t.p,{children:["Ensure that the ",(0,s.jsx)(t.strong,{children:"CA Type"})," is set to ",(0,s.jsx)(t.code,{children:"root"}),", that the Type is set to internal and enter ",(0,s.jsx)(t.code,{children:"consul.consul"})," in the ",(0,s.jsx)(t.strong,{children:"Common name"})," field:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(11361).Z+"",width:"1143",height:"583"})}),"\n",(0,s.jsxs)(t.p,{children:["Expand Options and enable ",(0,s.jsx)(t.strong,{children:"TTL"})," and set the value to ",(0,s.jsx)(t.code,{children:"87600 hours"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(747038).Z+"",width:"1144",height:"311"})}),"\n",(0,s.jsxs)(t.p,{children:["Click Copy Certificate and save it in a file named ",(0,s.jsx)(t.code,{children:"root_2023_ca.crt"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(784447).Z+"",width:"1143",height:"705"})}),"\n",(0,s.jsx)(t.p,{children:"Click the URLs tab and:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"http://127.0.0.1:8200/v1/pki/ca"})," in the ",(0,s.jsx)(t.strong,{children:"Issuing certificates"})," field."]}),"\n",(0,s.jsxs)(t.li,{children:["Enter ",(0,s.jsx)(t.code,{children:"http://127.0.0.1:8200/v1/pki/crl"})," in the ",(0,s.jsx)(t.strong,{children:"CRL Distribution Points"})," field."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(907786).Z+"",width:"1142",height:"463"})}),"\n",(0,s.jsxs)(t.p,{children:["Back to the PKI overview page ",(0,s.jsx)(t.strong,{children:"create a role"})," to the root CA:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(347155).Z+"",width:"1318",height:"436"})}),"\n",(0,s.jsx)(t.p,{children:"With an extended list of options:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(532462).Z+"",width:"1142",height:"339"})}),"\n",(0,s.jsxs)(t.p,{children:["And set the ",(0,s.jsx)(t.strong,{children:"TTL"})," according to your needs:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(266688).Z+"",width:"1141",height:"289"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(849212).Z+"",width:"1138",height:"327"})}),"\n",(0,s.jsx)(t.h2,{id:"generate-intermediate-ca",children:"Generate Intermediate CA"}),"\n",(0,s.jsxs)(t.p,{children:["We can now create an intermediate CA using the root CA regenerated in the previous step. From ",(0,s.jsx)(t.strong,{children:"Secrets"}),", select ",(0,s.jsx)(t.strong,{children:"Enable new engine"})," and select the ",(0,s.jsx)(t.strong,{children:"PKI certificate"})," radio button:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(546545).Z+"",width:"952",height:"335"})}),"\n",(0,s.jsxs)(t.p,{children:["Add the path ",(0,s.jsx)(t.code,{children:"pki_int"}),", click More options to expand and set the ",(0,s.jsx)(t.strong,{children:"Maximum lease TTL"})," to ",(0,s.jsx)(t.code,{children:"43800 hours"})," and click ",(0,s.jsx)(t.strong,{children:"Enable Engine"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(442304).Z+"",width:"1319",height:"773"})}),"\n",(0,s.jsx)(t.p,{children:"Select the Configuration tab and then Configure:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(730078).Z+"",width:"1320",height:"642"})}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Add CA"})," and select ",(0,s.jsx)(t.strong,{children:"intermediate"})," from CA Type drop-down list and add ",(0,s.jsx)(t.code,{children:"consul.consul Intermediate Authority"})," in the Common name field:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(933635).Z+"",width:"1327",height:"589"})}),"\n",(0,s.jsxs)(t.p,{children:["Click Copy CSR and save it in a file, ",(0,s.jsx)(t.code,{children:"consul_intermediate.csr"}),"."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(965655).Z+"",width:"1320",height:"485"})}),"\n",(0,s.jsx)(t.p,{children:"Return to the pki in the Secrets tab which is the root CA. Select the Configuration tab and then Configure. Click Sign intermediate:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(971372).Z+"",width:"1322",height:"468"})}),"\n",(0,s.jsxs)(t.p,{children:["Paste in the CSR you just copied into the ",(0,s.jsx)(t.strong,{children:"Certificate Signing Request"})," (CSR) field and enter consul.consul in the ",(0,s.jsx)(t.strong,{children:"Common Name"}),". Select ",(0,s.jsx)(t.code,{children:"pem_bundle"})," from the Format drop-down list, and then click Save.:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(366543).Z+"",width:"1305",height:"806"})}),"\n",(0,s.jsxs)(t.p,{children:["Click ",(0,s.jsx)(t.strong,{children:"Copy Certificate"})," and save the generated certificate in a file, ",(0,s.jsx)(t.code,{children:"intermediate.cert.pem"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(117223).Z+"",width:"1310",height:"722"})}),"\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.code,{children:"pki_int"})," from the Secrets tab to return to the intermediate CA. Select the Configuration tab and then Configure. Click Set signed intermediate:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(459222).Z+"",width:"1318",height:"471"})}),"\n",(0,s.jsx)(t.p,{children:"Paste in the certificate in the Signed Intermediate Certificate field and then click Save:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(710019).Z+"",width:"1321",height:"564"})}),"\n",(0,s.jsx)(t.h2,{id:"create-a-role",children:"Create a Role"}),"\n",(0,s.jsxs)(t.p,{children:["A role is a logical name that maps to a policy used to generate those credentials. It allows ",(0,s.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/api-docs/secret/pki#create-update-role",children:"configuration parameters"})," to control certificate common names, alternate names, the key uses that they are valid for, and more."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"allowed_domains"})}),(0,s.jsx)(t.td,{children:"Specifies the domains of the role (used with allow_bare_domains and allow-subdomains options)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"allow_bare_domains"})}),(0,s.jsx)(t.td,{children:"Specifies if clients can request certificates matching the value of the actual domains themselves"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"allow_subdomains"})}),(0,s.jsx)(t.td,{children:"Specifies if clients can request certificates with CNs that are subdomains of the CNs allowed by the other role options (NOTE: This includes wildcard subdomains.)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"allow_glob_domains"})}),(0,s.jsx)(t.td,{children:"Allows names specified in allowed_domains to contain glob patterns (e.g. ftp*.example.com)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Click the terminal icon and use the following command to list issuers:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"read -field=default pki_int/config/issuers\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(802341).Z+"",width:"1300",height:"450"})}),"\n",(0,s.jsx)(t.p,{children:"Copy the value from the above command. Click pki_int and then select Create role:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(407145).Z+"",width:"1317",height:"269"})}),"\n",(0,s.jsxs)(t.p,{children:["Enter ",(0,s.jsx)(t.code,{children:"consul-dot-consul"})," in the Role name field and paste the value you copied in step 3 into the ",(0,s.jsx)(t.code,{children:"Issuer ref"})," field:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(913295).Z+"",width:"1141",height:"887"})}),"\n",(0,s.jsx)(t.p,{children:"Expand Options and then set the Max TTL to 43800 hours (5 years):"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(143890).Z+"",width:"1316",height:"305"})}),"\n",(0,s.jsxs)(t.p,{children:["Expand Domain Handling and then select the ",(0,s.jsx)(t.strong,{children:"Allow subdomains"})," check-box. Enter ",(0,s.jsx)(t.code,{children:"consul.consul"})," in the ",(0,s.jsx)(t.strong,{children:"Allowed domains"})," field:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(183393).Z+"",width:"1310",height:"402"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(350823).Z+"",width:"1139",height:"327"})}),"\n",(0,s.jsx)(t.h2,{id:"request-certificates",children:"Request Certificates"}),"\n",(0,s.jsx)(t.p,{children:"Keep certificate lifetimes short to align with Vault's philosophy of short-lived secrets."}),"\n",(0,s.jsxs)(t.p,{children:["Select ",(0,s.jsx)(t.strong,{children:"Secrets"}),", ",(0,s.jsx)(t.code,{children:"pki_int"})," from the ",(0,s.jsx)(t.strong,{children:"Secrets Engines"})," list and elect ",(0,s.jsx)(t.code,{children:"consul-dot-consul"})," under ",(0,s.jsx)(t.strong,{children:"Roles"})," and enter ",(0,s.jsx)(t.code,{children:"vault.consul.consul"})," in the Common name field. Expand Options and then set the TTL to ",(0,s.jsx)(t.em,{children:"24 hours"}),":"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(728779).Z+"",width:"1141",height:"624"})}),"\n",(0,s.jsx)(t.p,{children:"Click Copy credentials and save it to a file:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Hashicorp Vault - Certificate Authority",src:i(458992).Z+"",width:"1312",height:"822"})})]})}function l(e={}){const{wrapper:t}={...(0,r.ah)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},603905:(e,t,i)=>{i.d(t,{ah:()=>h});var s=i(667294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,s,r=function(e,t){if(null==e)return{};var i,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)i=a[s],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var o=s.createContext({}),h=function(e){var t=s.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},l=s.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=h(i),u=r,f=p["".concat(o,".").concat(u)]||p[u]||d[u]||a;return i?s.createElement(f,n(n({ref:t},l),{},{components:i})):s.createElement(f,n({ref:t},l))}));l.displayName="MDXCreateElement"},279881:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_01-28565bccd138066600b86683976c214d.png"},268587:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02a-efb5476787d579e73b9fc28930be37e7.png"},293225:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02b-c765bcbc9531777bb38912b2810fc26c.png"},512042:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02c-06071b8cc7f5bd34dc2cf80ff3cde0e8.png"},11361:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02d-7680691bdf4f035d21cb357caa85de34.png"},747038:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02e-19ce4daff07e9da16931ab498b8ad539.png"},784447:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02f-ea062dca5e8a76dd50616ff5d519c42c.png"},907786:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_02g-90cdf7d508b0a36085416d52177db8cb.png"},347155:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_03-311e219edc85dbc5f4d3dc303a49899b.png"},532462:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_04a-d980e9ded55df4936fcf5cb7f6efd1b3.png"},266688:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_04b-084465e59d3362aac5496c507fe31cb2.png"},849212:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_04c-84f957ff63070e6e14f52251b135ea8a.png"},546545:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_05-e1832a24d04dc1fb571b1d1618d48984.png"},442304:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_06-08d7a0f8ffe72952a4f0ea26082ec789.png"},730078:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_07-237c3f85e48749782ed19325fbeffc65.png"},933635:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_08-cbcadf14b09d3d78d29643ac03fc9ba5.png"},965655:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_09-3ca84c0d0f74b672e9ba3add3a0b3602.png"},971372:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_10-06ef86322992a0fd0e3dc10b1f95795c.png"},366543:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_11-e8fc8e120e2a7212f43047601402bd0e.png"},117223:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_12-9b0159b31db22ea22548c429b3fab298.png"},459222:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_13-67c8f8d295067f88f293a72b00cbd7b8.png"},710019:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_14-1c9b8230185805754dbed02678b6bd22.png"},802341:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_15-53f65c74406c1b97052c29f158edf9de.png"},407145:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_16-b77b9c3ab3b55fffa8074d01cce563d3.png"},913295:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_17-3b8c398c6e575565bc61ca7be10d4e29.png"},143890:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_18-0c399d00804e40bc6ec5c53c4567f17f.png"},183393:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_19-2c4bce5f5d0bceae1dd0b4d3e157657b.png"},350823:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_20-58a8a9fed32e515f6c40ebeff5b40e60.png"},728779:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_21-9acd406839e1a3f5a714ba13bcd9dc18.png"},458992:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/Hashicorp_Vault_Certificate_Authority_22-c3f704145682121e29009b82cf414df0.png"},347065:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);