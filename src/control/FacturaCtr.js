const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken')

const FacturaDAO = require('../DAO/FacturaDAO');

rutas.get('/', async (req, res) => {
  const dao = new FacturaDAO();
  try {
    const datos = await dao.obtenerTodos();
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

rutas.get('/:condicion/:buscar', async (req, res) => {
  const { condicion, buscar } = req.params
  const dao = new FacturaDAO();
  try {
    const datos = await dao.obtenerFiltrado(condicion, buscar);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.post('/', async (req, res) => {
  const datos = req.body;
  const dao = new FacturaDAO();
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

        const id_FacturaDAO = await dao.numeracionIdFacturaDAO()

        if (id_FacturaDAO.length > 0) {
          datos.id_FacturaDAO = id_FacturaDAO[0].id_FacturaDAO + 1
        } else {
          datos.id_FacturaDAO = 1
        }

        console.log(datos.id_FacturaDAO, 'id fac')
        const codigoDatoGuardado = await dao.guardar(datos);
        const codigoDatoGuardadoFacturaDAO = await dao.guardarFacturaDAO(datos)
        if (codigoDatoGuardado !== -1 && codigoDatoGuardadoFacturaDAO !== -1) {
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
  const dao = new FacturaDAO();
  try {
    const datos = await dao.eliminar(id_cita);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.put('/:id_factura/:nuevo_saldo', async (req, res) => {
  const { id_factura, nuevo_saldo } = req.params;

  const dao = new FacturaDAO();
  try {
    const respuesta = await dao.actualizarSaldo(id_factura, nuevo_saldo);
    if (respuesta) {
      res.status(200).json({ mensaje: 'Información actualizada satisfactoreamente' });
    } else {
      res.status(400).json({ mensaje: 'Ocurrio algo' })
    }
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
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

module.exports = rutas;