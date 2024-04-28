"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[5819],{125570:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var o=i(474848),t=i(28453);const s={sidebar_position:5925,slug:"2024-03-21",title:"GrapheneOS Mobile",authors:"mpolinowski",tags:["LINUX"],description:"Installing GrapheneOS on a Google Pixel 7"},l="GraphenOS",r={id:"DevOps/Linux/2024-03-21--installing-grapheneos-pixel7/index",title:"GrapheneOS Mobile",description:"Installing GrapheneOS on a Google Pixel 7",source:"@site/docs/DevOps/Linux/2024-03-21--installing-grapheneos-pixel7/index.md",sourceDirName:"DevOps/Linux/2024-03-21--installing-grapheneos-pixel7",slug:"/DevOps/Linux/2024-03-21--installing-grapheneos-pixel7/2024-03-21",permalink:"/docs/DevOps/Linux/2024-03-21--installing-grapheneos-pixel7/2024-03-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2024-03-21--installing-grapheneos-pixel7/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:5925,frontMatter:{sidebar_position:5925,slug:"2024-03-21",title:"GrapheneOS Mobile",authors:"mpolinowski",tags:["LINUX"],description:"Installing GrapheneOS on a Google Pixel 7"},sidebar:"tutorialSidebar",previous:{title:"Linux",permalink:"/docs/category/linux"},next:{title:"vsftp on Ubuntu",permalink:"/docs/DevOps/Linux/2024-01-08--vsftp-ubuntu/2024-01-08"}},a={},c=[{value:"Installation on a Pixel 7",id:"installation-on-a-pixel-7",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Guangzhou, China",src:i(776048).A+"",width:"1500",height:"622"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"#graphenos",children:"GraphenOS"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#installation-on-a-pixel-7",children:"Installation on a Pixel 7"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h1,{id:"graphenos",children:"GraphenOS"}),"\n",(0,o.jsx)(n.h2,{id:"installation-on-a-pixel-7",children:"Installation on a Pixel 7"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Enable the developer options menu by going to Settings > About phone/tablet and repeatedly pressing the Build number menu entry until developer mode is enabled."}),"\n",(0,o.jsx)(n.li,{children:"go to Settings > System > Developer options and toggle on the OEM unlocking setting. On device model variants (SKUs) which support being sold as locked devices by carriers, enabling OEM unlocking requires internet access so that the stock OS can check if the device was sold as locked by a carrier."}),"\n",(0,o.jsxs)(n.li,{children:["Obtaining fastboot on Arch Linux by installing ",(0,o.jsx)(n.code,{children:"android-tools"})," with ",(0,o.jsx)(n.code,{children:"sudo pacman -S android-tools"}),", ",(0,o.jsx)(n.code,{children:"fastboot --version fastboot version 34.0.4-android-tools"})]}),"\n",(0,o.jsxs)(n.li,{children:["Flashing as non-root on Arch Linux requires udev: ",(0,o.jsx)(n.code,{children:"sudo pacman -S android-udev"})]}),"\n",(0,o.jsx)(n.li,{children:"You need to boot your device into the bootloader interface. To do this, you need to hold the volume down button while the device boots. The easiest approach is to reboot the device and begin holding the volume down button until it boots up into the bootloader interface."}),"\n",(0,o.jsxs)(n.li,{children:["Unlock the bootloader to allow flashing the OS and firmware: ",(0,o.jsx)(n.code,{children:"fastboot flashing unlock"})," The command needs to be confirmed on the device and will wipe all data. Use one of the volume buttons to switch the selection to accepting it and the power button to confirm. ",(0,o.jsx)(n.code,{children:"OKAY [  0.009s] Finished. Total time: 0.009s"}),". ",(0,o.jsx)(n.strong,{children:"Do not"})," start the device - remain in bootloader until completely flashed."]}),"\n",(0,o.jsx)(n.li,{children:"Get the GraphenOS Image:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"curl -O https://releases.grapheneos.org/allowed_signers"})}),"\n",(0,o.jsxs)(n.li,{children:["Download the ",(0,o.jsx)(n.a,{href:"https://grapheneos.org/releases#panther-stable",children:"factory images"})," for the device from the releases page. For example, to download the ",(0,o.jsx)(n.code,{children:"VERSION"})," release for a device with the codename ",(0,o.jsx)(n.code,{children:"DEVICE_NAME"}),":","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"curl -O https://releases.grapheneos.org/DEVICE_NAME-factory-VERSION.zip"})," => ",(0,o.jsx)(n.code,{children:"curl -O https://releases.grapheneos.org/panther-factory-2024031400.zip"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"curl -O https://releases.grapheneos.org/DEVICE_NAME-factory-VERSION.zip.sig"})," => ",(0,o.jsx)(n.code,{children:"curl -O https://releases.grapheneos.org/panther-factory-2024031400.zip.sig"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"8",children:["\n",(0,o.jsx)(n.li,{children:"Verify the factory images using the signature:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'ssh-keygen -Y verify -f allowed_signers -I contact@grapheneos.org -n "factory images" -s DEVICE_NAME-factory-VERSION.zip.sig < DEVICE_NAME-factory-VERSION.zip'})," => ",(0,o.jsx)(n.code,{children:'ssh-keygen -Y verify -f allowed_signers -I contact@grapheneos.org -n "factory images" -s panther-factory-2024031400.zip.sig < panther-factory-2024031400.zip'}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:['Good "factory images" signature for ',(0,o.jsx)(n.a,{href:"mailto:contact@grapheneos.org",children:"contact@grapheneos.org"})," with ED25519 key ",(0,o.jsx)(n.code,{children:"SHA256:AhgHif0mei+9aNyKLfMZBh2yptHdw/aN7Tlh/j2eFwM"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"9",children:["\n",(0,o.jsx)(n.li,{children:"The initial install will be performed by flashing the factory images. This will replace the existing OS installation and wipe all the existing data."}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"unzip DEVICE_NAME-factory-VERSION.zip"})," => ",(0,o.jsx)(n.code,{children:"unzip panther-factory-2024031400.zip"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"cd DEVICE_NAME-factory-VERSION"})," => ",(0,o.jsx)(n.code,{children:"cd panther-factory-2024031400"})]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"10",children:["\n",(0,o.jsx)(n.li,{children:"Flash the images with the flash-all script in the directory:"}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"./flash-all.sh"})," => ",(0,o.jsx)(n.code,{children:"Finished. Total time: 110.445s. Rebooting into bootloader"})]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"11",children:["\n",(0,o.jsx)(n.li,{children:"GrapheneOS did not boot. On first attempt it hang after the Google Logo. After the automatic reboot you have the option to do a factory reset - this solved it."}),"\n",(0,o.jsxs)(n.li,{children:["Reboot into the boot loader and lock it again with ",(0,o.jsx)(n.code,{children:"fastboot flashing lock"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},776048:(e,n,i)=>{i.d(n,{A:()=>o});const o=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-a6ea9c37592199bec87ef0a289a7fd91.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var o=i(296540);const t={},s=o.createContext(t);function l(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);