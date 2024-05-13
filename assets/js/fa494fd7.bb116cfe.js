"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[81932],{828956:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(474848),a=t(28453);const i={sidebar_position:7040,slug:"2021-08-21",title:"Hashicorp Vault - Secrets & Tokens",authors:"mpolinowski",tags:["Vault","Linux"]},r=void 0,o={id:"DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index",title:"Hashicorp Vault - Secrets & Tokens",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index.md",sourceDirName:"DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens",slug:"/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/2021-08-21",permalink:"/docs/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/2021-08-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-08-21--hashicorp-vault-secrets-tokens/index.md",tags:[{label:"Vault",permalink:"/docs/tags/vault"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:7040,frontMatter:{sidebar_position:7040,slug:"2021-08-21",title:"Hashicorp Vault - Secrets & Tokens",authors:"mpolinowski",tags:["Vault","Linux"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Vault - ACL Policies",permalink:"/docs/DevOps/Hashicorp/2021-08-22--hashicorp-vault-policies/2021-08-22"},next:{title:"Hashicorp Vault - Setup",permalink:"/docs/DevOps/Hashicorp/2021-08-20--hashicorp-vault-setup/2021-08-20"}},l={},c=[{value:"Adding Secrets to the Consul K/V Store",id:"adding-secrets-to-the-consul-kv-store",level:2},{value:"Create a Secrets Engine",id:"create-a-secrets-engine",level:3},{value:"Add a Secret",id:"add-a-secret",level:3},{value:"Authentication Methods",id:"authentication-methods",level:2},{value:"Working with Tokens",id:"working-with-tokens",level:3},{value:"Working with Username and Passwords",id:"working-with-username-and-passwords",level:3},{value:"Working with Github Logins",id:"working-with-github-logins",level:3},{value:"List all active Auth Methods",id:"list-all-active-auth-methods",level:3}];function h(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Victoria Harbour, Hong Kong",src:t(717698).A+"",width:"1500",height:"492"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#adding-secrets-to-the-consul-kv-store",children:"Adding Secrets to the Consul K/V Store"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#create-a-secrets-engine",children:"Create a Secrets Engine"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#add-a-secret",children:"Add a Secret"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#authentication-methods",children:"Authentication Methods"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#working-with-tokens",children:"Working with Tokens"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#working-with-username-and-passwords",children:"Working with Username and Passwords"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#working-with-github-logins",children:"Working with Github Logins"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#list-all-active-auth-methods",children:"List all active Auth Methods"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["In the ",(0,n.jsx)(s.a,{href:"/docs/DevOps/Hashicorp/2021-08-20--hashicorp-vault-setup/2021-08-20",children:"previous step"})," I installed Hashicorp Vault, configured it and unsealed it - so I am now ready to start using it:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault status\r\n\r\nKey             Value\r\n---             -----\r\nSeal Type       shamir\r\nInitialized     true\r\nSealed          false\r\nTotal Shares    5\r\nThreshold       3\r\nVersion         1.8.2\r\nStorage Type    consul\r\nCluster Name    vault-cluster-c09dbd91\r\nCluster ID      fbd3d3c4-bfed-45b3-f930-9bd1fc17c3a7\r\nHA Enabled      true\r\nHA Cluster      https://192.168.2.110:8201\r\nHA Mode         active\r\nActive Since    2021-09-14T03:54:27.968463561Z\n"})}),"\n",(0,n.jsx)(s.h2,{id:"adding-secrets-to-the-consul-kv-store",children:"Adding Secrets to the Consul K/V Store"}),"\n",(0,n.jsx)(s.h3,{id:"create-a-secrets-engine",children:"Create a Secrets Engine"}),"\n",(0,n.jsxs)(s.p,{children:["Add a secrets engine to the K/V store by defining the path name and type ",(0,n.jsx)(s.code,{children:"kv"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault secrets enable -path=thisisatest -description='This is a Test!' kv\r\nSuccess! Enabled the kv secrets engine at: thisisatest/\n"})}),"\n",(0,n.jsx)(s.p,{children:"Verify that the path was generated:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault secrets list\r\n\r\nPath            Type         Accessor              Description\r\n----            ----         --------              -----------\r\nthisisatest/    kv           kv_eb9cbb20           This is a Test!\n"})}),"\n",(0,n.jsx)(s.p,{children:"And remove the secrets engine with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault secrets disable thisisatest\r\nSuccess! Disabled the secrets engine (if it existed) at: thisisatest/\n"})}),"\n",(0,n.jsx)(s.h3,{id:"add-a-secret",children:"Add a Secret"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"PUT"}),": Add a secret to your secret engine:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault kv put thisisatest/elastic_master_login password=nIgXI6mKxt3lHmtvJEgypaE\r\nSuccess! Data written to: thisisatest/elastic_master_login\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"GET"}),": Read a secret from your secret engine:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault kv get thisisatest/elastic_master_login\r\n\r\n====== Data ======\r\nKey         Value\r\n---         -----\r\npassword    nIgXI6mKxt3lHmtvJEgypaE\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"DELETE"}),": Remove a secret from your secret engine:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault kv delete thisisatest/elastic_master_login\r\nSuccess! Data deleted (if it existed) at: thisisatest/elastic_master_login\n"})}),"\n",(0,n.jsx)(s.h2,{id:"authentication-methods",children:"Authentication Methods"}),"\n",(0,n.jsx)(s.h3,{id:"working-with-tokens",children:"Working with Tokens"}),"\n",(0,n.jsx)(s.p,{children:"Currently, I am using the bootstrap root token that was generated when I initialized Vault. To be able to interact with the Vault API you can create additional tokens with:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'vault token create\r\n\r\nKey                  Value\r\n---                  -----\r\ntoken                s.mP10AAvC0ZdW6WinL49rGGXX\r\ntoken_accessor       JTFRs2OwKTLEDfJPIlGbHun7\r\ntoken_duration       \u221e\r\ntoken_renewable      false\r\ntoken_policies       ["root"]\r\nidentity_policies    []\r\npolicies             ["root"]\n'})}),"\n",(0,n.jsx)(s.p,{children:"And manually revoke them, when no longer needed:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault token revoke s.mP10AAvC0ZdW6WinL49rGGXX\r\nSuccess! Revoked token (if it existed)\n"})}),"\n",(0,n.jsx)(s.h3,{id:"working-with-username-and-passwords",children:"Working with Username and Passwords"}),"\n",(0,n.jsx)(s.p,{children:"Activate the authentication method:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault auth enable userpass\r\nSuccess! Enabled userpass auth method at: userpass/\n"})}),"\n",(0,n.jsx)(s.p,{children:"And add user logins to the K/V store:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault write auth/userpass/users/manfred_mustermann password=strongpassword\r\nSuccess! Data written to: auth/userpass/users/manfred_mustermann\n"})}),"\n",(0,n.jsx)(s.p,{children:"And use the new user to login to Vault:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'vault login -method=userpass username=manfred_mustermann\r\nPassword (will be hidden): strongpassword\r\n\r\nSuccess! You are now authenticated. The token information displayed below\r\nis already stored in the token helper. You do NOT need to run "vault login"\r\nagain. Future Vault requests will automatically use this token.\r\n\r\nKey                    Value\r\n---                    -----\r\ntoken                  s.kWg9HwLETHCVhHqivVUpnm1l\r\ntoken_accessor         BCDUSKAI3pXXVDzjQKW15nG1\r\ntoken_duration         768h\r\ntoken_renewable        true\r\ntoken_policies         ["default"]\r\nidentity_policies      []\r\npolicies               ["default"]\r\ntoken_meta_username    manfred_mustermann\n'})}),"\n",(0,n.jsx)(s.h3,{id:"working-with-github-logins",children:"Working with Github Logins"}),"\n",(0,n.jsxs)(s.p,{children:["Login to your Github account and create a (free) organization from the ",(0,n.jsx)(s.strong,{children:"Settings/Organization"})," tab:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"HashiCorp Vault",src:t(386156).A+"",width:"1045",height:"717"})}),"\n",(0,n.jsx)(s.p,{children:"Enable Github Auth in Vault:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault auth enable github\r\nSuccess! Enabled github auth method at: github/\n"})}),"\n",(0,n.jsx)(s.p,{children:"And add your Github organization to Vault:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault write auth/github/config organization=INSTAR-Deutschland\r\nSuccess! Data written to: auth/github/config\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Assign a default tag for the authentication token. This can later be mapped to a ",(0,n.jsx)(s.strong,{children:"group policy"})," to restrict access:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault write auth/github/map/teams/development value=gh-policy\r\nSuccess! Data written to: auth/github/map/teams/development\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Add a user (that is part of your Github organization) and assign a tag for a ",(0,n.jsx)(s.strong,{children:"user policy"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault write auth/github/map/users/mpolinowski value=developer-policy\r\nSuccess! Data written to: auth/github/map/users/mpolinowski\n"})}),"\n",(0,n.jsx)(s.p,{children:"Back inside your Github Settings open the Developer tab and create a new access token:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"HashiCorp Vault",src:t(254631).A+"",width:"1052",height:"604"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"HashiCorp Vault",src:t(866942).A+"",width:"1130",height:"376"})}),"\n",(0,n.jsx)(s.p,{children:"On the Vault UI choose Github as your authentication method and paste in your generated access token to have Vault veriy that you are one of the added Github users and are part of the organization that you added to Vault:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"HashiCorp Vault",src:t(219409).A+"",width:"1139",height:"503"})}),"\n",(0,n.jsx)(s.p,{children:"And there you go:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"HashiCorp Vault",src:t(979464).A+"",width:"1142",height:"363"})}),"\n",(0,n.jsx)(s.h3,{id:"list-all-active-auth-methods",children:"List all active Auth Methods"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault auth list\r\n\r\nPath         Type        Accessor                  Description\r\n----         ----        --------                  -----------\r\ngithub/      github      auth_github_141b7ec9      n/a\r\ntoken/       token       auth_token_e36baf76       token based credentials\r\nuserpass/    userpass    auth_userpass_51025fe5    n/a\n"})}),"\n",(0,n.jsx)(s.p,{children:"Disable methods that you no longer need:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"vault auth disable github\r\nvault auth disable userpass\n"})})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},386156:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/HashiCorp_Vault_01-4359fe7bd9bbe44d68701b5166af6019.png"},254631:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/HashiCorp_Vault_02-6ce23752ba13469f3ba4c6c2d7cc3c39.png"},866942:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/HashiCorp_Vault_03-07e289d9abf15d87d30794ce0cb035ff.png"},219409:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/HashiCorp_Vault_04-6ab7aa4089be910b6f35afe211fe6b3e.png"},979464:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/HashiCorp_Vault_05-d779ab38d5ca804cc76166cd64eb44bf.png"},717698:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-407da0fd793c6b69537daa515bfd1c96.jpg"},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(296540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);