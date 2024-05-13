"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[91577],{514290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(474848),s=t(28453);const r={sidebar_position:4129,slug:"2023-08-29",title:"Image Segmentation with PyTorch (Faster RCNN)",authors:"mpolinowski",tags:["Python","Machine Learning","PyTorch"],description:"Detectron2 is a platform for object detection, segmentation and other visual recognition tasks."},i="Object Detection",o={id:"IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/index",title:"Image Segmentation with PyTorch (Faster RCNN)",description:"Detectron2 is a platform for object detection, segmentation and other visual recognition tasks.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn",slug:"/IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/2023-08-29",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/2023-08-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-29--semantic-segmentation-detectron2-model-zoo-faster-rcnn/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"PyTorch",permalink:"/docs/tags/py-torch"}],version:"current",sidebarPosition:4129,frontMatter:{sidebar_position:4129,slug:"2023-08-29",title:"Image Segmentation with PyTorch (Faster RCNN)",authors:"mpolinowski",tags:["Python","Machine Learning","PyTorch"],description:"Detectron2 is a platform for object detection, segmentation and other visual recognition tasks."},sidebar:"tutorialSidebar",previous:{title:"Instance Segmentation with PyTorch (Mask RCNN)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-30--instance_segmentation_detectron2_model_zoo_mask_rcnn/2023-08-30"},next:{title:"Image Segmentation with PyTorch (RCNN)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/2023-08-28"}},d={},l=[{value:"Detectron2 :: Faster RCNN R101 FPN",id:"detectron2--faster-rcnn-r101-fpn",level:2},{value:"Custom Dataset",id:"custom-dataset",level:3},{value:"Model Training",id:"model-training",level:2},{value:"Inference &amp; Evaluation",id:"inference--evaluation",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TST, Hong Kong",src:t(886144).A+"",width:"1500",height:"811"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#object-detection",children:"Object Detection"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#detectron2--faster-rcnn-r101-fpn",children:"Detectron2 :: Faster RCNN R101 FPN"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#custom-dataset",children:"Custom Dataset"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#model-training",children:"Model Training"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#inference--evaluation",children:"Inference & Evaluation"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/pt-seg-i-see-you",children:"Github Repository"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Related"}),":"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-27--image-segmentation-with-pytorch/2023-08-27",children:"Image Segmentation with PyTorch"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-28--semantic-segmentation-detectron2-model-zoo/2023-08-28",children:"Semantic Segmentation Detectron2 Model Zoo"})}),"\n",(0,a.jsx)(n.li,{children:"Semantic Segmentation Detectron2 Model Zoo: Faster RCNN"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-30--instance_segmentation_detectron2_model_zoo_mask_rcnn/2023-08-30",children:"Semantic Segmentation Detectron2 Model Zoo: Mask RCNN"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-08-31--semantic_segmentation_detectron2_openimages_dataset/2023-08-31",children:"Detectron Object Detection with OpenImages Dataset (WIP)"})}),"\n"]}),"\n",(0,a.jsx)(n.h1,{id:"object-detection",children:"Object Detection"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://detectron2.readthedocs.io/en/latest/",children:"Detectron2"})," is a platform for object detection, segmentation and other visual recognition tasks."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Includes new capabilities such as panoptic segmentation, Densepose, Cascade R-CNN, rotated bounding boxes, PointRend, DeepLab, ViTDet, MViTv2 etc."}),"\n",(0,a.jsx)(n.li,{children:"Used as a library to support building research projects on top of it."}),"\n",(0,a.jsx)(n.li,{children:"Models can be exported to TorchScript format or Caffe2 format for deployment."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"!pip install opencv-python matplotlib\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"!python -m pip install 'git+https://github.com/facebookresearch/detectron2.git'\n"})}),"\n",(0,a.jsx)(n.h2,{id:"detectron2--faster-rcnn-r101-fpn",children:"Detectron2 :: Faster RCNN R101 FPN"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"import detectron2\n\n#https://github.com/facebookresearch/detectron2/blob/main/MODEL_ZOO.md\nfrom detectron2 import model_zoo\nfrom detectron2.data import DatasetCatalog, build_detection_test_loader\nfrom detectron2.evaluation import COCOEvaluator, inference_on_dataset\nfrom detectron2.engine import DefaultTrainer, DefaultPredictor\nfrom detectron2.config import get_cfg\nfrom detectron2.structures import BoxMode\nfrom detectron2.utils.visualizer import Visualizer\nfrom detectron2.data import MetadataCatalog\n\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport torch, os, json, cv2, random\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"# Setup detectron2 logger\nfrom detectron2.utils.logger import setup_logger\nsetup_logger()\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'CLASS_LABELS = ["balloon"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"custom-dataset",children:"Custom Dataset"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/matterport/Mask_RCNN/releases/download/v2.1/balloon_dataset.zip",children:"Balloon Dataset"})}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"dataset_path = '../datasets/balloon/'\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'# # if your dataset is in COCO format:\n# from detectron2.data.datasets import register_coco_instances\n# register_coco_instances("dataset_train", {}, "../datasets/balloon/train/via_region_data.json", "../datasets/balloon/train/")\n# register_coco_instances("dataset_val", {}, "../datasets/balloon/val/via_region_data.json", "../datasets/balloon/val/")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'def get_ds_dicts(dataset_path):\n    json_file = os.path.join(dataset_path, "via_region_data.json")\n    \n    with open(json_file) as f:\n        imgs_anns = json.load(f)\n\n    dataset_dicts = []\n\n    for idx, v in enumerate(imgs_anns.values()):\n        record = {}\n        filename = os.path.join(dataset_path, v["filename"])\n        height, width = cv2.imread(filename).shape[:2]\n        \n        record["file_name"] = filename\n        record["image_id"] = idx\n        record["height"] = height\n        record["width"] = width\n\n        annos = v["regions"]\n        objs = []\n\n        for _, anno in annos.items():\n            assert not anno["region_attributes"]\n            anno = anno["shape_attributes"]\n            px = anno["all_points_x"]\n            py = anno["all_points_y"]\n            poly = [(x + 0.5, y + 0.5) for x, y in zip(px, py)]\n            poly = [p for x in poly for p in x]\n\n            obj = {\n                "bbox": [np.min(px), np.min(py), np.max(px), np.max(py)],\n                "bbox_mode": BoxMode.XYXY_ABS,\n                "segmentation": [poly],\n                "category_id": 0,\n            }\n\n            objs.append(obj)\n\n        record["annotations"] = objs\n        dataset_dicts.append(record)\n\n    return dataset_dicts\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'for d in ["train", "val"]:\n    DatasetCatalog.register("balloon_" + d, lambda d=d: get_ds_dicts(dataset_path + d))\n    MetadataCatalog.get("balloon_" + d).set(thing_classes=CLASS_LABELS)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'metadata = MetadataCatalog.get("balloon_train")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'dataset_dicts = get_ds_dicts(dataset_path + "train")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'dataset_dicts[0]["file_name"]\n'})}),"\n",(0,a.jsx)(n.p,{children:"'../datasets/balloon/train/34020010494_e5cb88e1c4_k.jpg'"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'for d in random.sample(dataset_dicts, 1):\n    img = plt.imread(d["file_name"])\n    # plt.imshow(img)\n    visualizer = Visualizer(img[:, :, ::-1], metadata=metadata, scale=0.5)\n    out = visualizer.draw_dataset_dict(d)\n    plt.imshow(out.get_image()[:, :, ::-1])\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"png",src:t(926987).A+"",width:"456",height:"418"})}),"\n",(0,a.jsx)(n.h2,{id:"model-training",children:"Model Training"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'cfg = get_cfg()\ncfg.merge_from_file(model_zoo.get_config_file("COCO-Detection/faster_rcnn_R_101_FPN_3x.yaml"))\ncfg.DATASETS.TRAIN = ("balloon_train",)\ncfg.DATASETS.TEST = ()\ncfg.DATALOADER.NUM_WORKERS = 2\ncfg.MODEL.WEIGHTS = model_zoo.get_checkpoint_url("COCO-Detection/faster_rcnn_R_101_FPN_3x.yaml")  # initialize from model zoo\ncfg.SOLVER.IMS_PER_BATCH = 2\ncfg.SOLVER.BASE_LR = 0.00025\ncfg.SOLVER.MAX_ITER = 500\ncfg.SOLVER.STEPS = []  # do not decay learning rate\ncfg.MODEL.ROI_HEADS.BATCH_SIZE_PER_IMAGE = 128 # faster, and good enough for this toy dataset\ncfg.MODEL.ROI_HEADS.NUM_CLASSES = 1  # only has one class (ballon)\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"os.makedirs(cfg.OUTPUT_DIR, exist_ok=True)\n\ntrainer = DefaultTrainer(cfg)\ntrainer.resume_or_load(resume=False)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"trainer.train()\n"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"iter: 499  total_loss: 0.1755  loss_cls: 0.0539  loss_box_reg: 0.1116  loss_rpn_cls: 0.007705  loss_rpn_loc: 0.003967    time: 0.8457  last_time: 0.8804  data_time: 0.0034  last_data_time: 0.0020   lr: 0.0002495  max_mem: 3624M"}),"\n",(0,a.jsx)(n.li,{children:"Overall training speed: 498 iterations in 0:07:01 (0.8457 s / it)"}),"\n",(0,a.jsx)(n.li,{children:"Total training time: 0:07:10 (0:00:09 on hooks)"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"inference--evaluation",children:"Inference & Evaluation"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"%load_ext tensorboard\n%tensorboard --logdir output\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Detectron2 :: Faster RCNN R101 FPN",src:t(992832).A+"",width:"898",height:"363"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'cfg.MODEL.WEIGHTS = os.path.join(cfg.OUTPUT_DIR, "model_final.pth")\ncfg.MODEL.ROI_HEADS.SCORE_THRESH_TEST = 0.7   # set the testing threshold for this model\ncfg.DATASETS.TEST = ("balloon_val", )\npredictor = DefaultPredictor(cfg)\n'})}),"\n",(0,a.jsx)(n.p,{children:"\x1b[32m[08/26 10:52:54 d2.checkpoint.detection_checkpoint]: \x1b[0m[DetectionCheckpointer] Loading from ./output/model_final.pth ..."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'dataset_dicts = get_ds_dicts(dataset_path + "val")\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'plt.figure(figsize=(14, 10))\n\nc = 1\n\nfor i in random.sample(dataset_dicts, 4):\n    im = cv2.imread(i["file_name"])\n    outputs = predictor(im)\n\n    v = Visualizer(im[:, :, ::-1], metadata=metadata, scale=0.8)\n    v = v.draw_instance_predictions(outputs["instances"].to("cpu"))\n    \n    ax = plt.subplot(2, 2, c)\n    plt.imshow(cv2.cvtColor(v.get_image()[:, :, ::-1], cv2.COLOR_BGR2RGB))\n    plt.axis("off")\n\n    c += 1\n\nplt.savefig("./assets/Object_Detection_Detectron2_03.webp", bbox_inches=\'tight\')\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Detectron2 :: Faster RCNN R101 FPN",src:t(14681).A+"",width:"968",height:"790"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'evaluator = COCOEvaluator("balloon_val", ("bbox",), False, output_dir="./output/")\nval_loader = build_detection_test_loader(cfg, "balloon_val")\n\nprint(inference_on_dataset(trainer.model, val_loader, evaluator))\n'})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Precision"}),(0,a.jsx)(n.td,{children:"(AP) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area=   all"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.767"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Precision"}),(0,a.jsx)(n.td,{children:"(AP) @[ IoU=0.50"}),(0,a.jsx)(n.td,{children:"area=   all"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.921"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Precision"}),(0,a.jsx)(n.td,{children:"(AP) @[ IoU=0.75"}),(0,a.jsx)(n.td,{children:"area=   all"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.844"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Precision"}),(0,a.jsx)(n.td,{children:"(AP) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area= small"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.184"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Precision"}),(0,a.jsx)(n.td,{children:"(AP) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area=medium"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.591"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Precision"}),(0,a.jsx)(n.td,{children:"(AP) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area= large"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.902"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Recall"}),(0,a.jsx)(n.td,{children:"(AR) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area=   all"}),(0,a.jsx)(n.td,{children:"maxDets=  1 ] = 0.242"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Recall"}),(0,a.jsx)(n.td,{children:"(AR) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area=   all"}),(0,a.jsx)(n.td,{children:"maxDets= 10 ] = 0.786"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Recall"}),(0,a.jsx)(n.td,{children:"(AR) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area=   all"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.808"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Recall"}),(0,a.jsx)(n.td,{children:"(AR) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area= small"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.467"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Recall"}),(0,a.jsx)(n.td,{children:"(AR) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area=medium"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.659"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Average Recall"}),(0,a.jsx)(n.td,{children:"(AR) @[ IoU=0.50:0.95"}),(0,a.jsx)(n.td,{children:"area= large"}),(0,a.jsx)(n.td,{children:"maxDets=100 ] = 0.927"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Evaluation results for bbox:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"AP"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"AP50"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"AP75"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"APs"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"APm"}),(0,a.jsx)(n.th,{style:{textAlign:"center"},children:"APl"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"76.726"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"92.089"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"84.378"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"18.366"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"59.092"}),(0,a.jsx)(n.td,{style:{textAlign:"center"},children:"90.191"})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},14681:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/Object_Detection_Detectron2_03-9905bfd0b38bda7909367d20a708ea6c.webp"},992832:(e,n,t)=>{t.d(n,{A:()=>a});const a="data:image/webp;base64,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"},926987:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/output_15_0-7fb70015ac2a11f1c7edfc601331f5a7.png"},886144:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-f940fa4541ff8a00764cf3f41cd6b985.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(296540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);