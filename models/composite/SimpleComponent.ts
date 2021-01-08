import {AbstractComponent, Roles} from "./AbstractComponent"
import {Persona} from "../Persona";

export class SimpleComponent extends AbstractComponent {
    
    private member: Persona;

    public constructor(member:Persona, role:Roles) {
        super(member.identificacion+"", member.nombreCompleto, role);
        this.member = member;
    }

    public getMember():Persona {
        return this.member;
    }

    public setMember(member: Persona):void {
        this.member = member;
    }

    /**
     * Nombre: toString
     * Entrada: Un tabulador (string)
     * Salida: El tabulador, id, nombre y tipo en un sólo string       
     * Restricciones: Sólo acepta string
     */
    public toString(tab:string): string {
        return tab + `id ${this.getId()} ${this.getName()} -> ${this.getRole()}` + "\n";
    }
}