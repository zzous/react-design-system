import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{B as e}from"./Button-MHMxX19J.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const g=()=>r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M13.5 2.5L7 9M13.5 2.5L9 13.5L7 9M13.5 2.5L2.5 6.5L7 9",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),h=()=>r.jsx("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",children:r.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),nr={title:"Components/Button",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","danger"],description:"버튼 스타일 변형"},size:{control:"radio",options:["small","medium","large"],description:"버튼 크기"},loading:{control:"boolean",description:"로딩 상태"},disabled:{control:"boolean",description:"비활성화"},fullWidth:{control:"boolean",description:"전체 너비"},children:{control:"text"}},args:{children:"Button",variant:"primary",size:"medium",loading:!1,disabled:!1,fullWidth:!1}},a={},n={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[r.jsx(e,{variant:"primary",children:"Primary"}),r.jsx(e,{variant:"secondary",children:"Secondary"}),r.jsx(e,{variant:"outline",children:"Outline"}),r.jsx(e,{variant:"ghost",children:"Ghost"}),r.jsx(e,{variant:"danger",children:"Danger"})]})},t={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[r.jsx(e,{size:"small",children:"Small"}),r.jsx(e,{size:"medium",children:"Medium"}),r.jsx(e,{size:"large",children:"Large"})]})},s={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(e,{leftIcon:r.jsx(g,{}),children:"이체하기"}),r.jsx(e,{variant:"outline",rightIcon:r.jsx(h,{}),children:"추가하기"}),r.jsx(e,{variant:"secondary",leftIcon:r.jsx(h,{}),rightIcon:r.jsx(g,{}),children:"양쪽 아이콘"})]})},o={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[r.jsx(e,{children:"Normal"}),r.jsx(e,{loading:!0,children:"Loading"}),r.jsx(e,{disabled:!0,children:"Disabled"})]})},i={args:{fullWidth:!0,children:"전체 너비 버튼"},decorators:[Z=>r.jsx("div",{style:{width:320},children:r.jsx(Z,{})})]},d={args:{variant:"primary",children:"Primary"}},c={args:{variant:"secondary",children:"Secondary"}},l={args:{variant:"outline",children:"Outline"}},u={args:{variant:"ghost",children:"Ghost"}},p={args:{variant:"danger",children:"Danger"}},m={args:{loading:!0,children:"처리 중..."}};var S,x,y;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,B,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SButton variant="primary">Primary</SButton>
      <SButton variant="secondary">Secondary</SButton>
      <SButton variant="outline">Outline</SButton>
      <SButton variant="ghost">Ghost</SButton>
      <SButton variant="danger">Danger</SButton>
    </div>
}`,...(j=(B=n.parameters)==null?void 0:B.docs)==null?void 0:j.source}}};var f,I,W;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
      <SButton size="small">Small</SButton>
      <SButton size="medium">Medium</SButton>
      <SButton size="large">Large</SButton>
    </div>
}`,...(W=(I=t.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var L,w,P;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <SButton leftIcon={<SendIcon />}>이체하기</SButton>
      <SButton variant="outline" rightIcon={<PlusIcon />}>추가하기</SButton>
      <SButton variant="secondary" leftIcon={<PlusIcon />} rightIcon={<SendIcon />}>양쪽 아이콘</SButton>
    </div>
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var z,b,D;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SButton>Normal</SButton>
      <SButton loading>Loading</SButton>
      <SButton disabled>Disabled</SButton>
    </div>
}`,...(D=(b=o.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var k,M,O;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    children: '전체 너비 버튼'
  },
  decorators: [Story => <div style={{
    width: 320
  }}><Story /></div>]
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var G,C,E;d.parameters={...d.parameters,docs:{...(G=d.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'Primary'
  }
}`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var F,N,V;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    children: 'Secondary'
  }
}`,...(V=(N=c.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};var _,R,T;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: 'Outline'
  }
}`,...(T=(R=l.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,A,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'ghost',
    children: 'Ghost'
  }
}`,...(H=(A=u.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: '처리 중...'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const tr=["Playground","Variants","Sizes","WithIcons","States","FullWidth","Primary","Secondary","Outline","Ghost","Danger","Loading"];export{p as Danger,i as FullWidth,u as Ghost,m as Loading,l as Outline,a as Playground,d as Primary,c as Secondary,t as Sizes,o as States,n as Variants,s as WithIcons,tr as __namedExportsOrder,nr as default};
