var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res, next) {
    let page = path.join(__dirname, '../public/html/formulariosDefinir.html')
    res.sendFile(page);
});

router.post('/organizacion', async function (req, res, next){
  
  // Llamada a alǵun controlador para hacer validaciones, etc

  console.log(req.body.name_Organizacion);
  res.render ('index', {title: req.body.name_Organizacion});
});

router.post('/zona', async function (req, res, next){
  res.render ('index', {title: req.body});
});

router.post('/rama', async function (req, res, next){
  res.render ('index', {title: req.body});
});

router.post('/grupo', async function (req, res, next){
  res.render ('index', {title: req.body});
});

router.post('/miembro', async function (req, res, next){
  res.render ('index', {title: req.body});
});

router.post('/rol', async function (){
  res.render ('index', {title: req.body});
});

module.exports = router;
