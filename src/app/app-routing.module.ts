import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'vacunas',
    loadChildren: () => import('./vacunas/vacunas.module').then( m => m.VacunasPageModule)
  },
  {
    path: 'vacuna',
    loadChildren: () => import('./vacuna/vacuna.module').then( m => m.VacunaPageModule)
  },
  {
    path: 'inmuniza-menores',
    loadChildren: () => import('./inmuniza-menores/inmuniza-menores.module').then( m => m.InmunizaMenoresPageModule)
  },
  {
    path: 'inmuniza-mayores',
    loadChildren: () => import('./inmuniza-mayores/inmuniza-mayores.module').then( m => m.InmunizaMayoresPageModule)
  },
  {
    path: 'inmuniza-nina-adol',
    loadChildren: () => import('./inmuniza-nina-adol/inmuniza-nina-adol.module').then( m => m.InmunizaNinaAdolPageModule)
  },
  {
    path: 'inmuniza-pob-riesgo',
    loadChildren: () => import('./inmuniza-pob-riesgo/inmuniza-pob-riesgo.module').then( m => m.InmunizaPobRiesgoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sulfato-ferroso',
    loadChildren: () => import('./sulfato-ferroso/sulfato-ferroso.module').then( m => m.SulfatoFerrosoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
