const Factura = require('../modelo/Factura')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'factura';

class FacturaDAO {

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


    async eliminar(id_Factura) {

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE id_Factura=?', [id_Factura]);

        if (eliminar.length > 0) {
            return true;
        }
        return false;
    }

    async actualizarSaldo(id_Factura, nuevoSaldo) {
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET saldo=? WHERE id_Factura=?', [nuevoSaldo, id_Factura]);
        if (actualizar.affectedRows > 0) {
            return true;
        }
        return false;
    }

    async numeracionId() {
        const datos = await conexion.query('SELECT id_Factura FROM ' + nombreTabla + ' ORDER BY id_Factura DESC LIMIT 1');
        return datos;
    }

    async numeracionIdFactura() {
        const datos = await conexion.query('SELECT id_factura FROM factura ORDER BY id_factura DESC LIMIT 1');
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

module.exports = FacturaDAO;