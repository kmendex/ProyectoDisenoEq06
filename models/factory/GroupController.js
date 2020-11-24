"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
const SimpleComponent_1 = require("../composite/SimpleComponent");
const AbstractComponent_1 = require("../composite/AbstractComponent");
class GroupController {
    constructor(group) {
        this.group = group;
    }
    getGroup() {
        return this.group;
    }
    /**
     * Nombre: addMember
     * Entrada: Un SimpleComponent
     * Salida: true si se agregó bien
     *         false si ya se encontraba en el grupo
     * Restricciones: N/A
     */
    addMember(member) {
        if (this.group.isID(member.identificacion)) {
            return false;
        }
        else {
            const newMember = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Miembro, member);
            this.group.addComponent(newMember);
            return true;
        }
    }
    /**
     * Nombre: addMonitor
     * Entrada: Un SimpleComponent
     * Salida: true si se agregó correctamente
     *         false si ya tiene jefe asignado o hay dos monitores o el monitor está repetido
     * Restricciones: No exite jefe y debe haber menos de un monitor
     */
    addMonitor(monitor) {
        if (this.group.count(AbstractComponent_1.Roles.Jefe) == 0 && this.group.count(AbstractComponent_1.Roles.Monitor) < 2) {
            const newMonitor = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Monitor, monitor);
            var memberRepeat = this.group.getLevel().filter(member => (member.getId() == monitor.identificacion && member.getType() === AbstractComponent_1.Roles.Miembro));
            if (memberRepeat.length > 0) {
                this.group.removeComponent(memberRepeat[0]);
                this.group.addComponent(newMonitor);
                return true;
            }
            else {
                memberRepeat = this.group.getLevel().filter(member => (member.getId() == monitor.identificacion && member.getType() === AbstractComponent_1.Roles.Monitor));
                if (memberRepeat.length > 0) {
                    return false;
                }
                else {
                    this.group.addComponent(newMonitor);
                    return true;
                }
            }
        }
        else {
            return false;
        }
    }
    /**
     * Nombre: addBoss
     * Entrada: Un jefe (Persona)
     * Salida: true si se agregó correctamente
     *         false si hay dos jefes o el jefe está repetido o si se va a asignar a monitor como jefe
     * Restricciones: No exite jefe y debe haber menos de un monitor
     */
    addBoss(boss) {
        if (this.group.count(AbstractComponent_1.Roles.Jefe) < 2) {
            const newBoss = new SimpleComponent_1.SimpleComponent(AbstractComponent_1.Roles.Jefe, boss);
            var memberRepeat = this.group.getLevel().filter(member => (member.getId() == boss.identificacion && member.getType() === AbstractComponent_1.Roles.Monitor));
            if (memberRepeat.length > 0) {
                return false;
            }
            else {
                memberRepeat = this.group.getLevel().filter(member => (member.getId() == boss.identificacion && member.getType() === AbstractComponent_1.Roles.Jefe));
                if (memberRepeat.length > 0) {
                    return false;
                }
                else {
                    memberRepeat = this.group.getLevel().filter(member => (member.getId() == boss.identificacion && member.getType() === AbstractComponent_1.Roles.Miembro));
                    if (memberRepeat.length > 0) {
                        this.group.removeComponent(memberRepeat[0]);
                        this.group.addComponent(newBoss);
                        this.removeVirtualMonitors();
                        return true;
                    }
                    else {
                        return false;
                    }
                }
            }
        }
        else {
            return false;
        }
    }
    /**
     * Nombre: removeMonitors()
     * Entrada: N/A
     * Salida: N/A
     * Restricciones: N/A
     */
    removeVirtualMonitors() {
        var index = 0;
        const groupMembers = this.group.getLevel();
        for (var component of groupMembers) {
            if (component.getType() === AbstractComponent_1.Roles.Monitor) {
                groupMembers[index].setEnable(false);
            }
            index += 1;
        }
    }
}
exports.GroupController = GroupController;
