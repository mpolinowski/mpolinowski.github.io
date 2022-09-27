"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[76095],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),h=i,u=d["".concat(l,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},24994:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:7020,slug:"2022-07-12",title:"Home Assistant - Python Scripts as Service",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."},r=void 0,s={unversionedId:"IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/index",id:"IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/index",title:"Home Assistant - Python Scripts as Service",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type.",source:"@site/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/index.md",sourceDirName:"IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python",slug:"/IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/2022-07-12",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-12-home-assistant-mqtt-python/index.md",tags:[{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:7020,frontMatter:{sidebar_position:7020,slug:"2022-07-12",title:"Home Assistant - Python Scripts as Service",authors:"mpolinowski",tags:["IoT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."},sidebar:"tutorialSidebar",previous:{title:"Home Assistant - MQTT Auto-Discovery :: Automation",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11"},next:{title:"OpenHAB 3 INSTAR Camera Binding",permalink:"/docs/IoT-and-Machine-Learning/Home_Automation/2020-12-03--openhab3-camera-binding/2020-12-03"}},l={},p=[{value:"Using Python Scripts in Home Assistant",id:"using-python-scripts-in-home-assistant",level:2},{value:"Data Preparation",id:"data-preparation",level:3},{value:"Paho MQTT Client",id:"paho-mqtt-client",level:3},{value:"Python Scripts as a Service in Home Assistant",id:"python-scripts-as-a-service-in-home-assistant",level:3}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guangzhou, China",src:a(26358).Z,width:"1500",height:"516"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#using-python-scripts-in-home-assistant"},"Using Python Scripts in Home Assistant"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-preparation"},"Data Preparation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#paho-mqtt-client"},"Paho MQTT Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python-scripts-as-a-service-in-home-assistant"},"Python Scripts as a Service in Home Assistant"))))),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/docs/mqtt/discovery/"},"discovery of MQTT devices")," will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side: The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-10-home-assistant-mqtt-autodiscovery-part-i/2022-07-10"},"Part I"),' I looked into the configuration API and described the topic payloads needed to have Home Assistant add your camera as a new device when you connect it to the MQTT broker. Now I want to make sure that Home Assistant does not forget the device configuration if my broker "looses" those configuration topics.'),(0,i.kt)("p",null,"In ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11"},"Part II")," I looked into using an automation that is triggered when my camera comes ",(0,i.kt)("inlineCode",{parentName:"p"},"alive")," and feeds all those topics to my MQTT broker. But I needed to write my own mqtt client in an external Python script."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE"),": I was unable to run the Python script directly. I received a lot of error message - I assume that they are related to the virtual environment that HA uses to isolate external scripts. Back in ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11"},"Part II")," of this tutorial I used the ",(0,i.kt)("strong",{parentName:"p"},"Shell Script")," option to execute the Python script. This worked like a charm.")),(0,i.kt)("p",null,"Luckily the ",(0,i.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/homeassistant/home-assistant"},"Home Assistant Docker Container")," has Python - obviously - and the Python library ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse/paho.mqtt.python"},"Paho MQTT")," installed that I can use. But it seems that HA starts external scripts inside a virtual environment - can you add dependencies to it by adding the following lines to ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration.yaml")," (?):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"python_script:\n  requirements:\n  - paho-mqtt>=1.6.1\n")),(0,i.kt)("h2",{id:"using-python-scripts-in-home-assistant"},"Using Python Scripts in Home Assistant"),(0,i.kt)("h3",{id:"data-preparation"},"Data Preparation"),(0,i.kt)("p",null,"So in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11"},"previous step")," I ended up with a bunch of MQTT Topics and Payloads that I need to register with my MQTT Broker to configure my INSTAR camera. For example the topic that configures a switch in Home Assistant to toggle the red  ",(0,i.kt)("strong",{parentName:"p"},"Motion Detection Area"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Configuration topic"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"homeassistant/switch/in9408_garden/alarm_area_red/config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Payload"),": ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "device": {\n        "identifiers": "in9408_garden",\n        "manufacturer": "INSTAR Deutschland GmbH",\n        "model": "INSTAR 2k+ IN-9408 WLAN",\n        "name": "IN-9408 2k+ Garden",\n        "configuration_url": "http://192.168.2.115:80"\n    },\n    "availability": {\n      "topic": "cameras/115/status/testament",\n      "payload_available": "{\\"val\\":\\"alive\\"}",\n      "payload_not_available": "{\\"val\\":\\"dead\\"}"\n    },\n    "object_id":"in9408_garden_alarm_area_red",\n    "unique_id": "in9408_garden_alarm_area_red",\n    "name": "IN-9408 2k+ Garden Alarm Area Red",\n    "icon": "mdi:camera-metering-matrix",\n    "command_topic": "cameras/115/alarm/areas/red/enable",\n    "payload_on": "{\\"val\\":\\"1\\"}",\n    "payload_off": "{\\"val\\":\\"0\\"}",\n    "state_topic": "cameras/115/status/alarm/areas/red/enable",\n    "state_on": 1,\n    "state_off": 0,\n    "value_template": "{{ value_json.val }}",\n    "qos": 1\n}\n')),(0,i.kt)("p",null,"To use this topic with your own camera you will need to adjust the following values according to your camera configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"configuration_url"),": The IP address of your camera, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"http://192.168.2.115:80")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MQTT Prefix & Device ID"),": e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"cameras")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"115")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"MQTT Last-Will Topic"),": e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"status/testament")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"payload_available"),": The Last-Will payload used to signify that your camera is connected to the MQTT broker"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"payload_not_available"),": The Last-Will payload used to signify that your camera lost connection to the MQTT broker")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Home Assistant MQTT Auto-Discovery",src:a(80868).Z,width:"1201",height:"597"})),(0,i.kt)("p",null,"Now I want to wrap all those topics into an JSON Array - which means that I have to escape the JSON payload to have it handled as a string - find the entire list ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ha-mqtt-python/blob/master/config_topics.json"},"on Github"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "entities": [{\n            "topic": "homeassistant/switch/in9408_garden/alarm_area_red/config",\n            "payload": "{\\"device\\":{\\"identifiers\\":\\"in9408_garden\\",\\"manufacturer\\":\\"INSTAR Deutschland GmbH\\",\\"model\\":\\"INSTAR 2k+ IN-9408 WLAN\\",\\"name\\":\\"IN-9408 2k+ Garden\\",\\"configuration_url\\":\\"http://192.168.2.115:80\\"},\\"availability\\":{\\"topic\\":\\"cameras/115/status/testament\\",\\"payload_available\\":\\"{\\\\\\"val\\\\\\":\\\\\\"alive\\\\\\"}\\",\\"payload_not_available\\":\\"{\\\\\\"val\\\\\\":\\\\\\"dead\\\\\\"}\\"},\\"object_id\\":\\"in9408_garden_alarm_area_red\\",\\"unique_id\\":\\"in9408_garden_alarm_area_red\\",\\"name\\":\\"Alarm Area Red\\",\\"icon\\":\\"mdi:camera-metering-matrix\\",\\"command_topic\\":\\"cameras/115/alarm/areas/red/enable\\",\\"payload_on\\":\\"{\\\\\\"val\\\\\\":\\\\\\"1\\\\\\"}\\",\\"payload_off\\":\\"{\\\\\\"val\\\\\\":\\\\\\"1\\\\\\"}\\",\\"state_topic\\":\\"cameras/115/status/alarm/areas/red/enable\\",\\"state_on\\":1,\\"state_off\\":0,\\"value_template\\":\\"{{ value_json.val}}\\",\\"qos\\":1}"\n        },\n\n        ...\n\n    ]\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note"),': that you have to "double-escape" the parts that were already escaped before, e.g. ',(0,i.kt)("inlineCode",{parentName:"p"},'{\\\\\\"val\\\\\\":\\\\\\"1\\\\\\"}'),".")),(0,i.kt)("p",null,"And to be able to connect with my broker I will create a configuration file with all the details - see on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ha-mqtt-python/blob/master/config.py"},"Github"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'mqtt_server_host = "192.168.2.115"\nmqtt_server_port = 1883\nmqtt_bind_address = ""\nmqtt_bind_port = 0\nmqtt_username = "admin"\nmqtt_password = "instar"\nmqtt_transport = "tcp"\nmqtt_keepalive = 60\nmqtt_client_id = "mqtt5_client"\n')),(0,i.kt)("h3",{id:"paho-mqtt-client"},"Paho MQTT Client"),(0,i.kt)("p",null,"Now I can go ahead building the MQTT client, have it connect to my broker and then loop over all the MQTT topics prepared above - see on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ha-mqtt-python/blob/master/mqtt5_client.py"},"Github"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import json\nimport paho.mqtt.client as mqtt\nimport sys\nimport time\n\nfrom config import * # import configuration from config.py\n\nf = open('config_topics.json') # read json file with all mqtt topics and payloads\n\njson_array = json.load(f) # read json data into an array variable\n\ndef on_connect(client, userdata, flags, rc, properties=None):\n    if rc==0:\n        print(\"INFO :: Connected to MQTT Broker\")\n    else:\n        print(\"ERROR :: Connection failed:\", rc)\n\nif __name__ == \"__main__\":\n    client = mqtt.Client(client_id = mqtt_client_id, protocol = mqtt.MQTTv5, transport = mqtt_transport)\n    client.username_pw_set(username = mqtt_username, password = mqtt_password)\n    client.connect(host = mqtt_server_host, port = mqtt_server_port,\n                    keepalive = mqtt_keepalive, bind_address = mqtt_bind_address, bind_port = mqtt_bind_port, properties = None)\n    client.on_connect = on_connect\n\n    for entity in json_array['entities']: # loop through all entities in array\n        client.publish(entity['topic'],entity['payload'],retain=True) # and use data to publish the mqtt topics\n        time.sleep(0.100) # I tried running without cooldown and it works just fine but kept this in\n    f.close()\n\n    client.loop_stop()\n    client.disconnect()\n    print(\"INFO :: Closed connection to broker\")\n    sys.exit()\n")),(0,i.kt)("h3",{id:"python-scripts-as-a-service-in-home-assistant"},"Python Scripts as a Service in Home Assistant"),(0,i.kt)("p",null,"Home Assistant expects external Python scripts to be stored inside the ",(0,i.kt)("strong",{parentName:"p"},"Config")," directory within a folder called ",(0,i.kt)("inlineCode",{parentName:"p"},"python_scripts"),". Create the folder and copy ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ha-mqtt-python"},"all 3 files")," into it. Each Python file created in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<config>/python_scripts/")," folder will be exposed as a service."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add ",(0,i.kt)("inlineCode",{parentName:"li"},"python_script:")," to ",(0,i.kt)("em",{parentName:"li"},"configuration.yaml")),(0,i.kt)("li",{parentName:"ul"},"Create folder ",(0,i.kt)("inlineCode",{parentName:"li"},"<config>/python_scripts")),(0,i.kt)("li",{parentName:"ul"},"Copy the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mpolinowski/ha-mqtt-python"},"Python files")," into it"),(0,i.kt)("li",{parentName:"ul"},"Restart Home Assistant"),(0,i.kt)("li",{parentName:"ul"},"Call your new ",(0,i.kt)("inlineCode",{parentName:"li"},"python_script.mqtt5_client")," service")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Home Assistant MQTT Auto-Discovery",src:a(80245).Z,width:"1395",height:"445"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"NOTE"),": I was unable to run the Python script directly. I received a lot of error message - I assume that they are related to the virtual environment that HA uses to isolate external scripts. Back in ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/Home_Automation/2022-07-11-home-assistant-mqtt-autodiscovery-part-ii/2022-07-11"},"Part II")," of this tutorial I used the ",(0,i.kt)("strong",{parentName:"p"},"Shell Script")," option to execute the Python script. This worked like a charm.")))}m.isMDXComponent=!0},80868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_01-9eb3b81ee9449b13457bff2a0eca9e2c.png"},80245:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Home_Assistant_MQTT_Auto-Discovery_02-e96a7fe76f1a33bb380599291dc1c6b3.png"},26358:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-155e3666db02195caa838d2d6d5dc4bf.jpg"}}]);