import { CompositeComponent } from "../composite/CompositeComponent";
import { SimpleComponent } from "../composite/SimpleComponent";
import { Roles } from "../composite/AbstractComponent";

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
     * Salida: -1 si ya se encuentra en el grupo
     *         0 si el tipo es diferente Miembro
     *         1 si se agrega correctamente el miembro al grupo         
     * Restricciones: Sólo admite Simplecomponent tipo miembro
     */
    public addMember(member:SimpleComponent):number {
        if(this.group.isID(member.getId())) {
            return -1;
        }
        else {
            if (member.getType().localeCompare(Roles.Miembro) == 0) {
                this.group.addComponent(member);
                return 1;
            }
            else{
                return 0;
            }
        }
    }

    /**
     * Nombre: addMonitor
     * Entrada: Un SimpleComponent
     * Salida: -1 si ya se encuentra en el grupo
     *         0 si el tipo es diferente monitor
     *         1 si se agrega correctamente el miembro al grupo         
     * Restricciones: Sólo admite Simplecomponent tipo miembro
     */
    public addMonitor(member:SimpleComponent):number {
        if(this.group.isID(member.getId())) {
            return -1;
        }
        else {
            if (member.getType().localeCompare(Roles.Miembro) == 0) {
                this.group.addComponent(member);
                return 1;
            }
            else{
                return 0;
            }
        }
    }
}