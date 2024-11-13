"use strict";(self.webpackChunkyalisto_landing=self.webpackChunkyalisto_landing||[]).push([[918,537],{5639:(e,t,n)=>{n.d(t,{$:()=>s});const r=(0,n(9).Ay)("button")`
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
`;var a=n(579);const s=e=>{let{color:t,maxWidth:n,children:s,onClick:i}=e;return(0,a.jsx)(r,{color:t,maxWidth:n,onClick:i,children:s})}},8537:(e,t,n)=>{n.r(t),n.d(t,{default:()=>k});var r=n(1319),a=n(4647),s=n(9281),i=n(4019),l=n(5043),o=n(6545);const d={name:"",email:"",phone:"",establishmentName:"",establishmentType:""};function m(e){let t={};return console.log(e),e.name||(t.name="El nombre es requerido"),e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="Email address is invalid"):t.email="El email es requerido",e.phone?/^\d{9}$/.test(e.phone)||(t.phone="El n\xfamero de celular debe tener 9 d\xedgitos"):t.phone="El celular es requerido",e.establishmentName||(t.establishmentName="El nombre del establecimiento es requerido"),e.establishmentType||(t.establishmentType="El tipo de establecimiento es requerido"),t}var c=n(5639),p=n(9);const h=(0,p.Ay)("p")`
  margin-top: 1.5rem;
`,x=(0,p.Ay)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,p.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=n(579);const b=(0,s.C)()((e=>{let{title:t,content:n,t:r}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:r(t)}),(0,g.jsx)(u,{children:(0,g.jsx)(h,{children:r(n)})})]})})),y=(0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,j=(0,p.Ay)("input")`
  font-size: 0.875rem;
`,v=((0,p.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,(0,p.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,(0,p.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`),A=(0,s.C)()((e=>{let{label:t,name:n,placeholder:r,onChange:a,t:s}=e;return(0,g.jsxs)(y,{children:[(0,g.jsx)(v,{htmlFor:t,children:s(t)}),(0,g.jsx)(j,{placeholder:s(r),name:n,id:n,onChange:a})]})})),f=(0,p.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,w=(0,p.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,C=(0,p.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,E=(0,p.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,k=(0,s.C)()((e=>{let{title:t,content:n,id:s,t:p}=e;const{values:h,errors:x,handleChange:u,handleSubmit:y}=(e=>{const[t,n]=(0,l.useState)({values:{...d},errors:{...d}});return{handleChange:e=>{e.persist();const{name:t,value:r}=e.target;n((e=>({...e,values:{...e.values,[t]:r},errors:{...e.errors,[t]:""}})))},handleSubmit:async r=>{r.preventDefault();const a=t.values;console.log("HANDLE SUBMIT"),console.log(a);const s=e(a);n((e=>({...e,errors:s})));try{if(Object.values(s).every((e=>""===e))){const e=await fetch("https://4qg2nayfoi.execute-api.us-east-1.amazonaws.com/prod/restaurant/partner",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(e.ok){r.target.reset(),n((()=>({values:{...d},errors:{...d}})));const t=await e.json();t.success?o.A.success({duration:10,message:"Success",description:t.message}):o.A.error({message:"Error",description:t.message})}else o.A.error({message:"Error",description:"Hubo un error al enviar su mensaje, por favor intente nuevamente m\xe1s tarde."})}}catch(i){o.A.error({message:"Error",description:"No se pudo enviar el formulario. Int\xe9ntelo nuevamente m\xe1s tarde."})}},values:t.values,errors:t.errors}})(m),j=e=>{let{type:t}=e;const n=x[t];return(0,g.jsx)(C,{children:n})};return(0,g.jsx)(f,{id:s,children:(0,g.jsxs)(r.A,{justify:"space-between",align:"middle",children:[(0,g.jsx)(a.A,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(b,{title:t,content:n})})}),(0,g.jsx)(a.A,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(i.q7,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(w,{autoComplete:"off",onSubmit:y,children:[(0,g.jsxs)(a.A,{span:24,children:[(0,g.jsx)(A,{label:"Nombres",type:"text",name:"name",placeholder:"Ej. Pedro",value:h.name||"",onChange:u}),(0,g.jsx)(j,{type:"name"})]}),(0,g.jsxs)(a.A,{span:24,children:[(0,g.jsx)(A,{label:"Email",type:"text",name:"email",placeholder:"Ej. pedro_123@gmail.com",value:h.email||"",onChange:u}),(0,g.jsx)(j,{type:"email"})]}),(0,g.jsxs)(a.A,{span:24,children:[(0,g.jsx)(A,{label:"Celular",type:"tel",name:"phone",placeholder:"Ej. 966212321",value:h.phone||"",onChange:u}),(0,g.jsx)(j,{type:"phone"})]}),(0,g.jsxs)(a.A,{span:24,children:[(0,g.jsx)(A,{label:"Nombre de tu establecimiento",type:"text",name:"establishmentName",placeholder:"Ej. Don Pepe",value:h.establishmentName||"",onChange:u}),(0,g.jsx)(j,{type:"establishmentName"})]}),(0,g.jsxs)(a.A,{span:24,children:[(0,g.jsx)(A,{label:"Tipo de tu establecimiento",type:"text",name:"establishmentType",placeholder:"Ej. Restaurante",value:h.establishmentType||"",onChange:u}),(0,g.jsx)(j,{type:"establishmentType"})]}),(0,g.jsx)(E,{children:(0,g.jsx)(c.$,{name:"submit",children:p("Register")})})]})})})]})})}))}}]);
//# sourceMappingURL=918.db7f3ae8.chunk.js.map