"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[42266],{413153:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>o});var r=t(474848),s=t(28453);const a={sidebar_position:9040,slug:"2020-06-20",title:"Salt Reactor and System Events",authors:"mpolinowski",tags:["LINUX","Salt"]},u=void 0,i={id:"DevOps/Salt/2020-06-20--salt-reactor-events/index",title:"Salt Reactor and System Events",description:"Victoria Harbour, Hong Kong",source:"@site/docs/DevOps/Salt/2020-06-20--salt-reactor-events/index.md",sourceDirName:"DevOps/Salt/2020-06-20--salt-reactor-events",slug:"/DevOps/Salt/2020-06-20--salt-reactor-events/2020-06-20",permalink:"/docs/DevOps/Salt/2020-06-20--salt-reactor-events/2020-06-20",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Salt/2020-06-20--salt-reactor-events/index.md",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Salt",permalink:"/docs/tags/salt"}],version:"current",sidebarPosition:9040,frontMatter:{sidebar_position:9040,slug:"2020-06-20",title:"Salt Reactor and System Events",authors:"mpolinowski",tags:["LINUX","Salt"]},sidebar:"tutorialSidebar",previous:{title:"Salt Beacons Module",permalink:"/docs/DevOps/Salt/2020-06-21--salt-events-and-thirdparty-apps/2020-06-21"},next:{title:"Salt Mine & Orchestrate",permalink:"/docs/DevOps/Salt/2020-06-19--salt-mine-orchestrate/2020-06-19"}},l={},o=[{value:"Salt Master Events",id:"salt-master-events",level:2},{value:"Custom Events",id:"custom-events",level:2},{value:"event.send",id:"eventsend",level:3},{value:"Reactor",id:"reactor",level:2},{value:"Invoking a Minion State by Event",id:"invoking-a-minion-state-by-event",level:3},{value:"Forwarding Pillar Data",id:"forwarding-pillar-data",level:3}];function c(n){const e={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Victoria Harbour, Hong Kong",src:t(333895).A+"",width:"1500",height:"561"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#salt-master-events",children:"Salt Master Events"})}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"#custom-events",children:"Custom Events"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#eventsend",children:"event.send"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"#reactor",children:"Reactor"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#invoking-a-minion-state-by-event",children:"Invoking a Minion State by Event"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"#forwarding-pillar-data",children:"Forwarding Pillar Data"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"salt-master-events",children:"Salt Master Events"}),"\n",(0,r.jsxs)(e.p,{children:["These events are fired on the ",(0,r.jsx)(e.a,{href:"https://docs.saltstack.com/en/master/topics/event/master_events.html",children:"Salt Master event bus"}),"."]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Salt Master Events"}),"\n",(0,r.jsx)(e.li,{children:"Authentication events"}),"\n",(0,r.jsx)(e.li,{children:"Start events"}),"\n",(0,r.jsx)(e.li,{children:"Key events"}),"\n",(0,r.jsx)(e.li,{children:"Job events"}),"\n",(0,r.jsx)(e.li,{children:"Runner Events"}),"\n",(0,r.jsx)(e.li,{children:"Presence Events"}),"\n",(0,r.jsx)(e.li,{children:"Cloud Events"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"To view events run the following command on your master:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt-run state.event pretty=true\n"})}),"\n",(0,r.jsx)(e.p,{children:"Or this on your minion:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt-call state.event pretty=true\n"})}),"\n",(0,r.jsxs)(e.p,{children:["If you now run a ",(0,r.jsx)(e.code,{children:"salt ubuntuAsus test.ping"})," you will start to see an event log like:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-json",children:'20200807165432241482    {\r\n    "_stamp": "2020-08-07T16:54:32.241679",\r\n    "minions": [\r\n        "ubuntuAsus"\r\n    ]\r\n}\r\nsalt/job/20200807165432241482/new       {\r\n    "_stamp": "2020-08-07T16:54:32.242042",\r\n    "arg": [],\r\n    "fun": "test.ping",\r\n    "jid": "20200807165432241482",\r\n    "minions": [\r\n        "ubuntuAsus"\r\n    ],\r\n    "missing": [],\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob",\r\n    "user": "root"\r\n}\r\nsalt/job/20200807165432241482/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-07T16:54:32.295023",\r\n    "cmd": "_return",\r\n    "fun": "test.ping",\r\n    "fun_args": [],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200807165432241482",\r\n    "retcode": 0,\r\n    "return": true,\r\n    "success": true\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"You can see the timestamped event going out from the master and the return from your minion."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"salt.runners.state"})}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://docs.saltstack.com/en/master/ref/runners/all/salt.runners.state.html#salt.runners.state.event",children:"Watch Salt's event bus and block until the given tag is matched"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"# Reboot a minion and run highstate when it comes back online\r\nsalt 'ubuntuAsus' system.reboot && \\\\\r\n    salt-run state.event 'salt/minion/ubuntuAsus/start' count=1 quiet=True && \\\\\r\n    salt 'ubuntuAsus' state.highstate\r\n\r\n# Reboot multiple minions and run highstate when all are back online\r\nsalt -L 'ubuntuAsus,ubuntuMaster' system.reboot && \\\\\r\n    salt-run state.event 'salt/minion/*/start' count=3 quiet=True && \\\\\r\n    salt -L 'ubuntuAsus,ubuntuMaster' state.highstate\n"})}),"\n",(0,r.jsx)(e.h2,{id:"custom-events",children:"Custom Events"}),"\n",(0,r.jsxs)(e.p,{children:["Use the ",(0,r.jsx)(e.a,{href:"https://docs.saltstack.com/en/master/ref/modules/all/salt.modules.event.html#salt.modules.event.send",children:"Salt Event System"})," to fire events from the master to the minion and vice-versa."]}),"\n",(0,r.jsx)(e.h3,{id:"eventsend",children:"event.send"}),"\n",(0,r.jsxs)(e.p,{children:["Start the event listener on your master ",(0,r.jsx)(e.code,{children:"salt-run state.event pretty=true"})," and send a custom event from your minion:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt-call event.send instar/custom/event\n"})}),"\n",(0,r.jsx)(e.p,{children:"You will see the incoming event on your master:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'salt/auth       {\r\n    "_stamp": "2020-08-07T17:44:14.155523",\r\n    "act": "accept",\r\n    "id": "ubuntuAsus",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----",\r\n    "result": true\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-07T17:44:14.242055"\r\n}\r\ninstar/custom/event     {\r\n    "_stamp": "2020-08-07T17:44:14.294823",\r\n    "cmd": "_minion_event",\r\n    "data": {\r\n        "__pub_fun": "event.send",\r\n        "__pub_jid": "20200807174414296024",\r\n        "__pub_pid": 85669,\r\n        "__pub_tgt": "salt-call"\r\n    },\r\n    "id": "ubuntuAsus",\r\n    "tag": "instar/custom/event"\r\n}\r\nsalt/job/20200807174414299104/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-07T17:44:14.299934",\r\n    "arg": [\r\n        "instar/custom/event"\r\n    ],\r\n    "cmd": "_return",\r\n    "fun": "event.send",\r\n    "fun_args": [\r\n        "instar/custom/event"\r\n    ],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200807174414299104",\r\n    "retcode": 0,\r\n    "return": true,\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob"\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"You can also send JSON formatted data with your event:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'salt-call event.send instar/custom/event \'{"what": "something happened", "is it serious": true}\'\n'})}),"\n",(0,r.jsx)(e.p,{children:"You will see the incoming event on your master:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'salt/auth       {\r\n    "_stamp": "2020-08-07T18:22:48.152369",\r\n    "act": "accept",\r\n    "id": "ubuntuAsus",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----",\r\n    "result": true\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-07T18:22:48.242329"\r\n}\r\ninstar/custom/event     {\r\n    "_stamp": "2020-08-07T18:22:48.296609",\r\n    "cmd": "_minion_event",\r\n    "data": {\r\n        "__pub_fun": "event.send",\r\n        "__pub_jid": "20200807182248298801",\r\n        "__pub_pid": 85938,\r\n        "__pub_tgt": "salt-call",\r\n        "is it serious": true,\r\n        "what": "something happened"\r\n    },\r\n    "id": "ubuntuAsus",\r\n    "tag": "instar/custom/event"\r\n}\r\nsalt/job/20200807182248300952/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-07T18:22:48.302004",\r\n    "arg": [\r\n        "instar/custom/event",\r\n        "{\\"what\\": \\"something happened\\", \\"is it serious\\": true}"\r\n    ],\r\n    "cmd": "_return",\r\n    "fun": "event.send",\r\n    "fun_args": [\r\n        "instar/custom/event",\r\n        "{\\"what\\": \\"something happened\\", \\"is it serious\\": true}"\r\n    ],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200807182248300952",\r\n    "retcode": 0,\r\n    "return": true,\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob"\r\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"You can also add environment variables, grains or pillar data with your event:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt-call event.send instar/custom/event with_grains=true  //send all grains\r\n\r\nsalt-call event.send instar/custom/event with_grains='[os]'\n"})}),"\n",(0,r.jsx)(e.p,{children:"You will see the incoming event on your master:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'salt/auth       {\r\n    "_stamp": "2020-08-07T18:35:38.536997",\r\n    "act": "accept",\r\n    "id": "ubuntuAsus",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----",\r\n    "result": true\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-07T18:35:38.622552"\r\n}\r\ninstar/custom/event     {\r\n    "_stamp": "2020-08-07T18:35:38.669904",\r\n    "cmd": "_minion_event",\r\n    "data": {\r\n        "__pub_fun": "event.send",\r\n        "__pub_jid": "20200807183538672084",\r\n        "__pub_pid": 86062,\r\n        "__pub_tgt": "salt-call",\r\n        "grains": {\r\n            "os": "Ubuntu"\r\n        }\r\n    },\r\n    "id": "ubuntuAsus",\r\n    "tag": "instar/custom/event"\r\n}\r\nsalt/job/20200807183538673638/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-07T18:35:38.674478",\r\n    "arg": [\r\n        "instar/custom/event",\r\n        "with_grains=[os]"\r\n    ],\r\n    "cmd": "_return",\r\n    "fun": "event.send",\r\n    "fun_args": [\r\n        "instar/custom/event",\r\n        "with_grains=[os]"\r\n    ],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200807183538673638",\r\n    "retcode": 0,\r\n    "return": true,\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob"\r\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"reactor",children:"Reactor"}),"\n",(0,r.jsx)(e.h3,{id:"invoking-a-minion-state-by-event",children:"Invoking a Minion State by Event"}),"\n",(0,r.jsxs)(e.p,{children:["The Salt Reactor can be configured to listen to ",(0,r.jsx)(e.code,{children:"salt.events"})," and execute SLS files when triggered. We can configure Reactor by adding the following lines to our local Master config ",(0,r.jsx)(e.code,{children:"/etc/salt/master.d/local.conf "})," :"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"reactor:\r\n  - 'instar/custom/*':\r\n    - /srv/reactor/highstate.sls\n"})}),"\n",(0,r.jsxs)(e.p,{children:["And create the ",(0,r.jsx)(e.code,{children:"nano /srv/reactor/highstate.sls"})," file:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"run_highstate:\r\n  cmd.state.highstate:\r\n    - tgt: 'ubuntuAsus'\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsxs)(e.em,{children:["(Reactor equivalent to ",(0,r.jsx)(e.code,{children:"salt ubuntuAsus state.highstate"}),")"]})}),"\n",(0,r.jsx)(e.p,{children:"And restart the master:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"systemctl restart salt-master\n"})}),"\n",(0,r.jsxs)(e.p,{children:["We can now trigger an event on our minion that matches ",(0,r.jsx)(e.code,{children:"instar/custom/*"})," to see our Reactor spring into action:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt-call event.send instar/custom/event\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:'salt/auth       {\r\n    "_stamp": "2020-08-07T19:33:47.014561",\r\n    "act": "accept",\r\n    "id": "ubuntuAsus",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----",\r\n    "result": true\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-07T19:33:47.119011"\r\n}\r\ninstar/custom/event     {\r\n    "_stamp": "2020-08-07T19:33:47.221573",\r\n    "cmd": "_minion_event",\r\n    "data": {\r\n        "__pub_fun": "event.send",\r\n        "__pub_jid": "20200807193347220371",\r\n        "__pub_pid": 86296,\r\n        "__pub_tgt": "salt-call"\r\n    },\r\n    "id": "ubuntuAsus",\r\n    "tag": "instar/custom/event"\r\n}\r\nsalt/job/20200807193347229445/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-07T19:33:47.231956",\r\n    "arg": [\r\n        "instar/custom/event"\r\n    ],\r\n    "cmd": "_return",\r\n    "fun": "event.send",\r\n    "fun_args": [\r\n        "instar/custom/event"\r\n    ],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200807193347229445",\r\n    "retcode": 0,\r\n    "return": true,\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob"\r\n}\r\n20200807193349446458    {\r\n    "_stamp": "2020-08-07T19:33:49.447265",\r\n    "minions": [\r\n        "ubuntuAsus"\r\n    ]\r\n}\r\nsalt/job/20200807193349446458/new       {\r\n    "_stamp": "2020-08-07T19:33:49.447548",\r\n    "arg": [],\r\n    "fun": "state.highstate",\r\n    "jid": "20200807193349446458",\r\n    "minions": [\r\n        "ubuntuAsus"\r\n    ],\r\n    "missing": [],\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob",\r\n    "user": "root"\r\n}\r\nsalt/auth       {\r\n    "_stamp": "2020-08-07T19:33:49.464831",\r\n    "act": "accept",\r\n    "id": "ubuntuMaster",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----",\r\n    "result": true\r\n}\r\nsalt/auth       {\r\n    "_stamp": "2020-08-07T19:33:49.469238",\r\n    "act": "accept",\r\n    "id": "ubuntuAsus",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----",\r\n    "result": true\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-07T19:33:49.625946"\r\n}\r\nsalt/job/20200807193349446458/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-07T19:33:49.773631",\r\n    "cmd": "_return",\r\n    "fun": "state.highstate",\r\n    "fun_args": [],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200807193349446458",\r\n    "out": "highstate",\r\n    "retcode": 2,\r\n    "return": {\r\n        "no_|-states_|-states_|-None": {\r\n            "__run_num__": 0,\r\n            "changes": {},\r\n            "comment": "No Top file or master_tops data matches found. Please see master log for details.",\r\n            "name": "No States",\r\n            "result": false\r\n        }\r\n    },\r\n    "success": false\r\n}\r\nno.None {\r\n    "__run_num__": 0,\r\n    "_stamp": "2020-08-07T19:33:49.773962",\r\n    "changes": {},\r\n    "comment": "No Top file or master_tops data matches found. Please see master log for details.",\r\n    "name": "No States",\r\n    "result": false,\r\n    "retcode": 2\r\n}\n'})}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsx)(e.p,{children:"The highstate event was successfully triggered by the Reactor - have to check why the top file for it was not found."}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"forwarding-pillar-data",children:"Forwarding Pillar Data"}),"\n",(0,r.jsxs)(e.p,{children:["We previously created a file that downloaded source code from Github: ",(0,r.jsx)(e.code,{children:"nano /srv/salt/apptest.sls"}),". Here we hardcoded the repository branch ",(0,r.jsx)(e.code,{children:"rev: master"}),". We can use Reactor to forward this information for us:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"{% from \"apache/map.sls\" import apache with context %}\r\n\r\n{% set version = salt.pillar.get('version', 'master') %}\r\n\r\ninclude:\r\n  - apache\r\n\r\napptest:\r\n  git.latest:\r\n    - name: https://github.com/mpolinowski/docker-elk.git\r\n    - rev: {{ version }}\r\n    - target: /opt/apptest\r\n    - watch_in:\r\n      - service: enable_apache\r\n\r\n...\r\n\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Query ",(0,r.jsx)(e.code,{children:"salt.pillar.get('version')"})," to set Git branch or default to ",(0,r.jsx)(e.code,{children:"master"}),". So we are now able to inject the branch by adding the respective pillar data to our state command:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt '*' state.sls apptest pillar='{version: development}'\n"})}),"\n",(0,r.jsxs)(e.p,{children:["We can now add an event to our Reactor config that should trigger this state - ",(0,r.jsx)(e.code,{children:"nano /etc/salt/master.d/local.conf "}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:"reactor:\r\n  - 'instar/custom/*':\r\n    - /srv/reactor/highstate.sls\r\n  - 'instar/deploy/testapp':\r\n    - /srv/reactor/deploy_testapp.sls\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Now we can add the Reactor script ",(0,r.jsx)(e.code,{children:"nano /srv/reactor/deploy_testapp.sls"}),":"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"deploy_testapp:\r\n  cmd.state.sls:\r\n    - tgt: {{ data.id }}\r\n    - kwarg:\r\n        mods: apptest\r\n        pillar:\r\n            version: {{ data.data.version }}\n"})}),"\n",(0,r.jsxs)(e.p,{children:["Which is the equivalent of running ",(0,r.jsx)(e.code,{children:"salt '*' state.sls mods=apptest"})," manually - the version has to be injected by the event that triggers our Reactor script. We can now listen to the event bus on our master ",(0,r.jsx)(e.code,{children:"salt-run state.event pretty=true"})," and manually trigger the ",(0,r.jsx)(e.code,{children:"instar/deploy/testapp"})," event on our minion:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"salt-call event.send instar/deploy/testapp version=master\n"})}),"\n",(0,r.jsx)(e.p,{children:"The event will be registered on our master:"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-yaml",children:'salt/auth       {\r\n    "_stamp": "2020-08-08T10:58:42.732432",\r\n    "act": "accept",\r\n    "id": "ubuntuAsus",\r\n    "pub": "-----BEGIN PUBLIC KEY-----\\nMIIBIjANBgkqhkiG9w=AQAB\\n-----END PUBLIC KEY-----"\r\n    "result": true\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-08T10:58:42.822297"\r\n}\r\ninstar/deploy/testapp   {\r\n    "_stamp": "2020-08-08T10:58:42.876885",\r\n    "cmd": "_minion_event",\r\n    "data": {\r\n        "__pub_fun": "event.send",\r\n        "__pub_jid": "20200808105842881554",\r\n        "__pub_pid": 3292,\r\n        "__pub_tgt": "salt-call",\r\n        "version": "master"\r\n    },\r\n    "id": "ubuntuAsus",\r\n    "tag": "instar/deploy/testapp"\r\n}\r\nsalt/job/20200808105842880875/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-08T10:58:42.881836",\r\n    "arg": [\r\n        "instar/deploy/testapp",\r\n        "version=master"\r\n    ],\r\n    "cmd": "_return",\r\n    "fun": "event.send",\r\n    "fun_args": [\r\n        "instar/deploy/testapp",\r\n        "version=master"\r\n    ],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200808105842880875",\r\n    "retcode": 0,\r\n    "return": true,\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob"\r\n}\r\n20200808105842909103    {\r\n    "_stamp": "2020-08-08T10:58:42.909751",\r\n    "minions": [\r\n        "ubuntuAsus"\r\n    ]\r\n}\r\nsalt/job/20200808105842909103/new       {\r\n    "_stamp": "2020-08-08T10:58:42.909976",\r\n    "arg": [\r\n        {\r\n            "__kwarg__": true,\r\n            "mods": "apptest",\r\n            "pillar": {\r\n                "version": "master"\r\n            }\r\n        }\r\n    ],\r\n    "fun": "state.sls",\r\n    "jid": "20200808105842909103",\r\n    "minions": [\r\n        "ubuntuAsus"\r\n    ],\r\n    "missing": [],\r\n    "tgt": "ubuntuAsus",\r\n    "tgt_type": "glob",\r\n    "user": "root"\r\n}\r\nminion/refresh/ubuntuAsus       {\r\n    "Minion data cache refresh": "ubuntuAsus",\r\n    "_stamp": "2020-08-08T10:58:43.041467"\r\n}\r\nsalt/job/20200808105842909103/ret/ubuntuAsus    {\r\n    "_stamp": "2020-08-08T10:58:49.734560",\r\n    "cmd": "_return",\r\n    "fun": "state.sls",\r\n    "fun_args": [\r\n        {\r\n            "mods": "apptest",\r\n            "pillar": {\r\n                "version": "master"\r\n            }\r\n        }\r\n    ],\r\n    "id": "ubuntuAsus",\r\n    "jid": "20200808105842909103",\r\n    "out": "highstate",\r\n    "retcode": 0,\r\n    "return": {\r\n        "event_|-notify_of_fail_|-apptest/failed_|-send": {\r\n            "__run_num__": 4,\r\n            "__sls__": "apptest",\r\n            "__state_ran__": false,\r\n            "changes": {},\r\n            "comment": "State was not run because onfail req did not change",\r\n            "duration": 0.004,\r\n            "result": true,\r\n            "start_time": "10:58:49.740913"\r\n        },\r\n        "git_|-apptest_|-https://github.com/mpolinowski/docker-elk.git_|-latest": {\r\n            "__id__": "apptest",\r\n            "__run_num__": 2,\r\n            "__sls__": "apptest",\r\n            "changes": {},\r\n            "comment": "Repository /opt/apptest is up-to-date",\r\n            "duration": 3184.049,\r\n            "name": "https://github.com/mpolinowski/docker-elk.git",\r\n            "result": true,\r\n            "start_time": "10:58:46.510959"\r\n        },\r\n        "module_|-reload_apache_|-service.stop_|-run": {\r\n            "__run_num__": 1,\r\n            "__sls__": "apptest",\r\n            "changes": {},\r\n            "comment": "No changes detected",\r\n            "duration": 0.006,\r\n            "result": true,\r\n            "start_time": "10:58:46.510837"\r\n        },\r\n        "pkg_|-install_apache_|-apache2_|-installed": {\r\n            "__id__": "install_apache",\r\n            "__run_num__": 0,\r\n            "__sls__": "apache",\r\n            "changes": {},\r\n            "comment": "All specified packages are already installed",\r\n            "duration": 22.176,\r\n            "name": "apache2",\r\n            "result": true,\r\n            "start_time": "10:58:44.051565"\r\n        },\r\n        "service_|-enable_apache_|-apache2_|-running": {\r\n            "__id__": "enable_apache",\r\n            "__run_num__": 3,\r\n            "__sls__": "apache",\r\n            "changes": {},\r\n            "comment": "The service apache2 is already running",\r\n            "duration": 43.795,\r\n            "name": "apache2",\r\n            "result": true,\r\n            "start_time": "10:58:49.695390"\r\n        }\r\n    },\r\n    "success": true\r\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(c,{...n})}):c(n)}},333895:(n,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0e827efd0efa56c96e223c481d0c2c45.jpg"},28453:(n,e,t)=>{t.d(e,{R:()=>u,x:()=>i});var r=t(296540);const s={},a=r.createContext(s);function u(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:u(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);