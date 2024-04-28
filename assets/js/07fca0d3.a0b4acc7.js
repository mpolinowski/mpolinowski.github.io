"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[54097],{432221:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(474848),t=r(28453);const a={sidebar_position:9020,slug:"2020-10-25",title:"HashiCorp Packer with Virtualbox (Autoinstall)",authors:"mpolinowski",tags:["LINUX","Packer"]},i=void 0,o={id:"DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/index",title:"HashiCorp Packer with Virtualbox (Autoinstall)",description:"TST, Hong Kong",source:"@site/docs/DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/index.md",sourceDirName:"DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall",slug:"/DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/2020-10-25",permalink:"/docs/DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/2020-10-25",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2020-10-25--hashicorp-packer-and-virtualbox-autoinstall/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Packer",permalink:"/docs/tags/packer"}],version:"current",sidebarPosition:9020,frontMatter:{sidebar_position:9020,slug:"2020-10-25",title:"HashiCorp Packer with Virtualbox (Autoinstall)",authors:"mpolinowski",tags:["LINUX","Packer"]},sidebar:"tutorialSidebar",previous:{title:"HashiCorp Packer Provisioning",permalink:"/docs/DevOps/Hashicorp/2020-10-26--hashicorp-packer-provisioner/2020-10-26"},next:{title:"HashiCorp Packer with Virtualbox (Preseed)",permalink:"/docs/DevOps/Hashicorp/2020-10-24--hashicorp-packer-and-virtualbox-preseed/2020-10-24"}},l={},c=[{value:"Preparation",id:"preparation",level:2},{value:"apt.sh",id:"aptsh",level:3},{value:"cleanup.sh",id:"cleanupsh",level:3},{value:"Template File",id:"template-file",level:2}];function u(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"TST, Hong Kong",src:r(992651).A+"",width:"1500",height:"622"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"#preparation",children:"Preparation"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#aptsh",children:"apt.sh"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#cleanupsh",children:"cleanup.sh"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"#template-file",children:"Template File"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"preparation",children:"Preparation"}),"\n",(0,n.jsxs)(s.p,{children:["We\u2019re using the new AutoInstall method for Ubuntu 20.04. Previous versions use debian-installer preseeding, but that method didn\u2019t immediately work with the new ISO. You must also set the ",(0,n.jsx)(s.code,{children:"http_directory"})," configuration option to specify which directory on your filesystem hosts the files you want the HTTP server to serve. We have a directory called ubuntu-20.04 within that directory, and that in turn contains a user-data file which contains our AutoInstall config. I also found that AutoInstall expects a file called meta-data to be present, although it doesn\u2019t require any content so I simply have an empty file called meta-data alongside user-data."]}),"\n",(0,n.jsx)(s.p,{children:"Our user-data file looks like this"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'#cloud-config\r\nautoinstall:\r\n  version: 1\r\n  apt:\r\n    geoip: true\r\n    preserve_sources_list: false\r\n    primary:\r\n    - arches: [amd64, i386]\r\n      uri: http://gb.archive.ubuntu.com/ubuntu\r\n    - arches: [default]\r\n      uri: http://ports.ubuntu.com/ubuntu-ports\r\n  identity:\r\n    hostname: ubuntu2004\r\n    username: vagrant\r\n    password: <encrypted password>\r\n  ssh:\r\n    allow-pw: true\r\n    install-server: true\r\n  locale: en_US\r\n  keyboard: \r\n    layout: gb\r\n  storage:\r\n    layout:\r\n      name: direct\r\n    config:\r\n      - type: disk\r\n        id: disk0\r\n        match:\r\n          size: largest\r\n      - type: partition\r\n        id: boot-partition\r\n        device: disk0\r\n        size: 500M\r\n      - type: partition\r\n        id: root-partition\r\n        device: disk0\r\n        size: -1\r\n  late-commands:\r\n    - "echo \'Defaults:vagrant !requiretty\' > /target/etc/sudoers.d/vagrant"\r\n    - "echo \'vagrant ALL=(ALL) NOPASSWD: ALL\' >> /target/etc/sudoers.d/vagrant"\r\n    - "chmod 440 /target/etc/sudoers.d/vagrant"\n'})}),"\n",(0,n.jsx)(s.p,{children:"Note that the vagrant bits are somewhat unique to us. We create a user called vagrant as part of the install. That\u2019s so we can use this image as a vagrant box later on. Note also at the end that we add vagrant to the sudo config and ensure that it doesn\u2019t require a password to run sudo commands. This ensures that when the image is used in vagrant, it doesn\u2019t prompt for a password before running a command with root privileges."}),"\n",(0,n.jsx)(s.p,{children:"Then we come to the provisioners. For this base image, we run two scripts, one to update all the packages, and the other cleans up a few things:"}),"\n",(0,n.jsx)(s.h3,{id:"aptsh",children:"apt.sh"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"sudo apt-get update\r\nsudo apt upgrade -y\r\nsudo apt install apt-transport-https -y\n"})}),"\n",(0,n.jsx)(s.h3,{id:"cleanupsh",children:"cleanup.sh"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'sudo apt-get clean\r\nFILE=/etc/cloud/cloud.cfg.d/50-curtin-networking.cfg\r\nif test -f "$FILE"; then\r\n  sudo rm $FILE\r\nfi\r\n\r\nFILE=/etc/cloud/cloud.cfg.d/curtin-preserve-sources.cfg\r\nif test -f "$FILE"; then\r\n  sudo rm $FILE\r\nfi\r\n\r\nFILE=/etc/cloud/cloud.cfg.d/subiquity-disable-cloudinit-networking.cfg\r\nif test -f "$FILE"; then\r\n  sudo rm $FILE\r\nfi\n'})}),"\n",(0,n.jsx)(s.h2,{id:"template-file",children:"Template File"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\r\n  "builders": [\r\n    {\r\n      "type": "virtualbox-iso",\r\n      "vboxmanage": [\r\n        [ "modifyvm", "{{.Name}}", "--memory", "{{ user `ram` }}" ],\r\n        [ "modifyvm", "{{.Name}}", "--vram", "36" ],\r\n        [ "modifyvm", "{{.Name}}", "--cpus", "{{ user `cpus` }}" ]\r\n      ],\r\n      "guest_os_type": "Ubuntu_64",\r\n      "disk_size": "{{ user `virtualbox_disk_size` }}",\r\n      "headless": "{{ user `headless` }}",\r\n      "iso_url": "{{ user `iso_url` }}",\r\n      "iso_checksum": "{{ user `iso_checksum` }}",\r\n      "iso_checksum_type": "sha256",\r\n      "vm_name": "ubuntu-2004",\r\n      "boot_command": [\r\n        " <wait><enter><wait>",\r\n        "<f6><esc>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs><bs><bs><bs><bs><bs><bs><bs>",\r\n        "<bs><bs><bs>",\r\n        "/casper/vmlinuz ",\r\n        "initrd=/casper/initrd ",\r\n        "autoinstall ",\r\n        "ds=nocloud-net;s=http://{{.HTTPIP}}:{{.HTTPPort}}/ubuntu-20.04/ ",\r\n        "<enter>"\r\n      ],\r\n      "boot_wait": "5s",\r\n      "http_directory": "../scripts/ubuntu/http",\r\n      "shutdown_command": "sudo systemctl poweroff",\r\n      "ssh_password": "vagrant",\r\n      "ssh_port": 22,\r\n      "ssh_username": "vagrant",\r\n      "ssh_timeout": "10000s",\r\n      "ssh_handshake_attempts": "30",\r\n      "guest_additions_mode": "disable",\r\n      "format": "ova"\r\n    }\r\n  ],\r\n  "provisioners": [\r\n      {\r\n        "type": "shell",\r\n        "execute_command": "echo \'vagrant\' | {{.Vars}} sudo -S -E sh -eux \'{{.Path}}\'",\r\n        "scripts": [\r\n            "../scripts/ubuntu/apt.sh",\r\n            "../scripts/ubuntu/cleanup.sh"\r\n        ]\r\n      }\r\n  ],\r\n  "variables": {\r\n    "headless": "true",\r\n    "iso_checksum": "<Checksum of ISO using the algorithm specified in iso_checksum_type above>",\r\n    "iso_url": "<URL to ISO>",\r\n    "version": "0",\r\n    "ram": "2048",\r\n    "cpus": "2",\r\n    "virtualbox_disk_size": "8192",\r\n    "vmware_disk_size": "8291"\r\n  }\r\n}\n'})})]})}function d(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},992651:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-d8b333d1f9ddf34ac7392aef86b14c83.jpg"},28453:(e,s,r)=>{r.d(s,{R:()=>i,x:()=>o});var n=r(296540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);