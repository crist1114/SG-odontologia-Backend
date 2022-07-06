const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken')

const ProcedimientoDAO = require('../DAO/ProcedimientoDAO');

rutas.get('/', async (req, res) => {
  const dao = new ProcedimientoDAO();
  try {
    const datos = await dao.obtenerTodos();
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

rutas.get('/:condicion/:buscar', async (req, res) => {
  const { condicion, buscar } = req.params
  const dao = new ProcedimientoDAO();
  try {
    const datos = await dao.obtenerFiltrado(condicion, buscar);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.post('/', async (req, res) => {
  const datos = req.body;
  const dao = new ProcedimientoDAO();
  console.log(datos, 'Procedimiento')
  try {
    if (datos.nombre !== undefined) {
        const id_procedimiento = await dao.numeracionId()

        if (id_procedimiento.length > 0) {
          datos.id_procedimiento = id_procedimiento[0].id_procedimiento + 1
        } else {
          datos.id_procedimiento = 1
        }

        console.log(id_procedimiento, 'id Procedimiento')

        const codigoDatoGuardado = await dao.guardar(datos);
        if (codigoDatoGuardado !== -1) {
          res.status(200).json({
            codigo: codigoDatoGuardado
          });
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
  const dao = new ProcedimientoDAO();
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

  const dao = new ProcedimientoDAO();
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