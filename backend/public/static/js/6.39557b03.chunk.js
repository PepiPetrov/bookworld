(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{140:function(e,a,t){"use strict";var c=t(0),r=c.createContext({});a.a=r},143:function(e,a,t){"use strict";var c=t(174),r=Object(c.a)({apiKey:"AIzaSyBBl57WBHwYa-9WHvsRUv62BQ2XgY41J3I",authDomain:"books-320707.firebaseapp.com",databaseURL:"https://books-320707-default-rtdb.firebaseio.com",projectId:"books-320707",storageBucket:"books-320707.appspot.com",messagingSenderId:"814577049102",appId:"1:814577049102:web:057ae971e150c9dc11665f",measurementId:"G-5QSKEG5MJ7"});a.a=r},144:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(0),n=t(140),i=t(1),o=["controlId","as"],l=s.forwardRef((function(e,a){var t=e.controlId,l=e.as,b=void 0===l?"div":l,d=Object(r.a)(e,o),f=Object(s.useMemo)((function(){return{controlId:t}}),[t]);return Object(i.jsx)(n.a.Provider,{value:f,children:Object(i.jsx)(b,Object(c.a)(Object(c.a)({},d),{},{ref:a}))})}));l.displayName="FormGroup",a.a=l},146:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=t(148),l=t(157),b=t(140),d=t(7),f=t(1),u=["bsPrefix","className","htmlFor"],j=i.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,o=e.htmlFor,l=Object(r.a)(e,u),j=Object(i.useContext)(b.a).controlId;return t=Object(d.b)(t,"form-check-label"),Object(f.jsx)("label",Object(c.a)(Object(c.a)({},l),{},{ref:a,htmlFor:o||j,className:n()(s,t)}))}));j.displayName="FormCheckLabel";var m=j,O=["id","bsPrefix","bsSwitchPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],v=i.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,u=e.bsSwitchPrefix,j=e.inline,v=void 0!==j&&j,p=e.disabled,x=void 0!==p&&p,h=e.isValid,y=void 0!==h&&h,N=e.isInvalid,k=void 0!==N&&N,w=e.feedbackTooltip,I=void 0!==w&&w,P=e.feedback,g=e.feedbackType,F=e.className,R=e.style,C=e.title,S=void 0===C?"":C,z=e.type,T=void 0===z?"checkbox":z,L=e.label,V=e.children,E=e.as,U=void 0===E?"input":E,B=Object(r.a)(e,O);s=Object(d.b)(s,"form-check"),u=Object(d.b)(u,"form-switch");var H=Object(i.useContext)(b.a).controlId,G=Object(i.useMemo)((function(){return{controlId:t||H}}),[H,t]),J=null!=L&&!1!==L&&!V,M=Object(f.jsx)(l.a,Object(c.a)(Object(c.a)({},B),{},{type:"switch"===T?"checkbox":T,ref:a,isValid:y,isInvalid:k,disabled:x,as:U}));return Object(f.jsx)(b.a.Provider,{value:G,children:Object(f.jsx)("div",{style:R,className:n()(F,L&&s,v&&"".concat(s,"-inline"),"switch"===T&&u),children:V||Object(f.jsxs)(f.Fragment,{children:[M,J&&Object(f.jsx)(m,{title:S,children:L}),P&&Object(f.jsx)(o.a,{type:g,tooltip:I,children:P})]})})})}));v.displayName="FormCheck";a.a=Object.assign(v,{Input:l.a,Label:m})},147:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(36),o=t.n(i),l=t(0),b=t(146),d=t(151),f=t(152),u=t(144),j=t(153),m=t(7),O=t(140),v=t(1),p=["bsPrefix","className","id"],x=l.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.id,o=Object(r.a)(e,p),b=Object(l.useContext)(O.a).controlId;return t=Object(m.b)(t,"form-range"),Object(v.jsx)("input",Object(c.a)(Object(c.a)({},o),{},{type:"range",ref:a,className:n()(s,t),id:i||b}))}));x.displayName="FormRange";var h=x,y=t(155),N=t(154),k=l.forwardRef((function(e,a){return Object(v.jsx)(b.a,Object(c.a)(Object(c.a)({},e),{},{ref:a,type:"switch"}))}));k.displayName="Switch";var w=Object.assign(k,{Input:b.a.Input,Label:b.a.Label}),I=t(156),P=["className","validated","as"],g={_ref:o.a.any,validated:o.a.bool,as:o.a.elementType},F=l.forwardRef((function(e,a){var t=e.className,s=e.validated,i=e.as,o=void 0===i?"form":i,l=Object(r.a)(e,P);return Object(v.jsx)(o,Object(c.a)(Object(c.a)({},l),{},{ref:a,className:n()(t,s&&"was-validated")}))}));F.displayName="Form",F.propTypes=g;a.a=Object.assign(F,{Group:u.a,Control:d.a,Floating:f.a,Check:b.a,Switch:w,Label:j.a,Text:N.a,Range:h,Select:y.a,FloatingLabel:I.a})},148:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=t(36),l=t.n(o),b=t(1),d=["as","className","type","tooltip"],f={type:l.a.string,tooltip:l.a.bool,as:l.a.elementType},u=i.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,i=e.className,o=e.type,l=void 0===o?"valid":o,f=e.tooltip,u=void 0!==f&&f,j=Object(r.a)(e,d);return Object(b.jsx)(s,Object(c.a)(Object(c.a)({},j),{},{ref:a,className:n()(i,"".concat(l,"-").concat(u?"tooltip":"feedback"))}))}));u.displayName="Feedback",u.propTypes=f,a.a=u},149:function(e,a,t){"use strict";t.d(a,"b",(function(){return j}));var c=t(5),r=t(2),s=t(4),n=t(6),i=t.n(n),o=t(0),l=t(7),b=t(1),d=["as","bsPrefix","className"],f=["className"],u=["xxl","xl","lg","md","sm","xs"];function j(e){var a=e.as,t=e.bsPrefix,c=e.className,n=Object(s.a)(e,d);t=Object(l.b)(t,"col");var o=[],b=[];return u.forEach((function(e){var a,c,r,s=n[e];delete n[e],"object"===typeof s&&null!=s?(a=s.span,c=s.offset,r=s.order):a=s;var i="xs"!==e?"-".concat(e):"";a&&o.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=r&&b.push("order".concat(i,"-").concat(r)),null!=c&&b.push("offset".concat(i,"-").concat(c))})),[Object(r.a)(Object(r.a)({},n),{},{className:i.a.apply(void 0,[c].concat(o,b))}),{as:a,bsPrefix:t,spans:o}]}var m=o.forwardRef((function(e,a){var t=j(e),n=Object(c.a)(t,2),o=n[0],l=o.className,d=Object(s.a)(o,f),u=n[1],m=u.as,O=void 0===m?"div":m,v=u.bsPrefix,p=u.spans;return Object(b.jsx)(O,Object(r.a)(Object(r.a)({},d),{},{ref:a,className:i()(l,!p.length&&v)}))}));m.displayName="Col",a.a=m},151:function(e,a,t){"use strict";var c=t(2),r=t(8),s=t(4),n=t(6),i=t.n(n),o=t(0),l=(t(73),t(148)),b=t(140),d=t(7),f=t(1),u=["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"],j=o.forwardRef((function(e,a){var t,n,l=e.bsPrefix,j=e.type,m=e.size,O=e.htmlSize,v=e.id,p=e.className,x=e.isValid,h=void 0!==x&&x,y=e.isInvalid,N=void 0!==y&&y,k=e.plaintext,w=e.readOnly,I=e.as,P=void 0===I?"input":I,g=Object(s.a)(e,u),F=Object(o.useContext)(b.a).controlId;(l=Object(d.b)(l,"form-control"),k)?t=Object(r.a)({},"".concat(l,"-plaintext"),!0):(n={},Object(r.a)(n,l,!0),Object(r.a)(n,"".concat(l,"-").concat(m),m),t=n);return Object(f.jsx)(P,Object(c.a)(Object(c.a)({},g),{},{type:j,size:O,ref:a,readOnly:w,id:v||F,className:i()(p,t,h&&"is-valid",N&&"is-invalid","color"===j&&"".concat(l,"-color"))}))}));j.displayName="FormControl",a.a=Object.assign(j,{Feedback:l.a})},152:function(e,a,t){"use strict";var c=t(19);a.a=Object(c.a)("form-floating")},153:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=(t(73),t(149)),l=t(140),b=t(7),d=t(1),f=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],u=i.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,u=e.bsPrefix,j=e.column,m=e.visuallyHidden,O=e.className,v=e.htmlFor,p=Object(r.a)(e,f),x=Object(i.useContext)(l.a).controlId;u=Object(b.b)(u,"form-label");var h="col-form-label";"string"===typeof j&&(h="".concat(h," ").concat(h,"-").concat(j));var y=n()(O,u,m&&"visually-hidden",j&&h);return v=v||x,j?Object(d.jsx)(o.a,Object(c.a)({ref:a,as:"label",className:y,htmlFor:v},p)):Object(d.jsx)(s,Object(c.a)({ref:a,className:y,htmlFor:v},p))}));u.displayName="FormLabel",u.defaultProps={column:!1,visuallyHidden:!1},a.a=u},154:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=t(7),l=t(1),b=["bsPrefix","className","as","muted"],d=i.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.as,d=void 0===i?"small":i,f=e.muted,u=Object(r.a)(e,b);return t=Object(o.b)(t,"form-text"),Object(l.jsx)(d,Object(c.a)(Object(c.a)({},u),{},{ref:a,className:n()(s,t,f&&"text-muted")}))}));d.displayName="FormText",a.a=d},155:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=t(7),l=t(140),b=t(1),d=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],f=i.forwardRef((function(e,a){var t=e.bsPrefix,s=e.size,f=e.htmlSize,u=e.className,j=e.isValid,m=void 0!==j&&j,O=e.isInvalid,v=void 0!==O&&O,p=e.id,x=Object(r.a)(e,d),h=Object(i.useContext)(l.a).controlId;return t=Object(o.b)(t,"form-select"),Object(b.jsx)("select",Object(c.a)(Object(c.a)({},x),{},{size:f,ref:a,className:n()(u,t,s&&"".concat(t,"-").concat(s),m&&"is-valid",v&&"is-invalid"),id:p||h}))}));f.displayName="FormSelect",a.a=f},156:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=t(144),l=t(7),b=t(1),d=["bsPrefix","className","children","controlId","label"],f=i.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.children,f=e.controlId,u=e.label,j=Object(r.a)(e,d);return t=Object(l.b)(t,"form-floating"),Object(b.jsxs)(o.a,Object(c.a)(Object(c.a)({ref:a,className:n()(s,t),controlId:f},j),{},{children:[i,Object(b.jsx)("label",{htmlFor:f,children:u})]}))}));f.displayName="FloatingLabel",a.a=f},157:function(e,a,t){"use strict";var c=t(2),r=t(4),s=t(6),n=t.n(s),i=t(0),o=t(140),l=t(7),b=t(1),d=["id","bsPrefix","className","type","isValid","isInvalid","as"],f=i.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,f=e.className,u=e.type,j=void 0===u?"checkbox":u,m=e.isValid,O=void 0!==m&&m,v=e.isInvalid,p=void 0!==v&&v,x=e.as,h=void 0===x?"input":x,y=Object(r.a)(e,d),N=Object(i.useContext)(o.a).controlId;return s=Object(l.b)(s,"form-check-input"),Object(b.jsx)(h,Object(c.a)(Object(c.a)({},y),{},{ref:a,type:j,id:t||N,className:n()(f,s,O&&"is-valid",p&&"is-invalid")}))}));f.displayName="FormCheckInput",a.a=f},188:function(e,a,t){"use strict";t.d(a,"b",(function(){return f})),t.d(a,"a",(function(){return j}));var c=t(141),r=t.n(c),s=t(142),n=t(150),i=t(163),o=t.n(i),l=t(143),b=Object(n.c)(l.a),d=Object(n.g)(b);function f(e){return u.apply(this,arguments)}function u(){return(u=Object(s.a)(r.a.mark((function e(a){var t,c,s,i,b,f,u;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete a.confirmPassword,e.next=3,Object(n.b)(Object(n.a)(d,"users/"));case 3:if(t=e.sent,!Object.values(a).includes("")){e.next=6;break}throw new Error("User info field is empty!");case 6:if(null===t.val()){e.next=19;break}for(c=Object.values(t.val()),s=0,i=c;s<i.length;s++)delete i[s]._id;b=0,f=c;case 10:if(!(b<f.length)){e.next=19;break}if(u=f[b],a.username!==u.username){e.next=14;break}throw new Error("Username already exists!");case 14:if(a.email!==u.email){e.next=16;break}throw new Error("Email already exists!");case 16:b++,e.next=10;break;case 19:return a._id=o()(),e.next=22,Object(n.e)(Object(n.g)(Object(n.c)(l.a),"users/"),a);case 22:return e.abrupt("return",a);case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(r.a.mark((function e(a){var t,c,s,i,o,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=!1,e.next=3,Object(n.b)(Object(n.f)(Object(n.a)(d,"users/"),Object(n.d)("/email")));case 3:s=e.sent,i=0,o=Object.values(s.val());case 5:if(!(i<o.length)){e.next=22;break}if(l=o[i],a.emailOrUsername!==l.email){e.next=14;break}if(a.password!==l.password){e.next=12;break}return t=!0,c=l,e.abrupt("break",22);case 12:e.next=19;break;case 14:if(a.emailOrUsername!==l.username){e.next=19;break}if(a.password!==l.password){e.next=19;break}return t=!0,c=l,e.abrupt("break",22);case 19:i++,e.next=5;break;case 22:if(!0!==t){e.next=26;break}return e.abrupt("return",c);case 26:throw new Error("User not found!");case 27:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},192:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var c=t(2),r=t(38),s=t(3),n=t(1),i=function(e){return function(a){return null===Object(r.c)((function(e){return e.user})).token?Object(n.jsx)(e,Object(c.a)({},a)):Object(n.jsx)(s.a,{to:"/books/all"})}}}}]);
//# sourceMappingURL=6.39557b03.chunk.js.map