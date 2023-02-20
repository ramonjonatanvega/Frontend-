export class Experiencia {
 
  
    id?:number;
    nombreEmpresa : string;
    logoEmpresa : string;           
    puesto : string;
    descripcion : string;
    fechaInicio : string; 
    fechaFin : string;
    esTrabajoActual : boolean;
    personaId : number;
  

   constructor(nombreEmpresa:string,  logoEmpresa:string, puesto:string, descripcion:string, fechaInicio:string, fechaFin:string, esTrabajoActual:boolean, personaId:number){
    this.nombreEmpresa = nombreEmpresa;
    this.logoEmpresa = logoEmpresa;
    this.puesto = puesto;
    this.descripcion = descripcion;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.esTrabajoActual = esTrabajoActual;
    this.personaId = personaId;
   } 

}
