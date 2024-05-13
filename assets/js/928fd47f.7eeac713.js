"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[55019],{906317:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=i(474848),s=i(28453);const r={sidebar_position:8050,slug:"2019-09-25",title:"Podman Cheat Sheet",authors:"mpolinowski",tags:["LINUX","Docker","Cheating"],description:"This cheat sheet was written by Doug Tidwell, with huge thanks to Dan Walsh and Scott McCarty."},a=void 0,d={id:"DevOps/Linux/2019-09-25--podman-cheat-sheet/index",title:"Podman Cheat Sheet",description:"This cheat sheet was written by Doug Tidwell, with huge thanks to Dan Walsh and Scott McCarty.",source:"@site/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/index.mdx",sourceDirName:"DevOps/Linux/2019-09-25--podman-cheat-sheet",slug:"/DevOps/Linux/2019-09-25--podman-cheat-sheet/2019-09-25",permalink:"/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/2019-09-25",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2019-09-25--podman-cheat-sheet/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Cheating",permalink:"/docs/tags/cheating"}],version:"current",sidebarPosition:8050,frontMatter:{sidebar_position:8050,slug:"2019-09-25",title:"Podman Cheat Sheet",authors:"mpolinowski",tags:["LINUX","Docker","Cheating"],description:"This cheat sheet was written by Doug Tidwell, with huge thanks to Dan Walsh and Scott McCarty."},sidebar:"tutorialSidebar",previous:{title:"Kali Linux with Docker for Windows",permalink:"/docs/DevOps/Linux/2019-09-26--kali-docker-windows/2019-09-26"},next:{title:"Installing Oh-My-Zsh on Ubuntu 20.04",permalink:"/docs/DevOps/Linux/2019-09-22--zsh-on-ubuntu20/2019-09-22"}},o={},c=[{value:"Finding Images",id:"finding-images",level:2},{value:"Building Images",id:"building-images",level:2},{value:"Running Containers on Images",id:"running-containers-on-images",level:2},{value:"Working with Container Processes",id:"working-with-container-processes",level:2},{value:"Working with the Container Filesystem",id:"working-with-the-container-filesystem",level:2},{value:"Removing Images",id:"removing-images",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:i(682661).A+"",width:"1500",height:"533"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#finding-images",children:"Finding Images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#building-images",children:"Building Images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#running-containers-on-images",children:"Running Containers on Images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#working-with-container-processes",children:"Working with Container Processes"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#working-with-the-container-filesystem",children:"Working with the Container Filesystem"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#removing-images",children:"Removing Images"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#miscellaneous",children:"Miscellaneous"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For more information about podman, visit the ",(0,t.jsx)(n.a,{href:"https://developers.redhat.com/",children:"Red Hat Developer website"}),". This cheat sheet was written by Doug Tidwell, with huge thanks to Dan Walsh and Scott McCarty."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following ",(0,t.jsx)(n.code,{children:"container"})," is either a container name or a container ID. If ",(0,t.jsx)(n.code,{children:"tag"})," is omitted in image",":tag"," , the default value is latest."]}),"\n",(0,t.jsx)(n.h2,{id:"finding-images",children:"Finding Images"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman images"}),(0,t.jsx)(n.td,{children:"List all local images"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman history image",":tag"]}),(0,t.jsx)(n.td,{children:"Display information about how an image was built"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman login registryURL -u username [-p password]"}),(0,t.jsx)(n.td,{children:"Log in to a remote registry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman pull registry/username/image",":tag"]}),(0,t.jsx)(n.td,{children:"Pull an image from a remote registry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman search searchString"}),(0,t.jsx)(n.td,{children:"Search local cache and remote registries for images"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman logout"}),(0,t.jsx)(n.td,{children:"Log out of the current remote registry"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["The list of registries is defined in ",(0,t.jsx)(n.code,{children:"/etc/containers/registries.conf"})]})}),"\n",(0,t.jsx)(n.h2,{id:"building-images",children:"Building Images"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman build -t image",":tag"," ."]}),(0,t.jsx)(n.td,{children:"Build and tag an image using the instructions in Docker?le in the"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"current directory"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman build -t image",":tag"," -f Dockerfile2"]}),(0,t.jsx)(n.td,{children:"Same as above, but with a di?erent Docker?le"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman tag image",":tag"," image",":tag2"]}),(0,t.jsx)(n.td,{children:"Add an additional name to a local image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman tag image",":tag"," registry/username/image",":tag"]}),(0,t.jsx)(n.td,{children:"Same as above, but the additional name includes a remote registry"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman push registry/username/image",":tag"]}),(0,t.jsx)(n.td,{children:"Push an image to a remote registry"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"running-containers-on-images",children:"Running Containers on Images"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman run --rm -it [--name name] image",":tag"," command"]}),(0,t.jsx)(n.td,{children:"Run a container based on a given image."})]})})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--rm"})," Remove the container after it exits"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-it"})," Connect the container to the terminal"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"--name"})," name Give the container a name"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"image:tag"})," The image used to create the container"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"command"})," A command to run (/bin/bash for example)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-d"})," Run the container in the background"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-p 8080:32000"})," Expose container port 8080 as localhost:32000"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-v /var/lib/mydb:/var/lib/db"})," Map the /var/lib/mydb directory on localhost to a volume named /var/lib/db inside the container"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman commit container newImage",":tag"]}),(0,t.jsx)(n.td,{children:"Create a new image based on the current state of a running container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman create [--name name] image",":tag"]}),(0,t.jsx)(n.td,{children:"Create (but don\u2019t start) a container from an image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman start container"}),(0,t.jsx)(n.td,{children:"Start an existing container from an image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman restart container"}),(0,t.jsx)(n.td,{children:"Restart an existing container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman wait container1 [container2\u2026 ]"}),(0,t.jsx)(n.td,{children:"Wait on one or more containers to stop"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman stop container"}),(0,t.jsx)(n.td,{children:"Stop a running container gracefully"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman kill container"}),(0,t.jsx)(n.td,{children:"Send a signal to a running container"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman rm [-f] container"}),(0,t.jsx)(n.td,{children:"Remove a container (use -f if the container is running)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman stats container"}),(0,t.jsx)(n.td,{children:"Display a live stream of a container\u2019s resource usage"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman inspect container"}),(0,t.jsx)(n.td,{children:"Return metadata (in JSON) about a running container"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"working-with-container-processes",children:"Working with Container Processes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman ps [--all]"}),(0,t.jsx)(n.td,{children:"List the running containers on the system (use --all to include non-"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"running containers)"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman attach container"}),(0,t.jsx)(n.td,{children:"Attach to a running container and view its output or control it"})]})]})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"detaches from the container but leaves it running. |\r\n| podman exec container command | Execute a command in a running container |\r\n| podman top container | Display the running processes of a container |\r\n| podman logs [-tail] container | Display the logs of a container |\r\n| podman pause container / podman unpause container | Pause/unpause all the processes in a container |\r\n| podman port container | List the port mappings from a container to localhost |"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"working-with-the-container-filesystem",children:"Working with the Container Filesystem"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman diff container"}),(0,t.jsx)(n.td,{children:"Display all the changes to a container\u2019s ?lesystem"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman cp source target"}),(0,t.jsx)(n.td,{children:"Copy ?les and folders between a container and localhost"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman mount container / podman umount container"}),(0,t.jsx)(n.td,{children:"Mount or unmount a container\u2019s root ?lesystem"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman import tarball"}),(0,t.jsx)(n.td,{children:"Import a tarball and save it as a ?lesystem image"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman export [-o outputFile] container"}),(0,t.jsx)(n.td,{children:"Export the container\u2019s ?lesystem to a tar ?le"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman save [-o archiveFile] [--format docker-archive"}),(0,t.jsx)(n.td,{children:"oci-archive"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman load -i archiveFile"}),(0,t.jsx)(n.td,{children:"Load a saved image from docker-archive or another format"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"removing-images",children:"Removing Images"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman rmi [-f] image",":tag"]}),(0,t.jsx)(n.td,{children:"Remove a local image from local cache (use -f to force removal)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:["podman rmi [-f] registry/username/image",":tag"]}),(0,t.jsx)(n.td,{children:"Remove a remote image from local cache (use -f to force removal)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Command"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman version"}),(0,t.jsx)(n.td,{children:"Display podman version information"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"podman info"}),(0,t.jsx)(n.td,{children:"Display information about the podman environment"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},682661:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-7d0872b1ce8d23fcf5578067f889120c.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var t=i(296540);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);