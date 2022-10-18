"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[54869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||s;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const s={sidebar_position:8970,slug:"2022-10-13",title:"Python - Working with REST API Requests",authors:"mpolinowski",tags:["Python"],description:"Retrieve information from JSON web APIs and process them."},o=void 0,a={unversionedId:"Development/Python/2022-10-13-python-rest-api/index",id:"Development/Python/2022-10-13-python-rest-api/index",title:"Python - Working with REST API Requests",description:"Retrieve information from JSON web APIs and process them.",source:"@site/docs/Development/Python/2022-10-13-python-rest-api/index.md",sourceDirName:"Development/Python/2022-10-13-python-rest-api",slug:"/Development/Python/2022-10-13-python-rest-api/2022-10-13",permalink:"/docs/Development/Python/2022-10-13-python-rest-api/2022-10-13",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-13-python-rest-api/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8970,frontMatter:{sidebar_position:8970,slug:"2022-10-13",title:"Python - Working with REST API Requests",authors:"mpolinowski",tags:["Python"],description:"Retrieve information from JSON web APIs and process them."},sidebar:"tutorialSidebar",previous:{title:"Python - Working with the Elasticsearch REST API",permalink:"/docs/Development/Python/2022-10-14-python-rest-elastic/2022-10-14"},next:{title:"Python - RE",permalink:"/docs/Development/Python/2022-10-12-python-regular-expressions/2022-10-12"}},l={},u=[{value:"Request",id:"request",level:2}],c={toc:u};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sham Sui Po, Hong Kong",src:n(99503).Z,width:"1500",height:"548"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#request"},"Request"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/python-rest"},"Github Repository")),(0,i.kt)("p",null,"Connecting to a REST API (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://www.thecocktaildb.com/api.php"},"The Cocktail DB"),") using Python:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl \'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin%20Tonic\'\n{"drinks":[{"idDrink":"178365","strDrink":"Gin Tonic","strDrinkAlternate":null,"strTags":null,"strVideo":null,"strCategory":"Cocktail","strIBA":null,"strAlcoholic":"Alcoholic","strGlass":"Highball glass","strInstructions":"Fill a highball glass with ice, pour the gin, top with tonic water and squeeze a lemon wedge and garnish with a lemon wedge.","strInstructionsES":null,"strInstructionsDE":"F\\u00fcllen Sie ein Highball-Glas mit Eis, gie\\u00dfen Sie den Gin ein, gie\\u00dfen Sie Tonic Water dar\\u00fcber und dr\\u00fccken Sie eine Zitronenscheibe aus und garnieren Sie sie mit einer Zitronenscheibe.","strInstructionsFR":null,"strInstructionsIT":"Colmate un bicchiere highball di ghiaccio, versate il gin, colmate con acqua tonica e spremete uno spicchio di limone e guarnite con una fetta di limone. ","strInstructionsZH-HANS":null,"strInstructionsZH-HANT":null,"strDrinkThumb":"https:\\/\\/www.thecocktaildb.com\\/images\\/media\\/drink\\/qcgz0t1643821443.jpg","strIngredient1":"Gin","strIngredient2":"Tonic Water","strIngredient3":"Lemon Peel","strIngredient4":"Ice","strIngredient5":null,"strIngredient6":null,"strIngredient7":null,"strIngredient8":null,"strIngredient9":null,"strIngredient10":null,"strIngredient11":null,"strIngredient12":null,"strIngredient13":null,"strIngredient14":null,"strIngredient15":null,"strMeasure1":"4 cl","strMeasure2":"10 cl","strMeasure3":"1 Slice","strMeasure4":"cubes","strMeasure5":"","strMeasure6":"","strMeasure7":"","strMeasure8":null,"strMeasure9":null,"strMeasure10":null,"strMeasure11":null,"strMeasure12":null,"strMeasure13":null,"strMeasure14":null,"strMeasure15":null,"strImageSource":"https:\\/\\/www.brunovanzan.com\\/wp-content\\/uploads\\/2020\\/01\\/gin-tonic.png","strImageAttribution":null,"strCreativeCommonsConfirmed":"No","dateModified":null}]}\n')),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import requests\n\nr = requests.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin%20Tonic')\ndrink = r.json()['drinks'][0]\n\nfor item in drink:\n    print('NAME:\\n', drink['strDrink'], '\\nINSTRUCTIONS:\\n', drink['strInstructions'], '\\nIMAGE:\\n', drink['strImageSource'])\n\n # =>   \n # NAME:\n # Gin Tonic \n # INSTRUCTIONS:\n # Fill a highball glass with ice, pour the gin, top with tonic water and squeeze a lemon wedge and garnish with a lemon wedge. \n # IMAGE:\n # https://www.brunovanzan.com/wp-content/uploads/2020/01/gin-tonic.png\n")),(0,i.kt)("p",null,"With a user defined search request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import requests\nfrom pathlib import Path\n\n# user defined search request\n\ndef get_drink(drink):\n    url = f'https://www.thecocktaildb.com/api/json/v1/1/search.php?s={drink}'\n    r = requests.get(url)\n    drink = r.json()['drinks'][0]\n    with open(results_path, 'a') as file:\n        file.write(f\"{drink['strDrink']}, {drink['strInstructions']}, {drink['strImageSource']}\"+'\\n')\n    return\n\n\n# prepare CSV file to store results\n\nresults_path = Path('files/drinks.csv')\n\ncontent = \"NAME, INSTRUCTIONS, IMAGE\"\n\nif not results_path.exists():\n    with open(results_path, 'w') as file:\n        file.write(\"NAME, INSTRUCTIONS, IMAGE\\n\")\n\n# run search\n\nget_drink(drink='Daiquiri')\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"NAME, INSTRUCTIONS, IMAGE\nDaiquiri, Pour all ingredients into shaker with ice cubes. Shake well. Strain in chilled cocktail glass., https://commons.wikimedia.org/wiki/File:Classic_Daiquiri_in_Cocktail_Glass.jpg\n")))}p.isMDXComponent=!0},99503:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);