import { Injectable } from '@angular/core';
import {ItemMedicoDTO} from "../modelo/administrador/item-medico-dto";

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  medicos: ItemMedicoDTO[];

  constructor() {
    this.medicos = [];

    this.medicos.push({ codigo: 1, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 2, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 3, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'INACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 4, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 6, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 7, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 8, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 9, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });
    this.medicos.push({ codigo: 10, cedula: '123456', nombre: 'Pepito ramirez', estadoUsuario: 'ACTIVO',
      especialidad: 'Medicina general' });

  }
  public listar(): ItemMedicoDTO[] {
    return this.medicos;
  }
  public obtener(codigo: number): ItemMedicoDTO | undefined{
    return this.medicos.find(medicos => medicos.codigo == codigo);
  }
  public crear(medicos : ItemMedicoDTO){
    let codigo = this.medicos.length + 1;
    this.medicos.push({ codigo: codigo, cedula:medicos.cedula, nombre: medicos.nombre, estadoUsuario: 'ACTIVO',
      especialidad: medicos.especialidad});
  }
}
