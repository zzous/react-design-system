import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as R}from"./index-pP6CS22B.js";/* empty css              */import"./_commonjsHelpers-Cpj98o6Y.js";const n=({label:a,type:s,selectData:t,value:c,changeValue:h})=>{const i=r=>{console.log("검색어 변경:",r.target.value),h==null||h(r.target.value)};return e.jsxs("div",{className:"item",children:[e.jsx("label",{children:a}),s==="input"&&e.jsx("span",{className:"input",children:e.jsx("input",{type:"text",className:"form-control",onChange:i,value:c||""})}),s==="select"&&e.jsx("span",{className:"input",children:e.jsxs("select",{className:"custom-select",onChange:i,value:c||"",children:[e.jsx("option",{value:"",children:"선택하세요"}),t==null?void 0:t.map((r,l)=>e.jsx("option",{value:r.value,children:r.label},l))]})}),s==="radio"&&e.jsx("span",{className:"input",children:t==null?void 0:t.map((r,l)=>e.jsxs("span",{className:"radio",children:[e.jsx("input",{type:"radio",id:`${a}-option${l}`,name:a,value:r.value,checked:c===r.value,onChange:i}),e.jsxs("label",{htmlFor:`${a}-option${l}`,children:[r.label," "]})]},l))}),s==="checkbox"&&e.jsx("span",{className:"input",children:t==null?void 0:t.map((r,l)=>e.jsxs("span",{className:"checkbox",children:[e.jsx("input",{type:"checkbox",id:`${a}-option${l}`,name:a,value:r.value,checked:c===r.value,onChange:i}),e.jsx("label",{htmlFor:`${a}-option${l}`,children:r.label})]},l))})]})};n.displayName="SearchItem";n.__docgenInfo={description:"",methods:[],displayName:"SearchItem",props:{label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},selectData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},changeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const o=[{value:"roulette",label:"룰렛"},{value:"normal",label:"일반"},{value:"quiz",label:"퀴즈"}],H={title:"Components/SearchItem",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"라벨 텍스트"},type:{control:"select",options:["input","select","radio","checkbox"],description:"검색 항목 타입"},value:{control:"text",description:"현재 값"},changeValue:{action:"changeValue",description:"값 변경 콜백"}},args:{label:"검색어",type:"input",value:""}},p={},u={args:{label:"이벤트 명",type:"input",value:""}},m={args:{label:"이벤트 유형",type:"select",value:"normal",selectData:o}},d={args:{label:"이벤트 타입",type:"radio",value:"normal",selectData:o}},g={args:{label:"이벤트 유형",type:"checkbox",value:"roulette",selectData:o}},v={render:()=>{const[a,s]=R.useState("normal");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(n,{label:"이벤트 명",type:"input",value:a,changeValue:s}),e.jsx(n,{label:"이벤트 유형",type:"select",value:a,selectData:o,changeValue:s}),e.jsx(n,{label:"이벤트 타입",type:"radio",value:a,selectData:o,changeValue:s}),e.jsx(n,{label:"이벤트 체크",type:"checkbox",value:a,selectData:o,changeValue:s}),e.jsxs("div",{children:["현재 값: ",e.jsx("strong",{children:a})]})]})}};var y,x,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(b=(x=p.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var j,S,f;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: '이벤트 명',
    type: 'input',
    value: ''
  }
}`,...(f=(S=u.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var k,T,V;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: '이벤트 유형',
    type: 'select',
    value: 'normal',
    selectData: sampleData
  }
}`,...(V=(T=m.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var I,N,q;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: '이벤트 타입',
    type: 'radio',
    value: 'normal',
    selectData: sampleData
  }
}`,...(q=(N=d.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var D,$,C;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: '이벤트 유형',
    type: 'checkbox',
    value: 'roulette',
    selectData: sampleData
  }
}`,...(C=($=g.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var _,w,E;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('normal');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <SearchItem label="이벤트 명" type="input" value={value} changeValue={setValue} />
        <SearchItem label="이벤트 유형" type="select" value={value} selectData={sampleData} changeValue={setValue} />
        <SearchItem label="이벤트 타입" type="radio" value={value} selectData={sampleData} changeValue={setValue} />
        <SearchItem label="이벤트 체크" type="checkbox" value={value} selectData={sampleData} changeValue={setValue} />
        <div>현재 값: <strong>{value}</strong></div>
      </div>;
  }
}`,...(E=(w=v.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};const O=["Playground","InputType","SelectType","RadioType","CheckboxType","Interactive"];export{g as CheckboxType,u as InputType,v as Interactive,p as Playground,d as RadioType,m as SelectType,O as __namedExportsOrder,H as default};
