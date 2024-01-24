"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[2666],{36744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var r=t(785893),o=t(603905);const s={sidebar_position:9e3,slug:"2019-09-18",title:"Creating Magento 2 Cron Jobs",authors:"mpolinowski",tags:["Magento"]},a=void 0,c={id:"Development/Magento/2019-09-18--magento2-cronjobs/index",title:"Creating Magento 2 Cron Jobs",description:"Pokhara, Nepal",source:"@site/docs/Development/Magento/2019-09-18--magento2-cronjobs/index.mdx",sourceDirName:"Development/Magento/2019-09-18--magento2-cronjobs",slug:"/Development/Magento/2019-09-18--magento2-cronjobs/2019-09-18",permalink:"/docs/Development/Magento/2019-09-18--magento2-cronjobs/2019-09-18",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-18--magento2-cronjobs/index.mdx",tags:[{label:"Magento",permalink:"/docs/tags/magento"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2019-09-18",title:"Creating Magento 2 Cron Jobs",authors:"mpolinowski",tags:["Magento"]},sidebar:"tutorialSidebar",previous:{title:"Creating Magento 2 Console Commands",permalink:"/docs/Development/Magento/2019-09-19--magento2-console-commands/2019-09-19"},next:{title:"Creating Magento 2 Modules",permalink:"/docs/Development/Magento/2019-09-17--magento2-modules/2019-09-17"}},d={},i=[];function l(e){const n={code:"code",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Pokhara, Nepal",src:t(550540).Z+"",width:"1500",height:"386"})}),"\n",(0,r.jsxs)(n.p,{children:["We can automate tasks using cron jobs in Magento. Let's start by adding a file ",(0,r.jsx)(n.code,{children:"./Cron/AddItem.php"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-php",children:"<?php\r\n\r\nnamespace INSTAR\\SampleModule\\Cron;\r\n\r\nuse INSTAR\\SampleModule\\Model\\ItemFactory;\r\nuse INSTAR\\SampleModule\\Model\\Config;\r\n\r\nclass AddItem\r\n{\r\n    private $itemFactory;\r\n\r\n    public function __construct(ItemFactory $itemFactory)\r\n    {\r\n        $this->itemFactory = $itemFactory;\r\n    }\r\n\r\n    public function execute()\r\n    {\r\n        $this->itemFactory->create()\r\n            ->setName('Scheduled item')\r\n            ->setDescription('Created at ' . time())\r\n            ->save();\r\n    }\r\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To execute this job on a schedule we now have to add a file ",(0,r.jsx)(n.code,{children:"./etc/crontab.xml"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0"?>\r\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_Cron:etc/crontab.xsd">\r\n    <group id="default">\r\n        <job name="instarAddItem" instance="INSTAR\\SampleModule\\Cron\\AddItem" method="execute">\r\n            \x3c!-- Every five minutes --\x3e\r\n            <schedule>*/5 * * * *</schedule>\r\n            \x3c!--<config_path>instar/general/cron_expression</config_path>--\x3e\r\n        </job>\r\n    </group>\r\n</config>\n'})}),"\n",(0,r.jsx)(n.p,{children:"This configuration set's our job up to be executed every 5 minutes:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Allowed Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MIN"}),(0,r.jsx)(n.td,{children:"Minute field"}),(0,r.jsx)(n.td,{children:"0 to 59, *"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"HOUR"}),(0,r.jsx)(n.td,{children:"Hour field"}),(0,r.jsx)(n.td,{children:"0 to 23, *"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DOM"}),(0,r.jsx)(n.td,{children:"Day of Month"}),(0,r.jsx)(n.td,{children:"1-31, *"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"MON"}),(0,r.jsx)(n.td,{children:"Month field"}),(0,r.jsx)(n.td,{children:"1-12, *"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"DOW"}),(0,r.jsx)(n.td,{children:"Day Of Week"}),(0,r.jsx)(n.td,{children:"0-6, *"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CMD"}),(0,r.jsx)(n.td,{children:"Command"}),(0,r.jsx)(n.td,{children:"Any command to be executed."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"You can now execute all crontabs with the following Magento command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/magento cron:run\r\nRan jobs by schedule.\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can check your Magento database to see if the crontab is now set to execute:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM cron_schedule;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You should find entries for ",(0,r.jsx)(n.code,{children:"instarAddItem"})," inside the table:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT * FROM cron_schedule WHERE job_code = 'instarAddItem';\r\n+-------------+---------------+---------+---------------------+-------------+-------------+\r\n| schedule_id | job_code      | status  | scheduled_at        | executed_at | finished_at |\r\n+-------------+---------------+---------+---------------------+-------------+-------------+\r\n|         536 | instarAddItem | pending | 2020-01-24 10:20:00 | NULL        | NULL        |\r\n|         537 | instarAddItem | pending | 2020-01-24 10:25:00 | NULL        | NULL        |\r\n|         538 | instarAddItem | pending | 2020-01-24 10:30:00 | NULL        | NULL        |\r\n|         539 | instarAddItem | pending | 2020-01-24 10:35:00 | NULL        | NULL        |\r\n+-------------+---------------+---------+---------------------+-------------+-------------+\r\n4 rows in set (0.00 sec)\n"})}),"\n",(0,r.jsx)(n.p,{children:"In this case the job has not yet been executed - re-run the crontab and check again:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"bin/magento cron:run\n"})}),"\n",(0,r.jsx)(n.p,{children:"The first run was now scheduled to execute and ran successfully:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT * FROM cron_schedule WHERE job_code = 'instarAddItem';\r\n+-------------+---------------+---------+---------------------+---------------------+---------------------+\r\n| schedule_id | job_code      | status  | scheduled_at        | executed_at         | finished_at         |\r\n+-------------+---------------+---------+---------------------+---------------------+---------------------+\r\n|         536 | instarAddItem | success | 2020-01-24 10:20:00 | 2020-01-24 10:26:16 | 2020-01-24 10:26:16 |\r\n|         537 | instarAddItem | pending | 2020-01-24 10:25:00 | NULL                | NULL                |\r\n|         538 | instarAddItem | pending | 2020-01-24 10:30:00 | NULL                | NULL                |\r\n|         539 | instarAddItem | pending | 2020-01-24 10:35:00 | NULL                | NULL                |\r\n+-------------+---------------+---------+---------------------+---------------------+---------------------+\r\n4 rows in set (0.01 sec)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To automate this process create a cronjob or SystemD script to execute ",(0,r.jsx)(n.code,{children:"bin/magento cron:run"})," in the desired time interval."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Magento 2 Cronjobs",src:t(435936).Z+"",width:"1070",height:"272"})})]})}function h(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>i});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=r.createContext({}),i=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=i(t),m=o,p=u["".concat(d,".").concat(m)]||u[m]||l[m]||s;return t?r.createElement(p,a(a({ref:n},h),{},{components:t})):r.createElement(p,a({ref:n},h))}));h.displayName="MDXCreateElement"},435936:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/Magento2_Module_Components_01-fa5c7e9bca99e7589bc1049655decc67.png"},550540:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-5f1aafeeaf7a431051d4eed320898bdb.jpg"}}]);