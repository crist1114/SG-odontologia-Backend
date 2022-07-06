const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
const history = require('connect-history-api-fallback');

const app = express();

/**
 * Middlewares
 */
app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
/**
 * El history le permite al backend relacionar el modo history de vue para que las rutas se maneje directamente en el front
 */
app.use(history());

/**
 * Configuro la carpeta publica donde va ir todo el frontend
 */
 app.use(express.static(path.join(__dirname, 'publico')))

 /**
  * Configuro carpeta publica y estatica para acceder a las imagenes
  */
  app.use('/documentos', express.static(path.join(__dirname, 'documentos')));

/**
 * Importo rutas a usar en el servidor
 */
const odontologoRutas = require('./control/OdontologoCtr')
const tipoDocumentoRutas = require('./control/TipoDocumentoCtr')
const pacienteRutas = require('./control/PacienteCtr')
const citasRutas = require('./control/CitaCtr')
const examenesRutas = require('./control/ExamenCtr')
const procedimientosRutas = require('./control/ProcedimientoCtr')
const diagnosticoRutas = require('./control/DiagnosticoCtr')
const dientesRutas = require('./control/DienteCtr')
const odontogramasRutas = require('./control/OdontogramaCtr')
const facturasRutas = require('./control/FacturaCtr')
const subirArchivosRutas = require('./control/SubirArchivosCtr')

/**
 * configuro las rutas del servidor
 */
app.use('/odontologo', odontologoRutas)
app.use('/paciente', pacienteRutas)
app.use('/tipo_documento', tipoDocumentoRutas)
app.use('/cita', citasRutas)
app.use('/examen', examenesRutas)
app.use('/procedimiento', procedimientosRutas)
app.use('/diagnostico', diagnosticoRutas)
app.use('/diente', dientesRutas)
app.use('/odontograma', odontogramasRutas)
app.use('/factura', facturasRutas)
app.use('/subir', subirArchivosRutas)

module.exports = app;
