import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SulfatoFerrosoPageRoutingModule } from './sulfato-ferroso-routing.module';

import { SulfatoFerrosoPage } from './sulfato-ferroso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SulfatoFerrosoPageRoutingModule
  ],
  declarations: [SulfatoFerrosoPage]
})
export class SulfatoFerrosoPageModule {}
