"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[87221],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>g});var n=e(67294);function l(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function r(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?r(Object(e),!0).forEach((function(a){l(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,l=function(t,a){if(null==t)return{};var e,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||(l[e]=t[e]);return l}(t,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)e=r[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(l[e]=t[e])}return l}var p=n.createContext({}),m=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=m(t.components);return n.createElement(p.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},s=n.forwardRef((function(t,a){var e=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(e),g=l,k=s["".concat(p,".").concat(g)]||s[g]||u[g]||r;return e?n.createElement(k,i(i({ref:a},d),{},{components:e})):n.createElement(k,i({ref:a},d))}));function g(t,a){var e=arguments,l=a&&a.mdxType;if("string"==typeof t||l){var r=e.length,i=new Array(r);i[0]=s;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var m=2;m<r;m++)i[m]=e[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}s.displayName="MDXCreateElement"},14889:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=e(87462),l=(e(67294),e(3905));const r={sidebar_position:4450,slug:"2023-04-13",title:"Isometric Mapping (ISOMAP)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Non-linear dimensionality reduction through Isometric Mapping"},i=void 0,o={unversionedId:"IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/index",id:"IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/index",title:"Isometric Mapping (ISOMAP)",description:"Non-linear dimensionality reduction through Isometric Mapping",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping",slug:"/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/2023-04-13",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/2023-04-13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"}],version:"current",sidebarPosition:4450,frontMatter:{sidebar_position:4450,slug:"2023-04-13",title:"Isometric Mapping (ISOMAP)",authors:"mpolinowski",tags:["Python","Machine Learning"],description:"Non-linear dimensionality reduction through Isometric Mapping"},sidebar:"tutorialSidebar",previous:{title:"Fisher Linear Discriminant Analysis (LDA)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-fisher-discriminant-analysis/2023-04-13"},next:{title:"Multidimensional Scaling (MDS)",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13"}},p={},m=[{value:"Dataset",id:"dataset",level:2},{value:"2-Dimensional Plot",id:"2-dimensional-plot",level:2},{value:"3-Dimensional Plot",id:"3-dimensional-plot",level:2}],d={toc:m};function u(t){let{components:a,...r}=t;return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Victoria Harbour, Hongkong",src:e(50371).Z,width:"2385",height:"858"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dimensionality-reduction"},"Dimensionality Reduction"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#dataset"},"Dataset")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#2-dimensional-plot"},"2-Dimensional Plot")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#3-dimensional-plot"},"3-Dimensional Plot"))))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/isometric-mapping"},"Github Repository")),(0,l.kt)("p",null,"Non-linear dimensionality reduction through Isometric Mapping."),(0,l.kt)("h1",{id:"dimensionality-reduction"},"Dimensionality Reduction"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://scikit-learn.org/stable/modules/manifold.html"},"Manifold learning")," is an approach to non-linear dimensionality reduction. Algorithms for this task are based on the idea that the dimensionality of many data sets is only artificially high."),(0,l.kt)("p",null,"High-dimensional datasets can be very difficult to visualize. While data in two or three dimensions can be plotted to show the inherent structure of the data, equivalent high-dimensional plots are much less intuitive. To aid visualization of the structure of a dataset, the dimension must be reduced in some way."),(0,l.kt)("p",null,"The simplest way to accomplish this dimensionality reduction is by taking a random projection of the data. Though this allows some degree of visualization of the data structure, the randomness of the choice leaves much to be desired. In a random projection, it is likely that the more interesting structure within the data will be lost."),(0,l.kt)("p",null,"To address this concern, a number of supervised and unsupervised linear dimensionality reduction frameworks have been designed, such as:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"},"Principal Component Analysis (PCA)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-11-locally-linear-embedding/2023-04-11"},"Locally Linear Embedding (LLE)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-12-tstochastic-neighbor-embedding/2023-04-12"},"tStochastic Neighbor Embedding (t-SNE)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13"},"Multidimensional Scaling (MDS)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-isometric-mapping/2023-04-13"},"Isometric Mapping (ISOMAP)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/IoT-and-Machine-Learning/ML/2023-04-13-multi-dimensional-scaling/2023-04-13"},"Fisher Linear Discriminant Analysis (LDA)"))),(0,l.kt)("h2",{id:"dataset"},"Dataset"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/243766527_A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus"},"A multivariate study of variation in two species of rock crab of genus Leptograpsus"),": A multivariate approach has been used to study morphological variation in the blue and orange-form species of rock crab of the genus Leptograpsus. Objective criteria for the identification of the two species are established, based on the following characters:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SP"),": Species (Blue or Orange)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Sex"),": Male or Female"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"FL"),": Width of the frontal region of the carapace; "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RW"),": Width of the posterior region of the carapace (rear width); "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CL"),": Length of the carapace along the midline;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"CW"),": Maximum width of the carapace; "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"BD"),": and the depth of the body;")),(0,l.kt)("p",null,"The dataset can be ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tercen/crabs_dataset"},"downloaded from Github"),"."),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"(see introduction in: ",(0,l.kt)("a",{parentName:"em",href:"https://mpolinowski.github.io/docs/IoT-and-Machine-Learning/ML/2023-04-09-principal-component-analysis/2023-04-09"},"Principal Component Analysis PCA"),")")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"raw_data = pd.read_csv('data/A_multivariate_study_of_variation_in_two_species_of_rock_crab_of_genus_Leptograpsus.csv')\n\ndata = raw_data.rename(columns={\n    'sp': 'Species',\n    'sex': 'Sex',\n    'index': 'Index',\n    'FL': 'Frontal Lobe',\n    'RW': 'Rear Width',\n    'CL': 'Carapace Midline',\n    'CW': 'Maximum Width',\n    'BD': 'Body Depth'})\n\ndata['Species'] = data['Species'].map({'B':'Blue', 'O':'Orange'})\ndata['Sex'] = data['Sex'].map({'M':'Male', 'F':'Female'})\ndata['Class'] = data.Species + data.Sex\n\ndata_columns = ['Frontal Lobe',\n                'Rear Width',\n                'Carapace Midline',\n                'Maximum Width',\n                'Body Depth']\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# generate a class variable for all 4 classes\ndata['Class'] = data.Species + data.Sex\n\nprint(data['Class'].value_counts())\ndata.head(5)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"BlueMale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"BlueFemale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"OrangeMale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50")),(0,l.kt)("li",{parentName:"ul"},"OrangeFemale: ",(0,l.kt)("inlineCode",{parentName:"li"},"50"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.1"),(0,l.kt)("td",{parentName:"tr",align:null},"6.7"),(0,l.kt)("td",{parentName:"tr",align:null},"16.1"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"7.0"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"8.8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7"),(0,l.kt)("td",{parentName:"tr",align:null},"18.1"),(0,l.kt)("td",{parentName:"tr",align:null},"20.8"),(0,l.kt)("td",{parentName:"tr",align:null},"7.4"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"9.2"),(0,l.kt)("td",{parentName:"tr",align:null},"7.8"),(0,l.kt)("td",{parentName:"tr",align:null},"19.0"),(0,l.kt)("td",{parentName:"tr",align:null},"22.4"),(0,l.kt)("td",{parentName:"tr",align:null},"7.7"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"7.9"),(0,l.kt)("td",{parentName:"tr",align:null},"20.1"),(0,l.kt)("td",{parentName:"tr",align:null},"23.1"),(0,l.kt)("td",{parentName:"tr",align:null},"8.2"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"9.8"),(0,l.kt)("td",{parentName:"tr",align:null},"8.0"),(0,l.kt)("td",{parentName:"tr",align:null},"20.3"),(0,l.kt)("td",{parentName:"tr",align:null},"23.0"),(0,l.kt)("td",{parentName:"tr",align:null},"8.2"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"# normalize data columns\ndata_norm = data.copy()\ndata_norm[data_columns] = MinMaxScaler().fit_transform(data[data_columns])\n\ndata_norm.describe()\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"count"),(0,l.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"200.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"200.000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mean"),(0,l.kt)("td",{parentName:"tr",align:null},"25.500000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.527233"),(0,l.kt)("td",{parentName:"tr",align:null},"0.455365"),(0,l.kt)("td",{parentName:"tr",align:null},"0.529043"),(0,l.kt)("td",{parentName:"tr",align:null},"0.515053"),(0,l.kt)("td",{parentName:"tr",align:null},"0.511645")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"std"),(0,l.kt)("td",{parentName:"tr",align:null},"14.467083"),(0,l.kt)("td",{parentName:"tr",align:null},"0.219832"),(0,l.kt)("td",{parentName:"tr",align:null},"0.187835"),(0,l.kt)("td",{parentName:"tr",align:null},"0.216382"),(0,l.kt)("td",{parentName:"tr",align:null},"0.209919"),(0,l.kt)("td",{parentName:"tr",align:null},"0.220953")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"min"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.000000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"25%"),(0,l.kt)("td",{parentName:"tr",align:null},"13.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.358491"),(0,l.kt)("td",{parentName:"tr",align:null},"0.328467"),(0,l.kt)("td",{parentName:"tr",align:null},"0.382219"),(0,l.kt)("td",{parentName:"tr",align:null},"0.384000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.341935")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"50%"),(0,l.kt)("td",{parentName:"tr",align:null},"25.500000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.525157"),(0,l.kt)("td",{parentName:"tr",align:null},"0.459854"),(0,l.kt)("td",{parentName:"tr",align:null},"0.528875"),(0,l.kt)("td",{parentName:"tr",align:null},"0.525333"),(0,l.kt)("td",{parentName:"tr",align:null},"0.503226")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"75%"),(0,l.kt)("td",{parentName:"tr",align:null},"38.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.682390"),(0,l.kt)("td",{parentName:"tr",align:null},"0.569343"),(0,l.kt)("td",{parentName:"tr",align:null},"0.684650"),(0,l.kt)("td",{parentName:"tr",align:null},"0.664000"),(0,l.kt)("td",{parentName:"tr",align:null},"0.677419")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"max"),(0,l.kt)("td",{parentName:"tr",align:null},"50.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000"),(0,l.kt)("td",{parentName:"tr",align:null},"1.000000")))),(0,l.kt)("h2",{id:"2-dimensional-plot"},"2-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 2\nk_nearest_neighbors = 10\n\nisomap = Isomap(\n    n_components=no_components,\n    n_neighbors=k_nearest_neighbors)\n\ndata_isomap = isomap.fit_transform(data_norm[data_columns])\nprint('Reconstruction Error: ', isomap.reconstruction_error())\n# Reconstruction Error:  0.009501240251169362\n\ndata_norm[['ISOMAP1', 'ISOMAP2']] = data_isomap\ndata_norm.head(1)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"MDS1"),(0,l.kt)("th",{parentName:"tr",align:null},"MDS2"),(0,l.kt)("th",{parentName:"tr",align:null},"ISOMAP1"),(0,l.kt)("th",{parentName:"tr",align:null},"ISOMAP2"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.056604"),(0,l.kt)("td",{parentName:"tr",align:null},"0.014599"),(0,l.kt)("td",{parentName:"tr",align:null},"0.042553"),(0,l.kt)("td",{parentName:"tr",align:null},"0.050667"),(0,l.kt)("td",{parentName:"tr",align:null},"0.058065"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.482199"),(0,l.kt)("td",{parentName:"tr",align:null},"-0.917839"),(0,l.kt)("td",{parentName:"tr",align:null},"1.091359"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00803")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"fig = plt.figure(figsize=(10, 8))\nsns.scatterplot(x='ISOMAP1', y='ISOMAP2', hue='Class', data=data_norm)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Isometric Mapping (ISOMAP)",src:e(92329).Z,width:"857",height:"679"})),(0,l.kt)("h2",{id:"3-dimensional-plot"},"3-Dimensional Plot"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"no_components = 3\nk_nearest_neighbors = 10\n\nisomap = Isomap(\n    n_components=no_components,\n    n_neighbors=k_nearest_neighbors)\n\ndata_isomap = isomap.fit_transform(data_norm[data_columns])\nprint('Reconstruction Error: ', isomap.reconstruction_error())\n# Reconstruction Error:  0.007640087707465774\n\ndata_norm[['ISOMAP1', 'ISOMAP2', 'ISOMAP3']] = data_isomap\ndata_norm.head(1)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Species"),(0,l.kt)("th",{parentName:"tr",align:null},"Sex"),(0,l.kt)("th",{parentName:"tr",align:null},"Index"),(0,l.kt)("th",{parentName:"tr",align:null},"Frontal Lobe"),(0,l.kt)("th",{parentName:"tr",align:null},"Rear Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Carapace Midline"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Width"),(0,l.kt)("th",{parentName:"tr",align:null},"Body Depth"),(0,l.kt)("th",{parentName:"tr",align:null},"Class"),(0,l.kt)("th",{parentName:"tr",align:null},"ISOMAP1"),(0,l.kt)("th",{parentName:"tr",align:null},"ISOMAP2"),(0,l.kt)("th",{parentName:"tr",align:null},"ISOMAP3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Blue"),(0,l.kt)("td",{parentName:"tr",align:null},"Male"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"0.056604"),(0,l.kt)("td",{parentName:"tr",align:null},"0.014599"),(0,l.kt)("td",{parentName:"tr",align:null},"0.042553"),(0,l.kt)("td",{parentName:"tr",align:null},"0.050667"),(0,l.kt)("td",{parentName:"tr",align:null},"0.058065"),(0,l.kt)("td",{parentName:"tr",align:null},"BlueMale"),(0,l.kt)("td",{parentName:"tr",align:null},"1.091359"),(0,l.kt)("td",{parentName:"tr",align:null},"0.00803"),(0,l.kt)("td",{parentName:"tr",align:null},"0.117078")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class_colours = {\n    'BlueMale': '#0027c4', #blue\n    'BlueFemale': '#f18b0a', #orange\n    'OrangeMale': '#0af10a', # green\n    'OrangeFemale': '#ff1500', #red\n}\n\ncolours = data_norm['Class'].apply(lambda x: class_colours[x])\n\nx=data_norm.ISOMAP1\ny=data_norm.ISOMAP2\nz=data_norm.ISOMAP3\n\nfig = plt.figure(figsize=(10,10))\nplt.title('ISOMAP Data Analysis')\nax = fig.add_subplot(projection='3d')\n\nax.scatter(xs=x, ys=y, zs=z, s=50, c=colours)\n")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Isometric Mapping (ISOMAP)",src:e(71463).Z,width:"837",height:"836"})))}u.isMDXComponent=!0},92329:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/Isometric_Mapping_01-eba4d325e98c91001626335ccebe26a2.png"},71463:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/Isometric_Mapping_02-d55d5b102769cf816d2424b6d500351a.png"},50371:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-936fe81d44bf1beb4563551aafeb5788.jpg"}}]);