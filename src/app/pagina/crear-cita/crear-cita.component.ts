import { Component } from '@angular/core';
import { Alerta } from 'src/app/modelo/alerta';
import { DetallesCitaDTO } from 'src/app/modelo/paciente/detalles-cita-dto';
import { ClinicaService } from 'src/app/servicios/clinica.service';
import { PacienteService } from 'src/app/servicios/paciente.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  detallesCitaDTO: DetallesCitaDTO;
  alerta!: Alerta;
  
  especialidades: String[];
  medicos: String[];
  horas: String[]

  constructor(private pacienteService: PacienteService, private tokenService: TokenService, private clinicaService: ClinicaService){
    this.detallesCitaDTO = new DetallesCitaDTO;
    
    this.especialidades = [];
    this.cargarEspecialidades();
    this.medicos = [];
    this.cargarMedicos();
    this.horas = [];
    this.cargarHorarios();
  }

public agendarCita() {

}
public cargarEspecialidades(){
  this.clinicaService.listarEspecialidad().subscribe({
    next: (data) => {
      this.especialidades = data.respuesta;
    },
    error: (error) => {
      console.log(error);
    },
  });
}

public cargarMedicos(){
  
}

public cargarHorarios() {
  
}
}