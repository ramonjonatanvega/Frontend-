import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  url= 'http://localhost:8080/educacion/'
  constructor(private httpClient:HttpClient) { }


   /* Propiedad de tipo experiencia. Lo utilizo para que los inputs, del modal editar, contengan los valores de la
  card seleccionada.
  */
  educaciForm : Educacion = {
    id: null,
    nombreInstitucion: '',
    logoInstitucion: '',
    titulo: '',
    fechaInicio: '',
    fechaFin: '',
    esEstudioActual: false,
    personaId: 0,
   
  }



    /* A partir de acá, comienzan los métodos responsables de comunicarse con el backend y así, lograr traer
  crear, actualizar o eliminar experiencias.
  */
    public lista(): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url + `lista`);
    }

    public listaPer(id: number): Observable<Educacion[]>{
      return this.httpClient.get<Educacion[]>(this.url + `persona/${id}/lista`);
    }
 
    public detail(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.url + `detail/${id}`);
    }
  
    //crear educacion
    public crear(educacion: Educacion):Observable<any>{
      return this.httpClient.post<any>(this.url + `crear`, educacion);
      }
    
    //editar educacion  
    public edit(educacion: Educacion):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update', educacion);
      }
      

  //eliminar educacion
    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + 'borrar/' + id);
      }

  
}
  

