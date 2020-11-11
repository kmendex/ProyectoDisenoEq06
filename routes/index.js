var express = require('express');
var router = express.Router();
var path = require('path');

// esto íría en el controlador respectivo
const db = require("../dao/DAOSourcePostgres.js");

/* GET home page. */
router.get('/', async function(req, res, next) {

// conexion base  
//
  try{
    //let result = await db.getOrganization('12');
    let result = await db.getOrganization('1');
    console.log(result);  
  }
  catch(error){
    console.log(error);
  }                
//  
//
  
  // paso de documentos estaticos
  let page = path.join(__dirname, '../public/html/index.html')    
  res.sendFile(page);

});

module.exports = router;
