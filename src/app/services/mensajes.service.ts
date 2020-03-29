import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, ToastController, NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private navCtrl: NavController) { }

  async alertar(header, message, rutaOk, rutaCancel) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this.navCtrl.navigateForward(rutaCancel);
          }
        }, {
          text: 'Ingresar',
          handler: () => {
            this.navCtrl.navigateForward(rutaOk);
          }
        }
      ]
    });
    await alert.present();
  }

  async tostar(header, message) {
    const toast = await this.toastCtrl.create({
      header,
      message,
      position: "bottom",
      duration: 3000,
      buttons: [
        {
          text: "Ok",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    toast.present();
  }

  async tostarError(header, message) {
    const toast = await this.toastCtrl.create({
      header,
      message,
      position: "bottom",
      duration: 3000,
      color: 'danger',
      buttons: [
        {
          text: "Ok",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    toast.present();
  }
}
