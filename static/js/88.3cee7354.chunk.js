(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[88],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n(4),a=n(25),c=n(136),r=n(27),l=n(407),o=n(1824),s=n(269),j=n(1681),b=n(0),u=["links","activeLast"];function d(e){var t,n=e.links,r=e.activeLast,j=void 0!==r&&r,d=Object(a.a)(e,u),p=null===(t=Object(c.last)(n))||void 0===t?void 0:t.name,x=n.map((function(e){return Object(b.jsx)(O,{link:e},e.name)})),h=n.map((function(e){return Object(b.jsx)("div",{children:e.name!==p?Object(b.jsx)(O,{link:e}):Object(b.jsx)(l.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:p})},e.name)}));return Object(b.jsx)(o.a,Object(i.a)(Object(i.a)({separator:Object(b.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},d),{},{children:j?x:h}))}function O(e){var t=e.link,n=t.href,i=t.name,a=t.icon;return Object(b.jsxs)(j.a,{variant:"body2",component:r.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[a&&Object(b.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:a}),i]},i)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(4),a=n(25),c=n(136),r=n(269),l=n(407),o=n(1681),s=n(1819),j=n(0),b=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,n=e.action,u=e.heading,d=e.moreLink,O=void 0===d?[]:d,p=e.sx,x=Object(a.a)(e,b);return Object(j.jsxs)(r.a,{sx:Object(i.a)({mb:5},p),children:[Object(j.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(j.jsx)(l.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(s.a,Object(i.a)({links:t},x))]}),n&&Object(j.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(r.a,{sx:{mt:2},children:Object(c.isString)(O)?Object(j.jsx)(o.a,{href:O,target:"_blank",rel:"noopener",variant:"body2",children:O}):O.map((function(e){return Object(j.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return b}));var i=n(4),a=n(98),c=n(1009),r=n(1825),l=n(269),o=n(407),s=n(0);function j(e){var t=e.title,n=e.sx,o=e.children;return Object(s.jsxs)(c.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(a.a)(e.palette.grey[500],.04)}},children:[t&&Object(s.jsx)(r.a,{title:t}),Object(s.jsx)(l.a,{sx:Object(i.a)({p:5,minHeight:180},n),children:o})]})}function b(e){var t=e.title;return Object(s.jsx)(o.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},2773:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var i=n(4),a=n(3),c=n(1),r=n(12),l=n(269),o=n(1785),s=n(2878),j=n(1798),b=n(407),u=n(1774),d=n(1843),O=n(47),p=n(350),x=n(671),h=n(1820),f=n(1823),m=n(0),g=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),v=["Option 1","Option 2"];function k(){var e=Object(c.useState)(v[0]),t=Object(a.a)(e,2),n=t[0],r=t[1],k=Object(c.useState)(""),y=Object(a.a)(k,2),S=y[0],C=y[1];return Object(m.jsx)(x.a,{title:"Components: Autocomplete",children:Object(m.jsxs)(g,{children:[Object(m.jsx)(l.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(o.a,{children:Object(m.jsx)(h.a,{heading:"Autocomplete",links:[{name:"Components",href:O.d.components},{name:"Autocomplete"}],moreLink:"https://mui.com/components/autocomplete"})})}),Object(m.jsx)(o.a,{children:Object(m.jsxs)(d.a,{columns:3,spacing:3,children:[Object(m.jsx)(f.a,{title:"Combo box",children:Object(m.jsx)(s.a,{fullWidth:!0,options:p.U,getOptionLabel:function(e){return e.title},renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Combo box",margin:"none"}))}})}),Object(m.jsx)(f.a,{title:"Country Select",children:Object(m.jsx)(l.a,{sx:{width:"100%","& .MuiAutocomplete-option":{typography:"body2","& > span":{mr:1,fontSize:20}}},children:Object(m.jsx)(s.a,{fullWidth:!0,disablePortal:!0,autoHighlight:!0,options:p.S,getOptionLabel:function(e){return e.label},renderOption:function(e,t){return Object(m.jsxs)("li",Object(i.a)(Object(i.a)({},e),{},{children:[Object(m.jsx)("span",{children:(n=t.code,"undefined"!==typeof String.fromCodePoint?n.toUpperCase().replace(/./g,(function(e){return String.fromCodePoint(e.charCodeAt(0)+127397)})):n)}),t.label," (",t.code,") +",t.phone]}));var n},renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Choose a country",inputProps:Object(i.a)(Object(i.a)({},e.inputProps),{},{autoComplete:"new-password"})}))}})})}),Object(m.jsx)(f.a,{title:" Controllable states",sx:{flexDirection:"column"},children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{fullWidth:!0,value:n,options:v,onChange:function(e,t){r(t)},inputValue:S,onInputChange:function(e,t){C(t)},renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Controllable"}))}}),Object(m.jsx)(b.a,{variant:"body2",sx:{mt:2},children:"value: ".concat(null!==n?"'".concat(n,"'"):"null")}),Object(m.jsx)(b.a,{variant:"body2",children:"inputValue: '".concat(S,"'")})]})}),Object(m.jsxs)(f.a,{title:"Free solo",children:[Object(m.jsx)(s.a,{fullWidth:!0,freeSolo:!0,options:p.U.map((function(e){return e.title})),renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"freeSolo"}))},sx:{mb:2}}),Object(m.jsx)(s.a,{fullWidth:!0,freeSolo:!0,disableClearable:!0,options:p.U.map((function(e){return e.title})),renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Search input",InputProps:Object(i.a)(Object(i.a)({},e.InputProps),{},{type:"search"})}))}})]}),Object(m.jsx)(f.a,{title:"Multiple Values",children:Object(m.jsx)(s.a,{multiple:!0,fullWidth:!0,options:p.U,getOptionLabel:function(e){return e.title},defaultValue:[p.U[13]],filterSelectedOptions:!0,renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"filterSelectedOptions",placeholder:"Favorites"}))}})}),Object(m.jsx)(f.a,{title:"Checkboxes",children:Object(m.jsx)(s.a,{fullWidth:!0,multiple:!0,options:p.U,disableCloseOnSelect:!0,getOptionLabel:function(e){return e.title},renderOption:function(e,t,n){var a=n.selected;return Object(m.jsxs)("li",Object(i.a)(Object(i.a)({},e),{},{children:[Object(m.jsx)(u.a,{checked:a}),t.title]}))},renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Checkboxes",placeholder:"Favorites"}))}})}),Object(m.jsx)(f.a,{title:"Sizes",children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{fullWidth:!0,options:p.U,getOptionLabel:function(e){return e.title},defaultValue:p.U[13],renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Size Medium",placeholder:"Favorites"}))}}),Object(m.jsx)("br",{}),Object(m.jsx)(s.a,{fullWidth:!0,multiple:!0,size:"small",options:p.U,getOptionLabel:function(e){return e.title},defaultValue:[p.U[13]],renderInput:function(e){return Object(m.jsx)(j.a,Object(i.a)(Object(i.a)({},e),{},{label:"Size small",placeholder:"Favorites"}))}})]})})]})})]})})}}}]);
//# sourceMappingURL=88.3cee7354.chunk.js.map