(this["webpackJsonptodos-list"]=this["webpackJsonptodos-list"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(17),r=a.n(s),o=(a(25),a(10)),l=a(20),i=(a(26),a(7)),d=a.n(i),j=a(0);function b(e){return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link active","aria-current":"page",href:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"#",children:"Link"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link",href:"/about",children:"about"})})]}),e.searchbar?Object(j.jsxs)("form",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={title:" me me me me me me",searchbar:!0},b.Prototype={title:d.a.string,searchbar:d.a.bool.isRequired};var u=function(e){var t=e.todo,a=e.onDelete;return Object(j.jsxs)("div",{className:"scroll-y",children:[Object(j.jsx)("h4",{children:t.title}),Object(j.jsx)("p",{children:t.desc}),Object(j.jsx)("button",{className:"btn btn-sm btn-outline-dark",onClick:function(){a(t)},children:"Delete"})]})},h=function(e){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h3",{className:"text-center my-3",children:"Todos list"}),0===e.todos.length?Object(j.jsx)("div",{className:"notodo",children:Object(j.jsx)("div",{class:"alert alert-dark",role:"alert",children:"Write your first Todo Now!!!!!!!!!!!!!!!!!"})}):e.todos.map((function(t){return Object(j.jsxs)(j.Fragment,{children:[" ",Object(j.jsx)(u,{todo:t,onDelete:e.onDelete},t.sno)," ",Object(j.jsx)("hr",{})," "]})}))]})},m=function(){return Object(j.jsx)("footer",{className:"bg-dark text-light py-1",style:{position:"relative",top:"35vh",width:"100%"},children:Object(j.jsx)("p",{className:"text-center",children:"Copyright \xa9 MyTodoList.com owns and control byMyBook.inc"})})},x=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),l=Object(o.a)(r,2),i=l[0],d=l[1];return Object(j.jsxs)("div",{className:"container my-3",children:[Object(j.jsx)("h3",{children:"Add a Todo"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c&&i?(e.addTodo(c,i),s(""),d("")):alert("you can not add empty Todo")},children:[Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"todo_title",className:"form-label",children:"Todo Title"}),Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},required:!0,autoFocus:!0,className:"form-control",id:"todo_title","aria-describedby":"emailHelp"})]}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)("label",{htmlFor:"todo_desc",className:"form-label",children:"Todo Decsription"}),Object(j.jsx)("input",{type:"text",value:i,onChange:function(e){d(e.target.value)},required:!0,className:"form-control",id:"todo_desc"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-outline-dark fjsdlkjfl45543532",onClick:function(){e.change("Submititng","Submit")},children:"Submit"})]})]})},O=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:["this is an about page",Object(j.jsx)("p",{children:"React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.Declarative views make your code more predictable and easier to debug."}),Object(j.jsx)("h1",{children:"this is me"})]}),Object(j.jsx)("div",{style:{height:"32vh"}})]})},f=a(18),g=a(2);var p=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=function(e){console.log("i am on delete",e),d(i.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(i))},a=function(e,t){document.querySelector(".fjsdlkjfl45543532").innerText=e,document.querySelector(".fjsdlkjfl45543532").innerText=t},c=function(e,t){var a;if(0===i.length)a=0;else i[i.length-1].sno;var n={sno:a,title:e,desc:t};d([].concat(Object(l.a)(i),[n])),localStorage.setItem("todos",JSON.stringify(i))},s=Object(n.useState)(e),r=Object(o.a)(s,2),i=r[0],d=r[1];return Object(n.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(i))}),[i]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(b,{title:"My todos list",searchbar:!0}),Object(j.jsxs)(g.c,{children:["so in order to avoid this mixup we use exact character to readirect the user in exact path",Object(j.jsx)(g.a,{exact:!0,path:"/",render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x,{change:a,addTodo:c}),Object(j.jsx)(h,{todos:i,onDelete:t})]})}}),Object(j.jsx)(g.a,{path:"/about",children:Object(j.jsx)(O,{})})]}),Object(j.jsx)(m,{})]})})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),v()}},[[33,1,2]]]);
//# sourceMappingURL=main.229145c9.chunk.js.map