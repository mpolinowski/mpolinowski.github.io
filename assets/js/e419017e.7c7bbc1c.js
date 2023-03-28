"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[94514],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=r.createContext({}),p=function(n){var e=r.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=p(n.components);return r.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,l=n.parentName,d=i(n,["components","mdxType","originalType","parentName"]),m=p(t),f=a,c=m["".concat(l,".").concat(f)]||m[f]||u[f]||o;return t?r.createElement(c,s(s({ref:e},d),{},{components:t})):r.createElement(c,s({ref:e},d))}));function f(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},47561:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={sidebar_position:4680,slug:"2023-02-19",title:"Tensorflow 2 - An (Re)Introduction 2023",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Tensor Constants, Variables and Attributes"},s=void 0,i={unversionedId:"IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/index",id:"IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/index",title:"Tensorflow 2 - An (Re)Introduction 2023",description:"Tensor Constants, Variables and Attributes",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction",slug:"/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4680,frontMatter:{sidebar_position:4680,slug:"2023-02-19",title:"Tensorflow 2 - An (Re)Introduction 2023",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Tensor Constants, Variables and Attributes"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - An (Re)Introduction 2023 (2)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},next:{title:"Keras for Tensorflow - VGG16 Network Architecture",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-18-keras-introduction-vgg16/2023-02-18"}},l={},p=[{value:"Tensorflow Fundamentals",id:"tensorflow-fundamentals",level:2},{value:"Installing Tensorflow and CUDA on Arch Linux",id:"installing-tensorflow-and-cuda-on-arch-linux",level:3},{value:"Tensor Constants",id:"tensor-constants",level:3},{value:"Tensor Variables",id:"tensor-variables",level:3},{value:"Random Tensors",id:"random-tensors",level:3},{value:"Numpy Arrays and Tensors",id:"numpy-arrays-and-tensors",level:3},{value:"Tensor Attributes",id:"tensor-attributes",level:3}],d={toc:p};function u(n){let{components:e,...o}=n;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mong Kok, Hong Kong",src:t(33167).Z,width:"2830",height:"1272"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tensorflow-fundamentals"},"Tensorflow Fundamentals"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installing-tensorflow-and-cuda-on-arch-linux"},"Installing Tensorflow and CUDA on Arch Linux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tensor-constants"},"Tensor Constants")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tensor-variables"},"Tensor Variables")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#random-tensors"},"Random Tensors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#numpy-arrays-and-tensors"},"Numpy Arrays and Tensors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tensor-attributes"},"Tensor Attributes"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-2023"},"Github Repository")),(0,a.kt)("p",null,"I have been entering the ML/AI field from the DevOps side - deploying pre-trained models using MLOps/AIOps toolchains. This allowed me to skip most of the basics like how to choose a pre-trained model (or build one yourself) and how to optimize prediction models when their performance start to vain in face of incoming fresh data? I would like to remedy that now."),(0,a.kt)("p",null,"I already ",(0,a.kt)("a",{parentName:"p",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-02-14-keras-introduction/2023-02-14"},"looked into Keras"),". Which became an integral part of Tensorflow with the ",(0,a.kt)("inlineCode",{parentName:"p"},"2.0")," update and is essential for building quick prototypes based on default pre-trained models and datasets. Now I am looking into Tensorflow itself - coding through ",(0,a.kt)("a",{parentName:"p",href:"https://tensorflow.google.cn"},"docs")," & ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mrdbourke/tensorflow-deep-learning"},"tutorials")," and example projects online."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"See also:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"Tensor Constants, Variables and Attributes"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"Tensor Indexing, Expanding and Manipulations"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"Matrix multiplications, Squeeze, One-hot and Numpy")),(0,a.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling")),(0,a.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Classification: ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27"},"Non-linear Data and Activation Functions"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},"Model Evaluation and Performance Improvement"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"},"Multiclass Classification Problems")),(0,a.kt)("li",{parentName:"ul"},"Tensorflow 2 - Convolutional Neural Networks: ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"},"Binary Image Classification"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},"Multiclass Image Classification")),(0,a.kt)("li",{parentName:"ul"},"Tensorflow 2 - Transfer Learning: ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Feature Extraction"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},"Fine-Tuning"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16"},"Scaling")),(0,a.kt)("li",{parentName:"ul"},"Tensorflow 2 - Unsupervised Learning: ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24"},"Autoencoder Feature Detection"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26"},"Autoencoder Super-Resolution"),", ",(0,a.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26"},"Generative Adverserial Networks"))),(0,a.kt)("h2",{id:"tensorflow-fundamentals"},"Tensorflow Fundamentals"),(0,a.kt)("h3",{id:"installing-tensorflow-and-cuda-on-arch-linux"},"Installing Tensorflow and CUDA on Arch Linux"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pacman -S cuda cudnn python-tensorflow-opt-cuda\n")),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("h3",{id:"tensor-constants"},"Tensor Constants"),(0,a.kt)("p",null,"Creating Tensors with ",(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/api_docs/python/tf/constant"},"tf.Constant()"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scalar"),": Value"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Vector"),": Value with a direction"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Matrix"),": 2d number array"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tensor"),": nd number array")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import tensorflow as tf\n# print(tf.__version__)\n# 2.11.0\n\n# create tensors with tf.constant()\nscalar = tf.constant(88, name='scalar')\nprint(scalar)\n# tf.Tensor(88, shape=(), dtype=int32)\nprint(scalar.ndim)\n# 0 dimensions\n\nvector = tf.constant([44, 88], name='vector')\nprint(vector)\n# tf.Tensor([44 88], shape=(2,), dtype=int32)\nprint(vector.ndim)\n# 1 dimensions\n\nmatrix = tf.constant([[44., 88.], [33., 55.]], shape=(2, 2), dtype=tf.float16, name='matrix')\nprint(matrix)\n# tf.Tensor(\n# [[44. 88.]\n#  [33. 55.]], shape=(2, 2), dtype=float16)\nprint(matrix.ndim)\n# 2 dimensions\n\ntensor = tf.constant([[[44, 88, 22, 66],\n                     [666, 222, 999, 333]],\n                     [[33, 11, 55, 77],\n                     [111, 888, 444, 111]]], shape=(4, 2, 2), dtype=tf.int16, name='tensor')\nprint(tensor)\n# tf.Tensor(\n# [[[ 44  88]\n#   [ 22  66]]\n\n#  [[666 222]\n#   [999 333]]\n\n#  [[ 33  11]\n#   [ 55  77]]\n\n#  [[111 888]\n#   [444 111]]], shape=(4, 2, 2), dtype=int16)\nprint(tensor.ndim)\n# 3 dimensions\n")),(0,a.kt)("h3",{id:"tensor-variables"},"Tensor Variables"),(0,a.kt)("p",null,"Creating Tensors with ",(0,a.kt)("a",{parentName:"p",href:"https://tensorflow.google.cn/api_docs/python/tf/Variable"},"tf.Variable()"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# create tensors with tf.Variable()\nconstant_tensor = tf.constant([44, 88], name='constant')\nprint(constant_tensor)\n# tf.Tensor([44 88], shape=(2,), dtype=int32)\n\nvariable_tensor = tf.Variable([44, 88], name='variable')\nprint(variable_tensor)\n# <tf.Variable 'variable:0' shape=(2,) dtype=int32, numpy=array([44, 88], dtype=int32)>\n\n## change values in tensor\nvariable_tensor[0].assign(77)\nprint(variable_tensor)\n# <tf.Variable 'variable:0' shape=(2,) dtype=int32, numpy=array([77, 88], dtype=int32)>\n\n# constant_tensor[0].assign(77)\n# AttributeError: 'tensorflow.python.framework.ops.EagerTensor' object has no attribute 'assign'\n")),(0,a.kt)("h3",{id:"random-tensors"},"Random Tensors"),(0,a.kt)("p",null,"Tensorflow initializes its weights with ",(0,a.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/api_docs/python/tf/random/uniform"},"Random Tensors"),". During a model training those tensors are then fitted to better represent the given dataset."),(0,a.kt)("p",null,"The following two examples generate values from a ",(0,a.kt)("strong",{parentName:"p"},"Normal")," and a ",(0,a.kt)("strong",{parentName:"p"},"Uniform Distribution"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# create random tensors with tf.random()\n## fixed seed for reproducibility\nrandom_tensor_normal = tf.random.Generator.from_seed(42)\n## Output 2x2 matrix of random values from a normal distribution\nrandom_tensor_normal = random_tensor_normal.normal(shape=(2, 2))\nprint(random_tensor_normal)\n# tf.Tensor(\n# [[-0.7565803  -0.06854702]\n#  [ 0.07595026 -1.2573844 ]], shape=(2, 2), dtype=float32)\n\n\n## fixed seed for reproducibility\nrandom_tensor_uniform = tf.random.Generator.from_seed(42)\n## Output 2x2 matrix of random values from a uniform distribution\nrandom_tensor_uniform = random_tensor_uniform.uniform(shape=(2, 2))\nprint(random_tensor_uniform)\n# tf.Tensor(\n# [[0.7493447  0.73561966]\n#  [0.45230794 0.49039817]], shape=(2, 2), dtype=float32)\n")),(0,a.kt)("p",null,"Those values are ",(0,a.kt)("em",{parentName:"p"},"pseudo random")," since we are using a ",(0,a.kt)("strong",{parentName:"p"},"fixed seed")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"42"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"## prove pseudo-randomness\nrandom_tensor_1 = tf.random.Generator.from_seed(42)\nrandom_tensor_1 = random_tensor_1.normal(shape=(2, 2))\nrandom_tensor_2 = tf.random.Generator.from_seed(42)\nrandom_tensor_2 = random_tensor_2.normal(shape=(2, 2))\nprint(random_tensor_1 == random_tensor_2)\n# tf.Tensor(\n# [[ True  True]\n#  [ True  True]], shape=(2, 2), dtype=bool)\n")),(0,a.kt)("p",null,"But it is possible to shuffle the order of those values within the tensor. This is generally used in data pre-processing when you need to make sure that your training/testing dataset is not in any particular order that might create an overfitting problem."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tf.random.shuffle()")," shuffles the values of a tensor around its first dimension:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"## shuffle order of generated values\nconstant_matrix = tf.constant([[44, 88],\n                       [77, 55],\n                       [1, 3]], name='constant')\n\nprint(constant_matrix)\n# tf.Tensor(\n# [[44 88]\n#  [77 55]\n#  [ 1  3]], shape=(3, 2), dtype=int32)\n\n## shuffle derives seed from both global and operation level\n## you have to set both to get the same shuffle on every run\n## tf.random.set_seed(42)\nshuffled_matrix = tf.random.shuffle(constant_matrix, seed=42, name='shuffled')\n                       \nprint(shuffled_matrix)\n# tf.Tensor(\n# [[ 1  3]\n#  [77 55]\n#  [44 88]], shape=(3, 2), dtype=int32)\n")),(0,a.kt)("h3",{id:"numpy-arrays-and-tensors"},"Numpy Arrays and Tensors"),(0,a.kt)("p",null,"Tensorflow has very similar function to Numpy. E.g. generating matrices with fixed ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," values can be done directly in Tensorflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# creating tensors with numpy\n## return tensors with `1` values\ntensor_one = tf.ones([3, 4], dtype=tf.int16)\nprint(tensor_one)\n# tf.Tensor(\n# [[1 1 1 1]\n#  [1 1 1 1]\n#  [1 1 1 1]], shape=(3, 4), dtype=int16)\n\n## return tensors with `0` values\ntensor_zero = tf.zeros([3, 4], dtype=tf.int16)\nprint(tensor_zero)\n# tf.Tensor(\n# [[0 0 0 0]\n#  [0 0 0 0]\n#  [0 0 0 0]], shape=(3, 4), dtype=int16)\n")),(0,a.kt)("p",null,"But sometimes you will need Numpy to preprocess your dataset. Once you have your data inside a Numpy array you will have to transform it into a Tensorflow tensor to proceed (the tensor can be processed on your GPU!):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"## turn numpy array into tensor\nnumpy_array = np.arange(1, 25, dtype=np.int16)\nprint(numpy_array)\n# [ 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24]\n\ntf_vector = tf.constant(numpy_array)\nprint(tf_vector)\n# tf.Tensor([ 1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24], shape=(24,), dtype=int16)\n\ntf_tensor = tf.constant(numpy_array, shape=(2, 3, 4))\nprint(tf_tensor)\n# tf.Tensor(\n# [[[ 1  2  3  4]\n#   [ 5  6  7  8]\n#   [ 9 10 11 12]]\n\n#  [[13 14 15 16]\n#   [17 18 19 20]\n#   [21 22 23 24]]], shape=(2, 3, 4), dtype=int16)\n")),(0,a.kt)("h3",{id:"tensor-attributes"},"Tensor Attributes"),(0,a.kt)("p",null,"Tensors are described by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Shape (",(0,a.kt)("inlineCode",{parentName:"li"},"tensor.shape"),")"),(0,a.kt)("li",{parentName:"ul"},"Rank (",(0,a.kt)("inlineCode",{parentName:"li"},"tensor.ndim"),")"),(0,a.kt)("li",{parentName:"ul"},"Axis or Dimension (",(0,a.kt)("inlineCode",{parentName:"li"},"tensor[0]"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tensor[:, 1]"),", ...)"),(0,a.kt)("li",{parentName:"ul"},"Size (",(0,a.kt)("inlineCode",{parentName:"li"},"tf.size(tensor)"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# getting tensor attributes\n## rank\n### number of tensor dimensions\n### example: create a rank 4 tensor\nrank_4_tensor = tf.zeros(shape=[2, 2, 2, 2])\nprint(rank_4_tensor)\n# tf.Tensor(\n# [[[[0. 0.]\n#    [0. 0.]]\n\n#   [[0. 0.]\n#    [0. 0.]]]\n\n\n#  [[[0. 0.]\n#    [0. 0.]]\n\n#   [[0. 0.]\n#    [0. 0.]]]], shape=(2, 2, 2, 2), dtype=float32)\nprint(rank_4_tensor.ndim)\n# 4\n\n## shape\n### number of elements of each dimension\nprint(rank_4_tensor.shape)\n# (2, 2, 2, 2)\n\n## axis\n### a selected dimension\nprint(rank_4_tensor[0])\n# tf.Tensor(\n# [[[0. 0.]\n#   [0. 0.]]\n\n#  [[0. 0.]\n#   [0. 0.]]], shape=(2, 2, 2), dtype=float32)\n\n## size\n### total number of items\nprint(tf.size(rank_4_tensor))\n# tf.Tensor(16, shape=(), dtype=int32)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'## bringing it all together:\nprint("INFO :: Datatype of every element:", rank_4_tensor.dtype)\nprint("INFO :: Number of dimensions (Rank):", rank_4_tensor.ndim)\nprint("INFO :: Number of Elements in Tensor:", tf.size(rank_4_tensor).numpy())\nprint("INFO :: Tensor shape:", rank_4_tensor.shape)\nprint("INFO :: Elements along 0 Axis:", rank_4_tensor.shape[0])\nprint("INFO :: Elements along last Axis:", rank_4_tensor.shape[-1])\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"INFO :: Datatype of every element: <dtype: 'float32'>\nINFO :: Number of dimensions (Rank): 4\nINFO :: Number of Elements in Tensor: 16\nINFO :: Tensor shape: (2, 2, 2, 2)\nINFO :: Elements along 0 Axis: 2\nINFO :: Elements along last Axis: 2\n")))}u.isMDXComponent=!0},33167:(n,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);