import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {AngularFireDatabase} from 'angularfire2/database';


/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd:AngularFireDatabase) {

  }
  GetShoppingItems()
  {
    return this.afd.list('/probandoItems/');
  }
  addItem(name)
  {
    return this.afd.list('/probandoItems/').push(name);
  }

  removeItem(id)
  {
    return this.afd.list('/probandoItems/').remove(id);
  }

   traerPreguntas()
  {
    return this.afd.list('/probandoItems');
  }

}

