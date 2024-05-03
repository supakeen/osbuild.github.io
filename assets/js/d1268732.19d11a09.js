"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4326],{430:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>c,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var i=o(5893),n=o(1151);const t={},d="org.osbuild.implantisomd5",r={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.implantisomd5",title:"org.osbuild.implantisomd5",description:"Implant an MD5 checksum in an ISO9660 image",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.implantisomd5.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.implantisomd5",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.implantisomd5",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.implantisomd5.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.ignition",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ignition"},next:{title:"org.osbuild.isolinux",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.isolinux"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"orgosbuildimplantisomd5",children:"org.osbuild.implantisomd5"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Implant an MD5 checksum in an ISO9660 image"})}),"\n",(0,i.jsx)(s.p,{children:"This stage is using implantisomd5(1) to implant MD5 checksums into an iso\nimage. This is needed for the check media feature used in the installer."}),"\n",(0,i.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "filename"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "Path to where the iso to implant md5s is located."\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>r,a:()=>d});var i=o(7294);const n={},t=i.createContext(n);function d(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);