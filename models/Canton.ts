import { Distrito } from "../models/Distrito";

export class Canton { 
  //field 
  private _id: number;
  private _nombre: string;
  static distritos: Array<Distrito>;
  
  //constructor 
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
    Canton.addDistrito(id, nombre);
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

  static addDistrito(id: number, nombre: string) {
    this.distritos.push(new Distrito(id, nombre));
  }

  static getDistrito (id: number): Distrito {
    return this.distritos.filter(x => x.id == id)[0];
  }
}