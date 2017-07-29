import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { ResultadosPage } from '../pages/resultados/resultados';
import { TodosresultadosPage } from '../pages/todosresultados/todosresultados';
import { PerfilPage } from '../pages/perfil/perfil';


//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//DB
import { AngularFireDatabaseModule } from 'angularfire2/database';

//Plugins
import { Vibration } from '@ionic-native/vibration';
import { NativeAudio } from '@ionic-native/native-audio';
import { DatosFirebaseProvider } from '../providers/datos-firebase/datos-firebase';
import { HttpModule } from '@angular/http';
/*
const firebaseAuth = {
     apiKey: "AIzaSyDXJd0b5QDQS1aT3Ikb3_DimxxsFFjvRRc",
    authDomain: "probando-6ad1c.firebaseapp.com",
    databaseURL: "https://probando-6ad1c.firebaseio.com",
    projectId: "probando-6ad1c",
    storageBucket: "probando-6ad1c.appspot.com",
    messagingSenderId: "1079610140565"
  };*/

  const firebaseAuth = {
     apiKey: "AIzaSyBh5Es6DOU3rZD8Rx10074uV5XvZaW4row",
    authDomain: "preguntas-7cd97.firebaseapp.com",
    databaseURL: "https://preguntas-7cd97.firebaseio.com",
    projectId: "preguntas-7cd97",
    storageBucket: "preguntas-7cd97.appspot.com",
    messagingSenderId: "301221333862"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,GamePage,
    RegisterPage,
    LoggedinPage,
    ResultadosPage,
    TodosresultadosPage,
    PerfilPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule, HttpModule,
     AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,GamePage,
    LoggedinPage,
    ResultadosPage,
    TodosresultadosPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
     Vibration,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatosFirebaseProvider
  ]
})
export class AppModule {}
