import { CPersona } from "../controllers/CPersona";
import { CComposite } from "../controllers/CComposite";
import { COrganizacion } from "../controllers/COrganizacion";
import { CompositeComponent } from "../models/composite/CompositeComponent";
import { SimpleComponent } from "../models/composite/SimpleComponent";
import { Persona, eEstado } from "../models/Persona";
import { Organizacion } from "../models/Organizacion";
import { Direccion } from "../models/Direccion";
import { Canton } from "../models/Canton";
import { Distrito } from "../models/Distrito";
import { Pais } from "../models/Pais";
import { Provincia } from "../models/Provincia";

const db = require("../dao/DAOSourcePostgres");

export class Controlador{
    static async bringData(){
        try{
            let r = await db.getOrganization('1');
            let r1 = await db.getContactOrganization('1');
            if (r != null && r1 != null){

                // Esto debería cambiarse de alǵun modo...
                const distritos = new Array<Distrito>();
                const cantones = new Array<Canton>();
                const provincias = new Array<Provincia>();
                const paises = new Array<Pais>();

                distritos.push(new Distrito(2, r.district));
                cantones.push(new Canton(1, r.canton));
                provincias.push(new Provincia(3, r.province));
                paises.push(new Pais(1, r.country));
                
                let direccionWeb, telefono, correo, logoTwitter, logoFace;
                let cr1 : any;
                for (cr1 of r1){                                        
                    switch (cr1.type){                        
                        //type: 2:telefono | 4:correo | 5:web | 6:facebook | 7:twitter        
                        case 2:
                            telefono = cr1.value;
                            break;
                        case 4:
                            correo = cr1.value;
                            break;
                        case 5:
                            direccionWeb = cr1.value;
                            break;
                        case 6:
                            logoTwitter = cr1.value;
                            break;
                        case 7:
                            logoFace = cr1.value;
                    }
                }
                                
                let direccionUnica = new Direccion(paises[0], provincias[0], cantones[0], distritos[0], r.address);

                this.setCompany(r.name, r.juridicalCode, r.description, r.logoURL, direccionWeb, direccionUnica, telefono, correo, logoTwitter, logoFace);
            }
        }
            catch(error){
                console.log(error);        
            }
    }

    //--------------------Definir--------------------//
    static defineCoordination(id: string, nombreCoordinacion: string) {
        return CComposite.insertarCoordinador(id, nombreCoordinacion);
    }

    static defineZone(id: string, nombreZona: string) {
        return CComposite.insertarZona(id, nombreZona);
    }

    static defineBranch(id: string, nombreRama: string) {
        return CComposite.insertarRama(id, nombreRama);
    }

    static defineGroup(id: string, nombreGrupo: string) {
        return CComposite.insertarGrupo(id, nombreGrupo);
    }

    //--------------------Consultar--------------------//
    static consultCoordination(coordinacion: string): Array<CompositeComponent> {
        return CComposite.listarZonas(coordinacion);
    }

    static consultBranch(zona: string): Array<CompositeComponent> {
        return CComposite.listarRamas(zona);
    }

    static consultGroup(grupo: string): Array<CompositeComponent> {
        return CComposite.listarGrupos(grupo);
    }

    //--------------------Designar--------------------//
    static assignAdvisor(id: number, nombre: string) {
        CComposite.nombrarAsesor(id, nombre);
    }

    static assignBossZ(id: number, nombre: string) {
        CComposite.nombrarJefeZ(id, nombre);
    }

    static assignBossB(id: number, nombre: string) {
        CComposite.nombrarJefeR(id, nombre);
    }

    static assignMonitor(id: number, nombre: string) {
        CComposite.nombrarMonitor(id, nombre);
    }

    //--------------------Persona--------------------//
    static setPersonas (id: number, nombre: string, celular: number, correo: string, direccion: Direccion, estado: eEstado): void{
        CPersona.crearPersona(id, nombre, celular, correo, direccion, estado);
    }
      
    static getPersonas (id: number): Persona{
        return CPersona.obtenerPersona(id);
    }
    
    static updatePerson(id: number, nombre?: string, celular?: number, correo?: string, direccion?: Direccion, estado?: eEstado): void {
        CPersona.actualizarDatos(id, nombre, celular, correo, direccion, estado)
    }

    //--------------------Organizacion--------------------//
    static setCompany (nombreCompany: string, cedulaJuridica: number, descripcion: string, logoURL: string, direccionWeb: string, 
        direccion: Direccion, telefono: number, correo: string, logoTwitter: string, logoFace: string): void{
        COrganizacion.crearOrganizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace);
    }

    /*static updateCompany(nombre?: string, cedulaJuridica?: number, descripcion?: string, logoURL?: string, direccionWeb?: string, 
    direccion?: Direccion, telefono?: number, correo?: string, logoTwitter?: string, logoFace?: string): void {
        COrganizacion.actualizarDatos(nombre, cedulaJuridica, descripcion, logoURL, direccionWeb, 
            direccion, telefono, correo, logoTwitter, logoFace);
    }*/

    static getCompanyData () : any {
        return COrganizacion.getDataToShow();
    }
}