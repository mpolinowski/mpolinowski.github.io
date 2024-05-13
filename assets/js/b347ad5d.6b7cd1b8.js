"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[58017],{191903:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=o(474848),i=o(28453);const r={sidebar_position:4780,slug:"2023-01-14",title:"YOLOv7 to Tensorflow",authors:"mpolinowski",tags:["Python","Machine Learning","YOLO","Torch","Tensorflow"],description:"Converting a YOLOv7 PyTorch Model to Tensorflow (Lite)"},s=void 0,a={id:"IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow/index",title:"YOLOv7 to Tensorflow",description:"Converting a YOLOv7 PyTorch Model to Tensorflow (Lite)",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow",slug:"/IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow/2023-01-14",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow/2023-01-14",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"YOLO",permalink:"/docs/tags/yolo"},{label:"Torch",permalink:"/docs/tags/torch"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:4780,frontMatter:{sidebar_position:4780,slug:"2023-01-14",title:"YOLOv7 to Tensorflow",authors:"mpolinowski",tags:["Python","Machine Learning","YOLO","Torch","Tensorflow"],description:"Converting a YOLOv7 PyTorch Model to Tensorflow (Lite)"},sidebar:"tutorialSidebar",previous:{title:"OpenCV Count My Money",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/2023-01-28"},next:{title:"YOLOv7 Label Conversion",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-13-yolov7_data_conversion/2023-01-13"}},l={},d=[{value:"YOLO PyTorch to ONNX",id:"yolo-pytorch-to-onnx",level:2},{value:"Converting the Onnx Model to Tensorflow",id:"converting-the-onnx-model-to-tensorflow",level:2},{value:"Converting the TensorFlow model to tflite",id:"converting-the-tensorflow-model-to-tflite",level:2},{value:"Predictions using TFlite",id:"predictions-using-tflite",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Guangzhou, China",src:o(328389).A+"",width:"1500",height:"652"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#yolo-pytorch-to-onnx",children:"YOLO PyTorch to ONNX"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#converting-the-onnx-model-to-tensorflow",children:"Converting the Onnx Model to Tensorflow"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#converting-the-tensorflow-model-to-tflite",children:"Converting the TensorFlow model to tflite"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#predictions-using-tflite",children:"Predictions using TFlite"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The YOLOv7 model created is based on PyTorch. The ",(0,t.jsx)(n.a,{href:"https://github.com/WongKinYiu/yolov7#export",children:"YOLOv7 Repository"})," already provides 3 export options to CoreML, ONNX and TensorRT. We can use those to - indirectly - transfer our YOLO model to Tensorflow."]}),"\n",(0,t.jsx)(n.h2,{id:"yolo-pytorch-to-onnx",children:"YOLO PyTorch to ONNX"}),"\n",(0,t.jsxs)(n.p,{children:["Now we can use the export script from the ",(0,t.jsx)(n.a,{href:"https://github.com/WongKinYiu/yolov7#export",children:"YOLOv7 repository"})," to convert the YOLOv7 model. Since I want to end up at Tensorflow Lite I will try out the ",(0,t.jsx)(n.a,{href:"https://github.com/WongKinYiu/yolov7/releases",children:"yolov7-tiny.pt weights"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/WongKinYiu/yolov7/releases/download/v0.1/yolov7-tiny.pt\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"python export.py --weights weights/yolov7-tiny.pt --grid --end2end --simplify \\\n--topk-all 100 --iou-thres 0.65 --conf-thres 0.35 --img-size 640 640 --max-wh 640\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"grid"}),": The grid parameter is an option allowing the export of the detection layer grid."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"end2end"}),": This option allows the export of end-to-end ONNX graph which does both bounding box prediction and NMS."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"simplify"}),": It is the option by which we can select whether we want to simplify the ONNX graph using reparameterization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"topk-all"}),": It's the option to select the top k object per image using IOU and confidence threshold."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"iou-thres"}),": It is the option to set the IOU threshold for NMS."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"conf-thres"}),": It is the option to select the confidence threshold score."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"img_size"})," / ",(0,t.jsx)(n.code,{children:"max-wh"}),": These parameters are related to the size of the input image."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Starting TorchScript export with torch 1.13.1+cu117...\nStarting TorchScript-Lite export with torch 1.13.1+cu117...\nTorchScript-Lite export success, saved as weights/yolov7-tiny.torchscript.ptl\nStarting ONNX export with onnx 1.13.0...\nStarting to simplify ONNX...\nONNX export success, saved as weights/yolov7-tiny.onnx\nExport complete (5.26s)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"converting-the-onnx-model-to-tensorflow",children:"Converting the Onnx Model to Tensorflow"}),"\n",(0,t.jsxs)(n.p,{children:["We use the ",(0,t.jsx)(n.code,{children:"onnx-tf"})," module to perform the conversion between ONNX and Tensorflow. For the conversion to Tensorflow we need the following ONNX dependencies (I already had Tensorflow installed but was missing ",(0,t.jsx)(n.code,{children:"tensorflow-probability"}),"):"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pip install onnx-tf tensorflow-probability\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["I also had ",(0,t.jsx)(n.code,{children:"onnx"}),", ",(0,t.jsx)(n.code,{children:"onnxruntime"})," and ",(0,t.jsx)(n.code,{children:"onnxsim"})," installed - I am not sure if they are necessary for the conversion."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"onnx-tf convert -i weights/yolov7-tiny.onnx -o weights\n\nINFO:onnx-tf:Converting completes successfully.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This now generated the Tensorflow files we need inside the ",(0,t.jsx)(n.code,{children:"weights"})," directory:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"weights\n\u251c\u2500\u2500 assets\n\u251c\u2500\u2500 fingerprint.pb\n\u251c\u2500\u2500 saved_model.pb\n\u251c\u2500\u2500 variables\n\u2502\xa0\xa0 \u251c\u2500\u2500 variables.data-00000-of-00001\n\u2502\xa0\xa0 \u2514\u2500\u2500 variables.index\n\u251c\u2500\u2500 yolov7-tiny.onnx\n\u251c\u2500\u2500 yolov7-tiny.pt\n"})}),"\n",(0,t.jsx)(n.h2,{id:"converting-the-tensorflow-model-to-tflite",children:"Converting the TensorFlow model to tflite"}),"\n",(0,t.jsx)(n.p,{children:"We use the TensorFlow module\u2019s TFlite converter to convert the model from TF saved model format to a TFLite graph:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"tf_to_tflite.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"import tensorflow as tf\nconverter = tf.lite.TFLiteConverter.from_saved_model('weights/')\ntflite_model = converter.convert()\n\nwith open('weights/yolov7-tiny.tflite', 'wb') as f:\n  f.write(tflite_model)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"predictions-using-tflite",children:"Predictions using TFlite"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"tflite_predictions.py"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:"# https://github.com/VikasOjha666/yolov7_to_tflite/blob/main/yoloV7_to_TFlite%20.ipynb\n\nimport cv2\nimport random\nimport numpy as np\nfrom PIL import Image\nimport tensorflow as tf\n\n# Load the TFLite model\ninterpreter = tf.lite.Interpreter(model_path=\"weights/yolov7-tiny.tflite\")\n\n\ndef letterbox(im, new_shape=(640, 640), color=(114, 114, 114), auto=True, scaleup=True, stride=32):\n    # Resize and pad image while meeting stride-multiple constraints\n    shape = im.shape[:2]  # current shape [height, width]\n    if isinstance(new_shape, int):\n        new_shape = (new_shape, new_shape)\n\n    # Scale ratio (new / old)\n    r = min(new_shape[0] / shape[0], new_shape[1] / shape[1])\n    if not scaleup:  # only scale down, do not scale up (for better val mAP)\n        r = min(r, 1.0)\n\n    # Compute padding\n    new_unpad = int(round(shape[1] * r)), int(round(shape[0] * r))\n    dw, dh = new_shape[1] - new_unpad[0], new_shape[0] - new_unpad[1]  # wh padding\n\n    if auto:  # minimum rectangle\n        dw, dh = np.mod(dw, stride), np.mod(dh, stride)  # wh padding\n\n    dw /= 2  # divide padding into 2 sides\n    dh /= 2\n\n    if shape[::-1] != new_unpad:  # resize\n        im = cv2.resize(im, new_unpad, interpolation=cv2.INTER_LINEAR)\n    top, bottom = int(round(dh - 0.1)), int(round(dh + 0.1))\n    left, right = int(round(dw - 0.1)), int(round(dw + 0.1))\n    im = cv2.copyMakeBorder(im, top, bottom, left, right, cv2.BORDER_CONSTANT, value=color)  # add border\n    return im, r, (dw, dh)\n\n#Name of the classes according to class indices.\nnames = ['person', 'bicycle', 'car', 'motorcycle', 'airplane', 'bus', 'train', 'truck', 'boat', 'traffic light', \n         'fire hydrant', 'stop sign', 'parking meter', 'bench', 'bird', 'cat', 'dog', 'horse', 'sheep', 'cow', \n         'elephant', 'bear', 'zebra', 'giraffe', 'backpack', 'umbrella', 'handbag', 'tie', 'suitcase', 'frisbee', \n         'skis', 'snowboard', 'sports ball', 'kite', 'baseball bat', 'baseball glove', 'skateboard', 'surfboard', \n         'tennis racket', 'bottle', 'wine glass', 'cup', 'fork', 'knife', 'spoon', 'bowl', 'banana', 'apple', \n         'sandwich', 'orange', 'broccoli', 'carrot', 'hot dog', 'pizza', 'donut', 'cake', 'chair', 'couch', \n         'potted plant', 'bed', 'dining table', 'toilet', 'tv', 'laptop', 'mouse', 'remote', 'keyboard', 'cell phone', \n         'microwave', 'oven', 'toaster', 'sink', 'refrigerator', 'book', 'clock', 'vase', 'scissors', 'teddy bear', \n         'hair drier', 'toothbrush']\n\n#Creating random colors for bounding box visualization.\ncolors = {name:[random.randint(0, 255) for _ in range(3)] for i,name in enumerate(names)}\n\n#Load and preprocess the image.\nimg = cv2.imread('guangzhou.jpg')\nimg = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\n\nimage = img.copy()\nimage, ratio, dwdh = letterbox(image, auto=False)\nimage = image.transpose((2, 0, 1))\nimage = np.expand_dims(image, 0)\nimage = np.ascontiguousarray(image)\n\nim = image.astype(np.float32)\nim /= 255\n\n\n#Allocate tensors.\ninterpreter.allocate_tensors()\n# Get input and output tensors.\ninput_details = interpreter.get_input_details()\noutput_details = interpreter.get_output_details()\n\n# Test the model on random input data.\ninput_shape = input_details[0]['shape']\ninterpreter.set_tensor(input_details[0]['index'], im)\n\ninterpreter.invoke()\n\n# The function `get_tensor()` returns a copy of the tensor data.\n# Use `tensor()` in order to get a pointer to the tensor.\noutput_data = interpreter.get_tensor(output_details[0]['index'])\n\nori_images = [img.copy()]\n\nfor i,(batch_id,x0,y0,x1,y1,cls_id,score) in enumerate(output_data):\n    image = ori_images[int(batch_id)]\n    box = np.array([x0,y0,x1,y1])\n    box -= np.array(dwdh*2)\n    box /= ratio\n    box = box.round().astype(np.int32).tolist()\n    cls_id = int(cls_id)\n    score = round(float(score),3)\n    name = names[cls_id]\n    color = colors[name]\n    name += ' '+str(score)\n    cv2.rectangle(image,box[:2],box[2:],color,2)\n    cv2.putText(image,name,(box[0], box[1] - 2),cv2.FONT_HERSHEY_SIMPLEX,0.75,[225, 255, 255],thickness=2)  \n\nprediction = Image.fromarray(ori_images[0])\nprediction.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"YOLOv7 Data Conversion",src:o(747005).A+"",width:"2385",height:"1591"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},747005:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/YOLOv7_to_Tensorflow_01-5232f99cf7ce5c71492b139690c2c5b3.png"},328389:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ba3b23aa3d5392c02b451d1b2b911721.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(296540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);