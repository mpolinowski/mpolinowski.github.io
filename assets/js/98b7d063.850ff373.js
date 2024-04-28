"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[44364],{109270:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>s,toc:()=>d});var r=i(474848),l=i(28453);const t={sidebar_position:9920,slug:"2022-11-10",title:"Go Gitlab CI Pipeline",authors:"mpolinowski",tags:["Go","Gitlab"],description:"Build your Go app in Gitlab"},a=void 0,s={id:"DevOps/GitOps/2022-11-10-go-gitlab-ci-pipeline/index",title:"Go Gitlab CI Pipeline",description:"Build your Go app in Gitlab",source:"@site/docs/DevOps/GitOps/2022-11-10-go-gitlab-ci-pipeline/index.md",sourceDirName:"DevOps/GitOps/2022-11-10-go-gitlab-ci-pipeline",slug:"/DevOps/GitOps/2022-11-10-go-gitlab-ci-pipeline/2022-11-10",permalink:"/docs/DevOps/GitOps/2022-11-10-go-gitlab-ci-pipeline/2022-11-10",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/GitOps/2022-11-10-go-gitlab-ci-pipeline/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"},{label:"Gitlab",permalink:"/docs/tags/gitlab"}],version:"current",sidebarPosition:9920,frontMatter:{sidebar_position:9920,slug:"2022-11-10",title:"Go Gitlab CI Pipeline",authors:"mpolinowski",tags:["Go","Gitlab"],description:"Build your Go app in Gitlab"},sidebar:"tutorialSidebar",previous:{title:"Github Passkeys",permalink:"/docs/DevOps/GitOps/2023-10-28-github-passkey/2023-10-28"},next:{title:"Install Gitlab with Docker-Compose (Debian Bullseye)",permalink:"/docs/DevOps/GitOps/2022-03-16--gitlab-docker-compose-on-localhost/2022-03-16"}},o={},d=[{value:"Hello Go",id:"hello-go",level:2},{value:"Initializing the Project",id:"initializing-the-project",level:3},{value:"Verify the Project",id:"verify-the-project",level:3},{value:"Test Build",id:"test-build",level:3},{value:"Dockerize",id:"dockerize",level:2},{value:"Running the Build",id:"running-the-build",level:3},{value:"Gitlab CI Pipeline",id:"gitlab-ci-pipeline",level:2},{value:"Register a Runner",id:"register-a-runner",level:3},{value:"Download and install binary",id:"download-and-install-binary",level:4},{value:"Command to register runner",id:"command-to-register-runner",level:4},{value:"Run the Pipeline",id:"run-the-pipeline",level:2},{value:"Download the Artifacts",id:"download-the-artifacts",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:i(742196).A+"",width:"1500",height:"546"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#hello-go",children:"Hello Go"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#initializing-the-project",children:"Initializing the Project"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#verify-the-project",children:"Verify the Project"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#test-build",children:"Test Build"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#dockerize",children:"Dockerize"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#running-the-build",children:"Running the Build"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#gitlab-ci-pipeline",children:"Gitlab CI Pipeline"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#register-a-runner",children:"Register a Runner"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#download-and-install-binary",children:"Download and install binary"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#command-to-register-runner",children:"Command to register runner"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#run-the-pipeline",children:"Run the Pipeline"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#download-the-artifacts",children:"Download the Artifacts"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/go-cicd",children:"Github Repository"})}),"\n",(0,r.jsx)(n.h2,{id:"hello-go",children:"Hello Go"}),"\n",(0,r.jsx)(n.h3,{id:"initializing-the-project",children:"Initializing the Project"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir hello-go && cd hello-go\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a web hello world and a test function that can verify our application is operational:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"main.go"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"log"\r\n\t"net/http"\r\n\r\n\t"github.com/gorilla/mux"\r\n)\r\n\r\nvar port = "6969"\r\n\r\nfunc main() {\r\n\tlog.Fatal(http.ListenAndServe(":"+port, router()))\r\n}\r\n\r\nfunc router() http.Handler {\r\n\tr := mux.NewRouter()\r\n\tr.Path("/hi").Methods(http.MethodGet).HandlerFunc(greet)\r\n\treturn r\r\n}\r\n\r\nfunc greet(w http.ResponseWriter, req *http.Request) {\r\n\t_, _ = w.Write([]byte("Go la la!"))\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"main-test.go"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"net/http"\r\n\t"net/http/httptest"\r\n\t"testing"\r\n)\r\n\r\nfunc TestRouter(t *testing.T) {\r\n\tw := httptest.NewRecorder()\r\n\treq := httptest.NewRequest(http.MethodGet, "/hi", nil)\r\n\trouter().ServeHTTP(w, req)\r\n\r\n\texpected := "Go la la!"\r\n\tactual := w.Body.String()\r\n\tif expected != actual {\r\n\t\tt.Fatalf("Expected %s but got %s", expected, actual)\r\n\t}\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"And initialize the project with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go mod init hello-go\r\ngo: creating new go.mod: module hello-go\r\ngo: to add module requirements and sums:\r\n        go mod tidy\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will generate our Go modules file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:"module hello-go\r\n\r\ngo 1.19\r\n\r\nrequire github.com/gorilla/mux v1.8.0\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now we can use the ",(0,r.jsx)(n.code,{children:"tidy"})," command to pull the required dependencies:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go mod tidy\r\ngo: finding module for package github.com/gorilla/mux\r\ngo: downloading github.com/gorilla/mux v1.8.0\r\ngo: found github.com/gorilla/mux in github.com/gorilla/mux v1.8.0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"verify-the-project",children:"Verify the Project"}),"\n",(0,r.jsx)(n.p,{children:"Run the hello world application with:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go run ./main.go\n"})}),"\n",(0,r.jsx)(n.p,{children:"And verify that the hello world string is served as expected:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:6969/hi\r\nGo la la!\n"})}),"\n",(0,r.jsx)(n.p,{children:"And now to using our automated test:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go test ./...\r\nok      hello-go        0.003s\n"})}),"\n",(0,r.jsx)(n.p,{children:"Looking good :thumbsup:"}),"\n",(0,r.jsx)(n.h3,{id:"test-build",children:"Test Build"}),"\n",(0,r.jsx)(n.p,{children:"We can try a build and verify that the compiled application is working:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go build -o hi .\r\n./hi\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:6969/hi\r\nGo la la!\n"})}),"\n",(0,r.jsx)(n.h2,{id:"dockerize",children:"Dockerize"}),"\n",(0,r.jsxs)(n.p,{children:["Now we can use Docker to first build the hello world application inside a (big - ",(0,r.jsx)(n.em,{children:"352MB"}),") ",(0,r.jsx)(n.code,{children:"golang:alpine"})," Docker container. And then copy the build binary into a (tiny ",(0,r.jsx)(n.em,{children:"5.54MB"}),") Alpine container ready for deployment:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'FROM golang:alpine as build\r\n\r\nWORKDIR /build\r\n\r\nCOPY . .\r\n\r\nRUN go mod tidy\r\n\r\nRUN go build -o hi\r\n\r\nFROM alpine:latest\r\n\r\nCOPY --from=build /build/hi /usr/local/bin/hi\r\n\r\nENTRYPOINT ["/usr/local/bin/hi"]\n'})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"})," that both source images are based on Alpine linux to reduce the container size. You ",(0,r.jsx)(n.strong,{children:"cannot"})," use. e.g. the default ",(0,r.jsx)(n.code,{children:"golang:latest"})," container (",(0,r.jsx)(n.em,{children:"non-Alpine"}),") to build the binary and then run it inside an Alpine container. (",(0,r.jsx)(n.em,{children:"How does that affect cross-compiling?"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"running-the-build",children:"Running the Build"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker build -t hi-there .\r\n\r\nSending build context to Docker daemon   6.81MB\r\nStep 1/8 : FROM golang:alpine as build\r\n ---\x3e 6e31dcd72d8f\r\nStep 2/8 : WORKDIR /go/src/app\r\n ---\x3e Running in 793c410f2896\r\nRemoving intermediate container 793c410f2896\r\n ---\x3e 4b8c2620281a\r\nStep 3/8 : COPY . .\r\n ---\x3e b244b9819dba\r\nStep 4/8 : RUN go mod tidy\r\n ---\x3e Running in 287c8695c309\r\ngo: downloading github.com/gorilla/mux v1.8.0\r\nRemoving intermediate container 287c8695c309\r\n ---\x3e 8ba74df6c6e1\r\nStep 5/8 : RUN go build -o hi\r\n ---\x3e Running in d910102a1d38\r\nRemoving intermediate container d910102a1d38\r\n ---\x3e d72a114948bc\r\nStep 6/8 : FROM alpine:latest\r\n ---\x3e 9c6f07244728\r\nStep 7/8 : COPY --from=build /go/src/app/hi /usr/local/bin/hi\r\n ---\x3e 86f8a7da8842\r\nStep 8/8 : ENTRYPOINT ["/usr/local/bin/hi"]\r\n ---\x3e Running in bacdb35f27ec\r\nRemoving intermediate container bacdb35f27ec\r\n ---\x3e b4a259e2f0df\r\nSuccessfully built b4a259e2f0df\r\nSuccessfully tagged hi-there:latest\n'})}),"\n",(0,r.jsx)(n.p,{children:"This generated two docker images:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker images\r\nREPOSITORY                                TAG             IMAGE ID       CREATED          SIZE\r\nhi-there                                  latest          b4a259e2f0df   20 seconds ago   12.3MB\r\n<none>                                    <none>          d72a114948bc   22 seconds ago   367MB\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The first one is our application image and the second one is the build image that can be removed - ",(0,r.jsx)(n.code,{children:"docker rmi d72a114948bc"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"We can test the application by running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker run -ti -p 6969:6969 --name hi-there  hi-there /bin/ash /usr/local/bin/hi\n"})}),"\n",(0,r.jsx)(n.p,{children:"And, again, verify that everything is running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'docker ps\r\n\r\nIMAGE      COMMAND                  PORTS                    NAMES\r\nhi-there   "/usr/local/bin/hi /\u2026"   0.0.0.0:6969->6969/tcp   hi-there\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"curl localhost:6969/hi\r\nGo la la!\n"})}),"\n",(0,r.jsx)(n.h2,{id:"gitlab-ci-pipeline",children:"Gitlab CI Pipeline"}),"\n",(0,r.jsx)(n.p,{children:"The project now looks like:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"hello-go\r\n\u251c\u2500\u2500 Dockerfile\r\n\u251c\u2500\u2500 go.mod\r\n\u251c\u2500\u2500 go.sum\r\n\u251c\u2500\u2500 hi\r\n\u251c\u2500\u2500 main.go\r\n\u251c\u2500\u2500 main_test.go\r\n\u2514\u2500\u2500 .gitlab-ci.yml\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following commands can be used to install all dependencies, to run the application:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"go get -v -d ./...\r\ngo test -v ./...\r\ngo run src/main.go\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now everything is set and tested we need to write a ",(0,r.jsx)(n.code,{children:".gitlab-ci.yml"})," file to configure a build pipeline:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"image: golang:latest\r\n\r\nvariables:\r\n  REPO: my.gitlab.com\r\n  GROUP: server_management\r\n  PROJECT: go-hello\r\n\r\nstages:\r\n - test\r\n - build\r\n\r\nbefore_script:\r\n  - mkdir -p $GOPATH/src/$REPO/$GROUP $GOPATH/src/_/builds\r\n  - cp -r $CI_PROJECT_DIR $GOPATH/src/$REPO/$GROUP/$PROJECT\r\n  - ln -s $GOPATH/src/$REPO/$GROUP $GOPATH/src/_/builds/$GROUP\r\n  - go get -v -d ./...\r\n\r\nunit_tests:\r\n  stage: test\r\n  script:\r\n    - go test -v ./...\r\n\r\nbuild:\r\n  stage: build\r\n  script:\r\n    - go build -v -o hi\r\n    - ls -la\r\n    - pwd\r\n  only:\r\n    - main\r\n  artifacts:\r\n    paths:\r\n      - /builds/server_management/hello-go/hi\r\n    expire_in: 1 hour\n"})}),"\n",(0,r.jsx)(n.h3,{id:"register-a-runner",children:"Register a Runner"}),"\n",(0,r.jsx)(n.p,{children:"Gitlab needs a minion process to run pipeline. The following commands will install the runner on a LINUX server."}),"\n",(0,r.jsx)(n.h4,{id:"download-and-install-binary",children:"Download and install binary"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Download the binary for your system\r\ncurl -L --output /usr/local/bin/gitlab-runner https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-linux-amd64\r\n\r\n# Give it permission to execute\r\nchmod +x /usr/local/bin/gitlab-runner\r\n\r\n# Create a GitLab Runner user\r\nuseradd --comment 'GitLab Runner' --create-home gitlab-runner --shell /bin/bash\r\n\r\n# Install and run as a service\r\ngitlab-runner install --user=gitlab-runner --working-directory=/home/gitlab-runner\r\ngitlab-runner start\n"})}),"\n",(0,r.jsx)(n.h4,{id:"command-to-register-runner",children:"Command to register runner"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"Registration Token"})," can be found in the project settings under ",(0,r.jsx)(n.strong,{children:"CI/CD"}),":"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Go Gitlab CI Pipeline",src:i(348876).A+"",width:"1224",height:"341"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"gitlab-runner register --url GITLAB_URL --registration-token REGISTRATION_TOKEN\r\n\r\nRegistering runner... succeeded \r\nEnter an executor: docker\r\nEnter the default Docker image: golang:alpine\r\nRunner registered successfully\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Configuration is stored in ",(0,r.jsx)(n.code,{children:"/etc/gitlab-runner/config.toml"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"run-the-pipeline",children:"Run the Pipeline"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'...\r\n\r\n$ mkdir -p $GOPATH/src/$REPO/$GROUP $GOPATH/src/_/builds\r\n$ cp -r $CI_PROJECT_DIR $GOPATH/src/$REPO/$GROUP/$PROJECT\r\n$ ln -s $GOPATH/src/$REPO/$GROUP $GOPATH/src/_/builds/$GROUP\r\n$ go get -v -d ./...\r\ngo: downloading github.com/gorilla/mux v1.8.0\r\n$ go build -v -o hi\r\ngithub.com/gorilla/mux\r\nhello-go\r\nUploading artifacts for successful job\r\n00:02\r\nUploading artifacts...\r\n/builds/server_management/hello-go/hi: found 1 matching files and directories \r\nUploading artifacts as "archive" to coordinator... 201 Created  id=14602 responseStatus=201 Created token=FZzQWvUQ\r\nCleaning up project directory and file based variables\r\n00:00\r\nJob succeeded\n'})}),"\n",(0,r.jsx)(n.h2,{id:"download-the-artifacts",children:"Download the Artifacts"}),"\n",(0,r.jsx)(n.p,{children:"The build binary can be downloaded from:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"https://my.gitlab.com/server_management/hello-go/-/jobs/artifacts/main/browse?job=build"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Go Gitlab CI Pipeline",src:i(599559).A+"",width:"1012",height:"297"})})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},348876:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/Go-Gitlab-CI-Pipeline_01-a0f58afd06931e45417b5f65f53fa507.png"},599559:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/Go-Gitlab-CI-Pipeline_02-1382e9f65eda0e228fa0255b6b8631d7.png"},742196:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var r=i(296540);const l={},t=r.createContext(l);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);