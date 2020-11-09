export enum Roles {
    Asesor = "ASESOR",
    Jefe = "JEFE",
    //JefeZ = "JEFE_ZONA",
    //JefeR = "JEFE_RAMA",
    //JefeG = "JEFE_GRUPO",
    Monitor = "MONITOR",
    Miembro = "MIEMBRO",
    Coordinacion = "COORDINACION",
    Zona = "ZONA",
    Rama = "RAMA",
    Grupo = "GRUPO"
}

export abstract class AbstractComponent {
    
    protected id:number;
    protected name:string;
    protected type:Roles;

    public constructor(id:number, name:string, type:Roles) {
        this.id = id;
        this.name = name;
        this.type = type;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id:number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name:string): void {
        this.name = name;
    }

    public getType(): Roles {
        return this.type;
    }

    public setType(type:Roles): void {
        this.type = type;
    }

    public abstract isComposite(): boolean;

    public abstract addComponent(component: AbstractComponent): void;
    
    public abstract removeComponent(component: AbstractComponent): void;

    public abstract toString(tab:string):string;

}