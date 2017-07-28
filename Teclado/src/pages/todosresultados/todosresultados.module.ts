import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodosresultadosPage } from './todosresultados';

@NgModule({
  declarations: [
    TodosresultadosPage,
  ],
  imports: [
    IonicPageModule.forChild(TodosresultadosPage),
  ],
  exports: [
    TodosresultadosPage
  ]
})
export class TodosresultadosPageModule {}
