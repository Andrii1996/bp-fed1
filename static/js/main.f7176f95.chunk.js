(this.webpackJsonpbrokerpocket=this.webpackJsonpbrokerpocket||[]).push([[0],{70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),i=a.n(c),r=a(9),s=a.n(r),l=a(38),u=a(44),o=a(41),d=a.n(o),j=a(48),b=a(15),p=a(24),O=a(11),h=a(100),m=a(107),x=a(108),f=Object(h.a)((function(e){return{root:{marginTop:"100px",textAlign:"-webkit-center","& > *":{display:"flex",margin:e.spacing(1),width:"25ch"}},input:{width:"350px"},button:{background:"#6200EE"}}}));var v=function(e){var t=e.addNewUser,a=Object(c.useState)(""),i=Object(b.a)(a,2),r=i[0],s=i[1],l=Object(c.useState)(""),u=Object(b.a)(l,2),o=u[0],d=u[1],j=Object(c.useState)(""),p=Object(b.a)(j,2),h=p[0],v=p[1],g=Object(c.useState)(""),N=Object(b.a)(g,2),y=N[0],E=N[1],w=Object(c.useState)(""),S=Object(b.a)(w,2),k=S[0],C=S[1],_=Object(c.useState)(""),q=Object(b.a)(_,2),U=q[0],D=q[1],L=Object(O.f)(),T=f();return Object(n.jsxs)("form",{action:"http://localhost:3000/",onSubmit:function(e){e.preventDefault(),h&&y&&k&&U&&(t(r,o,y,k,U),L.push("/"))},className:T.root,children:[Object(n.jsx)(m.a,{variant:"filled",type:"text",className:T.input,id:"standard-basic",label:"Enter user name",required:!0,value:h,onChange:function(e){v(e.target.value);var t=h.split(" "),a=Object(b.a)(t,2),n=a[0],c=a[1];s(n),d(c)}}),Object(n.jsx)(m.a,{variant:"filled",type:"text",className:T.input,id:"input",label:"Enter email",required:!0,value:y,onChange:function(e){E(e.target.value)}}),Object(n.jsx)(m.a,{variant:"filled",type:"text",className:T.input,id:"input",label:"Enter phone",required:!0,value:k,onChange:function(e){C(e.target.value)}}),Object(n.jsx)(m.a,{variant:"filled",type:"text",className:T.input,id:"input",label:"Enter address",required:!0,value:U,onChange:function(e){D(e.target.value)}}),Object(n.jsx)(x.a,{type:"submit",className:T.button,children:"SAVE"})]})},g=(a(70),Object(h.a)((function(e){return{button:{margin:"20px"}}})));var N=function(e){var t=e.userList,a=e.deleteUser,c=Object(O.f)(),i=g();return Object(n.jsx)("div",{className:"list",children:Object(n.jsx)("ul",{className:"items",children:t.map((function(e){return Object(n.jsxs)("li",{className:"item",children:[Object(n.jsxs)("div",{className:"item__info",children:[Object(n.jsx)("p",{children:"".concat(e.fname||"hidden"," ").concat(e.lname||"")}),Object(n.jsx)("p",{children:"".concat(e.email," | ").concat(e.phone)}),Object(n.jsx)("p",{children:"".concat(e.address)})]}),Object(n.jsx)("div",{className:"item__options",children:Object(n.jsxs)("div",{className:"options",children:[Object(n.jsx)(x.a,{color:"primary",variant:"outlined",className:i.button,type:"button",onClick:function(){return c.push("/edit/".concat(e._id))},children:"EDIT"}),Object(n.jsx)(x.a,{color:"primary",variant:"outlined",className:"button",type:"button",onClick:function(){return a(e._id)},children:"DELETE"})]})})]},e._id)}))})})},y=Object(h.a)((function(e){return{root:{marginTop:"100px",textAlign:"-webkit-center","& > *":{display:"flex",margin:e.spacing(1),width:"25ch"}},input:{width:"350px"},button:{width:"100px",background:"#6200EE"},container:{display:"flex",justifyContent:"space-around",width:"250px"}}}));var E=function(e){var t=e.editUser,a=e.deleteUser,i=e.userList,r=Object(O.g)().id,s=i.find((function(e){return e._id===r})),l=Object(c.useState)((null===s||void 0===s?void 0:s.fname)||""),u=Object(b.a)(l,2),o=u[0],d=u[1],j=Object(c.useState)((null===s||void 0===s?void 0:s.email)||""),p=Object(b.a)(j,2),h=p[0],f=p[1],v=Object(c.useState)((null===s||void 0===s?void 0:s.phone)||""),g=Object(b.a)(v,2),N=g[0],E=g[1],w=Object(c.useState)((null===s||void 0===s?void 0:s.address)||""),S=Object(b.a)(w,2),k=S[0],C=S[1],_=Object(O.f)(),q=y();return Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(o,h,N,k,r),_.push("/")},className:q.root,children:[Object(n.jsx)(m.a,{variant:"filled",type:"text",className:q.input,label:"Edit product name",required:!0,value:o,onChange:function(e){d(e.target.value)}}),Object(n.jsx)(m.a,{type:"text",variant:"filled",className:q.input,label:"Edit email",required:!0,value:h,onChange:function(e){f(e.target.value)}}),Object(n.jsx)(m.a,{type:"text",variant:"filled",className:q.input,label:"Edit phone",required:!0,value:N,onChange:function(e){E(e.target.value)}}),Object(n.jsx)(m.a,{type:"text",variant:"filled",className:q.input,label:"Edit address",required:!0,value:k,onChange:function(e){C(e.target.value)}}),Object(n.jsxs)("div",{className:q.container,children:[Object(n.jsx)(x.a,{type:"submit",className:q.button,children:"Save"}),Object(n.jsx)(x.a,{type:"button",className:q.button,onClick:function(){return a(i._id)},children:"Delete"})]})]})},w=a(104),S=a(105),k=a(106),C=Object(h.a)((function(e){return{nav:{marginBottom:"10px"},item:{padding:"0 25%",color:"white",textDecoration:"none"}}}));var _=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),a=t[0],i=t[1],r=C();Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://v2mzkzwqi8.execute-api.ca-central-1.amazonaws.com/prod/user");case 2:return t=e.sent,e.next=5,t.json();case 5:t=e.sent,i(t);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=function(e){var t=Object(u.a)(a).filter((function(t){return t._id!==e}));i(t)};return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(p.a,{children:Object(n.jsxs)("div",{children:[Object(n.jsx)(w.a,{position:"fixed",className:r.nav,children:Object(n.jsx)(S.a,{fixed:!0,children:Object(n.jsxs)(k.a,{children:[Object(n.jsx)(p.b,{to:"/",className:r.item,children:"LIST"}),Object(n.jsx)(p.b,{to:"/create",className:r.item,children:"CREATE"})]})})}),Object(n.jsxs)(O.c,{children:[Object(n.jsx)(O.a,{path:"/create",children:Object(n.jsx)(v,{addNewUser:function(e,t,n,c,r){var s={fname:e,lname:t,email:n,phone:c,address:r,_id:new Date};i([].concat(Object(u.a)(a),[s]))}})}),Object(n.jsx)(O.a,{path:"/edit/:id",children:Object(n.jsx)(E,{editUser:function(e,t,n,c,r){var s={fname:e,email:t,phone:n,address:c};i(a.map((function(e){return e._id!==r?Object(l.a)({},e):Object(l.a)(Object(l.a)({},e),s)})))},userList:a,deleteUser:s})}),Object(n.jsx)(O.a,{path:"/",children:Object(n.jsx)(N,{userList:a,setUserList:i,deleteUser:s})})]})]})})})};s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(_,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f7176f95.chunk.js.map