import {AbstractComponent} from "./AbstractComponent"
import {Persona} from "../Persona";

export class SimpleComponent extends AbstractComponent {

    protected member: Persona;

    public constructor(type:string, member:Persona) {
        super(member.identificacion, member.nombreCompleto, type);
        this.member = member;
    }

    public getMember():Persona {
        return this.member;
    }

    public setMember(member: Persona):void {
        this.member = member;
    }

    public isComposite(): boolean {
        return false;
    }
    public addComponent(component: AbstractComponent): void {

    }
    public removeComponent(component: AbstractComponent): void {
        
    }
    public toString(tab:string): string {
        return tab + `id ${this.getId()} ${this.getName()} -> ${this.getType()}` + "\n";
    }
}