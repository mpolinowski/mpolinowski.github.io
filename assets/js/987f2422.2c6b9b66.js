"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[45249],{558669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=n(474848),r=n(28453);const a={sidebar_position:8050,slug:"2022-06-23",title:"INSTAR MQTTv5 with Python - Client Connection",authors:"mpolinowski",tags:["Python","MQTT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."},s=void 0,c={id:"Automation_and_Robotics/MQTT/2022-06-23-instar-mqtt-python-part-I/index",title:"INSTAR MQTTv5 with Python - Client Connection",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type.",source:"@site/docs/Automation_and_Robotics/MQTT/2022-06-23-instar-mqtt-python-part-I/index.mdx",sourceDirName:"Automation_and_Robotics/MQTT/2022-06-23-instar-mqtt-python-part-I",slug:"/Automation_and_Robotics/MQTT/2022-06-23-instar-mqtt-python-part-I/2022-06-23",permalink:"/docs/Automation_and_Robotics/MQTT/2022-06-23-instar-mqtt-python-part-I/2022-06-23",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/MQTT/2022-06-23-instar-mqtt-python-part-I/index.mdx",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"MQTT",permalink:"/docs/tags/mqtt"}],version:"current",sidebarPosition:8050,frontMatter:{sidebar_position:8050,slug:"2022-06-23",title:"INSTAR MQTTv5 with Python - Client Connection",authors:"mpolinowski",tags:["Python","MQTT"],image:"https://mpolinowski.github.io/img/search/mqtt.png",description:"The discovery of MQTT devices will enable one to use MQTT devices with only minimal configuration effort on the side of Home Assistant. Two parts are required on the device side - The configuration topic which contains the necessary device type and unique identifier, and the remaining device configuration without the device type."},sidebar:"tutorialSidebar",previous:{title:"Rust - MQTT Hello World",permalink:"/docs/Automation_and_Robotics/MQTT/2022-07-21-rust-hello-world/2022-07-21"},next:{title:"INSTAR MQTT with RabbitMQ",permalink:"/docs/Automation_and_Robotics/MQTT/2022-03-30--mqtt-with-rabbit-mq/2022-03-30"}},o={},l=[{value:"Adding a Personal TLS Certificate",id:"adding-a-personal-tls-certificate",level:2},{value:"Generating a Private Certificate Authority",id:"generating-a-private-certificate-authority",level:3},{value:"Creating a Certificate for the Mosquitto Server",id:"creating-a-certificate-for-the-mosquitto-server",level:3},{value:"Upload to your INSTAR Camera",id:"upload-to-your-instar-camera",level:3},{value:"CA Store",id:"ca-store",level:4},{value:"Server Certificate",id:"server-certificate",level:4},{value:"Creating a Certificate for each MQTT Client",id:"creating-a-certificate-for-each-mqtt-client",level:3},{value:"Testing the MQTT TLS Client Authentication",id:"testing-the-mqtt-tls-client-authentication",level:3},{value:"Installing paho-mqtt for Python",id:"installing-paho-mqtt-for-python",level:2},{value:"Connecting a Python Client to our INSTAR MQTT(S)v5 Server",id:"connecting-a-python-client-to-our-instar-mqttsv5-server",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Guangzhou, China",src:n(744477).A+"",width:"1500",height:"383"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#adding-a-personal-tls-certificate",children:"Adding a Personal TLS Certificate"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#generating-a-private-certificate-authority",children:"Generating a Private Certificate Authority"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#creating-a-certificate-for-the-mosquitto-server",children:"Creating a Certificate for the Mosquitto Server"})}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#upload-to-your-instar-camera",children:"Upload to your INSTAR Camera"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#ca-store",children:"CA Store"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#server-certificate",children:"Server Certificate"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#creating-a-certificate-for-each-mqtt-client",children:"Creating a Certificate for each MQTT Client"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#testing-the-mqtt-tls-client-authentication",children:"Testing the MQTT TLS Client Authentication"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"#installing-paho-mqtt-for-python",children:"Installing paho-mqtt for Python"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#connecting-a-python-client-to-our-instar-mqttsv5-server",children:"Connecting a Python Client to our INSTAR MQTT(S)v5 Server"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"adding-a-personal-tls-certificate",children:"Adding a Personal TLS Certificate"}),"\n",(0,i.jsx)(t.h3,{id:"generating-a-private-certificate-authority",children:"Generating a Private Certificate Authority"}),"\n",(0,i.jsxs)(t.p,{children:["INSTAR Cameras already have a valid CA certificate installed that we can use when we access the MQTT service via the camera's DDNS address (e.g. ",(0,i.jsx)(t.code,{children:"ab1234.ddns3-instar.de"}),"). Alternatively, we can upload our own self-signed certificate."]}),"\n",(0,i.jsx)(t.p,{children:"To do this we will use OpenSSL to generate an X.509 digital certificate that uses the X.509 PKI (short for\npublic key infrastructure) standard. This digital certificate allows us to confirm that a\nspecific public key belongs to the subject included within the certificate. There is an identity\nthat issues the certificate and its details are also included in the certificate."}),"\n",(0,i.jsxs)(t.p,{children:["Create a new directory named ",(0,i.jsx)(t.code,{children:"mosquitto_certificates"})," enter the folder and run the following OpenSSL commands:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"openssl genrsa -out ca.key 2048\nopenssl req -x509 -new -nodes -key ca.key -sha512 -days 3650 -out ca.crt\n"})}),"\n",(0,i.jsx)(t.p,{children:"Since we will not be verifying the certificate, it does not really matter what you fill out here:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Country Name (2 letter code) [AU]:\nState or Province Name (full name) [Some-State]:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:INSTAR MQTTv5\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:INSTAR MQTTv5\nEmail Address []:\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After running the previous commands, we will have the following two files in the ",(0,i.jsx)(t.code,{children:"mqtt_certificates"})," directory:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ca.key"}),": Certificate authority key"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"ca.crt"}),": Certificate authority certificate file"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-certificate-for-the-mosquitto-server",children:"Creating a Certificate for the Mosquitto Server"}),"\n",(0,i.jsx)(t.p,{children:"We need generate a new private key and use the key to and generates the server certificate:\nfile"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"openssl genrsa -out server.key 2048\nopenssl req -new -key server.key -out server.csr\n"})}),"\n",(0,i.jsx)(t.p,{children:"It does not really matter what you fill out here. Except - you have to set the FQDN to an address/url through which you will be contacting the MQTT service:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Country Name (2 letter code) [AU]:\nState or Province Name (full name) [Some-State]:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:INSTAR MQTTv5\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:192.168.2.118\nEmail Address []:\n\nPlease enter the following 'extra' attributes\nto be sent with your certificate request\nA challenge password []:\nAn optional company name []:\n"})}),"\n",(0,i.jsx)(t.p,{children:"The command generates a server.crt file with the signed X.509 digital certificate for the\nMosquitto server:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 3650 -sha512\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Signature ok\nsubject=C = AU, ST = Some-State, O = INSTAR MQTTv5, CN = 192.168.2.118\nGetting CA Private Key\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After running the previous commands, we will have the following 3 new files in the ",(0,i.jsx)(t.code,{children:"mqtt_certificates"})," directory:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"server.key"}),": Server key"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"server.csr"}),": Server certificate signing request"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"server.crt"}),": Server certificate file"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"upload-to-your-instar-camera",children:"Upload to your INSTAR Camera"}),"\n",(0,i.jsx)(t.p,{children:"Your INSTAR camera has two expectations that we need to full fill before uploading our certificates:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Combine the ",(0,i.jsx)(t.code,{children:"server.key"})," and ",(0,i.jsx)(t.code,{children:"server.crt"})," in a single file ",(0,i.jsx)(t.code,{children:"server.pem"}),":"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEAy/8kPEhDg9rJ3Rb60Vax7pgtUTKLQ0hi1BZl3OBH/JuKmvVO\n...\njLeAC8HlqWJMNlm8DWSIGWZSBmgS11Dakw8gGxNJ4UThUwnx2XrnLA==\n-----END RSA PRIVATE KEY-----\n-----BEGIN CERTIFICATE-----\nMIIDKzCCAhMCFArfrELy23ar8AW8OKk5WXn7TLa/MA0GCSqGSIb3DQEBDQUAMFIx\n...\nPlC3SfWTSo3XJlPjU2xRToRG4rO7oyxN/0X7dGQLCrSJjSJoC3Jeky91EpIouwU=\n-----END CERTIFICATE-----\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"2",children:["\n",(0,i.jsxs)(t.li,{children:["Open the ",(0,i.jsx)(t.code,{children:"ca.crt"})," and re-save it as ",(0,i.jsx)(t.code,{children:"ca.pem"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"ca-store",children:"CA Store"}),"\n",(0,i.jsxs)(t.p,{children:["Now take the ",(0,i.jsx)(t.code,{children:"ca.pem"})," and upload it to the INSTAR CA Store:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"INSTAR MQTT API Python",src:n(220554).A+"",width:"594",height:"497"})}),"\n",(0,i.jsx)(t.h4,{id:"server-certificate",children:"Server Certificate"}),"\n",(0,i.jsxs)(t.p,{children:["Next, upload the ",(0,i.jsx)(t.code,{children:"server.pem"})," file as our camera's TLS certificate:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"INSTAR MQTT API Python",src:n(377985).A+"",width:"592",height:"830"})}),"\n",(0,i.jsx)(t.p,{children:"Don't forget to toggle it on before leaving this menu."}),"\n",(0,i.jsx)(t.h3,{id:"creating-a-certificate-for-each-mqtt-client",children:"Creating a Certificate for each MQTT Client"}),"\n",(0,i.jsx)(t.p,{children:"Run the following command to create a 2,048-bit client key and the certificate-signing request, also known as CSR:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"openssl genrsa -out client.key 2048\nopenssl req -new -key client.key -out client.csr\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Country Name (2 letter code) [AU]:\nState or Province Name (full name) [Some-State]:\nLocality Name (eg, city) []:\nOrganization Name (eg, company) [Internet Widgits Pty Ltd]:INSTAR MQTTv5\nOrganizational Unit Name (eg, section) []:\nCommon Name (e.g. server FQDN or YOUR name) []:MQTT Client\nEmail Address []:\n\nPlease enter the following 'extra' attributes\nto be sent with your certificate request\nA challenge password []:\nAn optional company name []:\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The following command then generates a ",(0,i.jsx)(t.code,{children:"client.crt"})," file with the signed X.509 digital certificate for the MQTT client:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"openssl x509 -req -in client.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out client.crt -days 3650 -sha512 -addtrust clientAuth\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"Signature ok\nsubject=C = AU, ST = Some-State, O = INSTAR MQTTv5, CN = MQTT Client\nGetting CA Private Key\n"})}),"\n",(0,i.jsx)(t.h3,{id:"testing-the-mqtt-tls-client-authentication",children:"Testing the MQTT TLS Client Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["We can now test our certificates, for example, with an graphical MQTT client like the MQTT Explorer. Start by uploading the ",(0,i.jsx)(t.code,{children:"ca.crt"})," and ",(0,i.jsx)(t.code,{children:"client.crt"})," + ",(0,i.jsx)(t.code,{children:"client.key"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"INSTAR MQTT API Python",src:n(156856).A+"",width:"1021",height:"639"})}),"\n",(0,i.jsx)(t.p,{children:"Activate your cameras MQTT Server with TLS encryption:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"INSTAR MQTT API Python",src:n(762647).A+"",width:"1180",height:"666"})}),"\n",(0,i.jsx)(t.p,{children:"And configure the MQTT Explorer with your camera's IP address and MQTT Broker login:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"INSTAR MQTT API Python",src:n(579502).A+"",width:"1020",height:"655"})}),"\n",(0,i.jsxs)(t.p,{children:["Hit ",(0,i.jsx)(t.strong,{children:"Connect"})," and you should see your Broker messages as well as your camera's state messages coming in:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"INSTAR MQTT API Python",src:n(290981).A+"",width:"1022",height:"606"})}),"\n",(0,i.jsx)(t.p,{children:"Now with everything set up - Python!"}),"\n",(0,i.jsx)(t.h2,{id:"installing-paho-mqtt-for-python",children:"Installing paho-mqtt for Python"}),"\n",(0,i.jsxs)(t.p,{children:["Create a ",(0,i.jsx)(t.code,{children:"dependencies.txt"})," file inside your project folder/venv with the following dependencies:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"paho-mqtt==1.6.1\n"})}),"\n",(0,i.jsx)(t.p,{children:"And install them using:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"pip install -r dependencies.txt\n"})}),"\n",(0,i.jsx)(t.h3,{id:"connecting-a-python-client-to-our-instar-mqttsv5-server",children:"Connecting a Python Client to our INSTAR MQTT(S)v5 Server"}),"\n",(0,i.jsxs)(t.p,{children:["First, we will have to create an MQTT client with ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/paho-mqtt/",children:"paho-mqtt"})," that connects to the INSTAR MQTT server. And the configuration is about the same as the one we needed to connect the MQTT Explorer:"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"config.py"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'import os.path\n# Replace mosquitto_certificates with the path\n# in which you saved the certificate authority file,\n# the client certificate file and the client key\ncertificates_path = "mosquitto_certificates"\nca_certificate = os.path.join(certificates_path, "ca.crt")\nclient_certificate = os.path.join(certificates_path, "client.crt")\nclient_key = os.path.join(certificates_path, "client.key")\n# Replace 192.168.2.118 with the IP or hostname\n# INSTAR IP cameras\n# Make sure the IP or hostname matches the value\n# you used for Common Name for the certificate\nmqtt_server_host = "192.168.2.118"\nmqtt_server_port = 8883\nmqtt_bind_address = ""\nmqtt_bind_port = 0\nmqtt_username = "admin"\nmqtt_password = "instar"\nmqtt_transport = "tcp"\nmqtt_keepalive = 60\nmqtt_client_id = "mqtt5_client"\nmqtt_lwt = "cameras/118/status/testament"\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"subscription.py"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:'from config import *\nimport paho.mqtt.client as mqtt\nimport ssl\nimport json\n\ndef on_connect(client, userdata, flags, rc, properties=None):\n    if rc==0:\n        print("INFO :: Connected to MQTT Broker")\n        client.subscribe(mqtt_lwt, qos=2, options=None, properties=None)\n        client.connected_flag=True\n    else:\n        print("ERROR :: Connection failed:", rc)\n        client.connected_flag=False\n\ndef on_subscribe(client, userdata, mid, granted_qos, properties=None):\n    print("INFO :: LWT Subscription: {}".format(\n        granted_qos[0]))\n\ndef on_message(client, userdata, msg):\n    json_object = json.loads(msg.payload)\n    print("INFO :: Message received. LWT: {}. State: {}".format(\n        msg.topic,\n        json_object["val"]))\n        \nif __name__ == "__main__":\n    client = mqtt.Client(client_id = mqtt_client_id, protocol = mqtt.MQTTv5, transport = mqtt_transport)\n    client.username_pw_set(username = mqtt_username, password = mqtt_password)\n    client.tls_set(ca_certs = ca_certificate, certfile = client_certificate,\n                    keyfile = client_key, cert_reqs = ssl.CERT_NONE,\n                    tls_version = ssl.PROTOCOL_TLSv1_2)\n    client.tls_insecure_set(True)\n    client.connect(host = mqtt_server_host, port = mqtt_server_port,\n                    keepalive = mqtt_keepalive, bind_address = mqtt_bind_address, bind_port = mqtt_bind_port, properties = None)\n    client.on_connect = on_connect\n    client.on_subscribe = on_subscribe\n    client.on_message = on_message\n    client.loop_forever()\n    if client.bad_connection_flag:\n        print("ERROR :: No Connection to Broker")\n        client.loop_stop()\n        sys.exit()\n'})}),"\n",(0,i.jsxs)(t.p,{children:["We can run the subscription script and restart our camera we can see the ",(0,i.jsx)(t.strong,{children:"LWT"})," (",(0,i.jsx)(t.em,{children:"last-will-and-testament"}),") topic value change from ",(0,i.jsx)(t.code,{children:"alive"})," to ",(0,i.jsx)(t.code,{children:"dead"})," and back to ",(0,i.jsx)(t.code,{children:"alive"})," once our client managed to reconnect:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"python subscription.py\n\nINFO :: Connected to MQTT Broker\nINFO :: LWT Subscription: Granted QoS 2\nINFO :: Message received. LWT: cameras/118/status/testament. State: alive\nINFO :: Message received. LWT: cameras/118/status/testament. State: dead\nINFO :: Connected to MQTT Broker\nINFO :: LWT Subscription: Granted QoS 2\nINFO :: Message received. LWT: cameras/118/status/testament. State: alive\n"})})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},220554:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/INSTAR_MQTT_Python_01-bc5f31b36e6b770948ee6e874ab68a3e.png"},377985:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/INSTAR_MQTT_Python_02-49c6e03a4a44e1a1b7f73f81e6700449.png"},156856:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/INSTAR_MQTT_Python_03-76246a10b4a61be637097cc72b4621c9.png"},762647:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/INSTAR_MQTT_Python_04-2429fc985205917203ec0e49b2e9701b.png"},579502:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/INSTAR_MQTT_Python_05-dbe3eb3ef80ff356bb7478b76925456a.png"},290981:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/INSTAR_MQTT_Python_06-cfc23e336af5ae6a7833abc61d94eabe.png"},744477:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(296540);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);