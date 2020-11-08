import { Direccion } from "../models/Direccion";
import { Organizacion } from "../models/Organizacion";
import { CompositeComponent } from "../models/composite/CompositeComponent";

export class COrganizacion extends Organizacion{
  static crearOrganizacion (nombreCompany: string, cedulaJuridica: number, direccionWeb: string, direccion: Direccion, telefono: number, coordinacion: Array<CompositeComponent>): Organizacion{
    return new Organizacion(nombreCompany, cedulaJuridica, direccionWeb, direccion, telefono, coordinacion);
  }
  
  static actualizarDatos(nombre?: string, cedulaJuridica?: number, direccionWeb?: string, direccion?: Direccion, telefono?: number): void {
    if(nombre !== undefined)
      COrganizacion.nombreCompany = nombre;
    if(cedulaJuridica !== undefined)
      COrganizacion.cedulaJuridica = cedulaJuridica;
    if(direccionWeb !== undefined)
      COrganizacion.direccionWeb = direccionWeb;
    if(direccion !== undefined)
      COrganizacion.direccion = direccion;
    if(telefono !== undefined)
      COrganizacion.telefono = telefono;
  }
}