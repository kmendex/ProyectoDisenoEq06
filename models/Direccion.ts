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
  provincia: Provincia;
  canton: Canton;
  districto: Districto;
  info: string; 
  
  //constructor 
  constructor(provincia: Provincia, canton: Canton, districto: Districto, info: string) {
    this.provincia = provincia;
    this.canton = canton;
    this.districto = districto;
    this.info = info;
  }  
  
  //function 
}

let provinciaV:Provincia = {id: 1, nombre: "Heredia"};
let cantonV:Canton = {id: 1, nombre: "San Isidro"};
let districtoV:Districto = {id: 1, nombre: "Calle Chaves"};
let direccion = new Direccion(provinciaV, cantonV, districtoV, "Que bonito lugar");

//console.log(direccion.provincia);