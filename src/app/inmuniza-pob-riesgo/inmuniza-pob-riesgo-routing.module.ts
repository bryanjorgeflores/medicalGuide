import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmunizaPobRiesgoPage } from './inmuniza-pob-riesgo.page';

const routes: Routes = [
  {
    path: '',
    component: InmunizaPobRiesgoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmunizaPobRiesgoPageRoutingModule {}
