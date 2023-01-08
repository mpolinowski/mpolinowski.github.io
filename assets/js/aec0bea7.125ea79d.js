"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[63773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65618:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4820,slug:"2023-01-08",title:"MiDaS Depth Vision",authors:"mpolinowski",tags:["Python","Machine Learning","Torch"],description:"MiDaS computes relative inverse depth from a single image."},o=void 0,s={unversionedId:"IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas/index",id:"IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas/index",title:"MiDaS Depth Vision",description:"MiDaS computes relative inverse depth from a single image.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas",slug:"/IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas/2023-01-08",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas/2023-01-08",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-01-08-depth-vision-midas/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Torch",permalink:"/docs/tags/torch"}],version:"current",sidebarPosition:4820,frontMatter:{sidebar_position:4820,slug:"2023-01-08",title:"MiDaS Depth Vision",authors:"mpolinowski",tags:["Python","Machine Learning","Torch"],description:"MiDaS computes relative inverse depth from a single image."},sidebar:"tutorialSidebar",previous:{title:"Machine Learning",permalink:"/docs/category/machine-learning"},next:{title:"YOLOv7 Introduction",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-05-yolov7/2023-01-05"}},l={},p=[{value:"Working with Image Files",id:"working-with-image-files",level:2},{value:"Choosing the Right Model",id:"choosing-the-right-model",level:3},{value:"GPU or CPU",id:"gpu-or-cpu",level:3},{value:"Transformations",id:"transformations",level:3},{value:"Prediction",id:"prediction",level:3},{value:"Working with Video Streams",id:"working-with-video-streams",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guangzhou, China",src:n(25139).Z,width:"1500",height:"652"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#working-with-image-files"},"Working with Image Files"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#choosing-the-right-model"},"Choosing the Right Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#gpu-or-cpu"},"GPU or CPU")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#transformations"},"Transformations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prediction"},"Prediction")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#working-with-video-streams"},"Working with Video Streams"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"MiDaS - see ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1907.01341"},"Towards Robust Monocular Depth Estimation: Mixing Datasets for Zero-shot Cross-dataset Transfer")," by Ren\xe9 Ranftl, Katrin Lasinger, David Hafner, Konrad Schindler, Vladlen Koltun - computes relative inverse depth from a single image. The repository provides multiple models that cover different use cases ranging from a small, high-speed model to a very large model that provide the highest accuracy. The models have been trained on 10 distinct datasets using multi-objective optimization to ensure high quality on a wide range of inputs.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/torch-depth"},"Github Repository")),(0,i.kt)("p",null,"MiDaS depends on ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/docs/timm/index"},"timm"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install timm\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import cv2\nimport os\nimport torch\nimport urllib.request\n\nimport matplotlib.pyplot as plt\n")),(0,i.kt)("h2",{id:"working-with-image-files"},"Working with Image Files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'url, filename = ("https://cdn.wallpapersafari.com/45/74/Ye9R0H.jpg", "bridge.jpg")\nurllib.request.urlretrieve(url, filename)\n')),(0,i.kt)("h3",{id:"choosing-the-right-model"},"Choosing the Right Model"),(0,i.kt)("p",null,"Depending on your Hardware you can choose one of three models with different ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/isl-org/MiDaS#Accuracy"},"accuracy and speed"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MiDaS Depth Vision",src:n(60739).Z,width:"832",height:"698"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# Load a model\n#model_type = "DPT_Large"     # MiDaS v3 - Large     (highest accuracy, slowest inference speed)\n#model_type = "DPT_Hybrid"   # MiDaS v3 - Hybrid    (medium accuracy, medium inference speed)\nmodel_type = "MiDaS_small"  # MiDaS v2.1 - Small   (lowest accuracy, highest inference speed)\n\nmidas = torch.hub.load("intel-isl/MiDaS", model_type)\n')),(0,i.kt)("h3",{id:"gpu-or-cpu"},"GPU or CPU"),(0,i.kt)("p",null,"You can run the prediction either on CUDA/Nvidia or CPU:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# Use GPU if available\ndevice = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")\nmidas.to(device)\nmidas.eval()\n')),(0,i.kt)("h3",{id:"transformations"},"Transformations"),(0,i.kt)("p",null,"Inputs need to be transformed to match the dataset the model was trained with. These are available on ",(0,i.kt)("strong",{parentName:"p"},"Torch Hub")," and can be downloaded matching the model you choose earlier:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# Use transforms to resize and normalize the image\nmidas_transforms = torch.hub.load("intel-isl/MiDaS", "transforms")\n\nif model_type == "DPT_Large" or model_type == "DPT_Hybrid":\n    transform = midas_transforms.dpt_transform\nelse:\n    transform = midas_transforms.small_transform\n')),(0,i.kt)("p",null,"Once downloaded you can apply them to your input image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Apply transforms\nimg = cv2.imread(filename)\nimg = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\n\ninput_batch = transform(img).to(device)\n")),(0,i.kt)("h3",{id:"prediction"},"Prediction"),(0,i.kt)("p",null,"Now we can run the prediction:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'# Predict and resize to original resolution\nwith torch.no_grad():\n    prediction = midas(input_batch)\n\n    prediction = torch.nn.functional.interpolate(\n        prediction.unsqueeze(1),\n        size=img.shape[:2],\n        mode="bicubic",\n        align_corners=False,\n    ).squeeze()\n\noutput = prediction.cpu().numpy()\n')),(0,i.kt)("p",null,"And show the result depth map:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Show depth map\nplt.imshow(output)\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MiDaS Depth Vision",src:n(97583).Z,width:"1275",height:"473"})),(0,i.kt)("h2",{id:"working-with-video-streams"},"Working with Video Streams"),(0,i.kt)("p",null,"Now that we know that the model is working I now want to see if I can feed it the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/opencv-rtsp"},"RTSP Stream of my INSTAR IP Camera"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"# Get the video stream\nRTSP_URL = 'rtsp://admin:instar@192.168.2.120/livestream/12'\n\nos.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = 'rtsp_transport;udp'\n\ncap = cv2.VideoCapture(RTSP_URL, cv2.CAP_FFMPEG)\n\nif not cap.isOpened():\n    print('Cannot open RTSP stream')\n    exit(-1)\n\nwhile True:\n    success, img = cap.read()\n    cv2.imshow('RTSP stream', img)\n\n    if cv2.waitKey(1) & 0xFF == ord('q'):  # Keep running until you press `q`\n        break\n")),(0,i.kt)("p",null,"This code will output the original video from our camera. So we now need to add the prediction code into the while loop like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"while True:\n    success, frame = cap.read()\n\n    # Apply transforms\n    img = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)\n    input_batch = transform(img).to(device)\n\n    # Predict and resize to original resolution\n    with torch.no_grad():\n        prediction = midas(input_batch)\n\n        prediction = torch.nn.functional.interpolate(\n            prediction.unsqueeze(1),\n            size=img.shape[:2],\n            mode=\"bicubic\",\n            align_corners=False,\n        ).squeeze()\n\n    output = prediction.cpu().numpy()\n    \n    plt.imshow(output)\n    plt.pause(0.00001)\n    \n    cv2.imshow('RTSP stream', img)\n\n    if cv2.waitKey(1) & 0xFF == ord('q'):  # Keep running until you press `q`\n        break\n\nplt.show()\n")),(0,i.kt)("p",null,"This now outputs the RTSP source through OpenCV and the corresponding prediction with Matplotlib:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MiDaS Depth Vision",src:n(73317).Z,width:"1271",height:"432"})))}d.isMDXComponent=!0},60739:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Torch_Depth_Vision_01-a5276b5d2a1b2a212599ceb94882c296.png"},97583:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Torch_Depth_Vision_02-f9d6b125f9fd2d03ddf56c64c6fd6714.png"},73317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Torch_Depth_Vision_03-ee193cea9d2c45ca0c7dcaffeeb8c90d.png"},25139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ba3b23aa3d5392c02b451d1b2b911721.jpg"}}]);