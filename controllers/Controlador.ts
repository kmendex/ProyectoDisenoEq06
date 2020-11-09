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

const db = require("../dao/DAOSourcePostgres.js");

export class Controlador{
    static async bringData(){
        try{
            let result = await db.getOrganization('1');
            let r = result.readOrganization;
            console.log(r);
            const distritos = new Array<Distrito>();
            const cantones = new Array<Canton>();
            const provincias = new Array<Provincia>();
            const paises = new Array<Pais>();

            distritos.push(new Distrito(2, "Oriental"));
            cantones.push(new Canton(1, "Central", distritos));
            provincias.push(new Provincia(3, "Cartago", cantones));
            paises.push(new Pais(1, "Costa Rica", provincias));

            const direccionUnica = new Direccion(paises[0], provincias[0], cantones[0], distritos[0], "Los Ángeles");

            Controlador.setCompany(r.name, r.juridicalCode, r.description, r.logoURL, "", direccionUnica, 111111, "", "", "");  
        }
            catch(error){
            console.log(error);
        }
    }

    //--------------------Definir--------------------//
    static definirCoordinador(id: number, nombreCoordinacion: string) {
        return CComposite.insertarCoordinador(id, nombreCoordinacion);
    }

    static definirZona(id: number, nombreZona: string) {
        return CComposite.insertarZona(id, nombreZona);
    }

    static definirRama(id: number, nombreRama: string) {
        return CComposite.insertarRama(id, nombreRama);
    }

    static definirGrupo(id: number, nombreGrupo: string) {
        return CComposite.insertarGrupo(id, nombreGrupo);
    }

    //--------------------Consultar--------------------//
    static consultarZonas(coordinacion: string): Array<CompositeComponent> {
        return CComposite.listarZonas(coordinacion);
    }

    static consultarRamas(zona: string): Array<CompositeComponent> {
        return CComposite.listarRamas(zona);
    }

    static consultarGrupos(grupo: string): Array<CompositeComponent> {
        return CComposite.listarGrupos(grupo);
    }

    //--------------------Designar--------------------//
    static designarAsesor(id: number, nombre: string) {
        CComposite.nombrarAsesor(id, nombre);
    }

    static designarJefeZ(id: number, nombre: string) {
        CComposite.nombrarJefeZ(id, nombre);
    }

    static designarJefeR(id: number, nombre: string) {
        CComposite.nombrarJefeR(id, nombre);
    }

    static designarMonitor(id: number, nombre: string) {
        CComposite.nombrarMonitor(id, nombre);
    }

    //--------------------Persona--------------------//
    static setPersonas (id: number, nombre: string, celular: number, correo: string, direccion: Direccion, estado: eEstado): void{
        CPersona.crearPersonas(id, nombre, celular, correo, direccion, estado);
    }
      
    static getPersonas (id: number): Persona{
        return CPersona.tomarPersonas(id);
    }
    
    static updatePerson(id: number, nombre?: string, celular?: number, correo?: string, direccion?: Direccion, estado?: eEstado): void {
        CPersona.actualizarDatos(id, nombre, celular, correo, direccion, estado)
    }

    //--------------------Organizacion--------------------//
    static setCompany (nombreCompany: string, cedulaJuridica: number, descripcion: string, logoURL: string, direccionWeb: string, 
        direccion: Direccion, telefono: number, correo: string, logoTwitter: string, logoFace: string): Organizacion{
        return COrganizacion.crearOrganizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace);
    }

    static updateCompany(nombre?: string, cedulaJuridica?: number, descripcion?: string, logoURL?: string, direccionWeb?: string, 
    direccion?: Direccion, telefono?: number, correo?: string, logoTwitter?: string, logoFace?: string): void {
        COrganizacion.actualizarDatos(nombre, cedulaJuridica, descripcion, logoURL, direccionWeb, 
            direccion, telefono, correo, logoTwitter, logoFace);
    }
}