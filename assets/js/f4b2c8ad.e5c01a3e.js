"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[76395],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>d});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=r,k=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return a?t.createElement(k,i(i({ref:n},p),{},{components:a})):t.createElement(k,i({ref:n},p))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},6837:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=a(87462),r=(a(67294),a(3905));const o={sidebar_position:8040,slug:"2021-08-06",title:"Hashicorp Consul Refresher - Loadbalancing with Traefik",authors:"mpolinowski",tags:["Consul","Nomad","Linux","Traefik"]},i=void 0,s={unversionedId:"DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/index",id:"DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/index",title:"Hashicorp Consul Refresher - Loadbalancing with Traefik",description:"Tsim Sha Tsui, Hongkong",source:"@site/docs/DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/index.md",sourceDirName:"DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing",slug:"/DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/2021-08-06",permalink:"/docs/DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/2021-08-06",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2021-08-06--hashicorp-consul-traefik-loadbalancing/index.md",tags:[{label:"Consul",permalink:"/docs/tags/consul"},{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Linux",permalink:"/docs/tags/linux"},{label:"Traefik",permalink:"/docs/tags/traefik"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2021-08-06",title:"Hashicorp Consul Refresher - Loadbalancing with Traefik",authors:"mpolinowski",tags:["Consul","Nomad","Linux","Traefik"]},sidebar:"tutorialSidebar",previous:{title:"Nomad Job Configuration",permalink:"/docs/DevOps/Hashicorp/2021-08-07--hashicorp-nomad-job-configuration/2021-08-07"},next:{title:"Hashicorp Consul Refresher - Loadbalancing with Fabio",permalink:"/docs/DevOps/Hashicorp/2021-08-06--hashicorp-consul-fabio-loadbalancing/2021-08-06"}},l={},c=[{value:"Load Balancing with Traefik",id:"load-balancing-with-traefik",level:2},{value:"Create the Web Service",id:"create-the-web-service",level:3},{value:"Create and run a Traefik job",id:"create-and-run-a-traefik-job",level:3}],p={toc:c};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tsim Sha Tsui, Hongkong",src:a(5747).Z,width:"1500",height:"461"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#load-balancing-with-traefik"},"Load Balancing with Traefik"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-the-web-service"},"Create the Web Service")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-and-run-a-traefik-job"},"Create and run a Traefik job"))))),(0,r.kt)("h2",{id:"load-balancing-with-traefik"},"Load Balancing with Traefik"),(0,r.kt)("p",null,"The main use case for ",(0,r.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik")," in this scenario is to distribute incoming HTTP(S) and TCP requests from the Internet to front-end services that can handle these requests. ",(0,r.kt)("a",{parentName:"p",href:"https://learn.hashicorp.com/tutorials/nomad/load-balancing-traefik?in=nomad/load-balancing"},"Traefik can natively integrate with Consul")," using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.traefik.io/providers/consul-catalog/"},"Consul Catalog Provider")," and can use tags to route traffic."),(0,r.kt)("h3",{id:"create-the-web-service"},"Create the Web Service"),(0,r.kt)("p",null,"I am going to modify the ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2021-08-05--hashicorp-consul-service-discovery/2021-08-05"},"HTTP Echo service I created earlier")," to be load balanced by Traefik:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'job "http-echo-gui" {\n  datacenters = ["instaryun"]\n\n  group "echo" {\n\n    count = 1\n\n    network {\n      port  "http"{\n        to = -1\n      }\n    }\n\n    service {\n      name = "echo-webapp"\n      port = "http"\n\n      tags = [\n        "traefik.enable=true",\n        "traefik.http.routers.http.rule=Path(`/echo`)",\n      ]\n\n      check {\n        type     = "http"\n        path     = "/"\n        interval = "2s"\n        timeout  = "2s"\n      }\n    }\n\n    task "server" {\n      driver = "docker"\n      config {\n        image = "hashicorp/http-echo:latest"\n        ports = ["http"]\n        args  = [\n          "-listen", ":${NOMAD_PORT_http}",\n          "-text", "${attr.os.name}: server running on ${NOMAD_IP_http} with port ${NOMAD_PORT_http}",\n        ]\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,'Note that this job only deploys 1 instance of the Echo web application which I will "load balance" with Traefik in the next few steps. Obviously, you should increase this count to have this make sense... but I only have two LINUX PCs running at the moment and so my "Datacenter" consists of a single minion server.'),(0,r.kt)("p",null,"The job uses tags to configure routing to the web app. Even though the application listens on ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", it is possible to define ",(0,r.kt)("inlineCode",{parentName:"p"},"/echo")," as the route because of the Path option."),(0,r.kt)("p",null,"I will deploy the web application using the Nomad UI:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hashicorp Consul Traefik Loadbalancer",src:a(27508).Z,width:"1245",height:"679"})),(0,r.kt)("p",null,"Unlike before - when I set a static port for the web app - now it received a dynamic port from Nomad ",(0,r.kt)("inlineCode",{parentName:"p"},"26137")," that is bound to the local IP of my server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n\nCONTAINER ID   IMAGE                        PORTS\n367c94939c8e   hashicorp/http-echo:latest   5678/tcp, 192.168.2.111:26137->26137/tcp, 192.168.2.111:26137->26137/udp\n")),(0,r.kt)("p",null,"You can verify in Consul that the service is up and running:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hashicorp Consul Traefik Loadbalancer",src:a(64457).Z,width:"1303",height:"821"})),(0,r.kt)("h3",{id:"create-and-run-a-traefik-job"},"Create and run a Traefik job"),(0,r.kt)("p",null,"Create a job named:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano ~/nomad_jobs/traefik.nomad\n")),(0,r.kt)("p",null,"This job starts an instance of Traefik and configures it to discover its configuration from Consul. This Traefik instance provides routing and load balancing to the sample web application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'job "traefik" {\n  region      = "global"\n  datacenters = ["instaryun"]\n  type        = "service"\n\n  group "traefik" {\n    count = 1\n\n    network {\n      port "http" {\n        static = 8080\n      }\n\n      port "api" {\n        static = 8081\n      }\n    }\n\n    service {\n      name = "traefik"\n\n      check {\n        name     = "alive"\n        type     = "tcp"\n        port     = "http"\n        interval = "10s"\n        timeout  = "2s"\n      }\n    }\n\n    task "traefik" {\n      driver = "docker"\n\n      config {\n        image        = "traefik:v2.2"\n        network_mode = "host"\n\n        volumes = [\n          "local/traefik.toml:/etc/traefik/traefik.toml",\n        ]\n      }\n\n      template {\n        data = <<EOF\n[entryPoints]\n    [entryPoints.http]\n    address = ":8080"\n    [entryPoints.traefik]\n    address = ":8081"\n\n[api]\n    dashboard = true\n    insecure  = true\n\n# Enable Consul Catalog configuration backend.\n[providers.consulCatalog]\n    prefix           = "traefik"\n    exposedByDefault = false\n\n    [providers.consulCatalog.endpoint]\n      address = "127.0.0.1:8500"\n      scheme  = "http"\nEOF\n\n        destination = "local/traefik.toml"\n      }\n\n      resources {\n        cpu    = 100\n        memory = 128\n      }\n    }\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'nomad plan nomad_jobs/traefik.nomad\n+ Job: "traefik"\n+ Task Group: "traefik" (1 create)\n  + Task: "traefik" (forces create)\n\nScheduler dry-run:\n- All tasks successfully allocated.\n\nTo submit the job with version verification run:\n\nnomad job run -check-index 0 nomad_jobs/traefik.nomad\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nomad job run -check-index 0 nomad_jobs/traefik.nomad\n\n\nDeployed\nTask Group  Desired  Placed  Healthy  Unhealthy  Progress Deadline\ntraefik     1        1       1        0          2021-09-03T13:12:15+08:00\n")),(0,r.kt)("p",null,"This configuration uses a static port for the load balancer to ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),". This allow you to query the service under the configured path ",(0,r.kt)("inlineCode",{parentName:"p"},"/echo"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://192.168.2.111:8080/echo\n\ndebian: server running on 192.168.2.111 with port 26137\n")),(0,r.kt)("p",null,"You can see that the service is still running on port ",(0,r.kt)("inlineCode",{parentName:"p"},"26137")," but is now proxied through Traefik on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8080")," and - in theory - would also be loadbalanced, once you start more than 1 instance of the web service."),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Traefik Dashboard")," is now running on port ",(0,r.kt)("inlineCode",{parentName:"p"},"8081")," on my minion - Make sure that ",(0,r.kt)("strong",{parentName:"p"},"both ports are opened in your minions firewall"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hashicorp Consul Traefik Loadbalancer",src:a(82481).Z,width:"1255",height:"661"})))}u.isMDXComponent=!0},27508:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Hashicorp_Consul_Traefik_01-e8d7b535e0266b14a8de077b98acf0ac.png"},64457:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Hashicorp_Consul_Traefik_02-782d8e337302c950d1ba75fe3694028a.png"},82481:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/Hashicorp_Consul_Traefik_03-ae9d4aa4ae2d1a9c7aa0c65e44d635a1.png"},5747:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-11f46a2aa16d04d5dd9b5dc1c7c256c1.jpg"}}]);