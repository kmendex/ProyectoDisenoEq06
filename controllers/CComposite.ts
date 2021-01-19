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
import { CPersona} from "../controllers/CPersona"

const db = require("../dao/DAOSourcePostgres");
export class CComposite{

    private static _composite : CompositeComponent;

    /**
     * cargarComposite   
     */
    static async cargarComposite(orgCode : string){        
        try {
            var r = await db.getCoordination(orgCode);
            var zones = await db.getZone(r.code);
            var zone;
            const coord = new CompositeComponent(r.code, r.name, Roles.Coordinacion);
            for await (zone of zones){            
                var newZone = new Zone(new CompositeComponent(zone.code, zone.name, Roles.Zona));                
                var branches = await  db.getBranch(zone.code);
                var branch;
                for await (branch of branches){                
                    var newBranch = new Branch(new CompositeComponent(branch.code, branch.name, Roles.Rama));
                    var groups = await db.getGroup(zone.code, branch.code);
                    var group;
                    for await (group of groups){                    
                        var newGroup = new Group(new CompositeComponent(group.code, group.name, Roles.Grupo));
                        var members = await db.getMembers(group.code);
                        var member;
                        for await (member of members){                        
                            var person = await db.getPerson(member.identificationCode);                            
                            const direccion = new Direccion(person.country, person.province, person.canton, person.district, person.address);
                            var memberAux = new Persona(person.identificationCode, person.fullName, person.telephone, person.email, direccion, person.state as eEstado );
                            newGroup.addComponent(new SimpleComponent(memberAux, member.role as Roles));
                        }
                        newBranch.addComponent(newGroup.getComponents());                          
                    }
                    // obtener comision
                    var branchCom = newBranch.getComission();
                    var bossesB = await db.getBoss(branch.code);
                    var bossB: { identificationCode: string; };
                    for await (bossB of bossesB){
                        branchCom.forEach(branchComI =>{
                            if(bossB.identificationCode == branchComI.getId()){                                
                                branchComI.setRole(Roles.Jefe);
                                newBranch.addComponent(branchComI);
                            }                                
                        });    
                    }                                            

                newZone.addComponent(newBranch.getComponents());
                }
                // obtener comision
                var zoneCom = newZone.getComission();
                var bossesZ = await db.getBoss(zone.code);
                var bossZ: { identificationCode: string; };
                for await (bossZ of bossesZ){
                    zoneCom.forEach(zoneComI =>{
                        if(bossZ.identificationCode == zoneComI.getId()){                                
                            zoneComI.setRole(Roles.Jefe);
                            newZone.addComponent(zoneComI);
                        }                                
                    });    
                }                                            

               coord.addComponent(newZone.getComponents()); 
            }
            // asesor   
            
            
            this._composite = coord;            
        } catch (error) {
            console.log(error);
        }        
    }

       /*

    //--------------------Insertar--------------------//
    static insertarCoordinacion(id: string, nombreCoordinacion: string): void {
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
    */

    //--------------------Listar--------------------//
    // Listar Zonas, Ramas, Grupos
    static listarZonas(coordinacion: string): Array<AbstractComponent> {
        console.log(coordinacion);
        return this._composite.getTypeRole(Roles.Zona);                
    }

    static listarRamas(zona: string): Array<AbstractComponent> {        
        var zonaEnc : CompositeComponent;
        zonaEnc = <CompositeComponent> this._composite.getComponent(zona, Roles.Zona);
        return zonaEnc.getTypeRole(Roles.Rama);                
    }

    static listarGrupos(rama: string): Array<AbstractComponent> {
        var ramaEnc : CompositeComponent;
        ramaEnc = <CompositeComponent> this._composite.getComponent(rama, Roles.Zona);
        return ramaEnc.getTypeRole(Roles.Grupo);                
    }
/*
    //--------------------Nombrar--------------------//
    // Cambiar tipo a un miembro, monitor, jefe e incluso asesor
    static nombrarAsesor(id: string, coordinacion: string): void {
        
        //let nuevoAsesor = CPersona.tomarPersonas(id);
        let nuevoAsesor = CPersona.obtenerPersona(id);
        let buscarCoordinacion = this.zonas.filter((x: { getName: () => string; }) => x.getName() == coordinacion)[0];
        let asesor = new SimpleComponent(nuevoAsesor, Roles.Asesor);

        buscarCoordinacion.addComponent(asesor);
    }

    static nombrarJefeZ(id: string, zona: string): void {
        
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona.obtenerPersona(id);
        let buscarZona = this.zonas.filter((x: { getName: () => string; }) => x.getName() == zona)[0];
        let jefeZ = new SimpleComponent(nuevoJefe, Roles.Jefe);

        buscarZona.addComponent(jefeZ);
    }

    static nombrarJefeR(id: string, rama: string): void {
        
        //let nuevoJefe = CPersona.tomarPersonas(id);
        let nuevoJefe = CPersona.obtenerPersona(id);
        let buscarRama = this.ramas.filter((x: { getName: () => string; }) => x.getName() == rama)[0];
        let jefeR = new SimpleComponent(nuevoJefe, Roles.Jefe);

        buscarRama.addComponent(jefeR);
    }

    static nombrarMonitor(id: string, grupo: string): void {
        //let nuevoMonitor = CPersona.tomarPersonas(id);
        let nuevoMonitor = CPersona.obtenerPersona(id);
        let buscarGrupo = this.grupos.filter((x: { getName: () => string; }) => x.getName() == grupo)[0];
        let monitor = new SimpleComponent(nuevoMonitor, Roles.Monitor);

        buscarGrupo.addComponent(monitor);
    }
    */
}