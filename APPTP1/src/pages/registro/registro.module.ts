import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { RegistroPage } from './registro';

@NgModule({
  declarations: [
    RegistroPage,
  ],
  imports: [
    //IonicModule.forChild(RegistroPage),
  ],
  exports: [
    RegistroPage
  ]
})
export class RegistroPageModule {}
