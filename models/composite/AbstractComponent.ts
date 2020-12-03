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
    
    protected id:string;
    protected name:string;
    protected role:Roles;
    protected enable: boolean = true;

    public constructor(id:string, name:string, role:Roles) {
        this.id = id;
        this.name = name;
        this.role = role;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id:string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name:string): void {
        this.name = name;
    }

    public getRole(): Roles {
        return this.role;
    }

    public setRole(role:Roles): void {
        this.role = role;
    }

    public getEnable(): boolean {
        return this.enable;
    }

    public setEnable(enable:boolean):void {
        this.enable = enable;
    }

    public equalsId(param:string):boolean {
        return this.id.localeCompare(param) == 0;
    }

    public equalsName(param:string):boolean {
        return this.name.localeCompare(param) == 0;
    }

    public equalsRole(param:Roles):boolean {
        return this.role === param;
    }
    
    public abstract toString(tab:string):string;

}