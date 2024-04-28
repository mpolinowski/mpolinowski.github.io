"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28172],{58944:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var t=o(474848),r=o(28453);const s={sidebar_position:4010,slug:"2022-11-11",title:"Hashicorp Nomad to run periodic backups",authors:"mpolinowski",tags:["Nomad","LINUX","osTicket"],description:"Dockerized version of Borg Backup Server with Docker and Nomad"},a=void 0,i={id:"DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/index",title:"Hashicorp Nomad to run periodic backups",description:"Dockerized version of Borg Backup Server with Docker and Nomad",source:"@site/docs/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/index.md",sourceDirName:"DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups",slug:"/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/2022-11-11",permalink:"/docs/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/2022-11-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Hashicorp/2022-11-11-hashicorp-nomad-for-borg-backups/index.md",tags:[{label:"Nomad",permalink:"/docs/tags/nomad"},{label:"LINUX",permalink:"/docs/tags/linux"},{label:"osTicket",permalink:"/docs/tags/os-ticket"}],version:"current",sidebarPosition:4010,frontMatter:{sidebar_position:4010,slug:"2022-11-11",title:"Hashicorp Nomad to run periodic backups",authors:"mpolinowski",tags:["Nomad","LINUX","osTicket"],description:"Dockerized version of Borg Backup Server with Docker and Nomad"},sidebar:"tutorialSidebar",previous:{title:"Hashicorp Nomad to Renew your TLS Certificates",permalink:"/docs/DevOps/Hashicorp/2022-11-12-hashicorp-nomad-certbot-renewal/2022-11-12"},next:{title:"Hashicorp Nomad to set up an OSTicket Helpdesk - Part II",permalink:"/docs/DevOps/Hashicorp/2022-10-25-hashicorp-nomad-for-osticket-part-ii/2022-10-25"}},c={},d=[{value:"From Docker to Nomad",id:"from-docker-to-nomad",level:2},{value:"Preparing the Nomad Client",id:"preparing-the-nomad-client",level:2},{value:"Periodic Runs",id:"periodic-runs",level:2},{value:"Batch",id:"batch",level:3},{value:"System Batch",id:"system-batch",level:3},{value:"Complete Nomad Job File",id:"complete-nomad-job-file",level:3},{value:"Running the Job",id:"running-the-job",level:2},{value:"Restore a Backup",id:"restore-a-backup",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shen Zhen, China",src:o(411494).A+"",width:"2230",height:"839"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#from-docker-to-nomad",children:"From Docker to Nomad"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#preparing-the-nomad-client",children:"Preparing the Nomad Client"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#periodic-runs",children:"Periodic Runs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#batch",children:"Batch"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#system-batch",children:"System Batch"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#complete-nomad-job-file",children:"Complete Nomad Job File"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#running-the-job",children:"Running the Job"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#restore-a-backup",children:"Restore a Backup"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/mpolinowski/nomadic-borg",children:"Github Repository"})}),"\n",(0,t.jsxs)(n.p,{children:["Preparation -> see ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Linux/2022-11-09--docker-borg-backupserver/2022-11-09",children:"Resistance is futile - Borg with Docker"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"from-docker-to-nomad",children:"From Docker to Nomad"}),"\n",(0,t.jsx)(n.p,{children:"I want to use Nomad to execute the following Docker command for me periodically to create daily backups of selected files:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  --rm \\\n  -e BORG_REPO=/opt/borg \\\n  -e BORG_PASSPHRASE=mypassword \\\n  -e BACKUP_DIRS=/data \\\n  -e ARCHIVE=osticket-db-$(date +%Y-%m-%d) \\\n  -e COMPRESSION=lz4 \\\n  -e PRUNE=1 \\\n  -e KEEP_DAILY=1 \\\n  -e KEEP_WEEKLY=0 \\\n  -e KEEP_MONTHLY=0 \\\n  -v /opt/borg/config:/root \\\n  -v /opt/borg/repo:/opt/borg \\\n  -v /opt/temp1:/data/temp1:ro \\\n  -v /opt/temp2:/data/temp2:ro \\\n  --security-opt label:disable \\\n  --name borg-backup \\\n  pschiffe/borg\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The server I deploy this container to must have the directory ",(0,t.jsx)(n.code,{children:"/opt/borg/config"})," that contains the Borg configuration (this will be auto-generated on the first run and then recycled). And the dir ",(0,t.jsx)(n.code,{children:"/opt/borg/repo"})," (this is most likely going to change to a mounted network storage later on) that will contain the password protected backup."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"BACKUP_DIRS"})," variable is set to ",(0,t.jsx)(n.code,{children:"/data"})," - this is the directory inside the Docker container that will be backed-up. Every directory that I want to be backed up from my host system needs to be mounted in that location - this can be several locations from all over the host system, e.g. ",(0,t.jsx)(n.code,{children:" -v /opt/temp1:/data/temp1:ro \\"}),". These directories will be mounted as ",(0,t.jsx)(n.em,{children:"read-only"})," to make sure that the source data is not going to be altered in any way."]}),"\n",(0,t.jsxs)(n.p,{children:["This backup is a backup on a backup - the server itself is constantly mirrored in itself. This service is only meant to provide a quick way to revert changes made to a database without having to role back the entire server. So I activated ",(0,t.jsx)(n.strong,{children:"Pruning"})," and I only want to keep 1 backup - but I am not sure yet if setting ",(0,t.jsx)(n.em,{children:"monthly"})," and ",(0,t.jsx)(n.em,{children:"weekly"})," to 0 actually works. This is just a test-run."]}),"\n",(0,t.jsx)(n.h2,{id:"preparing-the-nomad-client",children:"Preparing the Nomad Client"}),"\n",(0,t.jsx)(n.p,{children:"The Client is a server running OSTicket and MariaDB + a NGINX Ingress. Since all of them are provisioned using Nomad I already have the volume mount for the directory I want to backup - the MariaDB data dir. All I need to add now is the Borg configuration and repo path to my Nomad Client:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"/etc/nomad.d/client.hcl"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'client {\n  enabled = true\n  servers = ["myserver:port"]\n\n  host_volume "letsencrypt" {\n    path = "/etc/letsencrypt"\n    read_only = false\n  }\n\n  host_volume "osticket_db" {\n    path = "/opt/osticket/db"\n    read_only = false\n  }\n\n  host_volume "borg_config" {\n    path = "/opt/borg/config"\n    read_only = false\n  }\n\n  host_volume "borg_repo" {\n    path = "/opt/borg/repo"\n    read_only = false\n  }\n}\n\n# Docker Configuration\nplugin "docker" {\n\n  volumes {\n    enabled      = true\n    selinuxlabel = "z"\n  }\n\n  allow_privileged = false\n  allow_caps       = ["chown", "net_raw"]\n\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"periodic-runs",children:"Periodic Runs"}),"\n",(0,t.jsxs)(n.p,{children:["I am going to use the ",(0,t.jsx)(n.code,{children:"periodic"}),' stanza to run the Nomad job at fixed times, dates, or intervals. The easiest way to think about the periodic scheduler is "Nomad cron" or "distributed cron":']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'job "docs" {\n  periodic {\n    cron = "*/15 * * * * *"\n    time_zone = "Europe/Berlin"\n    prohibit_overlap = true\n    enabled = true\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To get started I will just use ",(0,t.jsx)(n.code,{children:'cron = "@daily"'})," to execute the job once a day. But we first have to specify the ",(0,t.jsx)(n.strong,{children:"Scheduler"}),". Nomad has four scheduler types that can be used when creating your job: ",(0,t.jsx)(n.code,{children:"service"}),", ",(0,t.jsx)(n.code,{children:"batch"}),", ",(0,t.jsx)(n.code,{children:"system"})," and ",(0,t.jsx)(n.code,{children:"sysbatch"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Error during plan: Unexpected response code: 500 (1 error occurred:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'Periodic can only be used with "batch" or "sysbatch" scheduler)'}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"batch",children:"Batch"}),"\n",(0,t.jsx)(n.p,{children:"Batch jobs are much less sensitive to short term performance fluctuations and are short lived, finishing in a few minutes to a few days. Although the batch scheduler is very similar to the service scheduler, it makes certain optimizations for the batch workload."}),"\n",(0,t.jsxs)(n.p,{children:["Batch jobs are intended to run until they exit successfully. Batch tasks that exit with an error are handled according to the job's restart and ",(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/docs/job-specification/reschedule",children:"reschedule stanzas"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"system-batch",children:"System Batch"}),"\n",(0,t.jsx)(n.p,{children:"The sysbatch scheduler is used to register jobs that should be run to completion on all clients that meet the job's constraints. The sysbatch scheduler will schedule jobs similarly to the system scheduler, but like a batch job once a task exits successfully it is not restarted on that client."}),"\n",(0,t.jsx)(n.p,{children:'This scheduler type is useful for issuing "one off" commands to be run on every node in the cluster. Sysbatch jobs can also be created as periodic and parameterized jobs. Since these tasks are managed by Nomad, they can take advantage of job updating, service discovery, monitoring, and more.'}),"\n",(0,t.jsx)(n.p,{children:"The sysbatch scheduler will preempt lower priority tasks running on a node if there is not enough capacity to place the job. See preemption details on how tasks that get preempted are chosen."}),"\n",(0,t.jsx)(n.p,{children:"Sysbatch jobs are intended to run until successful completion, explicitly stopped by an operator, or evicted through preemption. Sysbatch tasks that exit with an error are handled according to the job's restart stanza."}),"\n",(0,t.jsx)(n.p,{children:"So since I will only be running the service on one node and I do not want to the service to be re-scheduled in case that it fails:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'job "osticket_backup" {\n  \n  periodic {\n    cron = "@daily"\n  }\n\n  type = "batch"\n\n  reschedule {\n      attempts  = 0\n      unlimited = false\n    }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"complete-nomad-job-file",children:"Complete Nomad Job File"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'job "osticket_backup" {\n    \n    type = "batch"\n\n    periodic {\n      cron = "@daily"\n    }\n    \n    reschedule {\n      attempts  = 0\n      unlimited = false\n    }\n\n    datacenters = ["MyDatacenter"]\n    \n    group "osticket-backup" {\n\n        volume "osticket_db" {\n            type      = "host"\n            read_only = false\n            source    = "osticket_db"\n        }\n\n        volume "borg_config" {\n            type      = "host"\n            read_only = false\n            source    = "borg_config"\n        }\n\n        volume "borg_repo" {\n            type      = "host"\n            read_only = false\n            source    = "borg_repo"\n        }\n\n        task "osticket-backup-db" {\n            driver = "docker"\n            user = "root"\n\n            config {\n                image = "pschiffe/borg"\n                force_pull = false\n            }\n\n            volume_mount {\n                volume      = "osticket_db"\n                destination = "/data" #<-- in the container\n                read_only   = false\n            }\n\n            volume_mount {\n                volume      = "borg_config"\n                destination = "/root" #<-- in the container\n                read_only   = false\n            }\n\n            volume_mount {\n                volume      = "borg_repo"\n                destination = "/opt/borg" #<-- in the container\n                read_only   = false\n            }\n\n            env {\n                BORG_REPO="/opt/borg"\n                BORG_PASSPHRASE="mypassword"\n                BACKUP_DIRS="/data"\n                ARCHIVE="${NOMAD_SHORT_ALLOC_ID}"\n                COMPRESSION="lz4"\n                PRUNE=1\n                KEEP_DAILY=7\n                KEEP_WEEKLY=1\n                KEEP_MONTHLY=1\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://borgbackup.readthedocs.io/en/stable/usage/prune.html#examples",children:"Pruning"}),": Keep 7 end of the day, 1 end of the week and 1 end of the month backup."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"running-the-job",children:"Running the Job"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'nomad plan osticket_backup.tf\n\n+ Job: "osticket_backup"\n+ Task Group: "osticket_backup" (1 create)\n  + Task: "osticket_backup-db" (forces create)\n\nScheduler dry-run:\n- All tasks successfully allocated.\n- If submitted now, next periodic launch would be at 2022-11-13T00:00:00Z (12h29m2s from now).\n\nJob Modify Index: 0\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"nomad job run -check-index 0 osticket_backup.tf\n\nJob registration successful\nApproximate next launch time: 2022-11-13T00:00:00Z (12h27m45s from now)\n"})}),"\n",(0,t.jsx)(n.p,{children:"So the job was registered and is supposed to run at midnight."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ERROR"}),": ",(0,t.jsx)(n.code,{children:'Exit Code: 2, Exit Message: "Docker container exited with non-zero exit code: 2"'})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The Job only ever executed successful once. After deleting the ",(0,t.jsx)(n.code,{children:"repo"})," content it worked again. The reason for it is already corrected in the job file above. I used ",(0,t.jsx)(n.code,{children:"osticket-db-$(date +%Y-%m-%d)"})," as the repo name. The timestamp variable in there was not being used - so the archive name remained identical with each run and the back-up process exited unsuccessful:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Archive already exists\nterminating with error status, rc 2\n"})}),"\n",(0,t.jsxs)(n.p,{children:["I since replaced the variable with ",(0,t.jsx)(n.code,{children:"${NOMAD_SHORT_ALLOC_ID}"})," and the job is now working as expected:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hashicorp Nomad to run periodic backups",src:o(244909).A+"",width:"1323",height:"849"})}),"\n",(0,t.jsx)(n.h2,{id:"restore-a-backup",children:"Restore a Backup"}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Linux/2022-11-09--docker-borg-backupserver/2022-11-09#restore",children:"restore can be run manually"})," and then copied to the data directory restoring the old database. To find the correct backup we have to find the short allocation ID for the backup job run:"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hashicorp Nomad to run periodic backups",src:o(854230).A+"",width:"1310",height:"342"})}),"\n",(0,t.jsxs)(n.p,{children:["In the case above it is ",(0,t.jsx)(n.code,{children:"c0c8ec8d"}),". We have to use the ",(0,t.jsx)(n.code,{children:"ARCHIVE=c0c8ec8d"})," environment variable accordingly to retrieve our data:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"docker run \\\n  --rm \\\n  -e BORG_REPO=/opt/borg \\\n  -e ARCHIVE=c0c8ec8d \\\n  -e BORG_PASSPHRASE=mypassword \\\n  -e EXTRACT_TO=/borg/output \\\n  -v /opt/borg/config:/root \\\n  -v /opt/borg/repo:/opt/borg \\\n  -v /opt/borg/output:/borg/output/data \\\n  --security-opt label:disable \\\n  --name borg-backup \\\n  pschiffe/borg\n\n...\n\nterminating with success status, rc 0\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},244909:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Hashicorp_Nomad_to_run_periodic_backups_01-1f9d88912ebf014efe4db332c13ff998.png"},854230:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/Hashicorp_Nomad_to_run_periodic_backups_02-547ab0b0c7b13424e3bca321b69ed663.png"},411494:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-6c1edb088dfea3a7d39f8eebb8e9dc23.jpg"},28453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>i});var t=o(296540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);