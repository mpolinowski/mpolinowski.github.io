"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[10882],{446131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(474848),i=t(28453);const s={sidebar_position:4130,slug:"2023-08-28",title:"Image Segmentation with PyTorch (RCNN)",authors:"mpolinowski",tags:["Python","Machine Learning","PyTorch"],description:"Detectron2 is a platform for object detection, segmentation and other visual recognition tasks."},r="Object Detection",c={id:"IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/index",title:"Image Segmentation with PyTorch (RCNN)",description:"Detectron2 is a platform for object detection, segmentation and other visual recognition tasks.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo",slug:"/IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/2023-08-28",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/2023-08-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"PyTorch",permalink:"/docs/tags/py-torch"}],version:"current",sidebarPosition:4130,frontMatter:{sidebar_position:4130,slug:"2023-08-28",title:"Image Segmentation with PyTorch (RCNN)",authors:"mpolinowski",tags:["Python","Machine Learning","PyTorch"],description:"Detectron2 is a platform for object detection, segmentation and other visual recognition tasks."},sidebar:"tutorialSidebar",previous:{title:"Image Segmentation with PyTorch (Faster RCNN)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/2023-08-29"},next:{title:"Image Segmentation with PyTorch",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-27--image-segmentation-with-pytorch/2023-08-27"}},o={},l=[{value:"Detectron2 :: RetinaNetR50 FPN",id:"detectron2--retinanetr50-fpn",level:2},{value:"COCO dataset",id:"coco-dataset",level:3},{value:"Create Config",id:"create-config",level:3},{value:"Create predictor",id:"create-predictor",level:3},{value:"Make Prediction",id:"make-prediction",level:3},{value:"Visualize Results",id:"visualize-results",level:3},{value:"Detectron2 :: Faster RCNN R101 FPN",id:"detectron2--faster-rcnn-r101-fpn",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TST, Hong Kong",src:t(603849).A+"",width:"1500",height:"811"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#object-detection",children:"Object Detection"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#detectron2--retinanetr50-fpn",children:"Detectron2 :: RetinaNetR50 FPN"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#coco-dataset",children:"COCO dataset"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#create-config",children:"Create Config"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#create-predictor",children:"Create predictor"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#make-prediction",children:"Make Prediction"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#visualize-results",children:"Visualize Results"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#detectron2--faster-rcnn-r101-fpn",children:"Detectron2 :: Faster RCNN R101 FPN"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/pt-seg-i-see-you",children:"Github Repository"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Related"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-27--image-segmentation-with-pytorch/2023-08-27",children:"Image Segmentation with PyTorch"})}),"\n",(0,a.jsx)(n.li,{children:"Semantic Segmentation Detectron2 Model Zoo"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/2023-08-29",children:"Semantic Segmentation Detectron2 Model Zoo: Faster RCNN"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-30--instance_segmentation_detectron2_model_zoo_mask_rcnn/2023-08-30",children:"Semantic Segmentation Detectron2 Model Zoo: Mask RCNN"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-31--semantic_segmentation_detectron2_openimages_dataset/2023-08-31",children:"Detectron Object Detection with OpenImages Dataset (WIP)"})}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"object-detection",children:"Object Detection"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://detectron2.readthedocs.io/en/latest/",children:"Detectron2"})," is a platform for object detection, segmentation and other visual recognition tasks."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Includes new capabilities such as panoptic segmentation, Densepose, Cascade R-CNN, rotated bounding boxes, PointRend, DeepLab, ViTDet, MViTv2 etc."}),"\n",(0,a.jsx)(n.li,{children:"Used as a library to support building research projects on top of it."}),"\n",(0,a.jsx)(n.li,{children:"Models can be exported to TorchScript format or Caffe2 format for deployment."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"!pip install opencv-python matplotlib\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"!python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"detectron2--retinanetr50-fpn",children:"Detectron2 :: RetinaNetR50 FPN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import detectron2\n\n#https://github.com/facebookresearch/detectron2/blob/main/MODEL_ZOO.md\nfrom detectron2 import model_zoo\nfrom detectron2.engine import DefaultPredictor\nfrom detectron2.config import get_cfg\nfrom detectron2.utils.visualizer import Visualizer\nfrom detectron2.data import MetadataCatalog\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport torch, os, json, cv2, random\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Setup detectron2 logger\nfrom detectron2.utils.logger import setup_logger\nsetup_logger()\n"})}),"\n",(0,a.jsx)(n.h3,{id:"coco-dataset",children:"COCO dataset"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# https://cocodataset.org/#home\nmetadata = MetadataCatalog.get("coco_2017_val")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Retrieve class names from metadata\nclass_names = metadata.get("thing_classes")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Print the predicted class names\nprint("Classes:", len(class_names))\nprint("Class Names:", class_names)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Classes: 80\nClass Names: ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush']"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Classes: 80"}),"\n",(0,a.jsx)(n.li,{children:"Class Names: ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', 'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', 'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', 'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', 'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', 'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', 'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', 'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', 'hair drier', 'toothbrush']"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"create-config",children:"Create Config"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'#https://github.com/facebookresearch/detectron2/tree/main/configs/COCO-Detection\ncfg_ret50fpn = get_cfg()\ncfg_ret50fpn.merge_from_file(model_zoo.get_config_file("COCO-Detection/retinanet_R_50_FPN_1x.yaml"))\ncfg_ret50fpn.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.05  # set threshold for this model\ncfg_ret50fpn.MODEL.WEIGHTS = model_zoo.get_checkpoint_url("COCO-Detection/retinanet_R_50_FPN_1x.yaml")\n'})}),"\n",(0,a.jsx)(n.p,{children:"Loading config /opt/conda/lib/python3.10/site-packages/detectron2/model_zoo/configs/COCO-Detection/../Base-RetinaNet.yaml with yaml.unsafe_load. Your machine may be at risk if the file contains malicious content."}),"\n",(0,a.jsx)(n.h3,{id:"create-predictor",children:"Create predictor"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"predictor_ret50fpn = DefaultPredictor(cfg_ret50fpn)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\x1b[32m[08/25 13:21:43 d2.checkpoint.detection_checkpoint]: \x1b[0m[DetectionCheckpointer] Loading from ",(0,a.jsx)(n.a,{href:"https://dl.fbaipublicfiles.com/detectron2/COCO-Detection/retinanet_R_50_FPN_1x/190397773/model_final_bfca0b.pkl",children:"https://dl.fbaipublicfiles.com/detectron2/COCO-Detection/retinanet_R_50_FPN_1x/190397773/model_final_bfca0b.pkl"})," ..."]}),"\n",(0,a.jsx)(n.p,{children:"The checkpoint state_dict contains keys that are not used by the model:\n\x1b[35mpixel_mean\x1b[0m\n\x1b[35mpixel_std\x1b[0m"}),"\n",(0,a.jsx)(n.h3,{id:"make-prediction",children:"Make Prediction"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"image1 = plt.imread('../datasets/snapshots/Harbin.jpg')\nimage2 = plt.imread('../datasets/snapshots/Hongkong.jpg')\nimage3 = plt.imread('../datasets/snapshots/Kathmandu.jpg')\nimage4 = plt.imread('../datasets/snapshots/Tea.jpg')\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"pred1 = predictor_ret50fpn(image1)\npred2 = predictor_ret50fpn(image2)\npred3 = predictor_ret50fpn(image3)\npred4 = predictor_ret50fpn(image4)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"print(pred1)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"visualize-results",children:"Visualize Results"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'visualized_pred1 = Visualizer(image1[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred1 = visualized_pred1.draw_instance_predictions(pred1["instances"].to("cpu"))\n\nvisualized_pred2 = Visualizer(image2[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred2 = visualized_pred2.draw_instance_predictions(pred2["instances"].to("cpu"))\n\nvisualized_pred3 = Visualizer(image3[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred3 = visualized_pred3.draw_instance_predictions(pred3["instances"].to("cpu"))\n\nvisualized_pred4 = Visualizer(image4[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred4 = visualized_pred4.draw_instance_predictions(pred4["instances"].to("cpu"))\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"plt.figure(figsize=(24, 14))\n\nax = plt.subplot(2, 2, 1)\nplt.title('Harbin')\nplt.imshow(visualized_pred1.get_image()[:, :, ::-1])\nplt.axis(\"off\")\nax = plt.subplot(2, 2, 2)\nplt.title('Hongkong')\nplt.imshow(visualized_pred2.get_image()[:, :, ::-1])\nplt.axis(\"off\")\nax = plt.subplot(2, 2, 3)\nplt.title('Kathmandu')\nplt.imshow(visualized_pred3.get_image()[:, :, ::-1])\nplt.axis(\"off\")\nax = plt.subplot(2, 2, 4)\nplt.title('Shenzhen')\nplt.imshow(visualized_pred4.get_image()[:, :, ::-1])\nplt.axis(\"off\")\n\nplt.savefig(\"./assets/Object_Detection_Detectron2_01.webp\", bbox_inches='tight')\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Detectron2 :: RetinaNetR50 FPN",src:t(443076).A+"",width:"1830",height:"1120"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Get the predicted class labels for each instance in the image1\npred4_classes = pred4["instances"].pred_classes.tolist()\n# Map the predicted class labels to class names\npred4_class_names = [class_names[class_id] for class_id in pred4_classes]\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'print("Predicted Class Names:", pred4_class_names)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Predicted Class Names: ['cup', 'teddy bear', 'dining table', 'chair', 'umbrella', 'backpack', 'backpack', 'chair', 'chair', 'backpack', 'handbag', 'bowl', 'handbag', 'backpack', 'couch', 'fire hydrant', 'handbag', 'handbag', 'motorcycle', 'chair', 'spoon', 'chair', 'chair', 'chair', 'couch', 'dining table', 'chair', 'couch', 'chair', 'bowl', 'cup', 'spoon', 'fire hydrant', 'suitcase', 'chair', 'chair', 'couch', 'dining table', 'couch', 'teddy bear', 'backpack', 'spoon', 'backpack', 'chair', 'chair', 'cake', 'spoon', 'chair', 'umbrella', 'spoon', 'suitcase', 'dining table', 'bench', 'handbag', 'hot dog', 'person', 'chair', 'chair', 'bottle', 'motorcycle', 'dining table', 'surfboard', 'chair', 'dog', 'cup', 'bed', 'fire hydrant', 'bench', 'spoon', 'chair', 'dining table', 'person', 'cup', 'motorcycle', 'dining table', 'handbag', 'dining table', 'backpack', 'person', 'book', 'dog', 'spoon', 'traffic light', 'spoon', 'car', 'cup', 'chair', 'chair', 'umbrella', 'potted plant', 'umbrella', 'chair', 'backpack', 'couch', 'bench', 'teddy bear', 'chair', 'frisbee', 'book', 'backpack']"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'print(pred4["instances"].pred_boxes)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Boxes(tensor([[7.5032e+02, 8.3579e+02, 1.0165e+03, 1.0919e+03],\n[4.5623e+02, 3.1689e+02, 8.1636e+02, 7.4694e+02],\n[0.0000e+00, 6.1417e+02, 1.3399e+03, 1.1833e+03],\n[7.2032e+02, 1.0723e+02, 8.9391e+02, 4.4559e+02],\n[3.2083e+02, 3.0528e+01, 7.7024e+02, 2.1227e+02],\n[8.4085e+02, 3.9479e+02, 1.3105e+03, 6.9813e+02],\n[7.5880e+02, 2.2533e+02, 1.3731e+03, 7.2955e+02],\n[7.8558e+02, 2.2329e+02, 1.3726e+03, 6.8365e+02],\n[1.1860e+03, 2.5116e+01, 1.2779e+03, 2.7582e+02],\n[8.1013e+02, 4.0019e+02, 9.8632e+02, 5.8373e+02],\n[8.1013e+02, 4.0019e+02, 9.8632e+02, 5.8373e+02],\n[8.2481e+02, 7.2680e+02, 1.1324e+03, 8.6498e+02],\n[7.4434e+02, 2.8724e+02, 1.3580e+03, 7.3182e+02],\n[6.8704e+02, 3.9568e+02, 1.0127e+03, 6.0175e+02],\n[7.8022e+02, 2.1769e+02, 1.3776e+03, 7.3585e+02],\n[1.5722e+02, 6.5533e+02, 4.3857e+02, 1.0510e+03],\n[6.8969e+02, 4.0100e+02, 1.0348e+03, 6.1360e+02],\n[8.7533e+02, 3.9571e+02, 1.3139e+03, 7.0384e+02],\n[1.5862e+02, 6.4063e+02, 4.4621e+02, 1.0629e+03],\n[2.8012e+02, 3.6851e+01, 8.4743e+02, 5.0451e+02],\n[3.5919e+01, 9.7240e+01, 9.8737e+01, 2.9800e+02],\n[8.6972e+02, 8.7468e+00, 1.2682e+03, 2.8336e+02],\n[1.6344e+03, 1.1884e+00, 1.9128e+03, 4.5059e+02],\n[7.9147e+02, 1.9224e+02, 1.3327e+03, 4.7618e+02],\n[6.7837e+02, 1.1787e+02, 8.9332e+02, 4.5768e+02],\n[7.3390e+02, 4.7911e+00, 9.1546e+02, 1.0396e+02],\n[3.2218e+02, 1.5494e+02, 1.2987e+03, 7.1676e+02],\n[0.0000e+00, 2.6725e+02, 1.3773e+03, 1.1797e+03],\n[1.2055e+03, 4.3084e+00, 1.8198e+03, 4.0137e+02],\n[7.4823e+02, 8.3718e+02, 1.0123e+03, 1.0912e+03],\n[7.6476e+02, 7.6766e+02, 1.0802e+03, 1.0118e+03],\n[9.2063e+02, 9.9533e+02, 1.0290e+03, 1.1150e+03],\n[1.3615e+02, 5.8776e+02, 9.3826e+02, 1.1213e+03],\n[7.7753e+02, 2.1782e+02, 1.3709e+03, 7.2631e+02],\n[5.6152e+02, 1.4398e+02, 8.6540e+02, 4.4742e+02],\n[7.0124e+02, 6.5567e+01, 1.3067e+03, 5.8078e+02],\n[8.0684e+02, 2.2491e+02, 1.3762e+03, 4.7548e+02],\n[5.9752e+02, 6.6638e+02, 1.3363e+03, 1.1799e+03],\n[1.7012e+02, 1.2910e+02, 1.3574e+03, 8.7601e+02],\n[2.3051e+02, 2.4831e+02, 7.9146e+02, 9.3518e+02],\n[7.9394e+02, 3.8540e+02, 1.1041e+03, 6.1946e+02],\n[1.2303e+01, 2.8077e+01, 1.0179e+02, 3.1711e+02],\n[6.7459e+02, 4.1281e+02, 8.4533e+02, 5.3682e+02],\n[2.0206e+02, 3.3214e+01, 7.5715e+02, 7.7657e+02],\n[7.3279e+02, 3.4189e+00, 9.1173e+02, 1.1811e+02],\n[8.2613e+02, 7.3228e+02, 1.1259e+03, 8.5920e+02],\n[9.1615e+02, 1.0621e+03, 9.9989e+02, 1.1143e+03],\n[3.1322e+02, 2.8251e+01, 7.8816e+02, 3.1067e+02],\n[2.8198e+02, 3.5062e+01, 8.1181e+02, 3.4915e+02],\n[9.2545e+02, 1.0336e+03, 1.0134e+03, 1.1046e+03],\n[8.3658e+02, 3.9110e+02, 1.3083e+03, 7.0459e+02],\n[3.0577e+02, 5.9517e+01, 8.2031e+02, 4.3435e+02],\n[1.2049e+03, 2.5651e+00, 1.8861e+03, 4.4088e+02],\n[7.0187e+02, 4.1893e+02, 1.2162e+03, 6.6233e+02],\n[8.2952e+02, 7.3467e+02, 1.1121e+03, 8.4077e+02],\n[4.5269e+02, 3.0973e+02, 8.1299e+02, 7.4734e+02],\n[6.1368e+02, 3.7062e+01, 9.1203e+02, 4.1556e+02],\n[1.1235e+02, 2.1249e+02, 1.3606e+03, 1.0614e+03],\n[1.5391e+02, 6.3798e+02, 5.1051e+02, 1.0622e+03],\n[1.0397e+02, 6.0987e+02, 7.3403e+02, 1.1019e+03],\n[2.2070e+02, 2.5526e+02, 1.8213e+03, 1.1836e+03],\n[3.2086e+02, 2.9298e+01, 7.7229e+02, 2.1290e+02],\n[7.3922e+02, 1.1490e+02, 8.9605e+02, 2.8698e+02],\n[7.4434e+02, 2.8724e+02, 1.3580e+03, 7.3182e+02],\n[9.1876e+02, 9.8947e+02, 1.0331e+03, 1.1133e+03],\n[0.0000e+00, 2.6725e+02, 1.3773e+03, 1.1797e+03],\n[1.6645e+02, 5.0531e+02, 5.6949e+02, 1.0385e+03],\n[0.0000e+00, 2.5316e+02, 1.3601e+03, 1.1741e+03],\n[7.6692e+02, 1.0235e+03, 9.6107e+02, 1.0947e+03],\n[7.6536e+02, 4.7937e+00, 1.4419e+03, 4.0545e+02],\n[5.8641e+01, 1.1717e+02, 1.1819e+03, 1.0998e+03],\n[1.3505e+03, 5.2488e+02, 1.4989e+03, 6.7136e+02],\n[6.5753e+02, 7.5917e+02, 1.1873e+03, 1.1627e+03],\n[1.6645e+02, 5.0531e+02, 5.6949e+02, 1.0385e+03],\n[1.5145e+02, 3.2576e+01, 7.9151e+02, 5.8572e+02],\n[6.7443e+02, 4.1283e+02, 8.4386e+02, 5.3478e+02],\n[3.1505e+02, 3.2605e+01, 7.8036e+02, 2.1954e+02],\n[1.6165e+02, 6.4875e+02, 4.1424e+02, 1.0615e+03],\n[6.7628e+02, 2.5871e+02, 1.3349e+03, 7.3427e+02],\n[0.0000e+00, 6.0263e+02, 1.3509e+03, 1.1840e+03],\n[4.5317e+02, 3.1620e+02, 8.0097e+02, 7.3942e+02],\n[7.9191e+02, 9.9699e+02, 1.0284e+03, 1.1077e+03],\n[1.5391e+02, 6.3798e+02, 5.1051e+02, 1.0622e+03],\n[9.0375e+02, 1.0729e+03, 9.8585e+02, 1.1289e+03],\n[3.2086e+02, 2.9298e+01, 7.7229e+02, 2.1290e+02],\n[8.0277e+02, 7.2832e+02, 1.1215e+03, 9.1876e+02],\n[7.0826e+02, 2.9223e+01, 1.0047e+03, 3.9685e+02],\n[7.2694e+02, 6.0567e+01, 9.0160e+02, 2.3447e+02],\n[1.6469e+03, 0.0000e+00, 1.9145e+03, 4.6891e+02],\n[2.2019e+02, 1.4834e+02, 1.0011e+03, 9.4077e+02],\n[2.5319e+02, 4.0703e+01, 8.2210e+02, 6.1827e+02],\n[6.8020e+02, 1.3898e+02, 1.1057e+03, 4.4531e+02],\n[9.6337e+02, 3.8969e+02, 1.2862e+03, 6.0950e+02],\n[5.1529e+02, 1.0267e+02, 1.5054e+03, 7.0044e+02],\n[7.3390e+02, 4.7911e+00, 9.1546e+02, 1.0396e+02],\n[3.3230e+02, 1.4250e+02, 7.9080e+02, 6.5690e+02],\n[2.5328e+02, 3.2533e+01, 5.0888e+02, 6.8538e+02],\n[3.1989e+02, 2.7603e+01, 7.6975e+02, 2.1365e+02],\n[6.5501e+02, 0.0000e+00, 6.9431e+02, 5.4879e+01],\n[1.0255e+03, 3.6220e+02, 1.3439e+03, 7.3316e+02]], device='cuda:0'))"}),"\n",(0,a.jsx)(n.h2,{id:"detectron2--faster-rcnn-r101-fpn",children:"Detectron2 :: Faster RCNN R101 FPN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'#https://github.com/facebookresearch/detectron2/tree/main/configs/COCO-Detection\ncfg_frcnn101fpn = get_cfg()\ncfg_frcnn101fpn.merge_from_file(model_zoo.get_config_file("COCO-Detection/faster_rcnn_R_101_FPN_3x.yaml"))\ncfg_frcnn101fpn.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.5  # set threshold for this model\ncfg_frcnn101fpn.MODEL.WEIGHTS = model_zoo.get_checkpoint_url("COCO-Detection/faster_rcnn_R_101_FPN_3x.yaml")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"predictor_frcnn101fpn = DefaultPredictor(cfg_frcnn101fpn)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\x1b[32m[08/25 13:29:19 d2.checkpoint.detection_checkpoint]: \x1b[0m[DetectionCheckpointer] Loading from ",(0,a.jsx)(n.a,{href:"https://dl.fbaipublicfiles.com/detectron2/COCO-Detection/faster_rcnn_R_101_FPN_3x/137851257/model_final_f6e8b1.pkl",children:"https://dl.fbaipublicfiles.com/detectron2/COCO-Detection/faster_rcnn_R_101_FPN_3x/137851257/model_final_f6e8b1.pkl"})," ..."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"pred5 = predictor_frcnn101fpn(image1)\npred6 = predictor_frcnn101fpn(image2)\npred7 = predictor_frcnn101fpn(image3)\npred8 = predictor_frcnn101fpn(image4)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'visualized_pred5 = Visualizer(image1[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred5 = visualized_pred5.draw_instance_predictions(pred5["instances"].to("cpu"))\n\nvisualized_pred6 = Visualizer(image2[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred6 = visualized_pred6.draw_instance_predictions(pred6["instances"].to("cpu"))\n\nvisualized_pred7 = Visualizer(image3[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred7 = visualized_pred7.draw_instance_predictions(pred7["instances"].to("cpu"))\n\nvisualized_pred8 = Visualizer(image4[:, :, ::-1], MetadataCatalog.get(cfg.DATASETS.TRAIN[0]), scale=1.2)\nvisualized_pred8 = visualized_pred8.draw_instance_predictions(pred8["instances"].to("cpu"))\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"plt.figure(figsize=(24, 14))\n\nax = plt.subplot(2, 2, 1)\nplt.title('Harbin')\nplt.imshow(visualized_pred5.get_image()[:, :, ::-1])\nplt.axis(\"off\")\nax = plt.subplot(2, 2, 2)\nplt.title('Hongkong')\nplt.imshow(visualized_pred6.get_image()[:, :, ::-1])\nplt.axis(\"off\")\nax = plt.subplot(2, 2, 3)\nplt.title('Kathmandu')\nplt.imshow(visualized_pred7.get_image()[:, :, ::-1])\nplt.axis(\"off\")\nax = plt.subplot(2, 2, 4)\nplt.title('Shenzhen')\nplt.imshow(visualized_pred8.get_image()[:, :, ::-1])\nplt.axis(\"off\")\n\nplt.savefig(\"../assets/Object_Detection_Detectron2_02.webp\", bbox_inches='tight')\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Detectron2 :: Faster RCNN R101 FPN",src:t(890561).A+"",width:"1830",height:"1120"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# Get the predicted class labels for each instance in the image1\npred8_classes = pred8["instances"].pred_classes.tolist()\n# Map the predicted class labels to class names\npred8_class_names = [class_names[class_id] for class_id in pred8_classes]\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'print("Predicted Class Names:", pred8_class_names)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Predicted Class Names: ['cup', 'teddy bear', 'dining table', 'chair', 'backpack', 'chair', 'bowl']"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'print(pred8["instances"].pred_boxes)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Boxes(tensor([[ 749.6494,  837.2590, 1029.4165, 1090.3832],\n[ 446.9825,  315.1858,  796.4763,  810.3347],\n[   0.0000,  596.0012, 1343.7590, 1174.9941],\n[ 710.6813,  115.2629,  896.0451,  422.0094],\n[ 708.7178,  384.5089, 1328.7939,  706.4788],\n[ 780.0182,  225.4701, 1379.0797,  620.4463],\n[ 817.5123,  729.8907, 1131.7351,  870.5685]], device='cuda:0'))"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},443076:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Object_Detection_Detectron2_01-f0d085625fc9355f7121b693ba4b28e9.webp"},890561:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Object_Detection_Detectron2_02-c0ea058a76d2852971e9ffaaed5e4d88.webp"},603849:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f940fa4541ff8a00764cf3f41cd6b985.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(296540);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);