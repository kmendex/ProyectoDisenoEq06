import { Direccion } from "../models/Direccion";

export class Organizacion { 
    //field 
    nombre: string;
    cedulaJuridica: number;
    dirrecionWeb: string;
    direccion: Direccion;
    telefono: number;
    coordinacion: string;
    
    //constructor 
    constructor(nombre: string, cedulaJuridica: number, dirrecionWeb: string, direccion: Direccion, telefono: number, coordinacion: string) {
      this.nombre = nombre;
      this.cedulaJuridica = cedulaJuridica;
      this.direccion = direccion;
      this.telefono = telefono;
      this.coordinacion = coordinacion;
    }  
  }