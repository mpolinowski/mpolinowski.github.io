"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[57868],{726063:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var t=r(474848),i=r(28453);const c={sidebar_position:8080,slug:"2022-10-04",title:"Build a NTP/S Timeserver Client in Go",authors:"mpolinowski",tags:["Go","NTS"],description:"A Go client that can interact with a key-secured Chrony NTS timeserver."},s="Build a NTP Timeserver Client in Go",a={id:"Development/Go/2022-10-04-go-ntp-client/index",title:"Build a NTP/S Timeserver Client in Go",description:"A Go client that can interact with a key-secured Chrony NTS timeserver.",source:"@site/docs/Development/Go/2022-10-04-go-ntp-client/index.md",sourceDirName:"Development/Go/2022-10-04-go-ntp-client",slug:"/Development/Go/2022-10-04-go-ntp-client/2022-10-04",permalink:"/docs/Development/Go/2022-10-04-go-ntp-client/2022-10-04",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Go/2022-10-04-go-ntp-client/index.md",tags:[{label:"Go",permalink:"/docs/tags/go"},{label:"NTS",permalink:"/docs/tags/nts"}],version:"current",sidebarPosition:8080,frontMatter:{sidebar_position:8080,slug:"2022-10-04",title:"Build a NTP/S Timeserver Client in Go",authors:"mpolinowski",tags:["Go","NTS"],description:"A Go client that can interact with a key-secured Chrony NTS timeserver."},sidebar:"tutorialSidebar",previous:{title:"Go Build!",permalink:"/docs/Development/Go/2022-10-05-go-reducing-binary-size/2022-10-05"},next:{title:"Wails - Build desktop apps using Go & React",permalink:"/docs/Development/Go/2022-06-15-wails-go-react/2022-06-15"}},o={},d=[{value:"Go NTP Client",id:"go-ntp-client",level:2},{value:"Sending a Request",id:"sending-a-request",level:3},{value:"Parse the Response",id:"parse-the-response",level:3},{value:"Run the Client",id:"run-the-client",level:3},{value:"Go NTS Client",id:"go-nts-client",level:2},{value:"Build the Client",id:"build-the-client",level:3},{value:"Run",id:"run",level:3},{value:"Running as a Service with SystemD",id:"running-as-a-service-with-systemd",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"build-a-ntp-timeserver-client-in-go",children:"Build a NTP Timeserver Client in Go"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Shenzhen, China",src:r(633317).A+"",width:"1500",height:"546"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#build-a-ntp-timeserver-client-in-go",children:"Build a NTP Timeserver Client in Go"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#go-ntp-client",children:"Go NTP Client"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#sending-a-request",children:"Sending a Request"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#parse-the-response",children:"Parse the Response"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#run-the-client",children:"Run the Client"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#go-nts-client",children:"Go NTS Client"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#build-the-client",children:"Build the Client"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#run",children:"Run"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#running-as-a-service-with-systemd",children:"Running as a Service with SystemD"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["I have been looking into ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Linux/2022-09-15--ntp-over-nts-timeserver/2022-09-21",children:"setting up a secure time server"}),", ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Linux/2022-09-28--nts-client-setup/2022-09-28",children:"connecting NTS clients"})," and ",(0,t.jsx)(n.a,{href:"/docs/DevOps/Hashicorp/2022-09-22--nomad-nts-timeserver/2022-09-22",children:"deploying the server using Hashicorp Nomad"}),". Now I want to see if I can find a client written in Go that can easily be compiled for different operating systems."]}),"\n",(0,t.jsx)(n.h2,{id:"go-ntp-client",children:"Go NTP Client"}),"\n",(0,t.jsxs)(n.p,{children:["This code is based on the ",(0,t.jsx)(n.a,{href:"https://github.com/vladimirvivien/go-ntp-client/blob/master/time.go",children:"simple ntp client"})," by Vladimir Vivien."]}),"\n",(0,t.jsxs)(n.p,{children:["The following lines shows the ",(0,t.jsx)(n.a,{href:"https://tools.ietf.org/html/rfc5905",children:"packet format for NTP v4"}),". For the client we only use the first 48 bytes and ignoring the v4-specific extensions:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"0                   1                   2                   3\r\n0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|LI | VN  |Mode |    Stratum     |     Poll      |  Precision   |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                         Root Delay                            |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                         Root Dispersion                       |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                          Reference ID                         |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                                                               |\r\n+                     Reference Timestamp (64)                  +\r\n|                                                               |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                                                               |\r\n+                      Origin Timestamp (64)                    +\r\n|                                                               |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                                                               |\r\n+                      Receive Timestamp (64)                   +\r\n|                                                               |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\r\n|                                                               |\r\n+                      Transmit Timestamp (64)                  +\r\n|                                                               |\r\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"})}),"\n",(0,t.jsx)(n.p,{children:"The structure below defines the NTP packet and its fields representing the format above:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type packet struct {\r\n\tSettings       uint8  // leap yr indicator, ver number, and mode\r\n\tStratum        uint8  // stratum of local clock\r\n\tPoll           int8   // poll exponent\r\n\tPrecision      int8   // precision exponent\r\n\tRootDelay      uint32 // root delay\r\n\tRootDispersion uint32 // root dispersion\r\n\tReferenceID    uint32 // reference id\r\n\tRefTimeSec     uint32 // reference timestamp sec\r\n\tRefTimeFrac    uint32 // reference timestamp fractional\r\n\tOrigTimeSec    uint32 // origin time secs\r\n\tOrigTimeFrac   uint32 // origin time fractional\r\n\tRxTimeSec      uint32 // receive time secs\r\n\tRxTimeFrac     uint32 // receive time frac\r\n\tTxTimeSec      uint32 // transmit time secs\r\n\tTxTimeFrac     uint32 // transmit time frac\r\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sending-a-request",children:"Sending a Request"}),"\n",(0,t.jsxs)(n.p,{children:['The NTP server provides its "insecure" - not NTS - service on Port ',(0,t.jsx)(n.code,{children:"123"})," and expects communications using ",(0,t.jsx)(n.strong,{children:"UDP"}),'. For this test - since I already "NTS + key-secured" my server - I will use a public NTP server to test the program:']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Define ntp server address\r\nvar host string\r\nflag.StringVar(&host, "e", "0.de.pool.ntp.org:123", "NTP host")\r\nflag.Parse()\n'})}),"\n",(0,t.jsx)(n.p,{children:"The following function opens a socket to communicate with the public NTP server over UDP and configure the connection\u2019s read and write deadline to 15 seconds:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Open UDP connection\r\nconn, err := net.Dial("udp", host)\r\nif err != nil {\r\n  log.Fatalf("ERROR :: Connection failed with message: %v", err)\r\n}\r\ndefer conn.Close()\r\nif err := conn.SetDeadline(time.Now().Add(15 * time.Second)); err != nil {\r\n  log.Fatalf("ERROR :: Failed to set deadline: %v", err)\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Before sending the request packet to the server, the first byte is used to specify configuration settings with a value of ",(0,t.jsx)(n.code,{children:"0x1B"})," (or ",(0,t.jsx)(n.code,{children:"00011011"})," binary) which specifies client mode of 3, NTP version 3, leap year indicator of 0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// Specify the first byte of the request as\r\n// 00 011 011 (or 0x1B)\r\n// |  |   +-- client mode (3)\r\n// |  + ----- version (3)\r\n// + -------- leap year indicator, 0 no warning\r\nreq := &packet{Settings: 0x1B}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Next we use package ",(0,t.jsx)(n.code,{children:"binary"})," to automatically encode the struct packet fields into its corresponding byte values and send them as big endian representation:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Send NTP time request\r\nif err := binary.Write(conn, binary.BigEndian, req); err != nil {\r\n    log.Fatalf("ERROR :: Sending request failed with message: %v", err)\r\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"parse-the-response",children:"Parse the Response"}),"\n",(0,t.jsx)(n.p,{children:"The response will be identical in format to the request and we can again use the binary package to decode the response bytes from the server into the packet struct value:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Receive NTP server response\r\nrsp := &packet{}\r\nif err := binary.Read(conn, binary.BigEndian, rsp); err != nil {\r\n  log.Fatalf("ERROR :: Failed to read server response: %v", err)\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["On POSIX-compliant OS, time is expressed using the Unix time epoch (or secs since year 1970). NTP seconds are counted since 1900 and therefore must be corrected with an epoch offset to convert NTP seconds to Unix time by removing ",(0,t.jsx)(n.strong,{children:"70 yrs"})," of seconds (1970-1900) or ",(0,t.jsx)(n.code,{children:"2208988800"})," seconds:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// NTP seconds to Unix time (1900 - 1970 in seconds)\r\nconst ntpEpochOffset = 2208988800\r\n// Parse the time and print to console\r\nsecs := float64(rsp.TxTimeSec) - ntpEpochOffset\r\nnanos := (int64(rsp.TxTimeFrac) * 1e9) >> 32 // convert fractional to nanos\r\nfmt.Printf("%v\\n", time.Unix(int64(secs), nanos))\n'})}),"\n",(0,t.jsx)(n.h3,{id:"run-the-client",children:"Run the Client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"go run ./time.go\r\n2022-10-04 18:10:13.827640375 +0800 HKT\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'go build ./time.go\r\n./time -e "time.kriss.re.kr:123"\r\n2022-10-04 18:14:59.364579986 +0800 HKT\n'})}),"\n",(0,t.jsx)(n.p,{children:"And to make sure that the error catching is actually working here an example that should fail using the NTS port:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'./time -e "time.nist.gov:4460"\r\n2022/10/04 18:18:40 ERROR :: Failed to read server response: read udp 211.72.35.109:59692->132.163.96.6:4460: i/o timeout\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["A full NTP Client written in Go can be found here: ",(0,t.jsx)(n.a,{href:"https://github.com/beevik/ntp",children:"beevik/ntp"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"go-nts-client",children:"Go NTS Client"}),"\n",(0,t.jsxs)(n.p,{children:["A fully featured NTP and NTS client can be found here: ",(0,t.jsx)(n.a,{href:"https://gitlab.com/hacklunch/ntsclient",children:"ntsclient"}),". This NTS client written in Go to can query for authenticated time using ",(0,t.jsx)(n.a,{href:"https://www.rfc-editor.org/rfc/rfc5905#section-14",children:"SNTP"})," with NTS extension fields. It is build on the following libraries:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://gitlab.com/hacklunch/ntske",children:"ntske"}),": NTS Key Exchange Go library"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://gitlab.com/hacklunch/ntp",children:"ntp"}),": NTP/NTS Go library"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"build-the-client",children:"Build the Client"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://gitlab.com/hacklunch/ntsclient.git\r\ncd ntsclient\r\ngo mod tidy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The repository contains a makefile we can use with the ",(0,t.jsx)(n.code,{children:"make"})," command to build and install the client binary and configuration file. I will shorten the ",(0,t.jsx)(n.strong,{children:"Makefile"})," to the following to skip the installation part of it:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-makefile",children:"PREFIX = /usr/local\r\n\r\nBINARY := ntsclient\r\nSRCS := client.go version.go go.mod go.sum\r\n\r\n$(BINARY): $(SRCS)\r\n\tgo build -o $@\r\n\r\nlint:\r\n# see: .golangci.yml\r\n\t-golangci-lint run\r\n\t-golangci-lint run bump-version.go\r\n\r\nbump-major:\r\n\tgo run bump-version.go version.go major\r\nbump-minor:\r\n\tgo run bump-version.go version.go minor\r\nbump-patch:\r\n\tgo run bump-version.go version.go patch\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Now I can run the ",(0,t.jsx)(n.code,{children:"make"})," command and end up with a binary ",(0,t.jsx)(n.code,{children:"ntsclient"}),". To use the file I will have to create a configuration file ",(0,t.jsx)(n.code,{children:"ntsclient.toml"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:'# Ask this server on this port about time\r\n# If :port is omitted, the default NTS-KE port 4460 will be used.\r\n\r\n# https://netnod.se\r\nserver="nts.ntp.se"\r\n\r\n# Trust *only* this Certificate Authority certificate (PEM) to sign certficates\r\n# for server above.\r\n#cacert="cacert.crt"\r\n\r\n# Interval in seconds between queries\r\ninterval=1000\n'})}),"\n",(0,t.jsx)(n.h3,{id:"run",children:"Run"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"ntsclient"})," does not output anything when querying and setting the time, unless something goes wrong (or debug output is turned on)."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./ntsclient --config ./ntsclient.toml\r\nCould not set system time: operation not permitted\r\n\r\nsudo ./ntsclient --config ./ntsclient.toml\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ok, now I got it running but of course I am not seeing anything anymore. So let's switch on the debug mode:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'sudo ./ntsclient --config ./ntsclient.toml --debug\r\n\r\nConf: &main.Config{Server:"nts.ntp.se", CACert:"", Interval:1000}\r\nConnecting to KE server nts.ntp.se:4460\r\nUsing resolved KE server as NTP default: 194.58.207.77:123\r\nRecord type 1\r\nCritical set\r\nRecord type 4\r\nCritical set\r\nRecord type 6\r\nCritical set\r\n(got negotiated NTP server: 194.58.207.80)\r\nRecord type 7\r\nCritical set\r\n(got negotiated NTP port: 4123)\r\nRecord type 5\r\nRecord type 5\r\nRecord type 5\r\nRecord type 5\r\nRecord type 5\r\nRecord type 5\r\nRecord type 5\r\nRecord type 5\r\nRecord type 0\r\nCritical set\r\nNTSKE exchange yielded:\r\n  c2s: 7185b6d9658ae862f9f80027a4b4f56702fdcca16bd77064daf9fc12428cacb5\r\n  s2c: 3ca3feda3ce5cd55129bf21c51d576476284dbfe3910ca95e1966aff8fd79d49\r\n  server: 194.58.207.80\r\n  port: 4123\r\n  algo: 15\r\n  8 cookies:\r\n  #1: 1d1f7bdc87a2c92ada1416006314cba9106a3b8a0957b404e8b3b9299cf0892eccb910fa8c071429a72e77c1a850ea018a17b1272101cbb45a32b90293788b1ec2aa5e013e3c5e15f5cdcb4bd1d30ac84780f8765b56fa419d085a36d66efe04adf4f67e\r\n  #2: 1d1f7bdcb1a894e3fa5dfc00c63b3c9c14ed4761716900feeec48bcadc3591ea8addfe9dac46a630f5dedc513c741f977f5f7c3d62858b28158650323eea3c9a678627da31fff0e1ecc83fc0b8d632a87988ab60b690fe38ebb2e864bcddd3ad541dab00\r\n  #3: 1d1f7bdc5d1741b60c1b355843c82a48533032adb99f67577366c9fe6172b946dc11863db7d12b7e4d52368944ee88f2ebc25086fccbc446d6ffbe75546aac65f4a56ecfde4852f77247178a0f0063bdd228205bd30fe35c32d4ad1b4e8e9f8704c726e7\r\n  #4: 1d1f7bdc764e5dd5423656aaff1c69147a15cb9105484a1549183efefb27ce6890448f803ae4a558bfc93da2ee811362f67f7516e8dc01a4a56c28caccaedab2c861995b30b1b0000e125c2de251232b177af1f3ee2fe1b87e56c3d6ec8769c4ba1d3010\r\n  #5: 1d1f7bdc06c0d51832ceb31a23fc3dcacf352cd0f8532a43967089678c48eb4ffc6142e57c66af26c2c730a709a7ebb7b25742c07775e0747cb690ffa67271b478fb7773262f786db97ee1e34d02b9d9f8146fa91bd6945804d4cf00d3dcd3da30efcb03\r\n  #6: 1d1f7bdca7cde8901057519e738be42e6f35fd8cf6457069a79c474ce6c3ca00641cdc2a5b29daff557337b2654b0aa89c0999ff820e0a63bdae90c68164acbdac649263d6b193c2bb2bc974a7fa1b4f8e0bab4c7e7592e397945d996e741a9e7d58546d\r\n  #7: 1d1f7bdc6ad2682416f848678e130931b67368209d929b92120e78c020ccda671ad7e33c3d826f5d33d67f9ae1f5de64ddd0498c2df4f5b45a186b91d8da2549c3e06ca35820b6227bbacfd5356fac996f11f44830f57d3788e23bcebdf3386f291fccd7\r\n  #8: 1d1f7bdc897ee754dcf978b180253e47c1a77055a1f149fbd61131187db0f03a3a45b35424d9a209902b254b212270fa325322ef2adb61de0f1fae5863e2312fa8fad64bedda1d4cc0deaa470eec485acf1bddf6e65788b407188b12a870a6cce274ef2a\r\nSending: \r\nVersion: 4\r\nMode: 3\r\nLeapIndicator: 3\r\nStratum: 0\r\nPoll: 0\r\nPrecision: 0\r\nRootDelay: 0s\r\nRootDispersion: 0s\r\nReferenceID: 0\r\nReferenceTime: 0001-01-01 00:00:00 +0000 UTC\r\nOriginTime: 0001-01-01 00:00:00 +0000 UTC\r\nReceiveTime: 0001-01-01 00:00:00 +0000 UTC\r\nTransmitTime: 0001-01-01 00:00:00 +0000 UTC\r\nSpoofCookie: 2249980270020620447\r\n\r\n-- UniqueIdentifier EF\r\n  ID: c4c7e91b9ca840a0b7e4e41c22bd143e2dfeb2768f9875e748a2a512613ac81c\r\n\r\n-- Cookie EF\r\n  1d1f7bdc87a2c92ada1416006314cba9106a3b8a0957b404e8b3b9299cf0892eccb910fa8c071429a72e77c1a850ea018a17b1272101cbb45a32b90293788b1ec2aa5e013e3c5e15f5cdcb4bd1d30ac84780f8765b56fa419d085a36d66efe04adf4f67e\r\n\r\n-- Authenticator EF\r\n  NonceLen: 0\r\n  CipherTextLen: 0\r\n  Nonce: \r\n  Ciphertext: \r\n  Key: 7185b6d9658ae862f9f80027a4b4f56702fdcca16bd77064daf9fc12428cacb5\r\n\r\nwire: e300000000000000000000000000000025c17d04dad2965d25c17d04dad2965d25c17d04dad2965d1f3989227a37709f01040024c4c7e91b9ca840a0b7e4e41c22bd143e2dfeb2768f9875e748a2a512613ac81c020400681d1f7bdc87a2c92ada1416006314cba9106a3b8a0957b404e8b3b9299cf0892eccb910fa8c071429a72e77c1a850ea018a17b1272101cbb45a32b90293788b1ec2aa5e013e3c5e15f5cdcb4bd1d30ac84780f8765b56fa419d085a36d66efe04adf4f67e0404002800100010190d1ba7a999908f80b79652288ee53445c8bc790d21bc2c31454e823a659f9e\r\nReceived: \r\nVersion: 4\r\nMode: 4\r\nLeapIndicator: 0\r\nStratum: 1\r\nPoll: 0\r\nPrecision: -24\r\nRootDelay: 0s\r\nRootDispersion: 0s\r\nReferenceID: 1347441408\r\nReferenceTime: 2022-10-04 11:39:51 +0000 UTC\r\nOriginTime: 0001-01-01 00:00:00 +0000 UTC\r\nReceiveTime: 2022-10-04 11:39:52.23693832 +0000 UTC\r\nTransmitTime: 2022-10-04 11:39:52.236942742 +0000 UTC\r\nSpoofCookie: 2249980270020620447\r\n\r\n-- UniqueIdentifier EF\r\n  ID: c4c7e91b9ca840a0b7e4e41c22bd143e2dfeb2768f9875e748a2a512613ac81c\r\n\r\n-- Authenticator EF\r\n  NonceLen: 16\r\n  CipherTextLen: 120\r\n  Nonce: 9d9ebcc66e8a825179b83334f20c1513\r\n  Ciphertext: 8d60b8bf3f5a4a15ec1ea0e9fa01e3abaa75c34c6735a69da940158970f1798bbc9836467d829469e4930a82fdbfd6898147192f4aad60e61d54d3b518ef1792df3cba2f610b876200cc94e7c5472c015a0fe94081327de006f3c607a0c19becc756044317db5fb94d3c60d9f408ef7c234d834de1429827\r\n  Key: \r\n\r\nReceived wire: {36 1 0 -24 0 0 1347441408 16638155228222324736 2249980270020620447 16638155233534934369 16638155233534953361}\r\nresponse: &ntp.Response{Time:time.Date(2022, time.October, 4, 11, 39, 52, 236942742, time.UTC), ClockOffset:12618768, RTT:339863256, Precision:59, Stratum:0x1, ReferenceID:0x50505300, ReferenceTime:time.Date(2022, time.October, 4, 11, 39, 51, 0, time.UTC), RootDelay:0, RootDispersion:0, RootDistance:169931628, Leap:0x0, MinError:0, KissCode:"", Poll:1000000000}\r\nNetwork time on 194.58.207.80:4123 2022-10-04 11:39:52.236942742 +0000 UTC. Local clock off by 12.618768ms.\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This seems to be working - I can verify it by manually setting my PC time. Starting the ",(0,t.jsx)(n.code,{children:"ntsclient"})," will correct the mistake immediately. Nice!"]}),"\n",(0,t.jsx)(n.h3,{id:"running-as-a-service-with-systemd",children:"Running as a Service with SystemD"}),"\n",(0,t.jsxs)(n.p,{children:["Installing ",(0,t.jsx)(n.code,{children:"ntsclient"})," as a systemd service manually:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cp ntsclient /usr/bin/\r\ncp ntsclient.toml /etc/\r\ncp contrib/ntsclient.service /etc/systemd/system\r\nsystemctl enable ntsclient\r\nsystemctl start ntsclient\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},633317:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-0795219c47cded4f1a1480a5f18e4c60.jpg"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var t=r(296540);const i={},c=t.createContext(i);function s(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);