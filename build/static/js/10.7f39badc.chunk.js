(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[10],{667:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="http://45.32.153.102/api/"},691:function(e,n,t){"use strict";var a=t(1),c=t.n(a),o=t(665),r=t(128),s=t(666),i=t.n(s),l=t(667),u=t(681),m=t(18);var b=t(662),d=t(727),p=t(728),h=function(e){var n=e.csvData,t=e.fileName,a=[];n.map((function(e,n){a.push({"#":n+1,Timestamp:new Date(e.timestamp).toString(),environment:null===e||void 0===e?void 0:e.environment,gateway1Mac:e.gateway1Mac,gateway1Rssi:e.gateway1Rssi,gateway2Mac:e.gateway2Mac,gateway2Rssi:e.gateway2Rssi,gateway3Mac:e.gateway3Mac,gateway3Rssi:e.gateway3Rssi,beacon:e.beacon,zone_id:e.zone_id})}));return Object(m.jsx)("button",{style:{display:"none"},id:"export-excel-button",className:"btn btn-primary",onClick:function(e){return function(e,n){var t={Sheets:{data:p.a.json_to_sheet(e)},SheetNames:["data"]},a=p.b(t,{bookType:"xlsx",type:"array"}),c=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});d.saveAs(c,n+".xlsx")}(a,t)},children:"Export As Excel"})};var f=t(737);var j=c.a.lazy((function(){return t.e(44).then(t.bind(null,746))})),x=c.a.lazy((function(){return t.e(11).then(t.bind(null,747))})),y=c.a.lazy((function(){return t.e(21).then(t.bind(null,748))})),v=c.a.lazy((function(){return t.e(22).then(t.bind(null,749))})),O=c.a.lazy((function(){return t.e(23).then(t.bind(null,750))})),g=c.a.lazy((function(){return t.e(24).then(t.bind(null,751))})),w=c.a.lazy((function(){return t.e(25).then(t.bind(null,752))})),z=c.a.lazy((function(){return t.e(26).then(t.bind(null,753))})),S=c.a.lazy((function(){return t.e(27).then(t.bind(null,754))})),N=c.a.lazy((function(){return t.e(28).then(t.bind(null,755))})),C=c.a.lazy((function(){return t.e(29).then(t.bind(null,756))})),k=c.a.lazy((function(){return t.e(30).then(t.bind(null,757))})),E=c.a.lazy((function(){return t.e(31).then(t.bind(null,758))})),B=c.a.lazy((function(){return t.e(32).then(t.bind(null,759))})),I=c.a.lazy((function(){return t.e(33).then(t.bind(null,760))})),_=c.a.lazy((function(){return t.e(34).then(t.bind(null,761))})),P=c.a.lazy((function(){return t.e(35).then(t.bind(null,762))})),T=c.a.lazy((function(){return t.e(60).then(t.bind(null,763))})),M=c.a.lazy((function(){return t.e(36).then(t.bind(null,764))})),D=c.a.lazy((function(){return t.e(37).then(t.bind(null,765))})),G=c.a.lazy((function(){return t.e(38).then(t.bind(null,766))})),L=c.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(39)]).then(t.bind(null,767))})),F=c.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(47)]).then(t.bind(null,796))})),R=c.a.lazy((function(){return Promise.all([t.e(3),t.e(65),t.e(12)]).then(t.bind(null,768))})),A=c.a.lazy((function(){return Promise.all([t.e(3),t.e(64),t.e(13)]).then(t.bind(null,771))})),Z=c.a.lazy((function(){return Promise.all([t.e(3),t.e(40)]).then(t.bind(null,683))})),J=c.a.lazy((function(){return t.e(41).then(t.bind(null,773))})),H=c.a.lazy((function(){return t.e(42).then(t.bind(null,774))})),U=c.a.lazy((function(){return t.e(43).then(t.bind(null,775))})),W=c.a.lazy((function(){return t.e(14).then(t.bind(null,776))})),q=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:F},{path:"/theme",name:"Theme",component:W,exact:!0},{path:"/theme/colors",name:"Colors",component:W},{path:"/theme/typography",name:"Typography",component:c.a.lazy((function(){return t.e(45).then(t.bind(null,777))}))},{path:"/base",name:"Base",component:v,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:y},{path:"/base/cards",name:"Cards",component:v},{path:"/base/carousels",name:"Carousel",component:O},{path:"/base/collapses",name:"Collapse",component:g},{path:"/base/forms",name:"Forms",component:w},{path:"/base/jumbotrons",name:"Jumbotrons",component:z},{path:"/base/list-groups",name:"List Groups",component:S},{path:"/base/navbars",name:"Navbars",component:N},{path:"/base/navs",name:"Navs",component:C},{path:"/base/paginations",name:"Paginations",component:k},{path:"/base/popovers",name:"Popovers",component:E},{path:"/base/progress-bar",name:"Progress Bar",component:B},{path:"/base/switches",name:"Switches",component:I},{path:"/base/tables",name:"Tables",component:x},{path:"/base/tabs",name:"Tabs",component:_},{path:"/base/tooltips",name:"Tooltips",component:P},{path:"/buttons",name:"Buttons",component:G,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:G},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:M},{path:"/buttons/button-groups",name:"Button Groups",component:D},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:T},{path:"/charts",name:"Charts",component:L},{path:"/icons",exact:!0,name:"Icons",component:R},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:R},{path:"/icons/flags",name:"Flags",component:A},{path:"/icons/brands",name:"Brands",component:Z},{path:"/notifications",name:"Notifications",component:J,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:J},{path:"/notifications/badges",name:"Badges",component:H},{path:"/notifications/modals",name:"Modals",component:U},{path:"/notifications/toaster",name:"Toaster",component:j},{path:"/widgets",name:"Widgets",component:c.a.lazy((function(){return Promise.all([t.e(1),t.e(2),t.e(8)]).then(t.bind(null,778))}))},{path:"/users",exact:!0,name:"Users",component:c.a.lazy((function(){return t.e(49).then(t.bind(null,779))}))},{path:"/users/:id",exact:!0,name:"User Details",component:c.a.lazy((function(){return t.e(48).then(t.bind(null,780))}))},{path:"/create/gateway",exact:!0,name:"Create Gateway",component:c.a.lazy((function(){return t.e(55).then(t.bind(null,781))}))},{path:"/edit/gateway/:id",exact:!0,name:"Edit Gateway",component:c.a.lazy((function(){return t.e(56).then(t.bind(null,782))}))},{path:"/gatewayList",exact:!0,name:"Gateway List",component:c.a.lazy((function(){return t.e(18).then(t.bind(null,783))}))},{path:"/create/beacon",exact:!0,name:"Create Beacon",component:c.a.lazy((function(){return t.e(51).then(t.bind(null,784))}))},{path:"/edit/beacon/:id",exact:!0,name:"Edit Beacon",component:c.a.lazy((function(){return t.e(52).then(t.bind(null,785))}))},{path:"/beaconList",exact:!0,name:"Beacon List",component:c.a.lazy((function(){return t.e(16).then(t.bind(null,786))}))},{path:"/create/environment",exact:!0,name:"Create Environment",component:c.a.lazy((function(){return t.e(53).then(t.bind(null,787))}))},{path:"/edit/environment/:id",exact:!0,name:"Edit Environment",component:c.a.lazy((function(){return t.e(54).then(t.bind(null,788))}))},{path:"/environmentList",exact:!0,name:"Environment List",component:c.a.lazy((function(){return t.e(17).then(t.bind(null,789))}))},{path:"/create/zone",exact:!0,name:"Create Zone",component:c.a.lazy((function(){return t.e(58).then(t.bind(null,790))}))},{path:"/edit/zone/:id",exact:!0,name:"Edit Zone",component:c.a.lazy((function(){return t.e(59).then(t.bind(null,791))}))},{path:"/zoneList",exact:!0,name:"Zone List",component:c.a.lazy((function(){return t.e(19).then(t.bind(null,792))}))},{path:"/systemSettings",exact:!0,name:"System Settings",component:c.a.lazy((function(){return t.e(57).then(t.bind(null,793))}))},{path:"/get-beacon-position",exact:!0,name:"Get Beacon Position",component:c.a.lazy((function(){return Promise.all([t.e(1),t.e(50)]).then(t.bind(null,794))}))},{path:"/calculate-tx-power",exact:!0,name:"Calculate Tx Power",component:function(){var e=c.a.useState([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=c.a.useState(""),b=Object(r.a)(s,2),d=b[0],p=b[1],h=c.a.useState([]),f=Object(r.a)(h,2),j=f[0],x=f[1],y=c.a.useState(""),v=Object(r.a)(y,2),O=v[0],g=v[1],w=c.a.useState([]),z=Object(r.a)(w,2),S=z[0],N=z[1];return c.a.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,a(t.data.map((function(e,n){return{value:e._id,label:e.beaconMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"gateway/getAllGateways",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,x(t.data.map((function(e,n){return{value:e._id,label:e.gatewayMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"container create-page-main-section",children:[Object(m.jsx)("div",{className:"p-sm-5 create-form-field",children:Object(m.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),d&&O){var n=function(){var e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"beacon/calculateTxPower",{method:"POST",body:JSON.stringify({beaconMac:d,gatewayMac:O})});case 2:if(1!=(n=e.sent).ok){e.next=10;break}return e.next=6,n.json();case 6:1==(t=e.sent).success&&(alert("data fetch successfully!"),N(t.data.observations)),e.next=11;break;case 10:alert("Oops something went wrong!");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}else alert("Please select beacon & gateway")}(e)},children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Beacon"}),Object(m.jsx)(u.a,{value:d,onChange:p,options:t})]}),Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Gateway"}),Object(m.jsx)(u.a,{value:O,onChange:g,options:j})]})]}),Object(m.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(m.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(m.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(m.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(m.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})}),S.length>0&&Object(m.jsxs)("table",{children:[Object(m.jsxs)("thead",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Observation"})]}),S.map((function(e,n){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:n+1}),Object(m.jsx)("td",{children:e})]},n)}))]})]})}},{path:"/fingerprinting",exact:!0,name:"Start Stop Fingerprinting",component:function(){var e=Object(a.useState)((function(){return Object(f.a)("http://localhost:4001")})),n=Object(r.a)(e,1)[0],t=Object(a.useState)(null),c=Object(r.a)(t,2),s=c[0],b=c[1],d=Object(a.useState)([]),p=Object(r.a)(d,2),h=p[0],j=p[1],x=Object(a.useState)(""),y=Object(r.a)(x,2),v=y[0],O=y[1],g=Object(a.useState)([]),w=Object(r.a)(g,2),z=w[0],S=w[1],N=Object(a.useState)(""),C=Object(r.a)(N,2),k=C[0],E=C[1],B=Object(a.useState)([]),I=Object(r.a)(B,2),_=I[0],P=I[1],T=Object(a.useState)([]),M=Object(r.a)(T,2),D=M[0],G=M[1],L=Object(a.useState)(""),F=Object(r.a)(L,2),R=F[0],A=F[1],Z=Object(a.useState)(""),J=Object(r.a)(Z,2),H=J[0],U=J[1];Object(a.useEffect)((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,S(t.data.map((function(e,n){return{value:e._id,label:e.beaconMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,j(t.data.map((function(e,n){return{value:e._id,label:e.name}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"zone/getAllZones",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,P(t.data.map((function(e,n){return{"#":n+1,id:e._id,zoneId:e.zoneId,description:e.description,environment:e.environment}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){return n.on("numberOfRssiFiles",(function(e){console.log("RSSI # : ",e),b(e)})),function(){return n.off("numberOfRssiFiles",(function(){return b(null)}))}}),[]);var W=function(){n.emit("rssiFiles")};function q(e){return K.apply(this,arguments)}function K(){return(K=Object(o.a)(i.a.mark((function e(n){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"fingerprint/startFingerPrinting",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({environment:v.value,beaconId:k.label,zoneId:n})});case 2:if(!0!==(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:!0===(a=e.sent).success&&(alert(a.msg+" for zoneID ".concat(n)),A(n),W());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{className:"container create-page-main-section",children:[Object(m.jsx)("div",{className:"p-sm-5 create-form-field",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Environment"}),Object(m.jsx)(u.a,{options:h,value:v,onChange:function(e){var n;O(e),n=_.filter((function(n){return n.environment===e.value})),G(n)}})]}),Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Beacon"}),Object(m.jsx)(u.a,{options:z,value:k,onChange:E})]}),Object(m.jsxs)("div",{className:"col-md-4 form-group d-flex flex-column align-items-center justify-contents-center",children:[Object(m.jsx)("label",{children:"RSSI"}),Object(m.jsx)("p",{children:null!==s&&void 0!==s?s:"Fingerprinting not started yet."})]})]})}),D.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:"text-center my-3",children:"Select Zone"}),Object(m.jsx)("div",{id:"grid-table",className:"row",children:D.map((function(e,n){return Object(m.jsx)("div",{className:"col-md-4",id:"".concat(n),onClick:function(){return function(e,n){R?(document.getElementById(H).style.background="green",document.getElementById(n).style.background="red",U(n),q(e.zoneId)):(document.getElementById(n).style.background="red",U(n),q(e.zoneId))}(e,n)},children:e.zoneId},n)}))})]})]})}},{path:"/get-mldata-environment",exact:!0,name:"Get ML Data By Environment",component:function(){var e=c.a.useState([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=c.a.useState(""),d=Object(r.a)(s,2),p=d[0],f=d[1],j=c.a.useState([]),x=Object(r.a)(j,2),y=x[0],v=x[1];return c.a.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,a(t.data.map((function(e,n){return{value:e._id,label:e.name}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(m.jsxs)("div",{className:"col-md-5 form-group",children:[Object(m.jsx)("label",{children:"Environment"}),Object(m.jsx)(u.a,{options:t,value:p,onChange:f})]}),Object(m.jsx)("button",{onClick:function(){return function(){if(p){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var n,t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert(p.value),e.next=3,fetch("http://45.32.153.102:3000/fingerprint/getMLDataByEnvironment  /".concat(p.value));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,console.log(t),1==t.success&&(a=t.data,v(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else alert("Please select environment")}()},className:"btn btn-primary",style:{height:"fit-content"},children:"Filter"}),Object(m.jsx)("button",{onClick:function(){document.getElementById("export-excel-button").click()},className:"ml-3 btn btn-success",style:{height:"fit-content"},children:"Export Excel"}),Object(m.jsx)(h,{csvData:y})]}),Object(m.jsx)(b.u,{xs:"12",lg:"12",children:Object(m.jsx)(b.j,{children:Object(m.jsx)(b.k,{children:Object(m.jsx)(b.y,{items:y,fields:["#","timestamp","environment","gateway1Mac","gateway1Rssi","gateway2Mac","gateway2Rssi","gateway3Mac","gateway3Rssi","beacon","zone_id"],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0})})})})]})}}];n.a=q},795:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),o=t(56),r=t(24),s=t(662),i=t(691),l=t(18),u=Object(l.jsx)("div",{className:"pt-3 text-center",children:Object(l.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),m=function(){return Object(l.jsx)("main",{className:"c-main",children:Object(l.jsx)(s.w,{fluid:!0,children:Object(l.jsx)(a.Suspense,{fallback:u,children:Object(l.jsxs)(r.d,{children:[i.a.map((function(e,n){return e.component&&Object(l.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(l.jsx)(s.H,{children:Object(l.jsx)(e.component,Object(o.a)({},n))})}},n)})),Object(l.jsx)(r.a,{from:"/",to:"/dashboard"})]})})})})},b=c.a.memo(m),d=function(){return Object(l.jsx)(s.I,{fixed:!1,children:Object(l.jsxs)("div",{className:"mfs-auto",children:[Object(l.jsx)("span",{className:"mr-1",children:"Developed by"}),Object(l.jsx)("a",{href:"https://web-amplifier.com",target:"_blank",rel:"noopener noreferrer",children:"Web Amplifier"})]})})},p=c.a.memo(d),h=t(187),f=t(664),j=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(s.M,{withSubheader:!0,children:[Object(l.jsx)(s.Ob,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:t})}}),Object(l.jsx)(s.Ob,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:t})}}),Object(l.jsx)(s.N,{className:"mx-auto d-lg-none",to:"/",children:Object(l.jsx)(f.a,{name:"logo",height:"48",alt:"Logo"})}),Object(l.jsx)(s.O,{className:"d-md-down-none mr-auto"}),Object(l.jsx)(s.O,{className:"px-3"}),Object(l.jsx)(s.Eb,{className:"px-3 justify-content-between",children:Object(l.jsx)(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:i.a})})]})},x=(t(127),[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(l.jsx)(f.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Masters",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Gateway",to:"/gatewayList"},{_tag:"CSidebarNavItem",name:"Beacon",to:"/beaconList"},{_tag:"CSidebarNavItem",name:"Environment",to:"/environmentList"},{_tag:"CSidebarNavItem",name:"Zone",to:"/zoneList"}]},{_tag:"CSidebarNavDropdown",name:"Beacon Configuration",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Get Position",to:"/get-beacon-position"},{_tag:"CSidebarNavItem",name:"Calculate Power",to:"/calculate-tx-power"}]},{_tag:"CSidebarNavDropdown",name:"Fingerprinting",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Start/Stop Fingerprinting",to:"/fingerprinting"},{_tag:"CSidebarNavItem",name:"Get ML Data Environment",to:"/get-mldata-environment"}]},{_tag:"CSidebarNavItem",name:"System Settings",to:"/systemSettings",icon:Object(l.jsx)(f.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})}]),y=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(s.wb,{show:n,onShowChange:function(n){return e({type:"set",sidebarShow:n})},children:[Object(l.jsx)(s.xb,{className:"d-md-down-none",to:"/"}),Object(l.jsx)(s.zb,{children:Object(l.jsx)(s.x,{items:x,components:{CSidebarNavDivider:s.Ab,CSidebarNavDropdown:s.Bb,CSidebarNavItem:s.Cb,CSidebarNavTitle:s.Db}})}),Object(l.jsx)(s.yb,{className:"c-d-md-down-none"})]})},v=c.a.memo(y);n.default=function(){return Object(l.jsxs)("div",{className:"c-app c-default-layout",children:[Object(l.jsx)(v,{}),Object(l.jsxs)("div",{className:"c-wrapper",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"c-body",children:Object(l.jsx)(b,{})}),Object(l.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=10.7f39badc.chunk.js.map