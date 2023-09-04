"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[16416],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var o=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},c=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),c=d(t),f=l,u=c["".concat(s,".").concat(f)]||c[f]||m[f]||i;return t?o.createElement(u,a(a({ref:n},p),{},{components:t})):o.createElement(u,a({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var d=2;d<i;d++)a[d]=t[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}c.displayName="MDXCreateElement"},74357:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(87462),l=(t(67294),t(3905));const i={sidebar_position:4300,slug:"2023-08-01",title:"Tensorflow Image Classifier - Introduction",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},a=void 0,r={unversionedId:"IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index",id:"IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index",title:"Tensorflow Image Classifier - Introduction",description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro",slug:"/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4300,frontMatter:{sidebar_position:4300,slug:"2023-08-01",title:"Tensorflow Image Classifier - Introduction",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Image Classifier - Data Pre-processing",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/2023-08-02"},next:{title:"Tensorflow VITs",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-07-27-tensorflow-vision-transformer/2023-07-27"}},s={},d=[{value:"Model Training",id:"model-training",level:2},{value:"Docker Setup",id:"docker-setup",level:3},{value:"Model Serving",id:"model-serving",level:2},{value:"Inference Server",id:"inference-server",level:3},{value:"REST API",id:"rest-api",level:4},{value:"Serving Multiple Models",id:"serving-multiple-models",level:2}],p={toc:d};function m(e){let{components:n,...i}=e;return(0,l.kt)("wrapper",(0,o.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Angkor Wat, Cambodia",src:t(93149).Z,width:"1500",height:"706"})),(0,l.kt)("h1",{id:"tf-image-classifier"},"Tf Image Classifier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/mpolinowski/tf-i-know-flowers"},"Github Repository"))),(0,l.kt)("h2",{id:"model-training"},"Model Training"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-13-tensorflow-i-know-flowers-model-eval/2023-08-13"},"Evaluation Overview"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/2023-08-04"},"EfficientNetV2B0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-05-tensorflow-i-know-flowers-efficientnetv2s/2023-08-05"},"EfficientNetV2S")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-12-tensorflow-i-know-flowers-xception/2023-08-12"},"Xception")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-06-tensorflow-i-know-flowers-inceptionv3/2023-08-06"},"InceptionV3")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-10-tensorflow-i-know-flowers-nasnetmobile/2023-08-10"},"NASNetMobile")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/2023-08-09"},"MobileNetV3Small")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-08-tensorflow-i-know-flowers-mobilenetv3large/2023-08-08"},"MobileNetV3Large")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-07-tensorflow-i-know-flowers-mobilenetv2/2023-08-07"},"MobileNetV2")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-11-tensorflow-i-know-flowers-vit/2023-08-11"},"vit-base-patch16-224")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-03-tensorflow-i-know-flowers-deit/2023-08-03"},"DeiT"))))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tf Image Classifier",src:t(25015).Z,width:"1008",height:"474"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tf Image Classifier",src:t(49772).Z,width:"1008",height:"474"})),(0,l.kt)("h3",{id:"docker-setup"},"Docker Setup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull tensorflow/tensorflow:latest-gpu-jupyter\n")),(0,l.kt)("p",null,"All notebooks mounted into ",(0,l.kt)("inlineCode",{parentName:"p"},"/tf/notebooks")," will be accessible from the served Jupyter Notebook. After running the command you can access the Jupyter UI on ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost:8888"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --gpus all --rm -p 8888:8888 --name tf-notebook \\\n--mount type=bind,source=$(pwd),target=/tf/notebooks \\\ntensorflow/tensorflow:latest-gpu-jupyter\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"To access the notebook, open this file in a browser:\n        file:///root/.local/share/jupyter/runtime/nbserver-1-open.html\n    Or copy and paste one of these URLs:\n        http://b62cc9c31655:8888/?token=484cd6b995e8dc53f878795f00a83015c74410771882141c\n     or http://127.0.0.1:8888/?token=484cd6b995e8dc53f878795f00a83015c74410771882141c\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tf Image Classifier",src:t(48484).Z,width:"1252",height:"884"})),(0,l.kt)("h2",{id:"model-serving"},"Model Serving"),(0,l.kt)("p",null,"I am going to use the official Tensorflow ",(0,l.kt)("inlineCode",{parentName:"p"},"tensorflow-serving")," Docker container to deploy the model:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/AIOps/2023-01-01-tf-model-server/2023-01-01/"},"Tensorflow Docker Model Server"))),(0,l.kt)("p",null,"Simply point the source directory to the model save path that you want to use, e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"Efficientv2B0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --gpus all -p 8501:8501 --name tf-serve \\\n--mount type=bind,source=$(pwd)/saved_model,target=/models \\\n-e MODEL_NAME=efficientv2b0_model -t tensorflow/serving:latest-gpu\n")),(0,l.kt)("h3",{id:"inference-server"},"Inference Server"),(0,l.kt)("h4",{id:"rest-api"},"REST API"),(0,l.kt)("p",null,"For testing I will just start a simple python container and install my dependencies manually:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run --rm -ti --network host \\\n--mount type=bind,source=$(pwd)/api_request,target=/opt/app \\\npython:alpine /bin/ash\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pillow requests numpy\n")),(0,l.kt)("p",null,"Executing the API request script ",(0,l.kt)("inlineCode",{parentName:"p"},"/opt/app/api_request/rest_request.py")," inside the container will send 1 of 3 test images to the Tensorflow model API to retrieve a prediction:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python /opt/app/rest_request.py\n\nClass probabilities:  [[2.02370361e-13 5.45808624e-12 3.14568647e-17 4.50543422e-11\n  1.74268600e-09 2.22335952e-12 5.15965439e-12 2.28333991e-10\n  3.17855503e-18 3.61456546e-12 1.40493947e-17 1.46841839e-09\n  3.42843321e-13 2.59899831e-16 2.68869540e-12 1.53930095e-08\n  1.36200578e-12 6.06594810e-16 2.21194929e-14 5.79839779e-17\n  1.05216942e-12 6.55278443e-10 2.30210545e-13 6.22206000e-15\n  5.16498033e-16 1.86334712e-15 7.34451477e-09 9.92521278e-13\n  1.40660292e-08 5.47506651e-10 3.36575397e-16 1.56563315e-12\n  4.54165000e-09 4.07618221e-13 1.69515952e-05 1.08003778e-05\n  2.42027980e-08 1.65058089e-09 1.25125591e-13 4.95898966e-09\n  1.62804418e-16 5.25978046e-17 1.91704139e-14 2.93358880e-18\n  3.04848768e-08 1.63559369e-14 9.99972224e-01 2.25344784e-10]]\n\nPredicted class:  Viola\n")),(0,l.kt)("h2",{id:"serving-multiple-models"},"Serving Multiple Models"),(0,l.kt)("p",null,"Ok, with this working I want to configure the Model Server to serve all the trained models."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tree -L 2 saved_model\n\nsaved_model\n\u251c\u2500\u2500 deit_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 efficients_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 efficientv2b0_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 inception_model_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenet2_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenetv3L_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenetv3S_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 nasnetmobile_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 vit_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u2514\u2500\u2500 xception_model\n    \u2514\u2500\u2500 1\n")),(0,l.kt)("p",null,"For this we have to add a ",(0,l.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/tfx/serving/serving_config"},"models.config")," file inside the ",(0,l.kt)("inlineCode",{parentName:"p"},"models")," container. The configuration file can then be added by adding the following flags (the automatic reload is optional):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -t --rm -p 8501:8501 --name tf-serve \\\n    --mount type=bind,source=$(pwd)/saved_model,target=/models \\\n    tensorflow/serving:latest-gpu \\\n    --model_config_file=/models/models.config \\\n    --model_config_file_poll_wait_seconds=60\n")),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"./saved","_","model/models.config")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"model_config_list {\n  config {\n    name: 'deit_model'\n    base_path: '/models/deit_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'efficients_model'\n    base_path: '/models/efficients_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'efficientv2b0_model'\n    base_path: '/models/efficientv2b0_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'inception_model_model_ft'\n    base_path: '/models/inception_model_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenet2_model_ft'\n    base_path: '/models/mobilenet2_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenetv3L_model_ft'\n    base_path: '/models/mobilenetv3L_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenetv3S_model'\n    base_path: '/models/mobilenetv3S_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'nasnetmobile_model_ft'\n    base_path: '/models/nasnetmobile_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'vit_model'\n    base_path: '/models/vit_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'xception_model'\n    base_path: '/models/xception_model/'\n    model_platform: 'tensorflow'\n  }\n}\n")),(0,l.kt)("p",null,"Since my system does not like to load all the models at once - I simplified this to:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"model_config_list {\n  config {\n    name: 'efficientv2b0_model'\n    base_path: '/models/efficientv2b0_model/'\n    model_platform: 'tensorflow'\n    model_version_policy {\n    specific {\n      versions: 1\n      }\n    }\n  }\n  config {\n    name: 'mobilenetv3S_model'\n    base_path: '/models/mobilenetv3S_model/'\n    model_platform: 'tensorflow'\n    model_version_policy {\n    specific {\n      versions: 1\n      }\n    }\n  }\n  config {\n    name: 'vit_model'\n    base_path: '/models/vit_model/'\n    model_platform: 'tensorflow'\n    model_version_policy {\n    specific {\n      versions: 1\n      }\n    }\n  }\n}\n")),(0,l.kt)("p",null,"Starting up the container I can now see that Tensorflow is reloading all three models in a 60s interval:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"tensorflow_serving/model_servers/server.cc:430] Exporting HTTP/REST API at:localhost:8501 ...\ntensorflow_serving/model_servers/server_core.cc:465] Adding/updating models.\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: efficientv2b0_model\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: mobilenetv3S_model\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: vit_model\ntensorflow_serving/model_servers/server_core.cc:486] Finished adding/updating models\n")),(0,l.kt)("p",null,"I now added the URL for all three models to the Python request script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"url1 = 'http://localhost:8501/v1/models/efficientv2b0_model:predict'\nurl2 = 'http://localhost:8501/v1/models/mobilenetv3S_model:predict'\nurl3 = 'http://localhost:8501/v1/models/vit_model:predict'\n")),(0,l.kt)("p",null,"That will now return 3 predictions:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python /opt/app/rest_request.py\nPrediction Results: EfficientV2B0\nClass probabilities:  [[1.27231669e-18 7.36642785e-15 2.12142088e-16 8.37840160e-13\n  2.54633266e-15 2.23082670e-22 1.22582740e-17 1.58766519e-16\n  3.15969443e-21 3.40760905e-12 9.31879706e-21 1.35364190e-16\n  4.19998346e-13 6.28031038e-19 1.42876893e-08 1.52733778e-16\n  1.71126649e-18 6.26449727e-18 1.70084369e-22 5.93363685e-27\n  1.35457736e-23 9.82926604e-26 1.07540425e-15 1.03456081e-16\n  5.33486490e-14 1.70107328e-19 1.25875951e-20 1.54503871e-19\n  2.05770212e-19 9.31224634e-16 2.43002143e-25 1.00000000e+00\n  1.49300737e-20 6.64273082e-17 4.00534170e-18 3.18333764e-19\n  1.38794318e-24 5.08237766e-13 4.06667683e-19 4.50689589e-13\n  4.09000394e-16 6.34139226e-13 2.21711468e-24 3.38089155e-23\n  1.83935487e-19 3.32891393e-19 1.46283768e-16 3.42905371e-23]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  100.0 %\nPrediction Results: MobileNetV3S\nClass probabilities:  [[6.27168000e-08 9.36711274e-07 3.32008640e-05 1.82103206e-04\n  3.65090000e-05 7.08905601e-10 5.29715000e-09 2.18803660e-08\n  1.43549421e-08 2.40992620e-07 2.09935107e-12 9.32755886e-11\n  1.55253754e-10 2.58531685e-08 1.72480277e-03 9.44796508e-09\n  1.51912500e-12 3.97989908e-07 4.73708963e-13 2.97169041e-14\n  4.57825137e-14 4.23965169e-11 4.12751433e-07 1.92947700e-05\n  8.95965513e-06 5.97457550e-09 4.81428591e-13 3.20082150e-13\n  1.89814697e-09 9.56469748e-09 3.24247695e-09 9.97930884e-01\n  9.90472593e-09 2.25990516e-06 2.97242941e-09 4.48806965e-08\n  8.23452157e-12 5.94276535e-05 3.16433564e-08 3.98971480e-07\n  2.16912586e-08 8.35711322e-09 1.56445000e-12 1.42842169e-10\n  2.86222768e-10 7.43138450e-12 1.27389072e-10 1.44366144e-10]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  99.793 %\nPrediction Results: ViT\nClass probabilities:  [[2.62611400e-04 9.45560227e-04 7.97024090e-03 2.50866893e-03\n  5.62246714e-04 9.96018527e-04 5.78884617e-04 1.15711347e-03\n  1.87621685e-03 2.56323745e-03 1.19275635e-03 5.13695000e-04\n  8.98167782e-04 4.11458139e-04 1.77495480e-02 3.71844682e-04\n  3.45975481e-04 1.64183730e-04 1.62366749e-04 4.10321372e-04\n  5.85561967e-04 4.59756848e-04 7.18721712e-04 2.03839969e-03\n  2.18398985e-03 8.30425473e-04 5.62683621e-04 1.05744123e-03\n  1.08664425e-03 8.36106890e-04 4.69557708e-04 9.25359428e-01\n  7.82242860e-04 8.19175097e-04 4.58333000e-04 2.90713477e-04\n  2.36424108e-04 8.55224300e-03 6.25506684e-04 9.37757781e-04\n  5.16826578e-04 4.17304225e-03 5.67917000e-04 4.71120235e-04\n  7.65961187e-04 7.77638000e-04 1.47661043e-03 7.18727824e-04]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  92.536 %\n")))}m.isMDXComponent=!0},25015:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Model_Eval_01-f4e8e8e5f53da3e22c3cb3fe91e2367e.webp"},49772:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Model_Eval_02-860b137d590f57eb49ebf1dad86b0640.webp"},48484:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Model_Eval_03-1307485b2c173ee2d3e8fa046228f785.webp"},93149:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4b4c922f390788acb724c3c274da1ef9.jpg"}}]);