"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[71974],{951549:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=a(474848),t=a(28453);const i={sidebar_position:9080,slug:"2019-04-01",title:"Introduction to Keras",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},s=void 0,r={id:"IoT-and-Machine-Learning/ML/2019-04-01--introduction-to-keras/index",title:"Introduction to Keras",description:"Shanghai, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2019-04-01--introduction-to-keras/index.mdx",sourceDirName:"IoT-and-Machine-Learning/ML/2019-04-01--introduction-to-keras",slug:"/IoT-and-Machine-Learning/ML/2019-04-01--introduction-to-keras/2019-04-01",permalink:"/docs/IoT-and-Machine-Learning/ML/2019-04-01--introduction-to-keras/2019-04-01",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2019-04-01--introduction-to-keras/index.mdx",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"Tensorflow",permalink:"/docs/tags/tensorflow"}],version:"current",sidebarPosition:9080,frontMatter:{sidebar_position:9080,slug:"2019-04-01",title:"Introduction to Keras",authors:"mpolinowski",tags:["Machine Learning","Python","Tensorflow"]},sidebar:"tutorialSidebar",previous:{title:"spaCy NER on Arch Linux",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-01--spacy_natural_language_processing/2021-11-01"},next:{title:"Tesseract OCR on Arch Linux",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-10-31--tesseract_ocr_arch_linux/2021-10-31"}},c={},d=[{value:"Installation of Keras",id:"installation-of-keras",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{alt:"Shanghai, China",src:a(729387).A+"",width:"1500",height:"740"})}),"\n",(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.a,{href:"https://keras.io",children:"Keras"})," is a high-level neural networks API, written in Python and capable of running on top of TensorFlow, CNTK, or Theano. It was developed with a focus on enabling fast experimentation."]}),"\n",(0,o.jsx)(e.h2,{id:"installation-of-keras",children:"Installation of Keras"}),"\n",(0,o.jsxs)(e.p,{children:["You can install TensorFlow directly through ",(0,o.jsx)(e.code,{children:"pip3 install keras"})," (make sure you have ",(0,o.jsx)(e.a,{href:"https://www.python.org/downloads/",children:"Python v3"})," installed)."]}),"\n",(0,o.jsxs)(e.p,{children:["I have ",(0,o.jsx)(e.a,{href:"https://docs.anaconda.com/anaconda/install/windows/",children:"Anaconda"})," set up on my computer and am going to use it for this instead. If you already have Anaconda installed, make sure that it is up to date (make sure that you start the ",(0,o.jsx)(e.a,{href:"https://docs.anaconda.com/anaconda/user-guide/getting-started/#write-a-python-program-using-anaconda-prompt-or-terminal",children:"Anaconda Prompt"})," with Admin privileges):"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"conda update conda\r\nconda update anaconda\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Anaconda allows us to create a virtual environment in which we can run our TensorFlow and Keras program. To create the environment with the name ",(0,o.jsx)(e.code,{children:"py3-TF2"})," run the following command in the Anaconda Prompt - hit ",(0,o.jsx)(e.code,{children:"y"})," when prompted:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"conda create --name py3-TF2 python=3\r\nconda activate py3-TF2\n"})}),"\n",(0,o.jsxs)(e.p,{children:["Before installing Keras, please install one of its backend engines: ",(0,o.jsx)(e.a,{href:"https://mpolinowski.github.io/introduction-to-tensorflow-2-beta",children:"TensorFlow"}),", Theano, or CNTK. We recommend the TensorFlow backend. We can now continue installing Keras inside this virtual environment:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"pip install keras\n"})}),"\n",(0,o.jsxs)(e.p,{children:["To be able to use the virtual environment in ",(0,o.jsx)(e.a,{href:"https://docs.anaconda.com/anaconda/user-guide/getting-started/#run-python-in-a-jupyter-notebook",children:"Jupyter Notebook"})," we need to install ",(0,o.jsx)(e.code,{children:"ipykernel"})," and ",(0,o.jsx)(e.code,{children:"nb_conda_kernels"})," inside it:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-bash",children:"pip install ipykernel\r\nconda install nb_conda_kernels\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}},729387:(n,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-ab479ab6f852b6e244184853f6293dc1.jpg"},28453:(n,e,a)=>{a.d(e,{R:()=>s,x:()=>r});var o=a(296540);const t={},i=o.createContext(t);function s(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:s(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);