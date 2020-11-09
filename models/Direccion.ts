import { Pais } from "../models/Pais";
import { Provincia } from "../models/Provincia";
import { Canton } from "../models/Canton";
import { Distrito } from "../models/Distrito";

export class Direccion { 
  //field
  private _pais: Pais; 
  private _provincia: Provincia;
  private _canton: Canton;
  private _distrito: Distrito;
  private _info: string; 
  
  //constructor 
  constructor(pais: Pais, provincia: Provincia, canton: Canton, distrito: Distrito, info: string) {
    this._pais = pais;
    this._provincia = provincia;
    this._canton = canton;
    this._distrito = distrito;
    this._info = info;
  }
  
  //functions
  get pais() : Pais{
    return this._pais;
  }

  set pais(pais: Pais){
    this._pais = pais;
  }

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