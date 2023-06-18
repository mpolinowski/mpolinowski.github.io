"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[12040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:4640,slug:"2023-06-17",title:"Serving your SciKit Learn Model as a Prediction API",authors:"mpolinowski",tags:["Python","Machine Learning","SKlearn","Flask"],description:"Use Flask, Docker and React.js to Deploy your ML Model to the Web"},i=void 0,o={unversionedId:"IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment/index",id:"IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment/index",title:"Serving your SciKit Learn Model as a Prediction API",description:"Use Flask, Docker and React.js to Deploy your ML Model to the Web",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment",slug:"/IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment/2023-06-17",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment/2023-06-17",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-06-17-scikit-learn-model-deployment/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"SKlearn",permalink:"/docs/tags/s-klearn"},{label:"Flask",permalink:"/docs/tags/flask"}],version:"current",sidebarPosition:4640,frontMatter:{sidebar_position:4640,slug:"2023-06-17",title:"Serving your SciKit Learn Model as a Prediction API",authors:"mpolinowski",tags:["Python","Machine Learning","SKlearn","Flask"],description:"Use Flask, Docker and React.js to Deploy your ML Model to the Web"},sidebar:"tutorialSidebar",previous:{title:"AIOps",permalink:"/docs/category/aiops"},next:{title:"Deploying Prediction APIs",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-03-27-deploying-prediction-apis-with-flask/2023-03-27"}},p={},d=[{value:"Preparing the ML Model",id:"preparing-the-ml-model",level:2},{value:"Data Preprocessing",id:"data-preprocessing",level:3},{value:"Model Training",id:"model-training",level:3},{value:"Model Validation",id:"model-validation",level:4},{value:"Model Testing",id:"model-testing",level:4},{value:"Model Saving",id:"model-saving",level:3},{value:"Model Loading",id:"model-loading",level:3},{value:"Preparing the Model API",id:"preparing-the-model-api",level:2},{value:"Containerizing the Application",id:"containerizing-the-application",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Building the Docker Image",id:"building-the-docker-image",level:3},{value:"Running the Docker Container",id:"running-the-docker-container",level:3},{value:"React.js Frontend",id:"reactjs-frontend",level:2}],s={toc:d};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"TST, HongKong",src:n(40561).Z,width:"1500",height:"512"})),(0,r.kt)("h1",{id:"serving-your-scikit-learn-model-as-a-prediction-api"},"Serving your SciKit Learn Model as a Prediction API"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/sklearn-model-deployment"},"Github Repository")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#serving-your-scikit-learn-model-as-a-prediction-api"},"Serving your SciKit Learn Model as a Prediction API"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preparing-the-ml-model"},"Preparing the ML Model"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#data-preprocessing"},"Data Preprocessing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-training"},"Model Training"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-validation"},"Model Validation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-testing"},"Model Testing")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-saving"},"Model Saving")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model-loading"},"Model Loading")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preparing-the-model-api"},"Preparing the Model API")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#containerizing-the-application"},"Containerizing the Application"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preparations"},"Preparations")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-the-docker-image"},"Building the Docker Image")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#running-the-docker-container"},"Running the Docker Container")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reactjs-frontend"},"React.js Frontend"))))),(0,r.kt)("h2",{id:"preparing-the-ml-model"},"Preparing the ML Model"),(0,r.kt)("h3",{id:"data-preprocessing"},"Data Preprocessing"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/ashydv/advertising-dataset"},"Advertisement Dataset"),": Use the advertising dataset given in ISLR and analyse the relationship between advertisement channels and sales."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import joblib\nimport pandas as pd\nfrom sklearn.ensemble import RandomForestRegressor\nfrom sklearn.metrics import mean_absolute_error, mean_squared_error\nfrom sklearn.model_selection import train_test_split\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"SEED = 42\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"adv_df = pd.read_csv('dataset/advertising.csv')\nadv_df.head(5)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"TV"),(0,r.kt)("th",{parentName:"tr",align:null},"Radio"),(0,r.kt)("th",{parentName:"tr",align:null},"Newspaper"),(0,r.kt)("th",{parentName:"tr",align:null},"Sales"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"230.1"),(0,r.kt)("td",{parentName:"tr",align:null},"37.8"),(0,r.kt)("td",{parentName:"tr",align:null},"69.2"),(0,r.kt)("td",{parentName:"tr",align:null},"22.1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"44.5"),(0,r.kt)("td",{parentName:"tr",align:null},"39.3"),(0,r.kt)("td",{parentName:"tr",align:null},"45.1"),(0,r.kt)("td",{parentName:"tr",align:null},"10.4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"17.2"),(0,r.kt)("td",{parentName:"tr",align:null},"45.9"),(0,r.kt)("td",{parentName:"tr",align:null},"69.3"),(0,r.kt)("td",{parentName:"tr",align:null},"9.3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"151.5"),(0,r.kt)("td",{parentName:"tr",align:null},"41.3"),(0,r.kt)("td",{parentName:"tr",align:null},"58.5"),(0,r.kt)("td",{parentName:"tr",align:null},"18.5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"180.8"),(0,r.kt)("td",{parentName:"tr",align:null},"10.8"),(0,r.kt)("td",{parentName:"tr",align:null},"58.4"),(0,r.kt)("td",{parentName:"tr",align:null},"12.9")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"adv_df.describe()\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"TV"),(0,r.kt)("th",{parentName:"tr",align:null},"Radio"),(0,r.kt)("th",{parentName:"tr",align:null},"Newspaper"),(0,r.kt)("th",{parentName:"tr",align:null},"Sales"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"200.000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"147.042500"),(0,r.kt)("td",{parentName:"tr",align:null},"23.264000"),(0,r.kt)("td",{parentName:"tr",align:null},"30.554000"),(0,r.kt)("td",{parentName:"tr",align:null},"14.022500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"std"),(0,r.kt)("td",{parentName:"tr",align:null},"85.854236"),(0,r.kt)("td",{parentName:"tr",align:null},"14.846809"),(0,r.kt)("td",{parentName:"tr",align:null},"21.778621"),(0,r.kt)("td",{parentName:"tr",align:null},"5.217457")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"0.700000"),(0,r.kt)("td",{parentName:"tr",align:null},"0.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"0.300000"),(0,r.kt)("td",{parentName:"tr",align:null},"1.600000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25%"),(0,r.kt)("td",{parentName:"tr",align:null},"74.375000"),(0,r.kt)("td",{parentName:"tr",align:null},"9.975000"),(0,r.kt)("td",{parentName:"tr",align:null},"12.750000"),(0,r.kt)("td",{parentName:"tr",align:null},"10.375000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50%"),(0,r.kt)("td",{parentName:"tr",align:null},"149.750000"),(0,r.kt)("td",{parentName:"tr",align:null},"22.900000"),(0,r.kt)("td",{parentName:"tr",align:null},"25.750000"),(0,r.kt)("td",{parentName:"tr",align:null},"12.900000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"75%"),(0,r.kt)("td",{parentName:"tr",align:null},"218.825000"),(0,r.kt)("td",{parentName:"tr",align:null},"36.525000"),(0,r.kt)("td",{parentName:"tr",align:null},"45.100000"),(0,r.kt)("td",{parentName:"tr",align:null},"17.400000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"296.400000"),(0,r.kt)("td",{parentName:"tr",align:null},"49.600000"),(0,r.kt)("td",{parentName:"tr",align:null},"114.000000"),(0,r.kt)("td",{parentName:"tr",align:null},"27.000000")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# features / labels split\nX = adv_df.drop('Sales', axis=1)\ny = adv_df['Sales']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# train, validation and test split\nX_train, X_temp, y_train, y_temp = train_test_split(\n    X, y, test_size=0.3, random_state=SEED\n)\n\nX_val, X_test, y_val, y_test = train_test_split(\n    X_temp, y_temp, test_size=0.5, random_state=SEED\n)\n\nprint(len(X), len(X_train), len(X_val), len(X_test))\n# 200 140 30 30\n")),(0,r.kt)("h3",{id:"model-training"},"Model Training"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model = RandomForestRegressor(\n    n_estimators=3,\n    random_state=SEED\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model.fit(X_train, y_train)\n")),(0,r.kt)("h4",{id:"model-validation"},"Model Validation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# validate model performance and tune hyper parameter\nval_preds = model.predict(X_val)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(mean_absolute_error(y_val, val_preds))\nprint(mean_squared_error(y_val, val_preds)**0.5)\n# 0.7566666666666663 MAE should be small compared to MEAN 14.022500\n# 0.9330753611738063 RMSE should be small compared to STD 5.217457\nadv_df.describe()['Sales']\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"count"),(0,r.kt)("td",{parentName:"tr",align:null},"200.000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mean"),(0,r.kt)("td",{parentName:"tr",align:null},"14.022500")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"std"),(0,r.kt)("td",{parentName:"tr",align:null},"5.217457")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"1.600000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"25%"),(0,r.kt)("td",{parentName:"tr",align:null},"10.375000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"50%"),(0,r.kt)("td",{parentName:"tr",align:null},"12.900000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"75%"),(0,r.kt)("td",{parentName:"tr",align:null},"17.400000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"27.000000")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Name: Sales, dtype: float64")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# try to improve the model by adding estimators\nmodel2 = RandomForestRegressor(\n    n_estimators=30,\n    random_state=SEED\n)\nmodel2.fit(X_train, y_train)\nval_preds2 = model2.predict(X_val)\n\nprint(mean_absolute_error(y_val, val_preds2))\nprint(mean_squared_error(y_val, val_preds2)**0.5)\n# 0.483111111111111 MAE should be small compared to MEAN 14.022500\n# 0.6177971619660723 RMSE should be small compared to STD 5.217457\n")),(0,r.kt)("h4",{id:"model-testing"},"Model Testing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# retest the optimized model on unseen data\ntest_preds = model2.predict(X_test)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(mean_absolute_error(y_test, test_preds))\nprint(mean_squared_error(y_test, test_preds)**0.5)\n# 0.5649999999999998 MAE should be small compared to MEAN 14.022500\n# 0.6758333675845999 RMSE should be small compared to STD 5.217457\n")),(0,r.kt)("h3",{id:"model-saving"},"Model Saving"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"production_model = RandomForestRegressor(\n    n_estimators=30,\n    random_state= SEED\n)\n\n# fit production model to entire dataset\nproduction_model.fit(X, y)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# save model for deployment\njoblib.dump(production_model, 'models/production_model.pkl')\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"list(X.columns)\n# ['TV', 'Radio', 'Newspaper']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"joblib.dump(list(X.columns), 'models/production_model_column_names.pkl')\n")),(0,r.kt)("h3",{id:"model-loading"},"Model Loading"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"column_names = joblib.load('models/production_model_column_names.pkl')\ncolumn_names\n# ['TV', 'Radio', 'Newspaper']\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"loaded_model = joblib.load('models/production_model.pkl')\nprint(loaded_model.predict([X.iloc[42]]))\nprint(loaded_model.predict([[180.8, 10.8, 58.4]]))\n# [20.68666667] TRUE 20.7\n#[13.28] TRUE 12.9\n")),(0,r.kt)("h2",{id:"preparing-the-model-api"},"Preparing the Model API"),(0,r.kt)("p",null,"Install Flask:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install flask\n")),(0,r.kt)("p",null,"And prepare the prediction API route:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Prediction","_","API.py")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from flask import Flask, request, jsonify\nimport joblib\nimport pandas as pd\n\nmodel = joblib.load('models/production_model.pkl')\ncol_names = joblib.load('models/production_model_column_names.pkl')\n\napp = Flask(__name__)\n\n# wait for json post request and return prediction\n@app.route('/api', methods=['POST'])\ndef predict():\n    req_data = request.json\n    df = pd.DataFrame(req_data).reindex(columns=col_names)\n\n    prediction = list(model.predict(df))\n\n    return jsonify({'prediction': str(prediction)})\n\n# load the model and start web api\nif __name__ == 'main':\n    app.run()\n")),(0,r.kt)("p",null,"Start the application by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export FLASK_ENV=development\nexport FLASK_APP=Prediction_API\nflask run \n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(30905).Z,width:"1130",height:"171"})),(0,r.kt)("p",null,"We can now use ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/downloads/"},"Postman")," to POST 3 datapoints from our dataset to the API endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {"TV":180.8, "Radio":10.8, "Newspaper":58.4},\n    {"TV":44.5, "Radio":39.3, "Newspaper":45.1},\n    {"TV":17.2, "Radio":45.9, "Newspaper":69.3}\n]\n')),(0,r.kt)("p",null,"As they are from our labelled dataset we know that the prediction response should be around ",(0,r.kt)("inlineCode",{parentName:"p"},"12.9"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"10.4")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"9.3")," for those 3 datapoints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "prediction": "[13.279999999999996, 10.389999999999997, 8.99666666666667]"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(29874).Z,width:"1280",height:"581"})),(0,r.kt)("h2",{id:"containerizing-the-application"},"Containerizing the Application"),(0,r.kt)("h3",{id:"preparations"},"Preparations"),(0,r.kt)("p",null,"Prepare the necessary files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 Dockerfile\n\u251c\u2500\u2500 app.py\n\u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 production_model_column_names.pkl\n\u2502\xa0\xa0 \u2514\u2500\u2500 production_model.pkl\n\u2514\u2500\u2500 requirements.txt\n")),(0,r.kt)("p",null,"Take the latest pickle files from your model training and copy the Flask app into ",(0,r.kt)("em",{parentName:"p"},"app.py"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from flask import Flask, request, jsonify\nimport joblib\nimport pandas as pd\n\nmodel = joblib.load('models/production_model.pkl')\ncol_names = joblib.load('models/production_model_column_names.pkl')\n\napp = Flask(__name__)\n\n# wait for json post request and return prediction\n@app.route('/api', methods=['POST'])\ndef predict():\n    req_data = request.json\n    df = pd.DataFrame(req_data).reindex(columns=col_names)\n\n    prediction = list(model.predict(df))\n\n    return jsonify({'prediction': str(prediction)})\n\n# load the model and start web api\nif __name__ == 'main':\n    app.run()\n")),(0,r.kt)("p",null,"Define all the Python dependencies that need to be installed inside the container for the app to work in ",(0,r.kt)("em",{parentName:"p"},"requirements.txt"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"blinker==1.6.2\nclick==8.1.3\njoblib==1.2.0\nFlask==2.3.2\nitsdangerous==2.1.2\nJinja2==3.1.2\nMarkupSafe==2.1.2\nnumpy==1.25.0\npandas==2.0.2\nscikit-learn==1.2.2\nWerkzeug==2.3.6\n")),(0,r.kt)("p",null,"And the ",(0,r.kt)("em",{parentName:"p"},"Dockerfile")," to build the container with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# base image to use\nFROM python:3.10-slim-bookworm\n# dir name inside the container used for your app\nWORKDIR /opt/python_app\n# copy all files into the work dir\nCOPY . .\n# install python dependencies\nRUN pip install --upgrade pip\nRUN pip install -r requirements.txt\n# execute the app when container starts\nEXPOSE 5000/tcp\nCMD [ "python", "-m" , "flask", "--app", "app", "run", "--host=0.0.0.0"] \n')),(0,r.kt)("h3",{id:"building-the-docker-image"},"Building the Docker Image"),(0,r.kt)("p",null,"You can simply run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker build --tag flask-app .")," to build the container using Docker. But I started getting deprecation warnings on the ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," command and that it is going to be replaced by ",(0,r.kt)("inlineCode",{parentName:"p"},"buildx")," and the installation guide for this still feels a bit flaky..."),(0,r.kt)("p",null,"But I wanted to use ",(0,r.kt)("a",{parentName:"p",href:"https://podman-desktop.io/"},"Podman Desktop")," for a while. So let's give that a try then :)"),(0,r.kt)("p",null,"Install the package from ",(0,r.kt)("a",{parentName:"p",href:"https://flathub.org/apps/details/io.podman_desktop.PodmanDesktop"},"Flathub"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flatpak install flathub io.podman_desktop.PodmanDesktop\n")),(0,r.kt)("p",null,"And run the application using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"flatpak run io.podman_desktop.PodmanDesktop\n")),(0,r.kt)("p",null,"After clicking on ",(0,r.kt)("strong",{parentName:"p"},"Create Container")," and selecting ",(0,r.kt)("em",{parentName:"p"},"from Dockerfile"),":"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(90703).Z,width:"1042",height:"287"})),(0,r.kt)("p",null,"I ran into my first issue - which, I am sure, is actually a Flatpack issue. You have to point the builder to your ",(0,r.kt)("strong",{parentName:"p"},"Dockerfile"),". But since the file is then copied into a temp directory that the Flatpack app is allowed to access you then also have to point to the ",(0,r.kt)("strong",{parentName:"p"},"Build Context Directory")," to the containing folder. This will copy everything inside this folder into ",(0,r.kt)("strong",{parentName:"p"},"a different temp folder"),". Otherwise the build will fail because it cannot find the ",(0,r.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(65413).Z,width:"1044",height:"411"})),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"Build")," and wait for the process to finish:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(46881).Z,width:"1032",height:"240"})),(0,r.kt)("h3",{id:"running-the-docker-container"},"Running the Docker Container"),(0,r.kt)("p",null,"To run the container in Docker we just need to make sure that the API port is exposed. In the code above By default Flask uses port ",(0,r.kt)("inlineCode",{parentName:"p"},"5000")," and the Dockerfile above exposed this port when building the Docker image. So all I need to do is to run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -P flask-api\n")),(0,r.kt)("p",null,"This exposes the REST API to a random outer port ",(0,r.kt)("inlineCode",{parentName:"p"},"32773")," - which is what you want in a cloud-native environment:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(61237).Z,width:"1206",height:"52"})),(0,r.kt)("p",null,"To get more control you can override the default port by - e.g. setting the outer port to ",(0,r.kt)("inlineCode",{parentName:"p"},"8080"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d --rm -p 8080:5000 flask-api\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(61620).Z,width:"1135",height:"49"})),(0,r.kt)("p",null,"Or going back to Podman Desktop:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(148).Z,width:"1049",height:"674"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(26498).Z,width:"1050",height:"191"})),(0,r.kt)("p",null,"With those settings the API is now exposed on it's native port ",(0,r.kt)("inlineCode",{parentName:"p"},"5000")," and can be tested using Postman:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(12308).Z,width:"1277",height:"581"})),(0,r.kt)("h2",{id:"reactjs-frontend"},"React.js Frontend"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/docs/Development/Javascript/2023-04-01-reactjs-2023/2023-04-01"},"Vite")," to scaffold a basic React frontend:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create vite@latest\ncd into/directory\nnpm install\nnpm run dev\n")),(0,r.kt)("p",null,"Add a component that fetches the prediction from your backend API and import it to your page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useState } from \'react\';\n\nconst apiUrl = \'http://localhost:5000/api\'\nconst method = \'POST\'\nconst mode = \'cors\'\nconst headers = {\n    \'content-type\': \'application/json\'\n}\n\nconst jsonData = [ {"TV":17.2, "Radio":45.9, "Newspaper":69.3} ]\n\n\nconst makeRequest = async (data) => {\n\n    const res = await fetch(apiUrl, {\n      method: method,\n      mode: mode,\n      cache: "no-cache",\n      credentials: "same-origin",\n      headers: headers,\n      body: JSON.stringify(data)\n    });\n    const response = await res.json();\n    return response;\n  };\n\n  export default function App() {\n    const [answer, setAnswer] = useState();\n\n    const submit = async () => {\n      const res = await makeRequest(jsonData);\n      setAnswer(parseFloat(res.prediction.replace("[", "").replace("]", "")));\n    };\n  \n    return (\n      <>\n        <button onClick={submit}>Send</button>\n        <div><p>Sales: {JSON.stringify(answer)}</p></div>\n      </>\n    );\n  }\n  \n')),(0,r.kt)("p",null,"The frontend takes the hard coded values ",(0,r.kt)("inlineCode",{parentName:"p"},'[{"TV":17.2, "Radio":45.9, "Newspaper":69.3}]')," and requests a prediction on them when the button is pressed. Run a build to generate the static frontend with the following command and deploy the HTML to your website:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Serving your SciKit Learn Model as a Prediction API",src:n(25053).Z,width:"822",height:"336"})))}m.isMDXComponent=!0},30905:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_01-1eb6477acb34b2cad928b09d85fae280.png"},29874:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_02-c8720462dff42551aaf555225db233d9.png"},90703:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_03-169dd617e134a1accc735d713fd74490.png"},65413:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_04-33e8f7ab49e40c982f893a4a4ab0bc6b.png"},46881:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_05-4ff577e98f6edc052cadac5d93d56198.png"},61237:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_06-6efb01223160005d5d0488b1b46ae844.png"},61620:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_07-9383162564bc0d4b4c777139f44ce2ae.png"},148:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_08-dd60e307bf44f9a7a627641804a577b1.png"},26498:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_09-094447ceadc63f6c7a997641076e1658.png"},12308:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_10-26c4a30f4b29b9123441d8cda255b4bb.png"},25053:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SciKit_Learn_Model_API_11-af946a212596f0148628a499d45d24c1.gif"},40561:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c77de99ac2aaaf4bfc10d6424f4476da.jpg"}}]);