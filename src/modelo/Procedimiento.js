class Procedimiento {

  id_procedimiento
  nombre
  precio
  descripcion

  constructor (id_procedimiento, nombre, precio, descripcion) {
    this.id_procedimiento = id_procedimiento
    this.nombre = nombre
    this.precio = precio
    this.descripcion = descripcion
  }
  
}

module.exports= Procedimiento;