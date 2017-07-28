import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { ResultadosPage } from '../resultados/resultados';
import { PartidaPage } from '../partida/partida';
import { DatosFirebaseProvider } from '../../providers/datos-firebase/datos-firebase';
/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {
 opcionesJug=["PIEDRA", "PAPEL", "TIJERA"];
 datosUserLog:any;
 email: string;
  nombre;
  rondas;
  partido;
  puntosUser;
  puntosMaquina;
  datosRonda:Array<any>;
  fecha;
  companies:any;
  mostrar;
  constructor(private fire: AngularFireAuth,public ds:DatosFirebaseProvider,public tc:ToastController, public navCtrl: NavController, public navParams: NavParams,public db: AngularFireDatabase,private  vibr:Vibration, private sound:NativeAudio,public alertCtrl: AlertController) {
      this.email = fire.auth.currentUser.email;
    
      this.datosUserLog = fire.auth.currentUser.uid;
  }  

  jugar(nroJugado){

    if(this.rondas<3){ 
      console.log(this.datosRonda);
        this.rondas++;
        var toast;      
        var nroRandom=Math.floor(Math.random() * (4-1))+1;
        this.mostrar=true;

          setTimeout(() => {
               this.mostrar=false;
               if(nroJugado==nroRandom){
                          toast = this.tc.create({
                          message: 'Empate: '+""+this.opcionesJug[(nroRandom-1)],
                          duration: 2000
                        });

                        this.puntosMaquina++;
                        this.puntosUser++;
              }
              else{

              switch(nroJugado){

                case 1:
              
                        if(nroRandom==2){

                              toast = this.tc.create({
                              message: 'Perdiste la Maquina Jugó:'+this.opcionesJug[(nroRandom-1)],
                              duration: 2000
                            });

                            this.puntosMaquina++;
                        }
                        else{

                              toast = this.tc.create({
                              message: 'Ganaste la Maquina Jugó:'+this.opcionesJug[(nroRandom-1)],
                              duration: 2000
                            });

                            this.puntosUser++;
                        }
                      break;
                //papel
                case 2:
            
                        if(nroRandom==1){

                              toast = this.tc.create({
                              message: 'Ganaste la Maquina Jugó:'+this.opcionesJug[(nroRandom-1)],
                              duration: 2000
                            });                        
                                this.puntosUser++;
                        }
                        else{

                              toast = this.tc.create({
                              message: 'Perdiste la Maquina Jugó:'+this.opcionesJug[(nroRandom-1)],
                              duration: 2000
                            });
                          
                            this.puntosMaquina++;
                        }
                      break;
                //tijera
                case 3:
                
                      if(nroRandom==1){

                                toast = this.tc.create({
                                message: 'Perdiste la Maquina Jugó:'+this.opcionesJug[(nroRandom-1)],
                                duration: 2000
                              });
                              this.puntosMaquina++;                       
                          }
                        else{

                              toast= this.tc.create({
                              message: 'Ganaste la Maquina Jugó: '+this.opcionesJug[(nroRandom-1)],
                              duration: 2000
                            });   

                            this.puntosUser++                     
                        }
                      
                        break;                        
               }        
        }         
                toast.present();
                this.datosRonda.push({maquina:this.opcionesJug[(nroRandom-1)],vos:this.opcionesJug[(nroJugado-1)]});

                if(this.rondas==3){  
                  this.controlarPartida();
                  console.log(this.datosRonda);
                }
            }, 1000);           
               
      }
                     
  }//FIn metodo

  controlarPartida(){

          var alert;
        
          if(this.puntosUser>this.puntosMaquina){


              this.sound.play('correcto',()=> console.log('ok is done playing'));
              this.vibr.vibrate(400);

              alert= this.alertCtrl.create({
                        title: 'Fin de la Partida',
                        subTitle: 'GANASTE LA PARTIDA',
                        buttons: ['OK']
                      });
                      alert.present();

                this.partido="Ganado";   

          }
          else if(this.puntosMaquina>this.puntosUser){

              this.sound.play('incorrecto',()=> console.log('ok is done playing'));
              this.vibr.vibrate(400);

                alert= this.alertCtrl.create({
                        title: 'Fin de la Partida',
                        subTitle: 'PERDISTE LA PARTIDA',
                        buttons: ['OK']
                      });
                      alert.present();

                   this.partido="Perdido";     
          }
          else if(this.puntosMaquina==this.puntosUser)
          {
              this.vibr.vibrate([400,200,400]);

               alert= this.alertCtrl.create({
                        title: 'Fin de la Partida',
                        subTitle: 'EMPATASTE LA PARTIDA',
                        buttons: ['OK']
                      });
                      alert.present(); 

                  this.partido="Empatado";       
          }

          this.datosRonda.push({partido:this.partido});

          this.ds.guardarPartida(this.datosUserLog.uid,this.datosRonda);

           this.guardarDatos(this.partido,this.datosRonda);

          this.navCtrl.setRoot(PartidaPage);
    }
           guardarDatos(partido,datos){
        this.ds.guardarDato(partido,this.obtenerResultados(datos,partido));
    }
    
     obtenerFecha(){
    var f=new Date();
    this.fecha=f.getFullYear()+'-'+(f.getUTCMonth()+1)+'-'+f.getDate()+' '+f.getHours()+':'+f.getMinutes()+':'+f.getSeconds();
  }

  obtenerResultados(r:Array<any>,part){
    var dato= { fecha:this.fecha,
                nombre:this.nombre,
                partido:part,
                ronda1m:r[0].maquina,
                ronda1v:r[0].vos,
                ronda2m:r[1].maquina,
                ronda2v:r[1].vos,
                ronda3m:r[2].maquina,
                ronda3v:r[2].vos
              }

      return dato;        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GamePage');
  }

}
