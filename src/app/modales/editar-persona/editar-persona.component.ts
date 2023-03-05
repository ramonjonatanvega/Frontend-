import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/servicios/image.service';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {
  persoForm: FormGroup;


  personas: Persona[] = [];

  constructor(private serviPersona: PersonaService,
    private formBuilder: FormBuilder, public imagenesService: ImageService

  ) {
    //Creamos el grupo de controles para el formulario 
    this.persoForm = this.formBuilder.group({
      //objetos definidos(declarados) para el formulario reactivo  persoForm 
      id: [1],
      nombre: [''],
      apellido: [''],
      banner: [''],
      banner1: [''],
      banner2: [''],
      banner3: [''],
      foto_perfil: [''],
      titulo: [''],
      ubicacion: [''],
      correo: [''],
      contrasenia: ['', [Validators.required, Validators.minLength(8)]],
      acerca_de: [''],

    })

  }

  get Contrasenia() {
    return this.persoForm.get('contrasenia');
  }


  ngOnInit(): void {
    this.cargarPersona();
  }


  //lista persona
  cargarPersona(): void {
    this.serviPersona.lista().subscribe(
      data => {
        this.personas = data;
      }
    )
  }

  //traer por id
  cargarDetalle(id: number) {
    this.serviPersona.detail(id).subscribe(
      {
        next: (data) => {
          this.persoForm.patchValue(data);
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
    this.serviPersona.edit(this.persoForm.value).subscribe(data => {
      alert("Nuevo Curso editado");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }



  borrar(id: number) {
    this.serviPersona.delete(id).subscribe(
      db => {
        alert("se pudo eliminar satisfactoriamente")
        this.cargarPersona();

      },
      error => {
        alert("No se pudo eliminar")
      })
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase. ojo  este metodo no esta siendo usado en editar
  uploadImage($event: any) {
    const name = 'Experiencia'
    this.imagenesService.uploadImage($event, name);
  }

}
