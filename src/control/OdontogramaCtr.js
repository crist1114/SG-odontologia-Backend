const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken')

const OdontogramaDAO = require('../DAO/OdontogramaDAO');

rutas.get('/', async (req, res) => {
  const dao = new OdontogramaDAO();
  try {
    const datos = await dao.obtenerTodos();
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

rutas.get('/:nro_documento', async (req, res) => {
  const {nro_documento} = req.params
  console.log(nro_documento, 'Numero desde front')
  const dao = new OdontogramaDAO();
  try {
    const datos = await dao.filtrarPorIdentificacion(nro_documento);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error });
  }
});

rutas.get('/:nro_documento/:condicion/:buscar', async (req, res) => {
  const { nro_documento, condicion, buscar } = req.params
  const dao = new OdontogramaDAO();
  try {
    console.log(nro_documento, 'nume doc')
    const datos = await dao.obtenerFiltrado(nro_documento, condicion, buscar);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.get('/diente/:numero_diente', async (req, res) => {
  const { numero_diente } = req.params
  const dao = new OdontogramaDAO();
  try {
    const datos = await dao.filtrarPorNumeroDiente(numero_diente);
    res.status(200).json(datos);
  } catch (error) {
    res.status(500).json({ mensaje: error })
  }
});

rutas.post('/', async (req, res) => {
  const datos = req.body;
  const dao = new OdontogramaDAO();
  try {
    if (datos.nro_documento !== undefined) {
      if (await dao.pacienteExiste(datos.nro_documento)) {

        const id_odontograma = await dao.numeracionId()

        if (id_odontograma.length > 0) {
          datos.id_odontograma = id_odontograma[0].id_odontograma + 1
        } else {
          datos.id_odontograma = 1
        }

        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()

        const dia = day < 10 ? '0' + day : day
        const mes = month < 10 ? '0' + month : month

        const fecha = year + '-' + mes + '-' + dia

        datos.fecha = fecha
        
        const codigoDatoGuardado = await dao.guardar(datos);
        if (codigoDatoGuardado !== -1) {
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
  const dao = new OdontogramaDAO();
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

  const dao = new OdontogramaDAO();
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