"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[5020],{3238:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>u});const o=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.test","title":"org.osbuild.test","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.test.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.test","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.test","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.test.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.test.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.tar","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.tar"},"next":{"title":"org.osbuild.timezone","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.timezone"}}');var r=t(4848),n=t(8453);const i={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.test.meta.json"},d="org.osbuild.test",l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"orgosbuildtest",children:"org.osbuild.test"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Enable osbuild Boot Test service"})}),"\n",(0,r.jsxs)(s.p,{children:["Creates a Boot Test service that executes the given ",(0,r.jsx)(s.code,{children:"script"})," (sending output to\n/dev/vport0p1) then immediately shuts down the system.\nCreates ",(0,r.jsx)(s.code,{children:"/etc/systemd/system/osbuild-test.service"}),", and a symlink to it in\n",(0,r.jsx)(s.code,{children:"/etc/systemd/system/multi-user.target.wants/"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "script"\n  ],\n  "properties": {\n    "script": {\n      "type": "string",\n      "description": "Full path to a script that verifies successful bootup"\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function a(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>d});var o=t(6540);const r={},n=o.createContext(r);function i(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);