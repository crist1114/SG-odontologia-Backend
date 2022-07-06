class Examen {

  id_examen
  id_paciente
  nombre
  ubicacion_Fisica
  ubicacion_Digital
  fecha

  constructor (id_examen, id_paciente, nombre, ubicacion_Fisica, ubicacion_Digital, fecha) {
      this.id_examen = id_examen
      this.id_paciente = id_paciente
      this.nombre = nombre
      this.ubicacion_Fisica = ubicacion_Fisica  
      this.ubicacion_Digital = ubicacion_Digital                
      this.fecha = fecha
  }
  
}

module.exports= Examen;