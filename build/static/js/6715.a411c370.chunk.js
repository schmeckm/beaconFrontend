"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[6715],{6715:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var r=a(15861),t=a(70885),l=a(64687),n=a.n(l),c=a(72791),i=a(30577),o=a(16094),m=a(80184);function d(){var e=c.useState(""),s=(0,t.Z)(e,2),a=s[0],l=s[1],d=c.useState(""),u=(0,t.Z)(d,2),x=u[0],p=u[1],f=c.useState(""),h=(0,t.Z)(f,2),j=h[0],N=h[1],g=c.useState(""),w=(0,t.Z)(g,2),b=w[0],v=w[1],y=c.useState(""),q=(0,t.Z)(y,2),P=q[0],C=q[1],S=c.useState(""),_=(0,t.Z)(S,2),F=_[0],k=_[1],Z=c.useState(""),G=(0,t.Z)(Z,2),T=G[0],O=G[1],A=c.useState(""),D=(0,t.Z)(A,2),L=D[0],M=D[1];return(0,m.jsxs)("div",{className:"container create-page-main-section",children:[(0,m.jsxs)("form",{onSubmit:function(e){return function(e){function s(){return(s=(0,r.Z)(n().mark((function e(){var s,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={gatewayMac:a,description:x,text1:j,text2:b,gatewayFree:T,gatewayLoad:L,gatewayX:P,gatewayY:F},e.next=3,fetch(o.HQ+"gateway/addGateway",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:if(!0!==(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:1==e.sent.success?(l(""),p(""),N(""),v(""),i.Am.info("Gateway created successfully!")):i.Am.error("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){s.apply(this,arguments)}()}(e)},children:[(0,m.jsxs)("div",{className:"p-sm-5 create-form-field",children:[(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["GatewayMac:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:a,onChange:function(e){return l(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:x,onChange:function(e){return p(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Text1:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:j,onChange:function(e){return N(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{className:"col-sm-2 col-form-label",htmlFor:"exampleFormControlTextarea1",children:["Text2:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:b,onChange:function(e){return v(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway X:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:P,onChange:function(e){return C(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway Y:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:F,onChange:function(e){return k(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway Free:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:T,onChange:function(e){return O(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway Load:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:L,onChange:function(e){return M(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),(0,m.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[(0,m.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",(0,m.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),(0,m.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",(0,m.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]}),(0,m.jsx)(i.Ix,{})]})}}}]);
//# sourceMappingURL=6715.a411c370.chunk.js.map