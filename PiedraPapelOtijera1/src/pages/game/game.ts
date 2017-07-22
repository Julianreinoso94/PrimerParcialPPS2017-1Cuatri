import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { ResultadosPage } from '../resultados/resultados';
/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
 opcionesJug=["PIEDRA", "PAPEL", "TIJERA"];
 datosUserLog:any;
 email: string;
  nombre;
  rondas;
  partido;
  puntosUser;
  puntosMaquina;
  datosRonda:Array<any>;
  fecha;
  companies:any;
  mostrar;
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public toastCtrl: ToastController,private  vibra:Vibration, private sound:NativeAudio,public alertCtrl: AlertController, public datoFirebase:DatosFirebaseProvider) {
      this.email = fire.auth.currentUser.email;
    
      this.datosUserLog = fire.auth.currentUser.uid;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
