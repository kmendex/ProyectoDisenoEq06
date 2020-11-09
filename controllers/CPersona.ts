import { Persona, eEstado } from "../models/Persona";
import { Direccion } from "../models/Direccion";

export class CPersona{
  static personas: Array<Persona>;

  constructor(personas: Array<Persona>) {}

  static crearPersonas (id: number, nombre: string, celular: number, correo: string, direccion: Direccion, estado: eEstado): void{
    this.personas.push(new Persona(id, nombre, celular, correo, direccion, estado));
  }
  
  static getPersonas (id: number): Persona{
    let buscarPersona = this.personas.filter(x => x.identificacion == id)[0];
    return buscarPersona;
  }

  static cambiarEstado(id: number, estado: eEstado): void {
    let persona = this.getPersonas(id);
    persona.estado = estado;
  }
  
  static actualizarDatos(id: number, nombre?: string, celular?: number, correo?: string, direccion?: Direccion, estado?: eEstado): void {
    let persona = this.getPersonas(id);
    if(nombre !== undefined)
      persona.nombreCompleto = nombre;
    if(celular !== undefined)
      persona.celular = celular;
    if(correo !== undefined)
      persona.correo = correo;
    if(direccion !== undefined)
      persona.direccion = direccion;
    if(estado !== undefined)
      persona.estado = estado;
  }
}