import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.component';

@Component({
    selector: 'logout',
    templateUrl: 'logout.component.html'
})
export class LogoutComponent implements OnInit {
    
    @Output() logoutClicked: EventEmitter<string> = new EventEmitter<string>();

    constructor(public modalCtrl: ModalController, private storage: Storage) {

    }

    ngOnInit() {
        console.log('view did loaded');
        this.storage.get('login_auth_token').then((val) => {
            console.log('Your token: ', val);
            if(val == null) {
                this.showLogin();
            }
        });
    }

    onClick(): void {
        this.storage.remove('login_auth_token');
        this.storage.remove('login_username');
        this.storage.remove('login_password');
        this.showLogin();

        this.logoutClicked.emit("Logged out successfully");
    }

    showLogin() {
        console.log('Creating login page');
        let login = this.modalCtrl.create(LoginPage);      
        login.present();
    }
}