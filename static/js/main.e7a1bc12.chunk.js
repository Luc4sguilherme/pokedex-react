(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(8),r=n.n(a),o=n(7),s=n(6),i=n.n(s),u=n(9),l=n(3),d=n(10),f=(n(16),n(17),function(e){return null!==e.other.dream_world.front_default?e.other.dream_world.front_default:null!==e.other["official-artwork"].front_default?e.other["official-artwork"].front_default:e.front_default}),j=n(1);var p=function(e){var t=e.types.map((function(e){return e.type.name}));return Object(j.jsxs)("div",{className:"card ".concat(t[0]),children:[Object(j.jsx)("img",{className:"card-image",src:"".concat(f(e.sprites)),alt:"".concat(e.name)}),Object(j.jsx)("h2",{className:"card-title",children:"".concat(e.id,". ").concat(e.name)}),Object(j.jsx)("p",{className:"card-subtitle",children:"".concat(t.join(" | "))})]})},m=function(e,t){return fetch("https://pokeapi.co/api/v2/pokemon?limit=".concat(e,"&offset=").concat(t)).then((function(e){return e.json()}))};var h=function(){var e=Object(c.useState)(1),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),f=s[0],h=s[1],b=Object(c.useState)(0),O=Object(l.a)(b,2),x=O[0],v=O[1],g=Object(c.useState)(!0),k=Object(l.a)(g,2),y=k[0],w=k[1],N=function(){f.length>=1118?w(!1):(m(50,x).then((function(e){var t=e.results;Promise.all(t.map(function(){var e=Object(u.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t.url));case 2:return n=e.sent,e.next=5,n.json();case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){h([].concat(Object(o.a)(f),Object(o.a)(e)))}))})),v(x+50))};return Object(c.useEffect)((function(){N()}),[]),Object(c.useEffect)((function(){var e=document.querySelector(".pokedex"),t=window.getComputedStyle(e).getPropertyValue("grid-template-columns").split(" ");a(t.length)}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:"Pok\xe9dex"}),Object(j.jsx)(d.a,{className:"pokedex",dataLength:f.length,next:N,hasMore:y,loader:Object(j.jsx)("div",{style:{gridColumn:"span ".concat(n),justifySelf:"center",padding:"15px"},children:Object(j.jsx)("div",{className:"loader"})}),children:f.map((function(e){return Object(j.jsx)(p,{id:e.id,name:e.name,types:e.types,sprites:e.sprites},e.id)}))})]})};r.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.e7a1bc12.chunk.js.map