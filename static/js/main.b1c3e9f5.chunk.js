(this["webpackJsonptodos-hooks"]=this["webpackJsonptodos-hooks"]||[]).push([[0],{165:function(e,t,n){e.exports=n(318)},170:function(e,t,n){},317:function(e,t,n){},318:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(29),c=n.n(r),i=(n(170),n(155)),l=n(26),s=n(325),u=n(329),m=n(328);var d=function(e){var t=e.add,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],i=r[1],s=!c.length;function u(e){e&&13!==e||(t(c),i(""))}return o.a.createElement("div",{className:"create-container"},o.a.createElement(m.a,{id:"create-field",placeholder:"Create New Item",value:c,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return u(e.charCode)},size:"mini",inverted:!0}),o.a.createElement("button",{type:"submit",id:"create-button",disabled:s,onClick:function(){return u()}},"Add New Item"))},g=n(327);var b=function(e){var t=e.index,n=e.todo,r=e.remove,c=e.update,i=Object(a.useRef)(null),s=Object(a.useState)(!1),u=Object(l.a)(s,2),m=u[0],d=u[1],b=Object(a.useState)(!1),f=Object(l.a)(b,2),h=f[0],E=f[1],v=Object(a.useState)(n),p=Object(l.a)(v,2),k=p[0],y=p[1],C={backgroundColor:"rgba(0,0,0,0)",color:"#49FCE4",border:"hidden"};function j(e,t,n){n&&13!==n||(c(e,t),d(!m))}return Object(a.useEffect)((function(){m&&i.current.focus()}),[m]),o.a.createElement("div",{className:"item"},m?o.a.createElement("div",{className:"item-container"},o.a.createElement("input",{className:"todo-edit bright-color",placeholder:"Create New Item",value:k,onChange:function(e){return y(e.target.value)},onClick:function(){return j(k,t)},onKeyPress:function(e){return j(k,t,e)},ref:i}),o.a.createElement("div",{className:"popup-container"},o.a.createElement(g.a,{content:"Submit Edit",size:"tiny",style:C,basic:!0,trigger:o.a.createElement("ion-icon",{name:"create",size:"large",class:"icon bright-color",onClick:function(){return j(k,t)}})}),o.a.createElement(g.a,{content:"Cancel Edit",size:"tiny",style:C,basic:!0,trigger:o.a.createElement("ion-icon",{name:"close-circle",size:"large",class:"icon bright-color",onClick:function(){return d(!m),void y(n)}})}))):o.a.createElement("div",{className:"item-container"},o.a.createElement("p",{className:"todo-item bright-color ".concat(h?"completed":"")},k),o.a.createElement(g.a,{content:"Complete Task",size:"tiny",style:C,basic:!0,trigger:h?o.a.createElement("ion-icon",{name:"checkbox",size:"large",class:"icon bright-color",onClick:function(){return E(!h)}}):o.a.createElement("ion-icon",{name:"square-outline",size:"large",class:"icon bright-color",onClick:function(){return E(!h)}})}),o.a.createElement(g.a,{content:"Edit Task",size:"tiny",style:C,basic:!0,trigger:o.a.createElement("ion-icon",{name:"create",size:"large",class:"icon bright-color",onClick:function(){return d(!m)}})}),o.a.createElement(g.a,{content:"Remove Task",size:"tiny",style:C,basic:!0,trigger:o.a.createElement("ion-icon",{name:"trash",size:"large",class:"icon bright-color",onClick:function(){return r(n)}})})))};var f=function(e){var t=e.list,n=e.remove,a=e.update;return o.a.createElement(s.a,{id:"list-container"},t.length?t.map((function(e,t){return o.a.createElement(b,{key:e,index:t,todo:e,remove:n,update:a})})):o.a.createElement("p",{className:"no-items"}," There is nothing to do! "))};n(316),n(317);var h=function(){var e=Object(a.useState)(["Learn about React","Meet friend for lunch","Build really cool todo app"]),t=Object(l.a)(e,2),n=t[0],r=t[1];return o.a.createElement(s.a,{textAlign:"center",text:!0},o.a.createElement(u.a,{as:"h1",dividing:!0,id:"header"},"Todos Hooks"),o.a.createElement(u.a,{as:"h4",id:"sub-header"},"A Todo app created in React using only hooks!"),o.a.createElement(d,{list:n,add:function(e){r([].concat(Object(i.a)(n),[e]))}}),o.a.createElement(f,{list:n,remove:function(e){var t=n.filter((function(t){return t!==e}));r(t)},update:function(e,t){n[t]=e,r(n)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[165,1,2]]]);
//# sourceMappingURL=main.b1c3e9f5.chunk.js.map