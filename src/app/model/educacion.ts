export class Educacion {
    id? : number;
    nombreInstitucion:string;
    logoInstitucion:string;           
    titulo:string;
    fechaInicio:string; 
    fechaFin:string;
    esEstudioActual:boolean;
    personaId:number;

   constructor(nombreInstitucion:string, logoInstitucion:string, titulo:string, fechaInicio:string, fechaFin:string, esEstudioActual:boolean, personaId:number){
    this.nombreInstitucion = nombreInstitucion;
    this.logoInstitucion = logoInstitucion;
    this.titulo = titulo;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.esEstudioActual = esEstudioActual;
    this.personaId = personaId;
   } 

}
