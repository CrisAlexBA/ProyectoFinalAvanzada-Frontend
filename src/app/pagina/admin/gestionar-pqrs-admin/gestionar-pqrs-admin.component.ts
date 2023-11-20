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

  }
}
