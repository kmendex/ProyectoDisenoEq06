/* ---------------Variables--------------- */
var provincias = {
    P1: 'San Jose',
    P2: 'Alajuela',
    P3: 'Cartago',
    P4: 'Heredia',
    P5: 'Guanacaste',
    P6: 'Puntarenas',
    P7: 'Limon'
};

var cantones = {
    P1: 'San Jose',
    P2: 'Alajuela',
    P3: 'Cartago',
    P4: 'Heredia',
    P5: 'Guanacaste',
    P6: 'Puntarenas',
    P7: 'Limon'
};

var distritos = {
    P1: 'San Jose',
    P2: 'Alajuela',
    P3: 'Cartago',
    P4: 'Heredia',
    P5: 'Guanacaste',
    P6: 'Puntarenas',
    P7: 'Limon'
};

var zonasGlobales = {
    ValueA: 'Atlantico',
    ValueB: 'Pacifico',
    ValueC: 'Huetar'
};

var ramasGlobales = {
    ValueA: 'Juvenil',
    ValueB: 'Adulto',
    ValueC: 'Ciudadano de Oro'
};

var gruposGlobales = {
    ValueA: 'Lobos',
    ValueB: 'Leones',
    ValueC: 'Ballenas'
};

var usuarios = [{
        user: 'Tony',
        password: '123'
    },
    {
        user: 'Oscar',
        password: '123'
    },
    {
        user: 'Josue',
        password: '123'
    },
    {
        user: 'Kenneth',
        password: '123'
    }
]

var niveles = {
    Nivel1: 'Movimiento General',
    Nivel2: 'Zona',
    Nivel3: 'Rama',
    Nivel4: 'Grupo'
};

/* ---------------Generales--------------- */
function cargarLugares(pro, cant, dist) {
    var select1 = document.getElementById(pro);

    for (index in provincias) {
        select1.options[select1.options.length] = new Option(provincias[index], index);
    }

    var select2 = document.getElementById(cant);

    for (index in provincias) {
        select2.options[select2.options.length] = new Option(cantones[index], index);
    }

    var select3 = document.getElementById(dist);

    for (index in provincias) {
        select3.options[select3.options.length] = new Option(distritos[index], index);
    }
}

function cargarZonas(selectInput) {
    var select1 = document.getElementById(selectInput);

    for (index in zonasGlobales) {
        select1.options[select1.options.length] = new Option(zonasGlobales[index], index);
    }
}

function cargarRamas(selectInput) {
    var select1 = document.getElementById(selectInput);

    for (index in ramasGlobales) {
        select1.options[select1.options.length] = new Option(ramasGlobales[index], index);
    }
}

function cargarGrupos(selectInput) {
    var select1 = document.getElementById(selectInput);

    for (index in gruposGlobales) {
        select1.options[select1.options.length] = new Option(gruposGlobales[index], index);
    }
}

function cargarNiveles(selectInput) {
    var select1 = document.getElementById(selectInput);

    for (index in niveles) {
        select1.options[select1.options.length] = new Option(niveles[index], index);
    }
}

/* ---------------SignIn--------------- */
function verificar() {
    alert(usuarios.length);

    var username = document.querySelector('#inputUsuario').value;
    var passwords = document.querySelector('#inputContraseña').value;

    const login = {
        username: username,
        passwords: passwords
    };

    if (username) {
        usuarios.forEach(usuario => {
            if (username == usuario.user && passwords == usuario.password) {
                alert('Usuario aceptado');
                localStorage.setItem("zonaData", JSON.stringify(login));
                if (usuario.user == "Tony") {
                    window.location.href = "/inicio/Asesor";
                }
                if (usuario.user == "Josue") {
                    window.location.href = "/inicio/Jefe";
                } else {
                    window.location.href = "/inicio/Miembro";
                }
            }
        });
    } else {
        alert('Faltan Datos');
    }
}

/* ---------------SignUp--------------- */
function registro(inputSelectName, inputSelectPass, inputSelectCPass) {
    var name = document.getElementById(inputSelectName).text;
    var password = document.getElementById(inputSelectPass).text;
    var confirmPass = document.getElementById(inputSelectCPass).text;

    const user = {
        user: name,
        password: password
    };

    if (!name && !password && !confirmPass) {
        if (password == confirmPass) {
            alert("Usuario creado");
            localStorage.setItem("usuarios", JSON.stringify(user));

            var element = {};
            element.user = name;
            element.password = password;
            usuarios.push(element);

            usuarios.push({ user: 'Pedro', password: '123' });

            alert(usuarios.length);

            window.location.href = "/";
        } else {
            alert("Contraseñas no coinciden");
        }
    } else {
        alert("Faltan Datos");
    }

}


