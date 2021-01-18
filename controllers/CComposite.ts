import { Branch } from "../models/brigde/Branch";
import { Group } from "../models/brigde/Group";
import { Zone } from "../models/brigde/Zone";
import { Canton } from "../models/Canton";
import { AbstractComponent, Roles } from "../models/composite/AbstractComponent";
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { Direccion } from "../models/Direccion";
import { Distrito } from "../models/Distrito";
import { Pais } from "../models/Pais";
import { eEstado, Persona } from "../models/Persona";
import { Provincia } from "../models/Provincia";

const db = require("../dao/DAOSourcePostgres");
export class CComposite{

    /**
     * cargarComposite   
     */
    public cargarComposite(): AbstractComponent | undefined {
        try {
            let r = db.getCoordination('1');
            let zones = db.getZone(r.code);
            const coord = new CompositeComponent(r.code, r.name, Roles.Coordinacion);
            zones.forEach((zone: { code: string; name: string; }) => {
                var newZone = new Zone(new CompositeComponent(zone.code, zone.name, Roles.Zona));                
                var branches = db.getBranch(zone.code);
                branches.forEach((branch: { code: string; name:string; }) => {
                    var newBranch = new Branch(new CompositeComponent(branch.code, branch.name, Roles.Rama));
                    var groups = db.getGroup(zone.code, branch.code);
                    groups.forEach((group: { code: string; name: string; }) => {
                        var newGroup = new Group(new CompositeComponent(group.code, group.name, Roles.Grupo));
                        var members = db.getMembers(group.code);
                        members.forEach((member: { identificationCode: string; role: string;}) => {
                            var person = db.getPerson(member.identificationCode);
                            const pais = new Pais(1, person.country);
                            const provincia = new Provincia(1, person.province);
                            const canton = new Canton(1, person.canton);
                            const distrito = new Distrito(1, person.district);
                            const direccion = new Direccion(pais, provincia, canton, distrito, person.address);
                            var memberAux = new Persona(parseInt(person.identificationCode,10), person.fullName, 88888888, '', direccion, person.state as eEstado );
                            newGroup.addComponent(new SimpleComponent(memberAux, member.role as Roles));
                        });
                        newBranch.addComponent(newGroup.getComponents());                      
                    });
                newZone.addComponent(newBranch.getComponents());
                });
               coord.addComponent(newZone.getComponents()); 
            });
            return coord;            
        } catch (error) {
            console.log(error);
        }        
    }
    /*private static coordinaciones: Array<CompositeComponent> = [];
    private static zonas: Array<CompositeComponent> = [];
    private static ramas: Array<CompositeComponent> = [];
    private static grupos: Array<CompositeComponent> = [];

    //--------------------Insertar--------------------//
    static insertarCoordinacion(id: number, nombreCoordinacion: string): void {
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
        let buscarZona = this.zonas.filter((x: { getName: () => string; }) => x.getName() == coordinacion);
        return buscarZona;
    }

    static listarRamas(zona: string): Array<CompositeComponent> {
        let buscarRamas = this.ramas.filter((x: { getName: () => string; }) => x.getName() == zona);
        return buscarRamas;
    }

    static listarGrupos(rama: string): Array<CompositeComponent> {
        let buscarGrupo = this.grupos.filter((x: { getName: () => string; }) => x.getName() == rama);
        return buscarGrupo;
    }

    //--------------------Nombrar--------------------//
    // Cambiar tipo a un miembro, monitor, jefe e incluso asesor
    static nombrarAsesor(id: number, coordinacion: string): void {
        
        //let nuevoAsesor = CPersona.tomarPersonas(id);
        let nuevoAsesor = CPersona.obtenerPersona(id);
        let buscarCoordinacion = this.zonas.filter((x: { getName: () => string; }) => x.getName() == coordinacion)[0];
        let asesor = new SimpleComponent(Roles.Asesor, nuevoAsesor);

        buscarCoordinacion.addComponent(asesor);
    }

    static nombrarJefeZ(id: number, zona: string): void {
        
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona.obtenerPersona(id);
        let buscarZona = this.zonas.filter((x: { getName: () => string; }) => x.getName() == zona)[0];
        let jefeZ = new SimpleComponent(Roles.Jefe, nuevoJefe);

        buscarZona.addComponent(jefeZ);
    }

    static nombrarJefeR(id: number, rama: string): void {
        
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona.obtenerPersona(id);
        let buscarRama = this.ramas.filter((x: { getName: () => string; }) => x.getName() == rama)[0];
        let jefeR = new SimpleComponent(Roles.Jefe, nuevoJefe);

        buscarRama.addComponent(jefeR);
    }

    static nombrarMonitor(id: number, grupo: string): void {
        //let nuevoMonitor = CPersona.tomarPersonas(id);
        let nuevoMonitor = CPersona.obtenerPersona(id);
        let buscarGrupo = this.grupos.filter((x: { getName: () => string; }) => x.getName() == grupo)[0];
        let monitor = new SimpleComponent(Roles.Monitor, nuevoMonitor);

        buscarGrupo.addComponent(monitor);
    }*/
}