"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[7788],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=o(t),f=a,d=p["".concat(u,".").concat(f)]||p[f]||c[f]||l;return t?r.createElement(d,i(i({ref:n},m),{},{components:t})):r.createElement(d,i({ref:n},m))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var o=2;o<l;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const l={sidebar_position:8010,slug:"2022-12-27",title:"Go Data Structures",authors:"mpolinowski",tags:["Go"],description:"Available data representations in the Go programming language"},i="Go Data Structures",s={unversionedId:"Development/Go/2022-12-27-go-data-structures/index",id:"Development/Go/2022-12-27-go-data-structures/index",title:"Go Data Structures",description:"Available data representations in the Go programming language",source:"@site/docs/Development/Go/2022-12-27-go-data-structures/index.md",sourceDirName:"Development/Go/2022-12-27-go-data-structures",slug:"/Development/Go/2022-12-27-go-data-structures/2022-12-27",permalink:"/docs/Development/Go/2022-12-27-go-data-structures/2022-12-27",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2022-12-27-go-data-structures/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:8010,frontMatter:{sidebar_position:8010,slug:"2022-12-27",title:"Go Data Structures",authors:"mpolinowski",tags:["Go"],description:"Available data representations in the Go programming language"},sidebar:"tutorialSidebar",previous:{title:"Go",permalink:"/docs/category/go"},next:{title:"Go Bubbles",permalink:"/docs/Development/Go/2022-12-27-go-bubbles/2022-12-27"}},u={},o=[{value:"Arrays",id:"arrays",level:2},{value:"Slices",id:"slices",level:2},{value:"Sets",id:"sets",level:2},{value:"Queues",id:"queues",level:2},{value:"Priority Queues",id:"priority-queues",level:2},{value:"Stacks",id:"stacks",level:2},{value:"Linked Lists",id:"linked-lists",level:2}],m={toc:o};function c(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"go-data-structures"},"Go Data Structures"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shenzhen, China",src:t(99830).Z,width:"1500",height:"546"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#go-data-structures"},"Go Data Structures"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#arrays"},"Arrays")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#slices"},"Slices")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#sets"},"Sets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#queues"},"Queues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#priority-queues"},"Priority Queues")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#stacks"},"Stacks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#linked-lists"},"Linked Lists"))))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/mpolinowski/go-data-structures"},"Github")),(0,a.kt)("h2",{id:"arrays"},"Arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    fmt.Println("Arrays as Data Structures")\n\n    myArray := [8]int{1, 2, 3, 4, 5, 6, 7, 8}\n\n    fmt.Println("Array: ", myArray)\n\n    fmt.Println("First Element: ", myArray[0])\n\n    fmt.Println("Last Element: ", myArray[len(myArray)-1])\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Arrays as Data Structures\nArray:  [1 2 3 4 5 6 7 8]\nFirst Element:  1\nLast Element:  8\n")),(0,a.kt)("h2",{id:"slices"},"Slices"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\nfunc main() {\n    fmt.Println("Slices as Data Structures")\n\n    // Slices don\'t have a pre-defined length\n    mySlice := []int{1, 2, 3, 4, 5, 6, 7, 8}\n\n    fmt.Println("Slice: ", mySlice)\n\n    fmt.Println("First Element: ", mySlice[0])\n\n    fmt.Println("Last Element: ", mySlice[len(mySlice)-1])\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Slices as Data Structures\nSlice:  [1 2 3 4 5 6 7 8]\nFirst Element:  1\nLast Element:  8\n")),(0,a.kt)("h2",{id:"sets"},"Sets"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "errors"\n    "fmt"\n)\n\ntype Set struct {\n    Elements map[string]struct{}\n}\n\n// create new set\nfunc NewSet() *Set {\n    var set Set\n    set.Elements = make(map[string]struct{})\n    return &set\n}\n\n// add elements to set\n// sets don\'t have an order - we don\'t need to append\n// every element in a set is unique - already existing\n// elements will not be duplicated (no checks necessary)\nfunc (s *Set) Add(elem string) {\n    s.Elements[elem] = struct{}{}\n}\n\n// remove element from set if exists\nfunc (s *Set) Delete(elem string) error {\n    // check if element is present\n    if _, exists := s.Elements[elem]; !exists {\n        return errors.New("Element not present!")\n    }\n    // if present -delete\n    delete(s.Elements, elem)\n    return nil\n}\n\n// check if set contains element\nfunc (s *Set) Contains(elem string) bool {\n    _, exists := s.Elements[elem]\n    return exists\n}\n\n// list all elements from set\nfunc (s *Set) List() {\n    for key, _ := range s.Elements {\n        fmt.Println(key)\n    }\n}\n\nfunc main() {\n    fmt.Println("Sets as Data Structures")\n\n    // instantiate / populate set\n    mySet := NewSet()\n    mySet.Add("Eddard Stark")\n    mySet.Add("Jaime Lannister")\n    mySet.Add("Daenerys Targaryen")\n    mySet.Add("Arya Stark")\n    mySet.Add("Sandor Clegane")\n    mySet.Add("Tyrion Lannister")\n\n    // delete element\n    mySet.Delete("Eddard Stark")\n\n    // find element\n    fmt.Println(mySet.Contains("Jon Snow"))\n    fmt.Println(mySet.Contains("Arya Stark"))\n\n    // list all elements\n    mySet.List()\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Sets as Data Structures\nfalse\ntrue\nArya Stark\nSandor Clegane\nTyrion Lannister\nJaime Lannister\nDaenerys Targaryen\n")),(0,a.kt)("h2",{id:"queues"},"Queues"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "errors"\n    "fmt"\n)\n\ntype Queue struct {\n    Elements []int\n}\n\n// show length of queue\nfunc (q *Queue) Length() int {\n    return len(q.Elements)\n}\n\n// return true when queue length is zero\nfunc (q *Queue) IsEmpty() bool {\n    return q.Length() == 0\n}\n\n// add element to end of queue\nfunc (q *Queue) Enqueue(elem int) {\n    q.Elements = append(q.Elements, elem)\n}\n\n// check first element in que without removing it\nfunc (q *Queue) Peek() (int, error) {\n    // test queue not empty\n    if q.IsEmpty() {\n        return 0, errors.New("Empty Queue")\n    }\n    return q.Elements[0], nil\n}\n\n// remove first element from queue\nfunc (q *Queue) Dequeue() (int, error) {\n    // test queue not empty\n    if q.IsEmpty() {\n        return 0, errors.New("Empty Queue")\n    }\n    // drop first element from slice\n    var firstElement int\n    firstElement, q.Elements = q.Elements[0], q.Elements[1:]\n    return firstElement, nil\n}\n\nfunc main() {\n    fmt.Println("Queues as Data Structures")\n\n    // instantiate queue and add element\n    var elem int\n    queue := Queue{}\n    fmt.Println(queue)\n    queue.Enqueue(1)\n    queue.Enqueue(2)\n    queue.Enqueue(3)\n    fmt.Println(queue)\n\n    // drop first item\n    elem, _ = queue.Dequeue()\n    fmt.Println(elem)\n    fmt.Println(queue)\n\n    // check first item without removing it\n    elem, _ = queue.Peek()\n    fmt.Println(elem)\n    fmt.Println(queue)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Queues as Data Structures\n{[]}\n{[1 2 3]}\n1\n{[2 3]}\n2\n{[2 3]}\n")),(0,a.kt)("h2",{id:"priority-queues"},"Priority Queues"),(0,a.kt)("p",null,"Priority queues are an extension on regular queues as they have two instead of one channel - one for high and one for low priority elements:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "errors"\n    "fmt"\n)\n\ntype PriorityQueue struct {\n    High []int\n    Low  []int\n}\n\n// show length of complete queue\nfunc (q *PriorityQueue) Length() int {\n    return len(q.High) + len(q.Low)\n}\n\n// return true when queue length is zero\nfunc (q *PriorityQueue) IsEmpty() bool {\n    return q.Length() == 0\n}\n\n// add element to end of queue\n// differentiate between high/low priority\nfunc (q *PriorityQueue) Enqueue(elem int, priority bool) {\n    if priority {\n        q.High = append(q.High, elem)\n    } else {\n        q.Low = append(q.Low, elem)\n    }\n}\n\n// check first element in que without removing it\n// but prefer priority queue\nfunc (q *PriorityQueue) Peek() (int, error) {\n    // test queue not empty\n    if len(q.High) != 0 {\n        return q.High[0], nil\n    }\n    if len(q.Low) != 0 {\n        return q.Low[0], nil\n    }\n    // return 0 if both queues are empty\n    return 0, errors.New("Empty Queues")\n}\n\n// remove first element from queue\n// but prefer priority queue\nfunc (q *PriorityQueue) Dequeue() (int, error) {\n    // test if priority queue not empty\n    // if true remove first element\n    if len(q.High) != 0 {\n        var firstElement int\n        firstElement, q.High = q.High[0], q.High[1:]\n        return firstElement, nil\n    }\n    // test if regular queue not empty\n    // if true remove first element\n    if len(q.Low) != 0 {\n        var firstElement int\n        firstElement, q.Low = q.Low[0], q.Low[1:]\n        return firstElement, nil\n    }\n    // return 0 if both queues are empty\n    return 0, errors.New("Empty Queues")\n}\n\nfunc main() {\n    fmt.Println("Priority Queues as Data Structures")\n\n    // instantiate queue and add element\n    var elem int\n    queue := PriorityQueue{}\n    fmt.Println(queue)\n    queue.Enqueue(1, true)\n    queue.Enqueue(2, true)\n    queue.Enqueue(3, false)\n    queue.Enqueue(4, false)\n    fmt.Println(queue)\n\n    // drop first item\n    elem, _ = queue.Dequeue()\n    fmt.Println(elem)\n    fmt.Println(queue)\n\n    // check first item without removing it\n    elem, _ = queue.Peek()\n    fmt.Println(elem)\n    fmt.Println(queue)\n}\n')),(0,a.kt)("p",null,"All elements from the high priority queue will no be handled first before the low priority queue is started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Priority Queues as Data Structures\n{[] []}\n{[1 2] [3 4]}\n1\n{[2] [3 4]}\n2\n{[2] [3 4]}\n")),(0,a.kt)("h2",{id:"stacks"},"Stacks"),(0,a.kt)("p",null,"Stacks are almost identical to queues but elements here are removed by ",(0,a.kt)("inlineCode",{parentName:"p"},"last-in"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"first-out"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "errors"\n    "fmt"\n)\n\ntype Stack struct {\n    Elements []int\n}\n\n// check stack size\nfunc (s *Stack) Length() int {\n    return len(s.Elements)\n}\n\n// stack is empty?\nfunc (s *Stack) IsEmpty() bool {\n    return s.Length() == 0\n}\n\n// add an element to top of the stack\nfunc (s *Stack) Push(elem int) {\n    s.Elements = append(s.Elements, elem)\n}\n\n// remove top element from stack\nfunc (s *Stack) Pop() (int, error) {\n    // check if stack is empty\n    if s.IsEmpty() {\n        return 0, errors.New("Stack is Empty")\n    } else {\n        var lastElement int\n        lastElementIndex := len(s.Elements) - 1\n        lastElement, s.Elements = s.Elements[lastElementIndex], s.Elements[:lastElementIndex]\n        return lastElement, nil\n    }\n}\n\n// check top element without removing\nfunc (s *Stack) Peek() (int, error) {\n    // check if stack is empty\n    if s.IsEmpty() {\n        return 0, errors.New("Stack is Empty")\n    } else {\n        return s.Elements[len(s.Elements)-1], nil\n    }\n}\n\nfunc main() {\n    fmt.Println("Stacks as Data Structures")\n\n    stack := Stack{}\n    stack.Push(1)\n    stack.Push(2)\n    stack.Push(3)\n\n    elem1, _ := stack.Pop()\n    fmt.Println(elem1)\n    elem2, _ := stack.Pop()\n    fmt.Println(elem2)\n\n    peek3, _ := stack.Peek()\n    fmt.Println(peek3)\n\n    elem3, _ := stack.Pop()\n    fmt.Println(elem3)\n\n    fmt.Println(stack.IsEmpty())\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Stacks as Data Structures\n3\n2\n1\n1\ntrue\n")),(0,a.kt)("h2",{id:"linked-lists"},"Linked Lists"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n)\n\ntype LinkedList struct {\n    Head *Node\n    Size int\n}\n\n// nodes are linked elements in list\ntype Node struct {\n    Value string\n    Next  *Node\n}\n\n// add new node to head of linked list\nfunc (l *LinkedList) Insert(elem string) {\n    node := Node{\n        Value: elem,\n        Next:  l.Head,\n    }\n    l.Head = &node\n    l.Size++\n}\n\n// remove first element\nfunc (l *LinkedList) DeleteFirst() {\n    l.Head = l.Head.Next\n    l.Size--\n}\n\n// iterate through list and print\nfunc (l *LinkedList) List() {\n    current := l.Head\n    for current != nil {\n        fmt.Printf("%+v\\n", current)\n        current = current.Next\n    }\n}\n\n// find element in list\nfunc (l *LinkedList) Search(elem string) *Node {\n    current := l.Head\n    for current != nil {\n        if current.Value == elem {\n            return current\n        }\n        current = current.Next\n    }\n    return nil\n}\n\n// delete element\nfunc (l *LinkedList) Delete(elem string) {\n    previous := l.Head\n    current := l.Head\n    // check if element exists\n    for current != nil {\n        // link previous to next to remove current\n        if current.Value == elem {\n            previous.Next = current.Next\n            l.Size--\n        }\n        previous = current\n        current = current.Next\n    }\n}\n\nfunc main() {\n    fmt.Println("Linked Lists as Data Structures")\n    var ll LinkedList\n\n    ll.Insert("Camina Drummer")\n    ll.Insert("Joe Miller")\n    ll.Insert("Amos Burton")\n    ll.Insert("Chrisjen Avasarala")\n\n    ll.List()\n    fmt.Println("-----------------------------")\n\n    ll.DeleteFirst()\n    ll.List()\n    fmt.Println("-----------------------------")\n\n    if element := ll.Search("Joe Miller"); element != nil {\n        fmt.Printf("%+v\\n", element)\n    }\n    fmt.Println("-----------------------------")\n\n    ll.Delete("Joe Miller")\n    ll.List()\n    fmt.Println(ll.Size)\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Linked Lists as Data Structures\n&{Value:Chrisjen Avasarala Next:0xc000010060}\n&{Value:Amos Burton Next:0xc000010048}\n&{Value:Joe Miller Next:0xc000010030}\n&{Value:Camina Drummer Next:<nil>}\n-----------------------------\n&{Value:Amos Burton Next:0xc000010048}\n&{Value:Joe Miller Next:0xc000010030}\n&{Value:Camina Drummer Next:<nil>}\n-----------------------------\n&{Value:Joe Miller Next:0xc000010030}\n-----------------------------\n&{Value:Amos Burton Next:0xc000010030}\n&{Value:Camina Drummer Next:<nil>}\n2\n")))}c.isMDXComponent=!0},99830:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"}}]);