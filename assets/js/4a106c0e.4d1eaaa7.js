"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[22657],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5553:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_position:4760,slug:"2023-01-28",title:"OpenCV Count My Money",authors:"mpolinowski",tags:["Python","Machine Learning","OpenCV"],description:"Differentiate Objects based on their Contour and Colour with cvZone."},i=void 0,l={unversionedId:"IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/index",id:"IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/index",title:"OpenCV Count My Money",description:"Differentiate Objects based on their Contour and Colour with cvZone.",source:"@site/docs/IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter",slug:"/IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/2023-01-28",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/2023-01-28",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2023-01-28-opencv-coin-counter/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:4760,frontMatter:{sidebar_position:4760,slug:"2023-01-28",title:"OpenCV Count My Money",authors:"mpolinowski",tags:["Python","Machine Learning","OpenCV"],description:"Differentiate Objects based on their Contour and Colour with cvZone."},sidebar:"tutorialSidebar",previous:{title:"SciKit Wine Quality",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-30-predicting-wine-quality/2023-01-30"},next:{title:"YOLOv7 to Tensorflow",permalink:"/docs/IoT-and-Machine-Learning/ML/2023-01-14-yolov7_to_tensorflow/2023-01-14"}},s={},c=[{value:"RTSP Videostream",id:"rtsp-videostream",level:2},{value:"Detecting Contours",id:"detecting-contours",level:2},{value:"Processing",id:"processing",level:3},{value:"Detecting Colours",id:"detecting-colours",level:2},{value:"Processing",id:"processing-1",level:3}],p={toc:c};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Guangzhou, China",src:t(34913).Z,width:"1500",height:"647"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rtsp-videostream"},"RTSP Videostream")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#detecting-contours"},"Detecting Contours"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#processing"},"Processing")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#detecting-colours"},"Detecting Colours"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#processing-1"},"Processing"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"based on Murtaza's Workshop - Robotics and AI")),(0,a.kt)("p",null,'The border to Hongkong just "kinda" opened after three years of pandemic. I am planing to go and visit as soon as the situation normalizes. All this time I had a pile of change coins from HK lying around on my fridge. Let\'s learn how to use OpenCV to count them. Maybe it is enough for a breakfast at the border 7/11 :)'),(0,a.kt)("p",null,"Let's first check if OpenCV is up-to-date:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pip install --upgrade opencv-python\nSuccessfully installed opencv-python-4.7.0.68\n")),(0,a.kt)("h2",{id:"rtsp-videostream"},"RTSP Videostream"),(0,a.kt)("p",null,"I will use an ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/opencv-rtsp"},"INSTAR IP camera's RTSP Stream to feed OpenCV the information"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import cv2\nimport os\n\nRTSP_URL = 'rtsp://admin:instar@192.168.2.120/livestream/11'\n\nos.environ['OPENCV_FFMPEG_CAPTURE_OPTIONS'] = 'rtsp_transport;udp'\n\ncap = cv2.VideoCapture(RTSP_URL, cv2.CAP_FFMPEG)\n\nif not cap.isOpened():\n    print('ERROR :: Cannot open RTSP stream')\n    exit(-1)\n\nwhile True:\n    success, img = cap.read()\n    cv2.imshow(RTSP_URL, img)\n\n    if cv2.waitKey(1) & 0xFF == ord('q'):  # Keep running until you press `q`\n        break\n")),(0,a.kt)("h2",{id:"detecting-contours"},"Detecting Contours"),(0,a.kt)("p",null,"I am going to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cvzone/cvzone"},"CVZone")," a Computer vision package that makes its easy to run Image processing and AI functions. At the core it uses OpenCV and Mediapipe libraries. We use it to find the object contours for us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"pip install cvzone\nSuccessfully installed cvzone-1.5.6\n")),(0,a.kt)("p",null,"To allow us to detect shapes we first need to simplify the image first. So instead of using the raw image we will call a function that returns a modified version of it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# while the stream runs do detection\nwhile True:\n    success, img = cap.read()\n    # pre-process each image\n    img_prep = preProcessing(img)\n")),(0,a.kt)("p",null,"And the pre-processing function should emphasize the contours of object within the image helping us to detect them. We can also add some sliders allowing us to find the optimal thresholds for the Canny function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'def empty(a):\n    pass \n\n# create two sliders to adjust canny filter\n# thresholds on the fly\ncv2.namedWindow("Settings")\ncv2.resizeWindow("Settings", 640, 240)\ncv2.createTrackbar("Threshold1", "Settings", 65, 255, empty)\ncv2.createTrackbar("Threshold2", "Settings", 150, 255, empty)\n\n# prepare the image for detection\ndef preProcessing(img):\n\n    # add some blur to reduce noise\n    img_prep = cv2.GaussianBlur(img, (5, 5), 3)\n    # use canny filter to enhance contours\n    # make thresholds changeable by sliders\n    threshold1 = cv2.getTrackbarPos("Threshold1", "Settings")\n    threshold2 = cv2.getTrackbarPos("Threshold2", "Settings")\n    img_prep = cv2.Canny(img_prep, threshold1, threshold2)\n    # make features more prominent by dilations\n    kernel = np.ones((2, 2), np.uint8)\n    img_prep = cv2.dilate(img_prep, kernel, iterations=1)\n    # morph detected features to close gaps in geometries\n    img_prep = cv2.morphologyEx(img_prep, cv2.MORPH_CLOSE, kernel)\n\n    return img_prep\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenCV Count My Money",src:t(12108).Z,width:"1915",height:"627"})),(0,a.kt)("h3",{id:"processing"},"Processing"),(0,a.kt)("p",null,"We can now use cvZone to detect the contours of every object in our live video and display them for us:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'# min area slider to filter noise\ncvMinArea = cv2.getTrackbarPos("CV Min Area", "Settings")\n# findContours returns the processed image and found contours\nimgContours, conFound = cvzone.findContours(img, img_prep, cvMinArea)\n# show original vs pre-processed image\n# show all streams in 2 columns at half size\noutput = cvzone.stackImages([img, img_prep, imgContours], 2, 0.3)\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenCV Count My Money",src:t(29318).Z,width:"1151",height:"705"})),(0,a.kt)("p",null,"Since the environment I am testing in has some clutter and sub-ideal lighting I am getting a lot of contours I am not interested in. cvZone allows us to filter the results by counting the corners of the object contour. We can access those information with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'contour["cnt"]'),": Contour"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'contour["bbox"]'),": Bounding box of contour"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'contour["area"]'),": Area of contour encircled by contour"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'contour["center"]'),": Center point of contour")),(0,a.kt)("p",null,"We can loop over the results and only take contours that have a high enough number of corner points to most likely be a circle:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'# conFound will contain all contours found\n    # we can limit it to circles for our coins\n    if conFound:\n        for contour in conFound:\n            # get the arc length of the contour\n            perimeter = cv2.arcLength(contour["cnt"], True)\n            # calculate approx polygon count / corner points\n            polycount = cv2.approxPolyDP(contour["cnt"], 0.02 * perimeter, True)\n            # print no of corner points in contour\n            print(len(polycount))\n')),(0,a.kt)("p",null,"The printout I am getting here shows me that I have a fe objects that have a small amount of corners that I can filter - 8 corners might be a good cut-off:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"8, 8, 8, 9, 13, 8, 10, 6, 8, 6, 10, 3, 8, 10, 9, 2, 8, 6, 11, 2, 2, 8, 6, 10, 7, 2, 11, 7, 2, 8, 7, 8, 7, 4, 6, 11, 9, 13, 10, 6, 6, 3, 8, 10, 9, 2, 6, 12, 2, 8, 2, 6, 6, 10, 2, 11, 2, 7, 8, 7, 8, 7, 6, 11, 8, 8, 8, 8, 8, 9, 13, 8, 10, 6, 6, 3, 8, 10, 9, 2, 6, 12, 2, 8, 2, 6, 2, 7, 10, 2, 7, 10, 8, 7, 8, 7, 6, 11, 8, 8, 8, 8, 9, 13, 8, 8, 8, 6, 6, 3, 8, 10, 9, 2, 2, 6, 11, 8, 2, 6, 2, 7, 2, 7, 10, 8, 5, 7, 8, 7, 6, 11, 8, 8, 8, 8, 9, 13, 8, 8, 8, 6, 6, 3, 8, 10, 9, 2, 2\n")),(0,a.kt)("p",null,"So let's remove everything with less than 8 corners and take a look at the area of each unique coin:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"if len(polycount) >= 8:\n    print(contour['area'])\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Issues"),": I noticed that a black background gives a lot better results than a white piece of paper. But the contours are far from stable. The main issue will be that I am using my monitor as a light source. I will retry this in sunlight later and see if this will yield more stable results.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenCV Count My Money",src:t(27453).Z,width:"1146",height:"715"})),(0,a.kt)("p",null,"Every time the displayed contour closed around the coin I start to get stable readings for the surface area:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"10 Cents"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"47343.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"47340.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"47338.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"47331.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"47335.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"47333.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"47349.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"20 Cents"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"49283.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"49272.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"49272.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"49272.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"49271.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"49268.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"49263.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"50 Cents"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"71451.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"71454.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"71410.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"71413.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"71429.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"71425.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"71428.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 Dollar"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"97560.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"97555.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"97546.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"97541.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"97537.5"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"97565.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"97563.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"2 Dollar"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"104829.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"104825.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"104818.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"104813.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"104810.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"104808.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"104812.0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"5 Dollar"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"113931.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"113936.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"113934.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"113934.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"113937.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"113933.0"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"113928.5"))),(0,a.kt)("p",null,"So we can now differentiate between those coins just by their surface area:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Area"),(0,a.kt)("th",{parentName:"tr",align:null},"Coin"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\\< 48000"),(0,a.kt)("td",{parentName:"tr",align:null},"10 Cents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">"," 48000 \\< 50000"),(0,a.kt)("td",{parentName:"tr",align:null},"20 Cents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">"," 50000 \\< 72000"),(0,a.kt)("td",{parentName:"tr",align:null},"50 Cents")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">"," 72000 \\< 98000"),(0,a.kt)("td",{parentName:"tr",align:null},"1 Dollar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">"," 98000 \\< 105000"),(0,a.kt)("td",{parentName:"tr",align:null},"2 Dollar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},">"," 105000 \\< 114000"),(0,a.kt)("td",{parentName:"tr",align:null},"5 Dollar")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Issue"),": I noticed that since my camera was not mounted perfectly parallel to the tabletop I am seeing some deviation from those measurements above when I am moving the coin around. Below I added some additional padding - but I am still seeing some overlap between the 2 and 5 Dollar coins and the 10 and 20 Cents coins. It is Ok if I position them perfectly in the middle of my camera image. It certainly would make sense to move away from a wideangle lense - the image distortion just makes it worse.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"if len(polycount) >= 8:\n    area = contour['area']\n    # print(area)\n\n    if 43000 < area < 49000:\n        moneyCount += .1\n\n    elif 49000 < area < 55000:\n        moneyCount += .2\n\n    elif 55000 < area < 72000:\n        moneyCount += .5\n\n    elif 72000 < area < 104000:\n        moneyCount += 1\n\n    elif 104000 < area < 116000:\n        moneyCount += 2\n\n    elif 116000 < area < 120000:\n        moneyCount += 5\n\n    else:\n        moneyCount += 0\n")),(0,a.kt)("p",null,"Now when we reset the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"moneyCount")," every time the loop starts we can print the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"moneyCount")," to see the value of those coins. In the following example we have a 2 Dollar and a 50 Cent coin - which is summed up to a total of 2,5 Dollar. I am using cvZone to print the value on top of the stacked output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# add money counter\ncvzone.putTextRect(img=imageStack, text=f'{moneyCount} HK$', pos=(20, 50), thickness=2, colorR=(204,119,0))\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenCV Count My Money",src:t(43440).Z,width:"1145",height:"715"})),(0,a.kt)("h2",{id:"detecting-colours"},"Detecting Colours"),(0,a.kt)("p",null,"Since I was having some difficulties differentiating some of those coins I can add another factor. Right now it will not be very effective due to the bad lighting here - also some of those coins are in dire need of a shine... but let's see."),(0,a.kt)("p",null,"cvZone comes with a Module called ",(0,a.kt)("strong",{parentName:"p"},"ColorFinder"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from cvzone.ColorModule import ColorFinder\n")),(0,a.kt)("p",null,"Now we need to configure an instance of the colour finder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# create instance of colorfinder\n# set True to display sliders to adjust search colour\ncvColorFinder = ColorFinder(True)\n# colour to search for\nhsvVals = {'hmin': 0, 'smin': 0, 'vmin': 0, 'hmax': 179, 'smax': 142, 'vmax': 176}\n")),(0,a.kt)("p",null,"The boolean value ",(0,a.kt)("inlineCode",{parentName:"p"},"True")," means that cvZone will start the finder in debug mode where we will have sliders to adjust the value for the target colour:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenCV Count My Money",src:t(44355).Z,width:"1147",height:"713"})),(0,a.kt)("p",null,"Given the light I am working with I am able to remove the background (image on the lower right). But I cannot differentiate between this golden and silvery coin. This will change once repeated in sun light."),(0,a.kt)("h3",{id:"processing-1"},"Processing"),(0,a.kt)("p",null,"But we can now take the bounding box provided by our contour, create a cutout and count all pixel that aren't black to get our coins surface area:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# GET AREA BY OBJECT COLOUR\n## get location of bounding box\nx, y, w, h = contour['bbox']\n## crop to bounding box\nimgCrop = img[y:y+h, x:x+w]\n## show cropped image\n## cv2.imshow('Cropped Contour', imgCrop)\n\n## find colour based on hsvVals in imgCrop\nimgColour, mask = cvColorFinder.update(imgCrop, hsvVals)\n## we adjusted the hsvVals that everything but the coins\n## are black. Now we can exclude everything that is black\n## and count the pixels that match our coin colour to\n## get it's surface area.\ncolouredArea = cv2.countNonZero(mask)\nprint(colouredArea)\n\n\nif 39000 < colouredArea < 51000:\n    moneyCountByColour += .1\n\nelif 51000 < colouredArea < 55000:\n    moneyCountByColour += .2\n\nelif 59000 < colouredArea < 72000:\n    moneyCountByColour += .5\n\nelif 72000 < colouredArea < 98000:\n    moneyCountByColour += 1\n\nelif 100000 < colouredArea < 110000:\n    moneyCountByColour += 2\n\nelif 110000 < colouredArea < 112000:\n    moneyCountByColour += 5\n\nelse:\n    moneyCountByColour += 0\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"OpenCV Count My Money",src:t(2589).Z,width:"1142",height:"715"})))}u.isMDXComponent=!0},12108:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/OpenCV_Coin_counter_01-9dc964cc614ea98da471b1f4f2d577f7.png"},29318:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/OpenCV_Coin_counter_02-5a429817307287211c228f06723d9798.png"},27453:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/OpenCV_Coin_counter_03-d6e8ba01639b02581faf6b4d100940bb.png"},43440:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/OpenCV_Coin_counter_04-9cb9ab594a0afb219376b1d9d05dedad.png"},44355:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/OpenCV_Coin_counter_05-8a3d01165183d5d7347917d972ccf2b6.png"},2589:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/OpenCV_Coin_counter_06-8c2361a81019e5bff5bfb3af617ced71.png"},34913:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c0f91ee25552813b6bd5cf30c355f362.jpg"}}]);