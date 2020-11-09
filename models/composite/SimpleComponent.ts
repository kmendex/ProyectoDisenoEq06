import {AbstractComponent, Roles} from "./AbstractComponent"
import {Persona} from "../Persona";

export class SimpleComponent extends AbstractComponent {
    
    protected member: Persona;

    public constructor(type:Roles, member:Persona) {
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

    public addComponent(component: AbstractComponent ): void {
        throw new Error("Method not implemented.");
    }

    public removeComponent(component: AbstractComponent): boolean {
        throw new Error("Method not implemented.");
    }

    /**
     * Nombre: toString
     * Entrada: Un tabulador (string)
     * Salida: El tabulador, id, nombre y tipo en un sólo string       
     * Restricciones: Sólo acepta string
     */
    public toString(tab:string): string {
        return tab + `id ${this.getId()} ${this.getName()} -> ${this.getType()}` + "\n";
    }
}