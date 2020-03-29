import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VacunaPageRoutingModule } from './vacuna-routing.module';

import { VacunaPage } from './vacuna.page';
import { MedicalComponentsModule } from '../components/medical.components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VacunaPageRoutingModule,
    MedicalComponentsModule
  ],
  declarations: [VacunaPage]
})
export class VacunaPageModule {}
