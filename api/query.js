var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/zones/:coordination', async function (req, res, next) {
  let result = await Controlador.consultCoordination(req.params.coordination); 
  console.log(result);
  res.json(result);  
});

router.get('/branches/:zone', async function (req, res, next) {
  let result = await Controlador.consultZone(req.params.zone);
  res.json(result);    
});

router.get('/groups/:branch', async function (req, res, next) {  
  let result = await Controlador.consultBranch(req.params.branch);    
  res.json(result);  
});

module.exports = router;
