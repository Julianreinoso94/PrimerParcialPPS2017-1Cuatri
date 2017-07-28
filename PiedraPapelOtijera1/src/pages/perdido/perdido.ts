import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the PerdidoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perdido',
  templateUrl: 'perdido.html',
})
export class PerdidoPage {

  datosObtenidos:FirebaseListObservable<any>;
  perdidos:Array<any>=[];
  constructor(public navCtrl: NavController,public db: AngularFireDatabase,public navParams: NavParams , public ds:DatosFirebaseProvider) {
   this.traerResultados();
  }

   traerResultados(){
     this.datosObtenidos = this.db.list('/Perdidos', {
    query: {
      orderByKey: true,
      limitToLast:10    
      }
    });

    this.datosObtenidos.subscribe(resp=>{this.perdidos=resp});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerdidoPage');
  }

}
