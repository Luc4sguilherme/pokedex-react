(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(12),s=n.n(a),r=n(9),i=n(2),o=(n(18),n(11)),l=n(3),j=n(13),u=function(e){return null!==e.other.dream_world.front_default?e.other.dream_world.front_default:null!==e.other["official-artwork"].front_default?e.other["official-artwork"].front_default:e.front_default},d=(n(19),n(1));var p=function(e){var t=Object(i.f)(),n=e.types.map((function(e){return e.type.name}));return Object(d.jsxs)("div",{className:"card ".concat(n[0]),onClick:function(){return t("/pokemon/".concat(e.name))},children:[Object(d.jsx)("img",{className:"card-image",src:"".concat(u(e.sprites)),alt:"".concat(e.name)}),Object(d.jsx)("h2",{className:"card-title",children:"".concat(e.id,". ").concat(e.name)}),Object(d.jsx)("p",{className:"card-subtitle",children:"".concat(n.join(" | "))})]})},h=n(5),m=n.n(h),b=n(8),f="https://pokeapi.co/api/v2/pokemon";function O(){return(O=Object(b.a)(m.a.mark((function e(t,n){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"?limit=").concat(t,"&offset=").concat(n));case 2:return c=e.sent,e.next=5,c.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(m.a.mark((function e(t){var n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(f,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(22);var v=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),r=Object(l.a)(s,2),i=r[0],u=r[1],h=Object(c.useState)(0),m=Object(l.a)(h,2),b=m[0],f=m[1],g=Object(c.useState)(!0),v=Object(l.a)(g,2),k=v[0],w=v[1],y=function(){i.length>=1126?w(!1):(function(e,t){return O.apply(this,arguments)}(50,b).then((function(e){var t=e.results;Promise.all(t.map((function(e){return x(e.name)}))).then((function(e){u([].concat(Object(o.a)(i),Object(o.a)(e)))}))})),f(b+50))};return Object(c.useEffect)((function(){y()}),[]),Object(c.useEffect)((function(){var e=document.querySelector(".pokedex"),t=window.getComputedStyle(e).getPropertyValue("grid-template-columns").split(" ");a(t.length)}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{className:"title",children:"Pok\xe9dex"}),Object(d.jsx)(j.a,{className:"pokedex",dataLength:i.length,next:y,hasMore:k,loader:Object(d.jsx)("div",{style:{gridColumn:"span ".concat(n),justifySelf:"center",padding:"15px"},children:Object(d.jsx)("div",{className:"loader"})}),children:i.map((function(e){return Object(d.jsx)(p,{id:e.id,name:e.name,types:e.types,sprites:e.sprites},e.id)}))})]})};n(23);var k=function(){var e=Object(i.g)().name,t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1],r=Object(i.f)();return Object(c.useEffect)((function(){function t(){return(t=Object(b.a)(m.a.mark((function t(){var n,c,a,r,i,o,l,j;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x(e);case 2:n=t.sent,c=n.id,a=n.weight,r=n.height,i=n.name,o=n.types,l=n.stats,j=n.sprites,s({sprite:u(j),id:c,weight:a,height:r,name:i,types:o,stats:l});case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),Object(d.jsx)(d.Fragment,{children:a&&Object(d.jsx)("div",{className:"pokemon-container",children:Object(d.jsxs)("div",{className:"pokemon-wrapper",children:[Object(d.jsxs)("div",{className:"pokemon-wrapper-top",children:[Object(d.jsxs)("h1",{className:"pokemon-name",children:[a.name,Object(d.jsxs)("span",{children:[" N\xba",String(a.id).padStart(3,0)]})]}),Object(d.jsx)("button",{className:"back-btn",onClick:function(){return r("/")},children:Object(d.jsx)("svg",{width:"13px",height:"20px",viewBox:"0 0 13 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:Object(d.jsx)("g",{id:"Icons",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd",children:Object(d.jsx)("g",{id:"Outlined",transform:"translate(-581.000000, -3434.000000)",children:Object(d.jsx)("g",{id:"Navigation",transform:"translate(100.000000, 3378.000000)",children:Object(d.jsx)("g",{id:"Outlined-/-Navigation-/-arrow_back_ios",transform:"translate(476.000000, 54.000000)",children:Object(d.jsxs)("g",{children:[Object(d.jsx)("polygon",{id:"Path",opacity:"0.87",points:"0 0 24 0 24 24 0 24"}),Object(d.jsx)("polygon",{id:"\ud83d\udd39-Icon-Color",fill:"#1D1D1D",points:"17.51 3.87 15.73 2.1 5.84 12 15.74 21.9 17.51 20.13 9.38 12"})]})})})})})})})]}),Object(d.jsx)("img",{className:"pokemon-image",src:"".concat(a.sprite),alt:"".concat(a.name)}),Object(d.jsxs)("div",{className:"pokemon-infos",children:[Object(d.jsxs)("div",{className:"pokemon-types",children:["Types:",a.types.map((function(e){var t=e.type;return Object(d.jsx)("div",{id:"pokemon-type",className:"".concat(t.name),children:t.name})}))]}),Object(d.jsxs)("div",{children:["Weight: ",Object(d.jsxs)("span",{children:[a.weight/10," kg"]})]}),Object(d.jsxs)("div",{children:["Height: ",Object(d.jsxs)("span",{children:[a.height/10," m"]})]}),a.stats.map((function(e){var t=e.base_stat,n=e.stat.name;return Object(d.jsxs)("div",{className:"pokemon-stats",children:[n,": ",Object(d.jsx)("span",{children:t})]},n)}))]})]})})})};var w=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(v,{})}),Object(d.jsx)(i.a,{path:"/pokemon/:name",element:Object(d.jsx)(k,{})})]})})};s.a.render(Object(d.jsx)(w,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.70974714.chunk.js.map