(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[50],{772:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(665),c=n(128),s=n(666),r=n.n(s),i=n(662),o=n(667),l=n(1),u=n.n(l),d=n(673),b=n(686),j=n.n(b),p=n(18);function f(){var e=u.a.useState([]),t=Object(c.a)(e,2),n=t[0],s=t[1],l=u.a.useState(""),b=Object(c.a)(l,2),f=b[0],m=b[1],h=u.a.useState(""),x=Object(c.a)(h,2),O=x[0],v=x[1],g=u.a.useState(""),y=Object(c.a)(g,2),w=y[0],S=y[1],k=u.a.useState([]),N=Object(c.a)(k,2),M=N[0],P=N[1];return u.a.useEffect((function(){function e(){return(e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:n=e.sent,s(n.data.map((function(e,t){return{value:e._id,label:e.beaconMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"container create-page-main-section",children:Object(p.jsx)("div",{className:"p-sm-5 create-form-field",children:Object(p.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),f){var t=function(){var e=Object(a.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.a+"beacon/getPosition",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({beaconMac:f.label,startTime:new Date(O).toISOString(),endTime:new Date(w).toISOString()})});case 2:if(1!=(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:1==(n=e.sent).success&&P(n.data.map((function(e,t){return{"#":t+1,id:e._id,beaconMac:e.beaconMac,positionX:e.positionX,positionY:e.positionY,createdAt:j()(e.createdAt).format("MM-DD-YYYY hh:mm:ss A")}}))),e.next=11;break;case 10:alert("Oops something went wrong!");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}else alert("Please select beacon")}(e)},children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-4 form-group",children:[Object(p.jsx)("label",{children:"Beacon"}),Object(p.jsx)(d.a,{value:f,onChange:m,options:n})]}),Object(p.jsxs)("div",{className:"col-md-4 form-group",children:[Object(p.jsx)("label",{children:"Start Time"}),Object(p.jsx)("input",{type:"datetime-local",className:"form-control",value:O,onChange:function(e){return v(e.target.value)},required:!0})]}),Object(p.jsxs)("div",{className:"col-md-4 form-group",children:[Object(p.jsx)("label",{children:"End Time"}),Object(p.jsx)("input",{type:"datetime-local",className:"form-control",value:w,onChange:function(e){return S(e.target.value)},required:!0})]})]}),Object(p.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(p.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(p.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(p.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Execute",Object(p.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})}),Object(p.jsx)("div",{class:"container",children:Object(p.jsx)(i.u,{className:"mt-2",xs:"12",lg:"12",children:Object(p.jsx)(i.j,{children:Object(p.jsx)(i.k,{children:Object(p.jsx)(i.y,{items:M,fields:["#","beaconMac","positionX","positionY","createdAt"],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0})})})})})]})}}}]);
//# sourceMappingURL=50.41ca0790.chunk.js.map