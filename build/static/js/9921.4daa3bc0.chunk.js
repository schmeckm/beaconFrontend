"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[9921],{69921:function(e,s,a){a.r(s),a.d(s,{default:function(){return d}});var r=a(15861),t=a(70885),n=a(64687),l=a.n(n),i=a(72791),c=a(30577),o=a(16094),m=a(80184);function d(){var e=i.useState(""),s=(0,t.Z)(e,2),a=s[0],n=s[1],d=i.useState(""),u=(0,t.Z)(d,2),p=u[0],x=u[1],f=i.useState(""),h=(0,t.Z)(f,2),j=h[0],N=h[1],v=i.useState(""),b=(0,t.Z)(v,2),g=b[0],w=b[1],y=i.useState(""),P=(0,t.Z)(y,2),q=P[0],_=P[1],C=i.useState(""),S=(0,t.Z)(C,2),k=S[0],Z=S[1],F=i.useState(0),T=(0,t.Z)(F,2),D=T[0],O=T[1];return(0,m.jsxs)("div",{className:"container create-page-main-section",children:[(0,m.jsxs)("form",{onSubmit:function(e){return function(e){function s(){return(s=(0,r.Z)(l().mark((function e(){var s,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={name:a,description:p,text1:j,text2:g,width:q,height:k,distance_points:D},e.next=3,fetch(o.HQ+"environment/addEnvironment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:if(!0!==(r=e.sent).ok){e.next=9;break}return e.next=7,r.json();case 7:1==e.sent.success?(n(""),x(""),N(""),w(""),_(""),Z(""),O(0),c.Am.info("Environment created successfully!")):c.Am.error("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){s.apply(this,arguments)}()}(e)},children:[(0,m.jsxs)("div",{className:"p-sm-5 create-form-field",children:[(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Name:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:a,onChange:function(e){return n(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:p,onChange:function(e){return x(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Text1:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:j,onChange:function(e){return N(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Text2:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:g,onChange:function(e){return w(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Width:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:q,onChange:function(e){return _(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Height:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:k,onChange:function(e){return Z(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,m.jsxs)("div",{className:"form-group row",children:[(0,m.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Distance Points:",(0,m.jsx)("span",{className:"required-label",children:"*"})]}),(0,m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,m.jsx)("input",{required:!0,value:D,onChange:function(e){return O(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),(0,m.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[(0,m.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",(0,m.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),(0,m.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",(0,m.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]}),(0,m.jsx)(c.Ix,{})]})}}}]);
//# sourceMappingURL=9921.4daa3bc0.chunk.js.map