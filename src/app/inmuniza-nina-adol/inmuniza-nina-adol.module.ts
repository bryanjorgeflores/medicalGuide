import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmunizaNinaAdolPageRoutingModule } from './inmuniza-nina-adol-routing.module';

import { InmunizaNinaAdolPage } from './inmuniza-nina-adol.page';
import { MedicalComponentsModule } from '../components/medical.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmunizaNinaAdolPageRoutingModule,
    MedicalComponentsModule
  ],
  declarations: [InmunizaNinaAdolPage]
})
export class InmunizaNinaAdolPageModule {}
