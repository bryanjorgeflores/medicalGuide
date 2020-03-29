import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmunizaPobRiesgoPageRoutingModule } from './inmuniza-pob-riesgo-routing.module';

import { InmunizaPobRiesgoPage } from './inmuniza-pob-riesgo.page';
import { MedicalComponentsModule } from '../components/medical.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmunizaPobRiesgoPageRoutingModule,
    MedicalComponentsModule
  ],
  declarations: [InmunizaPobRiesgoPage]
})
export class InmunizaPobRiesgoPageModule {}
