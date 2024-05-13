"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[83921],{906114:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var t=i(474848),r=i(28453);const a={sidebar_position:6050,slug:"2021-12-08",title:"OpenCV Meanshift Algorithm for Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},o=void 0,s={id:"IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/index",title:"OpenCV Meanshift Algorithm for Object Tracking",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking",slug:"/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:6050,frontMatter:{sidebar_position:6050,slug:"2021-12-08",title:"OpenCV Meanshift Algorithm for Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV CAMshift Algorithm for Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/2021-12-09"},next:{title:"OpenCV Object Detection and Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/2021-12-07"}},h={},c=[{value:"Meanshift",id:"meanshift",level:2},{value:"Get your Videostream",id:"get-your-videostream",level:2},{value:"Histogram Calculation in OpenCV",id:"histogram-calculation-in-opencv",level:2},{value:"Histogram Plot",id:"histogram-plot",level:4},{value:"Apply the Meanshift Algorithm",id:"apply-the-meanshift-algorithm",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:i(58504).A+"",width:"2385",height:"919"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#meanshift",children:"Meanshift"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-your-videostream",children:"Get your Videostream"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#histogram-calculation-in-opencv",children:"Histogram Calculation in OpenCV"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#histogram-plot",children:"Histogram Plot"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#apply-the-meanshift-algorithm",children:"Apply the Meanshift Algorithm"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv2-tracking-algorithm",children:"Github Repo"})}),"\n",(0,t.jsx)(n.h2,{id:"meanshift",children:"Meanshift"}),"\n",(0,t.jsxs)(n.p,{children:["The idea behind the ",(0,t.jsx)(n.a,{href:"https://opencv24-python-tutorials.readthedocs.io/en/latest/py_tutorials/py_video/py_meanshift/py_meanshift.html",children:"Meanshift Algorithm"})," is that every instance of the video is checked for the pixel distribution in that frame. We define an initial window, a region of interest (",(0,t.jsx)(n.strong,{children:"ROI"}),") which identifies the area of maximum pixel distribution. By doing so we are defining a colour histogram. The algorithm tries to keep track of that area in the video so that the ROI moves towards the region of maximum pixel distribution - it tries to maximize the overlap of the resulting histogram with the original histogram of the area we selected. The direction of movement depends upon the difference between the center of our tracking window and the centroid of all the k-pixels inside that window."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Disadvantages of using the Meanshift Algorithm"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The size of the ROI remains the same irrespective of the distance of the object from the camera."}),"\n",(0,t.jsx)(n.li,{children:"The ROI will track the object only when it is inside the initial bounding box we define."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"get-your-videostream",children:"Get your Videostream"}),"\n",(0,t.jsx)(n.p,{children:"Get your RTSP video stream input and define a region of interest for the Meanshift algorithm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# get video stream from IP camera\r\nprint("[INFO] starting video stream")\r\nvs = VideoStream(args["url"]).start()\r\n\r\n# first frame from stream\r\nframe = vs.read()\r\n# select region of interest\r\nbbox = cv2.selectROI(frame)\r\nx, y, w, h = bbox\r\ntrack_window = (x, y, w, h)\r\n# define area of bounding box as area of interest\r\nroi = frame[y:y+h, x:x+w]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"histogram-calculation-in-opencv",children:"Histogram Calculation in OpenCV"}),"\n",(0,t.jsx)(n.p,{children:"The Meanshift algorithm is going to use the histogram of your region of interest to track the object you selected above. But we have to convert the frame to to the HSV colour space and normalize it first:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"hsv_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)\r\n# get histogram for [0] blue, [1] green, [2] red channel\r\nroi_hist = cv2.calcHist([hsv_roi], [0], None, [180], [0, 180])\r\n# convert hist values 0-180 to a range between 0-1\r\nroi_hist = cv2.normalize(roi_hist, roi_hist, 0, 255, cv2.NORM_MINMAX)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["So now we use ",(0,t.jsx)(n.a,{href:"https://docs.opencv.org/4.x/d1/db7/tutorial_py_histogram_begins.html",children:"cv.calcHist()"})," function to find the histogram. Let's familiarize with the function and its parameters :"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"cv.calcHist(images, channels, mask, histSize, ranges[, hist[, accumulate]])"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"images"})," : it is the source image of type uint8 or float32. it should be given in square brackets, ie, ",(0,t.jsx)(n.code,{children:"[img]"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"channels"})," : it is also given in square brackets. It is the index of channel for which we calculate histogram. For example, if input is grayscale image, its value is ",(0,t.jsx)(n.code,{children:"[0]"}),". For color image, you can pass ",(0,t.jsx)(n.code,{children:"[0]"}),", ",(0,t.jsx)(n.code,{children:"[1]"})," or ",(0,t.jsx)(n.code,{children:"[2]"})," to calculate"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"histogram"})," of blue, green or red channel respectively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"mask"}),' : mask image. To find histogram of full image, it is given as "None". But if you want to find histogram of particular region of image, you have to create a mask image for that and give it as mask. (I will show an example later.)']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"histSize"})," : this represents our BIN count. Need to be given in square brackets. For full scale, we pass ",(0,t.jsx)(n.code,{children:"[256]"})," for ",(0,t.jsx)(n.strong,{children:"RGB"})," and ",(0,t.jsx)(n.code,{children:"[180]"})," for ",(0,t.jsx)(n.strong,{children:"HSV"}),".\r\nranges : this is our RANGE. Normally, it is ",(0,t.jsx)(n.code,{children:"[0,256]"})," for ",(0,t.jsx)(n.strong,{children:"RGB"})," and ",(0,t.jsx)(n.code,{children:"[0, 180]"})," for ",(0,t.jsx)(n.strong,{children:"HSV"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"img = cv.imread('image_hsv.jpg',0)\r\nhist = cv.calcHist([img],[0],None,[180],[0, 180])\n"})}),"\n",(0,t.jsx)(n.h4,{id:"histogram-plot",children:"Histogram Plot"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"with OpenCV"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"img = cv.imread('image_rgb.jpg',0)\r\n# create a mask\r\nmask = np.zeros(img.shape[:2], np.uint8)\r\nmask[100:300, 100:400] = 255\r\nmasked_img = cv.bitwise_and(img,img,mask = mask)\r\n# Calculate histogram with mask and without mask\r\n# Check third argument for mask\r\nhist_full = cv.calcHist([img],[0],None,[256],[0,256])\r\nhist_mask = cv.calcHist([img],[0],mask,[256],[0,256])\r\nplt.subplot(221), plt.imshow(img, 'gray')\r\nplt.subplot(222), plt.imshow(mask,'gray')\r\nplt.subplot(223), plt.imshow(masked_img, 'gray')\r\nplt.subplot(224), plt.plot(hist_full), plt.plot(hist_mask)\r\nplt.xlim([0,256])\r\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"with Matplotlib"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import numpy as np\r\nimport cv2 as cv\r\nfrom matplotlib import pyplot as plt\r\n\r\nimg = cv.imread('home.jpg')\r\ncolor = ('b','g','r')\r\nfor i,col in enumerate(color):\r\n    histr = cv.calcHist([img],[i],None,[255],[0,255])\r\n    plt.plot(histr,color = col)\r\n    plt.xlim([0,255])\r\nplt.show()\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:i(279105).A+"",width:"1247",height:"513"})}),"\n",(0,t.jsx)(n.h2,{id:"apply-the-meanshift-algorithm",children:"Apply the Meanshift Algorithm"}),"\n",(0,t.jsxs)(n.p,{children:["Now that we have the ROI coordinates and the corresponding histogram we can add a while loop that keeps fetching new frames from the video stream. We are using the ",(0,t.jsx)(n.a,{href:"https://docs.opencv.org/3.4.15/da/d7f/tutorial_back_projection.html",children:"OpenCV Back Projection"})," to compare each incoming new frame with the histogram of our ROI. The Meanshift tracking algorithm is then using the generated density function to find a best match for the new coordinates of our region of interest:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"# set up the termination criteria, either 10 iteration or move by at least 1 pt\r\nparameter = (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 10, 1)\r\n\r\n# now loop through the rest of avail frames\r\n# and use meanshift to track defined roi\r\nwhile True:\r\n    # get next frame\r\n    frame = vs.read()\r\n    if True:\r\n        # convert to hsv\r\n        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\r\n        # compare blue channel of current with roi histogram\r\n        dst = cv2.calcBackProject([hsv], [0], roi_hist, [0, 180], 1)\r\n        # call meanshift() to find match of histogram in current frame\r\n        # and get the new coordinates\r\n        ok, track_window = cv2.meanShift(dst, (x, y, w, h), parameter)\r\n        if not ok:\r\n            print('[WARNING] track lost')\r\n        # now update the roi coordinates to new values\r\n        x, y, w, h = track_window\r\n        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 255), 5)\r\n        # display track\r\n        cv2.imshow(\"Meanshift Track\", frame)\r\n        if cv2.waitKey(1) & 0xFF == ord('q'):\r\n            break\r\n    else:\r\n        break\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A representation of the density function ",(0,t.jsx)(n.code,{children:"dst"})," used by the Meanshift algorithm to track down the region of interest:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:i(350201).A+"",width:"639",height:"218"})}),"\n",(0,t.jsx)(n.p,{children:"The generated coordinates can be used to draw a rectangle around the calculated new position of our selected object:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:i(571296).A+"",width:"639",height:"218"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},279105:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/OpenCV_Meanshift_Tracking_01-b5a765ae9b4984b27cee6883ad6167a5.png"},350201:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/OpenCV_Meanshift_Tracking_02-a3ab7e5b412f7adc4f028b2bbdbcfac7.gif"},571296:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/OpenCV_Meanshift_Tracking_03-ed481e1872821ee1689ddd282ace2477.gif"},58504:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(296540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);