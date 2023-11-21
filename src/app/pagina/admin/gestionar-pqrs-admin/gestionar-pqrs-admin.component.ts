import { Component } from '@angular/core';
import {ItemPQRSDTO} from "../../../modelo/item-pqrsdto";

@Component({
  selector: 'app-gestionar-pqrs-admin',
  templateUrl: './gestionar-pqrs-admin.component.html',
  styleUrls: ['./gestionar-pqrs-admin.component.css']
})
export class GestionarPqrsAdminComponent {
  pqrs: ItemPQRSDTO[];


  constructor() {
    this.pqrs = [];
    this.obtenerPqrs();
  }

  private obtenerPqrs() {
    this.pqrs.push({codigo: 1, fecha: '2021-05-01', motivo: 'Motivo 1', estadoPQRS: 'EN_PROCESO'});
    this.pqrs.push({codigo: 2, fecha: '2021-05-02', motivo: 'Motivo 2', estadoPQRS: 'ARCHIVADO'});
    this.pqrs.push({codigo: 3, fecha: '2021-05-03', motivo: 'Motivo 3', estadoPQRS: 'RESUELTO'});
    this.pqrs.push({codigo: 4, fecha: '2021-05-04', motivo: 'Motivo 4', estadoPQRS: 'NUEVO'});
  }
}
