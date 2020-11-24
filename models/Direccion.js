"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
class Direccion {
    //constructor 
    constructor(pais, provincia, canton, distrito, info) {
        this._pais = pais;
        this._provincia = provincia;
        this._canton = canton;
        this._distrito = distrito;
        this._info = info;
    }
    //functions
    get pais() {
        return this._pais;
    }
    set pais(pais) {
        this._pais = pais;
    }
    get provincia() {
        return this._provincia;
    }
    set provincia(provincia) {
        this._provincia = provincia;
    }
    get canton() {
        return this._canton;
    }
    set canton(canton) {
        this._canton = canton;
    }
    get districto() {
        return this._distrito;
    }
    set districto(districto) {
        this._distrito = districto;
    }
    get info() {
        return this._info;
    }
    set info(info) {
        this._info = info;
    }
}
exports.Direccion = Direccion;
