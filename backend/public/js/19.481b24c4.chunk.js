(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[19],{145:function(t,e,n){"use strict";n.d(e,"a",(function(){return j}));var a=n(5),c=n(0),r=n(156),i=n(154),o=n(9),u=n(144),s=n(1);function j(t){var e=t.book,n=t.id,j=Object(c.useState)(""),l=Object(a.a)(j,2),b=l[0],f=l[1],d=Object(c.useState)(!0),O=Object(a.a)(d,2),g=O[0],h=O[1],p=Object(c.useState)(""),v=Object(a.a)(p,2),m=v[0],x=v[1];return Object(c.useEffect)((function(){return g&&(Object(u.c)(n).then((function(t){f(t)})),Object(u.b)(e.creator).then((function(t){x(t)}))),function(){h(!1)}}),[g,n,e.creator]),e.description.length>255&&(e.description=e.description.slice(0,256),e.description+="..."),Object(s.jsxs)(r.a,{style:{width:"90%",marginTop:"3%",marginLeft:"5%"},children:[Object(s.jsx)(i.a,{src:m,alt:"No avatar",className:"avatar",style:{marginLeft:"40%",marginTop:"5%"}}),Object(s.jsxs)(r.a.Body,{children:[Object(s.jsx)(r.a.Img,{src:b,style:{width:"29%"},alt:"No image"}),Object(s.jsx)(r.a.Title,{style:{marginTop:"1%"},children:e.title}),Object(s.jsx)(r.a.Text,{style:{wordBreak:"break-all"},children:e.description}),Object(s.jsx)(r.a.Link,{as:o.b,to:"/details/".concat(e._id),style:{color:"grey",textDecoration:"none"},children:"See more"})]})]})}},146:function(t,e,n){"use strict";n(0);var a=n(149),c=n.n(a),r=(n(153),n(1));e.a=function(t){var e=t.itemsCount,n=t.pageSize,a=t.currentPage,i=t.onPageChange,o=Math.ceil(e/n);if(1===o)return null;var u=c.a.range(1,o+1);return Object(r.jsx)("div",{className:"pagination",style:{marginTop:"5%"},children:u.map((function(t){return Object(r.jsx)("div",{href:null,onClick:function(){return i(t)},className:t===a?"active":"page-item",children:t},t)}))})}},147:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(5),c=n(0),r=n(149),i=n.n(r);function o(t){var e=Object(c.useState)(1),n=Object(a.a)(e,2),r=n[0],o=n[1],u=function(){var e=function(t,e,n){var a=(e-1)*n;return i()(t).slice(a).take(n).value()}(t,r,6);return{totalCount:t.length,data:e}}(),s=u.totalCount;return{data:u.data,totalCount:s,pageSize:6,currentPage:r,handlePageChange:function(t){o(t)}}}},153:function(t,e,n){},157:function(t,e,n){"use strict";function a(t,e){for(var n=[],a=0,c=t.length;a<c;)n.push(t.slice(a,a+=e));return n}n.d(e,"a",(function(){return a}))},158:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(2),c=n(38),r=n(3),i=n(1),o=function(t){return function(e){return null!==Object(c.c)((function(t){return t.user})).token?Object(i.jsx)(t,Object(a.a)({},e)):Object(i.jsx)(r.a,{to:"/login"})}}},220:function(t,e,n){"use strict";n.r(e);var a=n(47),c=n(5),r=n(0),i=n(147),o=n(146),u=n(145),s=n(173),j=n(150),l=n(158),b=n(157),f=n(1);e.default=Object(l.a)((function(){var t=Object(r.useState)([]),e=Object(c.a)(t,2),n=e[0],l=e[1],d=Object(r.useState)([]),O=Object(c.a)(d,2),g=O[0],h=O[1],p=Object(r.useState)(!0),v=Object(c.a)(p,2),m=v[0],x=v[1],k=Object(i.a)(g),S=k.data,y=k.totalCount,C=k.pageSize,P=k.currentPage,N=k.handlePageChange;Object(r.useEffect)((function(){return m&&(Object(s.d)().then((function(t){l(t)})),n.map((function(t){return Object(j.g)(t).then((function(t){h([].concat(Object(a.a)(g),[t]))})),null}))),function(){x(!1)}}));var T=Object(b.a)(S,3);return n&&n.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Favoruite books"}),T.map((function(t){return Object(f.jsx)("div",{style:{display:"flex",marginRight:"3%"},children:t.map((function(t){return Object(f.jsx)(u.a,{book:t,id:t._id},t._id)}))},t)})),Object(f.jsx)(o.a,{itemsCount:y,pageSize:C,currentPage:P,onPageChange:N}),"page ",P," of ",Math.ceil(y/C)]}):Object(f.jsx)("p",{children:"No favourite books"})}))}}]);
//# sourceMappingURL=19.481b24c4.chunk.js.map