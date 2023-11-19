import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { LoginComponent } from './pagina/login/login.component';
import { RegistroComponent } from './pagina/registro/registro.component';
import { GestionPqrsComponent } from './pagina/gestion-pqrs/gestion-pqrs.component';
import { CrearPqrsComponent } from './pagina/crear-pqrs/crear-pqrs.component';
import { DetallePqrsComponent } from './pagina/detalle-pqrs/detalle-pqrs.component';
import { LoginGuard } from './guards/permiso.service';
import { RolesGuard } from './guards/roles.service';
import { GestionCitasComponent } from './pagina/gestion-citas/gestion-citas.component';
import { CrearCitaComponent } from './pagina/crear-cita/crear-cita.component';
import { DetalleCitaComponent } from './pagina/detalle-cita/detalle-cita.component';
import { DetalleConsultaComponent } from './pagina/detalle-consulta/detalle-consulta.component';
import { ModificarPacienteComponent } from './pagina/modificar-paciente/modificar-paciente.component';
import { CambiarPasswordComponent } from './pagina/cambiar-password/cambiar-password.component';
const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  //Paciente
  { path: "modificar-paciente", component: ModificarPacienteComponent},
  { path: "cambiar-password", component: CambiarPasswordComponent},

  { path: 'gestion-pqrs', component: GestionPqrsComponent },
  { path: 'crear-pqrs', component: CrearPqrsComponent },
  { path: 'detalle-pqrs/:codigo', component: DetallePqrsComponent },

  { path: 'gestion-citas', component: GestionCitasComponent },
  { path: 'crear-cita', component: CrearCitaComponent },
  { path: 'detalle-cita/:codigo', component: DetalleCitaComponent },
  { path: 'detalle-consulta/:codigo', component: DetalleConsultaComponent },
  //Comienzo de la enrutacion
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard] },
  { path: 'registro', component: RegistroComponent, canActivate: [LoginGuard] },
  //Direcciones ya especializadas por rol
  {
    path: 'gestion-pqrs',
    component: GestionPqrsComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    },
  },
  {
    path: 'crear-pqrs',
    component: CrearPqrsComponent,
    canActivate: [RolesGuard],
    data: {
      expectedRole: ['paciente'],
    },
  },
  {
    path: 'detalle-pqrs/:codigo',
    component: DetallePqrsComponent,
    canActivate: [RolesGuard],
    data: { expectedRole: ['paciente', 'admin'] },
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
