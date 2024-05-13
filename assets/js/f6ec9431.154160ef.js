"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[92564],{843616:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var t=n(474848),s=n(28453);const o={sidebar_position:8e3,slug:"2020-10-13",title:"HDD Smart Tools for LINUX",authors:"mpolinowski",tags:["LINUX"]},l=void 0,i={id:"DevOps/Linux/2020-10-13--smarttools-centos/index",title:"HDD Smart Tools for LINUX",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Linux/2020-10-13--smarttools-centos/index.md",sourceDirName:"DevOps/Linux/2020-10-13--smarttools-centos",slug:"/DevOps/Linux/2020-10-13--smarttools-centos/2020-10-13",permalink:"/docs/DevOps/Linux/2020-10-13--smarttools-centos/2020-10-13",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2020-10-13--smarttools-centos/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8e3,frontMatter:{sidebar_position:8e3,slug:"2020-10-13",title:"HDD Smart Tools for LINUX",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Activating Root Login on Ubuntu 20.10",permalink:"/docs/DevOps/Linux/2020-10-20--activating-root-login-ubuntu-20-10/2020-10-20"},next:{title:"Installing FirewallD on CentOS 8",permalink:"/docs/DevOps/Linux/2020-01-07--centos8-firewalld/2020-01-05"}},a={},d=[{value:"SmartCTL",id:"smartctl",level:2},{value:"Check SMART Support Enabled",id:"check-smart-support-enabled",level:3},{value:"Check Supported Tests",id:"check-supported-tests",level:3},{value:"Self Test",id:"self-test",level:3},{value:"Short Test",id:"short-test",level:4},{value:"Check Tresholds",id:"check-tresholds",level:3},{value:"Long Test",id:"long-test",level:4},{value:"Dead Letter",id:"dead-letter",level:2}];function c(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Victoria Harbour, Hong Kong",src:n(443174).A+"",width:"1500",height:"509"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#smartctl",children:"SmartCTL"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#check-smart-support-enabled",children:"Check SMART Support Enabled"})}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#check-supported-tests",children:"Check Supported Tests"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#self-test",children:"Self Test"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#short-test",children:"Short Test"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"#check-tresholds",children:"Check Tresholds"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#long-test",children:"Long Test"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"#dead-letter",children:"Dead Letter"})}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"smartctl",children:"SmartCTL"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yum install smartmontools\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"Dependencies Resolved\r\n\r\n                                         Version    Repository           Size\r\n==============================================================================\r\n smartmontools                           x86_64     1:7.0-2.el7   base   546 k\r\nInstalling for dependencies:\r\n mailx                                   x86_64     12.5-19.el7   base   245 k\r\n\r\nTransaction Summary\r\n===============================================================================\r\n\r\nTotal download size: 791 k\r\nInstalled size: 2.4 M\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl --scan\r\n\r\n/dev/sda -d scsi # /dev/sda, SCSI device\n"})}),"\n",(0,t.jsx)(r.h3,{id:"check-smart-support-enabled",children:"Check SMART Support Enabled"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl /dev/sda -i\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF INFORMATION SECTION ===\r\nModel Family:     Hitachi Deskstar 7K3000\r\nDevice Model:     Hitachi HDS723020BLA642\r\nSerial Number:    MN1270FA069J4D\r\nLU WWN Device Id: 5 000cca 36ac2ddf7\r\nFirmware Version: MN6OA800\r\nUser Capacity:    2,000,398,934,016 bytes [2.00 TB]\r\nSector Size:      512 bytes logical/physical\r\nRotation Rate:    7200 rpm\r\nForm Factor:      3.5 inches\r\nDevice is:        In smartctl database [for details use: -P show]\r\nATA Version is:   ATA8-ACS T13/1699-D revision 4\r\nSATA Version is:  SATA 2.6, 6.0 Gb/s (current: 3.0 Gb/s)\r\nLocal Time is:    Tue Oct 13 08:54:04 2020 CEST\r\nSMART support is: Available - device has SMART capability.\r\nSMART support is: Enabled\n"})}),"\n",(0,t.jsx)(r.h3,{id:"check-supported-tests",children:"Check Supported Tests"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl /dev/sda -c\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF READ SMART DATA SECTION ===\r\nGeneral SMART Values:\r\nOffline data collection status:  (0x84) Offline data collection activity\r\n                                        was suspended by an interrupting command from host.\r\n                                        Auto Offline Data Collection: Enabled.\r\nSelf-test execution status:      (   0) The previous self-test routine completed\r\n                                        without error or no self-test has ever \r\n                                        been run.\r\nTotal time to complete Offline \r\ndata collection:                (19092) seconds.\r\nOffline data collection\r\ncapabilities:                    (0x5b) SMART execute Offline immediate.\r\n                                        Auto Offline data collection on/off support.\r\n                                        Suspend Offline collection upon new\r\n                                        command.\r\n                                        Offline surface scan supported.\r\n                                        Self-test supported.\r\n                                        No Conveyance Self-test supported.\r\n                                        Selective Self-test supported.\r\nSMART capabilities:            (0x0003) Saves SMART data before entering\r\n                                        power-saving mode.\r\n                                        Supports SMART auto save timer.\r\nError logging capability:        (0x01) Error logging supported.\r\n                                        General Purpose Logging supported.\r\nShort self-test routine \r\nrecommended polling time:        (   1) minutes.\r\nExtended self-test routine\r\nrecommended polling time:        ( 319) minutes.\r\nSCT capabilities:              (0x003d) SCT Status supported.\r\n                                        SCT Error Recovery Control supported.\r\n                                        SCT Feature Control supported.\r\n                                        SCT Data Table supported.\n"})}),"\n",(0,t.jsx)(r.p,{children:"Supported Test:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Offline surface scan supported."}),"\n",(0,t.jsx)(r.li,{children:"Self-test supported."}),"\n",(0,t.jsx)(r.li,{children:"No Conveyance Self-test supported."}),"\n",(0,t.jsx)(r.li,{children:"Selective Self-test supported."}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"self-test",children:"Self Test"}),"\n",(0,t.jsx)(r.p,{children:"Check Logs:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl -l selftest /dev/sda\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF READ SMART DATA SECTION ===\r\nSMART Self-test log structure revision number 1\r\nNum  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error\r\n# 1  Extended offline    Completed without error       00%     16237         -\r\n# 2  Extended offline    Completed without error       00%     16219         -\r\n# 3  Extended offline    Completed without error       00%     16199         -\r\n# 4  Extended offline    Completed without error       00%     16193         -\r\n# 5  Extended offline    Completed without error       00%     16176         -\r\n# 6  Short offline       Completed without error       00%     11338         -\r\n# 7  Short offline       Completed without error       00%     11315         -\r\n# 8  Short offline       Completed without error       00%     11290         -\r\n# 9  Short offline       Completed without error       00%     11266         -\r\n#10  Short offline       Completed without error       00%     11242         -\r\n#11  Short offline       Completed without error       00%     11218         -\r\n#12  Short offline       Completed without error       00%     11194         -\r\n#13  Short offline       Completed without error       00%     11170         -\r\n#14  Short offline       Completed without error       00%     11146         -\r\n#15  Short offline       Completed without error       00%     11122         -\r\n#16  Short offline       Completed without error       00%     11098         -\r\n#17  Short offline       Completed without error       00%     11074         -\r\n#18  Short offline       Completed without error       00%     11050         -\r\n#19  Short offline       Completed without error       00%     11026         -\r\n#20  Short offline       Completed without error       00%     11002         -\r\n#21  Short offline       Completed without error       00%     10978         -\n"})}),"\n",(0,t.jsx)(r.h4,{id:"short-test",children:"Short Test"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'smartctl -t short /dev/sda\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF OFFLINE IMMEDIATE AND SELF-TEST SECTION ===\r\nSending command: "Execute SMART Short self-test routine immediately in off-line mode".\r\nDrive command "Execute SMART Short self-test routine immediately in off-line mode" successful.\r\nTesting has begun.\r\nPlease wait 1 minutes for test to complete.\r\nTest will complete after Tue Oct 13 09:13:41 2020\r\n\r\nUse smartctl -X to abort test.\n'})}),"\n",(0,t.jsx)(r.p,{children:"Re-check the log:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"=== START OF READ SMART DATA SECTION ===\r\nSMART Self-test log structure revision number 1\r\nNum  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error\r\n# 1  Short offline       Completed without error       00%     51689         -\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"sudo smartctl -H /dev/sda"})," gives us a quick assesment ",(0,t.jsx)(r.strong,{children:"PASSED"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl -H /dev/sda\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF READ SMART DATA SECTION ===\r\nSMART overall-health self-assessment test result: PASSED\n"})}),"\n",(0,t.jsx)(r.h3,{id:"check-tresholds",children:"Check Tresholds"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl -a /dev/sda | less\r\n\r\nSMART Attributes Data Structure revision number: 16\r\nVendor Specific SMART Attributes with Thresholds:\r\nID# ATTRIBUTE_NAME          FLAG     VALUE WORST THRESH TYPE      UPDATED  WHEN_FAILED RAW_VALUE\r\n  1 Raw_Read_Error_Rate     0x000b   100   100   016    Pre-fail  Always       -       65536\r\n  2 Throughput_Performance  0x0005   135   135   054    Pre-fail  Offline      -       86\r\n  3 Spin_Up_Time            0x0007   225   225   024    Pre-fail  Always       -       255 (Average 255)\r\n  4 Start_Stop_Count        0x0012   100   100   000    Old_age   Always       -       24\r\n  5 Reallocated_Sector_Ct   0x0033   100   100   005    Pre-fail  Always       -       0\r\n  7 Seek_Error_Rate         0x000b   100   100   067    Pre-fail  Always       -       0\r\n  8 Seek_Time_Performance   0x0005   138   138   020    Pre-fail  Offline      -       25\r\n  9 Power_On_Hours          0x0012   093   093   000    Old_age   Always       -       51690\r\n 10 Spin_Retry_Count        0x0013   100   100   060    Pre-fail  Always       -       0\r\n 12 Power_Cycle_Count       0x0032   100   100   000    Old_age   Always       -       24\r\n192 Power-Off_Retract_Count 0x0032   100   100   000    Old_age   Always       -       622\r\n193 Load_Cycle_Count        0x0012   100   100   000    Old_age   Always       -       622\r\n194 Temperature_Celsius     0x0002   146   146   000    Old_age   Always       -       41 (Min/Max 25/54)\r\n196 Reallocated_Event_Count 0x0032   100   100   000    Old_age   Always       -       0\r\n197 Current_Pending_Sector  0x0022   100   100   000    Old_age   Always       -       0\r\n198 Offline_Uncorrectable   0x0008   100   100   000    Old_age   Offline      -       0\r\n199 UDMA_CRC_Error_Count    0x000a   200   200   000    Old_age   Always       -       2\n"})}),"\n",(0,t.jsxs)(r.p,{children:["THRESH is manufacturer defined threshold, and in most cases if VALUE goes below this threshold disk is a toast and should be replaced immediately. ",(0,t.jsx)(r.a,{href:"http://static.googleusercontent.com/media/research.google.com/en//archive/disk_failures.pdf",children:"s. Failure Trends in a Large Disk Drive Population"}),"."]}),"\n",(0,t.jsx)(r.h4,{id:"long-test",children:"Long Test"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:'smartctl -t long /dev/sda\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF OFFLINE IMMEDIATE AND SELF-TEST SECTION ===\r\nSending command: "Execute SMART Extended self-test routine immediately in off-line mode".\r\nDrive command "Execute SMART Extended self-test routine immediately in off-line mode" successful.\r\nTesting has begun.\r\nPlease wait 319 minutes for test to complete.\r\nTest will complete after Tue Oct 13 15:02:09 2020\r\n\r\nUse smartctl -X to abort test.\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Please wait 319 minutes for test to complete."})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"smartctl -l selftest /dev/sda\r\n\r\nsmartctl 7.0 2018-12-30 r4883 [x86_64-linux-3.10.0-1127.19.1.el7.x86_64] (local build)\r\nCopyright (C) 2002-18, Bruce Allen, Christian Franke, www.smartmontools.org\r\n\r\n=== START OF READ SMART DATA SECTION ===\r\nSMART Self-test log structure revision number 1\r\nNum  Test_Description    Status                  Remaining  LifeTime(hours)  LBA_of_first_error\r\n# 1  Extended offline    Completed without error       00%     51696         -\r\n# 2  Short offline       Completed without error       00%     51690         -\n"})}),"\n",(0,t.jsx)(r.p,{children:"The drive does not contain any errors."}),"\n",(0,t.jsx)(r.h2,{id:"dead-letter",children:"Dead Letter"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"ls -la\r\n-rw-r--r--   1 root mail 6.7K Sep 10 18:22 dead.letter\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"cat dead.letter\r\n\r\nThis is an automatically generated mail message from mdadm\r\nrunning on CentOS-72-64-minimal\r\n\r\nA DegradedArray event had been detected on md device /dev/md/2.\r\n\r\nFaithfully yours, etc.\r\n\r\nP.S. The /proc/mdstat file currently contains the following:\r\n\r\nPersonalities : [raid1] \r\nmd2 : active raid1 sda3[0]\r\n      1451898240 blocks super 1.2 [2/1] [U_]\r\n      bitmap: 11/11 pages [44KB], 65536KB chunk\r\n\r\nmd1 : active raid1 sda2[0]\r\n      523712 blocks super 1.2 [2/1] [U_]\r\n      \r\nmd0 : active raid1 sda1[0]\r\n      12574720 blocks super 1.2 [2/1] [U_]\r\n      \r\nunused devices: <none>\n"})}),"\n",(0,t.jsxs)(r.p,{children:["One of the two raided drives is gone -> ",(0,t.jsx)(r.code,{children:"[U_]"})," and has to be replaced."]})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},443174:(e,r,n)=>{n.d(r,{A:()=>t});const t=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-b57dcf7a42ddd712383aadde6d3ef4c8.jpg"},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>i});var t=n(296540);const s={},o=t.createContext(s);function l(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);