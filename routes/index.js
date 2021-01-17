const {Controlador} = require("../controllers/Controlador");


const login = (req, res) => {
    res.render('login', {
        titulo: 'Pagina Web'
    });
};

const inicio = (req, res) => {
    let result = Controlador.getCompanyData();
    res.render('inicio', {
        titulo: result.nombreCompany
    });    
};

const definir = (req, res) => {
    res.render('definir', {
        jerarquia: {
            tipo: req.params.id,
            nombre: 'Bienvenido a la Organizacion, Aqui se define'
        }
    });
};

const consultar = (req, res) => {
    res.render('consultar', {
        jerarquia: {
            tipo: req.params.id,
            nombre: 'Bienvenido a la Organizacion, Aqui se consulta'
        }
    });
};

const consultar2 = (req, res) => {
    res.render('consultar', {
        jerarquia: {
            tipo: req.params.id,
            nombre: 'Bienvenido a la Organizacion, Aqui se consulta'
        }
    });
};

const error = (req, res, next) => {
    res.status(404).render('error', {
        titulo: "404",
        descripcion: "Página no encontrada"
    });
};

module.exports = {
    login, 
    inicio,
    definir,
    consultar,
    consultar2,
    error
};