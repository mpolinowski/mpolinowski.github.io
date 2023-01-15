"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[48705],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,k=u["".concat(s,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},27:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(87462),o=(t(67294),t(3905));const a={sidebar_position:9030,slug:"2019-06-13",title:"Windows Server 2019 - Docker Daemon",authors:"mpolinowski",tags:["Windows","Docker"]},i=void 0,l={unversionedId:"DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon/index",id:"DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon/index",title:"Windows Server 2019 - Docker Daemon",description:"Shanghai, China",source:"@site/docs/DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon/index.mdx",sourceDirName:"DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon",slug:"/DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon/2019-06-13",permalink:"/docs/DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon/2019-06-13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Windows/2019-06-13--windows-server-2019-docker-daemon/index.mdx",tags:[{label:"Windows",permalink:"/docs/tags/windows"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2019-06-13",title:"Windows Server 2019 - Docker Daemon",authors:"mpolinowski",tags:["Windows","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Windows",permalink:"/docs/category/windows"},next:{title:"Windows Server 2019 - Active Directory Setup",permalink:"/docs/DevOps/Windows/2019-06-12--windows-server-2019-active-directory/2019-06-12"}},s={},c=[{value:"Installing Docker",id:"installing-docker",level:2},{value:"Downloading Docker Manually",id:"downloading-docker-manually",level:3}],d={toc:c};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Shanghai, China",src:t(91473).Z,width:"1500",height:"664"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installing-docker"},"Installing Docker"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#downloading-docker-manually"},"Downloading Docker Manually"))))),(0,o.kt)("p",null,"Windows containers allow users to package applications with their dependencies and leverage operating system-level virtualization to provide fast, fully isolated environments on a single system. Learn how to use Windows containers with our quick start guides, deployment guides, and samples."),(0,o.kt)("h2",{id:"installing-docker"},"Installing Docker"),(0,o.kt)("p",null,"Docker is required in order to work with Windows containers. Docker consists of the Docker Engine and the Docker client. To install Docker, we'll use the OneGet provider PowerShell module. The provider will enable the containers feature on your machine and install Docker, which will require a reboot."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install the OneGet PowerShell module.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Module -Name DockerMsftProvider -Repository PSGallery -Force\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Use OneGet to install the latest version of Docker.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Install-Package -Name docker -ProviderName DockerMsftProvider\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"When the installation is complete, reboot the computer.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"Restart-Computer -Force\n")),(0,o.kt)("p",null,"In countries that fears the internet you might end up with a screaming powershell at this point though:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows Server 2019",src:t(6443).Z,width:"1273",height:"591"})),(0,o.kt)("h3",{id:"downloading-docker-manually"},"Downloading Docker Manually"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/install/windows/#use-a-script-to-install-docker-ee"},"following guide")," if you wanted to install the Docker Engine - Enterprise manually, via a script, or on air-gapped systems."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In a PowerShell command prompt, download the installer archive on a machine that has a connection.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"# On an online machine, download the zip file.\nInvoke-WebRequest -UseBasicParsing -OutFile docker-19.03.3.zip https://download.docker.com/components/engine/windows-server/19.03/docker-19.03.3.zip\n")),(0,o.kt)("p",null,"This installs the latest version of docker at the moment - ",(0,o.kt)("inlineCode",{parentName:"p"},"19.03.3"),". If you need to download a specific Docker EE Engine release, all URLs can be found on this ",(0,o.kt)("a",{parentName:"p",href:"https://dockermsft.blob.core.windows.net/dockercontainer/DockerMsftIndex.json"},"JSON index"),"."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"In a PowerShell command prompt, use the following commands to extract the archive, register, and start the Docker service.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"# Stop Docker service if eralier version of Docker is already installed\nStop-Service docker\n    \n# Extract the archive.\nExpand-Archive docker-19.03.3.zip -DestinationPath $Env:ProgramFiles -Force\n\n# Clean up the zip file.\nRemove-Item -Force docker-19.03.3.zip\n\n# Install Docker. This requires rebooting.\n$null = Install-WindowsFeature containers\n\nRestart-Computer -Force\n\n# Add Docker to the path for the current session.\n$env:path += ';$env:ProgramFiles\\docker'\n\n# Optionally, modify PATH to persist across sessions.\n$newPath = '$env:ProgramFiles\\docker;' +\n[Environment]::GetEnvironmentVariable('PATH',\n[EnvironmentVariableTarget]::Machine)\n\n[Environment]::SetEnvironmentVariable('PATH', $newPath,\n[EnvironmentVariableTarget]::Machine)\n\n# Register the Docker daemon as a service.\ndockerd --register-service\n\n# Start the Docker service.\nStart-Service docker\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Test your Docker EE installation by running the ",(0,o.kt)("inlineCode",{parentName:"li"},"hello-world")," container.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"docker pull hello-world:nanoserver\ndocker images\ndocker container run hello-world:nanoserver\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Windows Server 2019",src:t(38266).Z,width:"840",height:"469"})))}p.isMDXComponent=!0},6443:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Windows_Server_2019_01-4ea32b0be138e6853c664ca772e0c220.png"},38266:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Windows_Server_2019_02-9ef2e9d10b4f275acd828e7634d9cfee.png"},91473:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-f654_gfdgbg4e345g4_sf-bfc8f1f79edc9b8c9913aed41d58a3db.png"}}]);