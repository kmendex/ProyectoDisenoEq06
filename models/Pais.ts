import { Provincia } from "../models/Provincia";

export interface P {
  provincias: Array<Provincia>;
}

export class Pais implements P { 
  //field 
  private _id: number;
  private _nombre: string;
  
  //constructor 
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
    this.addProvincia(id, nombre);
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
    return this.provincias;
  }

  addProvincia(id: number, nombre: string) {
    this.provincias.push(new Provincia(id, nombre));
  }

  getProvincia (id: number): Provincia {
    return this.provincias.filter(x => x.id == id)[0];
  }
}  