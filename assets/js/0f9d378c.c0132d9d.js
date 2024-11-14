"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9003],{8707:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"developer-guide/projects/image-builder/index","title":"Image Builder","description":"Image Builder serves as an HTTP API on top of [Osbuild","source":"@site/docs/developer-guide/02-projects/image-builder/index.md","sourceDirName":"developer-guide/02-projects/image-builder","slug":"/developer-guide/projects/image-builder/","permalink":"/docs/developer-guide/projects/image-builder/","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/image-builder/blob/main/README.md","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/image-builder/blob/main/README.md"},"sidebar":"developer","previous":{"title":"Hacking on composer-cli","permalink":"/docs/developer-guide/projects/composer-cli/HACKING"},"next":{"title":"Image Builder contributing guide","permalink":"/docs/developer-guide/projects/image-builder/HACKING"}}');var n=s(4848),l=s(8453);const t={custom_edit_url:"https://github.com/osbuild/image-builder/blob/main/README.md"},d="Image Builder",o={},c=[{value:"Project",id:"project",level:3},{value:"OpenAPI spec",id:"openapi-spec",level:3},{value:"Contributing",id:"contributing",level:3},{value:"Build",id:"build",level:3},{value:"Run Tests",id:"run-tests",level:3},{value:"Installation",id:"installation",level:3},{value:"Repository",id:"repository",level:2},{value:"License",id:"license",level:2}];function u(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"image-builder",children:"Image Builder"})}),"\n",(0,n.jsxs)(i.p,{children:["Image Builder serves as an HTTP API on top of ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/osbuild-composer",children:"Osbuild\nComposer"}),", and serves as the\nbackend for ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/image-builder-frontend/",children:"Image Builder\nFrontend"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["Image Builder is intended to be run within the\n",(0,n.jsx)(i.a,{href:"https://console.redhat.com",children:"console.redhat.com"})," platform."]}),"\n",(0,n.jsx)(i.h3,{id:"project",children:"Project"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Website"}),": ",(0,n.jsx)(i.a,{href:"https://www.osbuild.org",children:"https://www.osbuild.org"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Bug Tracker"}),": ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/image-builder/issues",children:"https://github.com/osbuild/image-builder/issues"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Matrix"}),": #image-builder on ",(0,n.jsx)(i.a,{href:"https://matrix.to/#/#image-builder:fedoraproject.org",children:"fedoraproject.org"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Mailing List"}),": ",(0,n.jsx)(i.a,{href:"mailto:image-builder@redhat.com",children:"image-builder@redhat.com"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Changelog"}),": ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/image-builder/releases",children:"https://github.com/osbuild/image-builder/releases"})]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"openapi-spec",children:"OpenAPI spec"}),"\n",(0,n.jsx)(i.p,{children:"The latest OpenAPI specification:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://github.com/osbuild/image-builder/blob/main/internal/v1/api.yaml",children:"raw YAML"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/osbuild/image-builder/main/internal/v1/api.yaml",children:"on-line version"})}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"contributing",children:"Contributing"}),"\n",(0,n.jsxs)(i.p,{children:["Please refer to the ",(0,n.jsx)(i.a,{href:"/docs/developer-guide/projects/image-builder/HACKING",children:"hacking guide"})," to learn more."]}),"\n",(0,n.jsx)(i.h3,{id:"build",children:"Build"}),"\n",(0,n.jsx)(i.p,{children:"Project building and testing project is based on predefined make targets:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"make build"})," to trigger Go builder"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"run-tests",children:"Run Tests"}),"\n",(0,n.jsx)(i.p,{children:"To run the tests locally just call"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"make unit-tests\n"})}),"\n",(0,n.jsx)(i.p,{children:"Before pushing something for a pull request you should run this check to avoid problems with required github actions"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-sh",children:"make push-check\n"})}),"\n",(0,n.jsx)(i.h3,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(i.p,{children:["To run the project use ",(0,n.jsx)(i.code,{children:"make run"})," target"]}),"\n",(0,n.jsx)(i.h2,{id:"repository",children:"Repository"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"web"}),":   ",(0,n.jsx)(i.a,{href:"https://github.com/osbuild/image-builder",children:"https://github.com/osbuild/image-builder"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"https"}),": ",(0,n.jsx)(i.code,{children:"https://github.com/osbuild/image-builder.git"})]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"ssh"}),":   ",(0,n.jsx)(i.code,{children:"git@github.com:osbuild/image-builder.git"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"license",children:"License"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.strong,{children:"Apache-2.0"})}),"\n",(0,n.jsx)(i.li,{children:"See LICENSE file for details."}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>t,x:()=>d});var r=s(6540);const n={},l=r.createContext(n);function t(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);