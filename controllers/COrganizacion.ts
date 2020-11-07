import { Organizacion } from "../models/Organizacion";

interface Coordinacion{
  prueba: string;
}

module controller {
  export interface ControlOrganizacion extends Organizacion {
    organizacion: string;
  }
  
  export class COrganizacion {

    constructor(private organizacion: ControlOrganizacion) {
      this.organizacion = this.organizacion;
    }
    
    private _actualizarOrganizacion (organizacion: Organizacion){
      return null;
    }

    private _mostrarCoordinacion(coordinacion: Coordinacion): Coordinacion {
      return null;
    }
  }
}