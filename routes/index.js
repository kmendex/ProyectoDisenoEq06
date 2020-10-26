var DATABASE_URL = 'postgres://wdupoeegmlpkfn:c144a4e4b7f388899becdc70f091509be22890ec8f115201527460c33d477c14@ec2-54-90-68-208.compute-1.amazonaws.com:5432/drs6db4nh7o0v';

var express = require('express');
var router = express.Router();

const { Client } = require('pg');

/* GET home page. */
router.get('/', function(req, res, next) {
//
  const client = new Client({connectionString: (process.env.DATABASE_URL || DATABASE_URL), ssl:{rejectUnauthorized: false}});
  client.connect();
  client.query('select textaqui from test where id = 1', (err, res1) => {
      if (err) throw err
      res.render('index', { title: res1.rows[0].textaqui });
  client.end();
  });
//
});

module.exports = router;
