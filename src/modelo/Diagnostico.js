class Diagnostico {

  id_diagnostico
  id_paciente
  id_procedimiento
  resultado
  fecha
  observacion
  firma_filename

  constructor (id_diagnostico, id_paciente, id_procedimiento, resultado, fecha, observacion, firma_filename) {
      this.id_diagnostico = id_diagnostico
      this.id_paciente = id_paciente
      this.id_procedimiento = id_procedimiento
      this.resultado = resultado
      this.fecha = fecha
      this.observacion = observacion
      this.firma_filename = firma_filename             
  }
  
}

module.exports= Diagnostico;