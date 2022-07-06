const Paciente = require('../modelo/Paciente')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'Paciente';

class PacienteDAO {

    async obtenerTodos() {
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(condicion, buscar){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE " + condicion + " LIKE '%" + buscar + "%'");
        return datos;
    }

    async verInfo(nro_documento){
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE nro_documento=?', [nro_documento]);
        return datos;
    }

    async yaExiste(nro_documento) {
        const obj = new Paciente();

        obj.nro_documento = nro_documento;

        const yaExiste = await conexion.query('SELECT nro_documento FROM ' + nombreTabla + ' WHERE nro_documento=?', [obj.nro_documento]);

        if (yaExiste.length > 0) {
            return true;
        }
        return false;
    }

    async guardar(datos) {

        const { nro_documento, id_tipo_documento, nombre, apellido, fecha_nacimiento, direccion, telefono, email, genero } = datos;

        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const fecha_registro = day +'-' + month + '-' + year
        const ruta_foto = '' 
        const estado = 0

        const datoGuardar = new Paciente(nro_documento, id_tipo_documento, nombre, apellido, fecha_nacimiento, direccion, telefono, email, genero, fecha_registro, ruta_foto, estado);

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datoGuardar]);

        if (guardar.affectedRows > 0) {
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(nro_documento){
        
        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE nro_documento=?', [nro_documento]);

        if(eliminar.length > 0){
            return true;
        }
        return false;
    }

    async actualizar(nro_documento, datos){
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE nro_documento=?', [datos,  nro_documento]);
        if(actualizar.affectedRows > 0){
            return true;
        }
        return false;
    }

}

module.exports = PacienteDAO;