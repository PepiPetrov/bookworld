(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25],{210:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(2),s=a(5),c=a(0),i=a(3),l=a(147),o=a(53),b=a(38),d=a(57),j=a(188),u=a(192),O=a(1);t.default=Object(u.a)((function(){var e=Object(b.c)((function(e){return e.user})),t=Object(b.b)(),a=Object(i.g)(),u=Object(c.useState)({}),h=Object(s.a)(u,2),p=h[0],m=h[1],f=Object(c.useState)({}),x=Object(s.a)(f,2),g=x[0],w=x[1],v=Object(c.useState)(!1),y=Object(s.a)(v,2),C=y[0],S=y[1];if(null!==e.token)return a("/"),null;var k=function(e,t){m(Object(r.a)(Object(r.a)({},p),{},Object(n.a)({},e,t))),g[e]&&w(Object(r.a)(Object(r.a)({},g),{},Object(n.a)({},e,null)))},I=function(){var e=p.emailOrUsername,t=p.password,a={};return e&&0===e.length&&(a.emailOrUsername="Email or username is required!"),t&&0===t.length&&(a.password="Password is required!"),a};return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{className:"my-4 font-weight-bold .display-4",children:"Sign In"}),Object(O.jsxs)(l.a,{style:{width:"300px"},onSubmit:function(e){e.preventDefault();var n=I();Object.keys(n).length>0?w(n):Object(j.a)(p).then((function(e){localStorage.setItem("token",e._id),localStorage.setItem("username",e.username),t(Object(d.b)()),a("/")})).catch((function(e){alert(e.message)}))},children:[Object(O.jsxs)(l.a.Group,{children:[Object(O.jsx)(l.a.Label,{children:"Email or username"}),Object(O.jsx)(l.a.Control,{type:"text",onChange:function(e){return k("emailOrUsername",e.target.value)},isInvalid:!!g.emailOrUsername,placeholder:"Email or username","data-testid":"input-1"}),Object(O.jsx)(l.a.Control.Feedback,{type:"invalid","data-testid":"invalid-1",children:g.emailOrUsername})]}),Object(O.jsxs)(l.a.Group,{children:[Object(O.jsx)(l.a.Label,{children:"Password"}),Object(O.jsx)(l.a.Control,{type:C?"text":"password",autoComplete:"your-pass",onChange:function(e){return k("password",e.target.value)},isInvalid:!!g.password,placeholder:"Password"}),Object(O.jsx)(l.a.Check,{label:"Show password",onChange:function(){S(!C)}}),Object(O.jsx)(l.a.Control.Feedback,{type:"invalid",children:g.password})]}),Object(O.jsx)(o.a,{type:"submit","data-testid":"button",children:"Sign in"})]})]})}))}}]);
//# sourceMappingURL=25.4dba7405.chunk.js.map