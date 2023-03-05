import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {



  //url= 'http://localhost:8080/skill/'
  url = 'https://portfolio-jonatanvega.onrender.com/skill/'
  constructor(private httpClient: HttpClient) { }



  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar habilidad.
  */

  // trae la lista de habilidad del backend
  public lista(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.url + `lista`);
  }

  /*public listaPer(id: number): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + `persona/${id}/lista`);
  }*/

  //ver habilidad por id 
  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);
  }

  //crear una habilidad
  public crear(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.url + `crear`, habilidad);
  }

  //modificar una habilidad
  public edit(habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.url + 'update', habilidad);
  }

  //eliminar una habilidad
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'borrar/' + id);
  }



}