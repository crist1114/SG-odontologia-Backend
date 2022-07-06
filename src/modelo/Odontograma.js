class Odontograma {

  id_odontograma
  id_paciente
  id_diente
  fecha
  estado
  descripcion

  constructor (id_odontograma, id_paciente, id_diente, fecha, estado, descripcion) {
      this.id_odontograma = id_odontograma
      this.id_paciente = id_paciente
      this.id_diente = id_diente
      this.fecha = fecha
      this.estado = estado
      this.descripcion = descripcion                  
  }
  
}

module.exports= Odontograma;