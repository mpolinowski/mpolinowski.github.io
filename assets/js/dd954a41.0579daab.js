"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[40225],{255517:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var r=o(474848),s=o(28453);const a={sidebar_position:7090,slug:"2021-11-09",title:"Tensorflow2 Crash Course - Part II",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},i=void 0,t={id:"IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/index",title:"Tensorflow2 Crash Course - Part II",description:"Mong Kok, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii",slug:"/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:7090,frontMatter:{sidebar_position:7090,slug:"2021-11-09",title:"Tensorflow2 Crash Course - Part II",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},sidebar:"tutorialSidebar",previous:{title:"Tensorflow2 Crash Course - Part III",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10"},next:{title:"Tensorflow Crash Course - Part I",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-08--tensorflow-crash-course-part-i/2021-11-08"}},l={},c=[{value:"Training",id:"training",level:2},{value:"Download Pre-trained Model",id:"download-pre-trained-model",level:3},{value:"Install TFOD",id:"install-tfod",level:3},{value:"Prepare your Model",id:"prepare-your-model",level:3},{value:"Train the Model",id:"train-the-model",level:3},{value:"Evaluate the Model",id:"evaluate-the-model",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Mong Kok, Hongkong",src:o(81931).A+"",width:"1500",height:"544"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#training",children:"Training"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#download-pre-trained-model",children:"Download Pre-trained Model"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#install-tfod",children:"Install TFOD"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#prepare-your-model",children:"Prepare your Model"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#train-the-model",children:"Train the Model"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#evaluate-the-model",children:"Evaluate the Model"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This set of Notebooks provides a complete set of code to be able to train and leverage your own custom object detection model using the Tensorflow Object Detection API."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This article is based on a ",(0,r.jsx)(n.a,{href:"https://www.youtube.com/channel/UCHXa4OpASJEwrHrLeIzw7Yg",children:"Tutorial"})," by ",(0,r.jsx)(n.a,{href:"https://github.com/nicknochnack",children:"@nicknochnack"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"training",children:"Training"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-08--tensorflow-crash-course-part-i/2021-11-08",children:"Tensorflow2 Crash Course Part I"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-09--tensorflow-crash-course-part-ii/2021-11-09",children:"Tensorflow2 Crash Course Part II"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-10--tensorflow-crash-course-part-iii/2021-11-10",children:"Tensorflow2 Crash Course Part III"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-11--tensorflow-crash-course-part-iv/2021-11-11",children:"Tensorflow2 Crash Course Part IV"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-12--tensorflow-crash-course-part-v/2021-11-12",children:"Tensorflow2 Crash Course Part V"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/tensorflow2-starter",children:"Github Repository"})}),"\n",(0,r.jsx)(n.h3,{id:"download-pre-trained-model",children:"Download Pre-trained Model"}),"\n",(0,r.jsxs)(n.p,{children:["Begin training process by opening ",(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/TFODCourse/blob/main/training_the_model.py.ipynb",children:"training_the_model.py.ipynb"}),", this notebook will walk you through installing Tensorflow Object Detection, making detections, saving and exporting your model:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Precision"}),": True Positiv / (True Positiv + False Positive)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Recall"}),": True Positiv / (True Positiv + False Negative)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/tf2_detection_zoo.md",children:"Detection Models"}),": Tensorflow provides a collection of detection models pre-trained on the COCO 2017 dataset. These models can be useful for out-of-the-box inference if you are interested in categories already in those datasets."]}),"\n",(0,r.jsxs)(n.p,{children:["The model table gives you both a ",(0,r.jsx)(n.strong,{children:"Speed"})," parameter as well as a ",(0,r.jsx)(n.strong,{children:"COCO mAP"})," that correlates with the accuracy of the model. The higher the speed the less accurate the detection will become."]}),"\n",(0,r.jsx)(n.h3,{id:"install-tfod",children:"Install TFOD"}),"\n",(0,r.jsx)(n.p,{children:"During this process the Notebook will install Tensorflow Object Detection. You should ideally receive a notification indicating that the API has installed successfully with the last line stating:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:o(465773).A+"",width:"1124",height:"471"})}),"\n",(0,r.jsxs)(n.p,{children:["If not, resolve installation errors by referring to the ",(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/TFODCourse/blob/main/README.md",children:"Error Guide.md"})," in this folder."]}),"\n",(0,r.jsx)(n.h3,{id:"prepare-your-model",children:"Prepare your Model"}),"\n",(0,r.jsxs)(n.p,{children:["The Step ",(0,r.jsx)(n.strong,{children:"Get your pretrained Model"})," downloads the model you defined under ",(0,r.jsx)(n.code,{children:"PRETRAINED_MODEL_PATH"})," and unzips it. The following steps provide a ",(0,r.jsx)(n.strong,{children:"Label Map"})," with the labels you assigned to your images as well as the location of all your training and testing images for the ",(0,r.jsx)(n.strong,{children:"TF Records"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The model that was downloaded now has to be configured with the correct paths according to our project structure. This can be done in the following file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Tensorflow/workspace/pre-trained-models/ssd_mobilenet_v2_fpnlite_320x320_coco17_tpu-8/pipeline.config\n"})}),"\n",(0,r.jsx)(n.p,{children:"The file is going to be copied to the trainings folder and all the missing pieces will be automatically filled out. Here we have the 5 instances that need to be defined:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'fine_tune_checkpoint: "PATH_TO_BE_CONFIGURED"\r\n  num_steps: 50000\r\n  startup_delay_steps: 0.0\r\n  replicas_to_aggregate: 8\r\n  max_number_of_boxes: 100\r\n  unpad_groundtruth_tensors: false\r\n  fine_tune_checkpoint_type: "classification"\r\n  fine_tune_checkpoint_version: V2\r\n}\r\ntrain_input_reader {\r\n  label_map_path: "PATH_TO_BE_CONFIGURED"\r\n  tf_record_input_reader {\r\n    input_path: "PATH_TO_BE_CONFIGURED"\r\n  }\r\n}\r\neval_config {\r\n  metrics_set: "coco_detection_metrics"\r\n  use_moving_averages: false\r\n}\r\neval_input_reader {\r\n  label_map_path: "PATH_TO_BE_CONFIGURED"\r\n  shuffle: false\r\n  num_epochs: 1\r\n  tf_record_input_reader {\r\n    input_path: "PATH_TO_BE_CONFIGURED"\r\n  }\n'})}),"\n",(0,r.jsx)(n.p,{children:"As well as the number of classes the model has to handle. By default this is set to 90. In our case we are only looking for 4 different hand gestures:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"num_classes: 4\n"})}),"\n",(0,r.jsx)(n.h3,{id:"train-the-model",children:"Train the Model"}),"\n",(0,r.jsx)(n.p,{children:"You may choose to train the model from within the notebook. I have noticed however that training inside of a separate terminal you're able to display live loss metrics. To do so run the following command from the root dir of your app (and within the virtual environment):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python Tensorflow/models/research/object_detection/model_main_tf2.py --model_dir=Tensorflow/workspace/models/my_ssd_mobnet --pipeline_config_path=Tensorflow/workspace/models/my_ssd_mobnet/pipeline.config --num_train_steps=2000\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will run a ",(0,r.jsx)(n.code,{children:"2000"})," steps trainings run for the initial training:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:o(75094).A+"",width:"1154",height:"499"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["How to check the GPU load on Linux ? Mem load went up during the run. CPU load stayed low - I guess this means the calculations were run on my GPU ? There is a strang warning in the logs ",(0,r.jsx)(n.code,{children:"returning NUMA node zero"})," - though apparently ",(0,r.jsx)(n.a,{href:"https://stackoverflow.com/questions/69241922/tensor-flow-installation-success-but-returning-numa-node-zero-warning-on-ubuntu",children:"you can ignore it"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"2022-01-01 19:28:12.478293: I tensorflow/stream_executor/cuda/cuda_gpu_executor.cc:939] successful NUMA node read from SysFS had negative value (-1), but there must be at least one NUMA node, so returning NUMA node zero\r\n2022-01-01 19:28:12.508530: I tensorflow/core/platform/cpu_feature_guard.cc:151] This TensorFlow binary is optimized with oneAPI Deep Neural Network Library (oneDNN) to use the following CPU instructions in performance-critical operations:  AVX2 FMA\r\nTo enable them in other operations, rebuild TensorFlow with the appropriate compiler flags.\r\n2022-01-01 19:28:13.763340: I tensorflow/core/common_runtime/gpu/gpu_device.cc:1525] Created device /job:localhost/replica:0/task:0/device:GPU:0 with 4691 MB memory:  -> device: 0, name: NVIDIA GeForce GTX 1060 6GB, pci bus id: 0000:01:00.0, compute capability: 6.1\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"UPDATE"})," run the ",(0,r.jsx)(n.code,{children:"nvidia-smi"})," command and you will see the python process occupying the majority of your GPU resources:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:o(826736).A+"",width:"1310",height:"552"})}),"\n",(0,r.jsxs)(n.p,{children:["The training will print out an intermediate result every ",(0,r.jsx)(n.code,{children:"100"})," steps during which you should see a constant decrease of the ",(0,r.jsx)(n.strong,{children:"Loss Parameter"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"INFO:tensorflow:Step 2000 per-step time 0.119s\r\nI0101 19:33:06.292452 140223989212992 model_lib_v2.py:705] Step 2000 per-step time 0.119s\r\nINFO:tensorflow:{'Loss/classification_loss': 0.09995355,\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["All trainings data is stored in ",(0,r.jsx)(n.code,{children:"/opt/Python/TFODCourse/Tensorflow/workspace/models/my_ssd_mobnet"}),"!"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"evaluate-the-model",children:"Evaluate the Model"}),"\n",(0,r.jsx)(n.p,{children:"Again, you can use the Jupyter notebook a=or just copy the command into your terminal:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python Tensorflow/models/research/object_detection/model_main_tf2.py --model_dir=Tensorflow/workspace/models/my_ssd_mobnet --pipeline_config_path=Tensorflow/workspace/models/my_ssd_mobnet/pipeline.config --checkpoint_dir=Tensorflow/workspace/models/my_ssd_mobnet\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will give you the average ",(0,r.jsx)(n.strong,{children:"Precision"})," and ",(0,r.jsx)(n.strong,{children:"Recall"})," for your model - both should ideally be ",(0,r.jsx)(n.code,{children:"1"})," and are already ok-ish with ",(0,r.jsx)(n.code,{children:"0.706"})," and ",(0,r.jsx)(n.code,{children:"0.713"})," in my case:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Accumulating evaluation results...\r\nDONE (t=0.02s).\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.706\r\n Average Precision  (AP) @[ IoU=0.50      | area=   all | maxDets=100 ] = 1.000\r\n Average Precision  (AP) @[ IoU=0.75      | area=   all | maxDets=100 ] = 0.881\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Precision  (AP) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.706\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=  1 ] = 0.713\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets= 10 ] = 0.725\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=   all | maxDets=100 ] = 0.744\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= small | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area=medium | maxDets=100 ] = -1.000\r\n Average Recall     (AR) @[ IoU=0.50:0.95 | area= large | maxDets=100 ] = 0.744\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can optionally evaluate your model inside of ",(0,r.jsx)(n.strong,{children:"Tensorboard"}),". Once the model has been trained and you have run the evaluation command. Open ",(0,r.jsx)(n.strong,{children:"Tensorboard"})," for the ",(0,r.jsx)(n.strong,{children:"Evaluation Metrics"})," with the following command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tensorboard --logdir=Tensorflow/workspace/models/my_ssd_mobnet/eval\r\n\r\nServing TensorBoard on localhost; to expose to the network, use a proxy or pass --bind_all\r\nTensorBoard 2.7.0 at http://localhost:6006/ (Press CTRL+C to quit)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:o(853183).A+"",width:"1245",height:"877"})}),"\n",(0,r.jsx)(n.p,{children:"Tensorboard will be accessible through your browser and you will be able to see metrics including mAP - mean Average Precision, and Recall. Currently we only have one data point. But the metrics will be tracked over every trainings run."}),"\n",(0,r.jsx)(n.p,{children:"The board also gives us access to result images:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:o(449353).A+"",width:"800",height:"225"})}),"\n",(0,r.jsxs)(n.p,{children:["Your ",(0,r.jsx)(n.strong,{children:"Loss Metrics"})," are available from:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"tensorboard --logdir=Tensorflow/workspace/models/my_ssd_mobnet/train\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Tensorflow Object Detection Walkthrough",src:o(478176).A+"",width:"1228",height:"908"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},465773:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Tensorflow_Training_01-307a905f53a9069cbbc06fe4913b1517.png"},75094:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Tensorflow_Training_02-5f9d608fa57599c8ce6228aeec3ce305.png"},853183:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Tensorflow_Training_03-03b3d48256b9d8bfdbe6a06387cc0039.png"},478176:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Tensorflow_Training_04-041a7249fe6dde5d3a3037a3016e1d3a.png"},449353:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/Tensorflow_Training_05-0e3bdb9e7e87ae7a16c737f4267586a9.png"},826736:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/nvidia-smi-1185fa54a20d998a9916232570a4f2fe.png"},81931:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-8629210580d5b66cf728356357923b9f.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>t});var r=o(296540);const s={},a=r.createContext(s);function i(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);