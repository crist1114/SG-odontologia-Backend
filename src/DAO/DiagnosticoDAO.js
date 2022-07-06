const Diagnostico = require('../modelo/Diagnostico')
const conexion = require('../util/conexion_mysql');

const nombreTabla = 'diagnostico';

class DiagnosticoDAO {

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

        const { id_diagnostico, nro_documento, id_procedimiento, resultado, fecha, observacion, firma_filename } = datos;

        const datoGuardar = new Diagnostico(id_diagnostico, nro_documento, id_procedimiento, resultado, fecha, observacion, firma_filename);

        const guardarDiagnostico = await conexion.query('INSERT INTO ' + nombreTabla + ' SET ?', [datoGuardar]);

        if (guardarDiagnostico.affectedRows > 0) {
            return guardarDiagnostico.insertId
        }

        return -1;
    }

    async guardarFactura (datos) {
        console.log(datos, 'datos')
        const { id_diagnostico, id_factura, nro_documento, valor_total, abono, fecha } = datos;
        const facturaGuardar = {
            id_factura: id_factura,
            id_diagnostico: id_diagnostico,
            id_paciente: nro_documento,
            valor_total: valor_total,
            abono: abono,
            estado: 0,
            fecha: fecha,
            saldo: valor_total - abono
        }
        console.log(facturaGuardar, 'fact gua')
        const guardarFactura = await conexion.query('INSERT INTO factura SET ?', [facturaGuardar]);
        if (guardarFactura.affectedRows > 0) {
            return guardarFactura.insertId
        }

        return -1;
    }

    async eliminar(id_diagnostico) {

        const eliminar = await conexion.query('DELETE FROM ' + nombreTabla + ' WHERE id_diagnostico=?', [id_diagnostico]);

        if (eliminar.length > 0) {
            return true;
        }
        return false;
    }

    async actualizar(id_diagnostico, datos) {
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET ? WHERE id_diagnostico=?', [datos, id_diagnostico]);
        if (actualizar.affectedRows > 0) {
            return true;
        }
        return false;
    }

    async actualizarFirma(id_diagnostico, firma) {
        const actualizar = await conexion.query('UPDATE ' + nombreTabla + ' SET firma_filename=? WHERE id_diagnostico=?', [firma, id_diagnostico]);
        if (actualizar.affectedRows > 0) {
            return true;
        }
        return false;
    }

    async numeracionId() {
        const datos = await conexion.query('SELECT id_diagnostico FROM ' + nombreTabla + ' ORDER BY id_diagnostico DESC LIMIT 1');
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

module.exports = DiagnosticoDAO;