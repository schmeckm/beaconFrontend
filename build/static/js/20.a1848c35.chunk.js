(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[20],{667:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var s="http://localhost:4001/api/"},742:function(e,t,c){"use strict";c.r(t);var s=c(665),n=c(128),a=c(666),r=c.n(a),i=c(1),o=c.n(i),l=c(183),j=c(662),d=c(664),u=c(667),b=c(127),x=c(738),h=c(18);t.default=function(){var e=o.a.useState(""),t=Object(n.a)(e,2),c=t[0],a=t[1],i=o.a.useState(""),m=Object(n.a)(i,2),p=m[0],O=m[1],f=o.a.useContext(b.b),w=f.setUser,g=f.setLoad;return Object(h.jsxs)("div",{className:"c-app c-default-layout flex-row align-items-center",children:[Object(h.jsx)(x.a,{}),Object(h.jsx)(j.w,{children:Object(h.jsx)(j.ub,{className:"justify-content-center",children:Object(h.jsx)(j.u,{md:"8",children:Object(h.jsxs)(j.m,{children:[Object(h.jsx)(j.j,{className:"p-4",children:Object(h.jsx)(j.k,{children:Object(h.jsxs)(j.J,{onSubmit:function(e){return function(e){function t(){return(t=Object(s.a)(r.a.mark((function e(){var t,s,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new FormData).append("email",c),t.append("password",p),e.next=5,fetch(u.a+"login",{method:"POST",body:t});case 5:if(!0!==(s=e.sent).ok){e.next=12;break}return e.next=9,s.json();case 9:n=e.sent,g(!1),200===n.status?(w(n.user_data),window.location=window.location.origin+"/"):x.b.error(n.message);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}g(!0),e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)("p",{className:"text-muted",children:"Sign In to your account"}),Object(h.jsxs)(j.T,{className:"mb-3",children:[Object(h.jsx)(j.V,{children:Object(h.jsx)(j.W,{children:Object(h.jsx)(d.a,{name:"cil-user"})})}),Object(h.jsx)(j.Q,{type:"email",required:!0,placeholder:"Email",value:c,onChange:function(e){return a(e.target.value)},autoComplete:"email"})]}),Object(h.jsxs)(j.T,{className:"mb-4",children:[Object(h.jsx)(j.V,{children:Object(h.jsx)(j.W,{children:Object(h.jsx)(d.a,{name:"cil-lock-locked"})})}),Object(h.jsx)(j.Q,{type:"password",placeholder:"Password",value:p,onChange:function(e){return O(e.target.value)},autoComplete:"current-password"})]}),Object(h.jsxs)(j.ub,{children:[Object(h.jsx)(j.u,{xs:"6",children:Object(h.jsx)(j.f,{type:"submit",color:"primary",className:"px-4",children:"Login"})}),Object(h.jsx)(j.u,{xs:"6",className:"text-right",children:Object(h.jsx)(j.f,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})})}),Object(h.jsx)(j.j,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"},children:Object(h.jsx)(j.k,{className:"text-center",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Sign up"}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(h.jsx)(l.b,{to:"/register",children:Object(h.jsx)(j.f,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})]})}}}]);
//# sourceMappingURL=20.a1848c35.chunk.js.map