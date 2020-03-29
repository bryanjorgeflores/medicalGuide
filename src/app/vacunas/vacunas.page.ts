import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { URL_SERVICES } from '../config/url.services';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.page.html',
  styleUrls: ['./vacunas.page.scss']
})
export class VacunasPage implements OnInit {
  tipo: string;
  seccion1 = true;
  seccion2 = true;
  vacunas: any;
  vacunasFake = [
    { title: 'Vacuna BGC: Bacilo de Calmete - Guérin', selector: 'bcg' },
    { title: 'Vacuna contra Hepatitis B  (HvB) pediátrico', selector: '' },
    { title: 'Vacuna contra la Hepatitis B (HvB) adulto', selector: '' },
    { title: 'Vacuna combinada Pentavalente (DPT+HvB+Hib)', selector: '' },
    { title: 'Vacuna Toxoide Diftotétano Pediátrico (Dt)', selector: '' },
    {
      title: 'Vacuna contra Haemophilus Influenzae tTpo B (Hib)',
      selector: ''
    },
    { title: 'Vacuna Polio Inactivada (IPV o Salk)', selector: '' },
    { title: 'Vacuna Oral de Poliovirus (bAPO o SABIN)', selector: '' },
    { title: 'Vacuna contra Rotavirus', selector: '' },
    { title: 'Vacuna Antineumocócica', selector: '' },
    { title: 'Vacuna contra Sarampión, Rubeola y Paperas (SPR)', selector: '' },
    { title: 'Vacuna contra la Sarampión y Rubeola (SR)', selector: '' },
    { title: 'Vacuna contra la Varicela', selector: '' },
    { title: 'Vacuna Anti Amarilica (AMA)', selector: 'ama' },
    { title: 'Vacuna contra Difteria, Pertusis y Tetanos (DPT)', selector: '' },
    { title: 'Vacuna contra dT Adulto (Tétanos y Difteria)', selector: '' },
    { title: 'Vacuna combinada dTpa (Solo para Gestantes)', selector: '' },
    { title: 'Vacuna contra el Virus del Papiloma Humano (VPH)', selector: '' },
    { title: 'Vacuna contra la Influenza (Pediátrico)', selector: '' },
    { title: 'Vacuna contra la Influenza  (Adulto)', selector: '' }
  ];
  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.tipo = this.router.getCurrentNavigation().extras.state.tipo;
    console.log(this.tipo);
    if (this.tipo === 'Inmunizaciones') {
      this.declararVacunas();
      this.seccion1 = false;
    } else {
      this.seccion2 = false;
    }
  }

  declararVacunas() {
    const url = URL_SERVICES + "inmunization";
    this.http.get(url).subscribe((data: any) => {
      // const filtrado = data.filter(this.esIgual);
      this.vacunas = JSON.parse(JSON.stringify(data));
      // this.filtrarVacuna();
    });
  }

  cargarVacuna(vacuna) {
    console.log(vacuna);
    const data: NavigationExtras = {
      state: {
        vacuna: vacuna
      }
    };
    this.navCtrl.navigateForward('vacuna', data);
  }
}
