import { Distrito } from "../models/Distrito";

export class Canton { 
  //field 
  private _id: number;
  private _nombre: string;
  private _distritos: Array<Distrito>;
  
  //constructor 
  constructor(id: number, nombre: string, distritos: Array<Distrito>) {
    this._id = id;
    this._nombre = nombre;
    this._distritos = distritos;
  }  
  
  //functions
  get id (): number {
    return this._id;
  }

  set id (id: number) {
    this._id = id;
  }

  get nombre (): string {
    return this._nombre;
  }

  set nombre (nombre: string) {
    this._nombre = nombre;
  }

  get distritos (): Array<Distrito> {
    return this._distritos;
  }

  set distritos (distritos: Array<Distrito>) {
    this._distritos = distritos;
  }
}