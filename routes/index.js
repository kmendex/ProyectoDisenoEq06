var express = require('express');
var router = express.Router();
var path = require('path');
//const { Client } = require('pg');
//require('dotenv/config')

/* GET home page. */
router.get('/', function(req, res, next) {

// conexion base
/*
  const client = new Client({connectionString: process.env.DATABASE_URL, ssl:{rejectUnauthorized: false}});
  client.connect();
  client.query('select readOrganization(1)', (err, resQ) => {
      if (err) throw err
      console.log (resQ.rows[0]);
  });
  client.end();
*/
//

    // paso de documentos estaticos
    let page = path.join(__dirname, '../public/html/index.html')
    res.sendFile(page);

});

module.exports = router;
