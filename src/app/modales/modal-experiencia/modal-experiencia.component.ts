import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {
  //Se inicializa el formulario.
  experienForm: FormGroup;
  id?: number;
  nombreEmpresa: string;
  logoEmpresa: string;
  puesto: string;
  descripcion: string;
  fechaInicio: string;
  fechaFin: string;
  esTrabajoActual: boolean = false;
  personaId: number = 1;


  //Se inyectan los servicios que se van a utilizar.
  constructor(private formBuilder: FormBuilder, private serviExperiencia: ExperienciaService, public imagenesService: ImageService) {

    //Se crea el formulario, con sus propiedades y validaciones.
    this.experienForm = this.formBuilder.group({
      nombreEmpresa: ['', [Validators.required]],
      logoEmpresa: ['', [Validators.required]],
      puesto: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      esTrabajoActual: [''],
      personaid: [1],
    })

  }

  ngOnInit(): void { }


  get NombreEmpresa() {
    return this.experienForm.get("nombreEmpresa");
  }
  get LogoEmpresa() {
    return this.experienForm.get("logoEmpresa");
  }

  get Puesto() {
    return this.experienForm.get("puesto");
  }

  get Descripcion() {
    return this.experienForm.get("descripcion");
  }

  get FechaInicio() {
    return this.experienForm.get("fechaInicio");
  }
  get FechaFin() {
    return this.experienForm.get("fechaFin");
  }

  get EsTrabajoActual() {
    return this.experienForm.get("esTrabajoActual");
  }

  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de experiencia y posteriormente, del back-end. */
  onCreate(): void {
    /*
   Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, 
   junto con los demás valores del formulario.
   */
    this.experienForm.value.logoEmpresa = this.imagenesService.url;
    this.serviExperiencia.createExp(this.experienForm.value).subscribe(data => {
      alert("Experiencia agregada");
      this.clearForm();
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //esto es para limpiar los campos del formulario
  limpiar(): void {
    this.experienForm.reset();
  }

  clearForm() {
    this.imagenesService.url = "";
    this.experienForm.reset({});
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Experiencia';
    this.imagenesService.uploadImage($event, name);
  }

}


