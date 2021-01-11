/* ---------------Variables--------------- */
var zonasGlobales = {
    ValueA : 'Atlantico',
    ValueB : 'Pacifico',
    ValueC : 'Huetar'
};

var ramasGlobales = {
    ValueA : 'Juvenil',
    ValueB : 'Adulto',
    ValueC : 'Ciudadano de Oro'
};

var gruposGlobales = {
    ValueA : 'Lobos',
    ValueB : 'Leones',
    ValueC : 'Ballenas'
};

/* ---------------Organizacion--------------- */
function definirOrganizacion() {
    var input1 = document.getElementById('inputDOrganizacionNombre'),
    orgName = input1.value;
    var input2 = document.getElementById('inputDOrganizacionAsesor'),
    asesor = input2.value;
    var input3 = document.getElementById('inputDOrganizacionWeb'),
    web = input3.value;
    var input4 = document.getElementById('inputDOrganizacionCedula'),
    cedula = input4.value;
    var input5 = document.getElementById('inputDOrganizacionTelefono'),
    telefono = input5.value;
    var input6 = document.getElementById('inputDOrganizacionCorreo'),
    correo = input6.value;
    var input7 = document.getElementById('inputDOrganizacionProvincia'),
    provincia = input7.value;
    var input8 = document.getElementById('inputDOrganizacionCanton'),
    canton = input8.value;
    var input9 = document.getElementById('inputDOrganizacionDistrito'),
    distrito = input9.value;
    var input10 = document.getElementById('inputDOrganizacionOtra'),
    otra = input10.value;

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

/* ---------------Rama--------------- */

/* ---------------Grupo--------------- */

function cargarGrupo() {
    var select1 = document.getElementById("inputCGrupo_Zona");
    var select2 = document.getElementById("inputCGrupo_Rama");
    var select3 = document.getElementById("inputCGrupo_Grupo");

    for(index in zonasGlobales) {
        select1.options[select1.options.length] = new Option(zonasGlobales[index], index);
    }
    for(index in ramasGlobales) {
        select2.options[select2.options.length] = new Option(ramasGlobales[index], index);
    }
    for(index in gruposGlobales) {
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

    if(zona.text == "Atlantico" && rama.text == "Juvenil" && grupo.text == "Lobos"){
        alert('Funciona');
        let items1 = ['Juan', 'Roberto', 'Michael', 'Brandon', 'Ericka', 'Monica'],
        miembro = document.getElementById('listCGrupo_Miembro');
        
        items1.forEach(function (item) {
            let li = document.createElement('li');
            miembro.appendChild(li);
        
            li.innerHTML += item;
        });

        let items2 = ['Jefe', 'Miembro', 'Miembro', 'Miembro', 'Miembro', 'Miembro'],
        tipo = document.getElementById('listCGrupo_Tipo');
        /* -------------------------------------------------------------- */
        items2.forEach(function (item) {
            let li = document.createElement('li');
            tipo.appendChild(li);
        
            li.innerHTML += item;
        });
        /* -------------------------------------------------------------- */
        let items3 = ['Activo', 'Inactivo', 'Activo', 'Activo', 'Inactivo', 'Inactivo'],
        estado = document.getElementById('listCGrupo_Estado');
        
        items3.forEach(function (item) {
            let li = document.createElement('li');
            estado.appendChild(li);
        
            li.innerHTML += item;
        });

        zona = new Option("Esto es una prueba", select1.options.length);
    }
}

/* ---------------Miembro--------------- */

function definirMiembro() {
    var input1 = document.getElementById('inputDMiembroNombre'),
    nombre = input1.value;
    var input2 = document.getElementById('inputDMiembroApellido'),
    apellido = input2.value;
    var input3 = document.getElementById('inputDMiembroCedula'),
    cedula = input3.value;
    var input4 = document.getElementById('inputDMiembroTelefono'),
    telefono = input4.value;
    var input5 = document.getElementById('inputDMiembroCorreo'),
    correo = input5.value;
    var input6 = document.getElementById('inputDMiembroProvincia'),
    provincia = input6.value;
    var input7 = document.getElementById('inputDMiembroCanton'),
    canton = input7.value;
    var input8 = document.getElementById('inputDMiembroDistrito'),
    distrito = input8.value;
    var input9 = document.getElementById('inputDMiembroOtra'),
    otra = input9.value;

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
        if(identificacion == element){
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

