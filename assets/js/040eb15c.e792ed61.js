"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[19849],{308135:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(474848),i=s(28453);const r={sidebar_position:4580,slug:"2023-08-19",title:"Tensorflow Serving API",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Once you build a machine learning model, the next step is to serve it with TensorFlow Serving."},o=void 0,a={id:"IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/index",title:"Tensorflow Serving API",description:"Once you build a machine learning model, the next step is to serve it with TensorFlow Serving.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api",slug:"/IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/2023-08-19",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/2023-08-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-08-19-tensorflow-serving-api/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4580,frontMatter:{sidebar_position:4580,slug:"2023-08-19",title:"Tensorflow Serving API",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Once you build a machine learning model, the next step is to serve it with TensorFlow Serving."},sidebar:"tutorialSidebar",previous:{title:"MLOps with ZenML - SKLearn Classifier Pipeline",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-09-27-zenml-intro-sklearn-pipeline/2023-09-27"},next:{title:"Serving your SciKit Image Model as a Prediction API",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-07-12-scikit-image-model-deployment-part2/2023-07-12"}},l={},d=[{value:"Starting the Model Server",id:"starting-the-model-server",level:2},{value:"Inference Server",id:"inference-server",level:2},{value:"REST API",id:"rest-api",level:3},{value:"Serving Multiple Models",id:"serving-multiple-models",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:s(176957).A+"",width:"1061",height:"405"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#starting-the-model-server",children:"Starting the Model Server"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#inference-server",children:"Inference Server"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#rest-api",children:"REST API"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#serving-multiple-models",children:"Serving Multiple Models"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-i-know-flowers",children:"Github Repository"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I already looked into the official ",(0,t.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/AIOps/2023-01-01-tf-model-server/2023-01-01/",children:"Tensorflow Docker Model Server"})," and managed to get it to work with CUDA support. The next step is to use this container to serve my own Keras-trained model."]}),"\n",(0,t.jsx)(n.h2,{id:"starting-the-model-server",children:"Starting the Model Server"}),"\n",(0,t.jsxs)(n.p,{children:["Export your Tensorflow model in the ",(0,t.jsx)(n.code,{children:"saved_model"})," format and point the ",(0,t.jsx)(n.code,{children:"tensorflow-serving"})," container to model path, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --gpus all -p 8501:8501 -p 8500:8500 --name tf-model-server \\\n--mount type=bind,source=$(pwd)/saved_model,target=/models \\\n-e MODEL_NAME=efficientv2b0_model -t tensorflow/serving:latest-gpu\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The container uses the port ",(0,t.jsx)(n.code,{children:"8500"})," for the ",(0,t.jsx)(n.strong,{children:"GRPC"})," api and port ",(0,t.jsx)(n.code,{children:"8501"})," for the ",(0,t.jsx)(n.strong,{children:"REST"})," api."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ERROR"})," ",(0,t.jsx)(n.code,{children:"message: W tensorflow_serving/sources/storage_path/file_system_storage_path_source.cc:252] No versions of servable efficientv2b0_model found under base path /models/efficientv2b0_model. Did you forget to name your leaf directory as a number (eg. '/1/')?"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The server expects the model path to have numbered sub directories - create a subdir inside the saved model directory named ",(0,t.jsx)(n.code,{children:"1"})," and copy everything that Tensorflow saved into it. Subsequently, every time you retrain the model place the updated files in folders with incrementing numbers. The model server will automatically switch to the latest version for you."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"saved_model tree -L 2\n.\n\u251c\u2500\u2500 efficientv2b0_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u2502\xa0\xa0     \u251c\u2500\u2500 assets\n\u2502\xa0\xa0     \u251c\u2500\u2500 fingerprint.pb\n\u2502\xa0\xa0     \u251c\u2500\u2500 keras_metadata.pb\n\u2502\xa0\xa0     \u251c\u2500\u2500 saved_model.pb\n\u2502\xa0\xa0     \u2514\u2500\u2500 variables\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verifying MetaGraph and Signature Definitions using saved_model_cli utility:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"saved_model_cli show --dir ./saved_model/efficientv2b0_model/1/ --tag_set serve --signature_def serving_default\n\nThe given SavedModel SignatureDef contains the following input(s):\n  inputs['input_2'] tensor_info:\n      dtype: DT_FLOAT\n      shape: (-1, 224, 224, 3)\n      name: serving_default_input_2:0\nThe given SavedModel SignatureDef contains the following output(s):\n  outputs['dense_2'] tensor_info:\n      dtype: DT_FLOAT\n      shape: (-1, 48)\n      name: StatefulPartitionedCall:0\nMethod name is: tensorflow/serving/predict\n"})}),"\n",(0,t.jsx)(n.p,{children:"Now the server starts successfully:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"I tensorflow_serving/core/loader_harness.cc:95] Successfully loaded servable version {name: efficientv2b0_model version: 1}\nI tensorflow_serving/model_servers/server_core.cc:486] Finished adding/updating models\nI tensorflow_serving/model_servers/server.cc:118] Using InsecureServerCredentials\nI tensorflow_serving/model_servers/server.cc:383] Profiler service is enabled\nI tensorflow_serving/model_servers/server.cc:409] Running gRPC ModelServer at 0.0.0.0:8500 ...\n[warn] getaddrinfo: address family for nodename not supported\nI tensorflow_serving/model_servers/server.cc:430] Exporting HTTP/REST API at:localhost:8501 ...\n[evhttp_server.cc : 245] NET_LOG: Entering the event loop ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can verify the REST API by retrieving your models metadata:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl http://localhost:8501/v1/models/efficientv2b0_model/metadata\n\n{\n"model_spec":{\n "name": "efficientv2b0_model",\n "signature_name": "",\n "version": "1"\n}\n...\n'})}),"\n",(0,t.jsx)(n.h2,{id:"inference-server",children:"Inference Server"}),"\n",(0,t.jsx)(n.h3,{id:"rest-api",children:"REST API"}),"\n",(0,t.jsx)(n.p,{children:"For testing I will just start a simple python container and install my dependencies manually:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run --rm -ti --network host \\\n--mount type=bind,source=$(pwd)/api_request,target=/opt/app \\\npython:alpine /bin/ash\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install pillow requests numpy\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"/opt/app/api_request/rest_request.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import json\nimport numpy as np\nfrom PIL import Image\nimport requests\n\n\nlabels = ['Gladiolus', 'Adenium', 'Alpinia_Purpurata', 'Alstroemeria', 'Amaryllis', 'Anthurium_Andraeanum', 'Antirrhinum', 'Aquilegia', 'Billbergia_Pyramidalis', 'Cattleya', 'Cirsium', 'Coccinia_Grandis', 'Crocus', 'Cyclamen', 'Dahlia', 'Datura_Metel', 'Dianthus_Barbatus', 'Digitalis', 'Echinacea_Purpurea', 'Echinops_Bannaticus', 'Fritillaria_Meleagris', 'Gaura', 'Gazania', 'Gerbera', 'Guzmania', 'Helianthus_Annuus', 'Iris_Pseudacorus', 'Leucanthemum', 'Malvaceae', 'Narcissus_Pseudonarcissus', 'Nerine', 'Nymphaea_Tetragona', 'Paphiopedilum', 'Passiflora', 'Pelargonium', 'Petunia', 'Platycodon_Grandiflorus', 'Plumeria', 'Poinsettia', 'Primula', 'Protea_Cynaroides', 'Rose', 'Rudbeckia', 'Strelitzia_Reginae', 'Tropaeolum_Majus', 'Tussilago', 'Viola', 'Zantedeschia_Aethiopica']\n\n\nurl1 = 'http://localhost:8501/v1/models/efficientv2b0_model:predict'\n\n\ntest_img1 = \"/opt/app/snapshots/Viola_Tricolor.jpg\"\ntest_img2 = \"/opt/app/snapshots/Water_Lilly.jpg\"\ntest_img3 = \"/opt/app/snapshots/Strelitzia.jpg\"\n\n\nwith Image.open (test_img2) as im:\n        preprocess_img = im.resize((224, 224))\n\nbatched_img = np.expand_dims(preprocess_img, axis=0)\nbatched_img = np.float32(batched_img)\n\ndata = json.dumps(\n    {\"signature_name\": \"serving_default\", \"instances\": batched_img.tolist()}\n)\n\n\ndef predict_rest(json_data, url):\n    json_response = requests.post(url, data=json_data)\n    response = json.loads(json_response.text)\n    rest_outputs = np.array(response[\"predictions\"])\n    return rest_outputs\n\n\n# get prediction from efficientv2b0_model\nrest_outputs = predict_rest(data, url1)\nindex = np.argmax(rest_outputs, axis=-1)[0]  # Index with highest prediction\n\nprint(\"Prediction Results: EfficientV2B0\")\nprint(\"Class probabilities: \", rest_outputs)\nprint(\"Predicted class: \", labels[index])\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Executing the API request script ",(0,t.jsx)(n.code,{children:"/opt/app/api_request/rest_request.py"})," inside the container will send 1 of 3 test images to the Tensorflow model API to retrieve a prediction:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python /opt/app/rest_request.py\n\nClass probabilities:  [[2.02370361e-13 5.45808624e-12 3.14568647e-17 4.50543422e-11\n  1.74268600e-09 2.22335952e-12 5.15965439e-12 2.28333991e-10\n  3.17855503e-18 3.61456546e-12 1.40493947e-17 1.46841839e-09\n  3.42843321e-13 2.59899831e-16 2.68869540e-12 1.53930095e-08\n  1.36200578e-12 6.06594810e-16 2.21194929e-14 5.79839779e-17\n  1.05216942e-12 6.55278443e-10 2.30210545e-13 6.22206000e-15\n  5.16498033e-16 1.86334712e-15 7.34451477e-09 9.92521278e-13\n  1.40660292e-08 5.47506651e-10 3.36575397e-16 1.56563315e-12\n  4.54165000e-09 4.07618221e-13 1.69515952e-05 1.08003778e-05\n  2.42027980e-08 1.65058089e-09 1.25125591e-13 4.95898966e-09\n  1.62804418e-16 5.25978046e-17 1.91704139e-14 2.93358880e-18\n  3.04848768e-08 1.63559369e-14 9.99972224e-01 2.25344784e-10]]\n\nPredicted class:  Viola\n"})}),"\n",(0,t.jsx)(n.h2,{id:"serving-multiple-models",children:"Serving Multiple Models"}),"\n",(0,t.jsx)(n.p,{children:"Ok, with this working I want to configure the Model Server to serve all the trained models."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tree -L 2 saved_model\n\nsaved_model\n\u251c\u2500\u2500 deit_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 efficients_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 efficientv2b0_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 inception_model_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenet2_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenetv3L_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 mobilenetv3S_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 nasnetmobile_model_ft\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u251c\u2500\u2500 vit_model\n\u2502\xa0\xa0 \u2514\u2500\u2500 1\n\u2514\u2500\u2500 xception_model\n    \u2514\u2500\u2500 1\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For this we have to add a ",(0,t.jsx)(n.a,{href:"https://www.tensorflow.org/tfx/serving/serving_config",children:"models.config"})," file inside the ",(0,t.jsx)(n.code,{children:"models"})," container. The configuration file can then be added by adding the following flags (the automatic reload is optional):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run -t --rm -p 8501:8501 --name tf-serve \\\n    --mount type=bind,source=$(pwd)/saved_model,target=/models \\\n    tensorflow/serving:latest-gpu \\\n    --model_config_file=/models/models.config \\\n    --model_config_file_poll_wait_seconds=60\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./saved_model/models.config"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"model_config_list {\n  config {\n    name: 'deit_model'\n    base_path: '/models/deit_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'efficients_model'\n    base_path: '/models/efficients_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'efficientv2b0_model'\n    base_path: '/models/efficientv2b0_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'inception_model_model_ft'\n    base_path: '/models/inception_model_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenet2_model_ft'\n    base_path: '/models/mobilenet2_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenetv3L_model_ft'\n    base_path: '/models/mobilenetv3L_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'mobilenetv3S_model'\n    base_path: '/models/mobilenetv3S_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'nasnetmobile_model_ft'\n    base_path: '/models/nasnetmobile_model_ft/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'vit_model'\n    base_path: '/models/vit_model/'\n    model_platform: 'tensorflow'\n  }\n  config {\n    name: 'xception_model'\n    base_path: '/models/xception_model/'\n    model_platform: 'tensorflow'\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Starting up the container I can now see that Tensorflow is reloading all three models in a 60s interval:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"tensorflow_serving/model_servers/server.cc:430] Exporting HTTP/REST API at:localhost:8501 ...\ntensorflow_serving/model_servers/server_core.cc:465] Adding/updating models.\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: efficientv2b0_model\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: mobilenetv3S_model\ntensorflow_serving/model_servers/server_core.cc:594]  (Re-)adding model: vit_model\ntensorflow_serving/model_servers/server_core.cc:486] Finished adding/updating models\n"})}),"\n",(0,t.jsx)(n.p,{children:"I now added the URL for all three models to the Python request script:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"url1 = 'http://localhost:8501/v1/models/efficientv2b0_model:predict'\nurl2 = 'http://localhost:8501/v1/models/mobilenetv3S_model:predict'\nurl3 = 'http://localhost:8501/v1/models/vit_model:predict'\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./saved_model/models.config"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import json\nimport numpy as np\nfrom PIL import Image\nimport requests\n\n\nlabels = ['Gladiolus', 'Adenium', 'Alpinia_Purpurata', 'Alstroemeria', 'Amaryllis', 'Anthurium_Andraeanum', 'Antirrhinum', 'Aquilegia', 'Billbergia_Pyramidalis', 'Cattleya', 'Cirsium', 'Coccinia_Grandis', 'Crocus', 'Cyclamen', 'Dahlia', 'Datura_Metel', 'Dianthus_Barbatus', 'Digitalis', 'Echinacea_Purpurea', 'Echinops_Bannaticus', 'Fritillaria_Meleagris', 'Gaura', 'Gazania', 'Gerbera', 'Guzmania', 'Helianthus_Annuus', 'Iris_Pseudacorus', 'Leucanthemum', 'Malvaceae', 'Narcissus_Pseudonarcissus', 'Nerine', 'Nymphaea_Tetragona', 'Paphiopedilum', 'Passiflora', 'Pelargonium', 'Petunia', 'Platycodon_Grandiflorus', 'Plumeria', 'Poinsettia', 'Primula', 'Protea_Cynaroides', 'Rose', 'Rudbeckia', 'Strelitzia_Reginae', 'Tropaeolum_Majus', 'Tussilago', 'Viola', 'Zantedeschia_Aethiopica']\n\n\nurl1 = 'http://localhost:8501/v1/models/efficientv2b0_model:predict'\nurl2 = 'http://localhost:8501/v1/models/mobilenetv3S_model:predict'\nurl3 = 'http://localhost:8501/v1/models/vit_model:predict'\n\n\ntest_img1 = \"/opt/app/snapshots/Viola_Tricolor.jpg\"\ntest_img2 = \"/opt/app/snapshots/Water_Lilly.jpg\"\ntest_img3 = \"/opt/app/snapshots/Strelitzia.jpg\"\n\n\nwith Image.open (test_img2) as im:\n        preprocess_img = im.resize((224, 224))\n\nbatched_img = np.expand_dims(preprocess_img, axis=0)\nbatched_img = np.float32(batched_img)\n\ndata = json.dumps(\n    {\"signature_name\": \"serving_default\", \"instances\": batched_img.tolist()}\n)\n\n\ndef predict_rest(json_data, url):\n    json_response = requests.post(url, data=json_data)\n    response = json.loads(json_response.text)\n    rest_outputs = np.array(response[\"predictions\"])\n    return rest_outputs\n\n\n# get prediction from efficientv2b0_model\nrest_outputs = predict_rest(data, url1)\nindex = np.argmax(rest_outputs, axis=-1)[0]  # Index with highest prediction\n\nprint(\"Prediction Results: EfficientV2B0\")\nprint(\"Class probabilities: \", rest_outputs)\nprint(\"Predicted class: \", labels[index])\npercentage = round((rest_outputs[0][index]*100), 3)\nprint(f'Certainty:  {percentage} %')\n\n\n# get prediction from mobilenetv3S_model\nrest_outputs = predict_rest(data, url2)\nindex = np.argmax(rest_outputs, axis=-1)[0]  # Index with highest prediction\n\nprint(\"Prediction Results: MobileNetV3S\")\nprint(\"Class probabilities: \", rest_outputs)\nprint(\"Predicted class: \", labels[index])\npercentage = round((rest_outputs[0][index]*100), 3)\nprint(f'Certainty:  {percentage} %')\n\n\n# get prediction from vit_model\nrest_outputs = predict_rest(data, url3)\nindex = np.argmax(rest_outputs, axis=-1)[0]  # Index with highest prediction\n\nprint(\"Prediction Results: ViT\")\nprint(\"Class probabilities: \", rest_outputs)\nprint(\"Predicted class: \", labels[index])\npercentage = round((rest_outputs[0][index]*100), 3)\nprint(f'Certainty:  {percentage} %')\n"})}),"\n",(0,t.jsx)(n.p,{children:"That will now return 3 predictions:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python /opt/app/rest_request.py\nPrediction Results: EfficientV2B0\nClass probabilities:  [[1.27231669e-18 7.36642785e-15 2.12142088e-16 8.37840160e-13\n  2.54633266e-15 2.23082670e-22 1.22582740e-17 1.58766519e-16\n  3.15969443e-21 3.40760905e-12 9.31879706e-21 1.35364190e-16\n  4.19998346e-13 6.28031038e-19 1.42876893e-08 1.52733778e-16\n  1.71126649e-18 6.26449727e-18 1.70084369e-22 5.93363685e-27\n  1.35457736e-23 9.82926604e-26 1.07540425e-15 1.03456081e-16\n  5.33486490e-14 1.70107328e-19 1.25875951e-20 1.54503871e-19\n  2.05770212e-19 9.31224634e-16 2.43002143e-25 1.00000000e+00\n  1.49300737e-20 6.64273082e-17 4.00534170e-18 3.18333764e-19\n  1.38794318e-24 5.08237766e-13 4.06667683e-19 4.50689589e-13\n  4.09000394e-16 6.34139226e-13 2.21711468e-24 3.38089155e-23\n  1.83935487e-19 3.32891393e-19 1.46283768e-16 3.42905371e-23]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  100.0 %\nPrediction Results: MobileNetV3S\nClass probabilities:  [[6.27168000e-08 9.36711274e-07 3.32008640e-05 1.82103206e-04\n  3.65090000e-05 7.08905601e-10 5.29715000e-09 2.18803660e-08\n  1.43549421e-08 2.40992620e-07 2.09935107e-12 9.32755886e-11\n  1.55253754e-10 2.58531685e-08 1.72480277e-03 9.44796508e-09\n  1.51912500e-12 3.97989908e-07 4.73708963e-13 2.97169041e-14\n  4.57825137e-14 4.23965169e-11 4.12751433e-07 1.92947700e-05\n  8.95965513e-06 5.97457550e-09 4.81428591e-13 3.20082150e-13\n  1.89814697e-09 9.56469748e-09 3.24247695e-09 9.97930884e-01\n  9.90472593e-09 2.25990516e-06 2.97242941e-09 4.48806965e-08\n  8.23452157e-12 5.94276535e-05 3.16433564e-08 3.98971480e-07\n  2.16912586e-08 8.35711322e-09 1.56445000e-12 1.42842169e-10\n  2.86222768e-10 7.43138450e-12 1.27389072e-10 1.44366144e-10]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  99.793 %\nPrediction Results: ViT\nClass probabilities:  [[2.62611400e-04 9.45560227e-04 7.97024090e-03 2.50866893e-03\n  5.62246714e-04 9.96018527e-04 5.78884617e-04 1.15711347e-03\n  1.87621685e-03 2.56323745e-03 1.19275635e-03 5.13695000e-04\n  8.98167782e-04 4.11458139e-04 1.77495480e-02 3.71844682e-04\n  3.45975481e-04 1.64183730e-04 1.62366749e-04 4.10321372e-04\n  5.85561967e-04 4.59756848e-04 7.18721712e-04 2.03839969e-03\n  2.18398985e-03 8.30425473e-04 5.62683621e-04 1.05744123e-03\n  1.08664425e-03 8.36106890e-04 4.69557708e-04 9.25359428e-01\n  7.82242860e-04 8.19175097e-04 4.58333000e-04 2.90713477e-04\n  2.36424108e-04 8.55224300e-03 6.25506684e-04 9.37757781e-04\n  5.16826578e-04 4.17304225e-03 5.67917000e-04 4.71120235e-04\n  7.65961187e-04 7.77638000e-04 1.47661043e-03 7.18727824e-04]]\nPredicted class:  Nymphaea_Tetragona\nCertainty:  92.536 %\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},176957:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-fe9bbb57ea8da08fea2f3fef2bf2515b.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(296540);const i={},r=t.createContext(i);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);