import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PartidaPage } from '../pages/partida/partida';
import { GamePage } from '../pages/game/game';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { ResultadosPage } from '../pages/resultados/resultados';
import { GanadoPage } from '../pages/ganado/ganado';
import { EmpatadoPage } from '../pages/empatado/empatado';
import { PerdidoPage } from '../pages/perdido/perdido';
import { PerfilPage } from '../pages/perfil/perfil';
import { TodosresultadosPage } from '../pages/todosresultados/todosresultados';



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

const firebaseAuth = {
    apiKey: "AIzaSyBxJqf5SH_1hp-quzE8lVjTyryWY7Q2AXs",
    authDomain: "piedrapapeltijera-cc32a.firebaseapp.com",
    databaseURL: "https://piedrapapeltijera-cc32a.firebaseio.com",
    projectId: "piedrapapeltijera-cc32a",
    storageBucket: "piedrapapeltijera-cc32a.appspot.com",
    messagingSenderId: "583053769337"
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
    GanadoPage,
    EmpatadoPage,
    PerdidoPage,
    PerfilPage,
    GamePage,
    PartidaPage

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
    GanadoPage,
    EmpatadoPage,
    PerdidoPage,
    PerfilPage,
    GamePage,
    PartidaPage
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
