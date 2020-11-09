import { Canton } from "../models/Canton";

export class Provincia { 
  //field 
  private _id: number;
  private _nombre: string;
  private _cantones: Array<Canton>;
  
  //constructor 
  constructor(id: number, nombre: string, cantones: Array<Canton>) {
    this._id = id;
    this._nombre = nombre;
    this._cantones = cantones;
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

  get cantones (): Array<Canton> {
    return this._cantones;
  }

  set cantones (cantones: Array<Canton>) {
    this._cantones = cantones;
  } 
}  