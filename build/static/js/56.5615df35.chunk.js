(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[56],{762:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return d}));var a=s(665),c=s(128),r=s(666),n=s.n(r),l=s(1),i=s.n(l),o=s(667),u=s(18);function d(){var e=i.a.useState(""),t=Object(c.a)(e,2),s=t[0],r=t[1],l=i.a.useState(""),d=Object(c.a)(l,2),j=d[0],b=d[1],p=i.a.useState(""),f=Object(c.a)(p,2),m=f[0],x=f[1],h=i.a.useState(""),O=Object(c.a)(h,2),g=O[0],w=O[1];return Object(u.jsx)("div",{className:"container create-page-main-section",children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(a.a)(n.a.mark((function e(){var t,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={gatewayMac:s,description:j,text1:m,text2:g},e.next=3,fetch(o.a+"gateway/addGateway",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(!0!==(a=e.sent).ok){e.next=9;break}return e.next=7,a.json();case 7:1==e.sent.success?(r(""),b(""),x(""),w(""),alert("Gateway created successfully!")):alert("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(u.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["GatewayMac:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:s,onChange:function(e){return r(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Description:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:j,onChange:function(e){return b(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Text1:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:m,onChange:function(e){return x(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsxs)("label",{class:"col-sm-2 col-form-label",for:"exampleFormControlTextarea1",children:["Text2:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:g,onChange:function(e){return w(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]})]}),Object(u.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(u.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(u.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(u.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(u.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=56.5615df35.chunk.js.map