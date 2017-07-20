import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ResultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
email: string;   public datosUserLog;
userRespuestasObser:FirebaseListObservable<any>;
  resultUser:Array<any>=[];
  

  constructor(private fire: AngularFireAuth,public db: AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams ,public datoFirebase:DatosFirebaseProvider) {
    this.email = fire.auth.currentUser.email;
  this.datosUserLog = fire.auth.currentUser.uid;
     //this.traerDatosUsuario();
    this.buscarResultadosUserLog();
    console.log(this.datosUserLog);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }
  buscarResultadosUserLog()
  {
    this.userRespuestasObser = this.db.list('/UserRespuesta', {
    query: {
      orderByKey: true,    
      equalTo : this.datosUserLog 
      }
    });

     this.userRespuestasObser.subscribe(resp=>resp.forEach(dato=>{
          this.resultUser=[
                  dato.preg1,
                  dato.preg2,
                  dato.preg3,
                  dato.preg4,
                  dato.preg5];
     }));
  }

  color(quecolor){
    var col;

    if(quecolor==true)
    {
      col="#14C408";
    }
    else{
      col="#FF2B2B";
    }

    return col;
  }

}

 
