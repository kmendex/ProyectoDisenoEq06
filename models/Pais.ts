import { Provincia } from "../models/Provincia";

export class Pais { 
  //field 
  private _id: number;
  private _nombre: string;
  static provincias: Array<Provincia>;
  
  //constructor 
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
    Pais.addProvincia(id, nombre);
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

  static addProvincia(id: number, nombre: string) {
    this.provincias.push(new Provincia(id, nombre));
  }

  static getProvincia (id: number): Provincia {
    return this.provincias.filter(x => x.id == id)[0];
  }
}  