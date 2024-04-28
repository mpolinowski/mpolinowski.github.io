"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[27021],{388275:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var r=s(474848),a=s(28453);const t={sidebar_position:8070,slug:"2022-11-19",title:"Kubernetes Beyond the Edge",tags:["LINUX","Docker","Kubernetes"],description:"Installing K3S on Air-Gapped Bare-Metal Server"},i=void 0,d={id:"DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes/index",title:"Kubernetes Beyond the Edge",description:"Installing K3S on Air-Gapped Bare-Metal Server",source:"@site/docs/DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes/index.md",sourceDirName:"DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes",slug:"/DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes/2022-11-19",permalink:"/docs/DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes/2022-11-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Kubernetes/2022-11-19--k3s-air-gapped-kubernetes/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",sidebarPosition:8070,frontMatter:{sidebar_position:8070,slug:"2022-11-19",title:"Kubernetes Beyond the Edge",tags:["LINUX","Docker","Kubernetes"],description:"Installing K3S on Air-Gapped Bare-Metal Server"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/category/kubernetes"},next:{title:"Setting up an OKD Cluster",permalink:"/docs/DevOps/Kubernetes/2019-03-05--first-openshift3-cluster/2019-03-05"}},l={},o=[{value:"K3s",id:"k3s",level:2},{value:"Manually Deploy Images and Binary",id:"manually-deploy-images-and-binary",level:2},{value:"Prepare the Images Directory and K3s Binary",id:"prepare-the-images-directory-and-k3s-binary",level:3},{value:"Prepare the K3s Binary",id:"prepare-the-k3s-binary",level:3},{value:"Installing K3s in an Air-Gapped Environment",id:"installing-k3s-in-an-air-gapped-environment",level:2},{value:"Kubernetes Dashboard",id:"kubernetes-dashboard",level:2},{value:"Deploying the Kubernetes Dashboard",id:"deploying-the-kubernetes-dashboard",level:3},{value:"Dashboard RBAC Configuration",id:"dashboard-rbac-configuration",level:3},{value:"Obtain the Bearer Token",id:"obtain-the-bearer-token",level:4},{value:"Local Access to the Dashboard",id:"local-access-to-the-dashboard",level:2},{value:"Run a Stateless Application Using a Deployment",id:"run-a-stateless-application-using-a-deployment",level:2},{value:"Uninstalling K3s",id:"uninstalling-k3s",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Harbin, China",src:s(392486).A+"",width:"1500",height:"821"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#k3s",children:"K3s"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#manually-deploy-images-and-binary",children:"Manually Deploy Images and Binary"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#prepare-the-images-directory-and-k3s-binary",children:"Prepare the Images Directory and K3s Binary"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#prepare-the-k3s-binary",children:"Prepare the K3s Binary"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installing-k3s-in-an-air-gapped-environment",children:"Installing K3s in an Air-Gapped Environment"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#kubernetes-dashboard",children:"Kubernetes Dashboard"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#deploying-the-kubernetes-dashboard",children:"Deploying the Kubernetes Dashboard"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#dashboard-rbac-configuration",children:"Dashboard RBAC Configuration"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#obtain-the-bearer-token",children:"Obtain the Bearer Token"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#local-access-to-the-dashboard",children:"Local Access to the Dashboard"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#run-a-stateless-application-using-a-deployment",children:"Run a Stateless Application Using a Deployment"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#uninstalling-k3s",children:"Uninstalling K3s"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"k3s",children:"K3s"}),"\n",(0,r.jsx)(n.p,{children:"K3S - the lightweight Kubernetes. Production ready, easy to install, half the memory, all in a binary less than 100 MB. Used for Edge, IoT, CI, Development, ARM, Embedding k8s and situations where a PhD in k8s clusterology is infeasible"}),"\n",(0,r.jsxs)(n.p,{children:["You can install ",(0,r.jsx)(n.a,{href:"https://docs.k3s.io/",children:"K3s"})," in an air-gapped environment using two different methods. An air-gapped environment is any environment that is not directly connected to the Internet. You can either deploy a ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/registry/deploying/#run-an-externally-accessible-registry",children:"private registry"})," and ",(0,r.jsx)(n.a,{href:"https://docs.k3s.io/installation/private-registry",children:"mirror docker.io"}),", or you can manually deploy images such as for small clusters."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Embedded Component Versions"})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Component"}),(0,r.jsx)(n.th,{children:"Version"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Kubernetes"}),(0,r.jsx)(n.td,{children:"v1.25.3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Kine"}),(0,r.jsx)(n.td,{children:"v0.9.3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SQLite"}),(0,r.jsx)(n.td,{children:"3.36.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Etcd"}),(0,r.jsx)(n.td,{children:"v3.5.3-k3s1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Containerd"}),(0,r.jsx)(n.td,{children:"v1.6.8-k3s1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Runc"}),(0,r.jsx)(n.td,{children:"v1.1.4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Flannel"}),(0,r.jsx)(n.td,{children:"v0.19.2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Metrics-server"}),(0,r.jsx)(n.td,{children:"v0.6.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Traefik"}),(0,r.jsx)(n.td,{children:"v2.9.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CoreDNS"}),(0,r.jsx)(n.td,{children:"v1.9.1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Helm-controller"}),(0,r.jsx)(n.td,{children:"v0.12.3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Local-path-provisioner"}),(0,r.jsx)(n.td,{children:"v0.0.21"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"manually-deploy-images-and-binary",children:"Manually Deploy Images and Binary"}),"\n",(0,r.jsx)(n.p,{children:"This method requires you to manually deploy the necessary images to each node and is appropriate for edge deployments where running a private registry is not practical."}),"\n",(0,r.jsx)(n.h3,{id:"prepare-the-images-directory-and-k3s-binary",children:"Prepare the Images Directory and K3s Binary"}),"\n",(0,r.jsxs)(n.p,{children:["Obtain the images tar file for your architecture from the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/k3s/releases",children:"releases page"})," for the version of K3s you will be running. Place the tar file in the images directory, for example:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/k3s-io/k3s/releases/download/v1.25.3%2Bk3s1/k3s-airgap-images-amd64.tar.zst\r\nsudo mkdir -p /var/lib/rancher/k3s/agent/images/\r\nsudo tar --use-compress-program=unzstd -xvf ./k3s-airgap-images-amd64.tar.zst --directory /var/lib/rancher/k3s/agent/images\r\nrm ./k3s-airgap-images-amd64.tar.zst\n"})}),"\n",(0,r.jsx)(n.h3,{id:"prepare-the-k3s-binary",children:"Prepare the K3s Binary"}),"\n",(0,r.jsxs)(n.p,{children:["Download the K3s binary from the ",(0,r.jsx)(n.a,{href:"https://github.com/rancher/k3s/releases",children:"releases page"}),", matching the same version used to get the airgap images. Place the binary in ",(0,r.jsx)(n.code,{children:"/usr/local/bin"})," on each air-gapped node and ensure it is executable:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo wget https://github.com/k3s-io/k3s/releases/download/v1.25.3%2Bk3s1/k3s --directory-prefix=/usr/local/bin\r\nsudo chmod +x /usr/local/bin/k3s\n"})}),"\n",(0,r.jsx)(n.h2,{id:"installing-k3s-in-an-air-gapped-environment",children:"Installing K3s in an Air-Gapped Environment"}),"\n",(0,r.jsxs)(n.p,{children:["Download the K3s install script at ",(0,r.jsx)(n.a,{href:"https://get.k3s.io",children:"get.k3s.io"}),". Place the install script anywhere on each air-gapped node, and name it ",(0,r.jsx)(n.code,{children:"install.sh"}),". When running the K3s script with the ",(0,r.jsx)(n.code,{children:"INSTALL_K3S_SKIP_DOWNLOAD"})," environment variable, K3s will use the local version of the script and binary:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget --output-document=./install.sh  https://get.k3s.io\r\nchmod +x ./install.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"To install K3s on a single server, simply do the following on the server node:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true ./install.sh\r\n\r\n[INFO]  Skipping k3s download and verify\r\n[INFO]  Skipping installation of SELinux RPM\r\n[INFO]  Creating /usr/local/bin/kubectl symlink to k3s\r\n[INFO]  Creating /usr/local/bin/crictl symlink to k3s\r\n[INFO]  Skipping /usr/local/bin/ctr symlink to k3s, command exists in PATH at /usr/bin/ctr\r\n[INFO]  Creating killall script /usr/local/bin/k3s-killall.sh\r\n[INFO]  Creating uninstall script /usr/local/bin/k3s-uninstall.sh\r\n[INFO]  env: Creating environment file /etc/systemd/system/k3s.service.env\r\n[INFO]  systemd: Creating service file /etc/systemd/system/k3s.service\r\n[INFO]  systemd: Enabling k3s unit\r\nCreated symlink /etc/systemd/system/multi-user.target.wants/k3s.service \u2192 /etc/systemd/system/k3s.service.\r\n[INFO]  systemd: Starting k3s\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Then, to ",(0,r.jsx)(n.em,{children:"optionally"})," add additional agents download the ",(0,r.jsx)(n.code,{children:"install.sh"})," and run the following on each agent node."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://myserver:6443 K3S_TOKEN=mynodetoken ./install.sh\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Take care to ensure you replace ",(0,r.jsx)(n.code,{children:"myserver"})," with the IP or valid DNS of the server and replace ",(0,r.jsx)(n.code,{children:"mynodetoken"})," with the node token from the server typically at ",(0,r.jsx)(n.code,{children:"/var/lib/rancher/k3s/server/node-token"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo cat /var/lib/rancher/k3s/server/node-token\r\nK109ff43654eb75675r756r49f41e02ve5467e5v45b9139esfdh23c8::server:ef896e4377876834524356876\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Before adding an external client make sure that all ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/reference/ports-and-protocols/",children:"Kubernetes ports"})," are opened and accessible on all systems."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"INSTALL_K3S_SKIP_DOWNLOAD=true K3S_URL=https://192.168.1.101:6443 K3S_TOKEN=K109ff43654eb75675r756r49f41e02ve5467e5v45b9139esfdh23c8::server:ef896e4377876834524356876 ./install.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify that the installation was successful:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo kubectl version --short --output=yaml\r\n\r\nclientVersion:\r\n  buildDate: "2022-10-25T19:59:38Z"\r\n  compiler: gc\r\n  gitCommit: f2585c1671b31b4b34bddbb3bf4e7d69662b0821\r\n  gitTreeState: clean\r\n  gitVersion: v1.25.3+k3s1\r\n  goVersion: go1.19.2\r\n  major: "1"\r\n  minor: "25"\r\n  platform: linux/amd64\r\nkustomizeVersion: v4.5.7\r\nserverVersion:\r\n  buildDate: "2022-10-25T19:59:38Z"\r\n  compiler: gc\r\n  gitCommit: f2585c1671b31b4b34bddbb3bf4e7d69662b0821\r\n  gitTreeState: clean\r\n  gitVersion: v1.25.3+k3s1\r\n  goVersion: go1.19.2\r\n  major: "1"\r\n  minor: "25"\r\n  platform: linux/amd64\n'})}),"\n",(0,r.jsx)(n.h2,{id:"kubernetes-dashboard",children:"Kubernetes Dashboard"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.a,{href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/",children:"Kubernetes Dashboard"})," is a web-based Kubernetes user interface. You can use Dashboard to deploy containerized applications to a Kubernetes cluster, troubleshoot your containerized application, and manage the cluster resources. You can use Dashboard to get an overview of applications running on your cluster, as well as for creating or modifying individual Kubernetes resources (such as Deployments, Jobs, DaemonSets, etc). For example, you can scale a Deployment, initiate a rolling update, restart a pod or deploy new applications using a deploy wizard."]}),"\n",(0,r.jsx)(n.h3,{id:"deploying-the-kubernetes-dashboard",children:"Deploying the Kubernetes Dashboard"}),"\n",(0,r.jsx)(n.p,{children:"To install the dashboard on an Edge (online) system you should set the following global variables to get the latest version:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"GITHUB_URL=https://github.com/kubernetes/dashboard/releases\r\nVERSION_KUBE_DASHBOARD=$(curl -w '%{url_effective}' -I -L -s -S ${GITHUB_URL}/latest -o /dev/null | sed -e 's|.*/||')\n"})}),"\n",(0,r.jsxs)(n.p,{children:["I can check the latest version on the ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/dashboard/releases/latest",children:"release page"})," - in my case this is ",(0,r.jsx)(n.code,{children:"v2.7.0"}),". So instead of running:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo k3s kubectl create -f https://raw.githubusercontent.com/kubernetes/dashboard/${VERSION_KUBE_DASHBOARD}/aio/deploy/recommended.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"I can download the file and transfer it to my air-gapped system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /opt/k3s\r\nsudo chown myuser:myuser /opt/k3s\r\nwget --output-document=/opt/k3s/kube-dash.yaml https://raw.githubusercontent.com/kubernetes/dashboard/v2.7.0/aio/deploy/recommended.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"This file will deploy two container to the Kubernetes cluster that we can pull on a live system:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"docker pull kubernetesui/dashboard:v2.7.0 \r\ndocker pull kubernetesui/metrics-scraper:v1.0.8\n"})}),"\n",(0,r.jsxs)(n.p,{children:["And then ",(0,r.jsx)(n.a,{href:"/docs/DevOps/Linux/2019-06-14--download-and-save-docker-image/2019-06-14/",children:"transfer to my air-gapped system"})," before applying the downloaded job file."]}),"\n",(0,r.jsx)(n.p,{children:"Now I can deploy the dashboard:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo k3s kubectl create -f /opt/k3s/kube-dash.yaml\r\n\r\nnamespace/kubernetes-dashboard created\r\nserviceaccount/kubernetes-dashboard created\r\nservice/kubernetes-dashboard created\r\nsecret/kubernetes-dashboard-certs created\r\nsecret/kubernetes-dashboard-csrf created\r\nsecret/kubernetes-dashboard-key-holder created\r\nconfigmap/kubernetes-dashboard-settings created\r\nrole.rbac.authorization.k8s.io/kubernetes-dashboard created\r\nclusterrole.rbac.authorization.k8s.io/kubernetes-dashboard created\r\nrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard created\r\nclusterrolebinding.rbac.authorization.k8s.io/kubernetes-dashboard created\r\ndeployment.apps/kubernetes-dashboard created\r\nservice/dashboard-metrics-scraper created\r\ndeployment.apps/dashboard-metrics-scraper created\n"})}),"\n",(0,r.jsx)(n.p,{children:"This seemed to have worked. Let's verify that both pods are now running:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubectl get pod --all-namespaces -o wide\r\n\r\nNAMESPACE              NAME                                         READY STATUS    AGE   IP        \r\nkube-system            coredns-75fc8f8fff-lm4zk                     1/1   Running   3m45s 10.42.0.6 \r\nkube-system            local-path-provisioner-5b5579c644-znhxp      1/1   Running   3m45s 10.42.0.4 \r\nkube-system            helm-install-traefik-crd-bqfzh               0/1   Completed 3m45s 10.42.0.5 \r\nkube-system            helm-install-traefik-s2k47                   0/1   Completed 3m45s 10.42.0.2 \r\nkube-system            metrics-server-5c8978b444-57t9t              1/1   Running   3m45s 10.42.0.3 \r\nkube-system            svclb-traefik-6b2eda7a-grvsv                 2/2   Running   3m7s  10.42.0.7 \r\nkube-system            traefik-9c6dc6686-778mw                      1/1   Running   3m7s  10.42.0.8 \r\nkubernetes-dashboard   dashboard-metrics-scraper-64bcc67c9c-ppdj4   1/1   Running   54s   10.42.0.10\r\nkubernetes-dashboard   kubernetes-dashboard-5c8bd6b59-96xdj         1/1   Running   54s   10.42.0.9\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubectl get deployments -n kubernetes-dashboard\r\n\r\nNAME                        READY   UP-TO-DATE   AVAILABLE   AGE\r\ndashboard-metrics-scraper   1/1     1            1           55s\r\nkubernetes-dashboard        1/1     1            1           55s\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubectl get services -n kubernetes-dashboard \r\n\r\nNAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)    AGE\r\nkubernetes-dashboard        ClusterIP   10.43.53.84    <none>        443/TCP    57s\r\ndashboard-metrics-scraper   ClusterIP   10.43.58.132   <none>        8000/TCP   57s\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Looking good :)"})}),"\n",(0,r.jsx)(n.h3,{id:"dashboard-rbac-configuration",children:"Dashboard RBAC Configuration"}),"\n",(0,r.jsx)(n.p,{children:"Create the following resource manifest files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /opt/k3s/dashboard.admin-user.yml\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"apiVersion: v1\r\nkind: ServiceAccount\r\nmetadata:\r\n  name: admin-user\r\n  namespace: kubernetes-dashboard\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"nano /opt/k3s/dashboard.admin-user-role.yml\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"apiVersion: rbac.authorization.k8s.io/v1\r\nkind: ClusterRoleBinding\r\nmetadata:\r\n  name: admin-user\r\nroleRef:\r\n  apiGroup: rbac.authorization.k8s.io\r\n  kind: ClusterRole\r\n  name: cluster-admin\r\nsubjects:\r\n- kind: ServiceAccount\r\n  name: admin-user\r\n  namespace: kubernetes-dashboard\n"})}),"\n",(0,r.jsx)(n.p,{children:"Deploy the admin-user configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo k3s kubectl create -f /opt/k3s/dashboard.admin-user.yml -f /opt/k3s/dashboard.admin-user-role.yml\r\n\r\nserviceaccount/admin-user created\r\nclusterrolebinding.rbac.authorization.k8s.io/admin-user created\n"})}),"\n",(0,r.jsx)(n.h4,{id:"obtain-the-bearer-token",children:"Obtain the Bearer Token"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo k3s kubectl -n kubernetes-dashboard create token admin-user\r\n\r\neyJhbGciOiJSUzI1NiIsImtpZCI6IkdnaWluV2RRbnpuMENIaUI2TFB2QmxhbGctQUhUVWVjM2FXSWhKRTRXNUEifQ.eyJhdWQiOlsiaHR0cHM6Ly9rdWJlcm5ldGVzLmRlZmF1bHQuc3ZjLmNsdXN0ZXIubG9jYWwiLCJrM3MiXSwiZXhwIjoxNjY4ODU3MDA1LCJpYXQiOjE2Njg4NTM0MDUsImlzcyI6Imh0dHBzOi8va3ViZXJuZXRlcy5kZWZhdWx0LnN2Yy5jbHVzdGVyLmxvY2FsIiwia3ViZXJuZXRlcy5pbyI6eyJuYW1lc3BhY2UiOiJrdWJlcm5ldGVzLWRhc2hib2FyZCIsInNlcnZpY2VhY2NvdW50Ijp7Im5hbWUiOiJhZG1pbi11c2VyIiwidWlkIjoiYzNhNjY0ODUtYjQ2Ny00NzNjLTg4MzktMDk3YzUwMzE4NzI5In19LCJuYmYiOjE2Njg4NTM0MDUsInN1YiI6InN5c3RlbTpzZXJ2aWNlYWNjb3VudDprdWJlcm5ldGVzLWRhc2hib2FyZDphZG1pbi11c2VyIn0.Aq7mrvx3yo4EGsziJZs5poXWYJsq_s5uMkWhuinu0h_XNi-Qke9ZAX2f5cCw31vErXY2NcIYqQKgMMmcFpW9Kod_g--ZdIEmxGRqsIk_bBm1pjgYvdHvQDA8EZrFpT4BMgQMX10I8qp6zE6Y7iLckABDCiTWl0Pu42oRXxnRPp5_OppGOEbOte4Z1A5xjsR889t4YgVeKa9RHlvroWyaDkd5hyEpolpoDxteSd16e6TYXkNUkh70taPbcUzxO-DheP8apWWLsFSzQOUXbG0L2JJIAL1rYbBsvCYH346VtP2SwGFU5Z_S1whACH4O3lKu56aesnT5TERUPL6PdBclIQ\n"})}),"\n",(0,r.jsx)(n.h2,{id:"local-access-to-the-dashboard",children:"Local Access to the Dashboard"}),"\n",(0,r.jsx)(n.p,{children:"To access the Dashboard you must create a secure channel to your K3s cluster:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo k3s kubectl proxy\r\n\r\nStarting to serve on 127.0.0.1:8001\n"})}),"\n",(0,r.jsx)(n.p,{children:"The Dashboard is now accessible at:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/"})}),"\n",(0,r.jsx)(n.li,{children:"Sign In with the admin-user Bearer Token"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Kubernetes Beyond the Edge",src:s(138593).A+"",width:"1463",height:"361"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Kubernetes Beyond the Edge",src:s(189610).A+"",width:"1601",height:"604"})}),"\n",(0,r.jsx)(n.h2,{id:"run-a-stateless-application-using-a-deployment",children:"Run a Stateless Application Using a Deployment"}),"\n",(0,r.jsxs)(n.p,{children:["You can run an application by creating a Kubernetes Deployment object, and you can describe a Deployment in a YAML file. For example, this YAML file describes a Deployment that runs the latest ",(0,r.jsx)(n.code,{children:"nginx:alpine"})," Docker image (",(0,r.jsx)(n.a,{href:"/docs/DevOps/Linux/2019-06-14--download-and-save-docker-image/2019-06-14/",children:"the image needs to be present on the air-gapped system"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yml",children:"apiVersion: apps/v1\r\nkind: Deployment\r\nmetadata:\r\n  name: nginx-deployment\r\nspec:\r\n  selector:\r\n    matchLabels:\r\n      app: nginx\r\n  replicas: 2 # tells deployment to run 2 pods matching the template\r\n  template:\r\n    metadata:\r\n      labels:\r\n        app: nginx\r\n    spec:\r\n      containers:\r\n      - name: nginx\r\n        image: nginx:alpine\r\n        ports:\r\n        - containerPort: 80\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Using ",(0,r.jsx)(n.code,{children:"kubectl"})," you can now deploy this job file with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubectl apply -f https://k8s.io/examples/application/deployment.yaml\r\nsudo kubectl describe deployment nginx-deployment\r\nsudo kubectl get pods -l app=nginx\r\nsudo kubectl describe pod <pod-name>\r\nsudo kubectl delete deployment nginx-deployment\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Or we can use the Kubernetes Dashboard - click on ",(0,r.jsx)(n.em,{children:"Create a new resource"})," in the top right and fill out the form:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Kubernetes Beyond the Edge",src:s(40371).A+"",width:"1611",height:"845"})}),"\n",(0,r.jsxs)(n.p,{children:["Verify via ",(0,r.jsx)(n.code,{children:"kubectl"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubectl describe deployment nginx-deployment\r\nName:                   nginx-deployment\r\nNamespace:              default\r\nCreationTimestamp:      Sat, 19 Nov 2022 19:40:31 +0800\r\nLabels:                 k8s-app=nginx-deployment\r\n...\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo kubectl get pods -l k8s-app=nginx-deployment\r\n\r\nNAME                                READY   STATUS    RESTARTS   AGE\r\nnginx-deployment-7fd66545df-v2bbz   1/1     Running   0          116s\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo kubectl describe pod nginx-deployment-7fd66545df-v2bbz\r\n\r\nName:             nginx-deployment-7fd66545df-v2bbz\r\nNamespace:        default\r\nPriority:         0\r\nService Account:  default\r\nNode:             tp-link0815b/192.168.2.112\r\nStart Time:       Sat, 19 Nov 2022 19:40:31 +0800\r\nLabels:           k8s-app=nginx-deployment\r\n                  pod-template-hash=7fd66545df\r\nAnnotations:      <none>\r\nStatus:           Running\r\nIP:               10.42.0.14\r\n\r\n...\r\n\r\nEvents:\r\n  Type    Reason     Age    From               Message\r\n  ----    ------     ----   ----               -------\r\n  Normal  Scheduled  4m42s  default-scheduler  Successfully assigned default/nginx-deployment-7fd66545df-v2bbz to tp-link0815b\r\n  Normal  Pulled     4m42s  kubelet            Container image "nginx:alpine" already present on machine\r\n  Normal  Created    4m42s  kubelet            Created container nginx-deployment\r\n  Normal  Started    4m42s  kubelet            Started container nginx-deployment\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Kubernetes Beyond the Edge",src:s(856764).A+"",width:"1601",height:"885"})}),"\n",(0,r.jsx)(n.h2,{id:"uninstalling-k3s",children:"Uninstalling K3s"}),"\n",(0,r.jsx)(n.p,{children:"To uninstall K3s from a server node, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"/usr/local/bin/k3s-uninstall.sh\n"})}),"\n",(0,r.jsx)(n.p,{children:"To uninstall K3s from an agent node, run:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"/usr/local/bin/k3s-agent-uninstall.sh\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},138593:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/K3s_Kubernetes_Beyond_the_Edge_01-31535fc40d33e82d6bd7590d269a4e33.png"},189610:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/K3s_Kubernetes_Beyond_the_Edge_02-850286ebef77d2347efbee385db7f2ca.png"},40371:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/K3s_Kubernetes_Beyond_the_Edge_03-44d422ce97db7682e9a472a6751ec4e2.png"},856764:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/K3s_Kubernetes_Beyond_the_Edge_04-49def8afe6ff9534b9877888f14d3f49.png"},392486:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/photo-84356dfgd_67gfh6dfdj_o-c01aef9ec79407ce395a6a1542ae56cc.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(296540);const a={},t=r.createContext(a);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);