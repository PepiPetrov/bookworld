(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[9],{159:function(e,t,a){"use strict";var n=a(0),c=n.createContext({});t.a=c},161:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(0),s=a(159),i=a(1),o=["controlId","as"],l=r.forwardRef((function(e,t){var a=e.controlId,l=e.as,u=void 0===l?"div":l,d=Object(c.a)(e,o),b=Object(r.useMemo)((function(){return{controlId:a}}),[a]);return Object(i.jsx)(s.a.Provider,{value:b,children:Object(i.jsx)(u,Object(n.a)(Object(n.a)({},d),{},{ref:t}))})}));l.displayName="FormGroup",t.a=l},162:function(e,t,a){},163:function(e,t,a){e.exports={card:"BookItem_card__3WB3x"}},164:function(e,t,a){e.exports={"books-row":"BooksList_books-row__2-grT"}},165:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(10),c=a(0),r=a(160),s=a.n(r);function i(e){var t=Object(c.useState)(1),a=Object(n.a)(t,2),r=a[0],i=a[1],o=function(){var t=function(e,t,a){var n=(t-1)*a;return s()(e).slice(n).take(a).value()}(e,r,9);return{totalCount:e.length,data:t}}(),l=o.totalCount;return{data:o.data,totalCount:l,pageSize:9,currentPage:r,handlePageChange:function(e){i(e)}}}a(162);var o=a(1),l=function(e){var t=e.itemsCount,a=e.pageSize,n=e.currentPage,c=e.onPageChange,r=Math.ceil(t/a);if(1===r)return null;var i=s.a.range(1,r+1);return Object(o.jsx)("div",{className:"pagination",style:{marginTop:"5%"},children:i.map((function(e){return Object(o.jsx)("div",{href:null,onClick:function(){return c(e)},className:e===n?"active":"page-item",children:e},e)}))})},u=a(170),d=a(97),b=a(180),f=a(18),j=a(69),O=a(163),p=a.n(O);function m(e){var t=e.book,a=Object(c.useState)(""),r=Object(n.a)(a,2),s=r[0],i=r[1],l=Object(c.useState)(!0),O=Object(n.a)(l,2),m=O[0],v=O[1],h=Object(c.useState)(""),x=Object(n.a)(h,2),y=x[0],g=x[1],N=b(t.createdOn).format("DD/MM/YYYY h:mm A");return Object(c.useEffect)((function(){return m&&(Object(j.c)(t._id).then((function(e){i(e)})),Object(j.b)(t.creator).then((function(e){g(e)}))),""===y&&g("https://media.istockphoto.com/illustrations/blank-man-profile-head-icon-placeholder-illustration-id1298261537?k=20&m=1298261537&s=612x612&w=0&h=8plXnK6Ur3LGqG9s-Xt2ZZfKk6bI0IbzDZrNH9tr9Ok="),function(){v(!1)}}),[m,t._id,t.creator,y]),t.description.length>255&&(t.description=t.description.slice(0,256),t.description+="..."),Object(o.jsxs)(u.a,{className:p.a.card,children:[Object(o.jsx)(d.a,{src:y,alt:"No avatar",className:"avatar",style:{marginLeft:"36%",marginTop:"5%"}}),Object(o.jsxs)(u.a.Body,{children:[Object(o.jsx)(u.a.Img,{src:s,style:{width:"60%",height:"40%"},alt:"No image"}),Object(o.jsx)(u.a.Title,{style:{marginTop:"5%",textDecoration:"underline",fontSize:"20px"},children:Object(o.jsx)(f.b,{to:"/details/".concat(t._id),style:{color:"grey"},children:t.title})}),Object(o.jsxs)(u.a.Text,{style:{fontSize:"12px"},children:["Book added on ",N," ",Object(o.jsxs)(f.b,{to:"/user/".concat(t.creator),style:{fontSize:"12px",color:"black"},children:[" by ",t.creator]})]}),t.likes?Object(o.jsxs)(u.a.Text,{style:{fontSize:"12px"},children:[t.likes.length," like",t.likes.length>1?"s":""]}):Object(o.jsx)(u.a.Text,{style:{fontSize:"12px"},children:"0 likes"}),Object(o.jsx)(u.a.Text,{style:{wordBreak:"break-all",fontSize:"15px"},children:t.description}),Object(o.jsx)(u.a.Link,{as:f.b,to:"/details/".concat(t._id),style:{color:"grey",textDecoration:"none",fontSize:"15px"},children:"See more..."})]})]})}var v=a(164),h=a.n(v);function x(e){var t=e.books,a=i(t||[]),n=a.data,c=a.totalCount,r=a.pageSize,s=a.currentPage,u=a.handlePageChange,d=function(e,t){for(var a=[],n=0,c=e.length;n<c;)a.push(e.slice(n,n+=t));return a}(n,3);return Object(o.jsxs)(o.Fragment,{children:[d.map((function(e){return Object(o.jsx)("div",{className:h.a["books-row"],"data-testid":"booksrow",children:e.map((function(e){return Object(o.jsx)(m,{book:e},e._id)}))},e[0]._id)})),Object(o.jsx)(l,{itemsCount:c,pageSize:r,currentPage:s,onPageChange:u})]})}},166:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=a(167),l=a(178),u=a(159),d=a(14),b=a(1),f=["bsPrefix","className","htmlFor"],j=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.htmlFor,l=Object(c.a)(e,f),j=Object(i.useContext)(u.a).controlId;return a=Object(d.b)(a,"form-check-label"),Object(b.jsx)("label",Object(n.a)(Object(n.a)({},l),{},{ref:t,htmlFor:o||j,className:s()(r,a)}))}));j.displayName="FormCheckLabel";var O=j,p=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],m=i.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,f=e.bsSwitchPrefix,j=e.inline,m=void 0!==j&&j,v=e.disabled,h=void 0!==v&&v,x=e.isValid,y=void 0!==x&&x,g=e.isInvalid,N=void 0!==g&&g,k=e.feedbackTooltip,w=void 0!==k&&k,C=e.feedback,P=e.feedbackType,S=e.className,I=e.style,F=e.title,z=void 0===F?"":F,L=e.type,T=void 0===L?"checkbox":L,R=e.label,_=e.children,V=e.as,B=void 0===V?"input":V,D=Object(c.a)(e,p);r=Object(d.b)(r,"form-check"),f=Object(d.b)(f,"form-switch");var G=Object(i.useContext)(u.a).controlId,M=Object(i.useMemo)((function(){return{controlId:a||G}}),[G,a]),H=null!=R&&!1!==R&&!_,K=Object(b.jsx)(l.a,Object(n.a)(Object(n.a)({},D),{},{type:"switch"===T?"checkbox":T,ref:t,isValid:y,isInvalid:N,disabled:h,as:B}));return Object(b.jsx)(u.a.Provider,{value:M,children:Object(b.jsx)("div",{style:I,className:s()(S,R&&r,m&&"".concat(r,"-inline"),"switch"===T&&f),children:_||Object(b.jsxs)(b.Fragment,{children:[K,H&&Object(b.jsx)(O,{title:z,children:R}),C&&Object(b.jsx)(o.a,{type:P,tooltip:w,children:C})]})})})}));m.displayName="FormCheck";t.a=Object.assign(m,{Input:l.a,Label:O})},167:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=a(32),l=a.n(o),u=a(1),d=["as","className","type","tooltip"],b={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},f=i.forwardRef((function(e,t){var a=e.as,r=void 0===a?"div":a,i=e.className,o=e.type,l=void 0===o?"valid":o,b=e.tooltip,f=void 0!==b&&b,j=Object(c.a)(e,d);return Object(u.jsx)(r,Object(n.a)(Object(n.a)({},j),{},{ref:t,className:s()(i,"".concat(l,"-").concat(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=b,t.a=f},168:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(32),o=a.n(i),l=a(0),u=a(166),d=a(172),b=a(173),f=a(161),j=a(174),O=a(14),p=a(159),m=a(1),v=["bsPrefix","className","id"],h=l.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.id,o=Object(c.a)(e,v),u=Object(l.useContext)(p.a).controlId;return a=Object(O.b)(a,"form-range"),Object(m.jsx)("input",Object(n.a)(Object(n.a)({},o),{},{type:"range",ref:t,className:s()(r,a),id:i||u}))}));h.displayName="FormRange";var x=h,y=a(176),g=a(175),N=l.forwardRef((function(e,t){return Object(m.jsx)(u.a,Object(n.a)(Object(n.a)({},e),{},{ref:t,type:"switch"}))}));N.displayName="Switch";var k=Object.assign(N,{Input:u.a.Input,Label:u.a.Label}),w=a(177),C=["className","validated","as"],P={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},S=l.forwardRef((function(e,t){var a=e.className,r=e.validated,i=e.as,o=void 0===i?"form":i,l=Object(c.a)(e,C);return Object(m.jsx)(o,Object(n.a)(Object(n.a)({},l),{},{ref:t,className:s()(a,r&&"was-validated")}))}));S.displayName="Form",S.propTypes=P;t.a=Object.assign(S,{Group:f.a,Control:d.a,Floating:b.a,Check:u.a,Switch:k,Label:j.a,Text:g.a,Range:x,Select:y.a,FloatingLabel:w.a})},169:function(e,t,a){"use strict";a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b})),a.d(t,"c",(function(){return j}));var n=a(6),c=a.n(n),r=a(15),s=a(13),i=a(96);function o(e){return l.apply(this,arguments)}function l(){return(l=Object(s.a)(c.a.mark((function e(t){var a,n,s,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)();case 2:if(a=e.sent,n=[],null!==a){s=Object(r.a)(a);try{for(s.s();!(o=s.n()).done;)(l=o.value).title.toLowerCase().includes(t.toLowerCase())&&n.push(l)}catch(c){s.e(c)}finally{s.f()}n.sort((function(e,t){return e.title.localeCompare(t.title)}))}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return d.apply(this,arguments)}function d(){return(d=Object(s.a)(c.a.mark((function e(t){var a,n,s,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)();case 2:if(a=e.sent,n=[],null!==a){s=Object(r.a)(a);try{for(s.s();!(o=s.n()).done;)(l=o.value).author.toLowerCase().includes(t.toLowerCase())&&n.push(l)}catch(c){s.e(c)}finally{s.f()}n.sort((function(e,t){return e.title.localeCompare(t.title)}))}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return f.apply(this,arguments)}function f(){return(f=Object(s.a)(c.a.mark((function e(t){var a,n,s,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)();case 2:if(a=e.sent,n=[],null!==a){s=Object(r.a)(a);try{for(s.s();!(o=s.n()).done;)l=o.value,l.genres.map((function(e){return e.toLowerCase()})).filter((function(e){return e.includes(t.toLowerCase())})).length>0&&n.push(l)}catch(c){s.e(c)}finally{s.f()}n.sort((function(e,t){return e.title.localeCompare(t.title)}))}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return O.apply(this,arguments)}function O(){return(O=Object(s.a)(c.a.mark((function e(t){var a,n,s,o,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(i.f)();case 2:if(a=e.sent,n=[],null!==a){s=Object(r.a)(a);try{for(s.s();!(o=s.n()).done;)(l=o.value).series&&l.series.toLowerCase().includes(t.toLowerCase())&&n.push(l)}catch(c){s.e(c)}finally{s.f()}n.sort((function(e,t){return e.seriesRow-t.seriesRow}))}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},171:function(e,t,a){"use strict";a.d(t,"b",(function(){return j}));var n=a(10),c=a(5),r=a(11),s=a(12),i=a.n(s),o=a(0),l=a(14),u=a(1),d=["as","bsPrefix","className"],b=["className"],f=["xxl","xl","lg","md","sm","xs"];function j(e){var t=e.as,a=e.bsPrefix,n=e.className,s=Object(r.a)(e,d);a=Object(l.b)(a,"col");var o=[],u=[];return f.forEach((function(e){var t,n,c,r=s[e];delete s[e],"object"===typeof r&&null!=r?(t=r.span,n=r.offset,c=r.order):t=r;var i="xs"!==e?"-".concat(e):"";t&&o.push(!0===t?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(t)),null!=c&&u.push("order".concat(i,"-").concat(c)),null!=n&&u.push("offset".concat(i,"-").concat(n))})),[Object(c.a)(Object(c.a)({},s),{},{className:i.a.apply(void 0,[n].concat(o,u))}),{as:t,bsPrefix:a,spans:o}]}var O=o.forwardRef((function(e,t){var a=j(e),s=Object(n.a)(a,2),o=s[0],l=o.className,d=Object(r.a)(o,b),f=s[1],O=f.as,p=void 0===O?"div":O,m=f.bsPrefix,v=f.spans;return Object(u.jsx)(p,Object(c.a)(Object(c.a)({},d),{},{ref:t,className:i()(l,!v.length&&m)}))}));O.displayName="Col",t.a=O},172:function(e,t,a){"use strict";var n=a(5),c=a(8),r=a(11),s=a(12),i=a.n(s),o=a(0),l=(a(89),a(167)),u=a(159),d=a(14),b=a(1),f=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],j=o.forwardRef((function(e,t){var a,s,l=e.bsPrefix,j=e.type,O=e.size,p=e.htmlSize,m=e.id,v=e.className,h=e.isValid,x=void 0!==h&&h,y=e.isInvalid,g=void 0!==y&&y,N=e.plaintext,k=e.readOnly,w=e.as,C=void 0===w?"input":w,P=Object(r.a)(e,f),S=Object(o.useContext)(u.a).controlId;(l=Object(d.b)(l,"form-control"),N)?a=Object(c.a)({},"".concat(l,"-plaintext"),!0):(s={},Object(c.a)(s,l,!0),Object(c.a)(s,"".concat(l,"-").concat(O),O),a=s);return Object(b.jsx)(C,Object(n.a)(Object(n.a)({},P),{},{type:j,size:p,ref:t,readOnly:k,id:m||S,className:i()(v,a,x&&"is-valid",g&&"is-invalid","color"===j&&"".concat(l,"-color"))}))}));j.displayName="FormControl",t.a=Object.assign(j,{Feedback:l.a})},173:function(e,t,a){"use strict";var n=a(31);t.a=Object(n.a)("form-floating")},174:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=(a(89),a(171)),l=a(159),u=a(14),d=a(1),b=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],f=i.forwardRef((function(e,t){var a=e.as,r=void 0===a?"label":a,f=e.bsPrefix,j=e.column,O=e.visuallyHidden,p=e.className,m=e.htmlFor,v=Object(c.a)(e,b),h=Object(i.useContext)(l.a).controlId;f=Object(u.b)(f,"form-label");var x="col-form-label";"string"===typeof j&&(x="".concat(x," ").concat(x,"-").concat(j));var y=s()(p,f,O&&"visually-hidden",j&&x);return m=m||h,j?Object(d.jsx)(o.a,Object(n.a)({ref:t,as:"label",className:y,htmlFor:m},v)):Object(d.jsx)(r,Object(n.a)({ref:t,className:y,htmlFor:m},v))}));f.displayName="FormLabel",f.defaultProps={column:!1,visuallyHidden:!1},t.a=f},175:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=a(14),l=a(1),u=["bsPrefix","className","as","muted"],d=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,d=void 0===i?"small":i,b=e.muted,f=Object(c.a)(e,u);return a=Object(o.b)(a,"form-text"),Object(l.jsx)(d,Object(n.a)(Object(n.a)({},f),{},{ref:t,className:s()(r,a,b&&"text-muted")}))}));d.displayName="FormText",t.a=d},176:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=a(14),l=a(159),u=a(1),d=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],b=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.size,b=e.htmlSize,f=e.className,j=e.isValid,O=void 0!==j&&j,p=e.isInvalid,m=void 0!==p&&p,v=e.id,h=Object(c.a)(e,d),x=Object(i.useContext)(l.a).controlId;return a=Object(o.b)(a,"form-select"),Object(u.jsx)("select",Object(n.a)(Object(n.a)({},h),{},{size:b,ref:t,className:s()(f,a,r&&"".concat(a,"-").concat(r),O&&"is-valid",m&&"is-invalid"),id:v||x}))}));b.displayName="FormSelect",t.a=b},177:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=a(161),l=a(14),u=a(1),d=["bsPrefix","className","children","controlId","label"],b=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.children,b=e.controlId,f=e.label,j=Object(c.a)(e,d);return a=Object(l.b)(a,"form-floating"),Object(u.jsxs)(o.a,Object(n.a)(Object(n.a)({ref:t,className:s()(r,a),controlId:b},j),{},{children:[i,Object(u.jsx)("label",{htmlFor:b,children:f})]}))}));b.displayName="FloatingLabel",t.a=b},178:function(e,t,a){"use strict";var n=a(5),c=a(11),r=a(12),s=a.n(r),i=a(0),o=a(159),l=a(14),u=a(1),d=["id","bsPrefix","className","type","isValid","isInvalid","as"],b=i.forwardRef((function(e,t){var a=e.id,r=e.bsPrefix,b=e.className,f=e.type,j=void 0===f?"checkbox":f,O=e.isValid,p=void 0!==O&&O,m=e.isInvalid,v=void 0!==m&&m,h=e.as,x=void 0===h?"input":h,y=Object(c.a)(e,d),g=Object(i.useContext)(o.a).controlId;return r=Object(l.b)(r,"form-check-input"),Object(u.jsx)(x,Object(n.a)(Object(n.a)({},y),{},{ref:t,type:j,id:a||g,className:s()(b,r,p&&"is-valid",v&&"is-invalid")}))}));b.displayName="FormCheckInput",t.a=b},228:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a(8),c=a(5),r=a(10),s=a(0),i=a(168),o=a(52),l=a(165),u=a(169),d=a(1);function b(){var e=Object(s.useState)({}),t=Object(r.a)(e,2),a=t[0],b=t[1],f=Object(s.useState)({}),j=Object(r.a)(f,2),O=j[0],p=j[1],m=Object(s.useState)([]),v=Object(r.a)(m,2),h=v[0],x=v[1],y=Object(s.useState)(!1),g=Object(r.a)(y,2),N=g[0],k=g[1],w=Object(s.useState)(!1),C=Object(r.a)(w,2),P=C[0],S=C[1],I=Object(s.useState)(!1),F=Object(r.a)(I,2),z=F[0],L=F[1],T=function(){var e=a.keyword,t={};return void 0!==e&&""!==e||(t.keyword="Keyword is required!"),t};return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"my-4 font-weight-bold .display-4",children:"Search by series"}),Object(d.jsxs)(i.a,{onSubmit:function(e){e.preventDefault();var t=T();Object.keys(t).length>0?p(t):(L(!0),Object(u.c)(a.keyword).then((function(e){x(e),e.length>0&&k(!0),S(!0),L(!1)})))},style:{width:"50%",marginLeft:"27%"},"data-testid":"form",children:[Object(d.jsxs)(i.a.Group,{children:[Object(d.jsx)(i.a.Control,{onChange:function(e){return t="keyword",r=e.target.value,b(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},t,r))),void(O[t]&&p(Object(c.a)(Object(c.a)({},O),{},Object(n.a)({},t,null))));var t,r},placeholder:"Keyword",isInvalid:!!O.keyword,role:"input"}),Object(d.jsx)(i.a.Control.Feedback,{type:"invalid",role:"invalid-input",children:O.keyword})]}),Object(d.jsx)(o.a,{type:"submit",style:{marginTop:"10%"},children:"Search"})]}),P?N?Object(d.jsx)(l.a,{books:h}):Object(d.jsx)("p",{style:{marginTop:"3%"},children:"No results"}):z?Object(d.jsx)("p",{children:"Loading results..."}):null]})}}}]);
//# sourceMappingURL=9.493f2c8f.chunk.js.map