(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[55],{788:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return u}));var s=t(666),c=t(128),r=t(667),l=t.n(r),n=t(1),i=t.n(n),o=t(665),d=t(18);function u(){var e=i.a.useState(""),a=Object(c.a)(e,2),t=a[0],r=a[1],n=i.a.useState(""),u=Object(c.a)(n,2),m=u[0],j=u[1],b=i.a.useState(""),p=Object(c.a)(b,2),f=p[0],x=p[1],h=i.a.useState(""),O=Object(c.a)(h,2),N=O[0],g=O[1],w=i.a.useState(""),v=Object(c.a)(w,2),y=v[0],q=v[1],P=i.a.useState(""),C=Object(c.a)(P,2),S=C[0],k=C[1],G=i.a.useState(""),T=Object(c.a)(G,2),F=T[0],J=T[1],D=i.a.useState(""),L=Object(c.a)(D,2),M=L[0],X=L[1];return Object(d.jsx)("div",{className:"container create-page-main-section",children:Object(d.jsxs)("form",{onSubmit:function(e){return function(e){function a(){return(a=Object(s.a)(l.a.mark((function e(){var a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={gatewayMac:t,description:m,text1:f,text2:N,gatewayFree:F,gatewayLoad:M,gatewayX:y,gatewayY:S},e.next=3,fetch(o.a+"gateway/addGateway",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});case 3:if(!0!==(s=e.sent).ok){e.next=9;break}return e.next=7,s.json();case 7:1==e.sent.success?(r(""),j(""),x(""),g(""),alert("Gateway created successfully!")):alert("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){a.apply(this,arguments)}()}(e)},children:[Object(d.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["GatewayMac:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:t,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:m,onChange:function(e){return j(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Text1:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:f,onChange:function(e){return x(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{className:"col-sm-2 col-form-label",for:"exampleFormControlTextarea1",children:["Text2:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:N,onChange:function(e){return g(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway X:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:y,onChange:function(e){return q(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway Y:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:S,onChange:function(e){return k(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway Free:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:F,onChange:function(e){return J(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Gateway Load:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:M,onChange:function(e){return X(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(d.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(d.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(d.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(d.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=55.e001cf9c.chunk.js.map