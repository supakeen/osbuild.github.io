"use strict";(self.webpackChunksaurus=self.webpackChunksaurus||[]).push([[4039],{1164:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"developer-guide/projects/osbuild-composer/test/README","title":"osbuild-composer testing information","description":"\x3c!--","source":"@site/docs/developer-guide/02-projects/osbuild-composer/test/README.md","sourceDirName":"developer-guide/02-projects/osbuild-composer/test","slug":"/developer-guide/projects/osbuild-composer/test/","permalink":"/docs/developer-guide/projects/osbuild-composer/test/","draft":false,"unlisted":false,"editUrl":"https://github.com/osbuild/osbuild-composer/blob/main/test/README.md","tags":[],"version":"current","frontMatter":{"custom_edit_url":"https://github.com/osbuild/osbuild-composer/blob/main/test/README.md"},"sidebar":"developer","previous":{"title":"Local Cloud API Development","permalink":"/docs/developer-guide/projects/osbuild-composer/localcloud"},"next":{"title":"RPMrepo Snapshots","permalink":"/docs/developer-guide/projects/rpmrepo/"}}');var t=n(4848),r=n(8453);const o={custom_edit_url:"https://github.com/osbuild/osbuild-composer/blob/main/test/README.md"},l="osbuild-composer testing information",d={},c=[{value:"Golang tests",id:"golang-tests",level:2},{value:"Image tests",id:"image-tests",level:2},{value:"Setting up Azure upload tests",id:"setting-up-azure-upload-tests",level:3},{value:"Required flags",id:"required-flags",level:4},{value:"Setting up all the required resources",id:"setting-up-all-the-required-resources",level:4},{value:"Setting up GCP upload tests",id:"setting-up-gcp-upload-tests",level:3},{value:"Setting up OpenStack upload tests",id:"setting-up-openstack-upload-tests",level:3},{value:"Setting up VMware vCenter upload tests",id:"setting-up-vmware-vcenter-upload-tests",level:3},{value:"Cloud cleaner",id:"cloud-cleaner",level:3},{value:"Integration testing",id:"integration-testing",level:2},{value:"Weldr API integration testing",id:"weldr-api-integration-testing",level:3},{value:"Cloud API integration testing",id:"cloud-api-integration-testing",level:3},{value:"Setting up AWS integration tests",id:"setting-up-aws-integration-tests",level:4},{value:"Setting up GCP integration tests",id:"setting-up-gcp-integration-tests",level:4},{value:"Downstream testing notes",id:"downstream-testing-notes",level:2},{value:"QE associates/responsibilities matrix",id:"qe-associatesresponsibilities-matrix",level:2},{value:"Internal build testing in Gitlab CI",id:"internal-build-testing-in-gitlab-ci",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"osbuild-composer-testing-information",children:"osbuild-composer testing information"})}),"\n",(0,t.jsx)(s.p,{children:"With the exception of unit tests, all the osbuild-composer tests are shipped\nin a dedicated RPM: osbulid-composer-tests, and they are meant to be installed\nonto a pristine system and executed from there, rather than executed from a\ngit checkout."}),"\n",(0,t.jsxs)(s.p,{children:["Test cases are found in ",(0,t.jsx)(s.code,{children:"test/cases"}),". They are intended to be independent of\neach other and they are installed into ",(0,t.jsx)(s.code,{children:"/usr/libexec/tests/osbuild-composer/"}),",\nwith any supporting test-data in ",(0,t.jsx)(s.code,{children:"/usr/share/tests/osbuild-composer/"}),", and\nhelper binaries in ",(0,t.jsx)(s.code,{children:"/usr/libexec/osbuild-composer-test/"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Provisioning and orchestration of test-systems, as well as configuring what\ndistros, versions and architectures to test against is out of scope of the\ntests themselves. For osbuild-composer CI, schutzbot is used, which can be\nfound in the directory by the same name."}),"\n",(0,t.jsx)(s.h2,{id:"golang-tests",children:"Golang tests"}),"\n",(0,t.jsxs)(s.p,{children:["Test binaries, regardless of their scope/type (e.g. unit, API, integration)\nthat are written in Golang must follow the syntax of the Go\n",(0,t.jsx)(s.a,{href:"https://golang.org/pkg/testing/",children:"testing package"}),", that is implement only\n",(0,t.jsx)(s.code,{children:"TestXxx"})," functions with their setup/teardown when necessary in a ",(0,t.jsx)(s.code,{children:"yyy_test.go"}),"\nfile."]}),"\n",(0,t.jsxs)(s.p,{children:["Test scenario discovery, execution and reporting will be handled by ",(0,t.jsx)(s.code,{children:"go test"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Some test files will be executed directly by ",(0,t.jsx)(s.code,{children:"go test"})," during rpm build time\nand/or in CI. These are usually unit tests. Scenarios which require more complex\nsetup, e.g. a running osbuild-composer are not intented to be executed directly\nby ",(0,t.jsx)(s.code,{children:"go test"})," at build time. Instead they are intended to be executed as\nstand-alone test binaries on a clean system which has been configured in\nadvance (because this is easier/more feasible). These stand-alone test binaries\nare also compiled via ",(0,t.jsx)(s.code,{children:"go test -c -o"})," during rpm build or via ",(0,t.jsx)(s.code,{children:"make build"}),".\nSee ",(0,t.jsx)(s.em,{children:"Integration testing"})," for more information."]}),"\n",(0,t.jsxs)(s.p,{children:["When comparing for expected values in test functions you should use the\n",(0,t.jsx)(s.a,{href:"https://godoc.org/github.com/stretchr/testify/assert",children:"testify/assert"})," or\n",(0,t.jsx)(s.a,{href:"https://godoc.org/github.com/stretchr/testify/require",children:"testify/require"}),"\npackages. Both of them provide an impressive array of assertions with the\npossibility to use formatted strings as error messages. For example:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'assert.Nilf(t, err, "Failed to set up temporary repository: %v", err)\n'})}),"\n",(0,t.jsxs)(s.p,{children:["If you want to fail immediately, not doing any more of the asserts use the\n",(0,t.jsx)(s.code,{children:"require"})," package instead of the ",(0,t.jsx)(s.code,{children:"assert"})," package, otherwise you'll end up with\npanics and nil pointer memory problems."]}),"\n",(0,t.jsxs)(s.p,{children:["Stand-alone test binaries also have the ",(0,t.jsx)(s.code,{children:"-test.failfast"})," option."]}),"\n",(0,t.jsxs)(s.p,{children:["Code coverage is recorded in\n",(0,t.jsx)(s.a,{href:"https://codecov.io/github/osbuild/osbuild-composer",children:"codecov.io"}),".\nThis information comes only from unit tests and for the time being\nwe're not concerned with collecting coverage information from integration\ntests, see ",(0,t.jsx)(s.code,{children:".github/workflows/tests.yml"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"image-tests",children:"Image tests"}),"\n",(0,t.jsxs)(s.p,{children:["The distributions and images are defined in a separate repository at\n",(0,t.jsx)(s.a,{href:"https://github.com/osbuild/images",children:"https://github.com/osbuild/images"}),". When making changes in that repository, you\nmay want to test them against osbuild-composer. You can update the vendored\ncode for osbuild/images as follows:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"go mod edit -replace github.com/osbuild/images=<path to your local checkout of osbuild/images>\n./tools/prepare-source.sh\n"})}),"\n",(0,t.jsx)(s.p,{children:"Alternatively, you can also use a remote fork/branch of the code:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"go mod edit -replace github.com/osbuild/images=github.com/username>/images@<commit\n./tools/prepare-source.sh\n"})}),"\n",(0,t.jsx)(s.p,{children:"Using the URL of the remote fork and branch will allow you to open a test PR\nand run the osbuild-composer integration tests against your updated code."}),"\n",(0,t.jsxs)(s.p,{children:["Make sure you modify any code in osbuild-composer to adapt to the changes in\nthe images repository. The images API is not considered stable and changes can\noccur frequently. A good quick check that everything compiles and ",(0,t.jsx)(s.em,{children:"mostly"})," runs\ncorrectly is by running the unit tests:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"go test ./...\n"})}),"\n",(0,t.jsx)(s.p,{children:"and some static checks:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"go vet ./...\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The changes to the ",(0,t.jsx)(s.code,{children:"go.mod"}),", ",(0,t.jsx)(s.code,{children:"go.sum"}),", and ",(0,t.jsx)(s.code,{children:"vendor/"})," directory should be added\nin a separate commit from any other changes. The PR should not be merged with\nthe ",(0,t.jsx)(s.code,{children:"replace"})," command in place."]}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.code,{children:"test/data/manifests"})," directory, sample image manifests are collected\nfor the various distros, architectures, configuration we support."]}),"\n",(0,t.jsx)(s.p,{children:"Each file contains a sample manifest for an image configuration and some\nmetadata describing the request that created the manifest and all the content\n(packages, containers, ostree commits)."}),"\n",(0,t.jsxs)(s.p,{children:["To (re)generate these test cases use the tool ",(0,t.jsx)(s.code,{children:"cmd/gen-manifests"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"go run ./cmd/gen-manifests\n"})}),"\n",(0,t.jsx)(s.p,{children:"will generate all manifests using the default options."}),"\n",(0,t.jsx)(s.p,{children:"Manifest generation can be restricted to only some distributions,\narchitectures, or image types using command line flags."}),"\n",(0,t.jsxs)(s.p,{children:["The command uses the configurations in\n",(0,t.jsx)(s.code,{children:"tools/test-case-generators/format-request-map.json"})," and repositories defined\nin ",(0,t.jsx)(s.code,{children:"tools/test-case-generators/repos.json"}),"."]}),"\n",(0,t.jsx)(s.h3,{id:"setting-up-azure-upload-tests",children:"Setting up Azure upload tests"}),"\n",(0,t.jsx)(s.p,{children:"By default, the vhd images are run locally using qemu. However, when\nthe right set of environment flags is passed to the osbuild-image-tests,\nit uploads the image to Azure, boots it and tries to ssh into it."}),"\n",(0,t.jsx)(s.h4,{id:"required-flags",children:"Required flags"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_STORAGE_ACCOUNT"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_STORAGE_ACCESS_KEY"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_CONTAINER_NAME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_SUBSCRIPTION_ID"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"V2_AZURE_CLIENT_ID"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"V2_AZURE_CLIENT_SECRET"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_TENANT_ID"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_LOCATION"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AZURE_RESOURCE_GROUP"})}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"setting-up-all-the-required-resources",children:"Setting up all the required resources"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Firstly, go to ",(0,t.jsx)(s.em,{children:"Subscriptions"})," in the left-side menu. Here you can find\nthe ",(0,t.jsx)(s.code,{children:"AZURE_SUBSCRIPTION_ID"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now, you need to create a new resource group. In the left-side menu,\nselect ",(0,t.jsx)(s.em,{children:"Resource groups"}),". Click on ",(0,t.jsx)(s.em,{children:"Add"})," above the resource group list.\nThe name you choose is your ",(0,t.jsx)(s.code,{children:"AZURE_RESOURCE_GROUP"}),". The region you choose\nis your ",(0,t.jsx)(s.code,{children:"AZURE_LOCATION"}),'. However, it must be in the "machine-readable\nform". You can list all the locations with their machine-readable names\nusing Azure CLI: ',(0,t.jsx)(s.code,{children:"az account list-locations -o table"}),".\nE.g. the machine-readable name of US East location is ",(0,t.jsx)(s.code,{children:"eastus"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Note that terms ",(0,t.jsx)(s.em,{children:"location"})," and ",(0,t.jsx)(s.em,{children:"region"})," are synonyms in Azure's context."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Storage time! Go to Storage accounts in the left-side menu. Click on\n",(0,t.jsx)(s.em,{children:"Add"})," above the list. Use the resource group you created in\nthe previous step. Also, the region should be the same. The name you\nchoose is your ",(0,t.jsx)(s.code,{children:"AZURE_STORAGE_ACCOUNT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["After the storage account is created, open it.\nSelect ",(0,t.jsx)(s.em,{children:"Settings > Access keys"}),". Choose one of the keys, this is your\n",(0,t.jsx)(s.code,{children:"AZURE_STORAGE_ACCESS_KEY"}),". Select ",(0,t.jsx)(s.em,{children:"Blob service > Containers"})," and create\na new one. Its name is your ",(0,t.jsx)(s.code,{children:"AZURE_CONTAINER_NAME"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Now it\u2019s time to create an application. This is needed because Azure uses\nOAuth to do authorization. In the left-side menu, choose ",(0,t.jsx)(s.em,{children:"Azure Active\nDirectory"}),". Go to ",(0,t.jsx)(s.em,{children:"Manage > App registrations"})," and register a new\napplication."]}),"\n",(0,t.jsxs)(s.p,{children:["When it\u2019s created, open it. In the overview, you can see\nthe Application (client) ID and the Directory (tenant) ID. These are your\n",(0,t.jsx)(s.code,{children:"V2_AZURE_CLIENT_ID"})," and ",(0,t.jsx)(s.code,{children:"AZURE_TENANT_ID"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Now, go to ",(0,t.jsx)(s.em,{children:"Manage > Certificates & Secrets"})," under your new application\nand create a new client secret. The is your ",(0,t.jsx)(s.code,{children:"V2_AZURE_CLIENT_SECRET"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["The last step is to give the new application access to the resource group.\nThis step must be done by Azure administrator (@larskarlitski): Go to\nthe ",(0,t.jsx)(s.em,{children:"Access control (IAM)"})," section under the newly created resource group.\nHere, add the new application with the ",(0,t.jsx)(s.em,{children:"Developer"})," role."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"setting-up-gcp-upload-tests",children:"Setting up GCP upload tests"}),"\n",(0,t.jsx)(s.p,{children:"The following environment variables are required"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GCP_BUCKET"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GCP_REGION"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"setting-up-openstack-upload-tests",children:"Setting up OpenStack upload tests"}),"\n",(0,t.jsx)(s.p,{children:"The following environment variables are required"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"OS_AUTH_URL"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"OS_USERNAME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"OS_PASSWORD"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"OS_PROJECT_ID"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"OS_DOMAIN_NAME"})}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"setting-up-vmware-vcenter-upload-tests",children:"Setting up VMware vCenter upload tests"}),"\n",(0,t.jsx)(s.p,{children:"The following environment variables are required"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GOVC_URL"})," - vCenter hostname"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_USERNAME"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_PASSWORD"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_DATACENTER"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_CLUSTER"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_NETWORK"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_DATASTORE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GOVC_FOLDER"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GOVC_INSECURE"})," - value of 1 will skip checking SSL certificates"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"WARNING:"})," when configuring the credentials for Schutzbot we've experienced\nan issue where the first line in the credentials file gets lost resulting in\nincomplete credentials. The work-around is to define a dummy ENV variable on\nthe first line!"]}),"\n",(0,t.jsx)(s.h3,{id:"cloud-cleaner",children:"Cloud cleaner"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/osbuild/cloud-cleaner",children:"Cloud cleaner"})," is a tool designed to clean leftover cloud resources in order to reduce our costs."]}),"\n",(0,t.jsx)(s.p,{children:"Some tests deploy images to different clouds. After the tests run, these images get removed by the same tests. But if something fails during these, or a pipeline gets canceled, those images could get left behind in the cloud, wasting resources."}),"\n",(0,t.jsxs)(s.p,{children:["Cloud cleaner is being executed every hour (on the CI of it's own repo), and it cleans resources that are not tagged with ",(0,t.jsx)(s.code,{children:"persist=true"})]}),"\n",(0,t.jsx)(s.h2,{id:"integration-testing",children:"Integration testing"}),"\n",(0,t.jsxs)(s.p,{children:["Since ",(0,t.jsx)(s.code,{children:"osbuild-composer"})," externally provides two types of API, there also\nmultiple types of integration tests available."]}),"\n",(0,t.jsx)(s.p,{children:"Types of APIs tested:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Weldr API"})," - the original API provided by ",(0,t.jsx)(s.code,{children:"lorax-composer"}),", for which\n",(0,t.jsx)(s.code,{children:"osbuild-composer"})," is a drop-in replacement. This API is mostly tested through\nthe ",(0,t.jsx)(s.code,{children:"composer-cli"})," tool, which consumes the ",(0,t.jsx)(s.em,{children:"Weldr API"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.em,{children:"Cloud API"})," - the brand new API provided by ",(0,t.jsx)(s.code,{children:"osbuild-composer"}),", which is\ncurrently used by the ",(0,t.jsx)(s.em,{children:"Image Builder"})," service."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"weldr-api-integration-testing",children:"Weldr API integration testing"}),"\n",(0,t.jsxs)(s.p,{children:["This will consume the osbuild-composer ",(0,t.jsx)(s.em,{children:"Weldr API"})," surface via the ",(0,t.jsx)(s.code,{children:"composer-cli"}),"\ncommand line interface. Implementation is under\n",(0,t.jsx)(s.code,{children:"cmd/osbuild-composer-cli-tests/"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"The easiest way to get started with integration testing from a git\ncheckout is:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"dnf -y install rpm-build"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"dnf -y builddep osbuild-composer.spec"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"make rpm"})," to build the software under test"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dnf install rpmbuild/RPMS/x86_64/osbuild-composer-*.rpm"})," - this will\ninstall both osbuild-composer, its -debuginfo, -debugsource and -tests packages"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"systemctl start osbuild-composer"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/usr/libexec/osbuild-composer-test/osbuild-composer-cli-tests"})," to execute\nthe test suite."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"It is best that you use a fresh system for installing and running the tests!"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE:"})}),"\n",(0,t.jsx)(s.p,{children:"The easiest way to start osbuild-composer is via systemd because it takes care\nof setting up the UNIX socket for the API server."}),"\n",(0,t.jsx)(s.p,{children:"If you are working on a pull request that adds more integration tests\n(without modifying osbuild-composer itself) then you can execute the test suite\nfrom the local directory without installing it:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"make build"})," - will build everything under ",(0,t.jsx)(s.code,{children:"cmd/"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"./osbuild-composer-cli-tests"})," - will execute the freshly built integration test suite"]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"cloud-api-integration-testing",children:"Cloud API integration testing"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"Cloud API"})," integration tests use the new REST API of ",(0,t.jsx)(s.code,{children:"osbuild-composer"})," to request\nan image build for a selected footprint. If the target is a public cloud environment\nthen the image is uploaded to the specific cloud provider as part of the compose."]}),"\n",(0,t.jsx)(s.p,{children:"The easiest way to get started with integration testing from a git\ncheckout is:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"dnf -y install rpm-build"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"dnf -y builddep osbuild-composer.spec"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"make rpm"})," to build the software under test"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"dnf install rpmbuild/RPMS/x86_64/osbuild-composer-*.rpm"})," - this will\ninstall both osbuild-composer, its -debuginfo, -debugsource and -tests packages"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"systemctl start osbuild-composer"})}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"/usr/libexec/tests/osbuild-composer/api.sh <CLOUD_PROVIDER>"})," to execute\nthe integration testing with a specific cloud provider. Valid ",(0,t.jsx)(s.code,{children:"CLOUD_PROVIDER"}),"\nvalues are ",(0,t.jsx)(s.code,{children:"aws"})," and ",(0,t.jsx)(s.code,{children:"gcp"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"It is best that you use a fresh system for installing and running the tests!"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.em,{children:"Cloud API"})," integration testing usually consists from:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Test existing ",(0,t.jsx)(s.em,{children:"Cloud API"})," endpoints and their responses."]}),"\n",(0,t.jsx)(s.li,{children:"Request a new compose."}),"\n",(0,t.jsx)(s.li,{children:"Test uploading of the image to specific cloud provider and sharing\nof the image with specified accounts."}),"\n",(0,t.jsxs)(s.li,{children:["Optionally there are additional tests performed on the image, such as:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Create a VM instance with the cloud provider and uploaded image."}),"\n",(0,t.jsx)(s.li,{children:"Run various checks on the VM instance."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"The last step is cleanup of resources uploaded and created with the cloud provider\nas part of the integration test."}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"setting-up-aws-integration-tests",children:"Setting up AWS integration tests"}),"\n",(0,t.jsx)(s.p,{children:"The following environment variables are required"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AWS_REGION"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AWS_BUCKET"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"V2_AWS_ACCESS_KEY_ID"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"V2_AWS_SECRET_ACCESS_KEY"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"AWS_API_TEST_SHARE_ACCOUNT"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To execute the AWS integration tests, complete steps from ",(0,t.jsx)(s.em,{children:"Cloud API integration testing"}),"\nsection and run ",(0,t.jsx)(s.code,{children:"/usr/libexec/tests/osbuild-composer/api.sh aws"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"setting-up-gcp-integration-tests",children:"Setting up GCP integration tests"}),"\n",(0,t.jsx)(s.p,{children:"The following environment variables are required:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"GOOGLE_APPLICATION_CREDENTIALS"})," - path to ",(0,t.jsx)(s.a,{href:"https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable",children:"Google authentication credentials"})," file."]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GCP_REGION"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GCP_BUCKET"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"GCP_API_TEST_SHARE_ACCOUNT"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["To execute the GCP integration tests, complete steps from ",(0,t.jsx)(s.em,{children:"Cloud API integration testing"}),"\nsection and run ",(0,t.jsx)(s.code,{children:"/usr/libexec/tests/osbuild-composer/api.sh gcp"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"downstream-testing-notes",children:"Downstream testing notes"}),"\n",(0,t.jsx)(s.p,{children:"To make it easier for us to test & verify downstream builds we are going to\nmove most of the work upstream and apply the following rules:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Preferably the 1st commit of any PR will contain a bug reproducer.\nFirst push a draft PR only containing that commit which will cause CI to FAIL."}),"\n",(0,t.jsx)(s.li,{children:"QE will review and approve the reproducer (can happen in parallel with next item)"}),"\n",(0,t.jsx)(s.li,{children:"Subsequent commits provide bug fixes without modifying the reproducer and\nCI reports PASS. Push these on top of the approved reproducer."}),"\n",(0,t.jsxs)(s.li,{children:["QE has done final review and approved the PR; RHBZ status is set to\n",(0,t.jsx)(s.code,{children:"MODIFIED + Verified=Tested"})]}),"\n",(0,t.jsx)(s.li,{children:"Devel has done final review and approved the PR"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTES for devel:"})}),"\n",(0,t.jsx)(s.p,{children:"Pull requests related to new functionality may add their\nautomated tests together or after commit(s) adding said functionality!"}),"\n",(0,t.jsxs)(s.p,{children:["All PRs containing commits referencing ",(0,t.jsx)(s.code,{children:"rhbz#"})," number and/or\nall PRs against a dedicated ",(0,t.jsx)(s.code,{children:"rhel-"})," branch should follow the above rules!"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"NOTE for QE:"})}),"\n",(0,t.jsx)(s.p,{children:"CI results are also reported against each commit and these\ncan be used to review the test automation state during a PR lifecycle."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"qa_ack+"})," on RHBZ will be granted ",(0,t.jsx)(s.strong,{children:"after"})," a reproducer has been\nidentified and with the mutual understanding that PRs related to\nthat RHBZ must include an automated test reproducer. A good example is\n",(0,t.jsx)(s.a,{href:"https://bugzilla.redhat.com/show_bug.cgi?id=1951192#c3",children:"BZ #1951192"})," while\na bad example is\n",(0,t.jsx)(s.a,{href:"https://bugzilla.redhat.com/show_bug.cgi?id=1942029#c0",children:"BZ #1942029"})," b/c\nis is missing lots of details!"]}),"\n",(0,t.jsx)(s.h2,{id:"qe-associatesresponsibilities-matrix",children:"QE associates/responsibilities matrix"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/atodorov",children:"@atodorov"})," - QE lead;\nosbuild, osbuild-composer, weldr-client, composer-cli, image-builder, image-builder-frontend,\nbug testing & verification, anything else"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/jrusz",children:"@jrusz"})," - testing across the board; backup for @atodorov;\nosbuild, osbuild-composer, weldr-client, composer-cli, image-builder, image-builder-frontend,\nbug testing & verification, anything else"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/henrywang",children:"@henrywang"})," - everything related to testing RHEL for Edge images"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/yih-redhat",children:"@yih-redhat"})," - everything related to testing RHEL for Edge images;\nbackup for @henrywang"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"internal-build-testing-in-gitlab-ci",children:"Internal build testing in Gitlab CI"}),"\n",(0,t.jsx)(s.p,{children:"In Gitlab CI we're using rules to define which stages and jobs are ran when. For running the test\nsuite on internal RHEL builds we're using schedules that run the test suite on latest nightly using\nthe rpms that are shipped with it."}),"\n",(0,t.jsxs)(s.p,{children:["We're using a link to latest nightly build. It's possible to manually override it with ",(0,t.jsx)(s.code,{children:"COMPOSE_URL"}),"\nto use a different build instead.\nThis variable can be changed in the pipeline schedule settings. It is advised to create\na new schedule if you want to try something or change the value, set it as inactive and then\njust trigger it manually."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/osbuild/osbuild-composer/tree/main/test/gitlab_ci_scheduled_pipeline.png",alt:"'Create pipeline schedule'"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{src:"https://github.com/osbuild/osbuild-composer/tree/main/test/gitlab_ci_schedule_trigger.png",alt:"'Trigger scheduled pipeline'"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var i=n(6540);const t={},r=i.createContext(t);function o(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);