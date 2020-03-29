import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InmunizaNinaAdolPage } from './inmuniza-nina-adol.page';

const routes: Routes = [
  {
    path: '',
    component: InmunizaNinaAdolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InmunizaNinaAdolPageRoutingModule {}
