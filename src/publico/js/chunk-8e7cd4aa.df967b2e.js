(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e7cd4aa"],{"00ef":function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[e.mensaje.ver?o("div",{staticClass:"alert text-center fixed-bottom alert-dismissible fade show",class:"alert-"+e.mensaje.color,attrs:{id:"mensaje",role:"alert"}},[o("h6",[e._v(e._s(e.mensaje.contenido))]),o("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:e.cerrar}},[e._v("x")])]):e._e()])},n=[],r={name:"Mensaje",created:function(){this.cerrar()},props:{mensaje:Object},methods:{cerrar:function(){setInterval(this.ocultar,5e3),this.ocultar()},ocultar:function(){this.mensaje.ver=!1}}},a=r,s=o("2877"),c=Object(s["a"])(a,i,n,!1,null,null,null);t["a"]=c.exports},"4e23":function(e,t,o){},6991:function(e,t,o){"use strict";o("4e23")},"8db9":function(e,t,o){"use strict";o.r(t);var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-center container-inicio-sesion"},[o("Mensaje",{attrs:{mensaje:e.mensaje}}),o("p",{staticClass:"mt-4 titulo-modulo"},[e._v(e._s(e.editar?"Editar procedimiento":"procedimiento"))]),o("div",{staticClass:"d-flex justify-content-center align-items-center container"},[o("div",{staticClass:"row"},[o("form",{staticClass:"formulario",on:{submit:function(t){return t.preventDefault(),e.actualizar()}}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.procedimiento.nombre,expression:"procedimiento.nombre"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nombre",disabled:""},domProps:{value:e.procedimiento.nombre},on:{input:function(t){t.target.composing||e.$set(e.procedimiento,"nombre",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.procedimiento.precio,expression:"procedimiento.precio"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Precio",disabled:!e.editar},domProps:{value:e.procedimiento.precio},on:{input:function(t){t.target.composing||e.$set(e.procedimiento,"precio",t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.procedimiento.descripcion,expression:"procedimiento.descripcion"}],staticClass:"form-control",attrs:{rows:"7",type:"text",placeholder:"Descripción",disabled:!e.editar},domProps:{value:e.procedimiento.descripcion},on:{input:function(t){t.target.composing||e.$set(e.procedimiento,"descripcion",t.target.value)}}})]),e.editar?o("div",{staticClass:"form-group"},[o("button",{staticClass:"btn btn-info",on:{click:function(t){return e.cancelar()}}},[e._v("Cancelar")]),o("button",{staticClass:"btn btn-success ml-5",attrs:{type:"submit"}},[e._v("Actualizar")])]):e._e(),e.editar?e._e():o("button",{staticClass:"btn btn-info",on:{click:function(t){return e.cancelar()}}},[e._v("Regresar")])])])])],1)},n=[],r=o("00ef"),a={props:{procedimiento:Object,editar:Boolean},data:function(){return{procedimientoIngresado:{},mensaje:{ver:!1},tiposDocumentos:[{id:1,nombre:"Cédula"}],opcionesGenero:[{id:1,descripcion:"Hombre"},{id:2,descripcion:"Mujer"}],inputFoto:"",srcFoto:"https://www.coordinadora.com/wp-content/uploads/sidebar_usuario-corporativo.png"}},created:function(){console.warn(this.procedimiento,"procedimiento editar")},methods:{crearMensaje:function(e,t){this.mensaje.ver=!0,this.mensaje.contenido=e,this.mensaje.color=t},actualizar:function(){var e=this;this.axios.put("procedimiento/"+this.procedimiento.id_procedimiento,this.procedimiento,{headers:{Authorization:localStorage.getItem("token")}}).then((function(t){console.warn(t,"R procedimiento"),t&&200===t.status&&(e.crearMensaje(t.mensaje,"success"),e.$router.push("/procedimiento"))})).catch((function(t){e.crearMensaje(t.response.data.mensaje,"danger")}))},cancelar:function(){this.$router.push("/procedimiento")},actualizarFoto:function(){var e=document.getElementById("fileElem");e.click();var t=new FileReader;t.readAsDataURL(e.files[0]),this.srcFoto=t.result}},components:{Mensaje:r["a"]}},s=a,c=(o("6991"),o("2877")),l=Object(c["a"])(s,i,n,!1,null,"7f0f032e",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-8e7cd4aa.df967b2e.js.map