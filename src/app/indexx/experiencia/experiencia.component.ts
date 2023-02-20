import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
/*import { PortfolioService } from 'src/app/servicios/portfolio.service';*/

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[]=[];


  constructor(/*private portfolioService:PortfolioService*/private serviExperiencia:
  ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();
    
  }

  cargarExperiencia():void{
    this.serviExperiencia.lista().subscribe(data => {this.experiencias=data});
  }

 


}
