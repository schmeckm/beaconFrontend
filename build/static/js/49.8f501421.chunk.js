(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[49],{762:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var s=n(665),c=n(128),a=n(666),r=n.n(a),i=n(1),o=n.n(i),l=n(667),u=n(18);function d(){var e=o.a.useState(""),t=Object(c.a)(e,2),n=t[0],a=t[1],i=o.a.useState(""),d=Object(c.a)(i,2),b=d[0],p=d[1];return Object(u.jsx)("div",{className:"container create-page-main-section",children:Object(u.jsxs)("form",{onSubmit:function(e){return function(e){function t(){return(t=Object(s.a)(r.a.mark((function e(){var t,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={beaconMac:n,description:b},e.next=3,fetch(l.a+"dbBeacon/addBeacon",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:if(!0!==(s=e.sent).ok){e.next=9;break}return e.next=7,s.json();case 7:1==e.sent.success?(a(""),p(""),alert("Beacon created successfully!")):alert("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){t.apply(this,arguments)}()}(e)},children:[Object(u.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["BeaconMac:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:n,onChange:function(e){return a(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]}),Object(u.jsxs)("div",{class:"form-group row",children:[Object(u.jsxs)("label",{for:"inputPassword",class:"col-sm-2 col-form-label",children:["Description:",Object(u.jsx)("span",{className:"required-label",children:"*"})]}),Object(u.jsx)("div",{class:"d-flex align-items-sm-center col-sm-10",children:Object(u.jsx)("input",{required:!0,value:b,onChange:function(e){return p(e.target.value)},type:"text",class:"form-control",id:"inputPassword"})})]})]}),Object(u.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(u.jsxs)("button",{onClick:function(){return window.location.reload()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(u.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(u.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(u.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=49.8f501421.chunk.js.map