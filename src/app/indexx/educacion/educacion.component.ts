import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/educacion.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educaciones: any=[]
  
  //se importa el servicio Educacion
  constructor(private serviEducacion:EducacionService) { }

  ngOnInit(): void {
    this.cargarEducacion();
  }

  cargarEducacion():void{
    this.serviEducacion.lista().subscribe(data => {this.educaciones=data});
  }

}
