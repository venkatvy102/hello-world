import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { IToken } from '../../pages/login/token';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HomeDetailsContentService {

    //private _authUrl: string = 'http://localhost:16538/api/plex/addtoplex';
    private _authUrl: string = 'https://www.venkatpasumarthi.com/api/api/plex/addtoplex';

    constructor(private _http: Http){

    }

    addToPlex(movieName: string, quality: string, tmdbId: string, access_token: string, releaseDate: string, language: string): Observable<boolean> {

        let urlParam = new URLSearchParams();
        urlParam.append("movieName", movieName);
        urlParam.append("quality", quality);
        urlParam.append("tmdbId", tmdbId);
        urlParam.append("releaseDate", releaseDate);
        urlParam.append("language", language);

        let headerParam = new Headers();
        headerParam.append("Content-Type","application/x-www-form-urlencoded");
        headerParam.append("Authorization", "Bearer " + access_token);

        let requestOptions = new RequestOptions({headers: headerParam});

        console.log(urlParam);

        return this._http.post(this._authUrl + "?" + urlParam.toString(), "", requestOptions)
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .map((response: Response) => <boolean>response.json())
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}