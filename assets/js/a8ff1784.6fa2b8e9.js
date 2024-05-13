"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[69376],{406009:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=a(474848),t=a(28453);const c={sidebar_position:6060,slug:"2021-12-07",title:"OpenCV Object Detection and Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},i=void 0,o={id:"IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/index",title:"OpenCV Object Detection and Tracking",description:"Shenzhen, China",source:"@site/docs/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/index.md",sourceDirName:"IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking",slug:"/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/2021-12-07",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/2021-12-07",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/ML/2021-12-07--opencv-detection-and-tracking/index.md",tags:[{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Python",permalink:"/docs/tags/python"},{label:"OpenCV",permalink:"/docs/tags/open-cv"}],version:"current",sidebarPosition:6060,frontMatter:{sidebar_position:6060,slug:"2021-12-07",title:"OpenCV Object Detection and Tracking",authors:"mpolinowski",tags:["Machine Learning","Python","OpenCV"]},sidebar:"tutorialSidebar",previous:{title:"OpenCV Meanshift Algorithm for Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-08--opencv-meanshift-tracking/2021-12-08"},next:{title:"OpenCV Object Tracking",permalink:"/docs/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/2021-12-06"}},s={},d=[{value:"OpenCV Haarcascades",id:"opencv-haarcascades",level:2},{value:"Using Haarcascades to find Objects",id:"using-haarcascades-to-find-objects",level:3}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:a(320671).A+"",width:"2385",height:"919"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#opencv-haarcascades",children:"OpenCV Haarcascades"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#using-haarcascades-to-find-objects",children:"Using Haarcascades to find Objects"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/mpolinowski/opencv-detection-and-tracking",children:"Github Repo"})}),"\n",(0,r.jsx)(n.h2,{id:"opencv-haarcascades",children:"OpenCV Haarcascades"}),"\n",(0,r.jsxs)(n.p,{children:["To identify objects I am going to use the provided OpenCV Haarcascades from ",(0,r.jsx)(n.a,{href:"https://github.com/opencv/opencv/tree/4.x/data/haarcascades",children:"Github.com"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/opencv/opencv/blob/4.x/data/haarcascades/haarcascade_fullbody.xml",children:"haarcascade_fullbody.xml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/opencv/opencv/blob/4.x/data/haarcascades/haarcascade_eye.xml",children:"haarcascade_eye.xml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/opencv/opencv/blob/4.x/data/haarcascades/haarcascade_frontalface_default.xml",children:"haarcascade_frontalface_default.xml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/opencv/opencv/blob/4.x/data/haarcascades/haarcascade_lowerbody.xml",children:"haarcascade_lowerbody.xml"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/opencv/opencv/blob/4.x/data/haarcascades/haarcascade_upperbody.xml",children:"haarcascade_upperbody.xml"})}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["You only need a few lines of code to perform an object detection on an image (image source ",(0,r.jsx)(n.a,{href:"https://www.pexels.com/",children:"pexels.com"}),"):"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import cv2\r\n\r\nimage = cv2.imread('resources/group_of_people.jpg')\r\n\r\ndetector = cv2.CascadeClassifier('cascades/haarcascade_fullbody.xml')\r\nimage_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\r\n\r\ndetections = detector.detectMultiScale(image_gray)\r\nprint('[INFO] People detected: ' + str(len(detections)))\r\n\r\nfor (x, y, w, h) in detections:\r\n    cv2.rectangle(image, (x, y), (x+w, y+h), (0, 0, 255), 2)\r\n\r\ncv2.imshow('People', image)\r\n\r\ncv2.waitKey(0)\r\ncv2.destroyAllWindows()\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OpenCV Object Detection and Tracking",src:a(3650).A+"",width:"1880",height:"686"})}),"\n",(0,r.jsx)(n.h3,{id:"using-haarcascades-to-find-objects",children:"Using Haarcascades to find Objects"}),"\n",(0,r.jsxs)(n.p,{children:["In the previous ",(0,r.jsx)(n.a,{href:"/docs/IoT-and-Machine-Learning/ML/2021-12-06--opencv-object-tracking/2021-12-06",children:"Object Tracking Example"})," I selected the object I wanted to track by hand. We can now use the OpenCV object detection feature to automatically find people in our video and return the coordinates for a bounding box:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"import cv2\r\nimport sys\r\n\r\ntracker = cv2.legacy.TrackerCSRT_create()\r\n\r\nvideo = cv2.VideoCapture('resources/group_of_people_03.mp4')\r\nif not video.isOpened():\r\n    print('[ERROR] loading video')\r\n    sys.exit()\r\n\r\nok, frame = video.read()\r\nif not ok:\r\n    print('[ERROR] loading frame')\r\n    sys.exit()\r\n\r\ndetector = cv2.CascadeClassifier('cascades/haarcascade_fullbody.xml')\r\n\r\n\r\ndef detect():\r\n    while True:\r\n        ok, frame = video.read()\r\n        frame_gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)\r\n        detections = detector.detectMultiScale(frame_gray, minSize=(300, 300))\r\n        print('[INFO] people detected: ' + str(len(detections)))\r\n\r\n        for (x, y, w, h) in detections:\r\n            cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)\r\n            cv2.imshow('Detections', frame)\r\n            cv2.waitKey(0)\r\n            cv2.destroyAllWindows()\r\n            if x > 0:\r\n                print('[INFO] bounding box calculated')\r\n                return x, y, w, h\r\n\r\n\r\nbbox = detect()\r\nprint(bbox)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This code will search for a person inside the first frame of the image and return the bounding box coordinates once it found one (all videos are free stock from ",(0,r.jsx)(n.a,{href:"https://www.pexels.com/",children:"pexels.com"}),"):"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OpenCV Object Detection and Tracking",src:a(949581).A+"",width:"3840",height:"1072"})}),"\n",(0,r.jsx)(n.p,{children:"Those coordinates can then be fed into the tracking algorithm that allows us to track the person recognized by OpenCV:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# initialize tracker with detected coordinates\r\nok = tracker.init(frame, bbox)\r\nif not ok:\r\n    print('[ERROR] loading tracker')\r\n# generate random colours for bounding box\r\ncolours = (randint(0, 255), randint(0, 255), randint(0, 255))\r\n\r\n# loop through all frames and apply tracker on detected object\r\nwhile True:\r\n    ok, frame = video.read()\r\n    if not ok:\r\n        print('[INFO] reached end of video')\r\n        break\r\n    # update bounding box in new frame using tracker\r\n    ok, bbox = tracker.update(frame)\r\n    if ok:\r\n        (x, y, w, h) = [int(v) for v in bbox]\r\n        cv2.rectangle(frame, (x, y), (x+w, y+h), colours, 5)\r\n        # show tracking / resize frame if necessary\r\n        resized = cv2.resize(frame, (1280, 720), interpolation=cv2.INTER_NEAREST)\r\n        cv2.imshow('Tracking', resized)\r\n        # press 'q' to break loop and close window\r\n        if cv2.waitKey(1) & 0xFF == ord('q'):\r\n            break\r\n\r\n    else:\r\n        print('[WARNING] No Track')\r\n        # re-run detection if track was lost\r\n        bbox = detect()\r\n        # restart tracker if person detected\r\n        tracker = cv2.legacy.TrackerCSRT_create()\r\n        tracker.init(frame, bbox)\n"})}),"\n",(0,r.jsx)(n.p,{children:"With this code we are entirely dependent on the Haarcascade to select objects to track. We can adjust this by first selecting the initial object by hand and only handing the selection to the algorithm if the track fails:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-python",children:"# call detection function\r\n# if you want OpenCV to detect the initial object automatically\r\n# bbox = detect()\r\n# print(bbox)\r\n# or use the ROI selector to select initial object yourself\r\nbbox = cv2.selectROI(frame)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Now the detection code is skipped and I am presented with the manual selector instead (all videos are free stock from ",(0,r.jsx)(n.a,{href:"https://www.pexels.com/",children:"pexels.com"}),"):"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OpenCV Object Detection and Tracking",src:a(595284).A+"",width:"1906",height:"774"})}),"\n",(0,r.jsx)(n.p,{children:"The tracking algorithm will then take those coordinates and start tracking the region of interest. If it looses track it will trigger the object detection function to reacquire it:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"OpenCV Object Detection and Tracking",src:a(801560).A+"",width:"640",height:"360"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},3650:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/OpenCV-Detection-and-Tracking_01-2a7bed1acc45654e5dc59f39cefbc916.jpg"},949581:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/OpenCV-Detection-and-Tracking_02-698543d09b0fc5efb2aa101164a0ad45.jpg"},595284:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/OpenCV-Detection-and-Tracking_03-6901ebc8ff4bbfc3316fbc20a44b1e0f.png"},801560:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/OpenCV-Detection-and-Tracking_04-832c4cd366315eeb32c20b80be42b3b1.gif"},320671:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5a0b68587d9242bbb46a1f1aaab44216.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var r=a(296540);const t={},c=r.createContext(t);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);