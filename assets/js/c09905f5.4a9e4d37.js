"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[71430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),g=c(n),d=l,u=g["".concat(s,".").concat(d)]||g[d]||m[d]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=n(87462),l=(n(67294),n(3905));const i={sidebar_position:4220,slug:"2023-08-09",title:"Tensorflow Image Classifier - MobileNetV3Small",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},o=void 0,r={unversionedId:"IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/index",id:"IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/index",title:"Tensorflow Image Classifier - MobileNetV3Small",description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small",slug:"/IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/2023-08-09",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/2023-08-09",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-09-tensorflow-i-know-flowers-mobilenetv3small/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4220,frontMatter:{sidebar_position:4220,slug:"2023-08-09",title:"Tensorflow Image Classifier - MobileNetV3Small",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Image Classifier - NASNetMobile",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-10-tensorflow-i-know-flowers-nasnetmobile/2023-08-10"},next:{title:"Tensorflow Image Classifier - MobileNetV3Large",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-08-tensorflow-i-know-flowers-mobilenetv3large/2023-08-08"}},s={},c=[{value:"MobileNetV3Small",id:"mobilenetv3small",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Building the MobileNet TF Model",id:"building-the-mobilenet-tf-model",level:2},{value:"Model Training",id:"model-training",level:3},{value:"Model Evaluation",id:"model-evaluation",level:3},{value:"Model Finetuning",id:"model-finetuning",level:3},{value:"Model Evaluation",id:"model-evaluation-1",level:3},{value:"Saving the Model",id:"saving-the-model",level:3}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Angkor Wat, Cambodia",src:n(15577).Z,width:"1500",height:"706"})),(0,l.kt)("h1",{id:"tf-image-classifier"},"Tf Image Classifier"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01"},"Overview - Model Evaluation & Deployment"))),(0,l.kt)("h2",{id:"mobilenetv3small"},"MobileNetV3Small"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"import cv2 as cv\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom PIL import Image\nfrom sklearn.metrics import (\n    classification_report,\n    confusion_matrix,\n    ConfusionMatrixDisplay)\nimport seaborn as sns\n\nimport tensorflow as tf\nfrom tensorflow.io import TFRecordWriter\nfrom tensorflow.keras import Sequential\nfrom tensorflow.keras.callbacks  import (\n    Callback,\n    CSVLogger,\n    EarlyStopping,\n    LearningRateScheduler,\n    ModelCheckpoint\n)\nfrom tensorflow.keras.layers import (\n    Layer,\n    GlobalAveragePooling2D,\n    Conv2D,\n    MaxPool2D,\n    Dense,\n    Flatten,\n    InputLayer,\n    BatchNormalization,\n    Input,\n    Dropout,\n    RandomFlip,\n    RandomRotation,\n    RandomContrast,\n    RandomBrightness,\n    Resizing,\n    Rescaling\n)\nfrom tensorflow.keras.losses import BinaryCrossentropy, CategoricalCrossentropy, SparseCategoricalCrossentropy\nfrom tensorflow.keras.metrics import CategoricalAccuracy, TopKCategoricalAccuracy, SparseCategoricalAccuracy\nfrom tensorflow.keras.models import Model\nfrom tensorflow.keras.optimizers import Adam\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\nfrom tensorflow.keras.regularizers import L2, L1\nfrom tensorflow.keras.utils import image_dataset_from_directory\nfrom tensorflow.train import Feature, Features, Example, BytesList, Int64List\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"BATCH = 32\nSIZE = 224\nSEED = 42\n\nEPOCHS = 20\nLR = 0.001\nFILTERS = 6\nKERNEL = 3\nSTRIDES = 1\nREGRATE = 0.0\nPOOL = 2\nDORATE = 0.05\nLABELS = ['Gladiolus', 'Adenium', 'Alpinia_Purpurata', 'Alstroemeria', 'Amaryllis', 'Anthurium_Andraeanum', 'Antirrhinum', 'Aquilegia', 'Billbergia_Pyramidalis', 'Cattleya', 'Cirsium', 'Coccinia_Grandis', 'Crocus', 'Cyclamen', 'Dahlia', 'Datura_Metel', 'Dianthus_Barbatus', 'Digitalis', 'Echinacea_Purpurea', 'Echinops_Bannaticus', 'Fritillaria_Meleagris', 'Gaura', 'Gazania', 'Gerbera', 'Guzmania', 'Helianthus_Annuus', 'Iris_Pseudacorus', 'Leucanthemum', 'Malvaceae', 'Narcissus_Pseudonarcissus', 'Nerine', 'Nymphaea_Tetragona', 'Paphiopedilum', 'Passiflora', 'Pelargonium', 'Petunia', 'Platycodon_Grandiflorus', 'Plumeria', 'Poinsettia', 'Primula', 'Protea_Cynaroides', 'Rose', 'Rudbeckia', 'Strelitzia_Reginae', 'Tropaeolum_Majus', 'Tussilago', 'Viola', 'Zantedeschia_Aethiopica']\nNLABELS = len(LABELS)\nDENSE1 = 1024\nDENSE2 = 128\n")),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"train_directory = '../dataset/Flower_Dataset/split/train'\ntest_directory = '../dataset/Flower_Dataset/split/val'\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"train_dataset = image_dataset_from_directory(\n    train_directory,\n    labels='inferred',\n    label_mode='categorical',\n    class_names=LABELS,\n    color_mode='rgb',\n    batch_size=BATCH,\n    image_size=(SIZE, SIZE),\n    shuffle=True,\n    seed=SEED,\n    interpolation='bilinear',\n    follow_links=False,\n    crop_to_aspect_ratio=False\n)\n\n# Found 9206 files belonging to 48 classes.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test_dataset = image_dataset_from_directory(\n    test_directory,\n    labels='inferred',\n    label_mode='categorical',\n    class_names=LABELS,\n    color_mode='rgb',\n    batch_size=BATCH,\n    image_size=(SIZE, SIZE),\n    shuffle=True,\n    seed=SEED\n)\n\n# Found 3090 files belonging to 48 classes.\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"data_augmentation = Sequential([\n        # Resizing(256, 256),\n        RandomRotation(factor=0.15),\n        RandomFlip(mode='horizontal'),\n        RandomContrast(factor=0.1),\n        RandomBrightness(0.1)\n    ],\n    name=\"img_augmentation\",\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"training_dataset = (\n    train_dataset\n    .map(lambda image, label: (data_augmentation(image), label))\n    .prefetch(tf.data.AUTOTUNE)\n)\n\n\ntesting_dataset = (\n    test_dataset.prefetch(\n        tf.data.AUTOTUNE\n    )\n)\n")),(0,l.kt)("h2",{id:"building-the-mobilenet-tf-model"},"Building the MobileNet TF Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# transfer learning\nbackbone = tf.keras.applications.MobileNetV3Small(\n    input_shape=(SIZE, SIZE, 3),\n    alpha=1.0,\n    minimalistic=True,\n    include_top=False,\n    weights='imagenet',\n    dropout_rate=0.2,\n    include_preprocessing=True\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"backbone.trainable = False\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"input = Input(shape=(SIZE,SIZE,3))\nx = data_augmentation(input)\nx = backbone(x, training=False)\n\nx = GlobalAveragePooling2D()(x)\nx = Dense(DENSE1, activation='relu')(x)\nx = BatchNormalization()(x)\nx = Dense(DENSE2, activation='relu')(x)\n\noutput = Dense(NLABELS, activation='softmax')(x)\n\nmobilenet_model = Model(input, output)\nmobilenet_model.summary()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"checkpoint_callback = ModelCheckpoint(\n    '../best_weights',\n    monitor='val_accuracy',\n    mode='max',\n    verbose=1,\n    save_best_only=True\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"early_stopping_callback = EarlyStopping(\n    monitor='val_accuracy',\n    patience=10,\n    restore_best_weights=True\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"loss_function = CategoricalCrossentropy()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"metrics = [CategoricalAccuracy(name='accuracy')]\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mobilenet_model.compile(\n    optimizer = Adam(learning_rate=LR),\n    loss = loss_function,\n    metrics = metrics\n)\n")),(0,l.kt)("h3",{id:"model-training"},"Model Training"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"tf.config.run_functions_eagerly(True)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mobilenet_history = mobilenet_model.fit(\n    training_dataset,\n    validation_data = testing_dataset,\n    epochs = EPOCHS,\n    verbose = 1,\n    # callbacks=[checkpoint_callback, early_stopping_callback]\n)\n\n# loss: 0.2550\n# accuracy: 0.9148\n# val_loss: 0.5476\n# val_accuracy: 0.8547\n")),(0,l.kt)("h3",{id:"model-evaluation"},"Model Evaluation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mobilenet_model.evaluate(testing_dataset)\n# loss: 0.5476 - accuracy: 0.8547\n")),(0,l.kt)("h3",{id:"model-finetuning"},"Model Finetuning"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"backbone.trainable = True\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mobilenet_model.compile(\n    optimizer = Adam(learning_rate=LR/100),\n    loss = loss_function,\n    metrics = metrics\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mobilenet_history = mobilenet_model.fit(\n    training_dataset,\n    validation_data = testing_dataset,\n    epochs = EPOCHS,\n    verbose = 1,\n    # callbacks=[checkpoint_callback, early_stopping_callback]\n)\n\n# loss: 0.0884\n# accuracy: 0.9721\n# val_loss: 0.3562\n# val_accuracy: 0.9100\n")),(0,l.kt)("h3",{id:"model-evaluation-1"},"Model Evaluation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"mobilenet_model.evaluate(testing_dataset)\n# loss: 0.3562 - accuracy: 0.9100\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(mobilenet_history.history['loss'])\nplt.plot(mobilenet_history.history['val_loss'])\nplt.title('Model Loss')\nplt.ylabel('loss')\nplt.xlabel('epoch')\nplt.legend(['train_loss', 'val_loss'])\nplt.savefig('assets/MobileNetV3Small_01.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(18772).Z,width:"567",height:"455"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"plt.plot(mobilenet_history.history['accuracy'])\nplt.plot(mobilenet_history.history['val_accuracy'])\nplt.title('Model Accuracy')\nplt.ylabel('accuracy')\nplt.xlabel('epoch')\nplt.legend(['train_accuracy', 'val_accuracy'])\nplt.savefig('assets/MobileNetV3Small_02.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(14626).Z,width:"576",height:"455"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test_image_bgr = cv.imread('../dataset/snapshots/Viola_Tricolor.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = mobilenet_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/MobileNetV3Small_Prediction_01.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(89313).Z,width:"389",height:"411"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test_image_bgr = cv.imread('../dataset/snapshots/Strelitzia.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = mobilenet_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/MobileNetV3Small_Prediction_02.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(93107).Z,width:"389",height:"411"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"test_image_bgr = cv.imread('../dataset/snapshots/Water_Lilly.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = mobilenet_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/MobileNetV3Small_Prediction_03.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(49784).Z,width:"389",height:"411"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"plt.figure(figsize=(16,16))\n\nfor images, labels in testing_dataset.take(1):\n    for i in range(16):\n        ax = plt.subplot(4,4,i+1)\n        true = \"True: \" + LABELS[tf.argmax(labels[i], axis=0).numpy()]\n        pred = \"Predicted: \" + LABELS[\n            tf.argmax(mobilenet_model(tf.expand_dims(images[i], axis=0)).numpy(), axis=1).numpy()[0]\n        ]\n        plt.title(\n           true  + \"\\n\" + pred\n        )\n        plt.imshow(images[i]/255.)\n        plt.axis('off')\n        \nplt.savefig('assets/MobileNetV3Small_FT_03.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(23629).Z,width:"1270",height:"1295"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"y_pred = []\ny_test = []\n\nfor img, label in testing_dataset:\n    y_pred.append(mobilenet_model(img))\n    y_test.append(label.numpy())\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"conf_mtx = ConfusionMatrixDisplay(\n    confusion_matrix=confusion_matrix(\n        np.argmax(y_test[:-1], axis=-1).flatten(),\n        np.argmax(y_pred[:-1], axis=-1).flatten()\n    ),\n    display_labels=LABELS\n)\n\nfig, ax = plt.subplots(figsize=(16,12))\nconf_mtx.plot(ax=ax, cmap='plasma', include_values=True, xticks_rotation='vertical',)\n\nplt.savefig('assets/MobileNetV3Small_FT_04.webp', bbox_inches='tight')\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"tf Emotion Detection",src:n(49660).Z,width:"1305",height:"1160"})),(0,l.kt)("h3",{id:"saving-the-model"},"Saving the Model"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"tf.keras.saving.save_model(\n    mobilenet_model, '../saved_model/mobilenetv3S_model', overwrite=True, save_format='tf'\n)\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# restore the model\nrestored_model2 = tf.keras.saving.load_model('../saved_model/mobilenetv3S_model')\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# Check its architecture\nrestored_model2.summary()\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"restored_model2.evaluate(testing_dataset)\n# loss: 0.3562 - accuracy: 0.9100\n")))}m.isMDXComponent=!0},18772:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,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"},14626:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MobileNetV3Small_02-b618c6ed41cc1419e0ae16ffafdfbfa4.webp"},23629:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MobileNetV3Small_03-705b693b4c235aec42cecb557798e397.webp"},49660:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MobileNetV3Small_04-5da63755ec5ba48655fb2e4ae2bd6ed6.webp"},89313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MobileNetV3Small_Prediction_01-1c4c944bd8cc6908d39588b4265bbc8e.webp"},93107:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MobileNetV3Small_Prediction_02-cb566f9e2a0ff163d5ea7feca5986887.webp"},49784:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MobileNetV3Small_Prediction_03-56940b6847fb2b6012fc7d7dfdf0d4ae.webp"},15577:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4b4c922f390788acb724c3c274da1ef9.jpg"}}]);