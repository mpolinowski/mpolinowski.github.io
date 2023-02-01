"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[4969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=a,k=m["".concat(c,".").concat(h)]||m[h]||l[h]||r;return n?o.createElement(k,s(s({ref:t},d),{},{components:n})):o.createElement(k,s({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71476:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:4020,slug:"2022-10-25",title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","osTicket"],description:"Porting a OSTicket/MariaDB helpdesk service from Docker-Compose to Nomad"},s=void 0,i={unversionedId:"DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index",id:"DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index",title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",description:"Porting a OSTicket/MariaDB helpdesk service from Docker-Compose to Nomad",source:"@site/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index.md",sourceDirName:"DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii",slug:"/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/2022-10-25",permalink:"/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/2022-10-25",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"osTicket",permalink:"/docs/tags/os-ticket"}],version:"current",sidebarPosition:4020,frontMatter:{sidebar_position:4020,slug:"2022-10-25",title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","osTicket"],description:"Porting a OSTicket/MariaDB helpdesk service from Docker-Compose to Nomad"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to run periodic backups",permalink:"/docs/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/2022-11-11"},next:{title:"Hashicorp Nomad - Working with Ports",permalink:"/docs/DevOps/Hashicorp/2022-10-23-hashicorp-nomad-ports/2022-10-23"}},c={},p=[{value:"Complete Nomad Job File",id:"complete-nomad-job-file",level:2}],d={toc:p};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shen Zhen, China",src:n(8337).Z,width:"2230",height:"839"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#complete-nomad-job-file"},"Complete Nomad Job File"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/osticket-nomad"},"Github Repository")),(0,a.kt)("p",null,"I have a ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2022-10-16--os-ticket-docker/2022-10-16#docker-compose"},"Docker-Compose File")," that allows me to provision an instance of the OSTicket Helpdesk with a MariaDB backend. I then ported it to Nomad. But I am still ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2022-10-21-hashicorp-nomad-for-osticket-part-i/2022-10-21"},"struggling with connecting the OSTicket Frontend to the MariaDB backend"),". The following solution uses the host network stack to allow both services to connect (the next step is to use ",(0,a.kt)("strong",{parentName:"p"},"Consul Connect"),"). I am using the ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2022-10-22-hashicorp-nomad-sidecar-pattern/2022-10-22"},"Sidecar Pattern")," to combine both tasks - frontend and backend - into a single ",(0,a.kt)("strong",{parentName:"p"},"Nomad Job"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(83782).Z,width:"1134",height:"855"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(7027).Z,width:"1131",height:"890"})),(0,a.kt)("p",null,"The Nomad ",(0,a.kt)("strong",{parentName:"p"},"Service Stanza")," allows me to monitor both application and make sure they remain running:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(20135).Z,width:"1132",height:"865"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Hashicorp Nomad to set up an OSTicket Helpdesk",src:n(57094).Z,width:"1135",height:"824"})),(0,a.kt)("h2",{id:"complete-nomad-job-file"},"Complete Nomad Job File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'job "osticket" {\n  datacenters = ["mydatacenter"]\n    group "osticket" {\n        \n        network {\n            mode = "host"\n            port "tcp" {\n                static = 3306\n            }\n            port "http" {\n                static = 8080\n            }\n        }\n\n        update {\n            max_parallel = 1\n            min_healthy_time  = "10s"\n            healthy_deadline  = "5m"\n            progress_deadline = "10m"\n            auto_revert = true\n            auto_promote = true\n            canary = 1\n        }\n\n        volume "osticket_db" {\n            type      = "host"\n            read_only = false\n            source    = "osticket_db"\n        }\n\n        restart {\n            attempts = 10\n            interval = "5m"\n            delay    = "25s"\n            mode     = "delay"\n        }\n\n        service {\n            name = "osticket-db"\n            port = "tcp"\n            tags = [\n                "database"\n            ]\n\n            check {\n                name     = "DB Health"\n                port     = "tcp"\n                type     = "tcp"\n                interval = "30s"\n                timeout  = "4s"\n            }\n        }\n\n        service {\n            name = "osticket-frontend"\n            port = "http"\n            tags = [\n                "frontend"\n            ]\n\n            check {\n                name     = "HTTP Health"\n                path     = "/"\n                type     = "http"\n                protocol = "http"\n                interval = "10s"\n                timeout  = "2s"\n            }\n        }\n\n        task "osticket-db" {\n            driver = "docker"\n\n            config {\n                image = "mariadb:latest"\n                ports = ["tcp"]\n                network_mode = "host"\n                force_pull = false\n            }\n\n            volume_mount {\n                volume      = "osticket_db"\n                destination = "/var/lib/mysql" #<-- in the container\n                read_only   = false\n            }\n\n            env {\n                MYSQL_ROOT_PASSWORD = "secret"\n                MYSQL_USER = "osticket"\n                MYSQL_PASSWORD = "secret"\n                MYSQL_DATABASE = "osticket"\n                CONTAINER_NAME = "127.0.0.1"\n            }\n        }\n\n        task "osticket-frontend" {\n            driver = "docker"\n\n            config {\n                image = "my.gitlab.com:12345/server_management/osticket-docker:latest"\n                ports = ["http"]\n                network_mode = "host"\n                force_pull = false\n\n                auth {\n                    username = "mygitlabuser"\n                    password = "asecretpassword"\n                }\n            }\n\n            env {\n                MYSQL_USER = "osticket"\n                MYSQL_HOST = "127.0.0.1"\n                MYSQL_PASSWORD = "secret"\n                MYSQL_DATABASE = "osticket"\n            }\n        }\n    }\n}\n')))}l.isMDXComponent=!0},83782:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_01-272c45c80723029d429da4624dc51588.png"},7027:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_02-8411f0946cce4c1999861d6d7cb1905d.png"},20135:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_03-ff9396047e4655b4753aeafc8b8d561f.png"},57094:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Hashicorp-Nomad-for-OSTicket_04-bad5bde77c62786b31d3dcdcdc7dd185.png"},8337:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);