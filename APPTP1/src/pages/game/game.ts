import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  	email: string;

constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
 	this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
