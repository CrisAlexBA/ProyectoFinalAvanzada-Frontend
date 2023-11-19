import { Component } from '@angular/core';
import { NewPasswordDTO } from 'src/app/modelo/new-password-dto';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent {

  newPasswordDTO: NewPasswordDTO;

  constructor(){
    this.newPasswordDTO = new NewPasswordDTO;
  }

  public sonIguales(): boolean {
    return (
      this.newPasswordDTO.newPassword ==
      this.newPasswordDTO.confirmPassword
    );
  }
}
