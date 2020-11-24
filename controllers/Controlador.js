"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controlador = void 0;
const CPersona_1 = require("../controllers/CPersona");
const CComposite_1 = require("../controllers/CComposite");
const COrganizacion_1 = require("../controllers/COrganizacion");
const Direccion_1 = require("../models/Direccion");
const Canton_1 = require("../models/Canton");
const Distrito_1 = require("../models/Distrito");
const Pais_1 = require("../models/Pais");
const Provincia_1 = require("../models/Provincia");
const db = require("../dao/DAOSourcePostgres");
class Controlador {
    static async bringData() {
        try {
            let r = await db.getOrganization('1');
            let r1 = await db.getContactOrganization('1');
            if (r != null && r1 != null) {
                // Esto debería cambiarse de alǵun modo...
                const distritos = new Array();
                const cantones = new Array();
                const provincias = new Array();
                const paises = new Array();
                distritos.push(new Distrito_1.Distrito(2, r.district));
                cantones.push(new Canton_1.Canton(1, r.canton));
                provincias.push(new Provincia_1.Provincia(3, r.province));
                paises.push(new Pais_1.Pais(1, r.country));
                let direccionWeb, telefono, correo, logoTwitter, logoFace;
                let cr1;
                for (cr1 of r1) {
                    switch (cr1.type) {
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
                let direccionUnica = new Direccion_1.Direccion(paises[0], provincias[0], cantones[0], distritos[0], r.address);
                this.setCompany(r.name, r.juridicalCode, r.description, r.logoURL, direccionWeb, direccionUnica, telefono, correo, logoTwitter, logoFace);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    //--------------------Definir--------------------//
    static defineCoordination(id, nombreCoordinacion) {
        return CComposite_1.CComposite.insertarCoordinador(id, nombreCoordinacion);
    }
    static defineZone(id, nombreZona) {
        return CComposite_1.CComposite.insertarZona(id, nombreZona);
    }
    static defineBranch(id, nombreRama) {
        return CComposite_1.CComposite.insertarRama(id, nombreRama);
    }
    static defineGroup(id, nombreGrupo) {
        return CComposite_1.CComposite.insertarGrupo(id, nombreGrupo);
    }
    //--------------------Consultar--------------------//
    static consultCoordination(coordinacion) {
        return CComposite_1.CComposite.listarZonas(coordinacion);
    }
    static consultBranch(zona) {
        return CComposite_1.CComposite.listarRamas(zona);
    }
    static consultGroup(grupo) {
        return CComposite_1.CComposite.listarGrupos(grupo);
    }
    //--------------------Designar--------------------//
    static assignAdvisor(id, nombre) {
        CComposite_1.CComposite.nombrarAsesor(id, nombre);
    }
    static assignBossZ(id, nombre) {
        CComposite_1.CComposite.nombrarJefeZ(id, nombre);
    }
    static assignBossB(id, nombre) {
        CComposite_1.CComposite.nombrarJefeR(id, nombre);
    }
    static assignMonitor(id, nombre) {
        CComposite_1.CComposite.nombrarMonitor(id, nombre);
    }
    //--------------------Persona--------------------//
    static setPersonas(id, nombre, celular, correo, direccion, estado) {
        CPersona_1.CPersona.crearPersona(id, nombre, celular, correo, direccion, estado);
    }
    static getPersonas(id) {
        return CPersona_1.CPersona.obtenerPersona(id);
    }
    static updatePerson(id, nombre, celular, correo, direccion, estado) {
        CPersona_1.CPersona.actualizarDatos(id, nombre, celular, correo, direccion, estado);
    }
    //--------------------Organizacion--------------------//
    static setCompany(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace) {
        COrganizacion_1.COrganizacion.crearOrganizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace);
    }
    /*static updateCompany(nombre?: string, cedulaJuridica?: number, descripcion?: string, logoURL?: string, direccionWeb?: string,
    direccion?: Direccion, telefono?: number, correo?: string, logoTwitter?: string, logoFace?: string): void {
        COrganizacion.actualizarDatos(nombre, cedulaJuridica, descripcion, logoURL, direccionWeb,
            direccion, telefono, correo, logoTwitter, logoFace);
    }*/
    static getCompanyData() {
        return COrganizacion_1.COrganizacion.getDataToShow();
    }
}
exports.Controlador = Controlador;
