import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  //url = 'http://localhost:8080/proyecto/'
  url = 'https://portfolio-jonatanvega.onrender.com/proyecto/'
  constructor(private httpClient: HttpClient) { }



  /* Propiedad de tipo proyecto. Lo utilizo para que los inputs, del modal editar, contengan los valores de la
  card seleccionada.
  */
  proyeForm: Proyecto = {
    id: null,
    nombre: '',
    imagen: '',
    fecha: '',
    descripcion: '',
    url: '',
    personaId: 0,

  }



  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
 crear, actualizar o eliminar proyecto.
 */

  // trae la lista de proyectos del backend
  public lista(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + `lista`);
  }

  /* public listaPer(id: number): Observable<Proyecto[]> {
     return this.httpClient.get<Proyecto[]>(this.url + `persona/${id}/lista`);
   }*/

  //ver proyecto por id 
  public detail(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
  }

  //crear un proyecto
  public crear(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, proyecto);
  }

  //eliminar un proyecto
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'borrar/' + id);
  }

  //editar un proyecto
  public edit(proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + 'update', proyecto);
  }


}


