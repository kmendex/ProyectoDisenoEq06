"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchController = void 0;
const AbstractComponent_1 = require("../composite/AbstractComponent");
const CompositeComponent_1 = require("../composite/CompositeComponent");
const SimpleComponent_1 = require("../composite/SimpleComponent");
class BranchController {
    constructor(branch) {
        this.branch = branch;
    }
    getBranch() {
        return this.branch;
    }
    /**
     * Nombre: addGroup
     * Entrada: Id y nombre del grupo
     * Salida: true si se agregó bien
     *         false si ya existe el ID o el nombre del grupo
     * Restricciones: N/A
     */
    addGroup(id, name) {
        if (this.branch.isID(id)) {
            return false;
        }
        else {
            if (this.branch.isName(name)) {
                return false;
            }
            else {
                const newGroup = new CompositeComponent_1.CompositeComponent(id, name, AbstractComponent_1.Roles.Grupo);
                this.branch.addComponent(newGroup);
                return true;
            }
        }
    }
    /**
     * Nombre: getGroupByID
     * Entrada: Id del grupo
     * Salida: AbstractComponent (grupo)
     * Restricciones: N/A
     */
    getGroupByID(id) {
        const abstractComponent = this.branch.getLevel().filter(component => component.getId() == id)[0];
        return abstractComponent;
    }
    /**
     * Nombre: getGroupByName
     * Entrada: Id del grupo
     * Salida: AbstractComponent (grupo)
     * Restricciones: N/A
     */
    getGroupByName(name) {
        const abstractComponent = this.branch.getLevel().filter(component => component.getName() == name)[0];
        return abstractComponent;
    }
    /**
     * Nombre: removeGroup
     * Entrada: Id y nombre del grupo
     * Salida: true si se eliminó bien
     *         false si no existe el grupo
     * Restricciones: N/A
     */
    removeGroup(id, name) {
        return this.branch.removeComponent(new CompositeComponent_1.CompositeComponent(id, name, AbstractComponent_1.Roles.Grupo));
    }
    /**
     * Nombre: getGrupos
     * Entrada: N/A
     * Salida: AbstractComponent[] con los grupos de la rama
     * Restricciones: N/A
     */
    getGroups() {
        var groups = this.branch.getLevel().filter(component => component.isComposite());
        return groups;
    }
    /**
     * Nombre: getTypeMember
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */
    getTypeMember(rol) {
        var groups = this.getGroups();
        var comission = [];
        for (var group of groups) {
            comission = comission.concat((group.getLevel()).filter(member => (member.getType() === rol)));
        }
        return comission;
    }
    /**
     * Nombre: getComission
     * Entrada: N/A
     * Salida: AbstractComponent[] con los miembros de la comision
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */
    getComission() {
        var comission = [];
        comission = comission.concat(this.getTypeMember(AbstractComponent_1.Roles.Jefe));
        comission = comission.concat(this.getTypeMember(AbstractComponent_1.Roles.Monitor));
        return comission;
    }
    /**
     * Nombre: addBoss
     * Entrada: Un jefe (Persona)
     * Salida: true si se agregó correctamente
     *         false si hay dos jefes o el jefe está repetido o si se va a asignar a alguien que no está en la comisión
     * Restricciones: No exite jefe y debe haber menos de un monitor
     */
    addBoss(boss) {
        if (this.branch.count(AbstractComponent_1.Roles.Jefe) > 2) {
            return false;
        }
        else {
            if (this.branch.isHere(boss.identificacion, boss.nombreCompleto)) {
                return false;
            }
            else {
                const comission = this.getComission().filter(member => (member.getId() == boss.identificacion));
                if (comission.length > 0) {
                    this.branch.addComponent(new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Jefe, boss));
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    /**
     * Nombre: getHeadship
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */
    getHeadship() {
        return this.branch.getLevel().filter(member => member.getType() === AbstractComponent_1.Roles.Jefe);
    }
}
exports.BranchController = BranchController;
