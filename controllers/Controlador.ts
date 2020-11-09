import { CPersona } from "../controllers/CPersona";
import { CComposite } from "../controllers/CComposite";
import { COrganizacion } from "../controllers/COrganizacion";
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { Persona } from "../models/Persona";

const db = require("../dao/DAOSourcePostgres.js");

try{
  //let result = await db.getOrganization('12');
  let result = await db.getOrganization('1');
  console.log(result);
  console.log(result.readOrganization.name);  
}
catch(error){
  console.log(error);
}


export class Controlador{

}

//--------------------Definir--------------------//
function definirCoordinador() {
    return null;
}

function definirZona() {
    return null;
}

function definirRama() {
    return null;
}

function definirGrupo() {
    return null;
}

//--------------------Consultar--------------------//
function consultarZonas() {
    //Collections.Set<CompositeComponent> zona = CComposite.listarZonas();
    return null;
}

function consultarRamas() {
    return null;
}

function consultarGrupos() {
    return null;
}

//--------------------Designar--------------------//
function designarAsesor(id: number, nombre: string) {
    return null;
}

function designarJefeZ(id: number, nombre: string) {
    return null;
}

function designarJefeR(id: number, nombre: string) {
    return null;
}

function designarMonitor(id: number, nombre: string) {
    return null;
}