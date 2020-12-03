import { AbstractComponent, Roles } from "../composite/AbstractComponent";

export interface Bridge {

        getComponents():AbstractComponent;

        addComponent(component:AbstractComponent):boolean;

        removeComponent(component: AbstractComponent):boolean;

        toString(tab:string):string;

        isID(id:string):boolean

        getHeadship():AbstractComponent[];

        getComission():AbstractComponent[];

        getAll():AbstractComponent[];
}