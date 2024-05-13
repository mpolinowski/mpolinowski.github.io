"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[22940],{669605:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=r(474848),i=r(28453);const a={sidebar_position:8080,slug:"2021-07-29",title:"Setting up Certbot Auto-renewal for NGINX (Maintenance Mode)",authors:"mpolinowski",tags:["NGINX","Linux"]},s=void 0,c={id:"DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/index",title:"Setting up Certbot Auto-renewal for NGINX (Maintenance Mode)",description:"Shenzhen, China",source:"@site/docs/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/index.md",sourceDirName:"DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal",slug:"/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/2021-07-29",permalink:"/docs/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/2021-07-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/NGINX/2021-07-29--certbot-nginx-autorenewal/index.md",tags:[{label:"NGINX",permalink:"/docs/tags/nginx"},{label:"Linux",permalink:"/docs/tags/linux"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2021-07-29",title:"Setting up Certbot Auto-renewal for NGINX (Maintenance Mode)",authors:"mpolinowski",tags:["NGINX","Linux"]},sidebar:"tutorialSidebar",previous:{title:"NGINX Redirect based on User Agent",permalink:"/docs/DevOps/NGINX/2021-02-23-nginx-agent-redirect/2021-02-23"},next:{title:"NGINX Docker Ingress for your Gatsby Build",permalink:"/docs/DevOps/NGINX/2021-02-22-nginx-docker-ingress/2021-02-22"}},l={},o=[{value:"Download the Let\u2019s Encrypt Client",id:"download-the-lets-encrypt-client",level:2},{value:"Set Up NGINX",id:"set-up-nginx",level:2},{value:"Obtain the SSL/TLS Certificate",id:"obtain-the-ssltls-certificate",level:2},{value:"Check Certificate",id:"check-certificate",level:3},{value:"Manual Update Certificate",id:"manual-update-certificate",level:3},{value:"Automatically Renew Let\u2019s Encrypt Certificates",id:"automatically-renew-lets-encrypt-certificates",level:2},{value:"Remove a Certificate",id:"remove-a-certificate",level:2},{value:"Maintenance Mode",id:"maintenance-mode",level:2},{value:"Combine all Domains in a Single Certificate",id:"combine-all-domains-in-a-single-certificate",level:2},{value:"Error Messages",id:"error-messages",level:2},{value:"Failed to parse PID from file",id:"failed-to-parse-pid-from-file",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:r(264347).A+"",width:"1500",height:"424"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#download-the-lets-encrypt-client",children:"Download the Let\u2019s Encrypt Client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#set-up-nginx",children:"Set Up NGINX"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#obtain-the-ssltls-certificate",children:"Obtain the SSL/TLS Certificate"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#check-certificate",children:"Check Certificate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#manual-update-certificate",children:"Manual Update Certificate"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#automatically-renew-lets-encrypt-certificates",children:"Automatically Renew Let\u2019s Encrypt Certificates"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#remove-a-certificate",children:"Remove a Certificate"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#maintenance-mode",children:"Maintenance Mode"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#combine-all-domains-in-a-single-certificate",children:"Combine all Domains in a Single Certificate"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#error-messages",children:"Error Messages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#failed-to-parse-pid-from-file",children:"Failed to parse PID from file"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"download-the-lets-encrypt-client",children:"Download the Let\u2019s Encrypt Client"}),"\n",(0,t.jsx)(n.p,{children:"First, download the Let\u2019s Encrypt client, certbot."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"apt update\r\napt install certbot\r\napt install python3-certbot-nginx\n"})}),"\n",(0,t.jsx)(n.h2,{id:"set-up-nginx",children:"Set Up NGINX"}),"\n",(0,t.jsxs)(n.p,{children:["Specify your domain name with the ",(0,t.jsx)(n.code,{children:"server_name"})," directive:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:"server {\r\n    listen 80 default_server;\r\n    listen [::]:80 default_server;\r\n    root /var/www/html;\r\n    server_name example.com www.example.com;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Save the file, then run this command to verify the syntax of your configuration and restart NGINX:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nginx -t && nginx -s reload\n"})}),"\n",(0,t.jsx)(n.h2,{id:"obtain-the-ssltls-certificate",children:"Obtain the SSL/TLS Certificate"}),"\n",(0,t.jsxs)(n.p,{children:["Run the following command to generate certificates with the ",(0,t.jsx)(n.strong,{children:"NGINX plug\u2011in"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot --nginx -d example.com -d www.example.com\n"})}),"\n",(0,t.jsx)(n.h3,{id:"check-certificate",children:"Check Certificate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot certificates\n"})}),"\n",(0,t.jsx)(n.h3,{id:"manual-update-certificate",children:"Manual Update Certificate"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot --nginx\n"})}),"\n",(0,t.jsx)(n.p,{children:"Respond to prompts from certbot to configure your HTTPS settings, which involves entering your email address and agreeing to the Let\u2019s Encrypt terms of service."}),"\n",(0,t.jsx)(n.h2,{id:"automatically-renew-lets-encrypt-certificates",children:"Automatically Renew Let\u2019s Encrypt Certificates"}),"\n",(0,t.jsxs)(n.p,{children:["Here we add a ",(0,t.jsx)(n.code,{children:"cron job"})," to an existing ",(0,t.jsx)(n.strong,{children:"Crontab"})," file to do this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"crontab -e\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add the certbot command to run daily. In this example, we run the command every day at noon. The command checks to see if the certificate on the server will expire within the next 30 days, and renews it if so. The ",(0,t.jsx)(n.code,{children:"--quiet"})," directive tells certbot not to generate output."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"0 12 * * * /usr/bin/certbot renew --quiet\n"})}),"\n",(0,t.jsx)(n.p,{children:"Save and close the file. All installed certificates will be automatically renewed and reloaded."}),"\n",(0,t.jsx)(n.h2,{id:"remove-a-certificate",children:"Remove a Certificate"}),"\n",(0,t.jsx)(n.p,{children:"Check the certificate name:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot certificates\n"})}),"\n",(0,t.jsx)(n.p,{children:"and run the delete command:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot delete --cert-name example.com\n"})}),"\n",(0,t.jsx)(n.h2,{id:"maintenance-mode",children:"Maintenance Mode"}),"\n",(0,t.jsx)(n.p,{children:"Adding a maintenance mode to your web site:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"location / {\r\n      error_page 403 = @deny;\r\n       # allow 204.79.197.200;\r\n       allow 204.79.197.200;\r\n       deny all;\r\n       proxy_pass http://127.0.0.1:6081;\r\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Send all IP's to ",(0,t.jsx)(n.code,{children:"@deny"})," that aren't whitelisted. Whitelisted IP's are forwarded regularly to your service frontend."]}),"\n",(0,t.jsxs)(n.p,{children:["Options for the ",(0,t.jsx)(n.code,{children:"@deny"})," block:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Redirect"})}),"\n",(0,t.jsx)(n.p,{children:"All denied Traffic is redirected to a different domain:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"location @deny {\r\n    return 301 http://example.com/comingsoon;\r\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Send String"})}),"\n",(0,t.jsx)(n.p,{children:"All denied Traffic is send a string containing the WAN IP address of the accessing client - very convenient to copy the address and add to your whitelist:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"location @deny {\r\n        default_type text/html;\r\n        return 503 '$REMOTE_ADDR :: Webshop Maintenance';\r\n    }\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Return HTML Page"})}),"\n",(0,t.jsx)(n.p,{children:"Return a styled Maintenance HTML page:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"location @deny {\r\n        # Return /usr/share/nginx/html/maintenance.html\r\n        rewrite ^(.*)$ /maintenance.html break;\r\n    }\n"})}),"\n",(0,t.jsx)(n.h2,{id:"combine-all-domains-in-a-single-certificate",children:"Combine all Domains in a Single Certificate"}),"\n",(0,t.jsx)(n.p,{children:"Delete existing certs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot delete --cert-name one.example.com --cert-name one.example.de --cert-name two.example.com --cert-name two.example.de\n"})}),"\n",(0,t.jsx)(n.p,{children:"E.g. for adding redirects (Apache this time):"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"nano /etc/apache2/sites-available/two.example.de.conf"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"<VirtualHost \\*>\r\nServerName two.example.de\r\nRedirect 301 / https://two.example.com/\r\n</VirtualHost>\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"nano /etc/apache2/sites-available/one.example.de.conf"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-cfg",children:"<VirtualHost \\*>\r\nServerName one.example.de\r\nRedirect 301 / https://one.example.com/\r\n</VirtualHost>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enable new sites:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"a2ensite one.example.de.conf\r\na2ensite two.example.de.conf\r\nsystemctl reload apache2\n"})}),"\n",(0,t.jsx)(n.p,{children:"And run Certbot to add the certificate:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"certbot --installer apache -d one.example.com -d one.example.de -d two.example.com -d two.example.de\n"})}),"\n",(0,t.jsx)(n.h2,{id:"error-messages",children:"Error Messages"}),"\n",(0,t.jsx)(n.h3,{id:"failed-to-parse-pid-from-file",children:"Failed to parse PID from file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Active: active (running) since Thu 2022-03-24 07:35:10 CET; 26min ago\r\nsystemd[1]: Starting A high performance web server and a reverse proxy server...\r\nsystemd[1]: nginx.service: Failed to parse PID from file /run/nginx.pid: Invalid argument\r\nsystemd[1]: Started A high performance web server and a reverse proxy server.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"ExecStartPost=/bin/sleep 1"})," to NGINX service file:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nano /lib/systemd/system/nginx.service\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"[Unit]\r\nDescription=A high performance web server and a reverse proxy server\r\nDocumentation=man:nginx(8)\r\nAfter=network.target nss-lookup.target\r\n\r\n[Service]\r\nType=forking\r\nPIDFile=/run/nginx.pid\r\nExecStartPre=/usr/sbin/nginx -t -q -g 'daemon on; master_process on;'\r\nExecStart=/usr/sbin/nginx -g 'daemon on; master_process on;'\r\nExecStartPost=/bin/sleep 1\r\nExecReload=/usr/sbin/nginx -g 'daemon on; master_process on;' -s reload\r\nExecStop=-/sbin/start-stop-daemon --quiet --stop --retry QUIT/5 --pidfile /run/nginx.pid\r\nTimeoutStopSec=5\r\nKillMode=mixed\r\n\r\n[Install]\r\nWantedBy=multi-user.target\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"systemctl daemon-reload\r\nservice nginx restart\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},264347:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e97ca676c327a4300748b65720aff010.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var t=r(296540);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);