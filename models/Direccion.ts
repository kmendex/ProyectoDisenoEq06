export class Direccion { 
  //field 
  provincia:string;
  canton:string;
  districto:string;
  info:string; 
  
  //constructor 
  constructor(provincia:string, canton:string, districto:string, info:string) {
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