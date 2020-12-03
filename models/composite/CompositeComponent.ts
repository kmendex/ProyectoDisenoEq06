import { Bridge } from "../brigde/Bridge";
import {AbstractComponent, Roles} from "./AbstractComponent"

export class CompositeComponent extends AbstractComponent {

    protected level:AbstractComponent[] = []; 

    public constructor(id:string, nombre:string, type:Roles) {
        super(id,nombre,type);
    }

    public getLevel():AbstractComponent[] {
        return this.level;
    }
    
    public addComponent(component:AbstractComponent):boolean{
            this.level.push(component);
            return true;
    }

    public removeComponent(component: AbstractComponent):boolean {        
        const componentIndex = this.findIndexComponent(component.getId(), component.getRole());
        if(componentIndex >= 0) {
            this.level.splice(componentIndex, 1);
            return true;
        }
        else {
            return false;
        }        
    }

    /**
     * Nombre: getComponent
     * Entrada: id y rol del componente
     * Salida:  AbstractComponent que representa el componente encontrado
     * Restricciones: N/A
     */
    public getComponent(id:string, role:Roles):AbstractComponent {
        const components= this.level.filter(component => (component.equalsId(id) && component.equalsRole(role)));
        return components[0];
    }

    
    /**
     * Nombre: findIndexComponent
     * Entrada: Un id (numero), un nombre (string), tipo (Roles).
     * Salida: -1 si no encuentra coincidencias
     *          retorna el indice donde se encuentra el componente    
     * Restricciones: N/A.
     */
    public findIndexComponent(id:string, role:Roles):number {
        var index = 0;
        for(var component of this.level) {
            if (component.equalsId(id) && component.equalsRole(role)) {
                return  index;
            }
            index += 1;
        }
        index = -1;
        return index;
    }

    /**
     * Nombre: isID
     * Entrada: String del id
     * Salida: true si encuentra el id indicado
     *         false en caso contrario    
     * Restricciones: N/A.
     */
    public isID(id:string):boolean {
        for(var component of this.level) {
            if (component.equalsId(id)) {
                return true;
            }
        }
        return false;  
    }

    /**
     * Nombre: isName.
     * Entrada: Un string.
     * Salida: true si encuentra el nombre indicado,
     *         false en caso contrario.    
     * Restricciones: N/A
     */
    public isName(name:string):boolean {
        for(var component of this.level) {
            if (component.equalsName(name)) {
                return true;
            }
        }
        return false;  
    }

    /**
     * Nombre: isHere.
     * Entrada: Un id (numero), un nombre (string).
     * Salida: true si encuentra el id y nombre indicado,
     *         false en caso contrario.    
     * Restricciones: N/A
     */
    public isHere(id:string, role:Roles):boolean {
        for(var component of this.level) {
            if (component.equalsId(id) && component.equalsRole(role)) {
                return true;
            }
        }
        return false;  
    }

    /**
     * Nombre: count.
     * Entrada: Un string de cierto tipo.
     * Salida: Cantidad de elementos con ese tipo.        
     * Restricciones: N/A.
     */
    public count(role:Roles):number {
        var account = 0;
        for(var component of this.level) {
            if (component.equalsRole(role)) {
                account += 1;
            }
        }
        return account;        
    }

    /**
     * Nombre: getTypeRole
     * Entrada: Rol deseado
     * Salida: AbstractComponent[] con los componentes del rol indicado    
     * Restricciones: N/A
     */

    public getTypeRole(role:Roles):AbstractComponent[] {
        return this.level.filter(component => (component.equalsRole(role)));
    }

    /**
     * Nombre: toString.
     * Entrada: Un tabulador que separa los diferentes niveles de la estructura.
     * Salida: Un string con todos los niveles de la estructura.       
     * Restricciones: N/A.
     */
    public toString(tab:string):string {
        var structure:string = tab +`id ${this.getId()} ${this.getName()} -> ${this.getRole()}`+ "\n" + tab + "{\n";
        for(var component of this.level) {
            structure += component.toString(tab + "\t");
        }
        structure += tab + "}" + "\n";
        return structure;
    }

}