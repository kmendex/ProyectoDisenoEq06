import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { COrganizacion } from '../controllers/COrganizacion';
import { CPersona } from '../controllers/CPersona';
import { Roles } from "../models/composite/AbstractComponent";

export class CComposite{
    private static coordinaciones: Array<CompositeComponent> = [];
    private static zonas: Array<CompositeComponent> = [];
    private static ramas: Array<CompositeComponent> = [];
    private static grupos: Array<CompositeComponent> = [];

    //--------------------Insertar--------------------//
    static insertarCoordinador(id: string, nombreCoordinacion: string): void {
        let nueveCoordinacion = new CompositeComponent(id, nombreCoordinacion, Roles.Coordinacion);
        this.coordinaciones.push(nueveCoordinacion);
    }

    static insertarZona(id: string, nombreZona: string): void {
        let nuevaZona = new CompositeComponent(id, nombreZona, Roles.Zona);
        this.zonas.push(nuevaZona);
    }

    static insertarRama(id: string, nombreRama: string): void {
        let nuevaRama = new CompositeComponent(id, nombreRama, Roles.Rama);
        this.ramas.push(nuevaRama);
    }

    static insertarGrupo(id: string, nombreGrupo: string): void {
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
    static nombrarAsesor(id: number, coordinacion: string): void {
        
        //let nuevoAsesor = CPersona.tomarPersonas(id);
        let nuevoAsesor = CPersona.obtenerPersona(id);
        let buscarCoordinacion = this.zonas.filter(x => x.getName() == coordinacion)[0];
        let asesor = new SimpleComponent(nuevoAsesor, Roles.Asesor);

        buscarCoordinacion.addComponent(asesor);
    }

    static nombrarJefeZ(id: number, zona: string): void {
        
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona.obtenerPersona(id);
        let buscarZona = this.zonas.filter(x => x.getName() == zona)[0];
        let jefeZ = new SimpleComponent(nuevoJefe, Roles.Jefe);

        buscarZona.addComponent(jefeZ);
    }

    static nombrarJefeR(id: number, rama: string): void {
        
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona.obtenerPersona(id);
        let buscarRama = this.ramas.filter(x => x.getName() == rama)[0];
        let jefeR = new SimpleComponent(nuevoJefe, Roles.Jefe);

        buscarRama.addComponent(jefeR);
    }

    static nombrarMonitor(id: number, grupo: string): void {
        //let nuevoMonitor = CPersona.tomarPersonas(id);
        let nuevoMonitor = CPersona.obtenerPersona(id);
        let buscarGrupo = this.grupos.filter(x => x.getName() == grupo)[0];
        let monitor = new SimpleComponent(nuevoMonitor, Roles.Monitor);

        buscarGrupo.addComponent(monitor);
    }
}