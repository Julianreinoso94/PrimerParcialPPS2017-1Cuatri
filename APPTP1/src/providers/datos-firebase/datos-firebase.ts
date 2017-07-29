import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the DatosFirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DatosFirebaseProvider {

  userRespuestas:FirebaseListObservable<any>;

  constructor(public http: Http ,public db: AngularFireDatabase,private fire: AngularFireAuth) {
    console.log('Hello DatosFirebaseProvider Provider');
  }
   traerTodasLasRepuestas()
  {
    return this.db.list('/Resultados');
  }
   traerUsuariosRespuestas()
  {
    return this.db.list('/UserRespuesta');
  }

   
  guardarResultados(idUser,resultados:Array<any>)
  {
    //llega al dbbbb
    console.log("llega");

   this.db.list('/UserRespuesta').update(idUser,
       {
         preg1:{
           pregunta:resultados[0].pregunta,
           respuesta:resultados[0].respuesta,
           correcta:resultados[0].es
         },
         preg2:{
           pregunta:resultados[1].pregunta,
           respuesta:resultados[1].respuesta,
           correcta:resultados[1].es
         },
         preg3:{
           pregunta:resultados[2].pregunta,
           respuesta:resultados[2].respuesta,
           correcta:resultados[2].es
         },
         preg4:{
           pregunta:resultados[3].pregunta,
           respuesta:resultados[3].respuesta,
           correcta:resultados[3].es
         },
         preg5:{
           pregunta:resultados[4].pregunta,
           respuesta:resultados[4].respuesta,
           correcta:resultados[4].es
         }
       }
    );
  } 

}
