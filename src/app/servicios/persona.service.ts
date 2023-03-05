import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  reset() {
    throw new Error('Method not implemented.');
  }

  //URL = 'http://localhost:8080/persona/'
  URL = 'https://portfolio-jonatanvega.onrender.com/persona/'
  constructor(private httpClient: HttpClient) { }

  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar persona.
  */


  // trae la lista de Persona del backend
  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.URL + `lista`);
  }

  //ver persona por id
  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  //crear una persona
  public crear(perso: Persona): Observable<any> {
    return this.httpClient.post<any>(this.URL + `crear`, perso);
  }

  //eliminar  persona  
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
  }

  //editar persona  
  public edit(perso: Persona): Observable<any> {
    return this.httpClient.put<any>(this.URL + 'update', perso);
  }

  /* updateExp(persona: Persona): Observable<any> {
     const urlExpId = this.URL + `editar/${persona.id}`;
     return this.httpClient.put<Persona>(urlExpId, persona);
   }*/
}
