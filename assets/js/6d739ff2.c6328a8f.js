"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[7136],{6530:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var r=o(5893),n=o(1151);const t={},i="org.osbuild.rpm.macros",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.rpm.macros",title:"org.osbuild.rpm.macros",description:"Persistently set RPM macros",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.rpm.macros.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.rpm.macros",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rpm.macros",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.rpm.macros.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.rpm-ostree",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rpm-ostree"},next:{title:"org.osbuild.rpm",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.rpm"}},l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"orgosbuildrpmmacros",children:"org.osbuild.rpm.macros"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Persistently set RPM macros"})}),"\n",(0,r.jsx)(s.p,{children:"Stage to be able to set a selection of RPM macros."}),"\n",(0,r.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "macros",\n    "filename"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "Path to the macro file."\n    },\n    "macros": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "macros to configure",\n      "minProperties": 1,\n      "properties": {\n        "_install_langs": {\n          "description": "Only install the specified locales.",\n          "type": "array",\n          "minItems": 1,\n          "uniqueItems": true,\n          "items": {\n            "type": "string"\n          }\n        },\n        "_dbpath": {\n          "description": "Specify the rpm database path.",\n          "type": "string"\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,o)=>{o.d(s,{Z:()=>d,a:()=>i});var r=o(7294);const n={},t=r.createContext(n);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);