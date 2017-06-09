import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Pipe, PipeTransform } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage'
import { Vibration } from '@ionic-native/vibration';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home.component';
import { HomeDetailsPage } from '../pages/home-details/home-details.component';
import { LoginPage } from '../pages/login/login.component';
import { SessionsPage } from '../pages/sessions/sessions.component';
import { HomeDetailsContentPage } from '../pages/home-details-content/home-details-content.component';
import { ListPage } from '../pages/list/list';
import { LogoutComponent } from '../pages/logout/logout.component';
import { SettingsPage } from '../pages/settings/settings.component';

import { HomeSortPipe } from '../pages/home/home-sort.pipe';

import { HomeService } from '../pages/home/home.service';
import { LoginService } from '../pages/login/login.service';
import { HomeDetailsService } from '../pages/home-details/home-details.service';
import { SessionsService } from '../pages/sessions/sessions.service';
import { HomeDetailsContentService } from '../pages/home-details-content/home-details-content.service';
import { SettingsService } from '../pages/settings/settings.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeDetailsPage,
    HomeDetailsContentPage,
    ListPage,
    HomeSortPipe,
    LoginPage,
    SessionsPage,
    LogoutComponent,
    SettingsPage    
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
    HomeDetailsContentPage,
    LoginPage,
    ListPage,
    SessionsPage,
    LogoutComponent,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HomeService,
    LoginService,
    HomeDetailsService,
    SessionsService,
    HomeDetailsContentService,
    SettingsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
