import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the PartidaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-partida',
  templateUrl: 'partida.html',
})
export class PartidaPage {
   resultados:FirebaseListObservable<any>;
  resultadoUser:Array<any>=[];
  userLog;
  partido;
//Fumciona

  constructor(public navCtrl: NavController,public db: AngularFireDatabase, public navParams: NavParams , private fire: AngularFireAuth,public ds:DatosFirebaseProvider) {
    // this.nombre = fire.auth.currentUser.email;
    this.userLog = fire.auth.currentUser.uid;
          this.cargarResultados();
 
  }

   cargarResultados()
  {
    console.log("resultados");
      //this.datosR = this.db.list('/Resultados', {
      this.resultados = this.db.list('/Resultados', {//Bien
                                  query: {
                                    orderByKey: true,    
                                    equalTo : this.userLog 
                                    }
                                  });

       this.resultados.subscribe(res=>res.forEach(dato=>{
                        this.resultadoUser=[
                                    dato.ronda1,
                                    dato.ronda2,
                                    dato.ronda3]
                        this.partido=dato.partido;            
       })); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PartidaPage');
  }

}
