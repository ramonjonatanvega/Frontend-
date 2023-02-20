export class Proyecto {

    id? : number;
    nombre : string;
    imagen : string;           
    fecha : string;
    descripcion : string;
    url : string; 
    personaId : number;

   constructor(nombre:string, imagen:string, fecha:string, descripcion:string, url:string, personaId:number){
    this.nombre = nombre;
    this.imagen = imagen;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.url = url;
    this.personaId = personaId;
   } 

}
