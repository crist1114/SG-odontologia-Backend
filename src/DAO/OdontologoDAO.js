const Odontologo = require('../modelo/Odontologo')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'odontologo';

class OdontologoDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async guardar(datos){

        const {persona_nro_documento, password} = datos;

        const obj = new Odontologo(persona_nro_documento, password);
        
        const datosGuardar = {
            persona_nro_documento: obj.persona_nro_documento,
            password: obj.password
        }

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datosGuardar]);
        
        if(guardar.affectedRows > 0){
            return guardar.insertId;
        }

        return -1;
    }

    async verificarOdontologo(nro_documento){

        const obj = new Odontologo();
        
        obj.nro_documento = nro_documento;

        const dato = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE nro_documento=?', [obj.nro_documento]);

        if(dato.length > 0){
            return dato;
        }
        return [];
    }

}

module.exports= OdontologoDAO;