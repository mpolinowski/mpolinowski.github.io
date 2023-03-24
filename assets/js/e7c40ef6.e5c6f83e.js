"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[27017],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>_});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),d=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=d(n),_=i,u=m["".concat(s,".").concat(_)]||m[_]||c[_]||o;return n?t.createElement(u,l(l({ref:a},p),{},{components:n})):t.createElement(u,l({ref:a},p))}));function _(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42261:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=n(87462),i=(n(67294),n(3905));const o={sidebar_position:4570,slug:"2023-03-03",title:"Tensorflow 2 - Convolutional Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Computer Vision for Binary Image Classifications"},l=void 0,r={unversionedId:"IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/index",id:"IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/index",title:"Tensorflow 2 - Convolutional Neural Networks",description:"Computer Vision for Binary Image Classifications",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications",slug:"/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4570,frontMatter:{sidebar_position:4570,slug:"2023-03-03",title:"Tensorflow 2 - Convolutional Neural Networks",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Computer Vision for Binary Image Classifications"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Convolutional Neural Networks",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},next:{title:"Tensorflow 2 - Neural Network Classifications",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"}},s={},d=[{value:"Binary Image Classification",id:"binary-image-classification",level:2},{value:"Dependencies",id:"dependencies",level:3},{value:"Inspect the Data",id:"inspect-the-data",level:3},{value:"Building the Model",id:"building-the-model",level:3},{value:"Rebuilding the Tiny VGG Architecture",id:"rebuilding-the-tiny-vgg-architecture",level:4},{value:"Building a Baseline Model",id:"building-a-baseline-model",level:3},{value:"Evaluating the Baseline Model",id:"evaluating-the-baseline-model",level:4},{value:"Reducing the Overfit",id:"reducing-the-overfit",level:4},{value:"Making Predictions on Custom Data",id:"making-predictions-on-custom-data",level:3}],p={toc:d};function c(e){let{components:a,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guangzhou, China",src:n(14331).Z,width:"1500",height:"626"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tensorflow-convolutional-neural-networks"},"Tensorflow Convolutional Neural Networks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#binary-image-classification"},"Binary Image Classification"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dependencies"},"Dependencies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#inspect-the-data"},"Inspect the Data")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-the-model"},"Building the Model"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#rebuilding-the-tiny-vgg-architecture"},"Rebuilding the Tiny VGG Architecture")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-a-baseline-model"},"Building a Baseline Model"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#evaluating-the-baseline-model"},"Evaluating the Baseline Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#reducing-the-overfit"},"Reducing the Overfit")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#making-predictions-on-custom-data"},"Making Predictions on Custom Data"))))))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"See also:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"Tensor Constants, Variables and Attributes"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"Tensor Indexing, Expanding and Manipulations"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"Matrix multiplications, Squeeze, One-hot and Numpy")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Classification: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27"},"Non-linear Data and Activation Functions"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},"Model Evaluation and Performance Improvement"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"},"Multiclass Classification Problems")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Convolutional Neural Networks: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"},"Binary Image Classification"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},"Multiclass Image Classification")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Transfer Learning: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Feature Extraction"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},"Fine-Tuning"),", ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16"},"Scaling")),(0,i.kt)("li",{parentName:"ul"},"Tensorflow 2 - Unsupervised Learning: ",(0,i.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24"},"Autoencoders"))),(0,i.kt)("h1",{id:"tensorflow-convolutional-neural-networks"},"Tensorflow Convolutional Neural Networks"),(0,i.kt)("p",null,"CNNs are the ideal solution to discover pattern in visual data."),(0,i.kt)("h2",{id:"binary-image-classification"},"Binary Image Classification"),(0,i.kt)("p",null,"Using the ",(0,i.kt)("strong",{parentName:"p"},"partial")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/datasets/catalog/food101"},"Food101")," dataset:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mkdir datasets && cd datasets\nwget https://storage.googleapis.com/ztm_tf_course/food_vision/pizza_steak.zip\nunzip pizza_steak.zip && rm pizza_steak\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tree -L 3\ndatasets\n\u2514\u2500\u2500 pizza_steak\n    \u251c\u2500\u2500 test\n    \u2502\xa0\xa0 \u251c\u2500\u2500 pizza\n    \u2502\xa0\xa0 \u2514\u2500\u2500 steak\n    \u2514\u2500\u2500 train\n        \u251c\u2500\u2500 pizza\n        \u2514\u2500\u2500 steak\n")),(0,i.kt)("h3",{id:"dependencies"},"Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.image as mpimg\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport os\nimport pandas as pd\nimport pathlib\nimport random\nimport tensorflow as tf\nfrom tensorflow.keras import Sequential\nfrom tensorflow.keras.layers import Dense, Flatten, Conv2D, MaxPool2D, Activation, Rescaling, RandomFlip, RandomRotation, RandomZoom, RandomContrast, RandomBrightness\nfrom tensorflow.keras.optimizers import Adam\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\nfrom tensorflow.keras.utils import image_dataset_from_directory\n")),(0,i.kt)("h3",{id:"inspect-the-data"},"Inspect the Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# inspect data\ntraining_data_dir = pathlib.Path(\"../datasets/pizza_steak/train\")\ntesting_data_dir = pathlib.Path(\"../datasets/pizza_steak/test\")\n# create class names from sub dir names\nclass_names = np.array(sorted([item.name for item in training_data_dir.glob(\"*\")]))\n\nstr(training_data_dir), str(testing_data_dir), str(class_names)\n# ('../datasets/pizza_steak/train',\n#  '../datasets/pizza_steak/test',\n#  \"['pizza' 'steak']\")\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# display random images\ndef view_random_image(target_dir, target_class):\n    target_folder = str(target_dir) + "/" + target_class\n    random_image = random.sample(os.listdir(target_folder), 1)\n    \n    img = mpimg.imread(target_folder + "/" + random_image[0])\n    plt.imshow(img)\n    plt.title(str(target_class) + str(img.shape))\n    plt.axis("off")\n    \n    return tf.constant(img)\n\nfig = plt.figure(figsize=(12, 12))\nplot1 = fig.add_subplot(1, 2, 1)\npizza_image = view_random_image(target_dir = training_data_dir, target_class=class_names[0])\nplot2 = fig.add_subplot(1, 2, 2)\nsteak_image = view_random_image(target_dir = training_data_dir, target_class=class_names[1])\nplot1.title.set_text(\'Random Pizza Image\')\nplot2.title.set_text(\'Random Steak Image\')\n\nsample_image / 255\n\n# the image is 512x384 pixels with 3 colour values per pixel\n# to normalize the rgb values we need to divide all by 255\n\n# <tf.Tensor: shape=(382, 512, 3), dtype=float32, numpy=\n# array([[[0.8156863 , 0.7294118 , 0.87058824],\n#         [0.827451  , 0.73333335, 0.8666667 ],\n#         [0.8392157 , 0.73333335, 0.87058824],\n#         ...,\n#        [[0.75686276, 0.5254902 , 0.3529412 ],\n#         [0.7411765 , 0.50980395, 0.3372549 ],\n#         [0.7176471 , 0.4745098 , 0.3137255 ],\n#         ...,\n#         [0.59607846, 0.49803922, 0.38039216],\n#         [0.6431373 , 0.5372549 , 0.42352942],\n#         [0.65882355, 0.5529412 , 0.43529412]]], dtype=float32)>\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(94256).Z,width:"950",height:"465"})),(0,i.kt)("h3",{id:"building-the-model"},"Building the Model"),(0,i.kt)("p",null,"In machine learning, a classifier assigns a class label to a data point. For example, an image classifier produces a class label (e.g, pizza, steak) for what objects exist within an image. A convolutional neural network, or ",(0,i.kt)("strong",{parentName:"p"},"CNN")," for short, is a type of classifier, which excels at solving this problem."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"rebuilding-the-tiny-vgg-architecture"},"Rebuilding the Tiny VGG Architecture"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"(see ",(0,i.kt)("a",{parentName:"em",href:"https://poloclub.github.io/cnn-explainer/"},"CNN Explainer"),")")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Preprocessing"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"tf.keras.utils.image_dataset_from_directory(\n    directory,\n    labels='inferred',\n    label_mode='int',\n    class_names=None,\n    color_mode='rgb',\n    batch_size=32,\n    image_size=(256, 256),\n    shuffle=True,\n    seed=None,\n    validation_split=None,\n    subset=None,\n    interpolation='bilinear',\n    follow_links=False,\n    crop_to_aspect_ratio=False,\n    **kwargs\n)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If labels is ",(0,i.kt)("inlineCode",{parentName:"li"},"inferred"),'", the directory should contain subdirectories, each containing images for a class. Otherwise, the directory structure is ignored. "inferred" (labels are generated from the directory structure), None (no labels), or a list/tuple of integer labels of the same size as the number of image files found in the directory. Labels should be sorted according to the alphanumeric order of the image file paths'),(0,i.kt)("li",{parentName:"ul"},"String describing the encoding of labels. Options are:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int"),": means that the labels are encoded as integers (e.g. for sparse_categorical_crossentropy loss)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"categorical"),": means that the labels are encoded as a categorical vector (e.g. for categorical_crossentropy loss)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"binary")," means that the labels (there can be only 2) are encoded as float32 scalars with values 0 or 1 (e.g. for binary_crossentropy)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None")," (no labels).")))),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Conv2D Layer Options")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filters"),": How many filters should be applied to the input tensor (",(0,i.kt)("inlineCode",{parentName:"li"},"10"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"32"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"128"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kernel Size"),": Sets the filter size."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Padding"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"same")," pads target tensor with zeros to preserve input shape. ",(0,i.kt)("inlineCode",{parentName:"li"},"valid")," lowers the output shape."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Strides"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"strides=1")," moves the filter across an image 1 pixel at a time.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'seed = 42\nbatch_size = 32\nimg_height = 224\nimg_width = 224\n\ntf.random.set_seed(seed)\n\n# train and test data dirs\ntrain_dir = "../datasets/pizza_steak/train/"\ntest_dir = "../datasets/pizza_steak/test/"\n\ntraining_data = image_dataset_from_directory(train_dir,\n                                              labels=\'inferred\',\n                                              label_mode=\'binary\',\n                                              seed=seed,\n                                              image_size=(img_height, img_width),\n                                              batch_size=batch_size)\n\ntesting_data = image_dataset_from_directory(test_dir,\n                                              labels=\'inferred\',\n                                              label_mode=\'binary\',\n                                              seed=seed,\n                                              image_size=(img_height, img_width),\n                                              batch_size=batch_size)\n\n# building the model\ncnn_model = Sequential([\n  Rescaling(1./255),\n  Conv2D(filters=10, \n         kernel_size=3,\n         activation="relu", \n         input_shape=(224, 224, 3)),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(pool_size=2, padding="same"),\n  Conv2D(10, 3, activation="relu"),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(2),\n  Flatten(),\n  Dense(1, activation="sigmoid")\n])\n\n# compile the model\ncnn_model.compile(loss="binary_crossentropy",\n                 optimizer=Adam(learning_rate=1e-3),\n                 metrics=["accuracy"])\n\n# fitting the model\nhistory_cnn = cnn_model.fit(training_data, epochs=5,\n                            steps_per_epoch=len(training_data),\n                            validation_data=testing_data,\n                            validation_steps=len(testing_data))\n\n# Found 1500 images belonging to 2 classes.\n# Found 500 images belonging to 2 classes.\n# Epoch 1/5\n\n# Epoch 5/5\n# 47/47 [==============================] - 2s 47ms/step - loss: 0.3347 - accuracy: 0.8540 - val_loss: 0.2927 - val_accuracy: 0.8820\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'cnn_model.summary()\n\n# Model: "sequential_8"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  rescaling (Rescaling)       (None, 224, 224, 3)       0 \n#  conv2d_35 (Conv2D)          (None, 222, 222, 10)      280 \n#  conv2d_36 (Conv2D)          (None, 220, 220, 10)      910 \n#  max_pooling2d_17 (MaxPooling2D)  (None, 110, 110, 10) 0 \n#  conv2d_37 (Conv2D)          (None, 108, 108, 10)      910 \n#  conv2d_38 (Conv2D)          (None, 106, 106, 10)      910\n#  max_pooling2d_18 (MaxPooling2D)  (None, 53, 53, 10)   0\n#  flatten_8 (Flatten)         (None, 28090)             0\n#  dense_8 (Dense)             (None, 1)                 28091 \n# =================================================================\n# Total params: 31,101\n# Trainable params: 31,101\n# Non-trainable params: 0\n# _________________________________________________________________\n')),(0,i.kt)("h3",{id:"building-a-baseline-model"},"Building a Baseline Model"),(0,i.kt)("p",null,"Above I already started with a CNN that was ideal for the given problem. Let's take a few steps back and try to work our way up to it by establishing a simple and fast baseline first. Fitting a machine learning model follows 3 steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Baseline Model"),(0,i.kt)("li",{parentName:"ol"},"Overfit a complexer model to improve the validation metric")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Increase # of conv layers"),(0,i.kt)("li",{parentName:"ul"},"Increas # of filters in conv layers"),(0,i.kt)("li",{parentName:"ul"},"Add another dense layer above the output")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Reduce the overfit")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Add data augmentation"),(0,i.kt)("li",{parentName:"ul"},"Add regularization layers (like pooling layers)"),(0,i.kt)("li",{parentName:"ul"},"Add more, varied training data")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'tf.random.set_seed(42)\n\nmodel_cnn_base = Sequential([\n  Rescaling(1./255),\n  Conv2D(filters=10,\n          kernel_size=(3, 3),\n          strides=(1, 1),\n          padding="same",\n          activation="relu",\n          input_shape=(224, 224, 3),\n          name="input_layer"),\n  Conv2D(10, 3, activation="relu"),\n  Conv2D(10, 3, activation="relu"),\n  Flatten(),\n  Dense(1, activation="sigmoid", name="output_layer")\n])\n\nmodel_cnn_base.compile(loss="binary_crossentropy",\n                      optimizer=Adam(learning_rate=(1e-3)),\n                      metrics=["accuracy"])\n\nhistory_cnn_baseline = model_cnn_base.fit(training_data, epochs=5,\n                        steps_per_epoch=len(training_data),\n                        validation_data=testing_data,\n                        validation_steps=len(testing_data))\n\n# Epoch 5/5\n# 47/47 [==============================] - 3s 59ms/step - loss: 0.0901 - accuracy: 0.9740 - val_loss: 0.4827 - val_accuracy: 0.8020\n')),(0,i.kt)("h4",{id:"evaluating-the-baseline-model"},"Evaluating the Baseline Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# print loss curves\nfig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_cnn.history).plot(ax=axes[0], title="Tiny VGG")\npd.DataFrame(history_cnn_baseline.history).plot(ax=axes[1], title="Baseline Model")\n\n# as pointed out above - we can see that the validation loss for the baseline model\n# stops improving. But the loss on the trainings data keeps falling\n# => this points to our model __overfitting__ the training dataset\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(75223).Z,width:"981",height:"528"})),(0,i.kt)("h4",{id:"reducing-the-overfit"},"Reducing the Overfit"),(0,i.kt)("p",null,"Improve the evaluation metrics by tackling the overfitting issue:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# adding pooling layers\n# maxpool takes a square with size=poolsize (2 => 2x2)\n# combines those pixel into 1 with the max value\n# this looses fine details and directs your model\n# towards the larger features in your image\nmodel_cnn_base_pool = Sequential([\n    Rescaling(1./255),\n    Conv2D(10, 3, activation="relu", input_shape=(224, 224, 3)),\n    MaxPool2D(pool_size=2),\n    Conv2D(10, 2, activation="relu"),\n    MaxPool2D(),\n    Conv2D(10, 2, activation="relu"),\n    MaxPool2D(),\n    Flatten(),\n    Dense(1, activation="sigmoid")\n])\n\nmodel_cnn_base_pool.compile(loss="binary_crossentropy",\n                           optimizer=Adam(learning_rate=1e-3),\n                           metrics=["accuracy"])\n\nhistory_cnn_baseline_pool = model_cnn_base_pool.fit(training_data, epochs=10,\n                        steps_per_epoch=len(training_data),\n                        validation_data=testing_data,\n                        validation_steps=len(testing_data))\n\n# Epoch 10/10\n# 47/47 [==============================] - 1s 27ms/step - loss: 0.2748 - accuracy: 0.8907 - val_loss: 0.2552 - val_accuracy: 0.9040\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# print loss curves\nfig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_cnn_baseline.history).plot(ax=axes[0], title="Baseline Model")\npd.DataFrame(history_cnn_baseline_pool.history).plot(ax=axes[1], title="Pooled Baseline Model")\n\n# I increased the number of epochs to better see the result\n# now it is obvious - adding pooling layers already solved the overfit\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(80342).Z,width:"981",height:"528"})),(0,i.kt)("p",null,"Another tool we can use to improve the performance of an overfitting model is ",(0,i.kt)("strong",{parentName:"p"},"Data Augmentation"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# to further generalize we could add more images that add variations\n# but we get a similar effect from just modifying our training images\n# randomly using augmentations to increase diversity\n\ndata_augmentation = Sequential([\n    RandomFlip("horizontal_and_vertical"),\n    RandomRotation(0.2),\n    RandomZoom(0.1),\n    RandomContrast(0.2),\n    RandomBrightness(factor=0.2)\n])\n\nmodel_cnn_base_pool_aug = Sequential([\n    data_augmentation,\n    Rescaling(1./255),\n    Conv2D(10, 3, activation="relu", input_shape=(224, 224, 3)),\n    MaxPool2D(pool_size=2),\n    Conv2D(10, 2, activation="relu"),\n    MaxPool2D(),\n    Conv2D(10, 2, activation="relu"),\n    MaxPool2D(),\n    Flatten(),\n    Dense(1, activation="sigmoid")\n])\n\nmodel_cnn_base_pool_aug.compile(loss="binary_crossentropy",\n                           optimizer=Adam(learning_rate=1e-3),\n                           metrics=["accuracy"])\n\nhistory_cnn_baseline_pool_aug = model_cnn_base_pool_aug.fit(training_data, epochs=50,\n                        steps_per_epoch=len(training_data),\n                        validation_data=testing_data,\n                        validation_steps=len(testing_data))\n\n# Epoch 50/50\n# 47/47 [==============================] - 7s 145ms/step - loss: 0.3436 - accuracy: 0.8593 - val_loss: 0.2353 - val_accuracy: 0.9080\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# print loss curves\nfig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_cnn_baseline_pool.history).plot(ax=axes[0], title="Pooled Baseline Model")\npd.DataFrame(history_cnn_baseline_pool_aug.history).plot(ax=axes[1], title="Augmented Baseline Model")\n\n# adding too many data augmentation can lead to a degradation of the performance of a model\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(38722).Z,width:"981",height:"528"})),(0,i.kt)("p",null,"Add shuffle to our datasets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# randomize the order in which your models see the training images\n# to remove biases in the order the data was collected in\nseed = 42\nbatch_size = 32\nimg_height = 224\nimg_width = 224\n\ntf.random.set_seed(seed)\n\n# train and test data dirs\ntrain_dir = \"../datasets/pizza_steak/train/\"\ntest_dir = \"../datasets/pizza_steak/test/\"\n\ntraining_data_shuffled = image_dataset_from_directory(train_dir,\n                                              labels='inferred',\n                                              label_mode='binary',\n                                              seed=seed,\n                                              shuffle=True,\n                                              image_size=(img_height, img_width),\n                                              batch_size=batch_size)\n\ntesting_data_shuffled = image_dataset_from_directory(test_dir,\n                                              labels='inferred',\n                                              label_mode='binary',\n                                              seed=seed,\n                                              shuffle=True,\n                                              image_size=(img_height, img_width),\n                                              batch_size=batch_size)\n\n# Found 1500 files belonging to 2 classes.\n# Found 500 files belonging to 2 classes.\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# re-run the same pooled and augmented model as before on shuffled data\ndata_augmentation = Sequential([\n    RandomFlip("horizontal_and_vertical"),\n    RandomRotation(0.2),\n    RandomZoom(0.1),\n    RandomContrast(0.2),\n    RandomBrightness(factor=0.2)\n])\n\nmodel_cnn_base_pool_aug_shuffle = Sequential([\n    data_augmentation,\n    Rescaling(1./255),\n    Conv2D(10, 3, activation="relu", input_shape=(224, 224, 3)),\n    MaxPool2D(pool_size=2),\n    Conv2D(10, 2, activation="relu"),\n    MaxPool2D(),\n    Conv2D(10, 2, activation="relu"),\n    MaxPool2D(),\n    Flatten(),\n    Dense(1, activation="sigmoid")\n])\n\nmodel_cnn_base_pool_aug_shuffle.compile(loss="binary_crossentropy",\n                           optimizer=Adam(learning_rate=1e-3),\n                           metrics=["accuracy"])\n\nhistory_cnn_baseline_pool_aug_shuffle = model_cnn_base_pool_aug_shuffle.fit(training_data_shuffled, epochs=50,\n                        steps_per_epoch=len(training_data_shuffled),\n                        validation_data=testing_data_shuffled,\n                        validation_steps=len(testing_data_shuffled))\n\n# Epoch 50/50\n# 47/47 [==============================] - 8s 160ms/step - loss: 0.3257 - accuracy: 0.8580 - val_loss: 0.2617 - val_accuracy: 0.8860\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# print loss curves\nfig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_cnn_baseline_pool_aug.history).plot(ax=axes[0], title="Augmented Baseline Model")\npd.DataFrame(history_cnn_baseline_pool_aug_shuffle.history).plot(ax=axes[1], title="Augmented Baseline Model (Shuffled)")\n\n# the shuffled data shows a much steeper descent in the loss value:\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(34851).Z,width:"981",height:"528"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_cnn.history).plot(ax=axes[0], title="Original Tiny VGG")\npd.DataFrame(history_cnn_baseline_pool_aug_shuffle.history).plot(ax=axes[1], title="Augmented Baseline Model (Shuffled)")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(56470).Z,width:"981",height:"528"})),(0,i.kt)("p",null,"Now that I have the data preprocessing dialed and am getting similar results to the initial ",(0,i.kt)("strong",{parentName:"p"},"Tiny VGG")," run I want to see how this model performce now with the optimized data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# re-run the augmented data through the Tiny VGG architecture model\ndata_augmentation = Sequential([\n    RandomFlip("horizontal_and_vertical"),\n    RandomRotation(0.2),\n    RandomZoom(0.1),\n    RandomContrast(0.2),\n    RandomBrightness(factor=0.2)\n])\n\nvgg_model = Sequential([\n  data_augmentation,\n  Rescaling(1./255),\n  Conv2D(filters=10, \n         kernel_size=3,\n         activation="relu", \n         input_shape=(224, 224, 3)),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(pool_size=2, padding="same"),\n  Conv2D(10, 3, activation="relu"),\n  Conv2D(10, 3, activation="relu"),\n  MaxPool2D(2),\n  Flatten(),\n  Dense(1, activation="sigmoid")\n])\n\nvgg_model.compile(loss="binary_crossentropy",\n                           optimizer=Adam(learning_rate=1e-3),\n                           metrics=["accuracy"])\n\nhistory_vgg_model = vgg_model.fit(training_data_shuffled, epochs=50,\n                        steps_per_epoch=len(training_data_shuffled),\n                        validation_data=testing_data_shuffled,\n                        validation_steps=len(testing_data_shuffled))\n\n# Epoch 50/50\n# 47/47 [==============================] - 8s 175ms/step - loss: 0.2746 - accuracy: 0.8927 - val_loss: 0.2192 - val_accuracy: 0.9200\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_cnn_baseline_pool_aug_shuffle.history).plot(ax=axes[1], title="Augmented Baseline Model (Shuffled)")\npd.DataFrame(history_vgg_model.history).plot(ax=axes[0], title="Tiny VGG with Augumented Data")\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(98107).Z,width:"981",height:"528"})),(0,i.kt)("h3",{id:"making-predictions-on-custom-data"},"Making Predictions on Custom Data"),(0,i.kt)("p",null,"Now that I have a model that looks like it is performing well I can try to run a prediction on a personal picture from my favorite pizza place on the beach of Koh Rong in Cambodia:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(96270).Z,width:"640",height:"426"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'pizza_path = "../assets/pizza.jpg"\npizza_img = mpimg.imread(pizza_path)\npizza_img.shape\n# (426, 640, 3)\n# before passing the image to our model we first need to pre-process it the same\n# way we processed our training images.\n\nsteak_path = "../assets/steak.jpg"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# helper function to pre-process images for predictions\ndef prepare_image(file_name, im_shape=224):\n    # read in image\n    img = tf.io.read_file(file_name)\n    # image array => tensor\n    img = tf.image.decode_image(img)\n    # reshape to training size\n    img = tf.image.resize(img, size=[im_shape, im_shape])\n    # we don't need to normalize the image this is done by the model itself\n    # img = img/255\n    # add a dimension in front for batch size => shape=(1, 224, 224, 3)\n    img = tf.expand_dims(img, axis=0)\n    return img\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"test_image_steak = prepare_image(file_name=steak_path)\ntest_image_pizza = prepare_image(file_name=pizza_path)\ntest_image_pizza\n# the image now has the right shape to be ingested by our model:\n# <tf.Tensor: shape=(1, 224, 224, 3), dtype=float32, numpy=\n# array([[[[136.07143  , 141.07143  , 111.07143  ],\n#          ...\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"prediction_pizza = vgg_model.predict(test_image_pizza)\nprediction_pizza\n# we receive a prediction probability of `~0.86`\n# array([[0.02831189]], dtype=float32)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# make the propability output \"readable\"\npred_class_pizza = class_names[int(tf.round(prediction_pizza))]\npred_class_pizza\n# 'pizza'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"prediction_steak = vgg_model.predict(test_image_steak)\npred_class_steak = class_names[int(tf.round(prediction_steak))]\npred_class_steak\n# 'steak'\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# making the process a bit more visually appealing\ndef predict_and_plot(model, file_name, class_names):\n    # load the image and preprocess\n    img = prepare_image(file_name)\n    # run prediction\n    prediction = model.predict(img)\n    # get predicted class name\n    pred_class = class_names[int(tf.round(prediction))]\n    # plot image & prediction\n    plt.imshow(mpimg.imread(file_name))\n    plt.title(f"Prediction: {pred_class}")\n    plt.axis(False)\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# a few more images to test with\npizza_path2 = "../assets/pizza2.jpg"\npizza_path3 = "../assets/pizza3.jpg"\nsteak_path2 = "../assets/steak2.jpg"\nsteak_path3 = "../assets/steak3.jpg"\n\npredict_and_plot(model=vgg_model, file_name=pizza_path3, class_names=class_names)\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(60078).Z,width:"515",height:"372"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Convolutional Neural Networks",src:n(47150).Z,width:"200",height:"113"})))}c.isMDXComponent=!0},94256:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_01-f7b93a510a9183751638158e33540a5f.png"},75223:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_02-a230f0490e05d0f1edf960d2e11a2ed9.png"},80342:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_03-ec3bac06db97059d6070dc2f97d3743d.png"},38722:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_04-198f74d712a1703eccf3d6466e102152.png"},34851:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_05-ab1b90f368a6aba7e1a62c054ee34b53.png"},56470:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_06-3d35ac2ee47b36c947506027a6f2047d.png"},98107:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_07-1a98d124f156a7cada269733c0de0bd0.png"},60078:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/03_Tensorflow_Convolutional_Neural_Networks_08-5998ffb8f0c479f4f990e95d6432e35a.png"},47150:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/nice-17fd99ca7852fc364f1e7e3d190e052c.gif"},14331:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-cd27afc91b9ae79990579bad65920e0c.jpg"},96270:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/pizza-1a430f26b704c667b5e5ecf6431373c7.jpg"}}]);