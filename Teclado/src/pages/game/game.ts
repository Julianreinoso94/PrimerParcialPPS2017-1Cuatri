import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { ResultadosPage } from '../resultados/resultados';
import { MelodiaPage } from '../melodia/melodia';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';
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
  constructor(private fire: AngularFireAuth,public ds:DatosFirebaseProvider,
               public tc:ToastController, public navCtrl: NavController,
               public navParams: NavParams,public db: AngularFireDatabase,
              private  vibr:Vibration, private sound:NativeAudio,
              public alertCtrl: AlertController) {
      
    this.nombre = fire.auth.currentUser.email;
    this.datosUserLog = fire.auth.currentUser.uid;

   this.sonido=[];
                this.sound.preloadSimple("pajaro", "assets/sonidos/pajaro.mp3").then(this.onSuccess, this.onError);
                this.sound.preloadSimple("gato", "assets/sonidos/gato.mp3").then(this.onSuccess, this.onError);
                this.sound.preloadSimple("vaca", "assets/sonidos/vaca.mp3").then(this.onSuccess, this.onError);
                this.sound.preloadSimple("cerdo", "assets/sonidos/chancho.mp3").then(this.onSuccess, this.onError);

  }  

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
