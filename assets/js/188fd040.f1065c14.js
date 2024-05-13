"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[73066],{923437:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=s(474848),o=s(28453);const r={sidebar_position:4720,slug:"2023-01-31",title:"Python Ray Model Serving",authors:"mpolinowski",tags:["Python","Machine Learning","Ray"],description:"Using Ray Serve for ML Model Serving."},i=void 0,a={id:"IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/index",title:"Python Ray Model Serving",description:"Using Ray Serve for ML Model Serving.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving",slug:"/IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/2023-01-31",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/2023-01-31",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-01-31-python-ray-model-serving/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Ray",permalink:"/docs/tags/ray"}],version:"current",sidebarPosition:4720,frontMatter:{sidebar_position:4720,slug:"2023-01-31",title:"Python Ray Model Serving",authors:"mpolinowski",tags:["Python","Machine Learning","Ray"],description:"Using Ray Serve for ML Model Serving."},sidebar:"tutorialSidebar",previous:{title:"Apache Airflow Introduction",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01"},next:{title:"Python Ray Deployments",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-29-python-ray-deployments/2023-01-29"}},l={},d=[{value:"Export the trained Classifier Models",id:"export-the-trained-classifier-models",level:2},{value:"Serving the Models",id:"serving-the-models",level:2},{value:"Speculative Model Serving",id:"speculative-model-serving",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:s(448331).A+"",width:"1500",height:"662"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#export-the-trained-classifier-models",children:"Export the trained Classifier Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#serving-the-models",children:"Serving the Models"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#speculative-model-serving",children:"Speculative Model Serving"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://github.com/scalingpythonml/scaling-python-with-ray",children:"Scaling Python with Ray"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/ray-serve-model",children:"Github Repository"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I earlier looked at ",(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-01-30-predicting-wine-quality/2023-01-30",children:"Wine Dataset"})," and used a couple of ",(0,t.jsx)(n.strong,{children:"SciKit Learn Classifier"})," to fit different models to this data to make a binary classification ",(0,t.jsx)(n.em,{children:'"Is this wine any good?"'})," based on a set of features provided by the dataset."]}),"\n",(0,t.jsx)(n.h2,{id:"export-the-trained-classifier-models",children:"Export the trained Classifier Models"}),"\n",(0,t.jsxs)(n.p,{children:["To be able to ",(0,t.jsx)(n.a,{href:"https://docs.ray.io/en/latest/serve/tutorials/serve-ml-models.html",children:"serve such a model in Ray"})," we need to export it using ",(0,t.jsx)(n.strong,{children:"Pickle"}),". Since we already found that only the ",(0,t.jsx)(n.strong,{children:"Random Forrest"})," and the ",(0,t.jsx)(n.strong,{children:"XGBoost Classifier"})," give us usable results we only need to export those by adding the following code (don't forget to ",(0,t.jsx)(n.code,{children:"import pickle"}),") to the ",(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/scikit-wine-quality/blob/master/main.py",children:"training file"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# DEPLOY MODELS\n\nRANDOM_FOREST_WHITE_MODEL_PATH = os.path.join("models/wine-white-quality_random_forest.pkl")\nRANDOM_FOREST_RED_MODEL_PATH = os.path.join("models/wine-red-quality_random_forest.pkl")\nXGBOOST_WHITE_MODEL_PATH = os.path.join("models/wine-white-quality_xgboost.pkl")\nXGBOOST_RED_MODEL_PATH = os.path.join("models/wine-red-quality_xgboost.pkl")\n\nXGBoostModelRed.deploy(XGBOOST_RED_MODEL_PATH)\nXGBoostModelWhite.deploy(XGBOOST_WHITE_MODEL_PATH)\nRandomForestModelRed.deploy(RANDOM_FOREST_RED_MODEL_PATH)\nRandomForestModelWhite.deploy(RANDOM_FOREST_WHITE_MODEL_PATH)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"serving-the-models",children:"Serving the Models"}),"\n",(0,t.jsxs)(n.p,{children:["As in our ",(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-29-python-ray-deployments/2023-01-29",children:"previous deployments"})," we now have to use ",(0,t.jsx)(n.code,{children:"@serve.deployment"})," to define a Ray remote actor that loads our exported model and, defines the API (",(0,t.jsx)(n.em,{children:"what feature inputs does the model expect"}),") and then run predictions based on incoming API requests:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# XGBOOST - RED WINE\n\n#define deployment\n@serve.deployment(route_prefix="/xgboost/red_wines")\nclass XGBoostModelRed:\n    def __init__(self, path):\n        with open(path, "rb") as f:\n            self.model = pickle.load(f)\n\n    async def __call__(self, request):\n        payload = await request.json()\n        return self.serve(payload)\n\n    def serve(self, request):\n        model_features = np.array([\n            request["fixed acidity"],\n            request["volatile acidity"],\n            request["citric acid"],\n            request["residual sugar"],\n            request["chlorides"],\n            request["free sulfur dioxide"],\n            request["total sulfur dioxide"],\n            request["density"],\n            request["pH"],\n            request["sulphates"],\n            request["alcohol"],\n        ])\n        prediction = self.model.predict(model_features.reshape(1,11))[0]\n        return {"result": str(prediction)}\n\nXGBoostModelRed.deploy(XGBOOST_RED_MODEL_PATH)\n'})}),"\n",(0,t.jsx)(n.p,{children:"For the prediction I pretend that I received a CSV file with measurements, load them into a dataframe and run the same scaler on them as I did for the trainings data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# normalize prediction example\ndf_input = pd.read_csv("data/prediction_example.csv")\ndf_norm = StandardScaler().fit_transform(df_input)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now I can prepare an API request to my prediction service by taking the first row of the file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'sample_request_input_red = {\n    "fixed acidity": df_norm[0][0],\n    "volatile acidity": df_norm[0][1],\n    "citric acid": df_norm[0][2],\n    "residual sugar": df_norm[0][3],\n    "chlorides": df_norm[0][4],\n    "free sulfur dioxide":  df_norm[0][5],\n    "total sulfur dioxide": df_norm[0][6],\n    "density": df_norm[0][7],\n    "pH": df_norm[0][8],\n    "sulphates": df_norm[0][9],\n    "alcohol":  df_norm[0][10],\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Since this measurement came from a red wine I will run it against a model trained on red wine data:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'print(requests.get("http://localhost:8000/xgboost/red_wines", json=sample_request_input_red).text)\n'})}),"\n",(0,t.jsxs)(n.p,{children:["As a result I will receive either a ",(0,t.jsx)(n.code,{children:"0"})," or ",(0,t.jsx)(n.code,{children:"1"})," - the latter meaning that the quality of this wine was judged to be a 7 out of 10 or better:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'{"result": "1"}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"speculative-model-serving",children:"Speculative Model Serving"}),"\n",(0,t.jsx)(n.p,{children:"Speculative Model Serving is an optimization technique where a computer system performs some task that may not be needed. Work is done before it is known whether it is actually needed, so as to prevent a delay that would have to be incurred by doing the work after it is known that it is needed."}),"\n",(0,t.jsxs)(n.p,{children:["This technique can be used to build a ",(0,t.jsx)(n.strong,{children:"Consensus-based Model Serving"}),". I, currently, I only use two models - this example would make more sense if I ",(0,t.jsx)(n.a,{href:"https://github.com/scalingpythonml/scaling-python-with-ray/blob/22f413fe140255dd37274a08a89679c8194029b1/examples/ray_examples/serving/modelserving/model_server_deployments.py",children:"had at least 3"}),". But we can still build a prediction API that only returns a result if both models agree on the result:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'@serve.deployment(route_prefix="/speculative")\nclass Speculative:\n    def __init__(self):\n        self.rfhandle = RandomForestModel.get_handle(sync=False)\n        self.xgboosthandle = XGBoostModel.get_handle(sync=False)\n    async def __call__(self, request):\n        payload = await request.json()\n        f1, f2 = await asyncio.gather(self.rfhandle.serve.remote(payload),\n                self.xgboosthandle.serve.remote(payload))\n\n        rfresurlt = ray.get(f1)[\'result\']\n        xgresurlt = ray.get(f2)[\'result\']\n        ones = []\n        zeros = []\n        if rfresurlt == "1":\n            ones.append("Random forest")\n        else:\n            zeros.append("Random forest")\n        if xgresurlt == "1":\n            ones.append("XGBoost")\n        else:\n            zeros.append("XGBoost")\n        if len(ones) >= 2:\n            return {"result": "1", "methods": ones}\n        else:\n            return {"result": "0", "methods": zeros}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The call method here gets the payload and starts executing all three models in parallel and then waits for all to complete.  Once all the results are in, the consensus is calculated and the result returned along with methods that voted for it:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:':: Random Forrest Classifier - Red Wines ::\n\n{"result": "1"}\n\n:: XGBoost Classifier - Red Wines ::\n\n{"result": "1"}\n\n:: Consensus Results ::\n\n{"result": "1", "methods": ["Random forest", "XGBoost"]}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},448331:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var t=s(296540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);