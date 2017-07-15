import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TodoslosresultadosPage } from './todoslosresultados';

@NgModule({
  declarations: [
    TodoslosresultadosPage,
  ],
  imports: [
   // IonicModule.forChild(TodoslosresultadosPage),
  ],
  exports: [
    TodoslosresultadosPage
  ]
})
export class TodoslosresultadosPageModule {}
