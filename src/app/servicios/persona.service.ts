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

  URL = 'http://localhost:8080/persona/'
  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.URL + `lista`);
  }

  public detail(id: number):Observable<Persona>{
  return this.httpClient.get<Persona>(this.URL + `detail/${id}`);
  }

  public crear(perso: Persona):Observable<any>{
    return this.httpClient.post<any>(this.URL + `crear`, perso);
    }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.URL + `borrar/${id}`);
    }

  public edit(perso: Persona):Observable<any>{
    return this.httpClient.put<any>(this.URL + 'update', perso);
    }

   updateExp(persona: Persona):Observable<any> {
    const urlExpId = this.URL + `editar/${persona.id}`;
    return this.httpClient.put<Persona>(urlExpId, persona);
    }
}
