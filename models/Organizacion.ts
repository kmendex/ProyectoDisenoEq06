import { Direccion } from "../models/Direccion";

export class Organizacion { 
  //field 
  static nombreCompany: string;
  static cedulaJuridica: number;
  static descripcion: string;
  static logoURL: string;
  static direccionWeb: string;
  static direccion: Direccion;
  static telefono: number;
  static correo: string;
  static logoTwitter: string;
  static logoFace: string;
  //static coordinaciones: Array<CompositeComponent>;
  
  //constructor 
  constructor(nombreCompany: string, cedulaJuridica: number, descripcion: string, logoURL: string, direccionWeb: string, 
              direccion: Direccion, telefono: number, correo: string, logoTwitter: string, logoFace: string) {
    this.nombreCompany = nombreCompany;
    this.cedulaJuridica = cedulaJuridica;
    this.descripcion = descripcion;
    this.logoURL = logoURL;
    this.direccionWeb = direccionWeb;
    this.direccion = direccion;
    this.telefono = telefono;
    this.correo = correo;
    this.logoTwitter = logoTwitter;
    this.logoFace = logoFace;
  }
  
  //functions
  get nombreCompany (): string {
    return this.nombreCompany;
  }

  set nombreCompany (nombre: string) {
    this.nombreCompany = nombre;
  }

  get cedulaJuridica (): number {
    return this.cedulaJuridica;
  }

  set cedulaJuridica (cedula: number) {
    this.cedulaJuridica = cedula;
  }

  get descripcion (): string {
    return this.descripcion;
  }

  set descripcion (descripcion: string) {
    this.descripcion = descripcion;
  }

  get logoURL (): string {
    return this.logoURL;
  }

  set logoURL (logoURL: string) {
    this.logoURL = logoURL;
  }

  get direccionWeb (): string {
    return this.direccionWeb;
  }

  set direccionWeb (web: string) {
    this.direccionWeb = web;
  }

  get direccion (): Direccion {
    return this.direccion;
  }

  set direccion (direccion: Direccion) {
    this.direccion = direccion;
  }

  get telefono (): number {
    return this.telefono;
  }

  set telefono (telefono: number) {
    this.telefono = telefono;
  }

  get correo (): string {
    return this.correo;
  }

  set correo (correo: string) {
    this.correo = correo;
  }

  get logoTwitter (): string {
    return this.logoTwitter;
  }

  set logoTwitter (logoTwitter: string) {
    this.logoTwitter = logoTwitter;
  }

  get logoFace (): string {
    return this.logoFace;
  }

  set logoFace (logoFace: string) {
    this.logoFace = logoFace;
  }

  /* get coordinaciones (): Array<CompositeComponent>{
    return this.coordinaciones;
  }

  set coordinaciones (coordinaciones: Array<CompositeComponent>) {
    this.coordinaciones = coordinaciones;
  } */
}