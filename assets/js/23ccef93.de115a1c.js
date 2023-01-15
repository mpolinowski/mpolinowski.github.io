"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[69391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),h=p(n),u=s,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function u(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,o[1]=a;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},71517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=n(87462),s=(n(67294),n(3905));const i={sidebar_position:9060,slug:"2019-06-10",title:"Windows Server 2019 - Scripting and Sharing",authors:"mpolinowski",tags:["Windows"]},o=void 0,a={unversionedId:"DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/index",id:"DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/index",title:"Windows Server 2019 - Scripting and Sharing",description:"Wan Chai, Hong Kong",source:"@site/docs/DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/index.mdx",sourceDirName:"DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing",slug:"/DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/2019-06-10",permalink:"/docs/DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/2019-06-10",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Windows/2019-06-10--windows-server-2019-scripting-and-sharing/index.mdx",tags:[{label:"Windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2019-06-10",title:"Windows Server 2019 - Scripting and Sharing",authors:"mpolinowski",tags:["Windows"]},sidebar:"tutorialSidebar",previous:{title:"Windows Server 2019 - Active Directory Installation",permalink:"/docs/DevOps/Windows/2019-06-11--windows-server-2019-active-directory/2019-06-11"},next:{title:"Getting Started with Windows Server 2019",permalink:"/docs/DevOps/Windows/2019-06-09--setting-up-windows-server-2019/2019-06-09"}},l={},p=[{value:"Windows Powershell",id:"windows-powershell",level:2},{value:"Running Powershell Commands",id:"running-powershell-commands",level:3},{value:"Powershell Scripting",id:"powershell-scripting",level:3},{value:"Creating a Samba Share",id:"creating-a-samba-share",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Wan Chai, Hong Kong",src:n(58480).Z,width:"1500",height:"654"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#windows-powershell"},"Windows Powershell"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#running-powershell-commands"},"Running Powershell Commands")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#powershell-scripting"},"Powershell Scripting"))))),(0,s.kt)("h2",{id:"windows-powershell"},"Windows Powershell"),(0,s.kt)("p",null,"We can access the Microsoft Windows Powershell directly from the ",(0,s.kt)("a",{parentName:"p",href:"/docs/DevOps/Windows/2019-06-09--setting-up-windows-server-2019/2019-06-09#windows-admin-center"},"Windows Admin Center"),". Connect the Admin Center to your Windows Server and search for ",(0,s.kt)("strong",{parentName:"p"},"Powershell")," under ",(0,s.kt)("strong",{parentName:"p"},"Tools")," you will be asked to log in with your account."),(0,s.kt)("h3",{id:"running-powershell-commands"},"Running Powershell Commands"),(0,s.kt)("p",null,"You can all ",(0,s.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/scripting/table-of-basic-powershell-commands/"},"Powershell Commands")," directly from this web interface, e.g. creating a new user on your server with ",(0,s.kt)("inlineCode",{parentName:"p"},"New-LocalUser -Name Peter"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(79605).Z,width:"1273",height:"792"})),(0,s.kt)("p",null,"Search for ",(0,s.kt)("strong",{parentName:"p"},"Local user & groups")," under tools inside the Admin Center and ",(0,s.kt)("em",{parentName:"p"},"right-ctrl-click")," it to open the user management in a new tab. You will see that the user has been created:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(62108).Z,width:"1275",height:"392"})),(0,s.kt)("p",null,"Working with the filesystem works the same way - listing directories, creating folders and files and copying them to other locations:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-ChildItem -Path C:\\\nNew-Item -Path 'C:\\scripts' -ItemType Directory\nNew-Item -Path 'C:\\scripts\\test' -ItemType Directory\nNew-Item -Path 'C:\\scripts\\test\\helloworld.ps1' -ItemType File\nCopy-Item -Path 'C:\\scripts\\test\\helloworld.ps1' -Destination 'C:\\scripts\\hello.ps1'\nRemove-Item -Path 'C:\\scripts\\test\\helloworld.ps1'\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(8406).Z,width:"1273",height:"953"})),(0,s.kt)("p",null,"Run the following commands to get an overview over all processes and services:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"Get-Process\nGet-Service\n")),(0,s.kt)("h3",{id:"powershell-scripting"},"Powershell Scripting"),(0,s.kt)("p",null,"We can also run local shell scripts through Powershell on our server. Those scripts can be stored on our server with the ",(0,s.kt)("inlineCode",{parentName:"p"},".ps1")," file extension. Here is a ",(0,s.kt)("strong",{parentName:"p"},"Hello World"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"echo 'Hello World'\n\nsleep 10\n")),(0,s.kt)("p",null,"Save the file with the name ",(0,s.kt)("inlineCode",{parentName:"p"},"helloworld.ps1"),", navigate your into the directory and run the script as ",(0,s.kt)("inlineCode",{parentName:"p"},".\\helloworld.ps1"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(39138).Z,width:"1287",height:"413"})),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Hello World")," will be displayed for 10 seconds and then disappear."),(0,s.kt)("p",null,"An example for a useful shell script would be:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-powershell"},"Class DirToBackup\n{\n    [String]$path\n    DirToBackup([String]$path) {\n      $this.path = $path\n    }\n}\n$defaultListOfExcluded = 'C:\\inetpub\\wwwroot\\just_testing\\listOfBackupExcluded.txt'\n$pathFromPrefix = 'C:\\inetpub\\wwwroot\\just_testing\\test_data\\'\n$pathToPrefix = 'C:\\inetpub\\wwwroot\\just_testing\\backup_data\\'\nWrite-Output 'Plug external disk drive.'\npause\n$dirsToBackup = @(\n    New-Object DirToBackup 'backup'\n    New-Object DirToBackup 'development'\n)\n$dirsToBackup | ForEach-Object {\n    mkdir -Path $($pathToPrefix + $_.path) -Force\n    xcopy $($pathFromPrefix + $_.path) $($pathToPrefix + $_.path) /D /S /Y /H /EXCLUDE:$defaultListOfExcluded\n}\npause\n")),(0,s.kt)("p",null,"The file ",(0,s.kt)("inlineCode",{parentName:"p"},"listOfBackupExcluded.txt")," in the same directory as our script lists all files, file extensions and directories that we want to exclude from our backup:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"\\build\\\n\\.gitignore\\\n.secret\\\n\\notes\n\\node_modules\\\n")),(0,s.kt)("p",null,"This will exclude the directories ",(0,s.kt)("inlineCode",{parentName:"p"},"build")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules"),", the ",(0,s.kt)("inlineCode",{parentName:"p"},".gitignore")," file, every file with the extension ",(0,s.kt)("inlineCode",{parentName:"p"},".secret")," and files who's name starts with ",(0,s.kt)("inlineCode",{parentName:"p"},"notes"),"."),(0,s.kt)("p",null,"The script will then copy the content of the directory ",(0,s.kt)("inlineCode",{parentName:"p"},"test_data")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"backup_data"),". Ideally ",(0,s.kt)("inlineCode",{parentName:"p"},"backup_data")," has to be on an external drive - so we added a prompt for the user to plugin the backup drive. But for testing we will leave both directories on the same harddrive. The main part of the script is a loop that goes through all dirsToBackup elements and executes mkdir and xcopy functions. mkdir creates directories in the target location. Flag -Force makes possible to not error the script when directory\u2019s already exists."),(0,s.kt)("p",null,"There are few flags that are very important:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"/D")," \u2014 Copies only those files whose source time is newer than the destination time."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"/S")," \u2014 Copies directories and subdirectories except empty ones."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"/Y")," \u2014 Suppresses prompting to confirm you want to overwrite an\nexisting destination file."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"/H")," \u2014 Copies hidden and system files also.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(53811).Z,width:"1274",height:"491"})),(0,s.kt)("h2",{id:"creating-a-samba-share"},"Creating a Samba Share"),(0,s.kt)("p",null,"This time we want to use the ",(0,s.kt)("a",{parentName:"p",href:"https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps"},"Microsoft Remote Desktop App")," to connect to our Windows Server and enable the ",(0,s.kt)("strong",{parentName:"p"},"Samba Share Functionality"),". To be able to connect we first have to ensure that ",(0,s.kt)("strong",{parentName:"p"},"Remote Desktop")," is enabled on our server:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(5029).Z,width:"1275",height:"348"})),(0,s.kt)("p",null,"Now we can ",(0,s.kt)("strong",{parentName:"p"},"Add a Desktop")," on our host machine inside ",(0,s.kt)("strong",{parentName:"p"},"Remote Desktop"),". Type in the server name or IP address and add the user account you want to use to connect to the remote server:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(53028).Z,width:"1196",height:"666"})),(0,s.kt)("p",null,"Then click to connect to the remote server. If the connection fails, try to ping your server from your command prompt, e.g. ",(0,s.kt)("inlineCode",{parentName:"p"},"ping WINSERVER2019"),". You should be able to get a ping here - if not you need to troubleshoot your network:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(67711).Z,width:"1197",height:"408"})),(0,s.kt)("p",null,"Accept the self-signed certificate we used for our server and you should be able to see the server desktop in front of you:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(27695).Z,width:"1326",height:"698"})),(0,s.kt)("p",null,"On the server right-click the directory you want to share, choose ",(0,s.kt)("strong",{parentName:"p"},"Properties"),", ",(0,s.kt)("strong",{parentName:"p"},"Sharing")," ",(0,s.kt)("strong",{parentName:"p"},"Advanced Sharing"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(47016).Z,width:"1124",height:"627"})),(0,s.kt)("p",null,"Name the share and click on ",(0,s.kt)("strong",{parentName:"p"},"Permissions"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(92425).Z,width:"1120",height:"628"})),(0,s.kt)("p",null,"Add the user you want to use to connect to the share:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(22377).Z,width:"1120",height:"628"})),(0,s.kt)("p",null,"And give him the ",(0,s.kt)("strong",{parentName:"p"},"Full Control")," over the share:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(25043).Z,width:"1123",height:"629"})),(0,s.kt)("p",null,"Everything is set up and you should be able to discover the share from your host machine and connect to it with the user you specified:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(31124).Z,width:"1124",height:"631"})),(0,s.kt)("p",null,"Back on your host machine right-click ",(0,s.kt)("strong",{parentName:"p"},"This PC")," and click on ",(0,s.kt)("strong",{parentName:"p"},"Add a network location")," and follow the assistant:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(52066).Z,width:"867",height:"382"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(77941).Z,width:"1198",height:"740"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(21463).Z,width:"1193",height:"742"})),(0,s.kt)("p",null,"Type in the network address as follows:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"2 x ",(0,s.kt)("inlineCode",{parentName:"li"},"\\")),(0,s.kt)("li",{parentName:"ol"},"Your server name in capital letters, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"WINSERVER2019")," followed by a ",(0,s.kt)("inlineCode",{parentName:"li"},"\\")),(0,s.kt)("li",{parentName:"ol"},"The name you gave the share, e.g. ",(0,s.kt)("inlineCode",{parentName:"li"},"WinServer2019"))),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(88035).Z,width:"1194",height:"731"})),(0,s.kt)("p",null,"After confirming you will be asked to sign in - use the user login that you specified in the share options and click on ",(0,s.kt)("strong",{parentName:"p"},"Finish"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(31073).Z,width:"1192",height:"743"})),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(75755).Z,width:"1196",height:"741"})),(0,s.kt)("p",null,"The share should now be listed under ",(0,s.kt)("strong",{parentName:"p"},"Network"),":"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Windows Server 2019",src:n(68244).Z,width:"1199",height:"608"})))}c.isMDXComponent=!0},79605:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_01-a9e607eb3e0ddc1d06d34519b4dc9bec.png"},62108:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_02-97a720a8e3b8902ac795d203cdd64e7d.png"},8406:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_03-c59739b1bcef07c3c1f4d9361be5e817.png"},39138:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_04-f07efae32e6074f9e87e1d22cc8897cb.png"},53811:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_05-79dfdeefc1db5949cccce2b19c988419.png"},5029:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_06-ead147e272159a1bb2305aee88365596.png"},53028:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_07-34be4f6e32b14658e3777cf61a4e02fa.png"},67711:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_08-5bbbb7f5f6ac79d5834c9a3e49875068.png"},27695:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_10-b893467815a005e85791b272fa3b2e85.png"},47016:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_11-562cfc2daf31235deda594561b5f6c35.png"},92425:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_12-38d8fcf258620036402aaf06d1ab5d87.png"},22377:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_13-7746eb1f3b7ba1c192e9d3f5ff144f2a.png"},25043:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_14-4386fd314caa7f225ca7c79d299522e5.png"},31124:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_15-1528d206810188971ee9fa34f4d2cb95.png"},52066:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_16-62402880b516cf16e493917349cb9b5a.png"},77941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_17-3e1848f51b1efba781d07a69207dd9a8.png"},21463:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_18-d1ddfa78e93d68016505cec72cbb8df2.png"},88035:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_19-3db238095611d7e49c2444bd53cb2173.png"},31073:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_20-d544555777f5d3d8f608377be4d8fe9e.png"},75755:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_21-b973c221f4683854ed43e1eb239cfbad.png"},68244:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/Windows_Server_2019_22-1ddab52487ced9fedcb07e8102f965ec.png"},58480:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-fd6d_gj62544ethg4_d-4d3b4974f45b02cf184cd6862b4ce29a.jpg"}}]);