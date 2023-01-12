"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[84465],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),g=i,m=c["".concat(l,".").concat(g)]||c[g]||u[g]||n;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={sidebar_position:4800,slug:"2023-01-04",title:"Distributed training with TensorFlow",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Distribute training across multiple GPUs, multiple machines, or TPUs."},o=void 0,s={unversionedId:"IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy/index",id:"IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy/index",title:"Distributed training with TensorFlow",description:"Distribute training across multiple GPUs, multiple machines, or TPUs.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy",slug:"/IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy/2023-01-04",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy/2023-01-04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-01-04-tf-distributed-strategy/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4800,frontMatter:{sidebar_position:4800,slug:"2023-01-04",title:"Distributed training with TensorFlow",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Distribute training across multiple GPUs, multiple machines, or TPUs."},sidebar:"tutorialSidebar",previous:{title:"Data Version Control",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-05-dvc-model-version-control/2023-01-05"},next:{title:"Tensorflow Tensorboard",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-03-tf-tensorboard/2023-01-03"}},l={},d=[{value:"Types of Strategies",id:"types-of-strategies",level:2},{value:"MirroredStrategy",id:"mirroredstrategy",level:3},{value:"TPUStrategy",id:"tpustrategy",level:3},{value:"MultiWorkerMirroredStrategy",id:"multiworkermirroredstrategy",level:3},{value:"CentralStorageStrategy",id:"centralstoragestrategy",level:3},{value:"Implementation",id:"implementation",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guangzhou, China",src:r(63025).Z,width:"1500",height:"662"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#types-of-strategies"},"Types of Strategies"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mirroredstrategy"},"MirroredStrategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tpustrategy"},"TPUStrategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#multiworkermirroredstrategy"},"MultiWorkerMirroredStrategy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#centralstoragestrategy"},"CentralStorageStrategy")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#implementation"},"Implementation"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/tf-serving"},"Github Repository")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tf.distribute.Strategy")," is a TensorFlow API to distribute training across multiple GPUs, multiple machines, or TPUs. You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"tf.distribute.Strategy")," with very few changes to your code, because the underlying components of TensorFlow have been changed to become strategy-aware. This includes variables, layers, models, optimizers, metrics, summaries, and checkpoints."),(0,i.kt)("h2",{id:"types-of-strategies"},"Types of Strategies"),(0,i.kt)("p",null,"TensorFlow has the following strategy options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MirroredStrategy"),(0,i.kt)("li",{parentName:"ul"},"TPUStrategy"),(0,i.kt)("li",{parentName:"ul"},"MultiWorkerMirroredStrategy"),(0,i.kt)("li",{parentName:"ul"},"ParameterServerStrategy"),(0,i.kt)("li",{parentName:"ul"},"CentralStorageStrategy")),(0,i.kt)("h3",{id:"mirroredstrategy"},"MirroredStrategy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/guide/distributed_training#mirroredstrategy"},"tf.distribute.MirroredStrategy")," supports synchronous distributed training on multiple GPUs on one machine. It creates one replica per GPU device. Each variable in the model is mirrored across all the replicas. Together, these variables form a single conceptual variable called MirroredVariable. Efficient all-reduce algorithms are used to communicate the variable updates across the devices."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"mirrored_strategy = tf.distribute.MirroredStrategy()\n")),(0,i.kt)("p",null,"This will create a MirroredStrategy instance, which will use all the GPUs that are visible to TensorFlow, and NCCL\u2014as the cross-device communication."),(0,i.kt)("p",null,"If you wish to use only some of the GPUs on your machine, you can do so like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'mirrored_strategy = tf.distribute.MirroredStrategy(devices=["/gpu:0", "/gpu:1"])\n')),(0,i.kt)("h3",{id:"tpustrategy"},"TPUStrategy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/guide/distributed_training#tpustrategy"},"tf.distribute.TPUStrategy")," lets you run your TensorFlow training on Tensor Processing Units (TPUs). TPUs are Google's specialized ASICs designed to dramatically accelerate machine learning workloads. In terms of distributed training architecture, TPUStrategy is the same MirroredStrategy\u2014it implements synchronous distributed training. TPUs provide their own implementation of efficient all-reduce and other collective operations across multiple TPU cores, which are used in TPUStrategy."),(0,i.kt)("h3",{id:"multiworkermirroredstrategy"},"MultiWorkerMirroredStrategy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/guide/distributed_training#multiworkermirroredstrategy"},"tf.distribute.MultiWorkerMirroredStrategy")," is very similar to MirroredStrategy. It implements synchronous distributed training across multiple workers, each with potentially multiple GPUs. Similar to tf.distribute.MirroredStrategy, it creates copies of all variables in the model on each device across all workers."),(0,i.kt)("h3",{id:"centralstoragestrategy"},"CentralStorageStrategy"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/guide/distributed_training#centralstoragestrategy"},"tf.distribute.experimental.CentralStorageStrategy")," does synchronous training as well. Variables are not mirrored, instead they are placed on the CPU and operations are replicated across all local GPUs. If there is only one GPU, all variables and operations will be placed on that GPU."),(0,i.kt)("h2",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"I am going to use my ",(0,i.kt)("a",{parentName:"p",href:"/docs/IoT-and-Machine-Learning/AIOps/2023-01-02-tf-serve-own-models/2023-01-02"},"previous test")," and add the mirrored strategy to be able to distribute the training workload over multiple GPUs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"strategy = tf.distribute.MirroredStrategy()\n\nwith strategy.scope():\n  classifier = tf.keras.Sequential([\n    tf.keras.layers.Conv2D(32, (3,3), activation = 'relu', input_shape = (28,28,1)),\n    tf.keras.layers.MaxPooling2D(2,2),\n    tf.keras.layers.Conv2D(64, (3, 3), activation='relu'),\n    tf.keras.layers.Flatten(),\n    tf.keras.layers.Dense(64, activation = 'relu'),\n    tf.keras.layers.Dense(10, activation = 'softmax')\n  ])\n\n\n  classifier.summary()\n\n\n  classifier.compile(optimizer='adam', \n                loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),\n                metrics=[tf.keras.metrics.SparseCategoricalAccuracy()])\n")))}u.isMDXComponent=!0},63025:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-296769d73822f07b0ac5dc952f56bfa1.jpg"}}]);