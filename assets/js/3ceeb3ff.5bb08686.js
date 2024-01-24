"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[67369],{226842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(785893),o=t(603905);const i={sidebar_position:8910,slug:"2023-01-16",title:"Python 3.11 New Features",authors:"mpolinowski",tags:["Python"],description:"Error Messages and Customized Exception Notes"},s=void 0,a={id:"Development/Python/2023-01-16-python-3-11-features/index",title:"Python 3.11 New Features",description:"Error Messages and Customized Exception Notes",source:"@site/docs/Development/Python/2023-01-16-python-3-11-features/index.md",sourceDirName:"Development/Python/2023-01-16-python-3-11-features",slug:"/Development/Python/2023-01-16-python-3-11-features/2023-01-16",permalink:"/docs/Development/Python/2023-01-16-python-3-11-features/2023-01-16",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2023-01-16-python-3-11-features/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:8910,frontMatter:{sidebar_position:8910,slug:"2023-01-16",title:"Python 3.11 New Features",authors:"mpolinowski",tags:["Python"],description:"Error Messages and Customized Exception Notes"},sidebar:"tutorialSidebar",previous:{title:"Pandas Cheat Sheet 2023",permalink:"/docs/Development/Python/2023-04-24-python-pandas-cheat-sheet/2023-04-24"},next:{title:"Pipenv - Welcome NPM",permalink:"/docs/Development/Python/2022-12-11-pipenv/2022-12-11"}},l={},c=[{value:"Installation on Arch Linux",id:"installation-on-arch-linux",level:2},{value:"Improved Error Messages",id:"improved-error-messages",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Python 3.10",id:"python-310",level:4},{value:"Python 3.11",id:"python-311",level:4},{value:"Example 2",id:"example-2",level:3},{value:"Python 3.10",id:"python-310-1",level:4},{value:"Python 3.11",id:"python-311-1",level:4},{value:"Customized Exception Notes",id:"customized-exception-notes",level:2},{value:"Example 1",id:"example-1-1",level:3},{value:"Python 3.10",id:"python-310-2",level:4},{value:"Python 3.11",id:"python-311-2",level:4},{value:"Example 2",id:"example-2-1",level:3},{value:"Python 3.10",id:"python-310-3",level:4},{value:"Python 3.11",id:"python-311-3",level:4}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Sham Sui Po, Hong Kong",src:t(655986).Z+"",width:"1500",height:"548"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation-on-arch-linux",children:"Installation on Arch Linux"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#improved-error-messages",children:"Improved Error Messages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-310",children:"Python 3.10"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-311",children:"Python 3.11"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-310-1",children:"Python 3.10"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-311-1",children:"Python 3.11"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#customized-exception-notes",children:"Customized Exception Notes"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#example-1-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-310-2",children:"Python 3.10"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-311-2",children:"Python 3.11"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#example-2-1",children:"Example 2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-310-3",children:"Python 3.10"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#python-311-3",children:"Python 3.11"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://www.python.org/downloads/release/python-3110/",children:"Python 3.11.1"})," is the newest major release of the Python programming language, and it contains many new features and optimizations. See source repository from ",(0,r.jsx)(n.a,{href:"https://github.com/talkpython/python-311-code-tour/",children:"talkpython"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"installation-on-arch-linux",children:"Installation on Arch Linux"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3 -V\nPython 3.10.8\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"wget https://www.python.org/ftp/python/3.11.1/Python-3.11.1.tar.xz\ntar -xvf Python-3.11.1.tar.xz\nrn Python-3.11.1.tar.xz\ncd Python-3.11.1\nsudo ./configure --enable-optimizations\nsudo make altinstall\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python -V\nPython 3.10.8\npython3 -V\nPython 3.10.8\npython3.11 -V\nPython 3.11.1\n"})}),"\n",(0,r.jsx)(n.p,{children:"\ud83d\udc4d"}),"\n",(0,r.jsx)(n.h2,{id:"improved-error-messages",children:"Improved Error Messages"}),"\n",(0,r.jsx)(n.h3,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Showing the exact location where an error occurred - instead of just the line:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'def func1(data, b, c, d, e, f):\n    area = data.get(b).get(c).get(d).get(e)\n    units = data.get(b).get(c).get(d).get(f).strip().lower()\n\n    return area, string.capwords(units)\n\n\ndef main():\n    data = {\n        "region": {\n            "country": {\n                "size": {\n                    "area": 1_000_000,\n                    "units": "MILES",\n                }\n            }\n        }\n    }\n\n    b = "region"\n    c = "country"\n    d = "size"\n    e = "area"\n    f = "units"\n\n    # extract area and units - this works\n    print(func1(data, b, c, d, e, f))\n\n    # breaking the function by calling a non-existing key\n    f = "anonkey"\n\n    print(func1(data, b, c, d, e, f))\n'})}),"\n",(0,r.jsx)(n.h4,{id:"python-310",children:"Python 3.10"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(1000000, 'Miles')\nTraceback (most recent call last):\n  File \"01_error_messages.py\", line 67, in <module>\n    main() \n  File \"01_error_messages.py\", line 44, in main\n    print(func1(data, b, c, d, e, f))\n  File \"01_error_messages.py\", line 9, in func1\n    units = data.get(b).get(c).get(d).get(f).strip().lower()\nAttributeError: 'NoneType' object has no attribute 'strip'\n"})}),"\n",(0,r.jsx)(n.h4,{id:"python-311",children:"Python 3.11"}),"\n",(0,r.jsxs)(n.p,{children:["Trying to strip ",(0,r.jsx)(n.code,{children:"f"})," failed because it does not exist:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"(1000000, 'Miles')\nTraceback (most recent call last):\n  File \"01_error_messages.py\", line 67, in <module>\n    main() \n    ^^^^^^\n  File \"01_error_messages.py\", line 44, in main\n    print(func1(data, b, c, d, e, f))\n          ^^^^^^^^^^^^^^^^^^^^^^^^^^\n  File \"01_error_messages.py\", line 9, in func1\n    units = data.get(b).get(c).get(d).get(f).strip().lower()\n            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\nAttributeError: 'NoneType' object has no attribute 'strip'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'Thing = namedtuple("Thing", "name, weight, speed")\n\ndef func2(a, b, c, d):\n    return a + b + c + d\n\ndef main():\n    t1 = Thing("Bob", 70, 24)\n    t2 = Thing("Sarah", 65, 32)\n    t3 = Thing("Jake", 72, 20)\n\n    print(func2(1, 2, 3, 4))\n    print(func2(1, 2, "3", 4))\n'})}),"\n",(0,r.jsx)(n.h4,{id:"python-310-1",children:"Python 3.10"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'10\nTraceback (most recent call last):\n  File "01_error_messages.py", line 56, in <module>\n    main() \n  File "01_error_messages.py", line 47, in main\n    print(func2(1, 2, "3", 4))\n  File "01_error_messages.py", line 15, in func2\n    return a + b + c + d\nTypeError: unsupported operand type(s) for +: \'int\' and \'str\'\n'})}),"\n",(0,r.jsx)(n.h4,{id:"python-311-1",children:"Python 3.11"}),"\n",(0,r.jsxs)(n.p,{children:["Adding ",(0,r.jsx)(n.code,{children:"b"})," to ",(0,r.jsx)(n.code,{children:"c"})," does not work because one of them is a string:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'10\nTraceback (most recent call last):\n  File "01_error_messages.py", line 56, in <module>\n    main() \n    ^^^^^^\n  File "01_error_messages.py", line 47, in main\n    print(func2(1, 2, "3", 4))\n          ^^^^^^^^^^^^^^^^^^^\n  File "01_error_messages.py", line 15, in func2\n    return a + b + c + d\n           ~~~~~~^~~\nTypeError: unsupported operand type(s) for +: \'int\' and \'str\'\n'})}),"\n",(0,r.jsx)(n.h2,{id:"customized-exception-notes",children:"Customized Exception Notes"}),"\n",(0,r.jsx)(n.p,{children:"Exception notes with add_note, which enables you to add customized messages."}),"\n",(0,r.jsx)(n.h3,{id:"example-1-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Add additional information about what might have gone wrong to the error message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:"def divide_by_zero(x):\n    try:\n        1/x\n    except Exception as myError:\n        myError.add_note(f'The value of x is ZERO. Raised at {datetime.now()}')\n\ndef main():\n    x = 0\n    divide_by_zero(x)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"python-310-2",children:"Python 3.10"}),"\n",(0,r.jsxs)(n.p,{children:["This code is incompatible with Python 3.10 => ",(0,r.jsx)(n.code,{children:"AttributeError: 'ZeroDivisionError' object has no attribute 'add_note'"})]}),"\n",(0,r.jsx)(n.h4,{id:"python-311-2",children:"Python 3.11"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'python3.11 02_custom_exception.py\nTraceback (most recent call last):\n  File "02_custom_exception.py", line 63, in <module>\n    main()\n  File "02_custom_exception.py", line 46, in main\n    divide_by_x(x)\n  File "02_custom_exception.py", line 7, in divide_by_x\n    1/x\n    ~^~\nZeroDivisionError: division by zero\nThe value of x is ZERO. Raised at 2023-01-16 13:37:26.197005\n'})}),"\n",(0,r.jsx)(n.h3,{id:"example-2-1",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Write some test that check if the input is correct and append them to the regular error message:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-py",children:'class DbException(Exception):\n    pass\n\n\nclass DbConnectionException(DbException):\n    pass\n\n\ndef connect_to_db(conn_str, server: Optional[str] = None, port: Optional[int] = None):\n    if ("server=" in conn_str and server) or ("port=" in conn_str and port):\n        raise DbConnectionException("Connection string is malformed")\n\n    conn_str += f"&server={server}&port={port}"\n\n    print(f"Connecting to DB with {conn_str}")\n\n\ndef setup_app():\n    # conn_str = "mongo://user=mk&password=a&database=talkpython"\n    conn_str = "mongo://user=mk&password=a&database=talkpython&port=1000"\n    server = "localhost"\n    port = 27017\n\n    try:\n        connect_to_db(conn_str, server, port)\n    except DbConnectionException as dbe:\n        dbe.add_note(\'You cannot specify server or port in both the conn str and explicitly\')\n        dbe.add_note(\'Amend the conn string and try again.\')\n        raise\n'})}),"\n",(0,r.jsx)(n.p,{children:"Here the server address and port is added twice creating a connection error."}),"\n",(0,r.jsx)(n.h4,{id:"python-310-3",children:"Python 3.10"}),"\n",(0,r.jsxs)(n.p,{children:["This code is incompatible with Python 3.10 => ",(0,r.jsx)(n.code,{children:"AttributeError: 'ZeroDivisionError' object has no attribute 'add_note'"})]}),"\n",(0,r.jsx)(n.h4,{id:"python-311-3",children:"Python 3.11"}),"\n",(0,r.jsx)(n.p,{children:"Our exception is triggered and we receive both the connection error that the connection string is malformed as well as the note that our test was triggered:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"python3.11 02_custom_exception.py\nError starting app:\nDbConnectionException: Connection string is malformed\nThere are 2 notes\nNote: You cannot specify server or port in both the conn str and explicitly\nNote: Amend the conn string and try again\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>c});var r=t(667294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=a(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,x=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return t?r.createElement(x,s(s({ref:n},h),{},{components:t})):r.createElement(x,s({ref:n},h))}));h.displayName="MDXCreateElement"},655986:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"}}]);