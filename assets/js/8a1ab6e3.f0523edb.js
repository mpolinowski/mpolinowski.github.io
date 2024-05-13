"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[79236],{416145:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var t=i(474848),r=i(28453);const a={sidebar_position:6040,slug:"2021-12-09",title:"OpenCV CAMshift Algorithm for Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},o=void 0,s={id:"IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/index",title:"OpenCV CAMshift Algorithm for Object Tracking",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking",slug:"/IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/2021-12-09",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/2021-12-09",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-09--opencv-camshift-tracking/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:6040,frontMatter:{sidebar_position:6040,slug:"2021-12-09",title:"OpenCV CAMshift Algorithm for Object Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV Optical Flow Algorithm for Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-10--opencv-optical-flow-tracking/2021-12-10"},next:{title:"OpenCV Meanshift Algorithm for Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08"}},c={},h=[{value:"CAMshift",id:"camshift",level:2},{value:"Get your Videostream",id:"get-your-videostream",level:2},{value:"Histogram Calculation in OpenCV",id:"histogram-calculation-in-opencv",level:2},{value:"Apply the CAMshift Algorithm",id:"apply-the-camshift-algorithm",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:i(279663).A+"",width:"2385",height:"919"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#camshift",children:"CAMshift"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#get-your-videostream",children:"Get your Videostream"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#histogram-calculation-in-opencv",children:"Histogram Calculation in OpenCV"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#apply-the-camshift-algorithm",children:"Apply the CAMshift Algorithm"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv2-tracking-algorithm",children:"Github Repo"})}),"\n",(0,t.jsx)(n.h2,{id:"camshift",children:"CAMshift"}),"\n",(0,t.jsxs)(n.p,{children:["One of the problems with the ",(0,t.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08",children:"Meanshift Algorithm"})," was that the region of interest always stayed at the same size when the object came closer to the camera or moved farther away. The region needs to adapt it's size with size and rotation of the target. The solution is called ",(0,t.jsx)(n.strong,{children:"CAMshift"})," (",(0,t.jsx)(n.em,{children:"Continuously Adaptive Meanshift"}),") published by Gary Bradsky in his paper \u201cComputer Vision Face Tracking for Use in a Perceptual User Interface\u201d in 1988."]}),"\n",(0,t.jsx)(n.p,{children:"It applies meanshift first. Once meanshift converges, it updates the size of the window. It also calculates the orientation of best fitting ellipse to it. Again it applies the meanshift with new scaled search window and previous window location. The process is continued until required accuracy is met."}),"\n",(0,t.jsx)(n.h2,{id:"get-your-videostream",children:"Get your Videostream"}),"\n",(0,t.jsx)(n.p,{children:"Get your RTSP video stream input and define a region of interest for the Meanshift algorithm:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'# get video stream from IP camera\r\nprint("[INFO] starting video stream")\r\nvs = VideoStream(args["url"]).start()\r\n\r\n# first frame from stream\r\nframe = vs.read()\r\n# select region of interest\r\nbbox = cv2.selectROI(frame)\r\nx, y, w, h = bbox\r\ntrack_window = (x, y, w, h)\r\n# define area of bounding box as area of interest\r\nroi = frame[y:y+h, x:x+w]\n'})}),"\n",(0,t.jsx)(n.h2,{id:"histogram-calculation-in-opencv",children:"Histogram Calculation in OpenCV"}),"\n",(0,t.jsx)(n.p,{children:"The Meanshift algorithm is going to use the histogram of your region of interest to track the object you selected above. But we have to convert the frame to to the HSV colour space and normalize it first:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"hsv_roi = cv2.cvtColor(roi, cv2.COLOR_BGR2HSV)\r\n# get histogram for [0] blue, [1] green, [2] red channel\r\nroi_hist = cv2.calcHist([hsv_roi], [0], None, [180], [0, 180])\r\n# convert hist values 0-180 to a range between 0-1\r\nroi_hist = cv2.normalize(roi_hist, roi_hist, 0, 255, cv2.NORM_MINMAX)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["So now we use ",(0,t.jsx)(n.a,{href:"https://docs.opencv.org/4.x/d1/db7/tutorial_py_histogram_begins.html",children:"cv.calcHist()"})," function to find the histogram. Let's familiarize with the function and its parameters :"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"cv.calcHist(images, channels, mask, histSize, ranges[, hist[, accumulate]])"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"images"})," : it is the source image of type uint8 or float32. it should be given in square brackets, ie, ",(0,t.jsx)(n.code,{children:"[img]"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"channels"})," : it is also given in square brackets. It is the index of channel for which we calculate histogram. For example, if input is grayscale image, its value is ",(0,t.jsx)(n.code,{children:"[0]"}),". For color image, you can pass ",(0,t.jsx)(n.code,{children:"[0]"}),", ",(0,t.jsx)(n.code,{children:"[1]"})," or ",(0,t.jsx)(n.code,{children:"[2]"})," to calculate"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"histogram"})," of blue, green or red channel respectively."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"mask"}),' : mask image. To find histogram of full image, it is given as "None". But if you want to find histogram of particular region of image, you have to create a mask image for that and give it as mask. (I will show an example later.)']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"histSize"})," : this represents our BIN count. Need to be given in square brackets. For full scale, we pass ",(0,t.jsx)(n.code,{children:"[256]"})," for ",(0,t.jsx)(n.strong,{children:"RGB"})," and ",(0,t.jsx)(n.code,{children:"[180]"})," for ",(0,t.jsx)(n.strong,{children:"HSV"}),".\r\nranges : this is our RANGE. Normally, it is ",(0,t.jsx)(n.code,{children:"[0,256]"})," for ",(0,t.jsx)(n.strong,{children:"RGB"})," and ",(0,t.jsx)(n.code,{children:"[0, 180]"})," for ",(0,t.jsx)(n.strong,{children:"HSV"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"apply-the-camshift-algorithm",children:"Apply the CAMshift Algorithm"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"while True:\r\n    # get next frame\r\n    frame = vs.read()\r\n    if True:\r\n        # convert to hsv\r\n        hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)\r\n        # compare blue channel of current with roi histogram\r\n        # https://docs.opencv.org/3.4.15/da/d7f/tutorial_back_projection.html\r\n        dst = cv2.calcBackProject([hsv], [0], roi_hist, [0, 180], 1)\r\n        # call meanshift() to find match of histogram in current frame\r\n        # and get the new coordinates\r\n        ok, track_window = cv2.meanShift(dst, (x, y, w, h), parameter)\r\n        if not ok:\r\n            print('[WARNING] track lost')\r\n        # now update the roi coordinates to new values\r\n        x, y, w, h = track_window\r\n        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 255), 2)\r\n        # display track\r\n        cv2.imshow(\"Meanshift Track\", frame)\r\n        if cv2.waitKey(1) & 0xFF == ord('q'):\r\n            break\r\n    else:\r\n        break\n"})}),"\n",(0,t.jsx)(n.p,{children:"The generated coordinates can be used to draw polylines around the calculated new position of our selected object:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"OpenCV Meanshift Algorithm for Object Tracking",src:i(472503).A+"",width:"639",height:"215"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},472503:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/OpenCV_CAMshift_Tracking_01-6df19bf659a15719cbcbca3093728cf7.gif"},279663:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>s});var t=i(296540);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);