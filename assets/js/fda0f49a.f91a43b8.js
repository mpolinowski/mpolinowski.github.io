"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[50828],{984578:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var i=n(785893),t=n(603905);const s={sidebar_position:9990,slug:"2020-02-02",title:"Running Gitlab as Docker Registry",authors:"mpolinowski",tags:["LINUX","Docker","Gitlab"]},a=void 0,o={id:"DevOps/GitOps/2020-02-02--docker-images-in-gitlab/index",title:"Running Gitlab as Docker Registry",description:"Siem Reap, Cambodia",source:"@site/docs/DevOps/GitOps/2020-02-02--docker-images-in-gitlab/index.mdx",sourceDirName:"DevOps/GitOps/2020-02-02--docker-images-in-gitlab",slug:"/DevOps/GitOps/2020-02-02--docker-images-in-gitlab/2020-02-02",permalink:"/docs/DevOps/GitOps/2020-02-02--docker-images-in-gitlab/2020-02-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2020-02-02--docker-images-in-gitlab/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9990,frontMatter:{sidebar_position:9990,slug:"2020-02-02",title:"Running Gitlab as Docker Registry",authors:"mpolinowski",tags:["LINUX","Docker","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Installing Gitlab on Ubuntu Server 20.04",permalink:"/docs/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/2020-08-01"},next:{title:"Running Gitlab in Podman on CentOS8",permalink:"/docs/DevOps/GitOps/2020-02-01--gitlab-in-podman-on-centos8/2020-02-01"}},l={},c=[{value:"Install the Local Docker Registry",id:"install-the-local-docker-registry",level:2},{value:"Copy an image from Docker Hub to your Registry",id:"copy-an-image-from-docker-hub-to-your-registry",level:3},{value:"Podman and insecure Registries",id:"podman-and-insecure-registries",level:3},{value:"Pushing Images into your local Registry",id:"pushing-images-into-your-local-registry",level:3},{value:"Pulling Images from your local Registry",id:"pulling-images-from-your-local-registry",level:3},{value:"Enable the Container Registry in Gitlab",id:"enable-the-container-registry-in-gitlab",level:2}];function d(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Siem Reap, Cambodia",src:n(228502).Z+"",width:"1500",height:"593"})}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"#install-the-local-docker-registry",children:"Install the Local Docker Registry"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#copy-an-image-from-docker-hub-to-your-registry",children:"Copy an image from Docker Hub to your Registry"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#podman-and-insecure-registries",children:"Podman and insecure Registries"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#pushing-images-into-your-local-registry",children:"Pushing Images into your local Registry"})}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#pulling-images-from-your-local-registry",children:"Pulling Images from your local Registry"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(r.li,{children:(0,i.jsx)(r.a,{href:"#enable-the-container-registry-in-gitlab",children:"Enable the Container Registry in Gitlab"})}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"install-the-local-docker-registry",children:"Install the Local Docker Registry"}),"\n",(0,i.jsxs)(r.p,{children:["Use a command like the following to start the ",(0,i.jsx)(r.a,{href:"https://docs.docker.com/registry/deploying/",children:"registry container"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"podman run -d -p 5000:5000 --restart=always --name registry registry:2\r\n\r\npodman ps -a\r\n\r\nCONTAINER ID  IMAGE                         STATUS             PORTS                   NAMES\r\n1a14df139a2f  docker.io/library/registry:2  Up 28 seconds ago  0.0.0.0:5000->5000/tcp  registry\n"})}),"\n",(0,i.jsx)(r.h3,{id:"copy-an-image-from-docker-hub-to-your-registry",children:"Copy an image from Docker Hub to your Registry"}),"\n",(0,i.jsx)(r.p,{children:"Pull the ubuntu:16.04 image from Docker Hub:"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"podman pull hello-world:latest\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Tag the image as ",(0,i.jsx)(r.code,{children:"localhost:5000/my-world"}),". This creates an additional tag for the existing image. When the first part of the tag is a hostname and port, Docker interprets this as the location of a registry, when pushing."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"podman tag hello-world:latest localhost:5000/my-world\r\n\r\npodman images\r\n\r\nREPOSITORY\r\ndocker.io/gitlab/gitlab-ce     latest            8065f4b39790   4 days ago     2.06 GB\r\ndocker.io/library/registry     2                 708bc6af7e5e   3 months ago   26.3 MB\r\nlocalhost:5000/my-world        latest            bf756fb1ae65   4 months ago   20 kB\n"})}),"\n",(0,i.jsx)(r.h3,{id:"podman-and-insecure-registries",children:"Podman and insecure Registries"}),"\n",(0,i.jsxs)(r.p,{children:["We can add our local and non-TLS protected Docker Registry through the system-wide registries configuration file. On CentOS 8, that file resides at ",(0,i.jsx)(r.code,{children:"/etc/containers/registries.conf"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-cfg",children:"# The only valid categories are: 'registries.search', 'registries.insecure',\r\n# and 'registries.block'.\r\n\r\n[registries.search]\r\nregistries = ['docker.io', 'quay.io']\r\n\r\n# If you need to access insecure registries, add the registry's fully-qualified name.\r\n# An insecure registry is one that does not have a valid SSL certificate or only does HTTP.\r\n[registries.insecure]\r\nregistries = ['localhost:5000']\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Here you can see I have two registries defined under the search header and a single registry defined as an insecure registry - our local registry on port ",(0,i.jsx)(r.code,{children:"5000"}),". The registries under the search header are registries that Podman will search when you try to find an image that is not fully-qualified."]}),"\n",(0,i.jsx)(r.h3,{id:"pushing-images-into-your-local-registry",children:"Pushing Images into your local Registry"}),"\n",(0,i.jsxs)(r.p,{children:["Push the image to the local registry running at ",(0,i.jsx)(r.code,{children:"localhost:5000"}),":"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"podman push localhost:5000/my-world\r\n\r\nGetting image source signatures\r\nCopying blob 9c27e219663c done\r\nCopying config bf756fb1ae done\r\nWriting manifest to image destination\r\nStoring signatures\n"})}),"\n",(0,i.jsx)(r.h3,{id:"pulling-images-from-your-local-registry",children:"Pulling Images from your local Registry"}),"\n",(0,i.jsxs)(r.p,{children:["Remove the locally-cached ",(0,i.jsx)(r.code,{children:"hello-world:latest"})," and ",(0,i.jsx)(r.code,{children:"localhost:5000/my-world"})," images, so that you can test pulling the image from your registry. This does not remove the ",(0,i.jsx)(r.code,{children:"localhost:5000/my-world"})," image from your registry."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"podman rmi hello-world:latest\r\npodman rmi localhost:5000/my-world\r\n\r\npodman images\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Pull the ",(0,i.jsx)(r.code,{children:"localhost:5000/my-world"})," image from your local registry:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"podman pull localhost:5000/my-world\r\n\r\npodman run localhost:5000/my-world\n"})}),"\n",(0,i.jsx)(r.h2,{id:"enable-the-container-registry-in-gitlab",children:"Enable the Container Registry in Gitlab"}),"\n",(0,i.jsx)(r.p,{children:"After the installation is complete, you will have to configure the Registry\u2019s settings in gitlab.yml in order to enable it."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-bash",children:"nano /srv/gitlab/data/gitlab-rails/etc/gitlab.yml\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Scroll down to the ",(0,i.jsx)(r.strong,{children:"Container Registry"})," section and add the following information:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-yml",children:"## Container Registry\r\nregistry:\r\n  enabled: true\r\n  host: centos8.fritz.box\r\n  port: 5005\r\n  api_url: http://localhost:5000/\r\n  key: /var/opt/gitlab/gitlab-rails/etc/gitlab-registry.key\r\n  path: shared/registry\r\n  issuer: omnibus-gitlab-issuer\n"})}),"\n",(0,i.jsxs)(r.p,{children:["Your ",(0,i.jsx)(r.code,{children:"nano /srv/gitlab/config/gitlab.rb"})," should contain the Registry URL as well as the path to the existing TLS certificate and key used by GitLab:"]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-ruby",children:"##########################################################################\r\n## Container Registry settings\r\n##! Docs: https://docs.gitlab.com/ee/administration/container_registry.html\r\n###########################################################################\r\n\r\nregistry_external_url 'http://centos8.fritz.box:5005'\n"})}),"\n",(0,i.jsx)(r.p,{children:"Your local registry is now available from inside your repository:"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.img,{alt:"Running Gitlab as Docker Registry",src:n(336e3).Z+"",width:"1050",height:"474"})})]})}function g(e={}){const{wrapper:r}={...(0,t.ah)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,r,n)=>{n.d(r,{ah:()=>c});var i=n(667294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,i,t=function(e,r){if(null==e)return{};var n,i,t={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=i.createContext({}),c=function(e){var r=i.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},g=i.forwardRef((function(e,r){var n=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),h=c(n),u=t,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||s;return n?i.createElement(m,a(a({ref:r},g),{},{components:n})):i.createElement(m,a({ref:r},g))}));g.displayName="MDXCreateElement"},336e3:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/Gitlab_Docker_Registry_01-b11e20bf228506ca73fc95a57a52d844.png"},228502:(e,r,n)=>{n.d(r,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-dcf82d0887cf51644642c20d8ed1b9ba.jpg"}}]);