(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[21],{145:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var a=n(5),c=n(0),r=n(156),i=n(154),o=n(9),u=n(144),s=n(1);function l(t){var e=t.book,n=t.id,l=Object(c.useState)(""),j=Object(a.a)(l,2),b=j[0],f=j[1],d=Object(c.useState)(!0),O=Object(a.a)(d,2),g=O[0],h=O[1],p=Object(c.useState)(""),m=Object(a.a)(p,2),v=m[0],x=m[1];return Object(c.useEffect)((function(){return g&&(Object(u.c)(n).then((function(t){f(t)})),Object(u.b)(e.creator).then((function(t){x(t)}))),function(){h(!1)}}),[g,n,e.creator]),e.description.length>255&&(e.description=e.description.slice(0,256),e.description+="..."),Object(s.jsxs)(r.a,{style:{width:"90%",marginTop:"3%",marginLeft:"5%"},children:[Object(s.jsx)(i.a,{src:v,alt:"No avatar",className:"avatar",style:{marginLeft:"40%",marginTop:"5%"}}),Object(s.jsxs)(r.a.Body,{children:[Object(s.jsx)(r.a.Img,{src:b,style:{width:"29%"},alt:"No image"}),Object(s.jsx)(r.a.Title,{style:{marginTop:"1%"},children:e.title}),Object(s.jsx)(r.a.Text,{style:{wordBreak:"break-all"},children:e.description}),Object(s.jsx)(r.a.Link,{as:o.b,to:"/details/".concat(e._id),style:{color:"grey",textDecoration:"none"},children:"See more"})]})]})}},146:function(t,e,n){"use strict";n(0);var a=n(149),c=n.n(a),r=(n(153),n(1));e.a=function(t){var e=t.itemsCount,n=t.pageSize,a=t.currentPage,i=t.onPageChange,o=Math.ceil(e/n);if(1===o)return null;var u=c.a.range(1,o+1);return Object(r.jsx)("div",{className:"pagination",style:{marginTop:"5%"},children:u.map((function(t){return Object(r.jsx)("div",{href:null,onClick:function(){return i(t)},className:t===a?"active":"page-item",children:t},t)}))})}},147:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(5),c=n(0),r=n(149),i=n.n(r);function o(t){var e=Object(c.useState)(1),n=Object(a.a)(e,2),r=n[0],o=n[1],u=function(){var e=function(t,e,n){var a=(e-1)*n;return i()(t).slice(a).take(n).value()}(t,r,6);return{totalCount:t.length,data:e}}(),s=u.totalCount;return{data:u.data,totalCount:s,pageSize:6,currentPage:r,handlePageChange:function(t){o(t)}}}},153:function(t,e,n){},157:function(t,e,n){"use strict";function a(t,e){for(var n=[],a=0,c=t.length;a<c;)n.push(t.slice(a,a+=e));return n}n.d(e,"a",(function(){return a}))},158:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(2),c=n(38),r=n(3),i=n(1),o=function(t){return function(e){return null!==Object(c.c)((function(t){return t.user})).token?Object(i.jsx)(t,Object(a.a)({},e)):Object(i.jsx)(r.a,{to:"/login"})}}},223:function(t,e,n){"use strict";n.r(e);var a=n(5),c=n(0),r=n(145),i=n(146),o=n(147),u=n(173),s=n(158),l=n(157),j=n(1);e.default=Object(s.a)((function(){var t=Object(c.useState)(!0),e=Object(a.a)(t,2),n=e[0],s=e[1],b=Object(c.useState)([]),f=Object(a.a)(b,2),d=f[0],O=f[1],g=Object(o.a)(d),h=g.data,p=g.totalCount,m=g.pageSize,v=g.currentPage,x=g.handlePageChange;Object(c.useEffect)((function(){return n&&Object(u.c)().then((function(t){O(t||[])})),function(){s(!1)}}),[n]);var k=Object(l.a)(h,3);return d&&d.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Recommended books"}),k.map((function(t){return Object(j.jsx)("div",{style:{display:"flex",marginRight:"3%"},children:t.map((function(t){return Object(j.jsx)(r.a,{book:t,id:t._id},t._id)}))})})),Object(j.jsx)(i.a,{itemsCount:p,pageSize:m,currentPage:v,onPageChange:x}),"page ",v," of ",Math.ceil(p/m)]}):Object(j.jsx)("p",{children:"No books"})}))}}]);
//# sourceMappingURL=21.960858ab.chunk.js.map