(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[58],{800:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return b}));var a=s(668),n=s(128),c=s(669),r=s.n(c),o=s(1),l=s.n(o),i=s(667),u=s(677),d=s(670),m=s(18);function b(){var e=l.a.useState(""),t=Object(n.a)(e,2),s=t[0],c=t[1],o=l.a.useState(""),b=Object(n.a)(o,2),j=b[0],f=b[1],p=l.a.useState([]),x=Object(n.a)(p,2),h=x[0],O=x[1],v=l.a.useState(""),N=Object(n.a)(v,2),g=N[0],w=N[1],y=l.a.useState(""),k=Object(n.a)(y,2),P=k[0],S=k[1],q=l.a.useState(""),C=Object(n.a)(q,2),T=C[0],E=C[1];l.a.useEffect((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:s=e.sent,O(null===s||void 0===s?void 0:s.data.map((function(e){return{value:e._id,label:e.name}}))),e.next=11;break;case 10:d.b.error("Oops something went wrong");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(m.jsxs)("div",{className:"container create-page-main-section",children:[Object(m.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(a.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={zoneId:s,environment:j.value,description:g,text1:P,text2:T},e.next=3,fetch(i.a+"zone/addZone",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(a=e.sent,console.log(a),!0!==a.ok){e.next=10;break}return e.next=8,a.json();case 8:1==e.sent.success?(c(""),w(""),S(""),E(""),f(""),d.b.info("Zone created successfully!")):d.b.error("Oops something went wrong!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(m.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["ZoneId:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{required:!0,value:s,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Environment:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("div",{className:"col-sm-10",children:Object(m.jsx)(u.a,{options:h,value:j,onChange:f})})]}),Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{required:!0,value:g,onChange:function(e){return w(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Text1:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{required:!0,value:P,onChange:function(e){return S(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(m.jsxs)("div",{className:"form-group row",children:[Object(m.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Text2:",Object(m.jsx)("span",{className:"required-label",children:"*"})]}),Object(m.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(m.jsx)("input",{required:!0,value:T,onChange:function(e){return E(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(m.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(m.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(m.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(m.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(m.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]}),Object(m.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=58.572cc809.chunk.js.map