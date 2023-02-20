import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  loginForm: FormGroup;
 
  constructor( private formBuilder: FormBuilder,
     private autenticacionService:AutenticacionService, 
     private ruta:Router){ 
    this.loginForm = this.formBuilder.group(
      {
      correo:['', [Validators.required, Validators.email] ],
      contrasenia:['',[Validators.required, Validators.minLength(8)]],
     
   })
}




ngOnInit(): void {}

get Correo() {
  return this.loginForm.get('correo')
}

get Contrasenia(){
  return this.loginForm.get('contrasenia');
  }

 // onEnviar(event: Event) {
 // event.preventDefault;
     // this.autenticacionService.IniciarSesion(this.loginForm.value).subscribe(data=>{
       // this.ruta.navigate(['/dashboard'])       })
      // }
  
      //onEnviar
      onEnviar(event: Event){
        // Detenemos la propagación o ejecución del compotamiento submit de un form
        event.preventDefault; 
        if (this.loginForm.valid) {
          //console.log(JSON.stringify(this.form.value));
          this.autenticacionService.IniciarSesion(this.loginForm.value).subscribe(data => {
            console.log("DATA: " + JSON.stringify(data));
           
            // alert("hola" + data.id);
            if (data) {  
              alert("Estas logueado");        
              this.ruta.navigate(['/dashboard']);
            } else {alert(" ACCESO INCORRECTO");
            alert("error al iniciar sesion");
          }
  
        }, error => {
          alert("Error");
        })
  
      } 
    }

    }

    

  

 


 
 

