import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {
  //Se inicializa el formulario.
  educaForm: FormGroup;
  id?:number;
  nombreInstitucion: string ='';
  logoInstitucion : string ='';
  titulo : string = '';
  fechaInicio: string ='';
  fechaFin : string = '';
  esEstudioActual : boolean = false;
  personaId : number = 1;

  //Se inyectan los servicios que se van a utilizar.
  constructor(private formBuilder : FormBuilder, private serviEducacion:EducacionService, public imagenesService: ImageService) { 
   
     //Se crea el formulario, con sus propiedades y validaciones.
     this.educaForm=this.formBuilder.group({
      id:[''],
      nombreInstitucion:['',[Validators.required]],
      logoInstitucion:['',[Validators.required]],     
      titulo:['',[Validators.required]],
      fechaInicio :['',[Validators.required]],
      fechaFin :['',[Validators.required]],
      esEstudioActual :[''],
      personaid: [1],
   })

  }

  ngOnInit(): void {
  }


  get NombreInstitucion() {
    return this.educaForm.get("nombreInstitucion");
  }

  get LogoInstitucion() {
    return this.educaForm.get("logoInstitucion");
  }

  get Titulo() {
    return this.educaForm.get("titulo");
  }

  get FechaInicio() {
    return this.educaForm.get("fechaInicio");
  }

  get FechaFin() {
    return this.educaForm.get("fechaFin");
  }

  get EsEstudioActual() {
    return this.educaForm.get("esEstudioActual");
  }


  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end. */
  crearNuevoCurso():void {
    /*Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.*/
    this.educaForm.value.logoInstitucion = this.imagenesService.url;
    this.serviEducacion.crear(this.educaForm.value).subscribe(data => {
      alert("Nuevo Curso agregado");
      this.clearForm();
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //esto es para limpiar los campos del formulario
  limpiar(): void{
    this.educaForm.reset();
  }

  clearForm() {
    this.imagenesService.url = "";
    this.educaForm.reset({});
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Educacion';
    this.imagenesService.uploadImage($event, name);
  }

}
