var express = require('express');
var router = express.Router();
var path = require('path');

const {Controlador} = require("../controllers/Controlador");

/* GET home page. */
router.get('/', async function(req, res, next) {  
  let result = Controlador.getCompanyData();
  console.log(result);

  // campos esperados para desplegar en la pagina
  // { title: '',
  //   content : {
  //      orgName,description,logoURL,province,country,address,webSite,facebook,twitter
  //   }
  //  }  
  res.render('inicio', {
    titulo: result.nombreCompany//,
    /*"content": { "orgName": result.nombreCompany, "description": result.descripcion, "logoURL": result.logoURL, "province": result.provincia, "country": result.pais, 
      "address": result.direccion, "webSite": result.direccionWeb, "facebook": result.logoFace, "twitter": result.logoTwitter      
    }
    */
  });        
});

module.exports = router;
