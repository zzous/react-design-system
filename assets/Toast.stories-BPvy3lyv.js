import{j as e}from"./jsx-runtime-Z5uAzocK.js";import{T,u as a}from"./Toast-D3HHUwPE.js";import{B as t}from"./Button-B20UjbK7.js";import"./index-pP6CS22B.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-DLHbBEj9.js";const I={title:"Components/Toast",tags:["autodocs"],parameters:{layout:"centered"},decorators:[n=>e.jsx(T,{children:e.jsx(n,{})})]};function V(){const n=a();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:[e.jsx(t,{variant:"primary",onClick:()=>n.success("이체가 완료되었습니다.",{message:"홍길동님 계좌로 100,000원이 이체되었습니다."}),children:"Success"}),e.jsx(t,{variant:"danger",onClick:()=>n.error("이체에 실패했습니다.",{message:"잔액이 부족합니다. 잔액을 확인해주세요."}),children:"Error"}),e.jsx(t,{variant:"outline",onClick:()=>n.warning("주의가 필요합니다.",{message:"하루 이체 한도의 90%에 도달했습니다."}),children:"Warning"}),e.jsx(t,{variant:"ghost",onClick:()=>n.info("공지사항",{message:"3월 10일 새벽 2시~4시 시스템 점검이 예정되어 있습니다."}),children:"Info"}),e.jsx(t,{variant:"ghost",onClick:()=>n.toast("알림",{message:"새로운 메시지가 도착했습니다.",variant:"neutral"}),children:"Neutral"})]})}const r={render:()=>e.jsx(V,{})},o={name:"모든 Variant",render:()=>{function n(){const s=a();return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,alignItems:"center"},children:[e.jsx(t,{size:"sm",onClick:()=>s.success("성공!",{message:"작업이 완료되었습니다."}),children:"success 토스트"}),e.jsx(t,{size:"sm",variant:"danger",onClick:()=>s.error("오류 발생",{message:"다시 시도해주세요."}),children:"error 토스트"}),e.jsx(t,{size:"sm",variant:"outline",onClick:()=>s.warning("경고",{message:"한도 초과 직전입니다."}),children:"warning 토스트"}),e.jsx(t,{size:"sm",variant:"ghost",onClick:()=>s.info("안내",{message:"서비스 점검 예정입니다."}),children:"info 토스트"}),e.jsx(t,{size:"sm",variant:"ghost",onClick:()=>s.toast("알림",{variant:"neutral"}),children:"neutral 토스트"})]})}return e.jsx(n,{})}},i={name:"지속 토스트 (닫기 전까지 유지)",render:()=>{function n(){const s=a();return e.jsx(t,{onClick:()=>s.info("중요 공지",{message:"닫기 버튼을 클릭할 때까지 사라지지 않습니다.",duration:0}),children:"지속 토스트 열기"})}return e.jsx(n,{})}},c={name:"뱅킹 시나리오 예시",render:()=>{function n(){const s=a(),w=[{label:"이체 성공",action:()=>s.success("이체 완료",{message:"홍길동 · 스타뱅크 · 100,000원"})},{label:"잔액 부족",action:()=>s.error("이체 실패",{message:"잔액이 부족합니다. 현재 잔액: 5,000원"})},{label:"한도 경고",action:()=>s.warning("한도 주의",{message:"일일 이체 한도의 90%를 사용했습니다."})},{label:"점검 안내",action:()=>s.info("시스템 점검",{message:"3/10 새벽 2시~4시 서비스가 중단됩니다.",duration:6e3})},{label:"로그인 알림",action:()=>s.warning("새 기기 로그인",{message:"서울 · iPhone · 방금 전",duration:6e3})}];return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:w.map(({label:u,action:z})=>e.jsx(t,{size:"sm",variant:"outline",onClick:z,children:u},u))})}return e.jsx(n,{})}},l={name:"위치별 예시 (별도 Provider)",render:()=>{const n=["topRight","topLeft","bottomRight","bottomLeft"];return e.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",justifyContent:"center"},children:n.map(s=>e.jsx(T,{position:s,children:e.jsx(S,{position:s})},s))})}};function S({position:n}){const s=a();return e.jsx(t,{size:"sm",variant:"outline",onClick:()=>s.info(n,{message:"이 위치에서 표시됩니다."}),children:n})}var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <ToastTriggers />
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,f,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '모든 Variant',
  render: () => {
    function AllVariants() {
      const toast = useToast();
      return <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center'
      }}>
          <Button size="sm" onClick={() => toast.success('성공!', {
          message: '작업이 완료되었습니다.'
        })}>
            success 토스트
          </Button>
          <Button size="sm" variant="danger" onClick={() => toast.error('오류 발생', {
          message: '다시 시도해주세요.'
        })}>
            error 토스트
          </Button>
          <Button size="sm" variant="outline" onClick={() => toast.warning('경고', {
          message: '한도 초과 직전입니다.'
        })}>
            warning 토스트
          </Button>
          <Button size="sm" variant="ghost" onClick={() => toast.info('안내', {
          message: '서비스 점검 예정입니다.'
        })}>
            info 토스트
          </Button>
          <Button size="sm" variant="ghost" onClick={() => toast.toast('알림', {
          variant: 'neutral'
        })}>
            neutral 토스트
          </Button>
        </div>;
    }
    return <AllVariants />;
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,j,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '지속 토스트 (닫기 전까지 유지)',
  render: () => {
    function PersistentDemo() {
      const toast = useToast();
      return <Button onClick={() => toast.info('중요 공지', {
        message: '닫기 버튼을 클릭할 때까지 사라지지 않습니다.',
        duration: 0
      })}>
          지속 토스트 열기
        </Button>;
    }
    return <PersistentDemo />;
  }
}`,...(h=(j=i.parameters)==null?void 0:j.docs)==null?void 0:h.source}}};var k,C,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '뱅킹 시나리오 예시',
  render: () => {
    function BankingToasts() {
      const toast = useToast();
      const scenarios = [{
        label: '이체 성공',
        action: () => toast.success('이체 완료', {
          message: '홍길동 · 스타뱅크 · 100,000원'
        })
      }, {
        label: '잔액 부족',
        action: () => toast.error('이체 실패', {
          message: '잔액이 부족합니다. 현재 잔액: 5,000원'
        })
      }, {
        label: '한도 경고',
        action: () => toast.warning('한도 주의', {
          message: '일일 이체 한도의 90%를 사용했습니다.'
        })
      }, {
        label: '점검 안내',
        action: () => toast.info('시스템 점검', {
          message: '3/10 새벽 2시~4시 서비스가 중단됩니다.',
          duration: 6000
        })
      }, {
        label: '로그인 알림',
        action: () => toast.warning('새 기기 로그인', {
          message: '서울 · iPhone · 방금 전',
          duration: 6000
        })
      }];
      return <div style={{
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
          {scenarios.map(({
          label,
          action
        }) => <Button key={label} size="sm" variant="outline" onClick={action}>
              {label}
            </Button>)}
        </div>;
    }
    return <BankingToasts />;
  }
}`,...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var B,P,b;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '위치별 예시 (별도 Provider)',
  render: () => {
    const positions = ['topRight', 'topLeft', 'bottomRight', 'bottomLeft'] as const;
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
        {positions.map(pos => <ToastProvider key={pos} position={pos}>
            <PositionButton position={pos} />
          </ToastProvider>)}
      </div>;
  }
}`,...(b=(P=l.parameters)==null?void 0:P.docs)==null?void 0:b.source}}};const O=["Playground","Variants","Persistent","BankingExamples","PositionOptions"];export{c as BankingExamples,i as Persistent,r as Playground,l as PositionOptions,o as Variants,O as __namedExportsOrder,I as default};
