import{j as r}from"./jsx-runtime-Z5uAzocK.js";import{T as a}from"./Typography-Cvm2fB_c.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const D={title:"Components/Typography",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body1","body2","caption","overline","label"],description:"텍스트 스타일 변형"},color:{control:"select",options:["default","primary","secondary","success","warning","error","muted"]},children:{control:"text"}},args:{children:"StarBanking 디자인 시스템",variant:"body1",color:"default"}},o={},n={name:"타이포그래피 스케일",render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[["h1","h2","h3","h4","h5","h6"].map(e=>r.jsxs(a,{variant:e,children:[e.toUpperCase()," — StarBanking 뱅킹 서비스"]},e)),r.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--color-neutral-200)",margin:"8px 0"}}),r.jsx(a,{variant:"body1",children:"Body1 — 본문 텍스트. 가독성 높은 기본 본문 스타일입니다."}),r.jsx(a,{variant:"body2",children:"Body2 — 보조 본문. 조금 더 작은 크기의 설명 텍스트입니다."}),r.jsx(a,{variant:"label",children:"Label — 폼 레이블, UI 레이블에 사용합니다."}),r.jsx(a,{variant:"caption",children:"Caption — 보조 설명, 날짜, 메타 정보 등에 사용합니다."}),r.jsx(a,{variant:"overline",children:"Overline — 섹션 헤더, 카테고리 레이블"})]})},i={name:"색상 변형",render:()=>r.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["default","primary","secondary","success","warning","error","muted"].map(e=>r.jsxs(a,{variant:"body1",color:e,children:[e," — StarBanking 디자인 시스템"]},e))})},p={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx(a,{variant:"h1",children:"H1 제목"}),r.jsx(a,{variant:"h2",children:"H2 제목"}),r.jsx(a,{variant:"h3",children:"H3 제목"}),r.jsx(a,{variant:"h4",children:"H4 제목"}),r.jsx(a,{variant:"h5",children:"H5 제목"}),r.jsx(a,{variant:"h6",children:"H6 제목"})]})},s={name:"실제 사용 예시",render:()=>r.jsxs("div",{style:{maxWidth:400,display:"flex",flexDirection:"column",gap:4},children:[r.jsx(a,{variant:"overline",color:"muted",children:"이번달 잔액"}),r.jsx(a,{variant:"h3",children:"12,450,830원"}),r.jsxs(a,{variant:"caption",color:"muted",children:["2026년 3월 기준 · 전월 대비 ",r.jsx(a,{variant:"caption",color:"success",as:"span",children:"+3.2%"})]})]})};var t,c,l;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var y,d,h;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '타이포그래피 스케일',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(v => <Typography key={v} variant={v}>
          {v.toUpperCase()} — StarBanking 뱅킹 서비스
        </Typography>)}
      <hr style={{
      border: 'none',
      borderTop: '1px solid var(--color-neutral-200)',
      margin: '8px 0'
    }} />
      <Typography variant="body1">Body1 — 본문 텍스트. 가독성 높은 기본 본문 스타일입니다.</Typography>
      <Typography variant="body2">Body2 — 보조 본문. 조금 더 작은 크기의 설명 텍스트입니다.</Typography>
      <Typography variant="label">Label — 폼 레이블, UI 레이블에 사용합니다.</Typography>
      <Typography variant="caption">Caption — 보조 설명, 날짜, 메타 정보 등에 사용합니다.</Typography>
      <Typography variant="overline">Overline — 섹션 헤더, 카테고리 레이블</Typography>
    </div>
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var g,m,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '색상 변형',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['default', 'primary', 'secondary', 'success', 'warning', 'error', 'muted'] as const).map(c => <Typography key={c} variant="body1" color={c}>
          {c} — StarBanking 디자인 시스템
        </Typography>)}
    </div>
}`,...(v=(m=i.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var x,u,T;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Typography variant="h1">H1 제목</Typography>
      <Typography variant="h2">H2 제목</Typography>
      <Typography variant="h3">H3 제목</Typography>
      <Typography variant="h4">H4 제목</Typography>
      <Typography variant="h5">H5 제목</Typography>
      <Typography variant="h6">H6 제목</Typography>
    </div>
}`,...(T=(u=p.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var j,f,b;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '실제 사용 예시',
  render: () => <div style={{
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    gap: 4
  }}>
      <Typography variant="overline" color="muted">이번달 잔액</Typography>
      <Typography variant="h3">12,450,830원</Typography>
      <Typography variant="caption" color="muted">2026년 3월 기준 · 전월 대비 <Typography variant="caption" color="success" as="span">+3.2%</Typography></Typography>
    </div>
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const k=["Playground","Scale","Colors","Headings","InContext"];export{i as Colors,p as Headings,s as InContext,o as Playground,n as Scale,k as __namedExportsOrder,D as default};
