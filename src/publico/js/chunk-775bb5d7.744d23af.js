(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-775bb5d7"],{"00ef":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e.mensaje.ver?n("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+e.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[n("h6",[e._v(e._s(e.mensaje.contenido))]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.cerrar}},[e._v("x")])]):e._e()])},s=[],r={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,5e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},c=r,i=n("2877"),o=Object(i["a"])(c,a,s,!1,null,null,null);t["a"]=o.exports},"24e2":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-center"},[n("h4",[e._v("¿Desea eliminar a "+e._s(e.paciente.nombre)+" ?")]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-6"},[n("button",{staticClass:"btn btn-danger",on:{click:function(t){return e.eliminar()}}},[e._v("Eliminar")])]),n("div",{staticClass:"col-md-6"},[n("button",{staticClass:"btn btn-info",on:{click:e.cancelar}},[e._v("Cancelar")])])]),n("Mensaje",{attrs:{mensaje:e.mensaje}})],1)},s=[],r=n("00ef"),c={data:function(){return{mensaje:{ver:!1}}},props:{paciente:Object},methods:{crearMensaje:function(e,t){this.mensaje.ver=!0,this.mensaje.contenido=e,this.mensaje.color=t},cancelar:function(){this.$router.push({name:"Pacientes"})},eliminar:function(){var e=this;this.axios.delete("paciente/"+this.paciente.nro_documento,{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){200===t.status&&e.$router.push({name:"Pacientes"})})).catch((function(t){e.crearMensaje(t.response.data.mensaje,"danger")}))}},components:{Mensaje:r["a"]}},i=c,o=n("2877"),l=Object(o["a"])(i,a,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-775bb5d7.744d23af.js.map