(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{794:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return b}));var a=s(668),n=s(128),c=s(669),r=s.n(c),i=s(1),o=s.n(i),l=s(670),u=s(667),d=s(18);function b(){var e=o.a.useState(""),t=Object(n.a)(e,2),s=t[0],c=t[1],i=o.a.useState(""),b=Object(n.a)(i,2),m=b[0],p=b[1];return Object(d.jsxs)("div",{className:"container create-page-main-section",children:[Object(d.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(a.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={beaconMac:s,description:m},e.next=3,fetch(u.a+"dbBeacon/addBeacon",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(!0!==(a=e.sent).ok){e.next=9;break}return e.next=7,a.json();case 7:1==e.sent.success?(c(""),p(""),l.b.info("Beacon created successfully!")):l.b.error("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(d.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["BeaconMac:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:s,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:m,onChange:function(e){return p(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(d.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(d.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(d.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(d.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]}),Object(d.jsx)(l.a,{})]})}}}]);
//# sourceMappingURL=50.f0c7cfff.chunk.js.map