import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IHome } from '../home/home';
import { HomeDetailsService } from './home-details.service';
import { Storage } from '@ionic/storage';
import { IToken } from '../login/token';

@Component({
  selector: 'home-details',
  templateUrl: 'home-details.component.html',
})
export class HomeDetailsPage {

  detailsHeading: IHome;
  quality: string;
  token: IToken;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public homeDetailsService: HomeDetailsService, private storage: Storage) {
      let id = navParams.get('id');
      this.detailsHeading = navParams.get('detailContent');
  }

  
  ionViewDidLoad() {
    this.storage.get('login_auth_token').then((val) => {
      console.log('Your token: ', val);
      this.token = val;
      if(val == null) {
        console.log('Something wrong. Token is null');
      }
    });
  }


  addToPlex() {
    if(this.quality){
      console.log(this.quality);        

      this.storage.get('login_auth_token').then((val) => {
          console.log('Your token: ', val);
          this.token = val;
      });

      this.homeDetailsService.addToPlex(this.detailsHeading.original_title, this.quality, this.detailsHeading.id.toString(),
      this.token.access_token).subscribe(returnval => {
          if(returnval == true) {
            let alert = this.alertCtrl.create({
              title: 'Added Successfully!',
              subTitle: 'Selected movie has been added to plex.',
              buttons: ['OK']
            });
            alert.present();
          }
          else {
            let alert = this.alertCtrl.create({
              title: 'Failed!',
              subTitle: 'Something wrong happened while trying to add selected movie to plex. Please contact administrator!',
              buttons: ['OK']
            });
            alert.present();
          }
      });;
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
