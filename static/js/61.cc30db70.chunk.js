(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[61],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(4),n=a(25),c=a(136),o=a(27),i=a(407),l=a(1824),s=a(269),d=a(1681),j=a(0),b=["links","activeLast"];function u(e){var t,a=e.links,o=e.activeLast,d=void 0!==o&&o,u=Object(n.a)(e,b),p=null===(t=Object(c.last)(a))||void 0===t?void 0:t.name,x=a.map((function(e){return Object(j.jsx)(h,{link:e},e.name)})),O=a.map((function(e){return Object(j.jsx)("div",{children:e.name!==p?Object(j.jsx)(h,{link:e}):Object(j.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return Object(j.jsx)(l.a,Object(r.a)(Object(r.a)({separator:Object(j.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},u),{},{children:d?x:O}))}function h(e){var t=e.link,a=t.href,r=t.name,n=t.icon;return Object(j.jsxs)(d.a,{variant:"body2",component:o.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(j.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(4),n=a(25),c=a(136),o=a(269),i=a(407),l=a(1681),s=a(1819),d=a(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,p=e.sx,x=Object(n.a)(e,j);return Object(d.jsxs)(o.a,{sx:Object(r.a)({mb:5},p),children:[Object(d.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(s.a,Object(r.a)({links:t},x))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(o.a,{sx:{mt:2},children:Object(c.isString)(h)?Object(d.jsx)(l.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var r=a(4),n=a(98),c=a(1009),o=a(1825),i=a(269),l=a(407),s=a(0);function d(e){var t=e.title,a=e.sx,l=e.children;return Object(s.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(n.a)(e.palette.grey[500],.04)}},children:[t&&Object(s.jsx)(o.a,{title:t}),Object(s.jsx)(i.a,{sx:Object(r.a)({p:5,minHeight:180},a),children:l})]})}function j(e){var t=e.title;return Object(s.jsx)(l.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},1824:function(e,t,a){"use strict";var r=a(16),n=a(3),c=a(10),o=a(2),i=a(13),l=a(1),s=(a(99),a(7),a(5)),d=a(300),j=a(12),b=a(18),u=a(407),h=a(98),p=a(59),x=a(0),O=Object(p.a)(Object(x.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),m=a(1675),f=Object(j.a)(m.a,{skipSx:!0})((function(e){var t=e.theme;return Object(o.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(o.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(o.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(h.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(h.c)(t.palette.grey[600],.12)})})})),v=Object(j.a)(O)({width:24,height:16});var g=function(e){var t=e;return Object(x.jsx)("li",{children:Object(x.jsx)(f,Object(o.a)({focusRipple:!0},e,{ownerState:t,children:Object(x.jsx)(v,{ownerState:t})}))})},y=a(179),w=a(192);function k(e){return Object(y.a)("MuiBreadcrumbs",e)}var S=Object(w.a)("MuiBreadcrumbs",["root","ol","li","separator"]),C=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(j.a)(u.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(c.a)({},"& .".concat(S.li),t.li),t.root]}})({}),M=Object(j.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=Object(j.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function B(e,t,a,r){return e.reduce((function(n,c,o){return o<e.length-1?n=n.concat(c,Object(x.jsx)(N,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(o))):n.push(c),n}),[])}var T=l.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiBreadcrumbs"}),c=a.children,j=a.className,u=a.component,h=void 0===u?"nav":u,p=a.expandText,O=void 0===p?"Show path":p,m=a.itemsAfterCollapse,f=void 0===m?1:m,v=a.itemsBeforeCollapse,y=void 0===v?1:v,w=a.maxItems,S=void 0===w?8:w,N=a.separator,T=void 0===N?"/":N,I=Object(i.a)(a,C),H=l.useState(!1),L=Object(n.a)(H,2),P=L[0],W=L[1],A=Object(o.a)({},a,{component:h,expanded:P,expandText:O,itemsAfterCollapse:f,itemsBeforeCollapse:y,maxItems:S,separator:T}),z=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},k,t)}(A),E=l.useRef(null),D=l.Children.toArray(c).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return Object(x.jsx)("li",{className:z.li,children:e},"child-".concat(t))}));return Object(x.jsx)(R,Object(o.a)({ref:t,component:h,color:"text.secondary",className:Object(s.a)(z.root,j),ownerState:A},I,{children:Object(x.jsx)(M,{className:z.ol,ref:E,ownerState:A,children:B(P||S&&D.length<=S?D:function(e){return y+f>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[Object(x.jsx)(g,{"aria-label":O,onClick:function(){W(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-f,e.length)))}(D),z.separator,T,A)})}))}));t.a=T},1825:function(e,t,a){"use strict";var r=a(10),n=a(13),c=a(2),o=a(1),i=(a(7),a(5)),l=a(300),s=a(407),d=a(18),j=a(12),b=a(179),u=a(192);function h(e){return Object(b.a)("MuiCardHeader",e)}var p=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=a(0),O=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],m=Object(j.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(r.a)(a,"& .".concat(p.title),t.title),Object(r.a)(a,"& .".concat(p.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(j.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(j.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,o=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,p=a.disableTypography,y=void 0!==p&&p,w=a.subheader,k=a.subheaderTypographyProps,S=a.title,C=a.titleTypographyProps,R=Object(n.a)(a,O),M=Object(c.a)({},a,{component:u,disableTypography:y}),N=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(M),B=S;null==B||B.type===s.a||y||(B=Object(x.jsx)(s.a,Object(c.a)({variant:o?"body2":"h5",className:N.title,component:"span",display:"block"},C,{children:B})));var T=w;return null==T||T.type===s.a||y||(T=Object(x.jsx)(s.a,Object(c.a)({variant:o?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},k,{children:T}))),Object(x.jsxs)(m,Object(c.a)({className:Object(i.a)(N.root,j),as:u,ref:t,ownerState:M},R,{children:[o&&Object(x.jsx)(f,{className:N.avatar,ownerState:M,children:o}),Object(x.jsxs)(g,{className:N.content,ownerState:M,children:[B,T]}),r&&Object(x.jsx)(v,{className:N.action,ownerState:M,children:r})]}))}));t.a=y},2778:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a(12),n=a(269),c=a(1785),o=a(1002),i=a(47),l=a(671),s=a(545),d=a(1820),j=a(1823),b=a(0),u={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{mx:1}},h=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function p(){return Object(b.jsx)(l.a,{title:"Components: Label",children:Object(b.jsxs)(h,{children:[Object(b.jsx)(n.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(b.jsx)(c.a,{children:Object(b.jsx)(d.a,{heading:"Label",links:[{name:"Components",href:i.d.components},{name:"Label"}]})})}),Object(b.jsx)(c.a,{children:Object(b.jsxs)(o.a,{spacing:3,children:[Object(b.jsxs)(j.a,{title:"Filled",sx:u,children:[Object(b.jsx)(s.a,{variant:"filled",children:" Default"}),Object(b.jsx)(s.a,{variant:"filled",color:"primary",children:"Primary"}),Object(b.jsx)(s.a,{variant:"filled",color:"secondary",children:"Secondary"}),Object(b.jsx)(s.a,{variant:"filled",color:"info",children:"Info"}),Object(b.jsx)(s.a,{variant:"filled",color:"success",children:"Success"}),Object(b.jsx)(s.a,{variant:"filled",color:"warning",children:"Waring"}),Object(b.jsx)(s.a,{variant:"filled",color:"error",children:"Error"})]}),Object(b.jsxs)(j.a,{title:"Outlined",sx:u,children:[Object(b.jsx)(s.a,{variant:"outlined",children:" Default"}),Object(b.jsx)(s.a,{variant:"outlined",color:"primary",children:"Primary"}),Object(b.jsx)(s.a,{variant:"outlined",color:"secondary",children:"Secondary"}),Object(b.jsx)(s.a,{variant:"outlined",color:"info",children:"Info"}),Object(b.jsx)(s.a,{variant:"outlined",color:"success",children:"Success"}),Object(b.jsx)(s.a,{variant:"outlined",color:"warning",children:"Waring"}),Object(b.jsx)(s.a,{variant:"outlined",color:"error",children:"Error"})]}),Object(b.jsxs)(j.a,{title:"Ghost",sx:u,children:[Object(b.jsx)(s.a,{children:" Default"}),Object(b.jsx)(s.a,{color:"primary",children:"Primary"}),Object(b.jsx)(s.a,{color:"secondary",children:"Secondary"}),Object(b.jsx)(s.a,{color:"info",children:"Info"}),Object(b.jsx)(s.a,{color:"success",children:"Success"}),Object(b.jsx)(s.a,{color:"warning",children:"Waring"}),Object(b.jsx)(s.a,{color:"error",children:"Error"})]})]})})]})})}}}]);
//# sourceMappingURL=61.cc30db70.chunk.js.map