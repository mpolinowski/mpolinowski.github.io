"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[60471],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(f,s(s({ref:n},u),{},{components:t})):a.createElement(f,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8706:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:4660,slug:"2023-02-22",title:"Tensorflow 2 - An (Re)Introduction 2023 (3)",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Matrix multiplications, Squeeze, One-hot and Numpy"},s=void 0,i={unversionedId:"IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/index",id:"IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/index",title:"Tensorflow 2 - An (Re)Introduction 2023 (3)",description:"Matrix multiplications, Squeeze, One-hot and Numpy",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3",slug:"/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4660,frontMatter:{sidebar_position:4660,slug:"2023-02-22",title:"Tensorflow 2 - An (Re)Introduction 2023 (3)",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Matrix multiplications, Squeeze, One-hot and Numpy"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow 2 - Neural Network Regression",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},next:{title:"Tensorflow 2 - An (Re)Introduction 2023 (2)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"}},l={},p=[{value:"Tensorflow Fundamentals",id:"tensorflow-fundamentals",level:2},{value:"Matrix Multiplication",id:"matrix-multiplication",level:3},{value:"Reshape",id:"reshape",level:3},{value:"Transpose",id:"transpose",level:3},{value:"Dot-Product",id:"dot-product",level:3},{value:"Squeeze",id:"squeeze",level:3},{value:"One-hot Encoding",id:"one-hot-encoding",level:3},{value:"Square, Square Root and Log",id:"square-square-root-and-log",level:3},{value:"Tensors and Numpy Arrays",id:"tensors-and-numpy-arrays",level:3}],u={toc:p};function d(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mong Kok, Hong Kong",src:t(51207).Z,width:"2830",height:"1272"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensorflow-fundamentals"},"Tensorflow Fundamentals"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#matrix-multiplication"},"Matrix Multiplication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reshape"},"Reshape")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transpose"},"Transpose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#dot-product"},"Dot-Product")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#squeeze"},"Squeeze")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#one-hot-encoding"},"One-hot Encoding")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#square-square-root-and-log"},"Square, Square Root and Log")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#tensors-and-numpy-arrays"},"Tensors and Numpy Arrays"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-2023"},"Github Repository")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See also:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fun, fun, tensors: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-19-tensorflow-introduction/2023-02-19"},"Tensor Constants, Variables and Attributes"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-21-tensorflow-tensors-2/2023-02-21"},"Tensor Indexing, Expanding and Manipulations"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-22-tensorflow-tensors-3/2023-02-22"},"Matrix multiplications, Squeeze, One-hot and Numpy")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Regression: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-23-tensorflow-neural-network-regression/2023-02-23"},"Building a Regression Model"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-24-tensorflow-neural-network-regression-evaluation/2023-02-24"},"Model Evaluation"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-25-tensorflow-neural-network-regression-experiments/2023-02-25"},"Model Optimization"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-real-dataset/2023-02-26"},'Working with a "Real" Dataset'),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-26-tensorflow-neural-network-regression-data-preprocessing/2023-02-26"},"Feature Scaling")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Neural Network Classification: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-27-tensorflow-neural-network-classification/2023-02-27"},"Non-linear Data and Activation Functions"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-02-28-tensorflow-neural-network-classification-model-evaluation/2023-02-28"},"Model Evaluation and Performance Improvement"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-02-tensorflow-neural-network-multi-classification/2023-03-02"},"Multiclass Classification Problems")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Convolutional Neural Networks: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-03-tensorflow-convolutional-neural-network-binary-classifications/2023-03-03"},"Binary Image Classification"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-05-tensorflow-convolutional-neural-network-multiclass-classifications/2023-03-05"},"Multiclass Image Classification")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Transfer Learning: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-06-tensorflow-transfer-learning-feature-extraction/2023-03-06"},"Feature Extraction"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-11-tensorflow-transfer-learning-fine-tuning/2023-03-11"},"Fine-Tuning"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-16-tensorflow-transfer-learning-scaling/2023-03-16"},"Scaling")),(0,r.kt)("li",{parentName:"ul"},"Tensorflow 2 - Unsupervised Learning: ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-24-tensorflow-unsupervised-learning-autoencoders/2023-03-24"},"Autoencoder Feature Detection"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-autoencoders-super-resolution/2023-03-26"},"Autoencoder Super-Resolution"),", ",(0,r.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-03-26-tensorflow-unsupervised-learning-generative-adversial-networks/2023-03-26"},"Generative Adverserial Networks"))),(0,r.kt)("h2",{id:"tensorflow-fundamentals"},"Tensorflow Fundamentals"),(0,r.kt)("h3",{id:"matrix-multiplication"},"Matrix Multiplication"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[[2, 4],    [[2, 4],\n [3, 5]]     [3, 5]]\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"tensor = tf.constant([[2, 4],\n                       [3, 5]])\n\nprint(tensor)\n# tf.Tensor(\n# [[2 4]\n#  [3 5]], shape=(2, 2), dtype=int32)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tensorflow 2 - An (Re)Introduction 2023",src:t(37518).Z,width:"1564",height:"219"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"tf.linalg.matmul")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# matrix multiplications\nresult = tf.matmul(tensor, tensor)\nprint(result)\n# tf.Tensor(\n# [[16 28]\n#  [21 37]], shape=(2, 2), dtype=int32)\n")),(0,r.kt)("p",null,"To multiply two matrices they:"),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ol"},"Need to have matching inner dimensions (first row dim of 1st matrix = first col dim of 2nd matrix). e.g.:"))),(0,r.kt)("p",null,"[3 x ",(0,r.kt)("strong",{parentName:"p"},"3"),"]"," x ","[",(0,r.kt)("strong",{parentName:"p"},"3")," x 2]"),(0,r.kt)("p",null,"To multiply matrices that don't comply with this rule they need to be reshaped, e.g.:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# multiplying matrices with mis-matched shape\ntensor1 = tf.constant([[1, 2],\n                        [3, 4],\n                        [5, 6]])\n\ntensor2 = tf.constant([[1, 2],\n                        [3, 4],\n                        [5, 6]])\n\n# matrix multiplications\nresult = tf.matmul(tensor1, tensor2)\n# Matrix size-incompatible: In[0]: [3,2], In[1]: [3,2] [Op:MatMul]\n")),(0,r.kt)("h3",{id:"reshape"},"Reshape"),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},"tf.reshape()")," to make both matrices compatible - ",(0,r.kt)("inlineCode",{parentName:"p"},"(3, 2)")," x ",(0,r.kt)("inlineCode",{parentName:"p"},"(2, 3)"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# reshape `tensor2` to make them compatible:\ntensor3 = tf.reshape(tensor2, shape=(2, 3))\nprint(tensor3)\n# tf.Tensor(\n# [[1 2 3]\n#  [4 5 6]], shape=(2, 3), dtype=int32)\n\n# and try again\nresult = tf.matmul(tensor1, tensor3)\nprint(result)\n# tf.Tensor(\n# [[ 9 12 15]\n#  [19 26 33]\n#  [29 40 51]], shape=(3, 3), dtype=int32)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("ol",{parentName:"blockquote",start:2},(0,r.kt)("li",{parentName:"ol"},"and the resulting matrix has the shape of the outer dimensions"))),(0,r.kt)("p",null,"In the example above we multiplied ",(0,r.kt)("inlineCode",{parentName:"p"},"tensor1")," with a shape of ",(0,r.kt)("inlineCode",{parentName:"p"},"[3, 2]")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"tensor3")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"[2, 3]"),". So the resulting Tensor has a shape of ",(0,r.kt)("inlineCode",{parentName:"p"},"[3, 3]"),"."),(0,r.kt)("p",null,"When you reshape ",(0,r.kt)("inlineCode",{parentName:"p"},"tensor1")," instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"tensor2")," to make the multiplication work you end up with a tensor of shape ",(0,r.kt)("inlineCode",{parentName:"p"},"[2, 2]"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# reshape `tensor1` to make them compatible:\ntensor4 = tf.reshape(tensor1, shape=(2, 3))\nprint(tensor4)\n# tf.Tensor(\n# [[1 2 3]\n#  [4 5 6]], shape=(2, 3), dtype=int32)\n\n# and try again\nresult = tf.matmul(tensor4, tensor2)\nprint(result)\n# tf.Tensor(\n# [[22 28]\n#  [49 64]], shape=(2, 2), dtype=int32)\n")),(0,r.kt)("h3",{id:"transpose"},"Transpose"),(0,r.kt)("p",null,"The transpose function flips the axis of our tensor instead of shuffling the it's elements to get the right shape with the re-shape function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# transpose - instead of re-shape -`tensor1` to make them compatible:\ntensor5 = tf.transpose(tensor1)\nprint(tensor5)\n# tf.Tensor(\n# [[1 3 5]\n#  [2 4 6]], shape=(2, 3), dtype=int32)\n\n# and try again\nresult = tf.matmul(tensor5, tensor2)\nprint(result)\n# tf.Tensor(\n# [[35 44]\n#  [44 56]], shape=(2, 2), dtype=int32)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Original Tensor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"tf.Tensor(\n  [[1, 2],\n   [3, 4],\n   [5, 6]])\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Re-shaped Tensor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"tf.Tensor(\n[[1 2 3]\n [4 5 6]], shape=(2, 3), dtype=int32)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transposed Tensor"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"tf.Tensor(\n[[1 3 5]\n [2 4 6]], shape=(2, 3), dtype=int32)\n")),(0,r.kt)("h3",{id:"dot-product"},"Dot-Product"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"tf.tensordot()")," allows us to perform the same operation like with ",(0,r.kt)("em",{parentName:"p"},"tf.matmul()")," - but here we are able to define the axes we want to use for the multiplication:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# dot-product\nresult = tf.tensordot(tensor5, tensor2, axes=1)\nprint(result)\n# tf.Tensor(\n# [[35 44]\n#  [44 56]], shape=(2, 2), dtype=int32)\n")),(0,r.kt)("h3",{id:"squeeze"},"Squeeze"),(0,r.kt)("p",null,"Squueze allows us to remove axis with a size of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," from a tensor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# squeezing\ntf.random.set_seed(42)\n## create a tensor with additional dimensions\ntensor_unsqueezed = tf.constant(tf.random.uniform(shape=[42]), shape=[1, 1, 1, 1, 42])\nprint(tensor_unsqueezed)\n# tf.Tensor(\n# [[[[[0.6645621  0.44100678 0.3528825  0.46448255 0.03366041 0.68467236\n#      0.74011743 0.8724445  0.22632635 0.22319686 0.3103881  0.7223358\n#      0.13318717 0.5480639  0.5746088  0.8996835  0.00946367 0.5212307\n#      0.6345445  0.1993283  0.72942245 0.54583454 0.10756552 0.6767061\n#      0.6602763  0.33695042 0.60141766 0.21062577 0.8527372  0.44062173\n#      0.9485276  0.23752594 0.81179297 0.5263394  0.494308   0.21612847\n#      0.8457197  0.8718841  0.3083862  0.6868038  0.23764038 0.7817228 ]]]]], shape=(1, 1, 1, 1, 42), dtype=float32)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# remove all dimensions of size 1\ntensor_squeezed = tf.squeeze(tensor_unsqueezed)\nprint(tensor_squeezed)\n# tf.Tensor(\n# [0.6645621  0.44100678 0.3528825  0.46448255 0.03366041 0.68467236\n#  0.74011743 0.8724445  0.22632635 0.22319686 0.3103881  0.7223358\n#  0.13318717 0.5480639  0.5746088  0.8996835  0.00946367 0.5212307\n#  0.6345445  0.1993283  0.72942245 0.54583454 0.10756552 0.6767061\n#  0.6602763  0.33695042 0.60141766 0.21062577 0.8527372  0.44062173\n#  0.9485276  0.23752594 0.81179297 0.5263394  0.494308   0.21612847\n#  0.8457197  0.8718841  0.3083862  0.6868038  0.23764038 0.7817228 ], shape=(42,), dtype=float32)\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"shape=(1, 1, 1, 1, 42)")," => ",(0,r.kt)("inlineCode",{parentName:"p"},"shape=(42,)"))),(0,r.kt)("h3",{id:"one-hot-encoding"},"One-hot Encoding"),(0,r.kt)("p",null,"One hot encoding transforms categorical features to a format that works better with classification and regression algorithms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# one-hot encoding\n## create a list\na_list = [0, 1, 2, 3, 4]\n## encode\nprint(tf.one_hot(a_list, depth=5))\n# tf.Tensor(\n# [[1. 0. 0. 0. 0.]\n#  [0. 1. 0. 0. 0.]\n#  [0. 0. 1. 0. 0.]\n#  [0. 0. 0. 1. 0.]\n#  [0. 0. 0. 0. 1.]], shape=(5, 5), dtype=float32)\n")),(0,r.kt)("p",null,"Here we are starting with a list and it is turned into a tensor where the position of a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," assigns the corresponding class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[0, 1, 2, 3, 4]\n")),(0,r.kt)("p",null,"The first element of the list is a zero. So the this element belongs to class ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," which is represented by the value ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," below. For all other classes ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," - ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," the value is ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," [[1. 0. 0. 0. 0.]\n [0. 1. 0. 0. 0.]\n [0. 0. 1. 0. 0.]\n [0. 0. 0. 1. 0.]\n [0. 0. 0. 0. 1.]]\n")),(0,r.kt)("p",null,"We can also replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),"s and ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"s here with other values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"## encode and assign values\nprint(tf.one_hot(a_list, depth=5, on_value=100, off_value=-100))\n# tf.Tensor(\n# [[ 100 -100 -100 -100 -100]\n#  [-100  100 -100 -100 -100]\n#  [-100 -100  100 -100 -100]\n#  [-100 -100 -100  100 -100]\n#  [-100 -100 -100 -100  100]], shape=(5, 5), dtype=int32)\n")),(0,r.kt)("h3",{id:"square-square-root-and-log"},"Square, Square Root and Log"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},'# square, square root and log\ntensor_not_squared = tf.range(1, 10)\nprint(tensor_not_squared)\n# tf.Tensor([1 2 3 4 5 6 7 8 9], shape=(9,), dtype=int32)\n\n# square all values\ntensor_squared = tf.square(tensor_not_squared)\nprint(tensor_squared)\n# tf.Tensor([ 1  4  9 16 25 36 49 64 81], shape=(9,), dtype=int32)\n\n# square all values\ntensor_unsquared = tf.sqrt(tf.cast(tensor_squared, dtype="float16")) # needs non-int type\nprint(tensor_unsquared)\n# tf.Tensor([1. 2. 3. 4. 5. 6. 7. 8. 9.], shape=(9,), dtype=float16)\n\n# get log\ntensor_log = tf.math.log(tf.cast(tensor_unsquared, dtype="float16")) # needs float\nprint(tensor_log)\n# tf.Tensor([0.     0.6934 1.099  1.387  1.609  1.792  1.946  2.08   2.197 ], shape=(9,), dtype=float16)\n')),(0,r.kt)("h3",{id:"tensors-and-numpy-arrays"},"Tensors and Numpy Arrays"),(0,r.kt)("p",null,"Numpy array and Tensorflow tensors can be transformed into each other:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# numpy arrays\n## numpy array -> tensorflow tensor\ntf_np_array = tf.constant(np.array([1., 2., 3., 4., 5.]))\nprint(tf_np_array)\n# tf.Tensor([1. 2. 3. 4. 5.], shape=(5,), dtype=float64)\n\n## tensorflow tensor -> numpy array\nnp_tf_tensor = np.array(tf_np_array)\nprint(np_tf_tensor, type(np_tf_tensor))\n# [1. 2. 3. 4. 5.] <class 'numpy.ndarray'>\n\n## tensorflow tensor -> numpy array\n## just a different method\nnp_tf_tensor2 = tf_np_array.numpy()\nprint(np_tf_tensor2, type(np_tf_tensor2))\n# [1. 2. 3. 4. 5.] <class 'numpy.ndarray'>\n\n## extract a single value from a tensor\nmy_value = tf_np_array.numpy()[0]\nprint(my_value)\n# 1.0\n")),(0,r.kt)("p",null,"Note that the default types assigned differ depending on what you use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"## different default types!\nnumpy_tensor = tf.constant(np.array([1., 2., 3., 4., 5.]))\nprint(numpy_tensor)\n# tf.Tensor([1. 2. 3. 4. 5.], shape=(5,), dtype=float64)\n\ntf_tensor = tf.constant([1., 2., 3., 4., 5.])\nprint(tf_tensor)\n# tf.Tensor([1. 2. 3. 4. 5.], shape=(5,), dtype=float32)\n")),(0,r.kt)("p",null,"While Numpy offers a lot of functions that can be employed in data processing Tensorflow is able to make use of a GPU or TPU to accelerate the computation. For large datasets you should always Tensorflow tensors instead of Numpy arrays when possible:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"# make sure you have GPU/TPU support\nprint(tf.config.list_physical_devices())\n# [PhysicalDevice(name='/physical_device:CPU:0', device_type='CPU'), PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]\nprint(\"Num GPUs Available: \", len(tf.config.list_physical_devices('GPU')))\n# Num GPUs Available:  1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nvidia-smi\nWed Feb 22 15:33:18 2023       \n+-----------------------------------------------------------------------------+\n| NVIDIA-SMI 525.89.02    Driver Version: 525.89.02    CUDA Version: 12.0     |\n|-------------------------------+----------------------+----------------------+\n| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |\n| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |\n|                               |                      |               MIG M. |\n|===============================+======================+======================|\n|   0  NVIDIA GeForce ...  Off  | 00000000:01:00.0  On |                  N/A |\n|  0%   55C    P8    11W / 130W |    858MiB /  6144MiB |     20%      Default |\n|                               |                      |                  N/A |\n+-------------------------------+----------------------+----------------------+\n")))}d.isMDXComponent=!0},37518:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/Matrix_Multiplication_01-66f9788e4cb9d6b5a619c93633e8f0bd.png"},51207:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f80e63ee872dae25129198058ac93b4e.jpg"}}]);