import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-modal-habilidad',
  templateUrl: './modal-habilidad.component.html',
  styleUrls: ['./modal-habilidad.component.css']
})
export class ModalHabilidadComponent implements OnInit {
  //Se inicializa el formulario.
  habiliForm: FormGroup;
  id?: number;
  nombreHabilidad: string = '';
  porcentaje: string = '';
  personaId: number = 1;

  //Se inyectan los servicios que se van a utilizar.
  constructor(private formBuilder: FormBuilder, private serviHabilidad: HabilidadService) {

    //Se crea el formulario, con sus propiedades y validaciones.
    this.habiliForm = this.formBuilder.group({
      nombreHabilidad: ['', [Validators.required]],
      porcentaje: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
      personaid: [1],
    })

  }

  ngOnInit(): void { }

  //declarar para los campos
  get NombreHabilidad() {
    return this.habiliForm.get("nombreHabilidad");
  }

  get Porcentaje() {
    return this.habiliForm.get("porcentaje");
  }



  /*Esta función sirve para mandar los valores del formulario, a la base de datos. Pasando a través del servicio de educación y posteriormente, del back-end.*/
  crearHabilidad(): void {
    this.serviHabilidad.crear(this.habiliForm.value).subscribe(data => {
      alert("Nueva habilidad dura agregada");
      window.location.reload();
    }, err => {
      alert("Se ha producido un error, intente nuevamente");
    });
  }

  //esto es para limpiar los campos del formulario
  limpiar(): void {
    this.habiliForm.reset();
  }

}
