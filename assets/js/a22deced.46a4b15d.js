"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[32035],{756736:(e,A,n)=>{n.r(A),n.d(A,{assets:()=>c,contentTitle:()=>r,default:()=>i,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var t=n(474848),o=n(28453);const a={sidebar_position:8090,slug:"2019-09-19",title:"Creating Magento 2 Console Commands",authors:"mpolinowski",tags:["Magento"]},r=void 0,s={id:"Development/Magento/2019-09-19--magento2-console-commands/index",title:"Creating Magento 2 Console Commands",description:"TST, Hongkong",source:"@site/docs/Development/Magento/2019-09-19--magento2-console-commands/index.mdx",sourceDirName:"Development/Magento/2019-09-19--magento2-console-commands",slug:"/Development/Magento/2019-09-19--magento2-console-commands/2019-09-19",permalink:"/docs/Development/Magento/2019-09-19--magento2-console-commands/2019-09-19",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Magento/2019-09-19--magento2-console-commands/index.mdx",tags:[{label:"Magento",permalink:"/docs/tags/magento"}],version:"current",sidebarPosition:8090,frontMatter:{sidebar_position:8090,slug:"2019-09-19",title:"Creating Magento 2 Console Commands",authors:"mpolinowski",tags:["Magento"]},sidebar:"tutorialSidebar",previous:{title:"Magento 2 UI Components",permalink:"/docs/Development/Magento/2019-09-20--magento2-ui-components/2019-09-20"},next:{title:"Creating Magento 2 Cron Jobs",permalink:"/docs/Development/Magento/2019-09-18--magento2-cronjobs/2019-09-18"}},c={},m=[{value:"Command Line Interface",id:"command-line-interface",level:2}];function d(e){const A={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"TST, Hongkong",src:n(444425).A+"",width:"1500",height:"702"})}),"\n",(0,t.jsxs)(A.ul,{children:["\n",(0,t.jsx)(A.li,{children:(0,t.jsx)(A.a,{href:"#command-line-interface",children:"Command Line Interface"})}),"\n"]}),"\n",(0,t.jsx)(A.h2,{id:"command-line-interface",children:"Command Line Interface"}),"\n",(0,t.jsxs)(A.p,{children:["To create custom commands to the CLI interface add a folder called ",(0,t.jsx)(A.code,{children:"./Console/Command"})," to your Custom Magento 2 Module. Here we can create our custom command ",(0,t.jsx)(A.code,{children:"AddItem.php"}),":"]}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-php",children:"<?php\r\n\r\nnamespace INSTAR\\SampleModule\\Console\\Command;\r\n\r\nuse Symfony\\Component\\Console\\Command\\Command;\r\nuse Symfony\\Component\\Console\\Input\\InputArgument;\r\nuse Symfony\\Component\\Console\\Input\\InputInterface;\r\nuse Symfony\\Component\\Console\\Output\\OutputInterface;\r\nuse INSTAR\\SampleModule\\Model\\ItemFactory;\r\nuse Magento\\Framework\\Console\\Cli;\r\n\r\nclass AddItem extends Command\r\n{\r\n    const INPUT_KEY_NAME = 'name';\r\n    const INPUT_KEY_DESCRIPTION = 'description';\r\n\r\n    private $itemFactory;\r\n\r\n    public function __construct(ItemFactory $itemFactory)\r\n    {\r\n        $this->itemFactory = $itemFactory;\r\n        parent::__construct();\r\n    }\r\n\r\n    protected function configure()\r\n    {\r\n        $this->setName('instar:item:add')\r\n            ->addArgument(\r\n                self::INPUT_KEY_NAME,\r\n                InputArgument::REQUIRED,\r\n                'Item name'\r\n            )->addArgument(\r\n                self::INPUT_KEY_DESCRIPTION,\r\n                InputArgument::OPTIONAL,\r\n                'Item description'\r\n            );\r\n        parent::configure();\r\n    }\r\n\r\n    protected function execute(InputInterface $input, OutputInterface $output)\r\n    {\r\n        $item = $this->itemFactory->create();\r\n        $item->setName($input->getArgument(self::INPUT_KEY_NAME));\r\n        $item->setDescription($input->getArgument(self::INPUT_KEY_DESCRIPTION));\r\n        $item->setIsObjectNew(true);\r\n        $item->save();\r\n        return Cli::RETURN_SUCCESS;\r\n    }\r\n}\n"})}),"\n",(0,t.jsxs)(A.p,{children:["Magento 2 uses the Symfony framework to create command line commands. This examples imports the necessary modules from Symfony and creates a command that accepts 2 inputs - an item name and description. We now need to implement this command so that those values can be written to our modules database table - for this we have to add a ",(0,t.jsx)(A.strong,{children:"Dependency Injection"})," configuration to our module with ",(0,t.jsx)(A.code,{children:"./etc/di.xml"}),":"]}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-xml",children:'<?xml version="1.0"?>\r\n<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\r\n    <type name="Magento\\Framework\\Console\\CommandList">\r\n        <arguments>\r\n           <argument name="commands" xsi:type="array">\r\n                <item name="instarAddItem" xsi:type="object">INSTAR\\SampleModule\\Console\\Command\\AddItem</item>\r\n            </argument>\r\n        </arguments>\r\n    </type>\r\n</config>\n'})}),"\n",(0,t.jsx)(A.p,{children:"Now flush the Magento cache (all XML files are cached by Magento - changing them always requires a flush):"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-bash",children:"bin/magento cache:flush\n"})}),"\n",(0,t.jsx)(A.p,{children:"The list of available Magento commands should now contain the new command we created:"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-bash",children:"root@Magento2 /var/www/html/magento # bin/magento\r\nMagento CLI 2.3.3\r\n\r\nUsage:\r\n  command [options] [arguments]\r\n\r\nOptions:\r\n  -h, --help            Display this help message\r\n  -q, --quiet           Do not output any message\r\n  -V, --version         Display this application version\r\n      --ansi            Force ANSI output\r\n      --no-ansi         Disable ANSI output\r\n  -n, --no-interaction  Do not ask any interactive question\r\n  -v|vv|vvv, --verbose  Increase the verbosity of messages: 1 for normal output, 2 for more verbose output and 3 for debug\r\n\r\nAvailable commands:\r\n  help                                        Displays help for a command\r\n  list                                        Lists commands\r\n instar\r\n  instar:item:add\n"})}),"\n",(0,t.jsx)(A.p,{children:"You can now use the command to add Items and append them to your modules database table:"}),"\n",(0,t.jsx)(A.pre,{children:(0,t.jsx)(A.code,{className:"language-bash",children:'bin/magento instar:item:add "Item 3" "Third item description"\n'})}),"\n",(0,t.jsx)(A.p,{children:"You can now verify that the item was added by connecting to your MySQL database, or by opening the view we created earlier:"}),"\n",(0,t.jsx)(A.p,{children:(0,t.jsx)(A.img,{alt:"Magento2 Module Components",src:n(515981).A+"",width:"994",height:"229"})})]})}function i(e={}){const{wrapper:A}={...(0,o.R)(),...e.components};return A?(0,t.jsx)(A,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},515981:(e,A,n)=>{n.d(A,{A:()=>t});const t="data:image/png;base64,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"},444425:(e,A,n)=>{n.d(A,{A:()=>t});const t=n.p+"assets/images/photo-kt456d_645dhfh6dgjkhg4_d-70ccbc4377a1ea8b619cb15112ad5913.jpg"},28453:(e,A,n)=>{n.d(A,{R:()=>r,x:()=>s});var t=n(296540);const o={},a=t.createContext(o);function r(e){const A=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function s(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:A},e.children)}}}]);