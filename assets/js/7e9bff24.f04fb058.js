"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95806],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=l,_=m["".concat(o,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(_,s(s({ref:t},c),{},{components:n})):a.createElement(_,s({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:l,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={sidebar_position:4660,slug:"2023-03-27",title:"Deploying Prediction APIs",authors:"mpolinowski",tags:["Python","Machine Learning","Flask"],description:"Using Flask to deploy your ML Model as a Web Application"},s=void 0,i={unversionedId:"IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/index",id:"IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/index",title:"Deploying Prediction APIs",description:"Using Flask to deploy your ML Model as a Web Application",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask",slug:"/IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/2023-03-27",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/2023-03-27",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Flask",permalink:"/docs/tags/flask"}],version:"current",sidebarPosition:4660,frontMatter:{sidebar_position:4660,slug:"2023-03-27",title:"Deploying Prediction APIs",authors:"mpolinowski",tags:["Python","Machine Learning","Flask"],description:"Using Flask to deploy your ML Model as a Web Application"},sidebar:"tutorialSidebar",previous:{title:"AIOps",permalink:"/docs/category/aiops"},next:{title:"MLflow 2.1 Introduction",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-09-mlflow-introduction/2023-02-09"}},o={},p=[{value:"Building an ML Model for Deployment",id:"building-an-ml-model-for-deployment",level:2},{value:"IRIS Dataset",id:"iris-dataset",level:3},{value:"Building the Model",id:"building-the-model",level:3},{value:"Fitting the Model",id:"fitting-the-model",level:3},{value:"Fit all Data",id:"fit-all-data",level:3},{value:"Save the Trained Model",id:"save-the-trained-model",level:3},{value:"Run Predictions",id:"run-predictions",level:3},{value:"Prediction API",id:"prediction-api",level:2},{value:"Model Serving",id:"model-serving",level:3},{value:"Prediction Frontend",id:"prediction-frontend",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"TST, HongKong",src:n(96891).Z,width:"1500",height:"512"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#deploying-prediction-apis"},"Deploying Prediction APIs"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#building-an-ml-model-for-deployment"},"Building an ML Model for Deployment"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#iris-dataset"},"IRIS Dataset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#building-the-model"},"Building the Model")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#fitting-the-model"},"Fitting the Model")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#fit-all-data"},"Fit all Data")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#save-the-trained-model"},"Save the Trained Model")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#run-predictions"},"Run Predictions")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prediction-api"},"Prediction API"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#model-serving"},"Model Serving")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#prediction-frontend"},"Prediction Frontend"))))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ml-flask-web-app"},"Github Repository")),(0,l.kt)("h1",{id:"deploying-prediction-apis"},"Deploying Prediction APIs"),(0,l.kt)("p",null,"Using Flask to deploy your ML Model as a Web Application."),(0,l.kt)("h2",{id:"building-an-ml-model-for-deployment"},"Building an ML Model for Deployment"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import joblib\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.preprocessing import LabelBinarizer, MinMaxScaler\nfrom tensorflow.keras.callbacks import EarlyStopping\nfrom tensorflow.keras.layers import Dense\nfrom tensorflow.keras.models import Sequential, load_model\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'SEED = 42\nEPOCHS = 888\nMODEL_PATH="./model/full_iris_model.h5"\nSCALER_PATH="./model/iris_data_norm.pkl"\n')),(0,l.kt)("h3",{id:"iris-dataset"},"IRIS Dataset"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"wget https://gist.githubusercontent.com/Thanatoz-1/9e7fdfb8189f0cdf5d73a494e4a6392a/raw/aaecbd14aeaa468cd749528f291aa8a30c2ea09e/iris_dataset.csv"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'iris_dataset = pd.read_csv("./data/iris_dataset.csv")\niris_dataset.head()\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# separate features from labels\nX = iris_dataset.drop('target', axis=1)\nX.head()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"y = iris_dataset['target']\ny.unique()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# 1-hot encoding labels\nencoder = LabelBinarizer()\ny = encoder.fit_transform(y)\ny[0]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# create training / testing datasets\nX_train, X_test, y_train, y_test = train_test_split(\n                                        X, y,\n                                        test_size=0.2,\n                                        random_state=SEED)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# normalize training data\nscaler = MinMaxScaler()\nscaler.fit(X_train)\nX_train_norm = scaler.transform(X_train)\nX_test_norm = scaler.transform(X_test)\n")),(0,l.kt)("h3",{id:"building-the-model"},"Building the Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"iris_model = Sequential([\n    Dense(units=4, activation='relu', input_shape=[4,]),\n    Dense(units=3, activation='softmax')\n])\n\niris_model.compile(optimizer='adam',\n                  loss='categorical_crossentropy',\n                  metrics=['accuracy'])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# fitting the model\nearly_stop = EarlyStopping(\n    monitor='val_loss',\n    min_delta=0.0001,\n    patience=10,\n    verbose=0,\n    mode='auto',\n    baseline=None,\n    restore_best_weights=True,\n    start_from_epoch=0)\n")),(0,l.kt)("h3",{id:"fitting-the-model"},"Fitting the Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"history_iris_model = iris_model.fit(x=X_train_norm,\n         y=y_train,\n         epochs=EPOCHS,\n         validation_data=(X_test_norm, y_test),\n         callbacks=[early_stop])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# evaluate the model\niris_model.evaluate(X_test_norm, y_test, verbose=0)\n# [0.334958016872406, 0.8999999761581421]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# plot the validation accuracy\ndef plot_accuracy_curves(history, title):\n    accuracy = history.history['accuracy']\n    val_accuracy = history.history['val_accuracy']\n    epochs = range(len(history.history['accuracy']))\n\n    # Plot accuracy\n    plt.figure(figsize=(12, 6))\n    plt.plot(epochs, accuracy, label='training_accuracy')\n    plt.plot(epochs, val_accuracy, label='val_accuracy')\n    plt.title(title)\n    plt.xlabel('Epochs')\n    plt.legend();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'plot_accuracy_curves(history_iris_model, "IRIS Dataset :: Accuracy Curve")\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploying Prediction APIs",src:n(81142).Z,width:"981",height:"547"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# plot the training loss\ndef plot_loss_curves(history, title):\n    loss = history.history['loss']\n    val_loss = history.history['val_loss']\n    epochs = range(len(history.history['loss']))\n\n    # Plot accuracy\n    plt.figure(figsize=(12, 6))\n    plt.plot(epochs, loss, label='training_loss')\n    plt.plot(epochs, val_loss, label='val_loss')\n    plt.title(title)\n    plt.xlabel('Epochs')\n    plt.legend();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'plot_loss_curves(history_iris_model, "IRIS Dataset :: Loss Curve")\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploying Prediction APIs",src:n(34302).Z,width:"981",height:"547"})),(0,l.kt)("h3",{id:"fit-all-data"},"Fit all Data"),(0,l.kt)("p",null,"After reaching a approx. 90% accuracy we can now add the testing data to our model training to increase the dataset variety the model was trained on."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"X_norm =scaler.fit_transform(X)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"iris_model_full = Sequential([\n    Dense(units=4, activation='relu', input_shape=[4,]),\n    Dense(units=3, activation='softmax')\n])\n\niris_model_full.compile(optimizer='adam',\n                  loss='categorical_crossentropy',\n                  metrics=['accuracy'])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"history_iris_model_full = iris_model_full.fit(X_norm, y, epochs=EPOCHS)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# evaluate the model\niris_model_full.evaluate(X_norm, y, verbose=0)\n# [0.1931973546743393, 0.9733333587646484]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# plot the validation and training loss\ndef plot_training_curves(history, title):\n    accuracy = history.history['accuracy']\n    loss = history.history['loss']\n    epochs = range(len(history.history['loss']))\n\n    # Plot accuracy\n    plt.figure(figsize=(12, 6))\n    plt.plot(epochs, accuracy, label='training_accuracy')\n    plt.plot(epochs, loss, label='training_loss')\n    plt.title(title)\n    plt.xlabel('Epochs')\n    plt.legend();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# plot accuracy and loss curves\nplt.figure(figsize=(12, 6))\nplot_training_curves(history_iris_model_full, "IRIS Dataset :: Training Curves")\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploying Prediction APIs",src:n(6387).Z,width:"981",height:"547"})),(0,l.kt)("h3",{id:"save-the-trained-model"},"Save the Trained Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# save the full model with training weights\niris_model_full.save(MODEL_PATH)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# save data preprocessing\njoblib.dump(scaler, SCALER_PATH)\n")),(0,l.kt)("h3",{id:"run-predictions"},"Run Predictions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# load the saved model\nloaded_iris_model = load_model(MODEL_PATH)\nloaded_scaler = joblib.load(SCALER_PATH)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# verify predictions are the same\nloaded_iris_model.evaluate(X_norm, y, verbose=0)\n")),(0,l.kt)("h2",{id:"prediction-api"},"Prediction API"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# simulate JSON API call\nflower_example = {"sepal length (cm)": 5.1,\n                  "sepal width (cm)": 3.5,\n                  "petal length (cm)":1.4,\n                  "petal width (cm)": 0.2}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# API function (return class index with highest probability)\ndef return_prediction(model, scaler, json_request):\n    s_len = json_request["sepal length (cm)"]\n    s_wi = json_request["sepal width (cm)"]\n    p_len = json_request["petal length (cm)"]\n    p_w = json_request["petal width (cm)"]\n    \n    measures =[[s_len, s_wi, p_len, p_w]]\n    measures_norm = scaler.transform(measures)\n    \n    flower_class_probabilities = model.predict(measures_norm)\n    flower_class_index=np.argmax(flower_class_probabilities,axis=1)\n                           \n    return flower_class_index\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"return_prediction(loaded_iris_model, loaded_scaler, flower_example)\n# probabilities array([[9.987895e-01, 7.723020e-04, 4.383073e-04]], dtype=float32)\n# index array([0])\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},'# API function (return class name)\ndef return_prediction(model, scaler, json_request):\n    s_len = json_request["sepal length (cm)"]\n    s_wi = json_request["sepal width (cm)"]\n    p_len = json_request["petal length (cm)"]\n    p_w = json_request["petal width (cm)"]\n    \n    classes = np.array([\'Iris-setosa\', \'Iris-versicolor\', \'Iris-virginica\'])\n    measures =[[s_len, s_wi, p_len, p_w]]\n    measures_norm = scaler.transform(measures)\n    \n    flower_class_probabilities = model.predict(measures_norm)\n    flower_class_index=np.argmax(flower_class_probabilities,axis=1)\n                       \n    return classes[flower_class_index]\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"return_prediction(loaded_iris_model, loaded_scaler, flower_example)\n# array(['Iris-setosa'], dtype='<U15')\n")),(0,l.kt)("p",null,"We can combine this into a small Python script that we can deploy together with the exported trained model and scaler:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Run","_","Predictions.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import joblib\nimport numpy as np\nfrom tensorflow.keras.models import load_model\n\nMODEL_PATH="./model/full_iris_model.h5"\nSCALER_PATH="./model/iris_data_norm.pkl"\n\n# load the saved model\nloaded_iris_model = load_model(MODEL_PATH)\nloaded_scaler = joblib.load(SCALER_PATH)\n\n# API function (return class name)\ndef return_prediction(model, scaler, json_request):\n    s_len = json_request["sepal length (cm)"]\n    s_wi = json_request["sepal width (cm)"]\n    p_len = json_request["petal length (cm)"]\n    p_w = json_request["petal width (cm)"]\n    \n    classes = np.array([\'Iris-setosa\', \'Iris-versicolor\', \'Iris-virginica\'])\n    measures =[[s_len, s_wi, p_len, p_w]]\n    measures_norm = scaler.transform(measures)\n    \n    flower_class_probabilities = model.predict(measures_norm)\n    flower_class_index=np.argmax(flower_class_probabilities,axis=1)\n                       \n    return classes[flower_class_index]\n')),(0,l.kt)("h3",{id:"model-serving"},"Model Serving"),(0,l.kt)("p",null,"To serve the model we can use Flask as our application web server. For this we need to split up the prediction code slightly:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Flask","_","Server.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},"import joblib\nfrom flask import Flask, request, jsonify\nfrom tensorflow.keras.models import load_model\n\nfrom Run_Predictions import return_prediction\nfrom Config import MODEL_PATH, SCALER_PATH\n\n# load the saved model\nloaded_iris_model = load_model(MODEL_PATH)\nloaded_scaler = joblib.load(SCALER_PATH)\n\napp = Flask(__name__)\n\n# optional home route\n@app.route('/')\n\ndef index():\n    return '<h1>IRIS Classifier</h1>'\n\n# expect JSON POST to forward to prediction model\n@app.route('/api/iris', methods=['POST'])\n\ndef iris_class_prediction():\n    content = request.json\n    results = return_prediction(loaded_iris_model, loaded_scaler, content)\n    return jsonify(results[0])\n\nif __name__ == '__main__':\n    app.run()\n")),(0,l.kt)("p",null,"This file imports the API calling function from:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Run","_","Predictions.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import numpy as np\n\n# API function (return class name)\ndef return_prediction(model, scaler, json_request):\n    s_len = json_request["sepal length (cm)"]\n    s_wi = json_request["sepal width (cm)"]\n    p_len = json_request["petal length (cm)"]\n    p_w = json_request["petal width (cm)"]\n    \n    classes = np.array([\'Iris-setosa\', \'Iris-versicolor\', \'Iris-virginica\'])\n    measures =[[s_len, s_wi, p_len, p_w]]\n    measures_norm = scaler.transform(measures)\n    \n    flower_class_probabilities = model.predict(measures_norm)\n    flower_class_index=np.argmax(flower_class_probabilities,axis=1)\n                       \n    return classes[flower_class_index]\n')),(0,l.kt)("p",null,"Use a tool like Postman to test the API:"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploying Prediction APIs",src:n(70950).Z,width:"992",height:"580"})),(0,l.kt)("p",null,"Or run a Python script to simulate a request:"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"sample","_","request.py")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-py"},'import requests\n\nsample_request = {\n  "sepal length (cm)": 5.1,\n  "sepal width (cm)": 3.5,\n  "petal length (cm)": 1.4,\n  "petal width (cm)": 0.2\n} \n\nresult = requests.post(\'http://127.0.0.1:5000/api/iris\', json=sample_request)\n\nprint(result.status_code, result.text)\n')),(0,l.kt)("p",null,"Executing this script should return the same result:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'python sample_request.py\n200 "Iris-setosa"\n')),(0,l.kt)("h3",{id:"prediction-frontend"},"Prediction Frontend"),(0,l.kt)("p",null,"Start the Flask server from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/ml-flask-web-app"},"Github repository"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"python Flask_Server.py\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploying Prediction APIs",src:n(79553).Z,width:"1041",height:"516"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Deploying Prediction APIs",src:n(82814).Z,width:"1025",height:"254"})))}d.isMDXComponent=!0},81142:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IRIS_Dataset_Model_Deployment_01-0d8c1af31bf979ecdcfcfcb0a1c18cf3.png"},34302:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IRIS_Dataset_Model_Deployment_02-0e192f56914e862fa23adf7e0dc6f48d.png"},6387:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IRIS_Dataset_Model_Deployment_03-8a4159cb4604616740f33ca1efdb5e5b.png"},70950:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IRIS_Dataset_Model_Deployment_04-240004d5af94497c08ed7c4ad127377e.png"},79553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IRIS_Dataset_Model_Deployment_05-959085ab052bc924774a100a40030470.png"},82814:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/IRIS_Dataset_Model_Deployment_06-3383e0264ab81b977f08ea9353f7909e.png"},96891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c77de99ac2aaaf4bfc10d6424f4476da.jpg"}}]);