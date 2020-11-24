"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompositeComponent = void 0;
const AbstractComponent_1 = require("./AbstractComponent");
class CompositeComponent extends AbstractComponent_1.AbstractComponent {
    constructor(id, nombre, type) {
        super(id, nombre, type);
        this.level = [];
    }
    getLevel() {
        return this.level;
    }
    isComposite() {
        return true;
    }
    addComponent(component) {
        this.level.push(component);
    }
    removeComponent(component) {
        const componentIndex = this.findIndexComponent(component.getId(), component.getName(), component.getType());
        if (componentIndex >= 0) {
            this.level.splice(componentIndex, 1);
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Nombre: findIndexComponent
     * Entrada: Un id (numero), un nombre (string), tipo (Roles).
     * Salida: -1 si no encuentra coincidencias
     *          retorna el indice donde se encuentra el componente
     * Restricciones: N/A.
     */
    findIndexComponent(id, name, type) {
        var index = 0;
        for (var component of this.level) {
            if (component.getId() === id && component.getName().localeCompare(name) == 0 && component.getType() === type) {
                return index;
            }
            index += 1;
        }
        index = -1;
        return index;
    }
    /**
     * Nombre: isComponent
     * Entrada: Un número
     * Salida: true si encuentra el id indicado
     *         false en caso contrario
     * Restricciones: N/A.
     */
    isID(id) {
        for (var component of this.level) {
            if (component.getId() === id) {
                return true;
            }
        }
        return false;
    }
    /**
     * Nombre: isName.
     * Entrada: Un string.
     * Salida: true si encuentra el nombre indicado,
     *         false en caso contrario.
     * Restricciones: N/A
     */
    isName(name) {
        for (var component of this.level) {
            if (component.getName().localeCompare(name) == 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Nombre: isHere.
     * Entrada: Un id (numero), un nombre (string).
     * Salida: true si encuentra el id y nombre indicado,
     *         false en caso contrario.
     * Restricciones: N/A
     */
    isHere(id, name) {
        for (var component of this.level) {
            if (component.getId() === id && component.getName().localeCompare(name) == 0) {
                return true;
            }
        }
        return false;
    }
    /**
     * Nombre: count.
     * Entrada: Un string de cierto tipo.
     * Salida: Cantidad de elementos con ese tipo.
     * Restricciones: N/A.
     */
    count(type) {
        var account = 0;
        for (var component of this.level) {
            if (!component.getType().localeCompare(type)) {
                account += 1;
            }
        }
        return account;
    }
    /**
     * Nombre: toString.
     * Entrada: Un tabulador que separa los diferentes niveles de la estructura.
     * Salida: Un string con todos los niveles de la estructura.
     * Restricciones: N/A.
     */
    toString(tab) {
        var structure = tab + `id ${this.getId()} ${this.getName()} -> ${this.getType()}` + "\n" + tab + "{\n";
        for (var component of this.level) {
            structure += component.toString(tab + "\t");
        }
        structure += tab + "}" + "\n"; //+ tab +"}\n";
        return structure;
    }
}
exports.CompositeComponent = CompositeComponent;
