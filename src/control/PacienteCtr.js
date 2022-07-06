const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken')

const PacienteDAO = require('../DAO/PacienteDAO');

rutas.get('/', async(req, res) =>{
   const dao = new PacienteDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.get('/:condicion/:buscar', async(req, res) =>{
  const { condicion, buscar } = req.params
  const dao = new PacienteDAO();
  try {
     const datos = await dao.obtenerFiltrado(condicion, buscar);
     res.status(200).json(datos);
  } catch (error) {
     res.status(500).json({mensaje:error})
  }
});

rutas.get('/:nro_documento', async(req, res) =>{
   const { nro_documento } = req.params
   console.log(nro_documento, 'documento')
   const dao = new PacienteDAO();
   try {
      const datos = await dao.verInfo(nro_documento);
      if (datos && datos.length > 0) {
         res.status(200).json(datos);
      } else {
         res.status(200).json({mensaje: 'El paciente con identificación ' + nro_documento + ' no existe'});
      }
   } catch (error) {
      res.status(500).json({mensaje:error})
   }
 });

rutas.post('/', async (req, res)=>{
  const datos = req.body;
  console.log(datos)
  const dao = new PacienteDAO();  
  try {  
     if(datos.nro_documento !== undefined){
        const yaExiste = await dao.yaExiste(datos.nro_documento);
        if(yaExiste){
           res.status(500).json({mensaje:'Ya existe'});
        }else{
           const codigoDatoGuardado = await dao.guardar(datos);  
           if(codigoDatoGuardado !== -1){
              res.status(200).json({
                 codigo: codigoDatoGuardado
              });
           }
        }
     }else{
        res.status(500).json({mensaje:'Ingrese los datos'});
     }
  } catch (error) {
     res.status(500).json({mensaje:error});
  }
});

rutas.delete('/:nro_documento', async(req, res) =>{
  const {nro_documento} = req.params;
  const dao = new PacienteDAO();
  try {
     const datos = await dao.eliminar(nro_documento);
     res.status(200).json(datos);
  } catch (error) {
     res.status(500).json({mensaje:error})
  }
});

rutas.put('/:nro_documento', async(req, res) =>{
  const {nro_documento} = req.params;
  const datos = req.body;

  const dao = new PacienteDAO();
  try {
     const respuesta = await dao.actualizar(nro_documento, datos);
     if(respuesta){
        res.status(200).json({mensaje:'Información actualizada satisfactoreamente'});
     }else{
        res.status(400).json({mensaje:'Ocurrio algo'})
     }
  } catch (error) {
     res.status(500).json({mensaje:error})
  }
});


function verificarToken(req, res, next){
   const cabecera_portador = req.headers['authorization'];
   if(typeof cabecera_portador !== 'undefined'){
       const portador = cabecera_portador.split(" ");
       const token_portador = portador[1]
       req.token = token_portador;
       next()
   }else{
       res.sendStatus(403)
   }
   }

module.exports = rutas;