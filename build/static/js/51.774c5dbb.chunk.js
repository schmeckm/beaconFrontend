(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[51],{775:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(665),c=n(128),r=n(666),s=n.n(r),o=n(667),i=n(1),l=n.n(i),u=n(673),b=(n(716),n(674)),d=n.n(b),f=n(18);function j(){var e=l.a.useState([]),t=Object(c.a)(e,2),n=t[0],r=t[1],i=l.a.useState(""),b=Object(c.a)(i,2),j=b[0],p=b[1],m=l.a.useState(""),h=Object(c.a)(m,2),x=h[0],O=h[1],v=l.a.useState(""),g=Object(c.a)(v,2),y=g[0],w=g[1];return l.a.useEffect((function(){function e(){return(e=Object(a.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:n=e.sent,r(n.data.map((function(e,t){return{value:e._id,label:e.beaconMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(f.jsx)("div",{className:"container create-page-main-section",children:Object(f.jsx)("div",{className:"p-sm-5 create-form-field",children:Object(f.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),j){var t=function(){var e=Object(a.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o.a+"beacon/getPosition",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({beaconMac:j.label,startTime:new Date(x).toISOString(),endTime:new Date(y).toISOString()})});case 2:if(1!=(t=e.sent).ok){e.next=10;break}return e.next=6,t.json();case 6:1==(n=e.sent).success&&(console.log({beaconMac:j.value,startTime:d.a.utc(x).valueOf(),endTime:d.a.utc(y).valueOf()}),console.log(n)),e.next=11;break;case 10:alert("Oops something went wrong!");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t()}else alert("Please select beacon")}(e)},children:[Object(f.jsxs)("div",{className:"row",children:[Object(f.jsxs)("div",{className:"col-md-4 form-group",children:[Object(f.jsx)("label",{children:"Beacon"}),Object(f.jsx)(u.a,{value:j,onChange:p,options:n})]}),Object(f.jsxs)("div",{className:"col-md-4 form-group",children:[Object(f.jsx)("label",{children:"Start Time"}),Object(f.jsx)("input",{type:"datetime-local",className:"form-control",value:x,onChange:function(e){return O(e.target.value)},required:!0})]}),Object(f.jsxs)("div",{className:"col-md-4 form-group",children:[Object(f.jsx)("label",{children:"End Time"}),Object(f.jsx)("input",{type:"datetime-local",className:"form-control",value:y,onChange:function(e){return w(e.target.value)},required:!0})]})]}),Object(f.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(f.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(f.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(f.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Execute",Object(f.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})})})}}}]);
//# sourceMappingURL=51.774c5dbb.chunk.js.map