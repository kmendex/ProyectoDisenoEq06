import { Provincia } from "../models/Provincia";
import { Canton } from "../models/Canton";
import { Districto } from "../models/Districto";

export class Direccion { 
  //field 
  provincia:Provincia;
  canton:Canton;
  districto:Districto;
  info:string; 
  
  //constructor 
  constructor(provincia:Provincia, canton:Canton, districto:Districto, info:string) {
    this.provincia = provincia;
    this.canton = canton;
    this.districto = districto;
    this.info = info;
  }  
  
  //function 
  disp():void { 
    console.log("Informacion de la direccion :   "+ this.info) 
  } 
} 