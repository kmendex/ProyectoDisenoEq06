import { parse } from "ts-node";
import { Direccion } from "../models/Direccion";
import { Organizacion } from "../models/Organizacion";

export class COrganizacion{

  private static _organizacion : Organizacion;

  static crearOrganizacion (nombreCompany: string, cedulaJuridica: number, descripcion: string, logoURL: string, direccionWeb: string, 
    direccion: Direccion, telefono: number, correo: string, logoTwitter: string, logoFace: string): void{
    this._organizacion =  new Organizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace);
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
  
  static getDataToShow(): any {
    return { "nombreCompany" : this._organizacion.nombreCompany, "descripcion": this._organizacion.descripcion,
      "logoURL" : this._organizacion.logoURL, "provincia" : this._organizacion.direccion.provincia.nombre , "pais" : this._organizacion.direccion.pais.nombre,
      "direccion" : this._organizacion.direccion.info, "direccionWeb" : this._organizacion.direccionWeb,
      "logoFace" : this._organizacion.logoFace, "logoTwitter" : this._organizacion.logoTwitter };
  }
}