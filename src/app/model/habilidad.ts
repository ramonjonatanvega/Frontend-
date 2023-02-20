export class Habilidad {
    id?: number;
    nombreHabilidad: string;
    porcentaje: string;
    personaId:number;
    

    constructor( nombreHabilidad:string, porcentaje:string, personaId: number ){
    this.nombreHabilidad = nombreHabilidad;
    this.porcentaje = porcentaje;
    this.personaId = personaId;
}
}