import { AbstractComponent, Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";

export class BranchController {
    private branch:CompositeComponent;

    constructor(branch:CompositeComponent) {
        this.branch = branch;
    }

    public getBranch():CompositeComponent {
        return this.branch;
    }

    /**
     * Nombre: addGroup
     * Entrada: Id y nombre del grupo
     * Salida: true si se agregó bien
     *         false si ya existe el ID o el nombre del grupo         
     * Restricciones: N/A
     */
    public addGroup(id:number, name:string):boolean {
        if(this.branch.isID(id)) {
            return false;
        }
        else {
            if(this.branch.isName(name)) {
                return false;
            }
            else {
                const newGroup = new CompositeComponent(id, name, Roles.Grupo);
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
    public getGroupByID(id:number):CompositeComponent {
        const abstractComponent = this.branch.getLevel().filter(component => component.getId() == id)[0];
        return (<CompositeComponent>abstractComponent);
    }

    /**
     * Nombre: getGroupByName
     * Entrada: Id del grupo
     * Salida: AbstractComponent (grupo)        
     * Restricciones: N/A
     */
    public getGroupByName(name:string):CompositeComponent {
        const abstractComponent = this.branch.getLevel().filter(component => component.getName() == name)[0];
        return (<CompositeComponent>abstractComponent);
    }

    /**
     * Nombre: removeGroup
     * Entrada: Id y nombre del grupo
     * Salida: true si se eliminó bien
     *         false si no existe el grupo        
     * Restricciones: N/A
     */
    public removeGroup(id:number, name:string):boolean {
        return this.branch.removeComponent(new CompositeComponent (id, name, Roles.Grupo));
    }

    /**
     * Nombre: getGrupos
     * Entrada: N/A
     * Salida: AbstractComponent[] con los grupos de la rama      
     * Restricciones: N/A
     */

    public getGroups():AbstractComponent[] {
        var groups = this.branch.getLevel().filter(component => component.isComposite());
        return groups;
    }

    /**
     * Nombre: getTypeMember
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision     
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */

    public getTypeMember(rol:Roles):AbstractComponent[] {
        var groups = this.getGroups();
        var comission: AbstractComponent[] = [];
        for(var group of groups) {
            comission = comission.concat(((<CompositeComponent>group).getLevel()).filter(member => (member.getType() === rol)));
        }
        return comission;
    }

    /**
     * Nombre: getHeadship
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision     
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */

    public getComission():AbstractComponent[] {
        var comission: AbstractComponent[] = [];
        comission = comission.concat(this.getTypeMember(Roles.Jefe));
        comission = comission.concat(this.getTypeMember(Roles.Monitor));
        return comission;
    }
    
    
}