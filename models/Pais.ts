import { Provincia } from "./Provincia";

export class Pais { 
  //field 
  private _id: number;
  private _nombre: string;
  static paises = Array<Pais>();
  static provincias = new Map();

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

  static addPais(pais: Pais) {
    Pais.paises.push(pais);
  };

  static getPais(id: number) : Pais{
    return Pais.paises.filter(x => x.id == id)[0];
  };

  static addProvincia(key: number, value: Provincia) {
    Pais.provincias.set(key, value);
  }

  static getProvincia(key: number) : Provincia{
    return Pais.provincias.get(key);
  }
}  