import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{S as r}from"./Select-Btq7v0Tq.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const l=[{value:"star",label:"스타뱅크"},{value:"kb",label:"KB국민은행"},{value:"shinhan",label:"신한은행"},{value:"woori",label:"우리은행"},{value:"hana",label:"하나은행"}],K={title:"Components/Select",component:r,tags:["autodocs"],argTypes:{size:{control:"radio",options:["sm","md","lg"]},error:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"}},args:{label:"은행 선택",placeholder:"선택하세요",options:l,size:"md",error:!1,disabled:!1,required:!1}},a={},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:320},children:[e.jsx(r,{label:"Small",size:"sm",options:l,placeholder:"선택하세요"}),e.jsx(r,{label:"Medium",size:"md",options:l,placeholder:"선택하세요"}),e.jsx(r,{label:"Large",size:"lg",options:l,placeholder:"선택하세요"})]})},s={render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"은행",options:l,placeholder:"선택하세요",error:!0,errorText:"은행을 선택해주세요.",required:!0})})},t={render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"이체 은행",options:l,placeholder:"선택하세요",helperText:"이체할 은행을 선택해주세요."})})},i={render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"은행 (비활성)",options:l,placeholder:"선택 불가",disabled:!0})})},d={name:"배너 노출 위치 예시",render:()=>e.jsx("div",{style:{maxWidth:320},children:e.jsx(r,{label:"노출 위치",options:[{value:"main-top",label:"메인 상단"},{value:"main-bottom",label:"메인 하단"},{value:"sidebar",label:"사이드바"},{value:"popup",label:"팝업"}],placeholder:"위치를 선택하세요",required:!0})})};var n,c,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 320
  }}>
      <Select label="Small" size="sm" options={BANK_OPTIONS} placeholder="선택하세요" />
      <Select label="Medium" size="md" options={BANK_OPTIONS} placeholder="선택하세요" />
      <Select label="Large" size="lg" options={BANK_OPTIONS} placeholder="선택하세요" />
    </div>
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,x,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Select label="은행" options={BANK_OPTIONS} placeholder="선택하세요" error errorText="은행을 선택해주세요." required />
    </div>
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,g,y;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Select label="이체 은행" options={BANK_OPTIONS} placeholder="선택하세요" helperText="이체할 은행을 선택해주세요." />
    </div>
}`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var O,j,N;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Select label="은행 (비활성)" options={BANK_OPTIONS} placeholder="선택 불가" disabled />
    </div>
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var T,W,P;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: '배너 노출 위치 예시',
  render: () => <div style={{
    maxWidth: 320
  }}>
      <Select label="노출 위치" options={[{
      value: 'main-top',
      label: '메인 상단'
    }, {
      value: 'main-bottom',
      label: '메인 하단'
    }, {
      value: 'sidebar',
      label: '사이드바'
    }, {
      value: 'popup',
      label: '팝업'
    }]} placeholder="위치를 선택하세요" required />
    </div>
}`,...(P=(W=d.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};const A=["Playground","Sizes","WithError","WithHelperText","Disabled","BannerPositionExample"];export{d as BannerPositionExample,i as Disabled,a as Playground,o as Sizes,s as WithError,t as WithHelperText,A as __namedExportsOrder,K as default};
