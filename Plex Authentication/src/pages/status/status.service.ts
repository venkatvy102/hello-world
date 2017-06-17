import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IStatus } from '../../pages/status/status';
import { IHome } from '../../pages/home/home';
import { IToken } from '../../pages/login/token';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class StatusService {
    
    //private _authUrl: string = 'http://localhost:16538/api/plex/downloadqueue';
    private _authUrl: string = 'https://www.venkatpasumarthi.com/api/api/plex/downloadqueue';

    constructor(private _http: Http, private storage: Storage){

    }

    getDownloadContent(username: string, token: IToken): Observable<IStatus[]> {
        let bodyParam = new URLSearchParams();
        bodyParam.append("username", username);

        let headerParam = new Headers();
        headerParam.append("Content-Type","application/x-www-form-urlencoded");
        headerParam.append("Authorization", "Bearer " + token.access_token);

        let requestOptions = new RequestOptions({headers: headerParam});

        return this._http.get(this._authUrl + '?' + bodyParam.toString(), requestOptions)
        .map((response: Response) => {
            console.log(response);
            return <IStatus[]>response.json()})
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}