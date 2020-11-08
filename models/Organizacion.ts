import { Direccion } from "../models/Direccion";
import { CompositeComponent } from "../models/composite/CompositeComponent";

export class Organizacion { 
  //field 
  static nombreCompany: string;
  static cedulaJuridica: number;
  static direccionWeb: string;
  static direccion: Direccion;
  static telefono: number;
  static coordinaciones: Array<CompositeComponent>;
  
  //constructor 
  constructor(nombreCompany: string, cedulaJuridica: number, direccionWeb: string, direccion: Direccion, telefono: number, coordinaciones: Array<CompositeComponent>) {
    this.nombreCompany = nombreCompany;
    this.cedulaJuridica = cedulaJuridica;
    this.direccionWeb = direccionWeb;
    this.direccion = direccion;
    this.telefono = telefono;
    this.coordinaciones = coordinaciones;
  }
  
  get nombreCompany (): string{
    return this.nombreCompany;
  }

  set nombreCompany (nombre: string) {
    this.nombreCompany = nombre;
  }

  get cedulaJuridica (): number{
    return this.cedulaJuridica;
  }

  set cedulaJuridica (cedula: number) {
    this.cedulaJuridica = cedula;
  }

  get direccionWeb (): string{
    return this.direccionWeb;
  }

  set direccionWeb (web: string) {
    this.direccionWeb = web;
  }

  get direccion (): Direccion{
    return this.direccion;
  }

  set direccion (direccion: Direccion) {
    this.direccion = direccion;
  }

  get telefono (): number{
    return this.telefono;
  }

  set telefono (telefono: number) {
    this.telefono = telefono;
  }

  get coordinaciones (): Array<CompositeComponent>{
    return this.coordinaciones;
  }

  set coordinaciones (coordinaciones: Array<CompositeComponent>) {
    this.coordinaciones = coordinaciones;
  }
}