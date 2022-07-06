const express = require('express');
const rutas = express.Router();

const TipoDocumentoDAO = require('../DAO/TipoDocumentoDAO');

rutas.get('/', async(req, res) =>{
   const dao = new TipoDocumentoDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});


module.exports = rutas;