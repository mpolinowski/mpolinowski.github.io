"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[47359],{610969:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var s=r(474848),a=r(28453);const t={sidebar_position:9e3,slug:"2021-03-22",title:"Logstash 7 Working with Structured Data",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},i=void 0,o={id:"DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index",title:"Logstash 7 Working with Structured Data",description:"Guangzhou, China",source:"@site/docs/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data",slug:"/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/2021-03-22",permalink:"/docs/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/2021-03-22",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2021-03-22",title:"Logstash 7 Working with Structured Data",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Logstash 7 Working with Unstructured Data",permalink:"/docs/DevOps/Elasticsearch/2021-03-23-logstash-working-with-unstructured-data/2021-03-23"},next:{title:"Logstash 7 Digesting Webserver Logs",permalink:"/docs/DevOps/Elasticsearch/2021-03-21-logstash-digesting-data/2021-03-21"}},l={},d=[{value:"Working with CSV Data",id:"working-with-csv-data",level:2},{value:"Data Mutation",id:"data-mutation",level:3},{value:"Working with JSON Data",id:"working-with-json-data",level:2},{value:"Data Mutation",id:"data-mutation-1",level:3},{value:"Splitting Arrays",id:"splitting-arrays",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Guangzhou, China",src:r(65441).A+"",width:"1500",height:"542"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#working-with-csv-data",children:"Working with CSV Data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#data-mutation",children:"Data Mutation"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#working-with-json-data",children:"Working with JSON Data"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#data-mutation-1",children:"Data Mutation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#splitting-arrays",children:"Splitting Arrays"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"working-with-csv-data",children:"Working with CSV Data"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/coralogix-resources/elk-course-samples",children:"Data Source see Github/Coralogix"}),":"]}),"\n",(0,s.jsxs)(n.p,{children:["Create a file ",(0,s.jsx)(n.code,{children:"payment.csv"})," with the following content in ",(0,s.jsx)(n.code,{children:"/opt/logstash"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-csv",children:"id,timestamp,paymentType,name,gender,ip_address,purpose,country,age\r\n1,2019-08-29T01:53:12Z,Amex,Yuki Calvaire,Female,185.216.194.245,Industrial,Canada,55\r\n2,2019-11-16T14:55:13Z,Mastercard,Misaki Zelretch,Male,131.61.251.254,Clothing,Japan,32\r\n3,2019-10-07T03:52:52Z,Amex,Michaella Gerrietz,Female,208.21.209.84,Computers,Taiwan,32\r\n4,2019-07-05T22:58:10Z,Mastercard,Renee Markov,Male,196.160.55.198,Toys,Estonia,51\r\n5,2019-06-26T08:53:59Z,Visa,Sion Fiori,Male,64.237.78.240,Computers,Paraguay,25\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now create the ",(0,s.jsx)(n.code,{children:"/opt/logstash/pipeline/logstash.conf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:'input {\r\n  file {\r\n    path => "/usr/share/logstash/payment.csv"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n  }\r\n}\r\nfilter {\r\n  csv {\r\n      separator => ","\r\n      skip_header => "true"\r\n      columns => ["id","timestamp","paymentType","name","gender","ip_address","purpose","country","age"]\r\n  }\r\n}\r\noutput {\r\n   elasticsearch {\r\n     hosts => "http://localhost:9200"\r\n     index => "payment-csv"\r\n  }\r\n\r\nstdout {}\r\n\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Now run the Logstash container:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"chown -R 1000:1000 /opt/logstash\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run \\\r\n   --name logstash \\\r\n   --net=host \\\r\n   --rm -it \\\r\n   -v /opt/logstash/pipeline/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\r\n   -v /opt/logstash/payment.csv:/usr/share/logstash/payment.csv \\\r\n   -e "ELASTIC_HOST=localhost:9200" \\\r\n   -e "XPACK_SECURITY_ENABLED=false" \\\r\n   -e "XPACK_REPORTING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\r\n   logstash:7.13.4\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Logstash will now ingest the CSV file. Once it is done open Kibana and create an index pattern ",(0,s.jsx)(n.code,{children:"payment-csv"})," and set the ",(0,s.jsx)(n.strong,{children:"Time Field"})," to ",(0,s.jsx)(n.code,{children:"timestamp"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Logstash 7 Working with Structured Data",src:r(59846).A+"",width:"1493",height:"611"})}),"\n",(0,s.jsx)(n.h3,{id:"data-mutation",children:"Data Mutation"}),"\n",(0,s.jsx)(n.p,{children:"We can also use Logstash to modify the data before forwarding it to Elasticsearch:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'input {\r\n  file {\r\n    path => "/usr/share/logstash/payment.csv"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n  }\r\n}\r\nfilter {\r\n  csv {\r\n      separator => ","\r\n      skip_header => "true"\r\n      columns => ["id","timestamp","paymentType","name","gender","ip_address","purpose","country","age"]\r\n  }\r\n  mutate {\r\n      convert => {\r\n          age => "integer"\r\n      }\r\n          remove_field => ["message","@timestamp","path","host","@version"]\r\n  }\r\n}\r\noutput {\r\n   elasticsearch {\r\n     hosts => "http://localhost:9200"\r\n     index => "payment-csv-clean"\r\n  }\r\n\r\nstdout {}\r\n\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Mutate Section"})," will now convert the age field ",(0,s.jsx)(n.strong,{children:"Type to Integer"})," and remove meta fields that will be added automatically by Logstash in the ",(0,s.jsx)(n.strong,{children:"CSV Section"})," before."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BEFORE"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n        "message" => "4,2019-07-05T22:58:10Z,Mastercard,Renee Markov,Male,196.160.55.198,Toys,Poland,51",\r\n           "path" => "/usr/share/logstash/payment.csv",\r\n       "@version" => "1",\r\n    "paymentType" => "Mastercard",\r\n        "country" => "Poland",\r\n     "@timestamp" => 2021-07-31T11:54:37.530Z,\r\n           "host" => "debian11",\r\n             "id" => "4",\r\n        "purpose" => "Toys",\r\n      "timestamp" => "2019-07-05T22:58:10Z",\r\n            "age" => "51",\r\n     "ip_address" => "196.160.55.198",\r\n           "name" => "Renee Markov",\r\n         "gender" => "Male"\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"AFTER"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n    "paymentType" => "Mastercard",\r\n         "gender" => "Male",\r\n        "purpose" => "Toys",\r\n        "country" => "Poland",\r\n            "age" => 51,\r\n             "id" => "4",\r\n     "ip_address" => "196.160.55.198",\r\n      "timestamp" => "2019-07-05T22:58:10Z",\r\n           "name" => "Renee Markov"\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"To verify the mapping (age has to be type (long) integer) we can run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -XGET \'http://localhost:9200/payment-csv-clean/_mapping/field/age?pretty=true\'\r\n\r\n{\r\n  "payment-csv-clean" : {\r\n    "mappings" : {\r\n      "age" : {\r\n        "full_name" : "age",\r\n        "mapping" : {\r\n          "age" : {\r\n            "type" : "long"\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"working-with-json-data",children:"Working with JSON Data"}),"\n",(0,s.jsxs)(n.p,{children:["Now let's do the same with a JSON file - ",(0,s.jsx)(n.code,{children:"/opt/logstash/payment.json"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"id":1,"timestamp":"2019-09-12T13:43:42Z","paymentType":"WeChat","name":"Jenna Starr","gender":"Female","ip_address":"132.150.218.21","purpose":"Toys","country":"Canada","age":23}\r\n{"id":2,"timestamp":"2019-08-11T17:55:56Z","paymentType":"WeChat","name":"Yuki Calvaire","gender":"Female","ip_address":"77.72.239.47","purpose":"Shoes","country":"Japan","age":34}\r\n{"id":3,"timestamp":"2019-07-14T04:48:25Z","paymentType":"AliPay","name":"Misaki Zelretch","gender":"Female","ip_address":"227.6.210.146","purpose":"Sports","country":"Taiwan","age":53}\r\n{"id":4,"timestamp":"2020-02-29T12:41:59Z","paymentType":"WeChat","name":"Renee Markov","gender":"Male","ip_address":"139.224.15.154","purpose":"Home","country":"Estonia","age":47}\r\n{"id":5,"timestamp":"2019-08-03T19:37:51Z","paymentType":"Mastercard","name":"Sion Fiori","gender":"Female","ip_address":"252.254.68.68","purpose":"Health","country":"Paraguay","age":37}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now create the ",(0,s.jsx)(n.code,{children:"/opt/logstash/pipeline/logstash.conf"})," file:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'input {\r\n  file {\r\n    path => "/usr/share/logstash/payment.json"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n  }\r\n}\r\nfilter {\r\n  json {\r\n      source => "message"\r\n  }\r\n}\r\noutput {\r\n   elasticsearch {\r\n     hosts => "http://localhost:9200"\r\n     index => "payment-json"\r\n  }\r\n\r\nstdout {}\r\n\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And run Logstash with the new configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run \\\r\n   --name logstash \\\r\n   --net=host \\\r\n   --rm -it \\\r\n   -v /opt/logstash/pipeline/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\r\n   -v /opt/logstash/payment.json:/usr/share/logstash/payment.json \\\r\n   -e "ELASTIC_HOST=localhost:9200" \\\r\n   -e "XPACK_SECURITY_ENABLED=false" \\\r\n   -e "XPACK_REPORTING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\r\n   logstash:7.13.4\n'})}),"\n",(0,s.jsx)(n.p,{children:"From the Logstash STDOUT we can now see that the data was ingested:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n           "path" => "/usr/share/logstash/payment.json",\r\n     "@timestamp" => 2021-07-31T13:10:41.370Z,\r\n      "timestamp" => "2019-08-11T17:55:56Z",\r\n       "@version" => "1",\r\n    "paymentType" => "WeChat",\r\n         "gender" => "Female",\r\n            "age" => 34,\r\n        "country" => "Japan",\r\n     "ip_address" => "77.72.239.47",\r\n             "id" => 2,\r\n        "purpose" => "Shoes",\r\n           "host" => "debian11",\r\n        "message" => "{\\"id\\":2,\\"timestamp\\":\\"2019-08-11T17:55:56Z\\",\\"paymentType\\":\\"WeChat\\",\\"name\\":\\"Yuki Calvaire\\",\\"gender\\":\\"Female\\",\\"ip_address\\":\\"77.72.239.47\\",\\"purpose\\":\\"Shoes\\",\\"country\\":\\"Japan\\",\\"age\\":34}",\r\n\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl 'localhost:9200/payment-json/_search?pretty=true'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"data-mutation-1",children:"Data Mutation"}),"\n",(0,s.jsxs)(n.p,{children:["Again we can drop meta fields that we don't need with a ",(0,s.jsx)(n.strong,{children:"Mutation"})," section and also add an ",(0,s.jsx)(n.strong,{children:"IF Statement"})," to exclude payment options we don't care about:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'input {\r\n  file {\r\n    path => "/usr/share/logstash/payment.json"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n  }\r\n}\r\nfilter {\r\n  json {\r\n      source => "message"\r\n  }\r\n  if [paymentType] == "Mastercard" {\r\n    drop{}\r\n  }\r\n  mutate {\r\n    remove_field => ["message", "@timestamp", "path", "host", "@version"]\r\n  }\r\n}\r\noutput {\r\n   elasticsearch {\r\n     hosts => "http://localhost:9200"\r\n     index => "payment-json-clean"\r\n  }\r\n\r\nstdout {}\r\n\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And this cleaned up our index nicely:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n    "paymentType" => "WeChat",\r\n        "country" => "Japan",\r\n         "gender" => "Female",\r\n            "age" => 34,\r\n        "purpose" => "Shoes",\r\n      "timestamp" => "2019-08-11T17:55:56Z",\r\n             "id" => 2,\r\n     "ip_address" => "77.72.239.47",\r\n           "name" => "Yuki Calvaire"\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"splitting-arrays",children:"Splitting Arrays"}),"\n",(0,s.jsxs)(n.p,{children:["If your JSON Data contains arrays (see ",(0,s.jsx)(n.code,{children:"pastEvents"}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"id":1,"timestamp":"2019-06-19T23:04:47Z","paymentType":"Mastercard","name":"Ardis Shimuk","gender":"Female","ip_address":"91.33.132.38","purpose":"Home","country":"France","pastEvents":[{"eventId":1,"transactionId":"trx14224"},{"eventId":2,"transactionId":"trx23424"}],"age":34}\r\n{"id":2,"timestamp":"2019-11-26T15:40:56Z","paymentType":"Amex","name":"Benoit Urridge","gender":"Male","ip_address":"26.71.230.228","purpose":"Shoes","country":"Brazil","pastEvents":[{"eventId":3,"transactionId":"63323-064"},{"eventId":4,"transactionId":"0378-3120"}],"age":51}\r\n{"id":3,"timestamp":"2019-05-08T16:24:25Z","paymentType":"Visa","name":"Lindsy Ketchell","gender":"Female","ip_address":"189.216.71.184","purpose":"Home","country":"Brazil","pastEvents":[{"eventId":5,"transactionId":"68151-3826"},{"eventId":6,"transactionId":"52125-611"}],"age":26}\r\n{"id":4,"timestamp":"2019-06-10T18:01:32Z","paymentType":"Visa","name":"Cary Boyes","gender":"Male","ip_address":"223.113.73.232","purpose":"Grocery","country":"Pakistan","pastEvents":[{"eventId":7,"transactionId":"63941-950"},{"eventId":8,"transactionId":"55926-0011"}],"age":46}\r\n{"id":5,"timestamp":"2020-02-18T12:27:35Z","paymentType":"Visa","name":"Betteanne Diament","gender":"Female","ip_address":"159.148.102.98","purpose":"Computers","country":"Brazil","pastEvents":[{"eventId":9,"transactionId":"76436-101"},{"eventId":10,"transactionId":"55154-3330"}],"age":41}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can create the ",(0,s.jsx)(n.code,{children:"/opt/logstash/pipeline/logstash.conf"})," file with an additional ",(0,s.jsx)(n.strong,{children:"Split Section"})," to expand the data structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'input {\r\n  file {\r\n    #type => "json"\r\n    path => "/usr/share/logstash/payment-array.json"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n  }\r\n}\r\nfilter {\r\n  json {\r\n      source => "message"\r\n  }\r\n  split {\r\n    field => "[pastEvents]"\r\n  }\r\n  mutate {\r\n    add_field => {\r\n      "eventId" => "%{[pastEvents][eventId]}"\r\n      "transactionId" => "%{[pastEvents][transactionId]}"\r\n    }\r\n    remove_field => ["message", "@timestamp", "path", "host", "@version"]\r\n  }\r\n}\r\noutput {\r\n   elasticsearch {\r\n     hosts => "http://localhost:9200"\r\n     index => "payment-json-array"\r\n  }\r\n\r\nstdout {}\r\n\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And run Logstash with the new configuration file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'docker run \\\r\n   --name logstash \\\r\n   --net=host \\\r\n   --rm -it \\\r\n   -v /opt/logstash/pipeline/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\r\n   -v /opt/logstash/payment-array.json:/usr/share/logstash/payment-array.json \\\r\n   -e "ELASTIC_HOST=localhost:9200" \\\r\n   -e "XPACK_SECURITY_ENABLED=false" \\\r\n   -e "XPACK_REPORTING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ENABLED=false" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\r\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\r\n   logstash:7.13.4\n'})}),"\n",(0,s.jsx)(n.p,{children:"The result is, that every entry will be split in two:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n        "country" => "Brazil",\r\n        "purpose" => "Home",\r\n            "age" => 26,\r\n     "ip_address" => "189.216.71.184",\r\n     "pastEvents" => {\r\n              "eventId" => 5,\r\n        "transactionId" => "68151-3826"\r\n    },\r\n         "gender" => "Female",\r\n      "timestamp" => "2019-05-08T16:24:25Z",\r\n           "name" => "Lindsy Ketchell",\r\n    "paymentType" => "Visa",\r\n             "id" => 3\r\n}\r\n{\r\n        "country" => "Brazil",\r\n        "purpose" => "Home",\r\n            "age" => 26,\r\n     "ip_address" => "189.216.71.184",\r\n     "pastEvents" => {\r\n              "eventId" => 6,\r\n        "transactionId" => "52125-611"\r\n    },\r\n         "gender" => "Female",\r\n      "timestamp" => "2019-05-08T16:24:25Z",\r\n           "name" => "Lindsy Ketchell",\r\n    "paymentType" => "Visa",\r\n             "id" => 3\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We can now also extract the ",(0,s.jsx)(n.code,{children:"eventId"})," and ",(0,s.jsx)(n.code,{children:"transactionId"})," - to get rid of the ",(0,s.jsx)(n.code,{children:"pastEvents"})," key all together:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'input {\r\n  file {\r\n    #type => "json"\r\n    path => "/usr/share/logstash/payment-array.json"\r\n    start_position => "beginning"\r\n    sincedb_path => "/dev/null"\r\n  }\r\n}\r\nfilter {\r\n  json {\r\n      source => "message"\r\n  }\r\n  split {\r\n    field => "[pastEvents]"\r\n  }\r\n  mutate {\r\n    add_field => {\r\n      "eventId" => "%{[pastEvents][eventId]}"\r\n      "transactionId" => "%{[pastEvents][transactionId]}"\r\n    }\r\n    remove_field => ["message", "@timestamp", "path", "host", "@version"]\r\n  }\r\n}\r\noutput {\r\n   elasticsearch {\r\n     hosts => "http://localhost:9200"\r\n     index => "payment-json-array"\r\n  }\r\n\r\nstdout {}\r\n\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"And the result is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n       "ip_address" => "189.216.71.184",\r\n        "timestamp" => "2019-05-08T16:24:25Z",\r\n          "purpose" => "Home",\r\n           "gender" => "Female",\r\n              "age" => 26,\r\n          "country" => "Brazil",\r\n               "id" => 3,\r\n       "pastEvents" => {\r\n        "transactionId" => "68151-3826",\r\n              "eventId" => 5\r\n    },\r\n    "transactionId" => "68151-3826",\r\n          "eventId" => "5",\r\n      "paymentType" => "Visa",\r\n             "name" => "Lindsy Ketchell"\r\n}\r\n{\r\n       "ip_address" => "189.216.71.184",\r\n        "timestamp" => "2019-05-08T16:24:25Z",\r\n          "purpose" => "Home",\r\n           "gender" => "Female",\r\n              "age" => 26,\r\n          "country" => "Brazil",\r\n               "id" => 3,\r\n       "pastEvents" => {\r\n        "transactionId" => "52125-611",\r\n              "eventId" => 6\r\n    },\r\n    "transactionId" => "52125-611",\r\n          "eventId" => "6",\r\n      "paymentType" => "Visa",\r\n             "name" => "Lindsy Ketchell"\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Logstash 7 Working with Structured Data",src:r(841053).A+"",width:"1487",height:"763"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},59846:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/logstash-working-with-structured-data_01-f59b03109848b9c97062554efd2e4bbf.png"},841053:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/logstash-working-with-structured-data_02-e6177c7cde751132f33c65d5f1cd54fb.png"},65441:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-a65bad4b09494ff35cf67d53e293663c.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(296540);const a={},t=s.createContext(a);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);