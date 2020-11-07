
//Ejecutar en la terminal npm install typescript
//Ejecutar en la terminal npm install keypress
//Ejecutar en la terminal npm install -g ts-node (Compila y ejecuta el *.ts)
//Agregar al archivo package.json en la parte de script "tsc": "tsc"
//Ejecutar en la terminal npx tsc --init
//Debe habilitar en el powershell como administrador, la ejecución de scripts Set-ExecutionPolicy Unrestricted
//Digitar en la terminal ts-node CompositePruebas.ts
//Recordar deshabilitar ésta opción después de terminar de hacer pruebas Set-ExecutionPolicy Restricted
//OPCIONAL: npm install express @types/express
//OPCIONAL: npm install -g javascript-to-typescript COMMAND: js-to-ts --filter './file1.js'

import { Canton } from "../models/Canton";
import { CompositeComponent } from "../models/Composite/CompositeComponent";
import { SimpleComponent } from "../models/Composite/SimpleComponent";
import { Direccion } from "../models/Direccion";
import { Districto } from "../models/Districto";
import { Persona } from "../models/Persona";
import { Provincia } from "../models/Provincia";

const provincia = new Provincia(3,"Cartago");
const canton = new Canton(1, "Central");
const distrito = new Districto(2,"Oriental");
const direccionUnica = new Direccion(provincia,canton,distrito,"Los Ángeles");

const miembro0 = new Persona(0,"Miembro0",74479112,"@gmail.com",direccionUnica);
const miembro1 = new Persona(1,"Miembro1",74479112,"@gmail.com",direccionUnica);
const miembro2 = new Persona(2,"Miembro2",74479112,"@gmail.com",direccionUnica);
const miembro3 = new Persona(3,"Miembro3",74479112,"@gmail.com",direccionUnica);
const miembro4 = new Persona(4,"Miembro4",74479112,"@gmail.com",direccionUnica);
const miembro5 = new Persona(5,"Miembro5",74479112,"@gmail.com",direccionUnica);
const miembro6 = new Persona(6,"Miembro6",74479112,"@gmail.com",direccionUnica);
const miembro7 = new Persona(7,"Miembro7",74479112,"@gmail.com",direccionUnica);
const miembro8 = new Persona(8,"Miembro8",74479112,"@gmail.com",direccionUnica);
const miembro9 = new Persona(9,"Miembro9",74479112,"@gmail.com",direccionUnica);

const monitor0 = new Persona(20,"Monitor0",74479112,"@gmail.com",direccionUnica);
const monitor1 = new Persona(21,"Monitor1",74479112,"@gmail.com",direccionUnica);
const monitor2 = new Persona(22,"Monitor2",74479112,"@gmail.com",direccionUnica);
const monitor3 = new Persona(23,"Monitor3",74479112,"@gmail.com",direccionUnica);
const monitor4 = new Persona(24,"Monitor4",74479112,"@gmail.com",direccionUnica);
const monitor5 = new Persona(25,"Monitor5",74479112,"@gmail.com",direccionUnica);
const monitor6 = new Persona(26,"Monitor6",74479112,"@gmail.com",direccionUnica);
const monitor7 = new Persona(27,"Monitor7",74479112,"@gmail.com",direccionUnica);
const monitor8 = new Persona(28,"Monitor8",74479112,"@gmail.com",direccionUnica);
const monitor9 = new Persona(29,"Monitor9",74479112,"@gmail.com",direccionUnica);

const jefe0 = new Persona(10,"Jefe0",74479112,"@gmail.com",direccionUnica);
const jefe1 = new Persona(11,"Jefe1",74479112,"@gmail.com",direccionUnica);
const jefe2 = new Persona(12,"Jefe2",74479112,"@gmail.com",direccionUnica);
const jefe3 = new Persona(13,"Jefe3",74479112,"@gmail.com",direccionUnica);
const jefe4 = new Persona(14,"Jefe4",74479112,"@gmail.com",direccionUnica);
const jefe5 = new Persona(15,"Jefe5",74479112,"@gmail.com",direccionUnica);
const jefe6 = new Persona(16,"Jefe6",74479112,"@gmail.com",direccionUnica);
const jefe7 = new Persona(17,"Jefe7",74479112,"@gmail.com",direccionUnica);
const jefe8 = new Persona(18,"Jefe8",74479112,"@gmail.com",direccionUnica);
const jefe9 = new Persona(19,"Jefe9",74479112,"@gmail.com",direccionUnica);



const miembro30 = new Persona(30,"Asesor general",74479112,"@gmail.com",direccionUnica);

//Grupo 1 (1 Monitor 1 Miembro)
const componente0 = new SimpleComponent("MIEMBRO", monitor0);
const componente1 = new SimpleComponent("MIEMBRO", miembro0);
const grupo1 = new CompositeComponent(111,"Grupo 1", "GRUPO");
grupo1.addComponent(componente0);
grupo1.addComponent(componente1);

// Grupo 2 (2 Monitores, 3 Miembros)
const componente2 = new SimpleComponent("MONITOR", monitor1);
const componente3 = new SimpleComponent("MONITOR", monitor2);
const componente4 = new SimpleComponent("MIEMBRO", miembro1);
const componente5 = new SimpleComponent("MIEMBRO", miembro2);
const componente6 = new SimpleComponent("MIEMBRO", miembro3);
const grupo2 = new CompositeComponent(112,"Grupo 2", "GRUPO");
grupo2.addComponent(componente2);
grupo2.addComponent(componente3);
grupo2.addComponent(componente4);
grupo2.addComponent(componente5);
grupo2.addComponent(componente6);

//Rama 1 (Grupo 1, Grupo 2)
const rama1 = new CompositeComponent(1, "Rama 1", "RAMA");
rama1.addComponent(grupo1);
rama1.addComponent(grupo2);


//Grupo 3 (2 Jefe, 4 Miembros)
const componente7 = new SimpleComponent("JEFE", jefe0);
const componente8 = new SimpleComponent("JEFE", jefe1);
const componente9 = new SimpleComponent("MIEMBRO", miembro4);
const componente10 = new SimpleComponent("MIEMBRO", miembro5);
const componente11 = new SimpleComponent("MIEMBRO", miembro6);
const componente12 = new SimpleComponent("MIEMBRO", miembro7);
const grupo3 = new CompositeComponent(123,"Grupo 3", "GRUPO");
grupo3.addComponent(componente7);
grupo3.addComponent(componente8);
grupo3.addComponent(componente9);
grupo3.addComponent(componente10);
grupo3.addComponent(componente11);
grupo3.addComponent(componente12);

//Rama 1 (Grupo 3)
const rama2 = new CompositeComponent(2, "Rama 2", "RAMA");
rama2.addComponent(grupo3);

//Zona 1 (Rama 1, Rama 2)
const zona1 = new CompositeComponent(1, "Zona 1", "ZONA");
zona1.addComponent(rama1);
zona1.addComponent(rama2);

//COORDINACION (asesor general, zona1)
const componente13 = new SimpleComponent("Asesor General", miembro30);
const coordinacion = new CompositeComponent(1, "Coordinación", "COORDINACION");
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


