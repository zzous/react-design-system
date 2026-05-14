import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as m}from"./index-pP6CS22B.js";import{B as a}from"./Button-B20UjbK7.js";import{B as i}from"./Badge-DQhNXnkG.js";import{C as v}from"./Card-BbXSbcl6.js";import{I as o}from"./Input-DZCEniOd.js";import{S as d}from"./Select-Btq7v0Tq.js";import{F as h}from"./FileInput-zvuAVNf1.js";import{M as xe}from"./Modal-BhKAiTWp.js";import{T as ye,u as ve}from"./Toast-D3HHUwPE.js";import{T as l}from"./Typography-Cvm2fB_c.js";import{I as x}from"./Icon-BY8DjHwO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const p=({title:r,children:n})=>e.jsxs("section",{style:{marginBottom:40},children:[e.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#767676",borderBottom:"1px solid #ebebeb",paddingBottom:8,marginBottom:16},children:r}),n]}),Pe={title:"Showcase/전체 컴포넌트",parameters:{layout:"padded"},decorators:[r=>e.jsx(ye,{position:"topRight",children:e.jsx(r,{})})]};function je(){const[r,n]=m.useState(""),[s,c]=m.useState(""),[k,u]=m.useState(!1),[D,he]=m.useState("md"),[W,L]=m.useState([]),g=ve();return e.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:32},children:[e.jsx(l,{variant:"h3",children:"디자인 시스템"}),e.jsx(l,{variant:"body2",color:"muted",children:"@starbanking/design-system 컴포넌트 쇼케이스"})]}),e.jsx(p,{title:"Button",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{leftIcon:e.jsx(x,{name:"send"}),children:"이체하기"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx(x,{name:"download"}),children:"다운로드"}),e.jsx(a,{variant:"secondary",leftIcon:e.jsx(x,{name:"plus"}),children:"추가"})]})]})]})}),e.jsx(p,{title:"Badge",children:e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(i,{variant:"primary",children:"Primary"}),e.jsx(i,{variant:"secondary",children:"Secondary"}),e.jsx(i,{variant:"success",dot:!0,children:"완료"}),e.jsx(i,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(i,{variant:"error",dot:!0,children:"실패"}),e.jsx(i,{variant:"info",children:"정보"}),e.jsx(i,{variant:"neutral",children:"중립"}),e.jsx(i,{variant:"success",size:"lg",children:"Large"}),e.jsx(i,{variant:"neutral",size:"sm",children:"Small"})]})}),e.jsx(p,{title:"Input",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(o,{label:"기본 입력",placeholder:"텍스트를 입력하세요"}),e.jsx(o,{label:"검색",placeholder:"검색어 입력",prefix:e.jsx(x,{name:"search"}),value:r,onChange:t=>n(t.target.value)}),e.jsx(o,{label:"필수 항목",placeholder:"필수 값",required:!0}),e.jsx(o,{label:"오류 상태",placeholder:"잘못된 값",error:!0,errorText:"올바른 형식으로 입력해주세요."}),e.jsx(o,{label:"도움말",placeholder:"입력",helperText:"8자 이상 입력해주세요."}),e.jsx(o,{label:"비활성화",placeholder:"입력 불가",disabled:!0})]})}),e.jsx(p,{title:"Select",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(d,{label:"기본 선택",placeholder:"선택하세요",options:[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],value:s,onChange:t=>c(t.target.value)}),e.jsx(d,{label:"Small",size:"sm",placeholder:"선택",options:[{value:"a",label:"Small A"},{value:"b",label:"Small B"}]}),e.jsx(d,{label:"Large",size:"lg",placeholder:"선택",options:[{value:"a",label:"Large A"},{value:"b",label:"Large B"}]}),e.jsx(d,{label:"오류 상태",placeholder:"선택하세요",error:!0,errorText:"항목을 선택해주세요.",options:[{value:"a",label:"옵션 A"}]}),e.jsx(d,{label:"도움말",placeholder:"선택",helperText:"하나를 선택해주세요.",options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"}]}),e.jsx(d,{label:"비활성화",placeholder:"선택 불가",disabled:!0,options:[{value:"a",label:"옵션 A"}]})]})}),e.jsx(p,{title:"FileInput",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:520},children:[e.jsx(h,{label:"기본 파일 업로드",helperText:"모든 파일 형식 허용",onChange:L}),e.jsx(h,{label:"이미지 전용",accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024,helperText:"JPG, PNG, WEBP · 최대 5MB",onChange:L}),W.length>0&&e.jsxs(l,{variant:"caption",color:"muted",children:["선택된 파일: ",W.map(t=>t.name).join(", ")]}),e.jsx(h,{label:"비활성화",disabled:!0,onChange:()=>{}})]})}),e.jsxs(p,{title:"Modal",children:[e.jsx("div",{style:{display:"flex",gap:8},children:["sm","md","lg"].map(t=>e.jsxs(a,{variant:"outline",onClick:()=>{he(t),u(!0)},children:[t.toUpperCase()," 모달 열기"]},t))}),e.jsx(xe,{open:k,onClose:()=>u(!1),title:`${D.toUpperCase()} 모달`,size:D,footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"outline",onClick:()=>u(!1),children:"취소"}),e.jsx(a,{onClick:()=>u(!1),children:"확인"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{variant:"body2",children:"모달 컴포넌트입니다. 사이즈는 sm / md / lg 를 지원합니다."}),e.jsx(o,{label:"모달 내부 입력",placeholder:"텍스트 입력"}),e.jsx(d,{label:"모달 내부 선택",placeholder:"선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"}]})]})})]}),e.jsx(p,{title:"Toast",children:e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",onClick:()=>g.success("성공!",{message:"작업이 성공적으로 완료되었습니다."}),children:"Success Toast"}),e.jsx(a,{variant:"danger",onClick:()=>g.error("오류 발생",{message:"처리 중 문제가 발생했습니다."}),children:"Error Toast"}),e.jsx(a,{variant:"outline",onClick:()=>g.warning("주의",{message:"이 작업은 되돌릴 수 없습니다."}),children:"Warning Toast"}),e.jsx(a,{variant:"ghost",onClick:()=>g.info("안내",{message:"새로운 업데이트가 있습니다."}),children:"Info Toast"})]})}),e.jsx(p,{title:"Card",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[e.jsx(v,{variant:"raised",title:"Raised Card",description:"기본 그림자 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(v,{variant:"flat",title:"Flat Card",description:"테두리만 있는 플랫 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(v,{variant:"raised",title:"With Footer",description:"푸터가 있는 카드입니다.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{size:"sm",variant:"outline",children:"취소"}),e.jsx(a,{size:"sm",children:"확인"})]}),children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})})]})}),e.jsx(p,{title:"Typography",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["h1","h2","h3","h4","h5","h6"].map(t=>e.jsxs(l,{variant:t,children:[t.toUpperCase()," — StarBanking 디자인 시스템"]},t)),e.jsx("div",{style:{height:8}}),e.jsx(l,{variant:"body1",children:"Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다."}),e.jsx(l,{variant:"body2",children:"Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다."}),e.jsx(l,{variant:"caption",children:"Caption — 보조 설명 텍스트"}),e.jsx(l,{variant:"overline",children:"Overline — 섹션 레이블"}),e.jsx(l,{variant:"label",children:"Label — 폼 레이블"}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["primary","secondary","success","warning","error","muted"].map(t=>e.jsx(l,{variant:"label",color:t,children:t},t))})]})}),e.jsx(p,{title:"Color Tokens",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"Brand / UI",colors:[{name:"Nav / Primary",value:"#253349"},{name:"Secondary (Button)",value:"#ffcc00"},{name:"Highlight",value:"#ffbc00"},{name:"Badge Yellow",value:"#fed700"}]},{label:"Semantic",colors:[{name:"Point / Link",value:"#287eff"},{name:"Error / Danger",value:"#ff3232"},{name:"Hover bg",value:"#f2f2f2"},{name:"Base bg",value:"#f7f7f7"}]},{label:"Text",colors:[{name:"Strong text",value:"#222"},{name:"Base text",value:"#444"},{name:"Muted text",value:"#767676"},{name:"Placeholder",value:"#999"},{name:"Disabled text",value:"#ababab"}]},{label:"Border / Line",colors:[{name:"Base border",value:"#d2d2d2"},{name:"Light border",value:"#ebebeb"}]},{label:"Brand Brown",colors:[{name:"Brown Light",value:"#a8917b"},{name:"Brown Base",value:"#766554"},{name:"Brown Dark",value:"#4e4238"}]}].map(({label:t,colors:ge})=>e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:t}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:ge.map(({name:F,value:P})=>e.jsxs("div",{style:{minWidth:100,flex:"0 0 auto"},children:[e.jsx("div",{style:{height:36,borderRadius:4,backgroundColor:P,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:11,color:"#444",marginTop:4,lineHeight:1.4},children:F}),e.jsx("div",{style:{fontSize:11,color:"#767676",fontFamily:"monospace"},children:P})]},F))})]},t))})})]})}const y={name:"전체 쇼케이스",render:()=>e.jsx(je,{})},j={name:"Button — 전체",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"sm",children:"Small"}),e.jsx(a,{size:"md",children:"Medium"}),e.jsx(a,{size:"lg",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{leftIcon:e.jsx(x,{name:"send"}),children:"이체하기"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx(x,{name:"download"}),children:"다운로드"}),e.jsx(a,{variant:"secondary",leftIcon:e.jsx(x,{name:"plus"}),children:"추가"})]})]})]})},f={name:"Badge — 전체",render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(i,{variant:"primary",children:"Primary"}),e.jsx(i,{variant:"secondary",children:"Secondary"}),e.jsx(i,{variant:"success",dot:!0,children:"완료"}),e.jsx(i,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(i,{variant:"error",dot:!0,children:"실패"}),e.jsx(i,{variant:"info",children:"정보"}),e.jsx(i,{variant:"neutral",children:"중립"}),e.jsx(i,{variant:"success",size:"lg",children:"Large"}),e.jsx(i,{variant:"neutral",size:"sm",children:"Small"})]})},b={name:"Input — 전체",render:()=>{function r(){const[n,s]=m.useState("");return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(o,{label:"기본 입력",placeholder:"텍스트를 입력하세요"}),e.jsx(o,{label:"검색",placeholder:"검색어 입력",prefix:e.jsx(x,{name:"search"}),value:n,onChange:c=>s(c.target.value)}),e.jsx(o,{label:"필수 항목",placeholder:"필수 값",required:!0}),e.jsx(o,{label:"오류 상태",placeholder:"잘못된 값",error:!0,errorText:"올바른 형식으로 입력해주세요."}),e.jsx(o,{label:"도움말",placeholder:"입력",helperText:"8자 이상 입력해주세요."}),e.jsx(o,{label:"비활성화",placeholder:"입력 불가",disabled:!0})]})}return e.jsx(r,{})}},B={name:"Select — 전체",render:()=>{function r(){const[n,s]=m.useState("");return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(d,{label:"기본 선택",placeholder:"선택하세요",options:[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],value:n,onChange:c=>s(c.target.value)}),e.jsx(d,{label:"Small",size:"sm",placeholder:"선택",options:[{value:"a",label:"Small A"},{value:"b",label:"Small B"}]}),e.jsx(d,{label:"Large",size:"lg",placeholder:"선택",options:[{value:"a",label:"Large A"},{value:"b",label:"Large B"}]}),e.jsx(d,{label:"오류 상태",placeholder:"선택하세요",error:!0,errorText:"항목을 선택해주세요.",options:[{value:"a",label:"옵션 A"}]}),e.jsx(d,{label:"도움말",placeholder:"선택",helperText:"하나를 선택해주세요.",options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"}]}),e.jsx(d,{label:"비활성화",placeholder:"선택 불가",disabled:!0,options:[{value:"a",label:"옵션 A"}]})]})}return e.jsx(r,{})}},S={name:"FileInput — 전체",render:()=>{function r(){const[n,s]=m.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:520},children:[e.jsx(h,{label:"기본 파일 업로드",helperText:"모든 파일 형식 허용",onChange:s}),e.jsx(h,{label:"이미지 전용",accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024,helperText:"JPG, PNG, WEBP · 최대 5MB",onChange:s}),n.length>0&&e.jsxs(l,{variant:"caption",color:"muted",children:["선택된 파일: ",n.map(c=>c.name).join(", ")]}),e.jsx(h,{label:"비활성화",disabled:!0,onChange:()=>{}})]})}return e.jsx(r,{})}},T={name:"Modal — 전체",render:()=>{function r(){const[n,s]=m.useState(!1),[c,k]=m.useState("md");return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:["sm","md","lg"].map(u=>e.jsxs(a,{variant:"outline",onClick:()=>{k(u),s(!0)},children:[u.toUpperCase()," 모달 열기"]},u))}),e.jsx(xe,{open:n,onClose:()=>s(!1),title:`${c.toUpperCase()} 모달`,size:c,footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"outline",onClick:()=>s(!1),children:"취소"}),e.jsx(a,{onClick:()=>s(!1),children:"확인"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{variant:"body2",children:"모달 컴포넌트입니다. 사이즈는 sm / md / lg 를 지원합니다."}),e.jsx(o,{label:"모달 내부 입력",placeholder:"텍스트 입력"}),e.jsx(d,{label:"모달 내부 선택",placeholder:"선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"}]})]})})]})}return e.jsx(r,{})}},C={name:"Toast — 전체",render:()=>{function r(){const n=ve();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",onClick:()=>n.success("성공!",{message:"작업이 성공적으로 완료되었습니다."}),children:"Success Toast"}),e.jsx(a,{variant:"danger",onClick:()=>n.error("오류 발생",{message:"처리 중 문제가 발생했습니다."}),children:"Error Toast"}),e.jsx(a,{variant:"outline",onClick:()=>n.warning("주의",{message:"이 작업은 되돌릴 수 없습니다."}),children:"Warning Toast"}),e.jsx(a,{variant:"ghost",onClick:()=>n.info("안내",{message:"새로운 업데이트가 있습니다."}),children:"Info Toast"})]})}return e.jsx(r,{})}},I={name:"Card — 전체",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[e.jsx(v,{variant:"raised",title:"Raised Card",description:"기본 그림자 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(v,{variant:"flat",title:"Flat Card",description:"테두리만 있는 플랫 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(v,{variant:"raised",title:"With Footer",description:"푸터가 있는 카드입니다.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{size:"sm",variant:"outline",children:"취소"}),e.jsx(a,{size:"sm",children:"확인"})]}),children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})})]})},w={name:"Typography — 전체",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["h1","h2","h3","h4","h5","h6"].map(r=>e.jsxs(l,{variant:r,children:[r.toUpperCase()," — StarBanking 디자인 시스템"]},r)),e.jsx("div",{style:{height:8}}),e.jsx(l,{variant:"body1",children:"Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다."}),e.jsx(l,{variant:"body2",children:"Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다."}),e.jsx(l,{variant:"caption",children:"Caption — 보조 설명 텍스트"}),e.jsx(l,{variant:"overline",children:"Overline — 섹션 레이블"}),e.jsx(l,{variant:"label",children:"Label — 폼 레이블"}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginTop:4},children:["primary","secondary","success","warning","error","muted"].map(r=>e.jsx(l,{variant:"label",color:r,children:r},r))})]})},z={name:"Color Tokens",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"Brand / UI",colors:[{name:"Nav / Primary",value:"#253349"},{name:"Secondary (Button)",value:"#ffcc00"},{name:"Highlight",value:"#ffbc00"},{name:"Badge Yellow",value:"#fed700"}]},{label:"Semantic",colors:[{name:"Point / Link",value:"#287eff"},{name:"Error / Danger",value:"#ff3232"},{name:"Hover bg",value:"#f2f2f2"},{name:"Base bg",value:"#f7f7f7"}]},{label:"Text",colors:[{name:"Strong text",value:"#222"},{name:"Base text",value:"#444"},{name:"Muted text",value:"#767676"},{name:"Placeholder",value:"#999"},{name:"Disabled text",value:"#ababab"}]},{label:"Border / Line",colors:[{name:"Base border",value:"#d2d2d2"},{name:"Light border",value:"#ebebeb"}]},{label:"Brand Brown",colors:[{name:"Brown Light",value:"#a8917b"},{name:"Brown Base",value:"#766554"},{name:"Brown Dark",value:"#4e4238"}]}].map(({label:r,colors:n})=>e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:r}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:n.map(({name:s,value:c})=>e.jsxs("div",{style:{minWidth:100,flex:"0 0 auto"},children:[e.jsx("div",{style:{height:36,borderRadius:4,backgroundColor:c,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:11,color:"#444",marginTop:4,lineHeight:1.4},children:s}),e.jsx("div",{style:{fontSize:11,color:"#767676",fontFamily:"monospace"},children:c})]},s))})]},r))})};var M,A,O;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: '전체 쇼케이스',
  render: () => <ShowcaseAll />
}`,...(O=(A=y.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var V,E,U;j.parameters={...j.parameters,docs:{...(V=j.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Button — 전체',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <div>
        <Typography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Variants</Typography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
      </div>
      <div>
        <Typography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Sizes</Typography>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
      <div>
        <Typography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>With Icons</Typography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button leftIcon={<Icon name="send" />}>이체하기</Button>
          <Button variant="outline" rightIcon={<Icon name="download" />}>다운로드</Button>
          <Button variant="secondary" leftIcon={<Icon name="plus" />}>추가</Button>
        </div>
      </div>
    </div>
}`,...(U=(E=j.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var R,G,H;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Badge — 전체',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success" dot>완료</Badge>
      <Badge variant="warning" dot>처리중</Badge>
      <Badge variant="error" dot>실패</Badge>
      <Badge variant="info">정보</Badge>
      <Badge variant="neutral">중립</Badge>
      <Badge variant="success" size="lg">Large</Badge>
      <Badge variant="neutral" size="sm">Small</Badge>
    </div>
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var N,q,J;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Input — 전체',
  render: () => {
    function InputDemo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
          <Input label="기본 입력" placeholder="텍스트를 입력하세요" />
          <Input label="검색" placeholder="검색어 입력" prefix={<Icon name="search" />} value={val} onChange={e => setVal(e.target.value)} />
          <Input label="필수 항목" placeholder="필수 값" required />
          <Input label="오류 상태" placeholder="잘못된 값" error errorText="올바른 형식으로 입력해주세요." />
          <Input label="도움말" placeholder="입력" helperText="8자 이상 입력해주세요." />
          <Input label="비활성화" placeholder="입력 불가" disabled />
        </div>;
    }
    return <InputDemo />;
  }
}`,...(J=(q=b.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Y,$,_;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Select — 전체',
  render: () => {
    function SelectDemo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
          <Select label="기본 선택" placeholder="선택하세요" options={[{
          value: 'option1',
          label: '옵션 1'
        }, {
          value: 'option2',
          label: '옵션 2'
        }, {
          value: 'option3',
          label: '옵션 3'
        }]} value={val} onChange={e => setVal(e.target.value)} />
          <Select label="Small" size="sm" placeholder="선택" options={[{
          value: 'a',
          label: 'Small A'
        }, {
          value: 'b',
          label: 'Small B'
        }]} />
          <Select label="Large" size="lg" placeholder="선택" options={[{
          value: 'a',
          label: 'Large A'
        }, {
          value: 'b',
          label: 'Large B'
        }]} />
          <Select label="오류 상태" placeholder="선택하세요" error errorText="항목을 선택해주세요." options={[{
          value: 'a',
          label: '옵션 A'
        }]} />
          <Select label="도움말" placeholder="선택" helperText="하나를 선택해주세요." options={[{
          value: 'a',
          label: '옵션 A'
        }, {
          value: 'b',
          label: '옵션 B'
        }]} />
          <Select label="비활성화" placeholder="선택 불가" disabled options={[{
          value: 'a',
          label: '옵션 A'
        }]} />
        </div>;
    }
    return <SelectDemo />;
  }
}`,...(_=($=B.parameters)==null?void 0:$.docs)==null?void 0:_.source}}};var K,Q,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'FileInput — 전체',
  render: () => {
    function FileInputDemo() {
      const [files, setFiles] = useState<File[]>([]);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        maxWidth: 520
      }}>
          <FileInput label="기본 파일 업로드" helperText="모든 파일 형식 허용" onChange={setFiles} />
          <FileInput label="이미지 전용" accept=".jpg,.jpeg,.png,.webp" maxSize={5 * 1024 * 1024} helperText="JPG, PNG, WEBP · 최대 5MB" onChange={setFiles} />
          {files.length > 0 && <Typography variant="caption" color="muted">선택된 파일: {files.map(f => f.name).join(', ')}</Typography>}
          <FileInput label="비활성화" disabled onChange={() => {}} />
        </div>;
    }
    return <FileInputDemo />;
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Modal — 전체',
  render: () => {
    function ModalDemo() {
      const [open, setOpen] = useState(false);
      const [size, setSize] = useState<'sm' | 'md' | 'lg'>('md');
      return <>
          <div style={{
          display: 'flex',
          gap: 8
        }}>
            {(['sm', 'md', 'lg'] as const).map(s => <Button key={s} variant="outline" onClick={() => {
            setSize(s);
            setOpen(true);
          }}>
                {s.toUpperCase()} 모달 열기
              </Button>)}
          </div>
          <Modal open={open} onClose={() => setOpen(false)} title={\`\${size.toUpperCase()} 모달\`} size={size} footer={<div style={{
          display: 'flex',
          gap: 8
        }}>
                <Button variant="outline" onClick={() => setOpen(false)}>취소</Button>
                <Button onClick={() => setOpen(false)}>확인</Button>
              </div>}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
              <Typography variant="body2">모달 컴포넌트입니다. 사이즈는 sm / md / lg 를 지원합니다.</Typography>
              <Input label="모달 내부 입력" placeholder="텍스트 입력" />
              <Select label="모달 내부 선택" placeholder="선택하세요" options={[{
              value: '1',
              label: '옵션 1'
            }, {
              value: '2',
              label: '옵션 2'
            }]} />
            </div>
          </Modal>
        </>;
    }
    return <ModalDemo />;
  }
}`,...(ae=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,re,te;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Toast — 전체',
  render: () => {
    function ToastDemo() {
      const toast = useToast();
      return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <Button variant="primary" onClick={() => toast.success('성공!', {
          message: '작업이 성공적으로 완료되었습니다.'
        })}>Success Toast</Button>
          <Button variant="danger" onClick={() => toast.error('오류 발생', {
          message: '처리 중 문제가 발생했습니다.'
        })}>Error Toast</Button>
          <Button variant="outline" onClick={() => toast.warning('주의', {
          message: '이 작업은 되돌릴 수 없습니다.'
        })}>Warning Toast</Button>
          <Button variant="ghost" onClick={() => toast.info('안내', {
          message: '새로운 업데이트가 있습니다.'
        })}>Info Toast</Button>
        </div>;
    }
    return <ToastDemo />;
  }
}`,...(te=(re=C.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,ie,se;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  name: 'Card — 전체',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 16
  }}>
      <Card variant="raised" title="Raised Card" description="기본 그림자 카드입니다.">
        <Typography variant="body2">카드 본문 내용이 여기에 들어갑니다.</Typography>
      </Card>
      <Card variant="flat" title="Flat Card" description="테두리만 있는 플랫 카드입니다.">
        <Typography variant="body2">카드 본문 내용이 여기에 들어갑니다.</Typography>
      </Card>
      <Card variant="raised" title="With Footer" description="푸터가 있는 카드입니다." footer={<div style={{
      display: 'flex',
      gap: 8
    }}>
            <Button size="sm" variant="outline">취소</Button>
            <Button size="sm">확인</Button>
          </div>}>
        <Typography variant="body2">카드 본문 내용이 여기에 들어갑니다.</Typography>
      </Card>
    </div>
}`,...(se=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var oe,de,ce;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Typography — 전체',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(v => <Typography key={v} variant={v}>{v.toUpperCase()} — StarBanking 디자인 시스템</Typography>)}
      <div style={{
      height: 8
    }} />
      <Typography variant="body1">Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다.</Typography>
      <Typography variant="body2">Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다.</Typography>
      <Typography variant="caption">Caption — 보조 설명 텍스트</Typography>
      <Typography variant="overline">Overline — 섹션 레이블</Typography>
      <Typography variant="label">Label — 폼 레이블</Typography>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }}>
        {(['primary', 'secondary', 'success', 'warning', 'error', 'muted'] as const).map(c => <Typography key={c} variant="label" color={c}>{c}</Typography>)}
      </div>
    </div>
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,ue;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  name: 'Color Tokens',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {[{
      label: 'Brand / UI',
      colors: [{
        name: 'Nav / Primary',
        value: '#253349'
      }, {
        name: 'Secondary (Button)',
        value: '#ffcc00'
      }, {
        name: 'Highlight',
        value: '#ffbc00'
      }, {
        name: 'Badge Yellow',
        value: '#fed700'
      }]
    }, {
      label: 'Semantic',
      colors: [{
        name: 'Point / Link',
        value: '#287eff'
      }, {
        name: 'Error / Danger',
        value: '#ff3232'
      }, {
        name: 'Hover bg',
        value: '#f2f2f2'
      }, {
        name: 'Base bg',
        value: '#f7f7f7'
      }]
    }, {
      label: 'Text',
      colors: [{
        name: 'Strong text',
        value: '#222'
      }, {
        name: 'Base text',
        value: '#444'
      }, {
        name: 'Muted text',
        value: '#767676'
      }, {
        name: 'Placeholder',
        value: '#999'
      }, {
        name: 'Disabled text',
        value: '#ababab'
      }]
    }, {
      label: 'Border / Line',
      colors: [{
        name: 'Base border',
        value: '#d2d2d2'
      }, {
        name: 'Light border',
        value: '#ebebeb'
      }]
    }, {
      label: 'Brand Brown',
      colors: [{
        name: 'Brown Light',
        value: '#a8917b'
      }, {
        name: 'Brown Base',
        value: '#766554'
      }, {
        name: 'Brown Dark',
        value: '#4e4238'
      }]
    }].map(({
      label,
      colors
    }) => <div key={label}>
          <Typography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>{label}</Typography>
          <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
            {colors.map(({
          name,
          value
        }) => <div key={name} style={{
          minWidth: 100,
          flex: '0 0 auto'
        }}>
                <div style={{
            height: 36,
            borderRadius: 4,
            backgroundColor: value,
            border: '1px solid rgba(0,0,0,0.08)'
          }} />
                <div style={{
            fontSize: 11,
            color: '#444',
            marginTop: 4,
            lineHeight: 1.4
          }}>{name}</div>
                <div style={{
            fontSize: 11,
            color: '#767676',
            fontFamily: 'monospace'
          }}>{value}</div>
              </div>)}
          </div>
        </div>)}
    </div>
}`,...(ue=(me=z.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};const Me=["All","Buttons","Badges","Inputs","Selects","FileInputs","Modals","Toasts","Cards","Typographies","ColorTokens"];export{y as All,f as Badges,j as Buttons,I as Cards,z as ColorTokens,S as FileInputs,b as Inputs,T as Modals,B as Selects,C as Toasts,w as Typographies,Me as __namedExportsOrder,Pe as default};
