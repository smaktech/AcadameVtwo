(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[55],{1819:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var r=a(4),n=a(25),c=a(136),o=a(27),i=a(407),s=a(1824),l=a(269),d=a(1681),b=a(0),u=["links","activeLast"];function j(e){var t,a=e.links,o=e.activeLast,d=void 0!==o&&o,j=Object(n.a)(e,u),m=null===(t=Object(c.last)(a))||void 0===t?void 0:t.name,h=a.map((function(e){return Object(b.jsx)(p,{link:e},e.name)})),O=a.map((function(e){return Object(b.jsx)("div",{children:e.name!==m?Object(b.jsx)(p,{link:e}):Object(b.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:m})},e.name)}));return Object(b.jsx)(s.a,Object(r.a)(Object(r.a)({separator:Object(b.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},j),{},{children:d?h:O}))}function p(e){var t=e.link,a=t.href,r=t.name,n=t.icon;return Object(b.jsxs)(d.a,{variant:"body2",component:o.b,to:a||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[n&&Object(b.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:n}),r]},r)}},1820:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(4),n=a(25),c=a(136),o=a(269),i=a(407),s=a(1681),l=a(1819),d=a(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,a=e.action,u=e.heading,j=e.moreLink,p=void 0===j?[]:j,m=e.sx,h=Object(n.a)(e,b);return Object(d.jsxs)(o.a,{sx:Object(r.a)({mb:5},m),children:[Object(d.jsxs)(o.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(o.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:u}),Object(d.jsx)(l.a,Object(r.a)({links:t},h))]}),a&&Object(d.jsx)(o.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(o.a,{sx:{mt:2},children:Object(c.isString)(p)?Object(d.jsx)(s.a,{href:p,target:"_blank",rel:"noopener",variant:"body2",children:p}):p.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,a){"use strict";var r=a(16),n=a(3),c=a(10),o=a(2),i=a(13),s=a(1),l=(a(99),a(7),a(5)),d=a(300),b=a(12),u=a(18),j=a(407),p=a(98),m=a(59),h=a(0),O=Object(m.a)(Object(h.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),x=a(1675),g=Object(b.a)(x.a,{skipSx:!0})((function(e){var t=e.theme;return Object(o.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(o.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(o.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(p.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(p.c)(t.palette.grey[600],.12)})})})),v=Object(b.a)(O)({width:24,height:16});var f=function(e){var t=e;return Object(h.jsx)("li",{children:Object(h.jsx)(g,Object(o.a)({focusRipple:!0},e,{ownerState:t,children:Object(h.jsx)(v,{ownerState:t})}))})},y=a(179),k=a(192);function w(e){return Object(y.a)("MuiBreadcrumbs",e)}var C=Object(k.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=Object(b.a)(j.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(c.a)({},"& .".concat(C.li),t.li),t.root]}})({}),M=Object(b.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=Object(b.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function L(e,t,a,r){return e.reduce((function(n,c,o){return o<e.length-1?n=n.concat(c,Object(h.jsx)(N,{"aria-hidden":!0,className:t,ownerState:r,children:a},"separator-".concat(o))):n.push(c),n}),[])}var B=s.forwardRef((function(e,t){var a=Object(u.a)({props:e,name:"MuiBreadcrumbs"}),c=a.children,b=a.className,j=a.component,p=void 0===j?"nav":j,m=a.expandText,O=void 0===m?"Show path":m,x=a.itemsAfterCollapse,g=void 0===x?1:x,v=a.itemsBeforeCollapse,y=void 0===v?1:v,k=a.maxItems,C=void 0===k?8:k,N=a.separator,B=void 0===N?"/":N,T=Object(i.a)(a,S),I=s.useState(!1),H=Object(n.a)(I,2),P=H[0],A=H[1],z=Object(o.a)({},a,{component:p,expanded:P,expandText:O,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:C,separator:B}),W=function(e){var t=e.classes;return Object(d.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(z),E=s.useRef(null),J=s.Children.toArray(c).filter((function(e){return s.isValidElement(e)})).map((function(e,t){return Object(h.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return Object(h.jsx)(R,Object(o.a)({ref:t,component:p,color:"text.secondary",className:Object(l.a)(W.root,b),ownerState:z},T,{children:Object(h.jsx)(M,{className:W.ol,ref:E,ownerState:z,children:L(P||C&&J.length<=C?J:function(e){return y+g>=e.length?e:[].concat(Object(r.a)(e.slice(0,y)),[Object(h.jsx)(f,{"aria-label":O,onClick:function(){A(!0);var e=E.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-g,e.length)))}(J),W.separator,B,z)})}))}));t.a=B},1825:function(e,t,a){"use strict";var r=a(10),n=a(13),c=a(2),o=a(1),i=(a(7),a(5)),s=a(300),l=a(407),d=a(18),b=a(12),u=a(179),j=a(192);function p(e){return Object(u.a)("MuiCardHeader",e)}var m=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),h=a(0),O=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],x=Object(b.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(c.a)((a={},Object(r.a)(a,"& .".concat(m.title),t.title),Object(r.a)(a,"& .".concat(m.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),g=Object(b.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(b.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),f=Object(b.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=o.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),r=a.action,o=a.avatar,b=a.className,u=a.component,j=void 0===u?"div":u,m=a.disableTypography,y=void 0!==m&&m,k=a.subheader,w=a.subheaderTypographyProps,C=a.title,S=a.titleTypographyProps,R=Object(n.a)(a,O),M=Object(c.a)({},a,{component:j,disableTypography:y}),N=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(M),L=C;null==L||L.type===l.a||y||(L=Object(h.jsx)(l.a,Object(c.a)({variant:o?"body2":"h5",className:N.title,component:"span",display:"block"},S,{children:L})));var B=k;return null==B||B.type===l.a||y||(B=Object(h.jsx)(l.a,Object(c.a)({variant:o?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:B}))),Object(h.jsxs)(x,Object(c.a)({className:Object(i.a)(N.root,b),as:j,ref:t,ownerState:M},R,{children:[o&&Object(h.jsx)(g,{className:N.avatar,ownerState:M,children:o}),Object(h.jsxs)(f,{className:N.content,ownerState:M,children:[L,B]}),r&&Object(h.jsx)(v,{className:N.action,ownerState:M,children:r})]}))}));t.a=y},1899:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a(4),n=a(25),c=a(1002),o=a(0),i=["icon","value","endIcon","sx"];function s(e){var t=e.icon,a=e.value,s=e.endIcon,l=void 0!==s&&s,d=e.sx,b=Object(n.a)(e,i);return Object(o.jsxs)(c.a,Object(r.a)(Object(r.a)({direction:"row",alignItems:"center",sx:Object(r.a)({typography:"body2"},d)},b),{},{children:[!l&&t,a,l&&t]}))}},2809:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var r=a(3),n=a(1),c=a(12),o=a(269),i=a(1785),s=a(1002),l=a(1805),d=a(1825),b=a(1763),u=a(1803),j=a(1772),p=a(407),m=a(1813),h=a(47),O=a(477),x=a(671),g=a(349),v=a(1899),f=a(1820),y=a(0),k=Object(c.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function w(){var e=Object(O.a)(),t=e.allLang,a=e.currentLang,c=e.translate,w=e.onChangeLang,C=Object(n.useState)(2),S=Object(r.a)(C,2),R=S[0],M=S[1],N=Object(n.useState)(10),L=Object(r.a)(N,2),B=L[0],T=L[1];return Object(y.jsx)(x.a,{title:"Components: Multi Language",children:Object(y.jsxs)(k,{children:[Object(y.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(i.a,{children:Object(y.jsx)(f.a,{heading:"Multi Language",links:[{name:"Components",href:h.d.components},{name:"Multi Language"}],moreLink:["https://react.i18next.com","https://mui.com/guides/localization/#main-content"]})})}),Object(y.jsx)(i.a,{children:Object(y.jsxs)(s.a,{spacing:5,children:[Object(y.jsxs)(l.a,{children:[Object(y.jsx)(d.a,{title:"Flexible"}),Object(y.jsxs)(o.a,{sx:{p:3},children:[Object(y.jsx)(b.a,{row:!0,value:a.value,onChange:function(e){return w(e.target.value)},children:t.map((function(e){return Object(y.jsx)(u.a,{value:e.value,label:e.label,control:Object(y.jsx)(j.a,{})},e.label)}))}),Object(y.jsx)(v.a,{icon:Object(y.jsx)(g.a,{disabledEffect:!0,alt:a.label,src:a.icon,sx:{mr:1}}),value:c("demo.title"),sx:{typography:"h2",my:3}}),Object(y.jsx)(p.a,{variant:"body1",children:c("demo.introduction")})]})]}),Object(y.jsxs)(l.a,{children:[Object(y.jsx)(d.a,{title:"System",sx:{pb:2}}),Object(y.jsx)(m.a,{component:"div",count:100,page:R,onPageChange:function(e,t){M(t)},rowsPerPage:B,onRowsPerPageChange:function(e){T(parseInt(e.target.value,10)),M(0)}})]})]})})]})})}}}]);
//# sourceMappingURL=55.73472950.chunk.js.map