import{j as a}from"./jsx-runtime-Z5uAzocK.js";import{r as E}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const F="_pagination_1vx1d_1",M="_pageItem_1vx1d_10",O="_pageLink_1vx1d_14",R="_active_1vx1d_32",z="_offscreen_1vx1d_38",e={pagination:F,pageItem:M,pageLink:O,active:R,offscreen:z},g=({itemCount:d=0,cntPerPage:P=0,currentPage:n=0,onChangedPage:r})=>{const s=parseInt(""+(d-1)/P)+1,w=(()=>{let t=1,c=n,f=0;const b=[];s<11?(t=1,c=s):(f=n<5?5-n:n+5>s?n+5-s:0,t=n<5?1:n-4-f,c=n+5>s?s:n+5+f);for(let x=t;x<=c;x++)b.push(x);return b})(),o=(t,c)=>{t<=0||t>s||r==null||r(t,c)};return a.jsxs("ul",{className:e.pagination,children:[a.jsx("li",{className:`${e.pageItem} ${e.first}`,children:a.jsx("button",{type:"button",className:e.pageLink,onClick:()=>o(1,!0),children:a.jsx("span",{className:e.offscreen,children:"맨처음"})})}),a.jsx("li",{className:`${e.pageItem} ${e.prev}`,children:a.jsx("button",{type:"button",className:e.pageLink,onClick:()=>o(n-1,!0),children:a.jsx("span",{className:e.offscreen,children:"이전"})})}),w.map(t=>a.jsx("li",{className:`${e.pageItem} ${t===n?e.active:""}`,children:a.jsx("button",{type:"button",className:e.pageLink,onClick:()=>o(t,!0),children:t})},t)),a.jsx("li",{className:`${e.pageItem} ${e.next}`,children:a.jsx("button",{type:"button",className:e.pageLink,onClick:()=>o(n+1,!0),children:a.jsx("span",{className:e.offscreen,children:"다음"})})}),a.jsx("li",{className:`${e.pageItem} ${e.last}`,children:a.jsx("button",{type:"button",className:e.pageLink,onClick:()=>o(s,!0),children:a.jsx("span",{className:e.offscreen,children:"맨끝"})})})]})};g.displayName="Pagination";g.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{itemCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},cntPerPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChangedPage:{required:!1,tsType:{name:"signature",type:"function",raw:"(pageNo: number, eventFlag: boolean) => void",signature:{arguments:[{type:{name:"number"},name:"pageNo"},{type:{name:"boolean"},name:"eventFlag"}],return:{name:"void"}}},description:""}}};const H={title:"Components/Pagination",component:g,tags:["autodocs"],argTypes:{itemCount:{control:"number",description:"전체 아이템 수"},cntPerPage:{control:"number",description:"페이지당 아이템 수"},currentPage:{control:"number",description:"현재 페이지"},onChangedPage:{action:"onChangedPage",description:"페이지 변경 콜백"}},args:{itemCount:100,cntPerPage:10,currentPage:1}},i={},p={render:d=>{const[P,n]=E.useState(1);return a.jsx(g,{...d,currentPage:P,onChangedPage:r=>n(r)})}},l={args:{itemCount:5,cntPerPage:10,currentPage:1}},m={args:{itemCount:500,cntPerPage:10,currentPage:25}},u={args:{itemCount:100,cntPerPage:10,currentPage:10}};var C,h,v;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(v=(h=i.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,_,j;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const [page, setPage] = useState(1);
    return <Pagination {...args} currentPage={page} onChangedPage={pageNo => setPage(pageNo)} />;
  }
}`,...(j=(_=p.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var N,k,I;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    itemCount: 5,
    cntPerPage: 10,
    currentPage: 1
  }
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var L,$,S;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    itemCount: 500,
    cntPerPage: 10,
    currentPage: 25
  }
}`,...(S=($=m.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var T,V,q;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    itemCount: 100,
    cntPerPage: 10,
    currentPage: 10
  }
}`,...(q=(V=u.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const J=["Playground","Interactive","SinglePage","ManyPages","LastPage"];export{p as Interactive,u as LastPage,m as ManyPages,i as Playground,l as SinglePage,J as __namedExportsOrder,H as default};
