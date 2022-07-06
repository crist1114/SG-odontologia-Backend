const express = require('express');
const rutas = express.Router();
const jwt = require('jsonwebtoken')

const OdontologoDAO = require('../DAO/OdontologoDAO');

rutas.get('/', async(req, res) =>{
   const dao = new OdontologoDAO();
   try {
      const datos = await dao.obtenerTodos();
      res.status(200).json(datos);
   } catch (error) {
      res.status(500).json({mensaje:error});
   }
});

rutas.post('/', async(req, res)=>{
   const dato = {
      persona_nro_documento: req.body.persona_nro_documento
    }
    try {
      dato.password = bcrypt.hashSync(req.body.password, saltRounds);      
      const dao = new OdontologoDAO();
      const yaExiste = await dao.yaExiste(dato.persona_nro_documento);
      if(yaExiste){
         res.status(500).json({mensaje:'Ya existe'});
      }else{
         const idOdontologoGuardar = await dao.guardar(dato);
         if(idOdontologoGuardar > -1){
            res.status(200).json({codigo: idOdontologoGuardar});
         }
      }  
    } catch (error) {
      return res.status(500).json({
        mensaje: error
      });
    } 
});

rutas.post('/login', async (req, res)=>{
   const dato = req.body;
   const dao = new OdontologoDAO();
   console.log(dato, 'datos')
   try {
      const odontologo = await dao.verificarOdontologo(dato.nro_documento);
      if(odontologo.length > 0){
         if(dato.clave !== odontologo[0].clave){
            res.status(403).json({mensaje:'Contraseña incorrecta'});
         }else{
            const user = {
               documento: odontologo[0].nro_documento,
               nombre: odontologo[0].nombre,
               apellido: odontologo[0].apellido,
               email: odontologo[0].email
            }
            jwt.sign({user}, 'odontologia_martin', {expiresIn: '1d'}, (err, token) => {
               res.status(200).json({
                   token
               });
           });
         }
      }else{
         res.status(500).json({mensaje: 'Odontologo incorrecto'});
      }
   } catch (error) {
      res.status(500).json({mensaje:error});
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