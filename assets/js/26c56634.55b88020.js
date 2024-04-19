"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[3700],{3930:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(5893),n=r(1151);const i={},o="Releasing",l={id:"developer-guide/general/releasing/index",title:"Releasing",description:"This guide describes the process of releasing osbuild and osbuild-composer to upstream, into Fedora and CentOS Stream.",source:"@site/docs/developer-guide/01-general/releasing/index.md",sourceDirName:"developer-guide/01-general/releasing",slug:"/developer-guide/general/releasing/",permalink:"/docs/developer-guide/general/releasing/",draft:!1,unlisted:!1,editUrl:"https://github.com/osbuild/saurus/tree/main/docs/developer-guide/01-general/releasing/index.md",tags:[],version:"current",frontMatter:{},sidebar:"developer",previous:{title:"Glossary",permalink:"/docs/developer-guide/general/glossary"},next:{title:"Backporting simple fixes",permalink:"/docs/developer-guide/general/releasing/backporting"}},a={},d=[{value:"Clone the release helpers",id:"clone-the-release-helpers",level:2},{value:"Upstream release",id:"upstream-release",level:2},{value:"Manual upstream release",id:"manual-upstream-release",level:3},{value:"Fedora release",id:"fedora-release",level:2},{value:"CentOS Stream / RHEL releases",id:"centos-stream--rhel-releases",level:2},{value:"Spreading the word on osbuild.org",id:"spreading-the-word-on-osbuildorg",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"releasing",children:"Releasing"}),"\n",(0,t.jsxs)(s.p,{children:["This guide describes the process of releasing osbuild and osbuild-composer to ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/osbuild",children:"upstream"}),", into ",(0,t.jsx)(s.a,{href:"https://src.fedoraproject.org/rpms/osbuild",children:"Fedora"})," and ",(0,t.jsx)(s.a,{href:"https://gitlab.com/redhat/centos-stream/rpms/osbuild",children:"CentOS Stream"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"clone-the-release-helpers",children:"Clone the release helpers"}),"\n",(0,t.jsxs)(s.p,{children:["Go to the ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/maintainer-tools",children:"maintainer-tools repository"}),", clone the repository and run ",(0,t.jsx)(s.code,{children:"pip install -r requirements.txt"})," in order to get all the dependencies to be able to execute the ",(0,t.jsx)(s.code,{children:"release.py"})," and ",(0,t.jsx)(s.code,{children:"update-distgit.py"})," scripts."]}),"\n",(0,t.jsxs)(s.p,{children:["It's also advised to set a GitHub personal access token, otherwise you might run into API usage quotas. Go to ",(0,t.jsx)(s.a,{href:"https://github.com/settings/tokens",children:"Personal access tokens"})," on GitHub and create a new token with scope ",(0,t.jsx)(s.code,{children:"public_repo"}),". Now, create a new packit user configuration at ",(0,t.jsx)(s.code,{children:"~/.config/packit.yaml"})," and paste there the following content:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"authentication:\n  github.com:\n    token: [YOUR_GITHUB_PERSONAL_ACCESS_TOKEN]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"upstream-release",children:"Upstream release"}),"\n",(0,t.jsxs)(s.p,{children:["Note: ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/release-action/tree/create-tag",children:"Upstream releases are done automatically"})," on a fortnightly alternating schedule, meaning one week we release osbuild and then the next week we release osbuild-composer."]}),"\n",(0,t.jsx)(s.h3,{id:"manual-upstream-release",children:"Manual upstream release"}),"\n",(0,t.jsxs)(s.p,{children:["Navigate to your local repository in your terminal and call the ",(0,t.jsx)(s.code,{children:"release.py"})," script. It will interactively take you through the following steps:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Gather all pull request titles merged to ",(0,t.jsx)(s.code,{children:"main"})," since the latest release tag"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Create a draft of the next release tag"}),"\n",(0,t.jsxs)(s.p,{children:["While writing the commit message, keep in mind that it needs to conform to both Markdown and git commit message formats, have a look at the commit message for one of the ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/osbuild-composer/tags",children:"recent releases"})," to get a clear idea how it should look like."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Push your signed git tag to ",(0,t.jsx)(s.code,{children:"main"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["From here on a ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/release-action",children:"GitHub composite action"})," will take over and"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Create a GitHub release based on the tag (version and message)"}),"\n",(0,t.jsxs)(s.li,{children:["Bump the version in ",(0,t.jsx)(s.code,{children:"osbuild.spec"})," or ",(0,t.jsx)(s.code,{children:"osbuild-composer.spec"})," (and potentially ",(0,t.jsx)(s.code,{children:"setup.py"}),")"]}),"\n",(0,t.jsxs)(s.li,{children:["Commit and push this change to ",(0,t.jsx)(s.code,{children:"main"})," so the version is already reflecting the next release"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"fedora-release",children:"Fedora release"}),"\n",(0,t.jsxs)(s.p,{children:["We use packit (see ",(0,t.jsx)(s.code,{children:".packit.yml"})," in the osbuild or osbuild-composer repository respectively or the ",(0,t.jsx)(s.a,{href:"https://packit.dev/docs/",children:"official packit documentation"}),") to automatically push new releases directly to ",(0,t.jsx)(s.a,{href:"https://src.fedoraproject.org/rpms/osbuild",children:"Fedora's dist-git"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Then our ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/fedora-bot",children:"fedora-bot"})," takes over and performs the remaining steps:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Get a kerberos ticket by running ",(0,t.jsx)(s.code,{children:"kinit $USER@FEDORAPROJECT.ORG"})]}),"\n",(0,t.jsxs)(s.li,{children:["Call ",(0,t.jsx)(s.code,{children:"fedpkg build"})," to schedule Koji builds for each active Fedora release (or: dist-git branch)"]}),"\n",(0,t.jsxs)(s.li,{children:["Update ",(0,t.jsx)(s.a,{href:"https://bodhi.fedoraproject.org/",children:"Bodhi"})," with the latest release"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"centos-stream--rhel-releases",children:"CentOS Stream / RHEL releases"}),"\n",(0,t.jsx)(s.p,{children:"If you are a Red Hat employee, please continue reading about this in our internal release guide."}),"\n",(0,t.jsx)(s.h2,{id:"spreading-the-word-on-osbuildorg",children:"Spreading the word on osbuild.org"}),"\n",(0,t.jsxs)(s.p,{children:["The last of releasing a new version is to create a new post on osbuild.org. Just open a PR in ",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/osbuild.github.io",children:"osbuild/osbuild.github.io"}),". You can find a lot of inspiration in existing release posts."]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,s,r)=>{r.d(s,{Z:()=>l,a:()=>o});var t=r(7294);const n={},i=t.createContext(n);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);