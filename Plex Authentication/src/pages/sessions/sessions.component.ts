import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IHome } from '../home/home';
import { SessionsService } from './sessions.service';
import { Storage } from '@ionic/storage';
import { IVideo, IMedia, IParts, IUser } from './video';
import { IToken } from '../login/token';

@Component({
  selector: 'sessions',
  templateUrl: 'sessions.component.html',
})
export class SessionsPage {

  detailsHeading: IHome;
  userName: string;
  password: string;
  token: IToken;
  videos: IVideo[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public sessionsService: SessionsService, private storage: Storage) {
      this.storage.get('login_username').then((val) => {
        console.log("Sessions: " + val)
        this.userName = val;
    });
    this.storage.get('login_password').then((val) => {
        console.log("Sessions: " + val)
        this.password = val;
    });
    this.storage.get('login_auth_token').then((val) => {
        console.log("Sessions: " + val)
        this.token = val;
        this.sessionsService.getActiveSessions(this.userName, this.password, this.token.access_token).subscribe(returnVal => {
            console.log(returnVal);
            this.videos = returnVal;
        });
    });
  }

  
  doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        this.sessionsService.getActiveSessions(this.userName, this.password, this.token.access_token).subscribe(returnVal => {
            console.log(returnVal);
            this.videos = returnVal;
            refresher.complete();
            console.log('Async operation has ended');
        });
    }
}
