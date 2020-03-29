import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { NavigationExtras } from "@angular/router";
import { DatosService } from "../services/datos.service";
import { MensajesService } from "../services/mensajes.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  constructor(
    private navCtrl: NavController,
    private datosService: DatosService,
    private mensajesService: MensajesService
  ) {}

  ngOnInit() {}

  abrirVacunas(tipo) {
    console.log(tipo);
    const data: NavigationExtras = {
      state: {
        tipo
      }
    };
    this.navCtrl.navigateForward("vacunas", data);
  }

  abrirSeccion(pagina) {
    if (pagina === "home") {
      if (this.datosService.usuario.id === 0) {
        this.mensajesService.alertar(
          "Alerta",
          "Debe ingresar a su cuenta para realizar esta acción.",
          "login",
          ""
        );
      } else {
        this.navCtrl.navigateForward('home');
      }
    } else {
      this.navCtrl.navigateForward(pagina);
    }
  }
}
