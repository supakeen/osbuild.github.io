"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[9189],{2579:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>t,toc:()=>u});const t=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit","title":"org.osbuild.systemd.unit","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.systemd.unit.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.unit.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.unit.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.systemd.unit.create","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.unit.create"},"next":{"title":"org.osbuild.tar","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.tar"}}');var i=s(4848),o=s(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.unit.meta.json"},d="org.osbuild.systemd.unit",l={},u=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"orgosbuildsystemdunit",children:"org.osbuild.systemd.unit"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Configure Systemd services via unit file dropins"})}),"\n",(0,i.jsxs)(n.p,{children:["This stage allows to create Systemd unit drop-in configuration files in\n",(0,i.jsx)(n.code,{children:"/usr/lib/systemd/system/\\<unit_name\\>.d/"}),". The ",(0,i.jsx)(n.code,{children:"unit"})," property specifies the\n'.service' file to be modified using the drop-ins. These names are validated\nusing the same rules as specified by systemd.unit(5) and they must contain the\n'.service' suffix (other types of unit files are not supported).\nThe ",(0,i.jsx)(n.code,{children:"filename"})," must end in ",(0,i.jsx)(n.code,{children:".conf"})," and specifies the name to use for the\ndrop-in file.\nThe Drop-in configuration can currently specify the following subset\nof options:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["'Service' section","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"'Environment' option"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "required": [\n    "unit",\n    "dropin",\n    "config"\n  ],\n  "properties": {\n    "unit": {\n      "type": "string",\n      "pattern": "^[\\\\w:.\\\\\\\\-]+[@]{0,1}[\\\\w:.\\\\\\\\-]*\\\\.(service|timer)$"\n    },\n    "dropin": {\n      "type": "string",\n      "pattern": "^[\\\\w.-]{1,250}\\\\.conf$"\n    },\n    "config": {\n      "additionalProperties": false,\n      "type": "object",\n      "description": "Drop-in configuration for a \'.service\' unit.",\n      "properties": {\n        "Unit": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Unit\' configuration section of a unit file.",\n          "properties": {\n            "ConditionPathExists": {\n              "type": "string",\n              "description": "Check for the existence of a file. If the specified absolute path name does not exist, the condition will fail."\n            }\n          }\n        },\n        "Service": {\n          "additionalProperties": false,\n          "type": "object",\n          "description": "\'Service\' configuration section of a unit file.",\n          "properties": {\n            "Environment": {\n              "description": "Sets environment variables for executed process.",\n              "oneOf": [\n                {\n                  "type": "string"\n                },\n                {\n                  "type": "array",\n                  "items": {\n                    "type": "object",\n                    "additionalProperties": false,\n                    "properties": {\n                      "key": {\n                        "type": "string",\n                        "pattern": "^[A-Za-z_][A-Za-z0-9_]*"\n                      },\n                      "value": {\n                        "type": "string"\n                      }\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      }\n    },\n    "unit-type": {\n      "type": "string",\n      "enum": [\n        "system",\n        "global"\n      ],\n      "default": "system",\n      "description": "Selects between systemd system or global unit to add dropin"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function a(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var t=s(6540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);