export class Persona {

    id? : number;
    nombre : string;
    apellido : string;           
    banner : string;
    banner1 : string;
    banner2 : string;
    banner3 : string;
    foto_perfil : string;
    titulo : string;
    ubicacion : string;
    correo:string;
    contrasenia:string;
    acerca_de : string;
    
 
    

   constructor(nombre:string, apellido:string, banner:string, banner1:string, banner2:string, banner3:string, foto_perfil:string, titulo:string, ubicacion:string, correo:string, contrasenia:string, acerca_de:string ){
    this.nombre = nombre;
    this.apellido = apellido;
    this.banner = banner;
    this.banner1 = banner1;
    this.banner2 = banner2;
    this.banner3 = banner3;
    this.foto_perfil = foto_perfil;
    this.titulo = titulo;
    this.ubicacion = ubicacion;
    this.correo = correo;
    this.contrasenia = contrasenia;
    this.acerca_de = acerca_de;
   
   
   } 

}
