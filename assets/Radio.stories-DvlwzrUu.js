import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{r as u}from"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const Y="_group_pkqzw_2",$="_horizontal_pkqzw_8",F="_radio_pkqzw_15",L="_disabled_pkqzw_23",M="_input_pkqzw_29",Q="_circle_pkqzw_38",X="_checked_pkqzw_65",Z="_small_pkqzw_84",ee="_label_pkqzw_86",ae="_medium_pkqzw_88",le="_large_pkqzw_92",s={group:Y,horizontal:$,radio:F,disabled:L,input:M,circle:Q,checked:X,small:Z,label:ee,medium:ae,large:le},H=u.createContext(null),t=({name:n,value:l,options:r,size:o="medium",direction:a="horizontal",disabled:h=!1,onChange:d})=>e.jsx(H.Provider,{value:{name:n,value:l,size:o,disabled:h,onChange:d},children:e.jsx("div",{className:[s.group,a==="horizontal"?s.horizontal:""].filter(Boolean).join(" "),role:"radiogroup",children:r.map(i=>e.jsx(y,{value:i.value,label:i.label,disabled:i.disabled},i.value))})});t.displayName="SRadioGroup";const y=({value:n,label:l,size:r,disabled:o})=>{const a=u.useContext(H),h=(a==null?void 0:a.name)??"",d=(a==null?void 0:a.value)===n,i=o??(a==null?void 0:a.disabled)??!1,I=r??(a==null?void 0:a.size)??"medium",J=[s.radio,s[I],d?s.checked:"",i?s.disabled:""].filter(Boolean).join(" "),K=()=>{var z;i||(z=a==null?void 0:a.onChange)==null||z.call(a,n)};return e.jsxs("label",{className:J,children:[e.jsx("input",{type:"radio",className:s.input,name:h,value:n,checked:d,disabled:i,onChange:K}),e.jsx("span",{className:s.circle}),l&&e.jsx("span",{className:s.label,children:l})]})};y.displayName="SRadio";t.__docgenInfo={description:"",methods:[],displayName:"SRadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioOption"}],raw:"RadioOption[]"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"SRadio",props:{value:{required:!0,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};const te={title:"Components/Radio",component:t,tags:["autodocs"],argTypes:{direction:{control:"radio",options:["vertical","horizontal"]},size:{control:"radio",options:["small","medium","large"]},disabled:{control:"boolean"}},args:{name:"playground",direction:"horizontal",size:"medium",disabled:!1,options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"},{value:"c",label:"옵션 C"}]}},c={render:n=>{function l(){const[r,o]=u.useState("a");return e.jsx(t,{...n,value:r,onChange:o})}return e.jsx(l,{})}},m={name:"크기",render:()=>{function n(){const[l,r]=u.useState("b");return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["small","medium","large"].map(o=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[e.jsx("span",{style:{fontSize:11,color:"var(--ds-text-muted)",textTransform:"uppercase",letterSpacing:"0.06em"},children:o}),e.jsx(t,{name:`size-${o}`,direction:"horizontal",size:o,value:l,onChange:r,options:[{value:"a",label:"옵션 A"},{value:"b",label:"옵션 B"},{value:"c",label:"옵션 C"}]})]},o))})}return e.jsx(n,{})}},p={name:"세로 (기본)",render:()=>{function n(){const[l,r]=u.useState("option1");return e.jsx(t,{name:"vertical",value:l,onChange:r,options:[{value:"option1",label:"입출금 계좌"},{value:"option2",label:"적금 계좌"},{value:"option3",label:"청약 계좌"}]})}return e.jsx(n,{})}},v={name:"가로",render:()=>{function n(){const[l,r]=u.useState("card");return e.jsx(t,{name:"horizontal",direction:"horizontal",value:l,onChange:r,options:[{value:"card",label:"카드"},{value:"transfer",label:"계좌이체"},{value:"mobile",label:"간편결제"}]})}return e.jsx(n,{})}},b={name:"일부 항목 비활성",render:()=>{function n(){const[l,r]=u.useState("usd");return e.jsx(t,{name:"partial",value:l,onChange:r,options:[{value:"krw",label:"원화 (KRW)"},{value:"usd",label:"달러 (USD)"},{value:"jpy",label:"엔화 (JPY)",disabled:!0},{value:"eur",label:"유로 (EUR)",disabled:!0}]})}return e.jsx(n,{})}},g={name:"전체 비활성",render:()=>e.jsx(t,{name:"disabled",value:"b",disabled:!0,options:[{value:"a",label:"선택 불가 A"},{value:"b",label:"선택 불가 B (선택됨)"},{value:"c",label:"선택 불가 C"}]})},f={name:"선택값 확인",render:()=>{function n(){const[l,r]=u.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(t,{name:"output",direction:"horizontal",value:l,onChange:r,options:[{value:"daily",label:"일별"},{value:"weekly",label:"주별"},{value:"monthly",label:"월별"},{value:"yearly",label:"연별"}]}),l&&e.jsxs("p",{style:{margin:0,fontSize:13,color:"var(--ds-text-muted)"},children:["선택: ",e.jsx("strong",{style:{color:"var(--ds-text)"},children:l})]})]})}return e.jsx(n,{})}};var x,S,_;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => {
    function Demo() {
      const [val, setVal] = useState('a');
      return <SRadioGroup {...args} value={val} onChange={setVal} />;
    }
    return <Demo />;
  }
}`,...(_=(S=c.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var j,D,C;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '크기',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('b');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
          {(['small', 'medium', 'large'] as const).map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6
        }}>
              <span style={{
            fontSize: 11,
            color: 'var(--ds-text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>{size}</span>
              <SRadioGroup name={\`size-\${size}\`} direction="horizontal" size={size} value={val} onChange={setVal} options={[{
            value: 'a',
            label: '옵션 A'
          }, {
            value: 'b',
            label: '옵션 B'
          }, {
            value: 'c',
            label: '옵션 C'
          }]} />
            </div>)}
        </div>;
    }
    return <Demo />;
  }
}`,...(C=(D=m.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var R,V,q;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: '세로 (기본)',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('option1');
      return <SRadioGroup name="vertical" value={val} onChange={setVal} options={[{
        value: 'option1',
        label: '입출금 계좌'
      }, {
        value: 'option2',
        label: '적금 계좌'
      }, {
        value: 'option3',
        label: '청약 계좌'
      }]} />;
    }
    return <Demo />;
  }
}`,...(q=(V=p.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var k,w,T;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '가로',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('card');
      return <SRadioGroup name="horizontal" direction="horizontal" value={val} onChange={setVal} options={[{
        value: 'card',
        label: '카드'
      }, {
        value: 'transfer',
        label: '계좌이체'
      }, {
        value: 'mobile',
        label: '간편결제'
      }]} />;
    }
    return <Demo />;
  }
}`,...(T=(w=v.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var N,G,B;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '일부 항목 비활성',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('usd');
      return <SRadioGroup name="partial" value={val} onChange={setVal} options={[{
        value: 'krw',
        label: '원화 (KRW)'
      }, {
        value: 'usd',
        label: '달러 (USD)'
      }, {
        value: 'jpy',
        label: '엔화 (JPY)',
        disabled: true
      }, {
        value: 'eur',
        label: '유로 (EUR)',
        disabled: true
      }]} />;
    }
    return <Demo />;
  }
}`,...(B=(G=b.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var P,A,E;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '전체 비활성',
  render: () => <SRadioGroup name="disabled" value="b" disabled options={[{
    value: 'a',
    label: '선택 불가 A'
  }, {
    value: 'b',
    label: '선택 불가 B (선택됨)'
  }, {
    value: 'c',
    label: '선택 불가 C'
  }]} />
}`,...(E=(A=g.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var O,U,W;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '선택값 확인',
  render: () => {
    function Demo() {
      const [val, setVal] = useState('');
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }}>
          <SRadioGroup name="output" direction="horizontal" value={val} onChange={setVal} options={[{
          value: 'daily',
          label: '일별'
        }, {
          value: 'weekly',
          label: '주별'
        }, {
          value: 'monthly',
          label: '월별'
        }, {
          value: 'yearly',
          label: '연별'
        }]} />
          {val && <p style={{
          margin: 0,
          fontSize: 13,
          color: 'var(--ds-text-muted)'
        }}>
              선택: <strong style={{
            color: 'var(--ds-text)'
          }}>{val}</strong>
            </p>}
        </div>;
    }
    return <Demo />;
  }
}`,...(W=(U=f.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const se=["Playground","Sizes","Vertical","Horizontal","PartialDisabled","Disabled","WithOutput"];export{g as Disabled,v as Horizontal,b as PartialDisabled,c as Playground,m as Sizes,p as Vertical,f as WithOutput,se as __namedExportsOrder,te as default};
