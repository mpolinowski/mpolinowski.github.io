"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[34921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,_=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(_,i(i({ref:t},d),{},{components:n})):a.createElement(_,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4700,slug:"2023-02-18",title:"Keras for Tensorflow - Recurrent Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Keras","Tensorflow"],description:"Recurrent Neural Networks are widely used to work with sequence data such as time series or natural language."},i=void 0,s={unversionedId:"IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/index",id:"IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/index",title:"Keras for Tensorflow - Recurrent Neural Networks",description:"Recurrent Neural Networks are widely used to work with sequence data such as time series or natural language.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn",slug:"/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/2023-02-18",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/2023-02-18",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Keras",permalink:"/docs/tags/keras"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4700,frontMatter:{sidebar_position:4700,slug:"2023-02-18",title:"Keras for Tensorflow - Recurrent Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Keras","Tensorflow"],description:"Recurrent Neural Networks are widely used to work with sequence data such as time series or natural language."},sidebar:"tutorialSidebar",previous:{title:"Keras for Tensorflow - VGG16 Network Architecture",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-vgg16/2023-02-18"},next:{title:"Keras for Tensorflow - Convolutional Neural Networks",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-17-keras-introduction-cnn/2023-02-17"}},l={},p=[{value:"Long Short-Term Memory Models (LSTM)",id:"long-short-term-memory-models-lstm",level:2},{value:"Time Series",id:"time-series",level:3},{value:"Natural Language",id:"natural-language",level:3}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:n(47241).Z,width:"2830",height:"1272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#long-short-term-memory-models-lstm"},"Long Short-Term Memory Models (LSTM)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#time-series"},"Time Series")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#natural-language"},"Natural Language"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-keras-2023"},"Github Repository")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://keras.io/getting_started/"},"Keras")," is built on top of TensorFlow 2 and provides an API designed for human beings. Keras follows best practices for reducing cognitive load: it offers consistent & simple APIs, it minimizes the number of user actions required for common use cases, and it provides clear & actionable error messages."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-14-keras-introduction/2023-02-14"},"Keras for Tensorflow - An (Re)Introduction 2023")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-16-keras-introduction-ann/2023-02-16"},"Keras for Tensorflow - Artificial Neural Networks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-17-keras-introduction-cnn/2023-02-17"},"Keras for Tensorflow - Convolutional Neural Networks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-vgg16/2023-02-18"},"Keras for Tensorflow - VGG16 Network Architecture")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-rnn/2023-02-18"},"Keras for Tensorflow - Recurrent Neural Networks"))),(0,r.kt)("h2",{id:"long-short-term-memory-models-lstm"},"Long Short-Term Memory Models (LSTM)"),(0,r.kt)("p",null,"Recurrent Neural Networks (",(0,r.kt)("strong",{parentName:"p"},"RNN"),") are widely used to work with sequence data such as time series or natural language. Unlike ",(0,r.kt)("strong",{parentName:"p"},"CNN"),"'s ",(0,r.kt)("strong",{parentName:"p"},"RNN"),"'s persist data by introducing loops in their data flow - allowing you them to make predictions based on past events. Types of ",(0,r.kt)("strong",{parentName:"p"},"RNN"),"'s are (",(0,r.kt)("a",{parentName:"p",href:"https://medium.com/explore-artificial-intelligence/an-introduction-to-recurrent-neural-networks-72c97bf0912"},"Image Source"),"):"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keras for Tensorflow - Convolutional Neural Networks",src:n(48258).Z,width:"700",height:"229"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"One-to-One"),": A network with a single in- and output like the image classification we had before."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"One-to-Many"),": A network with a single in- and multiple outputs. E.g. a caption generator for an input image."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Many-to-One"),": A network with multiple in- and a single output. E.g. a sentiment analyzer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Many-to-Many"),": A network with multiple in- and multiple outputs. E.g. a language translator.")),(0,r.kt)("h3",{id:"time-series"},"Time Series"),(0,r.kt)("p",null,"We can use the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kartikdube/Datasets/master/international-airline-passengers.csv"},"International Airline Passengers")," dataset to build and train an RNN prediction model in Keras:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"import pandas as pd\nimport matplotlib.pyplot as plt\n\n# loading the passenger into a dataframe\ndf = pd.read_csv('data/international-airline-passengers.csv', usecols=[1], skipfooter=2, engine='python')\ndf.plot()\nplt.show()\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keras for Tensorflow - Convolutional Neural Networks",src:n(93016).Z,width:"2560",height:"982"})),(0,r.kt)("p",null,"We need to first normalize the dataset so that all values range in between ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," and split the set into training and testing data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from sklearn.preprocessing import MinMaxScaler\n\n# pre-processing\ndataset = df.values\ndataset = dataset.astype('float32')\n\n## normalize data to 0->1 range\nscaler = MinMaxScaler(feature_range=(0, 1))\ndataset = scaler.fit_transform(dataset)\n\n## data split 70/30\ntrain_size = int(len(dataset)*.70)\ntest_size = len(dataset) - train_size\n\ntrain, test = dataset[0:train_size, :], dataset[train_size:len(dataset), :]\nprint(train.shape, test.shape)\n# (100, 1) (44, 1)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# creating the timeseries datasets\ndef create_dataset(dataset, look_back=1):\n      dataX, dataY = [], []\n      for i in range(len(dataset) - look_back - 1):\n            # input data\n            a = dataset[i:(i+look_back), 0]\n            dataX.append(a)\n            # output data\n            b = dataset[(i+look_back), 0]\n            dataY.append(b)\n      return np.array(dataX), np.array(dataY)\n\ntrainX, trainY = create_dataset(train)\ntestX, testY = create_dataset(test)\n\ntrainX = trainX.reshape((trainX.shape[0], 1, trainX.shape[1]))\ntestX = testX.reshape((testX.shape[0], 1, testX.shape[1]))\n")),(0,r.kt)("p",null,"With our data pre-processed we can now compile our simple ",(0,r.kt)("strong",{parentName:"p"},"Long Short-Term Memory")," model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# building the model\nmodel = Sequential()\n\nmodel.add(LSTM(4, input_shape=(1,1)))\nmodel.add(Dense(1))\n\nmodel.compile(optimizer='adam', loss='mean_squared_error')\nmodel.summary()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Model: "sequential"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #   \n=================================================================\n lstm (LSTM)                 (None, 4)                 96        \n                                                                 \n dense (Dense)               (None, 1)                 5         \n                                                                 \n=================================================================\nTotal params: 101\nTrainable params: 101\nNon-trainable params: 0\n')),(0,r.kt)("p",null,"The compiled model now need to be fitted to our dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# fitting the model\nmodel.fit(trainX, trainY, batch_size=1, epochs=100)\n")),(0,r.kt)("p",null,"To run predictions we first have to undo the normalization we have applied to our values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# run prediction\ntrainPred = model.predict(trainX)\ntestPred = model.predict(testX)\n\n# undo normalization\ntrainPred = scaler.inverse_transform(trainPred)\ntestPred = scaler.inverse_transform(testPred)\n\ntrainY = scaler.inverse_transform([trainY])\ntrainX = scaler.inverse_transform([testY])\n")),(0,r.kt)("p",null,"And we can plot the predicted values on top of the training dataset:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keras for Tensorflow - Convolutional Neural Networks",src:n(56152).Z,width:"2558",height:"349"})),(0,r.kt)("p",null,"From left to right we see three training runs with ",(0,r.kt)("strong",{parentName:"p"},"100"),", ",(0,r.kt)("strong",{parentName:"p"},"1000")," and ",(0,r.kt)("strong",{parentName:"p"},"10000 Epochs"),". We can see that the predicted value start to fit the earlier passenger numbers better and better. But the fit for later years continues to decrease. Thinking that this might be an overfitting issue I added a dropout layer to my model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# building the model\nmodel = Sequential()\n\nmodel.add(LSTM(4, input_shape=(1,1)))\nmodel.add(Dropout(0.25))\nmodel.add(Dense(1))\n")),(0,r.kt)("p",null,"And I can see a much better fit with a Dropout - even though there is still some more room for improvement:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Keras for Tensorflow - Convolutional Neural Networks",src:n(39307).Z,width:"1601",height:"332"})),(0,r.kt)("p",null,"Both those graph show the prediction validation after ",(0,r.kt)("strong",{parentName:"p"},"1000 epochs")," of training. On the ",(0,r.kt)("strong",{parentName:"p"},"left is the previous model without")," and on the ",(0,r.kt)("strong",{parentName:"p"},"right the model with a Dropout layer"),"."),(0,r.kt)("h3",{id:"natural-language"},"Natural Language"),(0,r.kt)("p",null,"To work with a natural language problem we can use the IMDB dataset provided by Keras:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from keras.datasets import imdb\n\n# loading an excerpt from the imdb dataset\ntop_words = 5000\n(Xtrain, Ytrain), (Xtest, Ytest) = imdb.load_data(num_words=top_words)\n\n# truncate movie reviews > 500 words\nmax_review_size = 500\nXtrain = sequence.pad_sequences(Xtrain, maxlen=max_review_size)\nXtest = sequence.pad_sequences(Xtest, maxlen=max_review_size)\n")),(0,r.kt)("p",null,"As LSTM model we need a binary classifier - is the review positive or negative:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# building the model\n## number of feature outputs\nfeature_length = 32\n\nmodel = Sequential()\nmodel.add(Embedding(top_words, feature_length, input_length=max_review_size))\nmodel.add(LSTM(100))\n##output binary classification\nmodel.add(Dense(1, activation=sigmoid))\n\nmodel.compile(loss='binary_crossentropy', optimizer='adam', metrics=['accuracy'])\nmodel.summary()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Model: "sequential"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #   \n=================================================================\n embedding (Embedding)       (None, 500, 32)           160000    \n                                                                 \n lstm (LSTM)                 (None, 100)               53200     \n                                                                 \n dense (Dense)               (None, 1)                 101       \n                                                                 \n=================================================================\nTotal params: 213,301\nTrainable params: 213,301\nNon-trainable params: 0\n_________________________________________________________________\n')),(0,r.kt)("p",null,"Now we can fit this model to our review dataset and validate the training:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# training the model\nmodel.fit(Xtrain, Ytrain, epoch=2, batch_size=118)\n\n## training validation\nval_loss, val_score = model.evaluate(Xtest, Ytest)\nprint(val_loss, val_score)\n")),(0,r.kt)("p",null,"Already after ",(0,r.kt)("strong",{parentName:"p"},"2 epochs")," I am seeing an accuracy of ",(0,r.kt)("strong",{parentName:"p"},"83%")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"0.3782317042350769")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.8289600014686584"),". Going to ",(0,r.kt)("strong",{parentName:"p"},"86%")," after ",(0,r.kt)("strong",{parentName:"p"},"10 epochs")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"0.4176311194896698")," ",(0,r.kt)("inlineCode",{parentName:"p"},"0.8595200181007385"),". So this seems to be a problem that can be solved with patience :)"))}u.isMDXComponent=!0},48258:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Keras_Introduction_RNN_Model_01-4c5ccf6e4611c2e3fbb3749f275f5183.png"},93016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Keras_Introduction_RNN_Model_02-52bf45774dadb769dae7c296dcdc839e.png"},56152:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Keras_Introduction_RNN_Model_03-1162ccf4ee70e7ec41898bd85c09a006.png"},39307:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Keras_Introduction_RNN_Model_04-d18cb6ebdd27c83402ba7fa6cf337481.png"},47241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);