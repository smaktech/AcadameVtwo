(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[87],{1819:function(e,t,i){"use strict";i.d(t,"a",(function(){return b}));var n=i(4),c=i(25),r=i(136),s=i(27),a=i(407),o=i(1824),l=i(269),j=i(1681),h=i(0),d=["links","activeLast"];function b(e){var t,i=e.links,s=e.activeLast,j=void 0!==s&&s,b=Object(c.a)(e,d),x=null===(t=Object(r.last)(i))||void 0===t?void 0:t.name,O=i.map((function(e){return Object(h.jsx)(u,{link:e},e.name)})),f=i.map((function(e){return Object(h.jsx)("div",{children:e.name!==x?Object(h.jsx)(u,{link:e}):Object(h.jsx)(a.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return Object(h.jsx)(o.a,Object(n.a)(Object(n.a)({separator:Object(h.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:j?O:f}))}function u(e){var t=e.link,i=t.href,n=t.name,c=t.icon;return Object(h.jsxs)(j.a,{variant:"body2",component:s.b,to:i||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(h.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),n]},n)}},1820:function(e,t,i){"use strict";i.d(t,"a",(function(){return d}));var n=i(4),c=i(25),r=i(136),s=i(269),a=i(407),o=i(1681),l=i(1819),j=i(0),h=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,i=e.action,d=e.heading,b=e.moreLink,u=void 0===b?[]:b,x=e.sx,O=Object(c.a)(e,h);return Object(j.jsxs)(s.a,{sx:Object(n.a)({mb:5},x),children:[Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(s.a,{sx:{flexGrow:1},children:[Object(j.jsx)(a.a,{variant:"h4",gutterBottom:!0,children:d}),Object(j.jsx)(l.a,Object(n.a)({links:t},O))]}),i&&Object(j.jsx)(s.a,{sx:{flexShrink:0},children:i})]}),Object(j.jsx)(s.a,{sx:{mt:2},children:Object(r.isString)(u)?Object(j.jsx)(o.a,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return Object(j.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,i){"use strict";i.d(t,"a",(function(){return j})),i.d(t,"b",(function(){return h}));var n=i(4),c=i(98),r=i(1009),s=i(1825),a=i(269),o=i(407),l=i(0);function j(e){var t=e.title,i=e.sx,o=e.children;return Object(l.jsxs)(r.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(c.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(s.a,{title:t}),Object(l.jsx)(a.a,{sx:Object(n.a)({p:5,minHeight:180},i),children:o})]})}function h(e){var t=e.title;return Object(l.jsx)(o.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2772:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return v}));var n=i(12),c=i(98),r=i(269),s=i(1785),a=i(1002),o=i(1770),l=i(2889),j=i(544),h=i(1843),d=i(47),b=i(671),u=i(1820),x=i(1823),O=i(0),f=Object(n.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function v(){return Object(O.jsx)(b.a,{title:"Components: Alert",children:Object(O.jsxs)(f,{children:[Object(O.jsx)(r.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(O.jsx)(s.a,{children:Object(O.jsx)(u.a,{heading:"Alert",links:[{name:"Components",href:d.d.components},{name:"Alert"}],moreLink:"https://mui.com/components/alert"})})}),Object(O.jsx)(s.a,{children:Object(O.jsxs)(h.a,{columns:2,spacing:3,children:[Object(O.jsx)(x.a,{title:"Simple",children:Object(O.jsxs)(a.a,{spacing:2,children:[Object(O.jsx)(o.a,{severity:"error",onClose:function(){},children:"This is an error alert \u2014 check it out!"}),Object(O.jsx)(o.a,{severity:"warning",onClose:function(){},children:"This is a warning alert \u2014 check it out!"}),Object(O.jsx)(o.a,{severity:"info",children:"This is an info alert \u2014 check it out!"}),Object(O.jsx)(o.a,{severity:"success",children:"This is a success alert \u2014 check it out!"})]})}),Object(O.jsx)(x.a,{title:"Filled",children:Object(O.jsxs)(a.a,{spacing:2,children:[Object(O.jsx)(o.a,{variant:"filled",severity:"error",onClose:function(){},children:"This is an error alert \u2014 check it out!"}),Object(O.jsx)(o.a,{variant:"filled",severity:"warning",onClose:function(){},children:"This is a warning alert \u2014 check it out!"}),Object(O.jsx)(o.a,{variant:"filled",severity:"info",children:"This is an info alert \u2014 check it out!"}),Object(O.jsx)(o.a,{variant:"filled",severity:"success",children:"This is a success alert \u2014 check it out!"})]})}),Object(O.jsx)(x.a,{title:"Outlined",children:Object(O.jsxs)(a.a,{spacing:2,children:[Object(O.jsx)(o.a,{variant:"outlined",severity:"error",onClose:function(){},children:"This is an error alert \u2014 check it out!"}),Object(O.jsx)(o.a,{variant:"outlined",severity:"warning",onClose:function(){},children:"This is a warning alert \u2014 check it out!"}),Object(O.jsx)(o.a,{variant:"outlined",severity:"info",children:"This is an info alert \u2014 check it out!"}),Object(O.jsx)(o.a,{variant:"outlined",severity:"success",children:"This is a success alert \u2014 check it out!"})]})}),Object(O.jsx)(x.a,{title:"Description",children:Object(O.jsxs)(a.a,{spacing:2,children:[Object(O.jsxs)(o.a,{severity:"error",onClose:function(){},children:[Object(O.jsx)(l.a,{children:"Error"}),"This is an error alert \u2014 ",Object(O.jsx)("strong",{children:"check it out!"})]}),Object(O.jsxs)(o.a,{severity:"warning",children:[Object(O.jsx)(l.a,{children:"Warning"}),"This is a warning alert \u2014 ",Object(O.jsx)("strong",{children:"check it out!"})]}),Object(O.jsxs)(o.a,{severity:"info",children:[Object(O.jsx)(l.a,{children:"Info"}),"This is an info alert \u2014 ",Object(O.jsx)("strong",{children:"check it out!"})]}),Object(O.jsxs)(o.a,{severity:"success",children:[Object(O.jsx)(l.a,{children:"Success"}),"This is a success alert \u2014 ",Object(O.jsx)("strong",{children:"check it out!"})]})]})}),Object(O.jsx)(x.a,{title:"Actions",children:Object(O.jsxs)(a.a,{spacing:2,children:[Object(O.jsx)(o.a,{severity:"info",action:Object(O.jsx)(j.a,{color:"info",size:"small",variant:"outlined",children:"Undo"}),children:"This is an info alert \u2014 check it out!"}),Object(O.jsx)(o.a,{severity:"info",variant:"filled",action:Object(O.jsx)(j.a,{color:"inherit",size:"small",variant:"outlined",sx:{border:function(e){return"1px solid ".concat(Object(c.a)(e.palette.common.white,.48))}},children:"Undo"}),children:"This is an info alert \u2014 check it out!"}),Object(O.jsx)(o.a,{severity:"info",variant:"outlined",action:Object(O.jsx)(j.a,{color:"info",size:"small",variant:"outlined",children:"Undo"}),children:"This is an info alert \u2014 check it out!"})]})})]})})]})})}}}]);
//# sourceMappingURL=87.880560c5.chunk.js.map