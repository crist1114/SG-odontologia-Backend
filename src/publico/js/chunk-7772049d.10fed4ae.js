(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7772049d"],{"00ef":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[e.mensaje.ver?a("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+e.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[a("h6",[e._v(e._s(e.mensaje.contenido))]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.cerrar}},[e._v("x")])]):e._e()])},s=[],o={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,5e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},r=o,i=a("2877"),c=Object(i["a"])(r,n,s,!1,null,null,null);t["a"]=c.exports},c800:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("h4",[e._v("¿Desea eliminar a "+e._s(e.odontograma.descripcion)+" ?")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.eliminar()}}},[e._v("Eliminar")])]),a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-info",on:{click:e.cancelar}},[e._v("Cancelar")])])]),a("Mensaje",{attrs:{mensaje:e.mensaje}})],1)},s=[],o=a("00ef"),r={data:function(){return{mensaje:{ver:!1}}},props:{odontograma:Object},methods:{crearMensaje:function(e,t){this.mensaje.ver=!0,this.mensaje.contenido=e,this.mensaje.color=t},cancelar:function(){this.$router.push({name:"odontogramas"})},eliminar:function(){var e=this;this.axios.delete("odontograma/"+this.odontograma.id_odontograma,{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){if(200===t.status){var a={nro_documento:e.odontograma.id_paciente};e.$router.push({name:"Odontograma",params:{paciente:a,editar:!0}})}})).catch((function(t){e.crearMensaje(t.response.data.mensaje,"danger")}))}},components:{Mensaje:o["a"]}},i=r,c=a("2877"),l=Object(c["a"])(i,n,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7772049d.10fed4ae.js.map