import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MensajeDTO } from '../modelo/mensaje-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  private authURL = "http://localhost:8080/api/auth";
  constructor(private http:HttpClient) { }

  public listarmedicos():Observable<MensajeDTO>{
    return this.http.get<MensajeDTO>(`${this.authURL}/listarMedicos`);
    }
}
