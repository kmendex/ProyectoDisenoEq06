"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Provincia = void 0;
class Provincia {
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
    static addCanton(key, value) {
        Provincia.cantones.set(key, value);
    }
    static getCanton(key) {
        return Provincia.cantones.get(key);
    }
}
exports.Provincia = Provincia;
Provincia.cantones = new Map();
