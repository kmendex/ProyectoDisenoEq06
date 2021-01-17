import { parse } from "ts-node";
import { Canton } from "../models/Canton";
import { Direccion } from "../models/Direccion";
import { Distrito } from "../models/Distrito";
import { Organizacion } from "../models/Organizacion";
import { Pais } from "../models/Pais";
import { Provincia } from "../models/Provincia";

const db = require("../dao/DAOSourcePostgres");

export class COrganizacion{

  private static _organizacion : Organizacion;

  static async bringData(organizationCode : string){    
    try{
      let result = await db.getOrganization(organizationCode);      
      if (result != null){
          // Esto debería cambiarse de alǵun modo...
          const distritos = new Array<Distrito>();
          const cantones = new Array<Canton>();
          const provincias = new Array<Provincia>();
          const paises = new Array<Pais>();

          distritos.push(new Distrito(2, result.district));
          cantones.push(new Canton(1, result.canton));
          provincias.push(new Provincia(3, result.province));
          paises.push(new Pais(1, result.country));                   
                          
          let direccionUnica = new Direccion(paises[0], provincias[0], cantones[0], distritos[0], result.address);

          this.crearOrganizacion(result.name, result.juridicalCode, result.description, result.logoURL, result.webSite, direccionUnica, result.telephone, result.email, "", "");
      }
  }
      catch(error){
          console.log(error);        
      }
  }

  static crearOrganizacion (nombreCompany: string, cedulaJuridica: string, descripcion: string, logoURL: string, direccionWeb: string, 
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
      "logoFace" : this._organizacion.telefono, "logoTwitter" : this._organizacion.correo };
  }
}