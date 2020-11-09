import { Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";

export class BranchController {
    private branch:CompositeComponent;

    constructor(branch:CompositeComponent) {
        this.branch = branch;
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
     * Nombre: removeGroup
     * Entrada: Id y nombre del grupo
     * Salida: true si se eliminó bien
     *         false si no existe el grupo        
     * Restricciones: N/A
     */
    public removeGroup(id:number, name:string):boolean {
        return this.branch.removeComponent(new CompositeComponent (id, name, Roles.Grupo));
    }

}