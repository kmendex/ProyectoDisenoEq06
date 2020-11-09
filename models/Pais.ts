import { Provincia } from "../models/Provincia";

export class Pais { 
  //field 
  private _id: number;
  private _nombre: string;
  private _provincias: Array<Provincia>;
  
  //constructor 
  constructor(id: number, nombre: string, provincias: Array<Provincia>) {
    this._id = id;
    this._nombre = nombre;
    this._provincias = provincias;
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

  get provincias (): Array<Provincia> {
    return this._provincias;
  }

  set provincias (provincias: Array<Provincia>) {
    this._provincias = provincias;
  }
}  