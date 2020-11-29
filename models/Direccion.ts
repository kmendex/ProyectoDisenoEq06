/* import { Provincia } from "../models/Provincia";
import { Canton } from "../models/Canton";
import { Districto } from "../models/Districto"; */

export interface Provincia {
  id: number;
  nombre: string;
}

export interface Canton {
  id: number;
  nombre: string;
}

export interface Distrito {
  id: number;
  nombre: string;
}

export class Direccion { 
  //field 
  private _provincia: Provincia;
  private _canton: Canton;
  private _distrito: Distrito;
  private _info: string; 
  
  //constructor 
  constructor(provincia: Provincia, canton: Canton, distrito: Distrito, info: string) {
    this._provincia = provincia;
    this._canton = canton;
    this._distrito = distrito;
    this._info = info;
  }
  
  //function
  get provincia() : Provincia{
    return this._provincia;
  }

  set provincia(provincia: Provincia){
    this._provincia = provincia;
  }

  get canton() : Canton{
    return this._canton;
  }

  set canton(canton: Canton){
    this._canton = canton;
  }

  get districto() : Distrito{
    return this._distrito;
  }

  set districto(districto: Distrito){
    this._distrito = districto;
  }

  get info() : string{
    return this._info;
  }

  set info(info: string){
    this._info = info;
  } 
}

let provinciaV:Provincia = {id: 1, nombre: "Heredia"};
let cantonV:Canton = {id: 1, nombre: "San Isidro"};
let distritoV:Distrito = {id: 1, nombre: "Calle Chaves"};
let direccion = new Direccion(provinciaV, cantonV, distritoV, "Que bonito lugar");

//console.log(direccion.provincia);