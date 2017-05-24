import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginService } from './login.service';
import { IToken } from './token';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginPage {
    userName: string;
    password: string;
    tokenInfo: IToken;
    
    constructor(public _loginService: LoginService,public navCtrl: NavController, public navParams:NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, private storage: Storage, public viewCtrl: ViewController) {

    }

    verifyAuth() {
        if(this.userName && this.password) {
            this._loginService.getAuthentication(this.userName, this.password).subscribe(tokenize => {
                console.log(tokenize);
                this.tokenInfo = tokenize;
                this.storage.set('login_auth_token', tokenize);
                this.viewCtrl.dismiss();
            });
        }
        else if(!this.userName) {
            let alert = this.alertCtrl.create({
                title: 'Empty User Name!',
                subTitle: 'User Name cannot be empty! Please try again.',
                buttons: ['OK']
            });
            alert.present();
        }
        else if(!this.password) {
            let alert = this.alertCtrl.create({
                title: 'Empty Password!',
                subTitle: 'Password cannot be empty! Please try again.',
                buttons: ['OK']
            });
            alert.present();
        }
    }
}