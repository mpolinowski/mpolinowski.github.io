"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[7077],{3905:(e,t,n)=>{n.d(t,{Zo:()=>_,kt:()=>c});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),p=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},_=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,f=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?i.createElement(f,l(l({ref:t},_),{},{components:n})):i.createElement(f,l({ref:t},_))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:9e3,slug:"2022-10-10",title:"Python - The Filesystem",authors:"mpolinowski",tags:["Python"],description:"Using Python to manipulate your Filesystem."},l=void 0,s={unversionedId:"Development/Python/2022-10-10-python-filesystem/index",id:"Development/Python/2022-10-10-python-filesystem/index",title:"Python - The Filesystem",description:"Using Python to manipulate your Filesystem.",source:"@site/docs/Development/Python/2022-10-10-python-filesystem/index.md",sourceDirName:"Development/Python/2022-10-10-python-filesystem",slug:"/Development/Python/2022-10-10-python-filesystem/2022-10-10",permalink:"/docs/Development/Python/2022-10-10-python-filesystem/2022-10-10",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Python/2022-10-10-python-filesystem/index.md",tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",sidebarPosition:9e3,frontMatter:{sidebar_position:9e3,slug:"2022-10-10",title:"Python - The Filesystem",authors:"mpolinowski",tags:["Python"],description:"Using Python to manipulate your Filesystem."},sidebar:"tutorialSidebar",previous:{title:"Python - RE",permalink:"/docs/Development/Python/2022-10-12-python-regular-expressions/2022-10-12"},next:{title:"Python - Flask Frontend to generate Elasticsearch Docs from Sitemaps",permalink:"/docs/Development/Python/2022-10-09-python-flask-elasticsearch/2022-10-09"}},o={},p=[{value:"Pathlib",id:"pathlib",level:2},{value:"Write to File",id:"write-to-file",level:3},{value:"Create Empty Files",id:"create-empty-files",level:3},{value:"List Files in Directory",id:"list-files-in-directory",level:3},{value:"Rename Files",id:"rename-files",level:3},{value:"Get File Properties",id:"get-file-properties",level:3},{value:"Zip and Unzip",id:"zip-and-unzip",level:3},{value:"Search",id:"search",level:3},{value:"Delete Files",id:"delete-files",level:3}],_={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},_,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Sham Sui Po, Hong Kong",src:n(5777).Z,width:"1500",height:"548"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#pathlib"},"Pathlib"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#write-to-file"},"Write to File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#create-empty-files"},"Create Empty Files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#list-files-in-directory"},"List Files in Directory")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#rename-files"},"Rename Files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#get-file-properties"},"Get File Properties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#zip-and-unzip"},"Zip and Unzip")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#search"},"Search")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#delete-files"},"Delete Files"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/python-filesystem"},"Github Repository")),(0,a.kt)("h2",{id:"pathlib"},"Pathlib"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\n\nprint(dir(Path))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"['__bytes__', '__class__', '__class_getitem__', '__delattr__', '__dir__', '__doc__', '__enter__', '__eq__', '__exit__', '__format__', '__fspath__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rtruediv__', '__setattr__', '__sizeof__', '__slots__', '__str__', '__subclasshook__', '__truediv__', '_accessor', '_cached_cparts', '_cparts', '_drv', '_format_parsed_parts', '_from_parsed_parts', '_from_parts', '_hash', '_make_child', '_make_child_relpath', '_parse_args', '_parts', '_pparts', '_root', '_str', 'absolute', 'anchor', 'as_posix', 'as_uri', 'chmod', 'cwd', 'drive', 'exists', 'expanduser', 'glob', 'group', 'hardlink_to', 'home', 'is_absolute', 'is_block_device', 'is_char_device', 'is_dir', 'is_fifo', 'is_file', 'is_mount', 'is_relative_to', 'is_reserved', 'is_socket', 'is_symlink', 'iterdir', 'joinpath', 'lchmod', 'link_to', 'lstat', 'match', 'mkdir', 'name', 'open', 'owner', 'parent', 'parents', 'parts', 'read_bytes', 'read_text', 'readlink', 'relative_to', 'rename', 'replace', 'resolve', 'rglob', 'rmdir', 'root', 'samefile', 'stat', 'stem', 'suffix', 'suffixes', 'symlink_to', 'touch', 'unlink', 'with_name', 'with_stem', 'with_suffix', 'write_bytes', 'write_text']\n")),(0,a.kt)("h3",{id:"write-to-file"},"Write to File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},'from pathlib import Path\n\npath = Path(\'files/test1.md\')\n\ncontent = """# Test 1\n\nthis is a test\n"""\n\nif not path.exists():\n    with open(path, \'w\') as file:\n        file.write(content)\n')),(0,a.kt)("h3",{id:"create-empty-files"},"Create Empty Files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"for i in range(0, 3):\n    filename = 'test' + str(i) + '.md'\n    filepath = root_dir / Path(filename)\n    filepath.touch()\n")),(0,a.kt)("h3",{id:"list-files-in-directory"},"List Files in Directory"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"directory = Path('files')\n\nfor item in directory.iterdir():\n    with open(item, 'r') as file:\n        print(file.read())\n")),(0,a.kt)("h3",{id:"rename-files"},"Rename Files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\n\nroot_dir = Path('files')\n\n# Replace the file extension\n\nfile = Path('files/test2.md')\nfilename = file.with_suffix('.csv')\nfile.rename(filename)\n\n# Add static prefix to filename\n\nfile_paths = root_dir.iterdir()\n\nfor path in file_paths:\n    if path.is_file():\n        new_filename = \"prefix_\" + path.stem + path.suffix\n        # print(new_filename)\n        new_path = path.with_name(new_filename)\n        path.rename(new_path)\n\n# Add suffix based on sub directory\n\nrecursive_paths = root_dir.glob('**/*')\n\nfor path in recursive_paths:\n    if path.is_file():\n        parent_folder = path.parts[-2]\n        # print(parent_folder)\n        new_filename = path.stem + '_' + parent_folder + path.suffix\n        # print(new_filename)\n        new_path = path.with_name(new_filename)\n        path.rename(new_path)\n")),(0,a.kt)("h3",{id:"get-file-properties"},"Get File Properties"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Path()")," gives us access to file properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"path = Path('files/test1.md')\nstats = path.stat()\nprint(stats)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Filesize: ",(0,a.kt)("inlineCode",{parentName:"li"},"st_size")),(0,a.kt)("li",{parentName:"ul"},"File last accessed: ",(0,a.kt)("inlineCode",{parentName:"li"},"st_atime")),(0,a.kt)("li",{parentName:"ul"},"File last modified: ",(0,a.kt)("inlineCode",{parentName:"li"},"st_mtime")),(0,a.kt)("li",{parentName:"ul"},"File created: ",(0,a.kt)("inlineCode",{parentName:"li"},"st_ctime"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"os.stat_result(st_mode=33279, st_ino=1809540, st_dev=2050, st_nlink=1, st_uid=1000, st_gid=1001, st_size=25, st_atime=1665554138, st_mtime=1665553956, st_ctime=1665574233)\n")),(0,a.kt)("p",null,"We can use those properties to further process the file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\nfrom datetime import datetime\n\npath = Path('files/test1.md')\nstats = path.stat()\n\n# Get file size and set unit\ndef get_size():\n    file_bytes = stats.st_size\n    file_kilobytes = file_bytes / 1024\n    file_megabytes = file_kilobytes / 1024\n\n    if file_megabytes > 1:\n        return str(file_megabytes) + ' MB'\n    elif file_kilobytes > 1:\n        return str(file_kilobytes) + ' kB'\n    else:\n        return str(file_bytes) + ' B'\n\n# Get date last accessed and process timestamp\nlast_accessed = stats.st_ctime\ndate_accessed = datetime.fromtimestamp(last_accessed).strftime(\"%Y-%m-%d_%H:%M:%S\")\n\n\n\n# Append timestamp to file\nwith open(path, 'a') as file:\n    file.write('\\n' + date_accessed + ' | ' + get_size() + '\\n') \n")),(0,a.kt)("h3",{id:"zip-and-unzip"},"Zip and Unzip"),(0,a.kt)("p",null,"Write to zip container and add timestamp:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\nfrom datetime import datetime\nimport zipfile\n\nroot_dir = Path('files/projectA')\n# get timestamp for archive name\nnow = datetime.now().strftime(\"%Y-%m-%d_%H-%M-%S\")\narchive_name = now + '_archive.zip'\narchive_path = root_dir / Path(archive_name)\n\n# write all markdown pages in dir to zip container\nwith zipfile.ZipFile(archive_path, 'w') as zf:\n    for path in root_dir.glob('*.md'):\n        zf.write(path)\n        # delete source files\n        # path.unlink()\n")),(0,a.kt)("p",null,"Unzip all containers from a directory recursively to individual destination folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"# unzip all containers in root dir recursively\ndestination_path = Path('files/unzipped')\n\nfor path in root_dir.rglob('*.zip'):\n    with zipfile.ZipFile(path, 'r') as zf:\n        sub_dir = destination_path / Path(path.stem)\n        zf.extractall(path=sub_dir)\n")),(0,a.kt)("h3",{id:"search"},"Search"),(0,a.kt)("p",null,"Find all files and folders that contain a search term:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\n\nroot_dir = Path('files')\nsearch_term = 'test'\n\nfor path in root_dir.rglob('*'):\n    if search_term in path.stem:\n        print(path.absolute())\n")),(0,a.kt)("h3",{id:"delete-files"},"Delete Files"),(0,a.kt)("p",null,"Delete all zip container recursively from a root directory securely:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from pathlib import Path\n\nroot_dir = Path('files/projectA')\n\nfor path in root_dir.rglob(\"*.zip\"):\n    with open(path, 'wb') as file:\n        # overwrite with empty bytes to delete secure\n        file.write(b'')\n    # delete all zip files\n    path.unlink()\n")),(0,a.kt)("p",null,"And wrapping everything up into a PyQT6 desktop application:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Python - The Filesystem",src:n(46688).Z,width:"898",height:"174"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"from PyQt6.QtWidgets import (\n    QApplication,\n    QVBoxLayout,\n    QHBoxLayout,\n    QPushButton,\n    QWidget,\n    QLabel,\n    QFileDialog\n)\nfrom pathlib import Path\n\ndef open_files():\n    global filenames\n    # return absolute path of user selected files\n    filenames, _ = QFileDialog.getOpenFileNames(window, 'Select files')\n    message.setText('\\n'.join(filenames))\n\ndef delete_files():\n    for filename in filenames:\n        path = Path(filename)\n        with open(path, 'wb') as file:\n            file.write(b'')\n        path.unlink()\n        message.setText('Deleted!')\n\n\napp = QApplication([])\nwindow = QWidget()\nwindow.setWindowTitle('Destroyer of Worlds')\n\n# set layout\n\nlayout_main = QVBoxLayout()\nlayout_top_container = QHBoxLayout()\nlayout_main.addLayout(layout_top_container)\nlayout_bottom_container = QHBoxLayout()\nlayout_main.addLayout(layout_bottom_container)\n\n# select files to delete\n\ndescription = QLabel('Select files for <font color=\"red\">deletion</font>: ')\nlayout_top_container.addWidget(description)\n\nopen_btn = QPushButton('Open Files')\nopen_btn.setToolTip('Open files and select for deletions.')\nlayout_top_container.addWidget(open_btn)\nopen_btn.clicked.connect(open_files)\n\n# delete selected files\n\ndel_btn = QPushButton('Delete Files')\ndel_btn.setToolTip('Permanently delete all selected files.')\nlayout_bottom_container.addWidget(del_btn)\ndel_btn.clicked.connect(delete_files)\n\n# show filepath of selected files\n\nmessage = QLabel('')\nlayout_main.addWidget(message)\n\n# run app\n\nwindow.setLayout(layout_main)\nwindow.show()\napp.exec()\n")))}m.isMDXComponent=!0},5777:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-5f44d483789c3ce79f05418f930f5cd2.jpg"},46688:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/python-filesystem_01-7d9663ac4c2cf4d7ddafaad1a840ce25.png"}}]);