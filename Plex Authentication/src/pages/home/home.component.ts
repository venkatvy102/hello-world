import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, ModalController } from 'ionic-angular';
import { HomeService } from './home.service';
import { HTTP } from '@ionic-native/http';
import { IHome } from './home';
import { HomeDetailsPage } from '../home-details/home-details.component';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login.component';
import { IToken } from '../login/token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {

  searchString: string;
  output: string;
  searchResults: IHome[];
  loginToken: IToken;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public _homeService: HomeService, private http: HTTP, public modalCtrl: ModalController, private storage: Storage) {

  }

  ionViewDidLoad() {
    this.storage.get('login_auth_token').then((val) => {
      console.log('Your token: ', val);
      this.loginToken = val;
      if(val == null) {
        this.showLogin();
      }
    });
  }

  showLogin() {
    console.log('Creating login page');
    let login = this.modalCtrl.create(LoginPage);      
    login.present();
  }

  findMovies() {
    if(!this.searchString) {
        let alert = this.alertCtrl.create({
          title: 'Empty Search!',
          subTitle: 'Search field cannot be empty! Please try again.',
          buttons: ['OK']
        });
        alert.present();
    }
    else {
        let loader = this.loadingCtrl.create({
          content: "Finding Movies..."
        });
        loader.present();

        this._homeService.getMovies(this.searchString).subscribe(users => {
          console.log(users);
          this.searchResults = users;
        });
        
        setTimeout(() => {
            loader.dismiss();
          }, 10);
    }
  }

  cardClicked(index:number) {
    console.log('card clicked' + index);
      // let alert = this.alertCtrl.create({
      //   title: 'Clicked!',
      //   subTitle: 'You clicked on item id: ' + index,
      //   buttons: ['OK']
      // });
      // alert.present();

    let homeContent = this.searchResults.filter(home => home.id === index)[0];

        this.navCtrl.push(HomeDetailsPage, { detailContent: homeContent });

  }

  logout() {
    this.storage.remove('login_auth_token');
    this.storage.remove('login_username');
    this.storage.remove('login_password');
    this.showLogin();
  }
}
