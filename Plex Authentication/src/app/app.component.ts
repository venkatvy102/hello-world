import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from '@ionic-native/http';

import { HomeService } from '../pages/home/home.service';


import { HomePage } from '../pages/home/home.component';
import { HomeDetailsPage } from '../pages/home-details/home-details.component';
import { ListPage } from '../pages/list/list';
import { SessionsPage } from '../pages/sessions/sessions.component';
import { SettingsPage } from '../pages/settings/settings.component';
import { StatusPage } from '../pages/status/status.component';

@Component({
  templateUrl: 'app.html',
  providers: [ HomeService, HTTP ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },

      { title: 'Active Sessions', component: SessionsPage },
      
      { title: 'Settings', component: SettingsPage },

      { title: 'Status', component: StatusPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
