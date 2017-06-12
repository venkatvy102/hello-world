import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

import { HTTP } from '@ionic-native/http';

import { HomeService } from '../pages/home/home.service';


import { HomePage } from '../pages/home/home.component';
import { HomeDetailsPage } from '../pages/home-details/home-details.component';
import { ListPage } from '../pages/list/list';
import { SessionsPage } from '../pages/sessions/sessions.component';
import { SettingsPage } from '../pages/settings/settings.component';

@Component({
  templateUrl: 'app.html',
  providers: [ HomeService, HTTP ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(private threeDeeTouch: ThreeDeeTouch, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },

      { title: 'Active Sessions', component: SessionsPage },
      
      { title: 'Settings', component: SettingsPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    
      this.threeDeeTouch.isAvailable().then(isAvailable => 
      {
          this.threeDeeTouch.configureQuickActions([{type: 'viewActiveSessions', title: 'View Active Sessions', subtitle: '', iconType: 'play'}])

          // Set event handler to check which Quick Action was pressed
          this.threeDeeTouch.onHomeIconPressed().subscribe(
              (payload) =>
                  {
                      if (payload.type == 'viewActiveSessions') {
                          this.rootPage = SessionsPage;
                      }
                  }
          );
      });

      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
