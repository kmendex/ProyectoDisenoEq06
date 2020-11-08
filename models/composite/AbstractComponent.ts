export abstract class AbstractComponent {
    
    protected id:number;
    protected name:string;
    protected type:string;

    public constructor(id:number, name:string, type:string) {
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

    public getType(): string {
        return this.type;
    }

    public setType(type:string): void {
        this.type = type;
    }

    public abstract isComposite(): boolean;
    
    public abstract toString(tab:string):string;

}