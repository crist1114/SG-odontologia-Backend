const Diente = require('../modelo/Diente')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'diente';

class DienteDAO{

    async obtenerTodos(){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async yaExiste(nombre){
        const obj = new Diente();
        
        obj.nombre = nombre;

        const yaExiste = await conexion.query('SELECT nombre FROM ' + nombreTabla + ' WHERE nombre=?', [obj.nombre]);
        
        if(yaExiste.length > 0){
            return true;
        }
        return false;
    }

    async guardar(datos){

        const {nombre} = datos;

        const obj = new Diente(nombre);
        
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

module.exports= DienteDAO;