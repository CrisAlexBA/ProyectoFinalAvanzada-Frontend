import { Component } from '@angular/core';
import {ItemMedicoDTO} from "../../../modelo/administrador/item-medico-dto";
import {MedicosService} from "../../../servicios/medicos.service";

@Component({
  selector: 'app-crear-medico',
  templateUrl: './gestionar-medicos.component.html',
  styleUrls: ['./gestionar-medicos.component.css']
})
export class GestionarMedicosComponent {
  medicos: ItemMedicoDTO[];
  constructor(private medicosService: MedicosService){
    this.medicos = medicosService.listar();
  }

}
