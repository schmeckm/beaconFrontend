(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{791:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var s=a(666),n=a(128),c=a(667),r=a.n(c),i=a(1),o=a.n(i),l=a(665),u=a(18);function d(){var e=o.a.useState(""),t=Object(n.a)(e,2),a=t[0],c=t[1],i=o.a.useState(""),d=Object(n.a)(i,2),m=d[0],b=d[1];return Object(u.jsx)("div",{className:"container create-page-main-section",children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(s.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={beaconMac:a,description:m},e.next=3,fetch(l.a+"dbBeacon/addBeacon",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(!0!==(s=e.sent).ok){e.next=9;break}return e.next=7,s.json();case 7:1==e.sent.success?(c(""),b(""),alert("Beacon created successfully!")):alert("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(u.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["BeaconMac:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:a,onChange:function(e){return c(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:m,onChange:function(e){return b(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(u.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(u.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(u.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(u.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(u.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=50.bdba803a.chunk.js.map