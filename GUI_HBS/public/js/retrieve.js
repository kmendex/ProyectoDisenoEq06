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

/* ---------------Generales--------------- */
function cargarLugares() {
    var select1 = document.getElementById("selectDOrganizacionProvincia");

    for (index in provincias) {
        select1.options[select1.options.length] = new Option(provincias[index], index);
    }

    var select2 = document.getElementById("selectDOrganizacionCanton");

    for (index in provincias) {
        select2.options[select2.options.length] = new Option(cantones[index], index);
    }

    var select3 = document.getElementById("selectDOrganizacionDistrito");

    for (index in provincias) {
        select3.options[select3.options.length] = new Option(distritos[index], index);
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
    var provincia = document.querySelector('#selectDOrganizacionProvincia').value;
    var canton = document.querySelector('#selectDOrganizacionCanton').value;
    var distrito = document.querySelector('#selectDOrganizacionDistrito').value;
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
        input.focus();
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
    var input1 = document.getElementById('inputDZonaNombre'),
        nombre = input1.value;
    var input2 = document.getElementById('inputDZonaIdentificacion'),
        identificacion = input2.value;

    const zona = {
        nombre: nombre,
        identificacion: identificacion
    };

    if (nombre) {
        alert('Informacion Guardada con exito');
        localStorage.setItem("zonaData", JSON.stringify(zona));
    } else {
        alert('Faltan datos');
        input.focus();
    }

    return false;
}

function consultarZona() {
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

function cargarZona() {
    var select1 = document.getElementById("selectCZona");

    for (index in zonasGlobales) {
        select1.options[select1.options.length] = new Option(zonasGlobales[index], index);
    }
}

/* ---------------Rama--------------- */

function cargarRama() {
    var select1 = document.getElementById("inputCRama_Zona");
    var select2 = document.getElementById("inputCRama_Rama");

    for (index in zonasGlobales) {
        select1.options[select1.options.length] = new Option(zonasGlobales[index], index);
    }
    for (index in ramasGlobales) {
        select2.options[select2.options.length] = new Option(ramasGlobales[index], index);
    }
}

/* ---------------Grupo--------------- */

function cargarGrupo() {
    var select1 = document.getElementById("inputCGrupo_Zona");
    var select2 = document.getElementById("inputCGrupo_Rama");
    var select3 = document.getElementById("inputCGrupo_Grupo");

    for (index in zonasGlobales) {
        select1.options[select1.options.length] = new Option(zonasGlobales[index], index);
    }
    for (index in ramasGlobales) {
        select2.options[select2.options.length] = new Option(ramasGlobales[index], index);
    }
    for (index in gruposGlobales) {
        select3.options[select3.options.length] = new Option(gruposGlobales[index], index);
    }
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

/* ---------------Miembro--------------- */

function definirMiembro() {
    var nombre = document.querySelector('#inputDMiembroNombre').value;
    var apellido = document.querySelector('#inputDMiembroApellido').value;
    var cedula = document.querySelector('#inputDMiembroCedula').value;
    var telefono = document.querySelector('#inputDMiembroTelefono').value;
    var correo = document.querySelector('#inputDMiembroCorreo').value;
    var provincia = document.querySelector('#selectDMiembroProvincia').value;
    var canton = document.querySelector('#selectDMiembroCanton').value;
    var distrito = document.querySelector('#selectDMiembroDistrito').value;
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
        input.focus();
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