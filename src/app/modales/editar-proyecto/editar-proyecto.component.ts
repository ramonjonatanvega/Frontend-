import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {
  proyecForm: FormGroup;


  proyectos: Proyecto[] = [];

  constructor(public serviProyecto: ProyectoService,
    private formBuilder: FormBuilder,
    public imagenesService: ImageService

  ) {


    //creamos el grupo de controles para el formulario
    this.proyecForm = this.formBuilder.group({
      id: [''],
      nombre: [''],
      imagen: [''],
      fecha: [''],
      descripcion: [''],
      url: [''],
      personaid: [1],
    })

  }


  ngOnInit(): void {
    this.cargarProyecto();
  }


  cargarProyecto(): void {
    this.serviProyecto.lista().subscribe(
      data => {
        this.proyectos = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviProyecto.detail(id).subscribe(

      {
        next: (data) => {
          this.proyecForm.patchValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }

  guardar(): void {

    this.serviProyecto.edit(this.proyecForm.value).subscribe(data => {
      alert(" Proyecto Editado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }


  borrar(id: number) {
    this.serviProyecto.delete(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarProyecto();

      },
      error => {
        alert("No se pudo eliminar")
      })
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase. ojo este metodo no esta siendo usado en editar
  uploadImage($event: any) {
    const name = 'Proyecto';
    this.imagenesService.uploadImage($event, name);
  }

}
