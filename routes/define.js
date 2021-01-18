var express = require('express');
var router = express.Router();
var path = require('path');

const {Controlador} = require("../controllers/Controlador");


router.get('/:id', function(req, res, next) {
  let result = Controlador.getCompanyData();
  res.render('definir', {
      jerarquia: {
          tipo: req.params.id,
          nombre: result.nombreCompany,
          asesor: '',
          web: result.direccionWeb,
          cedula: '',
          telefono: result.logoFace,
          correo: result.logoTwitter,
          senas: result.direccion
      }
  });   
});
/*
router.get('/api', function (req, res, next) {
  console.log('exito');
  res.sendStatus(200);
});
*/

router.put('/api/organizacion', async function (req, res, next) {    
  console.log(req.body);
  res.json(req.body);  
});

router.post('/api', function (req, res, next) {
  console.log(req.body.organizacion.otra);
  res.sendStatus(200);
});

router.post('/api', function (req, res, next) {
  console.log(req.body.organizacion.otra);
  res.sendStatus(200);
});

router.post('/api', function (req, res, next) {
  console.log(req.body.organizacion.otra);
  res.sendStatus(200);
});

router.get('/api/provinces/:country', async function (req, res, next) {
  let cont = req.params.country;
  console.log(typeof req.params.country);
  cont = cont + '';
  console.log(typeof cont);
  let result = await Controlador.getProvinces(req.params.country); 
  console.log(result);   
  res.json(result);
});

router.get('/api/cantons/:province', async function (req, res, next) {
  let result = await Controlador.getCantons(req.params.province);
  res.json(result);    
});

router.get('/api/districts/:canton', async function (req, res, next) {
  console.log(req.params.canton);
  let result = await Controlador.getDistricts(req.params.canton);    
  res.json(result);  
});

module.exports = router;
