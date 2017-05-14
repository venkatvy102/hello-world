import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Pipe, PipeTransform } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home.component';
import { HomeDetailsPage } from '../pages/home-details/home-details.component';

import { HomeSortPipe } from '../pages/home/home-sort.pipe';
import { HomeService } from '../pages/home/home.service';

import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeDetailsPage,
    ListPage,
    HomeSortPipe    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    FormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}