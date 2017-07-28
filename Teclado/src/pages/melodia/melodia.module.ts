import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MelodiaPage } from './melodia';

@NgModule({
  declarations: [
    MelodiaPage,
  ],
  imports: [
    IonicPageModule.forChild(MelodiaPage),
  ],
  exports: [
    MelodiaPage
  ]
})
export class MelodiaPageModule {}
