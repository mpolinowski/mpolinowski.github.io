"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[60575],{470046:(o,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=n(474848),r=n(28453);const i={sidebar_position:8030,slug:"2019-09-24",title:"Installing ioBroker on CentOS8 with Podman",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},s=void 0,a={id:"Automation_and_Robotics/Home_Automation/2019-09-24--iobroker-podman-centos8/index",title:"Installing ioBroker on CentOS8 with Podman",description:"Shanghai, China",source:"@site/docs/Automation_and_Robotics/Home_Automation/2019-09-24--iobroker-podman-centos8/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2019-09-24--iobroker-podman-centos8",slug:"/Automation_and_Robotics/Home_Automation/2019-09-24--iobroker-podman-centos8/2019-09-24",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-09-24--iobroker-podman-centos8/2019-09-24",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2019-09-24--iobroker-podman-centos8/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Smarthome",permalink:"/docs/tags/smarthome"},{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8030,frontMatter:{sidebar_position:8030,slug:"2019-09-24",title:"Installing ioBroker on CentOS8 with Podman",authors:"mpolinowski",tags:["LINUX","Smarthome","IoT","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Zigbee Sensors in FHEM",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-01-05--zigbee2mqtt-xiaomi-fhem/2019-01-05"},next:{title:"OpenHAB2 and MQTT",permalink:"/docs/Automation_and_Robotics/Home_Automation/2018-12-01--openhab2-on-debian/2018-12-01"}},d={},c=[{value:"Installation through Podman on CentOS8",id:"installation-through-podman-on-centos8",level:2},{value:"Persist your Configuration",id:"persist-your-configuration",level:3}];function l(o){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"Shanghai, China",src:n(120744).A+"",width:"1500",height:"783"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:(0,t.jsx)(e.a,{href:"#installation-through-podman-on-centos8",children:"Installation through Podman on CentOS8"})}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"installation-through-podman-on-centos8",children:"Installation through Podman on CentOS8"}),"\n",(0,t.jsxs)(e.p,{children:["IoBroker for Docker is an Dockerimage for ",(0,t.jsx)(e.a,{href:"http://www.iobroker.net",children:"ioBroker IoT platform"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["The automatically built images are available on ",(0,t.jsx)(e.a,{href:"hhttps://github.com/buanet/docker-iobroker",children:"Docker Hub"}),". Download the image with one of the following command:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"podman pull buanet/iobroker:latest\n"})}),"\n",(0,t.jsx)(e.p,{children:"And and run it:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"podman run -p 8081:8081 --name iobroker buanet/iobroker:latest\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.img,{alt:"ioBroker CentOS8 Podman",src:n(996996).A+"",width:"825",height:"572"})}),"\n",(0,t.jsx)(e.h3,{id:"persist-your-configuration",children:"Persist your Configuration"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"Find out your container ID (or just use the name you have assigned when running the image)"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"podman ps \r\nCONTAINER ID  IMAGE                                     COMMAND               CREATED         STATUS             PORTS                             NAMES\r\n5582e69da175  localhost/buanet/iobroker:latest          /opt/scripts/iobr...  13 minutes ago  Up 13 minutes ago  0.0.0.0:8081->8081/tcp            iobroker\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"2",children:["\n",(0,t.jsx)(e.li,{children:"Get into the container and find the ioBroker location"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"[root@CentOS8 ~]# podman exec -ti 5582e69da175 /bin/bash\r\nroot@5582e69da175:/opt/iobroker# find / -name iobroker\r\n/etc/sudoers.d/iobroker\r\n/home/iobroker\r\n/opt/iobroker\r\n/opt/iobroker/iobroker\r\n/usr/bin/iobroker\r\n/iobroker\n"})}),"\n",(0,t.jsxs)(e.ol,{start:"3",children:["\n",(0,t.jsx)(e.li,{children:"Stop and delete the container and change to runscript to mount the folder onto your host system:"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-bash",children:"podman stop iobroker\r\npodman rm iobroker\r\npodman run -p 8081:8081 \\\r\n  -p 8082:8082 \\\r\n  -p 8087:8087 \\\r\n  -p 1883:1883 \\\r\n  --name iobroker \\\r\n   -v /opt/iobroker:/opt/iobroker \\\r\n   -v /opt/iobroker/home:/home/iobroker \\\r\n  --detach=true \\\r\n  --restart='always' \\\r\n  buanet/iobroker:latest\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["Port ",(0,t.jsx)(e.code,{children:"8082"})," added for ioBroker visualization, port ",(0,t.jsx)(e.code,{children:"8087"})," for the REST API and port ",(0,t.jsx)(e.code,{children:"1883"})," for MQTT."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Make sure that the folders ",(0,t.jsx)(e.code,{children:"/opt/iobroker/home"})," and ",(0,t.jsx)(e.code,{children:"/opt/iobroker"})," exist on your host system (",(0,t.jsx)(e.code,{children:"chmod -R 777 /opt/iobroker"})," or ",(0,t.jsx)(e.code,{children:"755"})," to give Podman all necessary permissions and ",(0,t.jsx)(e.code,{children:"chcon -Rt svirt_sandbox_file_t /opt/motioneye"}),")."]}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["I noticed a problem that podman changes the owner",":group"," of those folders on my host system to iobroker",":iobroker",". But it sets the permission wrong and ioBroker no longer loads - you can check it with ",(0,t.jsx)(e.code,{children:"podman logs iobroker"}),". Rerunning ",(0,t.jsx)(e.code,{children:"chmod -R 777 /opt/iobroker"})," solves the issue."]}),"\n"]})]})}function h(o={}){const{wrapper:e}={...(0,r.R)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(l,{...o})}):l(o)}},996996:(o,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/ioBroker_CentOS8_Podman_01-45a7e6bb2e723f100e3b4fa82d93f02f.png"},120744:(o,e,n)=>{n.d(e,{A:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-02e8518ad61483adf50687ea006a1f17.jpg"},28453:(o,e,n)=>{n.d(e,{R:()=>s,x:()=>a});var t=n(296540);const r={},i=t.createContext(r);function s(o){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof o?o(e):{...e,...o}}),[e,o])}function a(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(r):o.components||r:s(o.components),t.createElement(i.Provider,{value:e},o.children)}}}]);