import { Component, OnInit } from '@angular/core';
import {
  recoveryFerrousSulfate,
  preventiveFerrousSulfate,
  IFerrousSulfate
} from '../shared/models';

@Component({
  selector: 'app-sulfato-ferroso',
  templateUrl: './sulfato-ferroso.page.html',
  styleUrls: ['./sulfato-ferroso.page.scss'],
})
export class SulfatoFerrosoPage {

  public recoveryFerrousSulfate: IFerrousSulfate = recoveryFerrousSulfate;
  public preventiveFerrousSulfate: IFerrousSulfate = preventiveFerrousSulfate;

  constructor(

  ) { }

  public log(target: any): void {
    console.log(target);
  }

  public addBirthConditionIndex(fsSelected: IFerrousSulfate): void {
    fsSelected.paS = 0;
    if ((fsSelected.bc.length - 1) === fsSelected.bcS) {
      fsSelected.bcS = 0;
      return;
    }
    fsSelected.bcS = fsSelected.bcS + 1;
  }

}
