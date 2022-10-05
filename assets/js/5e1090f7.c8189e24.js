"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[16348],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),f=l(t),u=i,m=f["".concat(s,".").concat(u)]||f[u]||p[u]||r;return t?a.createElement(m,c(c({ref:n},d),{},{components:t})):a.createElement(m,c({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,c=new Array(r);c[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},22484:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:8080,slug:"2022-10-04",title:"Build a NTP/S Timeserver Client in Go",authors:"mpolinowski",tags:["Go"],description:"A Go client that can interact with a key-secured Chrony NTS timeserver."},c="Build a NTP Timeserver Client in Go",o={unversionedId:"Development/Go/2022-10-04-go-ntp-client/index",id:"Development/Go/2022-10-04-go-ntp-client/index",title:"Build a NTP/S Timeserver Client in Go",description:"A Go client that can interact with a key-secured Chrony NTS timeserver.",source:"@site/docs/Development/Go/2022-10-04-go-ntp-client/index.md",sourceDirName:"Development/Go/2022-10-04-go-ntp-client",slug:"/Development/Go/2022-10-04-go-ntp-client/2022-10-04",permalink:"/docs/Development/Go/2022-10-04-go-ntp-client/2022-10-04",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2022-10-04-go-ntp-client/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2022-10-04",title:"Build a NTP/S Timeserver Client in Go",authors:"mpolinowski",tags:["Go"],description:"A Go client that can interact with a key-secured Chrony NTS timeserver."},sidebar:"tutorialSidebar",previous:{title:"Go Build!",permalink:"/docs/Development/Go/2022-10-05-go-reducing-binary-size/2022-10-05"},next:{title:"Wails - Build desktop apps using Go & React",permalink:"/docs/Development/Go/2022-06-15-wails-go-react/2022-06-15"}},s={},l=[{value:"Go NTP Client",id:"go-ntp-client",level:2},{value:"Sending a Request",id:"sending-a-request",level:3},{value:"Parse the Response",id:"parse-the-response",level:3},{value:"Run the Client",id:"run-the-client",level:3},{value:"Go NTS Client",id:"go-nts-client",level:2},{value:"Build the Client",id:"build-the-client",level:3},{value:"Run",id:"run",level:3},{value:"Running as a Service with SystemD",id:"running-as-a-service-with-systemd",level:3}],d={toc:l};function p(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-a-ntp-timeserver-client-in-go"},"Build a NTP Timeserver Client in Go"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Shenzhen, China",src:t(29986).Z,width:"1500",height:"546"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#build-a-ntp-timeserver-client-in-go"},"Build a NTP Timeserver Client in Go"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#go-ntp-client"},"Go NTP Client"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#sending-a-request"},"Sending a Request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#parse-the-response"},"Parse the Response")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run-the-client"},"Run the Client")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#go-nts-client"},"Go NTS Client"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#build-the-client"},"Build the Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#run"},"Run")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-as-a-service-with-systemd"},"Running as a Service with SystemD"))))))),(0,i.kt)("p",null,"I have been looking into ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21"},"setting up a secure time server"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Linux/2022-09-28--nts-client-setup/2022-09-28"},"connecting NTS clients")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/2022-09-22"},"deploying the server using Hashicorp Nomad"),". Now I want to see if I can find a client written in Go that can easily be compiled for different operating systems."),(0,i.kt)("h2",{id:"go-ntp-client"},"Go NTP Client"),(0,i.kt)("p",null,"This code is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vladimirvivien/go-ntp-client/blob/master/time.go"},"simple ntp client")," by Vladimir Vivien."),(0,i.kt)("p",null,"The following lines shows the ",(0,i.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc5905"},"packet format for NTP v4"),". For the client we only use the first 48 bytes and ignoring the v4-specific extensions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"0                   1                   2                   3\n0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|LI | VN  |Mode |    Stratum     |     Poll      |  Precision   |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                         Root Delay                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                         Root Dispersion                       |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                          Reference ID                         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |\n+                     Reference Timestamp (64)                  +\n|                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |\n+                      Origin Timestamp (64)                    +\n|                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |\n+                      Receive Timestamp (64)                   +\n|                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                                                               |\n+                      Transmit Timestamp (64)                  +\n|                                                               |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n")),(0,i.kt)("p",null,"The structure below defines the NTP packet and its fields representing the format above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"type packet struct {\n    Settings       uint8  // leap yr indicator, ver number, and mode\n    Stratum        uint8  // stratum of local clock\n    Poll           int8   // poll exponent\n    Precision      int8   // precision exponent\n    RootDelay      uint32 // root delay\n    RootDispersion uint32 // root dispersion\n    ReferenceID    uint32 // reference id\n    RefTimeSec     uint32 // reference timestamp sec\n    RefTimeFrac    uint32 // reference timestamp fractional\n    OrigTimeSec    uint32 // origin time secs\n    OrigTimeFrac   uint32 // origin time fractional\n    RxTimeSec      uint32 // receive time secs\n    RxTimeFrac     uint32 // receive time frac\n    TxTimeSec      uint32 // transmit time secs\n    TxTimeFrac     uint32 // transmit time frac\n}\n")),(0,i.kt)("h3",{id:"sending-a-request"},"Sending a Request"),(0,i.kt)("p",null,'The NTP server provides its "insecure" - not NTS - service on Port ',(0,i.kt)("inlineCode",{parentName:"p"},"123")," and expects communications using ",(0,i.kt)("strong",{parentName:"p"},"UDP"),'. For this test - since I already "NTS + key-secured" my server - I will use a public NTP server to test the program:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Define ntp server address\nvar host string\nflag.StringVar(&host, "e", "0.de.pool.ntp.org:123", "NTP host")\nflag.Parse()\n')),(0,i.kt)("p",null,"The following function opens a socket to communicate with the public NTP server over UDP and configure the connection\u2019s read and write deadline to 15 seconds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Open UDP connection\nconn, err := net.Dial("udp", host)\nif err != nil {\n  log.Fatalf("ERROR :: Connection failed with message: %v", err)\n}\ndefer conn.Close()\nif err := conn.SetDeadline(time.Now().Add(15 * time.Second)); err != nil {\n  log.Fatalf("ERROR :: Failed to set deadline: %v", err)\n}\n')),(0,i.kt)("p",null,"Before sending the request packet to the server, the first byte is used to specify configuration settings with a value of ",(0,i.kt)("inlineCode",{parentName:"p"},"0x1B")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"00011011")," binary) which specifies client mode of 3, NTP version 3, leap year indicator of 0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Specify the first byte of the request as\n// 00 011 011 (or 0x1B)\n// |  |   +-- client mode (3)\n// |  + ----- version (3)\n// + -------- leap year indicator, 0 no warning\nreq := &packet{Settings: 0x1B}\n")),(0,i.kt)("p",null,"Next we use package ",(0,i.kt)("inlineCode",{parentName:"p"},"binary")," to automatically encode the struct packet fields into its corresponding byte values and send them as big endian representation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Send NTP time request\nif err := binary.Write(conn, binary.BigEndian, req); err != nil {\n    log.Fatalf("ERROR :: Sending request failed with message: %v", err)\n}\n')),(0,i.kt)("h3",{id:"parse-the-response"},"Parse the Response"),(0,i.kt)("p",null,"The response will be identical in format to the request and we can again use the binary package to decode the response bytes from the server into the packet struct value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Receive NTP server response\nrsp := &packet{}\nif err := binary.Read(conn, binary.BigEndian, rsp); err != nil {\n  log.Fatalf("ERROR :: Failed to read server response: %v", err)\n}\n')),(0,i.kt)("p",null,"On POSIX-compliant OS, time is expressed using the Unix time epoch (or secs since year 1970). NTP seconds are counted since 1900 and therefore must be corrected with an epoch offset to convert NTP seconds to Unix time by removing ",(0,i.kt)("strong",{parentName:"p"},"70 yrs")," of seconds (1970-1900) or ",(0,i.kt)("inlineCode",{parentName:"p"},"2208988800")," seconds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// NTP seconds to Unix time (1900 - 1970 in seconds)\nconst ntpEpochOffset = 2208988800\n// Parse the time and print to console\nsecs := float64(rsp.TxTimeSec) - ntpEpochOffset\nnanos := (int64(rsp.TxTimeFrac) * 1e9) >> 32 // convert fractional to nanos\nfmt.Printf("%v\\n", time.Unix(int64(secs), nanos))\n')),(0,i.kt)("h3",{id:"run-the-client"},"Run the Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go run ./time.go\n2022-10-04 18:10:13.827640375 +0800 HKT\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'go build ./time.go\n./time -e "time.kriss.re.kr:123"\n2022-10-04 18:14:59.364579986 +0800 HKT\n')),(0,i.kt)("p",null,"And to make sure that the error catching is actually working here an example that should fail using the NTS port:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'./time -e "time.nist.gov:4460"\n2022/10/04 18:18:40 ERROR :: Failed to read server response: read udp 211.72.35.109:59692->132.163.96.6:4460: i/o timeout\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"A full NTP Client written in Go can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/beevik/ntp"},"beevik/ntp"),".")),(0,i.kt)("h2",{id:"go-nts-client"},"Go NTS Client"),(0,i.kt)("p",null,"A fully featured NTP and NTS client can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/hacklunch/ntsclient"},"ntsclient"),". This NTS client written in Go to can query for authenticated time using ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc5905#section-14"},"SNTP")," with NTS extension fields. It is build on the following libraries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/hacklunch/ntske"},"ntske"),": NTS Key Exchange Go library"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/hacklunch/ntp"},"ntp"),": NTP/NTS Go library")),(0,i.kt)("h3",{id:"build-the-client"},"Build the Client"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://gitlab.com/hacklunch/ntsclient.git\ncd ntsclient\ngo mod tidy\n")),(0,i.kt)("p",null,"The repository contains a makefile we can use with the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," command to build and install the client binary and configuration file. I will shorten the ",(0,i.kt)("strong",{parentName:"p"},"Makefile")," to the following to skip the installation part of it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-makefile"},"PREFIX = /usr/local\n\nBINARY := ntsclient\nSRCS := client.go version.go go.mod go.sum\n\n$(BINARY): $(SRCS)\n    go build -o $@\n\nlint:\n# see: .golangci.yml\n    -golangci-lint run\n    -golangci-lint run bump-version.go\n\nbump-major:\n    go run bump-version.go version.go major\nbump-minor:\n    go run bump-version.go version.go minor\nbump-patch:\n    go run bump-version.go version.go patch\n")),(0,i.kt)("p",null,"Now I can run the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," command and end up with a binary ",(0,i.kt)("inlineCode",{parentName:"p"},"ntsclient"),". To use the file I will have to create a configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"ntsclient.toml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'# Ask this server on this port about time\n# If :port is omitted, the default NTS-KE port 4460 will be used.\n\n# https://netnod.se\nserver="nts.ntp.se"\n\n# Trust *only* this Certificate Authority certificate (PEM) to sign certficates\n# for server above.\n#cacert="cacert.crt"\n\n# Interval in seconds between queries\ninterval=1000\n')),(0,i.kt)("h3",{id:"run"},"Run"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ntsclient")," does not output anything when querying and setting the time, unless something goes wrong (or debug output is turned on)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./ntsclient --config ./ntsclient.toml\nCould not set system time: operation not permitted\n\nsudo ./ntsclient --config ./ntsclient.toml\n")),(0,i.kt)("p",null,"Ok, now I got it running but of course I am not seeing anything anymore. So let's switch on the debug mode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sudo ./ntsclient --config ./ntsclient.toml --debug\n\nConf: &main.Config{Server:"nts.ntp.se", CACert:"", Interval:1000}\nConnecting to KE server nts.ntp.se:4460\nUsing resolved KE server as NTP default: 194.58.207.77:123\nRecord type 1\nCritical set\nRecord type 4\nCritical set\nRecord type 6\nCritical set\n(got negotiated NTP server: 194.58.207.80)\nRecord type 7\nCritical set\n(got negotiated NTP port: 4123)\nRecord type 5\nRecord type 5\nRecord type 5\nRecord type 5\nRecord type 5\nRecord type 5\nRecord type 5\nRecord type 5\nRecord type 0\nCritical set\nNTSKE exchange yielded:\n  c2s: 7185b6d9658ae862f9f80027a4b4f56702fdcca16bd77064daf9fc12428cacb5\n  s2c: 3ca3feda3ce5cd55129bf21c51d576476284dbfe3910ca95e1966aff8fd79d49\n  server: 194.58.207.80\n  port: 4123\n  algo: 15\n  8 cookies:\n  #1: 1d1f7bdc87a2c92ada1416006314cba9106a3b8a0957b404e8b3b9299cf0892eccb910fa8c071429a72e77c1a850ea018a17b1272101cbb45a32b90293788b1ec2aa5e013e3c5e15f5cdcb4bd1d30ac84780f8765b56fa419d085a36d66efe04adf4f67e\n  #2: 1d1f7bdcb1a894e3fa5dfc00c63b3c9c14ed4761716900feeec48bcadc3591ea8addfe9dac46a630f5dedc513c741f977f5f7c3d62858b28158650323eea3c9a678627da31fff0e1ecc83fc0b8d632a87988ab60b690fe38ebb2e864bcddd3ad541dab00\n  #3: 1d1f7bdc5d1741b60c1b355843c82a48533032adb99f67577366c9fe6172b946dc11863db7d12b7e4d52368944ee88f2ebc25086fccbc446d6ffbe75546aac65f4a56ecfde4852f77247178a0f0063bdd228205bd30fe35c32d4ad1b4e8e9f8704c726e7\n  #4: 1d1f7bdc764e5dd5423656aaff1c69147a15cb9105484a1549183efefb27ce6890448f803ae4a558bfc93da2ee811362f67f7516e8dc01a4a56c28caccaedab2c861995b30b1b0000e125c2de251232b177af1f3ee2fe1b87e56c3d6ec8769c4ba1d3010\n  #5: 1d1f7bdc06c0d51832ceb31a23fc3dcacf352cd0f8532a43967089678c48eb4ffc6142e57c66af26c2c730a709a7ebb7b25742c07775e0747cb690ffa67271b478fb7773262f786db97ee1e34d02b9d9f8146fa91bd6945804d4cf00d3dcd3da30efcb03\n  #6: 1d1f7bdca7cde8901057519e738be42e6f35fd8cf6457069a79c474ce6c3ca00641cdc2a5b29daff557337b2654b0aa89c0999ff820e0a63bdae90c68164acbdac649263d6b193c2bb2bc974a7fa1b4f8e0bab4c7e7592e397945d996e741a9e7d58546d\n  #7: 1d1f7bdc6ad2682416f848678e130931b67368209d929b92120e78c020ccda671ad7e33c3d826f5d33d67f9ae1f5de64ddd0498c2df4f5b45a186b91d8da2549c3e06ca35820b6227bbacfd5356fac996f11f44830f57d3788e23bcebdf3386f291fccd7\n  #8: 1d1f7bdc897ee754dcf978b180253e47c1a77055a1f149fbd61131187db0f03a3a45b35424d9a209902b254b212270fa325322ef2adb61de0f1fae5863e2312fa8fad64bedda1d4cc0deaa470eec485acf1bddf6e65788b407188b12a870a6cce274ef2a\nSending: \nVersion: 4\nMode: 3\nLeapIndicator: 3\nStratum: 0\nPoll: 0\nPrecision: 0\nRootDelay: 0s\nRootDispersion: 0s\nReferenceID: 0\nReferenceTime: 0001-01-01 00:00:00 +0000 UTC\nOriginTime: 0001-01-01 00:00:00 +0000 UTC\nReceiveTime: 0001-01-01 00:00:00 +0000 UTC\nTransmitTime: 0001-01-01 00:00:00 +0000 UTC\nSpoofCookie: 2249980270020620447\n\n-- UniqueIdentifier EF\n  ID: c4c7e91b9ca840a0b7e4e41c22bd143e2dfeb2768f9875e748a2a512613ac81c\n\n-- Cookie EF\n  1d1f7bdc87a2c92ada1416006314cba9106a3b8a0957b404e8b3b9299cf0892eccb910fa8c071429a72e77c1a850ea018a17b1272101cbb45a32b90293788b1ec2aa5e013e3c5e15f5cdcb4bd1d30ac84780f8765b56fa419d085a36d66efe04adf4f67e\n\n-- Authenticator EF\n  NonceLen: 0\n  CipherTextLen: 0\n  Nonce: \n  Ciphertext: \n  Key: 7185b6d9658ae862f9f80027a4b4f56702fdcca16bd77064daf9fc12428cacb5\n\nwire: e300000000000000000000000000000025c17d04dad2965d25c17d04dad2965d25c17d04dad2965d1f3989227a37709f01040024c4c7e91b9ca840a0b7e4e41c22bd143e2dfeb2768f9875e748a2a512613ac81c020400681d1f7bdc87a2c92ada1416006314cba9106a3b8a0957b404e8b3b9299cf0892eccb910fa8c071429a72e77c1a850ea018a17b1272101cbb45a32b90293788b1ec2aa5e013e3c5e15f5cdcb4bd1d30ac84780f8765b56fa419d085a36d66efe04adf4f67e0404002800100010190d1ba7a999908f80b79652288ee53445c8bc790d21bc2c31454e823a659f9e\nReceived: \nVersion: 4\nMode: 4\nLeapIndicator: 0\nStratum: 1\nPoll: 0\nPrecision: -24\nRootDelay: 0s\nRootDispersion: 0s\nReferenceID: 1347441408\nReferenceTime: 2022-10-04 11:39:51 +0000 UTC\nOriginTime: 0001-01-01 00:00:00 +0000 UTC\nReceiveTime: 2022-10-04 11:39:52.23693832 +0000 UTC\nTransmitTime: 2022-10-04 11:39:52.236942742 +0000 UTC\nSpoofCookie: 2249980270020620447\n\n-- UniqueIdentifier EF\n  ID: c4c7e91b9ca840a0b7e4e41c22bd143e2dfeb2768f9875e748a2a512613ac81c\n\n-- Authenticator EF\n  NonceLen: 16\n  CipherTextLen: 120\n  Nonce: 9d9ebcc66e8a825179b83334f20c1513\n  Ciphertext: 8d60b8bf3f5a4a15ec1ea0e9fa01e3abaa75c34c6735a69da940158970f1798bbc9836467d829469e4930a82fdbfd6898147192f4aad60e61d54d3b518ef1792df3cba2f610b876200cc94e7c5472c015a0fe94081327de006f3c607a0c19becc756044317db5fb94d3c60d9f408ef7c234d834de1429827\n  Key: \n\nReceived wire: {36 1 0 -24 0 0 1347441408 16638155228222324736 2249980270020620447 16638155233534934369 16638155233534953361}\nresponse: &ntp.Response{Time:time.Date(2022, time.October, 4, 11, 39, 52, 236942742, time.UTC), ClockOffset:12618768, RTT:339863256, Precision:59, Stratum:0x1, ReferenceID:0x50505300, ReferenceTime:time.Date(2022, time.October, 4, 11, 39, 51, 0, time.UTC), RootDelay:0, RootDispersion:0, RootDistance:169931628, Leap:0x0, MinError:0, KissCode:"", Poll:1000000000}\nNetwork time on 194.58.207.80:4123 2022-10-04 11:39:52.236942742 +0000 UTC. Local clock off by 12.618768ms.\n')),(0,i.kt)("p",null,"This seems to be working - I can verify it by manually setting my PC time. Starting the ",(0,i.kt)("inlineCode",{parentName:"p"},"ntsclient")," will correct the mistake immediately. Nice!"),(0,i.kt)("h3",{id:"running-as-a-service-with-systemd"},"Running as a Service with SystemD"),(0,i.kt)("p",null,"Installing ",(0,i.kt)("inlineCode",{parentName:"p"},"ntsclient")," as a systemd service manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp ntsclient /usr/bin/\ncp ntsclient.toml /etc/\ncp contrib/ntsclient.service /etc/systemd/system\nsystemctl enable ntsclient\nsystemctl start ntsclient\n")))}p.isMDXComponent=!0},29986:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"}}]);