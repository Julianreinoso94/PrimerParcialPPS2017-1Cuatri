import { Component, ViewChild } from '@angular/core';
import { Platform , Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { LoginPage } from '../pages/login/login';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { ResultadosPage } from '../pages/resultados/resultados';
import { TodosresultadosPage } from '../pages/todosresultados/todosresultados';
import { PerfilPage } from '../pages/perfil/perfil';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
     @ViewChild(Nav) nav: Nav;
   rootPage:any;
  pages: Array<{title: string, component: any}>

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private AfA: AngularFireAuth) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
     const authObserver = this.AfA.authState.subscribe( user => {
        if (user) {
          this.rootPage = GamePage;
          authObserver.unsubscribe();
        } else {
          this.rootPage = LoginPage;
          authObserver.unsubscribe();
        }
      });    

   this.pages = [
      { title: 'Jugar', component: GamePage },
      { title: 'Jugar', component: GamePage },
      { title: 'mi Resultado', component: ResultadosPage },
      { title: 'Resultados', component: TodosresultadosPage },
      { title: 'Perfil', component: PerfilPage },      
      { title: 'Salir', component: LoginPage },
    ];
  }
     openPage(p){
    if(p.title=="Salir")
    {
      this.AfA.auth.signOut();
      this.nav.setRoot(MyApp);
    }
    else{
      this.nav.setRoot(p.component);
    }
  }
}

