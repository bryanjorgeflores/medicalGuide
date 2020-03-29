import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { ExpandableComponent } from './expandable/expandable.component';
import { CommonModule } from '@angular/common';


export const components = [
  ExpandableComponent
];

@NgModule({
  declarations: [components],
  imports: [IonicModule, CommonModule],
  exports: [components]
})
export class MedicalComponentsModule { }
