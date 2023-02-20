import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: any;

  constructor(private serviProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();

  }

  cargarProyecto():void{
    this.serviProyecto.lista().subscribe(data => {
      this.proyectos=data
    });    
  }

}
