"use strict";(self.webpackChunkmikes_dev_notebook=self.webpackChunkmikes_dev_notebook||[]).push([[18707],{72389:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var l=a(67294),r=a(39962),s=a(68775),n=a(95685),o=a(2984),c=a(79658),i=a(81929),d=a(71258),m=a(19591),h=a(7189);const{ResultListWrapper:u}=n.Z;class p extends l.Component{render(){return l.createElement("div",{className:"search_wrapper"},l.createElement(o.Z,{url:"https://search.instar.wiki",app:"dev_2022_08_20",theme:{colors:{primaryColor:"#bebebe",textColor:"#7e7e7e"}}},l.createElement(c.Z,{componentId:"q",placeholder:"Search Assistant",react:{and:["chapter_filter","tag_filter","type_filter"]},dataField:["title","tags","abstract","description"],fieldWeights:[8,10,5,3],searchOperators:!1,autosuggest:!0,highlight:!0,defaultSuggestions:[{label:"Elasticsearch",value:"elasticsearch"},{label:"Docker",value:"docker"},{label:"Ansible",value:"ansible"},{label:"Hashicorp Nomad",value:"hashicorp nomad"},{label:"Hashicorp Consul",value:"hashicorp consul"},{label:"NGINX",value:"nginx"}],fuzziness:1,debounce:100,showFilter:!0,filterLabel:"Filter",URLParams:!0}),l.createElement(i.Z,null),l.createElement("div",{className:"search_flexbox"},l.createElement("div",{className:"search_flexcolumn"},l.createElement(d.Z,{componentId:"chapter_filter",dataField:"chapter.raw",title:"Chapters",size:100,sortBy:"count",defaultValue:"All Chapters",selectAllLabel:"All Chapters",showRadio:!0,showCount:!0,showSearch:!1,react:{and:["q"]},showFilter:!0,filterLabel:"Filter",URLParams:!0,loader:"Loading ..."}),l.createElement("hr",null),l.createElement(d.Z,{componentId:"type_filter",dataField:"type.raw",title:"Type",size:10,sortBy:"count",defaultValue:"All Types",selectAllLabel:"All Types",showRadio:!0,showCount:!0,showSearch:!1,react:{and:["q"]},showFilter:!0,filterLabel:"Filter",URLParams:!0,loader:"Loading ..."}),l.createElement("hr",null),l.createElement(m.Z,{componentId:"tag_filter",dataField:"tags.raw",title:"Tags",size:25,react:{and:["q"]},showSearch:!1,URLParams:!0,loader:"Loading ..."})),l.createElement(n.Z,{from:0,react:{and:["q","chapter_filter","tag_filter","type_filter"]},sortOptions:[{label:"Published",dataField:"date.raw",sortBy:"desc"},{label:"Best Match",dataField:"_score",sortBy:"desc"}],componentId:"SearchResult",dataField:"chapter.raw",stream:!0,pagination:!0,paginationAt:"bottom",size:11,loader:"Loading Results..",showResultStats:!0,scrollOnChange:!0},(e=>{let{data:t}=e;return l.createElement("div",{className:"search_results"},l.createElement(u,null,t.map((e=>l.createElement("div",{className:"search_resultcard",key:e._id},l.createElement(h.Z,{href:e.link},l.createElement(h.Z.Image,{src:e.imagesquare,style:{borderRadius:15}}),l.createElement(h.Z.Content,null,l.createElement(h.Z.Title,{dangerouslySetInnerHTML:{__html:e.title}}),l.createElement(h.Z.Description,{dangerouslySetInnerHTML:{__html:e.abstract}}))))))))})))))}}const b=p;function f(){const{siteConfig:e}=(0,r.Z)();return l.createElement(s.Z,{title:`Hello from ${e.title}`,description:"Development Notebook"},l.createElement("main",null,l.createElement("div",{className:"container"},l.createElement(b,null))))}}}]);