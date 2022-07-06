const express = require('express');
const rutas = express.Router();

const DienteDAO = require('../DAO/DienteDAO');

rutas.get('/', async(req, res) =>{
   const dao = new DienteDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});


module.exports = rutas;