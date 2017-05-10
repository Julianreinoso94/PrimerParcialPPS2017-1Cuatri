import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';import { FormBuilder, FormGroup, Validators } from '@angular/forms';//FORMBUILDER CREA FORMS, FORMGROUP DEFINE UN FORMULARIO Y VALIDATORS CONTIENE VALIDACIONES PREDISEÑADAS

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  miForm : FormGroup;
  errorEnFormulario: boolean;
     /*jugadas : Jugada[];
m;
   errorEnFormulario: boolean;*/

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder)
   { //UTILIZACIÓN DE CONSTRUCTOR DE FORMULARIOS CON VALIDACIONES
      this.errorEnFormulario = false;
    this.miForm = formBuilder.group({
        nombre: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    });

   }

}
