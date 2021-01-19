const {Controlador} = require("../controllers/Controlador");


const login = (req, res) => {
    res.render('login', {
        titulo: 'Pagina Web'
    });
};

const registro = (req, res) => {
    res.render('registro', {
        titulo: 'Pagina Web'
    });
};

const inicio = (req, res) => {
    let result = Controlador.getCompanyData();
    res.render('inicio', {
        pagina: {
            titulo: 'Bienvenido al inicio',
            puesto: req.params.puesto
        }        
    });
};

const definir = (req, res) => {
    res.render('definir', {
        pagina: {
            titulo: 'Bienvenido a la Organizacion, Aqui se define',
            puesto: req.params.puesto,
            tipo: req.params.tipo
        }
    });
};

const consultar = (req, res) => {
    res.render('consultar', {
        pagina: {
            titulo: 'Bienvenido a la Organizacion, Aqui se consulta',
            puesto: req.params.puesto,
            tipo: req.params.tipo
        }
    });
};

const consultar2 = (req, res) => {
    res.render('consultar', {
        pagina: {
            titulo: 'Bienvenido a la Organizacion, Aqui se consulta',
            puesto: req.params.puesto,
            tipo: req.params.tipo
        }
    });
};

const error = (req, res, next) => {
    res.status(404).render('error', {
        titulo: "404",
        descripcion: "Página no encontrada"
    });
};

const registro = (req, res, next) => {
    res.render('registro');
};

module.exports = {
    login,
    registro,
    inicio,
    definir,
    consultar,
    consultar2,
    error,
    registro
};