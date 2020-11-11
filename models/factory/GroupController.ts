import { CompositeComponent } from "../composite/CompositeComponent";
import { SimpleComponent } from "../composite/SimpleComponent";
import { Roles } from "../composite/AbstractComponent";
import { Persona } from "../Persona";

export class GroupController {

    private group:CompositeComponent;

    constructor(group:CompositeComponent) {
        this.group = group;
    }

    public getGroup():CompositeComponent {
        return this.group;
    }
    
    /**
     * Nombre: addMember
     * Entrada: Un SimpleComponent
     * Salida: true si se agregó bien
     *         false si ya se encontraba en el grupo         
     * Restricciones: N/A
     */
    public addMember(member:Persona):boolean {
        if(this.group.isID(member.identificacion)) {
            return false;
        }
        else {
            const newMember = new SimpleComponent(Roles.Miembro, member);
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
    public addMonitor(monitor:Persona):boolean {
        if(this.group.count(Roles.Jefe) == 0 && this.group.count(Roles.Monitor) < 2) {
            const newMonitor = new SimpleComponent(Roles.Monitor, monitor);
            var memberRepeat = this.group.getLevel().filter(member => (member.getId() == monitor.identificacion && member.getType() === Roles.Miembro));
            if(memberRepeat.length > 0) {
                this.group.removeComponent(memberRepeat[0]);
                this.group.addComponent(newMonitor);
                return true;
            }
            else 
            {
                memberRepeat = this.group.getLevel().filter(member => (member.getId() == monitor.identificacion && member.getType() === Roles.Monitor));
                if(memberRepeat.length > 0) {
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
    public addBoss(boss:Persona):boolean {
        if(this.group.count(Roles.Jefe) < 2) {
            const newBoss = new SimpleComponent(Roles.Jefe, boss);
            var memberRepeat = this.group.getLevel().filter(member => (member.getId() == boss.identificacion && member.getType() === Roles.Monitor));
            if(memberRepeat.length > 0) {
                return false;
            }
            else 
            {
                memberRepeat = this.group.getLevel().filter(member => (member.getId() == boss.identificacion && member.getType() === Roles.Jefe));
                if(memberRepeat.length > 0) {
                    return false;
                }
                else {
                    memberRepeat = this.group.getLevel().filter(member => (member.getId() == boss.identificacion && member.getType() === Roles.Miembro));
                    if(memberRepeat.length > 0) {
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
    public removeVirtualMonitors():void {
        var index = 0;
        const groupMembers = this.group.getLevel();
        for(var component of groupMembers) {
            if (component.getType() === Roles.Monitor) {
                groupMembers[index].setEnable(false);
            }
            index += 1;
        }
    }
}