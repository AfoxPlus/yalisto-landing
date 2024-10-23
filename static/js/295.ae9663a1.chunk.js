"use strict";(self.webpackChunkyalisto_landing=self.webpackChunkyalisto_landing||[]).push([[295,676],{5639:(e,r,a)=>{a.d(r,{$:()=>i});const n=(0,a(9).Ay)("button")`
  background: ${e=>e.color||"#EC4A0A"};
  color: ${e=>e.color?"#EC4A0A":"#fff"};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #F5FAFF;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: ${e=>e.maxWidth||"180px"};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 133, 58);
    background-color: rgb(255, 133, 58);
  }
`;var s=a(579);const i=e=>{let{color:r,maxWidth:a,children:i,onClick:t}=e;return(0,s.jsx)(n,{color:r,maxWidth:a,onClick:t,children:i})}},1676:(e,r,a)=>{a.r(r),a.d(r,{default:()=>z});var n=a(1319),s=a(4647),i=a(9281),t=a(4019),o=a(5043),l=a(6545);const d={name:"",email:"",message:""};function m(e){let r={};return e.name||(r.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(r.email="Email address is invalid"):r.email="Email address is required",e.message||(r.message="Message is required"),r}var c=a(5639),h=a(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=a(579);const j=(0,i.C)()((e=>{let{title:r,content:a,t:n}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:n(r)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:n(a)})})]})})),v=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,y=(0,h.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,f=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,A=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,C=(0,i.C)()((e=>{let{name:r,placeholder:a,onChange:n,t:s}=e;return(0,g.jsxs)(v,{children:[(0,g.jsx)(A,{htmlFor:r,children:s(r)}),(0,g.jsx)(y,{placeholder:s(a),name:r,id:r,onChange:n})]})})),w=(0,i.C)()((e=>{let{name:r,placeholder:a,onChange:n,t:s}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(A,{htmlFor:r,children:s(r)}),(0,g.jsx)(f,{placeholder:s(a),id:r,name:r,onChange:n})]})})),k=(0,h.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,S=(0,h.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,E=(0,h.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,q=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,z=(0,i.C)()((e=>{let{title:r,content:a,id:i,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:v}=(e=>{const[r,a]=(0,o.useState)({values:{...d},errors:{...d}});return{handleChange:e=>{e.persist();const{name:r,value:n}=e.target;a((e=>({...e,values:{...e.values,[r]:n},errors:{...e.errors,[r]:""}})))},handleSubmit:async n=>{n.preventDefault();const s=r.values,i=e(s);a((e=>({...e,errors:i})));try{Object.values(i).every((e=>""===e))&&((await fetch("https://4qg2nayfoi.execute-api.us-east-1.amazonaws.com/prod/restaurant/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(n.target.reset(),a((()=>({values:{...d},errors:{...d}}))),l.A.success({message:"Success",description:"\xa1Tu mensaje ha sido enviado!"})):l.A.error({message:"Error",description:"Hubo un error al enviar su mensaje, por favor intente nuevamente m\xe1s tarde."}))}catch(t){l.A.error({message:"Error",description:"No se pudo enviar el formulario. Int\xe9ntelo nuevamente m\xe1s tarde."})}},values:r.values,errors:r.errors}})(m),y=e=>{let{type:r}=e;const a=x[r];return(0,g.jsx)(E,{children:a})};return(0,g.jsx)(k,{id:i,children:(0,g.jsxs)(n.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(s.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(j,{title:r,content:a})})}),(0,g.jsx)(s.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(S,{autoComplete:"off",onSubmit:v,children:[(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(C,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(y,{type:"name"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(C,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(y,{type:"email"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(w,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(y,{type:"message"})]}),(0,g.jsx)(q,{children:(0,g.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=295.ae9663a1.chunk.js.map