(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[144],{1837:function(e,t,n){"use strict";n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return j})),n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return O})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return w}));var o=n(4),a=n(25),r=n(1822),c=n(12),i=n(0),s=["children","onClose"],l=Object(c.a)(r.h)((function(e){var t=e.theme,n="rtl"===t.direction;return{"& .mapboxgl-popup-content":{maxWidth:180,padding:t.spacing(1),boxShadow:t.customShadows.z20,borderRadius:t.shape.borderRadius,backgroundColor:t.palette.grey[800]},"& .mapboxgl-popup-close-button":{width:24,height:24,fontSize:16,opacity:.48,color:t.palette.common.white,right:n&&"0",left:n&&"auto","&:hover":{opacity:1},"&:focus":{outline:"none"}},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{marginBottom:-1,borderBottomColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-right .mapboxgl-popup-tip":{marginLeft:-1,borderLeftColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{marginTop:-1,borderTopColor:t.palette.grey[800]},"&.mapboxgl-popup-anchor-left .mapboxgl-popup-tip":{marginRight:-1,borderRightColor:t.palette.grey[800]}}}));function b(e){var t=e.children,n=e.onClose,r=Object(a.a)(e,s);return Object(i.jsx)(l,Object(o.a)(Object(o.a)({tipSize:8,anchor:"bottom",onClose:n,closeButton:!0,closeOnClick:!1},r),{},{children:t}))}var p=["sx"],d=Object(c.a)("div")((function(e){var t=e.theme;return{zIndex:99,position:"absolute",left:t.spacing(1.5),bottom:t.spacing(3.5),boxShadow:t.customShadows.z8,"& .mapboxgl-ctrl":{border:"none",borderRadius:4,lineHeight:"14px",color:t.palette.common.white,backgroundImage:"linear-gradient(to right, #8a2387, #e94057, #f27121)"}}}));function j(e){var t=e.sx,n=Object(a.a)(e,p);return Object(i.jsx)(d,{sx:t,children:Object(i.jsx)(r.i,Object(o.a)({maxWidth:100,unit:"imperial"},n))})}var u=["onClick"],h=Object(c.a)("svg")((function(e){return{height:20,stroke:"none",cursor:"pointer",fill:e.theme.palette.error.main,transform:"translate(".concat(-10,"px,").concat(-20,"px)")}}));function x(e){var t=e.onClick,n=Object(a.a)(e,u);return Object(i.jsx)(r.f,Object(o.a)(Object(o.a)({},n),{},{children:Object(i.jsx)(h,{viewBox:"0 0 24 24",onClick:t,children:Object(i.jsx)("path",{d:"M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3\n  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9\n  C20.1,15.8,20.2,15.8,20.2,15.7z"})})}))}var m=Object(c.a)(r.c)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8}}));function O(e){var t=Object.assign({},e);return Object(i.jsx)(m,Object(o.a)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0},t))}var g=Object(c.a)(r.b)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",top:t.spacing(1.5),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& span.mapboxgl-ctrl-icon":{transform:" scale(0.75)"}}}));function f(e){var t=Object.assign({},e);return Object(i.jsx)(g,Object(o.a)({},t))}var v=Object(c.a)(r.g)((function(e){var t=e.theme;return{zIndex:99,borderRadius:8,overflow:"hidden",bottom:t.spacing(6),left:t.spacing(1.5),boxShadow:t.customShadows.z8,"& button+button":{borderTop:"1px solid ".concat(t.palette.divider)}}}));function w(e){var t=Object.assign({},e);return Object(i.jsx)(v,Object(o.a)({},t))}},2863:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));var o=n(10),a=n(12),r=n(1785),c=n(1781),i=n(671),s=n(4),l=n(3),b=n(1822),p=n(1),d=n(68),j=n(407),u=n(350),h=n(6),x=n(41),m=n(1837),O=n(0),g=Object(a.a)("div")((function(e){return{zIndex:0,height:560,overflow:"hidden",position:"relative",borderRadius:e.theme.shape.borderRadius,"& .mapboxgl-ctrl-logo, .mapboxgl-ctrl-bottom-right":{display:"none"}}}));function f(){var e="light"===Object(d.a)().palette.mode,t=Object(p.useState)(null),n=Object(l.a)(t,2),o=n[0],a=n[1],r=Object(p.useState)({latitude:12,longitude:42,zoom:2}),c=Object(l.a)(r,2),i=c[0],f=c[1];return Object(O.jsx)(g,{children:Object(O.jsxs)(b.l,Object(s.a)(Object(s.a)({},i),{},{onViewportChange:f,mapStyle:"mapbox://styles/mapbox/".concat(e?"light":"dark","-v10"),mapboxApiAccessToken:h.m,width:"100%",height:"100%",children:[Object(O.jsx)(m.f,{}),Object(O.jsx)(m.d,{}),u.D.map((function(e){return Object(O.jsx)(m.c,{latitude:e.latlng[0],longitude:e.latlng[1],onClick:function(){return a(e)}},e.phoneNumber)})),o&&Object(O.jsxs)(m.e,{longitude:o.latlng[1],latitude:o.latlng[0],onClose:function(){return a(null)},sx:{"& .mapboxgl-popup-content":{bgcolor:"common.white"},"&.mapboxgl-popup-anchor-bottom .mapboxgl-popup-tip":{borderTopColor:"#FFF"},"&.mapboxgl-popup-anchor-top .mapboxgl-popup-tip":{borderBottomColor:"#FFF"}},children:[Object(O.jsx)(j.a,{variant:"subtitle2",sx:{mb:.5},children:"Address"}),Object(O.jsx)(j.a,{component:"p",variant:"caption",children:o.address}),Object(O.jsxs)(j.a,{component:"p",variant:"caption",sx:{mt:1,display:"flex",alignItems:"center"},children:[Object(O.jsx)(x.a,{icon:"eva:phone-fill",sx:{mr:.5,width:14,height:14}}),o.phoneNumber]})]})]}))})}var v=n(1768),w=n(269),k=n(78),y=[{country:"Bali",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(239) 555-0108"},{country:"London",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(319) 555-0115"},{country:"Prague",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(252) 555-0126"},{country:"Moscow",address:"508 Bridle Avenue Newnan, GA 30263",phoneNumber:"(307) 555-0133"}],C=Object(a.a)("div")((function(e){var t=e.theme;return Object(o.a)({backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://minimal-assets-api.vercel.app/assets/overlay.svg), url(https://minimal-assets-api.vercel.app/assets/images/contact/hero.jpg)",padding:t.spacing(10,0)},t.breakpoints.up("md"),{height:560,padding:0})})),S=Object(a.a)("div")((function(e){var t=e.theme;return Object(o.a)({textAlign:"center"},t.breakpoints.up("md"),{textAlign:"left",position:"absolute",bottom:t.spacing(10)})}));function z(){return Object(O.jsx)(k.d,{children:Object(O.jsx)(C,{children:Object(O.jsx)(r.a,{sx:{position:"relative",height:"100%"},children:Object(O.jsxs)(S,{children:[Object(O.jsx)(k.f,{text:"Where",sx:{color:"primary.main"},variants:Object(k.k)().inRight}),Object(O.jsx)("br",{}),Object(O.jsxs)(w.a,{sx:{display:"inline-flex",color:"common.white"},children:[Object(O.jsx)(k.f,{text:"to",sx:{mr:2}}),Object(O.jsx)(k.f,{text:"find",sx:{mr:2}}),Object(O.jsx)(k.f,{text:"us?"})]}),Object(O.jsx)(c.a,{container:!0,spacing:5,sx:{mt:5,color:"common.white"},children:y.map((function(e){return Object(O.jsxs)(c.a,{item:!0,xs:12,sm:6,md:3,lg:2,sx:{pr:{md:5}},children:[Object(O.jsx)(v.a.div,{variants:Object(k.k)().in,children:Object(O.jsx)(j.a,{variant:"h6",paragraph:!0,children:e.country})}),Object(O.jsx)(v.a.div,{variants:Object(k.k)().inRight,children:Object(O.jsxs)(j.a,{variant:"body2",children:[e.address,Object(O.jsx)("br",{})," ",e.phoneNumber]})})]},e.country)}))})]})})})})}var A=n(1002),N=n(1798),R=n(544);function B(){return Object(O.jsxs)(A.a,{spacing:5,children:[Object(O.jsx)(k.e,{variants:Object(k.k)().inUp,children:Object(O.jsxs)(j.a,{variant:"h3",children:["Feel free to contact us. ",Object(O.jsx)("br",{}),"We'll be glad to hear from you, buddy."]})}),Object(O.jsxs)(A.a,{spacing:3,children:[Object(O.jsx)(k.e,{variants:Object(k.k)().inUp,children:Object(O.jsx)(N.a,{fullWidth:!0,label:"Name"})}),Object(O.jsx)(k.e,{variants:Object(k.k)().inUp,children:Object(O.jsx)(N.a,{fullWidth:!0,label:"Email"})}),Object(O.jsx)(k.e,{variants:Object(k.k)().inUp,children:Object(O.jsx)(N.a,{fullWidth:!0,label:"Subject"})}),Object(O.jsx)(k.e,{variants:Object(k.k)().inUp,children:Object(O.jsx)(N.a,{fullWidth:!0,label:"Enter your message here.",multiline:!0,rows:4})})]}),Object(O.jsx)(k.e,{variants:Object(k.k)().inUp,children:Object(O.jsx)(R.a,{size:"large",variant:"contained",children:"Submit Now"})})]})}var I=Object(a.a)("div")((function(e){var t=e.theme;return Object(o.a)({paddingTop:t.spacing(8)},t.breakpoints.up("md"),{paddingTop:t.spacing(11)})}));function W(){return Object(O.jsx)(i.a,{title:"Contact us",children:Object(O.jsxs)(I,{children:[Object(O.jsx)(z,{}),Object(O.jsx)(r.a,{sx:{my:10},children:Object(O.jsxs)(c.a,{container:!0,spacing:10,children:[Object(O.jsx)(c.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(B,{})}),Object(O.jsx)(c.a,{item:!0,xs:12,md:6,children:Object(O.jsx)(f,{})})]})})]})})}}}]);
//# sourceMappingURL=144.a867e86f.chunk.js.map