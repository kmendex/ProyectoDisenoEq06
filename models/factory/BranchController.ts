import { AbstractComponent, Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";
import { SimpleComponent } from "../composite/SimpleComponent";
import { Persona } from "../Persona";

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
    public addGroup(id:string, name:string):boolean {
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
    public getGroupByID(id:string):CompositeComponent {
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
    public removeGroup(id:string, name:string):boolean {
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
     * Nombre: getComission
     * Entrada: N/A
     * Salida: AbstractComponent[] con los miembros de la comision     
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */

    public getComission():AbstractComponent[] {
        var comission: AbstractComponent[] = [];
        comission = comission.concat(this.getTypeMember(Roles.Jefe));
        comission = comission.concat(this.getTypeMember(Roles.Monitor));
        return comission;
    }

    /**
     * Nombre: addBoss
     * Entrada: Un jefe (Persona)
     * Salida: true si se agregó correctamente
     *         false si hay dos jefes o el jefe está repetido o si se va a asignar a alguien que no está en la comisión
     * Restricciones: No exite jefe y debe haber menos de un monitor
     */
    public addBoss(boss:Persona):boolean {
        if(this.branch.count(Roles.Jefe) > 2) {
            return false;
        }
        else {
            if(this.branch.isHere(boss.identificacion, boss.nombreCompleto)) {
                return false;
            }
            else {
                const comission = this.getComission().filter(member => (member.getId() == boss.identificacion));
                if (comission.length > 0) {
                    this.branch.addComponent(new SimpleComponent(boss, Roles.Jefe));
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

    public getHeadship():AbstractComponent[] {
        return this.branch.getLevel().filter(member => member.getType() === Roles.Jefe);       
    }
    
}