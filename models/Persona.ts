import { Direccion } from "../models/Direccion";

const eEstado = {
  ACTIVO: 'activo',
  INACTIVO: 'inactivo',
  DE_BAJA: 'de_baja'
}

// Con Javascript
class Persona { 
  //field 
  identificacion:number;
  nombreCompleto:string;
  celular:number;
  correo:string;
  direccion:Direccion;
  estado:typeof eEstado;
  
  
  //constructor 
  constructor(identificacion:number, nombreCompleto:string, celular:number, correo:string, direccion:Direccion, estado:typeof eEstado) {
    this.identificacion = identificacion;
    this.nombreCompleto = nombreCompleto;
    this.celular = celular;
    this.correo = correo;
    this.direccion = direccion;
    this.estado = estado;
  }  
}

//------------------------
// Otra opcion pero no recomendada

// import { model, Schema, Document } from "mongoose"; // Se usa pg para postgresql
// import { Direccion } from "../models/Direccion.js";


// export interface IPersona extends Document {
//   identificacion: String;
//   nombreCompleto: String;
//   celular: String;
//   correo: String;
//   direccion: Direccion;
//   estado: eEstado;
// }

// const personaSchema = new Schema({
//     identificacion: {
//     type: String,
//     unique: true,
//     require: true,
//     lowercase: true,
//   },
//   nombreCompleto: {
//     type: String,
//     require: true,
//     lowercase: true,
//   },
//   celular: {
//     type: String,
//     required: true,
//     lowercase: true,
//   },
//   correo: {
//     type: String,
//     required: true,
//     lowercase: true,
//   },
//   direccion: {
//     type: Direccion,
//     required: true,
//     lowercase: true,
//   },
//   estado: {
//     type: eEstado,
//     required: true,
//     lowercase: true,
//   },
// });

// export default model<IPersona>("persona", personaSchema);