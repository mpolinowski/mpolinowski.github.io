"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[62643],{247618:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var n=i(474848),o=i(28453);const t={sidebar_position:4290,slug:"2023-08-02",title:"Tensorflow Image Classifier - Data Pre-processing",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},s="Tf Image Classifier",r={id:"IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/index",title:"Tensorflow Image Classifier - Data Pre-processing",description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing",slug:"/IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/2023-08-02",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/2023-08-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-08-02-tensorflow-i-know-flowers-preprocessing/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4290,frontMatter:{sidebar_position:4290,slug:"2023-08-02",title:"Tensorflow Image Classifier - Data Pre-processing",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Blue print image classifier using Tensorflow and Keras Applications pre-trained models"},sidebar:"tutorialSidebar",previous:{title:"Tensorflow Image Classifier - Data-efficient Image Transformers",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-03-tensorflow-i-know-flowers-deit/2023-08-03"},next:{title:"Tensorflow Image Classifier - Introduction",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01"}},l={},c=[{value:"Image Dataset Preparation",id:"image-dataset-preparation",level:2},{value:"Get Image Dataset from Local Directory",id:"get-image-dataset-from-local-directory",level:2},{value:"Resize to 224,224,3",id:"resize-to-2242243",level:3},{value:"Train Test Split",id:"train-test-split",level:3}];function d(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Angkor Wat, Cambodia",src:i(903520).A+"",width:"1500",height:"706"})}),"\n",(0,n.jsx)(a.h1,{id:"tf-image-classifier",children:"Tf Image Classifier"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-08-01-tensorflow-i-know-flowers-intro/2023-08-01",children:"Overview - Model Evaluation & Deployment"})}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"image-dataset-preparation",children:"Image Dataset Preparation"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"from glob import glob\nimport matplotlib.pyplot as plt\nimport os\nfrom skimage import (\n    io,\n    color,\n    exposure,\n    transform,\n    feature\n)\nfrom sklearn.model_selection import train_test_split\nimport splitfolders # pip install split-folders\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"SEED = 42\n"})}),"\n",(0,n.jsx)(a.h2,{id:"get-image-dataset-from-local-directory",children:"Get Image Dataset from Local Directory"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"data_dir = os.listdir('../dataset/Flower_Dataset/complete')\nprint(data_dir)\n# ['Gladiolus', 'Adenium', 'Alpinia_Purpurata', 'Alstroemeria', 'Amaryllis', 'Anthurium_Andraeanum', 'Antirrhinum', 'Aquilegia', 'Billbergia_Pyramidalis', 'Cattleya', 'Cirsium', 'Coccinia_Grandis', 'Crocus', 'Cyclamen', 'Dahlia', 'Datura_Metel', 'Dianthus_Barbatus', 'Digitalis', 'Echinacea_Purpurea', 'Echinops_Bannaticus', 'Fritillaria_Meleagris', 'Gaura', 'Gazania', 'Gerbera', 'Guzmania', 'Helianthus_Annuus', 'Iris_Pseudacorus', 'Leucanthemum', 'Malvaceae', 'Narcissus_Pseudonarcissus', 'Nerine', 'Nymphaea_Tetragona', 'Paphiopedilum', 'Passiflora', 'Pelargonium', 'Petunia', 'Platycodon_Grandiflorus', 'Plumeria', 'Poinsettia', 'Primula', 'Protea_Cynaroides', 'Rose', 'Rudbeckia', 'Strelitzia_Reginae', 'Tropaeolum_Majus', 'Tussilago', 'Viola', 'Zantedeschia_Aethiopica']\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"glob('../dataset/Flower_Dataset/complete/{}/*.jpg'.format('Viola'))\n\n# ['../dataset/Flower_Dataset/complete/Viola/Viola_185.jpg',\n#  '../dataset/Flower_Dataset/complete/Viola/Viola_186.jpg',\n#  '../dataset/Flower_Dataset/complete/Viola/Viola_187.jpg',\n#  ...\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"all_files = []\nfor subfolder in data_dir:\n    all_files += glob('../dataset/Flower_Dataset/complete/{}/*.jpg'.format(subfolder))\n    \nlen(all_files)\n# 12278\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"data_collection = io.ImageCollection(all_files)\ndata_collection.files\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"len(data_collection)\n"})}),"\n",(0,n.jsx)(a.h3,{id:"resize-to-2242243",children:"Resize to 224,224,3"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:"c = 0\n\nfor image in data_collection:\n    # print(data_collection.files[c]) # debug file read errors\n    img_ori = io.imread(data_collection.files[c], as_gray=False)\n    img_thumb = transform.resize(img_ori, output_shape=(224, 224, 3), anti_aliasing=True)\n    plt.imsave(data_collection.files[c], img_thumb)\n    c = c + 1\n"})}),"\n",(0,n.jsx)(a.h3,{id:"train-test-split",children:"Train Test Split"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-python",children:'input_folder = "../dataset/Flower_Dataset/complete"\noutput_folder = "../dataset/Flower_Dataset/split"\n\nsplitfolders.ratio(input_folder, output=output_folder, seed=SEED, ratio=(.75, .25))\n'})})]})}function p(e={}){const{wrapper:a}={...(0,o.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},903520:(e,a,i)=>{i.d(a,{A:()=>n});const n=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4b4c922f390788acb724c3c274da1ef9.jpg"},28453:(e,a,i)=>{i.d(a,{R:()=>s,x:()=>r});var n=i(296540);const o={},t=n.createContext(o);function s(e){const a=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(t.Provider,{value:a},e.children)}}}]);