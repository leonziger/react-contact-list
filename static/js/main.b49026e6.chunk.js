(this["webpackJsonpreact-porshneva-contacts"]=this["webpackJsonpreact-porshneva-contacts"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(11)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),s=t(3),r=t.n(s),i=(t(9),t(10),t(1)),o=[{id:1,name:"Darth Vader",phoneNumber:"+250966666666",image:"/img/darth.gif",address:"Death Star",email:"vader@starwars.com"},{id:2,name:"Princess Leia",phoneNumber:"+250966344466",image:"/img/leia.gif",address:"Corusand",email:"leia@starwars.com"},{id:3,name:"Luke Skywalker",phoneNumber:"+250976654433",image:"/img/luke.gif",address:"Tattuin",email:"luke@starwars.com"},{id:4,name:"Chewbacca",phoneNumber:"+250456784935",image:"/img/chewbacca.gif",address:"Kashiik",email:"chewy@starwars.com"}],l=c.a.createContext({}),m=function(e){var a=e.children,t=[],s={};o.map((function(e){return s={id:e.id,state:!1},t.push(s),t})),console.log(t);var r=Object(n.useState)(o),m=Object(i.a)(r,2),d=m[0],u=m[1],v=Object(n.useState)(t),h=Object(i.a)(v,2),p={displayedContacts:d,activeIds:h[0],setDisplayedContacts:u,setActiveIds:h[1]};return c.a.createElement(l.Provider,{value:p},a)},d=function(e){var a=e.item,t=Object(n.useContext)(l),s=t.activeIds,r=t.setActiveIds,i=!1,o={};return c.a.createElement("li",{className:"contact",key:a.id,onClick:function(){return e=a.id,s.forEach((function(a){a.id===e&&(i=!i,a.state=i,o.id=a.id,o.state=a.state)})),r(s),console.log(o),console.log(s),o;var e}},c.a.createElement("div",{className:"contact-main"},c.a.createElement("img",{className:"contact-image",src:a.image,width:"60px",height:"60px",alt:""}),c.a.createElement("div",{className:"contact-name"},a.name),c.a.createElement("div",{className:"contact-number"},a.phoneNumber)),o.state?c.a.createElement("div",{className:"contact-additional",style:{display:"block"}},c.a.createElement("div",{className:"contact-number"},a.address),c.a.createElement("div",{className:"contact-number"},a.email)):c.a.createElement("div",{className:"contact-additional",style:{display:"none"}},c.a.createElement("div",{className:"contact-number"},a.address),c.a.createElement("div",{className:"contact-number"},a.email)))},u=function(){var e=Object(n.useContext)(l),a=e.displayedContacts,t=e.setDisplayedContacts;return c.a.createElement("div",{className:"contacts"},c.a.createElement("input",{type:"text",className:"search-field",onChange:function(e){var a=e.target.value.toLowerCase(),n=o.filter((function(e){return-1!==e.name.toLowerCase().indexOf(a)}));t(n)}}),c.a.createElement("ul",{className:"contacts-list"},a.map((function(e){return c.a.createElement(d,{item:e,key:e.id})}))))};var v=function(){return c.a.createElement(m,null,c.a.createElement("div",{className:"App"},c.a.createElement(u,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("content")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b49026e6.chunk.js.map