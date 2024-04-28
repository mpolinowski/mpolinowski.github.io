"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[8524],{184328:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=i(474848),s=i(28453);const r={sidebar_position:9050,slug:"2020-07-29",title:"Securing Webservers - Apache and NGINX",authors:"mpolinowski",tags:["LINUX","Security","Apache","NGINX"]},o=void 0,a={id:"DevOps/NGINX/2020-07-29--securing-apache-and-nginx/index",title:"Securing Webservers - Apache and NGINX",description:"Central, Hong Kong",source:"@site/docs/DevOps/NGINX/2020-07-29--securing-apache-and-nginx/index.md",sourceDirName:"DevOps/NGINX/2020-07-29--securing-apache-and-nginx",slug:"/DevOps/NGINX/2020-07-29--securing-apache-and-nginx/2020-07-29",permalink:"/docs/DevOps/NGINX/2020-07-29--securing-apache-and-nginx/2020-07-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2020-07-29--securing-apache-and-nginx/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"},{label:"Apache",permalink:"/docs/tags/apache"},{label:"NGINX",permalink:"/docs/tags/nginx"}],version:"current",sidebarPosition:9050,frontMatter:{sidebar_position:9050,slug:"2020-07-29",title:"Securing Webservers - Apache and NGINX",authors:"mpolinowski",tags:["LINUX","Security","Apache","NGINX"]},sidebar:"tutorialSidebar",previous:{title:"NGINX Docker Setup",permalink:"/docs/DevOps/NGINX/2020-08-26--nginx-docker-setup/2020-08-26"},next:{title:"Adding an OBS Stream to your Website",permalink:"/docs/DevOps/NGINX/2019-11-08--nginx-rtmp-website/2019-11-08"}},c={},d=[{value:"Apache on CentOS",id:"apache-on-centos",level:2},{value:"Installing Mod_Security and Mod_evasive",id:"installing-mod_security-and-mod_evasive",level:3},{value:"Configuring Mod_Security",id:"configuring-mod_security",level:3},{value:"Configuring Mod_Evasive",id:"configuring-mod_evasive",level:3},{value:"Apache on Debian",id:"apache-on-debian",level:2},{value:"NGINX",id:"nginx",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Central, Hong Kong",src:i(117014).A+"",width:"1500",height:"614"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#apache-on-centos",children:"Apache on CentOS"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#installing-mod_security-and-mod_evasive",children:"Installing Mod_Security and Mod_evasive"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuring-mod_security",children:"Configuring Mod_Security"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#configuring-mod_evasive",children:"Configuring Mod_Evasive"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#apache-on-debian",children:"Apache on Debian"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#nginx",children:"NGINX"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"apache-on-centos",children:"Apache on CentOS"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"mod_security"})," (",(0,t.jsx)(n.a,{href:"https://www.modsecurity.org",children:"open-source intrusion detection and prevention engine for web applications"})," that integrates seamlessly with the webserver) and ",(0,t.jsx)(n.strong,{children:"mod_evasive"})," are two very important tools that can be used to protect a web server against brute force or (D)DoS attacks."]}),"\n",(0,t.jsx)(n.h3,{id:"installing-mod_security-and-mod_evasive",children:"Installing Mod_Security and Mod_evasive"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"--------------- CentOS/RHEL 7 --------------- \r\nyum update && yum install mod_security mod_evasive\r\n\r\n--------------- CentOS/RHEL 8 --------------- \r\ndnf install https://pkgs.dyn.su/el8/base/x86_64/raven-release-1.0-1.el8.noarch.rpm\r\ndnf --enablerepo=raven-extras install mod_evasive\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When the installation is complete, you will find the configuration files for both tools in ",(0,t.jsx)(n.code,{children:"/etc/httpd/conf.d"}),". In order to integrate these two modules with Apache and have it load them when it starts, make sure the following lines appear in the top-level section of ",(0,t.jsx)(n.code,{children:"mod_evasive.conf"})," and ",(0,t.jsx)(n.code,{children:"mod_security.conf"}),", respectively:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"LoadModule evasive20_module modules/mod_evasive24.so\r\nLoadModule security2_module modules/mod_security2.so\n"})}),"\n",(0,t.jsx)(n.p,{children:"Then restart Apache and verify that it loads mod_evasive and mod_security:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl restart httpd\n"})}),"\n",(0,t.jsx)(n.p,{children:"Dump a list of loaded Static and Shared Modules."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"httpd -M | grep -Ei '(evasive|security)'\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-mod_security",children:"Configuring Mod_Security"}),"\n",(0,t.jsxs)(n.p,{children:["A Core Rule Set provides the web server with instructions on how to behave under certain conditions. The developer firm of ",(0,t.jsx)(n.strong,{children:"mod_security"})," provides a free set called OWASP (",(0,t.jsx)(n.a,{href:"https://www.owasp.org/index.php/Category:OWASP_ModSecurity_Core_Rule_Set_Project",children:"Open Web Application Security Project"}),") ModSecurity CRS:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mkdir /etc/httpd/crs && cd /etc/httpd/crs\r\nwget -c https://github.com/SpiderLabs/owasp-modsecurity-crs/archive/v3.2.0.tar.gz -O master\r\n\r\ntar xzf master\r\nmv owasp-modsecurity-crs-3.2.0 owasp\r\n\r\ncd owasp/\r\ncp crs-setup.conf.example crs-setup.conf\n"})}),"\n",(0,t.jsxs)(n.p,{children:["tell Apache to use this file along with the module by inserting the following lines in the web server\u2019s main configuration file ",(0,t.jsx)(n.code,{children:"/etc/httpd/conf/httpd.conf"})," file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<IfModule security2_module>\r\n        Include crs/owasp/crs-setup.conf\r\n        Include crs/owasp/rules/*.conf\r\n</IfModule>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create your own configuration file within the ",(0,t.jsx)(n.code,{children:"/etc/httpd/modsecurity.d"})," directory where you can place ",(0,t.jsx)(n.a,{href:"https://github.com/SpiderLabs/ModSecurity/wiki/Reference-Manual#Configuration_Directives",children:"customized directives"})," instead of modifying the CRS files directly ",(0,t.jsx)(n.code,{children:"nano /etc/httpd/modsecurity.d/instar.conf"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<IfModule mod_security2.c>\r\n\tSecRuleEngine On\r\n\tSecRequestBodyAccess On\r\n\tSecResponseBodyAccess On \r\n\tSecResponseBodyMimeType text/plain text/html text/xml application/octet-stream \r\n\tSecDataDir /tmp\r\n</IfModule>\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuring-mod_evasive",children:"Configuring Mod_Evasive"}),"\n",(0,t.jsxs)(n.p,{children:["mod_evasive is configured using directives in ",(0,t.jsx)(n.code,{children:"/etc/httpd/conf.d/mod_evasive.conf"}),". The default ",(0,t.jsx)(n.code,{children:"mod_evasive.conf"})," file has the following directives enabled:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:"<IfModule mod_evasive24.c>\r\n    DOSHashTableSize    3097\r\n    DOSPageCount        2\r\n    DOSSiteCount        50\r\n    DOSPageInterval     1\r\n    DOSSiteInterval     1\r\n    DOSBlockingPeriod   10\r\n</IfModule>\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DOSHashTableSize"}),": This directive specifies the size of the hash table that is used to keep track of activity on a per-IP address basis. Increasing this number will provide a faster lookup of the sites that the client has visited in the past, but may impact overall performance if it is set too high."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DOSPageCount"}),": Legitimate number of identical requests to a specific URI (for example, any file that is being served by Apache) that can be made by a visitor over the ",(0,t.jsx)(n.strong,{children:"DOSPageInterval"})," interval."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DOSSiteCount"}),": Similar to ",(0,t.jsx)(n.strong,{children:"DOSPageCount"}),", but refers to how many overall requests can be made to the entire site over the DOSSiteInterval interval."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"DOSBlockingPeriod"}),": If a visitor exceeds the limits set by DOSSPageCount or DOSSiteCount, his source IP address will be blacklisted during the DOSBlockingPeriod amount of time. During DOSBlockingPeriod, any requests coming from that IP address will encounter a 403 Forbidden error."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"apache-on-debian",children:"Apache on Debian"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://www.yourhowto.net/installing-mod_security-and-mod_evasive-on-debian/",children:"https://www.yourhowto.net/installing-mod_security-and-mod_evasive-on-debian/"})}),"\n",(0,t.jsx)(n.h2,{id:"nginx",children:"NGINX"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html",children:"https://nginx.org/en/docs/http/ngx_http_limit_req_module.html"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},117014:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-be28477133089bc5ae151be9db38fab6.jpg"},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(296540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);