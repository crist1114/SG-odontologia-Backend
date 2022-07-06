class Cita {

  id_cita
  id_paciente
  fecha
  hora_inicio
  hora_fin
  estado

  constructor (id_cita, id_paciente, fecha, hora_inicio, hora_fin, estado) {
      this.id_cita = id_cita
      this.id_paciente = id_paciente
      this.fecha = fecha
      this.hora_inicio = hora_inicio
      this.hora_fin = hora_fin
      this.estado = estado
  }
  
}

module.exports= Cita;