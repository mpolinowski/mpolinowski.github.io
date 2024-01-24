"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[16078],{203983:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=s(785893),t=s(603905);const o={sidebar_position:8080,slug:"2021-03-24",title:"Logstash 7 and Common Log Pattern",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},a=void 0,l={id:"DevOps/Elasticsearch/2021-03-24-logstash-common-grok-pattern/index",title:"Logstash 7 and Common Log Pattern",description:"Cheung Chau, Hongkon",source:"@site/docs/DevOps/Elasticsearch/2021-03-24-logstash-common-grok-pattern/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-24-logstash-common-grok-pattern",slug:"/DevOps/Elasticsearch/2021-03-24-logstash-common-grok-pattern/2021-03-24",permalink:"/docs/DevOps/Elasticsearch/2021-03-24-logstash-common-grok-pattern/2021-03-24",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-24-logstash-common-grok-pattern/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2021-03-24",title:"Logstash 7 and Common Log Pattern",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Elasticsearch Cheat Sheet",permalink:"/docs/DevOps/Elasticsearch/2021-03-25-elasticsearch7-activate-logging-of-search-queries/elasticsearch-cheat-sheet"},next:{title:"Logstash 7 Working with Unstructured Data",permalink:"/docs/DevOps/Elasticsearch/2021-03-23-logstash-working-with-unstructured-data/2021-03-23"}},c={},i=[{value:"Working with common Log Formats",id:"working-with-common-log-formats",level:2},{value:"NGINX Access Logs",id:"nginx-access-logs",level:3},{value:"Apache Access Logs",id:"apache-access-logs",level:3},{value:"User Agent Mapping and Geo Location Mapping",id:"user-agent-mapping-and-geo-location-mapping",level:4},{value:"Elasticsearch Logs",id:"elasticsearch-logs",level:3},{value:"Elasticsearch Slow Logs",id:"elasticsearch-slow-logs",level:3},{value:"MySQL Slow Logs",id:"mysql-slow-logs",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Cheung Chau, Hongkon",src:s(262736).Z+"",width:"1500",height:"693"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#working-with-common-log-formats",children:"Working with common Log Formats"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#nginx-access-logs",children:"NGINX Access Logs"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#apache-access-logs",children:"Apache Access Logs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#user-agent-mapping-and-geo-location-mapping",children:"User Agent Mapping and Geo Location Mapping"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#elasticsearch-logs",children:"Elasticsearch Logs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#elasticsearch-slow-logs",children:"Elasticsearch Slow Logs"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#mysql-slow-logs",children:"MySQL Slow Logs"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"working-with-common-log-formats",children:"Working with common Log Formats"}),"\n",(0,r.jsxs)(n.p,{children:["You can find a variety of of typical server logs in an repository by ",(0,r.jsx)(n.a,{href:"https://github.com/coralogix-resources/logstash",children:"Coralogix : Logstash Resources"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"\u251c\u2500\u2500 logs\r\n\u2502  \u251c\u2500\u2500 apache\r\n\u2502  \u2502  \u251c\u2500\u2500 access_log\r\n\u2502  \u2502  \u251c\u2500\u2500 apache-access-enriched.conf\r\n\u2502  \u2502  \u251c\u2500\u2500 apache-access-final-modified.conf\r\n\u2502  \u2502  \u251c\u2500\u2500 apache-access-final.conf\r\n\u2502  \u2502  \u251c\u2500\u2500 apache.log\r\n\u2502  \u2502  \u2514\u2500\u2500 log guide\r\n\u2502  \u251c\u2500\u2500 aws_alb\r\n\u2502  \u2502  \u251c\u2500\u2500 alb_logs.log\r\n\u2502  \u2502  \u2514\u2500\u2500 aws-alb.conf\r\n\u2502  \u251c\u2500\u2500 aws_cloudfront\r\n\u2502  \u2502  \u251c\u2500\u2500 aws-cloudfront.conf\r\n\u2502  \u2502  \u2514\u2500\u2500 cloudfront_logs.log\r\n\u2502  \u251c\u2500\u2500 aws_elb\r\n\u2502  \u2502  \u251c\u2500\u2500 aws-elb.conf\r\n\u2502  \u2502  \u2514\u2500\u2500 elb_logs.log\r\n\u2502  \u251c\u2500\u2500 commands help.txt\r\n\u2502  \u251c\u2500\u2500 elasticsearch_logs\r\n\u2502  \u2502  \u251c\u2500\u2500 elasticsearch.log\r\n\u2502  \u2502  \u2514\u2500\u2500 es-logs-final.conf\r\n\u2502  \u251c\u2500\u2500 elasticsearch_slowlogs\r\n\u2502  \u2502  \u251c\u2500\u2500 es-slowlog-final.conf\r\n\u2502  \u2502  \u2514\u2500\u2500 es_slowlog.log\r\n\u2502  \u251c\u2500\u2500 git_push.sh\r\n\u2502  \u251c\u2500\u2500 iis\r\n\u2502  \u2502  \u251c\u2500\u2500 iis-final-working.conf\r\n\u2502  \u2502  \u2514\u2500\u2500 u_ex171118-sample.log\r\n\u2502  \u251c\u2500\u2500 mongodb\r\n\u2502  \u2502  \u251c\u2500\u2500 mongodb-final.conf\r\n\u2502  \u2502  \u2514\u2500\u2500 mongodb.log\r\n\u2502  \u251c\u2500\u2500 mysql_slowlogs\r\n\u2502  \u2502  \u251c\u2500\u2500 mysql-slow.log\r\n\u2502  \u2502  \u2514\u2500\u2500 mysql-slowlogs.conf\r\n\u2502  \u251c\u2500\u2500 nginx\r\n\u2502  \u2502  \u251c\u2500\u2500 access.log\r\n\u2502  \u2502  \u2514\u2500\u2500 nginx-access-final.conf\r\n\u2502  \u2514\u2500\u2500 syslog\r\n\u2502     \u251c\u2500\u2500 syslog-direct-final-02.conf\r\n\u2502     \u251c\u2500\u2500 syslog-direct-final.conf\r\n\u2502     \u251c\u2500\u2500 syslog-forward-tcp - rsyslog settings\r\n\u2502     \u2514\u2500\u2500 syslog-forward-tcp.conf\n"})}),"\n",(0,r.jsx)(n.h3,{id:"nginx-access-logs",children:"NGINX Access Logs"}),"\n",(0,r.jsxs)(n.p,{children:["Let's first take a look at the NGINX ",(0,r.jsx)(n.code,{children:"access.log"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:'114.119.167.35 - - [01/Jun/2020:08:34:45 +0000] "GET /blog/tag/mongodb/amp HTTP/1.1" 301 0 "-" "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36"\r\n\r\n...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The corresponding Logstash config is also part of the repository ",(0,r.jsx)(n.code,{children:"nginx-access-final.conf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'input {\r\nfile {\r\n   path => ["/usr/share/logstash/access.log"]\r\n   start_position => "beginning"\r\n   sincedb_path => "/dev/null"\r\n }\r\n}\r\nfilter {\r\n      grok {\r\n        match => { "message" => ["%{IPORHOST:remote_ip} - %{DATA:user_name} \\[%{HTTPDATE:access_time}\\] \\"%{WORD:http_method} %{DATA:url} HTTP/%{NUMBER:http_version}\\" %{NUMBER:response_code} %{NUMBER:body_sent_bytes} \\"%{DATA:referrer}\\" \\"%{DATA:agent}\\""] }\r\n        remove_field => "message"\r\n      }\r\n      mutate {\r\n        add_field => { "read_timestamp" => "%{@timestamp}" }\r\n      }\r\n      date {\r\n        match => [ "timestamp", "dd/MMM/YYYY:H:m:s Z" ]\r\n        remove_field => "timestamp"\r\n      }\r\n}\r\noutput{\r\n  elasticsearch{\r\n    hosts => ["localhost:9200"]\r\n    index => "nginx-access-log"\r\n  }\r\n  stdout {\r\n    codec => "rubydebug"\r\n   }\r\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["We can test the Grok Pattern in the ",(0,r.jsx)(n.a,{href:"http://grokdebug.herokuapp.com",children:"Grok Debugger"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Grok Filter",src:s(121895).Z+"",width:"970",height:"289"})}),"\n",(0,r.jsx)(n.p,{children:"This will give us the following result:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\r\n  "remote_ip": [["114.119.167.35"]],\r\n  "user_name": [["-"]],\r\n  "access_time": [["01/Jun/2020:08:34:45 +0000"]],\r\n  "http_method": [["GET"]],\r\n  "url": [["/blog/tag/mongodb/amp"]],\r\n  "http_version": [["1.1"]],\r\n  "response_code": [["301"]],\r\n  "body_sent_bytes": [["0"]],\r\n  "referrer": [["-"]],\r\n  "agent": [\r\n    [\r\n      "Mozilla/5.0 (Linux; Android 7.0;) AppleWebKit/537.36 (KHTML, like Gecko) Mobile Safari/537.36"\r\n    ]\r\n  ]\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"I will now try to ingest the entire log into Elasticsearch using my Logstash container:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker run \\\r\n   --name logstash \\\r\n   --net=host \\\r\n   --rm -it \\\r\n   -v /opt/logstash/logs/nginx/nginx-access-final.conf:/usr/share/logstash/pipeline/nginx-access-final.conf \\\r\n   -v /opt/logstash/logs/nginx/access.log:/usr/share/logstash/access.log \\\r\n   -e "ELASTIC_HOST=localhost:9200" \\\r\n   -e "XPACK_SECURITY_ENABLED=false" \\\r\n   -e "XPACK_REPORTING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\r\n   logstash:7.13.4\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can query the indexed data with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl -XGET "http://localhost:9200/nginx-access-log/_search?pretty" -H \'Content-Type: application/json\' -d\'{\r\n  "size": 1,\r\n  "track_total_hits": true,\r\n  "query": {\r\n    "bool": {\r\n      "must_not": [\r\n        {\r\n          "term": {\r\n            "tags.keyword": "_grokparsefailure"\r\n          }\r\n        }\r\n      ]\r\n    }\r\n  }\r\n}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"This will return the first hit that wasn't not a parsing error:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"hits" : [\r\n      {\r\n        "_index" : "nginx-access-log",\r\n        "_type" : "_doc",\r\n        "_id" : "LBROC3sBhWUvimFeTT46",\r\n        "_score" : 0.0,\r\n        "_source" : {\r\n          "user_name" : "-",\r\n          "@version" : "1",\r\n          "path" : "/usr/share/logstash/access.log",\r\n          "read_timestamp" : "2021-08-03T09:18:04.356Z",\r\n          "access_time" : "01/Jun/2020:15:49:10 +0000",\r\n          "body_sent_bytes" : "131",\r\n          "agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36",\r\n          "http_version" : "1.1",\r\n          "referrer" : "https://www.techstuds.com/blog/join-in-mongodb/",\r\n          "response_code" : "200",\r\n          "url" : "/blog/join-in-mongodb/?relatedposts=1",\r\n          "host" : "debian11",\r\n          "remote_ip" : "73.44.199.53",\r\n          "http_method" : "GET",\r\n          "@timestamp" : "2021-08-03T09:18:04.356Z"\r\n        }\r\n      }\r\n    ]\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can now create an index pattern in Kibana and e.g. check how often a certain IP address accessed an URL:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Grok Filter",src:s(200750).Z+"",width:"1513",height:"689"})}),"\n",(0,r.jsx)(n.p,{children:"To delete the indexed data run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -XDELETE -u elastic:changeme http://localhost:9200/nginx-access-log\n"})}),"\n",(0,r.jsx)(n.h3,{id:"apache-access-logs",children:"Apache Access Logs"}),"\n",(0,r.jsx)(n.h4,{id:"user-agent-mapping-and-geo-location-mapping",children:"User Agent Mapping and Geo Location Mapping"}),"\n",(0,r.jsxs)(n.p,{children:["Let's first take a look at the Apache ",(0,r.jsx)(n.code,{children:"access_log"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:'66.249.84.199 - - [30/Apr/2017:06:49:05 +0000] "GET /wp-content/plugins/revslider/public/assets/css/settings.css?ver=5.4.1 HTTP/1.1" 200 7067 "http://sundog-soft.com/2017/04/skymaxx-pro-4-5-coming/" "Mozilla/5.0 (Linux; Android 5.1.1; C6903 Build/14.6.A.1.236) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.25 Mobile Safari/537.36"\r\n\r\n...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The corresponding Logstash config is also part of the repository ",(0,r.jsx)(n.code,{children:"apache-access-enriched.conf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'input {\r\nfile {\r\n   path => ["/usr/share/logstash/access_log"]\r\n   start_position => "beginning"\r\n   sincedb_path => "/dev/null"\r\n }\r\n}\r\nfilter {\r\n      grok {\r\n         match => { "message" => ["%{COMBINEDAPACHELOG}"] }\r\n        remove_field => "message"\r\n      }\r\n      mutate {\r\n        add_field => { "read_timestamp" => "%{@timestamp}" }\r\n      }\r\n      date {\r\n        match => [ "timestamp", "dd/MMM/YYYY:H:m:s Z" ]\r\n        remove_field => "timestamp"\r\n      }\r\n     useragent {\r\n       source => "agent"\r\n       target => "agent"\r\n     }\r\n     geoip {\r\n       source => "clientip"\r\n       target => "geoip"\r\n     }\r\n}\r\noutput {\r\n  elasticsearch {\r\n            hosts => [ "localhost:9200"]\r\n            index => "apache-access-log"\r\n        }\r\n  stdout { codec => rubydebug }\r\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker run \\\r\n   --name logstash \\\r\n   --net=host \\\r\n   --rm -it \\\r\n   -v /opt/logstash/logs/apache/apache-access-enriched.conf:/usr/share/logstash/pipeline/apache-access-enriched.conf \\\r\n   -v /opt/logstash/logs/apache/access_log:/usr/share/logstash/access_log \\\r\n   -e "ELASTIC_HOST=localhost:9200" \\\r\n   -e "XPACK_SECURITY_ENABLED=false" \\\r\n   -e "XPACK_REPORTING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\r\n   logstash:7.13.4\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -XGET "http://localhost:9200/apache-access-log/_search?pretty" -d\'{\r\n  "size": 1,\r\n  "track_total_hits": true,\r\n  "query": {\r\n  "bool": {\r\n    "must_not": [\r\n      {\r\n        "term": {\r\n          "tags.keyword": "_grokparsefailure"\r\n        }\r\n      }\r\n    ]\r\n  }\r\n  }\r\n}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"We can now create an index pattern in Kibana and e.g. check how often a users from a specific city accessed an URL:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Grok Filter",src:s(156544).Z+"",width:"1485",height:"697"})}),"\n",(0,r.jsx)(n.p,{children:"To delete the indexed data run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"curl -XDELETE -u elastic:changeme http://localhost:9200/apache-access-log\n"})}),"\n",(0,r.jsx)(n.h3,{id:"elasticsearch-logs",children:"Elasticsearch Logs"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/coralogix-resources/logstash/blob/master/elasticsearch_logs/es-logs-final.conf",children:"https://github.com/coralogix-resources/logstash/blob/master/elasticsearch_logs/es-logs-final.conf"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'input {\r\n  file {\r\n    path => "/etc/logstash/conf.d/logstash/elasticsearch_logs/elasticsearch.log"\r\n    type => "elasticsearch"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n    codec => multiline {\r\n      pattern => "^\\["\r\n      negate => true\r\n      what => "previous"\r\n    }\r\n  }\r\n}\r\n\r\nfilter {\r\n  if [type] == "elasticsearch" {\r\n    grok {\r\n      match => [ "message", "\\[%{TIMESTAMP_ISO8601:timestamp}\\]\\[%{DATA:severity}%{SPACE}\\]\\[%{DATA:source}%{SPACE}\\]%{SPACE}(?<message>(.|\\r|\\n)*)" ]\r\n      overwrite => [ "message" ]\r\n    }\r\n\r\n    if "_grokparsefailure" not in [tags] {\r\n      grok {\r\n        match => [\r\n          "message", "^\\[%{DATA:node}\\] %{SPACE}\\[%{DATA:index}\\]%{SPACE}(?<short_message>(.|\\r|\\n)*)",\r\n          "message", "^\\[%{DATA:node}\\]%{SPACE}(?<short_message>(.|\\r|\\n)*)" ]\r\n        tag_on_failure => []\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\noutput {\r\n  elasticsearch {\r\n            hosts => [ "localhost:9200"]\r\n            index => "es-test-logs"\r\n        }\r\n  stdout { codec => rubydebug }\r\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"elasticsearch-slow-logs",children:"Elasticsearch Slow Logs"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/coralogix-resources/logstash/blob/master/elasticsearch_slowlogs/es_slowlog.log",children:"https://github.com/coralogix-resources/logstash/blob/master/elasticsearch_slowlogs/es_slowlog.log"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'input{\r\n\tfile{\r\n\t\tpath => ["/etc/logstash/conf.d/logstash/elasticsearch_slowlogs/es_slowlog.log"]\r\n                start_position => "beginning"\r\n                sincedb_path => "/dev/null"\r\n\t\tcodec => plain {\r\n                    charset => "ISO-8859-15" #Reads plaintext with no delimiting between events\r\n        \t}\r\n\t}\r\n}\r\nfilter {\r\n\tgrok {\r\n\t\tmatch => { "message" => [\'\\[%{TIMESTAMP_ISO8601:timestamp}\\]\\[%{LOGLEVEL:level}\\]\\[%{HOSTNAME:type}\\]%{SPACE}\\[%{HOSTNAME:[node_name]}\\]%{SPACE}\\[%{WORD:[index_name]}\\]%{NOTSPACE}%{SPACE}took\\[%{NUMBER:took_micro}%{NOTSPACE}\\]%{NOTSPACE}%{SPACE}%{NOTSPACE}%{NOTSPACE}%{SPACE}%{NOTSPACE}%{NOTSPACE}%{SPACE}%{NOTSPACE}%{NOTSPACE}%{SPACE}search_type\\[%{WORD:search_type}\\]%{NOTSPACE}%{SPACE}total_shards\\[%{NUMBER:total_shards}\\]%{NOTSPACE}%{SPACE}source%{GREEDYDATA:query}\\Z\']}\r\n\t}\r\n\r\n\tmutate{\r\n\t\tremove_field => ["@version","@timestamp","host","path","logTook"]\r\n\t}\r\n}\r\noutput{\r\n\telasticsearch{\r\n\t\thosts => ["localhost:9200"]\r\n\t\tindex => "es-slow-logs"\r\n\t}\r\n\tstdout {\r\n\t\tcodec => "rubydebug"\r\n\t }\r\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'curl -XGET "http://localhost:9200/es-slow-logs/_search?pretty" -d\'{  "size": 1}\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"mysql-slow-logs",children:"MySQL Slow Logs"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/coralogix-resources/logstash/master/mysql_slowlogs/mysql-slow.log",children:"https://raw.githubusercontent.com/coralogix-resources/logstash/master/mysql_slowlogs/mysql-slow.log"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'input {\r\nfile {\r\n   path => ["/etc/logstash/conf.d/logstash/mysql_slowlogs/mysql-slow.log"]\r\n   start_position => "beginning"\r\n   sincedb_path => "/dev/null"\r\n   codec => multiline {\r\n          pattern => "^# Time: %{TIMESTAMP_ISO8601}"\r\n          negate => true\r\n          what => "previous"\r\n        }\r\n }\r\n}\r\nfilter {\r\n      mutate {\r\n        gsub => [\r\n          "message", "#", "",\r\n          "message", "\\n", " "\r\n        ]\r\n        remove_field => "host"\r\n      }\r\n      grok {\r\n        match => { "message" => [\r\n              "Time\\:%{SPACE}%{TIMESTAMP_ISO8601:timestamp}%{SPACE}User\\@Host\\:%{SPACE}%{WORD:user}\\[%{NOTSPACE}\\] \\@ %{NOTSPACE:host} \\[\\]%{SPACE}Id\\:%{SPACE}%{NUMBER:sql_id}%{SPACE}Query_time\\:%{SPACE}%{NUMBER:query_time}%{SPACE}Lock_time\\:%{SPACE}%{NUMBER:lock_time}%{SPACE}Rows_sent\\:%{SPACE}%{NUMBER:rows_sent}%{SPACE}Rows_examined\\:%{SPACE}%{NUMBER:rows_examined}%{SPACE}%{GREEDYDATA}; %{GREEDYDATA:command}\\;%{GREEDYDATA}"\r\n       ] }\r\n      }\r\n\r\n      mutate {\r\n        add_field => { "read_timestamp" => "%{@timestamp}" }\r\n        #remove_field => "message"\r\n      }\r\n}\r\noutput {\r\n  elasticsearch {\r\n            hosts => [ "localhost:9200"]\r\n            index => "mysql-slowlogs-01"\r\n        }\r\n  stdout { codec => rubydebug }\r\n}\n'})})]})}function g(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},603905:(e,n,s)=>{s.d(n,{ah:()=>i});var r=s(667294);function t(e,n,s){return n in e?Object.defineProperty(e,n,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[n]=s,e}function o(e,n){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?o(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(s,n))}))}return e}function l(e,n){if(null==e)return{};var s,r,t=function(e,n){if(null==e)return{};var s,r,t={},o=Object.keys(e);for(r=0;r<o.length;r++)s=o[r],n.indexOf(s)>=0||(t[s]=e[s]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)s=o[r],n.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(t[s]=e[s])}return t}var c=r.createContext({}),i=function(e){var n=r.useContext(c),s=n;return e&&(s="function"==typeof e?e(n):a(a({},n),e)),s},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var s=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),d=i(s),p=t,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return s?r.createElement(m,a(a({ref:n},g),{},{components:s})):r.createElement(m,a({ref:n},g))}));g.displayName="MDXCreateElement"},121895:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/Logstash_Grok_Filter_01-c4f16752e42bdfea2b8212564d302694.png"},200750:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/Logstash_Grok_Filter_02-60ef78764f572ce7091754a87b254c68.png"},156544:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/Logstash_Grok_Filter_03-8f6aa8a7e3e49edbb63fdcc20775e658.png"},262736:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-e0663a8ee734d70171add9efd27aa0c8.jpg"}}]);