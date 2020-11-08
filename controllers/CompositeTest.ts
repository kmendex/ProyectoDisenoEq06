
//Ejecutar en la terminal npm install typescript
//Ejecutar en la terminal npm install keypress
//Ejecutar en la terminal npm install -g ts-node (Compila y ejecuta el *.ts)
//Agregar al archivo package.json en la parte de script "tsc": "tsc"
//Ejecutar en la terminal npx tsc --init
//Debe habilitar en el powershell como administrador, la ejecución de scripts Set-ExecutionPolicy Unrestricted
//Digitar en la terminal ts-node CompositePruebas.ts
//Recordar deshabilitar ésta opción después de terminar de hacer pruebas Set-ExecutionPolicy Restricted

//import { Provincia } from "../models/Provincia";
//import { Canton } from "../models/Canton";
//import { Districto } from "../models/Distrito";

import { Roles } from "../models/composite/AbstractComponent";
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { Direccion, Provincia, Canton, Distrito } from "../models/Direccion";
import { eEstado, Persona } from "../models/Persona";


const provincia: Provincia = {id: 3, nombre: "Cartago"};
const canton: Canton = {id: 1, nombre: "Central"};
const distrito: Distrito = {id: 2, nombre: "Oriental"};
const direccionUnica = new Direccion(provincia, canton, distrito, "Los Ángeles");

const miembro0 = new Persona(0,"Miembro0",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro1 = new Persona(1,"Miembro1",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro2 = new Persona(2,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro3 = new Persona(3,"Miembro3",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro4 = new Persona(4,"Miembro4",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro5 = new Persona(5,"Miembro5",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro6 = new Persona(6,"Miembro6",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro7 = new Persona(7,"Miembro7",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro8 = new Persona(8,"Miembro8",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembro9 = new Persona(9,"Miembro9",74479112,"@gmail.com",direccionUnica, eEstado.activo);

const monitor0 = new Persona(20,"Monitor0",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor1 = new Persona(21,"Monitor1",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor2 = new Persona(22,"Monitor2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor3 = new Persona(23,"Monitor3",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor4 = new Persona(24,"Monitor4",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor5 = new Persona(25,"Monitor5",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor6 = new Persona(26,"Monitor6",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor7 = new Persona(27,"Monitor7",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor8 = new Persona(28,"Monitor8",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor9 = new Persona(29,"Monitor9",74479112,"@gmail.com",direccionUnica, eEstado.activo);

const jefe0 = new Persona(10,"Jefe0",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe1 = new Persona(11,"Jefe1",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe2 = new Persona(12,"Jefe2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe3 = new Persona(13,"Jefe3",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe4 = new Persona(14,"Jefe4",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe5 = new Persona(15,"Jefe5",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe6 = new Persona(16,"Jefe6",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe7 = new Persona(17,"Jefe7",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe8 = new Persona(18,"Jefe8",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe9 = new Persona(19,"Jefe9",74479112,"@gmail.com",direccionUnica, eEstado.activo);



const miembro30 = new Persona(30,"Asesor general",74479112,"@gmail.com",direccionUnica, eEstado.activo);

//Grupo 1 (1 Monitor 1 Miembro)
const componente0 = new SimpleComponent(Roles.Monitor, monitor0);
const componente1 = new SimpleComponent(Roles.Miembro, miembro0);
const grupo1 = new CompositeComponent(111, "Grupo 1", Roles.Grupo);
grupo1.addComponent(componente0);
grupo1.addComponent(componente1);

// Grupo 2 (2 Monitores, 3 Miembros)
const componente2 = new SimpleComponent(Roles.Monitor, monitor1);
const componente3 = new SimpleComponent(Roles.Monitor, monitor2);
const componente4 = new SimpleComponent(Roles.Miembro, miembro1);
const componente5 = new SimpleComponent(Roles.Miembro, miembro2);
const componente6 = new SimpleComponent(Roles.Miembro, miembro3);
const grupo2 = new CompositeComponent(112, "Grupo 2", Roles.Grupo);
grupo2.addComponent(componente2);
grupo2.addComponent(componente3);
grupo2.addComponent(componente4);
grupo2.addComponent(componente5);
grupo2.addComponent(componente6);

//Rama 1 (Grupo 1, Grupo 2)
const rama1 = new CompositeComponent(1, "Rama 1", Roles.Rama);
rama1.addComponent(grupo1);
rama1.addComponent(grupo2);


//Grupo 3 (2 Jefe, 4 Miembros)
const componente7 = new SimpleComponent(Roles.Jefe, jefe0);
const componente8 = new SimpleComponent(Roles.Jefe, jefe1);
const componente9 = new SimpleComponent(Roles.Miembro, miembro4);
const componente10 = new SimpleComponent(Roles.Miembro, miembro5);
const componente11 = new SimpleComponent(Roles.Miembro, miembro6);
const componente12 = new SimpleComponent(Roles.Miembro, miembro7);
const grupo3 = new CompositeComponent(123, "Grupo 3", Roles.Grupo);
grupo3.addComponent(componente7);
grupo3.addComponent(componente8);
grupo3.addComponent(componente9);
grupo3.addComponent(componente10);
grupo3.addComponent(componente11);
grupo3.addComponent(componente12);

//Rama 1 (Grupo 3)
const rama2 = new CompositeComponent(2, "Rama 2", Roles.Rama);
rama2.addComponent(grupo3);

//Zona 1 (Rama 1, Rama 2)
const zona1 = new CompositeComponent(1, "Zona 1", Roles.Zona);
zona1.addComponent(rama1);
zona1.addComponent(rama2);

//COORDINACION (asesor general, zona1)
const componente13 = new SimpleComponent(Roles.Asesor, miembro30);
const coordinacion = new CompositeComponent(1, "Coordinación", Roles.Coordinacion);
coordinacion.addComponent(zona1);



console.clear();
console.log("BIENVENIDO A LAS PRUEBAS DEL COMPOSITE\n");

//Imprimir miembro
console.log("*******************Imprimir Miembro**********************\n");
console.log(componente0.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir grupo
console.log("*******************Imprimir Grupo**********************\n");
console.log(grupo1.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir rama
console.log("*******************Imprimir Rama**********************\n");
console.log(rama1.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir zona
console.log("*******************Imprimir Zona**********************\n");
console.log(zona1.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir coordinacion
console.log("****************Imprimir Coordinación******************\n");
console.log(coordinacion.toString("")+"\n");
console.log("*******************************************************\n");




/*const eol = require('os').EOL;
import readline from 'readline';
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const menuPrincipal = new Map();
menuPrincipal.set('1', 'Coordinación');
menuPrincipal.set('2', 'Zona');
menuPrincipal.set('3', 'Rama');
menuPrincipal.set('4', 'Grupo');
menuPrincipal.set('Salir', 'Ctrl+C');

let jefatura: Array<String> = [];

function imprimirMenuPrincipal() {
    console.log(`${eol}keys`);
    menuPrincipal.forEach((value, key) => {
      console.log(`${key} - ${value}`);
    });
    console.log();
}

process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
        process.exit();
    }
    else {
        if (menuPrincipal.has(str)) {
            console.log(`"Opción ${str} seleccionada"`);
        } 
        else {
            console.log(`"Opción ${str} in-existente"`);
        }
    }
});
//imprimirMenuPrincipal();*/