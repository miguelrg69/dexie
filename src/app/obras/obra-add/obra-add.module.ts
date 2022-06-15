import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObraAddPageRoutingModule } from './obra-add-routing.module';

import { ObraAddPage } from './obra-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObraAddPageRoutingModule
  ],
  declarations: [ObraAddPage]
})
export class ObraAddPageModule {}
