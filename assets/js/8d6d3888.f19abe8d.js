"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[20946],{258509:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(785893),i=t(603905);const a={sidebar_position:9060,slug:"2021-11-02",title:"spaCy NER Predictions",authors:"mpolinowski",tags:["Machine Learning","Python"]},s=void 0,o={id:"IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/index",title:"spaCy NER Predictions",description:"Victoria Harbour, Hongkong",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions",slug:"/IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/2021-11-02",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/2021-11-02",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2021-11-02",title:"spaCy NER Predictions",authors:"mpolinowski",tags:["Machine Learning","Python"]},sidebar:"tutorialSidebar",previous:{title:"Streamlit user interface for openCV/Mediapipe face mesh app",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-03--streamlit-opencv-mediapipe/2021-11-03"},next:{title:"spaCy NER on Arch Linux",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-11-01--spacy_natural_language_processing/2021-11-01"}},d={},c=[{value:"Setup",id:"setup",level:2},{value:"Import Libraries",id:"import-libraries",level:3},{value:"Text Cleanup",id:"text-cleanup",level:3},{value:"Load NER Model",id:"load-ner-model",level:3},{value:"Process your Data",id:"process-your-data",level:2},{value:"Load Image",id:"load-image",level:3},{value:"Extract Data",id:"extract-data",level:3},{value:"Data Preprocessing",id:"data-preprocessing",level:3},{value:"Get Predictions from NER Model",id:"get-predictions-from-ner-model",level:2},{value:"Bringing Results into a Dataframe",id:"bringing-results-into-a-dataframe",level:3},{value:"Drawing Bounding Boxes",id:"drawing-bounding-boxes",level:2},{value:"End and Start Position",id:"end-and-start-position",level:3},{value:"Table Join",id:"table-join",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Victoria Harbour, Hongkong",src:t(918258).Z+"",width:"1500",height:"663"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-10-31--tesseract_ocr_arch_linux/2021-10-31",children:"Part I - Tesseract OCR on Arch Linux"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-01--spacy_natural_language_processing/2021-11-01",children:"Part II - spaCy NER on Arch Linux"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-11-02--spacy_ner_predictions/2021-11-02",children:"Part III - spaCy NER Predictions"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"I now want to use my model to extract the name, email address, web address and designation from an unknown name card:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(688720).Z+"",width:"905",height:"511"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#setup",children:"Setup"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#import-libraries",children:"Import Libraries"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#text-cleanup",children:"Text Cleanup"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#load-ner-model",children:"Load NER Model"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#process-your-data",children:"Process your Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#load-image",children:"Load Image"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#extract-data",children:"Extract Data"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#data-preprocessing",children:"Data Preprocessing"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#get-predictions-from-ner-model",children:"Get Predictions from NER Model"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#bringing-results-into-a-dataframe",children:"Bringing Results into a Dataframe"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#drawing-bounding-boxes",children:"Drawing Bounding Boxes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#end-and-start-position",children:"End and Start Position"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#table-join",children:"Table Join"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"Re-enter the virtual environment and create a new Python notebook in Jupyter:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source .env/bin/activate\r\njupyter notebook\n"})}),"\n",(0,r.jsx)(n.h3,{id:"import-libraries",children:"Import Libraries"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import numpy as np\r\nimport pandas as pd\r\nimport cv2 as cv\r\nimport pytesseract\r\nfrom glob import glob\r\nimport spacy\r\nimport re\r\nimport string\n"})}),"\n",(0,r.jsx)(n.h3,{id:"text-cleanup",children:"Text Cleanup"}),"\n",(0,r.jsxs)(n.p,{children:["I can re-use the clean text function created in the ",(0,r.jsx)(n.strong,{children:"Data Preprocessing"})," step:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"def cleanText(txt):\r\n    \r\n    whitespace = string.whitespace\r\n    punctuation = '!#$%&\\'()*+:;<=>?[\\\\]^`{|}~'\r\n    tableWhitespace = str.maketrans('','',whitespace)\r\n    tablePunctuation = str.maketrans('','',punctuation)\r\n\r\n    text = str(txt)\r\n    text = text.lower()\r\n    removeWhitespace = text.translate(tableWhitespace)\r\n    removePunctuation = removeWhitespace.translate(tablePunctuation)\r\n    \r\n    return str(removePunctuation)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"load-ner-model",children:"Load NER Model"}),"\n",(0,r.jsxs)(n.p,{children:["All I need to do here is to import the ",(0,r.jsx)(n.code,{children:"best-model"})," with spaCy from the output folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"model_ner = spacy.load('./output/model-best/')\n"})}),"\n",(0,r.jsx)(n.h2,{id:"process-your-data",children:"Process your Data"}),"\n",(0,r.jsx)(n.h3,{id:"load-image",children:"Load Image"}),"\n",(0,r.jsx)(n.p,{children:"Use OpenCV2 to load the image (and verify that the images was loaded):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"image = cv.imread('../images/card_00.jpg')\r\n\r\n# cv.imshow('businesscard', image)\r\n# cv.waitKey(0)\r\n# cv.destroyAllWindows()\n"})}),"\n",(0,r.jsx)(n.h3,{id:"extract-data",children:"Extract Data"}),"\n",(0,r.jsx)(n.p,{children:"Now grab the text from the image using Pytesseract:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"tessData = pytesseract.image_to_data(image)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"tessData"})," to verify that the data was sucessfully extracted:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"tessData\r\n\r\n...\r\nMike\\n5\\t1\\t1\\t1\\t1\\t2\\t645\\t29\\t225\\t34\\t69\\tPolinowski\\n2\\t1\\t2\\t0\\t0\\t0\\t628\\t78\\t247\\t37\\t-1\\t\\n3\\t1\\t2\\t1\\t0\\t0\\t628\\t78\\t247\\t37\\t-1\\t\\n4\\t1\\t2\\t1\\t1\\t0\\t628\\t78\\t244\\t19\\t-1\\t\\n5\\t1\\t2\\t1\\t1\\t1\\t628\\t78\\t62\\t19\\t91\\tChief\\n5\\t1\\t2\\t1\\t1\\t2\\t701\\t78\\t171\\t19\\t90\\tProcrastinator\\n\r\n...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Convert this data into a Pandas Dataframe:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"tessList = list(map(lambda x:x.split('\\t'),tessData.split('\\n')))\r\ndf = pd.DataFrame(tessList[1:],columns=tessList[0])\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)(n.code,{children:"df"})," to verify that the data was wrapped inside the data frame:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(124164).Z+"",width:"874",height:"368"})}),"\n",(0,r.jsx)(n.p,{children:"Clean the data frame:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df.dropna(inplace=True) #Drop missing values\r\ndf['text'] = df['text'].apply(cleanText) #Apply cleanText function on text column\n"})}),"\n",(0,r.jsx)(n.h3,{id:"data-preprocessing",children:"Data Preprocessing"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_clean = df.query('text !=\"\" ') #Ignore whitespace\r\ncontent = \" \".join([w for w in df_clean['text']]) #Join every word in text column concatenated by spaces\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify by printing content:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"print(content)\r\n\r\nmike polinowski chief procrastinator i 39c, street 318, boeung keng kong phnom penh, cambodia tel 855 0 23 21 59 60 email me@example.com www.some-place.com\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-predictions-from-ner-model",children:"Get Predictions from NER Model"}),"\n",(0,r.jsx)(n.p,{children:"Now I can use the NER model to get my named entities out of that string:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"doc = model_ner(content)\n"})}),"\n",(0,r.jsx)(n.p,{children:"spaCy offers a tool that allows us to display the recognized named entities:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"from spacy import displacy\r\ndisplacy.serve(doc,style='ent')\n"})}),"\n",(0,r.jsx)(n.p,{children:"The display is served on localhost port 5000."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"displacy.render(doc,style='ent')"})," instead if you are using a Jupyter notebook."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(905941).Z+"",width:"1063",height:"136"})}),"\n",(0,r.jsx)(n.p,{children:"All entities were sucessfully recognized - except the job designation. Procrastination does not seem to have much of a future ..."}),"\n",(0,r.jsx)(n.h3,{id:"bringing-results-into-a-dataframe",children:"Bringing Results into a Dataframe"}),"\n",(0,r.jsx)(n.p,{children:"To work with the data I will now write it into an JSON object:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"dockJSON = doc.to_json()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This way I can now get hold of the data by keys - ",(0,r.jsx)(n.code,{children:"text"})," (all recognized strings), ",(0,r.jsx)(n.code,{children:"ents"})," (the tags used to those words) and ",(0,r.jsx)(n.code,{children:"tokens"})," (character positions within the string):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"dockJSON.keys()\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This will retrieve the available keys - ",(0,r.jsx)(n.code,{children:"dict_keys(['text', 'ents', 'tokens'])"})," which can be queried by:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"dockJSON['text']\r\ndockJSON['ents']\r\ndockJSON['tokens']\n"})}),"\n",(0,r.jsx)(n.p,{children:"Let's wrap everything into a Pandas Data Frame:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"dockJSON = doc.to_json()\r\n\r\ndoc_text = dockJSON['text'] \r\n# doc_text #Testing\r\ndf_tokens = pd.DataFrame(dockJSON['tokens']) #Create data frame from tokens\r\n# df_tokens.head() #Testing\r\ndf_tokens['token'] = df_tokens[['start','end']].apply(lambda x:doc_text[x[0]:x[1]], axis=1) #Add text table\r\n# df_tokens.head(10) #Testing\r\nright_table = pd.DataFrame(dockJSON['ents'])[['start','label']] #Take the entities table\r\ndf_tokens = pd.merge(df_tokens,right_table,how='left',on='start') #And left-join it with the tokens+text table\r\n# df_tokens.head(10) #Testing\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(416584).Z+"",width:"1077",height:"370"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace all ",(0,r.jsx)(n.code,{children:"NaN"})," fields in the lable column with ",(0,r.jsx)(n.code,{children:"O"}),"'s:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-Python",children:"df_tokens.fillna('O',inplace=True)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"drawing-bounding-boxes",children:"Drawing Bounding Boxes"}),"\n",(0,r.jsx)(n.h3,{id:"end-and-start-position",children:"End and Start Position"}),"\n",(0,r.jsx)(n.p,{children:"To highlight detected entities we need the position of each entity as reported by Pytesseract:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(264254).Z+"",width:"791",height:"134"})}),"\n",(0,r.jsxs)(n.p,{children:["For this we can join ",(0,r.jsx)(n.code,{children:"df_tokens"})," table with the ",(0,r.jsx)(n.code,{children:"df_clean"})," table using a common key."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Get the ",(0,r.jsx)(n.strong,{children:"End Position"})," of every word inside the ",(0,r.jsx)(n.code,{children:"text"})," column in ",(0,r.jsx)(n.code,{children:"df_clean['text']"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"lambda x: len(x)+1.cumsum()-1 #End position is length of each string +1 space. The cummulative sum adds the length of each prior string to get the absolut endposition inside `text`\n"})}),"\n",(0,r.jsx)(n.p,{children:"Cumulative sum example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Input: 10, 15, 20, 25, 30"}),"\n",(0,r.jsx)(n.li,{children:"Output: 10, 25, 45, 70, 100"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_clean['end'] = df_clean['text'].apply(lambda x: len(x) + 1).cumsum() -1\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.strong,{children:"Start Position"}),"  of each word is the end position minus the length of the word:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_clean['start'] = df_clean[['text','end']].apply(lambda x: x[1] - len(x[0]),axis=1)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(720993).Z+"",width:"889",height:"187"})}),"\n",(0,r.jsx)(n.h3,{id:"table-join",children:"Table Join"}),"\n",(0,r.jsxs)(n.p,{children:["Now that we have a common key in both tables ",(0,r.jsx)(n.code,{children:"df_clean"})," and ",(0,r.jsx)(n.code,{children:"df_tokens"})," we can use that one - the ",(0,r.jsx)(n.strong,{children:"Start Position"})," - to perform an inner join:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"df_card = pd.merge(df_clean,df_tokens[['start','token','label']],how='inner',on='start')\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(826069).Z+"",width:"1007",height:"203"})}),"\n",(0,r.jsxs)(n.p,{children:["The table contains all the information that we need to draw our bounding box. I can extract them for every entity that is not labled with ",(0,r.jsx)(n.code,{children:"O"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"bb_df = df_card.query(\"label ! = 'O'\")\n"})}),"\n",(0,r.jsx)(n.p,{children:"From this I can now:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"img = image.copy() #first take a copy of the original image\r\nfor x,y,w,h,label in bb_df[['left','top','width','height','label']].values: #write data into an array\r\n  x = int(x)\r\n  y = int(y)\r\n  w = int(w)\r\n  h = int(h)\r\n\r\n  cv.rectangle(img,(x,y),(x+w,y+h),(0,255,0),2) #Draw rectangle around entities\r\n  cv.putText(img,str(label),(x,y),cv.FONT_HERSHEY_PLAIN,1,(255,0,0),2) #Add a tag from value of label\r\n\r\ncv.imshow('Prediction', img)\r\ncv.waitKey(0)\r\ncv.destroyAllWindows()\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(125198).Z+"",width:"905",height:"584"})}),"\n",(0,r.jsxs)(n.p,{children:["The bounding boxes are still split into several parts that need to be combined. I labeled them with ",(0,r.jsx)(n.code,{children:"B-"})," and ",(0,r.jsx)(n.code,{children:"I-"})," prefixes - e.g. ",(0,r.jsx)(n.code,{children:"B-NAME"})," for the beginning of the name entity and ",(0,r.jsx)(n.code,{children:"I-NAME"})," for all following entities that are part of it. We can remove those prefixes with:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"bb_df['label'] = bb_df['label'].apply(lambda x: x[2:])\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(354841).Z+"",width:"895",height:"165"})}),"\n",(0,r.jsx)(n.p,{children:"And now I can group all entities that are assigned the same label:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"class groupgen():\r\n    def __init__(self):\r\n        self.id = 0\r\n        self.text = ''\r\n        \r\n    def getgroup(self,text):\r\n        if self.text == text: #If entity has the same label - group them under the same id\r\n            return self.id\r\n        else:\r\n            self.id +=1 #Else increment\r\n            self.text = text\r\n            return self.id\r\n        \r\ngrp_gen = groupgen()\n"})}),"\n",(0,r.jsx)(n.p,{children:"Add the group ID to the bounding box data frame:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"bb_df['group'] = bb_df['label'].apply(grp_gen.getgroup)\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(128362).Z+"",width:"993",height:"346"})}),"\n",(0,r.jsx)(n.p,{children:"Calculate the missing parameter of the right and bottom edge:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"bb_df[['top','left','width','height']] = bb_df[['top','left','width','height']].astype(int)\r\nbb_df['right'] = bb_df['left'] +  bb_df['width'] #Calculate right edge\r\nbb_df['bottom'] = bb_df['top'] +  bb_df['height'] #Calculate bottom edge\n"})}),"\n",(0,r.jsx)(n.p,{children:"Aggregate all entities of a group and find the position of the enclosing bounding box:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Left"})," - Minimum value of ",(0,r.jsx)(n.code,{children:"left"})," column"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Right"})," - Maximum value of ",(0,r.jsx)(n.code,{children:"right"})," column"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Top"})," - Minimum value of ",(0,r.jsx)(n.code,{children:"top"})," column"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Bottom"})," - Maximum value of ",(0,r.jsx)(n.code,{children:"bottom"})," column"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"col_group = ['top','bottom','left','right','label','token','group']\r\ngroup_tag_img = bb_df[col_group].groupby(by='group')\r\n\r\nimg_tagging = group_tag_img.agg({\r\n    'top':min,\r\n    'bottom':max,\r\n    'left':min,\r\n    'right':max,\r\n    'label':np.unique,\r\n    'token':lambda x: \" \".join(x) #Join all words together seperated by a space\r\n})\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NER Prediction",src:t(825659).Z+"",width:"1068",height:"232"})})]})}function h(e={}){const{wrapper:n}={...(0,i.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(667294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),c=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),p=c(t),g=i,x=p["".concat(d,".").concat(g)]||p[g]||l[g]||a;return t?r.createElement(x,s(s({ref:n},h),{},{components:t})):r.createElement(x,s({ref:n},h))}));h.displayName="MDXCreateElement"},918258:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-4f747fa38245d3c618169ab90d8c3f77.jpg"},688720:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_00-3de0e71d4629a8358c03a71154005d77.jpg"},124164:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_01-3c793e106a2c510a281251f2a7dab3b2.png"},905941:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_02-b1f63d6c31e8b06fce57145569e746cd.png"},416584:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_03-e419b05ec810c184a2b85de2a3cdca7e.png"},264254:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_04-b59ef2988100c14796e5c98aef0a38a0.png"},720993:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_05-246be03c7282d64541f331e6cae948e7.png"},826069:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_06-ac190ed1d9a80fe9763636fddcc722f5.png"},125198:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_07-d101ff0d2b0a25f170d7539b897ae266.png"},354841:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_08-580bb3c25872ce30bc98077e38220c02.png"},128362:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_09-550ef8978b5ccc4f3dd53fefa1f8bbb0.png"},825659:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/predictions_10-f041dc2ac9b403086a882019563634b4.png"}}]);