import { Component } from '@angular/core';
import {ItemCitaMedicoDTO} from "../../../modelo/medico/item-cita-medico-dto";

@Component({
  selector: 'app-gestionar-citas',
  templateUrl: './gestionar-citas.component.html',
  styleUrls: ['./gestionar-citas.component.css']
})
export class GestionarCitasComponent {
    fecha: any;
    citas: ItemCitaMedicoDTO[];
    cantCitas: number = 0;

    constructor() {
        this.citas = [];
        this.obtenerCitas();
    }


    private obtenerCitas() {
        this.citas.push({codigoCita: 1, nombrePaciente: 'Paciente 1', fecha: '2021-05-01', hora: '10:00', estadoCita: 'PROGRAMADA'});
        this.citas.push({codigoCita: 2, nombrePaciente: 'Paciente 2', fecha: '2021-05-02', hora: '11:00', estadoCita: 'COMPLETADA'});
        this.citas.push({codigoCita: 3, nombrePaciente: 'Paciente 3', fecha: '2021-05-03', hora: '12:00', estadoCita: 'CANCELADO'});

        this.cantCitas = this.citas.length;
    }
}
