(this["webpackJsonphomepages-frontend"]=this["webpackJsonphomepages-frontend"]||[]).push([[12],{296:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(195),o=n(297),i=n(193),a=n(303),l=n(230),d=n(257),s=n(2),u=function(e){var t=e.gltf,n=Object(r.d)(),o=n.camera,u=n.gl,h=n.scene,p=Object(c.useRef)(!1),m={},f=!0,j=new d.a,y=new l.a(new i.Vector3(0,.35,0),new i.Vector3(0,1,0),.35),v=new i.Vector3,b=new i.Vector3,w=new i.SphereGeometry(.2,32,32),S=new i.MeshStandardMaterial({color:8947797,roughness:.8,metalness:.5}),g=[],O=0;function x(){o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)}function L(){return o.getWorldDirection(b),b.y=0,b.normalize(),b.cross(o.up),b}function V(){return o.getWorldDirection(b),b.y=0,b.normalize(),b}return Object(c.useEffect)((function(){window.addEventListener("resize",x),document.addEventListener("keyup",(function(e){m[e.code]=!1})),document.addEventListener("keydown",(function(e){m[e.code]=!0})),document.addEventListener("pointerlockchange",(function(){console.log(document.pointerLockElement),document.pointerLockElement?p.current=!0:p.current=!1})),document.addEventListener("click",(function(){p.current&&function(){var e=g[O];o.getWorldDirection(b),e.collider.center.copy(y.end),e.velocity.copy(b).multiplyScalar(30),O=(O+1)%g.length}()}))}),[]),Object(c.useEffect)((function(){t&&(j.fromGraphNode(t.scene),t.scene.traverse((function(e){e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.map&&(e.material.map.anisotropy=8))})))}),[t,j]),Object(c.useEffect)((function(){for(var e=0;e<20;++e){var t=new i.Mesh(w,S);t.castShadow=!0,t.receiveShadow=!0,h.add(t),g.push({mesh:t,collider:new i.Sphere(new i.Vector3(0,-100,0),.2),velocity:new i.Vector3})}}),[h,w,S,g]),Object(r.b)((function(e,t){p.current&&f&&(m.KeyW&&v.add(V().multiplyScalar(25*t)),m.KeyS&&v.add(V().multiplyScalar(-25*t)),m.KeyA&&v.add(L().multiplyScalar(-25*t)),m.KeyD&&v.add(L().multiplyScalar(25*t)),m.Space&&(v.y=15)),function(e){if(f){var t=Math.exp(-3*e)-1;v.addScaledVector(v,t)}else v.y-=30*e;var n=v.clone().multiplyScalar(e);y.translate(n),function(){var e=j.capsuleIntersect(y);f=!1,e&&((f=e.normal.y>0)||v.addScaledVector(e.normal,-e.normal.dot(v)),y.translate(e.normal.multiplyScalar(e.depth)))}(),o.position.copy(y.end)}(t),function(e){g.forEach((function(t){t.collider.center.addScaledVector(t.velocity,e);var n=j.sphereIntersect(t.collider);n?(t.velocity.addScaledVector(n.normal,1.5*-n.normal.dot(t.velocity)),t.collider.center.add(n.normal.multiplyScalar(n.depth))):t.velocity.y-=30*e;var c=Math.exp(-1.5*e)-1;t.velocity.addScaledVector(t.velocity,c),function(){for(var e=0;e<g.length;e++)for(var t=g[e],n=e+1;n<g.length;n++){var c=g[n],r=t.collider.center.distanceToSquared(c.collider.center),o=t.collider.radius+c.collider.radius;if(r<o*o){var i=t.collider.clone().center.sub(c.collider.center).normalize(),a=i.clone().multiplyScalar(i.dot(t.velocity)),l=i.clone().multiplyScalar(i.dot(c.velocity));t.velocity.add(l).sub(a),c.velocity.add(a).sub(l);var d=(o-Math.sqrt(r))/2;t.collider.center.addScaledVector(i,d),c.collider.center.addScaledVector(i,-d)}}}(),t.mesh.position.copy(t.collider.center)}))}(t)})),Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(a.a,{})})},h=function(e){var t=e.url,n=Object(o.a)(t);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("primitive",{object:n.scene}),Object(s.jsx)(u,{gltf:n})]})};var p=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("ambientLight",{color:6719692}),Object(s.jsx)("directionalLight",{color:16751001,position:[-1,1,2],intensity:.5}),Object(s.jsx)("directionalLight",{color:8947967,position:[0,-1,0],intensity:.2}),Object(s.jsx)("directionalLight",{color:16777130,position:[-5,25,-1],intensity:1.2,castShadow:!0,shadow:{camera:{near:.01,far:500,right:30,left:-30,top:30,bottom:-30,width:1024,height:1024,radius:4,bias:-6e-5}}})]})};t.default=function(){return Object(s.jsx)(c.Suspense,{fallback:"LOADING...",children:Object(s.jsxs)(r.a,{colorManagement:!0,camera:{fov:75,aspect:window.innerWidth/window.innerHeight,near:.1,far:1e3},children:[Object(s.jsx)("color",{attach:"background",args:[8965375]}),Object(s.jsx)(p,{}),Object(s.jsxs)(c.Suspense,{fallback:"LOADING...",children:[Object(s.jsx)(h,{url:"collision-world.glb"}),Object(s.jsx)(u,{})]})]})})}}}]);
//# sourceMappingURL=12.28a06c5a.chunk.js.map