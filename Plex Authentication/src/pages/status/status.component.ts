import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController, Events } from 'ionic-angular';
import { HomeService } from './home.service';
import { HTTP } from '@ionic-native/http';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.component';
import { IStatus } from '../status/status';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';

@Component({
  selector: 'page-status',
  templateUrl: 'status.component.html'
})
export class StatusPage {

  downloadContent: IStatus[];

  constructor(public events: Events, private threeDeeTouch: ThreeDeeTouch, public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private http: HTTP, public modalCtrl: ModalController, private storage: Storage) {
    let downloadContent1: IStatus = {
      original_title: "Baahubali",
      id: 12345,
      overview: "This is the first part",
      popularity: 4,
      poster_path: "http://www.gulte.com/content/2015/04/news/1429162142-1364.jpg",
      release_date: "06/15/2017",
      vote_average: 4,
      is_added: true,
      is_downloaded: false,
      is_synced: false
    }

    let downloadContent2: IStatus = {
      original_title: "Baahubali 2",
      id: 1235,
      overview: "This is the second part",
      popularity: 5,
      poster_path: "https://www.desiretrees.in/wp-content/uploads/2017/02/Bahubali-Part-2-Baahubali-2-First-Look-Poster-Bahubali-The-Conclusion-HD-Images-Pics-Wallpapers-Shooting-Stills-1.jpg",
      release_date: "06/15/2018",
      vote_average: 5,
      is_added: true,
      is_downloaded: true,
      is_synced: false
    }

    this.downloadContent = [downloadContent1, downloadContent2];
    console.log('added');
  }

}
