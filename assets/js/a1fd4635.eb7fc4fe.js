"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[51490],{549148:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(785893),t=o(603905);const a={sidebar_position:7060,slug:"2020-12-01",title:"Trying out OpenHAB 3 in Docker",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT"]},i=void 0,s={id:"Automation_and_Robotics/Home_Automation/2020-12-01--openhab3-in-docker/index",title:"Trying out OpenHAB 3 in Docker",description:"Shenzhen, China",source:"@site/docs/Automation_and_Robotics/Home_Automation/2020-12-01--openhab3-in-docker/index.md",sourceDirName:"Automation_and_Robotics/Home_Automation/2020-12-01--openhab3-in-docker",slug:"/Automation_and_Robotics/Home_Automation/2020-12-01--openhab3-in-docker/2020-12-01",permalink:"/docs/Automation_and_Robotics/Home_Automation/2020-12-01--openhab3-in-docker/2020-12-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2020-12-01--openhab3-in-docker/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"}],version:"current",sidebarPosition:7060,frontMatter:{sidebar_position:7060,slug:"2020-12-01",title:"Trying out OpenHAB 3 in Docker",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT"]},sidebar:"tutorialSidebar",previous:{title:"OpenHAB 3 MQTT Binding",permalink:"/docs/Automation_and_Robotics/Home_Automation/2020-12-02--openhab3-mqtt-binding/2020-12-02"},next:{title:"Testing a new REST API in Node-RED",permalink:"/docs/Automation_and_Robotics/Home_Automation/2020-09-16--testing-new-rest-api-with-nodered/2020-09-16"}},c={},l=[{value:"Pulling the Docker Image",id:"pulling-the-docker-image",level:2},{value:"Preparing the System",id:"preparing-the-system",level:2},{value:"Running the Container",id:"running-the-container",level:2},{value:"Automating Docker setup using Ansible",id:"automating-docker-setup-using-ansible",level:2},{value:"Maintenance",id:"maintenance",level:2},{value:"Clean Up when things go wrong",id:"clean-up-when-things-go-wrong",level:3},{value:"OpenHAB CLI",id:"openhab-cli",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:o(192243).Z+"",width:"1500",height:"676"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#pulling-the-docker-image",children:"Pulling the Docker Image"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#preparing-the-system",children:"Preparing the System"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#running-the-container",children:"Running the Container"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#automating-docker-setup-using-ansible",children:"Automating Docker setup using Ansible"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#maintenance",children:"Maintenance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#clean-up-when-things-go-wrong",children:"Clean Up when things go wrong"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#openhab-cli",children:"OpenHAB CLI"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"pulling-the-docker-image",children:"Pulling the Docker Image"}),"\n",(0,r.jsxs)(n.p,{children:["The OpenHAB 3 image is available on ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/openhab/openhab/tags?page=1&ordering=last_updated",children:"Docker Hub"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull openhab/openhab:3.1.0-snapshot-alpine\n"})}),"\n",(0,r.jsx)(n.h2,{id:"preparing-the-system",children:"Preparing the System"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"groupadd -g 9001 openhab\r\nuseradd -g 9001 openhab\r\nusermod -a -G openhab myownuser\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p /opt/openhab/{openhab_addons,openhab_conf,openhab_userdata}\r\nchmod -R 775 /opt/openhab\n"})}),"\n",(0,r.jsx)(n.h2,{id:"running-the-container",children:"Running the Container"}),"\n",(0,r.jsx)(n.p,{children:"From your commandline:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run \\\r\n        --name openhab \\\r\n        --net=host \\\r\n        --privileged \\\r\n         --rm \\\r\n        -v /etc/localtime:/etc/localtime:ro \\\r\n        -v /opt/openhab/openhab_addons:/openhab/addons \\\r\n        -v /opt/openhab/openhab_conf:/openhab/conf \\\r\n        -v /opt/openhab/openhab_userdata:/openhab/userdata \\\r\n        -d \\\r\n        openhab/openhab:3.1.0-snapshot-alpine\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.strong,{children:"docker-compose"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'version: "3.8"\r\n\r\nservices:\r\n  openhab:\r\n    image: "openhab/openhab:3.1.0-snapshot-alpine"\r\n    restart: always\r\n    network_mode: host\r\n    volumes:\r\n      - "/etc/localtime:/etc/localtime:ro"\r\n      - "/etc/timezone:/etc/timezone:ro"\r\n      - "/opt/openhab/openhab_addons:/openhab/addons"\r\n      - "/opt/openhab/openhab_conf:/openhab/conf"\r\n      - "/opt/openhab/openhab_userdata:/openhab/userdata"\r\n    environment:\r\n      OPENHAB_HTTP_PORT: "8181"\r\n      OPENHAB_HTTPS_PORT: "8443"\r\n      EXTRA_JAVA_OPTS: "-Duser.timezone=Europe/Berlin"\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["I changed the HTTP port to 8181 - as I am already using the default port 8080 for a different service. Make sure the port is accessible from your LAN: ",(0,r.jsx)(n.code,{children:"ufw allow 8181/tcp"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"automating-docker-setup-using-ansible",children:"Automating Docker setup using Ansible"}),"\n",(0,r.jsx)(n.p,{children:"You can test it by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ansible-playbook -i mycontainerhost, -t openhab run-containers.yml\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:'- name: OpenHAB v3 Container\r\n  hosts: test\r\n  gather_facts: no\r\n  \r\n  tasks:\r\n\r\n  - name: Run OpenHab Container\r\n    tags: openhab\r\n    docker_container:\r\n      name: openhab\r\n      image: openhab/openhab:3.1.0-snapshot-alpine\r\n      state: started\r\n      detach: yes\r\n      interactive: yes\r\n      tty: yes\r\n      ports:\r\n        - 8181:8080\r\n        - 8101:8101\r\n        - 5007:5007\r\n      volumes:\r\n        - /etc/localtime:/etc/localtime:ro\r\n        - /etc/timezone:/etc/timezone:ro\r\n        - /opt/openhab/addons:/openhab/addons\r\n        - /opt/openhab/conf:/openhab/conf\r\n        - /opt/openhab/userdata:/openhab/userdata\r\n      keep_volumes: yes\r\n      hostname: openhab.localnet\r\n      memory: 512m\r\n      pull: true\r\n      restart_policy: unless-stopped\r\n      env:\r\n        EXTRA_JAVA_OPTS="-Duser.timezone=Europe/Berlin"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Run the playbook and visit the IP address of your server on port ",(0,r.jsx)(n.strong,{children:"8181"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Trying out OpenHAB 3 in Docker",src:o(336164).Z+"",width:"790",height:"479"})}),"\n",(0,r.jsx)(n.p,{children:"Choose the bindings that you will need to be installed:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Trying out OpenHAB 3 in Docker",src:o(193611).Z+"",width:"886",height:"636"})}),"\n",(0,r.jsx)(n.h2,{id:"maintenance",children:"Maintenance"}),"\n",(0,r.jsx)(n.h3,{id:"clean-up-when-things-go-wrong",children:"Clean Up when things go wrong"}),"\n",(0,r.jsxs)(n.p,{children:["Delete the contents of ",(0,r.jsx)(n.code,{children:"/opt/openhab/userdata/cache"})," and ",(0,r.jsx)(n.code,{children:"/opt/openhab/userdata/tmp"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"rm -rf /opt/openhab/userdata/cache\r\nrm -rf /opt/openhab/userdata/tmp\n"})}),"\n",(0,r.jsx)(n.h3,{id:"openhab-cli",children:"OpenHAB CLI"}),"\n",(0,r.jsx)(n.p,{children:"Access the OpenHAB command line tool inside the Docker container from your host system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker exec -it openhab /openhab/runtime/bin/client\r\n\r\nLogging in as openhab\r\nPassword:  PASSWORD IS habopen\r\n\r\n                           _   _     _     ____  \r\n   ___   ___   ___   ___  | | | |   / \\   | __ ) \r\n  / _ \\ / _ \\ / _ \\ / _ \\ | |_| |  / _ \\  |  _ \\ \r\n | (_) | (_) |  __/| | | ||  _  | / ___ \\ | |_) )\r\n  \\___/|  __/ \\___/|_| |_||_| |_|/_/   \\_\\|____/ \r\n       |_|       3.1.0-SNAPSHOT - Build #2099\r\n\r\nUse '<tab>' for a list of available commands\r\nand '[cmd] --help' for help on a specific command.\r\nTo exit, use '<ctrl-d>' or 'logout'.\r\n\r\nopenhab> \n"})}),"\n",(0,r.jsx)(n.p,{children:"Accessing the OpenHab logs from the CLI:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"openhab> log:tail\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},603905:(e,n,o)=>{o.d(n,{ah:()=>l});var r=o(667294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var c=r.createContext({}),l=function(e){var n=r.useContext(c),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=t,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||a;return o?r.createElement(m,i(i({ref:n},p),{},{components:o})):r.createElement(m,i({ref:n},p))}));p.displayName="MDXCreateElement"},336164:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/OpenHAB3_Docker_01-eacbf07e983b3d58e74a26449f6afbc5.png"},193611:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/OpenHAB3_Docker_02-d776f724f95a081184d64c9f5a412374.png"},192243:(e,n,o)=>{o.d(n,{Z:()=>r});const r=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e12a28f9c35f9ae6e3540843545ced7e.jpg"}}]);