(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b90a85a"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}},"82cf":function(t,e,n){},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(C){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),a=new O(r||[]);return o._invoke=E(t,n,a),o}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=u;var f="suspendedStart",l="suspendedYield",d="executing",m="completed",p={};function v(){}function g(){}function y(){}var w={};s(w,o,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==n&&r.call(x,o)&&(w=x);var j=y.prototype=v.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,o,a,c){var s=h(t[i],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;function o(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function E(t,e,n){var r=f;return function(i,o){if(r===d)throw new Error("Generator is already running");if(r===m){if("throw"===i)throw o;return D()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=h(t,e,n);if("normal"===s.type){if(r=n.done?m:l,s.arg===p)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=m,n.method="throw",n.arg=s.arg)}}}function k(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method))return p;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,p;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,p):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,p)}function A(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function F(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(A,this),this.reset(!0)}function P(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:D}}function D(){return{value:e,done:!0}}return g.prototype=y,s(j,"constructor",y),s(y,"constructor",g),g.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},L(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new _(u(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(j),s(j,c,"Generator"),s(j,o,(function(){return this})),s(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=P,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(F),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),F(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;F(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:P(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},d061:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("Mensaje",{attrs:{mensaje:t.mensaje}}),""===t.nombreArchivo?n("div",[n("h4",[t._v("Firma Paciente "+t._s(t.diagnostico.id_paciente))]),n("canvas",{attrs:{id:"myCanvas",width:"560",height:"360"},on:{mousedown:t.beginDrawing,mousemove:t.keepDrawing,mouseup:t.stopDrawing}}),n("br"),n("button",{staticClass:"btn btn-success",on:{click:function(e){return t.crearImagen()}}},[t._v("Guardar")])]):t._e(),""!==t.nombreArchivo?n("div",{staticClass:"mt-5"},[n("h4",[t._v("Firma subida correctamente")]),n("button",{staticClass:"btn btn-outline-success",on:{click:function(e){return t.verFirma()}}},[n("span",{staticClass:"icon-Lupa"})]),n("br"),n("button",{staticClass:"btn btn-danger mt-4",on:{click:function(e){return t.eliminarArchivo()}}},[t._v(" Eliminar y crear otra firma ")]),n("button",{staticClass:"btn btn-success ml-5 mt-4",on:{click:function(e){return t.actualizarFirma()}}},[t._v(" Guardar Firma ")])]):t._e(),n("button",{staticClass:"btn btn-info mt-5",on:{click:function(e){return t.regresar()}}},[t._v(" Regresar ")])],1)},i=[],o=n("1da1"),a=n("ade3"),c=(n("96cf"),n("d3b7"),{props:{diagnostico:Object,editar:Boolean},created:function(){this.nombreArchivo=this.diagnostico.firma_filename},data:function(){var t;return t={x:0,y:0,isDrawing:!1,canvas:null,infoPaciente:null,nombreArchivo:"",binarioImagenFirma:null},Object(a["a"])(t,"nombreArchivo",""),Object(a["a"])(t,"mensaje",{ver:!1}),t},methods:{drawLine:function(t,e,n,r){var i=this.canvas;i.beginPath(),i.strokeStyle="black",i.lineWidth=1,i.moveTo(t,e),i.lineTo(n,r),i.stroke(),i.closePath()},beginDrawing:function(t){this.x=t.offsetX,this.y=t.offsetY,this.isDrawing=!0},keepDrawing:function(t){!0===this.isDrawing&&(this.drawLine(this.x,this.y,t.offsetX,t.offsetY),this.x=t.offsetX,this.y=t.offsetY)},stopDrawing:function(t){!0===this.isDrawing&&(this.drawLine(this.x,this.y,t.offsetX,t.offsetY),this.x=0,this.y=0,this.isDrawing=!1)},verInfoPaciente:function(){var t=this;this.axios.get("paciente/"+this.diagnostico.id_paciente,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.log(e,"respuesta info"),e.data.length>0?t.infoPaciente=e.data[0]:(t.infoPaciente=null,t.crearMensaje(e.data.mensaje,"danger"))})).catch((function(e){t.crearMensaje(e.response.data.mensaje,"danger")}))},crearImagen:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=document.getElementById("myCanvas"),r=new Promise((function(t){n.toBlob(t,"image/png",.95)})),e.next=4,r;case 4:i=e.sent,t.binarioImagenFirma=i,t.subirArchivo();case 7:case"end":return e.stop()}}),e)})))()},subirArchivo:function(){var t=this,e=new FormData;e.append("file",this.binarioImagenFirma,"prueba.png"),this.axios.post("subir",e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),t.nombreArchivo=e.data.filename}))},eliminarArchivo:function(){var t=this;this.axios.delete("subir/"+this.nombreArchivo).then((function(e){console.log(e),t.nombreArchivo="",t.actualizarFirma(),t.$router.push({name:"Diagnostico"})})).catch((function(t){return console.log(t)}))},verFirma:function(){window.open(this.axios.defaults.baseURL+"documentos/"+this.nombreArchivo)},crearMensaje:function(t,e){this.mensaje.ver=!0,this.mensaje.contenido=t,this.mensaje.color=e},actualizarFirma:function(){var t=this;this.diagnostico.firma=this.nombreArchivo,this.axios.put("diagnostico/firma/"+this.diagnostico.id_diagnostico,this.diagnostico,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){console.warn(e,"R diagnostico"),e&&200===e.status&&(t.crearMensaje(e.data.mensaje,"success"),t.$router.push("/diagnostico"))})).catch((function(e){console.log(e),t.crearMensaje(e.response.data.mensaje,"danger")}))},regresar:function(){this.$router.push({name:"Diagnostico"})}},mounted:function(){var t=document.getElementById("myCanvas");this.canvas=t.getContext("2d")}}),s=c,u=(n("f7eb"),n("2877")),h=Object(u["a"])(s,r,i,!1,null,"580df731",null);e["default"]=h.exports},f7eb:function(t,e,n){"use strict";n("82cf")}}]);
//# sourceMappingURL=chunk-7b90a85a.427bc194.js.map