/* ---------------Organizacion--------------- */
function definirOrganizacion() {
    var orgName = document.querySelector('#inputDOrganizacionNombre').value;
    var asesor = document.querySelector('#inputDOrganizacionAsesor').value;
    var web = document.querySelector('#inputDOrganizacionWeb').value;
    var cedula = document.querySelector('#inputDOrganizacionCedula').value;
    var telefono = document.querySelector('#inputDOrganizacionTelefono').value;
    var correo = document.querySelector('#inputDOrganizacionCorreo').value;

    var select1 = document.getElementById("selectDOrganizacionProvincia");
    provincia = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById("selectDOrganizacionCanton");
    canton = select2.options[select2.selectedIndex].text;
    var select3 = document.getElementById("selectDOrganizacionDistrito");
    distrito = select3.options[select3.selectedIndex].text;

    var otra = document.querySelector('#inputDOrganizacionOtra').value;

    const organizacion = {
        nombre: orgName,
        asesor: asesor,
        direccionWeb: web,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        provincia: provincia,
        canton: canton,
        distrito: distrito,
        otra: otra
    };

    if (orgName) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("orgData", JSON.stringify(organizacion));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDOrganizacionNombre').focus();
    }

    return false;
}

function consultarOrganizacion() {
    // READ STRING FROM LOCAL STORAGE
    var retrievedObject = localStorage.getItem('orgData');

    // CONVERT STRING TO REGULAR JS OBJECT
    var parsedObject = JSON.parse(retrievedObject);

    // ACCESS DATA
    document.getElementById("inputCOrganizacionNombre").value = parsedObject.nombre;
    document.getElementById("inputCOrganizacionAsesor").value = parsedObject.asesor;
    document.getElementById("inputCOrganizacionWeb").value = parsedObject.direccionWeb;
    document.getElementById("inputCOrganizacionCedula").value = parsedObject.cedula;
    document.getElementById("inputCOrganizacionTelefono").value = parsedObject.telefono;
    document.getElementById("inputCOrganizacionCorreo").value = parsedObject.correo;
    document.getElementById("inputCOrganizacionProvincia").value = parsedObject.provincia;
    document.getElementById("inputCOrganizacionCanton").value = parsedObject.canton;
    document.getElementById("inputCOrganizacionDistrito").value = parsedObject.distrito;
    document.getElementById("inputCOrganizacionOtra").value = parsedObject.otra;
}

/* ---------------Zona--------------- */

function definirZona() {
    var nombre = document.querySelector('#inputDZonaNombre').value;
    var identificacion = document.querySelector('#inputDZonaIdentificacion').value;

    const zona = {
        nombre: nombre,
        identificacion: identificacion
    };

    if (nombre) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("zonaData", JSON.stringify(zona));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDZonaNombre').focus();
    }

    return false;
}

function consultarZonas() {
    // var input1 = document.getElementById('inputCMiembroIdentificacion'),
    // identificacion = input1.value;

    // array = ["402420014", "111111111", "222222222", "333333333", "444444444"];

    // array.forEach(element => {
    //     if(identificacion == element){
    //         // READ STRING FROM LOCAL STORAGE
    //         var retrievedObject = localStorage.getItem('miembroData');

    //         // CONVERT STRING TO REGULAR JS OBJECT
    //         var parsedObject = JSON.parse(retrievedObject);

    //         // ACCESS DATA
    //         document.getElementById("inputCMiembroNombre").value = parsedObject.nombre;
    //         document.getElementById("inputCMiembroApellido").value = parsedObject.apellido;
    //         document.getElementById("inputCMiembroCedula").value = parsedObject.cedula;
    //         document.getElementById("inputCMiembroTelefono").value = parsedObject.telefono;
    //         document.getElementById("inputCMiembroCorreo").value = parsedObject.correo;
    //         document.getElementById("inputCMiembroProvincia").value = parsedObject.provincia;
    //         document.getElementById("inputCMiembroCanton").value = parsedObject.canton;
    //         document.getElementById("inputCMiembroDistrito").value = parsedObject.distrito;
    //         document.getElementById("inputCMiembroOtra").value = parsedObject.otra;
    //     }
    // });

}

