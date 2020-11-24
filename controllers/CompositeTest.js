"use strict";
//Ejecutar en la terminal npm install typescript
//Ejecutar en la terminal npm install keypress
//Ejecutar en la terminal npm install -g ts-node (Compila y ejecuta el *.ts)
//Agregar al archivo package.json en la parte de script "tsc": "tsc"
//Ejecutar en la terminal npx tsc --init
//Debe habilitar en el powershell como administrador, la ejecución de scripts Set-ExecutionPolicy Unrestricted
//Digitar en la terminal ts-node CompositeTest.ts
//Recordar deshabilitar ésta opción después de terminar de hacer pruebas Set-ExecutionPolicy Restricted
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractComponent_1 = require("../models/composite/AbstractComponent");
const CompositeComponent_1 = require("../models/composite/CompositeComponent");
const GroupController_1 = require("../models/factory/GroupController");
const Distrito_1 = require("../models/Distrito");
const Canton_1 = require("../models/Canton");
const Provincia_1 = require("../models/Provincia");
const Pais_1 = require("../models/Pais");
const Direccion_1 = require("../models/Direccion");
const Persona_1 = require("../models/Persona");
const BranchController_1 = require("../models/factory/BranchController");
const ZoneController_1 = require("../models/factory/ZoneController");
const pais = new Pais_1.Pais(1, "Costa Rica");
const provincia = new Provincia_1.Provincia(3, "Cartago");
const canton = new Canton_1.Canton(1, "Central");
const distrito = new Distrito_1.Distrito(2, "Oriental");
const direccionUnica = new Direccion_1.Direccion(pais, provincia, canton, distrito, "Los Ángeles");
const miembro0 = new Persona_1.Persona(0, "Miembro0", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro1 = new Persona_1.Persona(1, "Miembro1", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro2 = new Persona_1.Persona(2, "Miembro2", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro3 = new Persona_1.Persona(3, "Miembro3", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro4 = new Persona_1.Persona(4, "Miembro4", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro5 = new Persona_1.Persona(5, "Miembro5", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro6 = new Persona_1.Persona(6, "Miembro6", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro7 = new Persona_1.Persona(7, "Miembro7", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro8 = new Persona_1.Persona(8, "Miembro8", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro9 = new Persona_1.Persona(9, "Miembro9", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor0 = new Persona_1.Persona(21, "Monitor1", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor1 = new Persona_1.Persona(20, "Monitor0", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor2 = new Persona_1.Persona(22, "Monitor2", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor3 = new Persona_1.Persona(23, "Monitor3", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor4 = new Persona_1.Persona(24, "Monitor4", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor5 = new Persona_1.Persona(25, "Monitor5", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor6 = new Persona_1.Persona(26, "Monitor6", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor7 = new Persona_1.Persona(27, "Monitor7", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor8 = new Persona_1.Persona(28, "Monitor8", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const monitor9 = new Persona_1.Persona(29, "Monitor9", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe0 = new Persona_1.Persona(0, "Miembro0", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe1 = new Persona_1.Persona(1, "Miembro1", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe2 = new Persona_1.Persona(2, "Miembro2", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe3 = new Persona_1.Persona(3, "Miembro3", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe4 = new Persona_1.Persona(4, "Miembro4", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe5 = new Persona_1.Persona(5, "Miembro5", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe6 = new Persona_1.Persona(6, "Miembro6", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe7 = new Persona_1.Persona(7, "Miembro7", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe8 = new Persona_1.Persona(8, "Miembro8", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const jefe9 = new Persona_1.Persona(9, "Miembro9", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
const miembro30 = new Persona_1.Persona(30, "Asesor General", 74479112, "@gmail.com", direccionUnica, Persona_1.eEstado.activo);
//Grupo 1 (1 Monitor 1 Miembro)
//const componente0 = new SimpleComponent(Roles.Monitor, monitor0);
//const componente1 = new SimpleComponent(Roles.Miembro, miembro0);
//const grupo1 = new CompositeComponent(111,"Grupo 1", Roles.Grupo);
//grupo1.addComponent(componente0);
//grupo1.addComponent(componente1);
const zona1 = new CompositeComponent_1.CompositeComponent(1, "Zona 1", AbstractComponent_1.Roles.Zona);
var zoneController = new ZoneController_1.ZoneController(zona1);
console.log(zoneController.addBranch(11, "Rama 1"));
console.log(zoneController.addBranch(12, "Rama 2"));
console.log(zoneController.addBranch(11, "Rama 3"));
var branchController = new BranchController_1.BranchController(zoneController.getBranchByID(11));
console.log(branchController.addGroup(111, "Grupo 1"));
console.log(branchController.addGroup(111, "Grupo 2"));
console.log(branchController.addGroup(112, "Grupo 2"));
var groupController = new GroupController_1.GroupController(branchController.getGroupByID(111));
console.log(groupController.addMonitor(monitor0));
console.log(groupController.addMember(miembro0));
groupController = new GroupController_1.GroupController(branchController.getGroupByID(112));
console.log(groupController.addMonitor(monitor1));
console.log(groupController.addMonitor(monitor2));
console.log(groupController.addMember(miembro1));
console.log(groupController.addMember(miembro2));
console.log(groupController.addMember(miembro3));
const zona2 = new CompositeComponent_1.CompositeComponent(2, "Zona 2", AbstractComponent_1.Roles.Zona);
zoneController = new ZoneController_1.ZoneController(zona2);
console.log(zoneController.addBranch(21, "Rama 1"));
branchController = new BranchController_1.BranchController(zoneController.getBranchByID(21));
console.log(branchController.addGroup(211, "Grupo 1"));
groupController = new GroupController_1.GroupController(branchController.getGroupByID(211));
console.log(groupController.addMember(miembro4)); //true
console.log(groupController.addMember(miembro5)); //true
console.log(groupController.addMember(miembro6)); //true
console.log(groupController.addMember(miembro7)); //true
console.log(groupController.addMember(miembro8)); //true
console.log(groupController.addMember(miembro9)); //true
console.log(groupController.addMonitor(monitor3)); //true
console.log(groupController.addMonitor(monitor4)); //true
console.log(groupController.addMonitor(monitor5)); //false
console.log(groupController.addBoss(miembro5)); //true
console.log(groupController.addBoss(monitor5)); //false
console.log(groupController.addBoss(miembro9)); //true
console.log(groupController.addBoss(miembro1)); //false
console.log(groupController.addBoss(miembro5)); //false
console.log(groupController.addBoss(miembro8)); //false
console.log(branchController.getBranch().toString(""));
// Grupo 2 (2 Monitores, 3 Miembros)
/*const componente2 = new SimpleComponent(Roles.Monitor, monitor1);
const componente3 = new SimpleComponent(Roles.Monitor, monitor2);
const componente4 = new SimpleComponent(Roles.Miembro, miembro1);
const componente5 = new SimpleComponent(Roles.Miembro, miembro2);
const componente6 = new SimpleComponent(Roles.Miembro, miembro3);
//const grupo2 = new CompositeComponent(112, "Grupo 2", Roles.Grupo);
grupo2.addComponent(componente2);
grupo2.addComponent(componente3);
grupo2.addComponent(componente4);
grupo2.addComponent(componente5);
grupo2.addComponent(componente6);
var groupController2 = new GroupController(grupo2);
groupController2.addMonitor(monitor1);
groupController2.addMonitor(monitor2);
groupController2.addMember(miembro1);
groupController2.addMember(miembro2);
groupController2.addMember(miembro3);*/
//rama1.addComponent(grupo1);
//rama1.addComponent(grupo2);
//Grupo 3 (2 Jefe, 4 Miembros)
/*const componente7 = new SimpleComponent(Roles.Jefe, jefe0);
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
grupo3.addComponent(componente12);*/
/*//Rama 1 (Grupo 3)
const rama2 = new CompositeComponent(2, "Rama 2", Roles.Rama);
rama2.addComponent(grupo3);

//Zona 1 (Rama 1, Rama 2)
const zona1 = new CompositeComponent(1, "Zona 1", Roles.Zona);
zona1.addComponent(rama1);
zona1.addComponent(rama2);

//COORDINACION (asesor general, zona1)
const componente13 = new SimpleComponent(Roles.Asesor, miembro30);
const coordinacion = new CompositeComponent(1, "Coordinación", Roles.Coordinacion);
coordinacion.addComponent(zona1);*/
console.clear();
console.log("BIENVENIDO A LAS PRUEBAS DEL COMPOSITE\n");
/*
console.log("*******************Imprimir Comisión********************\n");
for(var component of branchController1.getComission()) {
    console.log(component.toString(""));
}
console.log("*******************Imprimir Jefatura********************\n");
for(var component1 of branchController1.getHeadship()) {
    console.log(component1.toString(""));
}
console.log("*******************Asignar Jefe********************\n");
console.log(branchController1.addBoss(jefe0)); //false
console.log(branchController1.addBoss(miembro1)); //false
console.log(branchController1.addBoss(monitor0)); //true
console.log(branchController1.addBoss(monitor1)); //true
console.log(branchController1.addBoss(monitor3)); //false

console.log("*******************Imprimir Jefatura********************\n");
for(var component1 of branchController1.getHeadship()) {
    console.log(component1.toString(""));
}
*/
/*
//Imprimir miembro
console.log("*******************Imprimir Miembro********************\n");
console.log(componente0.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir grupo
console.log("*******************Imprimir Grupo**********************\n");
console.log(grupo1.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir rama
console.log("*******************Imprimir Rama***********************\n");
console.log(rama1.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir zona
console.log("*******************Imprimir Zona***********************\n");
console.log(zona1.toString("")+"\n");
console.log("*******************************************************\n");

//Imprimir coordinacion
console.log("****************Imprimir Coordinación******************\n");
console.log(coordinacion.toString("")+"\n");
console.log("*******************************************************\n");
*/
/*console.log("*******************AGREGAR MIEMBRO*********************");
console.log(groupController1.addMember(componente0));
console.log(groupController1.addMember(componente1));
console.log("*******************CONTAR ELEMENTOS********************");
console.log(groupController2.getGroup().count("MONITOR"));
console.log(groupController2.getGroup().count("MIEMBRO"));
console.log(groupController2.getGroup().count("JEFE"));
console.log("*****************Buscar Elementos ID********************");
console.log(groupController2.getGroup().isID(22));
console.log(groupController2.getGroup().isID(2));
console.log(groupController2.getGroup().isID(24));
console.log("***************Buscar Elementos Nombre******************");
console.log(groupController2.getGroup().isName("Monitor1"));
console.log(groupController2.getGroup().isName("Miembro2"));
console.log(groupController2.getGroup().isName("Monitor3"));
console.log("************Buscar Elementos ID y Nombre****************");
console.log(groupController2.getGroup().isHere(21, "Monitor1"));
console.log(groupController2.getGroup().isHere(2, "Miembro2"));
console.log(groupController2.getGroup().isHere(21, "Monitor3"));
console.log(groupController2.getGroup().isHere(22, "Miembro2"));*/
/*//Imprimir grupo
console.log("*******************Imprimir Grupo2*********************\n");
console.log(grupo1.toString("")+"\n");
console.log("*******************************************************\n");

//const miembro2 = new Persona(2,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);

const componenteAux = new SimpleComponent(Roles.Miembro, miembro2);
console.log(grupo2.findIndexComponent(2, "Miembro2", Roles.Asesor));
console.log(grupo2.findIndexComponent(2, "Miembro2", Roles.Miembro));
console.log(grupo2.removeComponent(componenteAux));

//Imprimir grupo
console.log("*******************Imprimir Grupo2*********************\n");
console.log(grupo2.toString("")+"\n");
console.log("*******************************************************\n");*/
/*console.log("*******************Imprimir Grupo1*********************\n");
console.log(grupo2.toString("")+"\n");
console.log("*******************************************************\n");

const miembroAux0 = new Persona(1,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembroAux1 = new Persona(22,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembroAux2 = new Persona(4,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembroAux3 = new Persona(3,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const miembroAux4 = new Persona(2,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
console.log(groupController2.addBoss(miembroAux0)); //true
console.log(groupController2.addBoss(miembroAux1)); //false
console.log(groupController2.addBoss(miembroAux0)); //false
console.log(groupController2.addBoss(miembroAux2)); //false
console.log(groupController2.addBoss(miembroAux3)); //true
console.log(groupController2.addBoss(miembroAux4)); //false

console.log("*******************Imprimir Grupo1*********************\n");
console.log(grupo2.toString("")+"\n");
console.log("*******************************************************\n");


//console.log(groupController2.addBoss(miembroAux));


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
