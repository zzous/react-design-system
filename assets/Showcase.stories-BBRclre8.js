import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as p}from"./index-pP6CS22B.js";import{B as a}from"./Button-BWCiDjjq.js";import{B as s}from"./Badge-DRjiUpTK.js";import{C as x}from"./Card-BtRqHh9H.js";import{I as d}from"./Input-CddHtW2J.js";import{S as c}from"./Select-eYk-0lVv.js";import{F as g}from"./FileInput-BJBz1YJr.js";import{M as Se}from"./Modal-bX49C5qL.js";import{T as Te,u as fe}from"./Toast-Dv0QIUXn.js";import{T as l}from"./Typography-BABwl0jj.js";import{I as v}from"./Icon-C4j3f1pi.js";import{P as w}from"./Pagination-CzaZlcwn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const m=({title:r,children:t})=>e.jsxs("section",{style:{marginBottom:40},children:[e.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#767676",borderBottom:"1px solid #ebebeb",paddingBottom:8,marginBottom:16},children:r}),t]}),Ne={title:"Showcase/전체 컴포넌트",parameters:{layout:"padded"},decorators:[r=>e.jsx(Te,{position:"topRight",children:e.jsx(r,{})})]};function ze(){const[r,t]=p.useState(""),[i,o]=p.useState(""),[F,u]=p.useState(!1),[k,je]=p.useState("medium"),[W,A]=p.useState([]),[be,Be]=p.useState(1),h=fe();return e.jsxs("div",{style:{maxWidth:900,margin:"0 auto"},children:[e.jsxs("div",{style:{marginBottom:32},children:[e.jsx(l,{variant:"h3",children:"디자인 시스템"}),e.jsx(l,{variant:"body2",color:"muted",children:"@starbanking/design-system 컴포넌트 쇼케이스"})]}),e.jsx(m,{title:"Button",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"small",children:"Small"}),e.jsx(a,{size:"medium",children:"Medium"}),e.jsx(a,{size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{leftIcon:e.jsx(v,{name:"send",size:"small"}),children:"이체하기"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx(v,{name:"download",size:"small"}),children:"다운로드"}),e.jsx(a,{variant:"secondary",leftIcon:e.jsx(v,{name:"plus",size:"small"}),children:"추가"})]})]})]})}),e.jsx(m,{title:"Badge",children:e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{variant:"primary",children:"Primary"}),e.jsx(s,{variant:"secondary",children:"Secondary"}),e.jsx(s,{variant:"success",dot:!0,children:"완료"}),e.jsx(s,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(s,{variant:"error",dot:!0,children:"실패"}),e.jsx(s,{variant:"info",children:"정보"}),e.jsx(s,{variant:"neutral",children:"중립"}),e.jsx(s,{variant:"success",size:"large",children:"Large"}),e.jsx(s,{variant:"neutral",size:"small",children:"Small"})]})}),e.jsx(m,{title:"Input",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(d,{label:"기본 입력",placeholder:"텍스트를 입력하세요"}),e.jsx(d,{label:"검색",placeholder:"검색어 입력",prefix:e.jsx(v,{name:"search",size:"small"}),value:r,onChange:n=>t(n.target.value)}),e.jsx(d,{label:"필수 항목",placeholder:"필수 값",required:!0}),e.jsx(d,{label:"오류 상태",placeholder:"잘못된 값",error:!0,errorText:"올바른 형식으로 입력해주세요."}),e.jsx(d,{label:"도움말",placeholder:"입력",helperText:"8자 이상 입력해주세요."}),e.jsx(d,{label:"비활성화",placeholder:"입력 불가",disabled:!0})]})}),e.jsx(m,{title:"Select",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(c,{label:"기본 선택",placeholder:"선택하세요",options:[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],value:i,onChange:n=>o(n.target.value)}),e.jsx(c,{label:"Small",size:"small",placeholder:"선택",options:[{value:"a",label:"Small A"},{value:"b",label:"Small B"}]}),e.jsx(c,{label:"Large",size:"large",placeholder:"선택",options:[{value:"a",label:"Large A"},{value:"b",label:"Large B"}]}),e.jsx(c,{label:"오류 상태",placeholder:"선택하세요",error:!0,errorText:"항목을 선택해주세요.",options:[{value:"a",label:"옵션 A"}]}),e.jsx(c,{label:"도움말",placeholder:"선택",helperText:"하나를 선택해주세요.",options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"}]}),e.jsx(c,{label:"비활성화",placeholder:"선택 불가",disabled:!0,options:[{value:"a",label:"옵션 A"}]})]})}),e.jsx(m,{title:"FileInput",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:520},children:[e.jsx(g,{label:"기본 파일 업로드",helperText:"모든 파일 형식 허용",onChange:A}),e.jsx(g,{label:"이미지 전용",accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024,helperText:"JPG, PNG, WEBP · 최대 5MB",onChange:A}),W.length>0&&e.jsxs(l,{variant:"caption",color:"muted",children:["선택된 파일: ",W.map(n=>n.name).join(", ")]}),e.jsx(g,{label:"비활성화",disabled:!0,onChange:()=>{}})]})}),e.jsxs(m,{title:"Modal",children:[e.jsx("div",{style:{display:"flex",gap:8},children:["small","medium","large"].map(n=>e.jsxs(a,{variant:"outline",onClick:()=>{je(n),u(!0)},children:[n.toUpperCase()," 모달 열기"]},n))}),e.jsx(Se,{open:F,onClose:()=>u(!1),title:`${k.toUpperCase()} 모달`,size:k,footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"outline",onClick:()=>u(!1),children:"취소"}),e.jsx(a,{onClick:()=>u(!1),children:"확인"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{variant:"body2",children:"모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다."}),e.jsx(d,{label:"모달 내부 입력",placeholder:"텍스트 입력"}),e.jsx(c,{label:"모달 내부 선택",placeholder:"선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"}]})]})})]}),e.jsx(m,{title:"Toast",children:e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",onClick:()=>h.success("성공!",{message:"작업이 성공적으로 완료되었습니다."}),children:"Success Toast"}),e.jsx(a,{variant:"danger",onClick:()=>h.error("오류 발생",{message:"처리 중 문제가 발생했습니다."}),children:"Error Toast"}),e.jsx(a,{variant:"outline",onClick:()=>h.warning("주의",{message:"이 작업은 되돌릴 수 없습니다."}),children:"Warning Toast"}),e.jsx(a,{variant:"ghost",onClick:()=>h.info("안내",{message:"새로운 업데이트가 있습니다."}),children:"Info Toast"})]})}),e.jsx(m,{title:"Card",children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[e.jsx(x,{variant:"raised",title:"Raised Card",description:"기본 그림자 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(x,{variant:"flat",title:"Flat Card",description:"테두리만 있는 플랫 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(x,{variant:"raised",title:"With Footer",description:"푸터가 있는 카드입니다.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{size:"small",variant:"outline",children:"취소"}),e.jsx(a,{size:"small",children:"확인"})]}),children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})})]})}),e.jsx(m,{title:"Pagination",children:e.jsx(w,{itemCount:100,cntPerPage:10,currentPage:be,onChangedPage:n=>Be(n)})}),e.jsx(m,{title:"Typography",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["h1","h2","h3","h4","h5","h6"].map(n=>e.jsxs(l,{variant:n,children:[n.toUpperCase()," — StarBanking 디자인 시스템"]},n)),e.jsx("div",{style:{height:8}}),e.jsx(l,{variant:"body1",children:"Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다."}),e.jsx(l,{variant:"body2",children:"Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다."}),e.jsx(l,{variant:"caption",children:"Caption — 보조 설명 텍스트"}),e.jsx(l,{variant:"overline",children:"Overline — 섹션 레이블"}),e.jsx(l,{variant:"label",children:"Label — 폼 레이블"}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["primary","secondary","success","warning","error","muted"].map(n=>e.jsx(l,{variant:"label",color:n,children:n},n))})]})}),e.jsx(m,{title:"Color Tokens",children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"KB Brand",colors:[{name:"Yellow Positive",value:"#FFBC00"},{name:"Yellow Negative",value:"#FFCC00"},{name:"Gray",value:"#60584C"},{name:"Dark Gray",value:"#545045"},{name:"Gold",value:"#C5A028"},{name:"Silver",value:"#A8AAAD"}]},{label:"Button / Surface",colors:[{name:"Primary (KB Yellow)",value:"#FFBC00"},{name:"Secondary (Navy)",value:"#253349"},{name:"Danger",value:"#ff3232"}]},{label:"Semantic",colors:[{name:"Success",value:"#36b37e"},{name:"Warning",value:"#ff8b00"},{name:"Error",value:"#ff5630"},{name:"Info",value:"#2563eb"}]},{label:"Text",colors:[{name:"Strong",value:"#222222"},{name:"Base",value:"#444444"},{name:"Muted",value:"#767676"},{name:"Placeholder",value:"#999999"},{name:"Disabled",value:"#ababab"}]},{label:"Border / Surface",colors:[{name:"Border",value:"#d2d2d2"},{name:"Border Light",value:"#ebebeb"},{name:"Surface Hover",value:"#f2f2f2"},{name:"Surface",value:"#ffffff"}]}].map(({label:n,colors:Ce})=>e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:n}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:Ce.map(({name:L,value:M})=>e.jsxs("div",{style:{minWidth:100,flex:"0 0 auto"},children:[e.jsx("div",{style:{height:36,borderRadius:4,backgroundColor:M,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:11,color:"#444",marginTop:4,lineHeight:1.4},children:L}),e.jsx("div",{style:{fontSize:11,color:"#767676",fontFamily:"monospace"},children:M})]},L))})]},n))})})]})}const y={name:"전체 쇼케이스",render:()=>e.jsx(ze,{})},S={name:"Button — 전체",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:20},children:[e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Variants"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"secondary",children:"Secondary"}),e.jsx(a,{variant:"outline",children:"Outline"}),e.jsx(a,{variant:"ghost",children:"Ghost"}),e.jsx(a,{variant:"danger",children:"Danger"}),e.jsx(a,{disabled:!0,children:"Disabled"}),e.jsx(a,{loading:!0,children:"Loading"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"Sizes"}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(a,{size:"small",children:"Small"}),e.jsx(a,{size:"medium",children:"Medium"}),e.jsx(a,{size:"large",children:"Large"})]})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"With Icons"}),e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{leftIcon:e.jsx(v,{name:"send",size:"small"}),children:"이체하기"}),e.jsx(a,{variant:"outline",rightIcon:e.jsx(v,{name:"download",size:"small"}),children:"다운로드"}),e.jsx(a,{variant:"secondary",leftIcon:e.jsx(v,{name:"plus",size:"small"}),children:"추가"})]})]})]})},f={name:"Badge — 전체",render:()=>e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"},children:[e.jsx(s,{variant:"primary",children:"Primary"}),e.jsx(s,{variant:"secondary",children:"Secondary"}),e.jsx(s,{variant:"success",dot:!0,children:"완료"}),e.jsx(s,{variant:"warning",dot:!0,children:"처리중"}),e.jsx(s,{variant:"error",dot:!0,children:"실패"}),e.jsx(s,{variant:"info",children:"정보"}),e.jsx(s,{variant:"neutral",children:"중립"}),e.jsx(s,{variant:"success",size:"large",children:"Large"}),e.jsx(s,{variant:"neutral",size:"small",children:"Small"})]})},j={name:"Input — 전체",render:()=>{function r(){const[t,i]=p.useState("");return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(d,{label:"기본 입력",placeholder:"텍스트를 입력하세요"}),e.jsx(d,{label:"검색",placeholder:"검색어 입력",prefix:e.jsx(v,{name:"search",size:"small"}),value:t,onChange:o=>i(o.target.value)}),e.jsx(d,{label:"필수 항목",placeholder:"필수 값",required:!0}),e.jsx(d,{label:"오류 상태",placeholder:"잘못된 값",error:!0,errorText:"올바른 형식으로 입력해주세요."}),e.jsx(d,{label:"도움말",placeholder:"입력",helperText:"8자 이상 입력해주세요."}),e.jsx(d,{label:"비활성화",placeholder:"입력 불가",disabled:!0})]})}return e.jsx(r,{})}},b={name:"Select — 전체",render:()=>{function r(){const[t,i]=p.useState("");return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:[e.jsx(c,{label:"기본 선택",placeholder:"선택하세요",options:[{value:"option1",label:"옵션 1"},{value:"option2",label:"옵션 2"},{value:"option3",label:"옵션 3"}],value:t,onChange:o=>i(o.target.value)}),e.jsx(c,{label:"Small",size:"small",placeholder:"선택",options:[{value:"a",label:"Small A"},{value:"b",label:"Small B"}]}),e.jsx(c,{label:"Large",size:"large",placeholder:"선택",options:[{value:"a",label:"Large A"},{value:"b",label:"Large B"}]}),e.jsx(c,{label:"오류 상태",placeholder:"선택하세요",error:!0,errorText:"항목을 선택해주세요.",options:[{value:"a",label:"옵션 A"}]}),e.jsx(c,{label:"도움말",placeholder:"선택",helperText:"하나를 선택해주세요.",options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"}]}),e.jsx(c,{label:"비활성화",placeholder:"선택 불가",disabled:!0,options:[{value:"a",label:"옵션 A"}]})]})}return e.jsx(r,{})}},B={name:"FileInput — 전체",render:()=>{function r(){const[t,i]=p.useState([]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:520},children:[e.jsx(g,{label:"기본 파일 업로드",helperText:"모든 파일 형식 허용",onChange:i}),e.jsx(g,{label:"이미지 전용",accept:".jpg,.jpeg,.png,.webp",maxSize:5*1024*1024,helperText:"JPG, PNG, WEBP · 최대 5MB",onChange:i}),t.length>0&&e.jsxs(l,{variant:"caption",color:"muted",children:["선택된 파일: ",t.map(o=>o.name).join(", ")]}),e.jsx(g,{label:"비활성화",disabled:!0,onChange:()=>{}})]})}return e.jsx(r,{})}},C={name:"Modal — 전체",render:()=>{function r(){const[t,i]=p.useState(!1),[o,F]=p.useState("medium");return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:8},children:["small","medium","large"].map(u=>e.jsxs(a,{variant:"outline",onClick:()=>{F(u),i(!0)},children:[u.toUpperCase()," 모달 열기"]},u))}),e.jsx(Se,{open:t,onClose:()=>i(!1),title:`${o.toUpperCase()} 모달`,size:o,footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{variant:"outline",onClick:()=>i(!1),children:"취소"}),e.jsx(a,{onClick:()=>i(!1),children:"확인"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{variant:"body2",children:"모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다."}),e.jsx(d,{label:"모달 내부 입력",placeholder:"텍스트 입력"}),e.jsx(c,{label:"모달 내부 선택",placeholder:"선택하세요",options:[{value:"1",label:"옵션 1"},{value:"2",label:"옵션 2"}]})]})})]})}return e.jsx(r,{})}},T={name:"Toast — 전체",render:()=>{function r(){const t=fe();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",onClick:()=>t.success("성공!",{message:"작업이 성공적으로 완료되었습니다."}),children:"Success Toast"}),e.jsx(a,{variant:"danger",onClick:()=>t.error("오류 발생",{message:"처리 중 문제가 발생했습니다."}),children:"Error Toast"}),e.jsx(a,{variant:"outline",onClick:()=>t.warning("주의",{message:"이 작업은 되돌릴 수 없습니다."}),children:"Warning Toast"}),e.jsx(a,{variant:"ghost",onClick:()=>t.info("안내",{message:"새로운 업데이트가 있습니다."}),children:"Info Toast"})]})}return e.jsx(r,{})}},z={name:"Card — 전체",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(240px, 1fr))",gap:16},children:[e.jsx(x,{variant:"raised",title:"Raised Card",description:"기본 그림자 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(x,{variant:"flat",title:"Flat Card",description:"테두리만 있는 플랫 카드입니다.",children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})}),e.jsx(x,{variant:"raised",title:"With Footer",description:"푸터가 있는 카드입니다.",footer:e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{size:"small",variant:"outline",children:"취소"}),e.jsx(a,{size:"small",children:"확인"})]}),children:e.jsx(l,{variant:"body2",children:"카드 본문 내용이 여기에 들어갑니다."})})]})},I={name:"Pagination — 전체",render:()=>{function r(){const[t,i]=p.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsxs(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:["100개 · 10개씩 (현재: ",t,"페이지)"]}),e.jsx(w,{itemCount:100,cntPerPage:10,currentPage:t,onChangedPage:o=>i(o)})]}),e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:"500개 · 10개씩"}),e.jsx(w,{itemCount:500,cntPerPage:10,currentPage:1})]})]})}return e.jsx(r,{})}},P={name:"Typography — 전체",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[["h1","h2","h3","h4","h5","h6"].map(r=>e.jsxs(l,{variant:r,children:[r.toUpperCase()," — StarBanking 디자인 시스템"]},r)),e.jsx("div",{style:{height:8}}),e.jsx(l,{variant:"body1",children:"Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다."}),e.jsx(l,{variant:"body2",children:"Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다."}),e.jsx(l,{variant:"caption",children:"Caption — 보조 설명 텍스트"}),e.jsx(l,{variant:"overline",children:"Overline — 섹션 레이블"}),e.jsx(l,{variant:"label",children:"Label — 폼 레이블"}),e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginTop:4},children:["primary","secondary","success","warning","error","muted"].map(r=>e.jsx(l,{variant:"label",color:r,children:r},r))})]})},D={name:"Color Tokens",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[{label:"KB Brand",colors:[{name:"Yellow Positive",value:"#FFBC00"},{name:"Yellow Negative",value:"#FFCC00"},{name:"Gray",value:"#60584C"},{name:"Dark Gray",value:"#545045"},{name:"Gold",value:"#C5A028"},{name:"Silver",value:"#A8AAAD"}]},{label:"Button / Surface",colors:[{name:"Primary (KB Yellow)",value:"#FFBC00"},{name:"Secondary (Navy)",value:"#253349"},{name:"Danger",value:"#ff3232"}]},{label:"Semantic",colors:[{name:"Success",value:"#36b37e"},{name:"Warning",value:"#ff8b00"},{name:"Error",value:"#ff5630"},{name:"Info",value:"#2563eb"}]},{label:"Text",colors:[{name:"Strong",value:"#222222"},{name:"Base",value:"#444444"},{name:"Muted",value:"#767676"},{name:"Placeholder",value:"#999999"},{name:"Disabled",value:"#ababab"}]},{label:"Border / Surface",colors:[{name:"Border",value:"#d2d2d2"},{name:"Border Light",value:"#ebebeb"},{name:"Surface Hover",value:"#f2f2f2"},{name:"Surface",value:"#ffffff"}]}].map(({label:r,colors:t})=>e.jsxs("div",{children:[e.jsx(l,{variant:"caption",color:"muted",as:"div",style:{marginBottom:8},children:r}),e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:t.map(({name:i,value:o})=>e.jsxs("div",{style:{minWidth:100,flex:"0 0 auto"},children:[e.jsx("div",{style:{height:36,borderRadius:4,backgroundColor:o,border:"1px solid rgba(0,0,0,0.08)"}}),e.jsx("div",{style:{fontSize:11,color:"#444",marginTop:4,lineHeight:1.4},children:i}),e.jsx("div",{style:{fontSize:11,color:"#767676",fontFamily:"monospace"},children:o})]},i))})]},r))})};var G,O,V;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '전체 쇼케이스',
  render: () => <ShowcaseAll />
}`,...(V=(O=y.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var E,R,N;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Button — 전체',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 20
  }}>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Variants</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <SButton variant="primary">Primary</SButton>
          <SButton variant="secondary">Secondary</SButton>
          <SButton variant="outline">Outline</SButton>
          <SButton variant="ghost">Ghost</SButton>
          <SButton variant="danger">Danger</SButton>
          <SButton disabled>Disabled</SButton>
          <SButton loading>Loading</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>Sizes</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <SButton size="small">Small</SButton>
          <SButton size="medium">Medium</SButton>
          <SButton size="large">Large</SButton>
        </div>
      </div>
      <div>
        <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>With Icons</STypography>
        <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <SButton leftIcon={<SIcon name="send" size="small" />}>이체하기</SButton>
          <SButton variant="outline" rightIcon={<SIcon name="download" size="small" />}>다운로드</SButton>
          <SButton variant="secondary" leftIcon={<SIcon name="plus" size="small" />}>추가</SButton>
        </div>
      </div>
    </div>
}`,...(N=(R=S.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var U,Y,H;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Badge — 전체',
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <SBadge variant="primary">Primary</SBadge>
      <SBadge variant="secondary">Secondary</SBadge>
      <SBadge variant="success" dot>완료</SBadge>
      <SBadge variant="warning" dot>처리중</SBadge>
      <SBadge variant="error" dot>실패</SBadge>
      <SBadge variant="info">정보</SBadge>
      <SBadge variant="neutral">중립</SBadge>
      <SBadge variant="success" size="large">Large</SBadge>
      <SBadge variant="neutral" size="small">Small</SBadge>
    </div>
}`,...(H=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var K,q,J;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Input — 전체',
  render: () => {
    function InputDemo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
          <SInput label="기본 입력" placeholder="텍스트를 입력하세요" />
          <SInput label="검색" placeholder="검색어 입력" prefix={<SIcon name="search" size="small" />} value={val} onChange={e => setVal(e.target.value)} />
          <SInput label="필수 항목" placeholder="필수 값" required />
          <SInput label="오류 상태" placeholder="잘못된 값" error errorText="올바른 형식으로 입력해주세요." />
          <SInput label="도움말" placeholder="입력" helperText="8자 이상 입력해주세요." />
          <SInput label="비활성화" placeholder="입력 불가" disabled />
        </div>;
    }
    return <InputDemo />;
  }
}`,...(J=(q=j.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var $,_,Q;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Select — 전체',
  render: () => {
    function SelectDemo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 16
      }}>
          <SSelect label="기본 선택" placeholder="선택하세요" options={[{
          value: 'option1',
          label: '옵션 1'
        }, {
          value: 'option2',
          label: '옵션 2'
        }, {
          value: 'option3',
          label: '옵션 3'
        }]} value={val} onChange={e => setVal(e.target.value)} />
          <SSelect label="Small" size="small" placeholder="선택" options={[{
          value: 'a',
          label: 'Small A'
        }, {
          value: 'b',
          label: 'Small B'
        }]} />
          <SSelect label="Large" size="large" placeholder="선택" options={[{
          value: 'a',
          label: 'Large A'
        }, {
          value: 'b',
          label: 'Large B'
        }]} />
          <SSelect label="오류 상태" placeholder="선택하세요" error errorText="항목을 선택해주세요." options={[{
          value: 'a',
          label: '옵션 A'
        }]} />
          <SSelect label="도움말" placeholder="선택" helperText="하나를 선택해주세요." options={[{
          value: 'a',
          label: '옵션 A'
        }, {
          value: 'b',
          label: '옵션 B'
        }]} />
          <SSelect label="비활성화" placeholder="선택 불가" disabled options={[{
          value: 'a',
          label: '옵션 A'
        }]} />
        </div>;
    }
    return <SelectDemo />;
  }
}`,...(Q=(_=b.parameters)==null?void 0:_.docs)==null?void 0:Q.source}}};var X,Z,ee;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
          <SFileInput label="기본 파일 업로드" helperText="모든 파일 형식 허용" onChange={setFiles} />
          <SFileInput label="이미지 전용" accept=".jpg,.jpeg,.png,.webp" maxSize={5 * 1024 * 1024} helperText="JPG, PNG, WEBP · 최대 5MB" onChange={setFiles} />
          {files.length > 0 && <STypography variant="caption" color="muted">선택된 파일: {files.map(f => f.name).join(', ')}</STypography>}
          <SFileInput label="비활성화" disabled onChange={() => {}} />
        </div>;
    }
    return <FileInputDemo />;
  }
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,le,re;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Modal — 전체',
  render: () => {
    function ModalDemo() {
      const [open, setOpen] = useState(false);
      const [size, setSize] = useState<'small' | 'medium' | 'large'>('medium');
      return <>
          <div style={{
          display: 'flex',
          gap: 8
        }}>
            {(['small', 'medium', 'large'] as const).map(s => <SButton key={s} variant="outline" onClick={() => {
            setSize(s);
            setOpen(true);
          }}>
                {s.toUpperCase()} 모달 열기
              </SButton>)}
          </div>
          <SModal open={open} onClose={() => setOpen(false)} title={\`\${size.toUpperCase()} 모달\`} size={size} footer={<div style={{
          display: 'flex',
          gap: 8
        }}>
                <SButton variant="outline" onClick={() => setOpen(false)}>취소</SButton>
                <SButton onClick={() => setOpen(false)}>확인</SButton>
              </div>}>
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
              <STypography variant="body2">모달 컴포넌트입니다. 사이즈는 small / medium / large 를 지원합니다.</STypography>
              <SInput label="모달 내부 입력" placeholder="텍스트 입력" />
              <SSelect label="모달 내부 선택" placeholder="선택하세요" options={[{
              value: '1',
              label: '옵션 1'
            }, {
              value: '2',
              label: '옵션 2'
            }]} />
            </div>
          </SModal>
        </>;
    }
    return <ModalDemo />;
  }
}`,...(re=(le=C.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,ne,ie;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Toast — 전체',
  render: () => {
    function ToastDemo() {
      const toast = useToast();
      return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }}>
          <SButton variant="primary" onClick={() => toast.success('성공!', {
          message: '작업이 성공적으로 완료되었습니다.'
        })}>Success Toast</SButton>
          <SButton variant="danger" onClick={() => toast.error('오류 발생', {
          message: '처리 중 문제가 발생했습니다.'
        })}>Error Toast</SButton>
          <SButton variant="outline" onClick={() => toast.warning('주의', {
          message: '이 작업은 되돌릴 수 없습니다.'
        })}>Warning Toast</SButton>
          <SButton variant="ghost" onClick={() => toast.info('안내', {
          message: '새로운 업데이트가 있습니다.'
        })}>Info Toast</SButton>
        </div>;
    }
    return <ToastDemo />;
  }
}`,...(ie=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var se,oe,de;z.parameters={...z.parameters,docs:{...(se=z.parameters)==null?void 0:se.docs,source:{originalSource:`{
  name: 'Card — 전체',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: 16
  }}>
      <SCard variant="raised" title="Raised Card" description="기본 그림자 카드입니다.">
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
      <SCard variant="flat" title="Flat Card" description="테두리만 있는 플랫 카드입니다.">
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
      <SCard variant="raised" title="With Footer" description="푸터가 있는 카드입니다." footer={<div style={{
      display: 'flex',
      gap: 8
    }}>
            <SButton size="small" variant="outline">취소</SButton>
            <SButton size="small">확인</SButton>
          </div>}>
        <STypography variant="body2">카드 본문 내용이 여기에 들어갑니다.</STypography>
      </SCard>
    </div>
}`,...(de=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ce,pe,me;I.parameters={...I.parameters,docs:{...(ce=I.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  name: 'Pagination — 전체',
  render: () => {
    function PaginationDemo() {
      const [page, setPage] = useState(1);
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>100개 · 10개씩 (현재: {page}페이지)</STypography>
            <SPagination itemCount={100} cntPerPage={10} currentPage={page} onChangedPage={p => setPage(p)} />
          </div>
          <div>
            <STypography variant="caption" color="muted" as="div" style={{
            marginBottom: 8
          }}>500개 · 10개씩</STypography>
            <SPagination itemCount={500} cntPerPage={10} currentPage={1} />
          </div>
        </div>;
    }
    return <PaginationDemo />;
  }
}`,...(me=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ue,ve,xe;P.parameters={...P.parameters,docs:{...(ue=P.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  name: 'Typography — 전체',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const).map(v => <STypography key={v} variant={v}>{v.toUpperCase()} — StarBanking 디자인 시스템</STypography>)}
      <div style={{
      height: 8
    }} />
      <STypography variant="body1">Body1 — 본문 텍스트. StarBanking 디자인 시스템은 뱅킹 서비스에 최적화된 React 컴포넌트 라이브러리입니다.</STypography>
      <STypography variant="body2">Body2 — 보조 본문 텍스트. 좀 더 작은 본문에 사용됩니다.</STypography>
      <STypography variant="caption">Caption — 보조 설명 텍스트</STypography>
      <STypography variant="overline">Overline — 섹션 레이블</STypography>
      <STypography variant="label">Label — 폼 레이블</STypography>
      <div style={{
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap',
      marginTop: 4
    }}>
        {(['primary', 'secondary', 'success', 'warning', 'error', 'muted'] as const).map(c => <STypography key={c} variant="label" color={c}>{c}</STypography>)}
      </div>
    </div>
}`,...(xe=(ve=P.parameters)==null?void 0:ve.docs)==null?void 0:xe.source}}};var ge,he,ye;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Color Tokens',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {[{
      label: 'KB Brand',
      colors: [{
        name: 'Yellow Positive',
        value: '#FFBC00'
      }, {
        name: 'Yellow Negative',
        value: '#FFCC00'
      }, {
        name: 'Gray',
        value: '#60584C'
      }, {
        name: 'Dark Gray',
        value: '#545045'
      }, {
        name: 'Gold',
        value: '#C5A028'
      }, {
        name: 'Silver',
        value: '#A8AAAD'
      }]
    }, {
      label: 'Button / Surface',
      colors: [{
        name: 'Primary (KB Yellow)',
        value: '#FFBC00'
      }, {
        name: 'Secondary (Navy)',
        value: '#253349'
      }, {
        name: 'Danger',
        value: '#ff3232'
      }]
    }, {
      label: 'Semantic',
      colors: [{
        name: 'Success',
        value: '#36b37e'
      }, {
        name: 'Warning',
        value: '#ff8b00'
      }, {
        name: 'Error',
        value: '#ff5630'
      }, {
        name: 'Info',
        value: '#2563eb'
      }]
    }, {
      label: 'Text',
      colors: [{
        name: 'Strong',
        value: '#222222'
      }, {
        name: 'Base',
        value: '#444444'
      }, {
        name: 'Muted',
        value: '#767676'
      }, {
        name: 'Placeholder',
        value: '#999999'
      }, {
        name: 'Disabled',
        value: '#ababab'
      }]
    }, {
      label: 'Border / Surface',
      colors: [{
        name: 'Border',
        value: '#d2d2d2'
      }, {
        name: 'Border Light',
        value: '#ebebeb'
      }, {
        name: 'Surface Hover',
        value: '#f2f2f2'
      }, {
        name: 'Surface',
        value: '#ffffff'
      }]
    }].map(({
      label,
      colors
    }) => <div key={label}>
          <STypography variant="caption" color="muted" as="div" style={{
        marginBottom: 8
      }}>{label}</STypography>
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
}`,...(ye=(he=D.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};const Ue=["All","Buttons","Badges","Inputs","Selects","FileInputs","Modals","Toasts","Cards","Paginations","Typographies","ColorTokens"];export{y as All,f as Badges,S as Buttons,z as Cards,D as ColorTokens,B as FileInputs,j as Inputs,C as Modals,I as Paginations,b as Selects,T as Toasts,P as Typographies,Ue as __namedExportsOrder,Ne as default};
