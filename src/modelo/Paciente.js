class Paciente {

  nro_documento;
  id_tipo_documento;
  nombre;
  apellido;
  fecha_nacimiento;
  direccion;
  telefono;
  email;
  genero;
  fecha_registro;
  ruta_foto;
  estado;

  constructor (nro_documento, id_tipo_documento, nombre, apellido, fecha_nacimiento, direccion, telefono, email, genero, fecha_registro, ruta_foto, estado) {
      this.nro_documento = nro_documento
      this.id_tipo_documento = id_tipo_documento
      this.nombre = nombre
      this.apellido = apellido
      this.fecha_nacimiento = fecha_nacimiento
      this.direccion = direccion
      this.telefono = telefono
      this.email = email
      this.genero = genero
      this.fecha_registro = fecha_registro
      this.ruta_foto = ruta_foto
      this.estado = estado
  }
  
}

module.exports= Paciente;