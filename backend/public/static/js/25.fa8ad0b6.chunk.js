(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25],{179:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(5),a=n(53),i=n(9),c=n(1),o=function(e){return function(t){return null!==Object(a.c)((function(e){return e.user})).token?Object(c.jsx)(e,Object(r.a)({},t)):Object(c.jsx)(i.a,{to:"/login"})}}},182:function(e,t,n){"use strict";function r(e){return 0===e.length||void 0===e}function a(e,t){return e===t}function i(e,t){return e.length>=t}function c(e){return/^(https:|http:|www\.)\S*/gm.test(e)}function o(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"b",(function(){return o}))},188:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({});t.a=a},194:function(e,t,n){"use strict";var r=n(29),a=n(8),i=n(5),c=n(10),o=n(0),l=n(168),s=n(52),u=n(184),j=n(182),d=n(188),b=n(1);t.a=function(e){var t=e.tagsInput,n=Object(o.useContext)(d.a).setTags,h=Object(o.useState)({}),O=Object(c.a)(h,2),f=O[0],g=O[1],v=Object(o.useState)({}),p=Object(c.a)(v,2),x=p[0],y=p[1],w=function(){var e=f.genre,t={};return void 0!==e?Object(j.c)(e)&&(t.genre="Genre is required!"):t.title="Genre is required!",t};return Object(b.jsxs)(l.a,{onSubmit:function(e){e.preventDefault();var a=w();n([].concat(Object(r.a)(t),[f.genre])),Object.keys(a).length>0&&y(a)},children:[Object(b.jsx)(u.a,{tags:t,onChange:n,readOnly:!1,placeholder:"Genres will vizualize here"}),Object(b.jsx)(l.a.Control,{placeholder:"Enter genre",style:{marginTop:"5%"},onChange:function(e){return t="genre",n=e.target.value,g(Object(i.a)(Object(i.a)({},f),{},Object(a.a)({},t,n))),void(x[t]&&y(Object(i.a)(Object(i.a)({},x),{},Object(a.a)({},t,null))));var t,n},isInvalid:!!x.genre}),Object(b.jsx)(l.a.Control.Feedback,{type:"invalid",children:x.genre}),Object(b.jsx)(s.a,{type:"submit",style:{marginTop:"5%"},children:"Add genre"})]})}},195:function(e,t,n){"use strict";var r=n(10),a=n(0);t.a=function(){var e=function(){return window.innerWidth<767.98},t=Object(a.useState)(e()),n=Object(r.a)(t,2),i=n[0],c=n[1];return Object(a.useEffect)((function(){var t=function(){c(e)};return window.addEventListener("resize",t),window.addEventListener("orientationchange",t),window.addEventListener("load",t),window.addEventListener("reload",t),function(){window.removeEventListener("resize",t),window.removeEventListener("orientationchange",t),window.removeEventListener("load",t),window.removeEventListener("reload",t)}}),[]),i}},231:function(e,t,n){"use strict";n.r(t);var r=n(8),a=n(5),i=n(10),c=n(0),o=n(9),l=n(168),s=n(52),u=n(189),j=n(184),d=n(194),b=n(188),h=n(195),O=n(182),f=n(96),g=n(179),v=n(53),p=n(1);var x;t.default=Object(g.a)((x=function(){var e=Object(o.h)().id,t=Object(o.g)(),n=Object(h.a)(),g=Object(c.useState)({}),v=Object(i.a)(g,2),x=v[0],y=v[1],w=Object(c.useState)({}),m=Object(i.a)(w,2),C=m[0],L=m[1],k=Object(c.useState)([]),S=Object(i.a)(k,2),T=S[0],G=S[1],E=Object(c.useState)(null),I=Object(i.a)(E,2),q=I[0],z=I[1];Object(c.useEffect)((function(){Object(f.g)(e).then((function(e){G(e.genres),y(e)}))}),[e,t]),x.genres=T;var A=function(e,t){y(Object(a.a)(Object(a.a)({},x),{},Object(r.a)({},e,t))),C[e]&&L(Object(a.a)(Object(a.a)({},C),{},Object(r.a)({},e,null)))},F=function(n){n.preventDefault();var r=P();x.genres=T,Object.keys(r).length>0?L(r):Object(f.e)(e,x,q).then((function(e){t("/details/".concat(x._id))}))},P=function(){var e=x.title,t=x.author,n=x.description,r=(x.series,x.seriesRow,x.publisher),a=x.year,i={};return void 0!==e&&0!==e.length||(i.title="Title is required!"),void 0!==t&&0!==t.length||(i.author="Author is required!"),void 0!==n&&0!==n.length||(i.description="Description is required!"),void 0!==a?a<1950&&(i.year="Minimal value is 1950!"):i.year="Year is required!",void 0!==r?Object(O.c)(r)&&(i.publisher="Publisher is required!"):i.publisher="Publisher is required!",0===T.length&&(i.genre="There must be at least one genre!"),i};return Object(p.jsx)(b.a.Provider,{value:{setTags:G},children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"my-4 font-weight-bold .display-4",children:"Edit Book"}),Object(p.jsxs)(l.a,{onSubmit:F,children:[Object(p.jsxs)(u.a,{children:[Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"Title"}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("title",e.target.value)},placeholder:"Title",isInvalid:!!C.title,value:x.title}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:C.title})]}),Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"Author"}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("author",e.target.value)},placeholder:"Author",isInvalid:!!C.author,value:x.author}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:C.author})]})]}),Object(p.jsxs)(l.a.Group,{style:{marginTop:"5%"},children:[Object(p.jsx)(l.a.Label,{children:"Image (optional, original image won't be replaced)"}),Object(p.jsx)(l.a.Control,{type:"file",onChange:function(e){return z(e.target.files[0])}})]}),Object(p.jsxs)(l.a.Group,{style:{marginTop:"5%"},children:[Object(p.jsx)(l.a.Label,{children:"Description"}),Object(p.jsx)(l.a.Control,{as:"textarea",onChange:function(e){return A("description",e.target.value)},isInvalid:!!C.description,value:x.description}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:C.description})]})]}),Object(p.jsxs)("div",{style:{marginTop:"5%",width:"50%",marginLeft:"25%"},children:[Object(p.jsx)(l.a.Label,{children:"Genres"}),n?null:Object(p.jsx)(j.a,{tags:T,onChange:function(e){return G(e)},placeholder:"Enter genre and press enter"}),n?Object(p.jsx)(d.a,{tagsInput:T,onChange:G}):null,Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:C.genres})]}),Object(p.jsxs)(l.a,{onSubmit:F,children:[Object(p.jsxs)(u.a,{style:{marginTop:"5%"},children:[Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"Series"}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("series",e.target.value)},placeholder:"Series",value:x.series})]}),Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"Series Number"}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("seriesRow",e.target.value)},placeholder:"Series Number",type:"number",value:x.seriesRow})]})]}),Object(p.jsxs)(u.a,{style:{marginTop:"5%"},children:[Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"Year of Publishing*"}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("year",e.target.value)},placeholder:"Year of Publishing",isInvalid:!!C.year,type:"number",min:"1950",value:x.year}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:C.year})]}),Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"Publisher*"}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("publisher",e.target.value)},placeholder:"Publisher",isInvalid:!!C.publisher,value:x.publisher}),Object(p.jsx)(l.a.Control.Feedback,{type:"invalid",children:C.publisher})]})]}),Object(p.jsxs)(u.a,{style:{marginTop:"5%"},children:[Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"You can read the book online here: "}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("onlineLink",e.target.value)},placeholder:"Link to read online",defaultValue:x.onlineLink||""})]}),Object(p.jsxs)(l.a.Group,{style:{width:"50%",float:"left"},children:[Object(p.jsx)(l.a.Label,{children:"You can download the book here: "}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("downloadLink",e.target.value)},placeholder:"Link to download",defaultValue:x.downloadLink||""})]})]}),Object(p.jsxs)(l.a.Group,{style:{marginTop:"5%"},children:[Object(p.jsx)(l.a.Label,{children:"You can buy the book here: "}),Object(p.jsx)(l.a.Control,{onChange:function(e){return A("buyLink",e.target.value)},placeholder:"Link to buy",defaultValue:x.buyLink||""})]}),Object(p.jsx)(s.a,{type:"submit",style:{marginTop:"3%",marginBottom:"3%"},variant:"success",children:"Edit Book"})]})]})})},function(e){return Object(v.c)((function(e){return e.user})).username===localStorage.getItem("username")?Object(p.jsx)(x,Object(a.a)({},e)):Object(p.jsx)(o.a,{to:"/login"})}))}}]);
//# sourceMappingURL=25.fa8ad0b6.chunk.js.map