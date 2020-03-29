import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmunizaMayoresPage } from './inmuniza-mayores.page';

const routes: Routes = [
  {
    path: '',
    component: InmunizaMayoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmunizaMayoresPageRoutingModule {}
