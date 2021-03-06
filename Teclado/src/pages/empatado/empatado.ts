import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the EmpatadoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-empatado',
  templateUrl: 'empatado.html',
})
export class EmpatadoPage {
  
   datosObtenidos:FirebaseListObservable<any>;
   empatados:Array<any>=[];


  constructor(public navCtrl: NavController,public db: AngularFireDatabase, public navParams: NavParams, public ds:DatosFirebaseProvider) {
   this.traerResultados();
  }
  traerResultados(){
    this.datosObtenidos = this.db.list('/Empatados', {
    query: {
      orderByKey: true,
      limitToLast:10    
      }
    });

    this.datosObtenidos.subscribe(resp=>{this.empatados=resp});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpatadoPage');
  }

}
