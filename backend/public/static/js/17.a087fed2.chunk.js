(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17,8],{143:function(e,t,n){"use strict";var r=n(174),a=Object(r.a)({apiKey:"AIzaSyBBl57WBHwYa-9WHvsRUv62BQ2XgY41J3I",authDomain:"books-320707.firebaseapp.com",databaseURL:"https://books-320707-default-rtdb.firebaseio.com",projectId:"books-320707",storageBucket:"books-320707.appspot.com",messagingSenderId:"814577049102",appId:"1:814577049102:web:057ae971e150c9dc11665f",measurementId:"G-5QSKEG5MJ7"});t.a=a},145:function(e,t,n){"use strict";n.d(t,"f",(function(){return j})),n.d(t,"g",(function(){return k})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"m",(function(){return g})),n.d(t,"i",(function(){return S})),n.d(t,"b",(function(){return _})),n.d(t,"n",(function(){return G})),n.d(t,"a",(function(){return H})),n.d(t,"l",(function(){return L})),n.d(t,"d",(function(){return C})),n.d(t,"k",(function(){return N})),n.d(t,"j",(function(){return P})),n.d(t,"h",(function(){return R}));var r=n(37),a=n(141),c=n.n(a),u=n(142),s=n(150),i=n(163),o=n.n(i),f=n(158),b=n(162),p=n(143),l=Object(s.c)(p.a),x=Object(s.g)(l);function j(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(x,"/books"));case 2:if(null===(t=e.sent).val()){e.next=8;break}return n=Object.values(t.val()).sort((function(e,t){return e.title.localeCompare(t.title)})),e.abrupt("return",n);case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(c.a.mark((function e(t){var n,a,u,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:if(null===(n=e.sent)){e.next=21;break}a=Object(r.a)(n),e.prev=5,a.s();case 7:if((u=a.n()).done){e.next=13;break}if((s=u.value)._id!==t){e.next=11;break}return e.abrupt("return",s);case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),a.e(e.t0);case 18:return e.prev=18,a.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[5,15,18,21]])})))).apply(this,arguments)}function h(e,t){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.rating=[],t.likes=[],t.creator=localStorage.getItem("username"),t._id=o()(),t.createdOn=Date.now(),e.next=7,Object(b.f)(t._id,n);case 7:return e.next=9,Object(s.e)(Object(s.a)(x,"/books"),t);case 9:return e.abrupt("return",t._id);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(c.a.mark((function e(t,n,r){var a,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(x,"/books"));case 2:a=e.sent,u=a.val(),e.t0=c.a.keys(a.val());case 5:if((e.t1=e.t0()).done){e.next=13;break}if(i=e.t1.value,u[i]._id!==t){e.next=11;break}return e.next=11,Object(s.i)(Object(s.a)(x,"books/".concat(i)),n);case 11:e.next=5;break;case 13:if(null===r){e.next=16;break}return e.next=16,Object(b.a)(t,r);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(c.a.mark((function e(t){var n,r,a,u,i,o,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(x,"/books"));case 2:return n=e.sent,r=n.val(),e.next=6,Object(s.b)(Object(s.a)(x,"/books"));case 6:a=e.sent,u=a.val(),e.t0=c.a.keys(u);case 9:if((e.t1=e.t0()).done){e.next=25;break}if(i=e.t1.value,void 0===(o=u[i]).likes){e.next=17;break}if(-1===o.likes.indexOf(t)){e.next=17;break}return o.likes.splice(o.likes.indexOf(t),1),e.next=17,Object(s.i)(Object(s.a)(x,"/users/".concat(i)),o);case 17:if(u[i]._id!==localStorage.getItem("token")){e.next=23;break}if(void 0===o.favourites){e.next=23;break}if(-1===o.favourites.indexOf(t)){e.next=23;break}return o.favourites.splice(o.likes.indexOf(t),1),e.next=23,Object(s.i)(Object(s.a)(x,"/users/".concat(i)),o);case 23:e.next=9;break;case 25:return e.next=27,Object(f.e)(t);case 27:return e.next=29,Object(b.d)(t);case 29:e.t2=c.a.keys(r);case 30:if((e.t3=e.t2()).done){e.next=37;break}if(p=e.t3.value,r[p]._id!==t){e.next=35;break}return e.next=35,Object(s.h)(Object(s.a)(x,"books/".concat(p)));case 35:e.next=30;break;case 37:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(c.a.mark((function e(t){var n,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,r=n.filter((function(e){return e.series===t})).sort((function(e,t){return e.seriesNumber-t.seriesNumber})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return B.apply(this,arguments)}function B(){return(B=Object(u.a)(c.a.mark((function e(t){var n,r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(x,"/users"));case 2:n=e.sent,r=n.val(),e.t0=c.a.keys(r);case 5:if((e.t1=e.t0()).done){e.next=15;break}if(a=e.t1.value,r[a]._id!==localStorage.getItem("token")){e.next=13;break}return void 0===(u=r[a]).favourites&&(u.favourites=[]),u.favourites.push(t),e.next=13,Object(s.i)(Object(s.a)(x,"/users/"+a),u);case 13:e.next=5;break;case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return E.apply(this,arguments)}function E(){return(E=Object(u.a)(c.a.mark((function e(t){var n,r,a,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(x,"/users"));case 2:n=e.sent,r=n.val(),e.t0=c.a.keys(r);case 5:if((e.t1=e.t0()).done){e.next=14;break}if(a=e.t1.value,r[a]._id!==localStorage.getItem("token")){e.next=12;break}return(u=r[a]).favourites=u.favourites.filter((function(e){return e!==t})),e.next=12,Object(s.i)(Object(s.a)(x,"/users/".concat(a)),u);case 12:e.next=5;break;case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function H(e,t){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(c.a.mark((function e(t,n){var r,a,u,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return r=e.sent,e.next=5,Object(s.b)(Object(s.a)(x,"/books"));case 5:for(i in a=e.sent,u=a.val(),void 0===r.ratings&&(r.ratings=[]),r.ratings.push({username:localStorage.getItem("username"),rating:n}),a.val())u[i]._id===t&&Object(s.i)(Object(s.a)(x,"books/".concat(i)),r).then((function(){console.log("hehhehheh")}));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e,t){return A.apply(this,arguments)}function A(){return(A=Object(u.a)(c.a.mark((function e(t,n){var r,a,u,i,o,f,b,p;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return r=e.sent,e.next=5,Object(s.b)(Object(s.a)(x,"/books"));case 5:return a=e.sent,e.next=8,Object(s.b)(Object(s.a)(x,"/users"));case 8:u=e.sent,i=a.val(),o=u.val(),void 0===r.likes&&(r.likes=[]),r.likes.push(localStorage.getItem("username")),e.t0=c.a.keys(a.val());case 14:if((e.t1=e.t0()).done){e.next=21;break}if(f=e.t1.value,i[f]._id!==t){e.next=19;break}return e.next=19,Object(s.i)(Object(s.a)(x,"books/".concat(f)),r);case 19:e.next=14;break;case 21:e.t2=c.a.keys(u.val());case 22:if((e.t3=e.t2()).done){e.next=33;break}if(b=e.t3.value,o[b]._id!==localStorage.getItem("token")){e.next=31;break}return void 0===(p=o[b]).likes&&(p.likes=[]),p.likes.push(t),n(p),e.next=31,Object(s.i)(Object(s.a)(x,"users/".concat(b)),p);case 31:e.next=22;break;case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return D.apply(this,arguments)}function D(){return(D=Object(u.a)(c.a.mark((function e(t){var n,r,a,u,i,o,f,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return n=e.sent,e.next=5,Object(s.b)(Object(s.a)(x,"/books"));case 5:return r=e.sent,a=r.val(),e.next=9,Object(s.b)(Object(s.a)(x,"/users"));case 9:u=e.sent,i=u.val(),n.likes.splice(n.likes.indexOf(localStorage.getItem("username")),1),e.t0=c.a.keys(r.val());case 13:if((e.t1=e.t0()).done){e.next=20;break}if(o=e.t1.value,a[o]._id!==t){e.next=18;break}return e.next=18,Object(s.i)(Object(s.a)(x,"books/".concat(o)),n);case 18:e.next=13;break;case 20:e.t2=c.a.keys(i);case 21:if((e.t3=e.t2()).done){e.next=32;break}if(f=e.t3.value,i[f]._id!==localStorage.getItem("token")){e.next=30;break}if(void 0===(b=i[f]).likes){e.next=30;break}if(-1===b.likes.indexOf(t)){e.next=30;break}return b.likes.splice(b.likes.indexOf(t),1),e.next=30,Object(s.i)(Object(s.a)(x,"users/".concat(f)),b);case 30:e.next=21;break;case 32:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return K.apply(this,arguments)}function K(){return(K=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,n=t?t.sort((function(e,t){return t.createdOn-e.createdOn})).slice(0,10):[],e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return Q.apply(this,arguments)}function Q(){return(Q=Object(u.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return t=e.sent,n=t?t.filter((function(e){return e.likes})).sort((function(e,t){return e.likes.length-t.likes.length})).slice(0,10):[],e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return U.apply(this,arguments)}function U(){return(U=Object(u.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.creator===t})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},158:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return x})),n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return d})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return y}));var r=n(141),a=n.n(r),c=n(142),u=n(150),s=n(163),i=n.n(s),o=n(143),f=Object(u.c)(o.a),b=Object(u.g)(f);function p(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(Object(u.a)(b,"/comments"));case 2:if(null!==(n=e.sent).val()){e.next=7;break}return e.abrupt("return",[]);case 7:return e.abrupt("return",Object.values(n.val()));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return j.apply(this,arguments)}function j(){return(j=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(Object(u.a)(b,"/comments"));case 2:if(n=e.sent,r=[],null!==n.val()){e.next=8;break}return e.abrupt("return",[]);case 8:return c=n.val(),Object.values(c).filter((function(e){return e.bookId===t})).map((function(e){return r.push(e),e})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e,t){return k.apply(this,arguments)}function k(){return(k=Object(c.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.content,(c={}).content=r,c.bookId=n,c.creator=localStorage.getItem("username"),c._id=i()(),e.next=8,Object(u.e)(Object(u.a)(b,"/comments"),c);case 8:return e.next=10,x(n);case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(a.a.mark((function e(t,n){var r,c,s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(Object(u.a)(b,"/comments"));case 2:r=e.sent,c=r.val(),e.t0=a.a.keys(c);case 5:if((e.t1=e.t0()).done){e.next=14;break}if(s=e.t1.value,(i=c[s])._id!==n){e.next=12;break}return i.content=t.content,e.next=12,Object(u.i)(Object(u.a)(b,"/comments/"+s),i);case 12:e.next=5;break;case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return m.apply(this,arguments)}function m(){return(m=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(Object(u.a)(b,"/comments"));case 2:n=e.sent,r=n.val(),e.t0=a.a.keys(r);case 5:if((e.t1=e.t0()).done){e.next=13;break}if(c=e.t1.value,r[c]._id!==t){e.next=11;break}return e.next=11,Object(u.h)(Object(u.a)(b,"/comments/"+c));case 11:e.next=5;break;case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return g.apply(this,arguments)}function g(){return(g=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.b)(Object(u.a)(b,"/comments"));case 2:if(null!==(n=e.sent).val()){e.next=7;break}return e.abrupt("return");case 7:r=n.val(),e.t0=a.a.keys(r);case 9:if((e.t1=e.t0()).done){e.next=17;break}if(c=e.t1.value,r[c].bookId!==t){e.next=15;break}return e.next=15,Object(u.h)(Object(u.a)(b,"/comments/"+c));case 15:e.next=9;break;case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(2),a=n(38),c=n(3),u=n(1),s=function(e){return function(t){return null!==Object(a.c)((function(e){return e.user})).token?Object(u.jsx)(e,Object(r.a)({},t)):Object(u.jsx)(c.a,{to:"/login"})}}},161:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return S}));var r=n(141),a=n.n(r),c=n(37),u=n(142),s=n(150),i=n(143),o=n(145),f=n(158),b=Object(s.c)(i.a),p=Object(s.g)(b);function l(){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(a.a.mark((function e(){var t,n,r,u,i,f,b,l,x,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(p,"/users"));case 2:for(i in t=e.sent,n=t.val(),u=[],n)n[i]._id===localStorage.getItem("token")&&(f=n[i],r=i,f.favourites&&(u=f.favourites));b=Object(c.a)(u),e.prev=7,b.s();case 9:if((l=b.n()).done){e.next=21;break}return x=l.value,e.next=13,Object(o.g)(x);case 13:return void 0===e.sent&&u.splice(u.indexOf(x),1),(j=n[r]).favourites=u,e.next=19,Object(s.i)(Object(s.a)(p,"/users/"+r),j);case 19:e.next=9;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(7),b.e(e.t0);case 26:return e.prev=26,b.f(),e.finish(26);case 29:return e.abrupt("return",u);case 30:case"end":return e.stop()}}),e,null,[[7,23,26,29]])})))).apply(this,arguments)}function j(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(a.a.mark((function e(){var t,n,r,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:if(t=e.sent,n=[],null!==t){r=Object(c.a)(t);try{for(r.s();!(u=r.n()).done;)(s=u.value).creator===localStorage.getItem("username")&&n.push(s)}catch(a){r.e(a)}finally{r.f()}}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(){return d.apply(this,arguments)}function d(){return(d=Object(u.a)(a.a.mark((function e(){var t,n,r,u,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:if(t=e.sent,n=[],null!==t){r=Object(c.a)(t);try{for(r.s();!(u=r.n()).done;)void 0!==(s=u.value).likes&&s.likes.includes(localStorage.getItem("username"))&&n.push(s)}catch(a){r.e(a)}finally{r.f()}}return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(a.a.mark((function e(t){var n,r,c,u,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.authors,r=t.genres,e.next=3,Object(s.b)(Object(s.a)(p,"/users"));case 3:c=e.sent,u=c.val(),e.t0=a.a.keys(u);case 6:if((e.t1=e.t0()).done){e.next=15;break}if(i=e.t1.value,u[i]._id!==localStorage.getItem("token")){e.next=13;break}return(o=u[i]).preferences={authors:n,genres:r},e.next=13,Object(s.i)(Object(s.a)(p,"/users/"+i),o);case 13:e.next=6;break;case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return y.apply(this,arguments)}function y(){return(y=Object(u.a)(a.a.mark((function e(){var t,n,r,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.b)(Object(s.a)(p,"/users"));case 2:for(c in t=e.sent,n=t.val(),r={},n)n[c]._id===localStorage.getItem("token")&&(u=n[c],r=u.preferences?u.preferences:{authors:[],genres:[]});return e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return w.apply(this,arguments)}function w(){return(w=Object(u.a)(a.a.mark((function e(){var t,n,r,u,s,i,f,b,p,l,x,j;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:return t=e.sent,n=t.genres,r=t.authors,e.next=7,Object(o.f)();case 7:if(u=e.sent,s=[],null!==u){if(n&&n.length>0){i=Object(c.a)(n);try{for(b=function(){var e=f.value;u.filter((function(t){return t.genres.includes(e)})).map((function(e){return s.push(e),e}))},i.s();!(f=i.n()).done;)b()}catch(a){i.e(a)}finally{i.f()}}if(r&&r.length>0){p=Object(c.a)(r);try{for(x=function(){var e=l.value;u.filter((function(t){return t.author===e})).map((function(e){return s.push(e),e}))},p.s();!(l=p.n()).done;)x()}catch(a){p.e(a)}finally{p.f()}}}return j=new Set(s),e.abrupt("return",Array.from(j));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return I.apply(this,arguments)}function I(){return(I=Object(u.a)(a.a.mark((function e(){var t,n,r,u,i,b,l,x,j,O,k;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(o.f)();case 2:return t=e.sent,e.next=5,Object(s.b)(p,"/users");case 5:return n=e.sent,r=n.val(),e.next=9,Object(f.c)();case 9:u=e.sent,i=Object(c.a)(t),e.prev=11,i.s();case 13:if((b=i.n()).done){e.next=26;break}if((l=b.value).creator!==localStorage.getItem("username")){e.next=18;break}return e.next=18,Object(o.m)(l._id);case 18:if(!l.likes||!l.likes.includes(localStorage.getItem("username"))){e.next=22;break}return l.likes.splice(l.likes.indexOf(localStorage.getItem("username")),1),e.next=22,Object(o.e)(l._id,l);case 22:return e.next=24,Object(f.e)(l._id);case 24:e.next=13;break;case 26:e.next=31;break;case 28:e.prev=28,e.t0=e.catch(11),i.e(e.t0);case 31:return e.prev=31,i.f(),e.finish(31);case 34:x=Object(c.a)(u),e.prev=35,x.s();case 37:if((j=x.n()).done){e.next=44;break}if((O=j.value).creator!==localStorage.getItem("username")){e.next=42;break}return e.next=42,Object(f.f)(O._id);case 42:e.next=37;break;case 44:e.next=49;break;case 46:e.prev=46,e.t1=e.catch(35),x.e(e.t1);case 49:return e.prev=49,x.f(),e.finish(49);case 52:e.t2=a.a.keys(r);case 53:if((e.t3=e.t2()).done){e.next=61;break}if(k=e.t3.value,r[k]._id!==localStorage.getItem("token")){e.next=59;break}return e.next=59,Object(s.h)(Object(s.a)(p,"/users/"+k));case 59:e.next=53;break;case 61:case"end":return e.stop()}}),e,null,[[11,28,31,34],[35,46,49,52]])})))).apply(this,arguments)}},162:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return k})),n.d(t,"e",(function(){return h}));var r=n(141),a=n.n(r),c=n(142),u=n(179),s=n(143),i=Object(u.c)(s.a);function o(e,t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(u.e)(i,"".concat(t,"/").concat(n.name)),e.next=3,Object(u.f)(r,n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return p.apply(this,arguments)}function p(){return(p=Object(c.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.e)(i,"".concat(t,"/")),e.next=3,Object(u.d)(n);case 3:return r=e.sent,c=r.items[0],e.next=7,Object(u.b)(c);case 7:return s=e.sent,e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.e)(i,"".concat(t,"/")),e.next=3,Object(u.d)(n);case 3:return r=e.sent,c=r.items[0],e.next=7,Object(u.a)(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:return e.next=4,o(t,n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){return d.apply(this,arguments)}function d(){return(d=Object(c.a)(a.a.mark((function e(t){var n,r,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(u.e)(i,"".concat(t,"/")),e.next=3,Object(u.d)(n);case 3:if(r=e.sent,!(c=r.items[0])){e.next=12;break}return e.next=8,Object(u.b)(c);case 8:return s=e.sent,e.abrupt("return",s);case 12:return e.abrupt("return","");case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return v.apply(this,arguments)}function v(){return(v=Object(c.a)(a.a.mark((function e(t,n){var r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===n){e.next=16;break}return r=Object(u.e)(i,"".concat(t,"/")),c=Object(u.e)(i,"".concat(t,"/").concat(n.name)),e.next=5,Object(u.d)(r);case 5:return s=e.sent,o=s.items[0],e.prev=7,e.next=10,Object(u.a)(o);case 10:e.next=14;break;case 12:e.prev=12,e.t0=e.catch(7);case 14:return e.next=16,Object(u.f)(c,n);case 16:case"end":return e.stop()}}),e,null,[[7,12]])})))).apply(this,arguments)}},220:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),c=n(3),u=n(147),s=n(53),i=n(176),o=n(161),f=n(159),b=n(1);t.default=Object(f.a)((function(){var e=Object(c.g)(),t=Object(a.useState)([]),n=Object(r.a)(t,2),f=n[0],p=n[1],l=Object(a.useState)([]),x=Object(r.a)(l,2),j=x[0],O=x[1],k=Object(a.useState)(!0),d=Object(r.a)(k,2),h=d[0],v=d[1];return Object(a.useEffect)((function(){return h&&Object(o.e)().then((function(e){p(e.genres||[]),O(e.authors||[])})),function(){v(!1)}}),[h]),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{className:"my-4 font-weight-bold .display-4",children:"Set Preferences"}),Object(b.jsxs)(u.a,{style:{width:"300px",marginLeft:"20%"},onSubmit:function(t){t.preventDefault(),Object(o.g)({authors:j,genres:f}).then((function(){e("/profile/recommended")}))},children:[Object(b.jsxs)(u.a.Group,{children:[Object(b.jsx)(u.a.Label,{children:"Genres"}),Object(b.jsx)(i.a,{tags:f,onChange:p,placeHolder:"Enter genre and press enter"})]}),Object(b.jsxs)(u.a.Group,{children:[Object(b.jsx)(u.a.Label,{children:"Authors"}),Object(b.jsx)(i.a,{tags:j,onChange:O,placeHolder:"Enter author and press enter"})]}),Object(b.jsx)(s.a,{type:"submit",style:{marginTop:"5%"},children:"Set Preferences"})]})]})}))}}]);
//# sourceMappingURL=17.a087fed2.chunk.js.map