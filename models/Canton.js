"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Canton = void 0;
class Canton {
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
    static addDistrito(key, value) {
        Canton.distritos.set(key, value);
    }
    static getDistrito(key) {
        return Canton.distritos.get(key);
    }
}
exports.Canton = Canton;
Canton.distritos = new Map();
