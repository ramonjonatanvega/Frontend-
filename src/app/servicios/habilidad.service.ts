import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {

 

    url= 'http://localhost:8080/skill/'
  constructor(private httpClient:HttpClient) { }



  /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar experiencias.
  */
 public lista(): Observable<Habilidad[]>{
  return this.httpClient.get<Habilidad[]>(this.url + `lista`);
}

public listaPer(id: number): Observable<Habilidad[]>{
  return this.httpClient.get<Habilidad[]>(this.url + `persona/${id}/lista`);
}

public detail(id: number):Observable<Habilidad>{
  return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);
  }

public crear(habilidad: Habilidad):Observable<any>{
  return this.httpClient.post<any>(this.url + `crear`, habilidad);
}

public edit(habilidad: Habilidad):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update', habilidad);
  }

  
public delete(id: number):Observable<any>{
  return this.httpClient.delete<any>(this.url + 'borrar/' + id);
}

/*public edit(experiencia: Experiencia):Observable<any>{
  return this.httpClient.put<any>(this.url + 'update', experiencia);
  }*/

}