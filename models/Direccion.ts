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

export interface Districto {
  id: number;
  nombre: string;
}

export class Direccion { 
  //field 
  private _provincia: Provincia;
  private _canton: Canton;
  private _districto: Districto;
  private _info: string; 
  
  //constructor 
  constructor(provincia: Provincia, canton: Canton, districto: Districto, info: string) {
    this._provincia = provincia;
    this._canton = canton;
    this._districto = districto;
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

  get districto() : Districto{
    return this._districto;
  }

  set districto(districto: Districto){
    this._districto = districto;
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
let districtoV:Districto = {id: 1, nombre: "Calle Chaves"};
let direccion = new Direccion(provinciaV, cantonV, districtoV, "Que bonito lugar");

//console.log(direccion.provincia);