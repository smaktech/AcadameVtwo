(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[73],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(4),c=n(25),a=n(136),r=n(27),o=n(407),s=n(1824),l=n(269),j=n(1681),d=n(0),u=["links","activeLast"];function b(e){var t,n=e.links,r=e.activeLast,j=void 0!==r&&r,b=Object(c.a)(e,u),x=null===(t=Object(a.last)(n))||void 0===t?void 0:t.name,O=n.map((function(e){return Object(d.jsx)(h,{link:e},e.name)})),m=n.map((function(e){return Object(d.jsx)("div",{children:e.name!==x?Object(d.jsx)(h,{link:e}):Object(d.jsx)(o.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:x})},e.name)}));return Object(d.jsx)(s.a,Object(i.a)(Object(i.a)({separator:Object(d.jsx)(l.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:j?O:m}))}function h(e){var t=e.link,n=t.href,i=t.name,c=t.icon;return Object(d.jsxs)(j.a,{variant:"body2",component:r.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[c&&Object(d.jsx)(l.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:c}),i]},i)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n(4),c=n(25),a=n(136),r=n(269),o=n(407),s=n(1681),l=n(1819),j=n(0),d=["links","action","heading","moreLink","sx"];function u(e){var t=e.links,n=e.action,u=e.heading,b=e.moreLink,h=void 0===b?[]:b,x=e.sx,O=Object(c.a)(e,d);return Object(j.jsxs)(r.a,{sx:Object(i.a)({mb:5},x),children:[Object(j.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:u}),Object(j.jsx)(l.a,Object(i.a)({links:t},O))]}),n&&Object(j.jsx)(r.a,{sx:{flexShrink:0},children:n})]}),Object(j.jsx)(r.a,{sx:{mt:2},children:Object(a.isString)(h)?Object(j.jsx)(s.a,{href:h,target:"_blank",rel:"noopener",variant:"body2",children:h}):h.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1823:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return d}));var i=n(4),c=n(98),a=n(1009),r=n(1825),o=n(269),s=n(407),l=n(0);function j(e){var t=e.title,n=e.sx,s=e.children;return Object(l.jsxs)(a.a,{variant:"outlined",sx:{borderRadius:1.5,bgcolor:function(e){return Object(c.a)(e.palette.grey[500],.04)}},children:[t&&Object(l.jsx)(r.a,{title:t}),Object(l.jsx)(o.a,{sx:Object(i.a)({p:5,minHeight:180},n),children:s})]})}function d(e){var t=e.title;return Object(l.jsx)(s.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}},1843:function(e,t,n){"use strict";var i=n(16),c=n(3),a=n(13),r=n(2),o=n(300),s=n(12),l=n(18),j=n(97),d=n(135),u=n(347),b=n(543),h=n(5),x=(n(7),n(1)),O=n(179),m=n(192);function f(e){return Object(O.a)("MuiMasonry",e)}Object(m.a)("MuiMasonry",["root"]);var p=n(0),v=["children","className","component","columns","spacing","defaultColumns","defaultHeight","defaultSpacing"],g=function(e){return Number(e.replace("px",""))},C=Object(s.a)("div",{name:"MuiMasonry",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,i={width:"100%",display:"flex",flexFlow:"column wrap",alignContent:"space-between",boxSizing:"border-box","& > *":{boxSizing:"border-box"}},c={};if(t.isSSR){for(var a={},o=Number(n.spacing(t.defaultSpacing).replace("px","")),s=1;s<=t.defaultColumns;s+=1)a["&:nth-of-type(".concat(t.defaultColumns,"n+").concat(s%t.defaultColumns,")")]={order:s};return c.height=t.defaultHeight,c.margin=-o/2,c["& > *"]=Object(r.a)({},i["& > *"],a,{margin:o/2,width:"calc(".concat((100/t.defaultColumns).toFixed(2),"% - ").concat(o,"px)")}),Object(r.a)({},i,c)}var l=Object(j.d)({values:t.spacing,breakpoints:n.breakpoints.values}),b=Object(d.a)(n);i=Object(u.a)(i,Object(j.b)({theme:n},l,(function(e){var n=Number(e),i=Number(Object(d.d)(b,n).replace("px",""));return Object(r.a)({margin:-i/2,"& > *":{margin:i/2}},t.maxColumnHeight&&{height:Math.ceil(t.maxColumnHeight+i)})})));var h=Object(j.d)({values:t.columns,breakpoints:n.breakpoints.values});return i=Object(u.a)(i,Object(j.b)({theme:n},h,(function(e){var t=Number(e),n="".concat((100/t).toFixed(2),"%"),i="object"!==typeof l?Object(d.d)(b,Number(l)):"0px";return{"& > *":{width:"calc(".concat(n," - ").concat(i,")")}}}))),"object"===typeof l&&(i=Object(u.a)(i,Object(j.b)({theme:n},l,(function(e,t){if(t){var n=Number(e),i=Object.keys(h).pop(),c=Object(d.d)(b,n),a="object"===typeof h?h[t]||h[i]:h,r="".concat((100/a).toFixed(2),"%");return{"& > *":{width:"calc(".concat(r," - ").concat(c,")")}}}return null})))),i})),y=x.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiMasonry"}),s=n.children,j=n.className,d=n.component,u=void 0===d?"div":d,O=n.columns,m=void 0===O?4:O,y=n.spacing,k=void 0===y?1:y,w=n.defaultColumns,S=n.defaultHeight,M=n.defaultSpacing,R=Object(a.a)(n,v),N=x.useRef(),F=x.useState(),D=Object(c.a)(F,2),T=D[0],W=D[1],H=!T&&S&&void 0!==w&&void 0!==M,A=x.useState(H?w-1:0),E=Object(c.a)(A,2),L=E[0],G=E[1],z=Object(r.a)({},n,{spacing:k,columns:m,maxColumnHeight:T,defaultColumns:w,defaultHeight:S,defaultSpacing:M,isSSR:H}),B=function(e){var t=e.classes;return Object(o.a)({root:["root"]},f,t)}(z),I=x.useRef("undefined"===typeof ResizeObserver?void 0:new ResizeObserver((function(e){if(e){var t,n,c,a,r,o,s,l,j,d;if(e[0].target.className.includes(B.root))t=e[0].target,c=e[0].contentRect.width,a=(null==(o=n=(null==(r=e[1])?void 0:r.target)||t.firstChild)||null==(s=o.contentRect)?void 0:s.width)||(null==(l=n)?void 0:l.clientWidth)||0;else n=e[0].target,a=e[0].contentRect.width,c=(null==(d=(t=(null==(j=e[1])?void 0:j.target)||n.parentElement).contentRect)?void 0:d.width)||t.clientWidth;if(0!==c&&0!==a&&t&&n){var u=window.getComputedStyle(n),b=g(u.marginLeft),h=g(u.marginRight),x=Math.round(c/(a+b+h)),O=new Array(x).fill(0),m=!1;if(t.childNodes.forEach((function(e){if(e.nodeType===Node.ELEMENT_NODE&&"line-break"!==e.dataset.class&&!m){var t=window.getComputedStyle(e),n=g(t.marginTop),c=g(t.marginBottom),a=g(t.height)?Math.ceil(g(t.height))+n+c:0;if(0!==a){for(var r=0;r<e.childNodes.length;r+=1){var o=e.childNodes[r];if("IMG"===o.tagName&&0===o.clientHeight){m=!0;break}}if(!m){var s=O.indexOf(Math.min.apply(Math,Object(i.a)(O)));O[s]+=a;var l=s+1;e.style.order=l}}else m=!0}})),!m)W(Math.max.apply(Math,Object(i.a)(O))),G(x>0?x-1:0)}}})));x.useEffect((function(){var e=I.current;if(void 0!==e){var t=N.current;return t&&e&&(e.observe(t),t.firstChild&&e.observe(t.firstChild)),function(){return e?e.disconnect():{}}}}),[m,k,s]);var P=Object(b.a)(t,N),_={flexBasis:"100%",width:0,margin:0,padding:0},q=new Array(L).fill("").map((function(e,t){return Object(p.jsx)("span",{"data-class":"line-break",style:Object(r.a)({},_,{order:t+1})},t)}));return Object(p.jsxs)(C,Object(r.a)({as:u,className:Object(h.a)(B.root,j),ref:P,ownerState:z},R,{children:[s,q]}))}));t.a=y},2848:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return $}));var i=n(12),c=n(269),a=n(1785),r=n(1843),o=n(47),s=n(671),l=n(1820),j=n(3),d=n(1),u=n(544),b=n(1744),h=n(2039),x=n(2265),O=n(2891),m=n(1798),f=n(1940),p=n(0);function v(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{variant:"outlined",color:"warning",onClick:function(){i(!0)},children:"Form Dialogs"}),Object(p.jsxs)(b.a,{open:n,onClose:c,children:[Object(p.jsx)(h.a,{children:"Subscribe"}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(O.a,{children:"To subscribe to this website, please enter your email address here. We will send updates occasionally."}),Object(p.jsx)(m.a,{autoFocus:!0,fullWidth:!0,type:"email",margin:"dense",variant:"outlined",label:"Email Address"})]}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{onClick:c,color:"inherit",children:"Cancel"}),Object(p.jsx)(u.a,{onClick:c,variant:"contained",children:"Subscribe"})]})]})]})}function g(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{color:"info",variant:"outlined",onClick:function(){i(!0)},children:"Open alert dialog"}),Object(p.jsxs)(b.a,{open:n,onClose:c,children:[Object(p.jsx)(h.a,{children:"Use Google's location service?"}),Object(p.jsx)(x.a,{children:Object(p.jsx)(O.a,{id:"alert-dialog-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{onClick:c,children:"Disagree"}),Object(p.jsx)(u.a,{onClick:c,autoFocus:!0,children:"Agree"})]})]})]})}var C=n(16);function y(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],c=Object(d.useState)("paper"),a=Object(j.a)(c,2),r=a[0],o=a[1],s=function(e){return function(){i(!0),o(e)}},l=function(){i(!1)},m=d.useRef<HTMLElement>null;return Object(d.useEffect)((function(){if(n){var e=m.current;null!==e&&e.focus()}}),[n]),Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{variant:"outlined",onClick:s("paper"),sx:{mr:2},children:"scroll=paper"}),Object(p.jsx)(u.a,{variant:"outlined",onClick:s("body"),children:"scroll=body"}),Object(p.jsxs)(b.a,{open:n,onClose:l,scroll:r,children:[Object(p.jsx)(h.a,{sx:{pb:2},children:"Subscribe"}),Object(p.jsx)(x.a,{dividers:"paper"===r,children:Object(p.jsx)(O.a,{id:"scroll-dialog-description",ref:m,tabIndex:-1,children:Object(C.a)(new Array(50)).map((function(){return"Cras mattis consectetur purus sit amet fermentum.\nCras justo odio, dapibus ac facilisis in, egestas eget quam.\nMorbi leo risus, porta ac consectetur ac, vestibulum at eros.\nPraesent commodo cursus magna, vel scelerisque nisl consectetur et."})).join("\n")})}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{onClick:l,children:"Cancel"}),Object(p.jsx)(u.a,{variant:"contained",onClick:l,children:"Subscribe"})]})]})]})}var k=n(407),w=n(1788),S=n(1741),M=n(1797),R=n(1010),N=n(1742),F=n(41),D=["username@gmail.com","user02@gmail.com"];function T(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(d.useState)(D[1]),r=Object(j.a)(a,2),o=r[0],s=r[1],l=function(e){i(!1),s(e)};return Object(p.jsxs)(c.a,{sx:{textAlign:"center"},children:[Object(p.jsxs)(k.a,{variant:"subtitle1",component:"div",children:["Selected: ",o]}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{variant:"outlined",onClick:function(){i(!0)},children:"Open simple dialog"}),Object(p.jsxs)(b.a,{open:n,onClose:function(){return l(o)},children:[Object(p.jsx)(h.a,{id:"simple-dialog-title",children:"Set backup account"}),Object(p.jsxs)(w.a,{children:[D.map((function(e){return Object(p.jsxs)(S.a,{onClick:function(){return l(e)},children:[Object(p.jsx)(M.a,{children:Object(p.jsx)(R.a,{sx:{color:"info.main",backgroundColor:"info.lighter"},children:Object(p.jsx)(F.a,{icon:"eva:person-fill"})})}),Object(p.jsx)(N.a,{primary:e})]},e)})),Object(p.jsxs)(S.a,{autoFocus:!0,onClick:function(){return l("addAccount")},children:[Object(p.jsx)(M.a,{children:Object(p.jsx)(R.a,{children:Object(p.jsx)(F.a,{icon:"eva:plus-fill"})})}),Object(p.jsx)(N.a,{primary:"Add account"})]})]})]})]})}var W=n(1800),H=n(1778),A=n(1773),E=n(1796),L=n(1803),G=n(1884);function z(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(d.useState)(!0),r=Object(j.a)(a,2),o=r[0],s=r[1],l=Object(d.useState)("sm"),m=Object(j.a)(l,2),v=m[0],g=m[1],C=function(){i(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{variant:"outlined",onClick:function(){i(!0)},children:"Max Width Dialog"}),Object(p.jsxs)(b.a,{open:n,maxWidth:v,onClose:C,fullWidth:o,children:[Object(p.jsx)(h.a,{children:"Optional sizes"}),Object(p.jsxs)(x.a,{children:[Object(p.jsx)(O.a,{children:"You can set my maximum width and whether to adapt or not."}),Object(p.jsxs)(c.a,{component:"form",noValidate:!0,sx:{margin:"auto",display:"flex",width:"fit-content",flexDirection:"column"},children:[Object(p.jsxs)(W.a,{sx:{mt:2,minWidth:120},children:[Object(p.jsx)(H.a,{htmlFor:"max-width",children:"maxWidth"}),Object(p.jsxs)(A.a,{autoFocus:!0,value:v,onChange:function(e){g(e.target.value)},label:"maxWidth",inputProps:{name:"max-width",id:"max-width"},children:[Object(p.jsx)(E.a,{value:!1,children:"false"}),Object(p.jsx)(E.a,{value:"xs",children:"xs"}),Object(p.jsx)(E.a,{value:"sm",children:"sm"}),Object(p.jsx)(E.a,{value:"md",children:"md"}),Object(p.jsx)(E.a,{value:"lg",children:"lg"}),Object(p.jsx)(E.a,{value:"xl",children:"xl"})]})]}),Object(p.jsx)(L.a,{control:Object(p.jsx)(G.a,{checked:o,onChange:function(e){s(e.target.checked)}}),label:"Full width",sx:{mt:1}})]})]}),Object(p.jsx)(f.a,{children:Object(p.jsx)(u.a,{onClick:C,variant:"contained",children:"Close"})})]})]})}var B=n(4),I=n(1659),P=n(1794),_=n(1793),q=n(1682),J=n(1653),U=Object(d.forwardRef)((function(e,t){return Object(p.jsx)(I.a,Object(B.a)({direction:"up",ref:t},e))}));function V(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{variant:"outlined",color:"error",onClick:function(){i(!0)},children:"Full Screen Dialogs"}),Object(p.jsxs)(b.a,{fullScreen:!0,open:n,onClose:c,TransitionComponent:U,children:[Object(p.jsx)(P.a,{position:"relative",children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)(q.a,{color:"inherit",edge:"start",onClick:c,children:Object(p.jsx)(F.a,{icon:"eva:close-fill"})}),Object(p.jsx)(k.a,{variant:"h6",sx:{flex:1,ml:2},children:"Sound"}),Object(p.jsx)(u.a,{autoFocus:!0,color:"inherit",onClick:c,children:"Save"})]})}),Object(p.jsxs)(w.a,{children:[Object(p.jsx)(S.a,{children:Object(p.jsx)(N.a,{primary:"Phone ringtone",secondary:"Titania"})}),Object(p.jsx)(J.a,{}),Object(p.jsx)(S.a,{children:Object(p.jsx)(N.a,{primary:"Default notification ringtone",secondary:"Tethys"})})]})]})]})}var Y=Object(d.forwardRef)((function(e,t){return Object(p.jsx)(I.a,Object(B.a)({direction:"up",ref:t},e))}));function K(){var e=Object(d.useState)(!1),t=Object(j.a)(e,2),n=t[0],i=t[1],c=function(){i(!1)};return Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{variant:"outlined",color:"success",onClick:function(){i(!0)},children:"Transitions Dialogs"}),Object(p.jsxs)(b.a,{open:n,TransitionComponent:Y,keepMounted:!0,onClose:c,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(p.jsx)(h.a,{id:"alert-dialog-slide-title",children:"Use Google's location service?"}),Object(p.jsx)(x.a,{children:Object(p.jsx)(O.a,{id:"alert-dialog-slide-description",children:"Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running."})}),Object(p.jsxs)(f.a,{children:[Object(p.jsx)(u.a,{color:"inherit",onClick:c,children:"Disagree"}),Object(p.jsx)(u.a,{variant:"contained",onClick:c,children:"Agree"})]})]})]})}var Q=n(1823),X={display:"flex",alignItems:"center",justifyContent:"center"},Z=Object(i.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function $(){return Object(p.jsx)(s.a,{title:"Components: Dialog",children:Object(p.jsxs)(Z,{children:[Object(p.jsx)(c.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(p.jsx)(a.a,{children:Object(p.jsx)(l.a,{heading:"Dialog",links:[{name:"Components",href:o.d.components},{name:"Dialog"}],moreLink:"https://mui.com/components/dialogs"})})}),Object(p.jsx)(a.a,{children:Object(p.jsxs)(r.a,{columns:{xs:1,md:3},spacing:3,children:[Object(p.jsx)(Q.a,{title:"Simple",sx:X,children:Object(p.jsx)(T,{})}),Object(p.jsx)(Q.a,{title:"Alerts",sx:X,children:Object(p.jsx)(g,{})}),Object(p.jsx)(Q.a,{title:"Transitions",sx:X,children:Object(p.jsx)(K,{})}),Object(p.jsx)(Q.a,{title:"Form",sx:X,children:Object(p.jsx)(v,{})}),Object(p.jsx)(Q.a,{title:"Full Screen",sx:X,children:Object(p.jsx)(V,{})}),Object(p.jsx)(Q.a,{title:"Max Width Dialog",sx:X,children:Object(p.jsx)(z,{})}),Object(p.jsx)(Q.a,{title:"Scrolling Content Dialogs",sx:X,children:Object(p.jsx)(y,{})})]})})]})})}}}]);
//# sourceMappingURL=73.760dd6ea.chunk.js.map