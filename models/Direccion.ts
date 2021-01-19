import { Pais } from "../models/Pais";
import { Provincia } from "../models/Provincia";
import { Canton } from "../models/Canton";
import { Distrito } from "../models/Distrito";

export class Direccion { 
  //field
  private _pais: string 
  private _provincia: string;
  private _canton: string;
  private _distrito: string;
  private _info: string;
  
  //constructor 
  constructor(pais: string, provincia: string, canton: string, distrito: string, info: string) {
    this._pais = pais;
    this._provincia = provincia;
    this._canton = canton;
    this._distrito = distrito;
    this._info = info;
  }
  
  //functions
  get pais() : string{
    return this._pais;
  }

  set pais(pais: string){
    this._pais = pais;
  }

  get provincia() : string{
    return this._provincia;
  }

  set provincia(provincia: string){
    this._provincia = provincia;
  }

  get canton() : string{
    return this._canton;
  }

  set canton(canton: string){
    this._canton = canton;
  }

  get districto() : string{
    return this._distrito;
  }

  set districto(districto: string){
    this._distrito = districto;
  }

  get info() : string{
    return this._info;
  }

  set info(info: string){
    this._info = info;
  }
}