import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmpatadoPage } from './empatado';

@NgModule({
  declarations: [
    EmpatadoPage,
  ],
  imports: [
    IonicPageModule.forChild(EmpatadoPage),
  ],
  exports: [
    EmpatadoPage
  ]
})
export class EmpatadoPageModule {}
