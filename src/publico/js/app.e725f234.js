(function(e){function a(a){for(var n,r,s=a[0],i=a[1],u=a[2],l=0,d=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(a);while(d.length)d.shift()();return o.push.apply(o,u||[]),t()}function t(){for(var e,a=0;a<o.length;a++){for(var t=o[a],n=!0,r=1;r<t.length;r++){var s=t[r];0!==c[s]&&(n=!1)}n&&(o.splice(a--,1),e=i(i.s=t[0]))}return e}var n={},r={app:0},c={app:0},o=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1df67b7e":"ae531c99","chunk-2ed23306":"6d83d120","chunk-2efe71da":"160122da","chunk-3a525c2c":"7a3046c8","chunk-5292eaa6":"b26056c8","chunk-5b4347b3":"f84ba5f9","chunk-69235ae3":"7379e50b","chunk-6c25cd41":"698fac43","chunk-775ac96a":"09560ac8","chunk-775b7459":"75b54396","chunk-775bb5d7":"744d23af","chunk-775e5ec1":"2f8ffacd","chunk-775ed3cf":"b2b9676a","chunk-7771c12d":"bc6a55f4","chunk-7772049d":"10fed4ae","chunk-77723644":"54e7a724","chunk-7772b049":"3efeb325","chunk-7772db28":"98535d8b","chunk-77739327":"ffbdb52b","chunk-790a1dc8":"320510cb","chunk-7b90a85a":"427bc194","chunk-7c316a07":"adf74454","chunk-7e739ca1":"5415d2c7","chunk-8e7cd4aa":"df967b2e","chunk-a1b8dedc":"61678fff","chunk-d037fe9a":"3ab0fdd1"}[e]+".js"}function i(a){if(n[a])return n[a].exports;var t=n[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var a=[],t={"chunk-1df67b7e":1,"chunk-2ed23306":1,"chunk-2efe71da":1,"chunk-3a525c2c":1,"chunk-5b4347b3":1,"chunk-69235ae3":1,"chunk-790a1dc8":1,"chunk-7b90a85a":1,"chunk-7c316a07":1,"chunk-7e739ca1":1,"chunk-8e7cd4aa":1,"chunk-d037fe9a":1};r[e]?a.push(r[e]):0!==r[e]&&t[e]&&a.push(r[e]=new Promise((function(a,t){for(var n="css/"+({}[e]||e)+"."+{"chunk-1df67b7e":"a9dbdc87","chunk-2ed23306":"6b962233","chunk-2efe71da":"a9dbdc87","chunk-3a525c2c":"ef63b038","chunk-5292eaa6":"31d6cfe0","chunk-5b4347b3":"d8d7f43e","chunk-69235ae3":"a9dbdc87","chunk-6c25cd41":"31d6cfe0","chunk-775ac96a":"31d6cfe0","chunk-775b7459":"31d6cfe0","chunk-775bb5d7":"31d6cfe0","chunk-775e5ec1":"31d6cfe0","chunk-775ed3cf":"31d6cfe0","chunk-7771c12d":"31d6cfe0","chunk-7772049d":"31d6cfe0","chunk-77723644":"31d6cfe0","chunk-7772b049":"31d6cfe0","chunk-7772db28":"31d6cfe0","chunk-77739327":"31d6cfe0","chunk-790a1dc8":"1c134285","chunk-7b90a85a":"d154018c","chunk-7c316a07":"a9dbdc87","chunk-7e739ca1":"a9dbdc87","chunk-8e7cd4aa":"e050af3f","chunk-a1b8dedc":"31d6cfe0","chunk-d037fe9a":"89b65475"}[e]+".css",c=i.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===c))return a()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===n||l===c)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var n=a&&a.target&&a.target.src||c,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[e],f.parentNode.removeChild(f),t(o)},f.href=c;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){r[e]=0})));var n=c[e];if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(a,t){n=c[e]=[a,t]}));a.push(n[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(a){l.onerror=l.onload=null,clearTimeout(f);var t=c[e];if(0!==t){if(t){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,t[1](d)}c[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(a)},i.m=e,i.c=n,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)i.d(t,n,function(a){return e[a]}.bind(null,n));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=a,u=u.slice();for(var d=0;d<u.length;d++)a(u[d]);var f=l;o.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},2116:function(e,a,t){"use strict";t("fa36")},4678:function(e,a,t){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf755","./tlh.js":"cf755","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"container",attrs:{id:"app"}},[null===e.token?t("NavegacionLanding"):e._e(),null!==e.token?t("NavegacionUsuario"):e._e(),t("router-view",{staticClass:"contenedor-vistas"}),t("Footer")],1)},c=[],o=t("5530"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"navbar fixed-top navbar-expand-md",attrs:{id:"navegacion"}},[t("router-link",{staticClass:"navbar-brand titulo",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/"}},[t("span",{staticClass:"text-dark"},[e._v("Consultorio")]),e._v(" "),t("br"),e._v(" "),t("span",{staticClass:"color-verde-principal subtitulo-logo"},[e._v("Claudia Hernandez")])]),e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav ml-auto"},[t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/"}},[e._v("Inicio")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/nosotros"}},[e._v("Desarrolladores")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"color-verde-principal",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/inicio-sesion"}},[e._v("Iniciar sesión")])],1)])])],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"icon-Menu"})])}],u=t("2877"),l={},d=Object(u["a"])(l,s,i,!1,null,null,null),f=d.exports,b=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{staticClass:"navbar fixed-top navbar-expand-md",attrs:{id:"navegacion"}},[t("router-link",{staticClass:"navbar-brand titulo",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/"}},[t("span",{staticClass:"text-dark"},[e._v("Consultorio")]),e._v(" "),t("br"),t("span",{staticClass:"color-verde-principal subtitulo-logo"},[e._v("Claudia Hernandez")])]),e._m(0),t("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav ml-auto"},[t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/pacientes"}},[e._v("Pacientes")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/agenda"}},[e._v("Citas")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/examen"}},[e._v("Examen")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/procedimiento"}},[e._v("Procedimientos")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/diagnostico"}},[e._v("Diagnósticos")])],1),t("li",{staticClass:"nav-item ml-4"},[t("router-link",{staticClass:"text-dark",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show",to:"/factura"}},[e._v("Facturas")])],1),t("li",{staticClass:"nav-item ml-4"},[t("button",{staticClass:"btn btn-outline-success",attrs:{"data-toggle":"collapse","data-target":".navbar-collapse.show"},on:{click:e.cerrarSesion}},[e._v(" Cerrar sesión ")])])])])],1)},m=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"icon-Menu"})])}],h=t("2f62"),p={methods:Object(o["a"])({},Object(h["b"])(["cerrarSesion"]))},k=p,j=(t("2116"),Object(u["a"])(k,b,m,!1,null,"00f70e84",null)),g=j.exports,v=function(){var e=this,a=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"footer"},[t("p",[e._v("Seminario Integrador III UFPS, Cúcuta. 2022")])])}],y={},z=Object(u["a"])(y,v,C,!1,null,null,null),_=z.exports,x={components:{NavegacionLanding:f,NavegacionUsuario:g,Footer:_},computed:Object(o["a"])({},Object(h["c"])(["token"]))},w=x,E=Object(u["a"])(w,r,c,!1,null,null,null),A=E.exports,q=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));n["default"].use(h["a"]);var O=new h["a"].Store({state:{token:null!==localStorage.getItem("token")?localStorage.getItem("token"):null},mutations:{modificarToken:function(e,a){e.token=a}},actions:{guardarToken:function(e,a){var t=e.commit;t("modificarToken",a),localStorage.setItem("token",a)},cerrarSesion:function(e){var a=e.commit;a("modificarToken",null),localStorage.removeItem("token"),N.push({name:"InicioSesion"})}},getters:{token:function(e){return e.token}},modules:{}});n["default"].use(q["a"]);var S=[{path:"/",name:"Inicio",component:function(){return t.e("chunk-6c25cd41").then(t.bind(null,"1536"))}},{path:"/menu",name:"Menu",component:function(){return t.e("chunk-d037fe9a").then(t.bind(null,"6244"))},meta:{requiereAutorizacion:!0}},{path:"/nosotros",name:"Nosotros",component:function(){return t.e("chunk-a1b8dedc").then(t.bind(null,"19ed"))}},{path:"/inicio-sesion",name:"InicioSesion",component:function(){return t.e("chunk-775ac96a").then(t.bind(null,"03dc"))}},{path:"/registro",name:"Registro",component:function(){return t.e("chunk-775ed3cf").then(t.bind(null,"917f"))},meta:{requiereAutorizacion:!0}},{path:"/pacientes",name:"Pacientes",component:function(){return t.e("chunk-7e739ca1").then(t.bind(null,"47db"))},meta:{requiereAutorizacion:!0}},{path:"/paciente-editar",name:"PacienteEditar",component:function(){return t.e("chunk-5b4347b3").then(t.bind(null,"c745"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/paciente-eliminar",name:"PacienteEliminar",component:function(){return t.e("chunk-775bb5d7").then(t.bind(null,"24e2"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/odontograma",name:"Odontograma",component:function(){return t.e("chunk-790a1dc8").then(t.bind(null,"0d29"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/odontograma-eliminar",name:"OdontogramaEliminar",component:function(){return t.e("chunk-7772049d").then(t.bind(null,"c800"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/agenda",name:"Agenda",component:function(){return t.e("chunk-5292eaa6").then(t.bind(null,"1215"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/examen",name:"Examen",component:function(){return t.e("chunk-1df67b7e").then(t.bind(null,"b8c4"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/examen-registro",name:"ExamenRegistro",component:function(){return t.e("chunk-7772b049").then(t.bind(null,"cddd"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/examen-eliminar",name:"ExamenEliminar",component:function(){return t.e("chunk-77723644").then(t.bind(null,"bd71"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/examen-editar",name:"ExamenEditar",component:function(){return t.e("chunk-2ed23306").then(t.bind(null,"f78b"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/procedimiento",name:"Procedimiento",component:function(){return t.e("chunk-69235ae3").then(t.bind(null,"e2d0"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/procedimiento-registro",name:"ProcedimientoRegistro",component:function(){return t.e("chunk-7771c12d").then(t.bind(null,"ad13"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/procedimiento-eliminar",name:"ProcedimientoEliminar",component:function(){return t.e("chunk-7772db28").then(t.bind(null,"e33e"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/procedimiento-editar",name:"ProcedimientoEditar",component:function(){return t.e("chunk-8e7cd4aa").then(t.bind(null,"8db9"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/diagnostico",name:"Diagnostico",component:function(){return t.e("chunk-2efe71da").then(t.bind(null,"a127"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/diagnostico-registro",name:"DiagnosticoRegistro",component:function(){return t.e("chunk-775e5ec1").then(t.bind(null,"8133"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/diagnostico-eliminar",name:"DiagnosticoEliminar",component:function(){return t.e("chunk-775b7459").then(t.bind(null,"0b87"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/diagnostico-editar",name:"DiagnosticoEditar",component:function(){return t.e("chunk-3a525c2c").then(t.bind(null,"8296"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/factura",name:"Factura",component:function(){return t.e("chunk-7c316a07").then(t.bind(null,"e002"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/factura-abono",name:"FacturaAbono",component:function(){return t.e("chunk-77739327").then(t.bind(null,"ed55"))},props:!0,meta:{requiereAutorizacion:!0}},{path:"/firma",name:"Firma",component:function(){return t.e("chunk-7b90a85a").then(t.bind(null,"d061"))},props:!0,meta:{requiereAutorizacion:!0}}],P=new q["a"]({mode:"history",base:"/",routes:S});P.beforeEach((function(e,a,t){var n=e.matched.some((function(e){return e.meta.requiereAutorizacion}));n&&null===O.state.token?t({name:"InicioSesion"}):t()}));var N=P,I=t("bc3a"),T=t.n(I),D=t("130e"),F=t("5f5b"),L=t("b1e0"),M=(t("f9e3"),t("2dd8"),t("959d"));t("e012");T.a.defaults.baseURL="https://sg-odontologia.herokuapp.com/",n["default"].config.productionTip=!1,n["default"].use(D["a"],T.a),n["default"].use(F["a"]),n["default"].use(L["a"]),n["default"].use(M["a"]),new n["default"]({router:N,store:O,render:function(e){return e(A)}}).$mount("#app")},fa36:function(e,a,t){}});
//# sourceMappingURL=app.e725f234.js.map