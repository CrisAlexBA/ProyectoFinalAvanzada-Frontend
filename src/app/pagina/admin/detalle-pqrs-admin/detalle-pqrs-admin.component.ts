import { Component } from '@angular/core';
import {DetallesPQRSAdminDTO} from "../../../modelo/administrador/detalles-pqrsadmin-dto";

@Component({
  selector: 'app-detalle-pqrs-admin',
  templateUrl: './detalle-pqrs-admin.component.html',
  styleUrls: ['./detalle-pqrs-admin.component.css']
})
export class DetallePqrsAdminComponent {
  detallePqrsAdmin: DetallesPQRSAdminDTO;

    constructor() {
        this.detallePqrsAdmin = new DetallesPQRSAdminDTO();
    }
}
