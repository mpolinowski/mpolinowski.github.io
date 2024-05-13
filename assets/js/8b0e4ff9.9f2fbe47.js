"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[72609],{724423:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=t(474848),s=t(28453);const a={sidebar_position:9060,slug:"2019-01-21",title:"Kubernetes Bare Metal Ingress",authors:"mpolinowski",tags:["LINUX","Docker","Kubernetes"]},o=void 0,i={id:"DevOps/Kubernetes/2019-01-21--kubernetes-bare-metal-ingress/index",title:"Kubernetes Bare Metal Ingress",description:"Victoria Harbour, Hongkong",source:"@site/docs/DevOps/Kubernetes/2019-01-21--kubernetes-bare-metal-ingress/index.mdx",sourceDirName:"DevOps/Kubernetes/2019-01-21--kubernetes-bare-metal-ingress",slug:"/DevOps/Kubernetes/2019-01-21--kubernetes-bare-metal-ingress/2019-01-21",permalink:"/docs/DevOps/Kubernetes/2019-01-21--kubernetes-bare-metal-ingress/2019-01-21",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/DevOps/Kubernetes/2019-01-21--kubernetes-bare-metal-ingress/index.mdx",tags:[{label:"LINUX",permalink:"/docs/tags/linux"},{label:"Docker",permalink:"/docs/tags/docker"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",sidebarPosition:9060,frontMatter:{sidebar_position:9060,slug:"2019-01-21",title:"Kubernetes Bare Metal Ingress",authors:"mpolinowski",tags:["LINUX","Docker","Kubernetes"]},sidebar:"tutorialSidebar",previous:{title:"Kubernetes NGINX https Service",permalink:"/docs/DevOps/Kubernetes/2019-01-21--kubernetes-nginx-https-service/2019-01-21"},next:{title:"Kubernetes Cluster Monitoring & Logging",permalink:"/docs/DevOps/Kubernetes/2019-01-19--kubernetes-cluster-logging/2019-01-19"}},l={},d=[{value:"Bare-metal considerations",id:"bare-metal-considerations",level:2},{value:"Network Load-balancer MetalLB",id:"network-load-balancer-metallb",level:2},{value:"Installation With Kubernetes Manifests",id:"installation-with-kubernetes-manifests",level:3},{value:"MetalLB Configuration",id:"metallb-configuration",level:3},{value:"Layer 2 Configuration",id:"layer-2-configuration",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Victoria Harbour, Hongkong",src:t(504074).A+"",width:"1500",height:"704"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#bare-metal-considerations",children:"Bare-metal considerations"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#network-load-balancer-metallb",children:"Network Load-balancer MetalLB"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#installation-with-kubernetes-manifests",children:"Installation With Kubernetes Manifests"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#metallb-configuration",children:"MetalLB Configuration"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#layer-2-configuration",children:"Layer 2 Configuration"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:'DRAFT - this article is still undergoing some "research"...'}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"bare-metal-considerations",children:"Bare-metal considerations"}),"\n",(0,r.jsxs)(n.p,{children:["In traditional cloud environments, where network load balancers are available on-demand, a single Kubernetes manifest suffices to provide a single point of contact to the NGINX Ingress controller to external clients and, indirectly, to any application running inside the cluster. ",(0,r.jsx)(n.a,{href:"https://kubernetes.github.io/ingress-nginx/deploy/baremetal/",children:"Bare-metal environments"})," lack this commodity, requiring a slightly different setup to offer the same kind of access to external consumers. The rest of this article describes a few recommended approaches to deploying the ",(0,r.jsx)(n.a,{href:"https://github.com/kubernetes/ingress-nginx",children:"NGINX Ingress controller"})," inside a Kubernetes cluster running on bare-metal."]}),"\n",(0,r.jsx)(n.h2,{id:"network-load-balancer-metallb",children:"Network Load-balancer MetalLB"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/concepts/",children:"MetalLB"})," hooks into your Kubernetes cluster, and provides a network load-balancer implementation. In short, it allows you to create Kubernetes services of type \u201cLoadBalancer\u201d in clusters that don\u2019t run on a cloud provider, and thus cannot simply hook into paid products to provide load-balancers."]}),"\n",(0,r.jsx)(n.p,{children:"It has two features that work together to provide this service: address allocation, and external announcement:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Address Allocation"}),": In a cloud-enabled Kubernetes cluster, you request a load-balancer, and your cloud platform assigns an IP address to you. In a bare metal cluster, MetalLB is responsible for that allocation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"External Announcement"}),": Once MetalLB has assigned an external IP address to a service, it needs to make the network beyond the cluster aware that the IP \u201clives\u201d in the cluster. MetalLB uses standard routing protocols to achieve this: ARP, NDP, or BGP."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Before starting with installation, make sure you meet all the ",(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/#requirements",children:"requirements"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"installation-with-kubernetes-manifests",children:"Installation With Kubernetes Manifests"}),"\n",(0,r.jsx)(n.p,{children:"To install MetalLB, simply apply the manifest:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f https://raw.githubusercontent.com/google/metallb/v0.7.3/manifests/metallb.yaml\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will deploy MetalLB to your cluster, under the metallb-system namespace. The components in the manifest are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"metallb-system/controller deployment"}),". This is the cluster-wide controller that handles IP address assignments."]}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.code,{children:"metallb-system/speaker daemonset"}),". This is the component that speaks the protocol(s) of your choice to make the services reachable."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The installation manifest does not include a configuration file. MetalLB\u2019s components will still start, but will remain idle until you define and deploy a configmap."}),"\n",(0,r.jsx)(n.h3,{id:"metallb-configuration",children:"MetalLB Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["To configure MetalLB, write a config map to ",(0,r.jsx)(n.code,{children:"metallb-system/config"})," like ",(0,r.jsx)(n.a,{href:"https://raw.githubusercontent.com/google/metallb/v0.7.3/manifests/example-config.yaml",children:"this example"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  namespace: metallb-system\r\n  name: config\r\ndata:\r\n  config: |\r\n    # The peers section tells MetalLB what BGP routers to connect too. There\r\n    # is one entry for each router you want to peer with.\r\n    peers:\r\n    - # The target IP address for the BGP session.\r\n      peer-address: 10.0.0.1\r\n      # The BGP AS number that MetalLB expects to see advertised by\r\n      # the router.\r\n      peer-asn: 64512\r\n      # The BGP AS number that MetalLB should speak as.\r\n      my-asn: 64512\r\n      # (optional) the TCP port to talk to. Defaults to 179, you shouldn't\r\n      # need to set this in production.\r\n      peer-port: 179\r\n      # (optional) The proposed value of the BGP Hold Time timer. Refer to\r\n      # BGP reference material to understand what setting this implies.\r\n      hold-time: 120\r\n      # (optional) The router ID to use when connecting to this peer. Defaults\r\n      # to the node IP address. Generally only useful when you need to peer with\r\n      # another BGP router running on the same machine as MetalLB.\r\n      router-id: 1.2.3.4\r\n      # (optional) Password for TCPMD5 authenticated BGP sessions\r\n      # offered by some peers.\r\n      password: \"yourPassword\"\r\n      # (optional) The nodes that should connect to this peer. A node\r\n      # matches if at least one of the node selectors matches. Within\r\n      # one selector, a node matches if all the matchers are\r\n      # satisfied. The semantics of each selector are the same as the\r\n      # label- and set-based selectors in Kubernetes, documented at\r\n      # https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/.\r\n      # By default, all nodes are selected.\r\n      node-selectors:\r\n      - # Match by label=value\r\n        match-labels:\r\n          kubernetes.io/hostname: prod-01\r\n        # Match by 'key OP values' expressions\r\n        match-expressions:\r\n        - key: beta.kubernetes.io/arch\r\n          operator: In\r\n          values: [amd64, arm]\r\n\r\n    # The address-pools section lists the IP addresses that MetalLB is\r\n    # allowed to allocate, along with settings for how to advertise\r\n    # those addresses over BGP once assigned. You can have as many\r\n    # address pools as you want.\r\n    address-pools:\r\n    - # A name for the address pool. Services can request allocation\r\n      # from a specific address pool using this name, by listing this\r\n      # name under the 'metallb.universe.tf/address-pool' annotation.\r\n      name: my-ip-space\r\n      # Protocol can be used to select how the announcement is done.\r\n      # Supported values are bgp and layer2.\r\n      protocol: bgp\r\n      \r\n      # A list of IP address ranges over which MetalLB has\r\n      # authority. You can list multiple ranges in a single pool, they\r\n      # will all share the same settings. Each range can be either a\r\n      # CIDR prefix, or an explicit start-end range of IPs.\r\n      addresses:\r\n      - 198.51.100.0/24\r\n      - 192.168.0.150-192.168.0.200\r\n      # (optional) If true, MetalLB will not allocate any address that\r\n      # ends in .0 or .255. Some old, buggy consumer devices\r\n      # mistakenly block traffic to such addresses under the guise of\r\n      # smurf protection. Such devices have become fairly rare, but\r\n      # the option is here if you encounter serving issues.\r\n      avoid-buggy-ips: true\r\n      # (optional, default true) If false, MetalLB will not automatically\r\n      # allocate any address in this pool. Addresses can still explicitly\r\n      # be requested via loadBalancerIP or the address-pool annotation.\r\n      auto-assign: false\r\n      # (optional) A list of BGP advertisements to make, when\r\n      # protocol=bgp. Each address that gets assigned out of this pool\r\n      # will turn into this many advertisements. For most simple\r\n      # setups, you'll probably just want one.\r\n      #\r\n      # The default value for this field is a single advertisement with\r\n      # all parameters set to their respective defaults.\r\n      bgp-advertisements:\r\n      - # (optional) How much you want to aggregate up the IP address\r\n        # before advertising. For example, advertising 1.2.3.4 with\r\n        # aggregation-length=24 would end up advertising 1.2.3.0/24.\r\n        # For the majority of setups, you'll want to keep this at the\r\n        # default of 32, which advertises the entire IP address\r\n        # unmodified.\r\n        aggregation-length: 32\r\n        # (optional) The value of the BGP \"local preference\" attribute\r\n        # for this advertisement. Only used with IBGP peers,\r\n        # i.e. peers where peer-asn is the same as my-asn.\r\n        localpref: 100\r\n        # (optional) BGP communities to attach to this\r\n        # advertisement. Communities are given in the standard\r\n        # two-part form <asn>:<community number>. You can also use\r\n        # alias names (see below).\r\n        communities:\r\n        - 64512:1\r\n        - no-export\r\n    # (optional) BGP community aliases. Instead of using hard to\r\n    # read BGP community numbers in address pool advertisement\r\n    # configurations, you can define alias names here and use those\r\n    # elsewhere in the configuration. The \"no-export\" community used\r\n    # above is defined below.\r\n    bgp-communities:\r\n      # no-export is a well-known BGP community that prevents\r\n      # re-advertisement outside of the immediate autonomous system,\r\n      # but people don't usually recognize its numerical value. :)\r\n      no-export: 65535:65281\n"})}),"\n",(0,r.jsx)(n.h3,{id:"layer-2-configuration",children:"Layer 2 Configuration"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/tutorial/layer2/",children:"Layer 2 mode"})," is the simplest to configure. The nice thing about layer 2 mode is that you don\u2019t need any fancy network hardware at all, it should just work on any ethernet network. For example, the following configuration gives MetalLB control over IPs from ",(0,r.jsx)(n.strong,{children:"192.168.1.240"})," to ",(0,r.jsx)(n.strong,{children:"192.168.1.250"}),", and configures ",(0,r.jsx)(n.a,{href:"https://metallb.universe.tf/configuration/#layer-2-configuration",children:"Layer 2 mode"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: v1\r\nkind: ConfigMap\r\nmetadata:\r\n  namespace: metallb-system\r\n  name: config\r\ndata:\r\n  config: |\r\n    address-pools:\r\n    - name: default\r\n      protocol: layer2\r\n      addresses:\r\n      - 192.168.1.240-192.168.1.250\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},504074:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/photo-34607876585_6e59cd762e_o-f1712c70b2f2015c38883cf8eca3d952.png"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(296540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);