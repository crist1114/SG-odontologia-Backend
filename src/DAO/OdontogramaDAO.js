const Odontograma = require('../modelo/Odontograma')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'odontograma';

class OdontogramaDAO {

    async obtenerTodos() {
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla);
        return datos;
    }

    async filtrarPorIdentificacion(nro_documento) {
        console.log(nro_documento, 'numer a buscar')
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE id_paciente=' + nro_documento);
        return datos;
    }

    async obtenerFiltrado(nro_documento, condicion, buscar) {
        console.log(nro_documento, condicion, buscar)
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + " WHERE id_paciente='" + nro_documento + "' AND " + condicion + " LIKE '%" + buscar + "%'");
        return datos;
    }

    async filtrarPorNumeroDiente(numero_diente) {
        console.log(numero_diente, 'numer a buscar')
        const datos = await conexion.query('SELECT * FROM ' + nombreTabla + ' WHERE id_diente=' + numero_diente);
        return datos;
    }
    
    async yaExiste(nro_documento, fecha, id_diente) {

        const yaExiste = await conexion.query('SELECT id_odontograma FROM ' + nombreTabla + ' WHERE id_paciente=? AND fecha=? AND id_diente=?', [nro_documento, fecha, id_diente]);

        if (yaExiste.length > 0) {
            return true;
        }
        return false;
    }

    async guardar(datos) {

        const { id_odontograma, nro_documento, id_diente, fecha, estado, descripcion } = datos;
        
        console.log(datos, 'data gua')
    
        
        const datoGuardar = new Odontograma(id_odontograma, nro_documento, id_diente, fecha, estado, descripcion);


        const guardar = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datoGuardar]);

        if (guardar.affectedRows > 0) {
            return guardar.insertId;
        }

        return -1;
    }

    async eliminar(id_odontograma) {

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE id_odontograma=?', [id_odontograma]);

        if (eliminar.length > 0) {
            return true;
        }
        return false;
    }

    async actualizar(id_odontograma, datos) {
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE id_odontograma=?', [datos, id_odontograma]);
        if (actualizar.affectedRows > 0) {
            return true;
        }
        return false;
    }

    async numeracionId() {
        const datos = await conexion.query('SELECT id_odontograma FROM ' + nombreTabla + ' ORDER BY id_odontograma DESC LIMIT 1');
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

module.exports = OdontogramaDAO;