import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  
  url="http://localhost:8080/persona/login";
  currentUserSubject: BehaviorSubject<any>;
  
  


  
  
  constructor (private http:HttpClient) { 
  this.currentUserSubject= new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem
    ('currentUser')||'{}'));
}





IniciarSesion(credenciales:any):Observable<any>{
   return this.http.post(this.url, credenciales).pipe(map(data=>{
   sessionStorage.setItem('currentUser', JSON.stringify(data));
    return data;
  }));
}
get usuarioAutenticado () {
  return this.currentUserSubject.value;
}


 logOut():void{
  window.sessionStorage.clear();
}

}
