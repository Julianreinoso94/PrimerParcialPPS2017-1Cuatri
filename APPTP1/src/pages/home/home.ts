import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS
import {Jugada}from "../../providers/jugada";
import {ContactPage}from "../contact/contact";

import {FirebaseServiceProvider} from  './../../providers/firebase-service/firebase-service';
import { FirebaseListObservable } from 'angularfire2/database';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage{
 jugadas : Jugada[];

  miForm : FormGroup;
  errorEnFormulario: boolean;
  shopingItems:FirebaseListObservable<any[]>
  newItem='';

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder , public firebaseServiceProvider :FirebaseServiceProvider)
   {

     this.shopingItems = this.firebaseServiceProvider.GetShoppingItems();
       this.jugadas=new Array();

      //UTILIZACIÓN DE CONSTRUCTOR DE FORMULARIOS CON VALIDACIONES
      this.errorEnFormulario = false;
    this.miForm = formBuilder.group({
        nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });
  }
  addItem()
  {
    console.log("hola");
    this.firebaseServiceProvider.addItem(this.newItem);
  }

    irGame(){
      if (this.miForm.valid) {
        //CREACIÓN DE JUGADA Y AGREGADO DE JUGADA EN ARRAY DE JUGADAS
        new Jugada(this.miForm.value.nombre).AgregarJugada(this.jugadas);
        //PREPARACIÓN DEL ALMACENAMIENTO
      //  this.storage.ready().then(() => {
          //GUARDADO DE LAS JUGADAS EN BASE DE DATOS
        //  this.storage.set('jugadas', JSON.stringify(this.jugadas)).then(() => {
            //REDIRECCION A PAGINA DE GAME (SETEO COMO PAGINA INICIAL)
          this.navCtrl.setRoot(ContactPage, {}, {animate: true, direction: "forward"});
        //  });
      //  });
    }//SETEO DE VARIABLE ERROR SI EL FORM NO ES VALIDO
    else{
      this.errorEnFormulario = true;
    }
  }

}
