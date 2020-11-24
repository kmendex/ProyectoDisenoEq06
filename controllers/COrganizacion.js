"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COrganizacion = void 0;
const Organizacion_1 = require("../models/Organizacion");
class COrganizacion {
    static crearOrganizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace) {
        this._organizacion = new Organizacion_1.Organizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace);
    }
    /*  static actualizarDatos(nombre?: string, cedulaJuridica?: number, descripcion?: string, logoURL?: string, direccionWeb?: string,
        direccion?: Direccion, telefono?: number, correo?: string, logoTwitter?: string, logoFace?: string): void {
        if(nombre !== undefined)
          COrganizacion.nombreCompany = nombre;
        if(cedulaJuridica !== undefined)
          COrganizacion.cedulaJuridica = cedulaJuridica;
        if(descripcion !== undefined)
          COrganizacion.descripcion = descripcion;
        if(logoURL !== undefined)
          COrganizacion.logoURL = logoURL;
        if(direccionWeb !== undefined)
          COrganizacion.direccionWeb = direccionWeb;
        if(direccion !== undefined)
          COrganizacion.direccion = direccion;
        if(telefono !== undefined)
          COrganizacion.telefono = telefono;
        if(correo !== undefined)
          COrganizacion.correo = correo;
        if(logoTwitter !== undefined)
          COrganizacion.logoTwitter = logoTwitter;
        if(logoFace !== undefined)
          COrganizacion.logoFace = logoFace;
      }*/
    static getDataToShow() {
        return { "nombreCompany": this._organizacion.nombreCompany, "descripcion": this._organizacion.descripcion,
            "logoURL": this._organizacion.logoURL, "provincia": this._organizacion.direccion.provincia.nombre, "pais": this._organizacion.direccion.pais.nombre,
            "direccion": this._organizacion.direccion.info, "direccionWeb": this._organizacion.direccionWeb,
            "logoFace": this._organizacion.logoFace, "logoTwitter": this._organizacion.logoTwitter };
    }
}
exports.COrganizacion = COrganizacion;
