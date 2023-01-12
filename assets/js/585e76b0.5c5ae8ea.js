"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[14226],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,u=m["".concat(l,".").concat(g)]||m[g]||d[g]||i;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},47034:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:4910,slug:"2022-12-18",title:"Tensorflow Transfer Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Transfer learning is a machine learning technique in which intelligence from a base ann is being transferred to a new network as a starting point."},s=void 0,o={unversionedId:"IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/index",id:"IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/index",title:"Tensorflow Transfer Learning",description:"Transfer learning is a machine learning technique in which intelligence from a base ann is being transferred to a new network as a starting point.",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning",slug:"/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/2022-12-18",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/2022-12-18",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-18-tf-transfer-learning/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4910,frontMatter:{sidebar_position:4910,slug:"2022-12-18",title:"Tensorflow Transfer Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Transfer learning is a machine learning technique in which intelligence from a base ann is being transferred to a new network as a starting point."},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Hub",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-19-tf-hub/2022-12-19"},next:{title:"Tensorflow Image Classification",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-16-tf-cifar/2022-12-16"}},l={},p=[{value:"Sharing Inteligence",id:"sharing-inteligence",level:2},{value:"Cats and Dogs",id:"cats-and-dogs",level:2},{value:"Importing the Model",id:"importing-the-model",level:3},{value:"Testrun the unmodified ResNet50 Model",id:"testrun-the-unmodified-resnet50-model",level:3},{value:"Building the Model",id:"building-the-model",level:3},{value:"Building the Model",id:"building-the-model-1",level:3},{value:"Train the Model",id:"train-the-model",level:3},{value:"Evaluating the Model",id:"evaluating-the-model",level:3},{value:"Update :: Binary Crossentropy",id:"update--binary-crossentropy",level:2}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Guangzhou, China",src:a(65275).Z,width:"1500",height:"383"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#sharing-inteligence"},"Sharing Inteligence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#cats-and-dogs"},"Cats and Dogs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#importing-the-model"},"Importing the Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testrun-the-unmodified-resnet50-model"},"Testrun the unmodified ResNet50 Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-the-model"},"Building the Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-the-model-1"},"Building the Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#train-the-model"},"Train the Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#evaluating-the-model"},"Evaluating the Model")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update--binary-crossentropy"},"Update :: Binary Crossentropy"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-cats-n-dogs"},"Github"))),(0,r.kt)("h2",{id:"sharing-inteligence"},"Sharing Inteligence"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transfer learning")," is a machine learning technique in which intelligence (i.e.: weights) from a base artificial neural network is being transferred to a new network as a starting point to perform a specific task. This can dramatically reduce the computational time required compared to starting from scratch."),(0,r.kt)("p",null,"A pre-trained ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/keras/resnet50"},"ResNet50")," model that has been trained on ",(0,r.kt)("a",{parentName:"p",href:"https://image-net.org/about.php"},"ImageNet which is an open source repository of images"),". The feature maps that has been previously trained will be augmented with a new classifier (new Dense layers)."),(0,r.kt)("p",null,"Fine tuning can be performed by unfreezing the top layers (base) and slowly training the entire network so an improved performance can be achieved. "),(0,r.kt)("h2",{id:"cats-and-dogs"},"Cats and Dogs"),(0,r.kt)("p",null,"We are going to take the ",(0,r.kt)("strong",{parentName:"p"},"ResNet50")," model and re-train it to help distinguishing photos of cats and dogs from the ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/tongpython/cat-and-dog"},"Cats and Dogs")," dataset on ",(0,r.kt)("inlineCode",{parentName:"p"},"kaggle.com"),". Here we have two possible strategies:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Conservative")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Freeze the trained CNN weights from the first layer"),(0,r.kt)("li",{parentName:"ul"},"Add a new dense layer with randomly initialized weights")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Dynamic")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Initialize the CNN network with the pre-trained weights"),(0,r.kt)("li",{parentName:"ul"},"Use a ",(0,r.kt)("strong",{parentName:"li"},"small learning rate")," to prevent aggressive changes")),(0,r.kt)("h3",{id:"importing-the-model"},"Importing the Model"),(0,r.kt)("p",null,"Just like the ",(0,r.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/ML/2022-12-16-tf-cifar/2022-12-16"},"CIFAR-10 dataset")," we can download the ResNet50 model and pre-trained weights directly through Keras:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"model = tf.keras.applications.ResNet50(weights = 'imagenet', include_top = True)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Keras models and datasets will be saved to ",(0,r.kt)("inlineCode",{parentName:"p"},"/home/myuser/.keras")," on Linux.")),(0,r.kt)("h3",{id:"testrun-the-unmodified-resnet50-model"},"Testrun the unmodified ResNet50 Model"),(0,r.kt)("p",null,"We can directly use the model and test it on some images. ",(0,r.kt)("strong",{parentName:"p"},"Note")," that the model was trained on colour images with 224x224 resolution and expects your images to be exactly that:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},'ValueError: Input 0 of layer "resnet50" is incompatible with the layer: expected shape=(None, 224, 224, 3), found shape=(32, 32, 3)'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# eval the un-modified model\n# resnet50 expects image to be of shape (1, 224, 224, 3)\nsample_image= tf.keras.preprocessing.image.load_img(r'./test_images/cat.png', target_size = (224, 224))\nsample_image = np.expand_dims(sample_image, axis = 0)\nprint('image shape: ',np.shape(sample_image))\n# keras offers resnet50 preprocess preset we can use\n# image will be processed identically to training images\npreprocessed_image = tf.keras.applications.resnet50.preprocess_input(sample_image)\n# run prediction\npredictions = model.predict(preprocessed_image)\n# use keras resnet50 prediction decoder to return top5 predictions\nprint('predictions:', tf.keras.applications.resnet50.decode_predictions(predictions, top = 5)[0])\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Transfer Learning",src:a(75021).Z,width:"887",height:"240"})),(0,r.kt)("p",null,"The test image return the following prediction:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"./test","_","images/cat.png")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"predictions: [('n02123159', 'tiger_cat', 0.39868173), ('n02123045', 'tabby', 0.32775873), ('n02124075', 'Egyptian_cat', 0.26495087), ('n02127052', 'lynx', 0.0049893092), ('n04409515', 'tennis_ball', 0.00035099618)]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"./test","_","images/ship.jpg")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"predictions: [('n04147183', 'schooner', 0.5001772), ('n03947888', 'pirate', 0.35976425), ('n04612504', 'yawl', 0.12959233), ('n03662601', 'lifeboat', 0.0024379618), ('n09428293', 'seashore', 0.0018175767)]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"./test","_","images/truck.jpg")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"predictions: [('n03345487', 'fire_engine', 0.8839737), ('n04461696', 'tow_truck', 0.028128117), ('n03344393', 'fireboat', 0.019656133), ('n03126707', 'crane', 0.0156197725), ('n03594945', 'jeep', 0.014000045)]\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"./test","_","images/bird.jpg")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"predictions: [('n01601694', 'water_ouzel', 0.37704965), ('n01795545', 'black_grouse', 0.19283505), ('n01582220', 'magpie', 0.14304504), ('n01580077', 'jay', 0.04652224), ('n01797886', 'ruffed_grouse', 0.025602208)]\n")),(0,r.kt)("h3",{id:"building-the-model"},"Building the Model"),(0,r.kt)("p",null,"ResNet50 contains 1000 different classes of which we only need 2 - we want our model to be able to distinguish between cats and dogs. So we do not need all the very specific training that happened in ResNet's dense layers. We are only interested in the general feature detection capabilities of it's convolution layers. So we can cut of the \"Top\" of the model and then replace it with our own dense layers that we can initialize with random weights and then freshly train with the cats&dogs dataset:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# load only the convolution layers / general feature detection of resnet50\nbase_model = tf.keras.applications.ResNet50(weights = 'imagenet', include_top = False)\n")),(0,r.kt)("p",null,"Now that we extracted the general feature detection from ResNet50 we can add our own - fresh - dense top layers and build the new model:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# take base model convolution layers from resnet\nx = base_model.output\n# compress incoming feature maps from resnet layers\nx = tf.keras.layers.GlobalAveragePooling2D()(x)\n# and add fresh top of dense layers\n# each node will distinguish between 1024 or 512 features\nx = tf.keras.layers.Dense(1024, activation = 'relu')(x)\nx = tf.keras.layers.Dense(1024, activation = 'relu')(x)\nx = tf.keras.layers.Dense(1024, activation = 'relu')(x)\nx = tf.keras.layers.Dense(512, activation = 'relu')(x)\n# the final layer breaks everything down to a binary decision - cat or dog\npredictions = tf.keras.layers.Dense(2, activation = 'softmax')(x)\n# create new model from both components\nmodel = tf.keras.models.Model(inputs = base_model.input, outputs = predictions)\n")),(0,r.kt)("p",null,"Now I want to use the ",(0,r.kt)("strong",{parentName:"p"},"Conservative")," approach defined above and freeze all the layers that were brought in from ResNet50. If we print out the layers we see that there are ",(0,r.kt)("inlineCode",{parentName:"p"},"174")," layers in total that need to be conserved (set un-trainable):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"for i, layer in enumerate(base_model.layers):\n    print(i, layer.name)\n")),(0,r.kt)("p",null,"This will output all layers of the ResNet50 based layers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"0 input_2\n1 conv1_pad\n2 conv1_conv\n3 conv1_bn\n4 conv1_relu\n...\n173 conv5_block3_add\n174 conv5_block3_out\n")),(0,r.kt)("p",null,"Lock those layers to freeze all the weights that have been applied training against the ImageNet dataset to preserve the general feature detection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# lock all resnet layers 1-174\nfor layer in model.layers[:175]:\n    layer.trainable = False\n# the new dense layers have to be trainable\nfor layer in model.layers[175:]:\n    layer.trainable = True\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To make the resulting model more specific to your use-case set ",(0,r.kt)("inlineCode",{parentName:"p"},"layer.trainable = True")," for layer ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"174")," and use a small training rate to preserve the general weight distribution.")),(0,r.kt)("p",null,"Now we have to point Keras to our ",(0,r.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets/tongpython/cat-and-dog"},"Cats and Dogs")," dataset - specifically to the ",(0,r.kt)("inlineCode",{parentName:"p"},"training_set")," folder that contains two folder ",(0,r.kt)("inlineCode",{parentName:"p"},"cats")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"dogs")," with corresponding images. We can use the ",(0,r.kt)("strong",{parentName:"p"},"ImageDataGenerator")," with a set of ResNet50 specific training preprocessing functions - all readily provided by Keras:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"train_datagen = tf.keras.preprocessing.image.ImageDataGenerator(preprocessing_function= tf.keras.applications.resnet50.preprocess_input)\n\ntrain_generator = train_datagen.flow_from_directory('./data/training_set/', \n                                                   target_size = (224, 224),\n                                                   color_mode = 'rgb',\n                                                   batch_size = 32,\n                                                   class_mode = 'categorical',\n                                                   shuffle = True)\n")),(0,r.kt)("h3",{id:"building-the-model-1"},"Building the Model"),(0,r.kt)("p",null,"Now that we defined the mode we need to compile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# compile the new model\nmodel.compile(optimizer = 'Adam', loss = 'categorical_crossentropy', metrics = ['accuracy'])\n")),(0,r.kt)("h3",{id:"train-the-model"},"Train the Model"),(0,r.kt)("p",null,'Since we let ResNet50 do most of the work and simply transferred it\'s "intelligence" we can start with a small training run of 5 epochs and see how well our new model can fit our dataset:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# and train it on your dataset\nhistory = model.fit(train_generator, steps_per_epoch=train_generator.n//train_generator.batch_size, epochs = 5)\n")),(0,r.kt)("p",null,"After the 5th epoch I end up at an accuracy of almost ",(0,r.kt)("inlineCode",{parentName:"p"},"100%")," which often means that we are dealing with some overfitting:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Epoch 5/5\n250/250 [==============================] - 38s 150ms/step - loss: 0.0134 - accuracy: 0.9950\n")),(0,r.kt)("p",null,"So the next step is to assess our trained models capability to work it's way through the set of test images that are provided with the dataset."),(0,r.kt)("h3",{id:"evaluating-the-model"},"Evaluating the Model"),(0,r.kt)("p",null,"Plotting the loss and accuracy of the training run:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Transfer Learning",src:a(37683).Z,width:"1274",height:"479"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# evaluating the model - accuracy & loss\nacc = history.history['accuracy']\nloss = history.history['loss']\n## plot accuracy\nplt.figure()\nplt.plot(acc, label='Training Accuracy')\nplt.ylabel('Accuracy')\nplt.title('Training Accuracy')\n## plot loss\nplt.figure()\nplt.plot(loss, label='Training Loss')\nplt.ylabel('Loss')\nplt.title('Training Loss')\nplt.xlabel('epoch')\nplt.show()\n")),(0,r.kt)("p",null,"And we can use a test image - that is not contained in the training set - to verify that our model is performing well:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Transfer Learning",src:a(54075).Z,width:"1105",height:"288"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# take a sample image for testing\nSample_Image= tf.keras.preprocessing.image.load_img(r'./test_images/cat.png', target_size = (224, 224))\nplt.imshow(Sample_Image)\nplt.show()\n## pre-process for resnet\nSample_Image = tf.keras.preprocessing.image.img_to_array(Sample_Image)\nnp.shape(Sample_Image)\nSample_Image = np.expand_dims(Sample_Image, axis = 0)\n## run prediction\nSample_Image = tf.keras.applications.resnet50.preprocess_input(Sample_Image)\npredictions = model.predict(Sample_Image)\nprint('Predictions:', predictions)\n")),(0,r.kt)("p",null,"The prediction values that are printed out here are the probability that the image belongs to the classes ",(0,r.kt)("inlineCode",{parentName:"p"},"[cat, dog]")," - and the values I am getting here are ",(0,r.kt)("em",{parentName:"p"},"99.99%")," to ",(0,r.kt)("em",{parentName:"p"},"5e-7%")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Predictions: [[9.9999952e-01 5.0677403e-07]\n")),(0,r.kt)("p",null,"So there is a chance that this is actually a dog..."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Transfer Learning",src:a(94956).Z,width:"300",height:"160"})),(0,r.kt)("h2",{id:"update--binary-crossentropy"},"Update :: Binary Crossentropy"),(0,r.kt)("p",null,"When dealing with binary problems (2 classes) you should use ",(0,r.kt)("a",{parentName:"p",href:"https://keras.io/api/losses/probabilistic_losses/#binarycrossentropy-class"},"Binary Crossentropy")," for the loss function. ",(0,r.kt)("a",{parentName:"p",href:"https://keras.io/api/losses/probabilistic_losses/#categoricalcrossentropy-class"},"Categorical Crossentropy")," is used for multiple classes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"model.compile(optimizer = 'Adam', loss = 'binary_crossentropy', metrics = ['accuracy'])\n")),(0,r.kt)("p",null,"Since the results were already almost perfect I do not see much of a difference here (re-running with categorical crossentropy sometime also results in 100% certainties):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Predictions: [[1.000000e+00 3.776364e-12]]\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow Transfer Learning",src:a(47705).Z,width:"1269",height:"461"})))}d.isMDXComponent=!0},75021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tensorflow_Transfer_Learning_01-3b261419a755412dc0afab820eb268b4.png"},37683:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tensorflow_Transfer_Learning_02-cdc7c37304e4cf8c005fece416ec1a84.png"},54075:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tensorflow_Transfer_Learning_03-510f2cce4d4999a7a35887a406cbba52.png"},47705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Tensorflow_Transfer_Learning_04-f79edac5a8d5810059136f5aec367c30.png"},94956:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nevergiveup-bf43700829e15a95505635216a1d12f8.gif"},65275:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"}}]);