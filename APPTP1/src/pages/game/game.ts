import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
  	email: string;
   s;
   public nrosRandom:Array<any>;
    public nroPregunta;
   preguntasFB: object[] = [];

constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public toastCtrl: ToastController,private  vibra:Vibration, private sound:NativeAudio,public alertCtrl: AlertController) {
   
  this.email = fire.auth.currentUser.email;
   this.s = this.db.list('/probandoItems').subscribe( data => {
      this.preguntasFB = data;
        });
   

      this.iniciarRandom();
        this.sound.preloadSimple('correcto', 'assets/correcto.mp3');
         this.sound.preloadSimple('incorrecto', 'assets/incorrecto.mp3');

      }

  iniciarRandom(){
      this.nrosRandom=[];
      var nroRandom= Math.floor(Math.random() * (this.preguntasFB.length));
      this.nrosRandom.push(nroRandom);
      this.nroPregunta=nroRandom;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

  repuestaIngresada(objPregunta,opcion){
       
      var esCorrecta:Boolean;

      if(objPregunta.Respuesta==opcion)
      {
        this.sound.play('correcto',()=> console.log('ok is done playing'));
        this.vibra.vibrate(400);
        let toast = this.toastCtrl.create({
        message: 'Respuesta Correcta!',
        duration: 1000
        });
      
        toast.present();

        esCorrecta=true;
      }
      else
      {
        this.sound.play('incorrecto',()=> console.log('ok is done playing'));
        this.vibra.vibrate([400,200,400]);
        let toast = this.toastCtrl.create({
        message: 'Respuesta Incorrecta!',
        duration: 1000
        });
      
        toast.present();

        esCorrecta=false;
      }     
      /*
      this.respuestasIngresadas.push({pregunta:objPregunta.pregunta,respuesta:opcion,es:esCorrecta,
                                      nombre:this.nombreUserLog,fecha:this.fecha});

                                      */
      if(this.nrosRandom.length<5){ 
        this.generarNumerosRandom();        
      }
      else{
           /*
          this.datoService.guardarResultados(this.datosUserLog.uid,this.respuestasIngresadas);

          this.respuestasTodas.push(this.obtenerResultados(this.respuestasIngresadas));  
           */
          let alert = this.alertCtrl.create({
          title: 'Trivia Terminada!',
          subTitle: 'Podes ver tus resultados',
          buttons: ['OK']
          });
          
          alert.present();
          //this.navCtrl.setRoot(Resultados);
      }            
  } 

  generarNumerosRandom(){
    var cantidadPreguntas=this.preguntasFB.length;
    var flag=true; 
    while(flag){

      var nroRandom= Math.floor(Math.random() * (cantidadPreguntas));

      if(this.nrosRandom.indexOf(nroRandom)==-1){
          this.nrosRandom.push(nroRandom);
          this.nroPregunta=nroRandom;
          flag=false;
      }
    }
  }
    /*
    
  obtenerResultados(r:Array<any>){
    var dato= { fecha:this.fecha,
                nombre:this.nombreUserLog,
                preg1:r[0].pregunta,
                resp1:r[0].respuesta,
                es1:r[0].es,
                preg2:r[1].pregunta,
                resp2:r[1].respuesta,
                es2:r[1].es,
                preg3:r[2].pregunta,
                resp3:r[2].respuesta,
                es3:r[2].es,
                preg4:r[3].pregunta,
                resp4:r[3].respuesta,
                es4:r[3].es,
                preg5:r[4].pregunta,
                resp5:r[4].respuesta,
                es5:r[4].es
              }

      return dato;*/        
  }


