"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[94970],{835381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=t(785893),i=t(603905);const s={sidebar_position:9970,slug:"2020-08-02",title:"Setting up Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},a=void 0,o={id:"DevOps/GitOps/2020-08-02--gitlab-setup/index",title:"Setting up Gitlab",description:"Mong Kok, Hong Kong",source:"@site/docs/DevOps/GitOps/2020-08-02--gitlab-setup/index.md",sourceDirName:"DevOps/GitOps/2020-08-02--gitlab-setup",slug:"/DevOps/GitOps/2020-08-02--gitlab-setup/2020-08-02",permalink:"/docs/DevOps/GitOps/2020-08-02--gitlab-setup/2020-08-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2020-08-02--gitlab-setup/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9970,frontMatter:{sidebar_position:9970,slug:"2020-08-02",title:"Setting up Gitlab",authors:"mpolinowski",tags:["LINUX","Gitlab"]},sidebar:"tutorialSidebar",previous:{title:"Gitlab as Docker Registry",permalink:"/docs/DevOps/GitOps/2020-08-03--gitlab-as-docker-registry/2020-08-03"},next:{title:"Installing Gitlab on Ubuntu Server 20.04",permalink:"/docs/DevOps/GitOps/2020-08-01--gitlab-install-on-ubuntu-server/2020-08-01"}},l={},c=[{value:"Transferring a Github Repo",id:"transferring-a-github-repo",level:2},{value:"Adding your SSH Key",id:"adding-your-ssh-key",level:2},{value:"Committing Code to Gitlab",id:"committing-code-to-gitlab",level:2},{value:"Gitlab run Build",id:"gitlab-run-build",level:2},{value:"GitLab CI Runner Service",id:"gitlab-ci-runner-service",level:2},{value:"Installation of a Gitlab Runner from a Package Manager",id:"installation-of-a-gitlab-runner-from-a-package-manager",level:3},{value:"Setting Up a Runner",id:"setting-up-a-runner",level:3},{value:"Project Specific Runner",id:"project-specific-runner",level:4},{value:"Shared Runner",id:"shared-runner",level:4},{value:"Registering a GitLab CI Runner",id:"registering-a-gitlab-ci-runner",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Mong Kok, Hong Kong",src:t(497103).Z+"",width:"1500",height:"661"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#transferring-a-github-repo",children:"Transferring a Github Repo"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#adding-your-ssh-key",children:"Adding your SSH Key"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#committing-code-to-gitlab",children:"Committing Code to Gitlab"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#gitlab-run-build",children:"Gitlab run Build"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#gitlab-ci-runner-service",children:"GitLab CI Runner Service"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation-of-a-gitlab-runner-from-a-package-manager",children:"Installation of a Gitlab Runner from a Package Manager"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#setting-up-a-runner",children:"Setting Up a Runner"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#project-specific-runner",children:"Project Specific Runner"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#shared-runner",children:"Shared Runner"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#registering-a-gitlab-ci-runner",children:"Registering a GitLab CI Runner"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"transferring-a-github-repo",children:"Transferring a Github Repo"}),"\n",(0,r.jsx)(n.p,{children:"Add the new gitlab remote to your existing repository and push:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git remote add gitlab url-to-gitlab-repo\r\ngit push gitlab master\n"})}),"\n",(0,r.jsxs)(n.p,{children:['Or open the Gitlab UI, start a new project and choose to import a repository from "Github". You first will be asked to create a ',(0,r.jsx)(n.a,{href:"https://github.com/settings/tokens",children:"personal Github token"})," and copy it to Gitlab. Select the repo scope, so we can display a list of your public and private repositories which are available to import."]}),"\n",(0,r.jsxs)(n.p,{children:["Gitlab will now be able to list your Github repositories. Select the one you want to clone and click on ",(0,r.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"adding-your-ssh-key",children:"Adding your SSH Key"}),"\n",(0,r.jsxs)(n.p,{children:["On Windows 10 make sure that the ",(0,r.jsx)(n.a,{href:"https://www.thewindowsclub.com/configure-openssh-client-and-server-on-windows-10",children:"OpenSSH Client"})," is installed."]}),"\n",(0,r.jsx)(n.p,{children:"Then type the following into your command line and hit Enter:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ssh-keygen\n"})}),"\n",(0,r.jsx)(n.p,{children:"At this time, the system will ask you to save the default location. You can do it by pressing the Enter key.You can also change the path as per your requirement. However, by default, it offers the location in the following form:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"C:\\users\\<yourusername>\\.ssh\\id_rsa\n"})}),"\n",(0,r.jsxs)(n.p,{children:["After that, the system asks you to set a password (passphrase). If you want, you can continue without setting a password. To do so, just hit Enter key otherwise, type the passphrase there. As you press the Enter key, the fingerprint for your key and SHA256 will appear. The default algorithm is RSA 2048. The public key will be saved to the ",(0,r.jsx)(n.code,{children:"id_rsa.pub file"}),". By default, it is located in the following form:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"C:\\users\\<yourusername>\\.ssh\\id_rsa.pub\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Open the files inside your text editor and copy it. Past it into your Gitlab profile under ",(0,r.jsx)(n.code,{children:"http://[Your Gitlab Domain]/profile/keys"}),". Klick on Add key and you are now able SSH keys to establish a secure connection between your computer and GitLab."]}),"\n",(0,r.jsx)(n.h2,{id:"committing-code-to-gitlab",children:"Committing Code to Gitlab"}),"\n",(0,r.jsxs)(n.p,{children:["Enter your repository on Gitlab and click on the ",(0,r.jsx)(n.strong,{children:"Clone"})," button in the top right and copy the ",(0,r.jsx)(n.strong,{children:"Clone with HTTP"})," URL. Navigate to a suitable folder with your terminal and ",(0,r.jsx)(n.code,{children:"git clone"})," the URL you just copied:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone http://my.gitlab.URL/gitlab.user/my.repository.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"Edit your source code and then stage your changes:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git add file.js     //staging a single file\r\ngit add myfolder    //staging a folder recursively\r\ngit add .           //staging everything that changed\n"})}),"\n",(0,r.jsx)(n.p,{children:"To unstage code run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git reset HEAD file.js\n"})}),"\n",(0,r.jsx)(n.p,{children:"To delete code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git rm file.js\r\ngit rm -r myfolder\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then commit your code with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'git commit -m "Message that describes what changed"\r\ngit commit --amend -m "Put your corrected message here"\r\ngit status\n'})}),"\n",(0,r.jsx)(n.p,{children:"Now, we have the commit in our local Git repository, but to send it to the GitLab server, we have to enter another command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git push -u origin master\n"})}),"\n",(0,r.jsx)(n.h2,{id:"gitlab-run-build",children:"Gitlab run Build"}),"\n",(0,r.jsxs)(n.p,{children:["You can run a Gatsby build on your source code by adding the following ",(0,r.jsx)(n.code,{children:".gitlab-ci.yml"})," to the root of your project:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"image: node:latest\r\n\r\n# This folder is cached between builds\r\n# http://docs.gitlab.com/ce/ci/yaml/README.html#cache\r\ncache:\r\n  paths:\r\n    - node_modules/\r\n    # Enables git-lab CI caching. Both .cache and public must be cached, otherwise builds will fail.\r\n    - .cache/\r\n    - public/\r\n\r\ngatsby-build:\r\n  script:\r\n    - rm -rf ./release/deploy/app/*\r\n    - npm install\r\n    - ./node_modules/.bin/gatsby build --prefix-paths\r\n    - mv ./public/* ./release/deploy/app/\r\n  artifacts:\r\n    paths:\r\n      - public\r\n  only:\r\n    - master\n"})}),"\n",(0,r.jsxs)(n.p,{children:["My project has a ",(0,r.jsx)(n.code,{children:"deploy"})," directory that I use to build an Docker image from my code. This script will delete the old build inside the ",(0,r.jsx)(n.code,{children:"app"})," folder, install the necessary modules for the Gatsby run, start ",(0,r.jsx)(n.code,{children:"gatsby build"})," and copy the generated content from the ",(0,r.jsx)(n.code,{children:"public"})," folder into the ",(0,r.jsx)(n.code,{children:"deploy/app"})," folder."]}),"\n",(0,r.jsx)(n.h2,{id:"gitlab-ci-runner-service",children:"GitLab CI Runner Service"}),"\n",(0,r.jsx)(n.p,{children:"We\u2019re now ready to set up a GitLab CI runner. To do this, we need to install the GitLab CI runner package on the system and start the GitLab runner service. The service can run multiple runner instances for different projects. The Runner can be installed on the same server that runs Gitlab. But can also be exported to a separate server."}),"\n",(0,r.jsx)(n.h3,{id:"installation-of-a-gitlab-runner-from-a-package-manager",children:"Installation of a Gitlab Runner from a Package Manager"}),"\n",(0,r.jsxs)(n.p,{children:["Start by downloading the latest version of the GitLab CI runner repository configuration script to the ",(0,r.jsx)(n.code,{children:"/tmp"})," directory:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl -L https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh -o /tmp/gl-runner.deb.sh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The script will set up your server to use the GitLab maintained repositories. This lets you manage GitLab runner packages with the same package management tools you use for your other system packages. Once this is complete, you can proceed with the installation using ",(0,r.jsx)(n.code,{children:"apt"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"apt install gitlab-runner\n"})}),"\n",(0,r.jsx)(n.h3,{id:"setting-up-a-runner",children:"Setting Up a Runner"}),"\n",(0,r.jsxs)(n.p,{children:["Next, we need to set up a GitLab CI runner so that it can begin accepting work. To do this, we need a GitLab runner token so that the runner can authenticate with the GitLab server. The type of token we need depends on how we want to use this runner - ",(0,r.jsx)(n.strong,{children:"Project Specific"})," or ",(0,r.jsx)(n.strong,{children:"Shared"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"project-specific-runner",children:"Project Specific Runner"}),"\n",(0,r.jsx)(n.p,{children:"If you would like the runner to be tied to a specific project, begin by navigating to the project\u2019s page in the GitLab interface. From here, click the Settings item in the left-hand menu. Afterwards, click the CI/CD item in the submenu. Copy the registration token displayed in step 3 of the instructions:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Working with Gitlab",src:t(955366).Z+"",width:"903",height:"612"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above the toke is ",(0,r.jsx)(n.code,{children:"_suHBCUTvmcyYrpygsHq"}),". We will have to use this token when we continue to set up our runner."]}),"\n",(0,r.jsx)(n.h4,{id:"shared-runner",children:"Shared Runner"}),"\n",(0,r.jsxs)(n.p,{children:["To find the information required to register a shared runner, you will need to be logged in with an administrative account. Open the ",(0,r.jsx)(n.strong,{children:"Admin Area"})," and click on ",(0,r.jsx)(n.strong,{children:"Runners"})," in the ",(0,r.jsx)(n.strong,{children:"Overview"})," section. Copy the registration token in step 3:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Working with Gitlab",src:t(154404).Z+"",width:"969",height:"263"})}),"\n",(0,r.jsxs)(n.p,{children:["In the example above the toke is ",(0,r.jsx)(n.code,{children:"zMtfpKoDE1qj4K5sXiUU"}),". We will have to use this token when we continue to set up our runner."]}),"\n",(0,r.jsx)(n.h3,{id:"registering-a-gitlab-ci-runner",children:"Registering a GitLab CI Runner"}),"\n",(0,r.jsx)(n.p,{children:"Now that you have a token, go back to the server where your GitLab CI runner service is installed. To register a new runner, type the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gitlab-runner register\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Please enter the gitlab-ci coordinator URL"})," e.g. ",(0,r.jsx)(n.code,{children:"https://gitlab.example.com/"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"gitlab-ci token"})," e.g. ",(0,r.jsx)(n.code,{children:"_suHBCUTvmcyYrpygsHq"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"gitlab-ci description"})," e.g. ",(0,r.jsx)(n.code,{children:"docker-build"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"gitlab-ci tags"})," can be left blank"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Enter the executor"})," e.g. ",(0,r.jsx)(n.code,{children:"docker"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Default Docker image"})," e.g. ",(0,r.jsx)(n.code,{children:"alpine:latest"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'gitlab-runner register -n \\\r\n  --url https://gitlab.example.com/ \\\r\n  --registration-token "R_suHBCUTvmcyYrpygsHq" \\\r\n  --executor docker \\\r\n  --description "wiki-group-runner" \\\r\n  --docker-image "docker:19.03.12" \\\r\n  --docker-volumes /var/run/docker.sock:/var/run/docker.sock\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can see the runners that the GitLab CI runner service currently has available by typing:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gitlab-runner list\r\nRuntime platform                                    arch=amd64 os=linux pid=9771 revision=86ad88ea version=13.3.0\r\nListing configured runners                          ConfigFile=/etc/gitlab-runner/config.toml\r\ndocker-build                                        Executor=docker Token=saos7qEcigMWK_dAuYr9 URL=http://salt-minion/ci\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Working with Gitlab",src:t(308249).Z+"",width:"967",height:"342"})})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=c(t),p=i,g=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return t?r.createElement(g,a(a({ref:n},h),{},{components:t})):r.createElement(g,a({ref:n},h))}));h.displayName="MDXCreateElement"},955366:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Gitlab_Setup_03-18386938e1efd2fa7291ebba9af0c95f.png"},154404:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Gitlab_Setup_04-2cd72831a3853f13ca7a0ee3d6e418a9.png"},308249:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Gitlab_Setup_05-b0c9770909f4fe2a96cb48b8d91a2f8f.png"},497103:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c7f609117ad1e70316e5241b7580ec9.jpg"}}]);