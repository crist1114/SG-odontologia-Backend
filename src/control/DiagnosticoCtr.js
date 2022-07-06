const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');

const DiagnosticoDAO = require('../DAO/DiagnosticoDAO');

rutas.get('/', async (req, res) => {
  const dao = new DiagnosticoDAO();
  try {
    const datos = await dao.obtenerTodos();
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

rutas.get('/:condicion/:buscar', async (req, res) => {
  const { condicion, buscar } = req.params
  const dao = new DiagnosticoDAO();
  try {
    const datos = await dao.obtenerFiltrado(condicion, buscar);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.post('/', async (req, res) => {
  const datos = req.body;
  const dao = new DiagnosticoDAO();
  try {
    if (datos.nro_documento !== undefined) {
      if (await dao.pacienteExiste(datos.nro_documento)) {

        const id_diagnostico = await dao.numeracionId()

        if (id_diagnostico.length > 0) {
          datos.id_diagnostico = id_diagnostico[0].id_diagnostico + 1
        } else {
          datos.id_diagnostico = 1
        }

        console.log(id_diagnostico, 'id Diagnostico')

        const id_factura = await dao.numeracionIdFactura()

        if (id_factura.length > 0) {
          datos.id_factura = id_factura[0].id_factura + 1
        } else {
          datos.id_factura = 1
        }

        console.log(datos.id_factura, 'id fac')
        const codigoDatoGuardado = await dao.guardar(datos);
        const codigoDatoGuardadoFactura = await dao.guardarFactura(datos)
        if (codigoDatoGuardado !== -1 && codigoDatoGuardadoFactura !== -1) {
          res.status(200).json({
            codigo: codigoDatoGuardado
          });
        }

      } else {
        res.status(500).json({ mensaje: 'El paciente no existe' });
      }
    } else {
      res.status(500).json({ mensaje: 'Ingrese los datos' });
    }
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

rutas.delete('/:id_cita', async (req, res) => {
  const { id_cita } = req.params;
  const dao = new DiagnosticoDAO();
  try {
    const datos = await dao.eliminar(id_cita);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.put('/:nro_documento', async (req, res) => {
  const { nro_documento } = req.params;
  const datos = req.body;

  const dao = new DiagnosticoDAO();
  try {
    const respuesta = await dao.actualizar(nro_documento, datos);
    if (respuesta) {
      res.status(200).json({ mensaje: 'Información actualizada satisfactoreamente' });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio algo' })
    }
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.put('/firma/:id_diagnostico', async (req, res) => {
  const { id_diagnostico } = req.params;
  const {firma} = req.body;

  const dao = new DiagnosticoDAO();
  try {
    const respuesta = await dao.actualizarFirma(id_diagnostico, firma);
    if (respuesta) {
      res.status(200).json({ mensaje: 'Información actualizada satisfactoreamente' });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio algo' })
    }
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.post('/email', async (req, res) => {
  enviarEmail(req, res)
});


function verificarToken(req, res, next) {
  const cabecera_portador = req.headers['authorization'];
  if (typeof cabecera_portador !== 'undefined') {
    const portador = cabecera_portador.split(" ");
    const token_portador = portador[1]
    req.token = token_portador;
    next()
  } else {
    res.sendStatus(403)
  }
}


// email sender function
function enviarEmail (req, res){
  const { nombre, email, resultado, observacion, fecha, valor_total, abono } = req.body
  console.log(email, resultado)
// Definimos el transporter
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'martinjesusmr@ufps.edu.co',
          pass: 'wbuqbosysilcoqul'
        }
    });
// Definimos el email
var mailOptions = {
    from: 'martin',
    to: email,
    subject: 'Diagnostico',
    html: `<b>Hola ${nombre}</b> <br> Información del diagnostico realizado el día <b>${fecha}:</b> <br> <br><b>Observación: </b>${observacion}  <br><b>Resultado: </b>${resultado}  <br><b>Total $: </b>${valor_total}  <br><b>Abono $: </b>${abono}  <br><b>Saldo Pendiente $: </b>${valor_total - abono}`
};
// Enviamos el email
transporter.sendMail(mailOptions, function(error, info){
    if (error){
        console.log(error);
        res.send(500, error.message);
    } else {
        console.log("Email sent");
        res.status(200).json(req.body);
    }
});
};

module.exports = rutas;