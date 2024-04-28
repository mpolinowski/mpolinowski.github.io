"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[59272],{964099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(474848),o=n(28453);const a={sidebar_position:9090,slug:"2020-12-23",title:"Tomcat 9 Configuration",authors:"mpolinowski",tags:["LINUX","Tomcat"]},s=void 0,i={id:"DevOps/Tomcat/2020-12-23-tomcat9-configuration/index",title:"Tomcat 9 Configuration",description:"Siem Reap, Cambodia",source:"@site/docs/DevOps/Tomcat/2020-12-23-tomcat9-configuration/index.md",sourceDirName:"DevOps/Tomcat/2020-12-23-tomcat9-configuration",slug:"/DevOps/Tomcat/2020-12-23-tomcat9-configuration/2020-12-23",permalink:"/docs/DevOps/Tomcat/2020-12-23-tomcat9-configuration/2020-12-23",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Tomcat/2020-12-23-tomcat9-configuration/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Tomcat",permalink:"/docs/tags/tomcat"}],version:"current",sidebarPosition:9090,frontMatter:{sidebar_position:9090,slug:"2020-12-23",title:"Tomcat 9 Configuration",authors:"mpolinowski",tags:["LINUX","Tomcat"]},sidebar:"tutorialSidebar",previous:{title:"Tomcat 9 Cluster & Loadbalancing",permalink:"/docs/DevOps/Tomcat/2020-12-24-tomcat9-cluster-and-load-balancing/2020-12-24"},next:{title:"Install Tomcat 9 on Ubuntu 20.04",permalink:"/docs/DevOps/Tomcat/2020-12-22-tomcat9-ubuntu-20-10-installation/2020-12-22"}},c={},l=[{value:"Security",id:"security",level:2},{value:"Generating a self-signed SSL Key",id:"generating-a-self-signed-ssl-key",level:3},{value:"Adding the Key to Tomcat",id:"adding-the-key-to-tomcat",level:3},{value:"Enforcing Encryption",id:"enforcing-encryption",level:3},{value:"Virtual Hosts",id:"virtual-hosts",level:2},{value:"Creating a Virtual Host",id:"creating-a-virtual-host",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Siem Reap, Cambodia",src:n(954857).A+"",width:"1500",height:"706"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#security",children:"Security"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#generating-a-self-signed-ssl-key",children:"Generating a self-signed SSL Key"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#adding-the-key-to-tomcat",children:"Adding the Key to Tomcat"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#enforcing-encryption",children:"Enforcing Encryption"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"#virtual-hosts",children:"Virtual Hosts"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"#creating-a-virtual-host",children:"Creating a Virtual Host"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"security",children:"Security"}),"\n",(0,r.jsx)(t.h3,{id:"generating-a-self-signed-ssl-key",children:"Generating a self-signed SSL Key"}),"\n",(0,r.jsxs)(t.p,{children:["Java offers a tool to generate self-signed certificates called ",(0,r.jsx)(t.strong,{children:"keytool"}),". You can find it inside the ",(0,r.jsx)(t.strong,{children:"bin"})," directory of your Java installation, e.g.:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'"%JAVA_HOME%\\bin\\keytool" -genkey -keyalg RSA -alias TomcatKey -keystore /opt/tomcat/ssl/sslKey.jks\r\n\r\nEnter keystore password:\r\nRe-enter new password:\r\nWhat is your first and last name?\r\n  [Unknown]:\r\nWhat is the name of your organizational unit?\r\n  [Unknown]:\r\nWhat is the name of your organization?\r\n  [Unknown]:\r\nWhat is the name of your City or Locality?\r\n  [Unknown]:\r\nWhat is the name of your State or Province?\r\n  [Unknown]:\r\nWhat is the two-letter country code for this unit?\r\n  [Unknown]:\r\nIs CN=Unknown, OU=Unknown, O=Unknown, L=Unknown, ST=Unknown, C=Unknown correct?\n'})}),"\n",(0,r.jsx)(t.h3,{id:"adding-the-key-to-tomcat",children:"Adding the Key to Tomcat"}),"\n",(0,r.jsxs)(t.p,{children:["We have to point Tomcat to our freshly generated SSL keystore. To do this open the ",(0,r.jsx)(t.code,{children:"server.conf"})," file - add the following lines with the path to your keystore and the password you defined for it:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'\x3c!-- /opt/tomcat/apache-tomcat-9.0.41/conf/server.conf --\x3e\r\n\r\n<Connector protocol="org.apache.coyote.http11.Http11NioProtocol"\r\n               port="8443" maxThreads="200"\r\n               scheme="https" secure="true" SSLEnabled="true"\r\n               keystoreFile="/opt/tomcat/ssl/sslKey.jks" keystorePass="instar"\r\n               clientAuth="false" sslProtocol="TLS"/>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Open the define port - default ",(0,r.jsx)(t.code,{children:"8443"})," - inside your firewall and restart your server:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"ufw allow 8443/tcp\r\nservice tomcat restart\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And visit the dashboard on ",(0,r.jsx)(t.code,{children:"https://192.168.2.111:8443/"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"enforcing-encryption",children:"Enforcing Encryption"}),"\n",(0,r.jsxs)(t.p,{children:["Now all web apps are accessible via http on port 8080 and https on port 8443. If you want to enforce traffic for the management app to go through https you can edit the ",(0,r.jsx)(t.code,{children:"web.xml"})," file of the application. Add the ",(0,r.jsx)(t.code,{children:"user-data-constraint"})," tag and set the transport to ",(0,r.jsx)(t.strong,{children:"CONFIDENTIAL"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:"\x3c!-- nano /opt/tomcat/apache-tomcat-9.0.41/webapps/manager/WEB-INF/web.xml --\x3e\r\n\r\n<security-constraint>\r\n    <web-resource-collection>\r\n      <web-resource-name>HTML Manager interface (for humans)</web-resource-name>\r\n      <url-pattern>/html/*</url-pattern>\r\n    </web-resource-collection>\r\n    <auth-constraint>\r\n       <role-name>manager-gui</role-name>\r\n    </auth-constraint>\r\n    <user-data-constraint>\r\n      <transport-guarantee>CONFIDENTIAL</transport-guarantee>\r\n    </user-data-constraint>\r\n  </security-constraint>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"virtual-hosts",children:"Virtual Hosts"}),"\n",(0,r.jsx)(t.h3,{id:"creating-a-virtual-host",children:"Creating a Virtual Host"}),"\n",(0,r.jsx)(t.p,{children:"To serve multiple web sites from our server we first create the following folder structure inside the root of the Tomcat install dir:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"virtual-hosts\r\n\u251c\u2500\u2500 host1\r\n\u2502  \u2514\u2500\u2500 ROOT\r\n\u251c\u2500\u2500 host2\r\n\u2502  \u2514\u2500\u2500 ROOT\r\n\u2514\u2500\u2500 host3\r\n   \u2514\u2500\u2500 ROOT\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Each ",(0,r.jsx)(t.strong,{children:"ROOT"})," folder will hold the content for one of the web apps ",(0,r.jsx)(t.code,{children:"host1"})," - ",(0,r.jsx)(t.code,{children:"host3"}),". Now we need to tell Tomcat where to find our apps. The ",(0,r.jsx)(t.strong,{children:"Host"})," directory currently only points to the ",(0,r.jsx)(t.code,{children:"webapps"})," folder - let's add our virtual host below that entry:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-xml",children:'\x3c!-- nano /opt/tomcat/apache-tomcat-9.0.41/conf/server.xml --\x3e\r\n\r\n<Host name="localhost"  appBase="webapps"\r\n      unpackWARs="true" autoDeploy="true">\r\n\r\n      <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"\r\n          prefix="localhost_access_log" suffix=".txt"\r\n          pattern="%h %l %u %t &quot;%r&quot; %s %b" />\r\n\r\n</Host>\r\n\r\n<Host name="virtual-host1.com"  appBase="virtual-hosts/host1"\r\n    unpackWARs="true" autoDeploy="true" />\r\n\r\n<Host name="virtual-host2.com"  appBase="virtual-hosts/host2"\r\n    unpackWARs="true" autoDeploy="true" />\r\n\r\n<Host name="virtual-host3.com"  appBase="virtual-hosts/host3"\r\n    unpackWARs="true" autoDeploy="true" />\n'})}),"\n",(0,r.jsxs)(t.p,{children:["For testing we can now add a hello-world to each ",(0,r.jsx)(t.strong,{children:"ROOT"})," folder:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-html",children:'<%@ page language="java" contentType="text/html; charset=ISO-8859-1"\r\npageEncoding="ISO-8859-1"%>\r\n\r\n<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\r\n<html>\r\n  <head>\r\n    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\r\n    <title>Tomcat Boilerplate</title>\r\n  </head>\r\n  <body>\r\n    <h1>Hello from Virtual Host 1</h1>\r\n    <h3>Virtual Host Address: <%=request.getRequestURL().toString() %></h3>\r\n  </body>\r\n</html>\n'})}),"\n",(0,r.jsxs)(t.p,{children:["To test our settings we need to add the 3 domains to our ",(0,r.jsx)(t.code,{children:"host"})," file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"192.168.2.111  virtual-host1.com\r\n192.168.2.111  virtual-host2.com\r\n192.168.2.111  virtual-host3.com\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now restart your server:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"service tomcat restart\n"})}),"\n",(0,r.jsx)(t.p,{children:"And you will be able to access your virtual hosts:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"https://virtual-host1.com:8443/\r\nhttps://virtual-host2.com:8443/\r\nhttps://virtual-host3.com:8443/\n"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},954857:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-dbec03b1535301c8b293ac3087af0dd4.jpg"},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(296540);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);