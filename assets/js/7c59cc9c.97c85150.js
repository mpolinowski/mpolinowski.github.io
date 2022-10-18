"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[33151],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return t?n.createElement(m,l(l({ref:a},p),{},{components:t})):n.createElement(m,l({ref:a},p))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},97907:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),r=(t(67294),t(3905));const o={sidebar_position:7050,slug:"2022-02-06",title:"Elasticsearch v8, Filebeat (Docker) and Apache",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},l=void 0,i={unversionedId:"DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/index",id:"DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/index",title:"Elasticsearch v8, Filebeat (Docker) and Apache",description:"Shenzhen, China",source:"@site/docs/DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/index.md",sourceDirName:"DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache",slug:"/DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/2022-02-06",permalink:"/docs/DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/2022-02-06",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2022-02-06--elasticsearch-v8-data-ingestion-apache/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:7050,frontMatter:{sidebar_position:7050,slug:"2022-02-06",title:"Elasticsearch v8, Filebeat (Docker) and Apache",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Opensearch & Dashboard",permalink:"/docs/DevOps/Elasticsearch/2022-10-11--opensearch-docker-compose/2022-10-11"},next:{title:"Elasticsearch & Kibana v8 Index Management",permalink:"/docs/DevOps/Elasticsearch/2022-02-05--kibana-v8-index-management/2022-02-05"}},s={},c=[{value:"Setting up Filebeats",id:"setting-up-filebeats",level:2},{value:"Run the Filebeat Setup",id:"run-the-filebeat-setup",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Enable and configure Data Collection Modules",id:"enable-and-configure-data-collection-modules",level:3},{value:"Prepare the Filebeat Container to Ingest Apache Logs",id:"prepare-the-filebeat-container-to-ingest-apache-logs",level:4},{value:"Check the Apache Module",id:"check-the-apache-module",level:4}],p={toc:c};function u(e){let{components:a,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shenzhen, China",src:t(65040).Z,width:"1500",height:"403"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-filebeats"},"Setting up Filebeats"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#run-the-filebeat-setup"},"Run the Filebeat Setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configuration"},"Configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#enable-and-configure-data-collection-modules"},"Enable and configure Data Collection Modules"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#prepare-the-filebeat-container-to-ingest-apache-logs"},"Prepare the Filebeat Container to Ingest Apache Logs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#check-the-apache-module"},"Check the Apache Module"))))))),(0,r.kt)("h2",{id:"setting-up-filebeats"},"Setting up Filebeats"),(0,r.kt)("p",null,"Start by pulling the a fresh version of Filebeat:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull elastic/filebeat:8.0.0\n")),(0,r.kt)("h3",{id:"run-the-filebeat-setup"},"Run the Filebeat Setup"),(0,r.kt)("p",null,"Running Filebeat with the setup command will create the index pattern and load visualizations , dashboards, and machine learning jobs."),(0,r.kt)("p",null,"I will create a folder:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /opt/beats/config/\n")),(0,r.kt)("p",null,"and continue working from there."),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"When running Filebeat in a container, you need to provide access to Docker\u2019s unix socket in order for the add_docker_metadata processor to work. You can do this by mounting the socket inside the container. For example:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"docker run -v /var/run/docker.sock:/var/run/docker.sock ...")),(0,r.kt)("p",null,"To avoid privilege issues, you may also need to add --user=root to the docker run flags. Because the user must be part of the docker group in order to access /var/run/docker.sock, root access is required if Filebeat is running as non-root inside the container."),(0,r.kt)("p",null,"If Docker daemon is restarted the mounted socket will become invalid and metadata will stop working, in these situations there are two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart Filebeat every time Docker is restarted"),(0,r.kt)("li",{parentName:"ul"},"Mount the entire /var/run directory (instead of just the socket)")),(0,r.kt)("p",null,"I am just going to use CLI flags to mount the docker socket as volumes. This simplifies the configuration to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/beats/config/filebeat.yml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"filebeat.config:\n  modules:\n    path: ${path.config}/modules.d/*.yml # enable all modules (nginx, kafka, redis, etc)\n    reload.enabled: false\n\nfilebeat.autodiscover: # auto-discover tagged docker container\n  providers:\n    - type: docker\n      hints.enabled: true\n\nsetup:\n  kibana.host: \"http://localhost:5601\"\n  dashboards.enable: true\n\noutput.elasticsearch:\n  hosts: 'http://localhost:9200'\n  username: 'elastic'\n  password: 'changeme'\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note"),": If you set up Elasticsearch according to ",(0,r.kt)("a",{parentName:"p",href:"/docs/DevOps/Elasticsearch/2022-02-02--elasticsearch-v8-upgrade/2022-02-02"},"this guide"),", you will have a different ",(0,r.kt)("inlineCode",{parentName:"p"},"elastic")," user password - e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ELASTIC_PASSWORD: 'a1hyme+ry1-AltBfpqxY'"),".")),(0,r.kt)("p",null,"The beat configuration file must belong to the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user and all write permissions for other users must be revoked:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chown root:root /opt/beats/config/filebeat.yml\nchmod go-w /opt/beats/config/filebeat.yml\n")),(0,r.kt)("h3",{id:"enable-and-configure-data-collection-modules"},"Enable and configure Data Collection Modules"),(0,r.kt)("h4",{id:"prepare-the-filebeat-container-to-ingest-apache-logs"},"Prepare the Filebeat Container to Ingest Apache Logs"),(0,r.kt)("p",null,"The Apache logs might be found in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/var/log/apache2")," directory - depending on your Apache configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-v /var/log/apache2:/var/log/apache2:ro\n")),(0,r.kt)("p",null,"And secondly, we need to mount our module configuration file. The template configuration is located inside the Filebeat container under ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/filebeat/modules.d/apache.yml.disabled"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /opt/beats/config/apache.yml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'# Module: apache\n# Docs: https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-module-apache.html\n\n- module: apache\n  access:\n    enabled: true\n    var.paths: ["/var/log/apache2/access.log"]\n  error:\n    enabled: true\n    var.paths: ["/var/log/apache2/error.log"]\n')),(0,r.kt)("p",null,"save this file under ",(0,r.kt)("inlineCode",{parentName:"p"},"apache.yml")," next to your ",(0,r.kt)("inlineCode",{parentName:"p"},"filebeat.yml")," and mount it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"modules.d")," configuration folder - the complete docker command now looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d \\\n  --name filebeat \\\n  --restart unless-stopped \\\n  --user root \\\n  --net=host \\\n  -v /opt/beats/config/filebeat.yml:/usr/share/filebeat/filebeat.yml \\\n  -v /opt/beats/config/apache.yml:/usr/share/filebeat/modules.d/apache.yml \\\n  -v /var/lib/docker/containers:/var/lib/docker/containers:ro \\\n  -v /var/run/docker.sock:/var/run/docker.sock:ro \\\n  -v /var/log/apache2:/var/log/apache2:ro \\\n  elastic/filebeat:8.0.0\n")),(0,r.kt)("p",null,"Restart the container and verify that the logs and module configuration was actually mounted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti filebeat /bin/bash\n\n/usr/share/filebeat# ls -la /var/log/apache2/\n-rwxrwxrwx 1 root root  9634840 Feb 21 03:47 access.log\n-rwxrwxrwx 1 root root    12225 Feb 21 03:47 error.log\n\nls -la /usr/share/filebeat/modules.d | grep apache\n-rw-r--r-- 1 root root   613 Feb 22 05:54 apache.yml\n-rw-r--r-- 1 root root   788 Feb  3 18:06 apache.yml.disabled\n")),(0,r.kt)("h4",{id:"check-the-apache-module"},"Check the Apache Module"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Verify that the NGINX modules was actually enable. To see a list of available modules, run:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker exec -ti filebeat /bin/bash\n\n\n/usr/share/filebeat# ./filebeat modules list\nEnabled:\napache\n\nDisabled:\nactivemq apache auditd aws awsfargate azure barracuda bluecoat cef checkpoint cisco coredns crowdstrike cyberarkpas cylance elasticsearch envoyproxy f5 fortinet gcp google_workspace haproxy ibmmq icinga iis imperva infoblox iptables juniper kafka kibana logstash microsoft misp mongodb mssql mysql mysqlenterprise nats netflow netscout nginx o365 okta oracle osquery panw pensando postgresql proofpoint rabbitmq radware redis santa snort snyk sonicwall sophos squid suricata system threatintel tomcat traefik zeek zookeeper zoom zscaler\n")),(0,r.kt)("p",null,"To manually activate or deactivate modules run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./filebeat modules enable apache\n")),(0,r.kt)("p",null,"To test your configuration file, change to the directory where the Filebeat binary is installed, and run Filebeat in the foreground with the following options specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./filebeat test config -e\nConfig OK\n")),(0,r.kt)("p",null,"The documentation I found says that you now should run the setup command to load the available dashboards. I am not sure if this is still necessary since I already did this in the previous step. But running the command returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Loaded Ingest pipelines")," - sounds good ~"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./filebeat setup -e\nLoaded Ingest pipelines\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Kibana 8 Apache Dashboard",src:t(65015).Z,width:"1427",height:"822"})))}u.isMDXComponent=!0},65015:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/Elasticsearch8_Filebeats_01-eb74147a7eccabcdfdf32df9481f9e64.png"},65040:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-94d62ec3ff079da54fce88aad4901707.jpg"}}]);