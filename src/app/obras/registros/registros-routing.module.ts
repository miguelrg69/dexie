import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosPage } from './registros.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosPage
  },
  {
    path: 'vista-registro',
    loadChildren: () => import('./vista-registro/vista-registro.module').then( m => m.VistaRegistroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosPageRoutingModule {}
