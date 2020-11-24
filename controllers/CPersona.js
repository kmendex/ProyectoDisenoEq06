"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CPersona = void 0;
const Persona_1 = require("../models/Persona");
class CPersona {
    static crearPersona(id, nombre, celular, correo, direccion, estado) {
        CPersona.personas.push(new Persona_1.Persona(id, nombre, celular, correo, direccion, estado));
    }
    static obtenerPersona(id) {
        return CPersona.personas.filter(x => x.identificacion == id)[0];
    }
    static cambiarEstado(id, estado) {
        CPersona.obtenerPersona(id).estado = estado;
    }
    static actualizarDatos(id, nombre, celular, correo, direccion, estado) {
        let persona = CPersona.obtenerPersona(id);
        if (nombre !== undefined)
            persona.nombreCompleto = nombre;
        if (celular !== undefined)
            persona.celular = celular;
        if (correo !== undefined)
            persona.correo = correo;
        if (direccion !== undefined)
            persona.direccion = direccion;
        if (estado !== undefined)
            persona.estado = estado;
    }
}
exports.CPersona = CPersona;
CPersona.personas = Array();
