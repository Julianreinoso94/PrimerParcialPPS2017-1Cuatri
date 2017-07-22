import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GanadoPage } from './ganado';

@NgModule({
  declarations: [
    GanadoPage,
  ],
  imports: [
    IonicPageModule.forChild(GanadoPage),
  ],
  exports: [
    GanadoPage
  ]
})
export class GanadoPageModule {}
