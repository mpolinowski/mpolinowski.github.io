"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[88768],{38153:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(474848),i=t(28453);const a={sidebar_position:8940,slug:"2022-10-22",title:"Python - Natural Language Processing",authors:"mpolinowski",tags:["Python"],description:"Python Natural Language Toolkit - Stemming, Similarity, Sentiment Examples"},s=void 0,r={id:"Development/Python/2022-10-22-python-nlp/index",title:"Python - Natural Language Processing",description:"Python Natural Language Toolkit - Stemming, Similarity, Sentiment Examples",source:"@site/docs/Development/Python/2022-10-22-python-nlp/index.md",sourceDirName:"Development/Python/2022-10-22-python-nlp",slug:"/Development/Python/2022-10-22-python-nlp/2022-10-22",permalink:"/docs/Development/Python/2022-10-22-python-nlp/2022-10-22",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-22-python-nlp/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8940,frontMatter:{sidebar_position:8940,slug:"2022-10-22",title:"Python - Natural Language Processing",authors:"mpolinowski",tags:["Python"],description:"Python Natural Language Toolkit - Stemming, Similarity, Sentiment Examples"},sidebar:"tutorialSidebar",previous:{title:"Pipenv - Welcome NPM",permalink:"/docs/Development/Python/2022-12-11-pipenv/2022-12-11"},next:{title:"Python - Build a REST API",permalink:"/docs/Development/Python/2022-10-15-python-rest-server/2022-10-15"}},l={},d=[{value:"Natural Language Toolkit",id:"natural-language-toolkit",level:2},{value:"Finding Word Stems",id:"finding-word-stems",level:3},{value:"Lemmatizing Flow Text",id:"lemmatizing-flow-text",level:3},{value:"Compare Word Stems",id:"compare-word-stems",level:3},{value:"Similarity Coefficient",id:"similarity-coefficient",level:3},{value:"Sentiment Analysis",id:"sentiment-analysis",level:3},{value:"Online Search (Wikipedia)",id:"online-search-wikipedia",level:3}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Sham Sui Po, Hong Kong",src:t(88831).A+"",width:"1500",height:"548"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#natural-language-toolkit",children:"Natural Language Toolkit"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#finding-word-stems",children:"Finding Word Stems"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#lemmatizing-flow-text",children:"Lemmatizing Flow Text"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#compare-word-stems",children:"Compare Word Stems"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#similarity-coefficient",children:"Similarity Coefficient"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#sentiment-analysis",children:"Sentiment Analysis"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#online-search-wikipedia",children:"Online Search (Wikipedia)"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/mpolinowski/python-nltk",children:"Github Repository"})}),"\n",(0,o.jsx)(n.h2,{id:"natural-language-toolkit",children:"Natural Language Toolkit"}),"\n",(0,o.jsx)(n.h3,{id:"finding-word-stems",children:"Finding Word Stems"}),"\n",(0,o.jsxs)(n.p,{children:["Use a Lemmatisation function to find the root of a word and compare different forms of the same word - e.g. ",(0,o.jsx)(n.code,{children:"be"}),", ",(0,o.jsx)(n.code,{children:"was"}),", ",(0,o.jsx)(n.code,{children:"is"}),", etc. Install the ",(0,o.jsx)(n.strong,{children:"nltk"})," package:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pip install nltk\n"})}),"\n",(0,o.jsxs)(n.p,{children:["And ",(0,o.jsx)(n.a,{href:"https://www.nltk.org/data.html",children:"download all the data"})," with ",(0,o.jsx)(n.code,{children:"python -m nltk.downloader all"})," or just the requiered files to the default location ",(0,o.jsx)(n.code,{children:"/home/myuser/nltk_data"})," by adding the following lines to your code:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"nltk.download('wordnet)\nnltk.download('omw-1.4')\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A quick loop through the following dictionary reveals that all those words have the identical stem - ",(0,o.jsx)(n.code,{children:"be"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"import nltk\n\nnltk.download('wordnet')\nnltk.download('omw-1.4')\n\nwords = ['was', 'is', 'am', 'be']\n\nlemmatizer = nltk.stem.WordNetLemmatizer()\n\n\nfor word in words:\n    lemma = lemmatizer.lemmatize(word, 'v') # n = noun, v =verb, a = adjective, r = adverbs, s = satellite adjectives\n    print(lemma)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"lemmatizing-flow-text",children:"Lemmatizing Flow Text"}),"\n",(0,o.jsx)(n.p,{children:"To work with full sentences we first need to tonkenize the sentence - breaking it up into single words. And also apply the word definition (noun, verb, etc.) dynamically."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"import nltk\n\n# only run once\n# nltk.download('wordnet')\n# nltk.download('omw-1.4')\n# nltk.download('punkt')\n# nltk.download('averaged_perceptron_tagger')\n\ntext = 'Experiments on mice at Boston University have spotlighted an ambiguous U.S. policy for research on potentially dangerous pathogens.'\n# break text up into single words toLowerCase\ntokens = nltk.word_tokenize(text.lower())\n# get the pos tag for each token (check if it is verb, noun, etc.)\ntags = nltk.pos_tag(tokens)\n\n# print(tags)\n# [('experiments', 'NNS'), ('on', 'IN'), ('mice', 'NNS'), ('at', 'IN'), ('boston', 'NN'), ('university', 'NN'), ('have', 'VBP'), ('spotlighted', 'VBN'), ('an', 'DT'), ('ambiguous', 'JJ'), ('u.s.', 'NN'), ('policy', 'NN'), ('for', 'IN'), ('research', 'NN'), ('on', 'IN'), ('potentially', 'RB'), ('dangerous', 'JJ'), ('pathogens', 'NNS'), ('.', '.')]\n\nlemmatizer = nltk.stem.WordNetLemmatizer()\ntext_lemmas = []\n\nfor token, tag in zip (tokens, tags):\n    # extract part-of-speach tag\n    tag_pos = tag[1][0].lower()\n    # print(token, tag_pos)\n    # exclude prepositions, articles, etc\n    if tag_pos in ['n', 'v', 'a', 'r']:\n        lemma = lemmatizer.lemmatize(token, tag_pos)\n        text_lemmas.append(lemma)\n\n\nprint(text_lemmas)\n# ['experiment', 'mouse', 'boston', 'university', 'have', 'spotlight', 'u.s.', 'policy', 'research', 'potentially', 'pathogen']\n"})}),"\n",(0,o.jsx)(n.h3,{id:"compare-word-stems",children:"Compare Word Stems"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"import nltk\n\n# only run once\n# nltk.download('wordnet')\n# nltk.download('omw-1.4')\n# nltk.download('punkt')\n# nltk.download('averaged_perceptron_tagger')\n\ntext1 = 'The Experiments on mice...'\ntext2 = 'The Experiment on a mouse...'\n\nlemmatizer = nltk.stem.WordNetLemmatizer()\n\ndef get_lemmas(text):\n    # break text up into single words toLowerCase\n    tokens = nltk.word_tokenize(text.lower())\n    tags = nltk.pos_tag(tokens)\n\n    text_lemmas = []\n\n    for token, tag in zip (tokens, tags):\n        # extract part-of-speech tag\n        tag_pos = tag[1][0].lower()\n        # exclude prepositions, articles, etc\n        if tag_pos in ['n', 'v', 'a', 'r']:\n            lemma = lemmatizer.lemmatize(token, tag_pos)\n            text_lemmas.append(lemma)\n\n    # print(text_lemmas)\n    return text_lemmas\n\nsource1 = get_lemmas(text1)\nsource2 = get_lemmas(text2)\n\n\nprint(source1 == source2)\n# True\n"})}),"\n",(0,o.jsx)(n.h3,{id:"similarity-coefficient",children:"Similarity Coefficient"}),"\n",(0,o.jsx)(n.p,{children:"Compare a set of sentences to a query string and return the string with the highest similarity:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'import nltk\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nlemmatizer = nltk.stem.WordNetLemmatizer()\n\n# only run once\n# nltk.download(\'wordnet\')\n# nltk.download(\'omw-1.4\')\n# nltk.download(\'punkt\')\n# nltk.download(\'averaged_perceptron_tagger\')\n\njson_response = { "articles": [\n        { "id": "432rsde34t",\n          "title": "Some Title",\n          "abstract": "Experiments on mice at Boston University have spotlighted an ambiguous U.S. policy for research on potentially dangerous pathogens.",\n          "author": "Some Author"},\n        { "id": "67Gfdhnd4",\n          "title": "Some Title",\n          "abstract": "The move puts President Biden\u2019s debt relief plan on hold. The court granted a stay in response to an appeal filed by six Republican-led states.",\n          "author": "Some Author"},\n        { "id": "sHB8679iasd",\n          "title": "Some Title",\n          "abstract": "The new Communist Party elite will limit potential resistance to Mr. Xi\u2019s agenda of bolstering security and expanding state sway over the economy.",\n          "author": "Some Author"},\n        { "id": "dhg456wASF",\n          "title": "Some Title",\n          "abstract": "When Laurene Powell Jobs unveiled a website dedicated to her husband, many wondered if it could change how influential people burnish their legacies.",\n          "author": "Some Author"},\n        { "id": "gfdh346Nr",\n          "title": "Some Title",\n          "abstract": "If former President Trump turns down the drama of testifying, his legal team could mount several constitutional and procedural arguments in court.",\n          "author": "Some Author"}\n    ]\n}\n\n# print(json_response[\'articles\'][0][\'abstract\'])\n\ntext = ""\n\n# extract article abstracts and combine them\nfor article in json_response[\'articles\']:\n    # print(article[\'abstract\'])\n    text = text + article[\'abstract\'] + \' \'\n\n# print(text)\n\n\n# compare articles to the following search query\nquery = \'University Boston Experiment\'\n\n# get list of single sentences out of combined text\nsentences = nltk.sent_tokenize(text)\n# print(sentences)\n# append query sentence to list\nsentences.append(query)\n\n\ndef get_lemmas(text):\n    # break text up into single words toLowerCase\n    tokens = nltk.word_tokenize(text.lower())\n    tags = nltk.pos_tag(tokens)\n\n    text_lemmas = []\n\n    for token, tag in zip (tokens, tags):\n        # extract part-of-speech tag\n        tag_pos = tag[1][0].lower()\n        # exclude prepositions, articles, etc\n        if tag_pos in [\'n\', \'v\', \'a\', \'r\']:\n            lemma = lemmatizer.lemmatize(token, tag_pos)\n            text_lemmas.append(lemma)\n\n    return text_lemmas\n\n# get lemmas out of list of sentences\ntv = TfidfVectorizer(tokenizer=get_lemmas)\n# generate matrix with weights for each lemma in the given text (how often do they appear)\ntf = tv.fit_transform(sentences)\n\n# import pandas as pd\n# df = pd.DataFrame(tf.toarray(), columns=tv.get_feature_names_out())\n# print(df)\n# this returns the matrix of words and their relative weight.\n# each row represents a sentence that we fed into the function.\n# the last row tf[-1] is the query string\n# #      agenda    appeal  argument   bolster   boston   burnish  ...  university    unveil   website    wonder        xi         \u2019\n# # 0  0.000000  0.000000  0.000000  0.000000  0.26162  0.000000  ...     0.26162  0.000000  0.000000  0.000000  0.000000  0.000000\n# # 1  0.000000  0.000000  0.000000  0.000000  0.00000  0.000000  ...     0.00000  0.000000  0.000000  0.000000  0.000000  0.305598\n# # 2  0.000000  0.395963  0.000000  0.000000  0.00000  0.000000  ...     0.00000  0.000000  0.000000  0.000000  0.000000  0.000000\n# # 3  0.263724  0.000000  0.000000  0.263724  0.00000  0.000000  ...     0.00000  0.000000  0.000000  0.000000  0.263724  0.218913\n# # 4  0.000000  0.000000  0.000000  0.000000  0.00000  0.288675  ...     0.00000  0.288675  0.288675  0.288675  0.000000  0.000000\n# # 5  0.000000  0.000000  0.326545  0.000000  0.00000  0.000000  ...     0.00000  0.000000  0.000000  0.000000  0.000000  0.000000\n# # 6  0.000000  0.000000  0.000000  0.000000  0.57735  0.000000  ...     0.57735  0.000000  0.000000  0.000000  0.000000  0.000000\n\n# # [7 rows x 59 columns]\n\n# Now we can calculate the relative similarity\n# of each sentence to the query string\n\ncoefficients = cosine_similarity(tf[-1], tf)\n\n# print(coefficients)\n# the result is that the query string matches itself by 100%\n# and the next best match is the first sentence\n# [[0.4531384 0.        0.        0.        0.        0.        1.]]\n\n# now we can sort that list and extract the matching sentence\n# index = coefficients.argsort()[0]\n# the result is a nested list use zero index or flatten() to extract\n# print(index)\n\n# 6 represents the query string and 0 is the position of the best match\n# [1 2 3 4 5 0 6]\n\n# so we need to extract the second to last\nindex = coefficients.argsort().flatten()[-2]\n\n# we can use the index to get the sentence with the best match\nprint(sentences[index])\n\n# Result:\n# Experiments on mice at Boston University have spotlighted an ambiguous U.S. policy for research on potentially dangerous pathogens.\n'})}),"\n",(0,o.jsx)(n.h3,{id:"sentiment-analysis",children:"Sentiment Analysis"}),"\n",(0,o.jsx)(n.p,{children:"Analyze the overall sentiment towards a product based on it's customer reviews:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'from nltk.sentiment import SentimentIntensityAnalyzer\n\n# run once\n# import nltk\n# nltk.download(\'vader_lexicon\')\n\nanalyzer = SentimentIntensityAnalyzer()\n\njson_response = { "reviews": [\n        { "id": "432rsde34t",\n          "title": "Some Title",\n          "text": "I regret this purchase... Only buy if you enjoy a keyboard that goes to sleep even when hardwired and takes like 5 seconds to wake up. This means copy and paste will sometimes fail on the copy because keyboard was sleeping or you think you are typing but you are not lol. So if you throw in the fact that you will get random stuck keys and sometimes profile changes what you actually have is just an annoying keyboard. I have never done so many updates on a review, this is what a mistake it is to purchase this hardware. And take it from me, someone who has a lot of razer products and all of which have similar issues... look else where, Razer is not the company you remember, very disappointing.",\n          "author": "Some Author"},\n        { "id": "67Gfdhnd4",\n          "title": "Some Title",\n          "text": "I do have a couple of complaints, though. The software is a bit slow and bloated and seems to slow down my startup time on my computer. I am also having issues with the volume wheel - sometimes it will scroll web pages for some reason and does weird things like jump from 50 to 100 or turn up when i turn down. I also wish it was a bit cheaper, but for my requirements, I did not really have much choice.",\n          "author": "Some Author"},\n        { "id": "sHB8679iasd",\n          "title": "Some Title",\n          "text": "I purchased the full length Halo Infinite edition with green switches for the tactile clickiness. Needed a second keyboard for work, thought why not try a smaller form factor from the same product line with the same green switches. I am guessing it is from the phantom keycaps, but the green switches are somewhat muffled and mushy in this form factor. I am 50/50 on the phantom edition keycaps for this form factor. I am new to it, so where my muscle memory puts the keys is incorrect. And without static backlighting set, I feel lost while trying to blaze through a long work email. I decided to use my full length version for work and this for my personal gaming desktop since I mainly use a controller or a Logitech G13 when controllers are not supported.",\n          "author": "Some Author"},\n        { "id": "dhg456wASF",\n          "title": "Some Title",\n          "text": "I was REALLY enjoying this keyboard (and my wife was enjoying hers too) - however, both keyboard developped an extra keystroke when typing. This lead to extra letters being inputted, which made the keyboard unuseable. Its a shame, because for the price it was a great keyboard. It also fit really well into our Razer ecosystem AND had amazing battery life with the RGB on. Alas, the keystroke issue is too big a hassle to try again, sadly.",\n          "author": "Some Author"},\n        { "id": "gfdh346Nr",\n          "title": "Some Title",\n          "text": "This keyboard is excellent, but only if you mod this keyboard, like add some foam, lube the switches, add some painters tape, bandaid mod the stabs and lube them, then switch for some Durocks (cus razer is trying to be cool again and make their own, which quite frankly it\'s the same as plate mount stabs unlike the huntsman mini) so for the price of this keyboard it is good when amazon discount it but in general for 200$ Nah pass (but I got a deal for only 126$). I kind of get where they use premium metal, good lithium battery, two signal receivers, three battery cutoff the PCB, the power monitor and distribute board with, and the battery integrated itself but still, only if people knew this. They might appreciate it a little more. Still, the transparent bottom plastic with the glowing razer logo scratches way too quickly; that is all I have to say about this keyboard.",\n          "author": "Some Author"}\n    ]\n}\n\npolarity_scores = []\n\n# extract reviews text and combine them\nfor review in json_response[\'reviews\']:\n    score = analyzer.polarity_scores(review[\'text\'])\n    polarity_scores.append(score)\n\n# print(polarity_scores)\n# [{\'neg\': 0.149, \'neu\': 0.823, \'pos\': 0.027, \'compound\': -0.953}, {\'neg\': 0.042, \'neu\': 0.91, \'pos\': 0.047, \'compound\': 0.1027}, {\'neg\': 0.042, \'neu\': 0.958, \'pos\': 0.0, \'compound\': -0.659}, {\'neg\': 0.085, \'neu\': 0.683, \'pos\': 0.231, \'compound\': 0.9397}, {\'neg\': 0.053, \'neu\': 0.822, \'pos\': 0.125, \'compound\': 0.9109}]\n\n# neg = negativity score\n# neu = neutrality score\n# pos = positivity score\n# compound = sentiment score can range from -1 to 1. closer to 1 = more positive\n\nsentiment_sum = 0\n\nfor compound_sentiment in polarity_scores:\n    # print(compound_sentiment[\'compound\'])\n    sentiment_sum = sentiment_sum + float(compound_sentiment[\'compound\'])\n\naverage_sentiment = sentiment_sum / len(polarity_scores)\n\n# print(average_sentiment)\n# # 0.06825999999999999\n\nif average_sentiment > 1.3:\n    print(\'INFO :: The average sentiment is POSITIVE\')\nelif average_sentiment < -0.3:\n    print(\'INFO :: The average sentiment is NEGATIVE\')\nelse:\n    print(\'INFO :: The average sentiment is NEUTRAL\')\n\n\n# INFO :: The average sentiment is NEUTRAL\n'})}),"\n",(0,o.jsx)(n.h3,{id:"online-search-wikipedia",children:"Online Search (Wikipedia)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"import nltk\nfrom sklearn.feature_extraction.text import TfidfVectorizer\nfrom sklearn.metrics.pairwise import cosine_similarity\n\nimport wikipedia\n\nlemmatizer = nltk.stem.WordNetLemmatizer()\n\n# only run once\n# nltk.download('wordnet')\n# nltk.download('omw-1.4')\n# nltk.download('punkt')\n# nltk.download('averaged_perceptron_tagger')\n\nwiki = wikipedia.page('List of Game of Thrones characters', auto_suggest=False).content\n\n# get list of single sentences out of combined text\nresponse = nltk.sent_tokenize(wiki)\n\n\ndef get_lemmas(text):\n    # break text up into single words toLowerCase\n    tokens = nltk.word_tokenize(text.lower())\n    tags = nltk.pos_tag(tokens)\n\n    text_lemmas = []\n\n    for token, tag in zip (tokens, tags):\n        # extract part-of-speech tag\n        tag_pos = tag[1][0].lower()\n        # exclude prepositions, articles, etc\n        if tag_pos in ['n', 'v', 'a', 'r']:\n            lemma = lemmatizer.lemmatize(token, tag_pos)\n            text_lemmas.append(lemma)\n\n    return text_lemmas\n\n\ndef find_similarity(response, query):\n    # get lemmas out of list of sentences\n    tv = TfidfVectorizer(tokenizer=get_lemmas)\n    # generate matrix with weights for each lemma in the given text (how often do they appear)\n    tf = tv.fit_transform(response)\n    # Now we can calculate the relative similarity\n    # of each sentence to the query string\n    coefficients = cosine_similarity(tf[-1], tf)\n    # so we need to extract the second to last\n    index = coefficients.argsort().flatten()[-2]\n    score = coefficients.flatten()[index]\n    if score > 0:\n        return ':: RESULT :: ' + response[index] + ' :: SCORE :: ' + str(score) + ' ::'\n    else:\n        return ':: INFO :: No Match Found'\n\n\nwhile True:\n    query = input(':: Query Input:: ')\n    if query == 'quit':\n        print(':: INFO :: Shutting down...')\n        quit()\n    else:\n        response.append(query)\n        output = find_similarity(response=response, query=query)\n        print(output)\n"})})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},88831:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var o=t(296540);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);