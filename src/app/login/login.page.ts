import { Component, OnInit } from '@angular/core';
import { DatosService } from '../services/datos.service';
import { MensajesService } from '../services/mensajes.service';
import { NavController } from '@ionic/angular';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario;
  password;
  isTextFieldType: boolean;

  constructor(
    private datosService: DatosService,
    private mensajesService: MensajesService,
    private peticionesService: PeticionesService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {}

  ingresar() {
    console.log('Credenciales : ' + this.usuario + ' ' + this.password);
    this.peticionesService.getSesion(this.usuario, this.password).subscribe(
      (response: any) => {
        console.log(response);
        if (response.Result === true) {
          this.mensajesService.tostar(
            'Bienvenido!',
            'Ya puedes registrar incidencias.'
          );
          // this.menuCtrl.enable(true);
          // this.event.publish('userLogged', response.data);
          // this.datosService.idRol = parseInt(response.data.id_rol);
          // console.log( this.datosService.idRol);
          // this.datosService.idUsuario = response.data.id_usuario;
          this.navCtrl.navigateRoot('');
        } else {
          this.mensajesService.tostar(
            'UPS!',
            'Hubo un error al ingresar a tu cuenta.'
          );
        }
      },
      error => {
        console.log(error);
        this.mensajesService.tostarError('Error', error.name);
      }
    );
  }

  goToRegistro() {
    this.navCtrl.navigateForward('registro');
  }

  togglePasswordFieldType() {
    this.isTextFieldType = !this.isTextFieldType;
  }
}
