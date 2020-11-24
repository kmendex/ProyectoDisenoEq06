var express = require('express');
var router = express.Router();
var path = require('path');

const {Controlador} = require("../controllers/Controlador");

/* GET home page. */
router.get('/', async function(req, res, next) {


  try{
    //let result = await db.getOrganization('12');
    //let result = await db.getOrganization('1');
    //console.log(result);  

    //let controlador = new Controlador();    
    //Controlador.bringData();

    //let result1 = COrganizacion.getDataToShow();
    //console.log(result1);  
  }
  catch(error){
    console.log(error);
  }                
//  
//  
  let result = Controlador.getCompanyData();  

  // campos esperados para desplegar en la pagina
  // { title: '',
  //   content : {
  //      orgName,description,logoURL,province,country,address,webSite,facebook,twitter
  //   }
  //  }  

  res.render('index', { "title": "OAIS",
    "content": { "orgName": result.nombreCompany, "description": result.descripcion, "logoURL": result.logoURL, "province": result.provincia, "country": result.pais, 
      "address": result.direccion, "webSite": result.direccionWeb, "facebook": result.logoFace, "twitter": result.logoTwitter
    }
  });
  
});

module.exports = router;
