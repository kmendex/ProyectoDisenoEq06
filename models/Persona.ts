import { Direccion } from "../models/Direccion";
import { Provincia, Canton, Districto } from "../models/Direccion";

export enum eEstado {
  activo = "ACTIVO",
  inactivo = "INACTIVO",
  de_baja = "DE_BAJA"
}

export class Persona { 
  //field 
  private _identificacion:number;
  private _nombreCompleto: string;
  private _celular: number;
  private _correo: string;
  private _direccion: Direccion;
  private _estado: eEstado;
  
  //constructor 
  constructor(identificacion: number, nombreCompleto: string, celular?: number, correo?: string, direccion?: Direccion, estado?: eEstado) {
    this._identificacion = identificacion;
    this._nombreCompleto = nombreCompleto;
    this._celular = celular;
    this._correo = correo;
    this._direccion = direccion;
    this._estado = estado;
  }

  get identificacion (): number{
    return this._identificacion;
  }

  set identificacion (id: number) {
    this._identificacion = id;
  }

  get nombreCompleto (): string{
    return this._nombreCompleto;
  }

  set nombreCompleto (nombre: string) {
    this._nombreCompleto = nombre;
  }

  get celular (): number{
    return this._celular;
  }

  set celular (celular: number) {
    this._celular = celular;
  }

  get correo (): string{
    return this._correo;
  }

  set correo (correo: string) {
    this._correo = correo;
  }

  get direccion (): Direccion{
    return this._direccion;
  }

  set direccion (direccion: Direccion) {
    this._direccion = direccion;
  }

  get estado (): eEstado{
    return this._estado;
  }

  set estado (estado: eEstado) {
    this._estado = estado;
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

let persona1 = new Persona(1, "Juan"); 

//console.log(persona.nombreCompleto);