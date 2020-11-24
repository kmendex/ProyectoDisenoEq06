import { Direccion } from "../models/Direccion";

export class Organizacion { 
  //field 
  private _nombreCompany: string;
  private _cedulaJuridica: number;
  private _descripcion: string;
  private _logoURL: string;
  private _direccionWeb: string;
  private _direccion: Direccion;
  private _telefono: number;
  private _correo: string;
  private _logoTwitter: string;
  private _logoFace: string;
  //static coordinaciones: Array<CompositeComponent>;
  
  //constructor 
  constructor(nombreCompany: string, cedulaJuridica: number, descripcion: string, logoURL: string, direccionWeb: string, 
              direccion: Direccion, telefono: number, correo: string, logoTwitter: string, logoFace: string) {
    this._nombreCompany = nombreCompany;
    this._cedulaJuridica = cedulaJuridica;
    this._descripcion = descripcion;
    this._logoURL = logoURL;
    this._direccionWeb = direccionWeb;
    this._direccion = direccion;
    this._telefono = telefono;
    this._correo = correo;
    this._logoTwitter = logoTwitter;
    this._logoFace = logoFace;
  }
  
  //functions
  get nombreCompany(): string {
    return this._nombreCompany;
  }

  set nombreCompany(nombre: string) {
    this._nombreCompany = nombre;
  }

  get cedulaJuridica(): number {
    return this._cedulaJuridica;
  }

  set cedulaJuridica (cedula: number) {
    this._cedulaJuridica = cedula;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion (descripcion: string) {
    this._descripcion = descripcion;
  }

  get logoURL(): string {
    return this._logoURL;
  }

  set logoURL (logoURL: string) {
    this._logoURL = logoURL;
  }

  get direccionWeb(): string {
    return this._direccionWeb;
  }

  set direccionWeb (web: string) {
    this._direccionWeb = web;
  }

  get direccion(): Direccion {
    return this._direccion;
  }

  set direccion (direccion: Direccion) {
    this._direccion = direccion;
  }

  get telefono(): number {
    return this._telefono;
  }

  set telefono (telefono: number) {
    this._telefono = telefono;
  }

  get correo(): string {
    return this._correo;
  }

  set correo (correo: string) {
    this._correo = correo;
  }

  get logoTwitter(): string {
    return this._logoTwitter;
  }

  set logoTwitter (logoTwitter: string) {
    this._logoTwitter = logoTwitter;
  }

  get logoFace(): string {
    return this._logoFace;
  }

  set logoFace (logoFace: string) {
    this._logoFace = logoFace;
  }

  /* get coordinaciones(): Array<CompositeComponent>{
    return this._coordinaciones;
  }

  set coordinaciones (coordinaciones: Array<CompositeComponent>) {
    this._coordinaciones = coordinaciones;
  } */
}