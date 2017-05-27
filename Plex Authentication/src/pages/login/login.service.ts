import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, RequestMethod, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IToken } from '../../pages/login/token';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    //private _authUrl: string = 'http://localhost:16538/token';
    private _authUrl: string = 'https://www.venkatpasumarthi.com/api/token';

    constructor(private _http: Http){

    }

    getAuthentication(username: string, password: string): Observable<IToken> {

        let bodyParam = new URLSearchParams();
        bodyParam.append("username", username);
        bodyParam.append("password", password);
        bodyParam.append("grant_type", "password");

        let headerParam = new Headers();
        headerParam.append("Content-Type","application/x-www-form-urlencoded");

        let requestOptions = new RequestOptions({headers: headerParam});

        console.log(bodyParam);

        return this._http.post(this._authUrl, bodyParam.toString(), requestOptions)
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .map((response: Response) => <IToken>response.json())
        //.do(data => console.log('All:' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(error: Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}