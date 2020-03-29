import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmunizaMayoresPageRoutingModule } from './inmuniza-mayores-routing.module';

import { InmunizaMayoresPage } from './inmuniza-mayores.page';
import { MedicalComponentsModule } from '../components/medical.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmunizaMayoresPageRoutingModule,
    MedicalComponentsModule
  ],
  declarations: [InmunizaMayoresPage]
})
export class InmunizaMayoresPageModule {}
