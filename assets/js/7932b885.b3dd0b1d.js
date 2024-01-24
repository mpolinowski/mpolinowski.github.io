"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[60052],{728926:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var r=i(785893),s=i(603905);const a={sidebar_position:9030,slug:"2020-11-25",title:"Ansible in Gitlab CI Pipelines",authors:"mpolinowski",tags:["LINUX","Ansible","Gitlab"]},l=void 0,t={id:"DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci/index",title:"Ansible in Gitlab CI Pipelines",description:"Shenzhen, China",source:"@site/docs/DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci/index.md",sourceDirName:"DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci",slug:"/DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci/2020-11-25",permalink:"/docs/DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci/2020-11-25",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Ansible/2020-11-25--ansible-in-gitlab-ci/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Ansible",permalink:"/docs/tags/ansible"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2020-11-25",title:"Ansible in Gitlab CI Pipelines",authors:"mpolinowski",tags:["LINUX","Ansible","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Ansible Docker-in-Docker",permalink:"/docs/DevOps/Ansible/2020-11-26--ansible-dind/2020-11-26"},next:{title:"Ansible Vault for User Logins",permalink:"/docs/DevOps/Ansible/2020-11-24--ansible-vault-user-login/2020-11-24"}},o={},d=[{value:"Preparing the Ansible Container",id:"preparing-the-ansible-container",level:2},{value:"Downloading the Ansible Image",id:"downloading-the-ansible-image",level:3},{value:"Adding the SSH Key",id:"adding-the-ssh-key",level:3},{value:"Copying your Playbooks",id:"copying-your-playbooks",level:3},{value:"Adding your Hosts",id:"adding-your-hosts",level:3},{value:"Test Ping",id:"test-ping",level:4},{value:"Using a Playbooks",id:"using-a-playbooks",level:2},{value:"Update Docker Container",id:"update-docker-container",level:3},{value:"Update Git Repositories",id:"update-git-repositories",level:3},{value:"Committing your Changes",id:"committing-your-changes",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:i(487557).Z+"",width:"1500",height:"676"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#preparing-the-ansible-container",children:"Preparing the Ansible Container"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#downloading-the-ansible-image",children:"Downloading the Ansible Image"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#adding-the-ssh-key",children:"Adding the SSH Key"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#copying-your-playbooks",children:"Copying your Playbooks"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#adding-your-hosts",children:"Adding your Hosts"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#test-ping",children:"Test Ping"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#using-a-playbooks",children:"Using a Playbooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#update-docker-container",children:"Update Docker Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#update-git-repositories",children:"Update Git Repositories"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#committing-your-changes",children:"Committing your Changes"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"preparing-the-ansible-container",children:"Preparing the Ansible Container"}),"\n",(0,r.jsx)(n.h3,{id:"downloading-the-ansible-image",children:"Downloading the Ansible Image"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/williamyeh/ansible/tags?page=1&ordering=last_updated",children:"https://hub.docker.com/r/williamyeh/ansible/tags?page=1&ordering=last_updated"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull williamyeh/ansible:alpine3\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -ti  ID /bin/ash\n"})}),"\n",(0,r.jsx)(n.h3,{id:"adding-the-ssh-key",children:"Adding the SSH Key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apk add --no-cache --update openssh-keygen openssh-client\r\nssh-keygen -t rsa -b 2048\r\nchmod 0400 $HOME/.ssh/id_rsa.pub\r\nchmod 600 ~/.ssh/authorized_keys\r\nchmod 0700 $HOME/.ssh/\r\nssh-copy-id root@SERVER-IP -p PORT\n"})}),"\n",(0,r.jsx)(n.p,{children:"OR"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cat ~/.ssh/id_rsa.pub //add to =>\r\nnano /root/.ssh/authorized_keys //on destination server\n"})}),"\n",(0,r.jsx)(n.h3,{id:"copying-your-playbooks",children:"Copying your Playbooks"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker cp /opt/ansible/playbooks/. CONTAINER-ID:/root/playbooks\n"})}),"\n",(0,r.jsx)(n.h3,{id:"adding-your-hosts",children:"Adding your Hosts"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /etc/ansible/hosts\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"localhost\r\n\r\n[webservers]\r\nalpha.example.org\n"})}),"\n",(0,r.jsx)(n.h4,{id:"test-ping",children:"Test Ping"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'ansible webservers -m ping\r\n\r\nalpha.example.org | SUCCESS => {\r\n    "changed": false, \r\n    "ping": "pong"\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"using-a-playbooks",children:"Using a Playbooks"}),"\n",(0,r.jsx)(n.h3,{id:"update-docker-container",children:"Update Docker Container"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /root/playbooks/update_wiki_en.yml --vault-password-file /root/playbooks/vault_pass\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'---\r\n- hosts: wiki\r\n  gather_facts: no\r\n\r\n  tasks:\r\n\r\n    - name: Include vault for registry login\r\n      include_vars:\r\n        file: login_vault.yml\r\n\r\n    - name: Log into Docker Registry and force re-authorization\r\n      docker_login:\r\n        registry: my.gitlab.de:12345\r\n        username: "{{ansible_gitlab_user}}"\r\n        password: "{{ansible_gitlab_pass}}"\r\n        reauthorize: yes\r\n\r\n    - name: Download the latest Wiki build images\r\n      shell: docker pull my.gitlab.de:12345/wiki/wiki_en_container\r\n  \r\n    - name: Remove the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        state: absent\r\n  \r\n    - name: Rebuild the EN Wiki Container\r\n      docker_container:\r\n        name: wiki_en\r\n        image: my.gitlab.de:12345/wiki/wiki_en_container\r\n        state: started\r\n        restart_policy: unless-stopped\r\n        networks:\r\n          - name: gateway\n'})}),"\n",(0,r.jsx)(n.h3,{id:"update-git-repositories",children:"Update Git Repositories"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ansible-playbook /root/playbooks/update_wiki_downloads.yml --vault-password-file /root/playbooks/vault_pass\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"---\r\n- hosts: wiki\r\n  gather_facts: no\r\n\r\n  tasks:\r\n\r\n    - name: Include vault for registry login\r\n      include_vars:\r\n        file: login_vault.yml\r\n\r\n    - name: Get updated files from git repository \r\n      git: \r\n        repo: https://{{ ansible_gitlab_user | urlencode }}:{{ ansible_gitlab_pass | urlencode }}@my.gitlab.de/wiki/wiki_downloads.git\r\n        dest: /opt/wiki_downloads\n"})}),"\n",(0,r.jsx)(n.h2,{id:"committing-your-changes",children:"Committing your Changes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker ps                                                                                                                               \r\nCONTAINER ID   IMAGE         COMMAND\r\nb0368c583033   4b5bd4d797fd  "/bin/ash"\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker commit -m "Ansible Configured" -a "Mike Polinowski" b0368c583033 ansible-runner\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker images\r\n\r\nREPOSITORY        TAG         IMAGE ID\r\nansible-runner    latest      9e065e284b6f\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -ti ansible-runner /bin/ash\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>d});var r=i(667294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function t(e,n){if(null==e)return{};var i,r,s=function(e,n){if(null==e)return{};var i,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var o=r.createContext({}),d=function(e){var n=r.useContext(o),i=n;return e&&(i="function"==typeof e?e(n):l(l({},n),e)),i},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var i=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,h=t(e,["components","mdxType","originalType","parentName"]),p=d(i),g=s,u=p["".concat(o,".").concat(g)]||p[g]||c[g]||a;return i?r.createElement(u,l(l({ref:n},h),{},{components:i})):r.createElement(u,l({ref:n},h))}));h.displayName="MDXCreateElement"},487557:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e12a28f9c35f9ae6e3540843545ced7e.jpg"}}]);