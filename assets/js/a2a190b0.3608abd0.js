"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[89153],{801072:(n,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var e=t(474848),s=t(28453);const i={sidebar_position:9070,slug:"2021-09-11",title:"Golang Refresher :: fmt & strings",authors:"mpolinowski",tags:["Go"]},a=void 0,o={id:"Development/Go/2021-09-11--golang-refresher-fmt-strings/index",title:"Golang Refresher :: fmt & strings",description:"Guangzhou, China",source:"@site/docs/Development/Go/2021-09-11--golang-refresher-fmt-strings/index.md",sourceDirName:"Development/Go/2021-09-11--golang-refresher-fmt-strings",slug:"/Development/Go/2021-09-11--golang-refresher-fmt-strings/2021-09-11",permalink:"/docs/Development/Go/2021-09-11--golang-refresher-fmt-strings/2021-09-11",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2021-09-11--golang-refresher-fmt-strings/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:9070,frontMatter:{sidebar_position:9070,slug:"2021-09-11",title:"Golang Refresher :: fmt & strings",authors:"mpolinowski",tags:["Go"]},sidebar:"tutorialSidebar",previous:{title:"Golang Refresher :: math & os",permalink:"/docs/Development/Go/2021-09-11--golang-refresher-math-os/2021-09-11"},next:{title:"Go Websockets",permalink:"/docs/Development/Go/2021-09-10--go-websockets/2021-09-10"}},l={},d=[{value:"Environment",id:"environment",level:2},{value:"Visual Studio Code",id:"visual-studio-code",level:3},{value:"The Go Standard Library",id:"the-go-standard-library",level:2},{value:"fmt :: String formatting and Printing",id:"fmt--string-formatting-and-printing",level:3},{value:"Print and Println",id:"print-and-println",level:4},{value:"Printf and Sprintf",id:"printf-and-sprintf",level:4},{value:"Stdin",id:"stdin",level:4},{value:"strings|strconv|unicode :: Manipulating string and text content",id:"stringsstrconvunicode--manipulating-string-and-text-content",level:3},{value:"strings - Basics",id:"strings---basics",level:4},{value:"strings - Search",id:"strings---search",level:4},{value:"strings - Manipulations",id:"strings---manipulations",level:4},{value:"strings - Mapping",id:"strings---mapping",level:4},{value:"strings - Builder",id:"strings---builder",level:4},{value:"strconv - Parse",id:"strconv---parse",level:4},{value:"unicode",id:"unicode",level:4}];function c(n){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(r.p,{children:(0,e.jsx)(r.img,{alt:"Guangzhou, China",src:t(20206).A+"",width:"1500",height:"560"})}),"\n",(0,e.jsx)(r.h2,{id:"environment",children:"Environment"}),"\n",(0,e.jsx)(r.h3,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,e.jsxs)(r.p,{children:["Install the Go extension und use the VS Code command line (F1) to ",(0,e.jsx)(r.code,{children:"go: install/update tools"})," and install everything that is offered:"]}),"\n",(0,e.jsx)(r.p,{children:(0,e.jsx)(r.img,{alt:"Go Websockets",src:t(218538).A+"",width:"1245",height:"363"})}),"\n",(0,e.jsx)(r.h2,{id:"the-go-standard-library",children:"The Go Standard Library"}),"\n",(0,e.jsxs)(r.ul,{children:["\n",(0,e.jsx)(r.li,{children:"Part I"}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"/docs/Development/Go/2021-09-11--golang-refresher-math-os/2021-09-11",children:"Part II"})}),"\n",(0,e.jsx)(r.li,{children:(0,e.jsx)(r.a,{href:"/docs/Development/Go/2021-09-11--golang-refresher-network/2021-09-11",children:"Part III"})}),"\n"]}),"\n",(0,e.jsx)(r.h3,{id:"fmt--string-formatting-and-printing",children:"fmt :: String formatting and Printing"}),"\n",(0,e.jsxs)(r.p,{children:["The ",(0,e.jsx)(r.a,{href:"https://pkg.go.dev/fmt@go1.17.1",children:"fmt Package"})," implements formatted I/O with functions analogous to C's printf and scanf. The format 'verbs' are derived from C's but are simpler."]}),"\n",(0,e.jsx)(r.h4,{id:"print-and-println",children:"Print and Println"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport "fmt"\r\n\r\nfunc main() {\r\n\r\n\t// Print a string\r\n\tfmt.Print("a string")\r\n\r\n\t// Print a string with newline\r\n\tfmt.Println("a string followed by a newline")\r\n\r\n\t// Print string with values\r\n\tconst fortytwo = 42\r\n\tconst answer = "answer"\r\n\tconst everything = "everything"\r\n\tfmt.Println("The", answer, "to", everything, "is", fortytwo)\r\n\r\n\t// Print a slice\r\n\titems := []int{33, 66, 99, 666}\r\n\tlength, err := fmt.Println(items)\r\n\tfmt.Println(length, err)\r\n\r\n}\n'})}),"\n",(0,e.jsx)(r.p,{children:"Run the file with:"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run ./main.go\r\n\r\na stringa string followed by a newline\r\nThe answer to everything is 42\r\n[33 66 99 666]\r\n15 <nil>\n"})}),"\n",(0,e.jsx)(r.h4,{id:"printf-and-sprintf",children:"Printf and Sprintf"}),"\n",(0,e.jsxs)(r.p,{children:["Print data with the help of ",(0,e.jsx)(r.a,{href:"https://pkg.go.dev/fmt@go1.17.1#hdr-Printing",children:"formatting verbs"})," - e.g. :"]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"General:"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%v"}),(0,e.jsxs)(r.td,{children:["the value in a default format. ",(0,e.jsx)(r.em,{children:"when printing structs, the plus flag (%+v) adds field names"})]})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%#v"}),(0,e.jsx)(r.td,{children:"a Go-syntax representation of the value"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%T"}),(0,e.jsx)(r.td,{children:"a Go-syntax representation of the type of the value"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%%"}),(0,e.jsx)(r.td,{children:"a literal percent sign; consumes no value"})]})]})]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"Boolean:"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsx)(r.tbody,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%t"}),(0,e.jsx)(r.td,{children:"the word true or false"})]})})]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"Integer:"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%b"}),(0,e.jsx)(r.td,{children:"base 2"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%c"}),(0,e.jsx)(r.td,{children:"the character represented by the corresponding Unicode code point"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%d"}),(0,e.jsx)(r.td,{children:"base 10"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%o"}),(0,e.jsx)(r.td,{children:"base 8"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%O"}),(0,e.jsx)(r.td,{children:"base 8 with 0o prefix"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%q"}),(0,e.jsx)(r.td,{children:"a single-quoted character literal safely escaped with Go syntax."})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%x"}),(0,e.jsx)(r.td,{children:"base 16, with lower-case letters for a-f"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%X"}),(0,e.jsx)(r.td,{children:"base 16, with upper-case letters for A-F"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%U"}),(0,e.jsx)(r.td,{children:'Unicode format: U+1234; same as "U+%04X"'})]})]})]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"Floating-point and complex constituents:"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%b"}),(0,e.jsx)(r.td,{children:"decimalless scientific notation with exponent a power of two, in the manner of strconv.FormatFloat with the 'b' format, e.g. -123456p-78"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%e"}),(0,e.jsx)(r.td,{children:"scientific notation, e.g. -1.234456e+78"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%E"}),(0,e.jsx)(r.td,{children:"scientific notation, e.g. -1.234456E+78"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%f"}),(0,e.jsx)(r.td,{children:"decimal point but no exponent, e.g. 123.456"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%F"}),(0,e.jsx)(r.td,{children:"synonym for %f"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%g"}),(0,e.jsx)(r.td,{children:"%e for large exponents, %f otherwise. Precision is discussed below."})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%G"}),(0,e.jsx)(r.td,{children:"%E for large exponents, %F otherwise"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%x"}),(0,e.jsx)(r.td,{children:"hexadecimal notation (with decimal power of two exponent), e.g. -0x1.23abcp+20"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%X"}),(0,e.jsx)(r.td,{children:"upper-case hexadecimal notation, e.g. -0X1.23ABCP+20"})]})]})]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"String and slice of bytes (treated equivalently with these verbs):"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsxs)(r.tbody,{children:[(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%s"}),(0,e.jsx)(r.td,{children:"the uninterpreted bytes of the string or slice"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%q"}),(0,e.jsx)(r.td,{children:"a double-quoted string safely escaped with Go syntax"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%x"}),(0,e.jsx)(r.td,{children:"base 16, lower-case, two characters per byte"})]}),(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%X"}),(0,e.jsx)(r.td,{children:"base 16, upper-case, two characters per byte"})]})]})]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"Slice:"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsx)(r.tbody,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%p"}),(0,e.jsx)(r.td,{children:"address of 0th element in base 16 notation, with leading 0x"})]})})]}),"\n",(0,e.jsxs)(r.table,{children:[(0,e.jsx)(r.thead,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.th,{children:"Pointer:"}),(0,e.jsx)(r.th,{})]})}),(0,e.jsx)(r.tbody,{children:(0,e.jsxs)(r.tr,{children:[(0,e.jsx)(r.td,{children:"%p"}),(0,e.jsx)(r.td,{children:"base 16 notation, with leading 0x"})]})})]}),"\n",(0,e.jsx)(r.p,{children:"The %b, %d, %o, %x and %X verbs also work with pointers, formatting the value exactly as if it were an integer."}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport "fmt"\r\n\r\ntype circle struct {\r\n\tradius int\r\n\tborder int\r\n}\r\n\r\nfunc main() {\r\n\r\n\tx := 26\r\n\tf := 337.99\r\n\r\n\t// Formatting\r\n\t// decimal\r\n\tfmt.Printf("%d\\n", x)\r\n\t// hexadecimal\r\n\tfmt.Printf("%x\\n", x)\r\n\r\n\t// Booleans\r\n\tfmt.Printf("%t\\n", x > 10)\r\n\r\n\t// Floats\r\n\tfmt.Printf("%f\\n", f)\r\n\tfmt.Printf("%e\\n", f)\r\n\r\n\t// Explicit argument indexes\r\n\tfmt.Printf("%d %d\\n", 69, 119)\r\n\tfmt.Printf("%[2]d %[1]d\\n", 69, 119)\r\n\r\n\t// Explicit argument indexes with repeated values\r\n\tfmt.Printf("%d %d %#[1]o %#[2]x\\n", 69, 119)\r\n\r\n\t// Print in default format\r\n\tc := circle {\r\n\t\tradius: 456,\r\n\t\tborder: 2,\r\n\t}\r\n\r\n\tfmt.Printf("%v\\n", c)\r\n\tfmt.Printf("%+v\\n", c)\r\n\tfmt.Printf("%T\\n", c)\r\n\r\n\t// Use SprintF to return value as string\r\n\ts := fmt.Sprintf("%d %d", 69, 119)\r\n\tfmt.Println(s)\r\n\tfmt.Printf("%T\\n", s)\r\n\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run ./main.go\r\n\r\n26\r\n1a\r\ntrue\r\n337.990000\r\n3.379900e+02\r\n69 119\r\n119 69\r\n69 119 0105 0x77\r\n{456 2}\r\n{radius:456 border:2}\r\nmain.circle\r\n69 119\r\nstring\n"})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport "fmt"\r\n\r\nfunc main() {\r\n\r\n\tf := 997.123\r\n\r\n\t// Decimal precision (e.g. 2 decimal points)\r\n\tfmt.Printf("%.2f\\n", f)\r\n\r\n\t// Max width (e.g. 15 spaces) and default precision (this will just\r\n\t// add empty spaces in front to make lists look pretty)\r\n\tfmt.Printf("%15f\\n", f)\r\n\r\n\t// Padding and precision\r\n\tfmt.Printf("%15.2f\\n", f)\r\n\r\n\t// Add a character in front, e.g. a `+`\r\n\tfmt.Printf("%+15.3f\\n", f)\r\n\r\n\t// Padding with zeros instead of empty spaces\r\n\tfmt.Printf("%015.4f\\n", f)\r\n\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\formatting.go\r\n\r\n997.12\r\n     997.123000\r\n         997.12\r\n       +997.123\r\n0000000997.1230\n"})}),"\n",(0,e.jsx)(r.h4,{id:"stdin",children:"Stdin"}),"\n",(0,e.jsx)(r.p,{children:"Reading and printing user inputs:"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"bufio"\r\n\t"fmt"\r\n\t"os"\r\n)\r\n\r\nfunc main() {\r\n\r\n\treader := bufio.NewReader(os.Stdin)\r\n\ts, _ := reader.ReadString(\'\\n\')\r\n\tfmt.Println(s)\r\n\t\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\nhello world\r\nhello world\n"})}),"\n",(0,e.jsx)(r.h3,{id:"stringsstrconvunicode--manipulating-string-and-text-content",children:"strings|strconv|unicode :: Manipulating string and text content"}),"\n",(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.a,{href:"https://pkg.go.dev/strings@go1.17.1",children:"Package strings"})," implements simple functions to manipulate UTF-8 encoded strings."]}),"\n",(0,e.jsx)(r.h4,{id:"strings---basics",children:"strings - Basics"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"strings"\r\n)\r\n\r\nfunc main() {\r\n\r\n\ts:= "This string is never gonna give you up, never gonna let you down..."\r\n\r\n\t// Print length of a string\r\n\tfmt.Println(len(s))\r\n\r\n\t// Iteration\r\n\tfor _, ch := range s {\r\n\t\tfmt.Print(string(ch), "-")\r\n\t}\r\n\tfmt.Println()\r\n\r\n\t// Operators\r\n\tfmt.Println("Sapporro" < "Asahi")\r\n\tfmt.Println("Tomcat" > "Hornet")\r\n\tfmt.Println("rick" == "Rick")\r\n\tfmt.Println("rick" != "Rick")\r\n\r\n\t// Compare\r\n\tcompare_01 := strings.Compare("Sapporro", "Asahi")\r\n\tfmt.Println(compare_01)\r\n\tcompare_02 := strings.Compare("Sapporro", "Sapporro")\r\n\tfmt.Println(compare_02)\r\n\r\n\t// Unicode case-folding\r\n\tfmt.Println(strings.EqualFold("\u4e2d\u570b", "\u53f0\u7063"))\r\n\tfmt.Println(strings.EqualFold("\u53f0\u7063", "\u53f0\u7063"))\r\n\r\n\t// Character cases\r\n\ts1 := strings.ToUpper(s)\r\n\ts2 := strings.ToLower(s)\r\n\ts3 := strings.Title(s)\r\n\tfmt.Println(s1, s2, s3)\r\n\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\n\r\n67\r\nT-h-i-s- -s-t-r-i-n-g- -i-s- -n-e-v-e-r- -g-o-n-n-a- -g-i-v-e- -y-o-u- -u-p-,- -n-e-v-e-r- -g-o-n-n-a- -l-e-t- -y-o-u- -d-o-w-n-.-.-.-       \r\nfalse\r\ntrue\r\nfalse\r\ntrue\r\n1\r\n0\r\nfalse\r\ntrue\r\nTHIS STRING IS NEVER GONNA GIVE YOU UP, NEVER GONNA LET YOU DOWN... this string is never gonna give you up, never gonna let you down... This \r\nString Is Never Gonna Give You Up, Never Gonna Let You Down...\n"})}),"\n",(0,e.jsx)(r.h4,{id:"strings---search",children:"strings - Search"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"strings"\r\n)\r\n\r\nfunc main() {\r\n\r\n\ts:= "This string is never gonna give you up, never gonna let you down..."\r\n\tvowels := "aeiouAEIOU"\r\n\r\n\tfname := "textfile.txt"\r\n\tfname2 := "imagefile.png"\r\n\r\n\t// Contains a sub-string\r\n\tfmt.Println(strings.Contains(s, "gonna"))\r\n\r\n\t// ContainsAny of these characters\r\n\tfmt.Println(strings.ContainsAny(s, "xyzi"))\r\n\r\n\t// Find offset of first instance of substring\r\n\tfmt.Println(strings.Index(s, "give"))\r\n\tfmt.Println(strings.Index(s, "rick"))\r\n\r\n\t// Find offset of first instance of any of a set of characters\r\n\tfmt.Println(strings.IndexAny(s, vowels))\r\n\tfmt.Println(strings.IndexAny("xyzs", vowels))\r\n\r\n\t// Check if strings starts/ends with a substring\r\n\tfmt.Println(strings.HasSuffix(fname, "txt"))\r\n\tfmt.Println(strings.HasPrefix(fname2, "image"))\r\n\r\n\t// Count non-overlapping instances of a substring\r\n\tfmt.Println(strings.Count(s, "gonna"))\r\n\tfmt.Println(strings.Count(s, "is"))\r\n\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\ntrue\r\ntrue\r\n27\r\n-1\r\n2\r\n-1\r\ntrue\r\ntrue\r\n2\r\n2\n"})}),"\n",(0,e.jsx)(r.h4,{id:"strings---manipulations",children:"strings - Manipulations"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"strings"\r\n\t"unicode"\r\n)\r\n\r\nfunc main() {\r\n\r\n\ts1 := "This string is never gonna give you up"\r\n\ts2 := []string{"one", "two", "three", "four"}\r\n\ts3 := "Never gonna give, never gonna give. Give you up!"\r\n\r\n\t// Split into substrings\r\n\tsub1 := strings.Split(s1, "never")\r\n\tfmt.Printf("%q\\n", sub1)\r\n\r\n\t// Split string around whitespaces\r\n\tresult := strings.Fields(s1)\r\n\tfmt.Printf("%q\\n", result)\r\n\r\n\t// Split around punctuation\r\n\tf := func(c rune) bool {\r\n\t\treturn unicode.IsPunct(c)\r\n\t}\r\n\tresult2 := strings.FieldsFunc(s3, f)\r\n\tfmt.Printf("%q\\n", result2)\r\n\r\n\t// Join substrings\r\n\tresult3 := strings.Join(s2, "-")\r\n\tfmt.Println(result3)\r\n\r\n\t// Replace substring\r\n\trep := strings.NewReplacer(",", " |", ".", " |", "!", " |")\r\n\tresult4 := rep.Replace(s3)\r\n\tfmt.Println(result4)\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:'go run .\\main.go\r\n\r\n["This string is " " gonna give you up"]\r\n["This" "string" "is" "never" "gonna" "give" "you" "up"]\r\n["Never gonna give" " never gonna give" " Give you up"]\r\none-two-three-four\r\nNever gonna give | never gonna give | Give you up |\n'})}),"\n",(0,e.jsx)(r.h4,{id:"strings---mapping",children:"strings - Mapping"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:"package main\r\n\r\nimport (\r\n\t\"fmt\"\r\n\t\"strings\"\r\n)\r\n\r\nfunc main() {\r\n\t// Become a secret agent by encoding your messages\r\n\ts:= \"This string is never gonna give you up, never gonna let you down...\"\r\n\t// As a cypher push every character `+2`\r\n\tshift := 2\r\n\r\n\t// Mapping function\r\n\ttransform := func (r rune) rune {\r\n\t\tswitch {\r\n\r\n\t\t// if character is uppercase\r\n\t\tcase r >= 'A' && r <= 'Z':\r\n\t\t\t// get ASCII base code of character and add value of `shift`\r\n\t\t\tvalue := int('A') + (int(r) - int('A') + shift)\r\n\t\t\t// if you hit 91 (which equals 'Z')\r\n\t\t\tif value > 91 {\r\n\t\t\t\t// subtract 26 to start from the beginning 'A'\r\n\t\t\t\tvalue -= 26\r\n\t\t\t// if you hit the lower threshold\r\n\t\t\t} else if value < 65 {\r\n\t\t\t\t// add 26\r\n\t\t\t\tvalue += 26\r\n\t\t\t}\r\n\t\t\treturn rune(value)\r\n\t\t\t\r\n\t\t// if character is lowercase\r\n\t\tcase r >= 'a' && r <= 'z':\r\n\t\t\t// get base code of character and add value of `shift`\r\n\t\t\tvalue := int('a') + (int(r) - int('a') + shift)\r\n\t\t\t// if you hit 91 (which equals 'z')\r\n\t\t\tif value > 122 {\r\n\t\t\t\t// subtract 26 to start from the beginning 'a'\r\n\t\t\t\tvalue -= 26\r\n\t\t\t// if you hit the lower threshold\r\n\t\t\t} else if value < 97 {\r\n\t\t\t\t// add 26\r\n\t\t\t\tvalue += 26\r\n\t\t\t}\r\n\t\t\treturn rune(value)\r\n\t\t}\r\n\t\treturn r\r\n\t}\r\n\r\n\t// Encode message\r\n\tencode := strings.Map(transform, s)\r\n\tfmt.Println(encode)\r\n\r\n\t// Encode message\r\n\tshift = -shift\r\n\tdecode := strings.Map(transform, encode)\r\n\tfmt.Println(decode)\r\n\r\n}\n"})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\n\r\nVjku uvtkpi ku pgxgt iqppc ikxg aqw wr, pgxgt iqppc ngv aqw fqyp...\r\nThis string is never gonna give you up, never gonna let you down...\n"})}),"\n",(0,e.jsx)(r.h4,{id:"strings---builder",children:"strings - Builder"}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"strings"\r\n)\r\n\r\nfunc main() {\r\n\t\r\n\tvar sb strings.Builder\r\n\r\n\t// Provide content\r\n\tsb.WriteString("This string is never gonna give you up \\n")\r\n\tsb.WriteString("Never gonna let you down \\n")\r\n\tsb.WriteString("Never gonna say goodbye \\n")\r\n\tsb.WriteString("Never gonna tell a lie and hurt you \\n")\r\n\r\n\t// Concatenate string\r\n\tfmt.Println(sb.String())\r\n\r\n\t// Get length of build string\r\n\tfmt.Println("Builder size:", sb.Len())\r\n\r\n\t// Builder capacity\r\n\tfmt.Println("Capacity:", sb.Cap())\r\n\r\n\t// Add capacity of 1k to reserve space\r\n\tsb.Grow(1024)\r\n\tfmt.Println("Capacity:", sb.Cap())\r\n\r\n\t// Reset content of builder\r\n\tsb.Reset()\r\n\tfmt.Println("After reset")\r\n\tfmt.Println("Capacity:", sb.Cap())\r\n\tfmt.Println("Builder Size:", sb.Len())\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\nThis string is never gonna give you up \r\nNever gonna let you down\r\nNever gonna say goodbye\r\nNever gonna tell a lie and hurt you\r\n\r\nBuilder size: 128\r\nCapacity: 192\r\nCapacity: 1408\r\nAfter reset\r\nCapacity: 0\r\nBuilder Size: 0\n"})}),"\n",(0,e.jsx)(r.h4,{id:"strconv---parse",children:"strconv - Parse"}),"\n",(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.a,{href:"https://pkg.go.dev/strconv@go1.17.1",children:"Package strconv"})," implements conversions to and from string representations of basic data types."]}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"strconv"\r\n)\r\n\r\nfunc main() {\r\n\r\n\tstr := "101"\r\n\tnum := 100\r\n\r\n\r\n\t// Converting int into string\r\n\t// The string function does NOT convert an int into a string!\r\n\tnewstr1 := string(str)\r\n\tfmt.Println("The first string is:", newstr1)\r\n\tfmt.Printf("%T\\n", newstr1)\r\n\tnewstr2 := string(num)\r\n\tfmt.Println("This is not the string I expected:", newstr2)\r\n\tfmt.Printf("%T\\n", newstr2)\r\n\t// To transform the int use:\r\n\tnewstr3 := strconv.Itoa(num)\r\n\tfmt.Println("The second string is:", newstr3)\r\n\tfmt.Printf("%T\\n", newstr3)\r\n\r\n\r\n\t// Convert string to int\r\n\tnewstr4, err := strconv.Atoi(str)\r\n\tif (err != nil) {\r\n\t\tfmt.Println(err.Error())\r\n\t}\r\n\tfmt.Println("This is now an integer:", newstr4)\r\n\tfmt.Printf("%T\\n", newstr4)\r\n\r\n\r\n\t// Parsing strings into different data types\r\n\tb, _ := strconv.ParseBool("true")\r\n\tfmt.Println(b)\r\n\tfmt.Printf("%T\\n", b)\r\n\tf, _ := strconv.ParseFloat("3.14159", 64)\r\n\tfmt.Println(f)\r\n\tfmt.Printf("%T\\n", f)\r\n\ti, _ := strconv.ParseInt("-42", 10, 64)\r\n\tfmt.Println(i)\r\n\tfmt.Printf("%T\\n", i)\r\n\tu, _ := strconv.ParseUint("42", 10, 64)\r\n\tfmt.Println(u)\r\n\tfmt.Printf("%T\\n", u)\r\n\r\n\t// Format converts values into strings\r\n\ts1 := strconv.FormatBool(true)\r\n\tfmt.Println(s1)\r\n\tfmt.Printf("%T\\n", s1)\r\n\ts2 := strconv.FormatFloat(3.1415, \'E\', -1, 64)\r\n\tfmt.Println(s2)\r\n\tfmt.Printf("%T\\n", s2)\r\n\ts3 := strconv.FormatInt(-42, 10)\r\n\tfmt.Println(s3)\r\n\tfmt.Printf("%T\\n", s3)\r\n\ts4 := strconv.FormatUint(42, 10)\r\n\tfmt.Println(s4)\r\n\tfmt.Printf("%T\\n", s4)\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\n\r\nThe first string is: 101\r\nstring\r\nThis is not the string I expected: d\r\nstring\r\nThe second string is: 100\r\nstring\r\nThis is now an integer: 101\r\nint\r\ntrue\r\nbool\r\n3.14159\r\nfloat64\r\n-42\r\nint64\r\n42\r\nuint64\r\ntrue\r\nstring\r\n3.1415E+00\r\nstring\r\n-42\r\nstring\r\n42\r\nstring\n"})}),"\n",(0,e.jsx)(r.h4,{id:"unicode",children:"unicode"}),"\n",(0,e.jsxs)(r.p,{children:[(0,e.jsx)(r.a,{href:"https://pkg.go.dev/unicode",children:"Package unicode"})," provides data and functions to test some properties of Unicode code points."]}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-go",children:'package main\r\n\r\nimport (\r\n\t"fmt"\r\n\t"unicode"\r\n)\r\n\r\nfunc main() {\r\n\r\n\tconst s = "This \'string\' is *never* gonna give you up, *never* gonna let you down..."\r\n\r\n\tpunctCount := 0\r\n\tlowerCount, upperCount := 0, 0\r\n\tspaceCount := 0\r\n\thexdigitCount :=0\r\n\r\n\t// Count unicode characters:\r\n\tfor _, ch := range s {\r\n\t\tif unicode.IsPunct(ch) {\r\n\t\t\tpunctCount++\r\n\t\t}\r\n\t\tif unicode.IsLower(ch) {\r\n\t\t\tlowerCount++\r\n\t\t}\r\n\t\tif unicode.IsUpper(ch) {\r\n\t\t\tupperCount++\r\n\t\t}\r\n\t\tif unicode.IsSpace(ch) {\r\n\t\t\tspaceCount++\r\n\t\t}\r\n\t\tif unicode.Is(unicode.Hex_Digit, ch) {\r\n\t\t\thexdigitCount++\r\n\t\t}\r\n\t}\r\n\r\n\tfmt.Println("Punctuations", punctCount)\r\n\tfmt.Println("Lower Chars", lowerCount)\r\n\tfmt.Println("Upper Chars", upperCount)\r\n\tfmt.Println("Space Chars", spaceCount)\r\n\tfmt.Println("HexDigital Chars", hexdigitCount)\r\n}\n'})}),"\n",(0,e.jsx)(r.pre,{children:(0,e.jsx)(r.code,{className:"language-bash",children:"go run .\\main.go\r\n\r\nPunctuations 10\r\nLower Chars 50\r\nUpper Chars 1\r\nSpace Chars 12\r\nHexDigital Chars 9\n"})})]})}function h(n={}){const{wrapper:r}={...(0,s.R)(),...n.components};return r?(0,e.jsx)(r,{...n,children:(0,e.jsx)(c,{...n})}):c(n)}},218538:(n,r,t)=>{t.d(r,{A:()=>e});const e=t.p+"assets/images/GO_STD_LIB_01-79457b328b1ab5a3d4b018c439bddf5d.png"},20206:(n,r,t)=>{t.d(r,{A:()=>e});const e=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-88971fd9c1b188353d6b4c2b974194a5.jpg"},28453:(n,r,t)=>{t.d(r,{R:()=>a,x:()=>o});var e=t(296540);const s={},i=e.createContext(s);function a(n){const r=e.useContext(i);return e.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function o(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),e.createElement(i.Provider,{value:r},n.children)}}}]);