/* ---------------Rama--------------- */

function definirRama() {
    var select1 = document.getElementById("selectDRama_Zona");
    zonaR = select1.options[select1.selectedIndex].text;

    var nombre = document.querySelector('#inputDRamaNombre').value;
    var identificacion = document.querySelector('#inputDRamaIdentificacion').value;

    const zona = {
        zonaR: zonaR,
        nombre: nombre,
        identificacion: identificacion
    };

    if (nombre) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("zonaData", JSON.stringify(zona));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDRamaNombre').focus();
    }

    return false;
}


function actualizarRamas(selectInput) {

    var urlJson = requirejs("../views/prueba.json");
    console.log(urlJson);
    // define([
    //     'require',
    //     '../views/prueba.json'
    // ], function(require) {
    //     var json = '../views/prueba.json');
    //     alert(json);
    // });


    var select1 = document.getElementById(selectInput);
    var countOption = select1.options.length;

    for (index = 1; index < countOption; index++) {
        select1.remove(1);
    }
    select1.options[select1.options.length] = new Option("Prueba");
}

/* ---------------Grupo--------------- */

function definirGrupo() {
    var select1 = document.getElementById("selectDGrupo_Zona");
    zonaR = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById("selectDGrupo_Rama");
    ramaR = select2.options[select2.selectedIndex].text;

    var nombreGrupo = document.querySelector('#inputDGrupoNombre').value;
    var identificador = document.querySelector('#inputDGrupoIdentificador').value;

    const grupo = {
        zonaR: zonaR,
        ramaR: ramaR,
        nombreGrupo: nombreGrupo,
        identificador: identificador
    };

    if (nombreGrupo) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("GrupoData", JSON.stringify(grupo));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDGrupoNombre').focus();
    }

    return false;
}

function consultarGrupo() {
    var select1 = document.getElementById("inputCGrupo_Zona");
    zona = select1.options[select1.selectedIndex];
    var select2 = document.getElementById("inputCGrupo_Rama");
    rama = select2.options[select2.selectedIndex];
    var select3 = document.getElementById("inputCGrupo_Grupo");
    grupo = select3.options[select3.selectedIndex];

    if (zona.text == "Atlantico" && rama.text == "Juvenil" && grupo.text == "Lobos") {
        alert('Funciona');
        let items1 = ['Juan', 'Roberto', 'Michael', 'Brandon', 'Ericka', 'Monica'],
            miembro = document.getElementById('listCGrupo_Miembro');

        items1.forEach(function(item) {
            let li = document.createElement('li');
            miembro.appendChild(li);

            li.innerHTML += item;
        });

        let items2 = ['Jefe', 'Miembro', 'Miembro', 'Miembro', 'Miembro', 'Miembro'],
            tipo = document.getElementById('listCGrupo_Tipo');
        /* -------------------------------------------------------------- */
        items2.forEach(function(item) {
            let li = document.createElement('li');
            tipo.appendChild(li);

            li.innerHTML += item;
        });
        /* -------------------------------------------------------------- */
        let items3 = ['Activo', 'Inactivo', 'Activo', 'Activo', 'Inactivo', 'Inactivo'],
            estado = document.getElementById('listCGrupo_Estado');

        items3.forEach(function(item) {
            let li = document.createElement('li');
            estado.appendChild(li);

            li.innerHTML += item;
        });

        zona = new Option("Esto es una prueba", select1.options.length);
    }
}

function actualizarGrupos(selectInput) {
    var select1 = document.getElementById(selectInput);
    var countOption = select1.options.length;

    for (index = 1; index < countOption; index++) {
        select1.remove(1);
    }
    select1.options[select1.options.length] = new Option("Prueba");
}

/* ---------------Miembro--------------- */

function definirMiembro() {
    var nombre = document.querySelector('#inputDMiembroNombre').value;
    var apellido = document.querySelector('#inputDMiembroApellido').value;
    var cedula = document.querySelector('#inputDMiembroCedula').value;
    var telefono = document.querySelector('#inputDMiembroTelefono').value;
    var correo = document.querySelector('#inputDMiembroCorreo').value;

    var select1 = document.getElementById("selectDMiembroProvincia");
    provincia = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById("selectDMiembroCanton");
    canton = select2.options[select2.selectedIndex].text;
    var select3 = document.getElementById("selectDMiembroDistrito");
    distrito = select3.options[select3.selectedIndex].text;

    var otra = document.querySelector('#inputDMiembroOtra').value;

    const miembro = {
        nombre: nombre,
        apellido: apellido,
        cedula: cedula,
        telefono: telefono,
        correo: correo,
        provincia: provincia,
        canton: canton,
        distrito: distrito,
        otra: otra
    };

    if (nombre) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("miembroData", JSON.stringify(miembro));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDMiembroNombre').focus();
    }

    return false;
}

