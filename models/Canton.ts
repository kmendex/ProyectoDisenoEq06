import { Distrito } from "./Distrito";

export class Canton { 
  //field 
  private _id: number;
  private _nombre: string;
  static distritos = new Map();
  
  //constructor 
  constructor(id: number, nombre: string) {
    this._id = id;
    this._nombre = nombre;
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
    
  static addDistrito(key: number, value: Distrito) {
    Canton.distritos.set(key, value);
  }

  static getDistrito(key: number) : Distrito{
    return Canton.distritos.get(key);
  }
}