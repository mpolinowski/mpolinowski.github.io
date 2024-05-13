"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[82402],{744151:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=n(474848),t=n(28453);const a={sidebar_position:1e4,slug:"2017-10-03",title:"Search Engine Setup and Configuration",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},r=void 0,c={id:"DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration/index",title:"Search Engine Setup and Configuration",description:"Search Engine Setup and Configuration",source:"@site/docs/DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration/index.mdx",sourceDirName:"DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration",slug:"/DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration/2017-10-03",permalink:"/docs/DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration/2017-10-03",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2017-10-03--search-engine-setup-and-configuration/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Databases",permalink:"/docs/tags/databases"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:1e4,frontMatter:{sidebar_position:1e4,slug:"2017-10-03",title:"Search Engine Setup and Configuration",authors:"mpolinowski",tags:["LINUX","Databases","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"React Search Interface",permalink:"/docs/DevOps/Elasticsearch/2017-12-05--elasticsearch-react-example/2017-12-05"},next:{title:"Ansible",permalink:"/docs/category/ansible"}},l={},h=[{value:"01 Search Engine Setup and Configuration",id:"01-search-engine-setup-and-configuration",level:2},{value:"Installing Elasticsearch 6.x on CentOS",id:"installing-elasticsearch-6x-on-centos",level:3},{value:"Import the Elasticsearch PGP Key",id:"import-the-elasticsearch-pgp-key",level:4},{value:"Installing from the RPM repository",id:"installing-from-the-rpm-repository",level:3},{value:"Running Elasticsearch with <em>systemd</em>",id:"running-elasticsearch-with-systemd",level:4},{value:"Checking that Elasticsearch is running",id:"checking-that-elasticsearch-is-running",level:4},{value:"Configuring Elasticsearch",id:"configuring-elasticsearch",level:4},{value:"Installing Kibana 6.x on CentOS",id:"installing-kibana-6x-on-centos",level:3},{value:"Running Kibana with <em>systemd</em>",id:"running-kibana-with-systemd",level:4},{value:"Install X-Pack",id:"install-x-pack",level:3},{value:"Elasticsearch Security",id:"elasticsearch-security",level:4},{value:"Kibana Security",id:"kibana-security",level:4},{value:"Enabling Anonymous Access",id:"enabling-anonymous-access",level:3}];function o(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Search Engine Setup and Configuration",src:n(513824).A+"",width:"1980",height:"944"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#01-search-engine-setup-and-configuration",children:"01 Search Engine Setup and Configuration"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#installing-elasticsearch-6x-on-centos",children:"Installing Elasticsearch 6.x on CentOS"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#import-the-elasticsearch-pgp-key",children:"Import the Elasticsearch PGP Key"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#installing-from-the-rpm-repository",children:"Installing from the RPM repository"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.a,{href:"#running-elasticsearch-with-_systemd_",children:["Running Elasticsearch with ",(0,i.jsx)(s.em,{children:"systemd"})]})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#checking-that-elasticsearch-is-running",children:"Checking that Elasticsearch is running"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#configuring-elasticsearch",children:"Configuring Elasticsearch"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#installing-kibana-6x-on-centos",children:"Installing Kibana 6.x on CentOS"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsxs)(s.a,{href:"#running-kibana-with-_systemd_",children:["Running Kibana with ",(0,i.jsx)(s.em,{children:"systemd"})]})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#install-x-pack",children:"Install X-Pack"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#elasticsearch-security",children:"Elasticsearch Security"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#kibana-security",children:"Kibana Security"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#enabling-anonymous-access",children:"Enabling Anonymous Access"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"01-search-engine-setup-and-configuration",children:"01 Search Engine Setup and Configuration"}),"\n",(0,i.jsx)(s.h3,{id:"installing-elasticsearch-6x-on-centos",children:"Installing Elasticsearch 6.x on CentOS"}),"\n",(0,i.jsx)(s.p,{children:"Elasticsearch is a distributed, JSON-based search and analytics engine designed for horizontal scalability, maximum reliability, and easy management."}),"\n",(0,i.jsx)(s.h4,{id:"import-the-elasticsearch-pgp-key",children:"Import the Elasticsearch PGP Key"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch\n"})}),"\n",(0,i.jsx)(s.h3,{id:"installing-from-the-rpm-repository",children:"Installing from the RPM repository"}),"\n",(0,i.jsxs)(s.p,{children:["Create a file called elasticsearch.repo in the ",(0,i.jsx)(s.em,{children:"/etc/yum.repos.d/"})," directory and add the following lines:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[elasticsearch-6.x]\r\nname=Elasticsearch repository for 6.x packages\r\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\r\ngpgcheck=1\r\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\r\nenabled=1\r\nautorefresh=1\r\ntype=rpm-md\n"})}),"\n",(0,i.jsx)(s.p,{children:"And your repository is ready for use. You can now install Elasticsearch with one of the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo yum install elasticsearch\n"})}),"\n",(0,i.jsxs)(s.h4,{id:"running-elasticsearch-with-systemd",children:["Running Elasticsearch with ",(0,i.jsx)(s.em,{children:"systemd"})]}),"\n",(0,i.jsx)(s.p,{children:"To configure Elasticsearch to start automatically when the system boots up, run the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo /bin/systemctl daemon-reload\r\nsudo /bin/systemctl enable elasticsearch.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"Apparently there is no way to quietly reload the Elasticsearch service after changing the config file - you will be required to stop and restart instead:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo systemctl stop elasticsearch.service\r\nsudo systemctl start elasticsearch.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"These commands provide no feedback as to whether Elasticsearch was started successfully or not. Instead, this information will be written in the log files located in /var/log/elasticsearch/."}),"\n",(0,i.jsx)(s.h4,{id:"checking-that-elasticsearch-is-running",children:"Checking that Elasticsearch is running"}),"\n",(0,i.jsx)(s.p,{children:"You can test that your Elasticsearch node is running by sending an HTTP request to port 9200 on localhost:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"curl -XGET 'localhost:9200/?pretty'\n"})}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"http://localhost:9200/_cat/indices?v&pretty\n"})}),"\n",(0,i.jsx)(s.h4,{id:"configuring-elasticsearch",children:"Configuring Elasticsearch"}),"\n",(0,i.jsxs)(s.p,{children:["Elasticsearch loads its configuration from the ",(0,i.jsx)(s.em,{children:"/etc/elasticsearch/elasticsearch.yml"})," file by default. Examples:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"cluster.name:"})," e.g. ",(0,i.jsx)(s.em,{children:"instar-wiki"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"node.name"})," e.g. ",(0,i.jsx)(s.em,{children:"c21"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"node.attr.rack:"})," e.g ",(0,i.jsx)(s.em,{children:"r44"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"path.data:"})," ",(0,i.jsx)(s.em,{children:"/path/to/data"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"path.logs:"})," ",(0,i.jsx)(s.em,{children:"/path/to/logs"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"network.host:"})," ",(0,i.jsx)(s.em,{children:"localhost"})," ",(0,i.jsx)(s.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-network.html#network-interface-values",children:"see config"})," ",(0,i.jsx)(s.strong,{children:"*"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"http.port:"})," ",(0,i.jsx)(s.em,{children:"9200"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"http.cors:"})," ",(0,i.jsx)(s.em,{children:"enabled:"})," true , ",(0,i.jsx)(s.em,{children:"allow-origin:"})," /https?://localhost(:[0-9]+)?/, ",(0,i.jsx)(s.em,{children:"allow-origin:"})," /https?://localhost(:[0-9][0-9][0-9][0-9])?/"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"*"})," ",(0,i.jsx)(s.em,{children:"e.g. network.host: 127.0.0.1, 192.168.1.200, 7.114.21.49"})]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"The RPM places config files, logs, and the data directory in the appropriate locations for an RPM-based system:"}),"\n",(0,i.jsxs)(s.p,{children:["| | | |\r\n|---|---|---|---|\r\n| ",(0,i.jsx)(s.strong,{children:"Type"})," | ",(0,i.jsx)(s.strong,{children:"Description"})," | ",(0,i.jsx)(s.strong,{children:"Default Location"})," | ",(0,i.jsx)(s.strong,{children:"Setting"})," |\r\n| home | Elasticsearch home directory or $ES_HOME | ",(0,i.jsx)(s.em,{children:"/usr/share/elasticsearch"})," |  |\r\n| bin | Binary scripts including elasticsearch to start a node and elasticsearch-plugin to install plugins | ",(0,i.jsx)(s.em,{children:"/usr/share/elasticsearch/bin"})," |   |\r\n| conf | Configuration files including elasticsearch.yml | ",(0,i.jsx)(s.em,{children:"/etc/elasticsearch"})," | ES_PATH_CONF |\r\n| conf | Environment variables including heap size, file descriptors. | ",(0,i.jsx)(s.em,{children:"/etc/sysconfig/elasticsearch"})," |   |\r\n| data | The location of the data files of each index / shard allocated on the node. Can hold multiple locations. | ",(0,i.jsx)(s.em,{children:"/var/lib/elasticsearch"})," | path.data |\r\n| logs | Log files location. | ",(0,i.jsx)(s.em,{children:"/var/log/elasticsearch"})," | path.logs |\r\n| plugins | Plugin files location. Each plugin will be contained in a subdirectory. | ",(0,i.jsx)(s.em,{children:"/usr/share/elasticsearch/plugins"})," |   |"]}),"\n",(0,i.jsx)(s.h3,{id:"installing-kibana-6x-on-centos",children:"Installing Kibana 6.x on CentOS"}),"\n",(0,i.jsx)(s.p,{children:"Kibana gives shape to your data and is the extensible user interface for configuring and managing all aspects of the Elastic Stack."}),"\n",(0,i.jsxs)(s.p,{children:["Create a file called kibana.repo in the ",(0,i.jsx)(s.em,{children:"/etc/yum.repos.d/"})," directory and add the following lines:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"[kibana-6.x]\r\nname=Kibana repository for 6.x packages\r\nbaseurl=https://artifacts.elastic.co/packages/6.x/yum\r\ngpgcheck=1\r\ngpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch\r\nenabled=1\r\nautorefresh=1\r\ntype=rpm-md\n"})}),"\n",(0,i.jsx)(s.p,{children:"And your repository is ready for use. You can now install Kibana with one of the following command:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo yum install kibana\n"})}),"\n",(0,i.jsxs)(s.h4,{id:"running-kibana-with-systemd",children:["Running Kibana with ",(0,i.jsx)(s.em,{children:"systemd"})]}),"\n",(0,i.jsx)(s.p,{children:"To configure Kibana to start automatically when the system boots up, run the following commands:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo /bin/systemctl daemon-reload\r\nsudo /bin/systemctl enable kibana.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"Kibana can be started and stopped as follows:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo systemctl stop kibana.service\r\nsudo systemctl start kibana.service\n"})}),"\n",(0,i.jsxs)(s.p,{children:["These commands provide no feedback as to whether Kibana was started successfully or not. Instead, this information will be written in the log files located in ",(0,i.jsx)(s.em,{children:"/var/log/kibana/"}),". Kibana loads its configuration from the ",(0,i.jsx)(s.em,{children:"/etc/kibana/kibana.yml"})," file by default. Examples:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"elasticsearch.url:"})," Default: ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"http://localhost:9200",children:"http://localhost:9200"})})," The URL of the Elasticsearch instance to use for all your queries."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.port:"})," Server port for the Kibana web UI - ",(0,i.jsx)(s.em,{children:"default 5601"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.host:"})," Specifies the address to which the Kibana server will bind. IP addresses and host names are both valid values. The default is ",(0,i.jsx)(s.em,{children:"localhost"}),", which usually means remote machines will not be able to connect. To allow connections from remote users, set this parameter to a non-loopback address."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"console.enabled:"}),"  Default: true Set to false to disable Console."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"elasticsearch.username:"})," s. below"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"elasticsearch.password:"})," If your Elasticsearch is protected with basic authentication, these settings provide the username and password that the Kibana server uses to perform maintenance on the Kibana index at startup. Your Kibana users still need to authenticate with Elasticsearch, which is proxied through the Kibana server. (see X-Pack below)"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.enabled:"})," Default: 'false' Enables SSL for outgoing requests from the Kibana server to the browser. When set to true, server.ssl.certificate and server.ssl.key are required"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.certificate:"})," s. below"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.key:"})," Paths to the PEM-format SSL certificate and SSL key files, respectively."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.certificateAuthorities:"})," List of paths to PEM encoded certificate files that should be trusted."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.cipherSuites:"})," Default: ",(0,i.jsx)(s.em,{children:"ECDHE-RSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES256-GCM-SHA384, DHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES128-SHA256, DHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, DHE-RSA-AES256-SHA384, ECDHE-RSA-AES256-SHA256, DHE-RSA-AES256-SHA256, HIGH,!aNULL, !eNULL, !EXPORT, !DES, !RC4, !MD5, !PSK, !SRP, !CAMELLIA"}),". Details on the format, and the valid options, are available via the ",(0,i.jsx)(s.a,{href:"https://www.openssl.org/docs/man1.0.2/apps/ciphers.html#CIPHER-LIST-FORMAT",children:"OpenSSL cipher list format documentation"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.keyPassphrase:"})," The passphrase that will be used to decrypt the private key. This value is optional as the key may not be encrypted."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.redirectHttpFromPort:"})," Kibana will bind to this port and redirect all http requests to https over the port configured as server.port."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"server.ssl.supportedProtocols:"})," ",(0,i.jsx)(s.em,{children:"Default"}),": TLSv1, TLSv1.1, TLSv1.2 Supported protocols with versions. Valid protocols: TLSv1, TLSv1.1, TLSv1.2"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"status.allowAnonymous:"})," Default: false If authentication is enabled, setting this to true allows unauthenticated users to access the Kibana server status API and status page."]}),"\n"]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{children:"Description"}),(0,i.jsx)(s.th,{children:"Default Location"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"home"}),(0,i.jsx)(s.td,{children:"Kibana home directory or $KIBANA_HOME"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"bin"}),(0,i.jsx)(s.td,{children:"Binary scripts including kibana to start the Kibana server and kibana-plugin to install plugins"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana/bin"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"config"}),(0,i.jsx)(s.td,{children:"Configuration files including kibana.yml"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/etc/kibana"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"data"}),(0,i.jsx)(s.td,{children:"The location of the data files written to disk by Kibana and its plugins"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/var/lib/kibana"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"optimize"}),(0,i.jsx)(s.td,{children:"Transpiled source code. Certain administrative actions (e.g. plugin install) result in the source code being retranspiled on the fly."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana/optimize"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"plugins"}),(0,i.jsx)(s.td,{children:"Plugin files location. Each plugin will be contained in a subdirectory."}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.em,{children:"/usr/share/kibana/plugins"})})]})]})]}),"\n",(0,i.jsx)(s.h3,{id:"install-x-pack",children:"Install X-Pack"}),"\n",(0,i.jsx)(s.p,{children:"X-Pack is a single extension that integrates handy features \u2014 security, alerting, monitoring, reporting, graph exploration, and machine learning \u2014 you can trust across the Elastic Stack."}),"\n",(0,i.jsx)(s.h4,{id:"elasticsearch-security",children:"Elasticsearch Security"}),"\n",(0,i.jsxs)(s.p,{children:["We need to add a user athentication to our Elasticsearch / Kibana setup. We will do this by installing X-Pack. To get started with installing the Elasticsearch plugin, go to ",(0,i.jsx)(s.em,{children:"/etc/elasticsearch/"})," and call the following function:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"bin/elasticsearch-plugin install x-pack\n"})}),"\n",(0,i.jsx)(s.p,{children:"Now restart Elasticsearch:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo systemctl stop elasticsearch.service\r\nsudo systemctl start elasticsearch.service\n"})}),"\n",(0,i.jsx)(s.p,{children:"You can either use the auto function to generate user passwords for Elasticsearch, Kibana (and the not yet installed Logstash):"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"bin/x-pack/setup-passwords auto\n"})}),"\n",(0,i.jsxs)(s.p,{children:["or swap the ",(0,i.jsx)(s.em,{children:"auto"})," flag with ",(0,i.jsx)(s.em,{children:"interactive"})," to use your own user logins. The auto output will look something like this:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"Changed password for user kibana \r\nPASSWORD kibana = *&$*(80gfddzg\r\n\r\nChanged password for user logstash_system\r\nPASSWORD logstash_system = 58#$)Qljfksh\r\n\r\nChanged password for user elastic\r\nPASSWORD elastic = jgfisg)#*%&(@*#)\n"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsxs)(s.strong,{children:["Now every interaction with Elasticsearch or Kibana will require you to authenticate with ",(0,i.jsx)(s.em,{children:"username: elastic"})," and ",(0,i.jsxs)(s.em,{children:["password: jgfisg)#",(0,i.jsx)(s.em,{children:"%&(@"}),"#)"]})]})}),"\n",(0,i.jsx)(s.h4,{id:"kibana-security",children:"Kibana Security"}),"\n",(0,i.jsxs)(s.p,{children:["Now we repeat these steps with Kibana. First navigate to ",(0,i.jsx)(s.em,{children:"/etc/kibana/"})," and call the following function:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"bin/kibana-plugin install x-pack\n"})}),"\n",(0,i.jsxs)(s.p,{children:["And we have to add the login that Kibana has to use to access Elasticsearch (auto generated above) to the ",(0,i.jsx)(s.em,{children:"kibana.yml"})," file in ",(0,i.jsx)(s.em,{children:"/etc/kibana/"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"elasticsearch.username: 'kibana'\r\nelasticsearch.password:  '*&$*(80gfddzg'\n"})}),"\n",(0,i.jsx)(s.p,{children:"Now restart Kibana:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"sudo systemctl stop kibana.service\r\nsudo systemctl start kibana.service\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Now navigate your browser ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"http://localhost:5601/",children:"http://localhost:5601/"})})," and login with the 'elastic' user we generated above."]}),"\n",(0,i.jsx)(s.h3,{id:"enabling-anonymous-access",children:"Enabling Anonymous Access"}),"\n",(0,i.jsxs)(s.p,{children:["Incoming requests are considered to be anonymous if no authentication token can be extracted from the incoming request. By default, anonymous requests are rejected and an authentication error is returned (status code 401). To allow anonymous user to send search queries (Read access to specified indices), we need to add the following lines to the ",(0,i.jsx)(s.em,{children:"elasticsearch.yml"})," file in ",(0,i.jsx)(s.em,{children:"/etc/elasticsearch/"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"xpack.security.authc:\r\n  anonymous:\r\n    username: anonymous_user \r\n    roles: wiki_reader \r\n    authz_exception: true \n"})}),"\n",(0,i.jsxs)(s.p,{children:["Now we have to switch to the Kibana webUI on ",(0,i.jsx)(s.em,{children:(0,i.jsx)(s.a,{href:"http://localhost:5601/",children:"http://localhost:5601/"})})," and create the ",(0,i.jsx)(s.em,{children:"role:"})," ",(0,i.jsx)(s.em,{children:"wiki_reader"})," to allow read access to the wiki indices. First switch to the ",(0,i.jsx)(s.strong,{children:"Management"})," tab and click on user:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:n(823725).A+"",width:"1075",height:"557"})}),"\n",(0,i.jsxs)(s.p,{children:["Then click on ",(0,i.jsx)(s.strong,{children:"Add a User"})," and add a user with the ",(0,i.jsx)(s.strong,{children:"watcher_user"})," role:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:n(9750).A+"",width:"1175",height:"533"})}),"\n",(0,i.jsxs)(s.p,{children:["Switch back to the ",(0,i.jsx)(s.strong,{children:"Management"})," tab and click on role:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:n(906687).A+"",width:"1075",height:"561"})}),"\n",(0,i.jsxs)(s.p,{children:["Click on ",(0,i.jsx)(s.strong,{children:"Create Role"})," and add the name ",(0,i.jsx)(s.strong,{children:"wiki_reader"})," that we choose for the role of the anonymous user inside the elasticsearch.yml file, assign the ",(0,i.jsx)(s.strong,{children:"monitor_watcher"})," privilege and choose the indices that you want the anonymous user to have ",(0,i.jsx)(s.strong,{children:"READ"})," access to:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Add a Elasticsearch User with Read Access",src:n(955360).A+"",width:"1075",height:"723"})}),"\n",(0,i.jsxs)(s.p,{children:["Your configuration will be active after restarting Elasticsearch. Now you can use webservices to read from your ES database. But only the ",(0,i.jsx)(s.strong,{children:"elastic"})," user has the privileg to ",(0,i.jsx)(s.strong,{children:"WRITE"})," and to work in Kibana."]})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},823725:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/kibana_01-6915859e24670268a757da44433e5f13.png"},9750:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/kibana_02-886c1d63b6ac903e716712158f0ef6f0.png"},906687:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/kibana_03-6c13d223bec4aaa324e45f3a69308ec8.png"},955360:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/kibana_04-d0ab9bd19ab5f91475176def418d0e04.png"},513824:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/photo-34139903180_fd0c397abc_o-f1cadc3ab412ceab57a08c77a01084d9.jpg"},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var i=n(296540);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);