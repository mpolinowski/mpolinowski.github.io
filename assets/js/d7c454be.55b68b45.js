"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[95112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:8080,slug:"2021-02-23",title:"NGINX Redirect based on User Agent",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},i=void 0,s={unversionedId:"DevOps/NGINX/2021-02-23-nginx-agent-redirect/index",id:"DevOps/NGINX/2021-02-23-nginx-agent-redirect/index",title:"NGINX Redirect based on User Agent",description:"Tsim Sha Tsui, Hongkong",source:"@site/docs/DevOps/NGINX/2021-02-23-nginx-agent-redirect/index.md",sourceDirName:"DevOps/NGINX/2021-02-23-nginx-agent-redirect",slug:"/DevOps/NGINX/2021-02-23-nginx-agent-redirect/2021-02-23",permalink:"/docs/DevOps/NGINX/2021-02-23-nginx-agent-redirect/2021-02-23",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2021-02-23-nginx-agent-redirect/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Gatsby",permalink:"/docs/tags/gatsby"},{label:"Docker",permalink:"/docs/tags/docker"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2021-02-23",title:"NGINX Redirect based on User Agent",authors:"mpolinowski",tags:["NGINX","Gatsby","Docker"]},sidebar:"tutorialSidebar",previous:{title:"NGINX TCP/UDP Load Balancing",permalink:"/docs/DevOps/NGINX/2022-11-17-nginx-udp-tcp-load-balancing/2022-11-17"},next:{title:"Setting up Certbot Auto-renewal for NGINX (Maintenance Mode)",permalink:"/docs/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/2021-07-29"}},l={},p=[{value:"NGINX",id:"nginx",level:2},{value:"Apache2",id:"apache2",level:2},{value:"Getting Started",id:"getting-started",level:3},{value:"Adding the Redirects",id:"adding-the-redirects",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tsim Sha Tsui, Hongkong",src:n(78589).Z,width:"1500",height:"567"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#nginx"},"NGINX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#apache2"},"Apache2"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#adding-the-redirects"},"Adding the Redirects"))))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Continuation from ",(0,a.kt)("a",{parentName:"p",href:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"},"NGINX Docker Ingress"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/nginx_docker_ingress"},"Github Repository")),(0,a.kt)("h2",{id:"nginx"},"NGINX"),(0,a.kt)("p",null,"I need to offer a URL that redirects user based on the user agent their browser reports. This can be done using a simple ",(0,a.kt)("strong",{parentName:"p"},"IF Statement"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"server {\n    listen 80;\n    listen [::]:80;\n\n    server_name  192.168.2.111;\n\n    # force all traffic to use https\n    return 301 https://$server_name$request_uri;\n}\n\n\nserver {\n\n    listen 443 ssl;\n    listen [::]:443 ssl;\n\n    include /etc/nginx/conf.d/self-signed.conf;\n    include /etc/nginx/conf.d/ssl-params.conf;\n\n    server_name 192.168.2.111;\n\n    if ( $http_user_agent ~* 'android|blackberry' ) {\n       return 301 https://192.168.2.117$request_uri;\n     }\n\n    if ( $http_user_agent ~* 'ipad|iphone|ipod' ) {\n       return 301 https://192.168.2.77$request_uri;\n     }\n\n    if ( $http_user_agent ~* 'windows' ) {\n       return 301 https://192.168.2.249$request_uri;\n     }\n\n}\n")),(0,a.kt)("p",null,"Now start the ingress with this new configuration file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -d -p 443:443 -p 80:80 -v /opt/redirection:/etc/nginx/conf.d --name ingress nginx:1.21.1-alpine\n")),(0,a.kt)("p",null,"Accessing the ingress on IP ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.2.111")," will now upgrade you to ",(0,a.kt)("strong",{parentName:"p"},"HTTPS")," and then redirect you to another local IP address based on your browser reported user agent:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Android Phones")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"https://192.168.2.117")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"iPhones Phones")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"https://192.168.2.77")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Windows Phones")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"https://192.168.2.249"))),(0,a.kt)("h2",{id:"apache2"},"Apache2"),(0,a.kt)("h3",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Just to see how it works on the other side - here is how to do the same thing in Apache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/www/html/my.page.com/\nchown -R $USER:$USER /var/www/html/my.page.com/\nsudo chmod -R 755 /var/www/html/my.page.com\nnano /var/www/html/my.page.com/index.html\n")),(0,a.kt)("p",null,"And add some page content here:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n    <head>\n        <title>My App</title>\n    </head>\n    <body>\n        <h1>Hi there!</h1>\n    </body>\n</html>\n")),(0,a.kt)("p",null,"Now, create a virtual host file for the domain using the command shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/apache2/sites-available/my.page.com.conf\n")),(0,a.kt)("p",null,"Now copy and paste the content below and replace the domain my.page.com with your own domain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<VirtualHost *:80>\n    ServerAdmin admin@my.page.com\n    ServerName my.page.com\n    ServerAlias www.my.page.com\n    DocumentRoot /var/www/html/my.page.com/\n    ErrorLog ${APACHE_LOG_DIR}/error.log\n    CustomLog ${APACHE_LOG_DIR}/access.log combined\n</VirtualHost>\n")),(0,a.kt)("p",null,"At this point, first test then enable the virtual host file as shown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apachectl configtest\na2ensite my.page.com.conf\nsystemctl restart apache2\n")),(0,a.kt)("h3",{id:"adding-the-redirects"},"Adding the Redirects"),(0,a.kt)("p",null,"Now add the following lines to your virtual host config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"<VirtualHost *:80>\n    ServerAdmin admin@my.page.com\n    ServerName my.page.com\n    ServerAlias www.my.page.com\n    RewriteEngine On\n    RewriteCond %{HTTP_HOST} my.page.com$ [NC]\n    RewriteCond %{HTTP_USER_AGENT} iPhone [OR]\n    RewriteCond %{HTTP_USER_AGENT} iPod\n    RewriteRule ^(.*)$ https://apps.apple.com/us/app/instarvision/id413109553 [L,R=301]\n    RewriteCond %{HTTP_USER_AGENT} iPad [OR]\n    RewriteCond %{HTTP_USER_AGENT} Mac\\ OS\\ X\n    RewriteRule ^(.*)$ https://apps.apple.com/us/app/instarvision-for-ipad/id767539403 [L,R=301]\n    RewriteCond %{HTTP_USER_AGENT} Android\n    RewriteRule ^(.*)$ https://play.google.com/store/apps/details?id=de.instar.vision [L,R=301]\n    RewriteCond %{HTTP_USER_AGENT} Windows\n    RewriteRule ^(.*)$ https://www.microsoft.com/de-de/store/p/instarvision/9nblggh10wtp [L,R=301]\n    RewriteCond %{HTTP_USER_AGENT} ^(.*)\n    RewriteRule ^(.*)$ https://www.instar.com/support/downloads [L,R=301]\n    ErrorLog ${APACHE_LOG_DIR}/error.log\n    CustomLog ${APACHE_LOG_DIR}/access.log combined\n</VirtualHost>\n")),(0,a.kt)("p",null,"And test and reload Apache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apachectl configtest\nsystemctl reload apache2\n")),(0,a.kt)("p",null,"Verify that the redirects are working and run Certbot to create the SSL certificate and add the Apache configuration for you"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"certbot -d my.page.com\n")))}d.isMDXComponent=!0},78589:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/photo-456tdsfggd_67gfh6dgdf4_d-923afcfaf6c8c7812c07b878b927a8c4.jpg"}}]);