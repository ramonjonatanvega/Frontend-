import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-acercademi',
  templateUrl: './acercademi.component.html',
  styleUrls: ['./acercademi.component.css']
})
export class AcercademiComponent implements OnInit {
  personas: Persona[]=[];
  constructor(public serviPersona:PersonaService) { }

  ngOnInit(): void {
    this.cargarPersona();   
  }

  cargarPersona():void{
    this.serviPersona.lista().subscribe(data => {this.personas=data});
  }

}
