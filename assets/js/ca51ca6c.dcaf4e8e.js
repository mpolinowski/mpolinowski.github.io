"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[97819],{757514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(785893),s=n(603905);const i={sidebar_position:9030,slug:"2022-10-07",title:"Python - Build an Elasticsearch Index for your Docusaurus Blog",authors:"mpolinowski",tags:["Python"],description:"I was able to bring both together by pulling text from an URL, process the content and write it into an Elasticsearch JSON Document. Now I want to automate this process a little by using a pages sitemap."},r=void 0,o={id:"Development/Python/2022-10-07-python-docusaurus-elasticsearch/index",title:"Python - Build an Elasticsearch Index for your Docusaurus Blog",description:"I was able to bring both together by pulling text from an URL, process the content and write it into an Elasticsearch JSON Document. Now I want to automate this process a little by using a pages sitemap.",source:"@site/docs/Development/Python/2022-10-07-python-docusaurus-elasticsearch/index.md",sourceDirName:"Development/Python/2022-10-07-python-docusaurus-elasticsearch",slug:"/Development/Python/2022-10-07-python-docusaurus-elasticsearch/2022-10-07",permalink:"/docs/Development/Python/2022-10-07-python-docusaurus-elasticsearch/2022-10-07",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-07-python-docusaurus-elasticsearch/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9030,frontMatter:{sidebar_position:9030,slug:"2022-10-07",title:"Python - Build an Elasticsearch Index for your Docusaurus Blog",authors:"mpolinowski",tags:["Python"],description:"I was able to bring both together by pulling text from an URL, process the content and write it into an Elasticsearch JSON Document. Now I want to automate this process a little by using a pages sitemap."},sidebar:"tutorialSidebar",previous:{title:"Python - Deploying a Web App with Flask",permalink:"/docs/Development/Python/2022-10-08-python-flask-app/2022-10-08"},next:{title:"Python - Minify Text for Elasticsearch",permalink:"/docs/Development/Python/2022-10-06-python-minify-text/2022-10-06"}},l={},c=[{value:"Elasticsearch",id:"elasticsearch",level:2},{value:"Mapping",id:"mapping",level:3},{value:"Automate with Python",id:"automate-with-python",level:2},{value:"XML Sitemap Parsing",id:"xml-sitemap-parsing",level:3},{value:"Generate Elasticsearch Docs",id:"generate-elasticsearch-docs",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Sham Sui Po, Hong Kong",src:n(904633).Z+"",width:"1500",height:"548"})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#elasticsearch",children:"Elasticsearch"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#mapping",children:"Mapping"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"#automate-with-python",children:"Automate with Python"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#xml-sitemap-parsing",children:"XML Sitemap Parsing"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"#generate-elasticsearch-docs",children:"Generate Elasticsearch Docs"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["I looked into retrieving text from webpages ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-06-27-python-web-scraping/2022-06-27",children:"using Beautiful Soup"}),". And continued with looking into ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-10-05-python-text-processing/2022-10-05",children:"processing text"}),". I was able to bring both together by pulling text from an URL, process the content and write it into an ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-10-06-python-minify-text/2022-10-06",children:"Elasticsearch JSON Document"}),". Now I want to automate this process a little by using a pages sitemap."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/docusaurus_elasticsearch",children:"Gihub Repo"})}),"\n",(0,a.jsx)(t.h2,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,a.jsx)(t.p,{children:"There are many different ways to automatically generate Elasticsearch entries. But I always had the problem that the Elasticsearch entry should contain a few information that are not part of the page itself. Since I only rarely add new content I have been doing it by had so far."}),"\n",(0,a.jsx)(t.h3,{id:"mapping",children:"Mapping"}),"\n",(0,a.jsx)(t.p,{children:"First you create a mapping that suits your content. This is optional in NoSQL - but it allows you to define analyzer that Elasticsearch should use. Also, if you want to filter your Search results you have to set those fields to be treated as keywords and stored unprocessed. The example mapping for this blog is:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'PUT /dev_2022_10_09\n{\n  "settings": {\n    "analysis": {\n      "analyzer": {\n        "custom_analyzer": {\n          "type": "custom",\n          "char_filter": [\n            "symbol",\n            "html_strip"\n          ],\n          "tokenizer": "punctuation",\n          "filter": [\n            "lowercase",\n            "word_delimiter",\n            "english_stop",\n            "english_stemmer"\n          ]\n        }\n      },\n      "filter": {\n        "english_stop": {\n          "type": "stop",\n          "stopwords": "_english_ "\n        },\n        "english_stemmer": {\n          "type": "stemmer",\n          "language": "english"\n        }\n      },\n      "tokenizer": {\n        "punctuation": {\n          "type": "pattern",\n          "pattern": "[.,!?&=_:;\']"\n        }\n      },\n      "char_filter": {\n        "symbol": {\n          "type": "mapping",\n          "mappings": [\n              "& => and",\n              ":) => happy",\n              ":( => unhappy",\n              "+ => plus"\n            ]\n        }\n      }\n    }\n  },\n  "mappings": {\n    "properties": {\n      "title": {\n        "type": "text",\n        "analyzer": "custom_analyzer",\n        "index": "true"\n      },\n      "type": {\n        "type": "text",\n        "index": "true",\n        "fields": {\n          "raw": {\n            "type": "keyword"\n          }\n        }\n      },\n      "date": {\n        "type": "text",\n        "index": "true",\n        "fields": {\n          "raw": {\n            "type": "keyword"\n          }\n        }\n      },\n      "description": {\n        "type": "text",\n        "analyzer": "custom_analyzer",\n        "index": "true"\n      },\n      "link": {\n        "type": "text",\n        "index": "false"\n      },\n      "chapter": {\n        "type": "text",\n        "index": "true",\n        "fields": {\n          "raw": {\n            "type": "keyword"\n          }\n        }\n      },\n      "tags": {\n        "type": "text",\n        "index": "true",\n        "fields": {\n          "raw": {\n            "type": "keyword"\n          }\n        }\n      },\n      "imagesquare": {\n        "type": "text",\n        "index": "false"\n      },\n      "abstract": {\n        "type": "text",\n        "analyzer": "custom_analyzer",\n        "index": "true"\n      },\n      "short": {\n        "type": "text",\n        "analyzer": "custom_analyzer",\n        "index": "true"\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Just modify it to your needs and feed it into ",(0,a.jsx)(t.strong,{children:"Kibana"})," to set up your Elasticsearch index:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Python - Build an Elasticsearch Index for your Docusaurus Blog",src:n(880052).Z+"",width:"1201",height:"427"})}),"\n",(0,a.jsxs)(t.p,{children:["Every article now needs to be added following the structure defined in your mapping. For example the JSON doc for the ",(0,a.jsx)(t.a,{href:"/docs/Development/Go/2022-10-05-go-reducing-binary-size/2022-10-05",children:"Go build!"})," looks like this:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'PUT /dev_2022_10_09/_doc/go-reducing-binary-size\n{\n    "title": "Go Build!",\n    "type": "Note",\n    "descripton": "Go Build! Go Build! Cross-compiling with Go Golang on a Diet UPX In the previous post I build an NTS Client from source. I now need to compile it for an ARM system and reduce the file size of the generated binary.Cross-compiling with GoThe original binary was compiled on a x86-64 Linux system and with default settings resulted in the following file:file ntsclientntsclient: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, Go BuildID=jk1ySsUE9xCbQQElzPBj/mKJ-lNqe4rCLOALwJ0Uh/lg1ziBDAYw1FdjS_SnD_/6JHvJ15niw3mnL010nFR, with debug_info, not strippedTo use the binary on an ARM system we need to use the amazing cross-compiling capabilities of Go. E.g. to create the arm64 version of the file I can run:env GOOS=linux GOARCH=arm64 go build -o ntsclient_arm64The resulting binary can be used on an 64bit ARM system:file ntsclient_arm64ntsclient_arm64: ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked, Go BuildID=MR5GvnV5S4XWxDENNLTE/ZZ2k_Dx5K6CdKRTzWlK5/Zbl1ahI9CUA-f28opmhH/0Zh0CFmxrhuWRZ-kOiMt, with debug_info, not strippedYou can check the supported combinations of GOOS and GOARCH with:go tool dist listaix/ppc64 | android/386 | android/amd64 | android/arm | android/arm64 | darwin/amd64 | darwin/arm64 | dragonfly/amd64 | freebsd/386 | freebsd/amd64 | freebsd/arm | freebsd/arm64 | illumos/amd64 | ios/amd64 | ios/arm64 | js/wasm | linux/386 | linux/amd64 | linux/arm | linux/arm64 | linux/loong64 | linux/mips | linux/mips64 | linux/mips64le | linux/mipsle | linux/ppc64 | linux/ppc64le | linux/riscv64 | linux/s390x | netbsd/386 | netbsd/amd64 | netbsd/arm | netbsd/arm64 | openbsd/386 | openbsd/amd64 | openbsd/arm | openbsd/arm64 | openbsd/mips64 | plan9/386 | plan9/amd64 | plan9/arm | solaris/amd64 | windows/386 | windows/amd64 | windows/arm | windows/arm64We can automate a multi-architecture build with a script build.sh: usr/bin/basharchs=(amd64 arm arm64)for arch in ${archs[@]}do env GOOS=linux GOARCH=${arch} go build -o prepnode_${arch}doneGolang on a DietThe resulting files - compared to a similar C program - are generally huge. In the NTS client example I end up with 7.4 - 7.7 MB files:7965759 Oct 5 15:37 ntsclient_amd647665133 Oct 5 15:37 ntsclient_arm7635040 Oct 5 15:24 ntsclient_arm64The following build flags can help us reducing the binary size:ldflags-s omits the symbol table and debug information-w omits DWARF debugging information.So lets update the build script accordingly: usr/bin/basharchs=(amd64 arm arm64)for arch in ${archs[@]}do env GOOS=linux GOARCH=${arch} go build -ldflags -s -w -o prepnode_${arch}doneNow we are down to 5.0 - 5.2 MB:5459968 Oct 5 16:55 ntsclient_amd645242880 Oct 5 16:55 ntsclient_arm5242880 Oct 5 16:55 ntsclient_arm64UPXUPX is a free, secure, portable, extendable, high-performance executable packer for several executable formats. You can install the latest version from Github or use your package manager:sudo pacman -S utxupx --help Ultimate Packer for eXecutables Copyright (C) 1996 - 2020UPX git-d7ba31+ Markus Oberhumer, Laszlo Molnar & John Reiser Jan 23rd 2020Usage: upx [-123456789dlthVL] [-qvfk] [-o file] file..Commands: -1 compress faster -9 compress better --best compress best (can be slow for big files) -d decompress -l list compressed file -t test compressed file -V display version number -h give this help -L display software licenseOptions: -q be quiet -v be verbose -oFILE write output to FILE -f force compression of suspicious files --no-color, --mono, --color, --no-progress change lookCompression tuning options: --brute try all available compression methods & filters [slow] --ultra-brute try even more compression variants [very slow]So to get the maximum amount of compress let s try Ultra Brute:upx --ultra-brute -ontsclient_upx_arm ntsclient_arm File size Ratio Format Name-------------------- ------ ----------- -----------5242880 -> 1421184 27.11% linux/arm ntsclient_upx_arm So we went from around 7 MB down to 1.4 MB. Tags: Go",\n    "link": "/docs/Development/Go/2022-10-05-go-reducing-binary-size/2022-10-05",\n    "chapter": "Dev Notes",\n    "date": "2022-10-05",\n    "tags": [\n        "Go",\n        "LINUX"\n    ],\n    "imagesquare": "/img/search/go.png",\n    "abstract": "Cross-compile in Go and reduce the binary size of your Go program."\n}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["And can be added to your index using Kibana and the be searched in your ",(0,a.jsx)(t.a,{href:"/Search",children:"React Frontend"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Python - Build an Elasticsearch Index for your Docusaurus Blog",src:n(169445).Z+"",width:"1202",height:"450"})}),"\n",(0,a.jsx)(t.h2,{id:"automate-with-python",children:"Automate with Python"}),"\n",(0,a.jsxs)(t.p,{children:["In the previous step I used ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-10-06-python-minify-text/2022-10-06",children:"Python to create the Elasticsearch Document for a single page"})," - ",(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/python-text-processing/blob/main/jsonfyOnlineText.py",children:"Github"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Now I want to use this approach to pull the Blog's ",(0,a.jsx)(t.strong,{children:"XML Sitemap"}),", loop over all URLs and create a mostly filled template for each page. There are still a few fields that I cannot fill based on the pages content. But I will just add some placeholder text and copy&paste the rest in by hand (In the future I will see to it that all of those information will be embedded in all articles ~ but this is already a big improvement over doing all of it by hand)."]}),"\n",(0,a.jsx)(t.p,{children:"Ok, I will break this project up into 2 steps. First, I will pull the sitemap and write those URLs into a text file. The second part will then be to loop over this file and generate the JSON objects. The advantage of breaking this up into two scripts is that I will be able to feed manually created text files to the second script and append new articles later on."}),"\n",(0,a.jsx)(t.h3,{id:"xml-sitemap-parsing",children:"XML Sitemap Parsing"}),"\n",(0,a.jsxs)(t.p,{children:["I can use ",(0,a.jsx)(t.code,{children:"lxml"})," to parse the XML Sitemap in ",(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/docusaurus_elasticsearch/blob/master/parse_sitemap.py",children:"parse_sitemap.py"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:"from lxml import etree\nimport requests\n\nsideLinks = {}\n\nr = requests.get(\"https://mpolinowski.github.io/sitemap.xml\")\nroot = etree.fromstring(r.content)\n\nprint(\"INFO :: {0} pages imported from sitemap.\".format(len(root)))\n\nfor sitemap in root:\n    children = sitemap.getchildren()\n    sideLinks[children[0].text] = children[1].text\n\n# write to file\n\nwith open('pages/sideLinks.txt', 'w') as file:\n    file.writelines('\\n'.join(sideLinks))\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This will generate a file ",(0,a.jsx)(t.code,{children:"sideLinks.txt"})," with the extracted URLs. ",(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/docusaurus_elasticsearch/blob/master/pages/sideLinks.txt",children:"One URL per line"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"generate-elasticsearch-docs",children:"Generate Elasticsearch Docs"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/docusaurus_elasticsearch/blob/master/write_object.py",children:"write_object.py"})," now loops over every line of the generated text file and runs ",(0,a.jsx)(t.a,{href:"/docs/Development/Python/2022-10-06-python-minify-text/2022-10-06",children:"the code to generate the JSON object"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-py",children:'import requests\nimport re\nfrom bs4 import BeautifulSoup\n\n# add some infos that are not on the page\n\ncamera_series = \'["PLACEHOLDER"]\'\narticle_type = \'PLACEHOLDER\'\nchapter = \'PLACEHOLDER\'\ntags = \'["PLACEHOLDER"]\'\nimage = \'PLACEHOLDER\'\nimagesquare = \'PLACEHOLDER\'\n\n\n# read in list of page urls\n\npages = open(\'pages/sideLinkscopy.txt\', \'r\')\n\n# loop over urls and request content\n\nfor line in pages:\n    page = line.split()[0]\n    # print(page[0])\n    # exit()\n    # use page url to fetch/parse content\n    response = requests.get(page)\n    html = response.text\n    soup = BeautifulSoup(html, \'html.parser\')\n\n    # find in content\n\n    ## get article title from meta tag\n    article_title = (soup.find("meta", property="og:title"))["content"]\n    ## get article description from meta tag\n    article_description = (soup.find("meta", property="og:description"))["content"]\n    ## get article description from meta tag\n    article_content = soup.find(\'main\', attrs={\'class\': \'docMainContainer_gTbr\'}).text\n    ## replace quotation marks\n    jsonfied_content = article_content.replace(\'"\', \' \')\n    ## strip multiple-space character\n    single_space = re.sub(\'\\s+\',\' \',jsonfied_content)\n\n    # create json object from results\n\n    json_template = """{\n        "title": "ARTICLE_TITLE",\n        "series": ARTICLE_SERIES,\n        "type": "ARTICLE_TYPE",\n        "description": "ARTICLE_BODY",\n        "sublink1": "ARTICLE_URL",\n        "chapter": "ARTICLE_CHAPTER",\n        "tags": ARTICLE_TAGS,\n        "image": "ARTICLE_THUMB",\n        "imagesquare": "ARTICLE_SQUAREIMAGE",\n        "short": "ARTICLE_SHORT",\n        "abstract": "ARTICLE_ABSTRACT"\n    }"""\n\n\n    add_body = json_template.replace(\'ARTICLE_BODY\', single_space)\n    add_title = add_body.replace(\'ARTICLE_TITLE\', article_title)\n    add_series = add_title.replace(\'ARTICLE_SERIES\', camera_series)\n    add_type = add_series.replace(\'ARTICLE_TYPE\', article_type)\n    add_url = add_type.replace(\'ARTICLE_URL\', page[29:])\n    add_chapter = add_url.replace(\'ARTICLE_CHAPTER\', chapter)\n    add_tags = add_chapter.replace(\'ARTICLE_TAGS\', tags)\n    add_image = add_tags.replace(\'ARTICLE_THUMB\', image)\n    add_imagesquare = add_image.replace(\'ARTICLE_SQUAREIMAGE\', imagesquare)\n    add_short = add_imagesquare.replace(\'ARTICLE_SHORT\', article_description)\n    add_abstract = add_short.replace(\'ARTICLE_ABSTRACT\', article_description)\n\n    with open(\'pages/articles.json\', \'a\') as file:\n        file.write(add_abstract)\n\npages.close()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This now generates the entries I need to feed into Kibana - with a few ",(0,a.jsx)(t.code,{children:"PLACEHOLDER"}),"'s added where I still need to add informations by hand - ",(0,a.jsx)(t.a,{href:"https://github.com/mpolinowski/docusaurus_elasticsearch/blob/master/pages/articles.json",children:"articles.json"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Good enough for now ~ to be improved later :)"})]})}function p(e={}){const{wrapper:t}={...(0,s.ah)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},603905:(e,t,n)=>{n.d(t,{ah:()=>c});var a=n(667294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(n),u=s,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));p.displayName="MDXCreateElement"},880052:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Python-Docusaurus-Elasticsearch_01-46fe29ad6b62694d2f18798005fb9108.png"},169445:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Python-Docusaurus-Elasticsearch_02-23965a3a7ad24b5b721ca2bcfa3b7a93.png"},904633:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);