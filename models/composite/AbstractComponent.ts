export enum Roles {
    Asesor = "ASESOR",
    Jefe = "JEFE",
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
    protected enable: boolean = true;

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

    public getEnable(): boolean {
        return this.enable;
    }

    public setEnable(enable:boolean):void {
        this.enable = enable;
    }

    public abstract isComposite(): boolean;

    public abstract addComponent(component:AbstractComponent):void;

    public abstract removeComponent(component:AbstractComponent):boolean;
    
    public abstract toString(tab:string):string;

}