(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{208:function(e){e.exports={translation:{features:"Funktionen","i18n-example":"i18n Beispiel","i18n-support":"i18n Unterst\xfctzung (durch React i18Next)"}}},209:function(e){e.exports={translation:{features:"Features","i18n-example":"i18n Example","i18n-support":"i18n support (via React i18Next)"}}},215:function(e,t,n){e.exports=n(544)},544:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(85),i=n(17),c=n(198),l=n(196),u=n(62),s=n(87),d=n(88),f=n(92),g=n(89),m=n(93),b=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1},n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("Error caught in boundary: ".concat(e," = ").concat(t))}},{key:"render",value:function(){var e=this.state.hasError,t=this.props.children;return e?r.a.createElement("h1",null,"Something went wrong."):t}}],[{key:"getDerivedStateFromError",value:function(){return{hasError:!0}}}]),t}(r.a.Component);b.defaultProps={children:null};var p,E,v,O=b,h=n(91),j=n(38),y=n(24),x=n(211),S=n(135),C=n(199),k=n.n(C),w=n(130),R=n.n(w),I=n(36),T=function(){return window.browserHistory||Object(I.a)()},L=n(11),D=n(545),_=Object(D.a)("APP/SET_LOCALE",function(e){return{locale:e}}),A=n(56),F=n(200),U=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,a=arguments.length>1?arguments[1]:void 0,r=a.type,o=Object(A.a)(a,["type"]);return Object(F.produce)(n,function(t){var n="function"===typeof r?r.toString():r,a=e[n];return a&&a(t,o)})}},N=Object.freeze({locale:"en_US"}),P=U(Object(L.a)({},_,function(e,t){var n=t.payload.locale;e.locale=n}),N),G=Object(D.a)("LOGIN_SUCCESS"),M=Object(D.a)("LOGOUT_SUCCESS"),B=Object(D.a)("RESET_USER_STATE"),z=Object.freeze({isLoggedIn:!0}),V=U((p={},Object(L.a)(p,G,function(e){e.isLoggedIn=!0}),Object(L.a)(p,M,function(e){e.isLoggedIn=!1}),Object(L.a)(p,B,function(e){z}),p),z),X=Object(D.a)("EDITOR/SET_ACTIVE_ELEMENT_ID",function(e){return{id:e}}),H=Object(D.a)("EDITOR/SET_EDITING_STATUS",function(e){return{status:e}}),Y=Object(D.a)("EDITOR/SET_PATH_COLORS",function(e){return{colors:e}}),Z=Object(D.a)("EDITOR/MODIFY_PATH_COLOR",function(e,t){return{i:e,color:t}}),K=Object(D.a)("EDITOR/START_CROP"),W=Object(D.a)("EDITOR/START_SELECTION"),q=Object(D.a)("EDITOR/END_SELECTION"),J={setBg:"EDITOR/SET_BG",addElement:"EDITOR/ADD_ELEMENT",modifyElement:"EDITOR/MODIFY_ELEMENT",setBgImage:"EDITOR/SET_BG_IMAGE",deleteElement:"EDITOR/DELETE_ELEMENT",setFilter:"EDITOR/SET_FILTER",changeGradientColorStops:"EDITOR/CHANGE_BACKGROUND_GRADIENT"},Q=Object(D.a)(J.setBg,function(e){return{color:e}}),$=Object(D.a)(J.addElement,function(e){return{elObject:e}}),ee=Object(D.a)(J.modifyElement,function(e,t){return{id:e,newAttrs:t}}),te=Object(D.a)(J.setBgImage,function(e){return{imgURL:e}}),ne=Object(D.a)(J.deleteElement,function(e){return{id:e}}),ae=Object(D.a)(J.setFilter,function(e){return{filter:e}}),re=Object(D.a)(J.changeGradientColorStops,function(e){return{colorStops:e}}),oe=Object(D.a)("CANVAS_UNDO"),ie=Object(D.a)("CANVAS_REDO"),ce=U((E={},Object(L.a)(E,X,function(e,t){var n=t.payload.id;e.activeElementId=n}),Object(L.a)(E,H,function(e,t){var n=t.payload.status;e.isEditing=n}),Object(L.a)(E,ne,function(e,t){t.payload.id;e.activeElementId=null,e.isEditing=!1}),Object(L.a)(E,$,function(e,t){t.payload.id;e.activeElementId=null,e.isEditing=!1}),Object(L.a)(E,Y,function(e,t){var n=t.payload.colors;e.pathColors=n}),Object(L.a)(E,K,function(e){e.isCropping=!0}),Object(L.a)(E,W,function(e){e.isSelectionActive=!0}),Object(L.a)(E,q,function(e){e.isSelectionActive=!1}),Object(L.a)(E,Z,function(e,t){var n=t.payload,a=n.i,r=n.color;e.pathColors[a]=r}),E),{activeElementId:null,isEditing:!1,isCropping:!1,isSelectionActive:!1,pathColors:[]}),le=U((v={},Object(L.a)(v,Q,function(e,t){var n=t.payload.color;e.background.color=n,e.background.type="color",e.background.imageURL=null,e.background.gradient.fillLinearGradientColorStops=[0,n,1,n],e.filter=""}),Object(L.a)(v,re,function(e,t){var n=t.payload.colorStops;e.background.type="gradient",e.background.imageURL=null,e.background.gradient.fillLinearGradientColorStops=n,e.filter=""}),Object(L.a)(v,$,function(e,t){var n=t.payload.elObject;e.elements.push(n)}),Object(L.a)(v,ee,function(e,t){var n=t.payload,a=n.id,r=n.newAttrs;e.elements=e.elements.map(function(e){return e.id===a?Object(j.a)({},e,r):e})}),Object(L.a)(v,te,function(e,t){var n=t.payload.imgURL;e.background.imageURL=n,e.background.type="imageURL",e.filter=""}),Object(L.a)(v,ne,function(e,t){var n=t.payload.id;e.elements=e.elements.filter(function(e){return e.id!==n})}),Object(L.a)(v,ae,function(e,t){var n=t.payload.filter;e.filter=n}),v),{background:{type:"color",color:"#FF2E2E",imageURL:null,gradient:{fillLinearGradientStartPoint:{x:0,y:0},fillLinearGradientEndPoint:{x:600,y:600},fillLinearGradientColorStops:[0,"#FF2E2E",1,"#FF2E2E"]}},filter:"",elements:[{id:"sdasd",type:"text",text:"Test text",x:0,y:0,align:"left",fontStyle:"normal",fill:"#fff",fontSize:30,rotation:45,fontFamily:"Arial"}]}),ue=T(),se=Object(y.c)({app:P,user:V,editor:ce,canvas:R()(le,{limit:20,undoType:"CANVAS_UNDO",redoType:"CANVAS_REDO",filter:Object(w.includeAction)(Object(h.a)(Object.values(J)))}),router:Object(u.b)(ue)}),de=n(22),fe=n.n(de),ge=n(65),me=fe.a.mark(pe),be=fe.a.mark(Ee);function pe(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.b)({type:"AZZAZAZ"});case 2:case"end":return e.stop()}},me)}function Ee(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.c)(G,pe);case 2:case"end":return e.stop()}},be)}var ve=fe.a.mark(Oe);function Oe(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ge.a)([Ee()]);case 2:case"end":return e.stop()}},ve)}var he=Oe,je={key:"root",storage:k.a,blacklist:["editor","canvas"]},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.initialState,n=void 0===t?{}:t,a=e.middleware,r=void 0===a?[]:a,o=Object(x.a)({onError:function(e,t){console.log("---------ERROR IN REDUX SAGA-----------"),console.log(e),console.log(t)}}),i=Object(S.a)(je,se),c="undefined"!==typeof window&&"function"===typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({actionsBlacklist:[],actionSanitizer:function(e){return Object(j.a)({},e,{type:e.type.toString()})}})||y.d,l=Object(y.e)(i,n,c(y.a.apply(void 0,[o].concat(Object(h.a)(r))))),u=Object(S.b)(l);return o.run(he),{store:l,persistor:u}},xe=n(23),Se=n(10),Ce=n(21),ke={loginSuccess:G,push:Ce.d},we=Object(i.c)(null,ke)(function(e){var t=e.loginSuccess,n=e.push,o=Object(a.useState)({name:"",password:""}),i=Object(Se.a)(o,2),c=i[0],l=i[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),"123"===c.name&&"123"===c.password&&(t(),n("/"))}},r.a.createElement("span",null,"Username:"),r.a.createElement("input",{type:"text",value:c.name,onChange:function(e){return l(Object(j.a)({},c,{name:e.target.value}))}}),r.a.createElement("span",null,"Password:"),r.a.createElement("input",{type:"text",value:c.password,onChange:function(e){return l(Object(j.a)({},c,{password:e.target.value}))}}),r.a.createElement("button",{type:"submit"},"Login")))}),Re=Object(i.c)(function(e){return{isLoggedIn:e.user.isLoggedIn}},null)(function(e){return e.isLoggedIn?r.a.createElement(xe.a,{to:"/editor"}):r.a.createElement(xe.a,{to:"/login"})}),Ie=Object(i.c)(function(e){return{isLoggedIn:e.user.isLoggedIn}},null)(function(e){var t=e.component,n=e.isLoggedIn,a=e.location,o=Object(A.a)(e,["component","isLoggedIn","location"]);return r.a.createElement(xe.b,Object.assign({},o,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(xe.a,{to:{pathname:"/login",state:{from:a}}})}}))}),Te=n(12),Le=n(64),De=n(13),_e=n(128),Ae=n.n(_e),Fe=n(20),Ue={image:void 0,status:"loading"};function Ne(e,t){var n=Object(a.useState)(Ue),r=Object(Se.a)(n,2),o=r[0],i=o.image,c=o.status,l=r[1];return Object(a.useEffect)(function(){if(e){var n=new window.Image;return n.src=e,n.onload=function(){console.log("img.heihght",n.height),console.log("img.width",n.width),l({image:n,status:"loaded"})},t&&(n.crossOrigin=t),function(){return l(Ue)}}},[e,t]),[i,c]}var Pe={text:Fe.Text,rect:Fe.Rect,svg:Fe.Image,image:Fe.Image},Ge=function(e){var t=e.type,n=e.id,o=e.isSelected,i=e.onSelect,c=e.modifyElement,l=e.onTextDblClick,u=e.textEditVisible,s=Object(A.a)(e,["type","id","isSelected","onSelect","modifyElement","onTextDblClick","textEditVisible"]),d=Object(a.useRef)(null),f=Object(a.useRef)(null),g=Object(a.useState)({x:s.x,y:s.y}),m=Object(Se.a)(g,2),b=m[0],p=m[1],E=Pe[t];Object(a.useEffect)(function(){o&&f.current&&(f.current.setNode(d.current),f.current.getLayer().batchDraw())},[o,u]);var v=Ne(s.url),O=Object(Se.a)(v,1)[0];return r.a.createElement(r.a.Fragment,null,u&&o&&"text"===t?null:r.a.createElement(E,Object.assign({draggable:!0,onClick:function(){return!o&&i(n)},ref:d,onDragEnd:function(e){var t=e.target.attrs,a=t.x,r=t.y;a>"600"||a<0||r>"600"||r<0?(e.target.to({x:b.x,y:b.y}),c(n,{x:b.x,y:b.y})):(c(n,{x:e.target.x(),y:e.target.y()}),p({x:e.target.x(),y:e.target.y()}))},onTransformEnd:function(e){var t=e.currentTarget,a=t.scaleX(),r=t.scaleY();t.scaleX(1),t.scaleY(1),c(n,{x:t.x(),y:t.y(),rotation:t.attrs.rotation,width:t.width()*a,height:t.height()*r})},key:n,onDblClick:"text"===t?l:void 0,image:O},s)),o&&!u&&r.a.createElement(Fe.Transformer,{ref:f}))};Ge.defaultProps={textEditVisible:!1};var Me=Ge;function Be(){var e=Object(Te.a)(["\n  display: ",";\n  position: absolute;\n  top: ",";\n  left: ",";\n  transform-origin: left top;\n  background: none;\n  padding: 0;\n  margin: 0;\n  resize: none;\n  border: 1px solid white;\n  outline: none;\n  text-align: ",";\n  font-style: ",";\n  overflow: hidden;\n  line-height: 1;\n  font-size: ",";\n  height: auto;\n  width: ",";\n  color: ",";\n  font-family: ",";\n  transform: ",";\n"]);return Be=function(){return e},e}var ze=Number("600"),Ve=Number("600"),Xe={x:0,y:0,width:ze,height:Ve},He=function(e){var t=e.canvasRef,n=e.elements,o=e.selectedId,i=e.selectShape,c=e.modifyElement,l=e.activeElement,u=e.setEditingStatus,s=e.isEditing,d=e.activeFilter,f=e.background,g=Object(a.useRef)(null),m=Object(a.useRef)(null),b=Object(a.useRef)(null),p=Object(a.useRef)(null);Object(a.useEffect)(function(){b.current&&b.current.cache()},[f.color,f.gradient]);var E=Ne(f.imageURL,"Anonymous"),v=Object(Se.a)(E,1)[0];Object(a.useEffect)(function(){p.current&&(p.current.cache(),p.current.getLayer().draw())},[v]);var O=Object(a.useState)(l?l.text:""),h=Object(Se.a)(O,2),j=h[0],y=h[1],x=Object(a.useState)({x:0,y:0}),S=Object(Se.a)(x,2),C=S[0],k=S[1],w=function(e){var t=e.target.getAbsolutePosition();k({x:t.x,y:t.y}),y(l.text),u(!0),g.current.focus()},R=d?[Ae.a.Filters["".concat(d[0].toUpperCase()).concat(d.slice(1))]]:"",I="color"===f.type?{fill:f.color}:f.gradient;return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement(Fe.Stage,{ref:t,width:ze,height:Ve,onMouseDown:function(e){var t=e.target.attrs.id&&e.target.attrs.id.includes("bg")||e.target===e.target.getStage();t&&o&&i(null),t&&s&&u(!1)}},r.a.createElement(Fe.Layer,{ref:m},f.imageURL?r.a.createElement(Fe.Image,Object.assign({},Xe,{id:"bgImage",ref:p,image:v,filters:R,noise:3})):r.a.createElement(Fe.Rect,Object.assign({},Xe,{id:"bg",ref:b,filters:R,noise:3},I)),n.map(function(e){return r.a.createElement(Me,Object.assign({key:e.id},e,{onSelect:i,isSelected:e.id===o,modifyElement:c,onTextDblClick:w,textEditVisible:s}))}))),r.a.createElement(Ye,{ref:g,value:j,onChange:function(e){g.current.style.height="auto",g.current.style.height="".concat(g.current.scrollHeight,"px"),y(e.target.value)},onKeyDown:function(e){if(13===e.keyCode&&!e.shiftKey){var t=getComputedStyle(g.current),n=t.width,a=t.height;u(!1),c(l.id,{text:j,width:parseInt(n,10),height:parseInt(a,10)})}},xCoord:C.x,yCoord:C.y,textEditVisible:s,el:l&&"text"===l.type&&l}))};He.defaultProps={selectedId:null,activeElement:null,activeFilter:""};var Ye=De.a.textarea(Be(),function(e){return e.textEditVisible?"block":"none"},function(e){return"".concat(e.yCoord,"px")},function(e){return"".concat(e.xCoord,"px")},function(e){return e.el&&e.el.align},function(e){return e.el&&e.el.fontStyle},function(e){return"".concat(e.el&&e.el.fontSize,"px")},function(e){return"".concat(e.el&&e.el.width,"px")},function(e){return e.el&&e.el.fill},function(e){return"".concat(e.el&&e.el.fontFamily)},function(e){return"rotateZ(".concat(e.el&&e.el.rotation,"deg)")}),Ze=He,Ke=n(204),We={x:0,y:0,width:0,height:0,stroke:"#2532de",strokeWidth:1,dash:[5,10]},qe=function(e){var t=e.activeElement,n=e.secondCanvasRef,o=Ne(t.url),i=Object(Se.a)(o,1)[0],c=Object(a.useState)(!1),l=Object(Se.a)(c,2),u=l[0],s=l[1],d=Object(a.useRef)(null),f=Object(a.useRef)(null),g=Object(a.useState)({x:0,y:0}),m=Object(Se.a)(g,2),b=m[0],p=m[1],E=Object(a.useState)(We),v=Object(Se.a)(E,2),O=v[0],h=v[1],y=Object(a.useState)(!1),x=Object(Se.a)(y,2),S=x[0],C=x[1];Object(a.useEffect)(function(){u&&d.current&&(d.current.setNode(f.current),d.current.getLayer().batchDraw())},[u]);var k=function(){C(!1),p({x:0,y:0}),h(We)},w=Object(Ke.throttle)(function(e){if(S){var t=Math.abs(e.evt.offsetX-b.x),n=Math.abs(e.evt.offsetY-b.y);(t>"600"||n>"600")&&k();var a=e.evt.offsetX-b.x>0?b.x:e.evt.offsetX,r=e.evt.offsetY-b.y>0?b.y:e.evt.offsetY;h(Object(j.a)({},O,{x:a,y:r,width:t,height:n}))}},500);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Fe.Stage,{height:"600",width:"600",ref:n},r.a.createElement(Fe.Layer,{onMouseDown:function(e){!function(e){e.target.attrs.id&&e.target.attrs.id.includes("image")||e.target.attrs.name&&e.target.attrs.name.includes("anchor")||(C(!0),p({x:e.evt.offsetX,y:e.evt.offsetY}))}(e),(e.target.attrs.id&&e.target.attrs.id.includes("bg")||e.target===e.target.getStage())&&u&&s(!1)},onMouseUp:k,onMouseMove:w,onMouseLeave:k},r.a.createElement(Fe.Rect,{id:"bg",x:0,y:0,height:"600",width:"600",fill:"lightgrey"}),r.a.createElement(Fe.Image,{draggable:!0,id:"image",onClick:function(){return s(!0)},ref:f,image:i,x:0,y:0,height:t.originalHeight,width:t.originalWidth}),u&&r.a.createElement(Fe.Transformer,{ref:d}),S&&r.a.createElement(Fe.Rect,O))))};qe.defaultProps={activeElement:null};var Je=qe,Qe=n(53);function $e(){var e=Object(Te.a)(["\n  position: relative;\n  width: 25px;\n  height: 25px;\n  border: 1px solid black;\n  background-color: ",";\n"]);return $e=function(){return e},e}function et(){var e=Object(Te.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n"]);return et=function(){return e},e}function tt(){var e=Object(Te.a)(["\n  display: none;\n"]);return tt=function(){return e},e}function nt(){var e=Object(Te.a)(["\n  position: absolute;\n  z-index: 2;\n  top: 12%;\n  left: 90%;\n"]);return nt=function(){return e},e}function at(){var e=Object(Te.a)(["\n  display: flex;\n  position: relative;\n  flex-direction: column;\n  height: 100%;\n  width: 10%;\n  justify-content: space-around;\n"]);return at=function(){return e},e}var rt=function(e){var t=e.setBg,n=e.background,o=e.addText,i=e.addRect,c=e.addSvg,l=e.setBgImage,u=e.setFilter,s=e.activeFilter,d=e.changeGradientColorStops,f=e.addImage,g=Object(a.useState)(!1),m=Object(Se.a)(g,2),b=m[0],p=m[1],E=Object(a.useState)(!1),v=Object(Se.a)(E,2),O=v[0],h=v[1],j=Object(a.useState)(1),y=Object(Se.a)(j,2),x=y[0],S=y[1],C=Object(a.useRef)(null),k=function(e){S(e),h(!0)};return r.a.createElement(ot,null,r.a.createElement(ct,{type:"file",ref:C,onChange:function(e){var t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onloadend=function(){l(t.result),C.current.value=""}}}),b&&r.a.createElement(it,{color:n.color,onChangeComplete:function(e){t(e.hex),p(!1)}}),r.a.createElement("button",{type:"button",onClick:function(){return p(!b)}},"Background color"),r.a.createElement(lt,null,O&&r.a.createElement(it,{color:n.gradient.fillLinearGradientColorStops[x],onChangeComplete:function(e){var t=n.color,a=n.gradient.fillLinearGradientColorStops,r=function(e){return"rgba(".concat(e.r,",").concat(e.g,",").concat(e.b,",").concat(e.a,")")},o=1===x?[0,r(e.rgb),1,a[3]||t]:[0,a[1]||t,1,r(e.rgb)];d(o),h(!1)}}),r.a.createElement(ut,{clr:n.gradient.fillLinearGradientColorStops[1],onClick:function(){return k(1)}}),r.a.createElement(ut,{clr:n.gradient.fillLinearGradientColorStops[3],onClick:function(){return k(3)}})),r.a.createElement("button",{type:"button",onClick:o},"Text"),r.a.createElement("button",{type:"button",onClick:i},"Add rectangle"),r.a.createElement("button",{type:"button",onClick:function(){C.current.click()}},"Download image"),r.a.createElement("button",{type:"button",onClick:c},"Add svg"),r.a.createElement("button",{type:"button",onClick:f},"Add image"),r.a.createElement("select",{name:"filters",id:"filters",onChange:function(e){u(e.target.value)},value:s},r.a.createElement("option",{value:""},"None"),r.a.createElement("option",{value:"blur"},"Blur"),r.a.createElement("option",{value:"brighten"},"Brighten"),r.a.createElement("option",{value:"contrast"},"Contrast"),r.a.createElement("option",{value:"enhance"},"Enhance"),r.a.createElement("option",{value:"grayscale"},"Grayscale"),r.a.createElement("option",{value:"noise"},"Noise")))};rt.defaultProps={activeFilter:""};var ot=De.a.div(at()),it=Object(De.a)(Qe.SketchPicker)(nt()),ct=De.a.input(tt()),lt=De.a.div(et()),ut=De.a.div($e(),function(e){return e.clr}),st=rt;function dt(){var e=Object(Te.a)(["\n  margin-right: 10px;\n"]);return dt=function(){return e},e}function ft(){var e=Object(Te.a)(["\n  display: flex;\n  margin-bottom: 15px;\n  justify-content: flex-end;\n  width: 100%;\n"]);return ft=function(){return e},e}var gt=function(e){var t=e.deleteElement,n=e.activeElement,a=e.undo,o=e.redo,i=e.pastStatesExist,c=e.futureStatesExist;return r.a.createElement(mt,null,r.a.createElement(bt,{disabled:!n,onClick:t},"Remove"),r.a.createElement(bt,{disabled:!i,onClick:function(){return a()}},"Undo"),r.a.createElement(bt,{disabled:!c,onClick:function(){return o()}},"Redo"))};gt.defaultProps={activeElement:null};var mt=De.a.div(ft()),bt=De.a.button(dt()),pt=gt,Et=n(90),vt=Object(Et.a)([function(e){return e.canvas.present.elements},function(e){return e.editor.activeElementId}],function(e,t){return e.find(function(e){return e.id===t})});function Ot(){var e=Object(Te.a)(["\n  background-color: ",";\n  width: 25px;\n  height: 25px;\n  margin-right: 15px;\n"]);return Ot=function(){return e},e}function ht(){var e=Object(Te.a)(["\n  position: absolute;\n  z-index: 5;\n"]);return ht=function(){return e},e}function jt(){var e=Object(Te.a)(["\n  position: relative;\n  display: ",";\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 15px;\n"]);return jt=function(){return e},e}var yt=function(e){var t=e.pathColors,n=e.modifyPathColor,o=e.modifyElement,i=e.activeElement,c=Object(a.useState)(!1),l=Object(Se.a)(c,2),u=l[0],s=l[1],d=Object(a.useState)("#fff"),f=Object(Se.a)(d,2),g=f[0],m=f[1],b=Object(a.useState)(null),p=Object(Se.a)(b,2),E=p[0],v=p[1],O=function(){var e=Object(Le.a)(fe.a.mark(function e(t,n){var a,r,c,l,u,s,d;return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||"svg"!==i.type){e.next=15;break}return e.next=3,fetch(i.url);case 3:return a=e.sent,e.next=6,a.text();case 6:r=e.sent,c=new DOMParser,l=c.parseFromString(r,"image/svg+xml"),l.querySelectorAll("path")[t].setAttribute("fill",n),u=(new XMLSerializer).serializeToString(l),s=new Blob([u],{type:"image/svg+xml"}),d=URL.createObjectURL(s),o(i.id,{url:d});case 15:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}();return r.a.createElement(xt,{visible:t.length},u&&r.a.createElement(St,{color:g,onChangeComplete:function(e){m(e.hex),n(E,e.hex),O(E,e.hex),v(null),s(!1)}}),t.map(function(e,t){return r.a.createElement(Ct,{key:"".concat(e).concat(t),color:e,onClick:function(){return function(e,t){s(!1),v(e),m(t),s(!0)}(t,e)}})}))};yt.defaultProps={activeElement:null};var xt=De.a.div(jt(),function(e){return e.visible?"flex":"none"}),St=Object(De.a)(Qe.SketchPicker)(ht()),Ct=De.a.div(Ot(),function(e){return e.color}),kt={modifyPathColor:Z,modifyElement:ee},wt=Object(i.c)(function(e){return{pathColors:e.editor.pathColors,activeElement:vt(e)}},kt)(yt);function Rt(){var e=Object(Te.a)(["\n  width: 20px;\n  height: 20px;\n  background-color: ",";\n  margin-left: 15px;\n  border: 1px solid #000;\n"]);return Rt=function(){return e},e}function It(){var e=Object(Te.a)(["\n  position: absolute;\n  z-index: 5;\n"]);return It=function(){return e},e}function Tt(){var e=Object(Te.a)(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  margin-bottom: 15px;\n"]);return Tt=function(){return e},e}var Lt=De.a.div(Tt()),Dt=Object(De.a)(Qe.SketchPicker)(It()),_t=De.a.div(Rt(),function(e){return e.clr}),At={modifyElement:ee},Ft=Object(i.c)(function(e){return{activeElement:vt(e)}},At)(function(e){var t=e.modifyElement,n=e.activeElement,o=Object(a.useState)(n.fontSize),i=Object(Se.a)(o,2),c=i[0],l=i[1],u=Object(a.useState)(!1),s=Object(Se.a)(u,2),d=s[0],f=s[1];return r.a.createElement(Lt,null,d&&r.a.createElement(Dt,{color:n.fill,onChangeComplete:function(e){t(n.id,{fill:e.hex}),f(!1)}}),r.a.createElement("select",{name:"align",id:"align",onChange:function(e){t(n.id,{align:e.target.value})},value:n.align},r.a.createElement("option",{value:"left"},"Left"),r.a.createElement("option",{value:"center"},"Center"),r.a.createElement("option",{value:"right"},"Right")),r.a.createElement("button",{type:"button",onClick:function(){var e="normal"===n.fontStyle?"bold":"normal";t(n.id,{fontStyle:e})}},"Bold"),r.a.createElement("button",{type:"button",onClick:function(){var e="normal"===n.fontStyle?"italic":"normal";t(n.id,{fontStyle:e})}},"Italic"),r.a.createElement("button",{type:"button",onClick:function(){var e=n.rotation-45,a=e<360?e+360:e;t(n.id,{rotation:a})}},"Rotate -45"),r.a.createElement("button",{type:"button",onClick:function(){var e=n.rotation+45,a=e>360?e-360:e;t(n.id,{rotation:a})}},"Rotate +45"),r.a.createElement("input",{type:"number",value:c,onChange:function(e){l(e.target.value),t(n.id,{fontSize:Number(e.target.value)})},max:50,min:1,step:1}),r.a.createElement(_t,{clr:n.fill,onClick:function(){return f(!0)}}))});function Ut(){var e=Object(Te.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: flex-end;\n  margin-bottom: 15px;\n"]);return Ut=function(){return e},e}var Nt=De.a.div(Ut()),Pt=function(e){var t=e.onCropBtnClick;return r.a.createElement(Nt,null,r.a.createElement("button",{type:"button",onClick:t},"Crop"))};function Gt(){var e=Object(Te.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  width: 55%;\n  justify-content: space-between;\n"]);return Gt=function(){return e},e}function Mt(){var e=Object(Te.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return Mt=function(){return e},e}var Bt=function(e){var t=e.setBG,n=e.addElement,o=e.elements,i=e.modifyElement,c=e.activeElId,l=e.setActiveElementId,u=e.setBgImage,s=e.deleteElement,d=e.activeElement,f=e.setEditingStatus,g=e.isEditing,m=e.undo,b=e.redo,p=e.pastStatesExist,E=e.futureStatesExist,v=e.setFilter,O=e.activeFilter,h=e.setPathColors,j=e.pathColors,y=e.background,x=e.changeGradientColorStops,S=e.isCropping,C=e.startCrop;Object(a.useEffect)(function(){Object(Le.a)(fe.a.mark(function e(){var t,n,a,r,o,i,c;return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!d||"svg"!==d.type){e.next=15;break}return e.next=3,fetch(d.url);case 3:return t=e.sent,e.next=6,t.text();case 6:for(n=e.sent,a=new DOMParser,r=a.parseFromString(n,"image/svg+xml"),o=r.querySelectorAll("path"),i=[],c=0;c<o.length;c+=1)i.push(o[c].getAttribute("fill"));h(i.filter(function(e){return Boolean(e)})),e.next=16;break;case 15:j.length&&(!d||d&&"svg"!==d.type)&&h([]);case 16:case"end":return e.stop()}},e)}))()},[c]);var k=function(e){46===e.keyCode&&!g&&c&&s(c)};Object(a.useEffect)(function(){return document.addEventListener("keydown",k),function(){return document.removeEventListener("keydown",k)}},[c,g]);var w=Object(a.useRef)(null),R=Object(a.useRef)(null),I=Object(a.useCallback)(function(){n({id:String(Math.random()),type:"text",text:"Numba # ".concat(Math.floor(100*Math.random())),x:260,y:290,rotation:0,fill:"#fff",fontSize:30,fontFamily:"Arial"})}),T=Object(a.useCallback)(function(){n({id:String(Math.random()),type:"rect",width:100,height:100,x:250,y:250,rotation:0,stroke:"#000",strokeWidth:2,fill:"blue"})}),L=Object(a.useCallback)(Object(Le.a)(fe.a.mark(function e(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n({id:String(Math.random()),type:"svg",url:"https://image.flaticon.com/icons/svg/1279/1279553.svg",x:200,y:200,width:200,height:200});case 1:case"end":return e.stop()}},e)}))),D=Object(a.useCallback)(function(){n({id:String(Math.random()),type:"image",url:"https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",originalWidth:500,originalHeight:281,x:0,y:0,width:"600",height:300})}),_=Object(a.useCallback)(function(){c&&!g&&s(c)});return r.a.createElement(zt,null,r.a.createElement(Vt,null,d&&"svg"===d.type&&r.a.createElement(wt,null),d&&"text"===d.type&&r.a.createElement(Ft,null),d&&"image"===d.type&&!S&&r.a.createElement(Pt,{onCropBtnClick:C}),r.a.createElement(pt,{deleteElement:_,activeElement:d,undo:m,redo:b,pastStatesExist:p,futureStatesExist:E}),r.a.createElement(st,{background:y,setBg:t,addText:I,addRect:T,setBgImage:u,setFilter:v,activeFilter:O,addSvg:L,addImage:D,changeGradientColorStops:x}),S?r.a.createElement(Je,{secondCanvasRef:R,activeElement:d}):r.a.createElement(Ze,{background:y,canvasRef:w,elements:o,selectShape:l,selectedId:c,modifyElement:i,activeElement:d,setEditingStatus:f,isEditing:g,activeFilter:O})),r.a.createElement("button",{type:"button",style:{marginBottom:"100px",zIndex:111},onClick:function(){var e=document.createElement("a"),t=w.current.getStage().toDataURL();e.setAttribute("href",t),e.setAttribute("download","imaaage.png"),e.setAttribute("crossOrigin","anonymous"),e.click()}},"Generate png"))};Bt.defaultProps={activeElId:null,activeElement:null,activeFilter:""};var zt=De.a.div(Mt()),Vt=De.a.div(Gt()),Xt={setBG:Q,addElement:$,modifyElement:ee,setActiveElementId:X,setBgImage:te,deleteElement:ne,setEditingStatus:H,undo:oe,redo:ie,setFilter:ae,setPathColors:Y,changeGradientColorStops:re,startCrop:K},Ht=Object(i.c)(function(e){return{background:e.canvas.present.background,elements:e.canvas.present.elements,activeElId:e.editor.activeElementId,activeElement:vt(e),isEditing:e.editor.isEditing,pastStatesExist:e.canvas.past.length,futureStatesExist:e.canvas.future.length,activeFilter:e.canvas.present.filter,pathColors:e.editor.pathColors,isCropping:e.editor.isCropping}},Xt)(Bt),Yt=function(){return r.a.createElement("div",null,r.a.createElement(xe.d,null,r.a.createElement(xe.b,{path:"/editor",component:Ht}),r.a.createElement(xe.b,{path:"/about",component:function(){return r.a.createElement("div",null,"about")}}),r.a.createElement(xe.b,{path:"/details",component:function(){return r.a.createElement("div",null,"details")}}),r.a.createElement(xe.a,{to:"/"})))},Zt=function(){return r.a.createElement(xe.d,null,r.a.createElement(xe.b,{exact:!0,path:"/",component:Re}),r.a.createElement(xe.b,{path:"/login",component:we}),r.a.createElement(Ie,{path:"/",component:Yt}))},Kt=n(57),Wt=n(210),qt=Object(Et.a)([function(e){return e.app}],function(e){return e.locale}),Jt=n(208),Qt=n(209);Kt.a.init({fallbackLng:"en_US",fallbackNS:["translation"],resources:{de_DE:Jt,en_US:Qt},parseMissingKeyHandler:function(e){return e}}),Kt.a.languages=["de_DE","en_US"];var $t=function(e){function t(){return Object(s.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.locale;Kt.a.changeLanguage(e)}},{key:"componentDidUpdate",value:function(e){var t=this.props.locale;e.locale!==t&&Kt.a.changeLanguage(t)}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement(Wt.a,{i18n:Kt.a},e)}}]),t}(r.a.PureComponent);$t.defaultProps={children:null,locale:"en_US"};var en=Object(xe.f)(Object(i.c)(function(e){return{locale:qt(e)}},null,null,{pure:!1})($t)),tn=T(),nn=ye({initialState:window.__PRELOADED_STATE__,middleware:[Object(l.a)(tn)]}),an=nn.store,rn=nn.persistor;Object(o.render)(r.a.createElement(i.a,{store:an},r.a.createElement(c.a,{loading:null,persistor:rn},r.a.createElement(u.a,{history:tn},r.a.createElement(en,null,r.a.createElement(O,null,r.a.createElement(Zt,null)))))),document.getElementById("root"))}},[[215,1,2]]]);
//# sourceMappingURL=main.1a958c7e.chunk.js.map