"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[81502],{3905:(n,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var t=a(67294);function i(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}function o(n,e){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.push.apply(a,t)}return a}function s(n){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(n,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))}))}return n}function l(n,e){if(null==n)return{};var a,t,i=function(n,e){if(null==n)return{};var a,t,i={},o=Object.keys(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||(i[a]=n[a]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(t=0;t<o.length;t++)a=o[t],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(n,a)&&(i[a]=n[a])}return i}var r=t.createContext({}),m=function(n){var e=t.useContext(r),a=e;return n&&(a="function"==typeof n?n(e):s(s({},e),n)),a},p=function(n){var e=m(n.components);return t.createElement(r.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},c=t.forwardRef((function(n,e){var a=n.components,i=n.mdxType,o=n.originalType,r=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),c=m(a),g=i,h=c["".concat(r,".").concat(g)]||c[g]||d[g]||o;return a?t.createElement(h,s(s({ref:e},p),{},{components:a})):t.createElement(h,s({ref:e},p))}));function g(n,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=a.length,s=new Array(o);s[0]=c;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=n,l.mdxType="string"==typeof n?n:i,s[1]=l;for(var m=2;m<o;m++)s[m]=a[m];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81578:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var t=a(87462),i=(a(67294),a(3905));const o={sidebar_position:4430,slug:"2023-04-14",title:"Dimensionality Reduction for Image Segmentation",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Use Manifold Learning and the LD Analysis to Visualize Image Datasets."},s=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/index",id:"IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/index",title:"Dimensionality Reduction for Image Segmentation",description:"Use Manifold Learning and the LD Analysis to Visualize Image Datasets.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation",slug:"/IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/2023-04-14",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/2023-04-14",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-04-14-manifold-learning-for-image-segmentation/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4430,frontMatter:{sidebar_position:4430,slug:"2023-04-14",title:"Dimensionality Reduction for Image Segmentation",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Use Manifold Learning and the LD Analysis to Visualize Image Datasets."},sidebar:"tutorialSidebar",previous:{title:"3D Image Classification",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-16-deep-3d-image-segmentation/2023-04-16"},next:{title:"Fisher Linear Discriminant Analysis (LDA)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-fisher-discriminant-analysis/2023-04-13"}},r={},m=[{value:"Local Linear Embedding",id:"local-linear-embedding",level:2},{value:"Digits Dataset",id:"digits-dataset",level:3},{value:"2-Dimensional Plot",id:"2-dimensional-plot",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot",level:3},{value:"Principal Component Analysis",id:"principal-component-analysis",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot-1",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot-1",level:3},{value:"Fisher Discriminant Analysis",id:"fisher-discriminant-analysis",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot-2",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot-2",level:3},{value:"Isometric Mapping",id:"isometric-mapping",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot-3",level:3},{value:"3-Dimensional Plot",id:"3-dimensional-plot-3",level:3}],p={toc:m};function d(n){let{components:e,...o}=n;return(0,i.kt)("wrapper",(0,t.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Victoria Harbour, Hongkong",src:a(51838).Z,width:"2385",height:"858"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dimensionality-reduction-for-image-segmentation"},"Dimensionality Reduction for Image Segmentation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#local-linear-embedding"},"Local Linear Embedding"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#digits-dataset"},"Digits Dataset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-dimensional-plot"},"2-Dimensional Plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-dimensional-plot"},"3-Dimensional Plot")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#principal-component-analysis"},"Principal Component Analysis"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-dimensional-plot-1"},"2-Dimensional Plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-dimensional-plot-1"},"3-Dimensional Plot")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#fisher-discriminant-analysis"},"Fisher Discriminant Analysis"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-dimensional-plot-2"},"2-Dimensional Plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-dimensional-plot-2"},"3-Dimensional Plot")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#isometric-mapping"},"Isometric Mapping"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#2-dimensional-plot-3"},"2-Dimensional Plot")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#3-dimensional-plot-3"},"3-Dimensional Plot"))))))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/manifold-learning-for-image-segmentation"},"Github Repository")),(0,i.kt)("h1",{id:"dimensionality-reduction-for-image-segmentation"},"Dimensionality Reduction for Image Segmentation"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/auto_examples/manifold/plot_lle_digits.html"},"Manifold Learning")," and the ",(0,i.kt)("a",{parentName:"p",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-04-13-fisher-discriminant-analysis/2023-04-13"},"LD Analysis")," to Visualize Image Datasets."),(0,i.kt)("h2",{id:"local-linear-embedding"},"Local Linear Embedding"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport plotly.express as px\nimport pandas as pd\nimport seaborn as sns\nfrom sklearn.datasets import load_digits\nfrom sklearn.manifold import LocallyLinearEmbedding\n")),(0,i.kt)("h3",{id:"digits-dataset"},"Digits Dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# load digits dataset with labels\nX,y = load_digits(return_X_y=True)\nX.shape\n# (images, features)\n# (1797, 64)\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plt.figure(figsize=(8,8))\nplt.title('Image Label: ' + str(y[888]))\nplt.imshow(X[888].reshape(8,8))\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(37282).Z,width:"654",height:"682"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fig, axes = plt.subplots(nrows=3, ncols=3, sharex=True, sharey=True, figsize=(12,12))\naxes[0,0].title.set_text('Image Label: ' + str(y[111]))\naxes[0,0].imshow(X[111].reshape(8,8), cmap='Greens')\naxes[0,1].title.set_text('Image Label: ' + str(y[222]))\naxes[0,1].imshow(X[222].reshape(8,8), cmap='Blues')\naxes[0,2].title.set_text('Image Label: ' + str(y[333]))\naxes[0,2].imshow(X[333].reshape(8,8), cmap='Reds')\naxes[1,0].title.set_text('Image Label: ' + str(y[444]))\naxes[1,0].imshow(X[444].reshape(8,8), cmap='Blues')\naxes[1,1].title.set_text('Image Label: ' + str(y[555]))\naxes[1,1].imshow(X[555].reshape(8,8))\naxes[1,2].title.set_text('Image Label: ' + str(y[666]))\naxes[1,2].imshow(X[666].reshape(8,8), cmap='Blues')\naxes[2,0].title.set_text('Image Label: ' + str(y[777]))\naxes[2,0].imshow(X[777].reshape(8,8), cmap='Reds')\naxes[2,1].title.set_text('Image Label: ' + str(y[888]))\naxes[2,1].imshow(X[888].reshape(8,8), cmap='Blues')\naxes[2,2].title.set_text('Image Label: ' + str(y[999]))\naxes[2,2].imshow(X[999].reshape(8,8), cmap='Greens')\nplt.tight_layout()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(85533).Z,width:"1165",height:"1190"})),(0,i.kt)("h3",{id:"2-dimensional-plot"},"2-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# the dataset has 1797 images with 64 dimensions\n# we use LLE to reduce the dimensionality of the dataset\n# to help us visualize / classify it\nno_components=2\nno_neighbors=10\n\nlle = LocallyLinearEmbedding(n_components=no_components, n_neighbors=no_neighbors)\nX_lle = lle.fit_transform(X, y=y)\n\ndata = pd.DataFrame({'LLE1': X_lle[ :,0], 'LLE2': X_lle[ :,1], 'Class': y})\n\nplt.figure(figsize=(12, 10))\nplt.title('2d Plot with 10 nearest neighbors')\nsns.scatterplot(x='LLE1', y='LLE2', hue='Class', data=data, palette='tab10')\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(16369).Z,width:"1021",height:"855"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_neighbors=15\n\nlle = LocallyLinearEmbedding(n_components=no_components, n_neighbors=no_neighbors)\nX_lle = lle.fit_transform(X, y=y)\n\ndata = pd.DataFrame({'LLE1': X_lle[ :,0], 'LLE2': X_lle[ :,1], 'Class': y})\n\nplt.figure(figsize=(12, 10))\nplt.title('2d Plot with 15 nearest neighbors')\nsns.scatterplot(x='LLE1', y='LLE2', hue='Class', data=data, palette='tab10')\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(86269).Z,width:"1021",height:"855"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_neighbors=20\n\nlle = LocallyLinearEmbedding(n_components=no_components, n_neighbors=no_neighbors)\nX_lle = lle.fit_transform(X, y=y)\n\ndata = pd.DataFrame({'LLE1': X_lle[ :,0], 'LLE2': X_lle[ :,1], 'Class': y})\n\nplt.figure(figsize=(12, 10))\nplt.title('2d Plot with 20 nearest neighbors')\nsns.scatterplot(x='LLE1', y='LLE2', hue='Class', data=data, palette='tab10')\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(93197).Z,width:"1021",height:"855"})),(0,i.kt)("h3",{id:"3-dimensional-plot"},"3-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components=3\nno_neighbors=10\n\nlle = LocallyLinearEmbedding(n_components=no_components, n_neighbors=no_neighbors)\nX_lle = lle.fit_transform(X, y=y)\n\ndata = pd.DataFrame({\n    'LLE1': X_lle[ :,0],\n    'LLE2': X_lle[ :,1],\n    'LLE3': X_lle[ :,2],\n    'Class': y})\n\n# data.head()\n\nplot = px.scatter_3d(\n    data,\n    x = 'LLE1',\n    y = 'LLE2',\n    z = 'LLE3',\n    color='Class')\n\nplot.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(28033).Z,width:"859",height:"525"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components=3\nno_neighbors=15\n\nlle = LocallyLinearEmbedding(n_components=no_components, n_neighbors=no_neighbors)\nX_lle = lle.fit_transform(X, y=y)\n\ndata = pd.DataFrame({\n    'LLE1': X_lle[ :,0],\n    'LLE2': X_lle[ :,1],\n    'LLE3': X_lle[ :,2],\n    'Class': y})\n\n# data.head()\n\nplot = px.scatter_3d(\n    data,\n    x = 'LLE1',\n    y = 'LLE2',\n    z = 'LLE3',\n    color='Class')\n\nplot.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(95441).Z,width:"859",height:"525"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components=3\nno_neighbors=20\n\nlle = LocallyLinearEmbedding(n_components=no_components, n_neighbors=no_neighbors)\nX_lle = lle.fit_transform(X, y=y)\n\ndata = pd.DataFrame({\n    'LLE1': X_lle[ :,0],\n    'LLE2': X_lle[ :,1],\n    'LLE3': X_lle[ :,2],\n    'Class': y})\n\n# data.head()\n\nplot = px.scatter_3d(\n    data,\n    x = 'LLE1',\n    y = 'LLE2',\n    z = 'LLE3',\n    color='Class')\n\nplot.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Dimensionality Reduction for Image Segmentation",src:a(16728).Z,width:"859",height:"525"})),(0,i.kt)("h2",{id:"principal-component-analysis"},"Principal Component Analysis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport plotly.express as px\nimport pandas as pd\nimport seaborn as sns\nfrom sklearn.datasets import load_digits\nfrom sklearn.decomposition import PCA\n")),(0,i.kt)("h3",{id:"2-dimensional-plot-1"},"2-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 2\npca = PCA(n_components=no_components).fit(X)\nX_pca = pca.transform(X)\n\ndata = pd.DataFrame({\n    'PCA1': X_pca[:,0],\n    'PCA2': X_pca[:,1],\n    'Class': y})\n\nfig = plt.figure(figsize=(10, 8))\nsns.scatterplot(\n    x='PCA1',\n    y='PCA2',\n    hue='Class',\n    palette='tab10',\n    data=data)\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Principal Component Analysis",src:a(87531).Z,width:"853",height:"679"})),(0,i.kt)("h3",{id:"3-dimensional-plot-1"},"3-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 3\npca = PCA(n_components=no_components).fit(X)\nX_pca = pca.transform(X)\n\ndata = pd.DataFrame({\n    'PCA1': X_pca[:,0],\n    'PCA2': X_pca[:,1],\n    'PCA3': X_pca[:,2],\n    'Class': y})\n\nplot = px.scatter_3d(\n    data,\n    x = 'PCA1',\n    y = 'PCA2',\n    z = 'PCA3',\n    color='Class')\n\nplot.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Principal Component Analysis",src:a(24524).Z,width:"1643",height:"420"})),(0,i.kt)("h2",{id:"fisher-discriminant-analysis"},"Fisher Discriminant Analysis"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport plotly.express as px\nimport pandas as pd\nimport seaborn as sns\nfrom sklearn.datasets import load_digits\nfrom sklearn.discriminant_analysis import LinearDiscriminantAnalysis\n")),(0,i.kt)("h3",{id:"2-dimensional-plot-2"},"2-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 2\n\nlda = LinearDiscriminantAnalysis(n_components = no_components)\nX_lda = lda.fit_transform(X , y=y)\n\ndata = pd.DataFrame({\n    'LDA1': X_lda[:,0],\n    'LDA2': X_lda[:,1],\n    'Class': y})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(10, 8))\nsns.scatterplot(\n    x='LDA1',\n    y='LDA2',\n    hue='Class',\n    data=data,\n    palette='tab10')\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fisher Discriminant Analysis",src:a(47525).Z,width:"844",height:"679"})),(0,i.kt)("h3",{id:"3-dimensional-plot-2"},"3-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 3\n\nlda = LinearDiscriminantAnalysis(n_components = no_components)\nX_lda = lda.fit_transform(X , y=y)\n\ndata = pd.DataFrame({\n    'LDA1': X_lda[:,0],\n    'LDA2': X_lda[:,1],\n    'LDA3': X_lda[:,2],\n    'Class': y})\n\nplot = px.scatter_3d(\n    data,\n    x = 'LDA1',\n    y = 'LDA2',\n    z = 'LDA3',\n    color='Class')\n\nplot.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fisher Discriminant Analysis",src:a(99298).Z,width:"1308",height:"406"})),(0,i.kt)("h2",{id:"isometric-mapping"},"Isometric Mapping"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt\nimport plotly.express as px\nimport pandas as pd\nimport seaborn as sns\nfrom sklearn.datasets import load_digits\nfrom sklearn.manifold import Isomap\n")),(0,i.kt)("h3",{id:"2-dimensional-plot-3"},"2-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 2\nk_nearest_neighbors = 10\n\nisomap = Isomap(\n    n_components=no_components,\n    n_neighbors=k_nearest_neighbors)\n\nX_iso = isomap.fit_transform(X)\nprint('Reconstruction Error: ', isomap.reconstruction_error())\n# Reconstruction Error:  3092.669294495556\n\ndata = pd.DataFrame({\n    'ISOMAP1': X_iso[:,0],\n    'ISOMAP2': X_iso[:,1],\n    'Class': y})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(10, 8))\nsns.scatterplot(\n    x='ISOMAP1',\n    y='ISOMAP2',\n    hue='Class',\n    data=data,\n    palette='tab10')\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Isometric Mapping",src:a(93138).Z,width:"862",height:"679"})),(0,i.kt)("h3",{id:"3-dimensional-plot-3"},"3-Dimensional Plot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 3\nk_nearest_neighbors = 10\n\nisomap = Isomap(\n    n_components=no_components,\n    n_neighbors=k_nearest_neighbors)\n\nX_iso = isomap.fit_transform(X)\nprint('Reconstruction Error: ', isomap.reconstruction_error())\n# Reconstruction Error:  2522.73434274533\n\ndata = pd.DataFrame({\n    'ISOMAP1': X_iso[:,0],\n    'ISOMAP2': X_iso[:,1],\n    'ISOMAP3': X_iso[:,2],\n    'Class': y})\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"plot = px.scatter_3d(\n    data,\n    x = 'ISOMAP1',\n    y = 'ISOMAP2',\n    z = 'ISOMAP3',\n    color='Class')\n\nplot.show()\n")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Isometric Mapping",src:a(90559).Z,width:"1600",height:"407"})))}d.isMDXComponent=!0},37282:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_01-a3f0c4ceaddd89dc1bb6051986c848d6.png"},85533:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_02-7fdb477703f831d55cfac5230cda1570.png"},16369:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_03-16af8569d3eead81b4b3d0b85c11c20a.png"},86269:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_04-3a869e901a65e2b52d8de646b8d479eb.png"},93197:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_05-96e0dfe50d5bc99f26cc86094ca79218.png"},28033:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_06-1e4195490eedab9be8d3ad1bc92d84af.png"},95441:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_07-8cdbf99f1b207b78a24528833b3e722c.png"},16728:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_08-bfe5ca8f945a447f8907776b5549ae53.png"},87531:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_09-c65fe1a599820b615e85dcfd3ddfc00c.png"},24524:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_10-76d8132765406101c14aaf454e3bd622.png"},47525:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_11-08c5457f86b94015987777d7077435f4.png"},99298:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_12-d8cca3e2fbd1994aa68ab66192692943.png"},93138:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_13-f78726b7d934515f05ac7aafe85abbc8.png"},90559:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/Dimensionality_Reduction_for_Image_Segmentation_14-2c48ee766dbaed64aa1300623885ffd3.png"},51838:(n,e,a)=>{a.d(e,{Z:()=>t});const t=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-936fe81d44bf1beb4563551aafeb5788.jpg"}}]);