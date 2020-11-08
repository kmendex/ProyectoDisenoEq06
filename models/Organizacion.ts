import { Direccion } from "../models/Direccion";

export class Organizacion { 
    //field 
    nombre: string;
    cedulaJuridica: number;
    direccionWeb: string;
    direccion: Direccion;
    telefono: number;
    coordinacion: string;
    
    //constructor 
    constructor(nombre: string, cedulaJuridica: number, direccionWeb: string, direccion: Direccion, telefono: number, coordinacion: string) {
      this.nombre = nombre;
      this.cedulaJuridica = cedulaJuridica;
      this.direccionWeb = direccionWeb;
      this.direccion = direccion;
      this.telefono = telefono;
      this.coordinacion = coordinacion;
    }  
}