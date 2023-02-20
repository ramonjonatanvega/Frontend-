import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  habiliForm: FormGroup;


  habilidades: Habilidad[] = [];

  constructor(private serviHabilidad: HabilidadService,
    private formBuilder: FormBuilder) {

    //creamos el grupo de controles para el formulario
    this.habiliForm = this.formBuilder.group({
      id: [''],
      nombreHabilidad: [''],
      porcentaje: [''],
      personaid: [],
    })

  }


  ngOnInit(): void {
    this.cargarHabilidad();
  }



  cargarHabilidad(): void {
    this.serviHabilidad.lista().subscribe(
      data => {
        this.habilidades = data;
      }
    )
  }

  cargarDetalle(id: number) {
    this.serviHabilidad.detail(id).subscribe(
      {
        next: (data) => {
          this.habiliForm.patchValue(data);
        },
        error: (e) => {
          console.error(e)
          alert("error al modificar")
        },
        complete: () => console.info('complete aqui')
      }
    )
  }


  //Se obtienen todos los valores guardados en el Formgroup=habiliForm, y se los envía a la base de datos.
  guardar() {
    this.serviHabilidad.edit(this.habiliForm.value).subscribe(data => {
      alert("Habilidad  modificada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }


  borrar(id: number) {
    this.serviHabilidad.delete(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarHabilidad();

      },
      error => {
        alert("No se pudo eliminar")
      })
  }

}
