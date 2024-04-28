"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[58662],{607366:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var s=a(474848),i=a(28453);const l={sidebar_position:9060,slug:"2020-07-28",title:"Securing Webservers - Fail2Ban Ubuntu 20.10",authors:"mpolinowski",tags:["LINUX","Security","FirewallD","fail2ban"]},t=void 0,r={id:"DevOps/Security/2020-07-28--fail2ban-ubuntu-server/index",title:"Securing Webservers - Fail2Ban Ubuntu 20.10",description:"TST, Hong Kong",source:"@site/docs/DevOps/Security/2020-07-28--fail2ban-ubuntu-server/index.md",sourceDirName:"DevOps/Security/2020-07-28--fail2ban-ubuntu-server",slug:"/DevOps/Security/2020-07-28--fail2ban-ubuntu-server/2020-07-28",permalink:"/docs/DevOps/Security/2020-07-28--fail2ban-ubuntu-server/2020-07-28",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Security/2020-07-28--fail2ban-ubuntu-server/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Security",permalink:"/docs/tags/security"},{label:"FirewallD",permalink:"/docs/tags/firewall-d"},{label:"fail2ban",permalink:"/docs/tags/fail-2-ban"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2020-07-28",title:"Securing Webservers - Fail2Ban Ubuntu 20.10",authors:"mpolinowski",tags:["LINUX","Security","FirewallD","fail2ban"]},sidebar:"tutorialSidebar",previous:{title:"Securing Webservers - Uncomplicated Firewall",permalink:"/docs/DevOps/Security/2020-07-28--uncomplicated-firewall-ufw/2020-07-28"},next:{title:"Securing Webservers - FirewallD Deployment on Ubuntu 20.04",permalink:"/docs/DevOps/Security/2020-07-27--firewalld-deployment-ubuntu/2020-07-27"}},d={},o=[{value:"Installation",id:"installation",level:2},{value:"CentOS",id:"centos",level:3},{value:"Debian",id:"debian",level:3},{value:"Ubuntu",id:"ubuntu",level:3},{value:"Configure Fail2ban",id:"configure-fail2ban",level:2},{value:"jail.local",id:"jaillocal",level:3},{value:"Email Alerts",id:"email-alerts",level:2},{value:"Enable fail2ban",id:"enable-fail2ban",level:2},{value:"failban-client commands",id:"failban-client-commands",level:3},{value:"Unbanning an IP Address",id:"unbanning-an-ip-address",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"TST, Hong Kong",src:a(574476).A+"",width:"1500",height:"517"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#centos",children:"CentOS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#debian",children:"Debian"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#ubuntu",children:"Ubuntu"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#configure-fail2ban",children:"Configure Fail2ban"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#jaillocal",children:"jail.local"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#email-alerts",children:"Email Alerts"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#enable-fail2ban",children:"Enable fail2ban"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#failban-client-commands",children:"failban-client commands"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#unbanning-an-ip-address",children:"Unbanning an IP Address"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://www.fail2ban.org/wiki/index.php/Main_Page",children:"fail2ban"})," is a daemon to ban hosts that cause multiple authentication errors."]}),"\n",(0,s.jsx)(n.p,{children:"fail2ban will monitor the SystemD journal to look for failed authentication attempts for whichever jails have been enabled. After the number of failed attempts specified it will add a firewall rule to block that specific IP address for an amount of time configured."}),"\n",(0,s.jsxs)(n.p,{children:["Start by ",(0,s.jsx)(n.a,{href:"https://www.fail2ban.org/wiki/index.php/Downloads",children:"installing the package"})," on your system - ",(0,s.jsx)(n.a,{href:"https://packages.debian.org/stable/net/fail2ban",children:"Debian"}),", ",(0,s.jsx)(n.a,{href:"https://packages.ubuntu.com/search?keywords=fail2ban",children:"Ubuntu"})," or on Centos through EPEL."]}),"\n",(0,s.jsx)(n.h3,{id:"centos",children:"CentOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yum update && yum install epel-release\r\nyum install fail2ban\r\nyum install sendmail\r\nsystemctl start fail2ban\r\nsystemctl enable fail2ban\r\nsystemctl start sendmail\r\nsystemctl enable sendmail\n"})}),"\n",(0,s.jsx)(n.h3,{id:"debian",children:"Debian"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\r\napt-get install fail2ban\r\napt-get install sendmail-bin sendmail\n"})}),"\n",(0,s.jsx)(n.h3,{id:"ubuntu",children:"Ubuntu"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"apt-get update && apt-get upgrade -y\r\napt-get install fail2ban\r\napt-get install sendmail\n"})}),"\n",(0,s.jsx)(n.p,{children:"Allow SSH access through UFW and then enable the firewall:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ufw allow ssh\r\nufw enable\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-fail2ban",children:"Configure Fail2ban"}),"\n",(0,s.jsxs)(n.p,{children:["The jail.conf file will enable Fail2ban for SSH by default for Debian and Ubuntu, but not CentOS. All other protocols and configurations (HTTP, FTP, etc.) are commented out. If you want to change this, create a ",(0,s.jsx)(n.code,{children:"jail.local"})," for editing:"]}),"\n",(0,s.jsx)(n.h3,{id:"jaillocal",children:"jail.local"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local\n"})}),"\n",(0,s.jsx)(n.p,{children:"The next step is to configure a jail (a service you want to monitor and ban at whatever thresholds you\u2019ve set). By default IPs are banned for 1 hour. The best practice is to override the system defaults using _.local files instead of directly modifying the _.config files:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:'# nano /etc/fail2ban/jail.local\r\n[DEFAULT]\r\n# "bantime.increment" allows to use database for searching of previously banned ip\'s to increase a\r\n# default ban time using special formula, default it is banTime * 1, 2, 4, 8, 16, 32...\r\nbantime.increment = true\r\n# "bantime" is the number of seconds that a host is banned.\r\nbantime  = 1d\r\n\r\n# A host is banned if it has generated "maxretry" during the last "findtime"\r\n# seconds.\r\nfindtime  = 1h\r\n\r\n# "maxretry" is the number of failures before a host get banned.\r\nmaxretry = 5\n'})}),"\n",(0,s.jsx)(n.p,{children:"After 5 attempts within the last hour the IP will be blocked for 1 day. A wide range of services those rules can be applied to can be found at the bottom of the file, e.g.:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:'[sshd]\r\n\r\n# To use more aggressive sshd modes set filter parameter "mode" in jail.local:\r\n# normal (default), ddos, extra or aggressive (combines all).\r\n# See "tests/files/logs/sshd" or "filter.d/sshd.conf" for usage example and details.\r\nmode   = normal\r\nport    = ssh,ftps,12345\r\nlogpath = %(sshd_log)s\r\nbackend = %(sshd_backend)s\n'})}),"\n",(0,s.jsx)(n.p,{children:"To ignore specific IPs, add them to the ignoreip line. By default, this command will not ban the localhost. If you work from a single IP address often, it may be beneficial to add it to the ignore list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cfg",children:'# "ignoreself" specifies whether the local resp. own IP addresses should be ignored\r\n# (default is true). Fail2ban will not ban a host which matches such addresses.\r\nignoreself = true\r\n\r\n# "ignoreip" can be a list of IP addresses, CIDR masks or DNS hosts. Fail2ban\r\n# will not ban a host which matches an address in this list. Several addresses\r\n# can be defined using space (and/or comma) separator.\r\n#ignoreip = 127.0.0.1/8 ::1\r\nignoreip = 127.0.0.1/8 192.168.2.112\n'})}),"\n",(0,s.jsx)(n.p,{children:"If you wish to whitelist IPs only for certain jails, this can be done with the fail2ban-client command. Replace JAIL with the name of your jail, and 123.45.67.89 with the IP you wish to whitelist."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"fail2ban-client set JAIL addignoreip 123.45.67.89\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Now activate the SSH Jail to apply your rules to the SSH service by creating another file called ",(0,s.jsx)(n.code,{children:"sshd.local"})," - add everything in here that you want to add on top of the default settings in ",(0,s.jsx)(n.code,{children:"jail.local"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# nano /etc/fail2ban/sshd.local\r\n[sshd]\r\nenabled = true\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If using CentOS or Fedora you will need to change the backend option in ",(0,s.jsx)(n.code,{children:"jail.local"})," from auto to ",(0,s.jsx)(n.strong,{children:"systemd"}),". This is not necessary on Debian or Ubuntu, even though both use systemd as well. (Still true??)"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"email-alerts",children:"Email Alerts"}),"\n",(0,s.jsx)(n.p,{children:"To receive email when fail2ban is triggered, adjust the email settings:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"destemail"}),": The email address where you would like to receive the emails."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sendername"}),": The name under which the email shows up."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"sender"}),": The email address from which Fail2ban will send emails."]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"}),"\r\nIf unsure of what to put under sender, run the command sendmail -t ",(0,s.jsx)(n.a,{href:"mailto:user@email.com",children:"user@email.com"}),", replacing ",(0,s.jsx)(n.a,{href:"mailto:user@email.com",children:"user@email.com"})," with your email address. Check your email (including spam folders, if needed) and review the sender email. This address can be used for the above configuration."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You will also need to adjust the action setting, which defines what actions occur when the threshold for ban is met. The default, %(action_)s, only bans the user. %(action_mw)s will ban and send an email with a WhoIs report; while %(action_mwl)s will ban and send an email with the WhoIs report and all relevant lines in the log file. This can also be changed on a jail-specific basis."}),"\n",(0,s.jsx)(n.h2,{id:"enable-fail2ban",children:"Enable fail2ban"}),"\n",(0,s.jsx)(n.p,{children:"Next enable and start the fail2ban service."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"systemctl enable --now fail2ban\r\nsystemctl status fail2ban\n"})}),"\n",(0,s.jsx)(n.h3,{id:"failban-client-commands",children:"failban-client commands"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"fail2ban-client COMMAND\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"start"}),": Starts the Fail2ban server and jails."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"reload"}),": Reloads Fail2ban\u2019s configuration files."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"reload"})," JAIL: Replaces JAIL with the name of a Fail2ban jail; this will reload the jail."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"stop"}),": Terminates the server."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"status"}),": Will show the status of the server, and enable jails."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"status"})," JAIL: Will show the status of the jail, including any currently-banned IPs."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To check the status of fail2ban and make sure the jail is enabled enter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"fail2ban-client status\r\n\r\nStatus\r\n|- Number of jail:\t1\r\n`- Jail list:\tsshd\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"fail2ban-client status sshd\r\nStatus for the jail: sshd\r\n|- Filter\r\n|  |- Currently failed:\t8\r\n|  |- Total failed:\t4399\r\n|  `- Journal matches:\t_SYSTEMD_UNIT=sshd.service + _COMM=sshd\r\n`- Actions\r\n   |- Currently banned:\t101\r\n   |- Total banned:\t684\r\n   `- Banned IP list:   ...\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"tail -f /var/log/fail2ban.log\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Check IP address geo location and add country ban lists where necessary ",(0,s.jsx)(n.code,{children:"whois ip-addrss | grep -i country"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"unbanning-an-ip-address",children:"Unbanning an IP Address"}),"\n",(0,s.jsx)(n.p,{children:'In order to remove an IP address from the banned list, parameter IPADDRESS is set to appropriate IP which needs unbanning. The name "sshd" is the name of the jail, in this case the "sshd" jail that we configured above. The following command does the job.'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"fail2ban-client set sshd unbanip IPADDRESS\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},574476:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-ec671595d585b88a85b017a7908fb619.jpg"},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>r});var s=a(296540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);