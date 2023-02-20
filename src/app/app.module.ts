import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { IndexComponent } from './index/index.component';
import { NavbarComponent } from './indexx/navbar/navbar.component';
import { BannercarouselComponent } from './indexx/bannercarousel/bannercarousel.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login.component';
import { AcercademiComponent } from './indexx/acercademi/acercademi.component';
import { ExperienciaComponent } from './indexx/experiencia/experiencia.component';
import { EducacionComponent } from './indexx/educacion/educacion.component';
import { HabilidadesComponent } from './indexx/habilidades/habilidades.component';
import { ProyectosComponent } from './indexx/proyectos/proyectos.component';
import { NavbarrrComponent } from './dashboardd/navbarrr/navbarrr.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BannerrrComponent } from './dashboardd/bannerrr/bannerrr.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './indexx/footer/footer.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion.component';
import { ModalExperienciaComponent } from './modales/modal-experiencia/modal-experiencia.component';
import { ModalPersonaComponent } from './modales/modal-persona/modal-persona.component';
import { ModalHabilidadComponent } from './modales/modal-habilidad/modal-habilidad.component';
import { ModalProyectoComponent } from './modales/modal-proyecto/modal-proyecto.component';
import { PortfolioService } from './servicios/portfolio.service';
import { ModalLogoutComponent } from './modales/modal-logout/modal-logout.component';
import { EditarExperienciaComponent } from './modales/editar-experiencia/editar-experiencia.component';
import { EditarEducacionComponent } from './modales/editar-educacion/editar-educacion.component';
import { EditarHabilidadComponent } from './modales/editar-habilidad/editar-habilidad.component';
import { EditarProyectoComponent } from './modales/editar-proyecto/editar-proyecto.component';
import { EditarPersonaComponent } from './modales/editar-persona/editar-persona.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';





@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
    BannercarouselComponent,
    ModalLoginComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    NavbarrrComponent,
    DashboardComponent,
    BannerrrComponent,
    ErrorComponent,
    FooterComponent,
    ModalEducacionComponent,
    ModalExperienciaComponent,
    ModalPersonaComponent,
    ModalHabilidadComponent,
    ModalProyectoComponent,
    ModalLogoutComponent,
    EditarExperienciaComponent,
    EditarEducacionComponent,
    EditarHabilidadComponent,
    EditarProyectoComponent,
    EditarPersonaComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
   
   
    
    
  ],
  providers: [PortfolioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
