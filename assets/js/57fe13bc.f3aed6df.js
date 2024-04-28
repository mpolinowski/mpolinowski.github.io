"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[57641],{870636:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var t=o(474848),i=o(28453);const s={sidebar_position:4090,slug:"2023-09-21",title:"CVAT Semi-automatic and Automatic Annotation",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation."},a="Computer Vision Annotation Tool (CVAT)",c={id:"IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/index",title:"CVAT Semi-automatic and Automatic Annotation",description:"CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation",slug:"/IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/2023-09-21",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/2023-09-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-09-21--cvat-automatic-annotation/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4090,frontMatter:{sidebar_position:4090,slug:"2023-09-21",title:"CVAT Semi-automatic and Automatic Annotation",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation."},sidebar:"tutorialSidebar",previous:{title:"Audio Classification with Computer Vision",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-09-23--yolo8-listen/2023-09-23"},next:{title:"Computer Vision Annotation Tool (CVAT) Introduction",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-09-19--cvat-computer-vision-annotation-tool/2023-09-19"}},l={},r=[{value:"Installation (Docker)",id:"installation-docker",level:2},{value:"Installing Nuclio",id:"installing-nuclio",level:3},{value:"Start CVAT",id:"start-cvat",level:3},{value:"Deploy AI Models with Nuclio",id:"deploy-ai-models-with-nuclio",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:o(757130).A+"",width:"1500",height:"871"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#computer-vision-annotation-tool-cvat",children:"Computer Vision Annotation Tool (CVAT)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#installation-docker",children:"Installation (Docker)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installing-nuclio",children:"Installing Nuclio"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#start-cvat",children:"Start CVAT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#deploy-ai-models-with-nuclio",children:"Deploy AI Models with Nuclio"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"computer-vision-annotation-tool-cvat",children:"Computer Vision Annotation Tool (CVAT)"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://opencv.github.io/cvat/about/",children:"CVAT"})," was designed to provide users with a set of convenient instruments for annotating digital images and videos. CVAT supports supervised machine learning tasks pertaining to object detection, image classification, image segmentation and 3D data annotation. It allows users to annotate images with multiple tools (boxes, polygons, cuboids, circles, skeletons, etc)."]}),"\n",(0,t.jsx)(n.h2,{id:"installation-docker",children:"Installation (Docker)"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["In the previous note I already started the CVAT containers with a simple ",(0,t.jsx)(n.code,{children:"docker-compose up -d"})," which used the default ",(0,t.jsx)(n.code,{children:"docker-compose.yml"})," file to start the services. They have to be brought down first before continuing with a ",(0,t.jsx)(n.code,{children:"docker-compose down"})," from inside the already existing cvat directory."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Otherwise start by downloading the CVAT source code as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/opencv/cvat\ncd cvat\n"})}),"\n",(0,t.jsx)(n.h3,{id:"installing-nuclio",children:"Installing Nuclio"}),"\n",(0,t.jsxs)(n.p,{children:["You have to install ",(0,t.jsx)(n.code,{children:"nuctl"})," command line tool to build and deploy serverless functions. Download version ",(0,t.jsx)(n.code,{children:"1.11.24"}),". It is important that the version you download matches the version in ",(0,t.jsx)(n.a,{href:"https://github.com/cvat-ai/cvat/blob/develop/components/serverless/docker-compose.serverless.yml",children:"docker-compose.serverless.yml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/nuclio/nuclio/releases/download/1.11.24/nuctl-1.11.24-linux-amd64\n"})}),"\n",(0,t.jsxs)(n.p,{children:["After downloading ",(0,t.jsx)(n.code,{children:"nuclio"}),", give it a proper permission and add a softlink:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo chmod +x nuctl-1.11.24-linux-amd64\nsudo ln -sf $(pwd)/nuctl-1.11.24-linux-amd64 /usr/local/bin/nuctl\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify that the installation worked:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'nuctl version\n\nClient version:\n"Label: 1.11.24, Git commit: f2a3900d23b92fd3639dc9cb765044ef53a4fb2b, OS: linux, Arch: amd64, Go version: go1.19.10"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"start-cvat",children:"Start CVAT"}),"\n",(0,t.jsxs)(n.p,{children:["To start ",(0,t.jsx)(n.code,{children:"cvat"})," with auto annotation tool you need to run the following command from the cvat root directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"export CVAT_HOST=your-ip-address\ndocker-compose -f docker-compose.yml -f components/serverless/docker-compose.serverless.yml up -d\n"})}),"\n",(0,t.jsx)(n.p,{children:"To stop the containers, simply run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker-compose -f docker-compose.yml -f components/serverless/docker-compose.serverless.yml down\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The CVAT UI is now available on ",(0,t.jsx)(n.code,{children:"your-ip-address"})," with port ",(0,t.jsx)(n.code,{children:"8080"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"deploy-ai-models-with-nuclio",children:"Deploy AI Models with Nuclio"}),"\n",(0,t.jsxs)(n.p,{children:["Create ",(0,t.jsx)(n.code,{children:"cvat"})," project inside nuclio dashboard where you will deploy new serverless functions and deploy a couple of DL models. Commands below should be run only after CVAT has been installed using docker-compose because it runs nuclio dashboard which manages all serverless functions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nuctl create project cvat\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can verify that the ",(0,t.jsx)(n.code,{children:"cvat"})," project was created by visiting the Nuclio dashboard ",(0,t.jsx)(n.code,{children:"localhost:8070"})," on the host system:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CVAT Semi-automatic and Automatic Annotation",src:o(865192).A+"",width:"1137",height:"457"})}),"\n",(0,t.jsxs)(n.p,{children:["There are a couple of models available in the ",(0,t.jsx)(n.code,{children:"cvat"})," repository located in the ",(0,t.jsx)(n.a,{href:"https://github.com/opencv/cvat/tree/develop/serverless",children:"serverless"})," directory. The official documentation gives us a few examples like:"]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure that the ",(0,t.jsx)(n.code,{children:"./serverless/common"})," directory exists inside the ",(0,t.jsx)(n.code,{children:"cvat"})," folder before running:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"YOLOv7(CPU)"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nuctl deploy --project-name cvat \\\n  --path serverless/onnx/WongKinYiu/yolov7/nuclio/ \\\n  --volume ./serverless/common:/opt/nuclio/common \\\n  --platform local\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Segment Anything (CPU)"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nuctl deploy --project-name cvat \\\n  --path serverless/pytorch/facebookresearch/sam/nuclio \\\n  --volume ./serverless/common:/opt/nuclio/common \\\n  --platform local\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"YOLOv3 (CPU)"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nuctl deploy --project-name cvat \\\n  --path serverless/openvino/omz/public/yolo-v3-tf/nuclio \\\n  --volume ./serverless/common:/opt/nuclio/common \\\n  --platform local\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Mask RCNN (GPU)"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'nuctl deploy --project-name cvat \\\n  --path serverless/tensorflow/matterport/mask_rcnn/nuclio \\\n  --platform local --base-image tensorflow/tensorflow:1.15.5-gpu-py3 \\\n  --desc "GPU based implementation of Mask RCNN on Python 3, Keras, and TensorFlow." \\\n  --image cvat/tf.matterport.mask_rcnn_gpu \\\n  --triggers \'{"myHttpTrigger": {"maxWorkers": 1}}\' \\\n  --resource-limit nvidia.com/gpu=1\n'})}),"\n",(0,t.jsx)(n.p,{children:"For example running the YOLOv7 command adds the following function:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CVAT Semi-automatic and Automatic Annotation",src:o(727171).A+"",width:"1137",height:"457"})}),"\n",(0,t.jsx)(n.p,{children:"And the model is also listed in the CVAT UI with all the supported classes:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CVAT Semi-automatic and Automatic Annotation",src:o(137338).A+"",width:"1191",height:"738"})}),"\n",(0,t.jsxs)(n.p,{children:["The model is now listed under ",(0,t.jsx)(n.strong,{children:"AI Tools"})," and I can map the classes the model was trained with to my current class labels. And clicking on ",(0,t.jsx)(n.strong,{children:"Annotate"})," automatically generates the bounding boxes - that might need a little bit refinement but will save you a ton of time ",(0,t.jsx)(n.code,{children:"<3"}),":"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"CVAT Semi-automatic and Automatic Annotation",src:o(589397).A+"",width:"1191",height:"648"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},865192:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/CVAT_Automatic_Annotation_01-4cb2c7168f36e98c6b322f7e3b97555a.png"},727171:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/CVAT_Automatic_Annotation_02-ed92926ba83a23b8a9cf09f53d38d051.png"},137338:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/CVAT_Automatic_Annotation_03-1ca5e07e17c724bb4dbba11b4f1c8e85.png"},589397:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/CVAT_Automatic_Annotation_04-119f12fa4739263c55faab7944ce0176.png"},757130:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-864be48f76a28ed6a3e155f7ab51bc74.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>c});var t=o(296540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);