import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AlertaComponent } from './pagina/alerta/alerta.component';
import { UsuarioInterceptor } from './interceptor/usuario.interceptor';
import { ModificarPacienteComponent } from './pagina/modificar-paciente/modificar-paciente.component';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { DetalleConsultaComponent } from './pagina/detalle-consulta/detalle-consulta.component';
import { RecuperacionCuentaComponent } from './pagina/recuperacion-cuenta/recuperacion-cuenta.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
import {NgOptimizedImage} from "@angular/common";
import { CrearMedicoComponent } from './pagina/admin/crear-medico/crear-medico.component';
import {GestionarMedicosComponent} from "./pagina/admin/gestionar-medicos/gestionar-medicos.component";


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    LoginComponent,
    RegistroComponent,
    GestionPqrsComponent,
    CrearPqrsComponent,
    DetallePqrsComponent,
    AlertaComponent,
    ModificarPacienteComponent,
    GestionCitasComponent,
    DetalleCitaComponent,
    DetalleConsultaComponent,
    RecuperacionCuentaComponent,
    CrearCitaComponent,
    CambiarPasswordComponent,
    GestionarMedicosComponent,
    CrearMedicoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgOptimizedImage
    ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UsuarioInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
