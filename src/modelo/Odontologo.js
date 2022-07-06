class Odontologo {

    persona_nro_documento;
    password;
    fecha_creacion;

    constructor (persona_nro_documento, password, fecha_creacion) {
        this.persona_nro_documento = persona_nro_documento;
        this.password = password;
        this.fecha_creacion = fecha_creacion;
    }
    
}

module.exports= Odontologo;