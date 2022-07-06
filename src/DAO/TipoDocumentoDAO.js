const TipoDocumento = require('../modelo/TipoDocumento')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'tipo_documento';

class TipoDocumentoDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async yaExiste(nombre){
        const obj = new TipoDocumento();
        
        obj.nombre = nombre;

        const yaExiste = await conexion.query('SELECT nombre FROM ' + nombreTabla + ' WHERE nombre=?', [obj.nombre]);
        
        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {nombre} = datos;

        const obj = new TipoDocumento(nombre);
        
        const datosGuardar = {
            nombre: obj.nombre
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

}

module.exports= TipoDocumentoDAO;