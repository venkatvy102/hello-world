import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Haptic } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IHome } from '../home/home';
import { SettingsService } from './settings.service';
import { Storage } from '@ionic/storage';
import { IToken } from '../login/token';
import { IPlexAutomationSettings } from '../settings/plexautomationsettings';


@Component({
  selector: 'settings',
  templateUrl: 'settings.component.html',
})
export class SettingsPage {

  settings: IPlexAutomationSettings = { EmailNotifications: false, PushNotifications: false};
  userName: string;
  token: IToken;
  
  constructor(public settingsService: SettingsService, public navCtrl: NavController, public navParams: NavParams, 
  public alertCtrl: AlertController, private storage: Storage, private haptic:Haptic) {
        this.storage.get('login_username').then((val) => {
            console.log("Sessions: " + val)
            this.userName = val;
        });
        this.storage.get('login_auth_token').then((val) => {
            console.log("Sessions: " + val)
            this.token = val;
             this.settingsService.getUserSettings(this.userName, this.token.access_token).subscribe(returnVal => {
                console.log(returnVal);
                this.settings = returnVal;
                this.settings.EmailNotifications;
            });
        });
  }
  
  doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        this.settingsService.getUserSettings(this.userName, this.token.access_token).subscribe(returnVal => {
            console.log(returnVal);
            this.settings = returnVal;
            refresher.complete();
        });
    }
    
    updateUserSettings(): void {
        if(this.haptic.available()) {
            this.haptic.selection();
        }

        this.settingsService.updateUserSettings(this.userName, this.token.access_token, this.settings).subscribe(returnVal => {
            console.log(returnVal);           
        });
    }
}
