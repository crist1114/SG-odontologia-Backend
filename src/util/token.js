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

  module.exports = verificarToken