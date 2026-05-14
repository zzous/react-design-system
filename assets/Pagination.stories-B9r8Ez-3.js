import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as F}from"./index-pP6CS22B.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";const p=({itemCount:g=0,cntPerPage:d=0,currentPage:a=0,onChangedPage:r})=>{const n=parseInt(""+(g-1)/d)+1,E=(()=>{let t=1,o=a,P=0;const x=[];n<11?(t=1,o=n):(P=a<5?5-a:a+5>n?a+5-n:0,t=a<5?1:a-4-P,o=a+5>n?n:a+5+P);for(let f=t;f<=o;f++)x.push(f);return x})(),s=(t,o)=>{t<=0||t>n||r==null||r(t,o)};return e.jsxs("ul",{className:"pagination",children:[e.jsx("li",{className:"page-item first",children:e.jsx("button",{type:"button",className:"page-link",onClick:()=>s(1,!0),children:e.jsx("span",{className:"offscreen",children:"맨처음"})})}),e.jsx("li",{className:"page-item prev",children:e.jsx("button",{type:"button",className:"page-link",onClick:()=>s(a-1,!0),children:e.jsx("span",{className:"offscreen",children:"이전"})})}),E.map(t=>e.jsx("li",{className:`page-item ${t===a?"active":""}`,children:e.jsx("button",{type:"button",className:"page-link",onClick:()=>s(t,!0),children:t})},t)),e.jsx("li",{className:"page-item next",children:e.jsx("button",{type:"button",className:"page-link",onClick:()=>s(a+1,!0),children:e.jsx("span",{className:"offscreen",children:"다음"})})}),e.jsx("li",{className:"page-item last",children:e.jsx("button",{type:"button",className:"page-link",onClick:()=>s(n,!0),children:e.jsx("span",{className:"offscreen",children:"맨끝"})})})]})};p.displayName="Pagination";p.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{itemCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cntPerPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChangedPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(pageNo: number, eventFlag: boolean) => void",signature:{arguments:[{type:{name:"number"},name:"pageNo"},{type:{name:"boolean"},name:"eventFlag"}],return:{name:"void"}}},description:""}}};const z={title:"Components/Pagination",component:p,tags:["autodocs"],argTypes:{itemCount:{control:"number",description:"전체 아이템 수"},cntPerPage:{control:"number",description:"페이지당 아이템 수"},currentPage:{control:"number",description:"현재 페이지"},onChangedPage:{action:"onChangedPage",description:"페이지 변경 콜백"}},args:{itemCount:100,cntPerPage:10,currentPage:1}},c={},i={render:g=>{const[d,a]=F.useState(1);return e.jsx(p,{...g,currentPage:d,onChangedPage:r=>a(r)})}},l={args:{itemCount:5,cntPerPage:10,currentPage:1}},u={args:{itemCount:500,cntPerPage:10,currentPage:25}},m={args:{itemCount:100,cntPerPage:10,currentPage:10}};var b,C,h;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(h=(C=c.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var y,j,N;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} currentPage={page} onChangedPage={pageNo => setPage(pageNo)} />;
  }
}`,...(N=(j=i.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var v,k,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    itemCount: 5,
    cntPerPage: 10,
    currentPage: 1
  }
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,V,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    itemCount: 500,
    cntPerPage: 10,
    currentPage: 25
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var w,I,_;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    itemCount: 100,
    cntPerPage: 10,
    currentPage: 10
  }
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const A=["Playground","Interactive","SinglePage","ManyPages","LastPage"];export{i as Interactive,m as LastPage,u as ManyPages,c as Playground,l as SinglePage,A as __namedExportsOrder,z as default};
