import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Pipe, PipeTransform } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage'
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home.component';
import { HomeDetailsPage } from '../pages/home-details/home-details.component';
import { LoginPage } from '../pages/login/login.component';
import { SessionsPage } from '../pages/sessions/sessions.component';

import { HomeSortPipe } from '../pages/home/home-sort.pipe';
import { HomeService } from '../pages/home/home.service';
import { LoginService } from '../pages/login/login.service';
import { HomeDetailsService } from '../pages/home-details/home-details.service';
import { SessionsService } from '../pages/sessions/sessions.service';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeDetailsPage,
    ListPage,
    HomeSortPipe,
    LoginPage,
    SessionsPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeDetailsPage,
    LoginPage,
    ListPage,
    SessionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeService,
    LoginService,
    HomeDetailsService,
    SessionsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
