"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[940],{3955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(5893),s=t(1151);const o={},r="org.osbuild.tmpfilesd",d={id:"developer-guide/projects/osbuild/modules/stages/org.osbuild.tmpfilesd",title:"org.osbuild.tmpfilesd",description:"Create tmpfiles.d configuration.",source:"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.tmpfilesd.md",sourceDirName:"developer-guide/02-projects/osbuild/modules/stages",slug:"/developer-guide/projects/osbuild/modules/stages/org.osbuild.tmpfilesd",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.tmpfilesd",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.tmpfilesd.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"org.osbuild.timezone",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.timezone"},next:{title:"org.osbuild.truncate",permalink:"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.truncate"}},l={},c=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"orgosbuildtmpfilesd",children:"org.osbuild.tmpfilesd"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Create tmpfiles.d configuration."})}),"\n",(0,i.jsx)(n.p,{children:"This stage creates a tmpfiles.d configuration file with the given name in\n/usr/lib/tmpfiles.d. Provided list of configuration directives is written\nas separate lines into the configuration file. At least one configuration\ndirective must be specified."}),"\n",(0,i.jsx)(n.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "definitions": {\n    "configuration": {\n      "type": "object",\n      "additionalProperties": false,\n      "required": [\n        "type",\n        "path"\n      ],\n      "description": "tmpfiles.d configuration directive representing one line in the configuration.",\n      "properties": {\n        "type": {\n          "type": "string",\n          "description": "The file system path type.",\n          "pattern": "^([fwpLcbaA]\\\\+?|[dDevqQCxXrRzZtThH]){1}((!?-?)|(-?!?)){0,1}$"\n        },\n        "path": {\n          "type": "string",\n          "description": "Absolute file system path."\n        },\n        "mode": {\n          "type": "string",\n          "description": "The file access mode when creating the file or directory.",\n          "pattern": "^~?[0-7]{4}$"\n        },\n        "user": {\n          "type": "string",\n          "description": "The user to use for the file or directory."\n        },\n        "group": {\n          "type": "string",\n          "description": "The group to use for the file or directory."\n        },\n        "age": {\n          "type": "string",\n          "description": "Date field used to decide what files to delete when cleaning."\n        },\n        "argument": {\n          "type": "string",\n          "description": "Argument with its meaning being specific to the path type."\n        }\n      }\n    }\n  },\n  "additionalProperties": false,\n  "required": [\n    "filename",\n    "config"\n  ],\n  "properties": {\n    "filename": {\n      "type": "string",\n      "description": "Name of the tmpfiles.d configuration file to create.",\n      "pattern": "^[\\\\w.-]{1,250}\\\\.conf$"\n    },\n    "config": {\n      "additionalProperties": false,\n      "type": "array",\n      "description": "List of configuration directives written into the configuration file.",\n      "minItems": 1,\n      "items": {\n        "$ref": "#/definitions/configuration"\n      }\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var i=t(7294);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);