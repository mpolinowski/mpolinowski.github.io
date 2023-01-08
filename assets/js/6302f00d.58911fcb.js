"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[9319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,g=u["".concat(s,".").concat(b)]||u[b]||d[b]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:9940,slug:"2021-02-25",title:"Gatsby Build Gitlab CI Pipeline",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},o=void 0,l={unversionedId:"DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/index",id:"DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/index",title:"Gatsby Build Gitlab CI Pipeline",description:"Guangzhou, China",source:"@site/docs/DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/index.md",sourceDirName:"DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline",slug:"/DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/2021-02-25",permalink:"/docs/DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/2021-02-25",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2021-02-25-gatsby-build-gitlab-pipeline/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Gatsby",permalink:"/docs/tags/gatsby"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:9940,frontMatter:{sidebar_position:9940,slug:"2021-02-25",title:"Gatsby Build Gitlab CI Pipeline",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},sidebar:"tutorialSidebar",previous:{title:"Install Gitlab with Docker-Compose (Debian Bullseye)",permalink:"/docs/DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/2022-03-16"},next:{title:"Working with Gitlab",permalink:"/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/2020-08-04"}},s={},p=[{value:"Adding a CI/CD Build Pipeline",id:"adding-a-cicd-build-pipeline",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:n(8064).Z,width:"1500",height:"667"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-a-cicd-build-pipeline"},"Adding a CI/CD Build Pipeline"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Continuation from ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"},"NGINX Docker Ingress for your Gatsby Build"))),(0,a.kt)("p",null,"I now have a Gatsby webpage that I build locally. ",(0,a.kt)("a",{parentName:"p",href:"/docs/Development/Go/2021-02-21-gofiber-container-gatsby/2021-02-21"},"Wrap it inside a GoFiber Web Container"),". I then uploaded this container to my server and provided an ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"},"NGINX Ingress container")," to handle the SSL certificate and direct web traffic to my web site."),(0,a.kt)("p",null,"Now I want to use Gitlab to do the hard work for me with ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/2020-08-04"},"Gitlab CI/CD Pipelines"),". I want to be able to upload my Gatsby source code to Gitlab and have it run the build for me. Afterwards it should trigger a second job that takes the ",(0,a.kt)("strong",{parentName:"p"},"Build Artifacts"),", wraps them inside the ",(0,a.kt)("strong",{parentName:"p"},"GoFiber Webserver Container")," and uploads the container into the ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2020-02-02--docker-images-in-gitlab/2020-02-02"},"Gitlab Docker Registry"),"."),(0,a.kt)("h2",{id:"adding-a-cicd-build-pipeline"},"Adding a CI/CD Build Pipeline"),(0,a.kt)("p",null,"After you ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/Provisioning/2020-02-01--gitlab-in-podman-on-centos8/2020-02-01"},"Installed Gitlab")," you can add your Gatsby project to your account. After adding a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")," file to the root directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},"# Dependency directories\nnode_modules/\n\n# Optional npm cache directory\n.npm\n\n# Optional eslint cache\n.eslintcache\n\n# dotenv environment variables file\n.env\n\n# gatsby files\n.cache/\npublic/\n\n# System files\n.DS_Store\n.thumbs\n")),(0,a.kt)("p",null,"Additionally, we need a ",(0,a.kt)("inlineCode",{parentName:"p"},".gitlab-ci.yml")," file that holds our instructions for the CI Pipline:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'image: node:latest\n\ncache:\n  paths:\n    - node_modules/\n    - .cache/\n    - public/\n\nstages:\n  - build\n  - deploy\n\npage-render:\n  stage: build\n  script:\n    - npm install\n    - npm run pre-build\n    - ./node_modules/.bin/gatsby build --prefix-paths\n  artifacts:\n    expire_in: 1 days\n    paths:\n      - public\n  only:\n    - master\n  tags: [build]\n\ncontainerize:\n  stage: deploy\n  script:\n    - curl --request POST --form "token=mysecrettoken" --form ref=master https://my.gitlab.com/api/v4/projects/75/trigger/pipeline\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Containerize")," step above is a ",(0,a.kt)("strong",{parentName:"p"},"Pipeline Trigger")," - ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/GitOps/2020-08-04--working-with-gitlab/2020-08-04#setting-a-pipline-tigger"},'see "Setting a Pipline Tigger"'),". This will take the ",(0,a.kt)("strong",{parentName:"p"},"Build Artifacts")," from the Gatsby build and build the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/gatsby_gofiber_container"},"GoFiber Container around it")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Building the binary of the App\nFROM golang:1.16 AS build\n\n# Project labels\nLABEL maintainer="m.polinowski@instar.com"\n\n# `wiki` should be replaced with your project name\nWORKDIR /go/src/wiki\n\n# Copy in the build artifacts from the Gatsby static build to add it to your GoFiber container\nCOPY . .\nRUN curl -L --header "PRIVATE-TOKEN: myprivatetoken" "https://my.gitlab.com/api/v4/projects/wiki%2Fwiki_en/jobs/artifacts/master/download?job=page-render" >> ./temp/artifacts.zip\nRUN apt update && apt install -y unzip && unzip -qq ./temp/artifacts.zip -d ./static\n\n# Downloads all the dependencies in advance (could be left out, but it\'s more clear this way)\nRUN go mod download\n\n# Builds the application as a staticly linked one, to allow it to run on alpine\nRUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -a -installsuffix cgo -o app .\n\n# Moving the binary to the \'final Image\' to make it smaller\nFROM alpine:latest\n\nWORKDIR /app\n\n# Create the `public` dir and copy all the assets into it\nRUN mkdir ./static\nCOPY --from=build /go/src/wiki/static ./static\n\n# `wiki` should be replaced here as well\nCOPY --from=build /go/src/wiki/app .\n\n# Exposes port 9999 because our program listens on that port\nEXPOSE 9999\n\n# CMD ["./app"]\nRUN chmod +x ./static/run.sh\nCMD ["ash", "./static/run.sh"]\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The last step in the Dockerfile above triggers a shell script that I added to the static folder of the project. It simply executes the compiled Fiber app for me - as I had difficulties to get it to run otherwise.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/ash\n./app\n")))}d.isMDXComponent=!0},8064:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-3d8ffa6b9b1e3c6c1237d6b73dec3fbc.jpg"}}]);