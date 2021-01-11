// Configuración inicial
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

const indexController = require('./controllers/index');

// Helper
hbs.registerHelper('ifeq', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});

// Aquí detallar rutas

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", indexController.login);

app.get("/inicio", indexController.inicio);

app.get('/definir/:id', indexController.definir);

app.get('/consultar/:id', indexController.consultar);

app.post('/consultar/:id', indexController.consultar2);

app.use(indexController.error);