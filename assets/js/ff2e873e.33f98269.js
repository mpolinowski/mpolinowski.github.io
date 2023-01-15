"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[70375],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,s=function(e,n){if(null==e)return{};var t,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=s,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5157:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=t(87462),s=(t(67294),t(3905));const r={sidebar_position:9e3,slug:"2021-03-22",title:"Logstash 7 Working with Structured Data",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},o=void 0,i={unversionedId:"DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index",id:"DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index",title:"Logstash 7 Working with Structured Data",description:"Guangzhou, China",source:"@site/docs/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index.md",sourceDirName:"DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data",slug:"/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/2021-03-22",permalink:"/docs/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/2021-03-22",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Elasticsearch/2021-03-22-logstash-working-with-structured-data/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Elasticsearch",permalink:"/docs/tags/elasticsearch"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2021-03-22",title:"Logstash 7 Working with Structured Data",authors:"mpolinowski",tags:["LINUX","Elasticsearch"]},sidebar:"tutorialSidebar",previous:{title:"Logstash 7 Working with Unstructured Data",permalink:"/docs/DevOps/Elasticsearch/2021-03-23-logstash-working-with-unstructured-data/2021-03-23"},next:{title:"Logstash 7 Digesting Webserver Logs",permalink:"/docs/DevOps/Elasticsearch/2021-03-21-logstash-digesting-data/2021-03-21"}},p={},l=[{value:"Working with CSV Data",id:"working-with-csv-data",level:2},{value:"Data Mutation",id:"data-mutation",level:3},{value:"Working with JSON Data",id:"working-with-json-data",level:2},{value:"Data Mutation",id:"data-mutation-1",level:3},{value:"Splitting Arrays",id:"splitting-arrays",level:3}],d={toc:l};function c(e){let{components:n,...r}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Guangzhou, China",src:t(87020).Z,width:"1500",height:"542"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#working-with-csv-data"},"Working with CSV Data"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#data-mutation"},"Data Mutation")))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#working-with-json-data"},"Working with JSON Data"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#data-mutation-1"},"Data Mutation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#splitting-arrays"},"Splitting Arrays"))))),(0,s.kt)("h2",{id:"working-with-csv-data"},"Working with CSV Data"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://github.com/coralogix-resources/elk-course-samples"},"Data Source see Github/Coralogix"),":"),(0,s.kt)("p",null,"Create a file ",(0,s.kt)("inlineCode",{parentName:"p"},"payment.csv")," with the following content in ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/logstash"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csv"},"id,timestamp,paymentType,name,gender,ip_address,purpose,country,age\n1,2019-08-29T01:53:12Z,Amex,Yuki Calvaire,Female,185.216.194.245,Industrial,Canada,55\n2,2019-11-16T14:55:13Z,Mastercard,Misaki Zelretch,Male,131.61.251.254,Clothing,Japan,32\n3,2019-10-07T03:52:52Z,Amex,Michaella Gerrietz,Female,208.21.209.84,Computers,Taiwan,32\n4,2019-07-05T22:58:10Z,Mastercard,Renee Markov,Male,196.160.55.198,Toys,Estonia,51\n5,2019-06-26T08:53:59Z,Visa,Sion Fiori,Male,64.237.78.240,Computers,Paraguay,25\n")),(0,s.kt)("p",null,"Now create the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/logstash/pipeline/logstash.conf")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cfg"},'input {\n  file {\n    path => "/usr/share/logstash/payment.csv"\n    start_position => "beginning"\n    sincedb_path => "/dev/null"\n  }\n}\nfilter {\n  csv {\n      separator => ","\n      skip_header => "true"\n      columns => ["id","timestamp","paymentType","name","gender","ip_address","purpose","country","age"]\n  }\n}\noutput {\n   elasticsearch {\n     hosts => "http://localhost:9200"\n     index => "payment-csv"\n  }\n\nstdout {}\n\n}\n')),(0,s.kt)("p",null,"Now run the Logstash container:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chown -R 1000:1000 /opt/logstash\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n   --name logstash \\\n   --net=host \\\n   --rm -it \\\n   -v /opt/logstash/pipeline/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\n   -v /opt/logstash/payment.csv:/usr/share/logstash/payment.csv \\\n   -e "ELASTIC_HOST=localhost:9200" \\\n   -e "XPACK_SECURITY_ENABLED=false" \\\n   -e "XPACK_REPORTING_ENABLED=false" \\\n   -e "XPACK_MONITORING_ENABLED=false" \\\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\n   logstash:7.13.4\n')),(0,s.kt)("p",null,"Logstash will now ingest the CSV file. Once it is done open Kibana and create an index pattern ",(0,s.kt)("inlineCode",{parentName:"p"},"payment-csv")," and set the ",(0,s.kt)("strong",{parentName:"p"},"Time Field")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"timestamp"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Logstash 7 Working with Structured Data",src:t(56215).Z,width:"1493",height:"611"})),(0,s.kt)("h3",{id:"data-mutation"},"Data Mutation"),(0,s.kt)("p",null,"We can also use Logstash to modify the data before forwarding it to Elasticsearch:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'input {\n  file {\n    path => "/usr/share/logstash/payment.csv"\n    start_position => "beginning"\n    sincedb_path => "/dev/null"\n  }\n}\nfilter {\n  csv {\n      separator => ","\n      skip_header => "true"\n      columns => ["id","timestamp","paymentType","name","gender","ip_address","purpose","country","age"]\n  }\n  mutate {\n      convert => {\n          age => "integer"\n      }\n          remove_field => ["message","@timestamp","path","host","@version"]\n  }\n}\noutput {\n   elasticsearch {\n     hosts => "http://localhost:9200"\n     index => "payment-csv-clean"\n  }\n\nstdout {}\n\n}\n')),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Mutate Section")," will now convert the age field ",(0,s.kt)("strong",{parentName:"p"},"Type to Integer")," and remove meta fields that will be added automatically by Logstash in the ",(0,s.kt)("strong",{parentName:"p"},"CSV Section")," before."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"BEFORE"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "message" => "4,2019-07-05T22:58:10Z,Mastercard,Renee Markov,Male,196.160.55.198,Toys,Poland,51",\n           "path" => "/usr/share/logstash/payment.csv",\n       "@version" => "1",\n    "paymentType" => "Mastercard",\n        "country" => "Poland",\n     "@timestamp" => 2021-07-31T11:54:37.530Z,\n           "host" => "debian11",\n             "id" => "4",\n        "purpose" => "Toys",\n      "timestamp" => "2019-07-05T22:58:10Z",\n            "age" => "51",\n     "ip_address" => "196.160.55.198",\n           "name" => "Renee Markov",\n         "gender" => "Male"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"AFTER"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "paymentType" => "Mastercard",\n         "gender" => "Male",\n        "purpose" => "Toys",\n        "country" => "Poland",\n            "age" => 51,\n             "id" => "4",\n     "ip_address" => "196.160.55.198",\n      "timestamp" => "2019-07-05T22:58:10Z",\n           "name" => "Renee Markov"\n}\n')),(0,s.kt)("p",null,"To verify the mapping (age has to be type (long) integer) we can run the following command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XGET \'http://localhost:9200/payment-csv-clean/_mapping/field/age?pretty=true\'\n\n{\n  "payment-csv-clean" : {\n    "mappings" : {\n      "age" : {\n        "full_name" : "age",\n        "mapping" : {\n          "age" : {\n            "type" : "long"\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,s.kt)("h2",{id:"working-with-json-data"},"Working with JSON Data"),(0,s.kt)("p",null,"Now let's do the same with a JSON file - ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/logstash/payment.json"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"timestamp":"2019-09-12T13:43:42Z","paymentType":"WeChat","name":"Jenna Starr","gender":"Female","ip_address":"132.150.218.21","purpose":"Toys","country":"Canada","age":23}\n{"id":2,"timestamp":"2019-08-11T17:55:56Z","paymentType":"WeChat","name":"Yuki Calvaire","gender":"Female","ip_address":"77.72.239.47","purpose":"Shoes","country":"Japan","age":34}\n{"id":3,"timestamp":"2019-07-14T04:48:25Z","paymentType":"AliPay","name":"Misaki Zelretch","gender":"Female","ip_address":"227.6.210.146","purpose":"Sports","country":"Taiwan","age":53}\n{"id":4,"timestamp":"2020-02-29T12:41:59Z","paymentType":"WeChat","name":"Renee Markov","gender":"Male","ip_address":"139.224.15.154","purpose":"Home","country":"Estonia","age":47}\n{"id":5,"timestamp":"2019-08-03T19:37:51Z","paymentType":"Mastercard","name":"Sion Fiori","gender":"Female","ip_address":"252.254.68.68","purpose":"Health","country":"Paraguay","age":37}\n')),(0,s.kt)("p",null,"Now create the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/logstash/pipeline/logstash.conf")," file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'input {\n  file {\n    path => "/usr/share/logstash/payment.json"\n    start_position => "beginning"\n    sincedb_path => "/dev/null"\n  }\n}\nfilter {\n  json {\n      source => "message"\n  }\n}\noutput {\n   elasticsearch {\n     hosts => "http://localhost:9200"\n     index => "payment-json"\n  }\n\nstdout {}\n\n}\n')),(0,s.kt)("p",null,"And run Logstash with the new configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n   --name logstash \\\n   --net=host \\\n   --rm -it \\\n   -v /opt/logstash/pipeline/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\n   -v /opt/logstash/payment.json:/usr/share/logstash/payment.json \\\n   -e "ELASTIC_HOST=localhost:9200" \\\n   -e "XPACK_SECURITY_ENABLED=false" \\\n   -e "XPACK_REPORTING_ENABLED=false" \\\n   -e "XPACK_MONITORING_ENABLED=false" \\\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\n   logstash:7.13.4\n')),(0,s.kt)("p",null,"From the Logstash STDOUT we can now see that the data was ingested:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n           "path" => "/usr/share/logstash/payment.json",\n     "@timestamp" => 2021-07-31T13:10:41.370Z,\n      "timestamp" => "2019-08-11T17:55:56Z",\n       "@version" => "1",\n    "paymentType" => "WeChat",\n         "gender" => "Female",\n            "age" => 34,\n        "country" => "Japan",\n     "ip_address" => "77.72.239.47",\n             "id" => 2,\n        "purpose" => "Shoes",\n           "host" => "debian11",\n        "message" => "{\\"id\\":2,\\"timestamp\\":\\"2019-08-11T17:55:56Z\\",\\"paymentType\\":\\"WeChat\\",\\"name\\":\\"Yuki Calvaire\\",\\"gender\\":\\"Female\\",\\"ip_address\\":\\"77.72.239.47\\",\\"purpose\\":\\"Shoes\\",\\"country\\":\\"Japan\\",\\"age\\":34}",\n\n')),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"curl 'localhost:9200/payment-json/_search?pretty=true'\n")),(0,s.kt)("h3",{id:"data-mutation-1"},"Data Mutation"),(0,s.kt)("p",null,"Again we can drop meta fields that we don't need with a ",(0,s.kt)("strong",{parentName:"p"},"Mutation")," section and also add an ",(0,s.kt)("strong",{parentName:"p"},"IF Statement")," to exclude payment options we don't care about:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'input {\n  file {\n    path => "/usr/share/logstash/payment.json"\n    start_position => "beginning"\n    sincedb_path => "/dev/null"\n  }\n}\nfilter {\n  json {\n      source => "message"\n  }\n  if [paymentType] == "Mastercard" {\n    drop{}\n  }\n  mutate {\n    remove_field => ["message", "@timestamp", "path", "host", "@version"]\n  }\n}\noutput {\n   elasticsearch {\n     hosts => "http://localhost:9200"\n     index => "payment-json-clean"\n  }\n\nstdout {}\n\n}\n')),(0,s.kt)("p",null,"And this cleaned up our index nicely:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "paymentType" => "WeChat",\n        "country" => "Japan",\n         "gender" => "Female",\n            "age" => 34,\n        "purpose" => "Shoes",\n      "timestamp" => "2019-08-11T17:55:56Z",\n             "id" => 2,\n     "ip_address" => "77.72.239.47",\n           "name" => "Yuki Calvaire"\n}\n')),(0,s.kt)("h3",{id:"splitting-arrays"},"Splitting Arrays"),(0,s.kt)("p",null,"If your JSON Data contains arrays (see ",(0,s.kt)("inlineCode",{parentName:"p"},"pastEvents"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{"id":1,"timestamp":"2019-06-19T23:04:47Z","paymentType":"Mastercard","name":"Ardis Shimuk","gender":"Female","ip_address":"91.33.132.38","purpose":"Home","country":"France","pastEvents":[{"eventId":1,"transactionId":"trx14224"},{"eventId":2,"transactionId":"trx23424"}],"age":34}\n{"id":2,"timestamp":"2019-11-26T15:40:56Z","paymentType":"Amex","name":"Benoit Urridge","gender":"Male","ip_address":"26.71.230.228","purpose":"Shoes","country":"Brazil","pastEvents":[{"eventId":3,"transactionId":"63323-064"},{"eventId":4,"transactionId":"0378-3120"}],"age":51}\n{"id":3,"timestamp":"2019-05-08T16:24:25Z","paymentType":"Visa","name":"Lindsy Ketchell","gender":"Female","ip_address":"189.216.71.184","purpose":"Home","country":"Brazil","pastEvents":[{"eventId":5,"transactionId":"68151-3826"},{"eventId":6,"transactionId":"52125-611"}],"age":26}\n{"id":4,"timestamp":"2019-06-10T18:01:32Z","paymentType":"Visa","name":"Cary Boyes","gender":"Male","ip_address":"223.113.73.232","purpose":"Grocery","country":"Pakistan","pastEvents":[{"eventId":7,"transactionId":"63941-950"},{"eventId":8,"transactionId":"55926-0011"}],"age":46}\n{"id":5,"timestamp":"2020-02-18T12:27:35Z","paymentType":"Visa","name":"Betteanne Diament","gender":"Female","ip_address":"159.148.102.98","purpose":"Computers","country":"Brazil","pastEvents":[{"eventId":9,"transactionId":"76436-101"},{"eventId":10,"transactionId":"55154-3330"}],"age":41}\n')),(0,s.kt)("p",null,"You can create the ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/logstash/pipeline/logstash.conf")," file with an additional ",(0,s.kt)("strong",{parentName:"p"},"Split Section")," to expand the data structure:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'input {\n  file {\n    #type => "json"\n    path => "/usr/share/logstash/payment-array.json"\n    start_position => "beginning"\n    sincedb_path => "/dev/null"\n  }\n}\nfilter {\n  json {\n      source => "message"\n  }\n  split {\n    field => "[pastEvents]"\n  }\n  mutate {\n    add_field => {\n      "eventId" => "%{[pastEvents][eventId]}"\n      "transactionId" => "%{[pastEvents][transactionId]}"\n    }\n    remove_field => ["message", "@timestamp", "path", "host", "@version"]\n  }\n}\noutput {\n   elasticsearch {\n     hosts => "http://localhost:9200"\n     index => "payment-json-array"\n  }\n\nstdout {}\n\n}\n')),(0,s.kt)("p",null,"And run Logstash with the new configuration file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'docker run \\\n   --name logstash \\\n   --net=host \\\n   --rm -it \\\n   -v /opt/logstash/pipeline/logstash.conf:/usr/share/logstash/pipeline/logstash.conf \\\n   -v /opt/logstash/payment-array.json:/usr/share/logstash/payment-array.json \\\n   -e "ELASTIC_HOST=localhost:9200" \\\n   -e "XPACK_SECURITY_ENABLED=false" \\\n   -e "XPACK_REPORTING_ENABLED=false" \\\n   -e "XPACK_MONITORING_ENABLED=false" \\\n   -e "XPACK_MONITORING_ELASTICSEARCH_USERNAME=elastic" \\\n   -e "XPACK_MONITORING_ELASTICSEARCH_PASSWORD=changeme" \\\n   logstash:7.13.4\n')),(0,s.kt)("p",null,"The result is, that every entry will be split in two:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n        "country" => "Brazil",\n        "purpose" => "Home",\n            "age" => 26,\n     "ip_address" => "189.216.71.184",\n     "pastEvents" => {\n              "eventId" => 5,\n        "transactionId" => "68151-3826"\n    },\n         "gender" => "Female",\n      "timestamp" => "2019-05-08T16:24:25Z",\n           "name" => "Lindsy Ketchell",\n    "paymentType" => "Visa",\n             "id" => 3\n}\n{\n        "country" => "Brazil",\n        "purpose" => "Home",\n            "age" => 26,\n     "ip_address" => "189.216.71.184",\n     "pastEvents" => {\n              "eventId" => 6,\n        "transactionId" => "52125-611"\n    },\n         "gender" => "Female",\n      "timestamp" => "2019-05-08T16:24:25Z",\n           "name" => "Lindsy Ketchell",\n    "paymentType" => "Visa",\n             "id" => 3\n}\n')),(0,s.kt)("p",null,"We can now also extract the ",(0,s.kt)("inlineCode",{parentName:"p"},"eventId")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"transactionId")," - to get rid of the ",(0,s.kt)("inlineCode",{parentName:"p"},"pastEvents")," key all together:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'input {\n  file {\n    #type => "json"\n    path => "/usr/share/logstash/payment-array.json"\n    start_position => "beginning"\n    sincedb_path => "/dev/null"\n  }\n}\nfilter {\n  json {\n      source => "message"\n  }\n  split {\n    field => "[pastEvents]"\n  }\n  mutate {\n    add_field => {\n      "eventId" => "%{[pastEvents][eventId]}"\n      "transactionId" => "%{[pastEvents][transactionId]}"\n    }\n    remove_field => ["message", "@timestamp", "path", "host", "@version"]\n  }\n}\noutput {\n   elasticsearch {\n     hosts => "http://localhost:9200"\n     index => "payment-json-array"\n  }\n\nstdout {}\n\n}\n')),(0,s.kt)("p",null,"And the result is:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n       "ip_address" => "189.216.71.184",\n        "timestamp" => "2019-05-08T16:24:25Z",\n          "purpose" => "Home",\n           "gender" => "Female",\n              "age" => 26,\n          "country" => "Brazil",\n               "id" => 3,\n       "pastEvents" => {\n        "transactionId" => "68151-3826",\n              "eventId" => 5\n    },\n    "transactionId" => "68151-3826",\n          "eventId" => "5",\n      "paymentType" => "Visa",\n             "name" => "Lindsy Ketchell"\n}\n{\n       "ip_address" => "189.216.71.184",\n        "timestamp" => "2019-05-08T16:24:25Z",\n          "purpose" => "Home",\n           "gender" => "Female",\n              "age" => 26,\n          "country" => "Brazil",\n               "id" => 3,\n       "pastEvents" => {\n        "transactionId" => "52125-611",\n              "eventId" => 6\n    },\n    "transactionId" => "52125-611",\n          "eventId" => "6",\n      "paymentType" => "Visa",\n             "name" => "Lindsy Ketchell"\n}\n')),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Logstash 7 Working with Structured Data",src:t(2943).Z,width:"1487",height:"763"})))}c.isMDXComponent=!0},56215:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/logstash-working-with-structured-data_01-f59b03109848b9c97062554efd2e4bbf.png"},2943:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/logstash-working-with-structured-data_02-e6177c7cde751132f33c65d5f1cd54fb.png"},87020:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-a65bad4b09494ff35cf67d53e293663c.jpg"}}]);