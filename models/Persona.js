"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = exports.eEstado = void 0;
var eEstado;
(function (eEstado) {
    eEstado["activo"] = "ACTIVO";
    eEstado["inactivo"] = "INACTIVO";
    eEstado["de_baja"] = "DE_BAJA";
})(eEstado = exports.eEstado || (exports.eEstado = {}));
class Persona {
    //constructor 
    constructor(identificacion, nombreCompleto, celular, correo, direccion, estado) {
        this._identificacion = identificacion;
        this._nombreCompleto = nombreCompleto;
        this._celular = celular;
        this._correo = correo;
        this._direccion = direccion;
        this._estado = estado;
    }
    get identificacion() {
        return this._identificacion;
    }
    set identificacion(id) {
        this._identificacion = id;
    }
    get nombreCompleto() {
        return this._nombreCompleto;
    }
    set nombreCompleto(nombre) {
        this._nombreCompleto = nombre;
    }
    get celular() {
        return this._celular;
    }
    set celular(celular) {
        this._celular = celular;
    }
    get correo() {
        return this._correo;
    }
    set correo(correo) {
        this._correo = correo;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
    get estado() {
        return this._estado;
    }
    set estado(estado) {
        this._estado = estado;
    }
    toString() {
        console.log(this.nombreCompleto + " con identificacion " + this.identificacion + ", vive en la provincia de " + this.direccion.provincia);
    }
}
exports.Persona = Persona;
