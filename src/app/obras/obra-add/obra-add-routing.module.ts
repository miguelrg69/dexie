import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObraAddPage } from './obra-add.page';

const routes: Routes = [
  {
    path: '',
    component: ObraAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObraAddPageRoutingModule {}
