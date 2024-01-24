"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[10349],{622141:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=n(785893),t=n(603905);const r={sidebar_position:4700,slug:"2023-02-04",title:"Apache Airflow Data Pipelines",authors:"mpolinowski",tags:["Python","Machine Learning","Airflow"],description:"Airflow is a platform to author, schedule and monitor workflows."},o=void 0,s={id:"IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index",title:"Apache Airflow Data Pipelines",description:"Airflow is a platform to author, schedule and monitor workflows.",source:"@site/docs/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index.md",sourceDirName:"IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines",slug:"/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/2023-02-04",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/2023-02-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/IoT-and-Machine-Learning/AIOps/2023-02-04-apache-airflow-data-pipelines/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"},{label:"Machine Learning",permalink:"/docs/tags/machine-learning"},{label:"Airflow",permalink:"/docs/tags/airflow"}],version:"current",sidebarPosition:4700,frontMatter:{sidebar_position:4700,slug:"2023-02-04",title:"Apache Airflow Data Pipelines",authors:"mpolinowski",tags:["Python","Machine Learning","Airflow"],description:"Airflow is a platform to author, schedule and monitor workflows."},sidebar:"tutorialSidebar",previous:{title:"Apache Airflow DAG Scheduling",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-05-apache-airflow-scheduler/2023-02-05"},next:{title:"Apache Airflow Introduction",permalink:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Model Training Pipeline (DAG)",id:"model-training-pipeline-dag",level:2},{value:"Airflow UI",id:"airflow-ui",level:3},{value:"Taskflow API",id:"taskflow-api",level:2},{value:"Dynamic Task Mappings",id:"dynamic-task-mappings",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.ah)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Guangzhou, China",src:n(538001).Z+"",width:"1061",height:"405"})}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"#setup",children:"Setup"})}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"#model-training-pipeline-dag",children:"Model Training Pipeline (DAG)"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"#airflow-ui",children:"Airflow UI"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"#taskflow-api",children:"Taskflow API"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"#dynamic-task-mappings",children:"Dynamic Task Mappings"})}),"\n"]}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://github.com/mpolinowski/apache-airflow-intro",children:"Github Repository"})}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsxs)(a.p,{children:["I am going to use the image I ",(0,i.jsx)(a.a,{href:"/docs/IoT-and-Machine-Learning/AIOps/2023-02-01-apache-airflow-introduction/2023-02-01",children:"build earlier"}),". But to be able to write and use my own data pipelines I need to mount a volume into the container so that the Python files on my host system become available to Airflow inside the running container. I can also create a ",(0,i.jsx)(a.a,{href:"https://github.com/apache/airflow/blob/main/airflow/config_templates/default_airflow.cfg",children:"default Airflow configuration file"})," and mount it into place to be used by my container. So start by preparing those directories on my host:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"sudo mkdir -p /opt/airflow/dags\nsudo chown -R myuser /opt/airflow\n"})}),"\n",(0,i.jsx)(a.p,{children:"To get the latest configuration file I will first start the container without the configuration mount and have the file generated inside the container. Then I can copy it to my host system and modify it if needed:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"docker cp airflow:/opt/airflow/airflow.cfg /opt/airflow/airflow.cfg\n"})}),"\n",(0,i.jsx)(a.p,{children:"Now I can start the container with all mounts in place:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"docker run --rm -d -p 8080:8080 \\\n    --mount type=bind,source=/opt/airflow/airflow.cfg,target=/opt/airflow/airflow.cfg \\\n    --mount type=bind,source=/opt/airflow/dags,target=/opt/airflow/dags \\\n    --name airflow airflow-postgres\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Now every file I drop into ",(0,i.jsx)(a.code,{children:"/opt/airflow/dags"})," will be available inside the container."]}),"\n",(0,i.jsx)(a.h2,{id:"model-training-pipeline-dag",children:"Model Training Pipeline (DAG)"}),"\n",(0,i.jsx)(a.p,{children:"This is an example of a trainings pipeline. We have a group of models that might perform well in the given task. We choose the model that gives us the highest accuracy and then perform a follow-up task based on whether or not the accuracy is acceptable:"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-bash",children:"Model A                  Accuracy above Threshold\nModel B -> Best Model -> \nModel C                  Accuracy below Threshold\n"})}),"\n",(0,i.jsxs)(a.p,{children:["Start by creating a ",(0,i.jsx)(a.code,{children:"example_dag.py"})," inside the ",(0,i.jsx)(a.code,{children:"dags"})," directory - ",(0,i.jsx)(a.strong,{children:"Note"})," that it will take some time (defined by ",(0,i.jsx)(a.code,{children:"min_file_process_interval"})," and ",(0,i.jsx)(a.code,{children:"dag_dir_list_interval"}),") before your DAG shows up in the Airflow UI, By default the ",(0,i.jsx)(a.code,{children:"dags"})," directory is scanned every ",(0,i.jsx)(a.strong,{children:"5min"})," and the webUI refreshes every ",(0,i.jsx)(a.strong,{children:"30s"})," - so worst case scenario five and a half minutes:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-py",children:'from airflow import DAG\nfrom airflow.operators.python import PythonOperator, BranchPythonOperator\nfrom airflow.operators.bash import BashOperator\n\nfrom datetime import datetime\nfrom random import randint\n\n# define functions to be run by airflow\n## simulate training accuracy metric\ndef _taining_model():\n    return randint(1,10)\n\n## evaluate accuracies and trigger follow-ups\ndef _best_model(ti):\n    ### get results from training runs\n    accuracies = ti.xcom_pull(task_ids=[\n        \'training_model_A\',\n        \'training_model_B\',\n        \'training_model_C\'\n    ])\n    ### find best accuracy\n    best_accuracy = max(accuracies)\n    ### trigger next step based on value\n    if (best_accuracy > 7):\n        return \'acc_passed\'\n    return \'acc_failed\'\n\n\n\nwith DAG("example_dag", start_date=datetime(2023,2,5), schedule="@daily", catchup=False, description="Training ML models A-C", tags=["modelA", "modelB", "modelC", "training"]) as dag:\n\n    training_model_A = PythonOperator(\n        task_id="training_model_A",\n        python_callable=_taining_model\n    )\n\n    training_model_B = PythonOperator(\n        task_id="training_model_B",\n        python_callable=_taining_model\n    )\n\n    training_model_C = PythonOperator(\n        task_id="training_model_C",\n        python_callable=_taining_model\n    )\n\n    choose_best_model = BranchPythonOperator(\n        task_id="choose_best_model",\n        python_callable=_best_model\n    )\n\n    acc_passed = BashOperator(\n        task_id="acc_passed",\n        bash_command="echo \'INFO :: Accuracy assessment PASSED minimum requirements\'"\n    )\n\n    acc_failed = BashOperator(\n        task_id="acc_failed",\n        bash_command="echo \'WARNING :: Accuracy assessment FAILED minimum requirements\'"\n    )\n\n    ## define task flow\n    [training_model_A, training_model_B, training_model_C] >> choose_best_model >> [acc_passed, acc_failed]\n'})}),"\n",(0,i.jsx)(a.h3,{id:"airflow-ui",children:"Airflow UI"}),"\n",(0,i.jsx)(a.p,{children:"After a few minutes the flow finally shows up in my DAG list:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Apache Airflow Data Pipelines",src:n(631214).Z+"",width:"1129",height:"121"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Apache Airflow Data Pipelines",src:n(529818).Z+"",width:"1125",height:"598"})}),"\n",(0,i.jsx)(a.p,{children:"And I can test-run it using the UI:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Apache Airflow Data Pipelines",src:n(518489).Z+"",width:"1124",height:"661"})}),"\n",(0,i.jsx)(a.p,{children:"The colour-coding allows you to follow the execution of your flow in realtime in the case in the case below the models were evaluated and the best one passed the accuracy threshold:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Apache Airflow Data Pipelines",src:n(416386).Z+"",width:"1326",height:"578"})}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Apache Airflow Data Pipelines",src:n(338225).Z+"",width:"1336",height:"754"})}),"\n",(0,i.jsx)(a.h2,{id:"taskflow-api",children:"Taskflow API"}),"\n",(0,i.jsxs)(a.p,{children:["If you write most of your DAGs using plain Python code rather than Operators, then the ",(0,i.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow/2.1.4/tutorial_taskflow_api.html",children:"TaskFlow API"})," will make it much easier to author clean DAGs without extra boilerplate, all using the ",(0,i.jsx)(a.code,{children:"@task"})," decorator."]}),"\n",(0,i.jsxs)(a.p,{children:["TaskFlow takes care of moving inputs and outputs between your Tasks using XComs for you, as well as automatically calculating dependencies - when you call a TaskFlow function in your DAG file, rather than executing it, you will get an object representing the XCom for the result (an ",(0,i.jsx)(a.code,{children:"XComArg"}),"), that you can then use as inputs to downstream tasks or operators:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-py",children:'from airflow import DAG\nfrom airflow.decorators import task\nfrom airflow.operators.python import PythonOperator, BranchPythonOperator\nfrom airflow.operators.bash import BashOperator\n\nfrom datetime import datetime\nfrom random import randint\n\n\nwith DAG("example_dag", start_date=datetime(2023,2,5), schedule="@daily", catchup=False, description="Training ML models A-C", tags=["modelA", "modelB", "modelC", "training"]):\n\n    @task\n    ## simulate training accuracy metric\n    def training_model():\n        return randint(1,10)\n\n    @task.branch\n    ## evaluate accuracies and trigger follow-ups\n    def best_model(accuracies):\n        ### find best accuracy\n        best_accuracy = max(accuracies)\n        ### trigger next step based on value\n        if (best_accuracy > 7):\n            return \'acc_passed\'\n        return \'acc_failed\'\n\n    acc_passed = BashOperator(\n        task_id="acc_passed",\n        bash_command="echo \'INFO :: Accuracy assessment PASSED minimum requirements\'"\n    )\n\n    acc_failed = BashOperator(\n        task_id="acc_failed",\n        bash_command="echo \'WARNING :: Accuracy assessment FAILED minimum requirements\'"\n    )\n\n    best_model(training_model())\n'})}),"\n",(0,i.jsx)(a.h2,{id:"dynamic-task-mappings",children:"Dynamic Task Mappings"}),"\n",(0,i.jsxs)(a.p,{children:["Now we simplified our pipeline code. But we are now missing our three models A, B and C. They can be added back in using ",(0,i.jsx)(a.a,{href:"https://airflow.apache.org/docs/apache-airflow/2.5.1/authoring-and-scheduling/dynamic-task-mapping.html",children:"Dynamic Task Mapping"}),". Dynamic Task Mapping allows a way for a workflow to create a number of tasks at runtime based upon current data, rather than the DAG author having to know in advance how many tasks would be needed."]}),"\n",(0,i.jsxs)(a.p,{children:["Instead of defining model training function as before (simulated by ",(0,i.jsx)(a.code,{children:"randint(1,10)"}),") we can no pass the accuracy results from an unspecified amount of models in and start the evaluation from there:"]}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-py",children:'with DAG("example_dag", start_date=datetime(2023,2,5), schedule="@daily", catchup=False, description="Training ML models A-C", tags=["training"]):\n\n    @task\n    ## simulate training accuracy metric\n    def training_model(accuracy):\n        return accuracy\n\n    @task.branch\n    ## evaluate accuracies and trigger follow-ups\n    def best_model(accuracies):\n        ### find best accuracy\n        best_accuracy = max(accuracies)\n        ### trigger next step based on value\n        if (best_accuracy > 7):\n            return \'acc_passed\'\n        return \'acc_failed\'\n\n    acc_passed = BashOperator(\n        task_id="acc_passed",\n        bash_command="echo \'INFO :: Accuracy assessment PASSED minimum requirements\'"\n    )\n\n    acc_failed = BashOperator(\n        task_id="acc_failed",\n        bash_command="echo \'WARNING :: Accuracy assessment FAILED minimum requirements\'"\n    )\n\n    best_model(training_model.expand(accuracy=[3, 7, 9])) >> [acc_passed, acc_failed]\n'})}),"\n",(0,i.jsx)(a.p,{children:"We now no longer specify the amount of models we evaluate and made our pipeline much more flexible."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Apache Airflow Data Pipelines",src:n(730098).Z+"",width:"1331",height:"525"})})]})}function h(e={}){const{wrapper:a}={...(0,t.ah)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},603905:(e,a,n)=>{n.d(a,{ah:()=>l});var i=n(667294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=i.createContext({}),l=function(e){var a=i.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},h=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=t,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return n?i.createElement(u,o(o({ref:a},h),{},{components:n})):i.createElement(u,o({ref:a},h))}));h.displayName="MDXCreateElement"},631214:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/Apache_Airflow_DAGs_01-7370f27dc363e37f120a643be1b2d114.png"},529818:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/Apache_Airflow_DAGs_02-a2c5054d98d9666d6ed1b1848870eda9.png"},518489:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/Apache_Airflow_DAGs_03-29adf2f16334651dcde437ea6d6662ee.png"},416386:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/Apache_Airflow_DAGs_04-a9d564ae33bf0fcae660754cedc0bd61.png"},338225:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/Apache_Airflow_DAGs_05-848dcf72c8ff9126b05077d762f5fa31.png"},730098:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/Apache_Airflow_DAGs_06-15e3b8fd145ac00d6de2b5efba93da22.png"},538001:(e,a,n)=>{n.d(a,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-fe9bbb57ea8da08fea2f3fef2bf2515b.jpg"}}]);