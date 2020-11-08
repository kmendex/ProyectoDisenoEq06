//import CPersona from "../controllers/CPersona";
import { CComposite } from "../controllers/CComposite";
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { Persona } from "../models/Persona";
//import { COrganizacion } from "../controllers/COrganizacion";
import * as Collections from 'typescript-collections';

export class Controlador{

}

//--------------------Definir--------------------//
function definirCoordinador(): {} {
    return null;
}

function definirZona(): {} {
    return null;
}

function definirRama(): {} {
    return null;
}

function definirGrupo(): {} {
    return null;
}

//--------------------Consultar--------------------//
function consultarZonas(): Collections.Set<CompositeComponent> {
    //Collections.Set<CompositeComponent> zona = CComposite.listarZonas();
    return zona;
}

function consultarRamas(): Collections.Set<CompositeComponent> {
    return null;
}

function consultarGrupos(): Collections.Set<CompositeComponent> {
    return null;
}

//--------------------Designar--------------------//
function designarAsesor(id: number, nombre: string): Collections.Set<SimpleComponent> {
    return null;
}

function designarJefeZ(id: number, nombre: string): Collections.Set<SimpleComponent> {
    return null;
}

function designarJefeR(id: number, nombre: string): Collections.Set<SimpleComponent> {
    return null;
}

function designarMonitor(id: number, nombre: string): Collections.Set<SimpleComponent> {
    return null;
}