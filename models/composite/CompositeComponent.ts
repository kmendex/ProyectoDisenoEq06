import {AbstractComponent} from "./AbstractComponent"

export class CompositeComponent extends AbstractComponent {

    protected level:AbstractComponent[] = []; 

    public constructor(id:number, nombre:string, type:string) {
        super(id,nombre,type);
    }

    public isComposite(): boolean {
        return true;
    }
    
    public addComponent(component:AbstractComponent):void{
        this.level.push(component);
    }

    public removeComponent(component:AbstractComponent):boolean {
        const componentIndex:number = this.level.indexOf(component);
        if(componentIndex >= 0) {
            this.level.splice(componentIndex, 1);
            return true;
        }
        else {
            return false;
        }        
    }

    public toString(tab:string):string {
        var structure:string = tab +`id ${this.getId()} ${this.getName()} -> ${this.getType()}`+ "\n" + tab + "{\n";
        for(var component of this.level) {
            structure += component.toString(tab + "\t");
        }
        structure += tab + "}" + "\n"; //+ tab +"}\n";
        return structure;
    }

}