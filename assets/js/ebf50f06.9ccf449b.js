"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[71536],{3905:(e,a,n)=>{n.d(a,{Zo:()=>m,kt:()=>_});var t=n(67294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},m=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),_=i,g=d["".concat(s,".").concat(_)]||d[_]||c[_]||r;return n?t.createElement(g,o(o({ref:a},m),{},{components:n})):t.createElement(g,o({ref:a},m))}));function _(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},97335:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=n(87462),i=(n(67294),n(3905));const r={sidebar_position:4420,slug:"2023-04-16",title:"3D Image Classification",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow","Keras"],description:"Learn how to train a 3D convolutional neural network (3D CNN) to predict presence of pneumonia."},o=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/index",id:"IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/index",title:"3D Image Classification",description:"Learn how to train a 3D convolutional neural network (3D CNN) to predict presence of pneumonia.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation",slug:"/IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/2023-04-16",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/2023-04-16",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"},{label:"Keras",permalink:"/docs/tags/keras"}],version:"current",sidebarPosition:4420,frontMatter:{sidebar_position:4420,slug:"2023-04-16",title:"3D Image Classification",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow","Keras"],description:"Learn how to train a 3D convolutional neural network (3D CNN) to predict presence of pneumonia."},sidebar:"tutorialSidebar",previous:{title:"(Re) Introduction to Tensorflow Natural Language Processing",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-19-tensorflow-natural-language-processing/2023-04-19"},next:{title:"Dimensionality Reduction for Image Segmentation",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/2023-04-14"}},s={},p=[{value:"Verify GPU Support",id:"verify-gpu-support",level:2},{value:"Import Dependencies",id:"import-dependencies",level:2},{value:"Import Dataset",id:"import-dataset",level:2},{value:"Visualize Dataset",id:"visualize-dataset",level:2},{value:"Data Pre-processing",id:"data-pre-processing",level:2},{value:"Normalization",id:"normalization",level:3},{value:"Train Test Split",id:"train-test-split",level:3},{value:"Data Augmentation",id:"data-augmentation",level:3},{value:"Data Loader",id:"data-loader",level:4},{value:"Visualizing Augmented Datasets",id:"visualizing-augmented-datasets",level:3},{value:"Building the Model",id:"building-the-model",level:2},{value:"Compile the Model",id:"compile-the-model",level:3},{value:"Callbacks",id:"callbacks",level:3},{value:"Model Training",id:"model-training",level:2},{value:"Visualizing Model Performance",id:"visualizing-model-performance",level:3},{value:"Loading Best Training Weights",id:"loading-best-training-weights",level:2},{value:"Make Predictions",id:"make-predictions",level:2}],m={toc:p};function c(e){let{components:a,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Victoria Harbour, Hongkong",src:n(2180).Z,width:"2385",height:"1034"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3d-image-classification"},"3D Image Classification"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#verify-gpu-support"},"Verify GPU Support")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#import-dependencies"},"Import Dependencies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#import-dataset"},"Import Dataset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visualize-dataset"},"Visualize Dataset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-pre-processing"},"Data Pre-processing"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#normalization"},"Normalization")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#train-test-split"},"Train Test Split")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-augmentation"},"Data Augmentation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#data-loader"},"Data Loader")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visualizing-augmented-datasets"},"Visualizing Augmented Datasets")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#building-the-model"},"Building the Model"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#compile-the-model"},"Compile the Model")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#callbacks"},"Callbacks")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#model-training"},"Model Training"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#visualizing-model-performance"},"Visualizing Model Performance")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#loading-best-training-weights"},"Loading Best Training Weights")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#make-predictions"},"Make Predictions"))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/deep-3d-image-segmentation"},"Github Repository")),(0,i.kt)("h1",{id:"3d-image-classification"},"3D Image Classification"),(0,i.kt)("p",null,"Learn how to train a 3D convolutional neural network (3D CNN) to predict presence of pneumonia - based on ",(0,i.kt)("a",{parentName:"p",href:"https://keras.io/examples/vision/3D_image_classification/"},"Tutorial on 3D Image Classification")," by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/hasibzunair"},"Hasib Zunair"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Dataset"),": ",(0,i.kt)("a",{parentName:"p",href:"https://www.medrxiv.org/content/10.1101/2020.05.20.20100362v1"},"MosMedData: Chest CT Scans with COVID-19 Related Findings Dataset")," :: This dataset contains anonymised human lung computed tomography (CT) scans with COVID-19 related findings, as well as without such findings. A small subset of studies has been annotated with binary pixel masks depicting regions of interests (ground-glass opacifications and consolidations). CT scans were obtained between 1st of March, 2020 and 25th of April, 2020, and provided by municipal hospitals in Moscow, Russia.")),(0,i.kt)("h2",{id:"verify-gpu-support"},"Verify GPU Support"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# importing tensorflow\nimport tensorflow as tf\n\ndevice_name = tf.test.gpu_device_name()\nprint('Active GPU :: {}'.format(device_name))\n# Active GPU :: /device:GPU:0\n")),(0,i.kt)("h2",{id:"import-dependencies"},"Import Dependencies"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport nibabel as nib\nimport numpy as np\nimport os\nimport random\nfrom scipy import ndimage\nfrom sklearn.model_selection import train_test_split\nfrom tensorflow import keras\nfrom tensorflow.keras import layers\nfrom tensorflow.keras.utils import plot_model\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# helper functions\nfrom helper import (read_scan,\n                    normalize,\n                    resize_volume,\n                    process_scan,\n                    rotate,\n                    train_preprocessing,\n                    validation_preprocessing,\n                    plot_slices,\n                    build_model)\n")),(0,i.kt)("h2",{id:"import-dataset"},"Import Dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# download from https://github.com/hasibzunair/3D-image-classification-tutorial/releases/\ndata_dir = './dataset'\nno_pneumonia = os.path.join(data_dir, 'no_viral_pneumonia')\nwith_pneumonia = os.path.join(data_dir, 'with_viral_pneumonia')\n\nnormal_scan_paths = [\n    os.path.join(no_pneumonia, i)\n    for i in os.listdir(no_pneumonia)\n]\nprint('INFO :: CT Scans with normal lung tissue:', len(normal_scan_paths))\n\nabnormal_scan_paths = [\n    os.path.join(with_pneumonia, i)\n    for i in os.listdir(with_pneumonia)\n]\nprint('INFO :: CT Scans with abnormal lung tissue:', len(abnormal_scan_paths))\n\n# INFO :: CT Scans with normal lung tissue: 100\n# INFO :: CT Scans with abnormal lung tissue: 100\n")),(0,i.kt)("h2",{id:"visualize-dataset"},"Visualize Dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"img_normal = nib.load(normal_scan_paths[0])\nimg_normal_array = img_normal.get_fdata()\n\nimg_abnormal = nib.load(abnormal_scan_paths[0])\nimg_abnormal_array = img_abnormal.get_fdata()\n\nplt.figure(figsize=(30,10))\n\nfor i in range(6):\n    plt.subplot(2, 6, i+1)\n    plt.imshow(img_normal_array[:, :, i], cmap='Blues')\n    plt.axis('off')\n    plt.title('Slice {} - Normal'.format(i))\n    \n    plt.subplot(2, 6, 6+i+1)\n    plt.imshow(img_abnormal_array[:, :, i], cmap='Reds')\n    plt.axis('off')\n    plt.title('Slice {} - Abnormal'.format(i))\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3D Image Classification",src:n(44013).Z,width:"2345",height:"794"})),(0,i.kt)("h2",{id:"data-pre-processing"},"Data Pre-processing"),(0,i.kt)("h3",{id:"normalization"},"Normalization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Read and process the scans.\n# Each scan is resized across height, width, and depth and rescaled.\nabnormal_scans = np.array([process_scan(path) for path in abnormal_scan_paths])\nnormal_scans = np.array([process_scan(path) for path in normal_scan_paths])\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# For the CT scans having presence of viral pneumonia\n# assign 1, for the normal ones assign 0.\nabnormal_labels = np.array([1 for _ in range(len(abnormal_scans))])\nnormal_labels = np.array([0 for _ in range(len(normal_scans))])\n")),(0,i.kt)("h3",{id:"train-test-split"},"Train Test Split"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"X = np.concatenate((abnormal_scans, normal_scans), axis=0)\nY = np.concatenate((abnormal_labels, normal_labels), axis=0)\n\nx_train, x_val, y_train, y_val = train_test_split(X, Y, test_size=0.3, random_state=42)\nprint('INFO :: Train / Test Samples - %d / %d' % (x_train.shape[0], x_val.shape[0]))\n# INFO :: Train / Test Samples - 140 / 60\n")),(0,i.kt)("h3",{id:"data-augmentation"},"Data Augmentation"),(0,i.kt)("h4",{id:"data-loader"},"Data Loader"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Define data loaders.\ntrain_loader = tf.data.Dataset.from_tensor_slices((x_train, y_train))\nvalidation_loader = tf.data.Dataset.from_tensor_slices((x_val, y_val))\nbatch_size = 2\n\n# Augment the on the fly during training.\ntrain_dataset = (\n    train_loader.shuffle(len(x_train))\n    .map(train_preprocessing)\n    .batch(batch_size)\n    .prefetch(2)\n)\n# Only rescale.\nvalidation_dataset = (\n    validation_loader.shuffle(len(x_val))\n    .map(validation_preprocessing)\n    .batch(batch_size)\n    .prefetch(2)\n)\n")),(0,i.kt)("h3",{id:"visualizing-augmented-datasets"},"Visualizing Augmented Datasets"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data = train_dataset.take(1)\nimages, labels = list(data)[0]\nimages = images.numpy()\nimage = images[0]\nprint("CT Scan Dims:", image.shape)\n# CT Scan Dims: (128, 128, 64, 1)\nplt.imshow(np.squeeze(image[:, :, 30]), cmap="gray")\n\n# Visualize montage of slices.\n# 4 rows and 10 columns for 100 slices of the CT scan.\nplot_slices(4, 10, 128, 128, image[:, :, :40])\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3D Image Classification",src:n(92509).Z,width:"425",height:"417"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3D Image Classification",src:n(97791).Z,width:"1219",height:"499"})),(0,i.kt)("h2",{id:"building-the-model"},"Building the Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"model = build_model(width=128, height=128, depth=64)\nmodel.summary()\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Model: "3dctscan"\n_________________________________________________________________\n Layer (type)                Output Shape              Param #   \n=================================================================\n input_3 (InputLayer)        [(None, 128, 128, 64, 1)  0         \n                             ]                                   \n                                                                 \n conv3d_9 (Conv3D)           (None, 126, 126, 62, 64)  1792      \n                                                                 \n max_pooling3d_8 (MaxPooling  (None, 63, 63, 31, 64)   0         \n 3D)                                                             \n                                                                 \n batch_normalization_8 (Batc  (None, 63, 63, 31, 64)   256       \n hNormalization)                                                 \n                                                                 \n conv3d_10 (Conv3D)          (None, 61, 61, 29, 64)    110656    \n                                                                 \n max_pooling3d_9 (MaxPooling  (None, 30, 30, 14, 64)   0         \n 3D)                                                             \n                                                                 \n batch_normalization_9 (Batc  (None, 30, 30, 14, 64)   256       \n hNormalization)                                                 \n                                                                 \n conv3d_11 (Conv3D)          (None, 28, 28, 12, 128)   221312    \n                                                                 \n max_pooling3d_10 (MaxPoolin  (None, 14, 14, 6, 128)   0         \n g3D)                                                            \n                                                                 \n batch_normalization_10 (Bat  (None, 14, 14, 6, 128)   512       \n chNormalization)                                                \n                                                                 \n conv3d_12 (Conv3D)          (None, 12, 12, 4, 256)    884992    \n                                                                 \n max_pooling3d_11 (MaxPoolin  (None, 6, 6, 2, 256)     0         \n g3D)                                                            \n                                                                 \n batch_normalization_11 (Bat  (None, 6, 6, 2, 256)     1024      \n chNormalization)                                                \n                                                                 \n global_average_pooling3d_1   (None, 256)              0         \n (GlobalAveragePooling3D)                                        \n                                                                 \n dense_2 (Dense)             (None, 512)               131584    \n                                                                 \n dropout_1 (Dropout)         (None, 512)               0         \n                                                                 \n dense_3 (Dense)             (None, 1)                 513       \n                                                                 \n=================================================================\nTotal params: 1,352,897\nTrainable params: 1,351,873\nNon-trainable params: 1,024\n_________________________________________________________________\n')),(0,i.kt)("h3",{id:"compile-the-model"},"Compile the Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"initial_learning_rate = 0.0001\n\nlr_schedule = keras.optimizers.schedules.ExponentialDecay(\n    initial_learning_rate,\n    decay_steps=100000,\n    decay_rate=0.96,\n    staircase=True)\n\nmodel.compile(\n    loss='binary_crossentropy',\n    optimizer=keras.optimizers.Adam(learning_rate=lr_schedule),\n    metrics=['acc']\n)\n")),(0,i.kt)("h3",{id:"callbacks"},"Callbacks"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"cp_cb = keras.callbacks.ModelCheckpoint(\n    './checkpoints/3dct_weights.h5',\n    save_best_only=True\n)\n\nes_cb = keras.callbacks.EarlyStopping(\n    monitor='val_acc',\n    patience=15\n)\n")),(0,i.kt)("h2",{id:"model-training"},"Model Training"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"epochs = 100\n\nmodel.fit(\n    train_dataset,\n    validation_data=validation_dataset,\n    epochs=epochs,\n    shuffle=True,\n    verbose=2,\n    callbacks=[cp_cb, es_cb]\n)\n# Epoch 46/100\n# 70/70 - 22s - loss: 0.3383 - acc: 0.8429 - val_loss: 0.8225 - val_acc: 0.6833 - 22s/epoch - 313ms/step\n")),(0,i.kt)("h3",{id:"visualizing-model-performance"},"Visualizing Model Performance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'fig, ax = plt.subplots(1, 2, figsize=(20, 3))\nax = ax.ravel()\n\nfor i, metric in enumerate(["acc", "loss"]):\n    ax[i].plot(model.history.history[metric])\n    ax[i].plot(model.history.history["val_" + metric])\n    ax[i].set_title("Model {}".format(metric))\n    ax[i].set_xlabel("epochs")\n    ax[i].set_ylabel(metric)\n    ax[i].legend(["train", "val"])\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3D Image Classification",src:n(18719).Z,width:"1621",height:"316"})),(0,i.kt)("h2",{id:"loading-best-training-weights"},"Loading Best Training Weights"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"model.load_weights('./checkpoints/3dct_weights.h5')\n")),(0,i.kt)("h2",{id:"make-predictions"},"Make Predictions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"pred_dataset = './predictions'\npred_paths = [os.path.join(pred_dataset, i) for i in os.listdir(pred_dataset)]\n\nz_val = np.array([process_scan(path) for path in pred_paths])\n\nfor i in range(len(z_val)):\n    prediction = model.predict(np.expand_dims(z_val[i], axis=0))[0]\n    scores = [1 - prediction[0], prediction[0]]\n    class_names = ['normal', 'abnormal']\n    \npred_image = nib.load(pred_paths[i])\npred_image_data = pred_image.get_fdata()\n\nnormal_class = class_names[0], round(100*scores[0], 2)\nabnormal_class = class_names[1], round(100*scores[1], 2)\nannotation = normal_class + abnormal_class\n\nplt.imshow(pred_image_data[:,:, pred_image_data.shape[2]//2], cmap='gray')\nplt.title(os.path.basename(pred_paths[i]))\nplt.xlabel(annotation)\nplt.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"3D Image Classification",src:n(60495).Z,width:"430",height:"455"})))}c.isMDXComponent=!0},44013:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/3D_Image_Classification_01-a38a2ccca0de02baa0d9cb1782c1ab05.png"},92509:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/3D_Image_Classification_02-3457ab2b37ef85b6c83854062a924c4e.png"},97791:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/3D_Image_Classification_03-8ea8ec09d1e41cf29a8538981e99c18f.png"},18719:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/3D_Image_Classification_04-10aec777c9c20870e091cf5911e9e3d3.png"},60495:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/3D_Image_Classification_05-678aa6f36db87b485d1792339adac1da.png"},2180:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-1d76f0bccd73a7edbdef9d6ffe5638d0.jpg"}}]);