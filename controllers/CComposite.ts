//import { Composite } from "../models/Composite";
import * as Collections from 'typescript-collections';
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { eEstado, Persona } from '../models/Persona';
import { Roles } from "../models/composite/AbstractComponent";

let coordinaciones: Array<CompositeComponent> = [];
let zonas: Array<CompositeComponent> = [];
let ramas: Array<CompositeComponent> = [];
let grupos: Array<CompositeComponent> = [];

let personas: Array<Persona> = [];

export class CComposite{
  //fields
}

//--------------------Insertar--------------------//
function insertarCoordinador(id: number, nombreCoordinacion: string): void {
    let nuevaCoordinacion = new CompositeComponent(id, nombreCoordinacion, Roles.Coordinacion);
    coordinaciones.push(nuevaCoordinacion);
}

function insertarZona(id: number, nombreZona: string): void {
    let nuevaZona = new CompositeComponent(id, nombreZona, Roles.Zona);
    zonas.push(nuevaZona);
}

function insertarRama(id: number, nombreRama: string): void {
    let nuevaRama = new CompositeComponent(id, nombreRama, Roles.Rama);
    ramas.push(nuevaRama);
}

function insertarGrupo(id: number, nombreGrupo: string): void {
    let nuevoGrupo = new CompositeComponent(id, nombreGrupo, Roles.Grupo);
    grupos.push(nuevoGrupo);
}

//--------------------Listar--------------------//
// Listar Zonas, Ramas, Grupos
function listarZonas(coordinacion: string): Array<CompositeComponent> {
    let buscarZona = zonas.filter(x => x.getName() == coordinacion);
    return buscarZona;
}

function listarRamas(zona: string): Array<CompositeComponent> {
    let buscarRamas = ramas.filter(x => x.getName() == zona);
    return buscarRamas;
}

function listarGrupos(rama: string): Array<CompositeComponent> {
    let buscarGrupo = grupos.filter(x => x.getName() == rama);
    return buscarGrupo;
}

//--------------------Nombrar--------------------//
// Cambiar tipo a un miembro, monitor, jefe e incluso asesor
function nombrarAsesor(id: number, nombre: string, coordinacion: string): void {
    
    let nuevoAsesor = personas.filter(x => x.identificacion == id)[0];
    let buscarCoordinacion = zonas.filter(x => x.getName() == coordinacion)[0];
    let asesor = new SimpleComponent(Roles.Jefe, nuevoAsesor);

    buscarCoordinacion.addComponent(asesor);
}

function nombrarJefeZ(id: number, nombre: string, zona: string): void {
    
    let nuevoJefe = personas.filter(x => x.identificacion == id)[0];
    let buscarZona = zonas.filter(x => x.getName() == zona)[0];
    let jefeZ = new SimpleComponent(Roles.Jefe, nuevoJefe);

    buscarZona.addComponent(jefeZ);
}

function nombrarJefeR(id: number, nombre: string, rama: string): void {
    
    let nuevoJefe = personas.filter(x => x.identificacion == id)[0];
    let buscarRama = ramas.filter(x => x.getName() == rama)[0];
    let jefeR = new SimpleComponent(Roles.Jefe, nuevoJefe);

    buscarRama.addComponent(jefeR);
}

function nombrarMonitor(id: number, nombre: string, grupo: string): void {
    let nuevoMonitor = personas.filter(x => x.identificacion == id)[0];
    let buscarGrupo = grupos.filter(x => x.getName() == grupo)[0];
    let monitor = new SimpleComponent(Roles.Monitor, nuevoMonitor);

    buscarGrupo.addComponent(monitor);
}