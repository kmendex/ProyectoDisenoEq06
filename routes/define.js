var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/', function(req, res, next) {
/*
  //req.dbConnection.connect();
req.dbConnection.query('select textaqui from test where id = 1', (err, res1) => {
      if (err) throw err
      console.log ("def:" + res1.rows[0].textaqui);
req.dbConnection.end();
});*/

    let p = path.join(__dirname, '../public/html/formulariosDefinir.html')
    res.sendFile(p);
});

module.exports = router;
