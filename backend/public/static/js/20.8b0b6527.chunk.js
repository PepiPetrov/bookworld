(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[20],{159:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),a=n(38),c=n(3),u=n(1),s=function(e){return function(t){return null!==Object(a.c)((function(e){return e.user})).token?Object(u.jsx)(e,Object(r.a)({},t)):Object(u.jsx)(c.a,{to:"/login"})}}},161:function(e,t,n){"use strict";n.d(t,"d",(function(){return p})),n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return x})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return g})),n.d(t,"c",(function(){return y})),n.d(t,"f",(function(){return S}));var r=n(141),a=n.n(r),c=n(37),u=n(142),s=n(150),i=n(143),o=n(145),f=n(158),b=Object(s.c)(i.a),l=Object(s.g)(b);function p(){return j.apply(this,arguments)}function j(){return(j=Object(u.a)(a.a.mark((function e(){var t,n,r,u,i,f,b,p,j,O;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(l,"/users"));case 2:for(i in t=e.sent,n=t.val(),u=[],n)n[i]._id===localStorage.getItem("token")&&(f=n[i],r=i,f.favourites&&(u=f.favourites));b=Object(c.a)(u),e.prev=7,b.s();case 9:if((p=b.n()).done){e.next=21;break}return j=p.value,e.next=13,Object(o.g)(j);case 13:return void 0===e.sent&&u.splice(u.indexOf(j),1),(O=n[r]).favourites=u,e.next=19,Object(s.i)(Object(s.a)(l,"/users/"+r),O);case 19:e.next=9;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),b.e(e.t0);case 26:return e.prev=26,b.f(),e.finish(26);case 29:return e.abrupt("return",u);case 30:case"end":return e.stop()}}),e,null,[[7,23,26,29]])})))).apply(this,arguments)}function O(){return h.apply(this,arguments)}function h(){return(h=Object(u.a)(a.a.mark((function e(){var t,n,r,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:if(t=e.sent,n=[],null!==t){r=Object(c.a)(t);try{for(r.s();!(u=r.n()).done;)(s=u.value).creator===localStorage.getItem("username")&&n.push(s)}catch(a){r.e(a)}finally{r.f()}}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(a.a.mark((function e(){var t,n,r,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:if(t=e.sent,n=[],null!==t){r=Object(c.a)(t);try{for(r.s();!(u=r.n()).done;)void 0!==(s=u.value).likes&&s.likes.includes(localStorage.getItem("username"))&&n.push(s)}catch(a){r.e(a)}finally{r.f()}}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(a.a.mark((function e(t){var n,r,c,u,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.authors,r=t.genres,e.next=3,Object(s.b)(Object(s.a)(l,"/users"));case 3:c=e.sent,u=c.val(),e.t0=a.a.keys(u);case 6:if((e.t1=e.t0()).done){e.next=15;break}if(i=e.t1.value,u[i]._id!==localStorage.getItem("token")){e.next=13;break}return(o=u[i]).preferences={authors:n,genres:r},e.next=13,Object(s.i)(Object(s.a)(l,"/users/"+i),o);case 13:e.next=6;break;case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(a.a.mark((function e(){var t,n,r,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(l,"/users"));case 2:for(c in t=e.sent,n=t.val(),r={},n)n[c]._id===localStorage.getItem("token")&&(u=n[c],r=u.preferences?u.preferences:{authors:[],genres:[]});return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(a.a.mark((function e(){var t,n,r,u,s,i,f,b,l,p,j,O;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:return t=e.sent,n=t.genres,r=t.authors,e.next=7,Object(o.f)();case 7:if(u=e.sent,s=[],null!==u){if(n&&n.length>0){i=Object(c.a)(n);try{for(b=function(){var e=f.value;u.filter((function(t){return t.genres.includes(e)})).map((function(e){return s.push(e),e}))},i.s();!(f=i.n()).done;)b()}catch(a){i.e(a)}finally{i.f()}}if(r&&r.length>0){l=Object(c.a)(r);try{for(j=function(){var e=p.value;u.filter((function(t){return t.author===e})).map((function(e){return s.push(e),e}))},l.s();!(p=l.n()).done;)j()}catch(a){l.e(a)}finally{l.f()}}}return O=new Set(s),e.abrupt("return",Array.from(O));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(a.a.mark((function e(){var t,n,r,u,i,b,p,j,O,h,x;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:return t=e.sent,e.next=5,Object(s.b)(l,"/users");case 5:return n=e.sent,r=n.val(),e.next=9,Object(f.c)();case 9:u=e.sent,i=Object(c.a)(t),e.prev=11,i.s();case 13:if((b=i.n()).done){e.next=26;break}if((p=b.value).creator!==localStorage.getItem("username")){e.next=18;break}return e.next=18,Object(o.m)(p._id);case 18:if(!p.likes||!p.likes.includes(localStorage.getItem("username"))){e.next=22;break}return p.likes.splice(p.likes.indexOf(localStorage.getItem("username")),1),e.next=22,Object(o.e)(p._id,p);case 22:return e.next=24,Object(f.e)(p._id);case 24:e.next=13;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(11),i.e(e.t0);case 31:return e.prev=31,i.f(),e.finish(31);case 34:j=Object(c.a)(u),e.prev=35,j.s();case 37:if((O=j.n()).done){e.next=44;break}if((h=O.value).creator!==localStorage.getItem("username")){e.next=42;break}return e.next=42,Object(f.f)(h._id);case 42:e.next=37;break;case 44:e.next=49;break;case 46:e.prev=46,e.t1=e.catch(35),j.e(e.t1);case 49:return e.prev=49,j.f(),e.finish(49);case 52:e.t2=a.a.keys(r);case 53:if((e.t3=e.t2()).done){e.next=61;break}if(x=e.t3.value,r[x]._id!==localStorage.getItem("token")){e.next=59;break}return e.next=59,Object(s.h)(Object(s.a)(l,"/users/"+x));case 59:e.next=53;break;case 61:case"end":return e.stop()}}),e,null,[[11,28,31,34],[35,46,49,52]])})))).apply(this,arguments)}},219:function(e,t,n){"use strict";n.r(t);var r=n(47),a=n(5),c=n(0),u=n(160),s=n(161),i=n(145),o=n(159),f=n(1);t.default=Object(o.a)((function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],o=t[1],b=Object(c.useState)([]),l=Object(a.a)(b,2),p=l[0],j=l[1],O=Object(c.useState)(!0),h=Object(a.a)(O,2),x=h[0],d=h[1];return Object(c.useEffect)((function(){return x&&Object(s.d)().then((function(e){e.map((function(e){return Object(i.g)(e).then((function(e){j([].concat(Object(r.a)(p),[e]))})),null})),o(e)})),function(){d(!1)}})),x?Object(f.jsx)("p",{children:"Fetching data..."}):n&&n.length>0?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h1",{children:"Favoruite books"}),Object(f.jsx)(u.a,{books:p})]}):Object(f.jsx)("p",{children:"No favourite books"})}))}}]);
//# sourceMappingURL=20.8b0b6527.chunk.js.map