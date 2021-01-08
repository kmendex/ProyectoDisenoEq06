import { AbstractComponent, Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";
import { Bridge } from "./Bridge";
import { Group } from "./Group";

export class Branch implements Bridge{

    protected composite:CompositeComponent;

    public constructor(composite:AbstractComponent) {
        if (composite.getRole() === Roles.Rama) {
            this.composite = <CompositeComponent>composite;
        }
        else {
            this.composite = new CompositeComponent(composite.getId(), composite.getName(), Roles.Rama);
        }
    }
    
    /**
     * Nombre: getComponents
     * Entrada: N/A
     * Salida: Un CompositeComponent con todos los elementos de la rama       
     * Restricciones: N/A
     */
    
    public getComponents(): AbstractComponent {
        return this.composite;
    }

    /**
     * Nombre: addComponent
     * Entrada: CompositeComponent (Grupo) o SimpleComponent (Jefe)
     * Salida: True si se logró agregar en la rama      
     * Restricciones: N/A
     */    
    public addComponent(component:AbstractComponent):boolean{
        const addMode: Roles = component.getRole();
        switch(addMode) {
            case Roles.Jefe:
                return this.addBoss(component);
            case Roles.Grupo:
                return this.addGroup(component);
            default:
                return false;
        }
    }

    /**
     * Nombre: toString
     * Entrada: CompositeComponent (Grupo) o SimpleComponent (Jefe)
     * Salida: true si se logró eliminar el elemento
     * Restricciones: N/A
     */
    public removeComponent(component: AbstractComponent):boolean {        
        return this.composite.removeComponent(component);   
    }

    /**
     * Nombre: toString
     * Entrada: string con el espacio deseado para las tabulaciones
     * Salida: un string con todos los elementos de la rama
     * Restricciones: N/A
     */
    public toString(tab:string):string {
        return this.composite.toString(tab);
    }

    /**
     * Nombre: isID
     * Entrada: String del id
     * Salida: true si encuentra el id indicado dentro de la rama
     *         false en caso contrario    
     * Restricciones: N/A.
     */
    public isID(id: string): boolean {
        for(var component of this.getAll()) {
            if (component.equalsId(id)) {
                return true;
            }
        }
        return false; 
    }

    /**
     * Nombre: getHeadship
     * Entrada: N/A
     * Salida: Arreglo con los dos jefes de la rama      
     * Restricciones: N/A
     */

    public getHeadship():AbstractComponent[] {
        return this.composite.getTypeRole(Roles.Jefe);
    }

    /**
     * Nombre: getComission
     * Entrada: N/A
     * Salida: Arreglo con solo los miembros de la rama      
     * Restricciones: N/A
     */

    public getComission(): AbstractComponent[] {
        var comission : AbstractComponent[] = [];
        this.composite.getTypeRole(Roles.Grupo).forEach(group => {
            const groupBridge = new Group(group).getHeadship(); 
            comission = comission.concat(groupBridge);                        
        });        
        return comission;
    }

    /**
     * Nombre: getAll
     * Entrada: N/A
     * Salida: Arreglo con jefes, monitores y miembros de los grupos       
     * Restricciones: N/A
     */
    public getAll(): AbstractComponent[] {
        var all : AbstractComponent[] = [];
        this.composite.getTypeRole(Roles.Grupo).forEach(group => {
            const groupBridge = new Group(group).getAll(); 
            all = all.concat(groupBridge);                        
        });        
        return all;        
    }

    /**
     * Nombre: isBossHere
     * Entrada: String del id
     * Salida: true si encuentra el jefe en la rama   
     * Restricciones: N/A.
     */
    private isBossHere(id:string):boolean {
        for(var boss of this.getComission()) {
            if (boss.equalsId(id)) {
                return true;
            }
        }
        return false;  
    }

    /**
     * Nombre: addGroup
     * Entrada: Un SimpleComponent
     * Salida: true si se agregó bien
     *         false si ya se encontraba en la rama         
     * Restricciones: N/A
     */
    private addGroup(group:AbstractComponent):boolean {
        if(this.composite.isID(group.getId()) || this.composite.isName(group.getName()) || group.getRole() != Roles.Grupo) {
            return false;
        }
        else {
            this.composite.addComponent(group);
            return true;
        }
    }


    /**
     * Nombre: addBoss
     * Entrada: Una Persona
     * Salida: true si se agregó correctamente
     *         false si hay dos jefes o el jefe está repetido
     * Restricciones: N/A
     */
    private addBoss(boss:AbstractComponent):boolean {
        if(this.composite.count(Roles.Jefe) < 2) {
            const id = boss.getId();
            if(this.isBossHere(id)) {
                this.composite.addComponent(boss);
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

}