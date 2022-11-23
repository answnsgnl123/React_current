"use strict";(self.webpackChunkberry_material_react_free=self.webpackChunkberry_material_react_free||[]).push([[418],{4387:function(e,n,r){r(2791);n.Z=r.p+"static/media/social-google.9887eb8eb43729cb99f402cfa0de3c44.svg"},5177:function(e,n,r){var t=r(2791);n.Z=()=>{const e=(0,t.useRef)(!0);return(0,t.useEffect)((()=>()=>{e.current=!1}),[]),e}},8393:function(e,n,r){var t=r(3767),i=r(890),s=r(43),o=r(184);n.Z=()=>(0,o.jsxs)(t.Z,{direction:"row",justifyContent:"space-between",children:[(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://berrydashboard.io",target:"_blank",underline:"hover",children:"berrydashboard.io"}),(0,o.jsx)(i.Z,{variant:"subtitle2",component:s.Z,href:"https://codedthemes.com",target:"_blank",underline:"hover",children:"\xa9 codedthemes.com"})]})},5290:function(e,n,r){var t=r(4554),i=r(3735),s=r(184);n.Z=e=>{let{children:n,...r}=e;return(0,s.jsx)(i.Z,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...r,children:(0,s.jsx)(t.Z,{sx:{p:{xs:2,sm:3,xl:5}},children:n})})}},3914:function(e,n,r){const t=(0,r(6934).ZP)("div")((e=>{let{theme:n}=e;return{backgroundColor:n.palette.primary.light,minHeight:"100vh"}}));n.Z=t},5418:function(e,n,r){r.r(n),r.d(n,{default:function(){return D}});var t=r(3504),i=r(3967),s=r(5193),o=r(1889),a=r(3767),l=r(890),c=r(7924),d=r(3914),x=r(5290),m=r(2791),h=r(9434),u=r(6151),Z=r(4554),j=r(8096),g=r(4925),p=r(8029),b=r(7071),f=r(3466),y=r(3400),w=r(5523),v=r(4454),P=r(1724),C=r(2506),k=r(5177),S=r(3243),I=r(3746),_=r(165),E=r(4387),B=r(184);var R=e=>{let{...n}=e;const r=(0,i.Z)(),t=(0,k.Z)(),d=(0,s.Z)(r.breakpoints.down("md")),x=(0,h.v9)((e=>e.customization)),[R,z]=(0,m.useState)(!0),[W,D]=(0,m.useState)(!1),q=()=>{D(!W)},A=e=>{e.preventDefault()};return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"center",spacing:2,children:[(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsx)(S.Z,{children:(0,B.jsxs)(u.Z,{disableElevation:!0,fullWidth:!0,onClick:async()=>{console.error("Login")},size:"large",variant:"outlined",sx:{color:"grey.700",backgroundColor:r.palette.grey[50],borderColor:r.palette.grey[100]},children:[(0,B.jsx)(Z.Z,{sx:{mr:{xs:1,sm:2,width:20}},children:(0,B.jsx)("img",{src:E.Z,alt:"google",width:16,height:16,style:{marginRight:d?8:16}})}),"Sign in with Google"]})})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsxs)(Z.Z,{sx:{alignItems:"center",display:"flex"},children:[(0,B.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"}),(0,B.jsx)(u.Z,{variant:"outlined",sx:{cursor:"unset",m:2,py:.5,px:7,borderColor:"".concat(r.palette.grey[100]," !important"),color:"".concat(r.palette.grey[900],"!important"),fontWeight:500,borderRadius:"".concat(x.borderRadius,"px")},disableRipple:!0,disabled:!0,children:"OR"}),(0,B.jsx)(c.Z,{sx:{flexGrow:1},orientation:"horizontal"})]})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,container:!0,alignItems:"center",justifyContent:"center",children:(0,B.jsx)(Z.Z,{sx:{mb:2},children:(0,B.jsx)(l.Z,{variant:"subtitle1",children:"Sign in with Email address"})})})]}),(0,B.jsx)(C.J9,{initialValues:{email:"info@codedthemes.com",password:"123456",submit:null},validationSchema:P.Ry().shape({email:P.Z_().email("Must be a valid email").max(255).required("Email is required"),password:P.Z_().max(255).required("Password is required")}),onSubmit:async(e,n)=>{let{setErrors:r,setStatus:i,setSubmitting:s}=n;try{t.current&&(i({success:!0}),s(!1))}catch(o){console.error(o),t.current&&(i({success:!1}),r({submit:o.message}),s(!1))}},children:e=>{let{errors:t,handleBlur:i,handleChange:s,handleSubmit:o,isSubmitting:c,touched:d,values:x}=e;return(0,B.jsxs)("form",{noValidate:!0,onSubmit:o,...n,children:[(0,B.jsxs)(j.Z,{fullWidth:!0,error:Boolean(d.email&&t.email),sx:{...r.typography.customInput},children:[(0,B.jsx)(g.Z,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),(0,B.jsx)(p.Z,{id:"outlined-adornment-email-login",type:"email",value:x.email,name:"email",onBlur:i,onChange:s,label:"Email Address / Username",inputProps:{}}),d.email&&t.email&&(0,B.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]}),(0,B.jsxs)(j.Z,{fullWidth:!0,error:Boolean(d.password&&t.password),sx:{...r.typography.customInput},children:[(0,B.jsx)(g.Z,{htmlFor:"outlined-adornment-password-login",children:"Password"}),(0,B.jsx)(p.Z,{id:"outlined-adornment-password-login",type:W?"text":"password",value:x.password,name:"password",onBlur:i,onChange:s,endAdornment:(0,B.jsx)(f.Z,{position:"end",children:(0,B.jsx)(y.Z,{"aria-label":"toggle password visibility",onClick:q,onMouseDown:A,edge:"end",size:"large",children:W?(0,B.jsx)(I.Z,{}):(0,B.jsx)(_.Z,{})})}),label:"Password",inputProps:{}}),d.password&&t.password&&(0,B.jsx)(b.Z,{error:!0,id:"standard-weight-helper-text-password-login",children:t.password})]}),(0,B.jsxs)(a.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",spacing:1,children:[(0,B.jsx)(w.Z,{control:(0,B.jsx)(v.Z,{checked:R,onChange:e=>z(e.target.checked),name:"checked",color:"primary"}),label:"Remember me"}),(0,B.jsx)(l.Z,{variant:"subtitle1",color:"secondary",sx:{textDecoration:"none",cursor:"pointer"},children:"Forgot Password?"})]}),t.submit&&(0,B.jsx)(Z.Z,{sx:{mt:3},children:(0,B.jsx)(b.Z,{error:!0,children:t.submit})}),(0,B.jsx)(Z.Z,{sx:{mt:2},children:(0,B.jsx)(S.Z,{children:(0,B.jsx)(u.Z,{disableElevation:!0,disabled:c,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"secondary",children:"Sign in"})})})]})}})]})},z=r(4904),W=r(8393);var D=()=>{const e=(0,i.Z)(),n=(0,s.Z)(e.breakpoints.down("md"));return(0,B.jsx)(d.Z,{children:(0,B.jsxs)(o.ZP,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsx)(o.ZP,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:(0,B.jsx)(o.ZP,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:(0,B.jsx)(x.Z,{children:(0,B.jsxs)(o.ZP,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[(0,B.jsx)(o.ZP,{item:!0,sx:{mb:3},children:(0,B.jsx)(t.rU,{to:"#",children:(0,B.jsx)(z.Z,{})})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsx)(o.ZP,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:(0,B.jsx)(o.ZP,{item:!0,children:(0,B.jsxs)(a.Z,{alignItems:"center",justifyContent:"center",spacing:1,children:[(0,B.jsx)(l.Z,{color:e.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"}),(0,B.jsx)(l.Z,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsx)(R,{})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsx)(c.Z,{})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,children:(0,B.jsx)(o.ZP,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:(0,B.jsx)(l.Z,{component:t.rU,to:"/pages/register/register3",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),(0,B.jsx)(o.ZP,{item:!0,xs:12,sx:{m:3,mt:1},children:(0,B.jsx)(W.Z,{})})]})})}}}]);
//# sourceMappingURL=418.a8ad67e4.chunk.js.map