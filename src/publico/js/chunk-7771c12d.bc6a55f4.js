(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7771c12d"],{"00ef":function(e,t,o){"use strict";var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[e.mensaje.ver?o("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+e.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[o("h6",[e._v(e._s(e.mensaje.contenido))]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.cerrar}},[e._v("x")])]):e._e()])},n=[],i={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,5e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},s=i,a=o("2877"),c=Object(a["a"])(s,r,n,!1,null,null,null);t["a"]=c.exports},ad13:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center container-inicio-sesion"},[o("Mensaje",{attrs:{mensaje:e.mensaje}}),o("p",{staticClass:"mt-4 titulo-modulo"},[e._v("Registro procedimiento:")]),o("div",{staticClass:"d-flex justify-content-center align-items-center container"},[o("div",{staticClass:"row"},[o("form",{staticClass:"formulario",on:{submit:function(t){return t.preventDefault(),e.registro()}}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.procedimiento.nombre,expression:"procedimiento.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre",required:""},domProps:{value:e.procedimiento.nombre},on:{input:function(t){t.target.composing||e.$set(e.procedimiento,"nombre",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.procedimiento.precio,expression:"procedimiento.precio"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Precio $",required:""},domProps:{value:e.procedimiento.precio},on:{input:function(t){t.target.composing||e.$set(e.procedimiento,"precio",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.procedimiento.descripcion,expression:"procedimiento.descripcion"}],staticClass:"form-control",attrs:{rows:"7",type:"text",placeholder:"Descripción",required:""},domProps:{value:e.procedimiento.descripcion},on:{input:function(t){t.target.composing||e.$set(e.procedimiento,"descripcion",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-info",on:{click:function(t){return e.cancelar()}}},[e._v(" Cancelar ")]),o("button",{staticClass:"btn btn-success ml-5",attrs:{type:"submit"}},[e._v("Guardar")])])])])])],1)},n=[],i=o("00ef"),s={data:function(){return{procedimiento:{},procedimientoIngresado:{},mensaje:{ver:!1}}},methods:{cancelar:function(){this.$router.push("/procedimiento")},crearMensaje:function(e,t){this.mensaje.ver=!0,this.mensaje.contenido=e,this.mensaje.color=t},registro:function(){var e=this;this.axios.post("procedimiento",this.procedimiento,{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){console.warn(t,"R procedimientos"),t&&200===t.status&&(e.crearMensaje("Guardado correctamente","success"),e.$router.push("/procedimiento"))})).catch((function(t){e.crearMensaje(t.response.data.mensaje,"danger")}))},verTiposDocumentos:function(){var e=this;this.axios.get("tipo_documento",{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){console.warn(t),e.tiposDocumentos=t.data}))}},components:{Mensaje:i["a"]}},a=s,c=o("2877"),l=Object(c["a"])(a,r,n,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7771c12d.bc6a55f4.js.map