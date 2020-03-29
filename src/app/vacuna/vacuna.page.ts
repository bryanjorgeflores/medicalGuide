import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NavController } from "@ionic/angular";
import { HttpClient } from "@angular/common/http";
import { URL_SERVICES } from "../config/url.services";

@Component({
  selector: "app-vacuna",
  templateUrl: "./vacuna.page.html",
  styleUrls: ["./vacuna.page.scss"]
})
export class VacunaPage implements OnInit {
  selector = {
    title: '',
    selector: ''
  };
  vacuna: any;
  automaticClose = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.selector = this.router.getCurrentNavigation().extras.state.vacuna;
    console.log(this.selector);
    // this.declararVacunas();
  }

  declararVacunas() {
    const url = URL_SERVICES + "inmunization";
    this.http.get(url).subscribe((data: any) => {
      // const filtrado = data.filter(this.esIgual);
      this.vacuna = JSON.parse(JSON.stringify(data));
      this.filtrarVacuna();
    });
  }

  filtrarVacuna() {
    // console.log("ES IGUAL A ", this.selector, element);
    // return (element = this.selector);
    this.vacuna = this.vacuna.filter((item) => {
      return item.selector === this.selector.selector;
    });
  }

  toggleSection(index) {
    this.vacuna[index].open = !this.vacuna[index].open;

    if (this.automaticClose && this.vacuna[index].open) {
      this.vacuna
        .filter((item, itemIndex) => itemIndex !== index)
        .map(item => (item.open = false));
    }
  }

  toggleItem(index, childIndex) {
    this.vacuna[index].children[childIndex].open = !this.vacuna[index].children[
      childIndex
    ].open;
  }
}
