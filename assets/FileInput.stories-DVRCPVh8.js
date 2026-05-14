import{j as n}from"./jsx-runtime-Z5uAzocK.js";import{F as q}from"./FileInput-zvuAVNf1.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";const C={title:"Components/FileInput",component:q,tags:["autodocs"],argTypes:{label:{control:"text"},accept:{control:"text",description:"MIME 타입 또는 확장자 (예: image/*, .pdf)"},multiple:{control:"boolean"},maxSize:{control:"number",description:"최대 파일 크기 (bytes)"},disabled:{control:"boolean"},required:{control:"boolean"},error:{control:"boolean"},errorText:{control:"text"},helperText:{control:"text"}},args:{label:"파일 업로드",multiple:!1,disabled:!1,required:!1,error:!1},decorators:[I=>n.jsx("div",{style:{width:480},children:n.jsx(I,{})})],parameters:{layout:"centered"}},e={},r={args:{label:"프로필 이미지",accept:"image/*",helperText:"JPG, PNG, GIF 형식만 허용합니다."}},a={args:{label:"첨부파일",multiple:!0,helperText:"여러 파일을 선택할 수 있습니다."}},t={args:{label:"서류 업로드",accept:".pdf,.doc,.docx",maxSize:5*1024*1024,helperText:"PDF, DOC 형식 · 최대 5MB"}},o={args:{label:"신분증 업로드",error:!0,errorText:"파일을 업로드해주세요.",required:!0}},s={args:{label:"비활성화",disabled:!0,helperText:"현재 파일 업로드가 불가합니다."}},l={name:"뱅킹 서류 첨부 예시",args:{label:"계좌 개설 서류",accept:".pdf,image/*",multiple:!0,maxSize:10*1024*1024,required:!0,helperText:"신분증, 재직증명서 등 · PDF 또는 이미지 · 파일당 최대 10MB"}};var c,p,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(i=(p=e.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,d,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: '프로필 이미지',
    accept: 'image/*',
    helperText: 'JPG, PNG, GIF 형식만 허용합니다.'
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var x,g,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: '첨부파일',
    multiple: true,
    helperText: '여러 파일을 선택할 수 있습니다.'
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,T,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: '서류 업로드',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    helperText: 'PDF, DOC 형식 · 최대 5MB'
  }
}`,...(S=(T=t.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var f,F,M;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '신분증 업로드',
    error: true,
    errorText: '파일을 업로드해주세요.',
    required: true
  }
}`,...(M=(F=o.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var P,y,D;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    label: '비활성화',
    disabled: true,
    helperText: '현재 파일 업로드가 불가합니다.'
  }
}`,...(D=(y=s.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var z,B,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: '뱅킹 서류 첨부 예시',
  args: {
    label: '계좌 개설 서류',
    accept: '.pdf,image/*',
    multiple: true,
    maxSize: 10 * 1024 * 1024,
    required: true,
    helperText: '신분증, 재직증명서 등 · PDF 또는 이미지 · 파일당 최대 10MB'
  }
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const k=["Playground","ImageOnly","MultipleFiles","WithMaxSize","WithError","Disabled","BankingExample"];export{l as BankingExample,s as Disabled,r as ImageOnly,a as MultipleFiles,e as Playground,o as WithError,t as WithMaxSize,k as __namedExportsOrder,C as default};
