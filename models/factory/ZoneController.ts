import { AbstractComponent, Roles } from "../composite/AbstractComponent";
import { CompositeComponent } from "../composite/CompositeComponent";
import { SimpleComponent } from "../composite/SimpleComponent";
import { Persona } from "../Persona";

export class ZoneController {
    private zone:CompositeComponent;

    constructor(zone:CompositeComponent) {
        this.zone = zone;
    }

    public getzone():CompositeComponent {
        return this.zone;
    }

    /**
     * Nombre: addBranch
     * Entrada: Id y nombre del rama
     * Salida: true si se agregó bien
     *         false si ya existe el ID o el nombre del rama         
     * Restricciones: N/A
     */
    public addBranch(id:string, name:string):boolean {
        if(this.zone.isID(id)) {
            return false;
        }
        else {
            if(this.zone.isName(name)) {
                return false;
            }
            else {
                const newBranch = new CompositeComponent(id, name, Roles.Rama);
                this.zone.addComponent(newBranch);
                return true;
            }
        }
    }

    /**
     * Nombre: getBranchByID
     * Entrada: Id del rama
     * Salida: AbstractComponent (rama)        
     * Restricciones: N/A
     */
    public getBranchByID(id:string):CompositeComponent {
        const abstractComponent = this.zone.getLevel().filter(component => component.getId() == id)[0];
        return (<CompositeComponent>abstractComponent);
    }

    /**
     * Nombre: getBranchByName
     * Entrada: Id del rama
     * Salida: AbstractComponent (rama)        
     * Restricciones: N/A
     */
    public getBranchByName(name:string):CompositeComponent {
        const abstractComponent = this.zone.getLevel().filter(component => component.getName() == name)[0];
        return (<CompositeComponent>abstractComponent);
    }

    /**
     * Nombre: removeBranch
     * Entrada: Id y nombre del rama
     * Salida: true si se eliminó bien
     *         false si no existe el rama        
     * Restricciones: N/A
     */
    public removeBranch(id:string, name:string):boolean {
        return this.zone.removeComponent(new CompositeComponent (id, name, Roles.Rama));
    }

    /**
     * Nombre: getramas
     * Entrada: N/A
     * Salida: AbstractComponent[] con los ramas de la rama      
     * Restricciones: N/A
     */

    public getBranchs():AbstractComponent[] {
        var Branchs = this.zone.getLevel().filter(component => component.isComposite());
        return Branchs;
    }

    /**
     * Nombre: getTypeMember
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision     
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */

    public getTypeMember(rol:Roles):AbstractComponent[] {
        var Branchs = this.getBranchs();
        var comission: AbstractComponent[] = [];
        for(var Branch of Branchs) {
            comission = comission.concat(((<CompositeComponent>Branch).getLevel()).filter(member => (member.getType() === rol)));
        }
        return comission;
    }

    /**
     * Nombre: getComission
     * Entrada: N/A
     * Salida: AbstractComponent[] con los miembros de la comision     
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */

    public getComission():AbstractComponent[] {
        var comission: AbstractComponent[] = [];
        comission = comission.concat(this.getTypeMember(Roles.Jefe));
        return comission;
    }

    /**
     * Nombre: addBoss
     * Entrada: Un jefe (Persona)
     * Salida: true si se agregó correctamente
     *         false si hay dos jefes o el jefe está repetido o si se va a asignar a alguien que no está en la comisión
     * Restricciones: No exite jefe y debe haber menos de un monitor
     */
    public addBoss(boss:Persona):boolean {
        if(this.zone.count(Roles.Jefe) > 2) {
            return false;
        }
        else {
            if(this.zone.isHere(boss.identificacion, boss.nombreCompleto)) {
                return false;
            }
            else {
                const comission = this.getComission().filter(member => (member.getId() == boss.identificacion));
                if (comission.length > 0) {
                    this.zone.addComponent(new SimpleComponent(boss, Roles.Jefe));
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    }
    
    /**
     * Nombre: getHeadship
     * Entrada: Tipo de miembro esperado
     * Salida: AbstractComponent[] con los miembros de la comision     
     * Restricciones: Solo admite Roles.Miembro, Roles.Jefe, Roles.Monitor
     */

    public getHeadship():AbstractComponent[] {
        return this.zone.getLevel().filter(member => member.getType() === Roles.Jefe);       
    }
    
}