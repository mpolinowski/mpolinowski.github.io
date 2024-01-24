"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[7380],{380360:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var a=r(785893),s=r(603905);const t={sidebar_position:4630,slug:"2023-02-25",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Optimizing model performance"},l="Tensorflow Neural Network Regression",o={id:"IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index",title:"Tensorflow 2 - Neural Network Regression",description:"Optimizing model performance",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments",slug:"/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4630,frontMatter:{sidebar_position:4630,slug:"2023-02-25",title:"Tensorflow 2 - Neural Network Regression",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Optimizing model performance"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},next:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"}},i={},d=[{value:"Optimizing Model Performance",id:"optimizing-model-performance",level:2},{value:"Get more data",id:"get-more-data",level:3},{value:"Add Model Complexity",id:"add-model-complexity",level:2},{value:"model_1",id:"model_1",level:3},{value:"model_2",id:"model_2",level:3},{value:"model_3",id:"model_3",level:3},{value:"model_4",id:"model_4",level:3},{value:"model_5",id:"model_5",level:3},{value:"model_6",id:"model_6",level:3},{value:"model_7",id:"model_7",level:3},{value:"Comparing Experiments",id:"comparing-experiments",level:2},{value:"Saving the Trained Models",id:"saving-the-trained-models",level:2},{value:"Restoring a Saved Model",id:"restoring-a-saved-model",level:3}];function _(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Mong Kok, Hong Kong",src:r(138915).Z+"",width:"2830",height:"1272"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#tensorflow-neural-network-regression",children:"Tensorflow Neural Network Regression"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#optimizing-model-performance",children:"Optimizing Model Performance"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#get-more-data",children:"Get more data"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#add-model-complexity",children:"Add Model Complexity"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_1",children:"model_1"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_2",children:"model_2"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_3",children:"model_3"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_4",children:"model_4"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_5",children:"model_5"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_6",children:"model_6"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#model_7",children:"model_7"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#comparing-experiments",children:"Comparing Experiments"})}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#saving-the-trained-models",children:"Saving the Trained Models"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#restoring-a-saved-model",children:"Restoring a Saved Model"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-2023",children:"Github Repository"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"See also:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Fun, fun, tensors: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19",children:"Tensor Constants, Variables and Attributes"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21",children:"Tensor Indexing, Expanding and Manipulations"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22",children:"Matrix multiplications, Squeeze, One-hot and Numpy"})]}),"\n",(0,a.jsxs)(n.li,{children:["Tensorflow 2 - Neural Network Regression: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23",children:"Building a Regression Model"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24",children:"Model Evaluation"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25",children:"Model Optimization"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26",children:'Working with a "Real" Dataset'}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26",children:"Feature Scaling"})]}),"\n",(0,a.jsxs)(n.li,{children:["Tensorflow 2 - Neural Network Classification: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27",children:"Non-linear Data and Activation Functions"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28",children:"Model Evaluation and Performance Improvement"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02",children:"Multiclass Classification Problems"})]}),"\n",(0,a.jsxs)(n.li,{children:["Tensorflow 2 - Convolutional Neural Networks: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03",children:"Binary Image Classification"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05",children:"Multiclass Image Classification"})]}),"\n",(0,a.jsxs)(n.li,{children:["Tensorflow 2 - Transfer Learning: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06",children:"Feature Extraction"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11",children:"Fine-Tuning"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16",children:"Scaling"})]}),"\n",(0,a.jsxs)(n.li,{children:["Tensorflow 2 - Unsupervised Learning: ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24",children:"Autoencoder Feature Detection"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26",children:"Autoencoder Super-Resolution"}),", ",(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26",children:"Generative Adverserial Networks"})]}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"tensorflow-neural-network-regression",children:"Tensorflow Neural Network Regression"}),"\n",(0,a.jsx)(n.h2,{id:"optimizing-model-performance",children:"Optimizing Model Performance"}),"\n",(0,a.jsx)(n.h3,{id:"get-more-data",children:"Get more data"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# create a new feature matrix\nX = tf.range(-1000, 1000, 4)\n# create labels for those features that follow a pattern\ny = X + 10\nlen(X)\n# 500 => 80:20 split = 400:100\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# to get around biases it is better to shuffle your data\n# first create random indices to be able to shuffle\n# both features and lables by the same order\nindices = tf.range(start=0, limit=tf.shape(X)[0], dtype=tf.int32)\nshuffled_indices = tf.random.shuffle(indices)\n\n# use random indices to shuffle both tensors\nX_random = tf.gather(X, shuffled_indices)\ny_random = tf.gather(y, shuffled_indices)\n\n# re-split\nX_train = X_random[:400] # take first 80% of features\nX_test = X_random[400:] # take last 20% of features\ny_train = y_random[:400] # take first 80% of lables\ny_test = y_random[400:] # take last 20% of lables\n\n# visualize datasets\nplt.figure(figsize=(10,7))\nplt.scatter(X_train, y_train, color="blue", label="Training Data")\nplt.scatter(X_test, y_test, color="hotpink", label="Testing Data")\nplt.legend()\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(426196).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h2,{id:"add-model-complexity",children:"Add Model Complexity"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model_1"})," - longer training 200 epochs"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model_2"})," - add another dense layer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model_3"})," - add another dropout layer"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"model_4"})," - same as model above but trained for 500 epochs"]}),"\n",(0,a.jsx)(n.li,{children:"... take the best model and reduce complexity to find an optimum"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"model_1",children:"model_1"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# longer training 200 epochs\nmodel_1 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_1")\n\nmodel_1.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_1.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=200)\n# Epoch 200/200\n# 13/13 [==============================] - 0s 5ms/step - loss: 10.6268 - mae: 10.6268 - val_loss: 122.6467 - val_mae: 122.6467\n\ny_pred_1 = model_1.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_1)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(379371).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h3,{id:"model_2",children:"model_2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# add another dense layer\nmodel_2 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dense(32, activation="relu", name="dense_layer3"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_2")\n\nmodel_2.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_2.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 5ms/step - loss: 31.7044 - mae: 31.7044 - val_loss: 10.8619 - val_mae: 10.8619\n\ny_pred_2 = model_2.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_2)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(228774).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h3,{id:"model_3",children:"model_3"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# add another dropout layer\nmodel_3 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout1"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dropout(.25, name="dropout2"),\n    layers.Dense(32, activation="relu", name="dense_layer3"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_3")\n\nmodel_3.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_3.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 5ms/step - loss: 44.1139 - mae: 44.1139 - val_loss: 107.2299 - val_mae: 107.2299\n\ny_pred_3 = model_3.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_3)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(872115).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h3,{id:"model_4",children:"model_4"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# same as model above but trained for 500 epochs\nmodel_4 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dropout(.25, name="dropout1"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dropout(.25, name="dropout2"),\n    layers.Dense(32, activation="relu", name="dense_layer3"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_4")\n\nmodel_4.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.01),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_4.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n# Epoch 500/500\n# 13/13 [==============================] - 0s 5ms/step - loss: 38.3689 - mae: 38.3689 - val_loss: 143.9144 - val_mae: 143.9144\n\ny_pred_4 = model_4.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_4)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(407851).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h3,{id:"model_5",children:"model_5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# I am getting the best results with `model_2`\n# but a 2nd dropout layer seems to reduce the performance\n# let\'s remove the 1st dropout\nmodel_5 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(128, activation="relu", name="dense_layer1"),\n    layers.Dense(64, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_5")\n\nmodel_5.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_5.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 4ms/step - loss: 2.1195 - mae: 2.1195 - val_loss: 2.9318 - val_mae: 2.9318\n\ny_pred_5 = model_5.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_5)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(994893).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h3,{id:"model_6",children:"model_6"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# same as above - based on `model_2`\n# but more complexity removed\nmodel_6 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(64, activation="relu", name="dense_layer1"),\n    layers.Dense(32, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_6")\n\nmodel_6.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_6.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=100)\n# Epoch 100/100\n# 13/13 [==============================] - 0s 5ms/step - loss: 1.9283 - mae: 1.9283 - val_loss: 2.0062 - val_mae: 2.0062\n\ny_pred_6 = model_6.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_6)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(9702).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h3,{id:"model_7",children:"model_7"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# same as above - based on `model_2`\n# but even more complexity removed\nmodel_7 = tf.keras.Sequential([\n    layers.Dense(1, input_shape=[1], name="input_layer"),\n    layers.Dense(16, activation="relu", name="dense_layer1"),\n    layers.Dense(8, activation="relu", name="dense_layer2"),\n    layers.Dense(1, name="output_layer")\n], name="my_model_6")\n\nmodel_7.compile(\n    loss=tf.keras.losses.mae,\n    optimizer=optimizers.Adam(learning_rate=0.001),\n    metrics="mae")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# increased epochs 100 -> 500\nmodel_7.fit(X_train, y_train, validation_data=(X_test, y_test), epochs=500)\n# Epoch 500/500\n# 13/13 [==============================] - 0s 5ms/step - loss: 0.6490 - mae: 0.6490 - val_loss: 0.9975 - val_mae: 0.9975\n\ny_pred_7 = model_7.predict(X_test)\n\n# blue dots should line up with red dots for a perfect prediction\nplot_predictions(train_data=X_train,\n                 train_labels=y_train,\n                 test_data=X_test,\n                 test_labels=y_test,\n                 predictions=y_pred_7)\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Tensorflow Neural Network Regression",src:r(360782).Z+"",width:"851",height:"582"})}),"\n",(0,a.jsx)(n.h2,{id:"comparing-experiments",children:"Comparing Experiments"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# function to calculate mae & mse\ndef squared_and_absolute_error(y_true, y_pred):\n    mae = tf.metrics.mean_absolute_error(y_true, tf.squeeze(y_pred))\n    mse = tf.metrics.mean_squared_error(y_true, tf.squeeze(y_pred))\n    \n    return mae.numpy(), mse.numpy()\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# calculate errors for all models\nmodel_1_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_1)\nmodel_2_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_2)\nmodel_3_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_3)\nmodel_4_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_4)\nmodel_5_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_5)\nmodel_6_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_6)\nmodel_7_err = squared_and_absolute_error(y_true=y_test, y_pred=y_pred_7)\n\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'model_err = [["model_1", model_1_err[0], model_1_err[1]],\n             ["model_2", model_2_err[0], model_2_err[1]],\n             ["model_3", model_3_err[0], model_3_err[1]],\n             ["model_4", model_4_err[0], model_4_err[1]],\n             ["model_5", model_5_err[0], model_5_err[1]],\n             ["model_6", model_6_err[0], model_6_err[1]],\n             ["model_7", model_7_err[0], model_7_err[1]]]\n\nresult_table = pd.DataFrame(model_err, columns=["model", "mae", "mse"])\n# sort results by lowest error\nresult_table.sort_values(by=[\'mae\'])\n'})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"model"}),(0,a.jsx)(n.th,{children:"mae"}),(0,a.jsx)(n.th,{children:"mse"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_7"}),(0,a.jsx)(n.td,{children:"1.144104"}),(0,a.jsx)(n.td,{children:"1.818071"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_6"}),(0,a.jsx)(n.td,{children:"1.684225"}),(0,a.jsx)(n.td,{children:"3.257224"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_5"}),(0,a.jsx)(n.td,{children:"2.049126"}),(0,a.jsx)(n.td,{children:"5.940683"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_2"}),(0,a.jsx)(n.td,{children:"49.432564"}),(0,a.jsx)(n.td,{children:"3300.268799"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_4"}),(0,a.jsx)(n.td,{children:"100.509567"}),(0,a.jsx)(n.td,{children:"14063.405273"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_3"}),(0,a.jsx)(n.td,{children:"102.297127"}),(0,a.jsx)(n.td,{children:"14211.152344"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"model_1"}),(0,a.jsx)(n.td,{children:"121.414032"}),(0,a.jsx)(n.td,{children:"20278.529297"})]})]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# the best performing model is `model_7`\nmodel_7.summary()\n\n# Model: "my_model_6"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 1)                 2         \n                                                                 \n#  dense_layer1 (Dense)        (None, 16)                32        \n                                                                 \n#  dense_layer2 (Dense)        (None, 8)                 136       \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 179\n# Trainable params: 179\n# Non-trainable params: 0\n# _________________________________________________________________\n'})}),"\n",(0,a.jsx)(n.h2,{id:"saving-the-trained-models",children:"Saving the Trained Models"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"SavedModel"})," format (default)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"HDF5"})," format (easier to transfer outside of TF)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# assign location\npath='saved_models/SavedModel_Format'\n# saving to SavedModel\nmodel_7.save(path)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# assign location\npath_hdf5='saved_models/hdf5_format.h5'\n# saving to HDF5\nmodel_7.save(path_hdf5)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"restoring-a-saved-model",children:"Restoring a Saved Model"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'loaded_SavedModel = tf.keras.models.load_model(path)\n# Verify that it is the correct model\nloaded_SavedModel.summary()\n\n# Model: "my_model_6"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 1)                 2         \n                                                                 \n#  dense_layer1 (Dense)        (None, 16)                32        \n                                                                 \n#  dense_layer2 (Dense)        (None, 8)                 136       \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 179\n# Trainable params: 179\n# Non-trainable params: 0\n# _________________________________________________________________\n\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# make a prediction with the restored model\n# lets find a value pair from the test dataset\nX_test[66], y_test[66]\n# (<tf.Tensor: shape=(), dtype=int32, numpy=-944>,\n#  <tf.Tensor: shape=(), dtype=int32, numpy=-934>)\n# So for a feature value of `-944` we should receive a label value of `-943`\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# run prediction\nloaded_SavedModel.predict([-944])\n# array([[-936.5761]], dtype=float32)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'loaded_HDF5Model = tf.keras.models.load_model(path_hdf5)\n# Verify that it is the correct model\nloaded_HDF5Model.summary()\n\n# Model: "my_model_6"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  input_layer (Dense)         (None, 1)                 2         \n                                                                 \n#  dense_layer1 (Dense)        (None, 16)                32        \n                                                                 \n#  dense_layer2 (Dense)        (None, 8)                 136       \n                                                                 \n#  output_layer (Dense)        (None, 1)                 9         \n                                                                 \n# =================================================================\n# Total params: 179\n# Trainable params: 179\n# Non-trainable params: 0\n# _________________________________________________________________\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# run prediction\nloaded_HDF5Model.predict([-944])\n# array([[-936.5761]], dtype=float32)\n# the result is identical to the result we get from\n# the restored SavedModel format model\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"model_7.predict([-944]) == loaded_SavedModel.predict([-944]) == loaded_HDF5Model.predict([-944])\n# array([[ True]])\n# the restored models predict the identical values\n"})})]})}function c(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(_,{...e})}):_(e)}},603905:(e,n,r)=>{r.d(n,{ah:()=>d});var a=r(667294);function s(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){s(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,a,s=function(e,n){if(null==e)return{};var r,a,s={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(s[r]=e[r]);return s}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=a.createContext({}),d=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},_={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var r=e.components,s=e.mdxType,t=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(r),h=s,p=m["".concat(i,".").concat(h)]||m[h]||_[h]||t;return r?a.createElement(p,l(l({ref:n},c),{},{components:r})):a.createElement(p,l({ref:n},c))}));c.displayName="MDXCreateElement"},426196:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_07-cacc75a4c52598e0f5d5c1993fd7496d.png"},379371:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_08-2a392212ec9baaad2bd2f2b3c71eeea3.png"},228774:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_09-ef23a5806f268e02420e51a21aeecef0.png"},872115:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_10-b8907a21885c176f736fd3a66d87fda8.png"},407851:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_11-33aad44224a7739b7346160f68a20464.png"},994893:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_12-e188b4f87420d15e1fe1c0825731df69.png"},9702:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_13-9964aab330cf9baa29607b5b4680aaa9.png"},360782:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/01a_Tensorflow_Regressions_14-ad16703273b9f7b64c1dfb166c1fcf87.png"},138915:(e,n,r)=>{r.d(n,{Z:()=>a});const a=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);