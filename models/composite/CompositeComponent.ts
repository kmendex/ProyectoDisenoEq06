import {AbstractComponent, Roles} from "./AbstractComponent"

export class CompositeComponent extends AbstractComponent {

    private level:AbstractComponent[] = []; 

    public constructor(id:number, nombre:string, type:Roles) {
        super(id,nombre,type);
    }

    public getLevel():AbstractComponent[] {
        return this.level;
    }

    public isComposite():boolean {
        return true;
    }
    
    public addComponent(component:AbstractComponent):void{
        this.level.push(component);
    }

    public removeComponent(component: AbstractComponent):boolean {        
        const componentIndex = this.findIndexComponent(component.getId(), component.getName(), component.getType());
        if(componentIndex >= 0) {
            this.level.splice(componentIndex, 1);
            return true;
        }
        else {
            return false;
        }        
    }
    
    /**
     * Nombre: findIndexComponent
     * Entrada: Un id (numero), un nombre (string), tipo (Roles).
     * Salida: -1 si no encuentra coincidencias
     *          retorna el indice donde se encuentra el componente    
     * Restricciones: N/A.
     */
    public findIndexComponent(id:number, name:string, type:Roles):number {
        var index = 0;
        for(var component of this.level) {
            if (component.getId() === id && component.getName().localeCompare(name) == 0 && component.getType() === type) {
                return  index;
            }
            index += 1;
        }
        index = -1;
        return index;
    }

    /**
     * Nombre: isComponent
     * Entrada: Un número
     * Salida: true si encuentra el id indicado
     *         false en caso contrario    
     * Restricciones: N/A.
     */
    public isID(id:number):boolean {
        for(var component of this.level) {
            if (component.getId() === id) {
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
            if (component.getName().localeCompare(name) == 0) {
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
    public isHere(id:number, name:string):boolean {
        for(var component of this.level) {
            if (component.getId() === id && component.getName().localeCompare(name) == 0) {
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
    public count(type:Roles):number {
        var account = 0;
        for(var component of this.level) {
            if (!component.getType().localeCompare(type)) {
                account += 1;
            }
        }
        return account;        
    }

    /**
     * Nombre: toString.
     * Entrada: Un tabulador que separa los diferentes niveles de la estructura.
     * Salida: Un string con todos los niveles de la estructura.       
     * Restricciones: N/A.
     */
    public toString(tab:string):string {
        var structure:string = tab +`id ${this.getId()} ${this.getName()} -> ${this.getType()}`+ "\n" + tab + "{\n";
        for(var component of this.level) {
            structure += component.toString(tab + "\t");
        }
        structure += tab + "}" + "\n"; //+ tab +"}\n";
        return structure;
    }

}