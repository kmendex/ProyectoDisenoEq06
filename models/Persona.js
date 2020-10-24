// Con Javascript
const Persona = function(identificacion, nombreCompleto, celular, correo, direccion, estado) {
    this.identificacion = identificacion;
    this.nombreCompleto = nombreCompleto;
    this.celular = celular;
    this.correo = correo;
    this.direccion = direccion;
    this.estado = estado;
}
  
  Persona.prototype.validateUserInput = function() {
  if (this.identificacion == "") {
    this.errors.push("Please enter the identification.")
    }
  }
  
  module.exports = Persona

//------------------------
// Con Typescript

import { model, Schema, Document } from "mongoose"; // Se usa pg para postgresql
import { Direccion } from "../models/Direccion.js";
const eEstado = {
    ACTIVO: 'activo',
    INACTIVO: 'inactivo',
    DE_BAJA: 'de_baja'
}

export interface IPersona extends Document {
  identificacion: String;
  nombreCompleto: String;
  celular: String;
  correo: String;
  direccion: Direccion;
  estado: eEstado;
}

const personaSchema = new Schema({
    identificacion: {
    type: String,
    unique: true,
    require: true,
    lowercase: true,
  },
  nombreCompleto: {
    type: String,
    require: true,
    lowercase: true,
  },
  celular: {
    type: String,
    required: true,
    lowercase: true,
  },
  correo: {
    type: String,
    required: true,
    lowercase: true,
  },
  direccion: {
    type: Direccion,
    required: true,
    lowercase: true,
  },
  estado: {
    type: eEstado,
    required: true,
    lowercase: true,
  },
});

export default model<IPersona>("persona", personaSchema);