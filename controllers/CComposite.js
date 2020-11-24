"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CComposite = void 0;
const CompositeComponent_1 = require("../models/composite/CompositeComponent");
const SimpleComponent_1 = require("../models/composite/SimpleComponent");
const CPersona_1 = require("../controllers/CPersona");
const AbstractComponent_1 = require("../models/composite/AbstractComponent");
class CComposite {
    //--------------------Insertar--------------------//
    static insertarCoordinador(id, nombreCoordinacion) {
        let nueveCoordinacion = new CompositeComponent_1.CompositeComponent(id, nombreCoordinacion, AbstractComponent_1.Roles.Coordinacion);
        this.coordinaciones.push(nueveCoordinacion);
    }
    static insertarZona(id, nombreZona) {
        let nuevaZona = new CompositeComponent_1.CompositeComponent(id, nombreZona, AbstractComponent_1.Roles.Zona);
        this.zonas.push(nuevaZona);
    }
    static insertarRama(id, nombreRama) {
        let nuevaRama = new CompositeComponent_1.CompositeComponent(id, nombreRama, AbstractComponent_1.Roles.Rama);
        this.ramas.push(nuevaRama);
    }
    static insertarGrupo(id, nombreGrupo) {
        let nuevoGrupo = new CompositeComponent_1.CompositeComponent(id, nombreGrupo, AbstractComponent_1.Roles.Grupo);
        this.grupos.push(nuevoGrupo);
    }
    //--------------------Listar--------------------//
    // Listar Zonas, Ramas, Grupos
    static listarZonas(coordinacion) {
        let buscarZona = this.zonas.filter(x => x.getName() == coordinacion);
        return buscarZona;
    }
    static listarRamas(zona) {
        let buscarRamas = this.ramas.filter(x => x.getName() == zona);
        return buscarRamas;
    }
    static listarGrupos(rama) {
        let buscarGrupo = this.grupos.filter(x => x.getName() == rama);
        return buscarGrupo;
    }
    //--------------------Nombrar--------------------//
    // Cambiar tipo a un miembro, monitor, jefe e incluso asesor
    static nombrarAsesor(id, coordinacion) {
        //let nuevoAsesor = CPersona.tomarPersonas(id);
        let nuevoAsesor = CPersona_1.CPersona.obtenerPersona(id);
        let buscarCoordinacion = this.zonas.filter(x => x.getName() == coordinacion)[0];
        let asesor = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Asesor, nuevoAsesor);
        buscarCoordinacion.addComponent(asesor);
    }
    static nombrarJefeZ(id, zona) {
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona_1.CPersona.obtenerPersona(id);
        let buscarZona = this.zonas.filter(x => x.getName() == zona)[0];
        let jefeZ = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Jefe, nuevoJefe);
        buscarZona.addComponent(jefeZ);
    }
    static nombrarJefeR(id, rama) {
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona_1.CPersona.obtenerPersona(id);
        let buscarRama = this.ramas.filter(x => x.getName() == rama)[0];
        let jefeR = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Jefe, nuevoJefe);
        buscarRama.addComponent(jefeR);
    }
    static nombrarMonitor(id, grupo) {
        //let nuevoMonitor = CPersona.tomarPersonas(id);
        let nuevoMonitor = CPersona_1.CPersona.obtenerPersona(id);
        let buscarGrupo = this.grupos.filter(x => x.getName() == grupo)[0];
        let monitor = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Monitor, nuevoMonitor);
        buscarGrupo.addComponent(monitor);
    }
}
exports.CComposite = CComposite;
CComposite.coordinaciones = [];
CComposite.zonas = [];
CComposite.ramas = [];
CComposite.grupos = [];
