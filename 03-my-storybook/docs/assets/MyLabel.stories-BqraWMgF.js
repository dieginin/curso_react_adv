import{j as m}from"./jsx-runtime-u17CrQMm.js";const s=({allCaps:t=!1,color:n,fontColor:i,label:o,size:c="normal"})=>m.jsx("span",{className:`${c} ${n} label`,style:{color:`${i}`},children:t?o.toUpperCase():o});s.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{allCaps:{required:!1,tsType:{name:"boolean"},description:"Capitalize all letters",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"Label color"},fontColor:{required:!1,tsType:{name:"string"},description:"Font color"},label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label size",defaultValue:{value:'"normal"',computed:!1}}}};const d={title:"UI/Labels/MyLabel",component:s,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{color:{control:"select"},size:{control:"inline-radio"}}},e={args:{label:"Basic label",allCaps:!1,color:void 0,fontColor:void 0,size:"normal"}},a={args:{allCaps:!0,label:"All Caps labelpkl,",size:"normal"}},r={args:{color:"text-secondary",label:"Secondary label",size:"normal"}},l={args:{fontColor:"red",label:"Custom Color label",size:"normal"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Basic label",
    allCaps: false,
    color: undefined,
    fontColor: undefined,
    size: "normal"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    allCaps: true,
    label: "All Caps labelpkl,",
    size: "normal"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: "text-secondary",
    label: "Secondary label",
    size: "normal"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    fontColor: "red",
    label: "Custom Color label",
    size: "normal"
  }
}`,...l.parameters?.docs?.source}}};const u=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,u as __namedExportsOrder,d as default};
