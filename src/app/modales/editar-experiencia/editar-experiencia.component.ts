
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Experiencia } from 'src/app/model/experiencia';

import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ImageService } from 'src/app/servicios/image.service';


@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {
  experienForm: FormGroup;


  experiencias: Experiencia[] = [];

  constructor(public serviExperiencia: ExperienciaService,
    private formBuilder: FormBuilder,
    public imagenesService: ImageService
  ) {


    //Creamos el grupo de controles para el formulario 
    this.experienForm = this.formBuilder.group({
      id: [''],
      nombreEmpresa: [''],
      logoEmpresa: [''],
      puesto: [''],
      descripcion: [''],
      fechaInicio: [''],
      fechaFin: [''],
      esTrabajoActual: [''],
      personaId: [],
    })

  }


  
  ngOnInit(): void {
    this.cargarExperiencia();
  }


  //lista experiencia
  cargarExperiencia(): void {
    this.serviExperiencia.lista().subscribe(
      data => {
        this.experiencias = data;
      }
    )
  }

  //traer por id
  cargarDetalle(id: number) {
    this.serviExperiencia.detail(id).subscribe(
      {
        next: (data) => {
          this.experienForm.patchValue(data);
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
      Acá se obtiene la propiedad de logoEmpresa y valor del modal ubicado en el servicio de experiencia y se introduce la url obtenida de la imagen, 
      proveniente de Firebase y se la manda a la base de datos, junto con los demás valores del formulario.
      👇 */
  guardar(): void {
    this.serviExperiencia.edit(this.experienForm.value).subscribe(data => {
      alert("Nuevo Curso editado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }



  //borrar la experiencia
  borrar(id: number) {
    this.serviExperiencia.deleteExp(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarExperiencia();

      },
      error => {
        alert("No se pudo eliminar")
      })
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Experiencia'
    this.imagenesService.uploadImage($event, name);
  }



}