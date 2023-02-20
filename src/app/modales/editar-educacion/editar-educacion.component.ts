import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ImageService } from 'src/app/servicios/image.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educaForm: FormGroup;
  nombreInstitucion: string = '';
  logoInstitucion: string = '';
  titulo: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  esEstudioActual: boolean;
  personaid: number;


  educaciones: Educacion[] = [];
  constructor(public serviEducacion: EducacionService, private formBuilder: FormBuilder, public imagenesService: ImageService) {

    //Creamos el grupo de controles para el formulario 
    this.educaForm = this.formBuilder.group({
      id: [''],
      nombreInstitucion: [''],
      logoInstitucion: ['', [Validators.required]],
      titulo: [''],
      fechaInicio: [''],
      fechaFin: [''],
      esEstudioActual: [''],
      personaid: [],
    })
  }

  get LogoInstitucion() {
    return this.educaForm.get("logoInstitucion");
  }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion(): void {
    this.serviEducacion.lista().subscribe(
      data => {
        this.educaciones = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviEducacion.detail(id).subscribe(
      {
        next: (data) => {
          this.educaForm.patchValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }


  /*
   Acá se obtiene la propiedad de imgCurso y valor del modal ubicado en el servicio de educación y se introduce la url obtenida de la imagen, 
   proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.
   */
  guardar(): void {
    this.serviEducacion.edit(this.educaForm.value).subscribe(data => {
      alert("Nuevo Curso editado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }






  borrar(id: number) {
    this.serviEducacion.delete(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarEducacion()
      },
      error => {
        alert("No se pudo eliminar")
      })
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Educacion';
    this.imagenesService.uploadImage($event, name);
  }

}
