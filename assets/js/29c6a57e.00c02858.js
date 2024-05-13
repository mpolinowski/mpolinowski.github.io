"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87965],{306209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=n(474848),s=n(28453);const a={sidebar_position:4020,slug:"2022-10-25",title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","osTicket"],description:"Porting a OSTicket/MariaDB helpdesk service from Docker-Compose to Nomad"},i=void 0,r={id:"DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index",title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",description:"Porting a OSTicket/MariaDB helpdesk service from Docker-Compose to Nomad",source:"@site/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index.md",sourceDirName:"DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii",slug:"/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/2022-10-25",permalink:"/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/2022-10-25",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"osTicket",permalink:"/docs/tags/os-ticket"}],version:"current",sidebarPosition:4020,frontMatter:{sidebar_position:4020,slug:"2022-10-25",title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","osTicket"],description:"Porting a OSTicket/MariaDB helpdesk service from Docker-Compose to Nomad"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to run periodic backups",permalink:"/docs/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/2022-11-11"},next:{title:"Hashicorp Nomad - Working with Ports",permalink:"/docs/DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/2022-10-23"}},c={},d=[{value:"Complete Nomad Job File",id:"complete-nomad-job-file",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Shen Zhen, China",src:n(907671).A+"",width:"2230",height:"839"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#complete-nomad-job-file",children:"Complete Nomad Job File"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/mpolinowski/osticket-nomad",children:"Github Repository"})}),"\n",(0,o.jsxs)(t.p,{children:["I have a ",(0,o.jsx)(t.a,{href:"/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/2022-10-16#docker-compose",children:"Docker-Compose File"})," that allows me to provision an instance of the OSTicket Helpdesk with a MariaDB backend. I then ported it to Nomad. But I am still ",(0,o.jsx)(t.a,{href:"/docs/DevOps/Hashicorp/2022-10-21-hashicorp-nomad-for-osticket-part-i/2022-10-21",children:"struggling with connecting the OSTicket Frontend to the MariaDB backend"}),". The following solution uses the host network stack to allow both services to connect (the next step is to use ",(0,o.jsx)(t.strong,{children:"Consul Connect"}),"). I am using the ",(0,o.jsx)(t.a,{href:"/docs/DevOps/Hashicorp/2022-10-22-hashicorp-nomad-sidecar-pattern/2022-10-22",children:"Sidecar Pattern"})," to combine both tasks - frontend and backend - into a single ",(0,o.jsx)(t.strong,{children:"Nomad Job"}),":"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(597565).A+"",width:"1134",height:"855"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(556326).A+"",width:"1131",height:"890"})}),"\n",(0,o.jsxs)(t.p,{children:["The Nomad ",(0,o.jsx)(t.strong,{children:"Service Stanza"})," allows me to monitor both application and make sure they remain running:"]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(595343).A+"",width:"1132",height:"865"})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(152496).A+"",width:"1135",height:"824"})}),"\n",(0,o.jsx)(t.h2,{id:"complete-nomad-job-file",children:"Complete Nomad Job File"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'job "osticket" {\n  datacenters = ["mydatacenter"]\n    group "osticket" {\n        \n        network {\n            mode = "host"\n            port "tcp" {\n                static = 3306\n            }\n            port "http" {\n                static = 8080\n            }\n        }\n\n        update {\n            max_parallel = 1\n            min_healthy_time  = "10s"\n            healthy_deadline  = "5m"\n            progress_deadline = "10m"\n            auto_revert = true\n            auto_promote = true\n            canary = 1\n        }\n\n        volume "osticket_db" {\n            type      = "host"\n            read_only = false\n            source    = "osticket_db"\n        }\n\n        restart {\n            attempts = 10\n            interval = "5m"\n            delay    = "25s"\n            mode     = "delay"\n        }\n\n        service {\n            name = "osticket-db"\n            port = "tcp"\n            tags = [\n                "database"\n            ]\n\n            check {\n                name     = "DB Health"\n                port     = "tcp"\n                type     = "tcp"\n                interval = "30s"\n                timeout  = "4s"\n            }\n        }\n\n        service {\n            name = "osticket-frontend"\n            port = "http"\n            tags = [\n                "frontend"\n            ]\n\n            check {\n                name     = "HTTP Health"\n                path     = "/"\n                type     = "http"\n                protocol = "http"\n                interval = "10s"\n                timeout  = "2s"\n            }\n        }\n\n        task "osticket-db" {\n            driver = "docker"\n\n            config {\n                image = "mariadb:latest"\n                ports = ["tcp"]\n                network_mode = "host"\n                force_pull = false\n            }\n\n            volume_mount {\n                volume      = "osticket_db"\n                destination = "/var/lib/mysql" #<-- in the container\n                read_only   = false\n            }\n\n            env {\n                MYSQL_ROOT_PASSWORD = "secret"\n                MYSQL_USER = "osticket"\n                MYSQL_PASSWORD = "secret"\n                MYSQL_DATABASE = "osticket"\n                CONTAINER_NAME = "127.0.0.1"\n            }\n        }\n\n        task "osticket-frontend" {\n            driver = "docker"\n\n            config {\n                image = "my.gitlab.com:12345/server_management/osticket-docker:latest"\n                ports = ["http"]\n                network_mode = "host"\n                force_pull = false\n\n                auth {\n                    username = "mygitlabuser"\n                    password = "asecretpassword"\n                }\n            }\n\n            env {\n                MYSQL_USER = "osticket"\n                MYSQL_HOST = "127.0.0.1"\n                MYSQL_PASSWORD = "secret"\n                MYSQL_DATABASE = "osticket"\n            }\n        }\n    }\n}\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},597565:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_01-272c45c80723029d429da4624dc51588.png"},556326:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_02-8411f0946cce4c1999861d6d7cb1905d.png"},595343:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_03-ff9396047e4655b4753aeafc8b8d561f.png"},152496:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_04-bad5bde77c62786b31d3dcdcdc7dd185.png"},907671:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var o=n(296540);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);