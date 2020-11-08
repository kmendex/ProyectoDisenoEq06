import { Persona, eEstado } from "../models/Persona";
import * as Collections from 'typescript-collections';

export interface ControlPersona extends Persona {
  personas: Array<Persona>;
}

export class CPersona {
  constructor(private personas: ControlPersona) {
    this.personas = this.personas;
  }

  private _crearPersonas (id: number, nombre: string): void{
    this.personas.push(new Persona(0,"Miembro0",74479112,"@gmail.com",direccionUnica, eEstado.activo));
  }
  
  private _getPersonas (): Collections.Set<Persona>{
    return null;
  }

  private _cambiarEstado(id: number, nombre: string, estado: eEstado): boolean {
    return true;
  }
  
  private _actualizarDatos(id: number, nombre: string): void {
    
  }
}