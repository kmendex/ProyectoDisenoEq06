import { AbstractComponent, Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";
import { Branch } from "./Branch";
import { Bridge } from "./Bridge";


export class Zone implements Bridge{

    protected composite:CompositeComponent;

    public constructor(composite:AbstractComponent) {
        if (composite.getRole() === Roles.Zona) {
            this.composite = <CompositeComponent>composite;
        }
        else {
            this.composite = new CompositeComponent(composite.getId(), composite.getName(), Roles.Zona);
        }
    }
    
    /**
     * Nombre: getComponents
     * Entrada: N/A
     * Salida: Un CompositeComponent con todos los elementos de la zona     
     * Restricciones: N/A
     */
    
    public getComponents(): AbstractComponent {
        return this.composite;
    }

    /**
     * Nombre: addComponent
     * Entrada: CompositeComponent (Rama) o SimpleComponent (Jefe)
     * Salida: True si se logró agregar en la zona     
     * Restricciones: N/A
     */    
    public addComponent(component:AbstractComponent):boolean{
        const addMode: Roles = component.getRole();
        switch(addMode) {
            case Roles.Jefe:
                return this.addBoss(component);
            case Roles.Rama:
                return this.addBranch(component);
            default:
                return false;
        }
    }

    /**
     * Nombre: toString
     * Entrada: CompositeComponent (Rama) o SimpleComponent (Jefe)
     * Salida: true si se logró eliminar el elemento
     * Restricciones: N/A
     */
    public removeComponent(component: AbstractComponent):boolean {        
        return this.composite.removeComponent(component);   
    }

    /**
     * Nombre: toString
     * Entrada: string con el espacio deseado para las tabulaciones
     * Salida: un string con todos los elementos de la zona
     * Restricciones: N/A
     */
    public toString(tab:string):string {
        return this.composite.toString(tab);
    }

    /**
     * Nombre: isID
     * Entrada: String del id
     * Salida: true si encuentra el id indicado dentro de la zona
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
     * Salida: Arreglo con solo los miembros de la zona      
     * Restricciones: N/A
     */

    public getComission(): AbstractComponent[] {
        var comission : AbstractComponent[] = [];
        this.composite.getTypeRole(Roles.Rama).forEach(branch => {
            const branchBridge = new Branch(branch).getHeadship(); 
            comission = comission.concat(branchBridge);                        
        });        
        return comission;
    }

    /**
     * Nombre: getAll
     * Entrada: N/A
     * Salida: Arreglo con jefes, monitores y miembros de las ramas      
     * Restricciones: N/A
     */
    public getAll(): AbstractComponent[] {
        var all : AbstractComponent[] = [];
        this.composite.getTypeRole(Roles.Rama).forEach(branch => {
            const branchBridge = new Branch(branch).getAll(); 
            all = all.concat(branchBridge);                        
        });        
        return all;        
    }

    /**
     * Nombre: isBossHere
     * Entrada: String del id
     * Salida: true si encuentra el jefe en la rama   
     * Restricciones: N/A.
     */
    public isBossHere(id:string):boolean {
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
    private addBranch(branch:AbstractComponent):boolean {
        if(this.composite.isID(branch.getId()) || this.composite.isName(branch.getName()) || branch.getRole() != Roles.Rama) {
            return false;
        }
        else {
            this.composite.addComponent(branch);
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