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
        COrganizacion.bringData('ORG-01');
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
    static setCompany (nombreCompany: string, cedulaJuridica: string, descripcion: string, logoURL: string, direccionWeb: string, 
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

    static getProvinces(ctrName : string){  
        try{
            return db.getProvinces(ctrName);
        }   
        catch(error){
            console.log(error);        
        }           
    }

    static async getCantons(prvName : string){
        try{
            return db.getCantons(prvName);
        }   
        catch(error){
            console.log(error);        
        }                   
    }

    static async getDistricts(ctnName : string){
        try{
            return db.getDistricts(ctnName);
        }   
        catch(error){
            console.log(error);        
        }                   
    }
    
}