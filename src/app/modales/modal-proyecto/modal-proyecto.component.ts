import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImageService } from 'src/app/servicios/image.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-modal-proyecto',
  templateUrl: './modal-proyecto.component.html',
  styleUrls: ['./modal-proyecto.component.css']
})
export class ModalProyectoComponent implements OnInit {
  //Se inicializa el formulario.
  proyecForm: FormGroup;
  id?: number;
  nombre: string = '';
  imagen: string = '';
  fecha: string = '';
  descripcion: string = '';
  url: string = '';
  personaId: number = 1;



  //Se inyectan los servicios que se van a utilizar.
  constructor(private formBuilder: FormBuilder, private serviProyecto: ProyectoService, public imagenesService: ImageService) {

    //creamos el grupo de controles para el formulario
    this.proyecForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      imagen: ['', [Validators.required,]],
      fecha: ['', [Validators.required]],
      url: ['', [Validators.required]],
      descripcion: ['', [Validators.required,]],
      personaid: [1],
    })

  }

  ngOnInit(): void { }

  //metodos para los formularios Reactivos
  get Nombre() {
    return this.proyecForm.get("nombre");
  }

  get Imagen() {
    return this.proyecForm.get("imagen");
  }

  get Fecha() {
    return this.proyecForm.get("fecha");
  }


  get Url() {
    return this.proyecForm.get("url");
  }

  get Descripcion() {
    return this.proyecForm.get("descripcion");
  }



  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end.*/
  crearNuevoProyecto(): void {
    /*
    Acá se obtiene la propiedad y valor de imgCurso y se introduce la url obtenida de la imagen, proveniente de Firebase y se la manda a la base de datos, 
    junto con los demás valores del formulario.
    */
    this.proyecForm.value.imagen = this.imagenesService.url;
    this.serviProyecto.crear(this.proyecForm.value).subscribe(data => {
      alert("Nuevo proyecto agregado");
      this.clearForm();
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //esto es para limpiar los campos del formulario
  limpiar(): void {
    this.proyecForm.reset();
  }


  clearForm() {
    this.imagenesService.url = "";
    this.proyecForm.reset({});
  }

  //Esta función obtiene la imagen del input de tipo File, para, posteriormente, mandarla a Firebase.
  uploadImage($event: any) {
    const name = 'Proyecto';
    this.imagenesService.uploadImage($event, name);
  }
}