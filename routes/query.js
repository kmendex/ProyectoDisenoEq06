var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/:id', function(req, res, next) {
  res.render('consultar', {
      jerarquia: {
          tipo: req.params.id,
          nombre: 'Bienvenido a la Organizacion, Aqui se consulta'
      }
  });
});

module.exports = router;
