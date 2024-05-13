"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[86535],{139467:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=i(474848),a=i(28453);const t={sidebar_position:9040,slug:"2020-11-24",title:"Ansible Vault for User Logins",authors:"mpolinowski",tags:["LINUX","Ansible"]},s=void 0,o={id:"DevOps/Ansible/2020-11-24--ansible-vault-user-login/index",title:"Ansible Vault for User Logins",description:"Shenzhen, China",source:"@site/docs/DevOps/Ansible/2020-11-24--ansible-vault-user-login/index.md",sourceDirName:"DevOps/Ansible/2020-11-24--ansible-vault-user-login",slug:"/DevOps/Ansible/2020-11-24--ansible-vault-user-login/2020-11-24",permalink:"/docs/DevOps/Ansible/2020-11-24--ansible-vault-user-login/2020-11-24",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Ansible/2020-11-24--ansible-vault-user-login/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Ansible",permalink:"/docs/tags/ansible"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2020-11-24",title:"Ansible Vault for User Logins",authors:"mpolinowski",tags:["LINUX","Ansible"]},sidebar:"tutorialSidebar",previous:{title:"Ansible in Gitlab CI Pipelines",permalink:"/docs/DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci/2020-11-25"},next:{title:"Ansible Getting Serious",permalink:"/docs/DevOps/Ansible/2020-11-23--ansible-getting-serious/2020-11-23"}},l={},c=[{value:"Creating the Vault",id:"creating-the-vault",level:2},{value:"Include it into your Playbook",id:"include-it-into-your-playbook",level:3},{value:"Encrypt your Logins with Ansible Vault",id:"encrypt-your-logins-with-ansible-vault",level:3},{value:"Running your Playbook",id:"running-your-playbook",level:2}];function u(n){const e={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Shenzhen, China",src:i(39241).A+"",width:"1500",height:"676"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"#creating-the-vault",children:"Creating the Vault"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#include-it-into-your-playbook",children:"Include it into your Playbook"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#encrypt-your-logins-with-ansible-vault",children:"Encrypt your Logins with Ansible Vault"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#running-your-playbook",children:"Running your Playbook"})}),"\n"]}),"\n",(0,r.jsxs)(e.p,{children:["I am using the following playbook to run an update on a Docker cluster - ",(0,r.jsx)(e.code,{children:"nano /opt/ansible/playbooks/update_wikis.yml"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yml",children:'---\r\n- hosts: Wiki_Virtual\r\n  gather_facts: no\r\n\r\n  vars_prompt:\r\n\r\n    - name: "gitlabuser" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: no \r\n    - name: "gitlabpassword" \r\n      prompt: "Enter your INSTAR Gitlab Username" \r\n      private: yes\r\n\r\n  tasks:\r\n\r\n    - name: Log into Docker Registry and force re-authorization\r\n      docker_login:\r\n        registry: my.gitlab.com:12345\r\n        username: "{{ gitlabuser }}"\r\n        password: "{{ gitlabpassword }}"\r\n        reauthorize: yes\r\n\r\n    - name: Download the latest Wiki build images\r\n      shell: docker pull my.gitlab.com:12345/wiki/{{ item }}\r\n      with_items:\r\n        - wiki_en_container\r\n        - wiki_de_container\r\n        - wiki_fr_container\r\n  \r\n    - name: Remove the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        state: absent\r\n  \r\n    - name: Rebuild the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        image: my.gitlab.com:12345/wiki/wiki_en_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n  \r\n    - name: Remove the DE Wiki Container\r\n      docker_container:\r\n        name: wiki_de\r\n        state: absent\r\n  \r\n    - name: Rebuild the DE Wiki Container\r\n      docker_container:\r\n        name: wiki_de\r\n        image: my.gitlab.com:12345/wiki/wiki_de_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\r\n  \r\n    - name: Remove the FR Wiki Container\r\n      docker_container:\r\n        name: wiki_fr\r\n        state: absent\r\n  \r\n    - name: Run the FR Wiki Container\r\n      docker_container:\r\n        name: wiki_fr\r\n        image: my.gitlab.com:12345/wiki/wiki_fr_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\r\n        networks_cli_compatible: yes\n'})}),"\n",(0,r.jsx)(e.p,{children:"This downloads the newest Docker images from a private Docker registry, removes the old containers and replaces them with new ones build from the updated images."}),"\n",(0,r.jsxs)(e.p,{children:["I am using a prompt to ask for the user login for the private registry before running any of the tasks. I want to replace my personal login here with a ",(0,r.jsx)(e.em,{children:"Ansible User"})," login that I can share with my coworkers. And preferably it should be hidden inside a vault - so that I only have to forward a simple vault login and the authentication with my registry will remain hidden from other users."]}),"\n",(0,r.jsx)(e.h2,{id:"creating-the-vault",children:"Creating the Vault"}),"\n",(0,r.jsxs)(e.p,{children:["I will place the Ansible user login inside a file ",(0,r.jsx)(e.code,{children:"nano /opt/ansible/playbooks/login_vault.yml"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yml",children:"---\r\nansible_gitlab_user: m.polinowski@gmail.com\r\nansible_gitlab_pass: verysecretpassword\n"})}),"\n",(0,r.jsx)(e.h3,{id:"include-it-into-your-playbook",children:"Include it into your Playbook"}),"\n",(0,r.jsx)(e.p,{children:"Now I need to include this file into my playbook and extract the variables from it:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yml",children:'---\r\n- hosts: Wiki_Virtual\r\n  gather_facts: no\r\n\r\n  tasks:\r\n\r\n    - name: Include vault for registry login\r\n      include_vars:\r\n        file: login_vault.yml\r\n\r\n    - name: Log into Docker Registry and force re-authorization\r\n      docker_login:\r\n        registry: my.gitlab.com:12345\r\n        username: "{{ansible_gitlab_user}}"\r\n        password: "{{ansible_gitlab_pass}}"\r\n        reauthorize: yes\n'})}),"\n",(0,r.jsx)(e.h3,{id:"encrypt-your-logins-with-ansible-vault",children:"Encrypt your Logins with Ansible Vault"}),"\n",(0,r.jsx)(e.p,{children:"To access the file you will need a password that you have to forward to your co-workers. I choose to create this password inside a password file. Don't forget to gitignore this file to prevent unauthorized users from running your playbook:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"touch /opt/ansible/playbooks/vault_pass\r\nnano /opt/ansible/playbooks/vault_pass\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-txt",children:"mysecretvaultpass\n"})}),"\n",(0,r.jsxs)(e.p,{children:["I can now use the ",(0,r.jsx)(e.code,{children:"ansible-vault"})," command to encrypt my vault:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ansible-vault encrypt /opt/ansible/playbooks/login_vault.yml --vault-password-file /opt/ansible/playbooks/vault_pass                    \r\nEncryption successful\n"})}),"\n",(0,r.jsx)(e.p,{children:"Verify that your vault was encrypted by running:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"cat /opt/ansible/playbooks/login_vault.yml                                                                                              \r\n$ANSIBLE_VAULT;1.1;AES256\r\n64323732356632353638316337313632326233373339366665356433346633626463653064363362\r\n6635646....\n"})}),"\n",(0,r.jsx)(e.p,{children:"If you need to check the content of your vault run the following command:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ansible-vault view /opt/ansible/playbooks/login_vault.yml --vault-password-file /opt/ansible/playbooks/vault_pass\n"})}),"\n",(0,r.jsx)(e.h2,{id:"running-your-playbook",children:"Running your Playbook"}),"\n",(0,r.jsxs)(e.p,{children:["You can first do a ",(0,r.jsx)(e.strong,{children:"Dry Run"})," by attaching the ",(0,r.jsx)(e.code,{children:" --check"})," flag to the command:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"ansible-playbook /opt/ansible/playbooks/update_wikis.yml --vault-password-file /opt/ansible/playbooks/vault_pass --check                \r\n\r\nPLAY [Wiki_Virtual] *********************************************************************\r\nTASK [Include vault for registry login] *************************************************\r\nok: [Wiki_Virtual]\r\n\r\nTASK [Log into Docker Registry and force re-authorization] ******************************\r\nok: [Wiki_Virtual]\r\n\r\nTASK [Download the latest Wiki build images] ********************************************\r\nskipping: [Wiki_Virtual] => (item=wiki_en_container) \r\nskipping: [Wiki_Virtual] => (item=wiki_de_container) \r\nskipping: [Wiki_Virtual] => (item=wiki_fr_container) \r\n\r\nTASK [Remove the EN Wiki Container] *****************************************************\r\nchanged: [Wiki_Virtual]\r\n\r\nTASK [Rebuild the EN Wiki Container] ****************************************************\r\nok: [Wiki_Virtual]\r\n\r\nTASK [Remove the DE Wiki Container] *****************************************************\r\nchanged: [Wiki_Virtual]\r\n\r\nTASK [Rebuild the DE Wiki Container] ****************************************************\r\nok: [Wiki_Virtual]\r\n\r\nTASK [Remove the FR Wiki Container] *****************************************************\r\nchanged: [Wiki_Virtual]\r\n\r\nTASK [Run the FR Wiki Container] ********************************************************\r\nok: [Wiki_Virtual]\r\n\r\nPLAY RECAP ******************************************************************************\r\nWiki_Virtual             : ok=8    changed=3    unreachable=0    failed=0    skipped=1 \n"})})]})}function d(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},39241:(n,e,i)=>{i.d(e,{A:()=>r});const r=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e12a28f9c35f9ae6e3540843545ced7e.jpg"},28453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var r=i(296540);const a={},t=r.createContext(a);function s(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);