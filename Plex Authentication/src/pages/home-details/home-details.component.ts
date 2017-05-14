import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IHome } from '../home/home';


@Component({
  selector: 'home-details',
  templateUrl: 'home-details.component.html',
})
export class HomeDetailsPage {

  detailsHeading: IHome;
  quality: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
      let id = navParams.get('id');
      this.detailsHeading = navParams.get('detailContent');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeDetailsComponent');
  }

  addToPlex() {
    if(this.quality){
      console.log(this.quality);
    }
    else {
        let alert = this.alertCtrl.create({
          title: 'Select Quality!',
          subTitle: 'Please select quality before clicking on "Add To Plex"!',
          buttons: ['OK']
        });
        alert.present();
    }
  }
}
