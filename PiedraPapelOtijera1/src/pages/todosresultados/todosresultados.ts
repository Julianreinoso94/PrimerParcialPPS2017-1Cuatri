import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TodosresultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-todosresultados',
  templateUrl: 'todosresultados.html',
})
export class TodosresultadosPage {
 datosR:FirebaseListObservable<any>;
 respuesta:Array<any>=[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,private fire: AngularFireAuth,public db: AngularFireDatabase,) {
     this.traerResultados();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodosresultadosPage');
  }
 
 
  traerResultados(){
    this.datosR = this.db.list('/Resultados', {
    query: {
      orderByKey: true,
      limitToLast:10    
      }
    });

    this.datosR.subscribe(resp=>{this.respuesta=resp});
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
