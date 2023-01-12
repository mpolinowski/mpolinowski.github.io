"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[74498],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),d=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=d(e.components);return o.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},w=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),w=d(t),m=a,u=w["".concat(s,".").concat(m)]||w[m]||p[m]||r;return t?o.createElement(u,i(i({ref:n},c),{},{components:t})):o.createElement(u,i({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=w;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=t[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}w.displayName="MDXCreateElement"},98091:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=t(87462),a=(t(67294),t(3905));const r={sidebar_position:7070,slug:"2021-05-07",title:"Electron for Cross Platform Applications",authors:"mpolinowski",tags:["Javascript","Electron"]},i=void 0,l={unversionedId:"Development/Javascript/2021-05-07-electron-cross-platform-apps/index",id:"Development/Javascript/2021-05-07-electron-cross-platform-apps/index",title:"Electron for Cross Platform Applications",description:"Shenzhen, China",source:"@site/docs/Development/Javascript/2021-05-07-electron-cross-platform-apps/index.md",sourceDirName:"Development/Javascript/2021-05-07-electron-cross-platform-apps",slug:"/Development/Javascript/2021-05-07-electron-cross-platform-apps/2021-05-07",permalink:"/docs/Development/Javascript/2021-05-07-electron-cross-platform-apps/2021-05-07",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2021-05-07-electron-cross-platform-apps/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"Electron",permalink:"/docs/tags/electron"}],version:"current",sidebarPosition:7070,frontMatter:{sidebar_position:7070,slug:"2021-05-07",title:"Electron for Cross Platform Applications",authors:"mpolinowski",tags:["Javascript","Electron"]},sidebar:"tutorialSidebar",previous:{title:"Electron@13 as a Gatsby.js Wrapper",permalink:"/docs/Development/Javascript/2021-05-08-electron13-gatsby-wrapper/2021-05-08"},next:{title:"Next.js in 2021",permalink:"/docs/Development/Javascript/2021-02-14-next-js-2021/2021-02-14"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Loading a Webpage",id:"loading-a-webpage",level:3},{value:"Loading a File",id:"loading-a-file",level:3},{value:"Electron BrowserWindow",id:"electron-browserwindow",level:2},{value:"Instance Events",id:"instance-events",level:2},{value:"Working with Multiple Windows",id:"working-with-multiple-windows",level:2},{value:"Window Timing",id:"window-timing",level:2},{value:"ipcMain and ipcRenderer",id:"ipcmain-and-ipcrenderer",level:2}],c={toc:d};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:t(43583).Z,width:"1500",height:"479"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#loading-a-webpage"},"Loading a Webpage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#loading-a-file"},"Loading a File")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#electron-browserwindow"},"Electron BrowserWindow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#instance-events"},"Instance Events")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#working-with-multiple-windows"},"Working with Multiple Windows")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#window-timing"},"Window Timing")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#ipcmain-and-ipcrenderer"},"ipcMain and ipcRenderer"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/getting-started-with-electron4"},"Github Repository")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"There is already a ",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org"},"version 14 available of Electron")," - but I am following along a tutorial using Version 4. So for now I will initialize the project and install this specific version:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init -y\nnpm install --save-dev electron@4.1.4\n")),(0,a.kt)("p",null,"Add the following lines to the scripts section of your package.json to be able to start Electron with npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n    "start": "electron ."\n  },\n')),(0,a.kt)("h3",{id:"loading-a-webpage"},"Loading a Webpage"),(0,a.kt)("p",null,"Now we need to create a hello world ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file in the root directory of our app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow } = require('electron');\n\nfunction createWindows() {\n  let welcomeWindow =  new BrowserWindow();\n  welcomeWindow.loadURL('https://wiki.instar.com/de/');\n}\n\napp.on('ready', createWindows);\n")),(0,a.kt)("p",null,"Now all you need to do is to start your application with the npm script we added and your Electron app will come up with a webView of the web content you defined above in the ",(0,a.kt)("inlineCode",{parentName:"p"},"createWindow")," function:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Getting started with Electron4",src:t(4629).Z,width:"1142",height:"593"})),(0,a.kt)("h3",{id:"loading-a-file"},"Loading a File"),(0,a.kt)("p",null,"Now we can use Electron as a wrapper for some local content:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow } = require('electron');\n\nfunction createWindows() {\n  let welcomeWindow =  new BrowserWindow();\n  welcomeWindow.loadFile('./public/index.html');\n}\n\napp.on('ready', createWindows);\n")),(0,a.kt)("p",null,"Now create a folder inside the app root called ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," and add a file ",(0,a.kt)("inlineCode",{parentName:"p"},"index.html")," inside it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>Electron File Wrapper</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," again - this time you should see the rendered HTML page above."),(0,a.kt)("h2",{id:"electron-browserwindow"},"Electron BrowserWindow"),(0,a.kt)("p",null,"I noticed that the default Window that opens up when I start Electron is too small for the content I am loading. The ",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/browser-window"},"BrowserWindow API")," allows us to configure a lot of things about our app - for example it's width and height:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow } = require('electron');\n\nfunction createWindows() {\n  let welcomeWindow =  new BrowserWindow(\n    {\n      width: 1024,\n      height: 768,\n      center: true,\n      resizable: true,\n      moveable: true,\n      minimizable: true,\n      maximizable: true,\n      fullscreen: false,\n      fullscreenable: true,\n      minWidth: 800,\n    }\n  );\n\n  welcomeWindow.loadFile('./public/index.html');\n}\n\napp.on('ready', createWindows);\n")),(0,a.kt)("h2",{id:"instance-events"},"Instance Events"),(0,a.kt)("p",null,"Objects created with ",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/browser-window#instance-events"},"new BrowserWindow emit the events")," that we can react to. An example is - we want to wait for our page to load completely before displaying the webView Window. For this we just have to set our window to ",(0,a.kt)("strong",{parentName:"p"},"not show")," until an ",(0,a.kt)("strong",{parentName:"p"},"eventListener")," is triggered:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow } = require('electron');\n\nfunction createWindows() {\n  let welcomeWindow =  new BrowserWindow(\n    {\n      width: 1024,\n      height: 768,\n      center: true,\n      resizable: true,\n      moveable: true,\n      minimizable: true,\n      maximizable: true,\n      fullscreen: false,\n      fullscreenable: true,\n      minWidth: 800,\n      show: false\n    }\n  );\n\n  welcomeWindow.loadFile('./public/index.html');\n\n  welcomeWindow.on('closed', () => {\n    welcomeWindow = null\n  });\n\n  welcomeWindow.once('ready-to-show', ()=> {\n    welcomeWindow.show();\n  });\n}\n\napp.on('ready', createWindows);\n")),(0,a.kt)("p",null,"This version of our app now also listens for the ",(0,a.kt)("strong",{parentName:"p"},"closed")," event and will free up all it's memory once the Windows was closed."),(0,a.kt)("h2",{id:"working-with-multiple-windows"},"Working with Multiple Windows"),(0,a.kt)("p",null,"I now want to add a second window to my Electron app. Let's say I have a welcome page and from there I want to be able to start a dashboard. I create the ",(0,a.kt)("inlineCode",{parentName:"p"},"dashboard.html")," file inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"/public")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Dashboard</title>\n  </head>\n  <body>\n    <h1>Dashboard</h1>\n    <p>This is the Dashboard Page</p>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Now we need to add the function that will add our new browser window:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow } = require('electron');\n\nfunction createWindows() {\n  let welcomeWindow =  new BrowserWindow(\n    {\n      width: 600,\n      height: 400,\n      center: true,\n      backgroundColor: '#2f78f9',\n      hasShadow: true,\n      darkTheme: true,\n      resizable: true,\n      moveable: true,\n      minimizable: true,\n      maximizable: true,\n      fullscreen: false,\n      fullscreenable: true,\n      minWidth: 800,\n      show: false,\n      alwaysOnTop: true\n    }\n  );\n\n  welcomeWindow.loadFile('./public/index.html');\n\n  welcomeWindow.on('closed', () => {\n    welcomeWindow = null\n  });\n\n\n  let dashboardWindow = new BrowserWindow({\n      width: 1024,\n      height: 768,\n      x: 0,\n      y: 0,\n      resizable: true,\n      moveable: true,\n      minimizable: true,\n      maximizable: true,\n      kiosk : true,\n      fullscreenable: true,\n      frame: true,\n      transparent: false,\n      show: false\n  });\n\n  dashboardWindow.loadFile('./public/dashboard.html');\n\n  welcomeWindow.once('ready-to-show', ()=> {\n    welcomeWindow.show();\n    dashboardWindow.show();\n    dashboardWindow.maximize();\n  });\n\n  dashboardWindow.on('closed', () => {\n    dashboardWindow = null\n  });\n}\n\napp.on('ready', createWindows);\n")),(0,a.kt)("h2",{id:"window-timing"},"Window Timing"),(0,a.kt)("p",null,"Set a timer on the welcome screen to have it appear after the dashboard loaded and then have it disappear again after a timeout:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow } = require('electron');\n\nfunction createWindows() {\n  let welcomeWindow =  new BrowserWindow(\n    {\n      width: 600,\n      height: 400,\n      center: true,\n      backgroundColor: '#2f78f9',\n      hasShadow: true,\n      darkTheme: true,\n      resizable: true,\n      moveable: true,\n      minimizable: true,\n      maximizable: true,\n      fullscreen: false,\n      fullscreenable: true,\n      minWidth: 800,\n      show: false,\n      alwaysOnTop: true\n    }\n  );\n\n  welcomeWindow.loadFile('./public/index.html');\n\n  welcomeWindow.on('closed', () => {\n    welcomeWindow = null\n  });\n\n\n  let dashboardWindow = new BrowserWindow({\n      width: 1024,\n      height: 768,\n      x: 0,\n      y: 0,\n      resizable: true,\n      moveable: true,\n      minimizable: true,\n      maximizable: true,\n      kiosk : true,\n      fullscreenable: true,\n      frame: true,\n      transparent: false,\n      show: false\n  });\n\n  dashboardWindow.loadFile('./public/dashboard.html');\n\n  welcomeWindow.once('ready-to-show', ()=> {\n    dashboardWindow.show();\n    dashboardWindow.maximize();\n\n    setTimeout(() => {\n      welcomeWindow.show();\n          setTimeout(() => {\n            welcomeWindow.hide();\n          }, 5000);\n    }, 1000);\n  });\n\n  dashboardWindow.on('closed', () => {\n    dashboardWindow = null\n  });\n}\n\napp.on('ready', createWindows);\n")),(0,a.kt)("h2",{id:"ipcmain-and-ipcrenderer"},"ipcMain and ipcRenderer"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/ipc-main"},"ipcMain module")," is an Event Emitter. When used in the main process, it handles asynchronous and synchronous messages sent from a renderer process (web page). Messages sent from a renderer will be emitted to this module."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/ipc-renderer"},"ipcRenderer module")," is an EventEmitter. It provides a few methods so you can send synchronous and asynchronous messages from the render process (web page) to the main process. You can also receive replies from the main process."),(0,a.kt)("p",null,"I now want to use the ",(0,a.kt)("strong",{parentName:"p"},"ipcMain")," module to handle the closing of the welcome screen - before I used the ",(0,a.kt)("inlineCode",{parentName:"p"},"setTimeout")," function. For this I am going to add the following to the ",(0,a.kt)("inlineCode",{parentName:"p"},"index.js")," file and remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"welcomeWindow.hide()")," timer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { app, BrowserWindow, ipcMain } = require('electron');\n\n...\n\nipcMain.on('closeWelcomeWindow', (event) => {\n    welcomeWindow.hide();\n  });\n")),(0,a.kt)("p",null,"This function will hide the welcome screen when an event with the name ",(0,a.kt)("inlineCode",{parentName:"p"},"closeWelcomeWindow")," is triggered - we will have to add this event to our app."),(0,a.kt)("p",null,"We also have to add add the Node.js integration to our welcome screen to be able to execute Node.js functions from within this window - like importing Electron code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function createWindows() {\n  let welcomeWindow =  new BrowserWindow(\n    {\n      ...\n      webPreferences: {\n        nodeIntegration: true\n      },\n      ...\n    }\n  );\n")),(0,a.kt)("p",null,"Now to connect our web content we need to add some javascript to the welcome page:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<!DOCTYPE html>\n<html lang="en">\n<html>\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <meta http-equiv="X-UA-Compatible" content="ie=edge">\n    <title>Hello, World!</title>\n  </head>\n  <body>\n    <h1>Hello, World!</h1>\n    <p>Electron File Wrapper</p>\n    <button class="button" type="button" id="closeButton">\n        Close\n    </button>\n    <script>\n      const { ipcRenderer } = require(\'electron\');\n      document.querySelector(\'#closeButton\').addEventListener(\'click\', () => {\n        ipcRenderer.send(\'closeWelcomeWindow\')\n      });\n    <\/script>\n  </body>\n</html>\n')),(0,a.kt)("p",null,"Now we have a button on our welcome page that, when clicked, will emit the ",(0,a.kt)("inlineCode",{parentName:"p"},"closeWelcomeWindow")," event that our electron process is waiting for to close the welcome screen!"))}p.isMDXComponent=!0},4629:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/Getting_started_with_Electron4_01-c50e49e186e15e85946b1ad7fbf89630.png"},43583:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-4818a70d2cda9cb1a4a4c2b66118924b.jpg"}}]);