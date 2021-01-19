var express = require('express');
var router = express.Router();
var path = require('path');

const {Controlador} = require("../controllers/Controlador");

router.post('/register', async function(req, res, next) {  
  Controlador.registration(req.body.username, req.body.pass);  
  res.sendStatus(200);  
});

router.put('/authenticate', async function(req, res, next) {  
  let result = await Controlador.authentication(req.body.username, req.body.pass);
  res.json(result);  
});

module.exports = router;
