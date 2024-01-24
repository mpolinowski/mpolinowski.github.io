"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[42080],{191479:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var o=i(785893),r=i(603905);const a={sidebar_position:9040,slug:"2021-11-04",title:"Installing YOLOv4 with Anaconda",authors:"mpolinowski",tags:["Machine Learning","Python","YOLO"]},s=void 0,t={id:"IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/index",title:"Installing YOLOv4 with Anaconda",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4",slug:"/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/2021-11-04",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/2021-11-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"YOLO",permalink:"/docs/tags/yolo"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2021-11-04",title:"Installing YOLOv4 with Anaconda",authors:"mpolinowski",tags:["Machine Learning","Python","YOLO"]},sidebar:"tutorialSidebar",previous:{title:"License Plate Recognition with YOLOv4, OpenCV and Tesseract",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/2021-11-05"},next:{title:"Streamlit user interface for openCV/Mediapipe face mesh app",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/2021-11-03"}},l={},c=[{value:"Yolo4 Object Detection Setup",id:"yolo4-object-detection-setup",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Anaconda",id:"anaconda",level:4},{value:"Git",id:"git",level:4},{value:"Source Repository",id:"source-repository",level:4},{value:"Pre-trained Weights",id:"pre-trained-weights",level:4},{value:"Virtual Environment",id:"virtual-environment",level:3},{value:"CPU",id:"cpu",level:4},{value:"GPU",id:"gpu",level:4},{value:"Convert weights to TensorFlow Format",id:"convert-weights-to-tensorflow-format",level:3},{value:"Run YOLOv4",id:"run-yolov4",level:2},{value:"Run YOLOv4 Tensorflow Model on an Image",id:"run-yolov4-tensorflow-model-on-an-image",level:3},{value:"Run YOLOv4 from a Video File",id:"run-yolov4-from-a-video-file",level:3},{value:"Run YOLOv4 on a Webcam Stream",id:"run-yolov4-on-a-webcam-stream",level:3},{value:"Run YOLOv4 on a INSTAR IP Camera Stream",id:"run-yolov4-on-a-instar-ip-camera-stream",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.ah)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Shenzhen, China",src:i(833434).Z+"",width:"1500",height:"688"})}),"\n",(0,o.jsxs)(n.p,{children:["This project uses the ",(0,o.jsx)(n.a,{href:"https://github.com/mpolinowski/yolov4-custom-functions",children:"YOLOv4/Anaconda Setup"})," by ",(0,o.jsx)(n.a,{href:"https://www.youtube.com/channel/UCrydcKaojc44XnuXrfhlV8Q",children:"The AI Guy"}),". This is part one of this series:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Installing YOLOv4 using Anaconda"}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-05--license-plates-yolov4-opencv-tesseract/2021-11-05",children:"License Plate Recognition with YOLOv4, OpenCV and Tesseract"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-04--installing-yolov4/2021-11-04",children:"Crop License Plate from the Original Image"})}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#yolo4-object-detection-setup",children:"Yolo4 Object Detection Setup"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#dependencies",children:"Dependencies"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#anaconda",children:"Anaconda"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#git",children:"Git"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#source-repository",children:"Source Repository"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#pre-trained-weights",children:"Pre-trained Weights"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#virtual-environment",children:"Virtual Environment"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#cpu",children:"CPU"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#gpu",children:"GPU"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#convert-weights-to-tensorflow-format",children:"Convert weights to TensorFlow Format"})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#run-yolov4",children:"Run YOLOv4"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#run-yolov4-tensorflow-model-on-an-image",children:"Run YOLOv4 Tensorflow Model on an Image"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#run-yolov4-from-a-video-file",children:"Run YOLOv4 from a Video File"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#run-yolov4-on-a-webcam-stream",children:"Run YOLOv4 on a Webcam Stream"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#run-yolov4-on-a-instar-ip-camera-stream",children:"Run YOLOv4 on a INSTAR IP Camera Stream"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"yolo4-object-detection-setup",children:"Yolo4 Object Detection Setup"}),"\n",(0,o.jsx)(n.h3,{id:"dependencies",children:"Dependencies"}),"\n",(0,o.jsx)(n.h4,{id:"anaconda",children:"Anaconda"}),"\n",(0,o.jsxs)(n.p,{children:["Install ",(0,o.jsx)(n.a,{href:"https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html",children:"Conda"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"wget https://repo.anaconda.com/archive/Anaconda3-2021.11-Linux-x86_64.sh\r\nchmod +x Anaconda3-2021.11-Linux-x86_64.sh\r\nbash Anaconda3-2021.11-Linux-x86_64.sh\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Add ",(0,o.jsx)(n.code,{children:"conda"})," to your PATH variables (~/.bashrc, ~/.zshrc, etc) - don' t forget to ",(0,o.jsx)(n.code,{children:"source"})," it afterwards:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'export PATH="/home/myuser/anaconda3/bin:$PATH"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Verify:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"conda --version\r\nconda 4.10.3\n"})}),"\n",(0,o.jsx)(n.p,{children:"Initialize your shell with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"conda init <SHELL_NAME>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Currently supported shells are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"bash"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"fish"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"tcsh"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"xonsh"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"zsh"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"powershell"})}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"git",children:"Git"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"conda install -c anaconda git\n"})}),"\n",(0,o.jsx)(n.h4,{id:"source-repository",children:"Source Repository"}),"\n",(0,o.jsx)(n.p,{children:"And clone the source code from Github:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/mpolinowski/yolov4-custom-functions.git\n"})}),"\n",(0,o.jsx)(n.h4,{id:"pre-trained-weights",children:"Pre-trained Weights"}),"\n",(0,o.jsxs)(n.p,{children:["YOLOv4 comes pre-trained and able to detect 80 classes. For easy demo purposes we will use the pre-trained weights. Download pre-trained ",(0,o.jsx)(n.code,{children:"yolov4.weights"})," file:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://drive.google.com/open?id=1cewMfusmPjYWbrnuJRuKhPMwRe_b9PaT",children:"yolov4.weights"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Copy and paste ",(0,o.jsx)(n.code,{children:"yolov4.weights"})," from your downloads folder into the 'data' folder of the repository."]}),"\n",(0,o.jsx)(n.h3,{id:"virtual-environment",children:"Virtual Environment"}),"\n",(0,o.jsx)(n.p,{children:"Enter the repository and either run the CPU or GPU setup - the latter requires an NVIDIA graphic card with CUDA support:"}),"\n",(0,o.jsx)(n.h4,{id:"cpu",children:"CPU"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"conda env create -f conda-cpu.yml\r\nconda activate yolov4-cpu\n"})}),"\n",(0,o.jsx)(n.h4,{id:"gpu",children:"GPU"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"conda env create -f conda-gpu.yml\r\nconda activate yolov4-gpu\n"})}),"\n",(0,o.jsx)(n.h3,{id:"convert-weights-to-tensorflow-format",children:"Convert weights to TensorFlow Format"}),"\n",(0,o.jsx)(n.p,{children:"To implement YOLOv4 using TensorFlow, first we convert the .weights into the corresponding TensorFlow model files and then run the model."}),"\n",(0,o.jsx)(n.p,{children:"Convert darknet weights to tensorflow:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python save_model.py --weights ./data/yolov4.weights --output ./checkpoints/yolov4-416 --input_size 416 --model yolov4\n"})}),"\n",(0,o.jsx)(n.h2,{id:"run-yolov4",children:"Run YOLOv4"}),"\n",(0,o.jsx)(n.h3,{id:"run-yolov4-tensorflow-model-on-an-image",children:"Run YOLOv4 Tensorflow Model on an Image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python detect.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --images ./data/images/Old_Town.jpg\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"YOLOv4 Object Recognition",src:i(347506).Z+"",width:"1340",height:"756"})}),"\n",(0,o.jsx)(n.h3,{id:"run-yolov4-from-a-video-file",children:"Run YOLOv4 from a Video File"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python detect_video.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --video ./data/video/cars.mp4 --output ./detections/results.avi\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"YOLOv4 Object Recognition",src:i(669259).Z+"",width:"1920",height:"1080"})}),"\n",(0,o.jsx)(n.h3,{id:"run-yolov4-on-a-webcam-stream",children:"Run YOLOv4 on a Webcam Stream"}),"\n",(0,o.jsx)(n.p,{children:"Connect your webcam and run YOLOv4:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python detect_video.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --video 0 --output ./detections/results.avi\n"})}),"\n",(0,o.jsx)(n.h3,{id:"run-yolov4-on-a-instar-ip-camera-stream",children:"Run YOLOv4 on a INSTAR IP Camera Stream"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python detect_video.py --weights ./checkpoints/yolov4-416 --size 416 --model yolov4 --video http://192.168.0.80:80/mjpegstream.cgi?-chn=11&-usr=admin&-pwd=instar\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>c});var o=i(667294);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function t(e,n){if(null==e)return{};var i,o,r=function(e,n){if(null==e)return{};var i,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,h=t(e,["components","mdxType","originalType","parentName"]),u=c(i),p=r,j=u["".concat(l,".").concat(p)]||u[p]||d[p]||a;return i?o.createElement(j,s(s({ref:n},h),{},{components:i})):o.createElement(j,s({ref:n},h))}));h.displayName="MDXCreateElement"},347506:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/detection1-66836a22f660c658931a6ff166062bf8.png"},833434:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ffe80356d19fb4b090a3bef79b45aab3.jpg"},669259:(e,n,i)=>{i.d(n,{Z:()=>o});const o=i.p+"assets/images/results-f839bb2407a2aad885432c9938733389.png"}}]);