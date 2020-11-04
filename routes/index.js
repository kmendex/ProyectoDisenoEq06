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
  client.query('select textaqui from test where id = 1', (err, res1) => {
      if (err) throw err
      console.log (res1.rows[0].textaqui);
  client.end();

  });
*/
//

    // paso de documentos estaticos
    let p = path.join(__dirname, '../public/html/index.html')
    res.sendFile(p);

});

module.exports = router;
