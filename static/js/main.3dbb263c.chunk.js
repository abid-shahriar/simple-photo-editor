(this["webpackJsonpreact-photo-editing-app"]=this["webpackJsonpreact-photo-editing-app"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/demopic.417ed6dc.jpg"},function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),s=a.n(c);a(10);var l=function(e){var t=e.name,a=e.setValue,n=e.value,c=e.min,s=e.max;return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:t},t,":"),r.a.createElement("input",{onChange:function(e){a(e.target.value)},name:t,type:"range",min:c,max:s,value:n}))},u=a(1),i=Object(n.createContext)();var m=function(e){var t=Object(n.useState)(100),a=Object(u.a)(t,2),c=a[0],s=a[1],l=Object(n.useState)(100),m=Object(u.a)(l,2),o=m[0],v=m[1],b=Object(n.useState)(0),p=Object(u.a)(b,2),E=p[0],g=p[1],h=Object(n.useState)(0),j=Object(u.a)(h,2),d=j[0],O=j[1],x=Object(n.useState)(0),S=Object(u.a)(x,2),f=S[0],y=S[1],V=Object(n.useState)(0),C=Object(u.a)(V,2),B=C[0],I=C[1],N=Object(n.useState)(100),k=Object(u.a)(N,2),w=k[0],G=k[1],H=Object(n.useState)(0),J=Object(u.a)(H,2),F={brightness:c,contrast:o,hue:E,blur:d,grayscale:f,invert:B,saturate:w,sepia:J[0],setBrightness:s,setContrast:v,setHue:g,setBlur:O,setGrayscale:y,setInvert:I,setSaturate:G,setSepia:J[1]};return r.a.createElement(i.Provider,{value:F},e.children)};var o=function(){var e=Object(n.useContext)(i),t=e.brightness,a=e.contrast,c=e.hue,s=e.blur,u=e.grayscale,m=e.invert,o=e.saturate,v=e.sepia,b=e.setBrightness,p=e.setContrast,E=e.setHue,g=e.setBlur,h=e.setGrayscale,j=e.setInvert,d=e.setSaturate,O=e.setSepia;return r.a.createElement("div",{className:"controls-container"},r.a.createElement("h2",null,"Edit your photo"),r.a.createElement(l,{name:"brightness",setValue:b,min:0,max:200,value:t}),r.a.createElement(l,{name:"contrast",setValue:p,min:0,max:200,value:a}),r.a.createElement(l,{name:"hue",setValue:E,min:0,max:360,value:c}),r.a.createElement(l,{name:"blur",setValue:g,min:0,max:100,value:s}),r.a.createElement(l,{name:"grayscale",setValue:h,min:0,max:100,value:u}),r.a.createElement(l,{name:"invert",setValue:j,min:0,max:100,value:m}),r.a.createElement(l,{name:"saturate",setValue:d,min:0,max:200,value:o}),r.a.createElement(l,{name:"sepia",setValue:O,min:0,max:100,value:v}))},v=a(4),b=a.n(v);var p=function(){var e=Object(n.useContext)(i),t=e.brightness,a=e.contrast,c=e.hue,s=e.blur,l=e.grayscale,u=e.invert,m=e.saturate,o=e.sepia;return r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{style:{filter:"grayscale(".concat(l,"%) blur(").concat(s,"px) contrast(").concat(a,"%) hue-rotate(").concat(c,"deg) invert(").concat(u,"%)\n           saturate(").concat(m,"%) sepia(").concat(o,"%) brightness(").concat(t,"%)")},src:b.a,alt:"random"}))};var E=function(){return r.a.createElement(m,null,r.a.createElement("div",{className:"main-container"},r.a.createElement(p,null),r.a.createElement(o,null)))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.3dbb263c.chunk.js.map