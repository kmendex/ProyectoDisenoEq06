"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pais = void 0;
class Pais {
    //constructor 
    constructor(id, nombre) {
        this._id = id;
        this._nombre = nombre;
    }
    //functions
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    static addPais(pais) {
        Pais.paises.push(pais);
    }
    ;
    static getPais(id) {
        return Pais.paises.filter(x => x.id == id)[0];
    }
    ;
    static addProvincia(key, value) {
        Pais.provincias.set(key, value);
    }
    static getProvincia(key) {
        return Pais.provincias.get(key);
    }
}
exports.Pais = Pais;
Pais.paises = Array();
Pais.provincias = new Map();
