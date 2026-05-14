import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as F}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const P="_item_nlrd8_1",z="_label_nlrd8_7",A="_input_nlrd8_12",H="_formControl_nlrd8_18",O="_select_nlrd8_19",B="_radio_nlrd8_28",G="_checkbox_nlrd8_29",s={item:P,label:z,input:A,formControl:H,select:O,radio:B,checkbox:G},o=({label:a,type:t,selectData:l,value:i,changeValue:y})=>{const p=r=>{console.log("검색어 변경:",r.target.value),y==null||y(r.target.value)};return e.jsxs("div",{className:s.item,children:[e.jsx("label",{className:s.label,children:a}),t==="input"&&e.jsx("span",{className:s.input,children:e.jsx("input",{type:"text",className:s.formControl,onChange:p,value:i||""})}),t==="select"&&e.jsx("span",{className:s.input,children:e.jsxs("select",{className:s.select,onChange:p,value:i||"",children:[e.jsx("option",{value:"",children:"선택하세요"}),l==null?void 0:l.map((r,n)=>e.jsx("option",{value:r.value,children:r.label},n))]})}),t==="radio"&&e.jsx("span",{className:s.input,children:l==null?void 0:l.map((r,n)=>e.jsxs("span",{className:s.radio,children:[e.jsx("input",{type:"radio",id:`${a}-option${n}`,name:a,value:r.value,checked:i===r.value,onChange:p}),e.jsxs("label",{htmlFor:`${a}-option${n}`,children:[r.label," "]})]},n))}),t==="checkbox"&&e.jsx("span",{className:s.input,children:l==null?void 0:l.map((r,n)=>e.jsxs("span",{className:s.checkbox,children:[e.jsx("input",{type:"checkbox",id:`${a}-option${n}`,name:a,value:r.value,checked:i===r.value,onChange:p}),e.jsx("label",{htmlFor:`${a}-option${n}`,children:r.label})]},n))})]})};o.displayName="SearchItem";o.__docgenInfo={description:"",methods:[],displayName:"SearchItem",props:{label:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},selectData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"{ value: string; label: string }[]"},description:""},changeValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const c=[{value:"roulette",label:"룰렛"},{value:"normal",label:"일반"},{value:"quiz",label:"퀴즈"}],M={title:"Components/SearchItem",component:o,tags:["autodocs"],argTypes:{label:{control:"text",description:"라벨 텍스트"},type:{control:"select",options:["input","select","radio","checkbox"],description:"검색 항목 타입"},value:{control:"text",description:"현재 값"},changeValue:{action:"changeValue",description:"값 변경 콜백"}},args:{label:"검색어",type:"input",value:""}},u={},m={args:{label:"이벤트 명",type:"input",value:""}},d={args:{label:"이벤트 유형",type:"select",value:"normal",selectData:c}},g={args:{label:"이벤트 타입",type:"radio",value:"normal",selectData:c}},h={args:{label:"이벤트 유형",type:"checkbox",value:"roulette",selectData:c}},v={render:()=>{const[a,t]=F.useState("normal");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(o,{label:"이벤트 명",type:"input",value:a,changeValue:t}),e.jsx(o,{label:"이벤트 유형",type:"select",value:a,selectData:c,changeValue:t}),e.jsx(o,{label:"이벤트 타입",type:"radio",value:a,selectData:c,changeValue:t}),e.jsx(o,{label:"이벤트 체크",type:"checkbox",value:a,selectData:c,changeValue:t}),e.jsxs("div",{children:["현재 값: ",e.jsx("strong",{children:a})]})]})}};var x,b,j;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(j=(b=u.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var _,f,S;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: '이벤트 명',
    type: 'input',
    value: ''
  }
}`,...(S=(f=m.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var k,T,V;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: '이벤트 유형',
    type: 'select',
    value: 'normal',
    selectData: sampleData
  }
}`,...(V=(T=d.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var I,N,C;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: '이벤트 타입',
    type: 'radio',
    value: 'normal',
    selectData: sampleData
  }
}`,...(C=(N=g.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var q,D,$;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: '이벤트 유형',
    type: 'checkbox',
    value: 'roulette',
    selectData: sampleData
  }
}`,...($=(D=h.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var w,E,R;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(E=v.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const Q=["Playground","InputType","SelectType","RadioType","CheckboxType","Interactive"];export{h as CheckboxType,m as InputType,v as Interactive,u as Playground,g as RadioType,d as SelectType,Q as __namedExportsOrder,M as default};
