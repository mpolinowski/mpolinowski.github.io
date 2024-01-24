"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[12710],{843419:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=i(785893),t=i(603905);const s={sidebar_position:8040,slug:"2019-09-16",title:"Vanilla Forums Installation on Debian",authors:"mpolinowski",tags:["LINUX"]},o=void 0,a={id:"DevOps/Provisioning/2019-09-16--installing-vanilla-forum/index",title:"Vanilla Forums Installation on Debian",description:"Katmandu, Nepal",source:"@site/docs/DevOps/Provisioning/2019-09-16--installing-vanilla-forum/index.md",sourceDirName:"DevOps/Provisioning/2019-09-16--installing-vanilla-forum",slug:"/DevOps/Provisioning/2019-09-16--installing-vanilla-forum/2019-09-16",permalink:"/docs/DevOps/Provisioning/2019-09-16--installing-vanilla-forum/2019-09-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Provisioning/2019-09-16--installing-vanilla-forum/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8040,frontMatter:{sidebar_position:8040,slug:"2019-09-16",title:"Vanilla Forums Installation on Debian",authors:"mpolinowski",tags:["LINUX"]},sidebar:"tutorialSidebar",previous:{title:"Developing WikiJS in Docker",permalink:"/docs/DevOps/Provisioning/2020-06-07--setting-up-wikijs-in-docker/2020-06-07"},next:{title:"User Login with Facebook for Discourse",permalink:"/docs/DevOps/Provisioning/2019-06-21--using-facebook-auth-in-discourse/2019-06-21"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"NGINX",id:"nginx",level:2},{value:"Sample Configurations",id:"sample-configurations",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Katmandu, Nepal",src:i(584513).Z+"",width:"1500",height:"656"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#nginx",children:"NGINX"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#sample-configurations",children:"Sample Configurations"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsx)(n.p,{children:"It is strongly recommended to set up the following environment on your server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"PHP 7.3 or higher."}),"\n",(0,r.jsx)(n.li,{children:"MySQL 5.7 or higher (or MariaDB equivalent)."}),"\n",(0,r.jsx)(n.li,{children:"SSL encryption (check out LetsEncrypt)."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"nginx",children:"NGINX"}),"\n",(0,r.jsxs)(n.p,{children:["The most important consideration to getting Vanilla running on nginx is to make sure the rewrite rules are correct. Below is one suggested configuration which locks down the server to only respond to requests via ",(0,r.jsx)(n.code,{children:"index.php"}),", which we strongly recommend if Vanilla is the only application running."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that you set the ",(0,r.jsx)(n.code,{children:"fastcgi_param"})," named ",(0,r.jsx)(n.code,{children:"X_REWRITE"})," to ",(0,r.jsx)(n.code,{children:"1"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that ",(0,r.jsx)(n.code,{children:"fastcgi_pass"})," is set to the name of your actual upstream (in our example below, it\u2019s named ",(0,r.jsx)(n.code,{children:"php-fpm"}),"), or call your PHP install directly by socket, for example: ",(0,r.jsx)(n.code,{children:"unix:/run/php/php7.3-fpm.sock"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Make sure that you define ",(0,r.jsx)(n.code,{children:"PATH_INFO"})," in your ",(0,r.jsx)(n.code,{children:"fastcgi_param"})," file. You may find this example set of ",(0,r.jsx)(n.a,{href:"https://www.nginx.com/resources/wiki/start/topics/examples/phpfcgi/",children:"FastCGI params helpful"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["When configuring FastCGI, using ",(0,r.jsx)(n.code,{children:"$realpath_root"})," instead of ",(0,r.jsx)(n.code,{children:"$document_root"})," may be necessary in some setups (e.g. when using symlinks)."]}),"\n",(0,r.jsxs)(n.p,{children:["We define ",(0,r.jsx)(n.code,{children:"SCRIPT_NAME"})," and ",(0,r.jsx)(n.code,{children:"SCRIPT_FILENAME"})," explicitly because some configurations may redundantly re-add them during the rewrite, resulting in a name of ",(0,r.jsx)(n.code,{children:"/index.php/index.php"}),". The end result of this is all your Javascript and CSS assets paths in the page start with ",(0,r.jsx)(n.code,{children:"/index.php"}),", thus breaking them. Feel free to omit those two lines if you\u2019re confident your configuration is immune."]}),"\n",(0,r.jsx)(n.h3,{id:"sample-configurations",children:"Sample Configurations"}),"\n",(0,r.jsxs)(n.p,{children:["This would go within the appropriate ",(0,r.jsx)(n.code,{children:"server { }"})," block. It assumes you\u2019ve already assigned a ",(0,r.jsx)(n.code,{children:"root"})," and ",(0,r.jsx)(n.code,{children:"index"}),", among other things:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cfg",children:"    # Block some folders as an extra hardening measure.\r\n    location ~* /\\.git { deny all; return 403; }\r\n    location /build/ { deny all; return 403; }\r\n    location /cache/ { deny all; return 403; }\r\n    location /cgi-bin/ { deny all; return 403; }\r\n    location /uploads/import/ { deny all; return 403; }\r\n    location /conf/ { deny all; return 403; }\r\n    location /tests/ { deny all; return 403; }\r\n    location /vendor/ { deny all; return 403; }\r\n\r\n    # This handles all the main requests thru index.php.\r\n    location ~* ^/index\\.php(/|$) {\r\n        # send to fastcgi\r\n        include fastcgi.conf;\r\n        fastcgi_param SCRIPT_NAME /index.php;\r\n        fastcgi_param SCRIPT_FILENAME $realpath_root/index.php;\r\n        fastcgi_param X_REWRITE 1;\r\n        fastcgi_pass php-fpm; # where 'php-fpm' is the upstream, probably defined in nginx.conf\r\n    }\r\n\r\n    # If this is some other PHP script, disallow it by redirecting to /index.php\r\n    location ~* \\.php(/|$) {\r\n        rewrite ^ /index.php$uri last;\r\n    }\r\n\r\n    # Default path handling\r\n    location / {\r\n        try_files $uri @vanilla;\r\n    }\r\n\r\n    location @vanilla {\r\n        rewrite ^ /index.php$uri last;\r\n    }\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,i)=>{i.d(n,{ah:()=>c});var r=i(667294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,r,t=function(e,n){if(null==e)return{};var i,r,t={},s=Object.keys(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)i=s[r],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var l=r.createContext({}),c=function(e){var n=r.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var i=e.components,t=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(i),h=t,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return i?r.createElement(f,o(o({ref:n},p),{},{components:i})):r.createElement(f,o({ref:n},p))}));p.displayName="MDXCreateElement"},584513:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-e8ee92e08cebf4f846dced6377ff2fc9.jpg"}}]);