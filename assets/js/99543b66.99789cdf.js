"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[49229],{983781:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(474848),i=t(28453);const a={sidebar_position:7090,slug:"2019-02-11",title:"Loxone Miniserver",authors:"mpolinowski",tags:["IoT","Smarthome"]},r=void 0,s={id:"Automation_and_Robotics/Home_Automation/2019-02-11--loxone-miniserver/index",title:"Loxone Miniserver",description:"Shenzhen, China",source:"@site/docs/Automation_and_Robotics/Home_Automation/2019-02-11--loxone-miniserver/index.mdx",sourceDirName:"Automation_and_Robotics/Home_Automation/2019-02-11--loxone-miniserver",slug:"/Automation_and_Robotics/Home_Automation/2019-02-11--loxone-miniserver/2019-02-11",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-02-11--loxone-miniserver/2019-02-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Automation_and_Robotics/Home_Automation/2019-02-11--loxone-miniserver/index.mdx",tags:[{label:"IoT",permalink:"/docs/tags/io-t"},{label:"Smarthome",permalink:"/docs/tags/smarthome"}],version:"current",sidebarPosition:7090,frontMatter:{sidebar_position:7090,slug:"2019-02-11",title:"Loxone Miniserver",authors:"mpolinowski",tags:["IoT","Smarthome"]},sidebar:"tutorialSidebar",previous:{title:"A Mock REST API in Node-RED and Docker",permalink:"/docs/Automation_and_Robotics/Home_Automation/2020-09-15--mock-rest-api-with-nodered/2020-09-16"},next:{title:"Podman Homebridge to MQTT",permalink:"/docs/Automation_and_Robotics/Home_Automation/2019-12-01--podman-hombridge-to-mqtt/2019-12-01"}},h={},l=[{value:"Homeautomation Miniserver",id:"homeautomation-miniserver",level:2},{value:"Installation of the Miniserver",id:"installation-of-the-miniserver",level:3},{value:"Smart Home App and WebUI",id:"smart-home-app-and-webui",level:3},{value:"Control INSTAR IP camera via the Loxone Miniserver",id:"control-instar-ip-camera-via-the-loxone-miniserver",level:3},{value:"Example 1: Triggering an alarm",id:"example-1-triggering-an-alarm",level:4},{value:"Example 2: Go to a saved position",id:"example-2-go-to-a-saved-position",level:4},{value:"Display your camera video on alarm",id:"display-your-camera-video-on-alarm",level:3},{value:"Integrating the alarm output relay of the camera",id:"integrating-the-alarm-output-relay-of-the-camera",level:2},{value:"Integrating the alarm input of the camera",id:"integrating-the-alarm-input-of-the-camera",level:2},{value:"Use the Loxone Miniserver as alarm server",id:"use-the-loxone-miniserver-as-alarm-server",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Shenzhen, China",src:t(662862).A+"",width:"1500",height:"555"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#homeautomation-miniserver",children:"Homeautomation Miniserver"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#installation-of-the-miniserver",children:"Installation of the Miniserver"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#smart-home-app-and-webui",children:"Smart Home App and WebUI"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#control-instar-ip-camera-via-the-loxone-miniserver",children:"Control INSTAR IP camera via the Loxone Miniserver"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#example-1-triggering-an-alarm",children:"Example 1: Triggering an alarm"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#example-2-go-to-a-saved-position",children:"Example 2: Go to a saved position"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#display-your-camera-video-on-alarm",children:"Display your camera video on alarm"})}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#integrating-the-alarm-output-relay-of-the-camera",children:"Integrating the alarm output relay of the camera"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#integrating-the-alarm-input-of-the-camera",children:"Integrating the alarm input of the camera"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#use-the-loxone-miniserver-as-alarm-server",children:"Use the Loxone Miniserver as alarm server"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"homeautomation-miniserver",children:"Homeautomation Miniserver"}),"\n",(0,o.jsxs)(n.p,{children:["The home automation ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/produkte/hausautomation-miniserver/",children:"miniserver from Loxone"})," connects all smart components in your apartment or house. All strings run together to the Miniserver to enable communication between the individual components: Light, shading, heating, buttons as well as your INSTAR IP camera."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(752750).A+"",width:"800",height:"572"})}),"\n",(0,o.jsx)(n.h3,{id:"installation-of-the-miniserver",children:"Installation of the Miniserver"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["First, the Miniserver must be installed and connected in your distributor. The LAN cable must be ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/kb/inbetriebnahme-miniserver/",children:"connected"})," to the network router (e.g. Internet W-LAN router) and the miniserver must be connected to power. After approx. 1 minute the Miniserver should ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/kb/checkliste-miniserver-startet-nicht-mehr/",children:"be operational"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Miniserver: The left LED flashes green regularly. The right LED is off."})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To configure the Miniserver you need a PC on which the program ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/produkte/loxone-config/",children:"Loxone Config"})," is installed. This PC must be connected to the same network router (W-LAN or LAN) to which the Miniserver was connected."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["To create a new project in the software by clicking on ",(0,o.jsx)(n.strong,{children:"New Project"}),", select the miniserver and enter the appropriate project data in the following input masks."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["By clicking on the arrow below the ",(0,o.jsx)(n.em,{children:"Connect"})," button in the software, the search dialog can be opened. After the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/kb/miniserver-erstkonfiguration/#diagnosenetzwerk",children:"Miniserver appears"}),", it must be selected and enter the user data - ",(0,o.jsxs)(n.strong,{children:["Default: user name: ",(0,o.jsx)(n.code,{children:"admin"})," and password: ",(0,o.jsx)(n.code,{children:"admin"})]}),". By clicking on ",(0,o.jsx)(n.em,{children:"Setup"})," you get an overview of the configuration. After confirming this, you will come to the ",(0,o.jsx)(n.strong,{children:"Network Settings"})," - specify here a static IP address that is available on your local network."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"As a last point of the initial configuration the just created project must be saved in the Miniserver:"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(752750).A+"",width:"800",height:"572"})}),"\n",(0,o.jsx)(n.h3,{id:"smart-home-app-and-webui",children:"Smart Home App and WebUI"}),"\n",(0,o.jsxs)(n.p,{children:["From this point it is possible to use the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/produkte/apps/",children:"Smart Home App"})," to connect to the Miniserver with your mobile phone, tablet, PC as long as you are in your home network. Download the apps directly from the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/support/downloads/",children:"here"}),", or in the respective APP Store and log in to the Miniserver with the user data that you specified in the steps before during the initial configuration."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(464229).A+"",width:"800",height:"642"})}),"\n",(0,o.jsxs)(n.p,{children:["The web interface of the miniserver is via the local IP of the server in your network and the login you entered in the setup for the item ",(0,o.jsx)(n.strong,{children:"Visualizations"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(228316).A+"",width:"800",height:"686"})}),"\n",(0,o.jsx)(n.h3,{id:"control-instar-ip-camera-via-the-loxone-miniserver",children:"Control INSTAR IP camera via the Loxone Miniserver"}),"\n",(0,o.jsx)(n.p,{children:"In order to control our IP camera via the Loxone server, we need to create a virtual output and assign it a button in the UI and a CGI command for the camera:"}),"\n",(0,o.jsx)(n.h4,{id:"example-1-triggering-an-alarm",children:"Example 1: Triggering an alarm"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(125715).A+"",width:"800",height:"729"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Access your ",(0,o.jsx)(n.strong,{children:"Project"})," on the Loxone Miniserver and click on ",(0,o.jsx)(n.strong,{children:"Virtual Outputs"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Now a button will appear at the top of the menu bar where you can create a ",(0,o.jsx)(n.strong,{children:"Virtual Output"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Clicking on this button opens the configuration page where you can assign a camera to the output via its IP address."}),"\n",(0,o.jsxs)(n.li,{children:["Then click ",(0,o.jsx)(n.strong,{children:"Virtual Exit Command"})," to assign the output a command that you want to send to the camera when you press the button."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(393802).A+"",width:"800",height:"490"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Enter a name for the function you want to use with the CGI command. In the example we take the command that triggers an alarm on the camera. ",(0,o.jsx)(n.strong,{children:"Please note"})," that this command only works with INSTAR Full HD cameras. However, if you have a camera from another series, you can easily exchange the command for another CGI command for your camera. The command requires the username and password of the administrator user to be appended to the back of the camera - in the example, this is ",(0,o.jsx)(n.em,{children:"username = admin"})," and ",(0,o.jsx)(n.em,{children:"password = instar"})," (if you select a CGI command here that can turn something on or off on the camera) these are to be entered accordingly with ",(0,o.jsx)(n.strong,{children:"command at ON"})," and at ",(0,o.jsx)(n.strong,{children:"command at OFF"}),", with the respective parameter.)"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"/param.cgi?cmd=pushhostalarm&-usr=admin&-pwd=instar\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"Then click on the exit, hold down the left mouse button and drag the object onto the work surface on the right."}),"\n",(0,o.jsxs)(n.li,{children:["Afterwards we can create a ",(0,o.jsx)(n.strong,{children:"Virtual input"})," with which we want to trigger the virtual output."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(551233).A+"",width:"800",height:"601"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Click ",(0,o.jsx)(n.strong,{children:"Virtual input"})," to create an input."]}),"\n",(0,o.jsxs)(n.li,{children:["In the opening configuration window you can give a ",(0,o.jsx)(n.strong,{children:"name"})," to the input, select it in the ",(0,o.jsx)(n.strong,{children:"Visualization"})," (WebUI) and as ",(0,o.jsx)(n.strong,{children:"Input Type"})," choose ",(0,o.jsx)(n.strong,{children:"key"})," (if you have chosen another CGI command next to the one on the camera) and turns off, you should instead choose a ",(0,o.jsx)(n.strong,{children:"switch"})," here)."]}),"\n",(0,o.jsx)(n.li,{children:"Then pull the Input onto the work area."}),"\n",(0,o.jsx)(n.li,{children:"And connect the two elements."}),"\n",(0,o.jsxs)(n.li,{children:["Save the change by clicking on the floppy disk icon in the top left corner and transfer the program with the ",(0,o.jsx)(n.strong,{children:"Save in Miniserver"})," button."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(330104).A+"",width:"800",height:"353"})}),"\n",(0,o.jsxs)(n.p,{children:["Now when we access the web interface of the miniserver again, we can see that a button has appeared there. If we select this and press it, an ",(0,o.jsx)(n.strong,{children:"Audio Alarm"})," is triggered on our camera and thus all programmed alarm actions are started - in the example the Alarm server was contacted."]}),"\n",(0,o.jsx)(n.h4,{id:"example-2-go-to-a-saved-position",children:"Example 2: Go to a saved position"}),"\n",(0,o.jsx)(n.p,{children:"For the second example, we can now recycle a lot of the previous one."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(4911).A+"",width:"800",height:"598"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["First click on the ",(0,o.jsx)(n.strong,{children:"Virtual output"})," that we created for our camera."]}),"\n",(0,o.jsxs)(n.li,{children:["And then on the ",(0,o.jsx)(n.strong,{children:"Virtual Output command"})," to add another command."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(423366).A+"",width:"800",height:"611"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Here you can store the stored position 1 for the ",(0,o.jsx)(n.strong,{children:"command for ON"})," and the stored position 2 for ",(0,o.jsx)(n.strong,{children:"command for OFF"}),":"]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"/param.cgi?cmd=preset&-act=goto&-number=0&-usr=admin&-pwd=instar\r\n/param.cgi?cmd=preset&-act=goto&-number=1&-usr=admin&-pwd=instar\n"})}),"\n",(0,o.jsxs)(n.ol,{start:"2",children:["\n",(0,o.jsx)(n.li,{children:"And drag the configured output to the work area."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(599628).A+"",width:"800",height:"670"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Now click on ",(0,o.jsx)(n.strong,{children:"Virtual Inputs"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["And on ",(0,o.jsx)(n.strong,{children:"Virtual Inputs"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["As display in the visualization (WebUI) we select a ",(0,o.jsx)(n.strong,{children:"Switch"})," here."]}),"\n",(0,o.jsx)(n.li,{children:"Then pull the entrance onto the work surface."}),"\n",(0,o.jsx)(n.li,{children:"And connect both outputs (from the virtual input) to the previously created virtual output."}),"\n",(0,o.jsx)(n.li,{children:"Save the settings."}),"\n",(0,o.jsx)(n.li,{children:"And transfer the program to the miniserver."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(968725).A+"",width:"800",height:"543"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Click the button in the WebUI to pan the camera between the two positions."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"display-your-camera-video-on-alarm",children:"Display your camera video on alarm"}),"\n",(0,o.jsxs)(n.p,{children:["To display the camera image in the Loxone Miniservers WebUI, we can add a ",(0,o.jsx)(n.strong,{children:"Custom Intercom"})," from the list of ",(0,o.jsx)(n.strong,{children:"Networks"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(801374).A+"",width:"800",height:"417"})}),"\n",(0,o.jsxs)(n.p,{children:["In the configuration of the ",(0,o.jsx)(n.em,{children:"Intercoms"})," enter the JPG path of your camera - this is the IP address of the camera followed by ",(0,o.jsx)(n.code,{children:"/tmpfs/snap.jpg"})," and the administrator login to the camera (example s. below) and then drag it to the desktop:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"http://192.168.2.116/tmpfs/snap.jpg?usr=admin&pwd=instar\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(519687).A+"",width:"800",height:"330"})}),"\n",(0,o.jsxs)(n.p,{children:["For testing, we create again a ",(0,o.jsx)(n.strong,{children:"Virtual input"})," in the form of a ",(0,o.jsx)(n.em,{children:"Button"})," and connect it to our ",(0,o.jsx)(n.em,{children:"Intercom"}),". Save the setting and transfer the program to the Miniserver:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(244520).A+"",width:"800",height:"582"})}),"\n",(0,o.jsx)(n.p,{children:"We now have a virtual bell button that when pressed shows the live video of the camera:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(142385).A+"",width:"800",height:"597"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(728570).A+"",width:"800",height:"846"})}),"\n",(0,o.jsxs)(n.p,{children:["Now all you have to do is replace this virtual bell with Loxone physical accessories. In the following example we have connected the ",(0,o.jsx)(n.a,{href:"https://shop.loxone.com/dede/bewegungsmelder.html",children:"motion detector"})," and the ",(0,o.jsx)(n.a,{href:"https://shop.loxone.com/dede/loxone-touch.html",children:"Touch Control Element"})," with the ",(0,o.jsx)(n.em,{children:"Intercom"}),". If you operate the control or be detected by the motion detector, the ringer will be immediately resolved and all displays running the Loxone software will show you the live video of the embedded camera:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(529795).A+"",width:"800",height:"693"})}),"\n",(0,o.jsxs)(n.p,{children:["The output on the right side of the ",(0,o.jsx)(n.em,{children:"Intercoms"})," can in turn connect other devices that are to be triggered when ringing."]}),"\n",(0,o.jsxs)(n.p,{children:["To the output on the right side of the ",(0,o.jsx)(n.em,{children:"Intercom"})," you can connect further devices, which are to be triggered during the ringing. In the example we have connected the orientation light of the Touch control. The end result is:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["You press the virtual bell button in the WebUI ",(0,o.jsx)(n.strong,{children:"OR"})," you click on the Loxone Touch control ",(0,o.jsx)(n.strong,{children:"OR"})," you trigger the Loxone motion detector and the ",(0,o.jsx)(n.em,{children:"Intercom module"})," is activated."]}),"\n",(0,o.jsx)(n.li,{children:"When activated, the miniserver WebUI and the Loxone Smartphone Apps will automatically display the video image of the camera and play a ringtone."}),"\n",(0,o.jsxs)(n.li,{children:["As an example for another action we have connected the orientation light of the touch control with the ",(0,o.jsx)(n.em,{children:"Intercom"})," and see that it is activated when the ",(0,o.jsx)(n.em,{children:"Intercom"})," is activated (e.g. you could install a gong here)."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"integrating-the-alarm-output-relay-of-the-camera",children:"Integrating the alarm output relay of the camera"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"most"})," INSTAR IP cameras have an alarm output:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"For indoor cameras (such as the INSTAR IN-8015 FullHD, this is usually port 1 and 2 of the four green connectors on the rear panel of the camera."}),"\n",(0,o.jsx)(n.li,{children:"For outdoor cameras, you will usually find the connection on the cable harness of the camera."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["We would now like to use this alarm output to report an alarm on the camera in the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/kb/inbetriebnahme-miniserver/",children:"Loxone Miniserver"})," and trigger a reaction there. In the following example we take the IN-8015 Full HD indoor camera and connect it to the ",(0,o.jsx)(n.a,{href:"https://www.loxwiki.eu/display/LOX/Potentialfrei+und+potentialbehaftet",children:"digital input (potential free)"})," of the Loxone Miniserver:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(72132).A+"",width:"800",height:"450"})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/produkte/loxone-config/",children:"Loxone Config"})," Software, we can now drag the ",(0,o.jsx)(n.strong,{children:"first digital input"})," onto the work surface and - for testing - connect it to the orientation light of the ",(0,o.jsx)(n.a,{href:"https://shop.loxone.com/dede/loxone-touch.html",children:"Touch control"})," we had previously used:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(312077).A+"",width:"800",height:"436"})}),"\n",(0,o.jsxs)(n.p,{children:["If we now trigger an alarm on the camera via the ",(0,o.jsx)(n.a,{href:"#example-1-triggering-an-alarm",children:"Loxone WebUI or App"})," we want the camera to send a pulse via the ",(0,o.jsx)(n.strong,{children:"alarm output"})," to the ",(0,o.jsx)(n.strong,{children:"digital input"})," of the Loxone Miniserver. We can set this in the alarm actions in the WebUI of the camera:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(264161).A+"",width:"800",height:"540"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"duration in seconds"})," indicates how long the alarm output relay remains open after an alarm. The 5s set here mean that the orientation lamp lights up for ",(0,o.jsx)(n.code,{children:"5s"})," after an alarm and then goes out again."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"integrating-the-alarm-input-of-the-camera",children:"Integrating the alarm input of the camera"}),"\n",(0,o.jsxs)(n.p,{children:["We can now look at the opposite way and address the alarm input of the INSTAR IP camera via the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/kb/inbetriebnahme-miniserver/",children:"Loxone Miniserver"}),". Therefore we connect the first ",(0,o.jsx)(n.a,{href:"https://www.loxwiki.eu/display/LOX/Potentialfrei+und+potentialbehaftet",children:"digital output"})," of the miniserver with the alarm input of the IN-8015 Full HD:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(779544).A+"",width:"800",height:"450"})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/produkte/loxone-config/",children:"Loxone Config"})," software we now have to add a ",(0,o.jsx)(n.strong,{children:"button module"}),". Make sure that you are on the ",(0,o.jsx)(n.em,{children:"My Project"})," tab (1) and then select the button under ",(0,o.jsx)(n.strong,{children:"Insert button"})," in the Operation category and place it on the desktop:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(954035).A+"",width:"800",height:"592"})}),"\n",(0,o.jsxs)(n.p,{children:["Then pull the first ",(0,o.jsx)(n.strong,{children:"Digital output"})," onto the work surface and connect it to the output of the button:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(315178).A+"",width:"800",height:"272"})}),"\n",(0,o.jsxs)(n.p,{children:["You can now use any actuator or sensor as an input - as well as virtual inputs that can be operated via the Loxone App or WebUI. In the example we have - as before - connected the ",(0,o.jsx)(n.a,{href:"https://shop.loxone.com/dede/bewegungsmelder.html",children:"Motion detector"})," and the ",(0,o.jsx)(n.a,{href:"https://shop.loxone.com/dede/loxone-touch.html",children:"Touch control"})," as well as our virtual bell button to the input of the button."]}),"\n",(0,o.jsx)(n.p,{children:"If one of these three elements is now triggered, a pulse is sent to the alarm input of the camera. We can now activate the alarm input again in the Alarm actions in the camera's WebUI:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(299845).A+"",width:"800",height:"540"})}),"\n",(0,o.jsxs)(n.p,{children:["Note that the relay works in the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/kb/inbetriebnahme-miniserver/",children:"Loxone Miniserver"})," ",(0,o.jsx)(n.strong,{children:"N.O."})," (",(0,o.jsx)(n.em,{children:"normally open"}),"). If you switch the input mode to N.C., you would receive a continuous alarm accordingly! Accept these settings and trigger one of the 3 inputs (motion detector, touch control or the virtual bell) and you will see an alarm input in the Logbook of your camera:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(770428).A+"",width:"800",height:"621"})}),"\n",(0,o.jsx)(n.p,{children:"The alarm input then triggers all alarm actions that you have activated in the Alarm actions in the camera's WebUI - in the example above, the Alarm server was contacted."}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.h2,{id:"use-the-loxone-miniserver-as-alarm-server",children:"Use the Loxone Miniserver as alarm server"}),"\n",(0,o.jsxs)(n.p,{children:["All INSTAR HD and Full HD cameras have an Alarm Server Function which can be used to contact an external alarm server via a web request (",(0,o.jsx)(n.em,{children:"HTTP GET"})," to the ",(0,o.jsx)(n.a,{href:"https://www.loxwiki.eu/display/LOX/REST+Webservice",children:"REST API of the server"}),") in case of an alarm on the camera."]}),"\n",(0,o.jsxs)(n.p,{children:["As receiver for the alarm server request of the camera we can use in the ",(0,o.jsx)(n.a,{href:"https://www.loxone.com/dede/produkte/loxone-config/",children:"Loxone Config"})," software a ",(0,o.jsx)(n.strong,{children:"Virtual input"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(571063).A+"",width:"800",height:"359"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["select the ",(0,o.jsx)(n.strong,{children:"Virtual inputs"})," for this."]}),"\n",(0,o.jsxs)(n.li,{children:["click on ",(0,o.jsx)(n.strong,{children:"Virtual input"})," to create a new one."]}),"\n",(0,o.jsx)(n.li,{children:"give the new input a name - this will be needed afterwards for the alarm server request (you should use a simple name, without spaces - or special characters)."}),"\n",(0,o.jsx)(n.li,{children:"drag the new input onto the desktop."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can now connect the new input to anything you want to trigger by the alarm event on the camera. We will use the bell/Intercom we created in a ",(0,o.jsx)(n.a,{href:"#display-your-camera-video-on-alarm",children:"previous step"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(911694).A+"",width:"800",height:"371"})}),"\n",(0,o.jsxs)(n.p,{children:["Connect the input to the input of the ",(0,o.jsx)(n.em,{children:"Intercom Module"}),", save the configuration and transfer it to the Loxone Miniserver."]}),"\n",(0,o.jsxs)(n.p,{children:["To use this input, we must now configure the Alarm Server on the camera. Therefore we have to know that the ",(0,o.jsx)(n.strong,{children:"Virtual Input"})," in the Loxone Miniserver can be reached via the ",(0,o.jsx)(n.a,{href:"https://www.loxwiki.eu/display/LOX/REST+Webservice",children:"REST API"})," under the path ",(0,o.jsx)(n.code,{children:"/dev/sps/io/<Name of the Virtual Input>/"}),". This path must be preceded by the IP address of the Loxone Miniserver - e.g. ",(0,o.jsx)(n.code,{children:"192.168.2.58"})," - and the state we want to switch the input to must be appended at the end:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"http://192.168.2.58/dev/sps/io/alarmserver/ON"})," (permanently on)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"http://192.168.2.58/dev/sps/io/alarmserver/OFF"})," (permanently off)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"http://192.168.2.58/dev/sps/io/alarmserver/Pulse"})," (briefly on and then off again)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["We want the camera to send a pulse to the alarm server only for a short time and it will immediately jump back into the ",(0,o.jsx)(n.strong,{children:"OFF state"})," and ",(0,o.jsx)(n.em,{children:"armed"})," again for the next alarm. We therefore select the last of the three commands above and enter it into the Web interface of our camera:"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(701081).A+"",width:"800",height:"683"})}),"\n",(0,o.jsx)(n.p,{children:"Please note that you have to enter the login below to connect to the miniserver via Loxone Config!"}),"\n",(0,o.jsxs)(n.p,{children:["Accept these settings and trigger an alarm on the camera - e.g. with the ",(0,o.jsx)(n.a,{href:"#example-1-triggering-an-alarm",children:"virtual button we created before"}),":"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Loxone Homeautomation",src:t(104176).A+"",width:"800",height:"807"})}),"\n",(0,o.jsxs)(n.p,{children:["The alarm is triggered on the camera and the alarm server is contacted. The Loxone Miniserver receives the message and activates the intercom - on all screens where the ",(0,o.jsx)(n.a,{href:"#smart-home-app-and-webui",children:"Loxone WebUI or App"})," is opened, the live video of the triggering camera is shown to you immediately."]})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},752750:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_01-4972e9848766cd5a21965f66a33a3481.png"},464229:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_02-0cd9d3401931bb00a018dcb66222fac6.png"},228316:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_03-9e3b2c8df03eb022e55f4a451e38c7d9.png"},125715:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_04-af099c19c8a0f4798fa4eb13bb9e3a4d.png"},393802:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_05-a3b0a7733ed796a57084ccbe33833329.png"},551233:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_06-1ddbcfcce7964702e836f3f7e33a82fc.png"},330104:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_07-cca325899a58954f2717a918d9e7f95d.png"},4911:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_08-5f892198c02a952dc094c31ad9d82630.png"},423366:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_09-aa9b29db7103ee6d79a716342bc74221.png"},599628:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_10-cc1cd0714f69e8446d356c0d7ceb8432.png"},968725:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_11-13cd22153d099857a6ee23b152770f47.png"},801374:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_12-6641415661cb0953373085246c8667ac.png"},519687:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_13-673981e79c6a7dafe6dce70e3071b391.png"},244520:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_14-5ad258cf46b02eed13bd5a6662171347.png"},142385:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_15-95dadd620e95660d5059ac2379ca14be.png"},728570:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_16-a8cb4df3b2f4c7cfb2bc3f0635724bca.png"},529795:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_17-287679898e02880c78b5ad4da3fdd414.png"},72132:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_18-e3b492a4426d92f2b3a3418b283c1bd6.png"},312077:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_19-851550bd1d90f5a2b58fa7de330edd99.png"},264161:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_20-6dea0473a51daa8e6b8a1865e1cd4cc3.png"},779544:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_21-eff7c3117e52255c976f32651585ab19.png"},954035:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_22-31a850090e4db56409dbb368fb7be772.png"},315178:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_23-d45bfaebb1fc86b82d4d9e6091574ba4.png"},299845:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_24-07e12660faf4782b6851ea4338c05a8e.png"},770428:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_25-883ac14cb4624ec93a2eaf9315f96458.png"},571063:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_26-5d52bc9b75a98498456148db03bec47b.png"},911694:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_27-c35fadde2eaeddb8d0e5081999585c13.png"},701081:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_28-5fd9d2977e90f5d809f702e31c8b6a10.png"},104176:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/Loxone_29-4da8f3a4d36c527636634ff76811eca7.png"},662862:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-b17d122b92f3c02ea96be5995443c013.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(296540);const i={},a=o.createContext(i);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);