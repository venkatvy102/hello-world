import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, Pipe, PipeTransform } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage'
import { Vibration } from '@ionic-native/vibration';
import { TouchID } from '@ionic-native/touch-id';
import { MyApp } from './app.component';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

import { HomePage } from '../pages/home/home.component';
import { HomeDetailsPage } from '../pages/home-details/home-details.component';
import { LoginPage } from '../pages/login/login.component';
import { SessionsPage } from '../pages/sessions/sessions.component';
import { HomeDetailsContentPage } from '../pages/home-details-content/home-details-content.component';
import { ListPage } from '../pages/list/list';
import { LogoutComponent } from '../pages/logout/logout.component';
import { SettingsPage } from '../pages/settings/settings.component';
import { StatusPage } from '../pages/status/status.component';

import { HomeSortPipe } from '../pages/home/home-sort.pipe';

import { HomeService } from '../pages/home/home.service';
import { LoginService } from '../pages/login/login.service';
import { HomeDetailsService } from '../pages/home-details/home-details.service';
import { SessionsService } from '../pages/sessions/sessions.service';
import { HomeDetailsContentService } from '../pages/home-details-content/home-details-content.service';
import { SettingsService } from '../pages/settings/settings.service';
import { StatusService } from '../pages/status/status.service';

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
    SettingsPage,
    StatusPage    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          statusbarPadding: true
        }
      }
    }),
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
    SettingsPage,
    StatusPage
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
    Vibration,
    TouchID,
    ThreeDeeTouch, 
    StatusService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
