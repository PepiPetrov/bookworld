(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[16],{156:function(e,t,a){"use strict";var c=a(2),r=a(4),n=a(6),s=a.n(n),o=a(0),i=a(7),u=a(19),b=a(80),l=a(163),d=a(83),j=a(1),f=["bsPrefix","className","as"],O=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,u=e.as,b=void 0===u?"div":u,l=Object(r.a)(e,f),O=Object(i.b)(a,"card-header"),m=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:O}}),[O]);return Object(j.jsx)(d.a.Provider,{value:m,children:Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:t},l),{},{className:s()(n,O)}))})}));O.displayName="CardHeader";var m=O,v=["bsPrefix","className","bg","text","border","body","children","as"],x=Object(b.a)("h5"),h=Object(b.a)("h6"),N=Object(u.a)("card-body"),g=Object(u.a)("card-title",{Component:x}),y=Object(u.a)("card-subtitle",{Component:h}),p=Object(u.a)("card-link",{Component:"a"}),w=Object(u.a)("card-text",{Component:"p"}),C=Object(u.a)("card-footer"),P=Object(u.a)("card-img-overlay"),k=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.bg,u=e.text,b=e.border,l=e.body,d=e.children,f=e.as,O=void 0===f?"div":f,m=Object(r.a)(e,v),x=Object(i.b)(a,"card");return Object(j.jsx)(O,Object(c.a)(Object(c.a)({ref:t},m),{},{className:s()(n,x,o&&"bg-".concat(o),u&&"text-".concat(u),b&&"border-".concat(b)),children:l?Object(j.jsx)(N,{children:d}):d}))}));k.displayName="Card",k.defaultProps={body:!1};t.a=Object.assign(k,{Img:l.a,Title:g,Subtitle:y,Body:N,Link:p,Text:w,Header:m,Footer:C,ImgOverlay:P})},163:function(e,t,a){"use strict";var c=a(2),r=a(4),n=a(6),s=a.n(n),o=a(0),i=a(7),u=a(1),b=["bsPrefix","className","variant","as"],l=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,o=e.variant,l=e.as,d=void 0===l?"img":l,j=Object(r.a)(e,b),f=Object(i.b)(a,"card-img");return Object(u.jsx)(d,Object(c.a)({ref:t,className:s()(o?"".concat(f,"-").concat(o):f,n)},j))}));l.displayName="CardImg",t.a=l},176:function(e,t,a){"use strict";var c=a(0),r=c.createContext({onClose:function(){}});t.a=r},177:function(e,t,a){"use strict";var c=a(19);t.a=Object(c.a)("toast-body")},178:function(e,t,a){"use strict";var c=a(2),r=a(4),n=a(6),s=a.n(n),o=a(0),i=a(28),u=a(7),b=a(81),l=a(176),d=a(1),j=["bsPrefix","closeLabel","closeVariant","closeButton","className","children"],f=o.forwardRef((function(e,t){var a=e.bsPrefix,n=e.closeLabel,f=e.closeVariant,O=e.closeButton,m=e.className,v=e.children,x=Object(r.a)(e,j);a=Object(u.b)(a,"toast-header");var h=Object(o.useContext)(l.a),N=Object(i.a)((function(e){null==h||null==h.onClose||h.onClose(e)}));return Object(d.jsxs)("div",Object(c.a)(Object(c.a)({ref:t},x),{},{className:s()(a,m),children:[v,O&&Object(d.jsx)(b.a,{"aria-label":n,variant:f,onClick:N,"data-dismiss":"toast"})]}))}));f.displayName="ToastHeader",f.defaultProps={closeLabel:"Close",closeButton:!0},t.a=f},180:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var c=a(0);var r=a(184),n=Math.pow(2,31)-1;function s(e,t,a){var c=a-Date.now();e.current=c<=n?setTimeout(t,c):setTimeout((function(){return s(e,t,a)}),n)}function o(){var e=function(){var e=Object(c.useRef)(!0),t=Object(c.useRef)((function(){return e.current}));return Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}(),t=Object(c.useRef)();return Object(r.a)((function(){return clearTimeout(t.current)})),Object(c.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(c,r){void 0===r&&(r=0),e()&&(a(),r<=n?t.current=setTimeout(c,r):s(t,c,Date.now()+r))},clear:a}}),[])}},183:function(e,t,a){"use strict";var c,r=a(2),n=a(4),s=a(0),o=a(6),i=a.n(o),u=a(180),b=a(8),l=a(14),d=a(79),j=a(1),f=(c={},Object(b.a)(c,l.b,"showing"),Object(b.a)(c,l.d,"showing show"),c),O=s.forwardRef((function(e,t){return Object(j.jsx)(d.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,transitionClasses:f}))}));O.displayName="ToastFade";var m=O,v=a(178),x=a(177),h=a(7),N=a(176),g=["bsPrefix","className","transition","show","animation","delay","autohide","onClose","bg"],y=s.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.transition,b=void 0===o?m:o,l=e.show,d=void 0===l||l,f=e.animation,O=void 0===f||f,v=e.delay,x=void 0===v?5e3:v,y=e.autohide,p=void 0!==y&&y,w=e.onClose,C=e.bg,P=Object(n.a)(e,g);a=Object(h.b)(a,"toast");var k=Object(s.useRef)(x),R=Object(s.useRef)(w);Object(s.useEffect)((function(){k.current=x,R.current=w}),[x,w]);var T=Object(u.a)(),B=!(!p||!d),_=Object(s.useCallback)((function(){B&&(null==R.current||R.current())}),[B]);Object(s.useEffect)((function(){T.set(_,k.current)}),[T,_]);var H=Object(s.useMemo)((function(){return{onClose:w}}),[w]),E=!(!b||!O),L=Object(j.jsx)("div",Object(r.a)(Object(r.a)({},P),{},{ref:t,className:i()(a,c,C&&"bg-".concat(C),!E&&(d?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"}));return Object(j.jsx)(N.a.Provider,{value:H,children:E&&b?Object(j.jsx)(b,{in:d,unmountOnExit:!0,children:L}):L})}));y.displayName="Toast";t.a=Object.assign(y,{Body:x.a,Header:v.a})},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var c=a(0);function r(e){var t=function(e){var t=Object(c.useRef)(e);return t.current=e,t}(e);Object(c.useEffect)((function(){return function(){return t.current()}}),[])}},200:function(e,t,a){e.exports={"text-center":"Home_text-center__368qe",img:"Home_img__28Q46",link:"Home_link__Unyee"}},209:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var c=a(156),r=a(183),n=a(38),s=a(9),o=a(200),i=a.n(o),u=a(1);function b(){return Object(u.jsx)("div",{children:Object(u.jsx)(c.a,{className:"".concat(i.a["text-center"]),style:{border:"none"},children:Object(u.jsxs)(c.a.Body,{children:[Object(u.jsx)(l,{}),Object(u.jsx)(c.a.Img,{className:"".concat(i.a.img),src:"./book.png",alt:"No image"})]})})})}function l(){var e=Object(n.c)((function(e){return e.user}));return null!==e.token?Object(u.jsx)(r.a,{className:i.a.welcome,children:Object(u.jsxs)(r.a.Body,{className:"user-welcome",children:["Welcome, ",e.username,"!"]})}):Object(u.jsx)(r.a,{className:i.a.welcome,children:Object(u.jsxs)(r.a.Body,{className:i.a.link,children:[Object(u.jsx)(s.b,{to:"/login",className:"".concat(i.a.link," link"),children:"Login"})," or ",Object(u.jsx)(s.b,{to:"/register",className:i.a.link,children:"Register"})]})})}}}]);
//# sourceMappingURL=16.086d7a26.chunk.js.map