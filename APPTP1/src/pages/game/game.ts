import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  	email: string;
   s;
   messages: object[] = [];

constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase) {
   this.email = fire.auth.currentUser.email;
   this.s = this.db.list('/probandoItems').subscribe( data => {
      this.messages = data;
        });
    console.log(this.s);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
