import{j as s}from"./jsx-runtime-Z5uAzocK.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const I="_btn_1xnp2_1",N="_btnSm_1xnp2_25",$="_btnSlm_1xnp2_30",L="_btnSl_1xnp2_30",w="_offscreen_1xnp2_40",e={btn:I,btnSm:N,btnSlm:$,btnSl:L,offscreen:w},p={small:e.btnSm,medium:e.btnSlm,large:e.btnSl,sm:e.btnSm,md:e.btnSlm,lg:e.btnSl},n=({label:a,btnsize:h="small",iconClass:j,type:C,iconSize:c,offscreen:m,changeValue:i})=>{const T=()=>{console.log("버튼 클릭:",a),i==null||i(a||"")},q=p[h]??p.small;return s.jsxs("button",{type:"button",className:`${e.btn} ${q}`,onClick:T,children:[C==="icon"&&s.jsx("span",{className:`${j??""} ${c?`${c}`:""}`}),m&&s.jsx("span",{className:e.offscreen,children:a}),!m&&a]})};n.displayName="BaseButton";n.__docgenInfo={description:"",methods:[],displayName:"BaseButton",props:{label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},iconClass:{required:!1,tsType:{name:"string"},description:""},btnsize:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},iconSize:{required:!1,tsType:{name:"union",raw:"'sg' | 'mg' | 'lg'",elements:[{name:"literal",value:"'sg'"},{name:"literal",value:"'mg'"},{name:"literal",value:"'lg'"}]},description:""},offscreen:{required:!1,tsType:{name:"boolean"},description:""},changeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const W={title:"Components/BaseButton",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"버튼 텍스트"},type:{control:"select",options:["icon",void 0],description:"버튼 타입 (icon이면 아이콘 표시)"},btnsize:{control:"radio",options:["small","medium","large"],description:"버튼 크기"},iconClass:{control:"text",description:"아이콘 클래스명"},iconSize:{control:"radio",options:["sg","mg","lg"],description:"아이콘 크기"},offscreen:{control:"boolean",description:"라벨을 스크린리더 전용으로 숨김"},changeValue:{action:"changeValue",description:"클릭 콜백"}},args:{label:"버튼",btnsize:"small",offscreen:!1}},t={},r={render:()=>s.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[s.jsx(n,{label:"Small",btnsize:"small"}),s.jsx(n,{label:"Medium",btnsize:"medium"}),s.jsx(n,{label:"Large",btnsize:"large"})]})},o={args:{type:"icon",iconClass:"ico-search",iconSize:"mg",label:"검색",offscreen:!0}},l={args:{type:"icon",iconClass:"ico-search",label:"검색",offscreen:!1}};var d,u,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,f,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <BaseButton label="Small" btnsize="small" />
      <BaseButton label="Medium" btnsize="medium" />
      <BaseButton label="Large" btnsize="large" />
    </div>
}`,...(S=(f=r.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var y,x,_;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    iconClass: 'ico-search',
    iconSize: 'mg',
    label: '검색',
    offscreen: true
  }
}`,...(_=(x=o.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var v,z,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    type: 'icon',
    iconClass: 'ico-search',
    label: '검색',
    offscreen: false
  }
}`,...(B=(z=l.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const k=["Playground","Sizes","IconButton","IconWithLabel"];export{o as IconButton,l as IconWithLabel,t as Playground,r as Sizes,k as __namedExportsOrder,W as default};
