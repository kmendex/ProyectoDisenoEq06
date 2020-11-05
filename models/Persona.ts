import { Direccion } from "../models/Direccion";
import { Provincia, Canton, Districto } from "../models/Direccion";

export enum eEstado {
  activo = "ACTIVO",
  inactivo = "INACTIVO",
  de_baja = "DE_BAJA"
}

export class Persona { 
  //field 
  identificacion :number;
  nombreCompleto: string;
  celular: number;
  correo: string;
  direccion: Direccion;
  estado: eEstado;
  
  //constructor 
  constructor(identificacion: number, nombreCompleto: string, celular: number, correo: string, direccion: Direccion, estado: eEstado) {
    this.identificacion = identificacion;
    this.nombreCompleto = nombreCompleto;
    this.celular = celular;
    this.correo = correo;
    this.direccion = direccion;
    this.estado = estado;
  }

  toString() {
    console.log(this.nombreCompleto + " con identificacion " + this.identificacion + ", vive en la provincia de " + this.direccion.provincia);
  }
}

let provinciaV:Provincia = {id: 1, nombre: "Heredia"};
let cantonV:Canton = {id: 1, nombre: "San Isidro"};
let districtoV:Districto = {id: 1, nombre: "Calle Chaves"};
let direccion = new Direccion(provinciaV, cantonV, districtoV, "Que bonito lugar");

let persona = new Persona(1111, "Tony", 12345678, "tony@gmail.com", direccion, eEstado.activo);

//console.log(persona.nombreCompleto);