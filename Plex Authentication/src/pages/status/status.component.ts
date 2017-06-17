import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController, Events } from 'ionic-angular';
import { HomeService } from './home.service';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.component';
import { IStatus } from '../status/status';
import { IToken } from '../login/token';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';
import { StatusService } from './status.service';

@Component({
  selector: 'page-status',
  templateUrl: 'status.component.html'
})
export class StatusPage {

  downloadContent: IStatus[];
  username: string;
  token: IToken;

  constructor(private statusService: StatusService, private storage: Storage, private loadingCtrl: LoadingController) {
        let loader = this.loadingCtrl.create({
          content: "Retrieving Queue..."
        });
        loader.present();

        this.storage.get('login_username').then((val) => {
            this.username = val.toString();
        });
        this.storage.get('login_auth_token').then((val) => {
            this.token = val;        
            this.statusService.getDownloadContent(this.username, this.token).subscribe(response => {
              this.downloadContent = response;
              console.log(response);
              loader.dismiss();
            })
        });
  }

}
