"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[53412],{578561:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=i(474848),t=i(28453);const a={sidebar_position:4940,slug:"2022-12-12",title:"Breast Histopathology Image Segmentation Part 5",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Evaluate the performance of your trained model"},r=void 0,o={id:"IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index",title:"Breast Histopathology Image Segmentation Part 5",description:"Evaluate the performance of your trained model",source:"@site/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5",slug:"/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4940,frontMatter:{sidebar_position:4940,slug:"2022-12-12",title:"Breast Histopathology Image Segmentation Part 5",authors:"mpolinowski",tags:["Python","Machine Learning","Tensorflow"],description:"Evaluate the performance of your trained model"},sidebar:"tutorialSidebar",previous:{title:"Breast Histopathology Image Segmentation Part 6",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part6/2022-12-12"},next:{title:"Breast Histopathology Image Segmentation Part 4",permalink:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part4/2022-12-11"}},c={},l=[{value:"Model Evaluation",id:"model-evaluation",level:2},{value:"Classification Report",id:"classification-report",level:3},{value:"Confusion Matrix",id:"confusion-matrix",level:3},{value:"AUC-ROC",id:"auc-roc",level:3},{value:"Serializing a Model",id:"serializing-a-model",level:2},{value:"Training Re-run",id:"training-re-run",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Guangzhou, China",src:i(201407).A+"",width:"1500",height:"383"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-10-tf-breast-cancer-classification-part1/2022-12-10",children:"Part 1: Data Inspection and Pre-processing"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part2/2022-12-11",children:"Part 2: Weights, Data Augmentations and Generators"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part3/2022-12-11",children:"Part 3: Model creation based on a pre-trained and a custom model"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-11-tf-breast-cancer-classification-part4/2022-12-11",children:"Part 4: Train our model to fit the dataset"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part5/2022-12-12",children:"Part 5: Evaluate the performance of your trained model"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2022-12-12-tf-breast-cancer-classification-part6/2022-12-12",children:"Part 6: Running Predictions"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/mpolinowski/tf-bc-classification",children:"Github"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#model-evaluation",children:"Model Evaluation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#classification-report",children:"Classification Report"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#confusion-matrix",children:"Confusion Matrix"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#auc-roc",children:"AUC-ROC"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#serializing-a-model",children:"Serializing a Model"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#training-re-run",children:"Training Re-run"})}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Based on ",(0,s.jsx)(n.a,{href:"https://www.kaggle.com/datasets/paultimothymooney/breast-histopathology-images",children:"Breast Histopathology Images"})," by ",(0,s.jsx)(n.a,{href:"https://www.kaggle.com/paultimothymooney",children:"Paul Mooney"}),".\n",(0,s.jsx)(n.code,{children:"Invasive Ductal Carcinoma (IDC) is the most common subtype of all breast cancers. To assign an aggressiveness grade to a whole mount sample, pathologists typically focus on the regions which contain the IDC. As a result, one of the common pre-processing steps for automatic aggressiveness grading is to delineate the exact regions of IDC inside of a whole mount slide."}),"\n",(0,s.jsx)(n.a,{href:"https://youtu.be/8XsiMQQ-4mM",children:"Can recurring breast cancer be spotted with AI tech? - BBC News"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Citation: ",(0,s.jsx)(n.a,{href:"https://pubmed.ncbi.nlm.nih.gov/27563488/",children:"Deep learning for digital pathology image analysis: A comprehensive tutorial with selected use cases"})]}),"\n",(0,s.jsx)(n.li,{children:"Dataset: 198,738 IDC(negative) image patches; 78,786 IDC(positive) image patches"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"model-evaluation",children:"Model Evaluation"}),"\n",(0,s.jsx)(n.h3,{id:"classification-report",children:"Classification Report"}),"\n",(0,s.jsxs)(n.p,{children:["Generate a ",(0,s.jsx)(n.strong,{children:"Classification Report"})," from your trained model:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Precision"}),": ",(0,s.jsx)(n.em,{children:"True Positives"})," / (",(0,s.jsx)(n.em,{children:"True Positives"})," + ",(0,s.jsx)(n.em,{children:"False Positives"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How certain are you that a positive prediction is actually positive?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Recall"}),": ",(0,s.jsx)(n.em,{children:"True Positives"})," / (",(0,s.jsx)(n.em,{children:"True Positives"})," + ",(0,s.jsx)(n.em,{children:"False Negatives"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How many of the actual positives can be predicted with our model?"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"F1 Score"}),": Harmonic mean of precision and recall","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Reaches a maximum when precision and recall are equal"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"utils/modelEval.py"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'# Loading the best performing model\n# Please specify the model name from the output folder which has the lowest val_loss\n\n# ResNet50\npath1 = config.OUTPUT_PATH + \'/resnet50_weights-025-0.6333.hdf5\'\n\n# Custom\n# path1 = config.OUTPUT_PATH + \'/custom_weights-009-0.4244.hdf5\'\n\nfModel = load_model(path1)\n\n# Predicting on the test data\nprint("Predicting on the test data")\n# if totalTest is odd number add `+1` to predTest\nprint("totalTrain: " , totalTrain , ", totalVal: " , totalVal , ", totalTest: " , totalTest)\n# totalTrain:  199818 , totalVal:  22201 , totalTest:  55505\npredTest = fModel.predict(x=testGen, steps=(totalTest // config.BATCH_SIZE)+1)\npredTest = np.argmax(predTest, axis=1)\n\n# Printing the Classification Report\nprint(classification_report(testGen.classes, predTest, target_names=testGen.class_indices.keys()))\n'})}),"\n",(0,s.jsx)(n.p,{children:"Run the script to generate the evaluation report:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ResNet50"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"              precision    recall  f1-score   support\n\n           0       0.84      0.60      0.70     39775\n           1       0.42      0.72      0.53     15730\n\n    accuracy                           0.64     55505\n   macro avg       0.63      0.66      0.62     55505\nweighted avg       0.72      0.64      0.65     55505\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now this looks pretty terrible :)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Custom"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"              precision    recall  f1-score   support\n\n           0       0.93      0.84      0.89     39775\n           1       0.68      0.84      0.75     15730\n\n    accuracy                           0.84     55505\n   macro avg       0.81      0.84      0.82     55505\nweighted avg       0.86      0.84      0.85     55505\n"})}),"\n",(0,s.jsx)(n.p,{children:"Already a lot better!"}),"\n",(0,s.jsx)(n.h3,{id:"confusion-matrix",children:"Confusion Matrix"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Confusion Matrix"})," can be used to visualize the performance of an classification model. Since we only have two classes - ",(0,s.jsx)(n.code,{children:"begin"})," and ",(0,s.jsx)(n.code,{children:"malignant"})," - the matrix will look like this:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"True Positive"}),": Malignant carcinoma correctly predicted"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"False Positive"}),": Malignant carcinoma falsely predicted"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"True Negative"}),": Benign carcinoma correctly predicted"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"True Negative"}),": Benign carcinoma falsely predicted"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Breast Histopathology Image Segmentation",src:i(604060).A+"",width:"677",height:"601"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"utils/modelEval.py"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'# Computing the confusion matrix and and using the same to derive the \n# accuracy, sensitivity, and specificity\ncm = confusion_matrix(testGen.classes, predTest)\ntotal = sum(sum(cm))\nacc = (cm[0, 0] + cm[1, 1]) / total\nsensitivity = cm[0, 0] / (cm[0, 0] + cm[0, 1])\nspecificity = cm[1, 1] / (cm[1, 0] + cm[1, 1])\n\n# Printing the confusion matrix, accuracy, sensitivity, and specificity\nprint(cm)\nprint("acc: {:.4f}".format(acc))\nprint("sensitivity: {:.4f}".format(sensitivity))\nprint("specificity: {:.4f}".format(specificity))\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"ResNet50"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"[[23954 15821]\n [ 4425 11305]]\nacc: 0.6352\nsensitivity: 0.6022\nspecificity: 0.7187\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Custom"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"[[33597  6178]\n [ 2498 13232]]\nacc: 0.8437\nsensitivity: 0.8447\nspecificity: 0.8412\n"})}),"\n",(0,s.jsx)(n.h3,{id:"auc-roc",children:"AUC-ROC"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Area Under the Curve"})," (",(0,s.jsx)(n.strong,{children:"AUC"}),") of ",(0,s.jsx)(n.em,{children:"Receiver Operating Characteristic"})," (",(0,s.jsx)(n.strong,{children:"ROC"}),"):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ROC"}),": Evaluation metric for binary classification problems to separate ",(0,s.jsx)(n.em,{children:"signal"})," from ",(0,s.jsx)(n.em,{children:"noise"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"AUC"}),": A measurement of the ability of a classifier to distinguish between classes based on the ",(0,s.jsx)(n.strong,{children:"ROC"}),". A higher value shows a better performance."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'## load latest weights\npath1 = config.OUTPUT_PATH + \'/resnet50_weights.hdf5\'\n\nfModel = load_model(path1)\n\n# Predicting on the test data\nprint("Predicting on the test data")\n# if totalTest is odd number add `+1` to predTest\nprint("totalTrain: " , totalTrain , ", totalVal: " , totalVal , ", totalTest: " , totalTest)\n# totalTrain:  199818 , totalVal:  22201 , totalTest:  55505\npredTest = fModel.predict(x=testGen, steps=(totalTest // config.BATCH_SIZE)+1)\npredTest = np.argmax(predTest, axis=1)\n\n# Calculate roc auc\nXGB_roc_value = roc_auc_score(testGen.classes, predTest)\nprint("XGboost roc_value: {0}" .format(XGB_roc_value))\n\n# Plotting the graph\ntraining_plot(MF, config.EPOCHS, config.PLOT_PATH)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"serializing-a-model",children:"Serializing a Model"}),"\n",(0,s.jsx)(n.p,{children:"When you are satisfied with the training you can save the model so it is ready for transfer:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:'# Serialize/Writing the model to disk\nprint("Serializing network...")\nfModel.save(config.MODEL_PATH, save_format="h5")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"training-re-run",children:"Training Re-run"}),"\n",(0,s.jsx)(n.p,{children:"I changed the following variables:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"utils/config.py"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-py",children:"BATCH_SIZE = 24\nINIT_LR = 1e-3\nEPOCHS = 20\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.strong,{children:"Custom Model"})," I am still seeing small improvements in the later epochs - looking much better:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Epoch 18/20\n8324/8325 [============================>.] - ETA: 0s - loss: 0.4561 - accuracy: 0.8652  \nEpoch 18: val_loss improved from 0.31292 to 0.31132, saving model to ./output/custom_weights.hdf5\n8325/8325 [==============================] - 247s 30ms/step - loss: 0.4561 - accuracy: 0.8652 - val_loss: 0.3113 - val_accuracy: 0.8663\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"ResNet50 Model"})," also improves compared to the earlier run. But it still get's stuck around the 10th epoch and even gets much worse after that - given the fluctuation I probably should have let it run a bit longer:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Epoch 9/20\n8323/8325 [============================>.] - ETA: 0s - loss: 0.8274 - accuracy: 0.7163  \nEpoch 9: val_loss improved from 0.60565 to 0.58112, saving model to ./output/resnet50_weights.hdf5\n8325/8325 [==============================] - 249s 30ms/step - loss: 0.8274 - accuracy: 0.7163 - val_loss: 0.5811 - val_accuracy: 0.7097\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Breast Histopathology Image Segmentation",src:i(700557).A+"",width:"640",height:"480"})}),"\n",(0,s.jsxs)(n.p,{children:["I did another - much longer - run for the ",(0,s.jsx)(n.strong,{children:"Custom Model"})," and I am still seeing improvements up to the 54th epoch. Though the loss function still returns a slightly higher value as before:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Epoch 54/220\n8324/8325 [============================>.] - ETA: 0s - loss: 0.4869 - accuracy: 0.8566  \nEpoch 54: val_loss improved from 0.37685 to 0.36609, saving model to ./output/custom_weights.hdf5\n8325/8325 [==============================] - 222s 27ms/step - loss: 0.4869 - accuracy: 0.8566 - val_loss: 0.3661 - val_accuracy: 0.8482\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Breast Histopathology Image Segmentation",src:i(909677).A+"",width:"640",height:"480"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},604060:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/Breast_Histopathology_Image_Segmentation_01-f3de93010b82d49b76c60513eb9bc244.png"},909677:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/TrainingHistoryCM-768eba8e672448b8c0d56a6aa19c1597.png"},700557:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/TrainingHistoryRN-95a9debefd4d927cfb4182c0694081aa.png"},201407:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-918471126c0472aad97358a725e1a399.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var s=i(296540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);