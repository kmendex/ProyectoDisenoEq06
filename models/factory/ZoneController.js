"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZoneController = void 0;
const AbstractComponent_1 = require("../composite/AbstractComponent");
const CompositeComponent_1 = require("../composite/CompositeComponent");
const SimpleComponent_1 = require("../composite/SimpleComponent");
class ZoneController {
    constructor(zone) {
        this.zone = zone;
    }
    getzone() {
        return this.zone;
    }
    /**
     * Nombre: addBranch
     * Entrada: Id y nombre del rama
     * Salida: true si se agregó bien
     *         false si ya existe el ID o el nombre del rama
     * Restricciones: N/A
     */
    addBranch(id, name) {
        if (this.zone.isID(id)) {
            return false;
        }
        else {
            if (this.zone.isName(name)) {
                return false;
            }
            else {
                const newBranch = new CompositeComponent_1.CompositeComponent(id, name, AbstractComponent_1.Roles.Rama);
                this.zone.addComponent(newBranch);
                return true;
            }
        }
    }
    /**
     * Nombre: getBranchByID
     * Entrada: Id del rama
     * Salida: AbstractComponent (rama)
     * Restricciones: N/A
     */
    getBranchByID(id) {
        const abstractComponent = this.zone.getLevel().filter(component => component.getId() == id)[0];
        return abstractComponent;
    }
    /**
     * Nombre: getBranchByName
     * Entrada: Id del rama
     * Salida: AbstractComponent (rama)
     * Restricciones: N/A
     */
    getBranchByName(name) {
        const abstractComponent = this.zone.getLevel().filter(component => component.getName() == name)[0];
        return abstractComponent;
    }
    /**
     * Nombre: removeBranch
     * Entrada: Id y nombre del rama
     * Salida: true si se eliminó bien
     *         false si no existe el rama
     * Restricciones: N/A
     */
    removeBranch(id, name) {
        return this.zone.removeComponent(new CompositeComponent_1.CompositeComponent(id, name, AbstractComponent_1.Roles.Rama));
    }
    /**
     * Nombre: getramas
     * Entrada: N/A
     * Salida: AbstractComponent[] con los ramas de la rama
     * Restricciones: N/A
     */
    getBranchs() {
        var Branchs = this.zone.getLevel().filter(component => component.isComposite());
        return Branchs;
    }
    /**
     * Nombre: getTypeMember
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */
    getTypeMember(rol) {
        var Branchs = this.getBranchs();
        var comission = [];
        for (var Branch of Branchs) {
            comission = comission.concat((Branch.getLevel()).filter(member => (member.getType() === rol)));
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
        if (this.zone.count(AbstractComponent_1.Roles.Jefe) > 2) {
            return false;
        }
        else {
            if (this.zone.isHere(boss.identificacion, boss.nombreCompleto)) {
                return false;
            }
            else {
                const comission = this.getComission().filter(member => (member.getId() == boss.identificacion));
                if (comission.length > 0) {
                    this.zone.addComponent(new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Jefe, boss));
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
        return this.zone.getLevel().filter(member => member.getType() === AbstractComponent_1.Roles.Jefe);
    }
}
exports.ZoneController = ZoneController;
