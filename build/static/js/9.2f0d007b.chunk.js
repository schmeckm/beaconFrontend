(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[9],{667:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a="http://45.32.153.102/api/"},679:function(e,n,t){"use strict";var a=t(1),c=t.n(a),o=t(665),r=t(128),s=t(666),i=t.n(s),l=t(667),u=t(673),m=t(18);var b=t(662),d=t(711),p=t(712),h=function(e){var n=e.csvData,t=e.fileName,a=[];n.map((function(e,n){a.push({"#":n+1,Timestamp:new Date(e.timestamp).toString(),environment:null===e||void 0===e?void 0:e.environment,gateway1Mac:e.gateway1Mac,gateway1Rssi:e.gateway1Rssi,gateway2Mac:e.gateway2Mac,gateway2Rssi:e.gateway2Rssi,gateway3Mac:e.gateway3Mac,gateway3Rssi:e.gateway3Rssi,beacon:e.beacon,zone_id:e.zone_id})}));return Object(m.jsx)("button",{style:{display:"none"},id:"export-excel-button",className:"btn btn-primary",onClick:function(e){return function(e,n){var t={Sheets:{data:p.a.json_to_sheet(e)},SheetNames:["data"]},a=p.b(t,{bookType:"xlsx",type:"array"}),c=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});d.saveAs(c,n+".xlsx")}(a,t)},children:"Export As Excel"})};var f=c.a.lazy((function(){return t.e(43).then(t.bind(null,724))})),j=c.a.lazy((function(){return t.e(10).then(t.bind(null,725))})),x=c.a.lazy((function(){return t.e(20).then(t.bind(null,726))})),y=c.a.lazy((function(){return t.e(21).then(t.bind(null,727))})),v=c.a.lazy((function(){return t.e(22).then(t.bind(null,728))})),g=c.a.lazy((function(){return t.e(23).then(t.bind(null,729))})),O=c.a.lazy((function(){return t.e(24).then(t.bind(null,730))})),w=c.a.lazy((function(){return t.e(25).then(t.bind(null,731))})),z=c.a.lazy((function(){return t.e(26).then(t.bind(null,732))})),S=c.a.lazy((function(){return t.e(27).then(t.bind(null,733))})),N=c.a.lazy((function(){return t.e(28).then(t.bind(null,734))})),C=c.a.lazy((function(){return t.e(29).then(t.bind(null,735))})),k=c.a.lazy((function(){return t.e(30).then(t.bind(null,736))})),E=c.a.lazy((function(){return t.e(31).then(t.bind(null,737))})),B=c.a.lazy((function(){return t.e(32).then(t.bind(null,738))})),_=c.a.lazy((function(){return t.e(33).then(t.bind(null,739))})),I=c.a.lazy((function(){return t.e(34).then(t.bind(null,740))})),P=c.a.lazy((function(){return t.e(59).then(t.bind(null,741))})),M=c.a.lazy((function(){return t.e(35).then(t.bind(null,742))})),T=c.a.lazy((function(){return t.e(36).then(t.bind(null,743))})),D=c.a.lazy((function(){return t.e(37).then(t.bind(null,744))})),G=c.a.lazy((function(){return Promise.all([t.e(1),t.e(38)]).then(t.bind(null,745))})),L=c.a.lazy((function(){return Promise.all([t.e(1),t.e(46)]).then(t.bind(null,774))})),A=c.a.lazy((function(){return Promise.all([t.e(2),t.e(64),t.e(11)]).then(t.bind(null,746))})),F=c.a.lazy((function(){return Promise.all([t.e(2),t.e(63),t.e(12)]).then(t.bind(null,749))})),R=c.a.lazy((function(){return Promise.all([t.e(2),t.e(39)]).then(t.bind(null,674))})),Z=c.a.lazy((function(){return t.e(40).then(t.bind(null,751))})),J=c.a.lazy((function(){return t.e(41).then(t.bind(null,752))})),H=c.a.lazy((function(){return t.e(42).then(t.bind(null,753))})),U=c.a.lazy((function(){return t.e(13).then(t.bind(null,754))})),W=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:L},{path:"/theme",name:"Theme",component:U,exact:!0},{path:"/theme/colors",name:"Colors",component:U},{path:"/theme/typography",name:"Typography",component:c.a.lazy((function(){return t.e(44).then(t.bind(null,755))}))},{path:"/base",name:"Base",component:y,exact:!0},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:x},{path:"/base/cards",name:"Cards",component:y},{path:"/base/carousels",name:"Carousel",component:v},{path:"/base/collapses",name:"Collapse",component:g},{path:"/base/forms",name:"Forms",component:O},{path:"/base/jumbotrons",name:"Jumbotrons",component:w},{path:"/base/list-groups",name:"List Groups",component:z},{path:"/base/navbars",name:"Navbars",component:S},{path:"/base/navs",name:"Navs",component:N},{path:"/base/paginations",name:"Paginations",component:C},{path:"/base/popovers",name:"Popovers",component:k},{path:"/base/progress-bar",name:"Progress Bar",component:E},{path:"/base/switches",name:"Switches",component:B},{path:"/base/tables",name:"Tables",component:j},{path:"/base/tabs",name:"Tabs",component:_},{path:"/base/tooltips",name:"Tooltips",component:I},{path:"/buttons",name:"Buttons",component:D,exact:!0},{path:"/buttons/buttons",name:"Buttons",component:D},{path:"/buttons/button-dropdowns",name:"Dropdowns",component:M},{path:"/buttons/button-groups",name:"Button Groups",component:T},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:P},{path:"/charts",name:"Charts",component:G},{path:"/icons",exact:!0,name:"Icons",component:A},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:A},{path:"/icons/flags",name:"Flags",component:F},{path:"/icons/brands",name:"Brands",component:R},{path:"/notifications",name:"Notifications",component:Z,exact:!0},{path:"/notifications/alerts",name:"Alerts",component:Z},{path:"/notifications/badges",name:"Badges",component:J},{path:"/notifications/modals",name:"Modals",component:H},{path:"/notifications/toaster",name:"Toaster",component:f},{path:"/widgets",name:"Widgets",component:c.a.lazy((function(){return Promise.all([t.e(1),t.e(7)]).then(t.bind(null,756))}))},{path:"/users",exact:!0,name:"Users",component:c.a.lazy((function(){return t.e(48).then(t.bind(null,757))}))},{path:"/users/:id",exact:!0,name:"User Details",component:c.a.lazy((function(){return t.e(47).then(t.bind(null,758))}))},{path:"/create/gateway",exact:!0,name:"Create Gateway",component:c.a.lazy((function(){return t.e(54).then(t.bind(null,759))}))},{path:"/edit/gateway/:id",exact:!0,name:"Edit Gateway",component:c.a.lazy((function(){return t.e(55).then(t.bind(null,760))}))},{path:"/gatewayList",exact:!0,name:"Gateway List",component:c.a.lazy((function(){return t.e(17).then(t.bind(null,761))}))},{path:"/create/beacon",exact:!0,name:"Create Beacon",component:c.a.lazy((function(){return t.e(49).then(t.bind(null,762))}))},{path:"/edit/beacon/:id",exact:!0,name:"Edit Beacon",component:c.a.lazy((function(){return t.e(50).then(t.bind(null,763))}))},{path:"/beaconList",exact:!0,name:"Beacon List",component:c.a.lazy((function(){return t.e(15).then(t.bind(null,764))}))},{path:"/create/environment",exact:!0,name:"Create Environment",component:c.a.lazy((function(){return t.e(52).then(t.bind(null,765))}))},{path:"/edit/environment/:id",exact:!0,name:"Edit Environment",component:c.a.lazy((function(){return t.e(53).then(t.bind(null,766))}))},{path:"/environmentList",exact:!0,name:"Environment List",component:c.a.lazy((function(){return t.e(16).then(t.bind(null,767))}))},{path:"/create/zone",exact:!0,name:"Create Zone",component:c.a.lazy((function(){return t.e(57).then(t.bind(null,768))}))},{path:"/edit/zone/:id",exact:!0,name:"Edit Zone",component:c.a.lazy((function(){return t.e(58).then(t.bind(null,769))}))},{path:"/zoneList",exact:!0,name:"Zone List",component:c.a.lazy((function(){return t.e(18).then(t.bind(null,770))}))},{path:"/systemSettings",exact:!0,name:"System Settings",component:c.a.lazy((function(){return t.e(56).then(t.bind(null,771))}))},{path:"/get-beacon-position",exact:!0,name:"Get Beacon Position",component:c.a.lazy((function(){return t.e(51).then(t.bind(null,772))}))},{path:"/calculate-tx-power",exact:!0,name:"Calculate Tx Power",component:function(){var e=c.a.useState([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=c.a.useState(""),b=Object(r.a)(s,2),d=b[0],p=b[1],h=c.a.useState([]),f=Object(r.a)(h,2),j=f[0],x=f[1],y=c.a.useState(""),v=Object(r.a)(y,2),g=v[0],O=v[1],w=c.a.useState([]),z=Object(r.a)(w,2),S=z[0],N=z[1];return c.a.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,a(t.data.map((function(e,n){return{value:e._id,label:e.beaconMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"gateway/getAllGateways",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,x(t.data.map((function(e,n){return{value:e._id,label:e.gatewayMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"container create-page-main-section",children:[Object(m.jsx)("div",{className:"p-sm-5 create-form-field",children:Object(m.jsxs)("form",{onSubmit:function(e){return function(e){if(e.preventDefault(),d&&g){var n=function(){var e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"beacon/calculateTxPower",{method:"POST",body:JSON.stringify({beaconMac:d,gatewayMac:g})});case 2:if(1!=(n=e.sent).ok){e.next=10;break}return e.next=6,n.json();case 6:1==(t=e.sent).success&&(alert("data fetch successfully!"),N(t.data.observations)),e.next=11;break;case 10:alert("Oops something went wrong!");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n()}else alert("Please select beacon & gateway")}(e)},children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Beacon"}),Object(m.jsx)(u.a,{value:d,onChange:p,options:t})]}),Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Gateway"}),Object(m.jsx)(u.a,{value:g,onChange:O,options:j})]})]}),Object(m.jsxs)("div",{class:"d-flex justify-content-center create-catagory-btns",children:[Object(m.jsxs)("button",{onClick:function(){return window.history.back()},type:"button",class:"font-weight-bold m-3 py-2 px-4 btn btn-danger",children:["Cancel",Object(m.jsx)("i",{class:"px-2 fa fa-times","aria-hidden":"true"})]}),Object(m.jsxs)("button",{type:"submit",class:"font-weight-bold m-3 py-2 px-4 btn btn-success",children:["Save",Object(m.jsx)("i",{class:"px-2 fa fa-floppy-o","aria-hidden":"true"})]})]})]})}),S.length>0&&Object(m.jsxs)("table",{children:[Object(m.jsxs)("thead",{children:[Object(m.jsx)("th",{children:"#"}),Object(m.jsx)("th",{children:"Observation"})]}),S.map((function(e,n){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:n+1}),Object(m.jsx)("td",{children:e})]},n)}))]})]})}},{path:"/fingerprinting",exact:!0,name:"Start Stop Fingerprinting",component:function(){var e=c.a.useState([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=c.a.useState(""),b=Object(r.a)(s,2),d=b[0],p=b[1],h=c.a.useState([]),f=Object(r.a)(h,2),j=f[0],x=f[1],y=c.a.useState(""),v=Object(r.a)(y,2),g=v[0],O=v[1],w=c.a.useState([]),z=Object(r.a)(w,2),S=z[0],N=z[1],C=c.a.useState([]),k=Object(r.a)(C,2),E=k[0],B=k[1],_=c.a.useState(""),I=Object(r.a)(_,2),P=I[0],M=I[1],T=c.a.useState(""),D=Object(r.a)(T,2),G=D[0],L=D[1];function A(e){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(i.a.mark((function e(n){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"fingerprint/startFingerPrinting",{method:"POST",body:JSON.stringify({environment:d.value,beaconId:g.label,zoneId:n})});case 2:if(1!=(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:1==(a=e.sent).success&&(alert(a.msg+" for zoneID ".concat(n)),M(n));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return c.a.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"dbBeacon/getAllBeacons",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,x(t.data.map((function(e,n){return{value:e._id,label:e.beaconMac}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(){return(n=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,a(t.data.map((function(e,n){return{value:e._id,label:e.name}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"zone/getAllZones",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,N(t.data.map((function(e,n){return{"#":n+1,id:e._id,zoneId:e.zoneId,description:e.description,environment:e.environment}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[]),Object(m.jsxs)("div",{className:"container create-page-main-section",children:[Object(m.jsx)("div",{className:"p-sm-5 create-form-field",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Environment"}),Object(m.jsx)(u.a,{options:t,value:d,onChange:function(e){p(e);var n=[];S.map((function(t){t.environment==e.value&&n.push(t)})),B(n)}})]}),Object(m.jsxs)("div",{className:"col-md-4 form-group",children:[Object(m.jsx)("label",{children:"Beacon"}),Object(m.jsx)(u.a,{options:j,value:g,onChange:O})]})]})}),E.length>0&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h3",{className:"text-center my-3",children:"Select Zone"}),Object(m.jsx)("div",{id:"grid-table",className:"row",children:E.map((function(e,n){return Object(m.jsx)("div",{className:"col-md-4",id:"".concat(n),onClick:function(){return function(e,n){P?(document.getElementById(G).style.background="green",document.getElementById(n).style.background="red",L(n),A(e.zoneId)):(document.getElementById(n).style.background="red",L(n),A(e.zoneId))}(e,n)},children:e.zoneId},n)}))})]})]})}},{path:"/get-mldata-environment",exact:!0,name:"Get ML Data By Environment",component:function(){var e=c.a.useState([]),n=Object(r.a)(e,2),t=n[0],a=n[1],s=c.a.useState(""),d=Object(r.a)(s,2),p=d[0],f=d[1],j=c.a.useState([]),x=Object(r.a)(j,2),y=x[0],v=x[1];return c.a.useEffect((function(){function e(){return(e=Object(o.a)(i.a.mark((function e(){var n,t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(l.a+"environment/getAllEnvironments",{method:"GET"});case 2:if(!0!==(n=e.sent).ok){e.next=8;break}return e.next=6,n.json();case 6:t=e.sent,a(t.data.map((function(e,n){return{value:e._id,label:e.name}})));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsxs)("section",{children:[Object(m.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(m.jsxs)("div",{className:"col-md-5 form-group",children:[Object(m.jsx)("label",{children:"Environment"}),Object(m.jsx)(u.a,{options:t,value:p,onChange:f})]}),Object(m.jsx)("button",{onClick:function(){return function(){if(p){var e=function(){var e=Object(o.a)(i.a.mark((function e(){var n,t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return alert(p.value),e.next=3,fetch("http://45.32.153.102:3000/fingerprint/getMLDataByEnvironment  /".concat(p.value));case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,console.log(t),1==t.success&&(a=t.data,v(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}else alert("Please select environment")}()},className:"btn btn-primary",style:{height:"fit-content"},children:"Filter"}),Object(m.jsx)("button",{onClick:function(){document.getElementById("export-excel-button").click()},className:"ml-3 btn btn-success",style:{height:"fit-content"},children:"Export Excel"}),Object(m.jsx)(h,{csvData:y})]}),Object(m.jsx)(b.u,{xs:"12",lg:"12",children:Object(m.jsx)(b.j,{children:Object(m.jsx)(b.k,{children:Object(m.jsx)(b.y,{items:y,fields:["#","timestamp","environment","gateway1Mac","gateway1Rssi","gateway2Mac","gateway2Rssi","gateway3Mac","gateway3Rssi","beacon","zone_id"],columnFilter:!0,tableFilter:!0,itemsPerPageSelect:!0,itemsPerPage:5,hover:!0,sorter:!0,pagination:!0})})})})]})}}];n.a=W},773:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),o=t(56),r=t(24),s=t(662),i=t(679),l=t(18),u=Object(l.jsx)("div",{className:"pt-3 text-center",children:Object(l.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),m=function(){return Object(l.jsx)("main",{className:"c-main",children:Object(l.jsx)(s.w,{fluid:!0,children:Object(l.jsx)(a.Suspense,{fallback:u,children:Object(l.jsxs)(r.d,{children:[i.a.map((function(e,n){return e.component&&Object(l.jsx)(r.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(l.jsx)(s.H,{children:Object(l.jsx)(e.component,Object(o.a)({},n))})}},n)})),Object(l.jsx)(r.a,{from:"/",to:"/dashboard"})]})})})})},b=c.a.memo(m),d=function(){return Object(l.jsx)(s.I,{fixed:!1,children:Object(l.jsxs)("div",{className:"mfs-auto",children:[Object(l.jsx)("span",{className:"mr-1",children:"Developed by"}),Object(l.jsx)("a",{href:"https://web-amplifier.com",target:"_blank",rel:"noopener noreferrer",children:"Web Amplifier"})]})})},p=c.a.memo(d),h=t(185),f=t(664),j=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(s.M,{withSubheader:!0,children:[Object(l.jsx)(s.Ob,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var t=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:t})}}),Object(l.jsx)(s.Ob,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var t=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:t})}}),Object(l.jsx)(s.N,{className:"mx-auto d-lg-none",to:"/",children:Object(l.jsx)(f.a,{name:"logo",height:"48",alt:"Logo"})}),Object(l.jsx)(s.O,{className:"d-md-down-none mr-auto"}),Object(l.jsx)(s.O,{className:"px-3"}),Object(l.jsx)(s.Eb,{className:"px-3 justify-content-between",children:Object(l.jsx)(s.e,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:i.a})})]})},x=(t(127),[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(l.jsx)(f.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Masters",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Gateway",to:"/gatewayList"},{_tag:"CSidebarNavItem",name:"Beacon",to:"/beaconList"},{_tag:"CSidebarNavItem",name:"Environment",to:"/environmentList"},{_tag:"CSidebarNavItem",name:"Zone",to:"/zoneList"}]},{_tag:"CSidebarNavDropdown",name:"Beacon Configuration",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Get Position",to:"/get-beacon-position"},{_tag:"CSidebarNavItem",name:"Calculate Power",to:"/calculate-tx-power"}]},{_tag:"CSidebarNavDropdown",name:"Fingerprinting",route:"/base",icon:"cil-puzzle",_children:[{_tag:"CSidebarNavItem",name:"Start/Stop Fingerprinting",to:"/fingerprinting"},{_tag:"CSidebarNavItem",name:"Get ML Data Environment",to:"/get-mldata-environment"}]},{_tag:"CSidebarNavItem",name:"System Settings",to:"/systemSettings",icon:Object(l.jsx)(f.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})}]),y=function(){var e=Object(h.b)(),n=Object(h.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(s.wb,{show:n,onShowChange:function(n){return e({type:"set",sidebarShow:n})},children:[Object(l.jsx)(s.xb,{className:"d-md-down-none",to:"/"}),Object(l.jsx)(s.zb,{children:Object(l.jsx)(s.x,{items:x,components:{CSidebarNavDivider:s.Ab,CSidebarNavDropdown:s.Bb,CSidebarNavItem:s.Cb,CSidebarNavTitle:s.Db}})}),Object(l.jsx)(s.yb,{className:"c-d-md-down-none"})]})},v=c.a.memo(y);n.default=function(){return Object(l.jsxs)("div",{className:"c-app c-default-layout",children:[Object(l.jsx)(v,{}),Object(l.jsxs)("div",{className:"c-wrapper",children:[Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"c-body",children:Object(l.jsx)(b,{})}),Object(l.jsx)(p,{})]})]})}}}]);
//# sourceMappingURL=9.2f0d007b.chunk.js.map