import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { IVideo, IMedia, IParts, IUser } from './video';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class SessionsService {

    //private _authUrl: string = 'http://localhost:16538/api/plex/activesessions';
    private _authUrl: string = 'https://www.venkatpasumarthi.com/api/api/plex/activesessions';

    constructor(private _http: Http){

    }

    getActiveSessions(userName: string, password: string, access_token: string): Observable<IVideo[]> {

        let urlParam = new URLSearchParams();
        urlParam.append("username", userName);
        urlParam.append("password", password);
        
        let headerParam = new Headers();
        headerParam.append("Content-Type","application/x-www-form-urlencoded");
        headerParam.append("Authorization", "Bearer " + access_token);

        let requestOptions = new RequestOptions({headers: headerParam});

        console.log(urlParam);

        return this._http.get(this._authUrl + "?" + urlParam.toString(), requestOptions)
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .map((response: Response) => <IVideo[]>response.json())
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}