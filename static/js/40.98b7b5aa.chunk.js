(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[40],{1819:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(4),o=n(25),a=n(136),c=n(27),i=n(407),l=n(1824),s=n(269),u=n(1681),p=n(0),d=["links","activeLast"];function b(e){var t,n=e.links,c=e.activeLast,u=void 0!==c&&c,b=Object(o.a)(e,d),j=null===(t=Object(a.last)(n))||void 0===t?void 0:t.name,m=n.map((function(e){return Object(p.jsx)(f,{link:e},e.name)})),y=n.map((function(e){return Object(p.jsx)("div",{children:e.name!==j?Object(p.jsx)(f,{link:e}):Object(p.jsx)(i.a,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:j})},e.name)}));return Object(p.jsx)(l.a,Object(r.a)(Object(r.a)({separator:Object(p.jsx)(s.a,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},b),{},{children:u?m:y}))}function f(e){var t=e.link,n=t.href,r=t.name,o=t.icon;return Object(p.jsxs)(u.a,{variant:"body2",component:c.b,to:n||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[o&&Object(p.jsx)(s.a,{sx:{mr:1,"& svg":{width:20,height:20}},children:o}),r]},r)}},1820:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(4),o=n(25),a=n(136),c=n(269),i=n(407),l=n(1681),s=n(1819),u=n(0),p=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,n=e.action,d=e.heading,b=e.moreLink,f=void 0===b?[]:b,j=e.sx,m=Object(o.a)(e,p);return Object(u.jsxs)(c.a,{sx:Object(r.a)({mb:5},j),children:[Object(u.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(u.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(u.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:d}),Object(u.jsx)(s.a,Object(r.a)({links:t},m))]}),n&&Object(u.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(u.jsx)(c.a,{sx:{mt:2},children:Object(a.isString)(f)?Object(u.jsx)(l.a,{href:f,target:"_blank",rel:"noopener",variant:"body2",children:f}):f.map((function(e){return Object(u.jsx)(l.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},1824:function(e,t,n){"use strict";var r=n(16),o=n(3),a=n(10),c=n(2),i=n(13),l=n(1),s=(n(99),n(7),n(5)),u=n(300),p=n(12),d=n(18),b=n(407),f=n(98),j=n(59),m=n(0),y=Object(j.a)(Object(m.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=n(1675),O=Object(p.a)(h.a,{skipSx:!0})((function(e){var t=e.theme;return Object(c.a)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":Object(c.a)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":Object(c.a)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:Object(f.c)(t.palette.grey[200],.12)}:{backgroundColor:Object(f.c)(t.palette.grey[600],.12)})})})),g=Object(p.a)(y)({width:24,height:16});var v=function(e){var t=e;return Object(m.jsx)("li",{children:Object(m.jsx)(O,Object(c.a)({focusRipple:!0},e,{ownerState:t,children:Object(m.jsx)(g,{ownerState:t})}))})},x=n(179),C=n(192);function w(e){return Object(x.a)("MuiBreadcrumbs",e)}var k=Object(C.a)("MuiBreadcrumbs",["root","ol","li","separator"]),S=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],P=Object(p.a)(b.a,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[Object(a.a)({},"& .".concat(k.li),t.li),t.root]}})({}),R=Object(p.a)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),D=Object(p.a)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function T(e,t,n,r){return e.reduce((function(o,a,c){return c<e.length-1?o=o.concat(a,Object(m.jsx)(D,{"aria-hidden":!0,className:t,ownerState:r,children:n},"separator-".concat(c))):o.push(a),o}),[])}var E=l.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiBreadcrumbs"}),a=n.children,p=n.className,b=n.component,f=void 0===b?"nav":b,j=n.expandText,y=void 0===j?"Show path":j,h=n.itemsAfterCollapse,O=void 0===h?1:h,g=n.itemsBeforeCollapse,x=void 0===g?1:g,C=n.maxItems,k=void 0===C?8:C,D=n.separator,E=void 0===D?"/":D,_=Object(i.a)(n,S),A=l.useState(!1),B=Object(o.a)(A,2),I=B[0],M=B[1],N=Object(c.a)({},n,{component:f,expanded:I,expandText:y,itemsAfterCollapse:O,itemsBeforeCollapse:x,maxItems:k,separator:E}),L=function(e){var t=e.classes;return Object(u.a)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,t)}(N),U=l.useRef(null),z=l.Children.toArray(a).filter((function(e){return l.isValidElement(e)})).map((function(e,t){return Object(m.jsx)("li",{className:L.li,children:e},"child-".concat(t))}));return Object(m.jsx)(P,Object(c.a)({ref:t,component:f,color:"text.secondary",className:Object(s.a)(L.root,p),ownerState:N},_,{children:Object(m.jsx)(R,{className:L.ol,ref:U,ownerState:N,children:T(I||k&&z.length<=k?z:function(e){return x+O>=e.length?e:[].concat(Object(r.a)(e.slice(0,x)),[Object(m.jsx)(v,{"aria-label":y,onClick:function(){M(!0);var e=U.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],Object(r.a)(e.slice(e.length-O,e.length)))}(z),L.separator,E,N)})}))}));t.a=E},2082:function(e,t,n){"use strict";var r=n(2083).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},2083:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(1)),o=a(n(2084));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?b(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;s(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return j(b(n=p(this,(e=d(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,s=r.default.Children.only(i),u=(0,o.default)(a,l);c&&c(a,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),c&&u(n,c),t}(r.default.PureComponent);t.CopyToClipboard=m,j(m,"defaultProps",{onCopy:void 0,options:void 0})},2084:function(e,t,n){"use strict";var r=n(2085),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,i,l,s,u=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return u}},2085:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},2886:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(12),o=n(269),a=n(1785),c=n(1805),i=n(1808),l=n(47),s=n(671),u=n(4),p=n(3),d=n(25),b=n(1),f=n(193),j=n(2082),m=n(1798),y=n(1795),h=n(1678),O=n(1682),g=n(41),v=n(0),x=["value"];function C(e){var t=e.value,n=Object(d.a)(e,x),r=Object(f.b)().enqueueSnackbar,o=Object(b.useState)({value:t,copied:!1}),a=Object(p.a)(o,2),c=a[0],i=a[1];return Object(v.jsx)(m.a,Object(u.a)({fullWidth:!0,value:c.value,onChange:function(e){i({value:e.target.value,copied:!1})},InputProps:{endAdornment:Object(v.jsx)(y.a,{position:"end",children:Object(v.jsx)(j.CopyToClipboard,{text:c.value,onCopy:function(){i(Object(u.a)(Object(u.a)({},c),{},{copied:!0})),c.value&&r("Copied",{variant:"success"})},children:Object(v.jsx)(h.a,{title:"Copy",children:Object(v.jsx)(O.a,{children:Object(v.jsx)(g.a,{icon:"eva:copy-fill",width:24,height:24})})})})})}},n))}var w=n(1820),k=Object(r.a)("div")((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}}));function S(){return Object(v.jsx)(s.a,{title:"Components: Copy To Clipboard",children:Object(v.jsxs)(k,{children:[Object(v.jsx)(o.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(v.jsx)(a.a,{children:Object(v.jsx)(w.a,{heading:"Copy To Clipboard",links:[{name:"Components",href:l.d.components},{name:"Copy To Clipboard"}],moreLink:"https://www.npmjs.com/package/react-copy-to-clipboard"})})}),Object(v.jsx)(a.a,{children:Object(v.jsx)(c.a,{children:Object(v.jsx)(i.a,{children:Object(v.jsx)(C,{value:"https://www.npmjs.com/package/react-copy-to-clipboard"})})})})]})})}}}]);
//# sourceMappingURL=40.98b7b5aa.chunk.js.map