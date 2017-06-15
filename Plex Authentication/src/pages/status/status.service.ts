import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IHome } from '../../pages/home/home';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeService {
    
    private _searchUrl: string = 'https://api.themoviedb.org/3/search/movie?api_key=2e190fc3d20721e08fb65157f3bfdad6&language=en-US&page=1&include_adult=false&query=';

    constructor(private _http: Http){

    }

    getMovies(searchKey: string): Observable<IHome[]> {
        return this._http.get(this._searchUrl + searchKey)
        .map((response: Response) => <IHome[]>response.json().results)
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}