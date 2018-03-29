import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TasksService } from "../services/tasks.services";
import { DetailPage } from '../pages/detail/detail';


export const firebaseConfig = {
apiKey: "AIzaSyA32XZdehJZD1Pm1HvJVMj5IxbDEdJz6_s",
    authDomain: "notionic-38134.firebaseapp.com",
    databaseURL: "https://notionic-38134.firebaseio.com",
  
    storageBucket: "notionic-38134.appspot.com",
    messagingSenderId: "844396641680"
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TasksService
  ]
})
export class AppModule {}
