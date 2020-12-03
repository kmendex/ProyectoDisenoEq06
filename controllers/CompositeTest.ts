//Ejecutar en la terminal npm install typescript
//Ejecutar en la terminal npm install keypress
//Ejecutar en la terminal npm install -g ts-node (Compila y ejecuta el *.ts)
//Agregar al archivo package.json en la parte de script "tsc": "tsc"
//Ejecutar en la terminal npx tsc --init
//Debe habilitar en el powershell como administrador, la ejecución de scripts Set-ExecutionPolicy Unrestricted
//Digitar en la terminal ts-node CompositeTest.ts
//Recordar deshabilitar ésta opción después de terminar de hacer pruebas Set-ExecutionPolicy Restricted

import { Roles } from "../models/composite/AbstractComponent";
import { Distrito } from "../models/Distrito";
import { Canton } from "../models/Canton";
import { Provincia } from "../models/Provincia";
import { Pais } from "../models/Pais";
import { Direccion } from "../models/Direccion";
import { eEstado, Persona } from "../models/Persona";
import { Group } from "../models/brigde/Group";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { Branch } from "../models/brigde/Branch";
import { Zone } from "../models/brigde/Zone";

const pais = new Pais(1, "Costa Rica");
const provincia = new Provincia(3, "Cartago");
const canton = new Canton(1, "Central");
const distrito = new Distrito(2, "Oriental");

const direccionUnica = new Direccion(pais, provincia, canton, distrito, "Los Ángeles");

