"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[247],{90247:function(e,s,n){n.r(s),n.d(s,{default:function(){return d}});var t=n(15861),a=n(70885),r=n(64687),c=n.n(r),i=n(72791),o=n(30577),l=n(16094),u=n(80184);function d(){var e=i.useState(""),s=(0,a.Z)(e,2),n=s[0],r=s[1],d=i.useState(""),m=(0,a.Z)(d,2),f=m[0],p=m[1];return(0,u.jsxs)("div",{className:"container create-page-main-section",children:[(0,u.jsxs)("form",{onSubmit:function(e){return function(e){function s(){return(s=(0,t.Z)(c().mark((function e(){var s,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={beaconMac:n,description:f},e.next=3,fetch(l.HQ+"dbBeacon/addBeacon",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});case 3:if(!0!==(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:1==e.sent.success?(r(""),p(""),o.Am.info("Beacon created successfully!")):o.Am.error("Oops something went wrong!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){s.apply(this,arguments)}()}(e)},children:[(0,u.jsxs)("div",{className:"p-sm-5 create-form-field",children:[(0,u.jsxs)("div",{className:"form-group row",children:[(0,u.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["BeaconMac:",(0,u.jsx)("span",{className:"required-label",children:"*"})]}),(0,u.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,u.jsx)("input",{required:!0,value:n,onChange:function(e){return r(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]}),(0,u.jsxs)("div",{className:"form-group row",children:[(0,u.jsxs)("label",{htmlFor:"inputPassword",className:"col-sm-2 col-form-label",children:["Description:",(0,u.jsx)("span",{className:"required-label",children:"*"})]}),(0,u.jsx)("div",{className:"d-flex align-items-sm-center col-sm-10",children:(0,u.jsx)("input",{required:!0,value:f,onChange:function(e){return p(e.target.value)},type:"text",className:"form-control",id:"inputPassword"})})]})]}),(0,u.jsxs)("div",{className:"d-flex justify-content-center create-catagory-btns",children:[(0,u.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",className:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",(0,u.jsx)("i",{className:"px-2 fa fa-times","aria-hidden":"true"})]}),(0,u.jsxs)("button",{type:"submit",className:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",(0,u.jsx)("i",{className:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]}),(0,u.jsx)(o.Ix,{})]})}}}]);
//# sourceMappingURL=247.8792b050.chunk.js.map