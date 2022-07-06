const express = require('express');
const rutas = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')

crearCarpetadocumentos()

let storage  = multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null, path.join(__dirname, '../documentos'))
    },
    filename:(req, file, cb)=>{
        console.log(file, 'req sub archivo')
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

function crearCarpetadocumentos(){
    try {
        fs.mkdirSync(path.join(__dirname, '../documentos'))
      } catch (err) {
        if (err.code !== 'EEXIST') throw err
      }
}

function eliminardocumento(documento){
    try {
        fs.unlinkSync(path.join(__dirname, '../documentos/' + documento))
        return true;
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
    return false;
}

function eliminarTodasLasdocumentos(){
    try {
        fs.unlinkSync(path.join(__dirname, '../documentos/'))
        return true;
      } catch(err) {
        console.error('Something wrong happened removing the file', err)
      }
    return false;
}


const upload = multer({storage});

rutas.post('/', upload.single('file'), (req, res)=>{
    res.status(200).json(req.file)
})

rutas.delete('/:documento', (req, res)=>{
    const {documento} = req.params;
    if(eliminardocumento(documento)){
        res.status(200).json({mensaje:'documento eliminada correctamente'})
    }
    res.status(400).json({mensaje:'Ocurrio un error'})
})

module.exports = rutas;