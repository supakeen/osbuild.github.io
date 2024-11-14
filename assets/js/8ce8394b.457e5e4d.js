"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9977],{1246:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>a});const o=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.fillvar","title":"org.osbuild.ostree.fillvar","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.ostree.fillvar.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.fillvar","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.fillvar","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.fillvar.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.fillvar.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.ostree.encapsulate","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.encapsulate"},"next":{"title":"org.osbuild.ostree.genkey","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.ostree.genkey"}}');var r=s(4848),t=s(8453);const l={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.ostree.fillvar.meta.json"},i="org.osbuild.ostree.fillvar",d={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function u(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"orgosbuildostreefillvar",children:"org.osbuild.ostree.fillvar"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Pre-populate /var directory for a given stateroot."})}),"\n",(0,r.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "deployment"\n  ],\n  "properties": {\n    "deployment": {\n      "additionalProperties": false,\n      "oneOf": [\n        {\n          "properties": {\n            "default": {\n              "enum": [\n                false\n              ]\n            }\n          },\n          "required": [\n            "osname",\n            "ref"\n          ]\n        },\n        {\n          "properties": {\n            "default": {\n              "enum": [\n                true\n              ]\n            }\n          },\n          "not": {\n            "anyOf": [\n              {\n                "required": [\n                  "osname"\n                ]\n              },\n              {\n                "required": [\n                  "ref"\n                ]\n              },\n              {\n                "required": [\n                  "serial"\n                ]\n              }\n            ]\n          }\n        }\n      ],\n      "properties": {\n        "osname": {\n          "description": "Name of the stateroot to be used in the deployment",\n          "type": "string"\n        },\n        "ref": {\n          "description": "OStree ref to create and use for deployment",\n          "type": "string"\n        },\n        "serial": {\n          "description": "The deployment serial (usually \'0\')",\n          "type": "number",\n          "default": 0\n        },\n        "default": {\n          "description": "Find and use the default ostree deployment",\n          "type": "boolean",\n          "default": false\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var o=s(6540);const r={},t=o.createContext(r);function l(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);