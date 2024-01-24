"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[7377],{797878:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var i=t(785893),r=t(603905);const a={sidebar_position:6050,slug:"2021-12-08",title:"OpenCV Meanshift Algorithm for Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},o=void 0,s={id:"IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/index",title:"OpenCV Meanshift Algorithm for Object Tracking",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking",slug:"/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:6050,frontMatter:{sidebar_position:6050,slug:"2021-12-08",title:"OpenCV Meanshift Algorithm for Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV CAMshift Algorithm for Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/2021-12-09"},next:{title:"OpenCV Object Detection and Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/2021-12-07"}},c={},h=[{value:"Meanshift",id:"meanshift",level:2},{value:"Get your Videostream",id:"get-your-videostream",level:2},{value:"Histogram Calculation in OpenCV",id:"histogram-calculation-in-opencv",level:2},{value:"Histogram Plot",id:"histogram-plot",level:4},{value:"Apply the Meanshift Algorithm",id:"apply-the-meanshift-algorithm",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Shenzhen, China",src:t(179456).Z+"",width:"2385",height:"919"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#meanshift",children:"Meanshift"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#get-your-videostream",children:"Get your Videostream"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#histogram-calculation-in-opencv",children:"Histogram Calculation in OpenCV"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#histogram-plot",children:"Histogram Plot"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#apply-the-meanshift-algorithm",children:"Apply the Meanshift Algorithm"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv2-tracking-algorithm",children:"Github Repo"})}),"\n",(0,i.jsx)(n.h2,{id:"meanshift",children:"Meanshift"}),"\n",(0,i.jsxs)(n.p,{children:["The idea behind the ",(0,i.jsx)(n.a,{href:"https://opencv24-python-tutorials.readthedocs.io/en/latest/py_tutorials/py_video/py_meanshift/py_meanshift.html",children:"Meanshift Algorithm"})," is that every instance of the video is checked for the pixel distribution in that frame. We define an initial window, a region of interest (",(0,i.jsx)(n.strong,{children:"ROI"}),") which identifies the area of maximum pixel distribution. By doing so we are defining a colour histogram. The algorithm tries to keep track of that area in the video so that the ROI moves towards the region of maximum pixel distribution - it tries to maximize the overlap of the resulting histogram with the original histogram of the area we selected. The direction of movement depends upon the difference between the center of our tracking window and the centroid of all the k-pixels inside that window."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Disadvantages of using the Meanshift Algorithm"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The size of the ROI remains the same irrespective of the distance of the object from the camera."}),"\n",(0,i.jsx)(n.li,{children:"The ROI will track the object only when it is inside the initial bounding box we define."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"get-your-videostream",children:"Get your Videostream"}),"\n",(0,i.jsx)(n.p,{children:"Get your RTSP video stream input and define a region of interest for the Meanshift algorithm:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# get video stream from IP camera\r\nprint("[INFO] starting video stream")\r\nvs = VideoStream(args["url"]).start()\r\n\r\n# first frame from stream\r\nframe = vs.read()\r\n# select region of interest\r\nbbox = cv2.selectROI(frame)\r\nx, y, w, h = bbox\r\ntrack_window = (x, y, w, h)\r\n# define area of bounding box as area of interest\r\nroi = frame[y:y+h, x:x+w]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"histogram-calculation-in-opencv",children:"Histogram Calculation in OpenCV"}),"\n",(0,i.jsx)(n.p,{children:"The Meanshift algorithm is going to use the histogram of your region of interest to track the object you selected above. But we have to convert the frame to to the HSV colour space and normalize it first:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"hsv_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)\r\n# get histogram for [0] blue, [1] green, [2] red channel\r\nroi_hist = cv2.calcHist([hsv_roi], [0], None, [180], [0, 180])\r\n# convert hist values 0-180 to a range between 0-1\r\nroi_hist = cv2.normalize(roi_hist, roi_hist, 0, 255, cv2.NORM_MINMAX)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["So now we use ",(0,i.jsx)(n.a,{href:"https://docs.opencv.org/4.x/d1/db7/tutorial_py_histogram_begins.html",children:"cv.calcHist()"})," function to find the histogram. Let's familiarize with the function and its parameters :"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"cv.calcHist(images, channels, mask, histSize, ranges[, hist[, accumulate]])"}),"\n"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"images"})," : it is the source image of type uint8 or float32. it should be given in square brackets, ie, ",(0,i.jsx)(n.code,{children:"[img]"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"channels"})," : it is also given in square brackets. It is the index of channel for which we calculate histogram. For example, if input is grayscale image, its value is ",(0,i.jsx)(n.code,{children:"[0]"}),". For color image, you can pass ",(0,i.jsx)(n.code,{children:"[0]"}),", ",(0,i.jsx)(n.code,{children:"[1]"})," or ",(0,i.jsx)(n.code,{children:"[2]"})," to calculate"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"histogram"})," of blue, green or red channel respectively."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"mask"}),' : mask image. To find histogram of full image, it is given as "None". But if you want to find histogram of particular region of image, you have to create a mask image for that and give it as mask. (I will show an example later.)']}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"histSize"})," : this represents our BIN count. Need to be given in square brackets. For full scale, we pass ",(0,i.jsx)(n.code,{children:"[256]"})," for ",(0,i.jsx)(n.strong,{children:"RGB"})," and ",(0,i.jsx)(n.code,{children:"[180]"})," for ",(0,i.jsx)(n.strong,{children:"HSV"}),".\r\nranges : this is our RANGE. Normally, it is ",(0,i.jsx)(n.code,{children:"[0,256]"})," for ",(0,i.jsx)(n.strong,{children:"RGB"})," and ",(0,i.jsx)(n.code,{children:"[0, 180]"})," for ",(0,i.jsx)(n.strong,{children:"HSV"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img = cv.imread('image_hsv.jpg',0)\r\nhist = cv.calcHist([img],[0],None,[180],[0, 180])\n"})}),"\n",(0,i.jsx)(n.h4,{id:"histogram-plot",children:"Histogram Plot"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"with OpenCV"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"img = cv.imread('image_rgb.jpg',0)\r\n# create a mask\r\nmask = np.zeros(img.shape[:2], np.uint8)\r\nmask[100:300, 100:400] = 255\r\nmasked_img = cv.bitwise_and(img,img,mask = mask)\r\n# Calculate histogram with mask and without mask\r\n# Check third argument for mask\r\nhist_full = cv.calcHist([img],[0],None,[256],[0,256])\r\nhist_mask = cv.calcHist([img],[0],mask,[256],[0,256])\r\nplt.subplot(221), plt.imshow(img, 'gray')\r\nplt.subplot(222), plt.imshow(mask,'gray')\r\nplt.subplot(223), plt.imshow(masked_img, 'gray')\r\nplt.subplot(224), plt.plot(hist_full), plt.plot(hist_mask)\r\nplt.xlim([0,256])\r\nplt.show()\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"with Matplotlib"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\r\nimport cv2 as cv\r\nfrom matplotlib import pyplot as plt\r\n\r\nimg = cv.imread('home.jpg')\r\ncolor = ('b','g','r')\r\nfor i,col in enumerate(color):\r\n    histr = cv.calcHist([img],[i],None,[255],[0,255])\r\n    plt.plot(histr,color = col)\r\n    plt.xlim([0,255])\r\nplt.show()\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:t(591072).Z+"",width:"1247",height:"513"})}),"\n",(0,i.jsx)(n.h2,{id:"apply-the-meanshift-algorithm",children:"Apply the Meanshift Algorithm"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we have the ROI coordinates and the corresponding histogram we can add a while loop that keeps fetching new frames from the video stream. We are using the ",(0,i.jsx)(n.a,{href:"https://docs.opencv.org/3.4.15/da/d7f/tutorial_back_projection.html",children:"OpenCV Back Projection"})," to compare each incoming new frame with the histogram of our ROI. The Meanshift tracking algorithm is then using the generated density function to find a best match for the new coordinates of our region of interest:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"# set up the termination criteria, either 10 iteration or move by at least 1 pt\r\nparameter = (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 10, 1)\r\n\r\n# now loop through the rest of avail frames\r\n# and use meanshift to track defined roi\r\nwhile True:\r\n    # get next frame\r\n    frame = vs.read()\r\n    if True:\r\n        # convert to hsv\r\n        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\r\n        # compare blue channel of current with roi histogram\r\n        dst = cv2.calcBackProject([hsv], [0], roi_hist, [0, 180], 1)\r\n        # call meanshift() to find match of histogram in current frame\r\n        # and get the new coordinates\r\n        ok, track_window = cv2.meanShift(dst, (x, y, w, h), parameter)\r\n        if not ok:\r\n            print('[WARNING] track lost')\r\n        # now update the roi coordinates to new values\r\n        x, y, w, h = track_window\r\n        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 255), 5)\r\n        # display track\r\n        cv2.imshow(\"Meanshift Track\", frame)\r\n        if cv2.waitKey(1) & 0xFF == ord('q'):\r\n            break\r\n    else:\r\n        break\n"})}),"\n",(0,i.jsxs)(n.p,{children:["A representation of the density function ",(0,i.jsx)(n.code,{children:"dst"})," used by the Meanshift algorithm to track down the region of interest:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:t(390769).Z+"",width:"639",height:"218"})}),"\n",(0,i.jsx)(n.p,{children:"The generated coordinates can be used to draw a rectangle around the calculated new position of our selected object:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:t(574966).Z+"",width:"639",height:"218"})})]})}function d(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>h});var i=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=i.createContext({}),h=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=h(t),g=r,p=m["".concat(c,".").concat(g)]||m[g]||l[g]||a;return t?i.createElement(p,o(o({ref:n},d),{},{components:t})):i.createElement(p,o({ref:n},d))}));d.displayName="MDXCreateElement"},591072:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/OpenCV_Meanshift_Tracking_01-b5a765ae9b4984b27cee6883ad6167a5.png"},390769:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/OpenCV_Meanshift_Tracking_02-a3ab7e5b412f7adc4f028b2bbdbcfac7.gif"},574966:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/OpenCV_Meanshift_Tracking_03-ed481e1872821ee1689ddd282ace2477.gif"},179456:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"}}]);