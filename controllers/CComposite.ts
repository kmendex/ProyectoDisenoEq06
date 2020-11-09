import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { COrganizacion } from '../controllers/COrganizacion';
import { CPersona } from '../controllers/CPersona';
import { Roles } from "../models/composite/AbstractComponent";

export class CComposite{
    static coordinaciones: Array<CompositeComponent> = [];
    static zonas: Array<CompositeComponent> = [];
    static ramas: Array<CompositeComponent> = [];
    static grupos: Array<CompositeComponent> = [];

    //--------------------Insertar--------------------//
    static insertarCoordinador(id: number, nombreCoordinacion: string): void {
        let nueveCoordinacion = new CompositeComponent(id, nombreCoordinacion, Roles.Coordinacion);
        this.coordinaciones.push(nueveCoordinacion);
    }

    static insertarZona(id: number, nombreZona: string): void {
        let nuevaZona = new CompositeComponent(id, nombreZona, Roles.Zona);
        this.zonas.push(nuevaZona);
    }

    static insertarRama(id: number, nombreRama: string): void {
        let nuevaRama = new CompositeComponent(id, nombreRama, Roles.Rama);
        this.ramas.push(nuevaRama);
    }

    static insertarGrupo(id: number, nombreGrupo: string): void {
        let nuevoGrupo = new CompositeComponent(id, nombreGrupo, Roles.Grupo);
        this.grupos.push(nuevoGrupo);
    }

    //--------------------Listar--------------------//
    // Listar Zonas, Ramas, Grupos
    static listarZonas(coordinacion: string): Array<CompositeComponent> {
        let buscarZona = this.zonas.filter(x => x.getName() == coordinacion);
        return buscarZona;
    }

    static listarRamas(zona: string): Array<CompositeComponent> {
        let buscarRamas = this.ramas.filter(x => x.getName() == zona);
        return buscarRamas;
    }

    static listarGrupos(rama: string): Array<CompositeComponent> {
        let buscarGrupo = this.grupos.filter(x => x.getName() == rama);
        return buscarGrupo;
    }

    //--------------------Nombrar--------------------//
    // Cambiar tipo a un miembro, monitor, jefe e incluso asesor
    static nombrarAsesor(id: number, nombre: string, coordinacion: string): void {
        
        let nuevoAsesor = CPersona.getPersonas(id);
        let buscarCoordinacion = this.zonas.filter(x => x.getName() == coordinacion)[0];
        let asesor = new SimpleComponent(Roles.Asesor, nuevoAsesor);

        buscarCoordinacion.addComponent(asesor);
    }

    static nombrarJefeZ(id: number, nombre: string, zona: string): void {
        
        let nuevoJefe = CPersona.getPersonas(id);
        let buscarZona = this.zonas.filter(x => x.getName() == zona)[0];
        let jefeZ = new SimpleComponent(Roles.Jefe, nuevoJefe);

        buscarZona.addComponent(jefeZ);
    }

    static nombrarJefeR(id: number, nombre: string, rama: string): void {
        
        let nuevoJefe = CPersona.getPersonas(id);
        let buscarRama = this.ramas.filter(x => x.getName() == rama)[0];
        let jefeR = new SimpleComponent(Roles.Jefe, nuevoJefe);

        buscarRama.addComponent(jefeR);
    }

    static nombrarMonitor(id: number, nombre: string, grupo: string): void {
        let nuevoMonitor = CPersona.getPersonas(id);
        let buscarGrupo = this.grupos.filter(x => x.getName() == grupo)[0];
        let monitor = new SimpleComponent(Roles.Monitor, nuevoMonitor);

        buscarGrupo.addComponent(monitor);
    }
}