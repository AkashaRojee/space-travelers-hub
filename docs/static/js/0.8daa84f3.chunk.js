(this["webpackJsonpspace-travelers-hub"]=this["webpackJsonpspace-travelers-hub"]||[]).push([[0],{71:function(e,r,t){e.exports={"rd-row":"RDRow_rd-row__3p8UT","rd-details":"RDRow_rd-details__1pK3n","rd-heading":"RDRow_rd-heading__38QKA","rd-image":"RDRow_rd-image__2LxBe","rd-button":"RDRow_rd-button__C3TmT",cancel:"RDRow_cancel__tdSg8"}},73:function(e,r,t){"use strict";t.r(r);var n=t(32);function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,c=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(d){a=!0,c=d}finally{try{n||null==s.return||s.return()}finally{if(a)throw c}}return t}}(e,r)||Object(n.a)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=t(0),i=t(4),s=t(71),d=t.n(s),o=t(1);r.default=function(e){var r=e.id,t=e.title,n=e.description,s=e.image,l=e.reserved,b=e.actions,u=b.reserve,h=b.cancel,j=a(Object(c.useState)(l?"Cancel":"Reserve"),2),v=j[0],m=j[1],p=Object(i.b)();return Object(o.jsxs)("div",{className:d.a["rd-row"],children:[Object(o.jsx)("div",{className:d.a["rd-image"],children:Object(o.jsx)("img",{src:s,alt:t})}),Object(o.jsxs)("div",{className:d.a["rd-details"],children:[Object(o.jsxs)("div",{className:d.a["rd-heading"],children:[l&&Object(o.jsx)("span",{children:"Reserved"}),Object(o.jsx)("h2",{children:t})]}),Object(o.jsx)("span",{children:n}),Object(o.jsx)("div",{className:d.a["rd-button"],children:Object(o.jsx)("button",{className:l?d.a.cancel:void 0,type:"button",onClick:function(){l?(p(h(r)),m("Reserve")):(p(u(r)),m("Cancel"))},children:v})})]})]})}}}]);
//# sourceMappingURL=0.8daa84f3.chunk.js.map