"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[94970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:9970,slug:"2020-08-02",title:"Setting up Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},o=void 0,l={unversionedId:"DevOps/GitOps/2020-08-02--gitlab-setup/index",id:"DevOps/GitOps/2020-08-02--gitlab-setup/index",title:"Setting up Gitlab",description:"Mong Kok, Hong Kong",source:"@site/docs/DevOps/GitOps/2020-08-02--gitlab-setup/index.md",sourceDirName:"DevOps/GitOps/2020-08-02--gitlab-setup",slug:"/DevOps/GitOps/2020-08-02--gitlab-setup/2020-08-02",permalink:"/docs/DevOps/GitOps/2020-08-02--gitlab-setup/2020-08-02",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2020-08-02--gitlab-setup/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9970,frontMatter:{sidebar_position:9970,slug:"2020-08-02",title:"Setting up Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Gitlab as Docker Registry",permalink:"/docs/DevOps/GitOps/2020-08-03--gitlab-as-docker-registry/2020-08-03"},next:{title:"Installing Gitlab on Ubuntu Server 20.04",permalink:"/docs/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/2020-08-01"}},s={},p=[{value:"Transferring a Github Repo",id:"transferring-a-github-repo",level:2},{value:"Adding your SSH Key",id:"adding-your-ssh-key",level:2},{value:"Committing Code to Gitlab",id:"committing-code-to-gitlab",level:2},{value:"Gitlab run Build",id:"gitlab-run-build",level:2},{value:"GitLab CI Runner Service",id:"gitlab-ci-runner-service",level:2},{value:"Installation of a Gitlab Runner from a Package Manager",id:"installation-of-a-gitlab-runner-from-a-package-manager",level:3},{value:"Setting Up a Runner",id:"setting-up-a-runner",level:3},{value:"Project Specific Runner",id:"project-specific-runner",level:4},{value:"Shared Runner",id:"shared-runner",level:4},{value:"Registering a GitLab CI Runner",id:"registering-a-gitlab-ci-runner",level:3}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mong Kok, Hong Kong",src:n(97103).Z,width:"1500",height:"661"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transferring-a-github-repo"},"Transferring a Github Repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#adding-your-ssh-key"},"Adding your SSH Key")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#committing-code-to-gitlab"},"Committing Code to Gitlab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gitlab-run-build"},"Gitlab run Build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#gitlab-ci-runner-service"},"GitLab CI Runner Service"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#installation-of-a-gitlab-runner-from-a-package-manager"},"Installation of a Gitlab Runner from a Package Manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#setting-up-a-runner"},"Setting Up a Runner"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#project-specific-runner"},"Project Specific Runner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#shared-runner"},"Shared Runner")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#registering-a-gitlab-ci-runner"},"Registering a GitLab CI Runner"))))),(0,r.kt)("h2",{id:"transferring-a-github-repo"},"Transferring a Github Repo"),(0,r.kt)("p",null,"Add the new gitlab remote to your existing repository and push:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add gitlab url-to-gitlab-repo\ngit push gitlab master\n")),(0,r.kt)("p",null,'Or open the Gitlab UI, start a new project and choose to import a repository from "Github". You first will be asked to create a ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"personal Github token")," and copy it to Gitlab. Select the repo scope, so we can display a list of your public and private repositories which are available to import."),(0,r.kt)("p",null,"Gitlab will now be able to list your Github repositories. Select the one you want to clone and click on ",(0,r.kt)("strong",{parentName:"p"},"Import"),"."),(0,r.kt)("h2",{id:"adding-your-ssh-key"},"Adding your SSH Key"),(0,r.kt)("p",null,"On Windows 10 make sure that the ",(0,r.kt)("a",{parentName:"p",href:"https://www.thewindowsclub.com/configure-openssh-client-and-server-on-windows-10"},"OpenSSH Client")," is installed."),(0,r.kt)("p",null,"Then type the following into your command line and hit Enter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen\n")),(0,r.kt)("p",null,"At this time, the system will ask you to save the default location. You can do it by pressing the Enter key.You can also change the path as per your requirement. However, by default, it offers the location in the following form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\users\\<yourusername>\\.ssh\\id_rsa\n")),(0,r.kt)("p",null,"After that, the system asks you to set a password (passphrase). If you want, you can continue without setting a password. To do so, just hit Enter key otherwise, type the passphrase there. As you press the Enter key, the fingerprint for your key and SHA256 will appear. The default algorithm is RSA 2048. The public key will be saved to the ",(0,r.kt)("inlineCode",{parentName:"p"},"id_rsa.pub file"),". By default, it is located in the following form:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"C:\\users\\<yourusername>\\.ssh\\id_rsa.pub\n")),(0,r.kt)("p",null,"Open the files inside your text editor and copy it. Past it into your Gitlab profile under ",(0,r.kt)("inlineCode",{parentName:"p"},"http://[Your Gitlab Domain]/profile/keys"),". Klick on Add key and you are now able SSH keys to establish a secure connection between your computer and GitLab."),(0,r.kt)("h2",{id:"committing-code-to-gitlab"},"Committing Code to Gitlab"),(0,r.kt)("p",null,"Enter your repository on Gitlab and click on the ",(0,r.kt)("strong",{parentName:"p"},"Clone")," button in the top right and copy the ",(0,r.kt)("strong",{parentName:"p"},"Clone with HTTP")," URL. Navigate to a suitable folder with your terminal and ",(0,r.kt)("inlineCode",{parentName:"p"},"git clone")," the URL you just copied:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone http://my.gitlab.URL/gitlab.user/my.repository.git\n")),(0,r.kt)("p",null,"Edit your source code and then stage your changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git add file.js     //staging a single file\ngit add myfolder    //staging a folder recursively\ngit add .           //staging everything that changed\n")),(0,r.kt)("p",null,"To unstage code run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git reset HEAD file.js\n")),(0,r.kt)("p",null,"To delete code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git rm file.js\ngit rm -r myfolder\n")),(0,r.kt)("p",null,"Then commit your code with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'git commit -m "Message that describes what changed"\ngit commit --amend -m "Put your corrected message here"\ngit status\n')),(0,r.kt)("p",null,"Now, we have the commit in our local Git repository, but to send it to the GitLab server, we have to enter another command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git push -u origin master\n")),(0,r.kt)("h2",{id:"gitlab-run-build"},"Gitlab run Build"),(0,r.kt)("p",null,"You can run a Gatsby build on your source code by adding the following ",(0,r.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," to the root of your project: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"image: node:latest\n\n# This folder is cached between builds\n# http://docs.gitlab.com/ce/ci/yaml/README.html#cache\ncache:\n  paths:\n    - node_modules/\n    # Enables git-lab CI caching. Both .cache and public must be cached, otherwise builds will fail.\n    - .cache/\n    - public/\n\ngatsby-build:\n  script:\n    - rm -rf ./release/deploy/app/*\n    - npm install\n    - ./node_modules/.bin/gatsby build --prefix-paths\n    - mv ./public/* ./release/deploy/app/\n  artifacts:\n    paths:\n      - public\n  only:\n    - master\n")),(0,r.kt)("p",null,"My project has a ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," directory that I use to build an Docker image from my code. This script will delete the old build inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," folder, install the necessary modules for the Gatsby run, start ",(0,r.kt)("inlineCode",{parentName:"p"},"gatsby build")," and copy the generated content from the ",(0,r.kt)("inlineCode",{parentName:"p"},"public")," folder into the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy/app")," folder."),(0,r.kt)("h2",{id:"gitlab-ci-runner-service"},"GitLab CI Runner Service"),(0,r.kt)("p",null,"We\u2019re now ready to set up a GitLab CI runner. To do this, we need to install the GitLab CI runner package on the system and start the GitLab runner service. The service can run multiple runner instances for different projects. The Runner can be installed on the same server that runs Gitlab. But can also be exported to a separate server."),(0,r.kt)("h3",{id:"installation-of-a-gitlab-runner-from-a-package-manager"},"Installation of a Gitlab Runner from a Package Manager"),(0,r.kt)("p",null,"Start by downloading the latest version of the GitLab CI runner repository configuration script to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh -o /tmp/gl-runner.deb.sh\n")),(0,r.kt)("p",null,"The script will set up your server to use the GitLab maintained repositories. This lets you manage GitLab runner packages with the same package management tools you use for your other system packages. Once this is complete, you can proceed with the installation using ",(0,r.kt)("inlineCode",{parentName:"p"},"apt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"apt install gitlab-runner\n")),(0,r.kt)("h3",{id:"setting-up-a-runner"},"Setting Up a Runner"),(0,r.kt)("p",null,"Next, we need to set up a GitLab CI runner so that it can begin accepting work. To do this, we need a GitLab runner token so that the runner can authenticate with the GitLab server. The type of token we need depends on how we want to use this runner - ",(0,r.kt)("strong",{parentName:"p"},"Project Specific")," or ",(0,r.kt)("strong",{parentName:"p"},"Shared"),"."),(0,r.kt)("h4",{id:"project-specific-runner"},"Project Specific Runner"),(0,r.kt)("p",null,"If you would like the runner to be tied to a specific project, begin by navigating to the project\u2019s page in the GitLab interface. From here, click the Settings item in the left-hand menu. Afterwards, click the CI/CD item in the submenu. Copy the registration token displayed in step 3 of the instructions:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Working with Gitlab",src:n(55366).Z,width:"903",height:"612"})),(0,r.kt)("p",null,"In the example above the toke is ",(0,r.kt)("inlineCode",{parentName:"p"},"_suHBCUTvmcyYrpygsHq"),". We will have to use this token when we continue to set up our runner."),(0,r.kt)("h4",{id:"shared-runner"},"Shared Runner"),(0,r.kt)("p",null,"To find the information required to register a shared runner, you will need to be logged in with an administrative account. Open the ",(0,r.kt)("strong",{parentName:"p"},"Admin Area")," and click on ",(0,r.kt)("strong",{parentName:"p"},"Runners")," in the ",(0,r.kt)("strong",{parentName:"p"},"Overview")," section. Copy the registration token in step 3:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Working with Gitlab",src:n(54404).Z,width:"969",height:"263"})),(0,r.kt)("p",null,"In the example above the toke is ",(0,r.kt)("inlineCode",{parentName:"p"},"zMtfpKoDE1qj4K5sXiUU"),". We will have to use this token when we continue to set up our runner."),(0,r.kt)("h3",{id:"registering-a-gitlab-ci-runner"},"Registering a GitLab CI Runner"),(0,r.kt)("p",null,"Now that you have a token, go back to the server where your GitLab CI runner service is installed. To register a new runner, type the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gitlab-runner register\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Please enter the gitlab-ci coordinator URL")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"https://gitlab.example.com/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gitlab-ci token")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"_suHBCUTvmcyYrpygsHq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gitlab-ci description")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"docker-build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gitlab-ci tags")," can be left blank"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enter the executor")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Docker image")," e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"alpine:latest"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'gitlab-runner register -n \\\n  --url https://gitlab.example.com/ \\\n  --registration-token "R_suHBCUTvmcyYrpygsHq" \\\n  --executor docker \\\n  --description "wiki-group-runner" \\\n  --docker-image "docker:19.03.12" \\\n  --docker-volumes /var/run/docker.sock:/var/run/docker.sock\n')),(0,r.kt)("p",null,"You can see the runners that the GitLab CI runner service currently has available by typing:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"gitlab-runner list\nRuntime platform                                    arch=amd64 os=linux pid=9771 revision=86ad88ea version=13.3.0\nListing configured runners                          ConfigFile=/etc/gitlab-runner/config.toml\ndocker-build                                        Executor=docker Token=saos7qEcigMWK_dAuYr9 URL=http://salt-minion/ci\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Working with Gitlab",src:n(8249).Z,width:"967",height:"342"})))}c.isMDXComponent=!0},55366:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Setup_03-18386938e1efd2fa7291ebba9af0c95f.png"},54404:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Setup_04-2cd72831a3853f13ca7a0ee3d6e418a9.png"},8249:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Gitlab_Setup_05-b0c9770909f4fe2a96cb48b8d91a2f8f.png"},97103:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c7f609117ad1e70316e5241b7580ec9.jpg"}}]);