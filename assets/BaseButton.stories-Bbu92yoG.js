import{j as e}from"./jsx-runtime-Z5uAzocK.js";/* empty css              */import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const m={small:"btn-sm",medium:"btn-slm",large:"btn-sl",sm:"btn-sm",md:"btn-slm",lg:"btn-sl"},s=({label:a,btnsize:h="small",iconClass:j,type:C,iconSize:i,offscreen:c,changeValue:o})=>{const T=()=>{console.log("버튼 클릭:",a),o==null||o(a||"")},q=m[h]??m.small;return e.jsxs("button",{type:"button",className:`btn ${q}`,onClick:T,children:[C==="icon"&&e.jsx("span",{className:`${j} ${i?`${i}`:""}`}),c&&e.jsx("span",{className:"offscreen",children:a}),!c&&a]})};s.displayName="BaseButton";s.__docgenInfo={description:"",methods:[],displayName:"BaseButton",props:{label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},iconClass:{required:!1,tsType:{name:"string"},description:""},btnsize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},iconSize:{required:!1,tsType:{name:"union",raw:"'sg' | 'mg' | 'lg'",elements:[{name:"literal",value:"'sg'"},{name:"literal",value:"'mg'"},{name:"literal",value:"'lg'"}]},description:""},offscreen:{required:!1,tsType:{name:"boolean"},description:""},changeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const $={title:"Components/BaseButton",component:s,tags:["autodocs"],argTypes:{label:{control:"text",description:"버튼 텍스트"},type:{control:"select",options:["icon",void 0],description:"버튼 타입 (icon이면 아이콘 표시)"},btnsize:{control:"radio",options:["small","medium","large"],description:"버튼 크기"},iconClass:{control:"text",description:"아이콘 클래스명"},iconSize:{control:"radio",options:["sg","mg","lg"],description:"아이콘 크기"},offscreen:{control:"boolean",description:"라벨을 스크린리더 전용으로 숨김"},changeValue:{action:"changeValue",description:"클릭 콜백"}},args:{label:"버튼",btnsize:"small",offscreen:!1}},n={},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[e.jsx(s,{label:"Small",btnsize:"small"}),e.jsx(s,{label:"Medium",btnsize:"medium"}),e.jsx(s,{label:"Large",btnsize:"large"})]})},r={args:{type:"icon",iconClass:"ico-search",iconSize:"mg",label:"검색",offscreen:!0}},l={args:{type:"icon",iconClass:"ico-search",label:"검색",offscreen:!1}};var d,p,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <BaseButton label="Small" btnsize="small" />
      <BaseButton label="Medium" btnsize="medium" />
      <BaseButton label="Large" btnsize="large" />
    </div>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,v,z;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    iconClass: 'ico-search',
    iconSize: 'mg',
    label: '검색',
    offscreen: true
  }
}`,...(z=(v=r.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var B,x,S;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    iconClass: 'ico-search',
    label: '검색',
    offscreen: false
  }
}`,...(S=(x=l.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};const w=["Playground","Sizes","IconButton","IconWithLabel"];export{r as IconButton,l as IconWithLabel,n as Playground,t as Sizes,w as __namedExportsOrder,$ as default};
