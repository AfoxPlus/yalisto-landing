"use strict";(self.webpackChunkyalisto_landing=self.webpackChunkyalisto_landing||[]).push([[676],{1676:(e,n,r)=>{r.r(n),r.d(n,{default:()=>O});var a=r(1319),s=r(4647),i=r(9281),t=r(4019),l=r(5043),d=r(6545);const o={name:"",email:"",message:""};function m(e){let n={};return e.name||(n.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(n.email="Email address is invalid"):n.email="Email address is required",e.message||(n.message="Message is required"),n}var c=r(5639),h=r(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=r(579);const j=(0,i.C)()((e=>{let{title:n,content:r,t:a}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:a(n)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:a(r)})})]})})),y=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,v=(0,h.Ay)("input")`
  font-size: 0.875rem;
`,A=(0,h.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,b=(0,h.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,f=(0,h.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,C=(0,i.C)()((e=>{let{name:n,placeholder:r,onChange:a,t:s}=e;return(0,g.jsxs)(y,{children:[(0,g.jsx)(f,{htmlFor:n,children:s(n)}),(0,g.jsx)(v,{placeholder:s(r),name:n,id:n,onChange:a})]})})),w=(0,i.C)()((e=>{let{name:n,placeholder:r,onChange:a,t:s}=e;return(0,g.jsxs)(A,{children:[(0,g.jsx)(f,{htmlFor:n,children:s(n)}),(0,g.jsx)(b,{placeholder:s(r),id:n,name:n,onChange:a})]})})),S=(0,h.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,h.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,q=(0,h.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,E=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,O=(0,i.C)()((e=>{let{title:n,content:r,id:i,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:y}=(e=>{const[n,r]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:n,value:a}=e.target;r((e=>({...e,values:{...e.values,[n]:a},errors:{...e.errors,[n]:""}})))},handleSubmit:async a=>{a.preventDefault();const s=n.values,i=e(s);r((e=>({...e,errors:i})));try{Object.values(i).every((e=>""===e))&&((await fetch("",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(a.target.reset(),r((()=>({values:{...o},errors:{...o}}))),d.A.success({message:"Success",description:"\xa1Tu mensaje ha sido enviado!"})):d.A.error({message:"Error",description:"Hubo un error al enviar su mensaje, por favor intente nuevamente m\xe1s tarde."}))}catch(t){d.A.error({message:"Error",description:"No se pudo enviar el formulario. Int\xe9ntelo nuevamente m\xe1s tarde."})}},values:n.values,errors:n.errors}})(m),v=e=>{let{type:n}=e;const r=x[n];return(0,g.jsx)(q,{children:r})};return(0,g.jsx)(S,{id:i,children:(0,g.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(s.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(j,{title:n,content:r})})}),(0,g.jsx)(s.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(t.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(k,{autoComplete:"off",onSubmit:y,children:[(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(C,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(v,{type:"name"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(C,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(v,{type:"email"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(w,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(v,{type:"message"})]}),(0,g.jsx)(E,{children:(0,g.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.1f14b5c7.chunk.js.map