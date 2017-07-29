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
 

 datosUserLog:any;
 email: string;

  MelodiasFB:FirebaseListObservable<any>;
  nombre;
  sonido:Array<any>;
  

  constructor(private fire: AngularFireAuth,public ds:DatosFirebaseProvider,
               public tc:ToastController, public navCtrl: NavController,
               public navParams: NavParams,public db: AngularFireDatabase,
              private  vibr:Vibration, private sound:NativeAudio,
              public alertCtrl: AlertController) {
      
    this.nombre = fire.auth.currentUser.email;
    this.datosUserLog = fire.auth.currentUser.uid;
    this.traerMelodias();

   this.sonido=[];
                this.sound.preloadSimple("pajaro", "assets/sonidos/pajaro.mp3").then(this.onSuccess, this.onError);
                this.sound.preloadSimple("gato", "assets/sonidos/gato.mp3").then(this.onSuccess, this.onError);
                this.sound.preloadSimple("vaca", "assets/sonidos/vaca.mp3").then(this.onSuccess, this.onError);
                this.sound.preloadSimple("cerdo", "assets/sonidos/chancho.mp3").then(this.onSuccess, this.onError);

  }  

   traerMelodias(){
    this.MelodiasFB=this.ds.AfD.list('/Melodias');
  }

 /* traerDatosUsuario(){
      this.ds.AfA.authState.subscribe(user=>{this.datosUserLog=user});
      this.nombre=this.ds.nombreuser();
  }*/

  sonar(numero)
  {
    var quesonido;

    switch(numero){
        case 1:
             this.sound.play("pajaro").then(this.onSuccess, this.onError);
             this.vibr.vibrate(100);
             quesonido="pajaro";
              break;
        case 2:
             this.sound.play("gato").then(this.onSuccess, this.onError);
             this.vibr.vibrate(100);
             quesonido="gato";
              break;
        case 3:
             this.sound.play("vaca").then(this.onSuccess, this.onError);
             this.vibr.vibrate(100); 
             quesonido="vaca";
              break;
        case 4:
              this.sound.play("cerdo").then(this.onSuccess, this.onError);
              this.vibr.vibrate(100);              
              quesonido="cerdo";
             break;
    }
    this.sonido.push(quesonido);
  }

    onSuccess(){
    console.info("Ok al reproducir el sonido");
  }

    onError(){
    console.info("Error al reproducir el sonido");
  }

  guardarMelodia(){
    var f=new Date();
     this.MelodiasFB.push({
        usuario:this.nombre,
        fecha: f.getFullYear()+'-'+(f.getUTCMonth()+1)+'-'+f.getDate()+' '+f.getHours()+':'+f.getMinutes()+':'+f.getSeconds(),
        sonidos:this.sonido
     })
    this.navCtrl.setRoot(MelodiaPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
