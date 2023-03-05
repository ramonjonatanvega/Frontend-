import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Experiencia } from '../model/experiencia';


@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  //URL = 'http://localhost:8080/experiencia/'
  URL = 'https://portfolio-jonatanvega.onrender.com/experiencia/'
  constructor(private httpClient: HttpClient) { }


  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
crear, actualizar o eliminar experiencias.
*/

  // trae la lista de experiencia del backend
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.URL + `lista`);
  }


  /*public listaPer(id: number): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.URL + `ver/${id}`);
  }*/

  //ver Experiencia por id
  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
  }

  //crea Experiencia
  public createExp(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.URL + `crear`, experiencia);
  }
  //editar Experiencia
  public edit(experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.URL + 'update', experiencia);
  }


  //elimina experiencia por id
  public deleteExp(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + 'borrar/' + id);
  }

  /*updateExp(experiencia: Experiencia): Observable<any> {
    const urlExpId = this.URL + `edit/${experiencia.id}`;
    return this.httpClient.put<any>(urlExpId, experiencia);
  }*/


}
