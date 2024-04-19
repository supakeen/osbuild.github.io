"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[6022],{1350:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(5893),r=n(1151);const o={},t="Basic concepts",c={id:"on-premises/overview/basic-concepts",title:"Basic concepts",description:"osbuild-composer works with a concept of blueprints. A blueprint is a description of the final image and its customizations. A customization can be:",source:"@site/docs/on-premises/00-overview/01-basic-concepts.md",sourceDirName:"on-premises/00-overview",slug:"/on-premises/overview/basic-concepts",permalink:"/docs/on-premises/overview/basic-concepts",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/on-premises/00-overview/01-basic-concepts.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"onPremises",previous:{title:"Overview",permalink:"/docs/on-premises/overview/"},next:{title:"Releases",permalink:"/docs/on-premises/overview/release-overview"}},a={},l=[{value:"Example blueprint",id:"example-blueprint",level:2},{value:"Image types",id:"image-types",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"basic-concepts",children:"Basic concepts"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"osbuild-composer"})," works with a concept of ",(0,i.jsx)(s.strong,{children:"blueprints"}),". A blueprint is a description of the final ",(0,i.jsx)(s.strong,{children:"image"})," and its ",(0,i.jsx)(s.strong,{children:"customizations"}),". A ",(0,i.jsx)(s.strong,{children:"customization"})," can be:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"an additional RPM package"}),"\n",(0,i.jsx)(s.li,{children:"enabled service"}),"\n",(0,i.jsxs)(s.li,{children:["custom kernel command line parameter, and many others. See ",(0,i.jsx)(s.a,{href:"../../user-guide/blueprint-reference",children:"Blueprint"})," reference for more details."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["An ",(0,i.jsx)(s.strong,{children:"image"})," is defined by its blueprint and ",(0,i.jsx)(s.strong,{children:"image type"}),", which is for example ",(0,i.jsx)(s.code,{children:"qcow2"})," (QEMU Copy On Write disk image) or ",(0,i.jsx)(s.code,{children:"AMI"})," (Amazon Machine Image)."]}),"\n",(0,i.jsxs)(s.p,{children:["Finally, ",(0,i.jsx)(s.code,{children:"osbuild-composer"})," also supports ",(0,i.jsx)(s.strong,{children:"upload targets"}),", which are cloud providers where an image can be stored after it is built. See the ",(0,i.jsx)(s.a,{href:"../../user-guide/uploading-cloud-images/",children:"Uploading cloud images"})," section for more details."]}),"\n",(0,i.jsx)(s.h2,{id:"example-blueprint",children:"Example blueprint"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-toml",children:'name = "base-image-with-tmux"\ndescription = "A base system with tmux"\nversion = "0.0.1"\n\n[[packages]]\nname = "tmux"\nversion = "*"\n'})}),"\n",(0,i.jsxs)(s.p,{children:["The blueprint is in ",(0,i.jsx)(s.a,{href:"https://toml.io/en/",children:"TOML format"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"image-types",children:"Image types"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"osbuild-composer"})," supports various types of output images. To see all supported types, run this command:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"$ composer-cli compose types\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var i=n(7294);const r={},o=i.createContext(r);function t(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);