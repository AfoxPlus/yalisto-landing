"use strict";(self.webpackChunkyalisto_landing=self.webpackChunkyalisto_landing||[]).push([[676],{1676:(e,a,n)=>{n.r(a),n.d(a,{default:()=>E});var r=n(1319),s=n(4647),t=n(9281),i=n(4019),l=n(5043),d=n(6545);const o={name:"",email:"",message:""};function m(e){let a={};return e.name||(a.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Email address is invalid"):a.email="Email address is required",e.message||(a.message="Message is required"),a}var c=n(5639),h=n(9);const p=(0,h.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,h.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=n(579);const j=(0,t.C)()((e=>{let{title:a,content:n,t:r}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:r(a)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:r(n)})})]})})),y=(0,h.Ay)("div")`
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
`,C=(0,t.C)()((e=>{let{name:a,placeholder:n,onChange:r,t:s}=e;return(0,g.jsxs)(y,{children:[(0,g.jsx)(f,{htmlFor:a,children:s(a)}),(0,g.jsx)(v,{placeholder:s(n),name:a,id:a,onChange:r})]})})),w=(0,t.C)()((e=>{let{name:a,placeholder:n,onChange:r,t:s}=e;return(0,g.jsxs)(A,{children:[(0,g.jsx)(f,{htmlFor:a,children:s(a)}),(0,g.jsx)(b,{placeholder:s(n),id:a,name:a,onChange:r})]})})),S=(0,h.Ay)("div")`
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
`,z=(0,h.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,E=(0,t.C)()((e=>{let{title:a,content:n,id:t,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:y}=(e=>{const[a,n]=(0,l.useState)({values:{...o},errors:{...o}});return{handleChange:e=>{e.persist();const{name:a,value:r}=e.target;n((e=>({...e,values:{...e.values,[a]:r},errors:{...e.errors,[a]:""}})))},handleSubmit:async r=>{r.preventDefault();const s=a.values,t=e(s);n((e=>({...e,errors:t})));try{Object.values(t).every((e=>""===e))&&((await fetch("https://4qg2nayfoi.execute-api.us-east-1.amazonaws.com/prod/restaurant/mail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})).ok?(r.target.reset(),n((()=>({values:{...o},errors:{...o}}))),d.A.success({message:"Success",description:"\xa1Tu mensaje ha sido enviado!"})):d.A.error({message:"Error",description:"Hubo un error al enviar su mensaje, por favor intente nuevamente m\xe1s tarde."}))}catch(i){d.A.error({message:"Error",description:"No se pudo enviar el formulario. Int\xe9ntelo nuevamente m\xe1s tarde."})}},values:a.values,errors:a.errors}})(m),v=e=>{let{type:a}=e;const n=x[a];return(0,g.jsx)(q,{children:n})};return(0,g.jsx)(S,{id:t,children:(0,g.jsxs)(r.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(s.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(j,{title:a,content:n})})}),(0,g.jsx)(s.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(k,{autoComplete:"off",onSubmit:y,children:[(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(C,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(v,{type:"name"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(C,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(v,{type:"email"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(w,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(v,{type:"message"})]}),(0,g.jsx)(z,{children:(0,g.jsx)(c.$,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=676.f735eec3.chunk.js.map