"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleComponent = void 0;
const AbstractComponent_1 = require("./AbstractComponent");
class SimpleComponent extends AbstractComponent_1.AbstractComponent {
    constructor(type, member) {
        super(member.identificacion, member.nombreCompleto, type);
        this.member = member;
    }
    getMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    isComposite() {
        return false;
    }
    addComponent(component) {
        throw new Error("Method not implemented.");
    }
    removeComponent(component) {
        throw new Error("Method not implemented.");
    }
    /**
     * Nombre: toString
     * Entrada: Un tabulador (string)
     * Salida: El tabulador, id, nombre y tipo en un sólo string
     * Restricciones: Sólo acepta string
     */
    toString(tab) {
        return tab + `id ${this.getId()} ${this.getName()} -> ${this.getType()}` + "\n";
    }
}
exports.SimpleComponent = SimpleComponent;
