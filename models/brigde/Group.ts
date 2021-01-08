import { AbstractComponent, Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";
import { Bridge } from "./Bridge";

export class Group implements Bridge{

    protected composite:CompositeComponent;

    public constructor(composite:AbstractComponent) {
        if (composite.getRole() === Roles.Grupo) {
            this.composite = <CompositeComponent>composite;
        }
        else {
            this.composite = new CompositeComponent(composite.getId(), composite.getName(), Roles.Grupo);
        }
    }
    
    /**
     * Nombre: getComponents
     * Entrada: N/A
     * Salida: Un CompositeComponent con todos los elementos del grupo       
     * Restricciones: N/A
     */    
    public getComponents(): AbstractComponent {
        return this.composite;
    }

    /**
     * Nombre: addComponent
     * Entrada: SimpleComponent
     * Salida: True si se logró agreagr en el grupo       
     * Restricciones: N/A
     */    
    public addComponent(component:AbstractComponent):boolean{
        const addMode: Roles = component.getRole();
        switch(addMode) {
            case Roles.Miembro:
                return this.addMember(component);
            case Roles.Monitor:
                return this.addMonitor(component);
            case Roles.Jefe:
                return this.addBoss(component);
            default:
                return false;
        }
    }

    /**
     * Nombre: toString
     * Entrada: SimpleComponente que se desea eliminar del grupo
     * Salida: true si se logró eliminar el elemento
     * Restricciones: N/A
     */
    public removeComponent(component: AbstractComponent):boolean {        
        return this.composite.removeComponent(component);   
    }

    /**
     * Nombre: toString
     * Entrada: string con el espacio deseado para las tabulaciones
     * Salida: un string con todos los elementos de un grupo
     * Restricciones: N/A
     */
    public toString(tab:string):string {
        return this.composite.toString(tab);
    }

    /**
     * Nombre: isID
     * Entrada: String del id
     * Salida: true si encuentra el id indicado dentro del grupo
     *         false en caso contrario    
     * Restricciones: N/A.
     */
    public isID(id: string): boolean {
        return this.composite.isID(id);
    }

    /**
     * Nombre: getHeadship
     * Entrada: N/A
     * Salida: Arreglo con todos los Jefes y Monitores       
     * Restricciones: N/A
     */

    public getHeadship():AbstractComponent[] {
        var headship = this.composite.getTypeRole(Roles.Jefe);
        headship = headship.concat(this.composite.getTypeRole(Roles.Monitor));
        return headship;
    }

    /**
     * Nombre: getComission
     * Entrada: N/A
     * Salida: Arreglo con solo los miembros del grupo       
     * Restricciones: N/A
     */

    public getComission(): AbstractComponent[] {
        return this.composite.getTypeRole(Roles.Miembro);
    }

    /**
     * Nombre: getAll
     * Entrada: N/A
     * Salida: Arreglo con jefes, monitores y miembros del grupo       
     * Restricciones: N/A
     */
    public getAll(): AbstractComponent[] {
        return this.composite.getLevel();
    }

    /**
     * Nombre: addMember
     * Entrada: Un AbstractComponent (SimpleComponent)
     * Salida: true si se agregó bien
     *         false si ya se encontraba en el grupo         
     * Restricciones: N/A
     */
    private addMember(member:AbstractComponent):boolean {
        if(this.isID(member.getId())) {
            return false;
        }
        else {
            this.composite.addComponent(member);
            return true;
        }
    }

    /**
     * Nombre: addMonitor
     * Entrada: Un AbstractComponent (SimpleComponent)
     * Salida: true si se agregó correctamente
     *         false si ya tiene jefe asignado o hay dos monitores o el monitor está repetido
     * Restricciones: No existe jefe y debe haber menos de un monitor
     */
    private addMonitor(monitor:AbstractComponent):boolean {
        if(this.composite.count(Roles.Jefe) == 0 && this.composite.count(Roles.Monitor) < 2) {
            const id = monitor.getId();
            if(this.isID(id)) {
                var newMonitor = this.composite.getComponent(id,Roles.Miembro);
                if(newMonitor != undefined) {
                    newMonitor.setRole(Roles.Monitor);
                    return true;
                }
                else 
                {
                    return false;
                }           
            }
            else {
                this.composite.addComponent(monitor);
                return true;
            }
        }
        else {
            return false;
        }
    }

    /**
     * Nombre: addBoss
     * Entrada: Un AbstractComponent (SimpleComponent)
     * Salida: true si se agregó correctamente
     *         false si hay dos jefes o el jefe está repetido o si se va a asignar a monitor como jefe
     * Restricciones: No existe jefe y debe haber menos de un monitor
     */
    private addBoss(boss:AbstractComponent):boolean {
        if(this.composite.count(Roles.Jefe) < 2) {
            const id = boss.getId();
            if(this.isID(id)) {
                var newBoss = this.composite.getComponent(id,Roles.Miembro);
                if(newBoss != undefined) {
                    newBoss.setRole(Roles.Jefe);
                    this.removeVirtualMonitors();
                    return true;
                }
                else 
                {
                    return false;
                }
            }
            else {
                return false;
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
    private removeVirtualMonitors():void {
        this.composite.getTypeRole(Roles.Monitor).forEach(monitor => {
            monitor.setEnable(false);            
        });
    }

}