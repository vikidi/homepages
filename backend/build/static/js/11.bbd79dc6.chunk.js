(this["webpackJsonphomepages-frontend"]=this["webpackJsonphomepages-frontend"]||[]).push([[11],{301:function(e,t,n){"use strict";n.r(t);var r=n(196),o=n(192),c=n(0),i=n(195),s=n(302),a=n(256),j=n(199),b=n(193),u=n(258),l=n(2),O=function(e){var t=e.children,n=e.vAlign,s=void 0===n?"center":n,a=e.hAlign,O=void 0===a?"center":a,f=e.color,h=Object(j.a)(e,["children","vAlign","hAlign","color"]),d=Object(c.useState)(!1),g=Object(o.a)(d,2),x=g[0],m=g[1],p=Object(i.c)(b.FontLoader,"/fonts/bold.blob"),v=Object(c.useMemo)((function(){return{font:p,size:1,height:.2,curveSegments:30,bevelEnabled:!0,bevelThickness:.2,bevelSize:.07,bevelOffset:0,bevelSegments:3}}),[p]),y=Object(c.useRef)(),w=Object(i.e)((function(e){var t=new b.Vector3;e.geometry.computeBoundingBox(),e.geometry.boundingBox.getSize(t),e.position.x+="center"===O?-t.x/2:"right"===O?0:-t.x,e.position.y+="center"===s?-t.y/2:"top"===s?0:-t.y}),[t]);return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("group",Object(r.a)(Object(r.a)({},h),{},{ref:y,children:Object(l.jsxs)("mesh",{ref:w,onPointerOver:x?null:function(){return u.a.defaults({duration:1.8,ease:"power3.inOut",yoyo:!0}),u.a.to(w.current.rotation,{x:-.5*Math.PI}),u.a.to(w.current.position,{y:-.45}),void m(!0)},children:[Object(l.jsx)("textBufferGeometry",{args:[t,v]}),Object(l.jsx)("meshStandardMaterial",{attach:"material",metalness:.2,roughness:.3,color:f})]})}))})};function f(e){var t=Object(a.c)((function(){return Object(r.a)({rotation:[-Math.PI/2,0,0]},e)})),n=Object(o.a)(t,1)[0];return Object(l.jsx)("mesh",{ref:n,children:Object(l.jsx)("planeBufferGeometry",{attach:"geometry",args:[100,100]})})}function h(e){var t=Object(a.b)((function(){return Object(r.a)({mass:1,position:[5,5,0]},e)})),n=Object(o.a)(t,2),s=n[0],j=n[1],b=Object(c.useState)(!1),u=Object(o.a)(b,2),O=u[0],f=u[1];return Object(i.b)((function(){O&&j.velocity.set(0,1,0)})),Object(l.jsxs)("mesh",{ref:s,onPointerOver:function(){return f(!0)},onPointerOut:function(){return f(!1)},children:[Object(l.jsx)("meshPhysicalMaterial",{color:"orange"}),Object(l.jsx)("boxBufferGeometry",{attach:"geometry"})]})}t.default=function(){return Object(l.jsxs)(i.a,{colorManagement:!0,camera:{fov:75,aspect:window.innerWidth/window.innerHeight,close:1,far:1e3},children:[Object(l.jsx)("ambientLight",{}),Object(l.jsx)("directionalLight",{position:[0,20,7],intensity:1,color:"#ffffff"}),Object(l.jsxs)(c.Suspense,{fallback:null,children:[Object(l.jsxs)(a.a,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(h,{})]}),Object(l.jsx)(O,{color:"#636363",position:[0,.65,0],children:"CODE"})]}),Object(l.jsx)(s.a,{})]})}}}]);
//# sourceMappingURL=11.bbd79dc6.chunk.js.map