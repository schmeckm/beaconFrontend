(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[59],{771:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return j}));var n=s(665),a=s(128),c=s(666),r=s.n(c),l=s(1),o=s.n(l),i=s(667),u=s(673),d=s(18);function j(){var e=o.a.useState(""),t=Object(a.a)(e,2),s=t[0],c=t[1],l=o.a.useState(""),j=Object(a.a)(l,2),b=j[0],p=j[1],f=o.a.useState([]),m=Object(a.a)(f,2),x=m[0],h=m[1],O=o.a.useState(""),v=Object(a.a)(O,2),g=v[0],w=v[1],y=o.a.useState(""),k=Object(a.a)(y,2),P=k[0],S=k[1],q=o.a.useState(""),C=Object(a.a)(q,2),N=C[0],T=C[1];o.a.useEffect((function(){function e(){return(e=Object(n.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(i.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:s=e.sent,h(null===s||void 0===s?void 0:s.data.map((function(e){return{value:e._id,label:e.name}}))),e.next=11;break;case 10:alert("Oops something went wrong");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(d.jsx)("div",{className:"container create-page-main-section",children:Object(d.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(n.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={zoneId:s,environment:b.value,description:g,text1:P,text2:N},e.next=3,fetch(i.a+"zone/addZone",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(n=e.sent,console.log(n),!0!==n.ok){e.next=10;break}return e.next=8,n.json();case 8:1==e.sent.success?(c(""),w(""),S(""),T(""),p(""),alert("Zone created successfully!")):alert("Oops something went wrong!");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(d.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(d.jsxs)("div",{class:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["ZoneId:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:s,onChange:function(e){return c(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{class:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Environment:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{class:"col-sm-10",children:Object(d.jsx)(u.a,{options:x,value:b,onChange:p})})]}),Object(d.jsxs)("div",{class:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Description:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:g,onChange:function(e){return w(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{class:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Text1:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:P,onChange:function(e){return S(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{class:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Text2:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:N,onChange:function(e){return T(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]})]}),Object(d.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(d.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(d.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(d.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(d.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=59.73059c21.chunk.js.map