import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

 

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidades: Habilidad[]=[]; //se llama al modelo que es un array


  constructor(private serviHabilidad: HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    
  }
  cargarHabilidad():void{
    this.serviHabilidad.lista().subscribe(data => {this.habilidades=data});
  }

  /*delete(id:number){
    if(id != undefined){
      this.serviHabilidad.delete(id).subscribe(
        data =>{
          alert("Habilidad eliminada correctamente")
          this.cargarHabilidad();
        }, err =>{
          alert("no se pudo eliminar la habilidad");
        })
    }}*/

    
}
