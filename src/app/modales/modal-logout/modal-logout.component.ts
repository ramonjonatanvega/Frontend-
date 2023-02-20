import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-modal-logout',
  templateUrl: './modal-logout.component.html',
  styleUrls: ['./modal-logout.component.css']
})
export class ModalLogoutComponent implements OnInit {

  constructor(private autenticacionService:AutenticacionService, private ruta:Router) { }

  ngOnInit(): void {
  }

  onLogOut(): void{
    this.autenticacionService.logOut()
    this.ruta.navigate(['/index'])
    window.location.reload();
  }
 
  
}
