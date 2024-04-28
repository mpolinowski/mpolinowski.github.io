"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[32761],{956250:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=a(474848),t=a(28453);const s={sidebar_position:4270,slug:"2023-08-04",title:"Tensorflow Image Classifier - EfficientNetV2B0",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},o="Tf Image Classifier",l={id:"IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/index",title:"Tensorflow Image Classifier - EfficientNetV2B0",description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0",slug:"/IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/2023-08-04",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/2023-08-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-04-tensorflow-i-know-flowers-efficientnetv2b0/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4270,frontMatter:{sidebar_position:4270,slug:"2023-08-04",title:"Tensorflow Image Classifier - EfficientNetV2B0",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Image Classifier - EfficientNetV2S",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-05-tensorflow-i-know-flowers-efficientnetv2s/2023-08-05"},next:{title:"Tensorflow Image Classifier - Data-efficient Image Transformers",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-03-tensorflow-i-know-flowers-deit/2023-08-03"}},r={},c=[{value:"EfficientNetV2B0",id:"efficientnetv2b0",level:2},{value:"Dataset",id:"dataset",level:2},{value:"Building the Efficient TF Model",id:"building-the-efficient-tf-model",level:2},{value:"Model Training",id:"model-training",level:3},{value:"Model Evaluation",id:"model-evaluation",level:3},{value:"Model Finetuning",id:"model-finetuning",level:3},{value:"Model Evaluation",id:"model-evaluation-1",level:3},{value:"Saving the Model",id:"saving-the-model",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Angkor Wat, Cambodia",src:a(714144).A+"",width:"1500",height:"706"})}),"\n",(0,i.jsx)(n.h1,{id:"tf-image-classifier",children:"Tf Image Classifier"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",children:"Overview - Model Evaluation & Deployment"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"efficientnetv2b0",children:"EfficientNetV2B0"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import cv2 as cv\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom PIL import Image\nfrom sklearn.metrics import (\n    classification_report,\n    confusion_matrix,\n    ConfusionMatrixDisplay)\nimport seaborn as sns\n\nimport tensorflow as tf\nfrom tensorflow.io import TFRecordWriter\nfrom tensorflow.keras import Sequential\nfrom tensorflow.keras.callbacks  import (\n    Callback,\n    CSVLogger,\n    EarlyStopping,\n    LearningRateScheduler,\n    ModelCheckpoint\n)\nfrom tensorflow.keras.layers import (\n    Layer,\n    GlobalAveragePooling2D,\n    Conv2D,\n    MaxPool2D,\n    Dense,\n    Flatten,\n    InputLayer,\n    BatchNormalization,\n    Input,\n    Dropout,\n    RandomFlip,\n    RandomRotation,\n    RandomContrast,\n    RandomBrightness,\n    Resizing,\n    Rescaling\n)\nfrom tensorflow.keras.losses import BinaryCrossentropy, CategoricalCrossentropy, SparseCategoricalCrossentropy\nfrom tensorflow.keras.metrics import CategoricalAccuracy, TopKCategoricalAccuracy, SparseCategoricalAccuracy\nfrom tensorflow.keras.models import Model\nfrom tensorflow.keras.optimizers import Adam\nfrom tensorflow.keras.preprocessing.image import ImageDataGenerator\nfrom tensorflow.keras.regularizers import L2, L1\nfrom tensorflow.keras.utils import image_dataset_from_directory\nfrom tensorflow.train import Feature, Features, Example, BytesList, Int64List\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"BATCH = 32\nSIZE = 224\nSEED = 42\n\nEPOCHS = 20\nLR = 0.001\nFILTERS = 6\nKERNEL = 3\nSTRIDES = 1\nREGRATE = 0.0\nPOOL = 2\nDORATE = 0.05\nLABELS = ['Gladiolus', 'Adenium', 'Alpinia_Purpurata', 'Alstroemeria', 'Amaryllis', 'Anthurium_Andraeanum', 'Antirrhinum', 'Aquilegia', 'Billbergia_Pyramidalis', 'Cattleya', 'Cirsium', 'Coccinia_Grandis', 'Crocus', 'Cyclamen', 'Dahlia', 'Datura_Metel', 'Dianthus_Barbatus', 'Digitalis', 'Echinacea_Purpurea', 'Echinops_Bannaticus', 'Fritillaria_Meleagris', 'Gaura', 'Gazania', 'Gerbera', 'Guzmania', 'Helianthus_Annuus', 'Iris_Pseudacorus', 'Leucanthemum', 'Malvaceae', 'Narcissus_Pseudonarcissus', 'Nerine', 'Nymphaea_Tetragona', 'Paphiopedilum', 'Passiflora', 'Pelargonium', 'Petunia', 'Platycodon_Grandiflorus', 'Plumeria', 'Poinsettia', 'Primula', 'Protea_Cynaroides', 'Rose', 'Rudbeckia', 'Strelitzia_Reginae', 'Tropaeolum_Majus', 'Tussilago', 'Viola', 'Zantedeschia_Aethiopica']\nNLABELS = len(LABELS)\nDENSE1 = 1024\nDENSE2 = 128\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dataset",children:"Dataset"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"train_directory = '../dataset/Flower_Dataset/split/train'\ntest_directory = '../dataset/Flower_Dataset/split/val'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"train_dataset = image_dataset_from_directory(\n    train_directory,\n    labels='inferred',\n    label_mode='categorical',\n    class_names=LABELS,\n    color_mode='rgb',\n    batch_size=BATCH,\n    image_size=(SIZE, SIZE),\n    shuffle=True,\n    seed=SEED,\n    interpolation='bilinear',\n    follow_links=False,\n    crop_to_aspect_ratio=False\n)\n\n# Found 9206 files belonging to 48 classes.\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"test_dataset = image_dataset_from_directory(\n    test_directory,\n    labels='inferred',\n    label_mode='categorical',\n    class_names=LABELS,\n    color_mode='rgb',\n    batch_size=BATCH,\n    image_size=(SIZE, SIZE),\n    shuffle=True,\n    seed=SEED\n)\n\n# Found 3090 files belonging to 48 classes.\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"data_augmentation = Sequential([\n        # Resizing(224, 224),\n        RandomRotation(factor=0.25),\n        RandomFlip(mode='horizontal'),\n        RandomContrast(factor=0.1),\n        RandomBrightness(0.1)\n    ],\n    name=\"img_augmentation\",\n)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"training_dataset = (\n    train_dataset\n    .map(lambda image, label: (data_augmentation(image), label))\n    .prefetch(tf.data.AUTOTUNE)\n)\n\n\ntesting_dataset = (\n    test_dataset.prefetch(\n        tf.data.AUTOTUNE\n    )\n)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"building-the-efficient-tf-model",children:"Building the Efficient TF Model"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# transfer learning\n\nbackbone = tf.keras.applications.EfficientNetV2B0(\n    include_top=False,\n    weights="imagenet",\n    input_shape=(SIZE, SIZE, 3),\n    include_preprocessing=True\n)\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"backbone.trainable = False\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_model = tf.keras.Sequential([\n    Input(shape=(SIZE, SIZE, 3)),\n    data_augmentation,\n    backbone,\n    GlobalAveragePooling2D(),\n    Dense(DENSE1, activation='relu'),\n    BatchNormalization(),\n    Dense(DENSE2, activation='relu'),\n    Dense(NLABELS, activation='softmax')\n])\n\nefficient_model.summary()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"checkpoint_callback = ModelCheckpoint(\n    '../best_weights',\n    monitor='val_accuracy',\n    mode='max',\n    verbose=1,\n    save_best_only=True\n)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"loss_function = CategoricalCrossentropy()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"metrics = [CategoricalAccuracy(name='accuracy')]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_model.compile(\n    optimizer = Adam(learning_rate=LR),\n    loss = loss_function,\n    metrics = metrics\n)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"model-training",children:"Model Training"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_history = efficient_model.fit(\n    training_dataset,\n    validation_data = testing_dataset,\n    epochs = EPOCHS,\n    verbose = 1\n)\n\n# loss: 0.2039\n# accuracy: 0.9343\n# val_loss: 0.3764\n# val_accuracy: 0.9026\n"})}),"\n",(0,i.jsx)(n.h3,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_model.evaluate(testing_dataset)\n#  loss: 0.3764 - accuracy: 0.9026\n"})}),"\n",(0,i.jsx)(n.h3,{id:"model-finetuning",children:"Model Finetuning"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"backbone.trainable = True\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_model.compile(\n    optimizer = Adam(learning_rate=LR/100),\n    loss = loss_function,\n    metrics = metrics,\n    # callbacks = ['checkpoint_callback']\n)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_history = efficient_model.fit(\n    training_dataset,\n    validation_data = testing_dataset,\n    epochs = EPOCHS,\n    verbose = 1\n)\n\n# loss: 0.2119\n# accuracy: 0.9344\n# val_loss: 0.3779\n# val_accuracy: 0.9084\n"})}),"\n",(0,i.jsx)(n.h3,{id:"model-evaluation-1",children:"Model Evaluation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"efficient_model.evaluate(testing_dataset)\n# loss: 0.3490 - accuracy: 0.9013\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"plt.plot(efficient_history.history['loss'])\nplt.plot(efficient_history.history['val_loss'])\nplt.title('Model Loss')\nplt.ylabel('loss')\nplt.xlabel('epoch')\nplt.legend(['train_loss', 'val_loss'])\nplt.savefig('assets/EfficientNetV2B0_01.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(66305).A+"",width:"567",height:"455"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"plt.plot(efficient_history.history['accuracy'])\nplt.plot(efficient_history.history['val_accuracy'])\nplt.title('Model Accuracy')\nplt.ylabel('accuracy')\nplt.xlabel('epoch')\nplt.legend(['train_accuracy', 'val_accuracy'])\nplt.savefig('assets/EfficientNetV2B0_02.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(745668).A+"",width:"576",height:"455"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"test_image_bgr = cv.imread('../dataset/snapshots/Viola_Tricolor.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = efficient_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/EfficientNetV2B0_Prediction_01.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(260315).A+"",width:"389",height:"411"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"test_image_bgr = cv.imread('../dataset/snapshots/Strelitzia.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = efficient_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/EfficientNetV2B0_Prediction_02.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(437946).A+"",width:"389",height:"411"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"test_image_bgr = cv.imread('../dataset/snapshots/Water_Lilly.jpg')\ntest_image_resized = cv.resize(test_image_bgr, (SIZE, SIZE))\ntest_image_rgb = cv.cvtColor(test_image_resized, cv.COLOR_BGR2RGB)\nimg = tf.constant(test_image_rgb, dtype=tf.float32)\nimg = tf.expand_dims(img, axis=0)\n\nprobs = efficient_model(img).numpy()\nlabel = LABELS[tf.argmax(probs, axis=1).numpy()[0]]\n\nprint(label, str(probs[0]))\n\nplt.imshow(test_image_rgb)\nplt.title(label)\nplt.axis('off')\n        \nplt.savefig('assets/EfficientNetV2B0_Prediction_03.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(602117).A+"",width:"389",height:"411"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"plt.figure(figsize=(16,16))\n\nfor images, labels in testing_dataset.take(1):\n    for i in range(16):\n        ax = plt.subplot(4,4,i+1)\n        true = \"True: \" + LABELS[tf.argmax(labels[i], axis=0).numpy()]\n        pred = \"Predicted: \" + LABELS[\n            tf.argmax(efficient_model(tf.expand_dims(images[i], axis=0)).numpy(), axis=1).numpy()[0]\n        ]\n        plt.title(\n           true  + \"\\n\" + pred\n        )\n        plt.imshow(images[i]/255.)\n        plt.axis('off')\n        \nplt.savefig('assets/EfficientNetV2B0_03.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(899367).A+"",width:"1273",height:"1295"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"y_pred = []\ny_test = []\n\nfor img, label in testing_dataset:\n    y_pred.append(efficient_model(img))\n    y_test.append(label.numpy())\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"conf_mtx = ConfusionMatrixDisplay(\n    confusion_matrix=confusion_matrix(\n        np.argmax(y_test[:-1], axis=-1).flatten(),\n        np.argmax(y_pred[:-1], axis=-1).flatten()\n    ),\n    display_labels=LABELS\n)\n\nfig, ax = plt.subplots(figsize=(16,12))\nconf_mtx.plot(ax=ax, cmap='plasma', include_values=True, xticks_rotation='vertical',)\n\nplt.savefig('assets/EfficientNetV2B0_04.webp', bbox_inches='tight')\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"tf Emotion Detection",src:a(999882).A+"",width:"1305",height:"1160"})}),"\n",(0,i.jsx)(n.h3,{id:"saving-the-model",children:"Saving the Model"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"tf.keras.saving.save_model(\n    efficient_model, '../saved_model/efficientv2b0_model', overwrite=True, save_format='tf'\n)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# restore the model\nrestored_model = tf.keras.saving.load_model('../saved_model/efficientv2b0_model')\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# Check its architecture\nrestored_model.summary()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"restored_model.evaluate(testing_dataset)\n# loss: 0.3779 - accuracy: 0.9084\n"})})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},66305:(e,n,a)=>{a.d(n,{A:()=>i});const i="data:image/webp;base64,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"},745668:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/EfficientNetV2B0_02-febda995366daedbf3150d27f939ad9a.webp"},899367:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/EfficientNetV2B0_03-f14e6566b0066a63d1bed710d5f9b661.webp"},999882:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/EfficientNetV2B0_04-0709682518631495f7e07e2c132816f6.webp"},260315:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/EfficientNetV2B0_Prediction_01-1c4c944bd8cc6908d39588b4265bbc8e.webp"},437946:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/EfficientNetV2B0_Prediction_02-cb566f9e2a0ff163d5ea7feca5986887.webp"},602117:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/EfficientNetV2B0_Prediction_03-56940b6847fb2b6012fc7d7dfdf0d4ae.webp"},714144:(e,n,a)=>{a.d(n,{A:()=>i});const i=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4b4c922f390788acb724c3c274da1ef9.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>l});var i=a(296540);const t={},s=i.createContext(t);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);