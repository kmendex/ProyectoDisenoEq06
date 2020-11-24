"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractComponent = exports.Roles = void 0;
var Roles;
(function (Roles) {
    Roles["Asesor"] = "ASESOR";
    Roles["Jefe"] = "JEFE";
    Roles["Monitor"] = "MONITOR";
    Roles["Miembro"] = "MIEMBRO";
    Roles["Coordinacion"] = "COORDINACION";
    Roles["Zona"] = "ZONA";
    Roles["Rama"] = "RAMA";
    Roles["Grupo"] = "GRUPO";
})(Roles = exports.Roles || (exports.Roles = {}));
class AbstractComponent {
    constructor(id, name, type) {
        this.enable = true;
        this.id = id;
        this.name = name;
        this.type = type;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getEnable() {
        return this.enable;
    }
    setEnable(enable) {
        this.enable = enable;
    }
}
exports.AbstractComponent = AbstractComponent;
