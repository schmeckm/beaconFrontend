(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[19],{673:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(662),r=(a(1),a(18));function c(e){var t=e.modal,a=e.setModal,c=e.deleteEntry;return Object(r.jsx)("div",{className:"delete_modal_box",children:Object(r.jsxs)(n.eb,{show:t,onClose:a,children:[Object(r.jsx)(n.hb,{closeButton:!0}),Object(r.jsxs)(n.fb,{className:"delete_modal_body",children:[Object(r.jsx)("p",{children:" Are you sure you want to delete this record ?"}),Object(r.jsxs)("div",{className:"btn-div-modal-group delete_modal_Btns",children:[Object(r.jsx)("button",{onClick:function(){return c()},className:"delete_modal_yes_Btn",children:"Yes, Approve"}),Object(r.jsx)("button",{className:"btn btn-primary delete_modal_cancel_Btn",color:"secondary",onClick:function(){return a(!1)},children:"Cancel"})]})]})]})})}},786:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(665),r=a(128),c=a(666),s=a.n(c),o=a(662),i=a(1),u=a.n(i),l=a(183),d=a(667),y=a(673),j=a(18);function b(){var e=u.a.useState([]),t=Object(r.a)(e,2),a=t[0],c=t[1],i=u.a.useState(null),b=Object(r.a)(i,2),f=b[0],w=b[1],h=u.a.useState(!1),p=Object(r.a)(h,2),g=p[0],m=p[1];u.a.useEffect((function(){function e(){return(e=Object(n.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.a+"gateway/getAllGateways",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:a=e.sent,c(a.data.map((function(e,t){return{"#":t+1,id:e._id,gatewayMac:e.gatewayMac,gatewayFree:e.gatewayFree,gatewayLoad:e.gatewayLoad,gatewayX:e.gatewayX,gatewayY:e.gatewayY}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(j.jsxs)("section",{children:[Object(j.jsx)(y.a,{modal:g,setModal:m,deleteEntry:function(){function e(){return e=Object(n.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.a+"gateway/deleteGateway/"+f,{method:"DELETE"});case 2:return t=e.sent,e.next=5,t.json();case 5:1==e.sent.success&&(a=function(){var e=Object(n.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(d.a+"gateway/getAllGateways",{method:"GET"});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:a=e.sent,c(a.data.map((function(e,t){return{"#":t+1,id:e._id,gatewayMac:e.gatewayMac,gatewayFree:e.gatewayFree,gatewayLoad:e.gatewayLoad,gatewayX:e.gatewayX,gatewayY:e.gatewayY}})));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m(!1),w(""),a());case 7:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}!function(){e.apply(this,arguments)}()}}),Object(j.jsx)(l.b,{className:"btn btn-primary mb-3 ml-3",to:"/create/gateway",children:"Create Gateway"}),Object(j.jsx)(o.u,{xs:"12",lg:"12",children:Object(j.jsx)(o.j,{children:Object(j.jsx)(o.k,{children:Object(j.jsx)(o.y,{items:a,fields:["#","gatewayMac","gatewayFree","gatewayLoad","gatewayX","gatewayY","action"],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0,scopedSlots:{action:function(e){return Object(j.jsxs)("td",{children:[Object(j.jsx)(l.b,{className:"mr-2",to:"/edit/gateway/".concat(e.id),children:Object(j.jsx)("i",{class:"fa fa-pencil","aria-hidden":"true"})}),Object(j.jsx)("i",{style:{cursor:"pointer"},onClick:function(){return t=e.id,w(t),void m(!0);var t},class:"fa fa-trash","aria-hidden":"true"})]})}}})})})})]})}}}]);
//# sourceMappingURL=19.27d59bd8.chunk.js.map