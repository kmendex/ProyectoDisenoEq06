import { Canton } from "../models/Canton";

export class Provincia { 
  //field 
  private _id: number;
  private _nombre: string;
  static cantones: Array<Canton>;
  
  //constructor 
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
    Provincia.addCanton(id, nombre);
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

  static addCanton(id: number, nombre: string) {
    this.cantones.push(new Canton(id, nombre));
  }

  static getCanton (id: number): Canton {
    return this.cantones.filter(x => x.id == id)[0];
  }
}  