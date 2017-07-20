import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { ResultadosPage } from '../resultados/resultados';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';


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
   public respuestasIngresadas:Array<any>=[];
   public fecha;
   public datosUserLog;
   respuestasTodas:FirebaseListObservable<any>;

constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,public toastCtrl: ToastController,private  vibra:Vibration, private sound:NativeAudio,public alertCtrl: AlertController, public datoFirebase:DatosFirebaseProvider) {
   
  this.email = fire.auth.currentUser.email;
  this.datosUserLog = fire.auth.currentUser.uid;

   this.s = this.db.list('/probandoItems').subscribe( data => {
      this.preguntasFB = data;
        });
   

      this.iniciarRandom();
        this.sound.preloadSimple('correcto', 'assets/correcto.mp3');
         this.sound.preloadSimple('incorrecto', 'assets/incorrecto.mp3');
          this.obtenerFecha();
         //this.obtenerRespuestas();

      }
         obtenerFecha(){
    var f=new Date();
    this.fecha=f.getFullYear()+'-'+(f.getUTCMonth()+1)+'-'+f.getDate()+' '+f.getHours()+':'+f.getMinutes()+':'+f.getSeconds();
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
      /*	this.db.list('/chat').push*/
      console.log(objPregunta.Pregunta);
      console.log(opcion);
      console.log(this.email);
      console.log(this.fecha);
      this.respuestasIngresadas.push({pregunta:objPregunta.Pregunta,respuesta:opcion,es:esCorrecta,
                                      nombre:this.email,fecha:this.fecha});

                                    
      if(this.nrosRandom.length<5){ 
        this.generarNumerosRandom();        
      }
      else{
        console.log("ingresa");
           
          this.datoFirebase.guardarResultados(this.datosUserLog,this.respuestasIngresadas);
           console.log(this.respuestasIngresadas);
           var dato= { fecha:this.fecha,
                nombre:this.email,
                preg1:this.respuestasIngresadas[0].pregunta,
                resp1:this.respuestasIngresadas[0].respuesta,
                es1:this.respuestasIngresadas[0].es,
                preg2:this.respuestasIngresadas[1].pregunta,
                resp2:this.respuestasIngresadas[1].respuesta,
                es2:this.respuestasIngresadas[1].es,
                preg3:this.respuestasIngresadas[2].pregunta,
                resp3:this.respuestasIngresadas[2].respuesta,
                es3:this.respuestasIngresadas[2].es,
                preg4:this.respuestasIngresadas[3].pregunta,
                resp4:this.respuestasIngresadas[3].respuesta,
                es4:this.respuestasIngresadas[3].es,
                preg5:this.respuestasIngresadas[4].pregunta,
                resp5:this.respuestasIngresadas[4].respuesta,
                es5:this.respuestasIngresadas[4].es
              }
              console.log(dato);

          //this.respuestasTodas.push(dato);  
          
          let alert = this.alertCtrl.create({
          title: 'Trivia Terminada!',
          subTitle: 'Podes ver tus resultados',
          buttons: ['OK']
          });
          
          alert.present();
          this.navCtrl.setRoot(ResultadosPage);
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
    
    
  obtenerResultados(r:Array<any>){
    console.log ("hola");
    console.log(this.fecha);
    console.log(this.email);console.log(r[0].pregunta);
    console.log(r[0].respuesta);
    console.log(r[0].es);
   

    var dato= { fecha:this.fecha,
                nombre:this.email,
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

      return dato;    
  }
}    


