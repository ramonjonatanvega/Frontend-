import { Injectable } from '@angular/core';
//esto es para suscribirse y que reciba respuesta de forma asincro
import { Observable } from 'rxjs';
//esto es para poder hacer repeticiones
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string="http://localhost:8080/persona/"
  constructor(private http:HttpClient) { }

  //Metodo observable que obtiene los datos
  obtenerDatos():Observable<any> {
    //Se llama al JSON con su path -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un JSON online
    return this.http.get<any>(this.url+"persona");
  }

}
