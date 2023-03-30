(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[49],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(4),c=n(25),i=n(136),o=n(27),s=n(407),r=n(1824),l=n(269),j=n(1681),b=n(0),u=["links","activeLast"];function O(e){var t,n=e.links,o=e.activeLast,j=void 0!==o&&o,O=Object(c.a)(e,u),h=null===(t=Object(i.last)(n))||void 0===t?void 0:t.name,p=n.map((function(e){return Object(b.jsx)(d,{link:e},e.name)})),x=n.map((function(e){return Object(b.jsx)("div",{children:e.name!==h?Object(b.jsx)(d,{link:e}):Object(b.jsx)(s.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:h})},e.name)}));return Object(b.jsx)(r.a,Object(a.a)(Object(a.a)({separator:Object(b.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},O),{},{children:j?p:x}))}function d(e){var t=e.link,n=t.href,a=t.name,c=t.icon;return Object(b.jsxs)(j.a,{variant:"body2",component:o.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(b.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),a]},a)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(4),c=n(25),i=n(136),o=n(269),s=n(407),r=n(1681),l=n(1819),j=n(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,n=e.action,u=e.heading,O=e.moreLink,d=void 0===O?[]:O,h=e.sx,p=Object(c.a)(e,b);return Object(j.jsxs)(o.a,{sx:Object(a.a)({mb:5},h),children:[Object(j.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(j.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(l.a,Object(a.a)({links:t},p))]}),n&&Object(j.jsx)(o.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(o.a,{sx:{mt:2},children:Object(i.isString)(d)?Object(j.jsx)(r.a,{href:d,target:"_blank",rel:"noopener",variant:"body2",children:d}):d.map((function(e){return Object(j.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return b}));var a=n(4),c=n(98),i=n(1009),o=n(1825),s=n(269),r=n(407),l=n(0);function j(e){var t=e.title,n=e.sx,r=e.children;return Object(l.jsxs)(i.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(c.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(o.a,{title:t}),Object(l.jsx)(s.a,{sx:Object(a.a)({p:5,minHeight:180},n),children:r})]})}function b(e){var t=e.title;return Object(l.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},1968:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return j}));var a=n(3),c=n(1),i=(n(7),n(0)),o=c.createContext(null);function s(e){var t=e.children,n=e.value,s=function(){var e=c.useState(null),t=Object(a.a)(e,2),n=t[0],i=t[1];return c.useEffect((function(){i("mui-p-".concat(Math.round(1e5*Math.random())))}),[]),n}(),r=c.useMemo((function(){return{idPrefix:s,value:n}}),[s,n]);return Object(i.jsx)(o.Provider,{value:r,children:t})}function r(){return c.useContext(o)}function l(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-P-").concat(t)}function j(e,t){return null===e.idPrefix?null:"".concat(e.idPrefix,"-T-").concat(t)}},1969:function(e,t,n){"use strict";var a=n(2),c=n(13),i=n(1),o=(n(7),n(1771)),s=n(1968),r=n(0),l=["children"],j=i.forwardRef((function(e,t){var n=e.children,j=Object(c.a)(e,l),b=Object(s.d)();if(null===b)throw new TypeError("No TabContext provided");var u=i.Children.map(n,(function(e){return i.isValidElement(e)?i.cloneElement(e,{"aria-controls":Object(s.b)(b,e.props.value),id:Object(s.c)(b,e.props.value)}):null}));return Object(r.jsx)(o.a,Object(a.a)({},j,{ref:t,value:b.value,children:u}))}));t.a=j},1992:function(e,t,n){"use strict";var a=n(2),c=n(13),i=n(1),o=(n(7),n(5)),s=n(12),r=n(18),l=n(300),j=n(179),b=n(192);function u(e){return Object(j.a)("MuiTabPanel",e)}Object(b.a)("MuiTabPanel",["root"]);var O=n(1968),d=n(0),h=["children","className","value"],p=Object(s.a)("div",{name:"MuiTabPanel",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){return{padding:e.theme.spacing(3)}})),x=i.forwardRef((function(e,t){var n=Object(r.a)({props:e,name:"MuiTabPanel"}),i=n.children,s=n.className,j=n.value,b=Object(c.a)(n,h),x=Object(a.a)({},n),f=function(e){var t=e.classes;return Object(l.a)({root:["root"]},u,t)}(x),m=Object(O.d)();if(null===m)throw new TypeError("No TabContext provided");var v=Object(O.b)(m,j),g=Object(O.c)(m,j);return Object(d.jsx)(p,Object(a.a)({"aria-labelledby":g,className:Object(o.a)(f.root,s),hidden:j!==m.value,id:v,ref:t,role:"tabpanel",ownerState:x},b,{children:j===m.value&&i}))}));t.a=x},2830:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return pe}));var a=n(3),c=n(1),i=n(12),o=n(269),s=n(1785),r=n(1814),l=n(1968),j=n(1969),b=n(1992),u=n(47),O=n(671),d=n(1820),h=n(1805),p=n(1781),x=n(4),f=n(25),m=n(1009),v=n(1803),g=n(1884),I=n(1682),y=n(41),w=n(0),k=["isText","isMulti","onChangeText","onChangeMulti","onRefresh"];function R(e){var t=e.isText,n=e.isMulti,a=e.onChangeText,c=e.onChangeMulti,i=e.onRefresh,s=Object(f.a)(e,k);return Object(w.jsxs)(m.a,Object(x.a)(Object(x.a)({sx:{display:"flex",alignItems:"center",justifyContent:"space-between"}},s),{},{children:[Object(w.jsx)(v.a,{control:Object(w.jsx)(g.a,{checked:t,onChange:a}),label:"Text Object"}),Object(w.jsx)(o.a,{sx:{flexGrow:1}}),!t&&Object(w.jsx)(v.a,{control:Object(w.jsx)(g.a,{checked:n,onChange:c}),label:"Multi Item"}),Object(w.jsx)(I.a,{onClick:i,children:Object(w.jsx)(y.a,{icon:"eva:refresh-fill",width:20,height:20})})]}))}var C=n(1763),z=n(407),L=n(1772),U=n(203);function D(e){var t=e.variantKey,n=e.selectVariant,a=e.onChangeVariant,c=e.sx;return Object(w.jsx)(m.a,{variant:"outlined",sx:Object(x.a)({height:480},c),children:Object(w.jsx)(U.a,{children:Object(w.jsx)(C.a,{value:n,onChange:a,sx:{px:1,py:1},children:t.map((function(e){return Object(w.jsxs)(o.a,{sx:{my:1.5},children:[Object(w.jsx)(z.a,{variant:"overline",sx:{px:1,mb:1,display:"block"},children:e.type}),e.values.map((function(e){return Object(w.jsx)(v.a,{value:e,label:e,control:Object(w.jsx)(L.a,{sx:{display:"none"}}),sx:Object(x.a)(Object(x.a)({px:1,py:.5,mx:0,my:.25,width:"100%",borderRadius:.75,color:"text.secondary"},n===e&&{color:"warning.contrastText"}),n===e&&{bgcolor:"warning.main"})},e)}))]},e.type)}))})})})}var T=n(1768),V=n(78);function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"slideInUp";return{slideInUp:Object(V.q)().inUp,slideInDown:Object(V.q)().inDown,slideInLeft:Object(V.q)().inLeft,slideInRight:Object(V.q)().inRight,slideOutUp:Object(V.q)().outUp,slideOutDown:Object(V.q)().outDown,slideOutLeft:Object(V.q)().outLeft,slideOutRight:Object(V.q)().outRight,fadeIn:Object(V.k)().in,fadeInUp:Object(V.k)().inUp,fadeInDown:Object(V.k)().inDown,fadeInLeft:Object(V.k)().inLeft,fadeInRight:Object(V.k)().inRight,fadeOut:Object(V.k)().out,fadeOutUp:Object(V.k)().outUp,fadeOutDown:Object(V.k)().outDown,fadeOutLeft:Object(V.k)().outLeft,fadeOutRight:Object(V.k)().outRight,zoomIn:Object(V.s)().in,zoomInUp:Object(V.s)().inUp,zoomInDown:Object(V.s)().inDown,zoomInLeft:Object(V.s)().inLeft,zoomInRight:Object(V.s)().inRight,zoomOut:Object(V.s)().out,zoomOutLeft:Object(V.s)().outLeft,zoomOutRight:Object(V.s)().outRight,zoomOutUp:Object(V.s)().outUp,zoomOutDown:Object(V.s)().outDown,bounceIn:Object(V.j)().in,bounceInUp:Object(V.j)().inUp,bounceInDown:Object(V.j)().inDown,bounceInLeft:Object(V.j)().inLeft,bounceInRight:Object(V.j)().inRight,bounceOut:Object(V.j)().out,bounceOutUp:Object(V.j)().outUp,bounceOutDown:Object(V.j)().outDown,bounceOutLeft:Object(V.j)().outLeft,bounceOutRight:Object(V.j)().outRight,flipInX:Object(V.l)().inX,flipInY:Object(V.l)().inY,flipOutX:Object(V.l)().outX,flipOutY:Object(V.l)().outY,scaleInX:Object(V.p)().inX,scaleInY:Object(V.p)().inY,scaleOutX:Object(V.p)().outX,scaleOutY:Object(V.p)().outY,rotateIn:Object(V.o)().in,rotateOut:Object(V.o)().out,kenburnsTop:Object(V.h)().top,kenburnsBottom:Object(V.h)().bottom,kenburnsLeft:Object(V.h)().left,kenburnsRight:Object(V.h)().right,panTop:Object(V.i)().top,panBottom:Object(V.i)().bottom,panLeft:Object(V.i)().left,panRight:Object(V.i)().right,color2x:Object(V.g)(),color3x:Object(V.g)({colors:["#19dcea","#b22cff","#ea2222"]}),color4x:Object(V.g)({colors:["#19dcea","#b22cff","#ea2222","#f5be10"]}),color5x:Object(V.g)({colors:["#19dcea","#b22cff","#ea2222","#f5be10","#3bd80d"]})}[e]}var M=["isText","isMulti","selectVariant"],X=["https://minimal-assets-api.vercel.app/assets/images/feeds/feed_2.jpg","https://minimal-assets-api.vercel.app/assets/images/feeds/feed_3.jpg","https://minimal-assets-api.vercel.app/assets/images/feeds/feed_4.jpg","https://minimal-assets-api.vercel.app/assets/images/feeds/feed_5.jpg","https://minimal-assets-api.vercel.app/assets/images/feeds/feed_8.jpg"];function Y(e){var t=e.isText,n=e.isMulti,a=e.selectVariant,c=Object(f.a)(e,M),i=n?X:X.slice(0,1);return Object(w.jsx)(m.a,Object(x.a)(Object(x.a)({sx:{p:3,minHeight:480,display:"flex",overflow:"hidden",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},c),{},{children:t?Object(w.jsx)(V.d,{component:T.a.h1,sx:{typography:"h1",display:"flex",overflow:"hidden"},children:"Minimals".split("").map((function(e,t){return Object(w.jsx)(T.a.span,{variants:S(a),children:e},t)}))}):Object(w.jsx)(V.d,{children:i.map((function(e,t){return Object(w.jsx)(o.a,{component:T.a.img,src:e,variants:S(a),sx:{my:2,width:480,borderRadius:1,objectFit:"cover",height:n?72:320,boxShadow:function(e){return e.customShadows.z8}}},t)}))})}))}function P(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(!1),s=Object(a.a)(o,2),r=s[0],l=s[1],j=Object(c.useState)(!1),b=Object(a.a)(j,2),u=b[0],O=b[1],d=Object(c.useState)("slideInUp"),x=Object(a.a)(d,2),f=x[0],m=x[1];return Object(w.jsxs)(h.a,{sx:{p:3},children:[Object(w.jsx)(p.a,{container:!0,sx:{mb:3},children:Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(R,{isText:u,isMulti:r,onChangeText:function(e){return O(e.target.checked)},onChangeMulti:function(e){return l(e.target.checked)},onRefresh:function(){return i(n+1)}})})}),Object(w.jsxs)(p.a,{container:!0,spacing:3,children:[Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(Y,{isText:u,isMulti:r,selectVariant:f},n)}),Object(w.jsx)(p.a,{item:!0,xs:3,children:Object(w.jsx)(D,{variantKey:B,selectVariant:f,onChangeVariant:function(e){i(n+1),m(e.target.value)}})})]})]})}var B=[{type:"slide in",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"slide out",values:["slideOutUp","slideOutDown","slideOutLeft","slideOutRight"]},{type:"fade in",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"fade out",values:["fadeOut","fadeOutUp","fadeOutDown","fadeOutLeft","fadeOutRight"]},{type:"zoom in",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"zoom out",values:["zoomOut","zoomOutUp","zoomOutDown","zoomOutLeft","zoomOutRight"]},{type:"bounce in",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"bounce out",values:["bounceOut","bounceOutUp","bounceOutDown","bounceOutLeft","bounceOutRight"]},{type:"flip in",values:["flipInX","flipInY"]},{type:"flip out",values:["flipOutX","flipOutY"]},{type:"scale in",values:["scaleInX","scaleInY"]},{type:"scale out",values:["scaleOutX","scaleOutY"]},{type:"rotate in",values:["rotateIn"]},{type:"rotate out",values:["rotateOut"]}],q=n(1808),G=n(68);function _(){var e=Object(G.a)(),t=e.palette.primary.light,n=e.palette.primary.main,a=e.palette.primary.dark;return Object(w.jsxs)(o.a,{component:T.a.svg,viewBox:"0 0 512 512",sx:{width:240,height:240,strokeWidth:4,stroke:n},children:[Object(w.jsxs)("defs",{children:[Object(w.jsxs)("linearGradient",{x1:"100%",y1:"9.946%",x2:"50%",y2:"50%",id:"a",children:[Object(w.jsx)("stop",{stopColor:a,offset:"0%"}),Object(w.jsx)("stop",{stopColor:n,offset:"100%"})]}),Object(w.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"b",children:[Object(w.jsx)("stop",{stopColor:t,offset:"0%"}),Object(w.jsx)("stop",{stopColor:n,offset:"100%"})]}),Object(w.jsxs)("linearGradient",{x1:"50%",y1:"0%",x2:"50%",y2:"100%",id:"c",children:[Object(w.jsx)("stop",{stopColor:t,offset:"0%"}),Object(w.jsx)("stop",{stopColor:n,offset:"100%"})]})]}),Object(w.jsxs)("g",{fill:"none",fillRule:"nonzero",children:[Object(w.jsx)(T.a.path,Object(x.a)(Object(x.a)({},V.n),{},{d:"M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z",fill:"url(#a)"})),Object(w.jsx)(T.a.path,Object(x.a)(Object(x.a)({},V.n),{},{d:"M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994",fill:"url(#b)"})),Object(w.jsx)(T.a.path,Object(x.a)(Object(x.a)({},V.n),{},{d:"M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48",fill:"url(#c)"}))]})]})}function A(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(V.b,{color:"primary",size:"small",children:Object(w.jsx)(y.a,{icon:"eva:plus-fill",width:24,height:24})}),Object(w.jsx)(V.b,{color:"primary",size:"medium",children:Object(w.jsx)(y.a,{icon:"eva:plus-fill",width:24,height:24})}),Object(w.jsx)(V.b,{color:"primary",children:Object(w.jsx)(y.a,{icon:"eva:plus-fill",width:24,height:24})}),Object(w.jsx)(V.c,{color:"primary",size:"small",children:Object(w.jsx)(y.a,{icon:"eva:plus-fill",width:24,height:24})}),Object(w.jsx)(V.c,{color:"primary",children:Object(w.jsx)(y.a,{icon:"eva:plus-fill",width:24,height:24})}),Object(w.jsx)(V.c,{color:"primary",size:"large",children:Object(w.jsx)(y.a,{icon:"eva:plus-fill",width:24,height:24})})]})}var E=n(1823);function K(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(w.jsx)(h.a,{children:Object(w.jsx)(q.a,{children:Object(w.jsxs)(p.a,{container:!0,spacing:3,children:[Object(w.jsx)(p.a,{item:!0,xs:6,children:Object(w.jsx)(E.a,{title:"Button Click",sx:{"& > *":{mx:1}},children:Object(w.jsx)(A,{})})}),Object(w.jsx)(p.a,{item:!0,xs:6,children:Object(w.jsxs)(E.a,{title:"Path",children:[Object(w.jsx)(o.a,{sx:{position:"absolute",right:0,top:32},children:Object(w.jsx)(I.a,{onClick:function(){return i(n+1)},children:Object(w.jsx)(y.a,{icon:"eva:refresh-fill",width:20,height:20})})}),Object(w.jsx)(_,{},n)]})})]})})})}var N=["onRefresh"];function F(e){var t=e.onRefresh,n=Object(f.a)(e,N);return Object(w.jsx)(m.a,Object(x.a)(Object(x.a)({sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},n),{},{children:Object(w.jsx)(I.a,{onClick:t,children:Object(w.jsx)(y.a,{icon:"eva:refresh-fill",width:20,height:20})})}))}var W=n(16),H=["selectVariant"];function J(e){var t=e.selectVariant,n=Object(f.a)(e,H);return Object(w.jsx)(m.a,Object(x.a)(Object(x.a)({sx:{height:480,overflow:"hidden",bgcolor:"background.neutral"}},n),{},{children:Object(w.jsx)(U.a,{children:Object(W.a)(Array(40)).map((function(e,n){return Object(w.jsx)(V.e,{variants:S(t),children:Object(w.jsx)(o.a,{sx:{my:2,mx:"auto",height:72,maxWidth:480,display:"flex",borderRadius:1,alignItems:"center",justifyContent:"center",bgcolor:"background.paper",boxShadow:function(e){return e.customShadows.z8}},children:Object(w.jsxs)(z.a,{variant:"body2",children:["Item ",n+1]})})},n)}))})}))}function Q(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)("slideInUp"),s=Object(a.a)(o,2),r=s[0],l=s[1];return Object(w.jsxs)(h.a,{sx:{p:3},children:[Object(w.jsx)(p.a,{container:!0,sx:{mb:3},children:Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(F,{onRefresh:function(){return i(n+1)}})})}),Object(w.jsxs)(p.a,{container:!0,spacing:3,children:[Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(J,{selectVariant:r},n)}),Object(w.jsx)(p.a,{item:!0,xs:3,children:Object(w.jsx)(D,{variantKey:Z,selectVariant:r,onChangeVariant:function(e){i(n+1),l(e.target.value)}})})]})]})}var Z=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],$=n(544),ee=n(2039),te=n(2265),ne=n(2891),ae=n(1940),ce=["isOpen","onOpen","onClose","selectVariant"];function ie(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,c=e.selectVariant,i=Object(f.a)(e,ce);return Object(w.jsxs)(m.a,Object(x.a)(Object(x.a)({sx:{height:480,display:"flex",alignItems:"center",justifyContent:"center",bgcolor:"background.neutral"}},i),{},{children:[Object(w.jsx)($.a,{variant:"contained",onClick:n,children:"Click Me!"}),Object(w.jsxs)(V.a,{open:t,onClose:a,variants:S(c),children:[Object(w.jsx)(ee.a,{id:"alert-dialog-title",children:"Use Google's location service?"}),Object(w.jsx)(te.a,{children:Object(w.jsx)(ne.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(w.jsxs)(ae.a,{children:[Object(w.jsx)($.a,{onClick:a,children:"Disagree"}),Object(w.jsx)($.a,{variant:"contained",onClick:a,autoFocus:!0,children:"Agree"})]})]})]}))}function oe(){var e=Object(c.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)("slideInUp"),s=Object(a.a)(o,2),r=s[0],l=s[1];return Object(w.jsx)(h.a,{sx:{p:3},children:Object(w.jsxs)(p.a,{container:!0,spacing:3,children:[Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(ie,{isOpen:n,onOpen:function(){return i(!0)},onClose:function(){return i(!1)},selectVariant:r})}),Object(w.jsx)(p.a,{item:!0,xs:3,children:Object(w.jsx)(D,{variantKey:se,selectVariant:r,onChangeVariant:function(e){l(e.target.value)}})})]})})}var se=[{type:"slide",values:["slideInUp","slideInDown","slideInLeft","slideInRight"]},{type:"fade",values:["fadeIn","fadeInUp","fadeInDown","fadeInLeft","fadeInRight"]},{type:"zoom",values:["zoomIn","zoomInUp","zoomInDown","zoomInLeft","zoomInRight"]},{type:"bounce",values:["bounceIn","bounceInUp","bounceInDown","bounceInLeft","bounceInRight"]},{type:"flip",values:["flipInX","flipInY"]},{type:"scale",values:["scaleInX","scaleInY"]},{type:"rotate",values:["rotateIn"]}],re=["onRefresh"];function le(e){var t=e.onRefresh,n=Object(f.a)(e,re);return Object(w.jsx)(m.a,Object(x.a)(Object(x.a)({sx:{display:"flex",alignItems:"center",justifyContent:"flex-end"}},n),{},{children:Object(w.jsx)(I.a,{onClick:t,children:Object(w.jsx)(y.a,{icon:"eva:refresh-fill",width:20,height:20})})}))}var je=["selectVariant"];function be(e){var t=e.selectVariant,n=Object(f.a)(e,je),a=t.includes("kenburns");return Object(w.jsx)(m.a,Object(x.a)(Object(x.a)({sx:{height:480,width:"100%",overflow:"hidden",boxShadow:function(e){return e.customShadows.z8}}},n),{},{children:a?Object(w.jsx)(o.a,Object(x.a)(Object(x.a)({component:T.a.img,src:"https://minimal-assets-api.vercel.app/assets/images/feeds/feed_8.jpg"},S(t)),{},{sx:{width:1,height:1,objectFit:"cover"}})):Object(w.jsx)(o.a,Object(x.a)(Object(x.a)({component:T.a.div},S(t)),{},{sx:{height:1,width:1}}))}))}function ue(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)("kenburnsTop"),s=Object(a.a)(o,2),r=s[0],l=s[1];return Object(w.jsxs)(h.a,{sx:{p:3},children:[Object(w.jsx)(p.a,{container:!0,sx:{mb:3},children:Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(le,{onRefresh:function(){return i(n+1)}})})}),Object(w.jsxs)(p.a,{container:!0,spacing:3,children:[Object(w.jsx)(p.a,{item:!0,xs:9,children:Object(w.jsx)(be,{selectVariant:r},n)}),Object(w.jsx)(p.a,{item:!0,xs:3,children:Object(w.jsx)(D,{variantKey:Oe,selectVariant:r,onChangeVariant:function(e){i(n+1),l(e.target.value)}})})]})]})}var Oe=[{type:"kenburns",values:["kenburnsTop","kenburnsBottom","kenburnsLeft","kenburnsRight"]},{type:"pan",values:["panTop","panBottom","panLeft","panRight"]},{type:"color change",values:["color2x","color3x","color4x","color5x"]}],de=[{label:"In View",component:Object(w.jsx)(P,{})},{label:"Scroll",component:Object(w.jsx)(Q,{})},{label:"Dialog",component:Object(w.jsx)(oe,{})},{label:"Background",component:Object(w.jsx)(ue,{})},{label:"Other",component:Object(w.jsx)(K,{})}],he=Object(i.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function pe(){var e=Object(c.useState)("In View"),t=Object(a.a)(e,2),n=t[0],i=t[1];return Object(w.jsx)(O.a,{title:"Components: Animate",children:Object(w.jsxs)(he,{children:[Object(w.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(w.jsx)(s.a,{children:Object(w.jsx)(d.a,{heading:"Animate",links:[{name:"Components",href:u.d.components},{name:"Animate"}],moreLink:"https://www.framer.com/api/motion"})})}),Object(w.jsx)(s.a,{children:Object(w.jsxs)(l.a,{value:n,children:[Object(w.jsx)(o.a,{sx:{mb:5},children:Object(w.jsx)(j.a,{onChange:function(e,t){i(t)},children:de.map((function(e){return Object(w.jsx)(r.a,{label:e.label,value:e.label,disableRipple:!0},e.label)}))})}),de.map((function(e){return Object(w.jsx)(b.a,{value:e.label,children:e.component},e.label)}))]})})]})})}}}]);
//# sourceMappingURL=49.5e8aaae1.chunk.js.map