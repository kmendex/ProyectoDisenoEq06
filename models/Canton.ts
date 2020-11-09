import { Distrito } from "../models/Distrito";

export interface D {
  distritos: Array<Distrito>;
}

export class Canton implements D { 
  //field 
  private _id: number;
  private _nombre: string;
  
  //constructor 
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
    this.addDistrito(id, nombre);
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
    return this.distritos;
  }

  addDistrito(id: number, nombre: string) {
    this.distritos.push(new Distrito(id, nombre));
  }

  getDistrito (id: number): Distrito {
    return this.distritos.filter(x => x.id == id)[0];
  }
}