function consultarMiembro() {
    var input1 = document.getElementById('inputCMiembroIdentificacion'),
        identificacion = input1.value;

    array = ["402420014", "111111111", "222222222", "333333333", "444444444"];

    array.forEach(element => {
        if (identificacion == element) {
            // READ STRING FROM LOCAL STORAGE
            var retrievedObject = localStorage.getItem('miembroData');

            // CONVERT STRING TO REGULAR JS OBJECT
            var parsedObject = JSON.parse(retrievedObject);

            // ACCESS DATA
            document.getElementById("inputCMiembroNombre").value = parsedObject.nombre;
            document.getElementById("inputCMiembroApellido").value = parsedObject.apellido;
            document.getElementById("inputCMiembroCedula").value = parsedObject.cedula;
            document.getElementById("inputCMiembroTelefono").value = parsedObject.telefono;
            document.getElementById("inputCMiembroCorreo").value = parsedObject.correo;
            document.getElementById("inputCMiembroProvincia").value = parsedObject.provincia;
            document.getElementById("inputCMiembroCanton").value = parsedObject.canton;
            document.getElementById("inputCMiembroDistrito").value = parsedObject.distrito;
            document.getElementById("inputCMiembroOtra").value = parsedObject.otra;
        }
    });
}

/* ---------------Rol--------------- */

function definirRol() {
    var identificacion = document.querySelector('#inputDRolIdentificacion').value;

    var select1 = document.getElementById("selectDRol_Zona");
    zonaR = select1.options[select1.selectedIndex].text;
    var select2 = document.getElementById("selectDRol_Rama");
    ramaR = select2.options[select2.selectedIndex].text;
    var select3 = document.getElementById("selectDRol_Grupo");
    grupoR = select3.options[select3.selectedIndex].text;

    const rol = {
        identificacion: identificacion,
        zonaR: zonaR,
        ramaR: ramaR,
        grupoR: grupoR
    };

    if (identificacion) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("RolData", JSON.stringify(rol));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDRolIdentificacion').focus();
    }

    return false;
}

/* ---------------Aporte--------------- */

function definirAporte() {
    var nombre = document.querySelector('#inputDAporteNombre').value;
    var asunto = document.querySelector('#inputDAporteAsunto').value;
    var detalle = document.querySelector('#textAreaDAporteDetalle').value;

    const aporte = {
        nombre: nombre,
        asunto: asunto,
        detalle: detalle
    };

    if (nombre) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("AporteData", JSON.stringify(aporte));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDAporteNombre').focus();
    }

    return false;
}

/* ---------------Noticia--------------- */

function definirNoticia() {
    var nombre = document.querySelector('#inputDAporteNombre').value;

    var select1 = document.getElementById("selectDNoticiaNivel");
    nivel = select1.options[select1.selectedIndex].text;

    var mensaje = document.querySelector('#textAreaDNoticiaMensaje').value;

    const noticia = {
        nombre: nombre,
        nivel: nivel,
        mensaje: mensaje
    };

    if (nombre) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("NoticiaData", JSON.stringify(noticia));
    } else {
        alert('Faltan datos');
        document.querySelector('#inputDAporteNombre').focus();
    }

    return false;
}

function actualizarVistaNoticias() {
    window.location.href = "/consultar/Jefe/Noticias";
}

function mostrarNoticias() {
    var select1 = document.getElementById("listCNoticias");

    let items1 = ['Juan', 'Roberto', 'Michael', 'Brandon', 'Ericka', 'Monica'],
        miembro = document.getElementById('listCNoticias');

    items1.forEach(function(item) {
        let button = document.createElement('button');
        let br = document.createElement('br');
        button.className = "btnRol btn-danger btn-wd btn-lg col-md-6";
        button.addEventListener("click", function onclick(event) {
            window.location.href = "/consultar/Jefe/Noticias";
        });
        miembro.appendChild(button);
        miembro.appendChild(br);

        button.innerHTML += item;
        br.innerHTML += item;
    });
}