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

    res:FirebaseListObservable<any>;
  ganado:FirebaseListObservable<any>;
  perdido:FirebaseListObservable<any>;
  empatado:FirebaseListObservable<any>;
   datosUserLog:any;
 email: string;

  constructor(public http: Http ,public db: AngularFireDatabase,private fire: AngularFireAuth) {
    console.log('Hello DatosFirebaseProvider Provider');
    this.res= this.traerResultadosUsers();
       this.ganado = this.db.list('/Ganados');//Bien
       this.perdido = this.db.list('/Perdidos');//Bien
       this.empatado = this.db.list('/Empatados');//Bien´
       this.email = fire.auth.currentUser.email;
    
      this.datosUserLog = fire.auth.currentUser.uid;
  }
   traerResultadosUsers()
  {
   return this.db.list('/Resultados');//Bien
  }

  guardarPartida(idUser,datos){ //guarda en un array local
    console.log(idUser);
    console.log(datos[0]);
    console.log(datos[1]);
    console.log(datos[2]);
    console.log(datos[3].partido);
      this.res.update(idUser,{
        ronda1:datos[0],
        ronda2:datos[1],
        ronda3:datos[2],
        partido:datos[3].partido,
      
      });
        console.log("llassdasdasego");
        
  }
   
 guardarDato(partido,datos)//bien
  {
     switch(partido){

            case "Ganado":
                          this.ganado.push(datos);  
                          break;
            case "Perdido": 
                            this.perdido.push(datos);
                          break;
            case "Empatado": 
                            this.empatado.push(datos);
                          break;

        } 
  }

}
