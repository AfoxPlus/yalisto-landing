"use strict";(self.webpackChunkyalisto_landing=self.webpackChunkyalisto_landing||[]).push([[537],{8537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(1319),s=n(4647),r=n(9281),i=n(4019),l=n(5043),o=n(6545);const d={name:"",email:"",phone:"",establishmentName:"",establishmentType:""};function m(e){let t={};return console.log(e),e.name||(t.name="El nombre es requerido"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="El email es requerido",e.phone?/^\d{9}$/.test(e.phone)||(t.phone="El n\xfamero de celular debe tener 9 d\xedgitos"):t.phone="El celular es requerido",e.establishmentName||(t.establishmentName="El nombre del establecimiento es requerido"),e.establishmentType||(t.establishmentType="El tipo de establecimiento es requerido"),t}var p=n(5639),c=n(9);const h=(0,c.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,c.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,c.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=n(579);const y=(0,r.C)()((e=>{let{title:t,content:n,t:a}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:a(t)}),(0,g.jsx)(u,{children:(0,g.jsx)(h,{children:a(n)})})]})})),b=(0,c.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,j=(0,c.Ay)("input")`
  font-size: 0.875rem;
`,v=((0,c.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,(0,c.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,(0,c.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`),A=(0,r.C)()((e=>{let{label:t,name:n,placeholder:a,onChange:s,t:r}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(v,{htmlFor:t,children:r(t)}),(0,g.jsx)(j,{placeholder:r(a),name:n,id:n,onChange:s})]})})),f=(0,c.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,E=(0,c.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,w=(0,c.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,C=(0,c.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,S=(0,r.C)()((e=>{let{title:t,content:n,id:r,t:c}=e;const{values:h,errors:x,handleChange:u,handleSubmit:b}=(e=>{const[t,n]=(0,l.useState)({values:{...d},errors:{...d}});return{handleChange:e=>{e.persist();const{name:t,value:a}=e.target;n((e=>({...e,values:{...e.values,[t]:a},errors:{...e.errors,[t]:""}})))},handleSubmit:async a=>{a.preventDefault();const s=t.values;console.log("HANDLE SUBMIT"),console.log(s);const r=e(s);n((e=>({...e,errors:r})));try{if(Object.values(r).every((e=>""===e))){const e=await fetch("https://4qg2nayfoi.execute-api.us-east-1.amazonaws.com/prod/restaurant/partner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(e.ok){a.target.reset(),n((()=>({values:{...d},errors:{...d}})));const t=await e.json();t.success?o.A.success({duration:10,message:"Success",description:t.message}):o.A.error({message:"Error",description:t.message})}else o.A.error({message:"Error",description:"Hubo un error al enviar su mensaje, por favor intente nuevamente m\xe1s tarde."})}}catch(i){o.A.error({message:"Error",description:"No se pudo enviar el formulario. Int\xe9ntelo nuevamente m\xe1s tarde."})}},values:t.values,errors:t.errors}})(m),j=e=>{let{type:t}=e;const n=x[t];return(0,g.jsx)(w,{children:n})};return(0,g.jsx)(f,{id:r,children:(0,g.jsxs)(a.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(s.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(y,{title:t,content:n})})}),(0,g.jsx)(s.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(E,{autoComplete:"off",onSubmit:b,children:[(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(A,{label:"Nombre",type:"text",name:"name",placeholder:"Ej. Pedro",value:h.name||"",onChange:u}),(0,g.jsx)(j,{type:"name"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(A,{label:"Email",type:"text",name:"email",placeholder:"Ej. pedro_123@gmail.com",value:h.email||"",onChange:u}),(0,g.jsx)(j,{type:"email"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(A,{label:"Celular",type:"tel",name:"phone",placeholder:"Ej. 966212321",value:h.phone||"",onChange:u}),(0,g.jsx)(j,{type:"phone"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(A,{label:"Establecimiento",type:"text",name:"establishmentName",placeholder:"Ej. Kitchen",value:h.establishmentName||"",onChange:u}),(0,g.jsx)(j,{type:"establishmentName"})]}),(0,g.jsxs)(s.A,{span:24,children:[(0,g.jsx)(A,{label:"Tipo de Establecimiento",type:"text",name:"establishmentType",placeholder:"Ej. Restaurante",value:h.establishmentType||"",onChange:u}),(0,g.jsx)(j,{type:"establishmentType"})]}),(0,g.jsx)(C,{children:(0,g.jsx)(p.$,{name:"submit",children:c("Register")})})]})})})]})})}))}}]);
//# sourceMappingURL=537.f26fb10b.chunk.js.map