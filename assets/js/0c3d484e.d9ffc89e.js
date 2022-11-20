"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[5177],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return t?o.createElement(h,i(i({ref:n},c),{},{components:t})):o.createElement(h,i({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},45896:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const a={sidebar_position:3960,slug:"2022-11-18",title:"Deploy Grav CMS with Hashicorp Nomad",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"],description:"Using Nomad to deploy the Grav open source flat-file CMS"},i=void 0,s={unversionedId:"DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav/index",id:"DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav/index",title:"Deploy Grav CMS with Hashicorp Nomad",description:"Using Nomad to deploy the Grav open source flat-file CMS",source:"@site/docs/DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav/index.md",sourceDirName:"DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav",slug:"/DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav/2022-11-18",permalink:"/docs/DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav/2022-11-18",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-11-18-hashicorp-nomad-grav/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:3960,frontMatter:{sidebar_position:3960,slug:"2022-11-18",title:"Deploy Grav CMS with Hashicorp Nomad",authors:"mpolinowski",tags:["Nomad","Consul","LINUX"],description:"Using Nomad to deploy the Grav open source flat-file CMS"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp",permalink:"/docs/category/hashicorp"},next:{title:"Deploy Mautic with Hashicorp Nomad",permalink:"/docs/DevOps/Hashicorp/2022-11-16-hashicorp-nomad-mautic/2022-11-16"}},l={},p=[{value:"Docker-Compose",id:"docker-compose",level:2},{value:"Nomad Job",id:"nomad-job",level:2},{value:"Complete Job File",id:"complete-job-file",level:3}],c={toc:p};function d(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shen Zhen, China",src:t(79565).Z,width:"2230",height:"839"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-compose"},"Docker-Compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nomad-job"},"Nomad Job"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#complete-job-file"},"Complete Job File"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://getgrav.org/"},"Grav")," is a Fast, Simple, and Flexible file-based Web-platform."),(0,r.kt)("h2",{id:"docker-compose"},"Docker-Compose"),(0,r.kt)("p",null,"To test the container we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"docker compose up -d")," - make sure the ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt/grav/config")," dir exists and can be written to by your Docker user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'version: "3.9"\n\nservices:\n  grav:\n    image: linuxserver/grav:latest\n    container_name: grav\n    environment:\n      - PUID=1000\n      - PGID=1000\n      - TZ=America/New_York\n    volumes:\n      - /opt/grav/config:/config\n    ports:\n      - 8080:80\n    restart: unless-stopped\n')),(0,r.kt)("h2",{id:"nomad-job"},"Nomad Job"),(0,r.kt)("p",null,"In Nomad we first need to create the volumes on our host in ",(0,r.kt)("em",{parentName:"p"},"/etc/nomad.d/client.hcl")," and then define it here:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'volume "grav_config" {\n    type      = "host"\n    read_only = false\n    source    = "grav_config"\n}\n')),(0,r.kt)("p",null,"It can then be mounted into the container:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'volume_mount {\n    volume      = "grav_config"\n    destination = "/config"\n    read_only   = false\n}\n')),(0,r.kt)("h3",{id:"complete-job-file"},"Complete Job File"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'job "grav" {\n  datacenters = ["dc1"]\n    group "grav" {\n        \n        network {\n            mode = "host"\n            port "http" {\n                to = 80\n            }\n        }\n\n        update {\n            max_parallel = 1\n            min_healthy_time  = "10s"\n            healthy_deadline  = "5m"\n            progress_deadline = "10m"\n            auto_revert = true\n            auto_promote = true\n            canary = 1\n        }\n\n        restart {\n            attempts = 10\n            interval = "5m"\n            delay    = "25s"\n            mode     = "delay"\n        }\n\n        volume "grav_config" {\n            type      = "host"\n            read_only = false\n            source    = "grav_config"\n        }\n\n        service {\n            name = "grav-frontend"\n            port = "http"\n            tags = [\n                "frontend"\n            ]\n\n            check {\n                name     = "HTTP Health"\n                path     = "/"\n                type     = "http"\n                protocol = "http"\n                interval = "10s"\n                timeout  = "2s"\n            }\n        }\n\n        task "grav-frontend" {\n            driver = "docker"\n\n            volume_mount {\n                volume      = "grav_config"\n                destination = "/config"\n                read_only   = false\n            }\n\n            config {\n                image = "linuxserver/grav:latest"\n                ports = ["http"]\n                network_mode = "host"\n                force_pull = false\n            }\n\n            env {\n              PUID= "1000"\n              PGID= "1000"\n              TZ = "America/New_York"\n            }\n\n            resources {\n                cpu    = 100\n                memory = 300\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy the Grav CMS with Hashicorp Nomad",src:t(61584).Z,width:"1103",height:"725"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deploy the Grav CMS with Hashicorp Nomad",src:t(51083).Z,width:"1458",height:"890"})))}d.isMDXComponent=!0},61584:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Grav_CMS_with_Docker_01-4cd4007a3b2e869f54310be6eba679af.png"},51083:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Grav_CMS_with_Docker_02-dba3ba5b869bc0f30eb9fe168bf89575.png"},79565:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"}}]);