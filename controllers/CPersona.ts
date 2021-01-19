import { Persona, eEstado } from "../models/Persona";
import { Direccion } from "../models/Direccion";

export class CPersona{
  static personas = Array<Persona>();

  static crearPersona (id: string, nombre: string, celular: number, correo: string, direccion: Direccion, estado: eEstado): void{
    CPersona.personas.push(new Persona(id, nombre, celular, correo, direccion, estado));
  }
  
  static obtenerPersona (id: string): Persona{
    return CPersona.personas.filter(x => x.identificacion == id)[0];
  }

  static cambiarEstado (id: string, estado: eEstado): void {
    CPersona.obtenerPersona(id).estado = estado;
  }
  
  static actualizarDatos (id: string, nombre?: string, celular?: number, correo?: string, direccion?: Direccion, estado?: eEstado): void {
    let persona = CPersona.obtenerPersona(id);
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