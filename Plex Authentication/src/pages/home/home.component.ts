import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { HomeService } from './home.service';
import { HTTP } from '@ionic-native/http';
import { IHome } from './Home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.component.html'
})
export class HomePage {

  searchString: string;
  output: string;
  searchResults: IHome[];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public _homeService: HomeService, private http: HTTP) {

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
          console.log(this.searchResults);
        });
        
        setTimeout(() => {
            loader.dismiss();
          }, 10);
    }
  }

  cardClicked(index:number) {
    console.log('card clicked' + index);
      let alert = this.alertCtrl.create({
          title: 'Clicked!',
          subTitle: 'You clicked on item id: ' + index,
          buttons: ['OK']
        });
        alert.present();
  }
}
