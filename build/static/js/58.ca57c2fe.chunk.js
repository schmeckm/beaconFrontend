(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[58],{797:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return m}));var a=s(666),n=s(128),c=s(667),r=s.n(c),l=s(1),o=s.n(l),i=s(665),u=s(674),d=s(18);function m(){var e=o.a.useState(""),t=Object(n.a)(e,2),s=t[0],c=t[1],l=o.a.useState(""),m=Object(n.a)(l,2),j=m[0],b=m[1],p=o.a.useState([]),f=Object(n.a)(p,2),x=f[0],h=f[1],O=o.a.useState(""),v=Object(n.a)(O,2),N=v[0],g=v[1],w=o.a.useState(""),y=Object(n.a)(w,2),k=y[0],P=y[1],S=o.a.useState(""),q=Object(n.a)(S,2),C=q[0],T=q[1];o.a.useEffect((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:s=e.sent,h(null===s||void 0===s?void 0:s.data.map((function(e){return{value:e._id,label:e.name}}))),e.next=11;break;case 10:alert("Oops something went wrong");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(d.jsx)("div",{className:"container create-page-main-section",children:Object(d.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(a.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={zoneId:s,environment:j.value,description:N,text1:k,text2:C},e.next=3,fetch(i.a+"zone/addZone",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(a=e.sent,console.log(a),!0!==a.ok){e.next=10;break}return e.next=8,a.json();case 8:1==e.sent.success?(c(""),g(""),P(""),T(""),b(""),alert("Zone created successfully!")):alert("Oops something went wrong!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(d.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["ZoneId:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:s,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Environment:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"col-sm-10",children:Object(d.jsx)(u.a,{options:x,value:j,onChange:b})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:N,onChange:function(e){return g(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Text1:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:k,onChange:function(e){return P(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Text2:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:C,onChange:function(e){return T(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(d.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(d.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(d.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(d.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=58.ca57c2fe.chunk.js.map