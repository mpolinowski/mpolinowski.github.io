"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[27013],{726400:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>o,frontMatter:()=>d,metadata:()=>a,toc:()=>c});var t=i(785893),s=i(603905);const d={sidebar_position:4460,slug:"2023-04-13",title:"Multidimensional Scaling (MDS)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Multidimensional Scaling is a family of statistical methods that focus on creating mappings of items based on distance."},r="Dimensionality Reduction",a={id:"IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/index",title:"Multidimensional Scaling (MDS)",description:"Multidimensional Scaling is a family of statistical methods that focus on creating mappings of items based on distance.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling",slug:"/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4460,frontMatter:{sidebar_position:4460,slug:"2023-04-13",title:"Multidimensional Scaling (MDS)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Multidimensional Scaling is a family of statistical methods that focus on creating mappings of items based on distance."},sidebar:"tutorialSidebar",previous:{title:"Isometric Mapping (ISOMAP)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/2023-04-13"},next:{title:"tStochastic Neighbor Embedding (t-SNE)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/2023-04-12"}},l={},c=[{value:"Dataset",id:"dataset",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot",level:2},{value:"3-Dimensional Plot",id:"3-dimensional-plot",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.ah)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Victoria Harbour, Hongkong",src:i(161005).Z+"",width:"2385",height:"858"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#dimensionality-reduction",children:"Dimensionality Reduction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#dataset",children:"Dataset"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#2-dimensional-plot",children:"2-Dimensional Plot"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#3-dimensional-plot",children:"3-Dimensional Plot"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/multi-dimensional-scaling",children:"Github Repository"})}),"\n",(0,t.jsx)(n.p,{children:"Multidimensional Scaling is a family of statistical methods that focus on creating mappings of items based on distance."}),"\n",(0,t.jsx)(n.h1,{id:"dimensionality-reduction",children:"Dimensionality Reduction"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://scikit-learn.org/stable/modules/manifold.html",children:"Manifold learning"})," is an approach to non-linear dimensionality reduction. Algorithms for this task are based on the idea that the dimensionality of many data sets is only artificially high."]}),"\n",(0,t.jsx)(n.p,{children:"High-dimensional datasets can be very difficult to visualize. While data in two or three dimensions can be plotted to show the inherent structure of the data, equivalent high-dimensional plots are much less intuitive. To aid visualization of the structure of a dataset, the dimension must be reduced in some way."}),"\n",(0,t.jsx)(n.p,{children:"The simplest way to accomplish this dimensionality reduction is by taking a random projection of the data. Though this allows some degree of visualization of the data structure, the randomness of the choice leaves much to be desired. In a random projection, it is likely that the more interesting structure within the data will be lost."}),"\n",(0,t.jsx)(n.p,{children:"To address this concern, a number of supervised and unsupervised linear dimensionality reduction frameworks have been designed, such as:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09",children:"Principal Component Analysis (PCA)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11",children:"Locally Linear Embedding (LLE)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/2023-04-12",children:"tStochastic Neighbor Embedding (t-SNE)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/2023-04-13",children:"Isometric Mapping (ISOMAP)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13",children:"Fisher Linear Discriminant Analysis (LDA)"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"dataset",children:"Dataset"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.researchgate.net/publication/243766527_A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus",children:"A multivariate study of variation in two species of rock crab of genus Leptograpsus"}),": A multivariate approach has been used to study morphological variation in the blue and orange-form species of rock crab of the genus Leptograpsus. Objective criteria for the identification of the two species are established, based on the following characters:"]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SP"}),": Species (Blue or Orange)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Sex"}),": Male or Female"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FL"}),": Width of the frontal region of the carapace;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"RW"}),": Width of the posterior region of the carapace (rear width);"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CL"}),": Length of the carapace along the midline;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"CW"}),": Maximum width of the carapace;"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"BD"}),": and the depth of the body;"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The dataset can be ",(0,t.jsx)(n.a,{href:"https://github.com/tercen/crabs_dataset",children:"downloaded from Github"}),"."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["(see introduction in: ",(0,t.jsx)(n.a,{href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09",children:"Principal Component Analysis PCA"}),")"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"raw_data = pd.read_csv('data/A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus.csv')\n\ndata = raw_data.rename(columns={\n    'sp': 'Species',\n    'sex': 'Sex',\n    'index': 'Index',\n    'FL': 'Frontal Lobe',\n    'RW': 'Rear Width',\n    'CL': 'Carapace Midline',\n    'CW': 'Maximum Width',\n    'BD': 'Body Depth'})\n\ndata['Species'] = data['Species'].map({'B':'Blue', 'O':'Orange'})\ndata['Sex'] = data['Sex'].map({'M':'Male', 'F':'Female'})\ndata['Class'] = data.Species + data.Sex\n\ndata_columns = ['Frontal Lobe',\n                'Rear Width',\n                'Carapace Midline',\n                'Maximum Width',\n                'Body Depth']\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# generate a class variable for all 4 classes\ndata['Class'] = data.Species + data.Sex\n\nprint(data['Class'].value_counts())\ndata.head(5)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["BlueMale: ",(0,t.jsx)(n.code,{children:"50"})]}),"\n",(0,t.jsxs)(n.li,{children:["BlueFemale: ",(0,t.jsx)(n.code,{children:"50"})]}),"\n",(0,t.jsxs)(n.li,{children:["OrangeMale: ",(0,t.jsx)(n.code,{children:"50"})]}),"\n",(0,t.jsxs)(n.li,{children:["OrangeFemale: ",(0,t.jsx)(n.code,{children:"50"})]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Species"}),(0,t.jsx)(n.th,{children:"Sex"}),(0,t.jsx)(n.th,{children:"Index"}),(0,t.jsx)(n.th,{children:"Frontal Lobe"}),(0,t.jsx)(n.th,{children:"Rear Width"}),(0,t.jsx)(n.th,{children:"Carapace Midline"}),(0,t.jsx)(n.th,{children:"Maximum Width"}),(0,t.jsx)(n.th,{children:"Body Depth"}),(0,t.jsx)(n.th,{children:"Class"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"8.1"}),(0,t.jsx)(n.td,{children:"6.7"}),(0,t.jsx)(n.td,{children:"16.1"}),(0,t.jsx)(n.td,{children:"19.0"}),(0,t.jsx)(n.td,{children:"7.0"}),(0,t.jsx)(n.td,{children:"BlueMale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"8.8"}),(0,t.jsx)(n.td,{children:"7.7"}),(0,t.jsx)(n.td,{children:"18.1"}),(0,t.jsx)(n.td,{children:"20.8"}),(0,t.jsx)(n.td,{children:"7.4"}),(0,t.jsx)(n.td,{children:"BlueMale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"9.2"}),(0,t.jsx)(n.td,{children:"7.8"}),(0,t.jsx)(n.td,{children:"19.0"}),(0,t.jsx)(n.td,{children:"22.4"}),(0,t.jsx)(n.td,{children:"7.7"}),(0,t.jsx)(n.td,{children:"BlueMale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"9.6"}),(0,t.jsx)(n.td,{children:"7.9"}),(0,t.jsx)(n.td,{children:"20.1"}),(0,t.jsx)(n.td,{children:"23.1"}),(0,t.jsx)(n.td,{children:"8.2"}),(0,t.jsx)(n.td,{children:"BlueMale"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"9.8"}),(0,t.jsx)(n.td,{children:"8.0"}),(0,t.jsx)(n.td,{children:"20.3"}),(0,t.jsx)(n.td,{children:"23.0"}),(0,t.jsx)(n.td,{children:"8.2"}),(0,t.jsx)(n.td,{children:"BlueMale"})]})]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# normalize data columns\ndata_norm = data.copy()\ndata_norm[data_columns] = MinMaxScaler().fit_transform(data[data_columns])\n\ndata_norm.describe()\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Index"}),(0,t.jsx)(n.th,{children:"Frontal Lobe"}),(0,t.jsx)(n.th,{children:"Rear Width"}),(0,t.jsx)(n.th,{children:"Carapace Midline"}),(0,t.jsx)(n.th,{children:"Maximum Width"}),(0,t.jsx)(n.th,{children:"Body Depth"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"count"}),(0,t.jsx)(n.td,{children:"200.000000"}),(0,t.jsx)(n.td,{children:"200.000000"}),(0,t.jsx)(n.td,{children:"200.000000"}),(0,t.jsx)(n.td,{children:"200.000000"}),(0,t.jsx)(n.td,{children:"200.000000"}),(0,t.jsx)(n.td,{children:"200.000000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"mean"}),(0,t.jsx)(n.td,{children:"25.500000"}),(0,t.jsx)(n.td,{children:"0.527233"}),(0,t.jsx)(n.td,{children:"0.455365"}),(0,t.jsx)(n.td,{children:"0.529043"}),(0,t.jsx)(n.td,{children:"0.515053"}),(0,t.jsx)(n.td,{children:"0.511645"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"std"}),(0,t.jsx)(n.td,{children:"14.467083"}),(0,t.jsx)(n.td,{children:"0.219832"}),(0,t.jsx)(n.td,{children:"0.187835"}),(0,t.jsx)(n.td,{children:"0.216382"}),(0,t.jsx)(n.td,{children:"0.209919"}),(0,t.jsx)(n.td,{children:"0.220953"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"min"}),(0,t.jsx)(n.td,{children:"1.000000"}),(0,t.jsx)(n.td,{children:"0.000000"}),(0,t.jsx)(n.td,{children:"0.000000"}),(0,t.jsx)(n.td,{children:"0.000000"}),(0,t.jsx)(n.td,{children:"0.000000"}),(0,t.jsx)(n.td,{children:"0.000000"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"25%"}),(0,t.jsx)(n.td,{children:"13.000000"}),(0,t.jsx)(n.td,{children:"0.358491"}),(0,t.jsx)(n.td,{children:"0.328467"}),(0,t.jsx)(n.td,{children:"0.382219"}),(0,t.jsx)(n.td,{children:"0.384000"}),(0,t.jsx)(n.td,{children:"0.341935"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"50%"}),(0,t.jsx)(n.td,{children:"25.500000"}),(0,t.jsx)(n.td,{children:"0.525157"}),(0,t.jsx)(n.td,{children:"0.459854"}),(0,t.jsx)(n.td,{children:"0.528875"}),(0,t.jsx)(n.td,{children:"0.525333"}),(0,t.jsx)(n.td,{children:"0.503226"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"75%"}),(0,t.jsx)(n.td,{children:"38.000000"}),(0,t.jsx)(n.td,{children:"0.682390"}),(0,t.jsx)(n.td,{children:"0.569343"}),(0,t.jsx)(n.td,{children:"0.684650"}),(0,t.jsx)(n.td,{children:"0.664000"}),(0,t.jsx)(n.td,{children:"0.677419"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"max"}),(0,t.jsx)(n.td,{children:"50.000000"}),(0,t.jsx)(n.td,{children:"1.000000"}),(0,t.jsx)(n.td,{children:"1.000000"}),(0,t.jsx)(n.td,{children:"1.000000"}),(0,t.jsx)(n.td,{children:"1.000000"}),(0,t.jsx)(n.td,{children:"1.000000"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"2-dimensional-plot",children:"2-Dimensional Plot"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"no_components = 2\nn_init = 15\nmetric = True\nn_stress='auto'\n\nmds = MDS(\n    n_components=no_components,\n    n_init=n_init, metric=metric,\n    normalized_stress=n_stress)\n\ndata_mds = mds.fit_transform(data_norm[data_columns])\nprint('MSE: ', mds.stress_)\n# MSE:  3.886582480465905\n# the more components you add the smaller\n# the mean squared error becomes - meaning\n# your model starts to fit better\n\ndata_norm[['MDS1', 'MDS2']] = data_mds\ndata_norm.head(1)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Species"}),(0,t.jsx)(n.th,{children:"Sex"}),(0,t.jsx)(n.th,{children:"Index"}),(0,t.jsx)(n.th,{children:"Frontal Lobe"}),(0,t.jsx)(n.th,{children:"Rear Width"}),(0,t.jsx)(n.th,{children:"Carapace Midline"}),(0,t.jsx)(n.th,{children:"Maximum Width"}),(0,t.jsx)(n.th,{children:"Body Depth"}),(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"MDS1"}),(0,t.jsx)(n.th,{children:"MDS2"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"0.056604"}),(0,t.jsx)(n.td,{children:"0.014599"}),(0,t.jsx)(n.td,{children:"0.042553"}),(0,t.jsx)(n.td,{children:"0.050667"}),(0,t.jsx)(n.td,{children:"0.058065"}),(0,t.jsx)(n.td,{children:"BlueMale"}),(0,t.jsx)(n.td,{children:"-0.482199"}),(0,t.jsx)(n.td,{children:"-0.917839"})]})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"fig = plt.figure(figsize=(10, 8))\nsns.scatterplot(x='MDS1', y='MDS2', hue='Class', data=data_norm)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Multidimensional Scaling (MDS)",src:i(268295).Z+"",width:"871",height:"680"})}),"\n",(0,t.jsx)(n.h2,{id:"3-dimensional-plot",children:"3-Dimensional Plot"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"no_components = 3\nn_init = 15\nmetric = True\nn_stress='auto'\n\nmds = MDS(\n    n_components=no_components,\n    n_init=n_init, metric=metric,\n    normalized_stress=n_stress)\n\ndata_mds = mds.fit_transform(data_norm[data_columns])\nprint('MSE: ', mds.stress_)\n# MSE:  2.4601741009431457\n\ndata_norm[['MDS1', 'MDS2', 'MDS3']] = data_mds\ndata_norm.head(1)\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Species"}),(0,t.jsx)(n.th,{children:"Sex"}),(0,t.jsx)(n.th,{children:"Index"}),(0,t.jsx)(n.th,{children:"Frontal Lobe"}),(0,t.jsx)(n.th,{children:"Rear Width"}),(0,t.jsx)(n.th,{children:"Carapace Midline"}),(0,t.jsx)(n.th,{children:"Maximum Width"}),(0,t.jsx)(n.th,{children:"Body Depth"}),(0,t.jsx)(n.th,{children:"Class"}),(0,t.jsx)(n.th,{children:"MDS1"}),(0,t.jsx)(n.th,{children:"MDS2"}),(0,t.jsx)(n.th,{children:"MDS3"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Blue"}),(0,t.jsx)(n.td,{children:"Male"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"0.056604"}),(0,t.jsx)(n.td,{children:"0.014599"}),(0,t.jsx)(n.td,{children:"0.042553"}),(0,t.jsx)(n.td,{children:"0.050667"}),(0,t.jsx)(n.td,{children:"0.058065"}),(0,t.jsx)(n.td,{children:"BlueMale"}),(0,t.jsx)(n.td,{children:"-0.093961"}),(0,t.jsx)(n.td,{children:"0.80491"}),(0,t.jsx)(n.td,{children:"0.645809"})]})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class_colours = {\n    'BlueMale': '#0027c4', #blue\n    'BlueFemale': '#f18b0a', #orange\n    'OrangeMale': '#0af10a', # green\n    'OrangeFemale': '#ff1500', #red\n}\n\ncolours = data_norm['Class'].apply(lambda x: class_colours[x])\n\nx=data_norm.MDS1\ny=data_norm.MDS2\nz=data_norm.MDS3\n\nfig = plt.figure(figsize=(10,10))\nplt.title('MDS Data Analysis')\nax = fig.add_subplot(projection='3d')\n\nax.scatter(xs=x, ys=y, zs=z, s=50, c=colours)\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Multidimensional Scaling (MDS)",src:i(627249).Z+"",width:"837",height:"836"})})]})}function o(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>c});var t=i(667294);function s(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function d(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?d(Object(i),!0).forEach((function(n){s(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,t,s=function(e,n){if(null==e)return{};var i,t,s={},d=Object.keys(e);for(t=0;t<d.length;t++)i=d[t],n.indexOf(i)>=0||(s[i]=e[i]);return s}(e,n);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)i=d[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var l=t.createContext({}),c=function(e){var n=t.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},o=t.forwardRef((function(e,n){var i=e.components,s=e.mdxType,d=e.originalType,l=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),x=c(i),j=s,m=x["".concat(l,".").concat(j)]||x[j]||h[j]||d;return i?t.createElement(m,r(r({ref:n},o),{},{components:i})):t.createElement(m,r({ref:n},o))}));o.displayName="MDXCreateElement"},268295:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Multi-Dimensional_Scaling_01-e3e615ca7db58efb17afc5b338de3b37.png"},627249:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Multi-Dimensional_Scaling_02-1945cfd53df14ba7c242522883f6870c.png"},161005:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-936fe81d44bf1beb4563551aafeb5788.jpg"}}]);