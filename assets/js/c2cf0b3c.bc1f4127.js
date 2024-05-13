"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[38159],{911499:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(474848),a=s(28453);const i={sidebar_position:5030,slug:"2022-05-27",title:"Hashicorp Nomad to set up an Elasticsearch Cluster",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","Elasticsearch"]},r="Elasticsearch",c={id:"DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index",title:"Hashicorp Nomad to set up an Elasticsearch Cluster",description:"Shen Zhen, China",source:"@site/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index.md",sourceDirName:"DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic",slug:"/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/2022-05-27",permalink:"/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/2022-05-27",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-05-27-hashicorp-nomad-for-elastic/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"Consul",permalink:"/docs/tags/consul"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:5030,frontMatter:{sidebar_position:5030,slug:"2022-05-27",title:"Hashicorp Nomad to set up an Elasticsearch Cluster",authors:"mpolinowski",tags:["Nomad","Consul","LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to set up an Elasticsearch Cluster Part II",permalink:"/docs/DevOps/Hashicorp/2022-05-28-hashicorp-nomad-for-elastic-part-2/2022-05-28"},next:{title:"App Deployment with Hashicorp Nomad from Gitlab Part Deux",permalink:"/docs/DevOps/Hashicorp/2022-05-26-hashicorp-nomad-with-gitlab-part-2/2022-05-26"}},o={},l=[{value:"Data Persistence",id:"data-persistence",level:2},{value:"Client Configuration",id:"client-configuration",level:3},{value:"Job Specification",id:"job-specification",level:3},{value:"Nomad Job",id:"nomad-job",level:2},{value:"Docker-Compose",id:"docker-compose",level:3},{value:"Job Specification",id:"job-specification-1",level:3},{value:"Run the Job File",id:"run-the-job-file",level:3},{value:"Elasticsearch Error Messages",id:"elasticsearch-error-messages",level:4},{value:"Adding Update Parameter",id:"adding-update-parameter",level:3},{value:"Adding Consul Service Discovery",id:"adding-consul-service-discovery",level:3},{value:"Complete Job File",id:"complete-job-file",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shen Zhen, China",src:s(335745).A+"",width:"2230",height:"839"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#elasticsearch",children:"Elasticsearch"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#data-persistence",children:"Data Persistence"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#client-configuration",children:"Client Configuration"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#job-specification",children:"Job Specification"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#nomad-job",children:"Nomad Job"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#docker-compose",children:"Docker-Compose"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#job-specification-1",children:"Job Specification"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#run-the-job-file",children:"Run the Job File"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#elasticsearch-error-messages",children:"Elasticsearch Error Messages"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#adding-update-parameter",children:"Adding Update Parameter"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#adding-consul-service-discovery",children:"Adding Consul Service Discovery"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#complete-job-file",children:"Complete Job File"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,t.jsx)(n.h2,{id:"data-persistence",children:"Data Persistence"}),"\n",(0,t.jsx)(n.h3,{id:"client-configuration",children:"Client Configuration"}),"\n",(0,t.jsxs)(n.p,{children:["First we need to create a volume that allows us to persist the data ingested by Elasticsearch. Add the following configs in your ",(0,t.jsx)(n.code,{children:"client.hcl"})," file [",(0,t.jsx)(n.a,{href:"https://www.nomadproject.io/docs/drivers/docker#client-requirements",children:"Plugin Stanza"})," | ",(0,t.jsx)(n.a,{href:"https://www.nomadproject.io/docs/configuration/client#host_volume-stanza",children:"Host Volume Stanza"}),"]:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"nano /etc/nomad.d/client.hcl"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'\nclient {\n  enabled = true\n  servers = ["myhost:port"]\n  host_volume "letsencrypt" {\n    path = "/etc/letsencrypt"\n    read_only = true\n  }\n  host_volume "es_data" {\n    path = "/opt/es_data"\n    read_only = false\n  }\n}\n\n# Docker Configuration\nplugin "docker" {\n    volumes {\n      enabled = true\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Restart the service ",(0,t.jsx)(n.code,{children:"service nomad restart"})," and verify that the volume was picked up (I already created the directory before restarting the service - I am not sure if this is necessary):"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nomad for Elasticsearch",src:s(642312).A+"",width:"1049",height:"100"})}),"\n",(0,t.jsx)(n.h3,{id:"job-specification",children:"Job Specification"}),"\n",(0,t.jsxs)(n.p,{children:["And then in the job specifications, inside the ",(0,t.jsx)(n.strong,{children:"Group Stanza"})," define the ",(0,t.jsx)(n.a,{href:"https://www.nomadproject.io/docs/job-specification/volume#volume-interpolation",children:"volume"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'volume "es_data" {\n     type      = "host"\n     read_only = false\n     source    = "es_data"\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["and then finally add following in the ",(0,t.jsx)(n.strong,{children:"Task Stanza"})," use the defined volume:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'volume_mount {\n      volume      = "es_data"\n      destination = "/usr/share/elasticsearch/data" #<-- in the container\n      read_only   = false\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"nomad-job",children:"Nomad Job"}),"\n",(0,t.jsx)(n.h3,{id:"docker-compose",children:"Docker-Compose"}),"\n",(0,t.jsxs)(n.p,{children:["I have been using a ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file before to set up a ELK cluster. The Elasticsearch part of looks like:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'services:\n  elasticsearch:\n    container_name: elasticsearch\n    restart: always\n    build:\n      context: elasticsearch/\n      args:\n        ELK_VERSION: $ELK_VERSION\n    volumes:\n      - type: bind\n        source: ./elasticsearch/config/elasticsearch.yml\n        target: /usr/share/elasticsearch/config/elasticsearch.yml\n        read_only: true\n      - type: volume\n        source: elasticsearch\n        target: /usr/share/elasticsearch/data\n      - type: bind\n        source: /opt/wiki_elk/snapshots\n        target: /snapshots\n    # ports:\n    #   - "9200:9200"\n    #   - "9300:9300"\n    environment:\n      # ES_JAVA_OPTS: "-Xmx256m -Xms256m"\n      ES_JAVA_OPTS: \'-Xms2g -Xmx2g\'\n      ELASTIC_PASSWORD: \'supersecretpassword\'\n      # Use single node discovery in order to disable production mode and avoid bootstrap checks\n      # see https://www.elastic.co/guide/en/elasticsearch/reference/current/bootstrap-checks.html\n      discovery.type: single-node\n    networks:\n      - wikinet\n'})}),"\n",(0,t.jsxs)(n.p,{children:["And the ",(0,t.jsx)(n.code,{children:"elasticsearch.yml"})," that is included in the image during the build process is:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'---\n## Default Elasticsearch configuration from Elasticsearch base image.\n## https://github.com/elastic/elasticsearch/blob/master/distribution/docker/src/docker/config/elasticsearch.yml\n#\ncluster.name: "docker-cluster"\n# network.host: _site_\nnetwork.host: 0.0.0.0\n\n## X-Pack settings\n## see https://www.elastic.co/guide/en/elasticsearch/reference/current/setup-xpack.html\n#\n# xpack.license.self_generated.type: trial\nxpack.license.self_generated.type: basic\nxpack.security.enabled: true\nxpack.monitoring.collection.enabled: true\nxpack.security.authc:\n    anonymous:\n      username: anonymous_user \n      roles: search_agent\n      authz_exception: true \n\n\n## CORS\nhttp.cors.enabled : true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\nhttp.cors.allow-credentials: true\nhttp.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept\n\n## Snapshots\npath.repo: ["/snapshots"]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"job-specification-1",children:"Job Specification"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'job "wiki_elastic" {\n  datacenters = ["wiki_search"]\n\n  group "elasticsearch" {\n    count = 1\n\n    network {\n        port "http" {\n              static = 9200\n          }\n          port "tcp" {\n              static = 9300\n          }\n    }\n\n    service {\n      name = "elasticsearch"\n    }\n\n    volume "es_data" {\n      type      = "host"\n      read_only = false\n      source    = "es_data"\n    }\n\n    task "elastic_container" {\n      driver = "docker"\n      kill_timeout = "600s"\n      kill_signal = "SIGTERM"\n\n      env {\n        ES_JAVA_OPTS = "-Xms2g -Xmx2g"\n        ELASTIC_PASSWORD = "mysecretpassword"\n        discovery.type=single-node\n      }\n\n      template {\n          data = <<EOH\nnetwork.host: 0.0.0.0\nxpack.license.self_generated.type: basic\nxpack.security.enabled: true\nxpack.monitoring.collection.enabled: true\nxpack.security.authc:\n    anonymous:\n      username: anonymous_user \n      roles: search_agent\n      authz_exception: true \n      \nhttp.cors.enabled : true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\nhttp.cors.allow-credentials: true\nhttp.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept\n\npath.repo: ["/snapshots"]\n          EOH\n  \n          destination = "local/elastic/elasticsearch.yml"\n        }\n\n      volume_mount {\n        volume      = "es_data"\n        destination = "/usr/share/elasticsearch/data" #<-- in the container\n        read_only   = false\n      }\n\n      config {\n        network_mode = "host"\n        image = "docker.elastic.co/elasticsearch/elasticsearch:8.3.2"\n        command = "elasticsearch"\n        ports = ["http","tcp"]\n        volumes = [\n          "local/elastic/snapshots:/snapshots",\n          "local/elastic/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml",\n        ]\n        args = [\n            "-Ecluster.name=wiki_elastic",\n            "-Ediscovery.type=single-node"\n        ]\n\n        ulimit {\n          memlock = "-1"\n          nofile = "65536"\n          nproc = "8192"\n        }\n      }\n\n      resources {\n        cpu    = 1000\n        memory = 4096\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"run-the-job-file",children:"Run the Job File"}),"\n",(0,t.jsx)(n.h4,{id:"elasticsearch-error-messages",children:"Elasticsearch Error Messages"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"java.lang.IllegalStateException: failed to obtain node locks, tried [/usr/share/elasticsearch/data]; maybe these locations are not writable\n"})}),"\n",(0,t.jsx)(n.p,{children:"Adjust write permission on volume mount:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"chmod -R 775 /opt/es_data\nchown 1000:1000 -R /opt/es_data\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"bootstrap check failure [1] of [1]: max virtual memory areas vm.max_map_count [65530] is too low, increase to at least [262144]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Insert the new entry into the ",(0,t.jsx)(n.code,{children:"/etc/sysctl.conf"})," file with the required parameter:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vm.max_map_count = 262144\n"})}),"\n",(0,t.jsx)(n.p,{children:"And run the following command to change the current state of kernel:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sysctl -w vm.max_map_count=262144\n"})}),"\n",(0,t.jsx)(n.p,{children:"Restart Docker to take note:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl restart docker\n"})}),"\n",(0,t.jsx)(n.p,{children:"Restarting the job and this time it looks good! The container is running and the Elasticsearch ERROR log is quiet:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker ps\ndocker.elastic.co/elasticsearch/elasticsearch:8.3.2 Up 2 minutes elastic_container-ea01e380-f381-2ac6-d88d-84e6cdf223a2\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Nomad for Elasticsearch",src:s(979171).A+"",width:"1209",height:"464"})}),"\n",(0,t.jsx)(n.h3,{id:"adding-update-parameter",children:"Adding Update Parameter"}),"\n",(0,t.jsx)(n.p,{children:"I want to add the Update Stanza:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'update {\n  max_parallel     = 1\n  health_check     = "checks"\n  min_healthy_time = "180s"\n  healthy_deadline = "5m"\n  progress_deadline = "10m"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"But this time I am not going to add the force-pull parameter to the docker service. As I am only going to update this service when a new version of Elasticsearch is being released."}),"\n",(0,t.jsx)(n.h3,{id:"adding-consul-service-discovery",children:"Adding Consul Service Discovery"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'service {\n  \n  check {\n      name     = "rest-http"\n      type     = "http"\n      port     = "http"\n      path     = "/"\n      interval = "30s"\n      timeout  = "4s"\n      header {\n        Authorization = ["Basic ZWxhc3RpYzpjaGFuZ2VtZQ=="]\n      }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Here I am getting an error message for the HTTP Rest health check in Consul:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'HTTP GET http://my.elasticsearch:9200/: 403 Forbidden Output: {"error":{"root_cause":[{"type":"security_exception","reason":"action [cluster:monitor/main] is unauthorized for user [anonymous_user] with roles [search_agent], this action is granted by the cluster privileges [monitor,manage,all]"}],"type":"security_exception","reason":"action [cluster:monitor/main] is unauthorized for user [anonymous_user] with roles [search_agent], this action is granted by the cluster privileges [monitor,manage,all]"},"status":403}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["But why do I have to provide a user authentication? Is being turned down because of an invalid login not proof that the HTTP service is running? You can add the authentication headers like (s. below) But I think I will change the ",(0,t.jsx)(n.code,{children:"path"})," to an index that can be read without authentication later:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'service {\n  \n  check {\n      name     = "rest-http"\n      type     = "http"\n      port     = "http"\n      path     = "/"\n      interval = "30s"\n      timeout  = "4s"\n      header {\n        Authorization = ["Basic ZWxhc3RpYzpjaGFuZ2VtZQ=="]\n      }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can also combine the HTTP with an TCP Check:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'service {\n  name = "elasticsearch"\n  check {\n    name     = "transport-tcp"\n    port     = "tcp"\n    type     = "tcp"\n    interval = "30s"\n    timeout  = "4s"\n  }\n  \n  # check {\n  #     name     = "rest-http"\n  #     type     = "http"\n  #     port     = "http"\n  #     path     = "/"\n  #     interval = "30s"\n  #     timeout  = "4s"\n  #   }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"complete-job-file",children:"Complete Job File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'job "wiki_elastic" {\n  type        = "service"\n  datacenters = ["wiki_search"]\n\n  update {\n    max_parallel     = 1\n    health_check     = "checks"\n    min_healthy_time = "180s"\n    healthy_deadline = "5m"\n    progress_deadline = "10m"\n    auto_revert = true\n    auto_promote = true\n    canary = 1\n  }\n\n  group "elasticsearch" {\n    count = 1\n\n    network {\n        port "http" {\n              static = 9200\n          }\n          port "tcp" {\n              static = 9300\n          }\n    }\n\n    volume "es_data" {\n      type      = "host"\n      read_only = false\n      source    = "es_data"\n    }\n\n    task "elastic_container" {\n      driver = "docker"\n      kill_timeout = "600s"\n      kill_signal = "SIGTERM"\n\n      env {\n        ES_JAVA_OPTS = "-Xms2g -Xmx2g"\n        ELASTIC_PASSWORD = "mysecretpassword"\n      }\n\n      template {\n          data = <<EOH\nnetwork.host: 0.0.0.0\ncluster.name: wiki_elastic\ndiscovery.type: single-node\nxpack.license.self_generated.type: basic\nxpack.security.enabled: true\nxpack.monitoring.collection.enabled: true\nxpack.security.authc:\n    anonymous:\n      username: anonymous_user \n      roles: search_agent\n      authz_exception: true \n      \nhttp.cors.enabled : true\nhttp.cors.allow-origin: "*"\nhttp.cors.allow-methods: OPTIONS, HEAD, GET, POST, PUT, DELETE\nhttp.cors.allow-credentials: true\nhttp.cors.allow-headers: X-Requested-With, X-Auth-Token, Content-Type, Content-Length, Authorization, Access-Control-Allow-Headers, Accept\n\npath.repo: ["/snapshots"]\n          EOH\n  \n          destination = "local/elastic/elasticsearch.yml"\n        }\n\n      volume_mount {\n        volume      = "es_data"\n        destination = "/usr/share/elasticsearch/data" #<-- in the container\n        read_only   = false\n      }\n\n      config {\n        network_mode = "host"\n        image = "docker.elastic.co/elasticsearch/elasticsearch:8.3.2"\n        command = "elasticsearch"\n        ports = ["http","tcp"]\n        volumes = [\n          "local/elastic/snapshots:/snapshots",\n          "local/elastic/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml",\n        ]\n        args = [\n            "-Ecluster.name=wiki_elastic",\n            "-Ediscovery.type=single-node"\n        ]\n\n        ulimit {\n          memlock = "-1"\n          nofile = "65536"\n          nproc = "8192"\n        }\n      }\n\n      service {\n        name = "elasticsearch"\n        check {\n          name     = "transport-tcp"\n          port     = "tcp"\n          type     = "tcp"\n          interval = "30s"\n          timeout  = "4s"\n        }\n        \n        # check {\n        #     name     = "rest-http"\n        #     type     = "http"\n        #     port     = "http"\n        #     path     = "/"\n        #     interval = "30s"\n        #     timeout  = "4s"\n        #     header {\n        #       Authorization = ["Basic ZWxhc3RpYzpjaGFuZ2VtZQ=="]\n        #     }\n        #   }\n      }\n\n      resources {\n        cpu    = 1000\n        memory = 4096\n      }\n    }\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},642312:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Nomad_for_Elasticsearch_01-039c200b4288ebc02245f76087d2b12e.png"},979171:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/Nomad_for_Elasticsearch_02-f6d84cf2653ff4ec3301e6ebaa4642e8.png"},335745:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>c});var t=s(296540);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);