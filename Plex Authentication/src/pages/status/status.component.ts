import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController, Events } from 'ionic-angular';
import { HomeService } from './home.service';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.component';
import { IToken } from '../login/token';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

@Component({
  selector: 'page-status',
  templateUrl: 'status.component.html'
})
export class StatusPage { 
  constructor(public events: Events, private threeDeeTouch: ThreeDeeTouch, public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HTTP, public modalCtrl: ModalController, private storage: Storage) {
  }

}
