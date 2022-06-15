import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObrasPage } from './obras.page';

const routes: Routes = [
  {
    path: '',
    component: ObrasPage
  },
  {
    path: 'obra-add',
    loadChildren: () => import('./obra-add/obra-add.module').then( m => m.ObraAddPageModule)
  },
  {
    path: 'registros',
    loadChildren: () => import('./registros/registros.module').then( m => m.RegistrosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObrasPageRoutingModule {}
