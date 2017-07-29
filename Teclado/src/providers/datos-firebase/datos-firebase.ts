import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the DatosFirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatosFirebaseProvider {

   datosUserLog:any;
 email: string;

  constructor(public http: Http ,public AfD: AngularFireDatabase,private fire: AngularFireAuth) {
    console.log('Hello DatosFirebaseProvider Provider');

       this.email = fire.auth.currentUser.email;
    
      this.datosUserLog = fire.auth.currentUser.uid;
  }
  


}
