(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[59],{798:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(666),s=n(128),r=n(667),c=n.n(r),o=n(1),i=n.n(o),l=n(665),u=n(24),d=n(18);function m(){var e=Object(u.i)().id,t=i.a.useState(""),n=Object(s.a)(t,2),r=n[0],o=n[1],m=i.a.useState(""),f=Object(s.a)(m,2),p=f[0],j=f[1],b=i.a.useState(""),x=Object(s.a)(b,2),h=x[0],O=x[1],v=i.a.useState(""),g=Object(s.a)(v,2),w=g[0],N=g[1],y=i.a.useState(""),k=Object(s.a)(y,2),P=k[0],S=k[1];return i.a.useEffect((function(){function t(){return(t=Object(a.a)(c.a.mark((function t(){var n,a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l.a+"zone/getSingleZone/"+e,{method:"GET"});case 2:if(!0!==(n=t.sent).ok){t.next=10;break}return t.next=6,n.json();case 6:1==(a=t.sent).success?(s=a.data,o(s.zoneId),O(s.description),N(s.text1),S(s.text2),j(s.environment)):alert("Oops something went wrong!"),t.next=11;break;case 10:alert("Response not fetched properly");case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(d.jsx)("div",{className:"container create-page-main-section",children:Object(d.jsxs)("form",{onSubmit:function(t){return function(t){function n(){return(n=Object(a.a)(c.a.mark((function t(){var n,a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={text1:w},t.next=3,fetch(l.a+"zone/updateZone/"+e,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 3:if(!0!==(a=t.sent).ok){t.next=13;break}return t.next=7,a.json();case 7:if(1!=t.sent.success){t.next=12;break}return t.abrupt("return",window.location=window.location.origin+"/#/zoneList");case 12:alert("Internal Server Error!");case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t.preventDefault(),function(){n.apply(this,arguments)}()}(t)},children:[Object(d.jsxs)("div",{className:"p-sm-5 create-form-field",children:[Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:"ZoneId:"}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{readOnly:!0,value:r,onChange:function(e){return o(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:"Environment:"}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{readOnly:!0,value:p,onChange:function(e){return j(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:"Description:"}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{readOnly:!0,value:h,onChange:function(e){return O(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsxs)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:["Text1:",Object(d.jsx)("span",{className:"required-label",children:"*"})]}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{required:!0,value:w,onChange:function(e){return N(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("label",{for:"inputPassword",className:"col-sm-2 col-form-label",children:"Text2:"}),Object(d.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:Object(d.jsx)("input",{readOnly:!0,value:P,onChange:function(e){return S(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),Object(d.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[Object(d.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(d.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(d.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(d.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}}}]);
//# sourceMappingURL=59.29c054d7.chunk.js.map