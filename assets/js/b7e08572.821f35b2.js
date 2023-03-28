"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[7380],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>u});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var _=t.createContext({}),i=function(e){var n=t.useContext(_),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=i(e.components);return t.createElement(_.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,_=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(a),u=r,c=p["".concat(_,".").concat(u)]||p[u]||m[u]||l;return a?t.createElement(c,o(o({ref:n},d),{},{components:a})):t.createElement(c,o({ref:n},d))}));function u(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=p;var s={};for(var _ in n)hasOwnProperty.call(n,_)&&(s[_]=n[_]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var i=2;i<l;i++)o[i]=a[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},43431:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>_,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var t=a(87462),r=(a(67294),a(3905));const l={sidebar_position:4630,slug:"2023-02-25",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Optimizing model performance"},o=void 0,s={unversionedId:"IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index",id:"IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index",title:"Tensorflow 2 - Neural Network Regression",description:"Optimizing model performance",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments",slug:"/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4630,frontMatter:{sidebar_position:4630,slug:"2023-02-25",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Optimizing model performance"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},next:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"}},_={},i=[{value:"Optimizing Model Performance",id:"optimizing-model-performance",level:2},{value:"Get more data",id:"get-more-data",level:3},{value:"Add Model Complexity",id:"add-model-complexity",level:2},{value:"model_1",id:"model_1",level:3},{value:"model_2",id:"model_2",level:3},{value:"model_3",id:"model_3",level:3},{value:"model_4",id:"model_4",level:3},{value:"model_5",id:"model_5",level:3},{value:"model_6",id:"model_6",level:3},{value:"model_7",id:"model_7",level:3},{value:"Comparing Experiments",id:"comparing-experiments",level:2},{value:"Saving the Trained Models",id:"saving-the-trained-models",level:2},{value:"Restoring a Saved Model",id:"restoring-a-saved-model",level:3}],d={toc:i};function m(e){let{components:n,...l}=e;return(0,r.kt)("wrapper",(0,t.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mong Kok, Hong Kong",src:a(38915).Z,width:"2830",height:"1272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensorflow-neural-network-regression"},"Tensorflow Neural Network Regression"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#optimizing-model-performance"},"Optimizing Model Performance"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#get-more-data"},"Get more data")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#add-model-complexity"},"Add Model Complexity"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_1"},"model","_","1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_2"},"model","_","2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_3"},"model","_","3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_4"},"model","_","4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_5"},"model","_","5")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_6"},"model","_","6")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#model_7"},"model","_","7")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#comparing-experiments"},"Comparing Experiments")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#saving-the-trained-models"},"Saving the Trained Models"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#restoring-a-saved-model"},"Restoring a Saved Model"))))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-2023"},"Github Repository")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"Tensor Constants, Variables and Attributes"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"Tensor Indexing, Expanding and Manipulations"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"Matrix multiplications, Squeeze, One-hot and Numpy")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Classification: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27"},"Non-linear Data and Activation Functions"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},"Model Evaluation and Performance Improvement"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"},"Multiclass Classification Problems")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Convolutional Neural Networks: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"},"Binary Image Classification"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},"Multiclass Image Classification")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Transfer Learning: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Feature Extraction"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},"Fine-Tuning"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16"},"Scaling")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Unsupervised Learning: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24"},"Autoencoder Feature Detection"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26"},"Autoencoder Super-Resolution"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26"},"Generative Adverserial Networks"))),(0,r.kt)("h1",{id:"tensorflow-neural-network-regression"},"Tensorflow Neural Network Regression"),(0,r.kt)("h2",{id:"optimizing-model-performance"},"Optimizing Model Performance"),(0,r.kt)("h3",{id:"get-more-data"},"Get more data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# create a new feature matrix\nX = tf.range(-1000, 1000, 4)\n# create labels for those features that follow a pattern\ny = X + 10\nlen(X)\n# 500 => 80:20 split = 400:100\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# to get around biases it is better to shuffle your data\n# first create random indices to be able to shuffle\n# both features and lables by the same order\nindices = tf.range(start=0, limit=tf.shape(X)[0], dtype=tf.int32)\nshuffled_indices = tf.random.shuffle(indices)\n\n# use random indices to shuffle both tensors\nX_random = tf.gather(X, shuffled_indices)\ny_random = tf.gather(y, shuffled_indices)\n\n# re-split\nX_train = X_random[:400] # take first 80% of features\nX_test = X_random[400:] # take last 20% of features\ny_train = y_random[:400] # take first 80% of lables\ny_test = y_random[400:] # take last 20% of lables\n\n# visualize datasets\nplt.figure(figsize=(10,7))\nplt.scatter(X_train, y_train, color="blue", label="Training Data")\nplt.scatter(X_test, y_test, color="hotpink", label="Testing Data")\nplt.legend()\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(26196).Z,width:"851",height:"582"})),(0,r.kt)("h2",{id:"add-model-complexity"},"Add Model Complexity"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model_1")," - longer training 200 epochs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model_2")," - add another dense layer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model_3")," - add another dropout layer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"model_4")," - same as model above but trained for 500 epochs"),(0,r.kt)("li",{parentName:"ul"},"... take the best model and reduce complexity to find an optimum")),(0,r.kt)("h3",{id:"model_1"},"model_1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# longer training 200 epochs\nmodel_1 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_1")\n\nmodel_1.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_1.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=200)\n# Epoch 200/200\n# 13/13 [==============================] - 0s 5ms/step - loss: 10.6268 - mae: 10.6268 - val_loss: 122.6467 - val_mae: 122.6467\n\ny_pred_1 = model_1.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_1)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(79371).Z,width:"851",height:"582"})),(0,r.kt)("h3",{id:"model_2"},"model_2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# add another dense layer\nmodel_2 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dense(32, activation="relu", name="dense_layer3"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_2")\n\nmodel_2.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_2.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 5ms/step - loss: 31.7044 - mae: 31.7044 - val_loss: 10.8619 - val_mae: 10.8619\n\ny_pred_2 = model_2.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_2)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(28774).Z,width:"851",height:"582"})),(0,r.kt)("h3",{id:"model_3"},"model_3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# add another dropout layer\nmodel_3 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout1"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dropout(.25, name="dropout2"),\n    layers.Dense(32, activation="relu", name="dense_layer3"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_3")\n\nmodel_3.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_3.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 5ms/step - loss: 44.1139 - mae: 44.1139 - val_loss: 107.2299 - val_mae: 107.2299\n\ny_pred_3 = model_3.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_3)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(72115).Z,width:"851",height:"582"})),(0,r.kt)("h3",{id:"model_4"},"model_4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# same as model above but trained for 500 epochs\nmodel_4 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout1"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dropout(.25, name="dropout2"),\n    layers.Dense(32, activation="relu", name="dense_layer3"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_4")\n\nmodel_4.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_4.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n# Epoch 500/500\n# 13/13 [==============================] - 0s 5ms/step - loss: 38.3689 - mae: 38.3689 - val_loss: 143.9144 - val_mae: 143.9144\n\ny_pred_4 = model_4.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_4)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(7851).Z,width:"851",height:"582"})),(0,r.kt)("h3",{id:"model_5"},"model_5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# I am getting the best results with `model_2`\n# but a 2nd dropout layer seems to reduce the performance\n# let\'s remove the 1st dropout\nmodel_5 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_5")\n\nmodel_5.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_5.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 4ms/step - loss: 2.1195 - mae: 2.1195 - val_loss: 2.9318 - val_mae: 2.9318\n\ny_pred_5 = model_5.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_5)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(94893).Z,width:"851",height:"582"})),(0,r.kt)("h3",{id:"model_6"},"model_6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# same as above - based on `model_2`\n# but more complexity removed\nmodel_6 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(64, activation="relu", name="dense_layer1"),\n    layers.Dense(32, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_6")\n\nmodel_6.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_6.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 5ms/step - loss: 1.9283 - mae: 1.9283 - val_loss: 2.0062 - val_mae: 2.0062\n\ny_pred_6 = model_6.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_6)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(9702).Z,width:"851",height:"582"})),(0,r.kt)("h3",{id:"model_7"},"model_7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# same as above - based on `model_2`\n# but even more complexity removed\nmodel_7 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(16, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_6")\n\nmodel_7.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# increased epochs 100 -> 500\nmodel_7.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n# Epoch 500/500\n# 13/13 [==============================] - 0s 5ms/step - loss: 0.6490 - mae: 0.6490 - val_loss: 0.9975 - val_mae: 0.9975\n\ny_pred_7 = model_7.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_7)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Neural Network Regression",src:a(60782).Z,width:"851",height:"582"})),(0,r.kt)("h2",{id:"comparing-experiments"},"Comparing Experiments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# function to calculate mae & mse\ndef squared_and_absolute_error(y_true, y_pred):\n    mae = tf.metrics.mean_absolute_error(y_true, tf.squeeze(y_pred))\n    mse = tf.metrics.mean_squared_error(y_true, tf.squeeze(y_pred))\n    \n    return mae.numpy(), mse.numpy()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# calculate errors for all models\nmodel_1_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_1)\nmodel_2_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_2)\nmodel_3_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_3)\nmodel_4_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_4)\nmodel_5_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_5)\nmodel_6_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_6)\nmodel_7_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_7)\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'model_err = [["model_1", model_1_err[0], model_1_err[1]],\n             ["model_2", model_2_err[0], model_2_err[1]],\n             ["model_3", model_3_err[0], model_3_err[1]],\n             ["model_4", model_4_err[0], model_4_err[1]],\n             ["model_5", model_5_err[0], model_5_err[1]],\n             ["model_6", model_6_err[0], model_6_err[1]],\n             ["model_7", model_7_err[0], model_7_err[1]]]\n\nresult_table = pd.DataFrame(model_err, columns=["model", "mae", "mse"])\n# sort results by lowest error\nresult_table.sort_values(by=[\'mae\'])\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"model"),(0,r.kt)("th",{parentName:"tr",align:null},"mae"),(0,r.kt)("th",{parentName:"tr",align:null},"mse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_7"),(0,r.kt)("td",{parentName:"tr",align:null},"1.144104"),(0,r.kt)("td",{parentName:"tr",align:null},"1.818071")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_6"),(0,r.kt)("td",{parentName:"tr",align:null},"1.684225"),(0,r.kt)("td",{parentName:"tr",align:null},"3.257224")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_5"),(0,r.kt)("td",{parentName:"tr",align:null},"2.049126"),(0,r.kt)("td",{parentName:"tr",align:null},"5.940683")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_2"),(0,r.kt)("td",{parentName:"tr",align:null},"49.432564"),(0,r.kt)("td",{parentName:"tr",align:null},"3300.268799")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_4"),(0,r.kt)("td",{parentName:"tr",align:null},"100.509567"),(0,r.kt)("td",{parentName:"tr",align:null},"14063.405273")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_3"),(0,r.kt)("td",{parentName:"tr",align:null},"102.297127"),(0,r.kt)("td",{parentName:"tr",align:null},"14211.152344")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"model_1"),(0,r.kt)("td",{parentName:"tr",align:null},"121.414032"),(0,r.kt)("td",{parentName:"tr",align:null},"20278.529297")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# the best performing model is `model_7`\nmodel_7.summary()\n\n# Model: "my_model_6"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 1)                 2         \n                                                                 \n#  dense_layer1 (Dense)        (None, 16)                32        \n                                                                 \n#  dense_layer2 (Dense)        (None, 8)                 136       \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 179\n# Trainable params: 179\n# Non-trainable params: 0\n# _________________________________________________________________\n')),(0,r.kt)("h2",{id:"saving-the-trained-models"},"Saving the Trained Models"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"SavedModel")," format (default)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"HDF5")," format (easier to transfer outside of TF)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# assign location\npath='saved_models/SavedModel_Format'\n# saving to SavedModel\nmodel_7.save(path)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# assign location\npath_hdf5='saved_models/hdf5_format.h5'\n# saving to HDF5\nmodel_7.save(path_hdf5)\n")),(0,r.kt)("h3",{id:"restoring-a-saved-model"},"Restoring a Saved Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loaded_SavedModel = tf.keras.models.load_model(path)\n# Verify that it is the correct model\nloaded_SavedModel.summary()\n\n# Model: "my_model_6"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 1)                 2         \n                                                                 \n#  dense_layer1 (Dense)        (None, 16)                32        \n                                                                 \n#  dense_layer2 (Dense)        (None, 8)                 136       \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 179\n# Trainable params: 179\n# Non-trainable params: 0\n# _________________________________________________________________\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# make a prediction with the restored model\n# lets find a value pair from the test dataset\nX_test[66], y_test[66]\n# (<tf.Tensor: shape=(), dtype=int32, numpy=-944>,\n#  <tf.Tensor: shape=(), dtype=int32, numpy=-934>)\n# So for a feature value of `-944` we should receive a label value of `-943`\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# run prediction\nloaded_SavedModel.predict([-944])\n# array([[-936.5761]], dtype=float32)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'loaded_HDF5Model = tf.keras.models.load_model(path_hdf5)\n# Verify that it is the correct model\nloaded_HDF5Model.summary()\n\n# Model: "my_model_6"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 1)                 2         \n                                                                 \n#  dense_layer1 (Dense)        (None, 16)                32        \n                                                                 \n#  dense_layer2 (Dense)        (None, 8)                 136       \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 179\n# Trainable params: 179\n# Non-trainable params: 0\n# _________________________________________________________________\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# run prediction\nloaded_HDF5Model.predict([-944])\n# array([[-936.5761]], dtype=float32)\n# the result is identical to the result we get from\n# the restored SavedModel format model\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"model_7.predict([-944]) == loaded_SavedModel.predict([-944]) == loaded_HDF5Model.predict([-944])\n# array([[ True]])\n# the restored models predict the identical values\n")))}m.isMDXComponent=!0},26196:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_07-cacc75a4c52598e0f5d5c1993fd7496d.png"},79371:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_08-2a392212ec9baaad2bd2f2b3c71eeea3.png"},28774:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_09-ef23a5806f268e02420e51a21aeecef0.png"},72115:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_10-b8907a21885c176f736fd3a66d87fda8.png"},7851:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_11-33aad44224a7739b7346160f68a20464.png"},94893:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_12-e188b4f87420d15e1fe1c0825731df69.png"},9702:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_13-9964aab330cf9baa29607b5b4680aaa9.png"},60782:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/01a_Tensorflow_Regressions_14-ad16703273b9f7b64c1dfb166c1fcf87.png"},38915:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);