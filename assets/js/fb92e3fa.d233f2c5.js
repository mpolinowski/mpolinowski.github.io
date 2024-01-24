"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[72887],{58150:(r,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var e=t(785893),i=t(603905);const a={sidebar_position:9060,slug:"2021-09-11",title:"Golang Refresher :: math & os",authors:"mpolinowski",tags:["Go"]},o=void 0,s={id:"Development/Go/2021-09-11--golang-refresher-math-os/index",title:"Golang Refresher :: math & os",description:"Guangzhou, China",source:"@site/docs/Development/Go/2021-09-11--golang-refresher-math-os/index.md",sourceDirName:"Development/Go/2021-09-11--golang-refresher-math-os",slug:"/Development/Go/2021-09-11--golang-refresher-math-os/2021-09-11",permalink:"/docs/Development/Go/2021-09-11--golang-refresher-math-os/2021-09-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-09-11--golang-refresher-math-os/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2021-09-11",title:"Golang Refresher :: math & os",authors:"mpolinowski",tags:["Go"]},sidebar:"tutorialSidebar",previous:{title:"Golang Refresher :: url & http",permalink:"/docs/Development/Go/2021-09-11--golang-refresher-network/2021-09-11"},next:{title:"Golang Refresher :: fmt & strings",permalink:"/docs/Development/Go/2021-09-11--golang-refresher-fmt-strings/2021-09-11"}},l={},d=[{value:"The Go Standard Library",id:"the-go-standard-library",level:2},{value:"math|random :: Mathematical operations and random numbers",id:"mathrandom--mathematical-operations-and-random-numbers",level:3},{value:"Basics",id:"basics",level:4},{value:"Calculations",id:"calculations",level:4},{value:"Random",id:"random",level:4},{value:"Random Strings",id:"random-strings",level:4},{value:"os|ioutil :: Files and directories",id:"osioutil--files-and-directories",level:3},{value:"File info",id:"file-info",level:4},{value:"Write File",id:"write-file",level:4},{value:"Read File",id:"read-file",level:4},{value:"Directories",id:"directories",level:4},{value:"Temporary Data",id:"temporary-data",level:4}];function m(r){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.ah)(),...r.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.p,{children:(0,e.jsx)(n.img,{alt:"Guangzhou, China",src:t(110773).Z+"",width:"1500",height:"560"})}),"\n",(0,e.jsx)(n.h2,{id:"the-go-standard-library",children:"The Go Standard Library"}),"\n",(0,e.jsxs)(n.ul,{children:["\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"/docs/Development/Go/2021-09-11--golang-refresher-fmt-strings/2021-09-11",children:"Part I"})}),"\n",(0,e.jsx)(n.li,{children:"Part II"}),"\n",(0,e.jsx)(n.li,{children:(0,e.jsx)(n.a,{href:"/docs/Development/Go/2021-09-11--golang-refresher-network/2021-09-11",children:"Part III"})}),"\n"]}),"\n",(0,e.jsx)(n.h3,{id:"mathrandom--mathematical-operations-and-random-numbers",children:"math|random :: Mathematical operations and random numbers"}),"\n",(0,e.jsx)(n.h4,{id:"basics",children:"Basics"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"math"\r\n)\r\n\r\nfunc main() {\r\n\r\n\tfloat := 997.783\r\n\r\n\t// Print Pi\r\n\tfmt.Println(math.Pi)\r\n\tfmt.Println(math.E)\r\n\r\n\t// Floor and Ceiling\r\n\tfmt.Println(math.Floor(float))\r\n\tfmt.Println(math.Ceil(math.E))\r\n\r\n\t// Truncate to return integer value\r\n\tfmt.Printf("%.2f\\n", math.Trunc(math.Pi))\r\n\r\n\t// Min-Max to determin the biggest/smallest member\r\n\tfmt.Println(math.Max(math.Pi, math.Ln2))\r\n\tfmt.Println(math.Min(math.Pi, math.Ln2))\r\n\r\n\t// Modulo - the mod operator is for floats\r\n\tfmt.Println(17 % 5)\r\n\tfmt.Println(math.Mod(17.0, 5.0))\r\n\r\n\t// Round and RoundToEven - to closes integer\r\n\tfmt.Printf("%.1f\\n", math.Round(10.5))\r\n\tfmt.Printf("%.1f\\n", math.Round(-10.5))\r\n\r\n\tfmt.Printf("%.1f\\n", math.RoundToEven(10.5))\r\n\tfmt.Printf("%.1f\\n", math.RoundToEven(11.5))\r\n\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\n\r\n3.141592653589793\r\n2.718281828459045\r\n997\r\n3\r\n3.00\r\n3.141592653589793\r\n0.6931471805599453\r\n2\r\n2\r\n11.0\r\n-11.0\r\n0.0\r\n10.0\r\n12.0\n"})}),"\n",(0,e.jsx)(n.h4,{id:"calculations",children:"Calculations"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"math"\r\n)\r\n\r\nfunc main() {\r\n\r\n\tx := 10.0\r\n\r\n\t// Absolute value\r\n\tfmt.Println(math.Abs(x), math.Abs(-x))\r\n\r\n\t// Power (x^y) and Exp (e^x)\r\n\tfmt.Println(math.Pow(x, 2.0))\r\n\tfmt.Println(math.Exp(x))\r\n\r\n\t// Trigonometry\r\n\tfmt.Println(math.Cos(math.Pi))\r\n\tfmt.Println(math.Sin(2 * math.Pi))\r\n\tfmt.Println(math.Tan(math.Pi / 2))\r\n\r\n\t// Square and cube roots\r\n\tfmt.Println(math.Sqrt(144))\r\n\tfmt.Println(math.Cbrt(125))\r\n\r\n\t// Hypothenuse\r\n\tfmt.Println(math.Hypot(30, 40))\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\n10 10\r\n100\r\n22026.465794806718\r\n-1\r\n-2.449293598294703e-16\r\n1.6331239353195392e+16\r\n12\r\n5\r\n50\n"})}),"\n",(0,e.jsx)(n.h4,{id:"random",children:"Random"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.a,{href:"https://pkg.go.dev/math/rand",children:"Package rand"})," implements pseudo-random number generators unsuitable for security-sensitive work."]}),"\n",(0,e.jsx)(n.p,{children:"Random numbers are generated by a Source. Top-level functions, such as Float64 and Int, use a default shared Source that produces a deterministic sequence of values each time a program is run. Use the Seed function to initialize the default Source if different behavior is required for each run. The default Source is safe for concurrent use by multiple goroutines, but Sources created by NewSource are not."}),"\n",(0,e.jsx)(n.p,{children:"This package's outputs might be easily predictable regardless of how it's seeded. For random numbers suitable for security-sensitive work, see the crypto/rand package."}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"math/rand"\r\n\t"time"\r\n)\r\n\r\nfunc main() {\r\n\r\n\t// Random seed as a starting point for the generator\r\n\trand.Seed(time.Now().UnixNano())\r\n\r\n\t// Generate random integers\r\n\tfmt.Println(rand.Int())\r\n\tfmt.Println(rand.Intn(5))\r\n\r\n\t// Generate random floats\r\n\tfmt.Println(rand.Float32())\r\n\tfmt.Println(rand.Float64())\r\n\r\n\t// Generate random ints between a and b\r\n\tconst a, b = 1, 10\r\n\tfor i := 0; i<5; i++ {\r\n\t\tn := a + rand.Intn(b-a+1)\r\n\t\tfmt.Print(n, " " )\r\n\t}\r\n\tfmt.Println()\r\n\r\n\t// Generate random uppercase character\r\n\tfor i := 0; i<5; i++ {\r\n\t\tc := string(\'A\' + rune(rand.Intn(\'Z\'-\'A\'+1)))\r\n\t\tfmt.Printf("%s", c)\r\n\t}\r\n\tfmt.Println()\r\n\r\n\r\n\t// Permutations - randomly select from array\r\n\ts := []string{"Tomcat", "Fulcrum", "Viper", "Frogfoot", "Apache", "Hind", "Bone"}\r\n\t// Reorder slice randomly\r\n\tindexes := rand.Perm(len(s))\r\n\tfmt.Println(indexes)\r\n\t// Print index in the order that was generated\r\n\tfor i := 0; i<len(indexes); i++ {\r\n\t\tfmt.Println(s[indexes[i]])\r\n\t}\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\n\r\n7000560910936529311\r\n2\r\n0.5594295\r\n0.03983504194598849\r\n6 5 2 10 9\r\nRVFXJ\r\n[0 3 2 1 5 4 6]\r\nTomcat\r\nFrogfoot\r\nViper\r\nFulcrum\r\nHind\r\nApache\r\nBone\n"})}),"\n",(0,e.jsx)(n.h4,{id:"random-strings",children:"Random Strings"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"math/rand"\r\n\t"strings"\r\n\t"time"\r\n)\r\n\r\nfunc main() {\r\n\r\n\t// Random seed as a starting point for the generator\r\n\trand.Seed(time.Now().UnixNano())\r\n\r\n\t// Shuffle\r\n\tconst numstring = "Tomcat Fulcrum Viper Frogfoot Apache Hind Bone"\r\n\t// split into array of words\r\n\twords := strings.Fields(numstring)\r\n\t// generate new order\r\n\trand.Shuffle(len(words), func(i,j int) {\r\n\t\t// make words swap places\r\n\t\twords[i], words[j] = words[j], words[i]\r\n\t})\r\n\tfmt.Println(words)\r\n \r\n\r\n\t// Random Strings\r\n\tconst uppercase = "QWERTYUIOOPASDFGHJKLZXCVBNM"\r\n\tconst lowercase = "qwertyuiopasdfghjklzxcvbnm"\r\n\tconst digits = "1234567890"\r\n\tconst special = "!@#$%^&*()_+<>?:;/.|,\']"\r\n\tconst allchars = uppercase + lowercase + digits + special\r\n\r\n\t// Generate a 10 digit password\r\n\tvar sb strings.Builder\r\n\tlength := 10\r\n\r\n\tfor i := 0; i < length; i++ {\r\n\t\tsb.WriteRune(rune(allchars[rand.Intn(len(allchars))]))\r\n\t}\r\n\tfmt.Println("String result: ", sb.String())\r\n\r\n\t// Generate a 10 digit password that !must contain all types of characters\r\n\t// Create a buffer that takes 1 random character from all sets\r\n\tbuf := make([]byte, length)\r\n\tbuf[0] = uppercase[rand.Intn(len(uppercase))]\r\n\tbuf[1] = lowercase[rand.Intn(len(lowercase))]\r\n\tbuf[2] = digits[rand.Intn(len(digits))]\r\n\tbuf[3] = special[rand.Intn(len(special))]\r\n\t// Fill up the rest of the buffer with random `allchars`\r\n\tfor i := 4; i < length; i++ {\r\n\t\tbuf[i] = allchars[rand.Intn(len(allchars))]\r\n\t}\r\n\t// Make sure that the position of the first 4 chars is shuffled\r\n\trand.Shuffle(len(buf), func(i, j int) {\r\n\t\t// make characters swap places\r\n\t\tbuf[i], buf[j] = buf[j], buf[i]\r\n\t})\r\n\tfmt.Println("String result: ", string(buf))\r\n\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main2.go\r\n\r\n[Viper Frogfoot Bone Hind Tomcat Fulcrum Apache]\r\nString result:  8m8ja#$)ip\r\nString result:  ]mVm|5pPL%\n"})}),"\n",(0,e.jsx)(n.h3,{id:"osioutil--files-and-directories",children:"os|ioutil :: Files and directories"}),"\n",(0,e.jsxs)(n.p,{children:[(0,e.jsx)(n.a,{href:"https://pkg.go.dev/os",children:"Package os"})," provides a platform-independent interface to operating system functionality. The design is Unix-like, although the error handling is Go-like; failing calls return values of type error rather than error numbers. Often, more information is available within the error. For example, if a call that takes a file name fails, such as Open or Stat, the error will include the failing file name when printed and will be of type *PathError, which may be unpacked for more information."]}),"\n",(0,e.jsx)(n.p,{children:"The os interface is intended to be uniform across all operating systems. Features not generally available appear in the system-specific package syscall."}),"\n",(0,e.jsx)(n.p,{children:"Here is a simple example, opening a file and reading some of it."}),"\n",(0,e.jsx)(n.h4,{id:"file-info",children:"File info"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"os"\r\n)\r\n\r\n// Make sure a file is present\r\nfunc checkFileExists(filePath string) bool {\r\n\tif _, err := os.Stat(filePath); err !=nil {\r\n\t\tif os.IsNotExist(err) {\r\n\t\t\treturn false\r\n\t\t}\r\n\t}\r\n\treturn true\r\n}\r\n\r\nfunc main() {\r\n\r\n\t// Check file\r\n\texists := checkFileExists("text.txt")\r\n\tfmt.Println("Is text.txt present:", exists)\r\n\r\n\t// Get file stats\r\n\tstats, err := os.Stat("text.txt")\r\n\tif err != nil {\r\n\t\tpanic(err)\r\n\t}\r\n\t// Print modification time\r\n\tfmt.Println("Modification time:", stats.ModTime())\r\n\t// Print filesize\r\n\tfmt.Println("File size:", stats.Size(), "bytes")\r\n\t// Check file permissions\r\n\tfmt.Println("File Mode:", stats.Mode())\r\n\t// Check if it is a directory\r\n\tfmt.Println("Is it a directory:", stats.IsDir())\r\n\t// Check if it is a file\r\n\tfmode := stats.Mode()\r\n\tif fmode.IsRegular() {\r\n\t\tfmt.Println("This is a file not a symlink")\r\n\t}\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\nIs text.txt present: true\r\nModification time: 2021-10-03 20:49:47.2424559 +0800 CST\r\nFile size: 5 bytes\r\nFile Mode: -rw-rw-rw-\r\nIs it a directory: false\r\nThis is a file not a symlink\n"})}),"\n",(0,e.jsx)(n.h4,{id:"write-file",children:"Write File"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"io/ioutil"\r\n\t"os"\r\n)\r\n\r\n// Make sure a file is present\r\nfunc handleErr(err error) {\r\n\tif err !=nil {\r\n\t\tpanic(err)\r\n\t}\r\n}\r\n\r\n// Check if file is already present\r\nfunc checkFileExists(filePath string) bool {\r\n\tif _, err := os.Stat(filePath); err !=nil {\r\n\t\tif os.IsNotExist(err) {\r\n\t\t\treturn false\r\n\t\t}\r\n\t}\r\n\treturn true\r\n}\r\n\r\n// Write data to file with `os`\r\nfunc writeFileData() {\r\n\t// Create new file\r\n\tf, err := os.Create("os_create.txt")\r\n\thandleErr(err)\r\n\t// Close file afterwards\r\n\tdefer f.Close()\r\n\t// Print name of generated file\r\n\tfmt.Println("File generated:", f.Name())\r\n\t// Write string to file\r\n\tf.WriteString("This is some text\\n")\r\n\t// Write bytes to file\r\n\t//data2 := []byte("This some more text\\n")\r\n\tdata2 := []byte{\'v\', \'w\', \'x\', \'y\', \'z\', \'\\n\'}\r\n\tf.Write(data2)\r\n\t// Sync everything to disk\r\n\tf.Sync()\r\n}\r\n\r\n// Append Data to file\r\nfunc appendFileData(fname string, data string) {\r\n\tf, err := os.OpenFile(fname, os.O_APPEND|os.O_WRONLY, 0644)\r\n\thandleErr(err)\r\n\tdefer f.Close()\r\n\r\n\t_, err = f.WriteString(data)\r\n}\r\n\r\nfunc main() {\r\n\r\n\t\t// Write data to file with `ioutil`\r\n\t\t// But skip if file is already present\r\n\t\tif !checkFileExists("datafile.txt") {\r\n\t\t\tdata1 := []byte("Hi!\\n")\r\n\t\t\tioutil.WriteFile("datafile.txt", data1, 0644)\r\n\t\t}\r\n\r\n\t\t// Append data to file\r\n\t\tappendFileData("datafile.txt", "APPENDIX!")\r\n\r\n\t\t// Write data to file with `os`\r\n\t\t// But if file already exists\r\n\t\tif !checkFileExists("os_create.txt") {\r\n\t\t\twriteFileData()\r\n\t\t} else {\r\n\t\t\t// Trim file data to 22 bytes\r\n\t\t\tos.Truncate("os_create.txt", 22)\r\n\t\t\tfmt.Println("Log file has been truncated")\r\n\t\t}\r\n\t\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\nFile generated: os_create.txt\r\n\r\ngo run .\\main.go\r\nLog file has been truncated\n"})}),"\n",(0,e.jsx)(n.h4,{id:"read-file",children:"Read File"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"io"\r\n\t"io/ioutil"\r\n\t"os"\r\n\t// "path/filepath"\r\n)\r\n\r\n// Handle error\r\nfunc handleErr(err error) {\r\n\tif err !=nil {\r\n\t\tpanic(err)\r\n\t}\r\n}\r\n// Get length of file\r\nfunc getFileLength(filepath string) int64 {\r\n\tf, err := os.Stat(filepath)\r\n\thandleErr(err)\r\n\treturn f.Size()\r\n}\r\n\r\nfunc main() {\r\n\r\n\t// Get length of file\r\n\tlength := getFileLength("text.txt")\r\n\tfmt.Println("File length:", length)\r\n\r\n\t// Read entire file and print\r\n\tcontent, err := ioutil.ReadFile("text.txt")\r\n\thandleErr(err)\r\n\tfmt.Println("Entire Content:\\n", string(content))\r\n\tfmt.Println()\r\n\r\n\t// Read file in chunks of 20 bytes\r\n\t// open the file\r\n\tconst BuffSize = 20\r\n\tf, _ := os.Open("text.txt")\r\n\tdefer f.Close()\r\n\t// Create buffer with size BuffSize\r\n\tb1 := make([]byte, BuffSize)\r\n\tfmt.Println("Content read in 20bytes chunks")\r\n\tfor {\r\n\t\tn, err := f.Read(b1)\r\n\t\t// Continue looping\r\n\t\tif err != nil {\r\n\t\t\t// Until you reach the end of file\r\n\t\t\tif err != io.EOF {\r\n\t\t\t\t// If error other than EOF, panic\r\n\t\t\t\thandleErr(err)\r\n\t\t\t}\r\n\t\t\t// Break\r\n\t\t\tbreak\r\n\t\t}\r\n\r\n\t\tfmt.Println("Bytes read:", n)\r\n\t\tfmt.Println("Content:", string(b1[:n]))\r\n\t}\r\n\r\n\t// Read from a specific position\r\n\t// Create buffer to read 10 bytes\r\n\tb2 := make([]byte, 10)\r\n\t// Read the last 10 bytes from open file\r\n\t_, err = f.ReadAt(b2,length-int64(len(b2)))\r\n\thandleErr(err)\r\n\tfmt.Println("Last 10bytes of file:", string(b2))\r\n\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\nFile length: 243\r\nEntire Content:\r\n If you like pi\xf1a coladas\r\nAnd gettin\u2032 caught in the rain\r\nIf you're not into yoga\r\nIf you have half a brain\r\nIf you like makin' love at midnight     \r\nIn the dunes on the cape\r\nThen I\u2032m the love that you\u2032ve looked for\r\nWrite to me and escape\r\n\r\nContent read in 20bytes chunks\r\nBytes read: 20\r\nContent: If you like pi\xf1a co\r\nBytes read: 20\r\nContent: ladas\r\nAnd gettin\u2032\r\nBytes read: 20\r\nContent:  caught in the rain\r\nBytes read: 20\r\nContent:\r\nIf you're not into\r\nBytes read: 20\r\nContent: yoga\r\nIf you have ha\r\nBytes read: 20\r\nContent: lf a brain\r\nIf you l\r\nBytes read: 20\r\nContent: ike makin' love at m\r\nBytes read: 20\r\nContent: idnight\r\nIn the dune\r\nBytes read: 20\r\nContent: s on the cape\r\nThen\r\nBytes read: 20\r\nContent: I\u2032m the love that\r\nBytes read: 20\r\nContent: you\u2032ve looked for\r\nBytes read: 20\r\nContent:\r\nWrite to me and esc\r\nBytes read: 3\r\nContent: ape\r\n\r\nLast 10bytes of file: and escape\n"})}),"\n",(0,e.jsx)(n.h4,{id:"directories",children:"Directories"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"io/ioutil"\r\n\t"os"\r\n)\r\n\r\n// Handle error\r\nfunc handleErr(err error) {\r\n\tif err !=nil {\r\n\t\tpanic(err)\r\n\t}\r\n}\r\n\r\nfunc main() {\r\n\r\n\t// Create a directory\r\n\tos.Mkdir("newdir", os.ModePerm)\r\n\r\n\t// Create nested dir\r\n\tos.MkdirAll("newdir2/surprise", os.ModePerm)\r\n\r\n\t// Remove a directory\r\n\tdefer os.Remove("newdir")\r\n\r\n\t// Remove directory and children\r\n\tdefer os.RemoveAll("newdir2")\r\n\r\n\t// Read what the working directory is\r\n\tdir, _ := os.Getwd()\r\n\tfmt.Println("Current working dir:", dir)\r\n\r\n\t// Read the directory of the current process\r\n\texedir, _ := os.Executable()\r\n\tfmt.Println("Process dir:", exedir)\r\n\r\n\t// Read and list content of current directory\r\n\tcontent, _ := ioutil.ReadDir(".")\r\n\tfmt.Println("Dir content:", content)\r\n\tfor _, fi := range content {\r\n\t\tfmt.Println(fi.Name(), fi.IsDir())\r\n\t}\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\nCurrent working dir: E:\\golang-refresher\\files\\Directories\r\nProcess dir: C:\\Users\\INSTAR\\AppData\\Local\\Temp\\go-build1247541399\\b001\\exe\\main.exe\r\nDir content: [0xc0000e0000 0xc0000e0070 0xc0000e00e0 0xc0000e0150]\r\nmain.go false\r\nnewdir true\r\nnewdir2 true\r\ntext.txt false\n"})}),"\n",(0,e.jsx)(n.h4,{id:"temporary-data",children:"Temporary Data"}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"io/ioutil"\r\n\t"os"\r\n)\r\n\r\n// Handle error\r\nfunc handleErr(err error) {\r\n\tif err !=nil {\r\n\t\tpanic(err)\r\n\t}\r\n}\r\n\r\nfunc main() {\r\n\r\n\t// Get default temp dir\r\n\ttempPath := os.TempDir()\r\n\tfmt.Println("Default temp dir:", tempPath)\r\n\r\n\t// Create a temporary file\r\n\t\r\n\t// Create temp data\r\n\ttempData := []byte("Some temp data")\r\n\t\r\n\t// Generate file with random filename\r\n\ttmpFile, err := ioutil.TempFile(tempPath, "temp_*.txt")\r\n\tif err != nil {\r\n\t\tpanic(err)\r\n\t}\r\n\t\r\n\t// Write temp data to file\r\n\tif _, err := tmpFile.Write(tempData); err !=nil {\r\n\t\tpanic(err)\r\n\t}\r\n\t\r\n\t// Read and print tempFile content\r\n\tdata, _ := ioutil.ReadFile(tmpFile.Name())\r\n\tfmt.Printf("%s\\n", data)\r\n\r\n\t// Remove temp file\r\n\r\n\t// Check if it is there\r\n\tfmt.Println("Remove tempfile:", tmpFile.Name())\r\n\tdefer os.Remove(tmpFile.Name())\r\n\r\n\r\n\t// Create a randomly named temp dir inside the default tmp directory\r\n\ttmpDir, err := ioutil.TempDir("", "temp_*")\r\n\tif err != nil {\r\n\t\tpanic(err)\r\n\t}\r\n\t// Remove temp dir\r\n\tfmt.Println("Remove temp dir:", tmpDir)\r\n\tdefer os.RemoveAll(tmpDir)\r\n\r\n}\n'})}),"\n",(0,e.jsx)(n.pre,{children:(0,e.jsx)(n.code,{className:"language-bash",children:"go run .\\main.go\r\nDefault temp dir: C:\\Users\\INSTAR\\AppData\\Local\\Temp\r\nSome temp data\r\nRemove tempfile: C:\\Users\\INSTAR\\AppData\\Local\\Temp\\temp_2823599238.txt\r\nRemove temp dir: C:\\Users\\INSTAR\\AppData\\Local\\Temp\\temp_596935459\n"})})]})}function c(r={}){const{wrapper:n}={...(0,i.ah)(),...r.components};return n?(0,e.jsx)(n,{...r,children:(0,e.jsx)(m,{...r})}):m(r)}},603905:(r,n,t)=>{t.d(n,{ah:()=>d});var e=t(667294);function i(r,n,t){return n in r?Object.defineProperty(r,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[n]=t,r}function a(r,n){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable}))),t.push.apply(t,e)}return t}function o(r){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(r,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))}))}return r}function s(r,n){if(null==r)return{};var t,e,i=function(r,n){if(null==r)return{};var t,e,i={},a=Object.keys(r);for(e=0;e<a.length;e++)t=a[e],n.indexOf(t)>=0||(i[t]=r[t]);return i}(r,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(r);for(e=0;e<a.length;e++)t=a[e],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(r,t)&&(i[t]=r[t])}return i}var l=e.createContext({}),d=function(r){var n=e.useContext(l),t=n;return r&&(t="function"==typeof r?r(n):o(o({},n),r)),t},m={inlineCode:"code",wrapper:function(r){var n=r.children;return e.createElement(e.Fragment,{},n)}},c=e.forwardRef((function(r,n){var t=r.components,i=r.mdxType,a=r.originalType,l=r.parentName,c=s(r,["components","mdxType","originalType","parentName"]),f=d(t),h=i,u=f["".concat(l,".").concat(h)]||f[h]||m[h]||a;return t?e.createElement(u,o(o({ref:n},c),{},{components:t})):e.createElement(u,o({ref:n},c))}));c.displayName="MDXCreateElement"},110773:(r,n,t)=>{t.d(n,{Z:()=>e});const e=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-88971fd9c1b188353d6b4c2b974194a5.jpg"}}]);