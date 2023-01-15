"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[76799],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},h=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=s(t),d=i,m=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return t?r.createElement(m,a(a({ref:n},h),{},{components:t})):r.createElement(m,a({ref:n},h))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={sidebar_position:5990,slug:"2022-09-29",title:"Build a Chrony NTS Client from Source",authors:"mpolinowski",tags:["LINUX","Security"],description:"Building a client from source for a time service which uses IETF RFC 8915 called \u201cNetwork Time Security\u201c (NTS)."},a=void 0,l={unversionedId:"DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source/index",id:"DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source/index",title:"Build a Chrony NTS Client from Source",description:"Building a client from source for a time service which uses IETF RFC 8915 called \u201cNetwork Time Security\u201c (NTS).",source:"@site/docs/DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source/index.md",sourceDirName:"DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source",slug:"/DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source/2022-09-29",permalink:"/docs/DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source/2022-09-29",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Linux/2022-09-29--build-an-chrony-nts-client-from-source/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"}],version:"current",sidebarPosition:5990,frontMatter:{sidebar_position:5990,slug:"2022-09-29",title:"Build a Chrony NTS Client from Source",authors:"mpolinowski",tags:["LINUX","Security"],description:"Building a client from source for a time service which uses IETF RFC 8915 called \u201cNetwork Time Security\u201c (NTS)."},sidebar:"tutorialSidebar",previous:{title:"Check the Filesystem",permalink:"/docs/DevOps/Linux/2022-11-04--check-filesystem/2022-11-04"},next:{title:"NTS-Service and Authenticated Time Synchronization",permalink:"/docs/DevOps/Linux/2022-09-28--nts-client-setup/2022-09-28"}},c={},s=[{value:"Build",id:"build",level:2},{value:"Configuration",id:"configuration",level:2}],h={toc:s};function p(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"TST, Hong Kong",src:t(21347).Z,width:"1500",height:"517"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#build"},"Build")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration"},"Configuration"))),(0,i.kt)("h2",{id:"build"},"Build"),(0,i.kt)("p",null,"The Chrony software is distributed as source code which has to be compiled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://git.tuxfamily.org/chrony/chrony.git\n")),(0,i.kt)("p",null,"Git does not seem to be working atm - I ",(0,i.kt)("a",{parentName:"p",href:"https://chrony.tuxfamily.org/download.html"},"downloaded the latest build")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"wget"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://git.tuxfamily.org/chrony/chrony.git/snapshot/chrony-4.3.zip\nunzip chrony-4.3.zip\nrm chrony-4.3.zip && cd chrony-4.3\nmkdir build\n")),(0,i.kt)("p",null,"The following programs and libraries with their development files are needed to build chrony:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"C compiler (gcc or clang recommended)"),(0,i.kt)("li",{parentName:"ul"},"GNU Make"),(0,i.kt)("li",{parentName:"ul"},"Nettle, NSS, or LibTomCrypt (optional)"),(0,i.kt)("li",{parentName:"ul"},"Editline (optional)"),(0,i.kt)("li",{parentName:"ul"},"libcap (Linux only, optional)"),(0,i.kt)("li",{parentName:"ul"},"libseccomp (Linux only, optional)"),(0,i.kt)("li",{parentName:"ul"},"timepps.h header (optional)"),(0,i.kt)("li",{parentName:"ul"},"Asciidoctor (for HTML documentation)"),(0,i.kt)("li",{parentName:"ul"},"Bash (for testing)")),(0,i.kt)("p",null,"The build will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"gcc")," compiler if not configured otherwise:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install build-essential\n")),(0,i.kt)("p",null,"If development files for the ",(0,i.kt)("strong",{parentName:"p"},"Nettle"),", ",(0,i.kt)("strong",{parentName:"p"},"NSS"),", or ",(0,i.kt)("strong",{parentName:"p"},"libtomcrypt")," library are available, chronyd will be built with support for other cryptographic hash functions than MD5, which can be used for NTP authentication with a symmetric key. If you don\u2019t want to enable the support, specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-sechash")," flag to configure."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"apt install libtomcrypt-dev nettle-dev\n")),(0,i.kt)("p",null,"If development files for the POSIX threads library are available, chronyd will be built with support for asynchronous resolving of hostnames specified in the server, peer, and pool directives. This allows chronyd operating as a server to respond to client requests when resolving a hostname. If you don\u2019t want to enable the support, specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-asyncdns")," flag to configure."),(0,i.kt)("p",null,"If development files for the editline or readline library are available, chronyc will be built with line editing support. If you don\u2019t want this, specify the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-readline")," flag to configure."),(0,i.kt)("p",null,"On Linux, if development files for the libcap library are available, chronyd will be built with support for dropping root privileges. On other systems no extra library is needed. The default user which chronyd should run as can be specified with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--with-user")," option of the configure script."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --no-create-home chrony\n")),(0,i.kt)("p",null,"After unpacking the source code, change directory into it, and type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./configure\n")),(0,i.kt)("p",null,"This is a shell script that automatically determines the system type. There is an optional parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"--prefix"),", which indicates the directory tree where the software should be installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./configure --prefix=/home/kali/chrony/build\n")),(0,i.kt)("p",null,"will install the chronyd daemon into ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/kali/chrony/build/sbin")," and the chronyc control program into ",(0,i.kt)("inlineCode",{parentName:"p"},"/home/kali/chrony/build/bin"),". The default value for the prefix is ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local"),"."),(0,i.kt)("p",null,"Bringing it all together:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./configure --disable-sechash --disable-asyncdns --disable-readline --prefix=/home/kali/chrony/build\n\nConfiguring for  Linux-armv7l\nChecking for gcc : Yes\nChecking for hardening compiler options : Yes\nChecking for -fstack-protector-strong : Yes\nChecking for pkg-config : No\nChecking for 64-bit time_t : No\nChecking for math : No\nChecking for math in -lm : Yes\nChecking for struct in_pktinfo : Yes\nChecking for IPv6 support : Yes\nChecking for struct in6_pktinfo : No\nChecking for struct in6_pktinfo with _GNU_SOURCE : Yes\nChecking for O_NOFOLLOW flag : Yes\nChecking for clock_gettime() : Yes\nChecking for getaddrinfo() : Yes\nChecking for getrandom() : Yes\nChecking for recvmmsg() : Yes\nChecking for SW/HW timestamping : Yes\nChecking for other timestamping options : Yes\nChecking for <sys/timepps.h> : No\nChecking for <timepps.h> : No\nChecking for libcap : Yes\nChecking for <linux/rtc.h> : Yes\nChecking for <linux/ptp_clock.h> : Yes\nChecking for pthread_setschedparam() : Yes\nChecking for mlockall() : Yes\nChecking for setrlimit(RLIMIT_MEMLOCK, ...) : Yes\nFeatures : +CMDMON +NTP +REFCLOCK +RTC +PRIVDROP -SCFILTER -SIGND -ASYNCDNS -NTS -READLINE -SECHASH +IPV6 -DEBUG\nCreating Makefile\nCreating doc/Makefile\nCreating test/unit/Makefile\n")),(0,i.kt)("p",null,"Now we are ready to build the binaries:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ls -la /home/kali/chrony/ | grep chrony \n-rwxr-xr-x 1 kali kali  418560 Oct  6 05:31 chronyc\n-rwxr-xr-x 1 kali kali 1160816 Oct  6 05:30 chronyd\n")),(0,i.kt)("p",null,"Once the programs have been successfully compiled, they need to be installed in their target locations. This step normally needs to be performed by the superuser, and requires the following command to be entered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo make install\n\n[ -d /etc ] || mkdir -p /etc\n[ -d /home/kali/chrony/build/sbin ] || mkdir -p /home/kali/chrony/build/sbin\n[ -d /home/kali/chrony/build/bin ] || mkdir -p /home/kali/chrony/build/bin\n[ -d /var/lib/chrony ] || mkdir -p /var/lib/chrony\nif [ -f /home/kali/chrony/build/sbin/chronyd ]; then rm -f /home/kali/chrony/build/sbin/chronyd ; fi\nif [ -f /home/kali/chrony/build/bin/chronyc ]; then rm -f /home/kali/chrony/build/bin/chronyc ; fi\ncp chronyd /home/kali/chrony/build/sbin/chronyd\nchmod 755 /home/kali/chrony/build/sbin/chronyd\ncp chronyc /home/kali/chrony/build/bin/chronyc\nchmod 755 /home/kali/chrony/build/bin/chronyc\nmake -C doc install\nmake[1]: Entering directory '/home/kali/chrony/doc'\nasciidoctor  -b manpage -o chrony.conf.man.in chrony.conf.adoc\nmake[1]: asciidoctor: No such file or directory\nmake[1]: *** [Makefile:44: chrony.conf.man.in] Error 127\nmake[1]: Leaving directory '/home/kali/chrony/doc'\nmake: *** [Makefile:98: install] Error 2\n")),(0,i.kt)("p",null,"This will installed the binaries - but adding the man pages seems to have failed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree build  \nbuild\n\u251c\u2500\u2500 bin\n\u2502   \u2514\u2500\u2500 chronyc\n\u2514\u2500\u2500 sbin\n    \u2514\u2500\u2500 chronyd\n\n2 directories, 2 files\n")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Now that the software is successfully installed, the next step is to set up a configuration file. The default location of the file is ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/chrony.conf"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Use Debian vendor zone.\n# pool 2.debian.pool.ntp.org iburst\n\n# This directive specify the location of the file containing ID/key pairs for\n# NTP authentication.\nkeyfile /home/kali/chrony/build/chrony.keys\n\n# This directive specify the file into which chronyd will store the rate\n# information.\ndriftfile /home/kali/chrony/build/chrony.drift\n\n# Save NTS keys and cookies.\nntsdumpdir /home/kali/chrony/build\n\n# Uncomment the following line to turn logging on.\n#log tracking measurements statistics\n\n# Log files location.\nlogdir /var/log/chrony\n\n# Stop bad estimates upsetting machine clock.\nmaxupdateskew 100.0\n\n# This directive enables kernel synchronisation (every 11 minutes) of the\n# real-time clock. Note that it can\u2019t be used along with the 'rtcfile' directive.\nrtcsync\n\n# Step the system clock instead of slewing it if the adjustment is larger than\n# one second, but only in the first three clock updates.\nmakestep 1 3\n\n# Get TAI-UTC offset and leap seconds from the system tz database.\n# This directive must be commented out when using time sources serving\n# leap-smeared time.\nleapsectz right/UTC\nserver my.server.com key 666 nts iburst\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chown chronyd:chronyd /etc/chrony.conf\nmkdir /home/kali/chrony/build\nchown chronyd:chronyd /home/kali/chrony/build\nmv chronyd /home/kali/chrony/build/chronyd\n")),(0,i.kt)("p",null,"And add your keyfiles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /home/kali/chrony/build/chrony.keys\n")),(0,i.kt)("p",null,"And service file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/systemd/system/chronyd.service\n\n[Unit]\nDescription=chrony, an NTP client/server\nDocumentation=man:chronyd(8) man:chronyc(1) man:chrony.conf(5)\nConflicts=openntpd.service ntp.service ntpsec.service\nWants=time-sync.target\nBefore=time-sync.target\nAfter=network.target\nConditionCapability=CAP_SYS_TIME\n\n[Service]\nType=forking\nPIDFile=/run/chrony/chronyd.pid\nEnvironmentFile=-/etc/default/chrony\nExecStart=/home/kali/chrony/build/chronyd $DAEMON_OPTS\nPrivateTmp=yes\nProtectHome=yes\nProtectSystem=full\nProtectControlGroups=yes\nProtectKernelModules=yes\nProtectKernelTunables=yes\n\n[Install]\nAlias=chronyd.service\nWantedBy=multi-user.target\n")))}p.isMDXComponent=!0},21347:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"}}]);