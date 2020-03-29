import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InmunizaMenoresPageRoutingModule } from './inmuniza-menores-routing.module';

import { InmunizaMenoresPage } from './inmuniza-menores.page';
import { MedicalComponentsModule } from '../components/medical.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InmunizaMenoresPageRoutingModule,
    MedicalComponentsModule
  ],
  declarations: [InmunizaMenoresPage]
})
export class InmunizaMenoresPageModule {}
