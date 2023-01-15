"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[46302],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=u(a),d=s,g=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function d(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},95601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(87462),s=(a(67294),a(3905));const r={sidebar_position:7040,slug:"2021-08-21",title:"Hashicorp Vault - Secrets & Tokens",authors:"mpolinowski",tags:["Vault","Linux"]},i=void 0,o={unversionedId:"DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index",id:"DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index",title:"Hashicorp Vault - Secrets & Tokens",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index.md",sourceDirName:"DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens",slug:"/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/2021-08-21",permalink:"/docs/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/2021-08-21",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index.md",tags:[{label:"Vault",permalink:"/docs/tags/vault"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:7040,frontMatter:{sidebar_position:7040,slug:"2021-08-21",title:"Hashicorp Vault - Secrets & Tokens",authors:"mpolinowski",tags:["Vault","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Vault - ACL Policies",permalink:"/docs/DevOps/Hashicorp/2021-08-22--hashicorp-vault-policies/2021-08-22"},next:{title:"Hashicorp Vault - Setup",permalink:"/docs/DevOps/Hashicorp/2021-08-20--hashicorp-vault-setup/2021-08-20"}},l={},u=[{value:"Adding Secrets to the Consul K/V Store",id:"adding-secrets-to-the-consul-kv-store",level:2},{value:"Create a Secrets Engine",id:"create-a-secrets-engine",level:3},{value:"Add a Secret",id:"add-a-secret",level:3},{value:"Authentication Methods",id:"authentication-methods",level:2},{value:"Working with Tokens",id:"working-with-tokens",level:3},{value:"Working with Username and Passwords",id:"working-with-username-and-passwords",level:3},{value:"Working with Github Logins",id:"working-with-github-logins",level:3},{value:"List all active Auth Methods",id:"list-all-active-auth-methods",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Victoria Harbour, Hong Kong",src:a(93846).Z,width:"1500",height:"492"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#adding-secrets-to-the-consul-kv-store"},"Adding Secrets to the Consul K/V Store"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#create-a-secrets-engine"},"Create a Secrets Engine")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#add-a-secret"},"Add a Secret")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#authentication-methods"},"Authentication Methods"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#working-with-tokens"},"Working with Tokens")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#working-with-username-and-passwords"},"Working with Username and Passwords")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#working-with-github-logins"},"Working with Github Logins")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#list-all-active-auth-methods"},"List all active Auth Methods"))))),(0,s.kt)("p",null,"In the ",(0,s.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2021-08-20--hashicorp-vault-setup/2021-08-20"},"previous step")," I installed Hashicorp Vault, configured it and unsealed it - so I am now ready to start using it:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault status\n\nKey             Value\n---             -----\nSeal Type       shamir\nInitialized     true\nSealed          false\nTotal Shares    5\nThreshold       3\nVersion         1.8.2\nStorage Type    consul\nCluster Name    vault-cluster-c09dbd91\nCluster ID      fbd3d3c4-bfed-45b3-f930-9bd1fc17c3a7\nHA Enabled      true\nHA Cluster      https://192.168.2.110:8201\nHA Mode         active\nActive Since    2021-09-14T03:54:27.968463561Z\n")),(0,s.kt)("h2",{id:"adding-secrets-to-the-consul-kv-store"},"Adding Secrets to the Consul K/V Store"),(0,s.kt)("h3",{id:"create-a-secrets-engine"},"Create a Secrets Engine"),(0,s.kt)("p",null,"Add a secrets engine to the K/V store by defining the path name and type ",(0,s.kt)("inlineCode",{parentName:"p"},"kv"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault secrets enable -path=thisisatest -description='This is a Test!' kv\nSuccess! Enabled the kv secrets engine at: thisisatest/\n")),(0,s.kt)("p",null,"Verify that the path was generated:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault secrets list\n\nPath            Type         Accessor              Description\n----            ----         --------              -----------\nthisisatest/    kv           kv_eb9cbb20           This is a Test!\n")),(0,s.kt)("p",null,"And remove the secrets engine with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault secrets disable thisisatest\nSuccess! Disabled the secrets engine (if it existed) at: thisisatest/\n")),(0,s.kt)("h3",{id:"add-a-secret"},"Add a Secret"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"PUT"),": Add a secret to your secret engine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv put thisisatest/elastic_master_login password=nIgXI6mKxt3lHmtvJEgypaE\nSuccess! Data written to: thisisatest/elastic_master_login\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"GET"),": Read a secret from your secret engine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv get thisisatest/elastic_master_login\n\n====== Data ======\nKey         Value\n---         -----\npassword    nIgXI6mKxt3lHmtvJEgypaE\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"DELETE"),": Remove a secret from your secret engine:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault kv delete thisisatest/elastic_master_login\nSuccess! Data deleted (if it existed) at: thisisatest/elastic_master_login\n")),(0,s.kt)("h2",{id:"authentication-methods"},"Authentication Methods"),(0,s.kt)("h3",{id:"working-with-tokens"},"Working with Tokens"),(0,s.kt)("p",null,"Currently, I am using the bootstrap root token that was generated when I initialized Vault. To be able to interact with the Vault API you can create additional tokens with:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'vault token create\n\nKey                  Value\n---                  -----\ntoken                s.mP10AAvC0ZdW6WinL49rGGXX\ntoken_accessor       JTFRs2OwKTLEDfJPIlGbHun7\ntoken_duration       \u221e\ntoken_renewable      false\ntoken_policies       ["root"]\nidentity_policies    []\npolicies             ["root"]\n')),(0,s.kt)("p",null,"And manually revoke them, when no longer needed:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault token revoke s.mP10AAvC0ZdW6WinL49rGGXX\nSuccess! Revoked token (if it existed)\n")),(0,s.kt)("h3",{id:"working-with-username-and-passwords"},"Working with Username and Passwords"),(0,s.kt)("p",null,"Activate the authentication method:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth enable userpass\nSuccess! Enabled userpass auth method at: userpass/\n")),(0,s.kt)("p",null,"And add user logins to the K/V store:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/userpass/users/manfred_mustermann password=strongpassword\nSuccess! Data written to: auth/userpass/users/manfred_mustermann\n")),(0,s.kt)("p",null,"And use the new user to login to Vault:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'vault login -method=userpass username=manfred_mustermann\nPassword (will be hidden): strongpassword\n\nSuccess! You are now authenticated. The token information displayed below\nis already stored in the token helper. You do NOT need to run "vault login"\nagain. Future Vault requests will automatically use this token.\n\nKey                    Value\n---                    -----\ntoken                  s.kWg9HwLETHCVhHqivVUpnm1l\ntoken_accessor         BCDUSKAI3pXXVDzjQKW15nG1\ntoken_duration         768h\ntoken_renewable        true\ntoken_policies         ["default"]\nidentity_policies      []\npolicies               ["default"]\ntoken_meta_username    manfred_mustermann\n')),(0,s.kt)("h3",{id:"working-with-github-logins"},"Working with Github Logins"),(0,s.kt)("p",null,"Login to your Github account and create a (free) organization from the ",(0,s.kt)("strong",{parentName:"p"},"Settings/Organization")," tab:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HashiCorp Vault",src:a(91506).Z,width:"1045",height:"717"})),(0,s.kt)("p",null,"Enable Github Auth in Vault:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth enable github\nSuccess! Enabled github auth method at: github/\n")),(0,s.kt)("p",null,"And add your Github organization to Vault:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/github/config organization=INSTAR-Deutschland\nSuccess! Data written to: auth/github/config\n")),(0,s.kt)("p",null,"Assign a default tag for the authentication token. This can later be mapped to a ",(0,s.kt)("strong",{parentName:"p"},"group policy")," to restrict access:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/github/map/teams/development value=gh-policy\nSuccess! Data written to: auth/github/map/teams/development\n")),(0,s.kt)("p",null,"Add a user (that is part of your Github organization) and assign a tag for a ",(0,s.kt)("strong",{parentName:"p"},"user policy"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault write auth/github/map/users/mpolinowski value=developer-policy\nSuccess! Data written to: auth/github/map/users/mpolinowski\n")),(0,s.kt)("p",null,"Back inside your Github Settings open the Developer tab and create a new access token:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HashiCorp Vault",src:a(87235).Z,width:"1052",height:"604"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HashiCorp Vault",src:a(7181).Z,width:"1130",height:"376"})),(0,s.kt)("p",null,"On the Vault UI choose Github as your authentication method and paste in your generated access token to have Vault veriy that you are one of the added Github users and are part of the organization that you added to Vault:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HashiCorp Vault",src:a(80153).Z,width:"1139",height:"503"})),(0,s.kt)("p",null,"And there you go:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"HashiCorp Vault",src:a(32171).Z,width:"1142",height:"363"})),(0,s.kt)("h3",{id:"list-all-active-auth-methods"},"List all active Auth Methods"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth list\n\nPath         Type        Accessor                  Description\n----         ----        --------                  -----------\ngithub/      github      auth_github_141b7ec9      n/a\ntoken/       token       auth_token_e36baf76       token based credentials\nuserpass/    userpass    auth_userpass_51025fe5    n/a\n")),(0,s.kt)("p",null,"Disable methods that you no longer need:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"vault auth disable github\nvault auth disable userpass\n")))}p.isMDXComponent=!0},91506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HashiCorp_Vault_01-4359fe7bd9bbe44d68701b5166af6019.png"},87235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HashiCorp_Vault_02-6ce23752ba13469f3ba4c6c2d7cc3c39.png"},7181:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HashiCorp_Vault_03-07e289d9abf15d87d30794ce0cb035ff.png"},80153:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HashiCorp_Vault_04-6ab7aa4089be910b6f35afe211fe6b3e.png"},32171:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/HashiCorp_Vault_05-d779ab38d5ca804cc76166cd64eb44bf.png"},93846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-407da0fd793c6b69537daa515bfd1c96.jpg"}}]);