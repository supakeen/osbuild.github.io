"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[35],{394:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>n,toc:()=>a});const n=JSON.parse('{"id":"developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd","title":"org.osbuild.systemd","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild/modules/stages/org.osbuild.systemd.md","sourceDirName":"developer-guide/02-projects/osbuild/modules/stages","slug":"/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.meta.json","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.meta.json"},"sidebar":"developer","previous":{"title":"org.osbuild.systemd-logind","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd-logind"},"next":{"title":"org.osbuild.systemd.preset","permalink":"/docs/developer-guide/projects/osbuild/modules/stages/org.osbuild.systemd.preset"}}');var i=t(4848),o=t(8453);const r={custom_edit_url:"https://github.com/osbuild/osbuild/tree/main/stages/org.osbuild.systemd.meta.json"},d="org.osbuild.systemd",l={},a=[{value:"Schema 1",id:"schema-1",level:2},{value:"Schema 2",id:"schema-2",level:2}];function c(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"orgosbuildsystemd",children:"org.osbuild.systemd"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Configure Systemd services."})}),"\n",(0,i.jsxs)(s.p,{children:["Enable, disable or mask systemd units (service, socket, path, etc.) by running\n",(0,i.jsx)(s.code,{children:"systemctl"})," from the buildhost.\nThis stage runs ",(0,i.jsx)(s.code,{children:"systemctl enable"})," for all ",(0,i.jsx)(s.code,{children:"enabled_services"})," items, which may\ncreate symlinks under ",(0,i.jsx)(s.code,{children:"/etc/systemd/system"}),".\nAfter enabling units, it runs ",(0,i.jsx)(s.code,{children:"systemctl disable"})," for all ",(0,i.jsx)(s.code,{children:"disabled_services"}),"\nitems, which will delete ",(0,i.jsx)(s.em,{children:"all"})," symlinks to the named services.\nThe 'default_target' option allows to configure the default Systemd target.\nThe 'unit_dropins' option allows to create Systemd unit drop-in configuration\nfiles in ",(0,i.jsx)(s.code,{children:"/usr/lib/systemd/system/\\<unit_name\\>.d/"}),". Its properties are names of\n'.service' files to be modified using drop-ins. These names are validated using\nthe same rules as specified by systemd.unit(5) and they must contain the\n'.service' suffix (other types of unit files are not supported). Value of each\nspecified '.service' file is an object, which properties are names of drop-in\nconfiguration '.conf' files. Drop-in configuration files can currently specify\nthe following subset of options:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["'Service' section","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"'Environment' option"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"schema-1",children:"Schema 1"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:'{\n  "additionalProperties": false,\n  "properties": {\n    "enabled_services": {\n      "type": "array",\n      "items": {\n        "type": "string"\n      },\n      "description": "Array of systemd unit names to be enabled"\n    },\n    "disabled_services": {\n      "type": "array",\n      "items": {\n        "type": "string"\n      },\n      "description": "Array of systemd unit names to be enabled"\n    },\n    "masked_services": {\n      "type": "array",\n      "items": {\n        "type": "string"\n      },\n      "description": "Array of systemd unit names to be masked"\n    },\n    "masked_generators": {\n      "type": "array",\n      "items": {\n        "type": "string"\n      },\n      "description": "Array of systemd generators to be masked"\n    },\n    "default_target": {\n      "type": "string",\n      "description": "The default target to boot into"\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(s.h2,{id:"schema-2",children:"Schema 2"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-json",children:"{}\n"})})]})}function u(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>d});var n=t(6540);const i={},o=n.createContext(i);function r(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);