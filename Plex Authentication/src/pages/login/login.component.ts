import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

import { Storage } from '@ionic/storage';
import { LoginService } from './login.service';
import { IToken } from './token';
import { TouchID } from '@ionic-native/touch-id';
import { SessionsPage } from '../sessions/sessions.component';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginPage {
    userName: string;
    password: string;
    tokenInfo: IToken;
    
    constructor(private threeDeeTouch: ThreeDeeTouch, private touchId: TouchID, public _loginService: LoginService,public navCtrl: NavController, public navParams:NavParams, public alertCtrl: AlertController, public modalCtrl: ModalController, private storage: Storage, public viewCtrl: ViewController) {
        
        this.storage.get('login_auth_token').then((val) => {
            this.tokenInfo = val;
        });

        this.storage.get('login_username').then((val) => {
            console.log("Sessions: " + val)
            this.userName = val;
        });

        this.storage.get('login_password').then((val) => {
            console.log("Sessions: " + val)
            this.password = val;

            if(this.userName && this.password) {
                this.touchId.isAvailable()
                .then(
                    res => {
                        console.log('TouchID is available!');
                        this.touchId.verifyFingerprint('Scan your fingerprint please')
                        .then(
                            res => this.verifyAuth(),
                            err => console.error('Error', err)
                        );
                    },
                    err => console.error('TouchID is not available', err)
                );
            }
        });        
    }

    verifyAuth() {
        if(this.userName && this.password) {
            this._loginService.getAuthentication(this.userName, this.password).subscribe(tokenize => {
                console.log(tokenize);
                this.tokenInfo = tokenize;
                this.storage.set('login_auth_token', tokenize);
                this.storage.set('login_username', this.userName);
                this.storage.set('login_password', this.password);
                this.viewCtrl.dismiss();

                this.threeDeeTouch.isAvailable().then(isAvailable => 
                {
                    this.threeDeeTouch.configureQuickActions([{type: 'viewActiveSessions', title: 'View Active Sessions', subtitle: '', iconType: 'play'}])

                    // Set event handler to check which Quick Action was pressed
                    this.threeDeeTouch.onHomeIconPressed().subscribe(
                        (payload) =>
                            {
                                if (payload.type == 'viewActiveSessions') {
                                    this.navCtrl.setRoot(SessionsPage, {}, {animate: true, direction: 'forward'});
                                }
                            }
                    );
                });
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

    removeUserCache() {
        this.storage.remove('login_username');
        this.storage.remove('login_password');
    }
}