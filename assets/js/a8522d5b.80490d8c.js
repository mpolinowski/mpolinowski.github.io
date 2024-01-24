"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[70668],{908849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var r=t(785893),s=t(603905);const a={sidebar_position:5960,slug:"2022-11-29",title:"TypeScript 2.0 in React 19 (2023)",authors:"mpolinowski",tags:["Javascript"],description:"Typescript Workshop"},c=void 0,o={id:"Development/Javascript/2022-11-29-react-typescript-intro-2023/index",title:"TypeScript 2.0 in React 19 (2023)",description:"Typescript Workshop",source:"@site/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/index.md",sourceDirName:"Development/Javascript/2022-11-29-react-typescript-intro-2023",slug:"/Development/Javascript/2022-11-29-react-typescript-intro-2023/2022-11-29",permalink:"/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/2022-11-29",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2022-11-29-react-typescript-intro-2023/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"}],version:"current",sidebarPosition:5960,frontMatter:{sidebar_position:5960,slug:"2022-11-29",title:"TypeScript 2.0 in React 19 (2023)",authors:"mpolinowski",tags:["Javascript"],description:"Typescript Workshop"},sidebar:"tutorialSidebar",previous:{title:"11ty Static Site Generator",permalink:"/docs/Development/Javascript/2022-12-11-11ty-starter/2022-12-11"},next:{title:"Web3.js Blockchain Application",permalink:"/docs/Development/Javascript/2022-11-19-web3-javascript-app/2022-11-19"}},i={},l=[{value:"App Scaffolding",id:"app-scaffolding",level:2},{value:"React vs Typed React",id:"react-vs-typed-react",level:2},{value:"jsx",id:"jsx",level:3},{value:"tsx",id:"tsx",level:3},{value:"Children Types",id:"children-types",level:2},{value:"State Type",id:"state-type",level:2}];function p(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.ah)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Shenzhen, China",src:t(187485).Z+"",width:"2208",height:"757"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#app-scaffolding",children:"App Scaffolding"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#react-vs-typed-react",children:"React vs Typed React"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#jsx",children:"jsx"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#tsx",children:"tsx"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#children-types",children:"Children Types"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#state-type",children:"State Type"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://fem-react-typescript.vercel.app/",children:"see Workshop fem-react-typescript"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"WiP"})}),"\n",(0,r.jsx)(n.h2,{id:"app-scaffolding",children:"App Scaffolding"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://create-react-app.dev/docs/adding-typescript/",children:"Create-React-App"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx create-react-app typescript2-intro --template typescript\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"tsconfig.json"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "compilerOptions": {\n    "target": "es6",\n    "lib": [\n      "dom",\n      "dom.iterable",\n      "esnext"\n    ],\n    "allowJs": true,\n    "skipLibCheck": true,\n    "esModuleInterop": true,\n    "allowSyntheticDefaultImports": true,\n    "strict": true,\n    "forceConsistentCasingInFileNames": true,\n    "noFallthroughCasesInSwitch": true,\n    "module": "esnext",\n    "moduleResolution": "node",\n    "resolveJsonModule": true,\n    "isolatedModules": true,\n    "noEmit": true,\n    "jsx": "react-jsx"\n  },\n  "include": [\n    "src"\n  ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"react-vs-typed-react",children:"React vs Typed React"}),"\n",(0,r.jsx)(n.h3,{id:"jsx",children:"jsx"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React from \'react\'\n\nconst NameBadge = ({name}) => {\n    return (\n      <section className="badge">\n        <header className="badge-header">\n            <h1 className="text-5xl">Hello</h1>\n            <p>My name is ...</p>\n        </header>\n        <div className="badge-body">\n            <p className="badge-name">{name}</p>\n        </div>\n        <footer className="badge-footer" />\n      </section>\n    )\n}\n\nconst NameCard = () => {\n  return (\n    <NameBadge name="Gironimo" />\n    )\n}\n\nexport default NameCard\n'})}),"\n",(0,r.jsx)(n.h3,{id:"tsx",children:"tsx"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import React from \'react\'\n\ninterface NameBadgeProps {\n  name: string\n  surname?: string // optional\n}\n\nconst NameBadge = ({ name }: NameBadgeProps): JSX.Element => {\n    return (\n      <section className="badge">\n        <header className="badge-header">\n            <h1 className="text-5xl">Hello</h1>\n            <p>My name is ...</p>\n        </header>\n        <div className="badge-body">\n            <p className="badge-name">{name}</p>\n        </div>\n        <footer className="badge-footer" />\n      </section>\n    )\n  }\n\nconst NameCard = () => {\n  return (\n    <NameBadge name="Gironimo" />\n    )\n}\n  \nexport default NameCard\n'})}),"\n",(0,r.jsx)(n.h2,{id:"children-types",children:"Children Types"}),"\n",(0,r.jsxs)(n.p,{children:["Before we used a string prop and it was easy to assign the correct type to it. But what about ",(0,r.jsx)(n.code,{children:"children"})," e.g. :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'type BoxProps = { children: any /* \ud83d\udc48 Get rid of this! */ };\n\n const Box = ({ children }: BoxProps) => {\n   return (\n     <section\n       className="m-4"\n       style={{ padding: \'1em\', border: \'5px solid purple\' }}\n     >\n       {children}\n     </section>\n   );\n };\n \n const Application = () => {\n   return (\n     <main className="m-8">\n       <Box>\n         Just a string.\n         <p>Some HTML that is not nested.</p>\n         <Box>\n           <h2>Another React component with one child.</h2>\n         </Box>\n         <Box>\n           <h2 className="mb-4">A nested React component with two children.</h2>\n           <p>The second child.</p>\n         </Box>\n       </Box>\n     </main>\n   );\n };\n \n export default Application;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Typescript prompts us to use one of the following to get rid of the ",(0,r.jsx)(n.code,{children:"any"})," type:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"TypeScript 2.0 in React 19 (2023)",src:t(350357).Z+"",width:"1095",height:"179"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"JSX.Element;"}),": Only works if there is a single JSX element"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"JSX.Element | JSX.Element[];"})," For more then one element we can use the array type - but this does not cover the strings we have in our children element."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"React.ReactNode;"}),": The correct answer that covers us."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type BoxProps = { children: React.ReactNode };\n"})}),"\n",(0,r.jsx)(n.p,{children:"A better more specific alternative is:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type BoxProps = React.PropsWithChildren<{}>\n\n const Box = ({ children }: BoxProps) => {\n\n  ...\n"})}),"\n",(0,r.jsx)(n.p,{children:"Which also allows us to use style types:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type BoxProps = React.PropsWithChildren<{\n  style: React.CSSProperties\n}>\n\n const Box = ({ children, style }: BoxProps) => {\n   return (\n     <section\n       className=\"m-4\"\n       style={{ padding: '1em', border: '5px solid purple', ...style }}\n     >\n\n  ...\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To handle specific JSX components we can use ",(0,r.jsx)(n.code,{children:"ComponentPropsWithoutRef"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"type ButtonProps = React.ComponentPropsWithoutRef<'button>\n\nconst Button = ({ children, onclick, type }: ButtonProps) => {\n  return (\n    <button onClick={onClick} type={type}>\n      {children}\n    </button>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"state-type",children:"State Type"}),"\n",(0,r.jsxs)(n.p,{children:["input ",(0,r.jsx)(n.code,{children:'type="number"'})," => ",(0,r.jsx)(n.code,{children:"setDraftCount(e.target.valueAsNumber)"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { useState } from "react"\n\nconst Counter = () => {\n  const [count, setCount] = useState(0)\n  const [draftCount, setDraftCount] = useState(count)\n    \n  return (\n    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">\n      <h1>Days Since the Last Accident</h1>\n      <p className="text-6xl">{count}</p>\n      <div className="flex gap-2">\n        <button onClick={() => setCount((count) => count -1)}>\u2796 Decrement</button>\n        <button onClick={() => setCount(0)}>\ud83d\udd01 Reset</button>\n        <button onClick={() => setCount((count) => count +1)}>\u2795 Increment</button>\n      </div>\n      <div>\n        <form onSubmit={(e) => {\n          e.preventDefault()\n          setCount(count + draftCount)\n        }}>\n          <input\n            type="number"\n            value={draftCount}\n            onChange={(e) => setDraftCount(e.target.valueAsNumber)}/>\n          <button type="submit">Add to Counter</button>\n        </form>\n      </div>\n    </section>\n  );\n};\n\nexport default Counter;\n'})})]})}function d(e={}){const{wrapper:n}={...(0,s.ah)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},603905:(e,n,t)=>{t.d(n,{ah:()=>l});var r=t(667294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=l(t),u=s,m=h["".concat(i,".").concat(u)]||h[u]||p[u]||a;return t?r.createElement(m,c(c({ref:n},d),{},{components:t})):r.createElement(m,c({ref:n},d))}));d.displayName="MDXCreateElement"},350357:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/TypeScript_2.0_in_React_19_01-99cb7be445ec631e54b3646ced8a2090.png"},187485:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-e38404fdf0e14587f660e537829bfab5.jpg"}}]);