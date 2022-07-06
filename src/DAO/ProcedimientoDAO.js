const Procedimiento = require('../modelo/Procedimiento')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'procedimiento';

class ProcedimientoDAO {

    async obtenerTodos() {
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async obtenerFiltrado(condicion, buscar) {
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE " + condicion + " LIKE '%" + buscar + "%'");
        return datos;
    }

    async yaExiste(nro_documento, fecha, hora_inicio, hora_fin) {

        const yaExiste = await conexion.query('SELECT id_paciente FROM ' + nombreTabla + ' WHERE id_paciente=? AND fecha=? AND hora_inicio=? AND hora_fin=?', [nro_documento, fecha, hora_inicio, hora_fin]);

        if (yaExiste.length > 0) {
            return true;
        }
        return false;
    }

    async guardar(datos) {

        const { id_procedimiento, nombre, precio, descripcion } = datos;

        const datoGuardar = new Procedimiento(id_procedimiento, nombre, precio, descripcion);

        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datoGuardar]);

        if (guardar.affectedRows > 0) {
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(id_procedimiento) {

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE id_procedimiento=?', [id_procedimiento]);

        if (eliminar.length > 0) {
            return true;
        }
        return false;
    }

    async actualizar(id_procedimiento, datos) {
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE id_procedimiento=?', [datos, id_procedimiento]);
        if (actualizar.affectedRows > 0) {
            return true;
        }
        return false;
    }

    async numeracionId() {
        const datos = await conexion.query('SELECT id_procedimiento FROM ' + nombreTabla + ' ORDER BY id_procedimiento DESC LIMIT 1');
        return datos;
    }

    async pacienteExiste(nro_documento) {

        const yaExiste = await conexion.query('SELECT nro_documento FROM paciente WHERE nro_documento=?', [nro_documento]);


        if (yaExiste.length > 0) {
            return true;
        }
        return false;
    }

}

module.exports = ProcedimientoDAO;