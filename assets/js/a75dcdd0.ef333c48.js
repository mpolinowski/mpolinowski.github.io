"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[85868],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>p});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),_=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=_(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=_(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?t.createElement(f,l(l({ref:a},c),{},{components:n})):t.createElement(f,l({ref:a},c))}));function p(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var _=2;_<i;_++)l[_]=n[_];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48328:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>_});var t=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4550,slug:"2023-03-06",title:"Tensorflow 2 - Transfer Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Using a Pre-trained Model to Extract Features"},l=void 0,o={unversionedId:"IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/index",id:"IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/index",title:"Tensorflow 2 - Transfer Learning",description:"Using a Pre-trained Model to Extract Features",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction",slug:"/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4550,frontMatter:{sidebar_position:4550,slug:"2023-03-06",title:"Tensorflow 2 - Transfer Learning",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Using a Pre-trained Model to Extract Features"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Transfer Learning",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},next:{title:"Tensorflow 2 - Convolutional Neural Networks",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"}},s={},_=[{value:"Feature Extraction",id:"feature-extraction",level:2},{value:"Visualizing the Data",id:"visualizing-the-data",level:3},{value:"Preprocessing the Data",id:"preprocessing-the-data",level:3},{value:"TensorBoard Perfomance Tracking",id:"tensorboard-perfomance-tracking",level:3},{value:"Building a Model from Tensorflow Hub",id:"building-a-model-from-tensorflow-hub",level:3},{value:"Creating a ResNet-based Model",id:"creating-a-resnet-based-model",level:3},{value:"Training the ResNet Model",id:"training-the-resnet-model",level:3},{value:"Creating a EfficientNet-based Model",id:"creating-a-efficientnet-based-model",level:3},{value:"Training the EfficientNet Model",id:"training-the-efficientnet-model",level:3},{value:"Comparing both Models",id:"comparing-both-models",level:3},{value:"Using the Tensorboard Callback",id:"using-the-tensorboard-callback",level:3},{value:"ResNetV2 50 vs EfficientNetB0 vs EfficientNetB4",id:"resnetv2-50-vs-efficientnetb0-vs-efficientnetb4",level:4},{value:"EfficientNetB0",id:"efficientnetb0",level:5},{value:"EfficientNetB4",id:"efficientnetb4",level:5},{value:"ResNetv2 50",id:"resnetv2-50",level:5},{value:"Summary",id:"summary",level:5}],c={toc:_};function d(e){let{components:a,...i}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,i,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Victoria Harbour, Hongkong",src:n(48857).Z,width:"1500",height:"618"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensorflow-transfer-learning"},"Tensorflow Transfer Learning"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#feature-extraction"},"Feature Extraction"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#visualizing-the-data"},"Visualizing the Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preprocessing-the-data"},"Preprocessing the Data")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensorboard-perfomance-tracking"},"TensorBoard Perfomance Tracking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#building-a-model-from-tensorflow-hub"},"Building a Model from Tensorflow Hub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-resnet-based-model"},"Creating a ResNet-based Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#training-the-resnet-model"},"Training the ResNet Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#creating-a-efficientnet-based-model"},"Creating a EfficientNet-based Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#training-the-efficientnet-model"},"Training the EfficientNet Model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#comparing-both-models"},"Comparing both Models")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#using-the-tensorboard-callback"},"Using the Tensorboard Callback"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#resnetv2-50-vs-efficientnetb0-vs-efficientnetb4"},"ResNetV2 50 vs EfficientNetB0 vs EfficientNetB4"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#efficientnetb0"},"EfficientNetB0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#efficientnetb4"},"EfficientNetB4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#resnetv2-50"},"ResNetv2 50")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#summary"},"Summary"))))))))))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"Tensor Constants, Variables and Attributes"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"Tensor Indexing, Expanding and Manipulations"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"Matrix multiplications, Squeeze, One-hot and Numpy")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Classification: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27"},"Non-linear Data and Activation Functions"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},"Model Evaluation and Performance Improvement"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"},"Multiclass Classification Problems")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Convolutional Neural Networks: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"},"Binary Image Classification"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},"Multiclass Image Classification")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Transfer Learning: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Feature Extraction"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},"Fine-Tuning"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16"},"Scaling")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Unsupervised Learning: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24"},"Autoencoders"))),(0,r.kt)("h1",{id:"tensorflow-transfer-learning"},"Tensorflow Transfer Learning"),(0,r.kt)("p",null,"Transfer Learning leverages a pretrained model that is already extremely performant on general feature detection. Our work will be to re-train this model on our specific dataset and add the specialized knowledge needed to solve our task."),(0,r.kt)("p",null,"Since the model is already pre-trained we can expect that we will only need about ",(0,r.kt)("inlineCode",{parentName:"p"},"10%")," of the amount of data that would be needed to train a fresh model."),(0,r.kt)("h2",{id:"feature-extraction"},"Feature Extraction"),(0,r.kt)("p",null,"Download a pre-trained model and set it's layers as un-trainable. The model is able to extract general features. All we need to do is adding a trainable dense layer (or a couple) at the end that we train to recognize our features among the features returned from the base model."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cd datasets"),(0,r.kt)("li",{parentName:"ul"},"wget ",(0,r.kt)("a",{parentName:"li",href:"https://storage.googleapis.com/ztm_tf_course/food_vision/10_food_classes_10_percent.zip"},"https://storage.googleapis.com/ztm_tf_course/food_vision/10_food_classes_10_percent.zip")),(0,r.kt)("li",{parentName:"ul"},"unzip 10_food_classes_10_percent.zip && rm 10_food_classes_10_percent.zip")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tree -L 2\n10_food_classes_10_percent\n\u251c\u2500\u2500 test\n\u2502\xa0\xa0 \u251c\u2500\u2500 chicken_curry\n\u2502\xa0\xa0 \u251c\u2500\u2500 chicken_wings\n\u2502\xa0\xa0 \u251c\u2500\u2500 fried_rice\n\u2502\xa0\xa0 \u251c\u2500\u2500 grilled_salmon\n\u2502\xa0\xa0 \u251c\u2500\u2500 hamburger\n\u2502\xa0\xa0 \u251c\u2500\u2500 ice_cream\n\u2502\xa0\xa0 \u251c\u2500\u2500 pizza\n\u2502\xa0\xa0 \u251c\u2500\u2500 ramen\n\u2502\xa0\xa0 \u251c\u2500\u2500 steak\n\u2502\xa0\xa0 \u2514\u2500\u2500 sushi\n\u2514\u2500\u2500 train\n    \u251c\u2500\u2500 chicken_curry\n    \u251c\u2500\u2500 chicken_wings\n    \u251c\u2500\u2500 fried_rice\n    \u251c\u2500\u2500 grilled_salmon\n    \u251c\u2500\u2500 hamburger\n    \u251c\u2500\u2500 ice_cream\n    \u251c\u2500\u2500 pizza\n    \u251c\u2500\u2500 ramen\n    \u251c\u2500\u2500 steak\n    \u2514\u2500\u2500 sushi\n")),(0,r.kt)("h3",{id:"visualizing-the-data"},"Visualizing the Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import datetime\nimport itertools\nimport matplotlib.image as mpimg\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport os\nimport pandas as pd\nimport pathlib\nimport random\nimport tensorflow as tf\nimport tensorflow_hub as hub\nfrom tensorflow.keras import Sequential\nfrom tensorflow.keras.layers import Dense, Flatten, Conv2D, MaxPool2D, Activation, Rescaling, RandomFlip, RandomRotation, RandomZoom, RandomContrast, RandomBrightness\nfrom tensorflow.keras.optimizers import Adam\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\nfrom tensorflow.keras.utils import image_dataset_from_directory\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# check if you have GPU support\ntf.config.list_physical_devices('GPU')\n# [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]\n\n# physical_devices = tf.config.list_physical_devices('GPU')\n# for device in physical_devices:\n#   tf.config.experimental.set_memory_growth(device, True)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# set directories\ntraining_directory = \"../datasets/10_food_classes_10_percent/train/\"\ntesting_directory = \"../datasets/10_food_classes_10_percent/test/\"\n\n# get class names\ndata_dir = pathlib.Path(training_directory)\nclass_names = np.array(sorted([item.name for item in data_dir.glob('*')]))\nlen(class_names), class_names \n\n# the data set has 10 classes:\n# (10,\n#  array(['chicken_curry', 'chicken_wings', 'fried_rice', 'grilled_salmon',\n#         'hamburger', 'ice_cream', 'pizza', 'ramen', 'steak', 'sushi'],\n#        dtype='<U14'))\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# visualizing the dataset\n## display random images\ndef view_random_image(target_dir, target_class):\n    target_folder = str(target_dir) + \"/\" + target_class\n    random_image = random.sample(os.listdir(target_folder), 1)\n    \n    img = mpimg.imread(target_folder + \"/\" + random_image[0])\n    plt.imshow(img)\n    plt.title(str(target_class) + str(img.shape))\n    plt.axis(\"off\")\n    \n    return tf.constant(img)\n\nfig = plt.figure(figsize=(12, 6))\nplot1 = fig.add_subplot(1, 2, 1)\nplot1.title.set_text(f'Class: {class_names[0]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[0])\nplot2 = fig.add_subplot(1, 2, 2)\nplot2.title.set_text(f'Class: {class_names[1]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[1])\n\nfig = plt.figure(figsize=(12, 6))\nplot3 = fig.add_subplot(1, 2, 1)\nplot3.title.set_text(f'Class: {class_names[2]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[2])\nplot4 = fig.add_subplot(1, 2, 2)\nplot4.title.set_text(f'Class: {class_names[3]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[3])\n\nfig = plt.figure(figsize=(12, 6))\nplot5 = fig.add_subplot(1, 2, 1)\nplot5.title.set_text(f'Class: {class_names[4]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[4])\nplot6 = fig.add_subplot(1, 2, 2)\nplot6.title.set_text(f'Class: {class_names[5]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[5])\n\nfig = plt.figure(figsize=(12, 6))\nplot7 = fig.add_subplot(1, 2, 1)\nplot7.title.set_text(f'Class: {class_names[6]}')\npizza_image = view_random_image(target_dir = training_directory, target_class=class_names[6])\nplot8 = fig.add_subplot(1, 2, 2)\nplot8.title.set_text(f'Class: {class_names[7]}')\nsteak_image = view_random_image(target_dir = training_directory, target_class=class_names[7])\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(41411).Z,width:"950",height:"465"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(10863).Z,width:"950",height:"359"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(81679).Z,width:"950",height:"465"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(56861).Z,width:"950",height:"465"})),(0,r.kt)("h3",{id:"preprocessing-the-data"},"Preprocessing the Data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"SEED = 42\nBATCH_SIZE = 16\nIMG_SHAPE = (224, 224)\n\ntraining_data = image_dataset_from_directory(training_directory,\n                                              labels='inferred',\n                                              label_mode='categorical',\n                                              seed=SEED,\n                                              shuffle=True,\n                                              image_size=IMG_SHAPE,\n                                              batch_size=BATCH_SIZE)\n\ntesting_data = image_dataset_from_directory(testing_directory,\n                                              labels='inferred',\n                                              label_mode='categorical',\n                                              seed=SEED,\n                                              shuffle=True,\n                                              image_size=IMG_SHAPE,\n                                              batch_size=BATCH_SIZE)\n\n\n# this time we only work with 10% of the training dataset\n# Found 750 files belonging to 10 classes.\n# Found 2500 files belonging to 10 classes.\n")),(0,r.kt)("h3",{id:"tensorboard-perfomance-tracking"},"TensorBoard Perfomance Tracking"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# create a callback to track experiments in TensorBoard\ndef create_tensorboard_callback(dir_name, experiment_name):\n    # log progress to log directory\n    log_dir = dir_name + "/" + experiment_name + "/" + datetime.datetime.now().strftime("%Y%m%d-%H%M%S")\n    tensorboard_callback = tf.keras.callbacks.TensorBoard(log_dir=log_dir, histogram_freq=1)\n    print(f"Saving TensorBoard Log to: {log_dir}")\n    return tensorboard_callback\n')),(0,r.kt)("h3",{id:"building-a-model-from-tensorflow-hub"},"Building a Model from Tensorflow Hub"),(0,r.kt)("p",null,"Pick a well performing model from the ",(0,r.kt)("a",{parentName:"p",href:"https://paperswithcode.com/task/image-classification"},"Image Classification Leaderboard")," and try to find it on:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tfhub.dev/s?module-type=image-classification,image-feature-vector&network-architecture=efficientnet-b0,resnet-v2-50&tf-version=tf2"},"Tensorflow Hub"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tfhub.dev/tensorflow/efficientnet/b0/feature-vector/1"},"EfficientNetB0 (feature-vector)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://tfhub.dev/google/imagenet/resnet_v2_50/feature_vector/5"},"ResNetv250 (feature_vector)"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# model comparison\nresnet_model_url = 'https://tfhub.dev/google/imagenet/resnet_v2_50/feature_vector/5'\nefficientnet_model_url = 'https://tfhub.dev/tensorflow/efficientnet/b0/feature-vector/1'\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# add image augmentations (optional)\n# was needed before - but the pre-trained model\n# usually does not need huge/augmented datasets\ndata_augmentation_layer = Sequential([\n    RandomFlip(\"horizontal_and_vertical\"),\n    RandomRotation(0.2),\n    RandomZoom(0.1),\n    RandomContrast(0.2),\n    RandomBrightness(0.2)\n])\n\n# helper function to create a model\ndef create_model(model_url, num_classes):\n    # download pre-trained model as a keras layer\n    feature_extractor_layer = hub.KerasLayer(model_url,\n                                             trainable=False,\n                                             name='feature_extractor_layer')\n    \n    # create sequential model\n    model = tf.keras.Sequential([\n        Rescaling(1./255, input_shape=IMG_SHAPE+(3,)),\n        # data_augmentation_layer,\n        feature_extractor_layer,\n        tf.keras.layers.Dense(num_classes, activation='softmax', name='output_layer')\n    ])\n\n    return model\n")),(0,r.kt)("h3",{id:"creating-a-resnet-based-model"},"Creating a ResNet-based Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'resnet_model = create_model(resnet_model_url, len(class_names))\n\nresnet_model.compile(loss="categorical_crossentropy",\n                     optimizer=Adam(learning_rate=1e-3),\n                     metrics=["accuracy"])\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'resnet_model.summary()\n\n# Model: "sequential_1"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  rescaling (Rescaling)       (None, 224, 224, 3)       0         \n#  feature_extractor_layer (Ke (None, 2048)             23564800  \n#  rasLayer)\n#  output_layer (Dense)        (None, 10)                20490\n# =================================================================\n# Total params: 23,585,290\n# Trainable params: 20,490\n# Non-trainable params: 23,564,800\n# _________________________________________________________________\n')),(0,r.kt)("h3",{id:"training-the-resnet-model"},"Training the ResNet Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tf.random.set_seed(SEED)\n# fitting the model\nhistory_resnet_model = resnet_model.fit(training_data, epochs=5,\n                            steps_per_epoch=len(training_data),\n                            validation_data=testing_data,\n                            validation_steps=len(testing_data))\n\n# Epoch 5/5\n# 15s 325ms/step - loss: 0.2652 - accuracy: 0.9560 - val_loss: 0.6500 - val_accuracy: 0.7836\n")),(0,r.kt)("h3",{id:"creating-a-efficientnet-based-model"},"Creating a EfficientNet-based Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"efficientnet_model = create_model(efficientnet_model_url, len(class_names))\n\nefficientnet_model.compile(loss='categorical_crossentropy',\n                    optimizer=Adam(learning_rate=1e-3),\n                    metrics=['accuracy'])\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'efficientnet_model.summary()\n\n# Model: "sequential_2"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  rescaling_1 (Rescaling)     (None, 224, 224, 3)       0         \n#  feature_extractor_layer (Ke (None, 1280)             4049564   \n#  rasLayer)                                                       \n#  output_layer (Dense)        (None, 10)                12810     \n# =================================================================\n# Total params: 4,062,374\n# Trainable params: 12,810\n# Non-trainable params: 4,049,564\n# _________________________________________________________________\n')),(0,r.kt)("h3",{id:"training-the-efficientnet-model"},"Training the EfficientNet Model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"tf.random.set_seed(SEED)\n# fitting the model\nhistory_efficientnet_model = efficientnet_model.fit(training_data, epochs=15,\n                            steps_per_epoch=len(training_data),\n                            validation_data=testing_data,\n                            validation_steps=len(testing_data))\n\n# Epoch 15/15\n# 11s 228ms/step - loss: 0.1133 - accuracy: 0.9920 - val_loss: 0.3779 - val_accuracy: 0.8828\n")),(0,r.kt)("h3",{id:"comparing-both-models"},"Comparing both Models"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# plotting the loss curves\nfig, axes = plt.subplots(nrows=1, ncols=2, figsize=(12, 6))\npd.DataFrame(history_resnet_model.history).plot(ax=axes[0], title="Resnet Model (Multiclass)")\npd.DataFrame(history_efficientnet_model.history).plot(ax=axes[1], title="EfficientNet Model (Multiclass)")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(9265).Z,width:"981",height:"528"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Plot the validation and training accuracy separately\ndef plot_accuracy_curves(history1, title1, history2, title2):\n  accuracy1 = history1.history['accuracy']\n  val_accuracy1 = history1.history['val_accuracy']\n  epochs1 = range(len(history1.history['accuracy']))\n\n  accuracy2 = history2.history['accuracy']\n  val_accuracy2 = history2.history['val_accuracy']\n  epochs2 = range(len(history2.history['accuracy']))\n\n  # Plot accuracy\n  plt.figure(figsize=(12, 12))\n    \n  plt.subplot(2, 2, 1)\n  plt.plot(epochs1, accuracy1, label='training_accuracy')\n  plt.plot(epochs1, val_accuracy1, label='val_accuracy')\n  plt.title(title1)\n  plt.xlabel('Epochs')\n  plt.legend();\n\n  plt.subplot(2, 2, 2)\n  plt.plot(epochs2, accuracy2, label='training_accuracy')\n  plt.plot(epochs2, val_accuracy2, label='val_accuracy')\n  plt.title(title2)\n  plt.xlabel('Epochs')\n  plt.legend();\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# plotting the accuracy curves\nplot_accuracy_curves(history1=history_resnet_model,\n                     title1="Resnet Model",\n                     history2=history_efficientnet_model,\n                     title2="EfficientNet Model")\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(86401).Z,width:"981",height:"505"})),(0,r.kt)("p",null,"The accuracy of the EfficientNet model is even slightly better than the accuracy of the ResNet Model. There are several EfficientNet models to pick from:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(36549).Z,width:"792",height:"634"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Image source :: ",(0,r.kt)("a",{parentName:"em",href:"https://arxiv.org/abs/1905.11946"},"EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks"))),(0,r.kt)("p",null,"The higher the amount of parameters become the less ressource efficient a training tends to become. The Optimum seems to be around the ",(0,r.kt)("inlineCode",{parentName:"p"},"B4")," model."),(0,r.kt)("h3",{id:"using-the-tensorboard-callback"},"Using the Tensorboard Callback"),(0,r.kt)("h4",{id:"resnetv2-50-vs-efficientnetb0-vs-efficientnetb4"},"ResNetV2 50 vs EfficientNetB0 vs EfficientNetB4"),(0,r.kt)("p",null,"Let's compare the trained ",(0,r.kt)("inlineCode",{parentName:"p"},"B0")," model with the ",(0,r.kt)("inlineCode",{parentName:"p"},"B4")," (and ",(0,r.kt)("inlineCode",{parentName:"p"},"ResNetv2 50"),"):"),(0,r.kt)("h5",{id:"efficientnetb0"},"EfficientNetB0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# building and training the __EfficientNet B0__ model\nefficientnet0_model_url = 'https://tfhub.dev/tensorflow/efficientnet/b0/feature-vector/1'\n\nefficientnet0_model = create_model(efficientnet0_model_url, len(class_names))\n\nefficientnet0_model.compile(loss='categorical_crossentropy',\n                    optimizer=Adam(learning_rate=1e-3),\n                    metrics=['accuracy'])\n\ntf.random.set_seed(SEED)\n# fitting the model\nhistory_efficientnet0_model = efficientnet0_model.fit(training_data, epochs=15,\n        callbacks=create_tensorboard_callback(dir_name='../tensorboard/efficientnet',\n        experiment_name='resnet_b0'),\n        steps_per_epoch=len(training_data),\n        validation_data=testing_data,\n        validation_steps=len(testing_data))\n\n# Epoch 15/15\n# 13s 284ms/step - loss: 0.1126 - accuracy: 0.9920 - val_loss: 0.3746 - val_accuracy: 0.8836\n")),(0,r.kt)("h5",{id:"efficientnetb4"},"EfficientNetB4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# building and training the __EfficientNet B4__ model\nefficientnet4_model_url = 'https://tfhub.dev/tensorflow/efficientnet/b4/feature-vector/1'\n\nefficientnet4_model = create_model(efficientnet4_model_url, len(class_names))\n\nefficientnet4_model.compile(loss='categorical_crossentropy',\n                    optimizer=Adam(learning_rate=1e-3),\n                    metrics=['accuracy'])\n\ntf.random.set_seed(SEED)\n# fitting the model\nhistory_efficientnet4_model = efficientnet4_model.fit(training_data, epochs=15,\n        callbacks=create_tensorboard_callback(dir_name='../tensorboard/efficientnet',\n        experiment_name='resnet_b4'),\n        steps_per_epoch=len(training_data),\n        validation_data=testing_data,\n        validation_steps=len(testing_data))\n\n# Epoch 15/15\n# 33s 711ms/step - loss: 0.1176 - accuracy: 0.9893 - val_loss: 0.4109 - val_accuracy: 0.8648\n")),(0,r.kt)("h5",{id:"resnetv2-50"},"ResNetv2 50"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# building and training the __ResNetv2 50__ model\nresnet2_50_model_url = 'https://tfhub.dev/google/imagenet/resnet_v2_50/feature_vector/5'\n\nresnet2_50_model = create_model(resnet2_50_model_url, len(class_names))\n\nresnet2_50_model.compile(loss=\"categorical_crossentropy\",\n                     optimizer=Adam(learning_rate=1e-3),\n                     metrics=[\"accuracy\"])\n\ntf.random.set_seed(SEED)\n# re-running the resnet training\nhistory_resnet_model = resnet_model.fit(training_data, epochs=15,\n        callbacks=create_tensorboard_callback(dir_name='../tensorboard/resnet',\n        experiment_name='resnet_v2_50'),\n        steps_per_epoch=len(training_data),\n        validation_data=testing_data,\n        validation_steps=len(testing_data))\n\n# Epoch 15/15\n# 19s 405ms/step - loss: 0.0056 - accuracy: 1.0000 - val_loss: 0.6888 - val_accuracy: 0.8028\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'efficientnet0_model.summary()\n\n# Model: "sequential_3"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  rescaling_2 (Rescaling)     (None, 224, 224, 3)       0\n#  feature_extractor_layer (Ke  (None, 1280)             4049564   \n#  rasLayer)\n#  output_layer (Dense)        (None, 10)                12810\n# =================================================================\n# Total params: 4,062,374\n# Trainable params: 12,810\n# Non-trainable params: 4,049,564\n# _________________________________________________________________\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'efficientnet4_model.summary()\n\n# Model: "sequential_4"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  rescaling_3 (Rescaling)     (None, 224, 224, 3)       0\n#  feature_extractor_layer (Ke  (None, 1792)             17673816  \n#  rasLayer)\n#  output_layer (Dense)        (None, 10)                17930     \n# =================================================================\n# Total params: 17,691,746\n# Trainable params: 17,930\n# Non-trainable params: 17,673,816\n# _________________________________________________________________\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'resnet2_50_model.summary()\n\n# Model: "sequential_5"\n# _________________________________________________________________\n#  Layer (type)                Output Shape              Param #   \n# =================================================================\n#  rescaling_4 (Rescaling)     (None, 224, 224, 3)       0\n#  feature_extractor_layer (Ke  (None, 2048)             23564800  \n#  rasLayer)\n#  output_layer (Dense)        (None, 10)                20490    \n# =================================================================\n# Total params: 23,585,290\n# Trainable params: 20,490\n# Non-trainable params: 23,564,800\n# _________________________________________________________________\n')),(0,r.kt)("h5",{id:"summary"},"Summary"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EfficientNetB0",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Trainable params: ",(0,r.kt)("em",{parentName:"li"},"12,810")),(0,r.kt)("li",{parentName:"ul"},"Non-trainable params: ",(0,r.kt)("em",{parentName:"li"},"4,049,564")),(0,r.kt)("li",{parentName:"ul"},"Training time per epoch: ",(0,r.kt)("strong",{parentName:"li"},"13s")),(0,r.kt)("li",{parentName:"ul"},"Results (15 epochs): val",(0,r.kt)("em",{parentName:"li"},"loss: _0.3746")," - val_accuracy: ",(0,r.kt)("strong",{parentName:"li"},"0.8836")))),(0,r.kt)("li",{parentName:"ul"},"EfficientNetB4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Trainable params: ",(0,r.kt)("em",{parentName:"li"},"17,930")),(0,r.kt)("li",{parentName:"ul"},"Non-trainable params: ",(0,r.kt)("em",{parentName:"li"},"17,673,816")),(0,r.kt)("li",{parentName:"ul"},"Training time per epoch: ",(0,r.kt)("strong",{parentName:"li"},"33s")),(0,r.kt)("li",{parentName:"ul"},"Results (15 epochs): val",(0,r.kt)("em",{parentName:"li"},"loss: _0.4109")," - val_accuracy: ",(0,r.kt)("strong",{parentName:"li"},"0.8648")))),(0,r.kt)("li",{parentName:"ul"},"ResNet50 v2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Trainable params: ",(0,r.kt)("em",{parentName:"li"},"20,490")),(0,r.kt)("li",{parentName:"ul"},"Non-trainable params: ",(0,r.kt)("em",{parentName:"li"},"23,564,800")),(0,r.kt)("li",{parentName:"ul"},"Training time per epoch: ",(0,r.kt)("strong",{parentName:"li"},"19s")),(0,r.kt)("li",{parentName:"ul"},"Results (15 epochs): val",(0,r.kt)("em",{parentName:"li"},"loss: _0.6888")," - val_accuracy: ",(0,r.kt)("strong",{parentName:"li"},"0.8028"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Load TensorBoard\n%load_ext tensorboard\n%tensorboard --logdir '../tensorboard/'\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transfer Learning",src:n(44990).Z,width:"854",height:"797"})))}d.isMDXComponent=!0},36549:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Efficientnet_vs_Resnet-93a18e710cf43d2d54f3602194a20dc1.png"},44990:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Efficientnet_vs_Resnet_Tensorboard-656d6d735f37c50dd372c22cf1da1b89.png"},41411:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Tensorflow_Transfer_Learning_01-95655b5104f8a14d6369e79525690fa3.png"},10863:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Tensorflow_Transfer_Learning_02-ba2bd612201da3c5e4079ba471f9a66e.png"},81679:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Tensorflow_Transfer_Learning_03-bb2ec4a2e51eedb808ec842b941fd014.png"},56861:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Tensorflow_Transfer_Learning_04-c13893505b47f1d070de4284e1139f19.png"},9265:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Tensorflow_Transfer_Learning_05-c6d6479928146a415471552dea19c7fc.png"},86401:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/04_Tensorflow_Transfer_Learning_06-b6087e8b28e3c56a3ea0ead3ec3c1423.png"},48857:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0617c01f21d40c2f06bb85d06aa2619b.jpg"}}]);