(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{671:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(662),a=(n(1),n(18));function r(e){var t=e.modal,n=e.setModal,r=e.deleteEntry;return Object(a.jsx)("div",{className:"delete_modal_box",children:Object(a.jsxs)(c.eb,{show:t,onClose:n,children:[Object(a.jsx)(c.hb,{closeButton:!0}),Object(a.jsxs)(c.fb,{className:"delete_modal_body",children:[Object(a.jsx)("p",{children:" Are you sure you want to delete this record ?"}),Object(a.jsxs)("div",{className:"btn-div-modal-group delete_modal_Btns",children:[Object(a.jsx)("button",{onClick:function(){return r()},className:"delete_modal_yes_Btn",children:"Yes, Approve"}),Object(a.jsx)("button",{className:"btn btn-primary delete_modal_cancel_Btn",color:"secondary",onClick:function(){return n(!1)},children:"Cancel"})]})]})]})})}},793:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var c=n(666),a=n(128),r=n(667),s=n.n(r),o=n(662),i=n(1),u=n.n(i),d=n(183),l=n(665),b=n(671),j=n(18);function f(){var e=u.a.useState([]),t=Object(a.a)(e,2),n=t[0],r=t[1],i=u.a.useState(null),f=Object(a.a)(i,2),p=f[0],h=f[1],m=u.a.useState(!1),x=Object(a.a)(m,2),O=x[0],v=x[1];u.a.useEffect((function(){function e(){return(e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:n=e.sent,r(n.data.map((function(e,t){return{"#":t+1,id:e._id,beaconMac:e.beaconMac,description:e.description}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(j.jsxs)("section",{children:[Object(j.jsx)(b.a,{modal:O,setModal:v,deleteEntry:function(){function e(){return e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/deleteBeacon/"+p,{method:"DELETE"});case 2:return t=e.sent,e.next=5,t.json();case 5:1==e.sent.success&&(n=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:n=e.sent,r(n.data.map((function(e,t){return{"#":t+1,id:e._id,beaconMac:e.beaconMac,description:e.description}})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v(!1),h(""),n());case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}}),Object(j.jsx)(d.b,{className:"btn btn-primary mb-3 ml-3",to:"/create/beacon",children:"Create Beacon"}),Object(j.jsx)(o.u,{xs:"12",lg:"12",children:Object(j.jsx)(o.j,{children:Object(j.jsx)(o.k,{children:Object(j.jsx)(o.y,{items:n,fields:["#","beaconMac","description","action"],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{action:function(e){return Object(j.jsxs)("td",{children:[Object(j.jsx)(d.b,{className:"mr-2",to:"/edit/beacon/".concat(e.id),children:Object(j.jsx)("i",{className:"fa fa-pencil","aria-hidden":"true"})}),Object(j.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return t=e.id,h(t),void v(!0);var t},className:"fa fa-trash","aria-hidden":"true"})]})}}})})})})]})}}}]);
//# sourceMappingURL=16.0b2af026.chunk.js.map