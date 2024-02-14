"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[5446],{500378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(785893),r=t(603905);const s={sidebar_position:5887,slug:"2023-12-21",title:"Building a Native IP Camera Client in React",authors:"mpolinowski",tags:["Javascript","React","Rust"],description:"Use Tauri to build a native application using Vite.js and Tanstack React Query"},o=void 0,i={id:"Development/Javascript/2023-12-24-react-query-tauri-iot-ctrl/index",title:"Building a Native IP Camera Client in React",description:"Use Tauri to build a native application using Vite.js and Tanstack React Query",source:"@site/docs/Development/Javascript/2023-12-24-react-query-tauri-iot-ctrl/index.md",sourceDirName:"Development/Javascript/2023-12-24-react-query-tauri-iot-ctrl",slug:"/Development/Javascript/2023-12-24-react-query-tauri-iot-ctrl/2023-12-21",permalink:"/docs/Development/Javascript/2023-12-24-react-query-tauri-iot-ctrl/2023-12-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2023-12-24-react-query-tauri-iot-ctrl/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"React",permalink:"/docs/tags/react"},{label:"Rust",permalink:"/docs/tags/rust"}],version:"current",sidebarPosition:5887,frontMatter:{sidebar_position:5887,slug:"2023-12-21",title:"Building a Native IP Camera Client in React",authors:"mpolinowski",tags:["Javascript","React","Rust"],description:"Use Tauri to build a native application using Vite.js and Tanstack React Query"},sidebar:"tutorialSidebar",previous:{title:"Typescript for Web APIs",permalink:"/docs/Development/Javascript/2023-12-31-js-typescript-rest/2023-12-31"},next:{title:"Building a Native Elasticsearch Client in React",permalink:"/docs/Development/Javascript/2023-12-21-react-query-tauri-elasticsearch/2023-12-21"}},c={},l=[{value:"Fetch State",id:"fetch-state",level:2},{value:"Trigger Events",id:"trigger-events",level:3},{value:"Update State",id:"update-state",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.ah)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"TST, Hongkong",src:t(861231).Z+"",width:"2359",height:"864"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/docs/Development/Javascript/2023-12-21-react-query-tauri-elasticsearch/2023-12-21",children:"Related: Building a Native Elasticsearch Client in React"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/react-typescript",children:"Github Repository: Handling HLS Live Streams & Video Recordings"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/rusty-react-query",children:"Github Repository: Camera REST State Management"})}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#fetch-state",children:"Fetch State"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#trigger-events",children:"Trigger Events"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#update-state",children:"Update State"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.a,{href:"/docs/Development/Javascript/2023-12-21-react-query-tauri-elasticsearch/2023-12-21",children:"previous example"})," I used React Query to connect my Tauri App to an Web REST API by building an Elasticsearch client app."]}),"\n",(0,a.jsxs)(n.p,{children:["Now I am interested in doing something similar - controlling an INSTAR 'smart' network camera through it's CGI interface. Since I already looked into ",(0,a.jsx)(n.a,{href:"https://github.com/mpolinowski/react-typescript",children:"handling my cameras live video"})," I will skip this part for now and just add a screenshot as placeholder."]}),"\n",(0,a.jsxs)(n.p,{children:["There are two problems that I need to solve. The first being using React Query to keep my client state up-to-date with the camera backend.  Since the ",(0,a.jsx)(n.a,{href:"https://wiki.instar.com/en/Advanced_User/CGI_Commands/",children:"CGI Interface"})," is just another REST API I should be able to copy&paste in my Elasticsearch client code with just a few modifications."]}),"\n",(0,a.jsx)(n.p,{children:"The second issue is that I need the React Query Mutation to be able to use the HTTP POST method and update the camera state."}),"\n",(0,a.jsx)(n.h2,{id:"fetch-state",children:"Fetch State"}),"\n",(0,a.jsx)(n.p,{children:"The following is an example of using React Query to fetch the camera state. All wrapped up in some Shadcn/UI:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport { useQuery, UseQueryResult } from \"@tanstack/react-query\"\n\nimport { Badge } from \"@/components/ui/badge\"\nimport { Button } from \"@/components/ui/button\"\nimport { Input } from \"@/components/ui/input\"\nimport { Label } from \"@/components/ui/label\"\nimport { ReloadIcon } from \"@radix-ui/react-icons\"\n\nimport { iGetWizardStatusApiResponse } from '@/types/iFeatures'\nimport { login, features } from '@/config.ts'\n\nconst cmd='http://'+login.url+':'+login.port+'/param.cgi?cmd='\nconst auth='&user='+login.user+'&pwd='+login.password\nconst param=features.wizardstatus\n\nconst fetchData = async(param: string): Promise<iGetWizardStatusApiResponse> => {\n    const response = await fetch(cmd+param+auth)\n    const cmdQuery = 'cmd=\"'+param+'\";'\n\n    if (response.ok) {\n        const cleanedTextResponse = (await response.text())\n        .replace(cmdQuery, '{\"')\n        .replace('response=\"200\";', '}')\n        .replace(/=/g, '\":')\n        .replace(/\";/g, '\",\"')\n        .replace(/\\s/g, '')\n        .replace(/\",\"}/g, '\"}')\n\n        const jsonData: iGetWizardStatusApiResponse = JSON.parse(cleanedTextResponse)\n\n        return jsonData\n    }\n    throw new Error('ERROR :: Data fetching failed!')\n}\n\nexport default function DataRequest(): React.JSX.Element {\n\n    const {\n        isLoading,\n        isError,\n        error,\n        data,\n        isSuccess\n    }: UseQueryResult<iGetWizardStatusApiResponse, Error> = useQuery<iGetWizardStatusApiResponse, Error>({\n        queryKey: ['ptzparams', { param }],\n        queryFn: () => fetchData(param),\n        staleTime: 1000 * 5,\n        refetchOnMount: true,\n        refetchOnReconnect: true,\n        refetchOnWindowFocus: true,\n        refetchInterval: 1000 * 30,\n        refetchIntervalInBackground: false,\n        retry: true,\n        retryOnMount: true,\n        // retryDelay: 1000 * 5, // default increases exponentially\n    })\n\n    if(isLoading) return (\n        <Button variant=\"ghost\" disabled>\n          <ReloadIcon className=\"mr-2 h-4 w-4 animate-spin\" />\n          Please wait\n        </Button>\n      )\n\n    if(isError) return (\n        <Badge variant=\"destructive\" className='mb-2'>\n            {error.message}\n        </Badge>\n    )\n\n    if(isSuccess) return (\n            <>\n                <div className=\"grid grid-cols-4 items-center gap-4\">\n                    <Label htmlFor=\"name\" className=\"text-right\">\n                        Installation Wizard\n                    </Label>\n                    <Input id=\"name\" value={data.status} className=\"col-span-3\" />\n                </div>\n            </>\n    )\n\n    else return <Badge variant=\"outline\" className='mb-2'>Huh?</Badge>\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Implementing this for every ",(0,a.jsx)(n.a,{href:"https://wiki.instar.com/en/1440p_Series_CGI_List/",children:"CGI Command"})," gives you a nice UI displaying all your cameras state variables. But so far without being able to modify them:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Building a Native IP Camera Client in React",src:t(901111).Z+"",width:"507",height:"256"})}),"\n",(0,a.jsx)(n.h3,{id:"trigger-events",children:"Trigger Events"}),"\n",(0,a.jsx)(n.p,{children:"Let's start by using a GET Request to let my camera pan between preset positions. This is a simple request, just like above, but I don't have a state to display:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport { useQuery, UseQueryResult } from \"@tanstack/react-query\"\n\nimport { Badge } from \"@/components/ui/badge\"\nimport { Button } from \"@/components/ui/button\"\nimport { ReloadIcon } from \"@radix-ui/react-icons\"\n\nimport { login } from '@/config.ts'\nimport { iPostApiResponseCode } from '@/types/iGeneral'\n\nconst cmd='http://'+login.url+':'+login.port+'/param.cgi?cmd='\nconst auth='&user='+login.user+'&pwd='+login.password\nconst param='getptzpreset'\nconst act='&act=goto&index='\nconst value='1'\n\nconst fetchData = async(param: string, value: string): Promise<iPostApiResponseCode> => {\n    console.log(cmd+param+act+value+auth)\n    const response = await fetch(cmd+param+act+value+auth)\n    const cmdQuery = 'cmd=\"'+param+'\";'\n\n    if (response.ok) {\n        const cleanedTextResponse = (await response.text())\n        .replace(cmdQuery, '{')\n        .replace('response=\"', '\"code\":')\n        .replace('\";', '}')\n\n        console.log(cleanedTextResponse)\n\n        const jsonData: iPostApiResponseCode = JSON.parse(cleanedTextResponse)\n\n        console.log(jsonData)\n\n        return jsonData\n    }\n    throw new Error('ERROR :: Data fetching failed!')\n}\n\nexport default function GoTo(): React.JSX.Element {\n\n    const {\n        isLoading,\n        isError,\n        error,\n        data: response,\n        isSuccess\n    }: UseQueryResult<iPostApiResponseCode, Error> = useQuery<iPostApiResponseCode, Error>({\n        queryKey: ['ptzpresetparams', { param, value }],\n        queryFn: () => fetchData(param, value),\n        refetchOnMount: false,\n        refetchOnReconnect: false,\n        refetchOnWindowFocus: false,\n        retry: false,\n        retryOnMount: false,\n    })\n\n    if(isLoading) return (\n        <Button variant=\"ghost\" disabled>\n          <ReloadIcon className=\"mr-2 h-4 w-4 animate-spin\" />\n          Please wait\n        </Button>\n      )\n\n    if(isError) return (\n        <Badge variant=\"destructive\" className='mb-2'>\n            {error.message}\n        </Badge>\n    )\n\n    if(isSuccess) return <p>Response Code: {response?.code}</p>\n\n    else return <Badge variant=\"outline\" className='mb-2'>Huh?</Badge>\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The component simply returns the HTTP Status code - ",(0,a.jsx)(n.code,{children:"200"})," if successful - and I can see my camera move to the hardcoded preset position ",(0,a.jsx)(n.code,{children:"const value='1'"}),":"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Building a Native IP Camera Client in React",src:t(46445).Z+"",width:"997",height:"66"})}),"\n",(0,a.jsx)(n.p,{children:"Now I can replace the hardcoded value with an UI element - e.g. a drop down menu from which I can select a position:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"export default function GoTo(): React.JSX.Element {\n\n    const [position, setPosition] = useState('')\n\n    const {\n        isLoading,\n        isError,\n        error\n    }: UseQueryResult<iPostApiResponseCode, Error> = useQuery<iPostApiResponseCode, Error>({\n        queryKey: ['ptzpresetparams', { param, position }],\n        queryFn: () => fetchData(param, position),\n        refetchOnMount: false,\n        refetchOnReconnect: false,\n        refetchOnWindowFocus: false,\n        retry: false,\n        retryOnMount: false,\n    })\n\n    if(isLoading) return (\n        <Button variant=\"ghost\" disabled>\n          <ReloadIcon className=\"mr-2 h-4 w-4 animate-spin\" />\n          Please wait\n        </Button>\n      )\n\n    if(isError) return (\n        <Badge variant=\"destructive\" className='mb-2'>\n            {error.message}\n        </Badge>\n    )\n\n    return (\n        <>\n            <DropdownMenu>\n            <DropdownMenuTrigger>Presets</DropdownMenuTrigger>\n            <DropdownMenuContent className='flex items-center flex-col'>\n                <DropdownMenuLabel>Preset Positions</DropdownMenuLabel>\n                <DropdownMenuSeparator />\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('1')}}>Position 1</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('2')}}>Position 2</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('3')}}>Position 3</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('4')}}>Position 4</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('5')}}>Position 5</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('6')}}>Position 6</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('7')}}>Position 7</Button>\n                <Button\n                    variant='ghost'\n                    className='w-full'\n                    onClick={() => {setPosition('8')}}>Position 8</Button>\n            </DropdownMenuContent>\n            </DropdownMenu>\n        </>\n    )\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"update-state",children:"Update State"}),"\n",(0,a.jsxs)(n.p,{children:["To update the camera state as in toggling functions on or off we would usually use React Query Mutations to be able to use POST or PUT requests. But since most network cameras use different commands to ",(0,a.jsx)(n.code,{children:"get"})," and ",(0,a.jsx)(n.code,{children:"set"})," values they usually allow us to simply keep using ",(0,a.jsx)(n.strong,{children:"GET"})," commands for both."]}),"\n",(0,a.jsxs)(n.p,{children:["In the following example I used the ",(0,a.jsx)(n.a,{href:"https://wiki.instar.com/en/1440p_Series_CGI_List/Multimedia_Menu/Privacy_Mask/",children:"get and set command for the privacy areas"})," to toggle a screen mask on and off. The get command uses React Query to keep the client side state fresh while I am use a simple fetch to manually update the state when needed:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import React, { useState } from 'react'\nimport { useQuery } from \"@tanstack/react-query\"\n\nimport { Badge } from \"@/components/ui/badge\"\nimport { Button } from \"@/components/ui/button\"\nimport { Input } from \"@/components/ui/input\"\nimport { Label } from \"@/components/ui/label\"\nimport { ReloadIcon } from \"@radix-ui/react-icons\"\n\nimport { iGetImageCoverApiResponse } from '@/types/iMultimedia'\nimport { iPostApiResponseCode } from '@/types/iGeneral'\nimport { login, multimedia } from '@/config.ts'\n\nconst cmd='http://'+login.url+':'+login.port+'/param.cgi?cmd='\nconst auth='&user='+login.user+'&pwd='+login.password\nconst getparam=multimedia.privacy.get\nconst setparam=multimedia.privacy.set\nconst type=multimedia.privacy.privacyarea1\n\nconst fetchCameraState = async(param: string, type: string): Promise<iGetImageCoverApiResponse> => {\n    const response = await fetch(cmd+param+type+auth)\n    const cmdQuery = 'cmd=\"'+param+'\";'\n\n    if (response.ok) {\n        const cleanedTextResponse = (await response.text())\n        .replace(cmdQuery, '{\"')\n        .replace('response=\"200\";', '}')\n        .replace(/=/g, '\":')\n        .replace(/\";/g, '\",\"')\n        .replace(/\\s/g, '')\n        .replace(/\",\"}/g, '\"}')\n\n        const jsonData: iGetImageCoverApiResponse = JSON.parse(cleanedTextResponse)\n\n        return jsonData\n    }\n    throw new Error('ERROR :: Data fetching failed!')\n}\n\nconst updateCameraState = async(\n        param: string, type: string, value: string\n    ): Promise<iPostApiResponseCode> => {\n    const response = await fetch(cmd+param+type+'&enable='+value+auth)\n    const cmdQuery = 'cmd=\"'+param+'\";'\n\n    if (response.ok) {\n        const cleanedTextResponse = (await response.text())\n        .replace(cmdQuery, '{')\n        .replace('response=\"', '\"code\":')\n        .replace('\";', '}')\n\n        console.log(cleanedTextResponse)\n\n        const jsonData: iPostApiResponseCode = JSON.parse(cleanedTextResponse)\n\n        console.log(jsonData)\n\n        return jsonData\n    }\n    throw new Error('ERROR :: Data fetching failed!')\n}\n\nexport default function DataRequest(): React.JSX.Element {\n    const [value, setValue] = useState('')\n    const {\n        isLoading,\n        isError,\n        error,\n        data: response\n    } = useQuery<iGetImageCoverApiResponse, Error>({\n        queryKey: ['private1params', { getparam, type }],\n        queryFn: () => fetchCameraState(getparam, type),\n        staleTime: 1000 * 5,\n        refetchOnMount: true,\n        refetchOnReconnect: true,\n        refetchOnWindowFocus: true,\n        retry: true,\n        retryOnMount: true\n    })\n\n    if(isLoading) return (\n        <Button variant=\"ghost\" disabled>\n          <ReloadIcon className=\"mr-2 h-4 w-4 animate-spin\" />\n          Please wait\n        </Button>\n      )\n\n    if(isError) return (\n        <Badge variant=\"destructive\" className='mb-2'>\n            {error.message}\n        </Badge>\n    )\n    \n    return (\n            <>\n                <div className=\"flex gap-2\">\n                    <Label htmlFor=\"name\" className=\"text-right\">\n                        Enable Privacy Area 1\n                    </Label>\n                    <Input\n                        defaultValue={response?.enable}\n                        onChange={(e) => setValue(e.target.value)}\n                        className=\"col-span-3\"\n                    />\n                    <Button onClick={\n                        () => {updateCameraState(setparam, type, value)}\n                    }>Submit</Button>\n                </div>\n            </>\n    )\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Building a Native IP Camera Client in React",src:t(920086).Z+"",width:"821",height:"124"})})]})}function p(e={}){const{wrapper:n}={...(0,r.ah)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var a=t(667294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||s;return t?a.createElement(h,o(o({ref:n},p),{},{components:t})):a.createElement(h,o({ref:n},p))}));p.displayName="MDXCreateElement"},901111:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/React-Query-Tauri_01-0b562e2fb2507dd3f57e27e80a261fad.gif"},46445:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/React-Query-Tauri_02-181704c31e46105db5794ec591e1097f.png"},920086:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/React-Query-Tauri_03-b146d4bbefc3029e43f1178ca81b90bd.png"},861231:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c3aedc7eed015cc5372c21f9c394693d.jpg"}}]);