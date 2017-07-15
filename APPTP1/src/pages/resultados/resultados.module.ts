import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ResultadosPage } from './resultados';

@NgModule({
  declarations: [
    ResultadosPage,
  ],
  imports: [
    //IonicModule.forChild(ResultadosPage),
  ],
  exports: [
    ResultadosPage
  ]
})
export class ResultadosPageModule {}
