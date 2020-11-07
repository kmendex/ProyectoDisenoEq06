import { Persona, eEstado } from "../models/Persona";
import * as Collections from 'typescript-collections';

module controller {
  export interface ControlPersona extends Persona {
    personas: Collections.Set<Persona>;
  }
  
  export class CPersona {

    constructor(private personas: ControlPersona) {
      this.personas = this.personas;
    }
    
    private _getPersonas ():  Collections.Set<Persona>{
      return null;
    }

    private _cambiarEstado(id: number, nombre: string, estado: eEstado): boolean {
      return true;
    }
    
    private _actualizarDatos(id: number, nombre: string) {
      return null;
    }
  }
}