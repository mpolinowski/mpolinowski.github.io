"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[28207],{667406:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=t(474848),i=t(28453);const a={sidebar_position:5870,slug:"2024-03-18",title:"Astro React with MDX",authors:"mpolinowski",tags:["Javascript","MDX","React"],description:"Building a React MDX documentation page using Astro.js"},r=void 0,o={id:"Development/Javascript/2024-03-18-astro-vite-mdx/index",title:"Astro React with MDX",description:"Building a React MDX documentation page using Astro.js",source:"@site/docs/Development/Javascript/2024-03-18-astro-vite-mdx/index.md",sourceDirName:"Development/Javascript/2024-03-18-astro-vite-mdx",slug:"/Development/Javascript/2024-03-18-astro-vite-mdx/2024-03-18",permalink:"/docs/Development/Javascript/2024-03-18-astro-vite-mdx/2024-03-18",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Development/Javascript/2024-03-18-astro-vite-mdx/index.md",tags:[{label:"Javascript",permalink:"/docs/tags/javascript"},{label:"MDX",permalink:"/docs/tags/mdx"},{label:"React",permalink:"/docs/tags/react"}],version:"current",sidebarPosition:5870,frontMatter:{sidebar_position:5870,slug:"2024-03-18",title:"Astro React with MDX",authors:"mpolinowski",tags:["Javascript","MDX","React"],description:"Building a React MDX documentation page using Astro.js"},sidebar:"tutorialSidebar",previous:{title:"React Email",permalink:"/docs/Development/Javascript/2024-04-24-react-email/2024-04-24"},next:{title:"Typescript for Web APIs",permalink:"/docs/Development/Javascript/2023-12-31-js-typescript-rest/2023-12-31"}},d={},l=[{value:"Astro App",id:"astro-app",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"TST, Hongkong",src:t(573012).A+"",width:"2359",height:"864"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#astro-app",children:"Astro App"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"astro-app",children:"Astro App"}),"\n",(0,s.jsxs)(n.p,{children:["Start the project using the Astro CLI and scaffold the ",(0,s.jsx)(n.strong,{children:"Blog Template"})," using strict Typescript:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm create astro@latest\n\ncreate-astro@4.7.4\n\n astro   Launch sequence initiated.\n\n   dir   Where should we create your new project?\n         ./astro-mdx\n\n  tmpl   How would you like to start your new project?\n         Use blog template\n\n    ts   Do you plan to write TypeScript?\n         Yes\n\n   use   How strict should TypeScript be?\n         Strict\n\n  deps   Install dependencies?\n         Yes\n\n   git   Initialize a new git repository?\n"})}),"\n",(0,s.jsx)(n.p,{children:"Verify that the dev server is operational by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run dev\n\n astro  v4.5.5 ready in 261 ms\n\n\u2503 Local    http://localhost:4321/\n\u2503 Network  use --host to expose\n"})}),"\n",(0,s.jsx)(n.p,{children:"And visiting the created blog template under:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"http://localhost:4321/\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now stop the server and add the MDX and React support using the command below:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx astro add mdx\nnpx astro add react\nnpm install react react-dom @types/react @types/react-dom\n"})}),"\n",(0,s.jsx)(n.p,{children:"Make sure that Astro is aware of the React and MDX dependencies:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"astro.config.mjs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import { defineConfig } from 'astro/config'\nimport mdx from '@astrojs/mdx'\nimport react from '@astrojs/react'\nimport sitemap from '@astrojs/sitemap'\n\nimport react from \"@astrojs/react\"\n\n// https://astro.build/config\nexport default defineConfig({\n  site: 'https://example.com',\n  integrations: [\n    mdx(),\n    sitemap(), \n    react({\n      include: ['**/react/*'],\n    })\n  ]\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["By choosing the ",(0,s.jsx)(n.strong,{children:"Blog Template"})," the application already has a few template markdown articles under ",(0,s.jsx)(n.code,{children:"src/content/blog"}),". There is also an MDX file already available ",(0,s.jsx)(n.code,{children:"src/content/blog/using-mdx.mdx"})," - and I am not sure if this was already part of the Blog Template - adding MDX support may have been redundant (?)."]}),"\n",(0,s.jsx)(n.p,{children:"But let's try mixing some React with Markdown anyway and see what happens:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"src/content/blog/mdx-test.mdx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mdx",children:"---\ntitle: 'Countries by GDP'\ndescription: 'Top 10 of countries by their Gross Domestic Products (GDP).'\npubDate: 'Mar 18 2024'\nheroImage: '/blog-placeholder-about.jpg'\n---\n\n\nimport {CountryList} from '../../components/react/countries.tsx'\n\n\n<CountryList />\n\n<div>\n  > <code><small>Source [ Gross domestic product 2022 - World Bank](https://databankfiles.worldbank.org/public/ddpext_download/GDP.pdf)</small></code>\n</div>\n"})}),"\n",(0,s.jsx)(n.p,{children:"This MDX file follows the structure (frontmatter) of the example files, making sure that it will be picked up by the markdown template as page content and placed in the list of available blog entries."}),"\n",(0,s.jsx)(n.p,{children:"The React part is not defined directly inside the MDX file but inmported from a TSX component that simulates retrieving the GDP data from an API, sorts the entries by GDP and displays them in an unordered list:"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"src/components/react/countries.tsx"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:'const countryList: { id: string, name: string, gdp: string }[] = [\n    {\n        "id": "UK",\n        "name": "United Kingdom",\n        "gdp": "3070668"\n    }, {\n        "id": "RUS",\n        "name": "Russian Federation",\n        "gdp": "2240422"\n    }, {\n        "id": "IT",\n        "name": "Italy",\n        "gdp": "2010432"\n    }, {\n        "id": "CN",\n        "name": "China",\n        "gdp": "17963171"\n    }, {\n        "id": "FR",\n        "name": "France",\n        "gdp": "2782905"\n    }, {\n        "id": "JP",\n        "name": "Japan",\n        "gdp": "4231141"\n    }, {\n        "id": "GER",\n        "name": "Germany",\n        "gdp": "4072192"\n    }, {\n        "id": "CA",\n        "name": "Canada",\n        "gdp": "2139840"\n    }, {\n        "id": "IN",\n        "name": "India",\n        "gdp": "3385090"\n    }, {\n        "id": "US",\n        "name": "United States",\n        "gdp": "25462700"\n    }\n]\n\nexport function CountryList(): JSX.Element {\n    \n    const renderList = (countries: { id: string, name: string, gdp: string }[]) => {\n        countries.sort((a, b) => parseFloat(b.gdp) - parseFloat(a.gdp))\n        return countries.map(country => <li>{country.name}: {(parseFloat(country.gdp) / 1000000).toFixed(2)}</li>)\n      }\n\n    return (\n        <>\n            <h5>Countries by GDP (in Million $)</h5>\n            <ul>\n                {renderList(countryList)}\n            </ul>\n        </>\n    )\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Astro React with MDX",src:t(422565).A+"",width:"620",height:"784"})}),"\n",(0,s.jsx)(n.p,{children:"Running a build:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'npm run build\n\n> astro-mdx@0.0.1 build\n> astro check && astro build\n\n20:11:28 [vite] Re-optimizing dependencies because vite config has changed\n20:11:28 Types generated 395ms\nResult (16 files): \n- 0 errors\n- 0 warnings\n- 0 hints\n\n20:11:39 [build] output: "static"\n20:11:39 [build] directory: astro-mdx/dist/\n20:11:39 [build] Collecting build info...\n20:11:39 [build] \u2713 Completed in 458ms.\n20:11:39 [build] Building static entrypoints...\n20:11:41 [vite] \u2713 built in 2.45s\n20:11:41 [build] \u2713 Completed in 2.60s.\n\n building client (vite) \n20:11:42 [vite] \u2713 23 modules transformed.\n20:11:42 [vite] dist/_astro/client.CwWKiGVO.js  142.28 kB \u2502 gzip: 45.84 kB\n20:11:42 [vite] \u2713 built in 697ms\n\n generating static routes \n20:11:42 \u25b6 src/pages/about.astro\n20:11:42   \u2514\u2500 /about/index.html (+16ms)\n20:11:42 \u25b6 src/pages/blog/index.astro\n20:11:42   \u2514\u2500 /blog/index.html (+6ms)\n20:11:42 \u25b6 src/pages/blog/[...slug].astro\n20:11:42   \u251c\u2500 /blog/markdown-style-guide/index.html (+8ms)\n20:11:42   \u251c\u2500 /blog/using-mdx/index.html (+15ms)\n20:11:42   \u251c\u2500 /blog/first-post/index.html (+7ms)\n20:11:42   \u251c\u2500 /blog/second-post/index.html (+8ms)\n20:11:42   \u251c\u2500 /blog/third-post/index.html (+5ms)\n20:11:43   \u2514\u2500 /blog/mdx-test/index.html (+10ms)\n20:11:43 \u03bb src/pages/rss.xml.js\n20:11:43   \u2514\u2500 /rss.xml (+5ms)\n20:11:43 \u25b6 src/pages/index.astro\n20:11:43   \u2514\u2500 /index.html (+3ms)\n20:11:43 \u2713 Completed in 334ms.\n\n20:11:43 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`\n20:11:43 [build] 9 page(s) built in 4.12s\n20:11:43 [build] Complete!\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},422565:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/Astro_MDX_React_01-6167427e37da8649dcd08c253b38762b.png"},573012:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/photo-kt443t6d_64hdh43hfh6dgjdfhg4_d-c3aedc7eed015cc5372c21f9c394693d.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(296540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);