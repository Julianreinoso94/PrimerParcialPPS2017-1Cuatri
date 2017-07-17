import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular'; 

import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';
import firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild('username') uname;
	@ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn() {
  	this.navCtrl.push(LoginPage);
  }

  register() {
  	this.navCtrl.push(RegisterPage);
  }
  /*facebook()
  {
     let provider = new firebase.auth.FacebookAuthProvider();
     firebase.auth().signInWithRedirect(provider).then(()=>{
       firebase.auth().getRedirectResult().then((result)=>{
         alert(JSON.stringify(result))
       }).catch(function(error)
        {
          alert(JSON.stringify(error))
        });
    
     })
  }*/


}
