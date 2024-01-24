"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[3462],{538048:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=a(785893),o=a(603905);const i={sidebar_position:4960,slug:"2022-12-11",title:"Breast Histopathology Image Segmentation Part 3",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Model creation based on a pre-trained and a custom model"},r=void 0,d={id:"IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/index",title:"Breast Histopathology Image Segmentation Part 3",description:"Model creation based on a pre-trained and a custom model",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3",slug:"/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/2022-12-11",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/2022-12-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4960,frontMatter:{sidebar_position:4960,slug:"2022-12-11",title:"Breast Histopathology Image Segmentation Part 3",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Model creation based on a pre-trained and a custom model"},sidebar:"tutorialSidebar",previous:{title:"Breast Histopathology Image Segmentation Part 4",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part4/2022-12-11"},next:{title:"Breast Histopathology Image Segmentation Part 2",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part2/2022-12-11"}},s={},l=[{value:"Model Creation - ResNet50",id:"model-creation---resnet50",level:2},{value:"Model Creation - Custom CNN Model",id:"model-creation---custom-cnn-model",level:2},{value:"Construction",id:"construction",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:a(812101).Z+"",width:"1500",height:"383"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-10-tf-breast-cancer-classification-part1/2022-12-10",children:"Part 1: Data Inspection and Pre-processing"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part2/2022-12-11",children:"Part 2: Weights, Data Augmentations and Generators"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/2022-12-11",children:"Part 3: Model creation based on a pre-trained and a custom model"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part4/2022-12-11",children:"Part 4: Train our model to fit the dataset"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12",children:"Part 5: Evaluate the performance of your trained model"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part6/2022-12-12",children:"Part 6: Running Predictions"})}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-bc-classification",children:"Github"})}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#model-creation---resnet50",children:"Model Creation - ResNet50"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#model-creation---custom-cnn-model",children:"Model Creation - Custom CNN Model"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#construction",children:"Construction"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Based on ",(0,t.jsx)(n.a,{href:"https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images",children:"Breast Histopathology Images"})," by ",(0,t.jsx)(n.a,{href:"https://www.kaggle.com/paultimothymooney",children:"Paul Mooney"}),".\n",(0,t.jsx)(n.code,{children:"Invasive Ductal Carcinoma (IDC) is the most common subtype of all breast cancers. To assign an aggressiveness grade to a whole mount sample, pathologists typically focus on the regions which contain the IDC. As a result, one of the common pre-processing steps for automatic aggressiveness grading is to delineate the exact regions of IDC inside of a whole mount slide."}),"\n",(0,t.jsx)(n.a,{href:"https://youtu.be/8XsiMQQ-4mM",children:"Can recurring breast cancer be spotted with AI tech? - BBC News"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Citation: ",(0,t.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/27563488/",children:"Deep learning for digital pathology image analysis: A comprehensive tutorial with selected use cases"})]}),"\n",(0,t.jsx)(n.li,{children:"Dataset: 198,738 IDC(negative) image patches; 78,786 IDC(positive) image patches"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"model-creation---resnet50",children:"Model Creation - ResNet50"}),"\n",(0,t.jsx)(n.p,{children:"Start by loading the pre-trained model:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./train_ResNet50_32_20k.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Loading the ResNet50, ensuring the head Full Connected layers are left off / removed\nbaseModel = ResNet50(weights="imagenet", include_top=False, input_tensor=Input(shape=(48, 48, 3)))\n'})}),"\n",(0,t.jsx)(n.p,{children:"Construct the head of the model that will be placed on top of the the base model:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'## Flattening is converting the data into a 1-dimensional array for inputting it to the next layer. \n## We flatten the output of the convolutional layers to create a single long feature vector. \n### Average pooling computes the average of the elements present in the region of feature map covered by the filter.\n#### ReLU stands for Rectified Linear Unit. \n#### The main advantage of using the ReLU function over other activation functions is that it does not activate all the neurons at the same time.\n## Dropout is a technique where randomly selected neurons are ignored during training.\n\nheadModel = baseModel.output\nheadModel = AveragePooling2D(pool_size=(7, 7), padding="same")(headModel)\nheadModel = Flatten(name="flatten")(headModel)\nheadModel = Dense(256, activation="relu")(headModel)\nheadModel = Dropout(0.5)(headModel)\nheadModel = Dense(len(config.CLASSES), activation="softmax")(headModel)\n\n# Placing the head model on top of the base model\nmodel = Model(inputs=baseModel.input, outputs=headModel)\n\n# Loop over all the layers of the base model and freeze them so that they are \n# not updated during the training process\nfor layer in baseModel.layers:\n    layer.trainable = False\n'})}),"\n",(0,t.jsx)(n.h2,{id:"model-creation---custom-cnn-model",children:"Model Creation - Custom CNN Model"}),"\n",(0,t.jsx)(n.h3,{id:"construction",children:"Construction"}),"\n",(0,t.jsxs)(n.p,{children:["Instead of downloading a pre-trained model we can build our own. The layers of the ",(0,t.jsx)(n.strong,{children:"Custom Model"})," are constructed according to:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"utils/conv_bc_model.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'class BC_Model:\n    @staticmethod\n    def build(width, height, depth, classes):\n    \n        # Lets first initialize the model with input shape to be "channels last" and channel\'s dimension\n        model = Sequential()\n        inputShape = (height, width, depth)\n        chanDim = -1\n        \n        # If we are using "channels first", then let\'s update the input shape and channel\'s dimension\n        if K.image_data_format() == "channels_first":\n            inputShape = (depth, height, width)\n            chanDim = 1\n            \n        # (CONV2D => RELU => BatchNormalization ) * 1 => POOL => DROPOUT\n        model.add(Conv2D(32, (3, 3), padding="same", input_shape=inputShape))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(MaxPooling2D(pool_size=(2, 2)))\n        model.add(Dropout(0.25))\n        \n        # (CONV2D => RELU => BatchNormalization ) * 2 => POOL => DROPOUT\n        model.add(Conv2D(64, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(Conv2D(64, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(MaxPooling2D(pool_size=(2, 2)))\n        model.add(Dropout(0.25))\n        \n        # (CONV2D => RELU => BatchNormalization ) * 3 => POOL => DROPOUT\n        model.add(Conv2D(128, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(Conv2D(128, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(Conv2D(128, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(MaxPooling2D(pool_size=(2, 2)))\n        model.add(Dropout(0.25))\n        \n        # (CONV2D => RELU => BatchNormalization ) * 4 => POOL => DROPOUT\n        model.add(Conv2D(256, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(Conv2D(256, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(Conv2D(256, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(Conv2D(256, (3, 3), padding="same"))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization(axis=chanDim))\n        model.add(MaxPooling2D(pool_size=(2, 2)))\n        model.add(Dropout(0.25))\n        \n        # FC => RELU layers => BatchNormalization => DROPOUT\n        model.add(Flatten())\n        model.add(Dense(512))\n        model.add(Activation("relu"))\n        model.add(BatchNormalization())\n        model.add(Dropout(0.5))\n        \n        # Dense layer and softmax classifier\n        model.add(Dense(classes))\n        model.add(Activation("softmax"))\n        \n        # Returning the created network architecture\n        return model\n'})}),"\n",(0,t.jsx)(n.p,{children:"We can use this function to build the model:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"./train_CustomModel_32_conv_20k.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# Building the model\nprint("Building the model")\nmodel = BC_Model.build(width=48, height=48, depth=3, classes=2)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},603905:(e,n,a)=>{a.d(n,{ah:()=>l});var t=a(667294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=d(e,["components","mdxType","originalType","parentName"]),m=l(a),p=o,u=m["".concat(s,".").concat(p)]||m[p]||c[p]||i;return a?t.createElement(u,r(r({ref:n},h),{},{components:a})):t.createElement(u,r({ref:n},h))}));h.displayName="MDXCreateElement"},812101:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"}}]);