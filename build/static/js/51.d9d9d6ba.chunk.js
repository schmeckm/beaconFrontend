(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[51],{795:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(668),s=n(128),c=n(669),r=n.n(c),o=n(1),i=n.n(o),l=n(667),u=n(24),d=n(670),p=n(18);function b(){var e=Object(u.i)().id,t=i.a.useState(""),n=Object(s.a)(t,2),c=n[0],o=n[1],b=i.a.useState(""),f=Object(s.a)(b,2),m=f[0],j=f[1];return i.a.useEffect((function(){function t(){return(t=Object(a.a)(r.a.mark((function t(){var n,a,s;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l.a+"dbBeacon/getSingleBeacon/"+e,{method:"GET"});case 2:if(!0!==(n=t.sent).ok){t.next=10;break}return t.next=6,n.json();case 6:1==(a=t.sent).success?(s=a.data,o(s.beaconMac),j(s.description)):d.b.error("Oops something went wrong!"),t.next=11;break;case 10:d.b.error("Response not fetched properly");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(p.jsxs)("div",{className:"container create-page-main-section",children:[Object(p.jsxs)("form",{onSubmit:function(t){return function(t){function n(){return(n=Object(a.a)(r.a.mark((function t(){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={description:m},t.next=3,fetch(l.a+"dbBeacon/updateBeacon/"+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(!0!==(a=t.sent).ok){t.next=13;break}return t.next=7,a.json();case 7:if(1!=t.sent.success){t.next=12;break}return t.abrupt("return",window.location=window.location.origin+"/#/beaconList");case 12:d.b.error("Internal Server Error!");case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.preventDefault(),function(){n.apply(this,arguments)}()}(t)},children:[Object(p.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(p.jsxs)("div",{className:"form-group row",children:[Object(p.jsx)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:"BeaconMac:"}),Object(p.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(p.jsx)("input",{readOnly:!0,value:c,type:"text",className:"form-control",id:"inputPassword"})})]}),Object(p.jsxs)("div",{className:"form-group row",children:[Object(p.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",Object(p.jsx)("span",{className:"required-label",children:"*"})]}),Object(p.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(p.jsx)("input",{value:m,onChange:function(e){return j(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(p.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(p.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(p.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(p.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(p.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]}),Object(p.jsx)(d.a,{})]})}}}]);
//# sourceMappingURL=51.d9d9d6ba.chunk.js.map