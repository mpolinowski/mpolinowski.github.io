"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[23940],{522399:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=o(474848),s=o(28453);const i={sidebar_position:6020,slug:"2022-05-17",title:"Hashicorp Nomad Deployment",authors:"mpolinowski",tags:["Nomad","LINUX"]},a=void 0,r={id:"DevOps/Hashicorp/2022-05-17-hashicorp-dojo-nomad-deployment/index",title:"Hashicorp Nomad Deployment",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-17-hashicorp-dojo-nomad-deployment/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-17-hashicorp-dojo-nomad-deployment",slug:"/DevOps/Hashicorp/2022-05-17-hashicorp-dojo-nomad-deployment/2022-05-17",permalink:"/docs/DevOps/Hashicorp/2022-05-17-hashicorp-dojo-nomad-deployment/2022-05-17",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-17-hashicorp-dojo-nomad-deployment/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:6020,frontMatter:{sidebar_position:6020,slug:"2022-05-17",title:"Hashicorp Nomad Deployment",authors:"mpolinowski",tags:["Nomad","LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad Adding Encryption to your Cluster",permalink:"/docs/DevOps/Hashicorp/2022-05-18-hashicorp-dojo-nomad-adding-encryption/2022-05-18"},next:{title:"Hashicorp Nomad Dojo",permalink:"/docs/DevOps/Hashicorp/2022-05-16-hashicorp-dojo-nomad-starter/2022-05-16"}},d={},c=[{value:"Deploying a Job to a Multi-Cluster Node",id:"deploying-a-job-to-a-multi-cluster-node",level:2},{value:"Planning",id:"planning",level:3},{value:"Running",id:"running",level:3},{value:"Allocating a Static Service Port to the Frontend Container",id:"allocating-a-static-service-port-to-the-frontend-container",level:3},{value:"Testing the Allocation",id:"testing-the-allocation",level:4},{value:"Scaling the Deployment",id:"scaling-the-deployment",level:2},{value:"Dynamic Port Allocation",id:"dynamic-port-allocation",level:3}];function l(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Shen Zhen, China",src:o(525245).A+"",width:"2230",height:"839"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"#deploying-a-job-to-a-multi-cluster-node",children:"Deploying a Job to a Multi-Cluster Node"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#planning",children:"Planning"})}),"\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#running",children:"Running"})}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"#allocating-a-static-service-port-to-the-frontend-container",children:"Allocating a Static Service Port to the Frontend Container"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#testing-the-allocation",children:"Testing the Allocation"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"#scaling-the-deployment",children:"Scaling the Deployment"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#dynamic-port-allocation",children:"Dynamic Port Allocation"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["Continuation of ",(0,t.jsx)(e.a,{href:"/docs/DevOps/Hashicorp/2022-05-16-hashicorp-dojo-nomad-starter/2022-05-16",children:"Hashicorp Nomad Dojo"})]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"deploying-a-job-to-a-multi-cluster-node",children:"Deploying a Job to a Multi-Cluster Node"}),"\n",(0,t.jsxs)(e.p,{children:["When we now execute the planning and run command for the template job ",(0,t.jsx)(e.code,{children:"frontend.nomad"})," it will now be deployed to our new minion node instead of the ",(0,t.jsx)(e.strong,{children:"MASTER"}),":"]}),"\n",(0,t.jsx)(e.h3,{id:"planning",children:"Planning"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'nomad plan frontend.nomad\n\n+ Job: "frontend"\n+ Task Group: "frontend" (1 create)\n  + Task: "frontend" (forces create)\n\nScheduler dry-run:\n- All tasks successfully allocated.\n\nJob Modify Index: 0\nTo submit the job with version verification run:\n\nnomad job run -check-index 0 frontend.nomad\n'})}),"\n",(0,t.jsx)(e.h3,{id:"running",children:"Running"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'nomad job run -check-index 0 frontend.nomad\n\n==> 2022-06-05T12:02:58+02:00: Monitoring evaluation "1d55c9e3"\n    2022-06-05T12:02:58+02:00: Evaluation triggered by job "frontend"\n==> 2022-06-05T12:02:59+02:00: Monitoring evaluation "1d55c9e3"\n    2022-06-05T12:02:59+02:00: Evaluation within deployment: "5b251061"\n    2022-06-05T12:02:59+02:00: Allocation "b6e8c543" created: node "005f708b", group "frontend"\n    2022-06-05T12:02:59+02:00: Evaluation status changed: "pending" -> "complete"\n==> 2022-06-05T12:02:59+02:00: Evaluation "1d55c9e3" finished with status "complete"\n==> 2022-06-05T12:02:59+02:00: Monitoring deployment "5b251061"\n  \u2713 Deployment "5b251061" successful\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Run a ",(0,t.jsx)(e.code,{children:"docker ps"})," on the ",(0,t.jsx)(e.strong,{children:"MINION"})," and you will see that the docker frontend container has been deployed:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker ps\n\nCONTAINER ID        IMAGE                           CREATED              STATUS\n33f1ddc027fa        thedojoseries/frontend:latest   About a minute ago   Up About a minute\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Hashicorp Nomad UI",src:o(635265).A+"",width:"1240",height:"831"})}),"\n",(0,t.jsx)(e.h3,{id:"allocating-a-static-service-port-to-the-frontend-container",children:"Allocating a Static Service Port to the Frontend Container"}),"\n",(0,t.jsxs)(e.p,{children:["We now deployed a frontend container based on the ",(0,t.jsx)(e.code,{children:"thedojoseries/frontend"})," docker image. This container exposes a web service on port ",(0,t.jsx)(e.code,{children:"8080"})," that we have to allocate to our deployment. This can be done by editing the job definition ",(0,t.jsx)(e.code,{children:"frontend.nomad"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'job "frontend" {\n  datacenters = ["instaryun"] \n  type = "service"\n\n  group "frontend" {\n    count = 1\n\n    task "frontend" {\n        driver = "docker"\n\n        config {\n          image = "thedojoseries/frontend:latest"\n        }\n\n        resources {\n          network {\n            port "http" {\n              static = 8080\n            }\n          }\n        }\n      }\n   }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:"Re-run plan and deploy the new version:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"nomad plan frontend.nomad\nnomad job run -check-index 103 frontend.nomad\n"})}),"\n",(0,t.jsx)(e.p,{children:"This leads to a deprecation warning for the network resources (I will fix this a few steps further down):"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'Scheduler dry-run:\n- All tasks successfully allocated.\n\nJob Warnings:\n1 warning(s):\n\n* Group "frontend" has warnings: 1 error occurred:\n        * 1 error occurred:\n        * Task "frontend": task network resources have been deprecated as of Nomad 0.12.0. Please configure networking via group network block.\n'})}),"\n",(0,t.jsxs)(e.p,{children:["But running the job does work ",(0,t.jsx)(e.code,{children:"nomad job run -check-index 210 frontend.nomad"}),":"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Hashicorp Nomad UI",src:o(994186).A+"",width:"1232",height:"768"})}),"\n",(0,t.jsx)(e.h4,{id:"testing-the-allocation",children:"Testing the Allocation"}),"\n",(0,t.jsxs)(e.p,{children:["If you run a ",(0,t.jsx)(e.code,{children:"docker ps"})," on your minion you will see that Nomad bounded the port 8080 to the external IP of your server. This is why I at first failed when trying to access the frontend server on localhost ",(0,t.jsx)(e.code,{children:"curl localhost:8080"}),". I had to open the port 8080 and then use the external IP instead:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"ufw allow 8080/tcp\nufw reload\ncurl my.minion.com:8080\n"})}),"\n",(0,t.jsx)(e.p,{children:"This returns some HTML/JS code:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset="utf-8">\n  <title>frontend</title>\n</head>\n\n<body>\n  <div class="container">\n    <div id="app"></div>\n  </div>\n<script type="text/javascript" src="/app.js"><\/script></body>\n\n</html>\n'})}),"\n",(0,t.jsx)(e.p,{children:"That my browser displays as:"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Hashicorp Nomad UI",src:o(209747).A+"",width:"1054",height:"327"})}),"\n",(0,t.jsx)(e.h2,{id:"scaling-the-deployment",children:"Scaling the Deployment"}),"\n",(0,t.jsx)(e.p,{children:"In Nomad, it's possible to horizontally scale an application, meaning that whenever a condition is true, Nomad will start spinning up more copies of the same application across the cluster so that the load is spread more evenly. What you need to do next is to define a scaling stanza in frontend.nomad using the information below:"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"enabled"})," = ",(0,t.jsx)(e.code,{children:"true"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"min"})," = ",(0,t.jsx)(e.code,{children:"1"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"max"})," = ",(0,t.jsx)(e.code,{children:"3"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"policy"})," = "," (A policy meant to be used by the ",(0,t.jsx)(e.a,{href:"https://www.nomadproject.io/tools/autoscaling",children:"Nomad Autoscaler"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["I do not have the ",(0,t.jsx)(e.a,{href:"https://www.nomadproject.io/tools/autoscaling",children:"autoscaler"})," running and setting an empty object as policy here returns an error when I try to plan the job:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'Error getting job struct: Failed to parse using HCL 2. Use the HCL 1 parser with `nomad run -hcl1`, or address the following issues:\nfrontend.nomad:12,7-13: Unsupported argument; An argument named "policy" is not expected here. Did you mean to define a block of type "policy"?\n'})}),"\n",(0,t.jsxs)(e.p,{children:["So I removed the policy completely and was able to run the ",(0,t.jsx)(e.code,{children:"nomad plan frontend.nomad"})," command. Without a policy running this command only results in the minimum amount of instances to be started - there is no trigger to extend the deployment. ",(0,t.jsx)(e.strong,{children:"TODO"}),": I will have to look into ",(0,t.jsx)(e.a,{href:"https://www.nomadproject.io/tools/autoscaling",children:"Autoscaling"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'job "frontend" {\n  datacenters = ["instaryun"] \n  type = "service"\n\n  group "frontend" {\n    count = 2\n\n    scaling {\n      enabled = true\n      min     = 2\n      max     = 3\n    }\n\n    task "frontend" {\n        driver = "docker"\n\n        config {\n          image = "thedojoseries/frontend:latest"\n        }\n\n        resources {\n          network {\n            port "http" {\n              static = 8080\n            }\n          }\n        }\n      }\n   }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Running the job does show an issue here, though. Since the port ",(0,t.jsx)(e.code,{children:"8080"})," is hard coded running the command would end up in a port conflict where the second instance would crash as the port is already assigned to the first. The planning step would notice this issue and stop us from running the job. But since my minion server is configured to use ",(0,t.jsx)(e.strong,{children:"IPv6"})," and ",(0,t.jsx)(e.strong,{children:"IPv4"})," Nomad just spreads out the instances to those resources. Also, if I had more than 1 minion Nomad would ",(0,t.jsx)(e.strong,{children:"automatically de-conflict"})," the situation by using different hosts for each instance - love it!"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker ps\nCONTAINER ID        IMAGE                           PORTS\n7033df07401e        thedojoseries/frontend:latest   minion_ipv6:8080->8080/tcp\nb136c5ddd80e        thedojoseries/frontend:latest   minion_ipv4:8080->8080/tcp\n"})}),"\n",(0,t.jsx)(e.h3,{id:"dynamic-port-allocation",children:"Dynamic Port Allocation"}),"\n",(0,t.jsx)(e.p,{children:"To prevent this issue from showing up we can assign dynamic ports to our application:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'job "frontend" {\n  datacenters = ["instaryun"] \n  type = "service"\n\n  group "frontend" {\n    count = 2\n\n    scaling {\n      enabled = true\n      min     = 2\n      max     = 3\n    }\n\n    task "frontend" {\n        driver = "docker"\n\n        config {\n          image = "thedojoseries/frontend:latest"\n        }\n\n        resources {\n          network {\n            port "http" {}\n          }\n        }\n      }\n   }\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["This Nomad used random ports. Both on the IPv4 interface. But there is another problem. Our web application inside the docker container exposes it's service on port ",(0,t.jsx)(e.code,{children:"8080"}),". Which means those dynamic ports are actually going nowhere:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker ps\nCONTAINER ID        IMAGE                           PORTS\n6d15e57bd756        thedojoseries/frontend:latest   8080/tcp, minion_ipv4:25500->25500/tcp\n029aee103aa7        thedojoseries/frontend:latest   8080/tcp, minion_ipv4:22124->22124/tcp\n"})}),"\n",(0,t.jsxs)(e.p,{children:["We can fix ",(0,t.jsx)(e.a,{href:"https://discuss.hashicorp.com/t/simple-dynamic-port-mapping/25202/2",children:"this issue with"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:'job "frontend" {\n\tdatacenters = ["instaryun"]\n\n\tgroup "frontend" {\n    count = 2\n\n    scaling {\n      enabled = true\n      min     = 2\n      max     = 3\n    }\n        \n\t\tnetwork {\n\t\t\tmode = "host"\n\t\t\tport "http" {\n\t\t\t\tto = "8080"\n\t\t\t}\n\t\t}\n\n\t\ttask "app" {\n\t\t\tdriver = "docker"\n\n\t\t\tconfig {\n\t\t\t\timage = "thedojoseries/frontend:latest"\n\t\t\t\tports = ["http"]\n\t\t\t}\n\t\t}\n\t}\n}\n'})}),"\n",(0,t.jsxs)(e.p,{children:["Now we have two random ports on the outside, bound to the main IPv4 interface. And both are then directed to the internal service port ",(0,t.jsx)(e.code,{children:"8080"})," - yeah!"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"docker ps\nCONTAINER ID        IMAGE                           PORTS\naaa9650a9360        thedojoseries/frontend:latest   8080/tcp, minion_ipv4:29457->8080/tcp\n541b6f5caa47        thedojoseries/frontend:latest   8080/tcp, minion_ipv4:23526->8080/tcp\n"})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},635265:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/Hashicorp_Nomad_UI_01-3a62aec892f04f92839ade9277f476a1.png"},994186:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/Hashicorp_Nomad_UI_02-b5833e3efa3e3e69fbb280366f595550.png"},209747:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/Hashicorp_Nomad_UI_03-4620059d3c0b01f91fdf488e5e926770.png"},525245:(n,e,o)=>{o.d(e,{A:()=>t});const t=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"},28453:(n,e,o)=>{o.d(e,{R:()=>a,x:()=>r});var t=o(296540);const s={},i=t.createContext(s);function a(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);