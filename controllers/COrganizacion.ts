import { Direccion } from "../models/Direccion";
import { Organizacion } from "../models/Organizacion";

export class COrganizacion extends Organizacion{
  static crearOrganizacion (nombreCompany: string, cedulaJuridica: number, descripcion: string, logoURL: string, direccionWeb: string, 
    direccion: Direccion, telefono: number, correo: string, logoTwitter: string, logoFace: string): Organizacion{
    return new Organizacion(nombreCompany, cedulaJuridica, descripcion, logoURL, direccionWeb, direccion, telefono, correo, logoTwitter, logoFace);
  }

  static actualizarDatos(nombre?: string, cedulaJuridica?: number, descripcion?: string, logoURL?: string, direccionWeb?: string, 
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
  }
}