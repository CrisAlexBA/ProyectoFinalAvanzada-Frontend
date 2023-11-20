import { Component } from '@angular/core';
import {RegistroMedicoDTO} from "../../../modelo/administrador/registro-medico-dto";

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.css']
})
export class CrearMedicoComponent {
    registroMedicoDTO: RegistroMedicoDTO;
    archivos!:FileList;

    alerta: any;
    foto: string = 'assets/img/user-doctor-solid.svg';
    ciudades: string[];
    especialidades: string[];

    constructor() {
        this.registroMedicoDTO = new RegistroMedicoDTO();

        this.ciudades = [];
        this.cargarCiudades();

        this.especialidades = [];
        this.cargarEspecialidades();
    }

    public registrar(){
        if(this.archivos != null && this.archivos.length > 0){
            console.log(this.registroMedicoDTO);
        }else{
            console.log("Debe cargar una foto");
        }
    }

    onFileChange(event: any){
        if (event.target.files.length > 0) {
            const files = event.target.files;
            console.log(files);
            this.archivos = event.target.files;
        }
    }

    private cargarCiudades() {
        this.ciudades.push("Armenia");
        this.ciudades.push("Calarcá");
        this.ciudades.push("Pereira");
        this.ciudades.push("Manizales");
        this.ciudades.push("Medellín");
    }

    private cargarEspecialidades() {
        this.especialidades.push("Medicina General");
        this.especialidades.push("Pediatría");
        this.especialidades.push("Ginecología");
        this.especialidades.push("Oftalmología");
    }
}
