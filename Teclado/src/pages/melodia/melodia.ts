import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { ResultadosPage } from '../resultados/resultados';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';

/**
 * Generated class for the MelodiaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-melodia',
  templateUrl: 'melodia.html',
})
export class MelodiaPage {
  datosObtenidos:FirebaseListObservable<any>;
  melodias:Array<any>=[];


  constructor(public navCtrl: NavController,public ds:DatosFirebaseProvider,private AfD: AngularFireAuth, public navParams: NavParams ,private sound: NativeAudio) {
      this.traerMelodias();
      this.sound.preloadSimple("pajaro", "assets/sonidos/pajaro.mp3").then(this.onSuccess, this.onError);
      this.sound.preloadSimple("gato", "assets/sonidos/gato.mp3").then(this.onSuccess, this.onError);
      this.sound.preloadSimple("vaca", "assets/sonidos/vaca.mp3").then(this.onSuccess, this.onError);
      this.sound.preloadSimple("cerdo", "assets/sonidos/chancho.mp3").then(this.onSuccess, this.onError);    
  }
  traerMelodias(){
    this.datosObtenidos = this.ds.AfD.list('/Melodias', {
    query: {
      orderByKey: true,
      limitToLast:3    
      }
    });

    this.datosObtenidos.subscribe(mel=>{this.melodias=mel});
  }



  escucharMelodia(mel){

     for(var i=0;i<mel.sonidos.length;i++)
      {

        this.sound.play(mel.sonidos[i]).then(this.onSuccess, this.onError);
         /*setTimeout(() => {
          
         }, 500);*/
      }
  }


   onSuccess(){
    console.info("Ok al reproducir el sonido");
  }

    onError(){
    console.info("Error al reproducir el sonido");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MelodiaPage');
  }

}