const persona0 = new Persona(0,"Miembro0",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona1 = new Persona(1,"Miembro1",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona2 = new Persona(2,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona3 = new Persona(3,"Miembro3",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona4 = new Persona(4,"Miembro4",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona5 = new Persona(5,"Miembro5",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona6 = new Persona(6,"Miembro6",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona7 = new Persona(7,"Miembro7",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona8 = new Persona(8,"Miembro8",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona9 = new Persona(9,"Miembro9",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona10 = new Persona(10,"Miembro10",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const persona11 = new Persona(11,"Miembro11",74479112,"@gmail.com",direccionUnica, eEstado.activo);

const monitor0 = new Persona(21,"Monitor1",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor1 = new Persona(20,"Monitor0",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor2 = new Persona(22,"Monitor2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor3 = new Persona(23,"Monitor3",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor4 = new Persona(24,"Monitor4",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor5 = new Persona(25,"Monitor5",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor6 = new Persona(26,"Monitor6",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor7 = new Persona(27,"Monitor7",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor8 = new Persona(28,"Monitor8",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const monitor9 = new Persona(29,"Monitor9",74479112,"@gmail.com",direccionUnica, eEstado.activo);

const jefe0 = new Persona(0,"Miembro0",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe1 = new Persona(1,"Miembro1",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe2 = new Persona(2,"Miembro2",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe3 = new Persona(3,"Miembro3",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe4 = new Persona(4,"Miembro4",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe5 = new Persona(5,"Miembro5",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe6 = new Persona(6,"Miembro6",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe7 = new Persona(7,"Miembro7",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe8 = new Persona(8,"Miembro8",74479112,"@gmail.com",direccionUnica, eEstado.activo);
const jefe9 = new Persona(9,"Miembro9",74479112,"@gmail.com",direccionUnica, eEstado.activo);

const miembro30 = new Persona(30,"Asesor General",74479112,"@gmail.com", direccionUnica, eEstado.activo);

console.log("***********************GRUPO 0**************************\n");
const grupo0 = new Group(new CompositeComponent("0", "Grupo0", Roles.Grupo));
console.log(grupo0.addComponent(new SimpleComponent(persona0,Roles.Miembro)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona1,Roles.Miembro)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona2,Roles.Miembro)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona3,Roles.Miembro)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona4,Roles.Miembro)));//true
console.log("*******************Ingresar Monitores********************\n");
console.log(grupo0.addComponent(new SimpleComponent(persona2,Roles.Monitor)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona2,Roles.Monitor)));//false
console.log(grupo0.addComponent(new SimpleComponent(persona5,Roles.Monitor)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona6,Roles.Monitor)));//false
console.log("*******************Ingresar Jefes********************\n");
console.log(grupo0.addComponent(new SimpleComponent(persona2,Roles.Jefe)));//false
console.log(grupo0.addComponent(new SimpleComponent(persona5,Roles.Jefe)));//false
console.log(grupo0.addComponent(new SimpleComponent(persona0,Roles.Jefe)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona1,Roles.Jefe)));//true
console.log(grupo0.addComponent(new SimpleComponent(persona4,Roles.Jefe)));//false
console.log("*******************Obtener Jefatura Grupo********************\n");
grupo0.getHeadship().forEach(element => {
    console.log(element.toString(""));    
});
console.log("*******************Obtener Comision Grupo********************\n");
grupo0.getComission().forEach(element => {
    console.log(element.toString(""));    
});

console.log("***********************GRUPO 1***************************\n");
const grupo1 = new Group(new CompositeComponent("1", "Grupo1", Roles.Grupo));
console.log(grupo1.addComponent(new SimpleComponent(persona5,Roles.Miembro)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona6,Roles.Miembro)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona7,Roles.Miembro)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona8,Roles.Miembro)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona9,Roles.Miembro)));//true
console.log("*******************Ingresar Monitores********************\n");
console.log(grupo1.addComponent(new SimpleComponent(persona6,Roles.Monitor)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona6,Roles.Monitor)));//false
console.log(grupo1.addComponent(new SimpleComponent(persona10,Roles.Monitor)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona11,Roles.Monitor)));//false
console.log("*******************Ingresar Jefes********************\n");
console.log(grupo1.addComponent(new SimpleComponent(persona6,Roles.Jefe)));//false
console.log(grupo1.addComponent(new SimpleComponent(persona10,Roles.Jefe)));//false
console.log(grupo1.addComponent(new SimpleComponent(persona5,Roles.Jefe)));//true
console.log(grupo1.addComponent(new SimpleComponent(persona6,Roles.Jefe)));//false
console.log(grupo1.addComponent(new SimpleComponent(persona9,Roles.Jefe)));//true
console.log("*******************Obtener Jefatura Grupo********************\n");
grupo1.getHeadship().forEach(element => {
    console.log(element.toString(""));    
});
console.log("*******************Obtener Comision Grupo********************\n");
grupo1.getComission().forEach(element => {
    console.log(element.toString(""));    
});

console.log("***********************Rama 0***************************\n");
const rama0 = new Branch(new CompositeComponent("20", "Rama20", Roles.Rama));
console.log(rama0.addComponent(grupo0.getComponents()));//true
console.log(rama0.addComponent(grupo1.getComponents()));//true
console.log(rama0.addComponent(new SimpleComponent(persona10, Roles.Monitor)));//false
console.log(rama0.addComponent(new SimpleComponent(persona10, Roles.Jefe)));//true
console.log(rama0.addComponent(new SimpleComponent(persona5, Roles.Jefe)));//true
console.log(rama0.addComponent(new SimpleComponent(persona1, Roles.Jefe)));//false
console.log(rama0.addComponent(new SimpleComponent(persona0, Roles.Jefe)));//false

console.log("***********************Jefatura Rama***************************\n");
rama0.getHeadship().forEach(element => {
    console.log(element.toString(""));    
});
console.log("***********************Comision Rama***************************\n");
rama0.getComission().forEach(element => {
    console.log(element.toString(""));    
});

console.log("***********************Todo Rama***************************\n");
rama0.getAll().forEach(element => {
    console.log(element.toString(""));
});

console.log("***********************Rama 1***************************\n");
const rama1 = new Branch(new CompositeComponent("30", "Rama30", Roles.Rama));
console.log(rama1.addComponent(grupo0.getComponents()));//true
console.log(rama1.addComponent(grupo1.getComponents()));//true
console.log(rama1.addComponent(new SimpleComponent(persona10, Roles.Monitor)));//false
console.log(rama1.addComponent(new SimpleComponent(persona10, Roles.Jefe)));//true
console.log(rama1.addComponent(new SimpleComponent(persona5, Roles.Jefe)));//true
console.log(rama1.addComponent(new SimpleComponent(persona1, Roles.Jefe)));//false
console.log(rama1.addComponent(new SimpleComponent(persona0, Roles.Jefe)));//false

console.log("***********************Todo Rama***************************\n");
rama1.getAll().forEach(element => {
    console.log(element.toString(""));
});

console.log("***********************Zona 0***************************\n");
const zona0 = new Zone(new CompositeComponent("40", "Zona40", Roles.Zona));
console.log(zona0.addComponent(rama0.getComponents()));//true
console.log(zona0.addComponent(rama0.getComponents()));//false
console.log(zona0.addComponent(new SimpleComponent(persona10, Roles.Monitor)));//false
console.log(zona0.addComponent(new SimpleComponent(persona10, Roles.Jefe)));//true
console.log(zona0.addComponent(new SimpleComponent(persona9, Roles.Jefe)));//false
console.log(zona0.addComponent(new SimpleComponent(persona5, Roles.Jefe)));//true


console.log("***********************Jefatura Zona***************************\n");
zona0.getHeadship().forEach(element => {
    console.log(element.toString(""));    
});
console.log("***********************Comision Zona***************************\n");
zona0.getComission().forEach(element => {
    console.log(element.toString(""));    
});

console.log("***********************Todo Zona***************************\n");
zona0.getAll().forEach(element => {
    console.log(element.toString(""));
});


/*grupo0.addMember(persona0);
grupo0.addMember(persona1);
grupo0.addMember(persona2);
grupo0.addMember(persona3);
grupo0.addMember(persona4);

console.log("*******************Ingresar Monitores********************\n");
console.log(grupo0.addMonitor(persona2));//true
console.log(grupo0.addMonitor(persona2));//false
console.log(grupo0.addMonitor(persona5));//true
console.log(grupo0.addMonitor(persona6));//false
console.log("*******************Activado Virtual********************\n");
console.log(grupo0.composite.getComponent("2",Roles.Monitor).getEnable());
console.log(grupo0.composite.getComponent("5",Roles.Monitor).getEnable());
console.log("*******************Ingresar Jefes********************\n");
console.log(grupo0.addBoss(persona2));//false
console.log(grupo0.addBoss(persona5));//false
console.log(grupo0.addBoss(persona0));//true
console.log(grupo0.addBoss(persona1));//true
console.log(grupo0.addBoss(persona4));//false
console.log("*******************Borrado Virtual********************\n");
console.log(grupo0.composite.getComponent("2",Roles.Monitor).getEnable());
console.log(grupo0.composite.getComponent("5",Roles.Monitor).getEnable());*/

//console.clear();
console.log("BIENVENIDO A LAS PRUEBAS DEL COMPOSITE\n");
console.log(zona0.toString(""));
//console.log(grupo0.toString(""));
//console.log(grupo1.toString(""));

//console.log((<CompositeComponent>grupo0.getComposite()).getComponent("2",Roles.Monitor).getEnable());
//console.log((<CompositeComponent>grupo0.getComposite()).getComponent("5",Roles.Monitor).getEnable());



//Grupo 1 (1 Monitor 1 Miembro)
//const componente0 = new SimpleComponent(Roles.Monitor, monitor0);
//const componente1 = new SimpleComponent(Roles.Miembro, miembro0);
//const grupo1 = new CompositeComponent(111,"Grupo 1", Roles.Grupo);
//grupo1.addComponent(componente0);
//grupo1.addComponent(componente1);

/*const zona1 = new CompositeComponent(1, "Zona 1", Roles.Zona);
var zoneController = new ZoneController(zona1);
console.log(zoneController.addBranch(11,"Rama 1"));
console.log(zoneController.addBranch(12,"Rama 2"));
console.log(zoneController.addBranch(11,"Rama 3"));


var branchController = new BranchController(zoneController.getBranchByID(11));
console.log(branchController.addGroup(111,"Grupo 1"));
console.log(branchController.addGroup(111, "Grupo 2"));
console.log(branchController.addGroup(112, "Grupo 2"));

var groupController = new GroupController(branchController.getGroupByID(111));
console.log(groupController.addMonitor(monitor0));
console.log(groupController.addMember(miembro0));

groupController = new GroupController(branchController.getGroupByID(112));
console.log(groupController.addMonitor(monitor1));
console.log(groupController.addMonitor(monitor2));
console.log(groupController.addMember(miembro1));
console.log(groupController.addMember(miembro2));
console.log(groupController.addMember(miembro3));

const zona2 = new CompositeComponent(2, "Zona 2", Roles.Zona);
zoneController = new ZoneController(zona2);
console.log(zoneController.addBranch(21,"Rama 1"));

branchController = new BranchController(zoneController.getBranchByID(21));
console.log(branchController.addGroup(211,"Grupo 1"));

groupController = new GroupController(branchController.getGroupByID(211));
console.log(groupController.addMember(miembro4));//true
console.log(groupController.addMember(miembro5));//true
console.log(groupController.addMember(miembro6));//true
console.log(groupController.addMember(miembro7));//true
console.log(groupController.addMember(miembro8));//true
console.log(groupController.addMember(miembro9));//true
console.log(groupController.addMonitor(monitor3));//true
console.log(groupController.addMonitor(monitor4));//true
console.log(groupController.addMonitor(monitor5));//false
console.log(groupController.addBoss(miembro5));//true
console.log(groupController.addBoss(monitor5));//false
console.log(groupController.addBoss(miembro9));//true
console.log(groupController.addBoss(miembro1));//false
console.log(groupController.addBoss(miembro5));//false
console.log(groupController.addBoss(miembro8));//false


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