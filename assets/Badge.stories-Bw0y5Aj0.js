import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{B as a}from"./Badge-DQhNXnkG.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M={title:"Components/Badge",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","warning","error","info","neutral"],description:"배지 스타일 변형"},size:{control:"radio",options:["sm","md","lg"]},dot:{control:"boolean",description:"상태 점 표시"},contorl:{control:"radio",options:["a","b","c"]},children:{control:"text"}},args:{children:"Badge",variant:"primary",size:"md",dot:!1}},n={},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"}),e.jsx(a,{variant:"info",children:"Info"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{variant:"success",dot:!0,children:"완료"}),e.jsx(a,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(a,{variant:"error",dot:!0,children:"실패"}),e.jsx(a,{variant:"neutral",dot:!0,children:"대기"}),e.jsx(a,{variant:"info",dot:!0,children:"정보"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"sm",variant:"primary",children:"Small"}),e.jsx(a,{size:"md",variant:"primary",children:"Medium"}),e.jsx(a,{size:"lg",variant:"primary",children:"Large"})]})},d={name:"data-type (contorl)",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:["a","b","c"].map(r=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(a,{contorl:r,children:"Badge"}),e.jsxs("span",{style:{fontSize:"0.75rem",color:"#667085"},children:['data-type="',r,'"']})]},r))})},o={name:"로고 컨텍스트 예시",render:()=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"12px 16px",background:"#1d2939",borderRadius:8},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:8,background:"#0052cc",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700},children:"S"}),e.jsx("span",{style:{color:"#fff",fontWeight:600,fontSize:"1rem"},children:"StarBanking"}),e.jsx(a,{children:"Badge"})]})},l={name:"뱅킹 상태 예시",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[{label:"거래 완료",variant:"success",dot:!0},{label:"처리 중",variant:"warning",dot:!0},{label:"이체 실패",variant:"error",dot:!0},{label:"승인 대기",variant:"neutral",dot:!0},{label:"VIP 회원",variant:"primary"},{label:"신규 계좌",variant:"info"}].map(({label:r,variant:P,dot:R})=>e.jsx("div",{style:{display:"flex",alignItems:"center",gap:8},children:e.jsx(a,{variant:P,dot:R,children:r})},r))})};var c,p,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,y,v;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
      <Badge variant="info">Info</Badge>
    </div>
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var u,x,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="success" dot>완료</Badge>
      <Badge variant="warning" dot>처리중</Badge>
      <Badge variant="error" dot>실패</Badge>
      <Badge variant="neutral" dot>대기</Badge>
      <Badge variant="info" dot>정보</Badge>
    </div>
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,h,j;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
      <Badge size="lg" variant="primary">Large</Badge>
    </div>
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var b,S,I;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'data-type (contorl)',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['a', 'b', 'c'] as const).map(type => <div key={type} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <Badge contorl={type}>Badge</Badge>
          <span style={{
        fontSize: '0.75rem',
        color: '#667085'
      }}>data-type="{type}"</span>
        </div>)}
    </div>
}`,...(I=(S=d.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,w,W;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '로고 컨텍스트 예시',
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 16px',
    background: '#1d2939',
    borderRadius: 8
  }}>
      <div style={{
      width: 32,
      height: 32,
      borderRadius: 8,
      background: '#0052cc',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontWeight: 700
    }}>S</div>
      <span style={{
      color: '#fff',
      fontWeight: 600,
      fontSize: '1rem'
    }}>StarBanking</span>
      <Badge>Badge</Badge>
    </div>
}`,...(W=(w=o.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var k,C,D;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '뱅킹 상태 예시',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {[{
      label: '거래 완료',
      variant: 'success' as const,
      dot: true
    }, {
      label: '처리 중',
      variant: 'warning' as const,
      dot: true
    }, {
      label: '이체 실패',
      variant: 'error' as const,
      dot: true
    }, {
      label: '승인 대기',
      variant: 'neutral' as const,
      dot: true
    }, {
      label: 'VIP 회원',
      variant: 'primary' as const
    }, {
      label: '신규 계좌',
      variant: 'info' as const
    }].map(({
      label,
      variant,
      dot
    }) => <div key={label} style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }}>
          <Badge variant={variant} dot={dot}>{label}</Badge>
        </div>)}
    </div>
}`,...(D=(C=l.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};const _=["Playground","Variants","WithDot","Sizes","ContorlTypes","InLogoContext","BankingStatuses"];export{l as BankingStatuses,d as ContorlTypes,o as InLogoContext,n as Playground,i as Sizes,t as Variants,s as WithDot,_ as __namedExportsOrder,M as default};
